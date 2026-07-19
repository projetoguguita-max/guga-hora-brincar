/*
 * Projeto Guguita — Service Worker
 * Atualizar CACHE_VERSION a cada deploy para limpar o cache anterior.
 */

const CACHE_VERSION = 'guguita-v2';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/jogos.html',
  '/manifest.json',
  '/assets/css/base.css',
  '/assets/img/capa-guga.jpg',
  '/assets/img/capa-guga.svg',
  '/assets/video/muito_bem.mp4',
  '/assets/video/Maior.mp4',
  '/assets/video/Menor.mp4',
  '/jogos/aventura-guga-fase1.html',
  '/jogos/calculadora-vamos-multiplicar.html',
  '/jogos/calculadora-vamos-tirar-v2.html',
  '/jogos/empilhar-colorir-blocos.html',
  '/jogos/monstrinho-comparacao.html',
  '/jogos/soma-vai-um.html',
];

// Instalação — pré-cache dos assets principais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Ativação — limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_VERSION)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache first, network fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
