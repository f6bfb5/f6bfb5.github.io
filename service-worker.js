!function(){"use strict";const e=1624947745399,t="cache"+e,n=["/client/client.f4c64a0c.js","/client/inject_styles.5607aec6.js","/client/index.b4881966.js","/client/about.f0749f9b.js","/client/[slug].5927c6dc.js"].concat(["/service-worker-index.html","/.nojekyll","/.well-known/brave-rewards-verification.txt","/ACG-the-curse-of-evangelion.srt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/fonts/fonts.css","/global.css","/highlight.css","/logo-192.png","/logo-512.png","/manifest.json","/mstile-150x150.png","/noun_great_buddha_of_kamakura_3572172.svg","/safari-pinned-tab.svg","/site.webmanifest","/subtitles.parser.js","/youtube.external.subtitle.js","/youtube.external.subtitle.min.js"]),s=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&s.has(n.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(t.request);return e.put(t.request,n.clone()),n}catch(n){const s=await e.match(t.request);if(s)return s;throw n}}))))})}();
