// NFSU2 Save Editor — service worker
// Bump CACHE_NAME when you want to force-clear old caches on all clients.
const CACHE_NAME = 'nfsu2-save-editor-v3';

const PRECACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/landing.css',
  '/js/app.bundle.min.js',
  '/assets/DEMO',
  '/assets/JANE',
  '/assets/favicon.svg',
  '/assets/favicon-48.png',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
  // allSettled: one missing file must not make the whole install fail
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(PRECACHE.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function putInCache(req, res) {
  if (res && res.ok && res.type === 'basic') {
    const copy = res.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
  }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // Pages: network first (so deploys show up immediately), cache as offline fallback
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => putInCache(req, res))
        .catch(() => caches.match(req).then((hit) => hit || caches.match('/')))
    );
    return;
  }

  // Everything else (CSS, JS, images, demo saves): serve from cache, refresh in background
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => putInCache(req, res)).catch(() => cached);
      return cached || network;
    })
  );
});
