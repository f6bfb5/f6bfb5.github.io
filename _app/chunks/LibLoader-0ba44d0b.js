import{S as _,i as f,s as b,e as m,G as p,c as y,a as E,d as o,H as l,b as d,I as g,E as u,a1 as v,v as D,U as L}from"./index-8a808381.js";function j(s){let e,r;return{c(){e=m("script"),this.h()},l(n){const a=p('[data-svelte="svelte-50y8ql"]',document.head);e=y(a,"SCRIPT",{src:!0}),E(e).forEach(o),a.forEach(o),this.h()},h(){l(e.src,r=s[0])||d(e,"src",r)},m(n,a){g(document.head,e),s[3](e)},p(n,[a]){a&1&&!l(e.src,r=n[0])&&d(e,"src",r)},i:u,o:u,d(n){o(e),s[3](null)}}}function q(s,e,r){const n=v();let{url:a}=e,{libraryDetectionObject:i}=e,c;D(async()=>{if(i&&window&&typeof window[i]!="undefined")return n("loaded");c.addEventListener("load",()=>{n("loaded")}),c.addEventListener("error",t=>{console.error("error: ",t),n("error")})});function h(t){L[t?"unshift":"push"](()=>{c=t,r(1,c)})}return s.$$set=t=>{"url"in t&&r(0,a=t.url),"libraryDetectionObject"in t&&r(2,i=t.libraryDetectionObject)},[a,c,i,h]}class O extends _{constructor(e){super(),f(this,e,q,j,b,{url:0,libraryDetectionObject:2})}}export{O as L};