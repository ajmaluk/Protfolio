// Dummy self-unregistering service worker to silence 404 logs from previously registered localhost service workers
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  self.registration.unregister();
});
