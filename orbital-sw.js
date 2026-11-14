const C='orbital-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);if(u.origin!==location.origin)return;
  const cle=u.origin+u.pathname;
  if(u.pathname.indexOf('/pyodide/')>=0){
    e.respondWith(caches.open(C).then(c=>c.match(cle).then(h=>h||fetch(r).then(x=>{if(x.ok)c.put(cle,x.clone());return x;}))));
    return;
  }
  e.respondWith(fetch(r).then(x=>{if(x.ok){const k=x.clone();caches.open(C).then(c=>c.put(cle,k));}return x;}).catch(()=>caches.open(C).then(c=>c.match(cle)).then(h=>h||Response.error())));
});
