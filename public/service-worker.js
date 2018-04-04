var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
];
console.log("hello");
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('[ServiceWorker] Caching app shell');
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      }).catch((err)=>{
        console.log("Caching app not possible");
      })
  );
});
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    }).catch((err)=>{
        console.log("Caching app not possible");
      })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }).catch((err)=>{
        console.log("Caching app not possible");
      })
    );
});