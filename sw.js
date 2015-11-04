importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
  e.waitUntil(
		caches.open('airhorner').then(function(cache) {
			return cache.addAll([
       '/',
       '/index.html',
       'https://fonts.googleapis.com/css?family=Nothing+You+Could+Do',
       'http://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js',
       'https://fonts.googleapis.com/css?family=Coming+Soon',
       'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
       'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css',
       'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'
     ]);
		})
  	);
});
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});