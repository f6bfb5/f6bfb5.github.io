import{S as h,i as _,s as p,e as f,M as m,c as v,a as E,d as o,G as i,b as l,F as b,E as d,Z as g,v as L,_ as q}from"./index-e9af3959.js";function y(n){let e,s;return{c(){e=f("script"),this.h()},l(t){const r=m('[data-svelte="svelte-50y8ql"]',document.head);e=v(r,"SCRIPT",{src:!0}),E(e).forEach(o),r.forEach(o),this.h()},h(){i(e.src,s=n[0])||l(e,"src",s)},m(t,r){b(document.head,e),n[2](e)},p(t,[r]){r&1&&!i(e.src,s=t[0])&&l(e,"src",s)},i:d,o:d,d(t){o(e),n[2](null)}}}function S(n,e,s){const t=g();let{url:r}=e,c;L(async()=>{c.addEventListener("load",()=>{t("loaded")}),c.addEventListener("error",a=>{console.error("error: ",a),t("error")})});function u(a){q[a?"unshift":"push"](()=>{c=a,s(1,c)})}return n.$$set=a=>{"url"in a&&s(0,r=a.url)},[r,c,u]}class M extends h{constructor(e){super(),_(this,e,S,y,p,{url:0})}}export{M as L};
