const DB_CONFIG_KEY = 'yayaDbConfig';

const DEFAULT_DB_CONFIG = {
  apiKey: 'AIzaSyDiRjYfDjuJZcCatfUdoiIPXHjYwPlU3pA',
  authDomain: 'yayas-house-menu.firebaseapp.com',
  projectId: 'yayas-house-menu',
  storageBucket: 'yayas-house-menu.firebasestorage.app',
  messagingSenderId: '449975900157',
  appId: '1:449975900157:web:a96434136495fcaa1bab94'
};

function getDbConfig() {
  const stored = localStorage.getItem(DB_CONFIG_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return DEFAULT_DB_CONFIG;
}

function saveDbConfig(config) {
  localStorage.setItem(DB_CONFIG_KEY, JSON.stringify(config));
}

let firebaseApp = null;
let firestoreDb = null;
let authInstance = null;
let authInitialized = false;

function isFirebaseConfigured() {
  return !!getDbConfig();
}

async function initFirebase() {
  const config = getDbConfig();
  if (!config || !config.apiKey) return false;

  try {
    if (!window._firebaseApp) {
      const appModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js');
      const firestoreModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js');
      const authModule = await import('https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js');

      window._firebaseApp = appModule;
      window._firebaseFirestore = firestoreModule;
      window._firebaseAuth = authModule;
    }

    const { initializeApp } = window._firebaseApp;
    const { getFirestore } = window._firebaseFirestore;
    const { getAuth } = window._firebaseAuth;

    if (!firebaseApp) {
      firebaseApp = initializeApp({
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId
      });
      firestoreDb = getFirestore(firebaseApp);
      authInstance = getAuth(firebaseApp);
      authInitialized = true;
    }

    return true;
  } catch (e) {
    console.error('Firebase init error:', e);
    return false;
  }
}

async function testFirebaseConnection() {
  try {
    const ok = await initFirebase();
    if (!ok) return { success: false, error: 'Failed to initialize Firebase' };

    const { collection, getDocs, limit: limitFn } = window._firebaseFirestore;
    const testRef = collection(firestoreDb, 'menuItems');
    await getDocs(testRef, limitFn(1));
    return { success: true };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

async function fbSignUp(email, password) {
  await initFirebase();
  const { createUserWithEmailAndPassword } = window._firebaseAuth;
  const cred = await createUserWithEmailAndPassword(authInstance, email, password);
  return cred.user;
}

async function fbSignIn(email, password) {
  await initFirebase();
  const { signInWithEmailAndPassword } = window._firebaseAuth;
  const cred = await signInWithEmailAndPassword(authInstance, email, password);
  return cred.user;
}

async function fbSignOut() {
  if (!authInstance) return;
  const { signOut } = window._firebaseAuth;
  await signOut(authInstance);
}

function getCurrentUser() {
  return authInstance && authInstance.currentUser;
}

function onAuthChanged(callback) {
  if (!authInitialized) {
    initFirebase().then(() => {
      const { onAuthStateChanged } = window._firebaseAuth;
      onAuthStateChanged(authInstance, callback);
    });
    return;
  }
  const { onAuthStateChanged } = window._firebaseAuth;
  onAuthStateChanged(authInstance, callback);
}

async function fbLoadCollection(collectionName) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return null;
  }
  try {
    const { collection, getDocs, orderBy, query } = window._firebaseFirestore;
    const hasId = collectionName === 'menuItems';
    const q = hasId
      ? query(collection(firestoreDb, collectionName), orderBy('id', 'asc'))
      : query(collection(firestoreDb, collectionName));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ _id: d.id, ...d.data() }));
  } catch (e) {
    console.error(`FB load ${collectionName}:`, e);
    return null;
  }
}

async function fbSaveCollection(collectionName, items) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return false;
  }
  try {
    const { collection, doc, writeBatch } = window._firebaseFirestore;
    const batch = writeBatch(firestoreDb);
    const colRef = collection(firestoreDb, collectionName);

    items.forEach(item => {
      const d = doc(colRef, String(item.id));
      batch.set(d, item);
    });

    await batch.commit();
    return true;
  } catch (e) {
    console.error(`FB save ${collectionName}:`, e);
    return false;
  }
}

async function fbDeleteCollection(collectionName, ids) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return false;
  }
  try {
    const { collection, doc, writeBatch } = window._firebaseFirestore;
    const batch = writeBatch(firestoreDb);
    const colRef = collection(firestoreDb, collectionName);

    ids.forEach(id => {
      const d = doc(colRef, String(id));
      batch.delete(d);
    });

    await batch.commit();
    return true;
  } catch (e) {
    console.error(`FB delete ${collectionName}:`, e);
    return false;
  }
}

async function fbSaveDoc(collectionName, id, data) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return false;
  }
  try {
    const { collection, doc, setDoc } = window._firebaseFirestore;
    await setDoc(doc(collection(firestoreDb, collectionName), String(id)), data);
    return true;
  } catch (e) {
    console.error(`FB save doc:`, e);
    return false;
  }
}

async function fbGetDoc(collectionName, id) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return null;
  }
  try {
    const { collection, doc, getDoc } = window._firebaseFirestore;
    const snap = await getDoc(doc(collection(firestoreDb, collectionName), String(id)));
    return snap.exists() ? snap.data() : null;
  } catch (e) {
    console.error(`FB get doc:`, e);
    return null;
  }
}

async function fbDeleteDoc(collectionName, id) {
  if (!firestoreDb) {
    if (!(await initFirebase())) return false;
  }
  try {
    const { collection, doc, deleteDoc } = window._firebaseFirestore;
    await deleteDoc(doc(collection(firestoreDb, collectionName), String(id)));
    return true;
  } catch (e) {
    console.error(`FB delete doc:`, e);
    return false;
  }
}
