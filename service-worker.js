!function(){"use strict";const e=1613338339104,t="cache"+e,n=["/client/client.258676d2.js","/client/inject_styles.5607aec6.js","/client/index.f5058f14.js","/client/about.83190b65.js","/client/about.62f00e22.js","/client/[slug].9ffc0bdd.js"].concat(["/service-worker-index.html","/.nojekyll","/.well-known/brave-rewards-verification.txt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/fonts.css","/global.css","/highlight.css","/logo-192.png","/logo-512.png","/manifest.json","/mstile-150x150.png","/noun_great_buddha_of_kamakura_3572172.svg","/safari-pinned-tab.svg","/site.webmanifest"]),s=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}}))))})}();
