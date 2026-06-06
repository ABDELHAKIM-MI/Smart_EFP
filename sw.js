// PWA Service Worker — Smart EFP
self.addEventListener('install', (e) => {
  e.waitUntil(self.skipWaiting());
  console.log('Smart EFP installé');
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
  console.log('Smart EFP activé');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => new Response('Mode hors ligne')));
});
