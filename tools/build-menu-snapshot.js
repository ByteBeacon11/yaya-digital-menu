#!/usr/bin/env node
/**
 * Builds the static menu snapshot used for the first paint on the customer page.
 *
 *   npm run snapshot
 *
 * - Reads the public Firestore data (menu items, images, ratings, restaurant info).
 * - Optimizes every item photo into a small WebP file under images/menu/.
 * - Writes data/menu.json so the menu can render without waiting for Firebase.
 *
 * Run this after changing menu items or photos in the admin panel, then deploy.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const dns = require('dns');
const sharp = require('sharp');

// Some image CDNs resolve to IPv6 first on machines without working IPv6.
dns.setDefaultResultOrder('ipv4first');

const PROJECT_ID = 'yayas-house-menu';
const FS_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const ROOT = path.resolve(__dirname, '..');
const MENU_IMAGE_DIR = path.join(ROOT, 'images', 'menu');
const DATA_DIR = path.join(ROOT, 'data');
const IMAGE_WIDTH = 1200;
const IMAGE_QUALITY = 78;
// Wikimedia thumbnails are usually stored at 960px, which is not enough for a
// full-width card on a 3x phone. Their thumbnail service can generate larger
// copies on demand.
const WIKIMEDIA_UPGRADE_WIDTH = 1280;

function fromFsValue(value) {
  if (!value || typeof value !== 'object') return null;
  if ('stringValue' in value) return value.stringValue;
  if ('integerValue' in value) return Number(value.integerValue);
  if ('doubleValue' in value) return Number(value.doubleValue);
  if ('booleanValue' in value) return value.booleanValue;
  if ('timestampValue' in value) return value.timestampValue;
  if ('nullValue' in value) return null;
  if ('arrayValue' in value) {
    return (value.arrayValue.values || []).map(fromFsValue);
  }
  if ('mapValue' in value) {
    return fromFsFields(value.mapValue.fields || {});
  }
  if ('referenceValue' in value) return value.referenceValue;
  return null;
}

function fromFsFields(fields) {
  const out = {};
  Object.entries(fields || {}).forEach(([key, value]) => {
    out[key] = fromFsValue(value);
  });
  return out;
}

function docId(doc) {
  return doc.name.split('/').pop();
}

async function listCollection(name) {
  const docs = [];
  let pageToken = '';
  do {
    const url = `${FS_BASE}/${name}?pageSize=300${pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Firestore ${name}: HTTP ${res.status} ${await res.text()}`);
    const json = await res.json();
    docs.push(...(json.documents || []));
    pageToken = json.nextPageToken || '';
  } while (pageToken);
  return docs.map(doc => ({ id: docId(doc), ...fromFsFields(doc.fields) }));
}

async function getDoc(collection, id) {
  const res = await fetch(`${FS_BASE}/${collection}/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore ${collection}/${id}: HTTP ${res.status}`);
  const json = await res.json();
  return { id, ...fromFsFields(json.fields) };
}

function largerImageCandidates(source) {
  if (!/^https?:\/\/(?:[a-z0-9-]+\.)?wikimedia\.org\//i.test(source)) return [];
  const match = source.match(/\/(\d+)px-([^/]+)$/);
  if (!match) return [];
  const width = Number(match[1]);
  if (!width || width >= WIKIMEDIA_UPGRADE_WIDTH) return [];
  return [source.replace(/\/\d+px-/, `/${WIKIMEDIA_UPGRADE_WIDTH}px-`)];
}

async function fetchImageBuffer(source, label) {
  if (source.startsWith('data:')) {
    const match = source.match(/^data:([^;,]+)?(;base64)?,(.*)$/s);
    if (!match) throw new Error('Unsupported data URL');
    if (match[2]) return Buffer.from(match[3], 'base64');
    return Buffer.from(decodeURIComponent(match[3]));
  }

  if (!/^https?:\/\//i.test(source)) throw new Error('Unsupported image source');

  const urls = [...largerImageCandidates(source), source];
  let lastError = null;

  for (const url of urls) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 20000);
      try {
        const res = await fetch(url, {
          signal: controller.signal,
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; YayaMenuSnapshot/1.0)' }
        });
        if (!res.ok) throw new Error(`Image HTTP ${res.status}`);
        const type = res.headers.get('content-type') || '';
        if (type && !type.startsWith('image/')) throw new Error(`Not an image (${type})`);
        return Buffer.from(await res.arrayBuffer());
      } catch (err) {
        lastError = err;
        if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 500));
      } finally {
        clearTimeout(timer);
      }
    }
  }
  throw lastError || new Error('Image download failed');
}

async function optimizeImage(source, id, label) {
  const input = await fetchImageBuffer(source, label);
  const output = await sharp(input)
    .rotate()
    .resize({ width: IMAGE_WIDTH, withoutEnlargement: true })
    .webp({ quality: IMAGE_QUALITY, effort: 5 })
    .toBuffer();

  const hash = crypto.createHash('sha256').update(output).digest('hex').slice(0, 8);
  const filename = `${id}-${hash}.webp`;
  fs.writeFileSync(path.join(MENU_IMAGE_DIR, filename), output);
  return { filename, bytes: output.length, originalBytes: input.length };
}

async function mapLimit(list, limit, worker) {
  const results = new Array(list.length);
  let next = 0;
  async function run() {
    while (next < list.length) {
      const index = next++;
      results[index] = await worker(list[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, list.length) }, run));
  return results;
}

async function buildHeaderImages() {
  const source = path.join(ROOT, 'assets-src', 'header.png');
  if (!fs.existsSync(source)) {
    console.warn('Header source image missing, skipping header optimization.');
    return;
  }

  const variants = [
    { file: 'header.webp', width: 1500, quality: 66 },
    { file: 'header-mobile.webp', width: 820, quality: 62 }
  ];

  for (const variant of variants) {
    const output = await sharp(source)
      .resize({ width: variant.width, withoutEnlargement: true })
      .webp({ quality: variant.quality, effort: 5 })
      .toBuffer();
    fs.writeFileSync(path.join(ROOT, 'images', variant.file), output);
    console.log(`Header: images/${variant.file} ${(output.length / 1024).toFixed(1)} KB`);
  }
}

async function build() {
  fs.mkdirSync(MENU_IMAGE_DIR, { recursive: true });
  fs.mkdirSync(DATA_DIR, { recursive: true });
  // Old content-hashed files are intentionally kept: pages that cached the
  // previous snapshot can still load them, and unchanged photos keep the
  // same hash so nothing accumulates unnecessarily.
  await buildHeaderImages();

  const [items, images, ratings, restaurant] = await Promise.all([
    listCollection('menuItems'),
    listCollection('menuImages'),
    listCollection('ratings'),
    getDoc('restaurant', 'info').catch(() => null)
  ]);

  const imageById = new Map(images.map(doc => [Number(doc.id), doc]));
  const ratingById = new Map(ratings.map(doc => [Number(doc.id), doc]));
  const stats = { converted: 0, linked: 0, skipped: 0, bytesBefore: 0, bytesAfter: 0 };

  const menu = await mapLimit(items, 6, async item => {
    const out = { ...item };
    out.id = Number(item.id);
    out.price = Number(item.price);
    out.active = item.active !== false;
    out.ingredients = Array.isArray(item.ingredients) ? item.ingredients : [];

    const imageDoc = imageById.get(out.id);
    const source = imageDoc && imageDoc.image ? imageDoc.image : item.image;
    const version = imageDoc && imageDoc.updatedAt
      ? Number(imageDoc.updatedAt)
      : Number(item.imageUpdatedAt || 0);

    delete out.image;
    if (source) {
      try {
        const optimized = await optimizeImage(source, out.id, item.name || out.id);
        out.image = `images/menu/${optimized.filename}`;
        out.imageVersion = version;
        out.hasImage = true;
        stats.converted++;
        stats.bytesBefore += optimized.originalBytes;
        stats.bytesAfter += optimized.bytes;
      } catch (err) {
        // If a third-party image cannot be downloaded, keep the link so the
        // browser can still try it. Data URLs fall back to a lazy Firestore read.
        if (/^https?:\/\//i.test(source)) {
          out.image = source;
          out.imageVersion = version;
          out.hasImage = true;
          stats.linked++;
        } else {
          out.hasImage = out.hasImage === true;
          stats.skipped++;
        }
        console.warn(`  ! ${item.name || out.id}: ${err.message}`);
      }
    } else {
      out.hasImage = out.hasImage === true;
    }

    const rating = ratingById.get(out.id);
    if (rating) {
      out.ratingTotal = Number(rating.total) || 0;
      out.ratingCount = Number(rating.count) || 0;
    }

    return out;
  });

  menu.sort((a, b) => a.id - b.id);

  const snapshot = {
    generatedAt: new Date().toISOString(),
    projectId: PROJECT_ID,
    restaurant: restaurant || null,
    items: menu
  };

  fs.writeFileSync(
    path.join(DATA_DIR, 'menu.json'),
    JSON.stringify(snapshot, null, 2) + '\n'
  );

  const snapshotBytes = fs.statSync(path.join(DATA_DIR, 'menu.json')).size;
  console.log(`Menu snapshot: ${menu.length} items, ${(snapshotBytes / 1024).toFixed(1)} KB`);
  console.log(`Images: ${stats.converted} optimized, ${stats.linked} linked, ${stats.skipped} skipped`);
  console.log(`Image bytes: ${(stats.bytesBefore / 1024 / 1024).toFixed(2)} MB -> ${(stats.bytesAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Wrote data/menu.json and ${stats.converted} files in images/menu/`);
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
