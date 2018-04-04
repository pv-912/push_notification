var CACHE_NAME = 'my-pwa-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/css/main.css'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});