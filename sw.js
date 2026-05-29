// LifeSeeker FPV — Service Worker v2.1
const CACHE = 'lifeseeker-v2.1';
const OFFLINE_URL = 'offline.html';

const PRECACHE = [
  '/',
  '/index.html',
  '/offline.html',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;700&display=swap'
];

// Install — cache các file cần thiết
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate — xóa cache cũ
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fallback cache, fallback offline
self.addEventListener('fetch', e => {
  // Không cache stream camera hoặc API calls tới ESP32
  if (e.request.url.includes(':81') ||
      e.request.url.includes('/servo') ||
      e.request.url.includes('/flash') ||
      e.request.url.includes('/pir') ||
      e.request.url.includes('192.168') ||
      e.request.url.includes('10.0.')) {
    return; // Để browser tự xử lý
  }

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache lại response mới
        if (res && res.status === 200 && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(cached => {
          if (cached) return cached;
          // Nếu là navigation request → hiện offline page
          if (e.request.mode === 'navigate') return caches.match(OFFLINE_URL);
        })
      )
  );
});
