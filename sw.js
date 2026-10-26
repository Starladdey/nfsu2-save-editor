const CACHE_NAME = 'nfsu2-save-editor-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.bundle.min.js',
  '/assets/DEMO',
  '/assets/JANE'
];
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
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

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});