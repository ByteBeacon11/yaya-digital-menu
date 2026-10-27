# Yaya's House Digital Menu

Static customer menu (`index.html`) plus the staff admin panel (`admin.html`), hosted on
Firebase Hosting with Firestore as the live database.

## How the customer page loads

The page paints from a pre-built snapshot instead of waiting for Firestore:

- `data/menu.json` – menu items, prices, restaurant info, and rating totals.
- `images/menu/*.webp` – optimized, content-hashed item photos (cached for a year).
- `images/header.webp` / `images/header-mobile.webp` – optimized header images.

The snapshot is rendered immediately (and cached in `localStorage` for repeat visits), then
menu items, ratings, and restaurant details are refreshed from Firestore in the background.
Only photos visible near the screen are downloaded. Photos changed in the admin panel are
loaded on demand through the item's `imageUpdatedAt` value, so they appear without a redeploy.

## Updating the menu

Edit items and photos in the admin panel as usual. Once the site should show those changes in
the static snapshot too, rebuild and deploy:

```sh
npm install          # first time only
npm run snapshot     # regenerates data/menu.json and images/menu/*.webp
firebase deploy --only hosting
```

`npm run snapshot` reads the public Firestore data, compresses every item photo into WebP
(680 px wide), and rebuilds the header images from `assets-src/header.png`.

## Notes

- Do not delete `data/menu.json` or `images/menu/` from a deployment.
- `assets-src/`, `tools/`, and `node_modules/` are excluded from hosting by `firebase.json`.
- Response headers (security and caching) live in the `hosting.headers` section of
  `firebase.json`, because Firebase Hosting does not read the `_headers` file.
