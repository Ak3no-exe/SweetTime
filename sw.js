const CACHE="sweettime-v1";
const ASSETS=["./index.html","./manifest.json","./icon-192.svg","./icon-512.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method==="GET")e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request)))});
