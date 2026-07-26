/* KrishiHub Bangladesh — Service Worker (PWA Offline Support) */

const CACHE_NAME = 'krishihub-v1.0.0';
const CACHE_ASSETS = [
  'index.html',
  'css/styles.css',
  'js/data.js',
  'js/app.js',
  'manifest.json'
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_ASSETS).catch(() => {
        // If any asset fails, still install with partial cache
        return Promise.allSettled(CACHE_ASSETS.map(url => cache.add(url)));
      });
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

// Fetch: cache-first with network fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      
      return fetch(event.request).then((response) => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone).catch(() => {});
          });
        }
        return response;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
      });
    })
  );
});

// Message: allow manual update
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
