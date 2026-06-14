const CACHE_NAME = 'guga-hora-brincar-v9';
const ASSETS = [
  './',
  './index.html',
  './jogos.html',
  './hora_brincar.html',
  './calculadora-vamos-tirar-v2.html',
  './soma-vai-um.html',
  './empilhar-colorir-blocos.html',
  './calculadora-vamos-multiplicar.html',
  './monstrinho-comparacao.html',
  './capa-guga.jpg',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  const wantsHtml = event.request.mode === 'navigate' || requestUrl.pathname.endsWith('.html');

  if (wantsHtml) {
    event.respondWith(
      fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
