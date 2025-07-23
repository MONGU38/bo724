self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // 기본 fetch 처리
  event.respondWith(fetch(event.request));
});
