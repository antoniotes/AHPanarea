const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/images/logohotelierwhite.png',
  '/assets/images/background.webm',
  '/assets/images/panarea.png',
  // Aggiungi qui tutti gli altri file nella cartella assets che vuoi cache-are
];

// Installa il service worker e cache-a le risorse
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Recupera le risorse dalla cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Restituisci la risposta cache-ata se presente, altrimenti fai la fetch
      return response || fetch(event.request);
    })
  );
});

// Aggiorna la cache quando ci sono nuove versioni del service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});