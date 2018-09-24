const files = [
    './',
    './index.html',
    './static/css/main.c17080f1.css',
    './static/css/main.c17080f1.css.map',
    './static/js/main.95de1756.js',
    './static/js/main.95de1756.js.map',
    './static/media/logo.5d5d9eef.svg',
    './manifest.json',
    './service-worker.js'
];

const cacheName = 'pwa-rocks';

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(files);
});

self.addEventListener('fetch', async event => {
    const req = event.request;
    event.respondWith(getCache(req));
});

async function getCache(req) {
    const cache = await caches.open(cacheName);
    let assets = await cache.match(req);
    return assets = assets || await fetch(req);
}