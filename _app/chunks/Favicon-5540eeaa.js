import{S as w,i as z,s as I,e as f,t as k,k as S,c as _,a as g,h as A,d as u,m as C,b as s,g as q,I as a,E as x,H as Q,J as T,O as J,P as U,Q as L,f as W,w as V,x as B,y as K,q as O,o as R,B as G,G as j}from"./index-8418cccc.js";import{l as X}from"./store-2cea1234.js";import{b as D}from"./paths-396f020f.js";function Z(o){let e,t,r,l,c,n,d,i,b,h,m,E;return{c(){e=f("div"),t=f("span"),r=k("/"),l=S(),c=f("span"),n=k("-"),d=S(),i=f("span"),b=k("\\"),h=S(),m=f("span"),E=k("|"),this.h()},l($){e=_($,"DIV",{class:!0});var v=g(e);t=_(v,"SPAN",{class:!0});var N=g(t);r=A(N,"/"),N.forEach(u),l=C(v),c=_(v,"SPAN",{class:!0});var y=g(c);n=A(y,"-"),y.forEach(u),d=C(v),i=_(v,"SPAN",{class:!0});var p=g(i);b=A(p,"\\"),p.forEach(u),h=C(v),m=_(v,"SPAN",{class:!0});var P=g(m);E=A(P,"|"),P.forEach(u),v.forEach(u),this.h()},h(){s(t,"class","loader-text loader-step1 svelte-v56dyc"),s(c,"class","loader-text loader-step1 svelte-v56dyc"),s(i,"class","loader-text loader-step1 svelte-v56dyc"),s(m,"class","loader-text loader-step1 svelte-v56dyc"),s(e,"class","loader svelte-v56dyc")},m($,v){q($,e,v),a(e,t),a(t,r),a(e,l),a(e,c),a(c,n),a(e,d),a(e,i),a(i,b),a(e,h),a(e,m),a(m,E)},p:x,i:x,o:x,d($){$&&u(e)}}}class fe extends w{constructor(e){super(),z(this,e,null,Z,I,{})}}function ee(o){let e,t,r,l,c;return{c(){e=f("a"),t=f("img"),this.h()},l(n){e=_(n,"A",{href:!0,target:!0,rel:!0,class:!0});var d=g(e);t=_(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(u),this.h()},h(){Q(t.src,r="https://i.imgur.com/D0PAWCi.gif")||s(t,"src",r),s(t,"alt","logo"),s(t,"class","svelte-145ut21"),s(e,"href",o[0]),s(e,"target","_blank"),s(e,"rel","noreferrer noopener"),s(e,"class","svelte-145ut21")},m(n,d){q(n,e,d),a(e,t),l||(c=T(e,"click",o[2]),l=!0)},p(n,[d]){d&1&&s(e,"href",n[0])},i:x,o:x,d(n){n&&u(e),l=!1,c()}}}function Y(o){return o[Math.floor(o.length*Math.random())]}function te(o,e,t){let r;J(o,X,n=>t(1,r=n));let l=Y(r);return[l,r,()=>t(0,l=Y(r))]}class se extends w{constructor(e){super(),z(this,e,te,ee,I,{})}}const ae=()=>{const o=U("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},re={subscribe(o){return ae().page.subscribe(o)}};function le(o){let e,t,r,l,c,n,d,i,b,h,m,E,$,v,N;return{c(){e=f("nav"),t=f("a"),r=k("\u30C8\u30EA\u30B3\u3058\u304B\u3051\u306E\u660E\u3051\u66AE\u308C"),c=S(),n=f("a"),d=k("about"),b=S(),h=f("a"),m=k("rss"),$=S(),v=f("a"),N=k("sitemap"),this.h()},l(y){e=_(y,"NAV",{class:!0});var p=g(e);t=_(p,"A",{class:!0,href:!0});var P=g(t);r=A(P,"\u30C8\u30EA\u30B3\u3058\u304B\u3051\u306E\u660E\u3051\u66AE\u308C"),P.forEach(u),c=C(p),n=_(p,"A",{class:!0,href:!0});var F=g(n);d=A(F,"about"),F.forEach(u),b=C(p),h=_(p,"A",{class:!0,href:!0,target:!0});var H=g(h);m=A(H,"rss"),H.forEach(u),$=C(p),v=_(p,"A",{style:!0,href:!0,target:!0,class:!0});var M=g(v);N=A(M,"sitemap"),M.forEach(u),p.forEach(u),this.h()},h(){s(t,"class",l=L(o[0].url.pathname==="/"?"selected":"")+" svelte-t90z2a"),s(t,"href",`${D}/`),s(n,"class",i=L(o[0].url.pathname==="/about"?"selected":"")+" svelte-t90z2a"),s(n,"href",`${D}/about`),s(h,"class",E=L(o[0].url.pathname==="/rss"?"selected":"")+" svelte-t90z2a"),s(h,"href",`${D}/rss.xml`),s(h,"target","_blank"),W(v,"display","none"),s(v,"href",`${D}/sitemap.xml`),s(v,"target","_blank"),s(v,"class","svelte-t90z2a"),s(e,"class","svelte-t90z2a")},m(y,p){q(y,e,p),a(e,t),a(t,r),a(e,c),a(e,n),a(n,d),a(e,b),a(e,h),a(h,m),a(e,$),a(e,v),a(v,N)},p(y,[p]){p&1&&l!==(l=L(y[0].url.pathname==="/"?"selected":"")+" svelte-t90z2a")&&s(t,"class",l),p&1&&i!==(i=L(y[0].url.pathname==="/about"?"selected":"")+" svelte-t90z2a")&&s(n,"class",i),p&1&&E!==(E=L(y[0].url.pathname==="/rss"?"selected":"")+" svelte-t90z2a")&&s(h,"class",E)},i:x,o:x,d(y){y&&u(e)}}}function ne(o,e,t){let r;return J(o,re,l=>t(0,r=l)),[r]}class oe extends w{constructor(e){super(),z(this,e,ne,le,I,{})}}function ce(o){let e,t,r,l,c,n,d;return l=new oe({}),n=new se({}),{c(){e=f("header"),t=f("div"),r=f("div"),V(l.$$.fragment),c=S(),V(n.$$.fragment),this.h()},l(i){e=_(i,"HEADER",{class:!0});var b=g(e);t=_(b,"DIV",{class:!0});var h=g(t);r=_(h,"DIV",{class:!0});var m=g(r);B(l.$$.fragment,m),c=C(m),B(n.$$.fragment,m),m.forEach(u),h.forEach(u),b.forEach(u),this.h()},h(){s(r,"class","row svelte-3mmsgf"),s(t,"class","header-container svelte-3mmsgf"),s(e,"class","svelte-3mmsgf")},m(i,b){q(i,e,b),a(e,t),a(t,r),K(l,r,null),a(r,c),K(n,r,null),d=!0},p:x,i(i){d||(O(l.$$.fragment,i),O(n.$$.fragment,i),d=!0)},o(i){R(l.$$.fragment,i),R(n.$$.fragment,i),d=!1},d(i){i&&u(e),G(l),G(n)}}}class _e extends w{constructor(e){super(),z(this,e,null,ce,I,{})}}function ie(o){let e,t,r,l,c,n,d,i,b,h,m;return{c(){e=f("footer"),t=f("a"),r=k("CC BY-NC-SA 4.0"),l=S(),c=f("div"),n=k("Made with "),d=f("span"),i=k("\u2764\uFE0F"),b=k(` and\r
    `),h=f("a"),m=k("SvelteKit"),this.h()},l(E){e=_(E,"FOOTER",{scoped:!0,class:!0});var $=g(e);t=_($,"A",{href:!0,target:!0,rel:!0});var v=g(t);r=A(v,"CC BY-NC-SA 4.0"),v.forEach(u),l=C($),c=_($,"DIV",{class:!0});var N=g(c);n=A(N,"Made with "),d=_(N,"SPAN",{class:!0});var y=g(d);i=A(y,"\u2764\uFE0F"),y.forEach(u),b=A(N,` and\r
    `),h=_(N,"A",{href:!0,target:!0,ref:!0});var p=g(h);m=A(p,"SvelteKit"),p.forEach(u),N.forEach(u),$.forEach(u),this.h()},h(){s(t,"href","https://creativecommons.org/licenses/by-nc-sa/4.0/"),s(t,"target","_blank"),s(t,"rel","noreferrer noopener nofollow"),s(d,"class","heart svelte-qi6xiu"),s(h,"href","https://kit.svelte.dev/"),s(h,"target","_blank"),s(h,"ref","noreferrer noopener nofollow"),s(c,"class","right svelte-qi6xiu"),s(e,"scoped",""),s(e,"class","svelte-qi6xiu")},m(E,$){q(E,e,$),a(e,t),a(t,r),a(e,l),a(e,c),a(c,n),a(c,d),a(d,i),a(c,b),a(c,h),a(h,m)},p:x,i:x,o:x,d(E){E&&u(e)}}}class pe extends w{constructor(e){super(),z(this,e,null,ie,I,{})}}function ue(o){let e,t;return{c(){e=f("link"),t=f("link"),this.h()},l(r){const l=j('[data-svelte="svelte-1c8ynol"]',document.head);e=_(l,"LINK",{rel:!0,href:!0}),t=_(l,"LINK",{rel:!0,href:!0}),l.forEach(u),this.h()},h(){s(e,"rel","shortcut icon"),s(e,"href","/favicon.ico"),s(t,"rel","bookmark"),s(t,"href","/favicon.ico")},m(r,l){a(document.head,e),a(document.head,t)},p:x,i:x,o:x,d(r){u(e),u(t)}}}class me extends w{constructor(e){super(),z(this,e,null,ue,I,{})}}export{me as F,_e as H,fe as L,pe as a};
