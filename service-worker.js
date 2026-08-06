/*
 * Projeto Guguita — Service Worker
 *
 * Estratégia (para NÃO travar no cache):
 *  - Páginas (navegação/HTML): network-first — online sempre pega a versão
 *    nova; offline cai no cache.
 *  - Demais arquivos (css, js, imagens, vídeos): stale-while-revalidate —
 *    responde do cache na hora (rápido/offline) e atualiza o cache por baixo
 *    para o próximo acesso.
 *  - Só cuida de requisições GET do mesmo domínio; Google Fonts e GA passam
 *    direto para a rede.
 *
 * Ainda assim, suba CACHE_VERSION a cada deploy para limpar o cache antigo.
 */

const CACHE_VERSION = 'guguita-v8';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/jogos.html',
  '/manifest.json',
  '/assets/css/base.css',
  '/assets/img/capa-guga.jpg',
  '/assets/img/capa-guga.svg',
  '/assets/img/icon-192.png',
  '/assets/img/icon-512.png',
  '/assets/img/icon-512-maskable.png',
  '/assets/video/muito_bem.mp4',
  '/assets/video/Maior.mp4',
  '/assets/video/Menor.mp4',
  '/jogos/hora_brincar.html',
  '/jogos/aventura-guga-fase1.html',
  '/jogos/calculadora-vamos-multiplicar.html',
  '/jogos/calculadora-vamos-tirar-v2.html',
  '/jogos/empilhar-colorir-blocos.html',
  '/jogos/blocos-carinhas.html',
  '/jogos/monstrinho-comparacao.html',
  '/jogos/soma-vai-um.html',
  '/jogos/calendario-do-papai.html',
];

// Instalação — pré-cache dos assets principais
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      // addAll falharia inteiro se um item desse 404; cacheamos um a um e
      // ignoramos os que falharem, para o SW sempre instalar.
      .then(cache => Promise.all(
        CACHE_ASSETS.map(url => cache.add(url).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

// Ativação — limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // fontes/GA: rede normal

  // Páginas: network-first
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match(req).then(c => c || caches.match('/index.html')))
    );
    return;
  }

  // Assets: stale-while-revalidate
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(resp => {
        if (resp && resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy)).catch(() => {});
        }
        return resp;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
