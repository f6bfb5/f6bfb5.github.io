function t(){}function e(t,e){for(const s in e)t[s]=e[s];return t}function s(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(s)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,s,n){e.$$.on_destroy.push(function(e,...s){if(null==e)return t;const n=e.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}(s,n))}function c(t,s,n,o){return t[1]&&o?e(n.ctx.slice(),t[1](o(s))):n.ctx}function l(t,e,s,n,o,r,a){const i=function(t,e,s,n){if(t[2]&&n){const o=t[2](n(s));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],s=Math.max(e.dirty.length,o.length);for(let n=0;n<s;n+=1)t[n]=e.dirty[n]|o[n];return t}return e.dirty|o}return e.dirty}(e,n,o,r);if(i){const o=c(e,s,n,a);t.p(o,i)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function y(){return $("")}function v(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function b(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function w(t,e,s){const n=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&n.add(t[e].__value);return s||n.delete(e),Array.from(n)}function k(t){return Array.from(t.childNodes)}function A(t,e,s,n){for(let n=0;n<t.length;n+=1){const o=t[n];if(o.nodeName===e){let e=0;const r=[];for(;e<o.attributes.length;){const t=o.attributes[e++];s[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(n,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function C(t,e){for(let s=0;s<t.length;s+=1){const n=t[s];if(3===n.nodeType)return n.data=""+e,t.splice(s,1)[0]}return $(e)}function _(t){return C(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,s,n){t.style.setProperty(e,s,n?"important":"")}function G(t,e,s){t.classList[s?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class j{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,s=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let N;function P(t){N=t}function L(){if(!N)throw new Error("Function called outside component initialization");return N}function R(t){L().$$.on_mount.push(t)}const I=[],T=[],O=[],q=[],z=Promise.resolve();let M=!1;function U(t){O.push(t)}let K=!1;const B=new Set;function D(){if(!K){K=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];P(e),H(e.$$)}for(P(null),I.length=0;T.length;)T.pop()();for(let t=0;t<O.length;t+=1){const e=O[t];B.has(e)||(B.add(e),e())}O.length=0}while(I.length);for(;q.length;)q.pop()();M=!1,K=!1,B.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const J=new Set;let V;function Y(){V={r:0,c:[],p:V}}function F(){V.r||o(V.c),V=V.p}function W(t,e){t&&t.i&&(J.delete(t),t.i(e))}function X(t,e,s,n){if(t&&t.o){if(J.has(t))return;J.add(t),V.c.push(()=>{J.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}}const Q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,s,n,o,r,a,i,c,l,u,f){let p=t.length,h=r.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const $=[],g=new Map,y=new Map;for(d=h;d--;){const t=f(o,r,d),i=s(t);let c=a.get(i);c?n&&c.p(t,e):(c=l(i,t),c.c()),g.set(i,$[d]=c),i in m&&y.set(i,Math.abs(d-m[i]))}const v=new Set,b=new Set;function w(t){W(t,1),t.m(i,u),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=$[h-1],s=t[p-1],n=e.key,o=s.key;e===s?(u=e.first,p--,h--):g.has(o)?!a.has(n)||v.has(n)?w(e):b.has(o)?p--:y.get(n)>y.get(o)?(b.add(n),w(e)):(v.add(o),p--):(c(s,a),p--)}for(;p--;){const e=t[p];g.has(e.key)||c(e,a)}for(;h;)w($[h-1]);return $}function et(t,e){const s={},n={},o={$$scope:1};let r=t.length;for(;r--;){const a=t[r],i=e[r];if(i){for(const t in a)t in i||(n[t]=1);for(const t in i)o[t]||(s[t]=i[t],o[t]=1);t[r]=i}else for(const t in a)o[t]=1}for(const t in n)t in s||(s[t]=void 0);return s}function st(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function rt(t,e,n){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,n),U(()=>{const e=i.map(s).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function at(t,e){const s=t.$$;null!==s.fragment&&(o(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(I.push(t),M||(M=!0,z.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ct(e,s,r,a,i,c,l=[-1]){const u=N;P(e);const f=s.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=r?r(e,f,(t,s,...n)=>{const o=n.length?n[0]:s;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&it(e,t)),s}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=k(s.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&W(e.$$.fragment),rt(e,s.target,s.anchor),D()}P(u)}class lt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function ft(e,s=t){let n;const o=[];function r(t){if(a(e,t)&&(e=t,n)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const s=o[t];s[1](),ut.push(s,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(a,i=t){const c=[a,i];return o.push(c),1===o.length&&(n=s(r)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}const pt={};function ht(e){let s,n,o;return{c(){s=m("a"),n=m("img"),this.h()},l(t){s=A(t,"A",{href:!0});var e=k(s);n=A(e,"IMG",{alt:!0,src:!0,class:!0}),e.forEach(h),this.h()},h(){b(n,"alt","Buddha of Kamakura"),n.src!==(o="noun_great_buddha_of_kamakura_3572172.svg")&&b(n,"src","noun_great_buddha_of_kamakura_3572172.svg"),b(n,"class","svelte-nsstmh"),b(s,"href","/")},m(t,e){p(t,s,e),f(s,n)},p:t,i:t,o:t,d(t){t&&h(s)}}}class dt extends lt{constructor(t){super(),ct(this,t,null,ht,a,{})}}function mt(e){let s,n,o,r,a,i,c,l,d,y,v,w;return{c(){s=m("nav"),n=m("a"),o=$("blog"),a=g(),i=m("a"),c=$("about"),d=g(),y=m("a"),v=$("rss"),this.h()},l(t){s=A(t,"NAV",{class:!0});var e=k(s);n=A(e,"A",{class:!0,href:!0});var r=k(n);o=C(r,"blog"),r.forEach(h),a=_(e),i=A(e,"A",{class:!0,href:!0});var l=k(i);c=C(l,"about"),l.forEach(h),d=_(e),y=A(e,"A",{class:!0,href:!0});var u=k(y);v=C(u,"rss"),u.forEach(h),e.forEach(h),this.h()},h(){b(n,"class",r=u(void 0===e[0]?"selected":"")+" svelte-1c2nkmp"),b(n,"href","."),b(i,"class",l=u("about"===e[0]?"selected":"")+" svelte-1c2nkmp"),b(i,"href","about"),b(y,"class",w=u("rss"===e[0]?"selected":"")+" svelte-1c2nkmp"),b(y,"href","rss.xml"),b(s,"class","svelte-1c2nkmp")},m(t,e){p(t,s,e),f(s,n),f(n,o),f(s,a),f(s,i),f(i,c),f(s,d),f(s,y),f(y,v)},p(t,[e]){1&e&&r!==(r=u(void 0===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(n,"class",r),1&e&&l!==(l=u("about"===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(i,"class",l),1&e&&w!==(w=u("rss"===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(y,"class",w)},i:t,o:t,d(t){t&&h(s)}}}function $t(t,e,s){let{segment:n}=e;return t.$$set=t=>{"segment"in t&&s(0,n=t.segment)},[n]}class gt extends lt{constructor(t){super(),ct(this,t,$t,mt,a,{segment:0})}}function yt(t){let e,s,n,o,r;return s=new gt({props:{segment:t[0]}}),o=new dt({}),{c(){e=m("header"),nt(s.$$.fragment),n=g(),nt(o.$$.fragment),this.h()},l(t){e=A(t,"HEADER",{class:!0});var r=k(e);ot(s.$$.fragment,r),n=_(r),ot(o.$$.fragment,r),r.forEach(h),this.h()},h(){b(e,"class","svelte-310tmg")},m(t,a){p(t,e,a),rt(s,e,null),f(e,n),rt(o,e,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n)},i(t){r||(W(s.$$.fragment,t),W(o.$$.fragment,t),r=!0)},o(t){X(s.$$.fragment,t),X(o.$$.fragment,t),r=!1},d(t){t&&h(e),at(s),at(o)}}}function vt(t,e,s){let{segment:n}=e;return t.$$set=t=>{"segment"in t&&s(0,n=t.segment)},[n]}class bt extends lt{constructor(t){super(),ct(this,t,vt,yt,a,{segment:0})}}function wt(e){let s,n,o,r,a,i,c,l,u,d,y,v,w,E,x,G;return{c(){s=m("footer"),n=m("a"),o=$("CC BY-SA 4.0."),r=g(),a=m("div"),i=$("Made with "),c=m("span"),l=$("♥"),u=$(",\r\n    "),d=m("a"),y=$("Sapper"),v=$("\r\n    and\r\n    "),w=m("a"),E=$("Chiron Sans HK"),x=g(),G=m("div"),this.h()},l(t){s=A(t,"FOOTER",{class:!0});var e=k(s);n=A(e,"A",{href:!0,target:!0,rel:!0});var f=k(n);o=C(f,"CC BY-SA 4.0."),f.forEach(h),r=_(e),a=A(e,"DIV",{class:!0});var p=k(a);i=C(p,"Made with "),c=A(p,"SPAN",{class:!0});var m=k(c);l=C(m,"♥"),m.forEach(h),u=C(p,",\r\n    "),d=A(p,"A",{href:!0,target:!0,ref:!0});var $=k(d);y=C($,"Sapper"),$.forEach(h),v=C(p,"\r\n    and\r\n    "),w=A(p,"A",{href:!0,target:!0,rel:!0});var g=k(w);E=C(g,"Chiron Sans HK"),g.forEach(h),p.forEach(h),x=_(e),G=A(e,"DIV",{class:!0}),k(G).forEach(h),e.forEach(h),this.h()},h(){b(n,"href","https://creativecommons.org/licenses/by-sa/4.0/"),b(n,"target","_blank"),b(n,"rel","noreferrer noopener nofollow"),b(c,"class","heart svelte-2kuhyy"),b(d,"href","https://github.com/Charca/sapper-blog-template"),b(d,"target","_blank"),b(d,"ref","noreferrer noopener nofollow"),b(w,"href","https://chiron-fonts.github.io/sans/"),b(w,"target","_blank"),b(w,"rel","noreferrer noopener nofollow"),b(a,"class","right svelte-2kuhyy"),b(G,"class","clearfix svelte-2kuhyy"),b(s,"class","svelte-2kuhyy")},m(t,e){p(t,s,e),f(s,n),f(n,o),f(s,r),f(s,a),f(a,i),f(a,c),f(c,l),f(a,u),f(a,d),f(d,y),f(a,v),f(a,w),f(w,E),f(s,x),f(s,G)},p:t,i:t,o:t,d(t){t&&h(s)}}}class kt extends lt{constructor(t){super(),ct(this,t,null,wt,a,{})}}function At(e){let s,n;return{c(){s=m("script"),this.h()},l(t){const e=S('[data-svelte="svelte-a2kvt3"]',document.head);s=A(e,"SCRIPT",{async:!0,src:!0}),k(s).forEach(h),e.forEach(h),this.h()},h(){s.async=!0,s.src!==(n="https://www.googletagmanager.com/gtag/js?id="+e[0])&&b(s,"src",n)},m(t,e){f(document.head,s)},p(t,[e]){1&e&&s.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&b(s,"src",n)},i:t,o:t,d(t){h(s)}}}function Ct(t,e,s){let n,{stores:o}=e,{id:r}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",r,{send_page_view:!1}));const{page:a}=o();return i(t,a,t=>s(3,n=t)),t.$$set=t=>{"stores"in t&&s(2,o=t.stores),"id"in t&&s(0,r=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",r,{page_path:n.path})},[r,a,o,n]}class _t extends lt{constructor(t){super(),ct(this,t,Ct,At,a,{stores:2,id:0})}}function Et(e){let s,n;return{c(){s=m("script"),this.h()},l(t){const e=S('[data-svelte="svelte-1op50db"]',document.head);s=A(e,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),k(s).forEach(h),e.forEach(h),this.h()},h(){b(s,"data-ad-client",e[0]),s.async=!0,s.src!==(n="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&b(s,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")},m(t,e){f(document.head,s)},p(t,[e]){1&e&&b(s,"data-ad-client",t[0])},i:t,o:t,d(t){h(s)}}}function xt(t,e,s){let{id:n}=e;return t.$$set=t=>{"id"in t&&s(0,n=t.id)},[n]}class Gt extends lt{constructor(t){super(),ct(this,t,xt,Et,a,{id:0})}}function St(e){let s,n,o,r,a,i,c;return{c(){s=m("link"),n=m("link"),o=m("link"),r=m("link"),a=m("link"),i=m("meta"),c=m("meta"),this.h()},l(t){const e=S('[data-svelte="svelte-12mb5ri"]',document.head);s=A(e,"LINK",{rel:!0,sizes:!0,href:!0}),n=A(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),o=A(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),r=A(e,"LINK",{rel:!0,href:!0}),a=A(e,"LINK",{rel:!0,href:!0,color:!0}),i=A(e,"META",{name:!0,content:!0}),c=A(e,"META",{name:!0,content:!0}),e.forEach(h),this.h()},h(){b(s,"rel","apple-touch-icon"),b(s,"sizes","180x180"),b(s,"href","/apple-touch-icon.png"),b(n,"rel","icon"),b(n,"type","image/png"),b(n,"sizes","32x32"),b(n,"href","/favicon-32x32.png"),b(o,"rel","icon"),b(o,"type","image/png"),b(o,"sizes","16x16"),b(o,"href","/favicon-16x16.png"),b(r,"rel","manifest"),b(r,"href","/site.webmanifest"),b(a,"rel","mask-icon"),b(a,"href","/safari-pinned-tab.svg"),b(a,"color","#5bbad5"),b(i,"name","msapplication-TileColor"),b(i,"content","#ffc40d"),b(c,"name","theme-color"),b(c,"content","#ffffff")},m(t,e){f(document.head,s),f(document.head,n),f(document.head,o),f(document.head,r),f(document.head,a),f(document.head,i),f(document.head,c)},p:t,i:t,o:t,d(t){h(s),h(n),h(o),h(r),h(a),h(i),h(c)}}}class jt extends lt{constructor(t){super(),ct(this,t,null,St,a,{})}}function Nt(t){let e,s,n,o,r,a,i,u,d,$,y,v,w;s=new _t({props:{stores:Ne,id:Pt}}),o=new Gt({props:{id:Lt}}),a=new jt({}),u=new bt({props:{segment:t[0]}});const C=t[2].default,E=function(t,e,s,n){if(t){const o=c(t,e,s,n);return t[0](o)}}(C,t,t[1],null);return v=new kt({}),{c(){e=m("div"),nt(s.$$.fragment),n=g(),nt(o.$$.fragment),r=g(),nt(a.$$.fragment),i=g(),nt(u.$$.fragment),d=g(),$=m("main"),E&&E.c(),y=g(),nt(v.$$.fragment),this.h()},l(t){e=A(t,"DIV",{class:!0});var c=k(e);ot(s.$$.fragment,c),n=_(c),ot(o.$$.fragment,c),r=_(c),ot(a.$$.fragment,c),i=_(c),ot(u.$$.fragment,c),d=_(c),$=A(c,"MAIN",{class:!0});var l=k($);E&&E.l(l),l.forEach(h),y=_(c),ot(v.$$.fragment,c),c.forEach(h),this.h()},h(){b($,"class","svelte-87vpjk"),b(e,"class","layout svelte-87vpjk")},m(t,c){p(t,e,c),rt(s,e,null),f(e,n),rt(o,e,null),f(e,r),rt(a,e,null),f(e,i),rt(u,e,null),f(e,d),f(e,$),E&&E.m($,null),f(e,y),rt(v,e,null),w=!0},p(t,[e]){const s={};1&e&&(s.segment=t[0]),u.$set(s),E&&E.p&&2&e&&l(E,C,t,t[1],e,null,null)},i(t){w||(W(s.$$.fragment,t),W(o.$$.fragment,t),W(a.$$.fragment,t),W(u.$$.fragment,t),W(E,t),W(v.$$.fragment,t),w=!0)},o(t){X(s.$$.fragment,t),X(o.$$.fragment,t),X(a.$$.fragment,t),X(u.$$.fragment,t),X(E,t),X(v.$$.fragment,t),w=!1},d(t){t&&h(e),at(s),at(o),at(a),at(u),E&&E.d(t),at(v)}}}let Pt="UA-114661136-2",Lt="ca-pub-9613661448556355";function Rt(t,e,s){let{$$slots:n={},$$scope:o}=e,{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment),"$$scope"in t&&s(1,o=t.$$scope)},[r,o,n]}class It extends lt{constructor(t){super(),ct(this,t,Rt,Nt,a,{segment:0})}}function Tt(t){let e,s,n=t[1].stack+"";return{c(){e=m("pre"),s=$(n)},l(t){e=A(t,"PRE",{});var o=k(e);s=C(o,n),o.forEach(h)},m(t,n){p(t,e,n),f(e,s)},p(t,e){2&e&&n!==(n=t[1].stack+"")&&E(s,n)},d(t){t&&h(e)}}}function Ot(e){let s,n,o,r,a,i,c,l,u,d=e[1].message+"";document.title=s=e[0];let v=e[2]&&e[1].stack&&Tt(e);return{c(){n=g(),o=m("h1"),r=$(e[0]),a=g(),i=m("p"),c=$(d),l=g(),v&&v.c(),u=y(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),n=_(t),o=A(t,"H1",{class:!0});var s=k(o);r=C(s,e[0]),s.forEach(h),a=_(t),i=A(t,"P",{class:!0});var f=k(i);c=C(f,d),f.forEach(h),l=_(t),v&&v.l(t),u=y(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(i,"class","svelte-8od9u6")},m(t,e){p(t,n,e),p(t,o,e),f(o,r),p(t,a,e),p(t,i,e),f(i,c),p(t,l,e),v&&v.m(t,e),p(t,u,e)},p(t,[e]){1&e&&s!==(s=t[0])&&(document.title=s),1&e&&E(r,t[0]),2&e&&d!==(d=t[1].message+"")&&E(c,d),t[2]&&t[1].stack?v?v.p(t,e):(v=Tt(t),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(a),t&&h(i),t&&h(l),v&&v.d(t),t&&h(u)}}}function qt(t,e,s){let{status:n}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&s(0,n=t.status),"error"in t&&s(1,o=t.error)},[n,o,false]}class zt extends lt{constructor(t){super(),ct(this,t,qt,Ot,a,{status:0,error:1})}}function Mt(t){let s,n,o;const r=[t[4].props];var a=t[4].component;function i(t){let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return{props:s}}return a&&(s=new a(i())),{c(){s&&nt(s.$$.fragment),n=y()},l(t){s&&ot(s.$$.fragment,t),n=y()},m(t,e){s&&rt(s,t,e),p(t,n,e),o=!0},p(t,e){const o=16&e?et(r,[st(t[4].props)]):{};if(a!==(a=t[4].component)){if(s){Y();const t=s;X(t.$$.fragment,1,0,()=>{at(t,1)}),F()}a?(s=new a(i()),nt(s.$$.fragment),W(s.$$.fragment,1),rt(s,n.parentNode,n)):s=null}else a&&s.$set(o)},i(t){o||(s&&W(s.$$.fragment,t),o=!0)},o(t){s&&X(s.$$.fragment,t),o=!1},d(t){t&&h(n),s&&at(s,t)}}}function Ut(t){let e,s;return e=new zt({props:{error:t[0],status:t[1]}}),{c(){nt(e.$$.fragment)},l(t){ot(e.$$.fragment,t)},m(t,n){rt(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.error=t[0]),2&s&&(n.status=t[1]),e.$set(n)},i(t){s||(W(e.$$.fragment,t),s=!0)},o(t){X(e.$$.fragment,t),s=!1},d(t){at(e,t)}}}function Kt(t){let e,s,n,o;const r=[Ut,Mt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),s=a[e]=r[e](t),{c(){s.c(),n=y()},l(t){s.l(t),n=y()},m(t,s){a[e].m(t,s),p(t,n,s),o=!0},p(t,o){let c=e;e=i(t),e===c?a[e].p(t,o):(Y(),X(a[c],1,1,()=>{a[c]=null}),F(),s=a[e],s?s.p(t,o):(s=a[e]=r[e](t),s.c()),W(s,1),s.m(n.parentNode,n))},i(t){o||(W(s),o=!0)},o(t){X(s),o=!1},d(t){a[e].d(t),t&&h(n)}}}function Bt(t){let s,n;const o=[{segment:t[2][0]},t[3].props];let r={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);return s=new It({props:r}),{c(){nt(s.$$.fragment)},l(t){ot(s.$$.fragment,t)},m(t,e){rt(s,t,e),n=!0},p(t,[e]){const n=12&e?et(o,[4&e&&{segment:t[2][0]},8&e&&st(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(W(s.$$.fragment,t),n=!0)},o(t){X(s.$$.fragment,t),n=!1},d(t){at(s,t)}}}function Dt(t,e,s){let{stores:n}=e,{error:o}=e,{status:r}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,p;return u=l,L().$$.after_update.push(u),f=pt,p=n,L().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&s(5,n=t.stores),"error"in t&&s(0,o=t.error),"status"in t&&s(1,r=t.status),"segments"in t&&s(2,a=t.segments),"level0"in t&&s(3,i=t.level0),"level1"in t&&s(4,c=t.level1),"notify"in t&&s(6,l=t.notify)},[o,r,a,i,c,n,l]}class Ht extends lt{constructor(t){super(),ct(this,t,Dt,Bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Jt=[/^\/index\.json$/,/^\/sitemap\.xml$/,/^\/rss\.xml$/,/^\/posts\/ACG-animesama-59-eva-monster-shout-for-love-in-the-center-of-world\/?$/,/^\/posts\/ACG-truth-of-living-in-the-city-of-imaginary-patlabor-movie-2\/?$/,/^\/posts\/lyrics-saitou-kazuyoshi-star-over-the-sky-is-so-beautiful\/?$/,/^\/posts\/ACG-does-anno-hideaki-really-dont-know-what-he-is-making\/?$/,/^\/posts\/ACG-paintaking-of-anime-buble-tragedy-of-musashi-gundoh\/?$/,/^\/posts\/ACG-problems-about-taiwan-students-facing-japan-culture\/?$/,/^\/posts\/ACG-does-otaku-culture-really-change-after-earthquake\/?$/,/^\/posts\/ACG-end-of-evangelion-alternative-live-sequence-plot\/?$/,/^\/posts\/ACG-creation-and-destroy-of-tokyo-patlabor-movie-1\/?$/,/^\/posts\/ACG-message-to-children-under-covid19-from-tomino\/?$/,/^\/posts\/ACG-why-you-should-not-use-interpolation-on-anime\/?$/,/^\/posts\/ACG-all-about-kaworu-ikuhara-kunihiko-interview\/?$/,/^\/posts\/lyrics-higuchi-ryouichi-1-6-dream-traveller\/?$/,/^\/posts\/lyrics-yui-makino-modokashii-sekai-no-ue-de\/?$/,/^\/posts\/lyrics-the-high-lows-messenger-from-sunday\/?$/,/^\/posts\/lyrics-yoshida-takuro-dont-talk-about-life\/?$/,/^\/posts\/ACG-no-one-would-laugh-at-tear-of-maimoto\/?$/,/^\/posts\/ACG-would-netflix-be-the-saviour-of-anime\/?$/,/^\/posts\/lyrics-sambomaster-people-call-it-passion\/?$/,/^\/posts\/ACG-difference-of-director-and-producer\/?$/,/^\/posts\/ACG-ghost-of-upbringing-doctrine-otaku\/?$/,/^\/posts\/ACG-what-does-anime-describe-after-war\/?$/,/^\/posts\/lyrics-h-jungle-with-t-wow-war-tonight\/?$/,/^\/posts\/ACG-char-counterattack-fans-interview\/?$/,/^\/posts\/ACG-interview-of-jojo-sakuga-director\/?$/,/^\/posts\/lyrics-eastern-youth-song-of-daybreak\/?$/,/^\/posts\/ACG-our-bible-just-reissue-in-kindle\/?$/,/^\/posts\/ACG-tenki-no-ko-is-sekaikei-also-not\/?$/,/^\/posts\/lyrics-morikubo-shoutarou-the-answer\/?$/,/^\/posts\/lyrics-onitaba-chihiro-waltz-with-me\/?$/,/^\/posts\/ACG-world-of-anno-hideaki-interview\/?$/,/^\/posts\/generate-presentation-from-markdown\/?$/,/^\/posts\/lyrics-coffee-color-cheer-with-life\/?$/,/^\/posts\/lyrics-tiny-xevious-sang-by-pc-6601\/?$/,/^\/posts\/ACG-list-of-worthwhile-anime-ver-2\/?$/,/^\/posts\/ACG-tenki-no-ko-from-child-welfare\/?$/,/^\/posts\/ACG-the-influences-of-naoko-yamada\/?$/,/^\/posts\/ACG-the-opening-of-shirobako-movie\/?$/,/^\/posts\/ACG-what-does-wall-of-meisaku-mean\/?$/,/^\/posts\/how-to-customize-google-form-style\/?$/,/^\/posts\/lyrics-fukuyama-yoshiki-remember16\/?$/,/^\/posts\/lyrics-jam-project-the-everlasting\/?$/,/^\/posts\/lyrics-onitaba-chihiro-wing-of-wax\/?$/,/^\/posts\/lyrics-psy-s-earth-ark-on-the-tree\/?$/,/^\/posts\/2021-what-i-have-read-on-internet\/?$/,/^\/posts\/ACG-animesama-58-eva-end-of-world\/?$/,/^\/posts\/ACG-expression-of-light-and-heavy\/?$/,/^\/posts\/lyrics-fuumidou-song-of-nakimushi\/?$/,/^\/posts\/lyrics-joanne-hogg-stars-of-tears\/?$/,/^\/posts\/lyrics-onitaba-chihiro-borderline\/?$/,/^\/posts\/lyrics-sakai-mikio-wonderful-life\/?$/,/^\/posts\/lyrics-sorayori-kokokara-kokokara\/?$/,/^\/posts\/ACG-understanding-staff-of-anime\/?$/,/^\/posts\/lyrics-mika-arisaka-life-goes-on\/?$/,/^\/posts\/ACG-Pause-And-Select-Apocalypse\/?$/,/^\/posts\/ACG-anime-and-verstand-of-adult\/?$/,/^\/posts\/lyrics-suzuki-yume-one-and-only\/?$/,/^\/posts\/ACG-reconguista-in-g-interview\/?$/,/^\/posts\/capitalist-realism-mark-fisher\/?$/,/^\/posts\/lyrics-bump-of-chicken-lostman\/?$/,/^\/posts\/lyrics-fujioka-fujimaki-my-son\/?$/,/^\/posts\/lyrics-indigo-blue-cobalt-blue\/?$/,/^\/posts\/lyrics-jam-project-in-my-heart\/?$/,/^\/posts\/lyrics-susumu-hirasawa-kingdom\/?$/,/^\/posts\/lyrics-the-pillows-funny-bunny\/?$/,/^\/posts\/lyrics-toshihide-baba-ordinary\/?$/,/^\/posts\/ACG-curse-of-anime-evangelion\/?$/,/^\/posts\/ACG-doujin-contention-history\/?$/,/^\/posts\/js-modern-feature-vs-bad-code\/?$/,/^\/posts\/lyrics-okui-aki-boys-be-brave\/?$/,/^\/posts\/lyrics-okui-aki-wind-climbing\/?$/,/^\/posts\/lyrics-onitaba-chihiro-rollin\/?$/,/^\/posts\/lyrics-see-saw-story-with-you\/?$/,/^\/posts\/lyrics-sunset-swish-thank-you\/?$/,/^\/posts\/ACG-linda-cube-on-ps-archive\/?$/,/^\/posts\/ACG-petition-of-sakuga-otaku\/?$/,/^\/posts\/lyrics-bump-of-chicken-guild\/?$/,/^\/posts\/lyrics-radwimps-grand-escape\/?$/,/^\/posts\/ACG-80s-winter-age-of-anime\/?$/,/^\/posts\/ACG-game-contention-history\/?$/,/^\/posts\/ACG-linda-cube-introduction\/?$/,/^\/posts\/ACG-the-curse-of-evangelion\/?$/,/^\/posts\/f2e-05-editor-and-extension\/?$/,/^\/posts\/lyrics-furukawa-honpo-alice\/?$/,/^\/posts\/ACG-history-of-robot-anime\/?$/,/^\/posts\/ACG-thought-about-re-take\/?$/,/^\/posts\/lyrics-hamada-shogo-j-boy\/?$/,/^\/posts\/ACG-emotion-of-mother-00\/?$/,/^\/posts\/ACG-emotion-of-mother-01\/?$/,/^\/posts\/ACG-rockman-1-tas-glitch\/?$/,/^\/posts\/google-sheet-as-database\/?$/,/^\/posts\/ACG-ginza-demonstration\/?$/,/^\/posts\/ACG-theory-of-traveller\/?$/,/^\/posts\/lyrics-mr-children-fake\/?$/,/^\/posts\/creator-of-abomination\/?$/,/^\/posts\/google-app-script-note\/?$/,/^\/posts\/ACG-anime-report-2019\/?$/,/^\/posts\/lyrics-buzy-venus-say\/?$/,/^\/posts\/ACG-making-of-linda3\/?$/,/^\/posts\/ACG-until-anime-done\/?$/,/^\/posts\/ACG-sexual-illusion\/?$/,/^\/posts\/push-page-to-github\/?$/,/^\/posts\/ACG-links-and-note\/?$/,/^\/posts\/login-with-discord\/?$/,/^\/posts\/regular-expression\/?$/,/^\/posts\/ACG-eoe-interview\/?$/,/^\/posts\/f2e-03-javascript\/?$/,/^\/posts\/web-security-note\/?$/,/^\/posts\/ACG-on-your-mark\/?$/,/^\/posts\/blog-with-svelte\/?$/,/^\/posts\/f2e-07-unit-test\/?$/,/^\/posts\/js-type-convert\/?$/,/^\/posts\/movie-pornostar\/?$/,/^\/posts\/vue-fontawesome\/?$/,/^\/posts\/blog-with-hexo\/?$/,/^\/posts\/f2e-00-summary\/?$/,/^\/posts\/f2e-06-devtool\/?$/,/^\/posts\/vue-cheatsheet\/?$/,/^\/posts\/css-tailwind\/?$/,/^\/posts\/editor-Emmet\/?$/,/^\/posts\/f2e-08-tools\/?$/,/^\/posts\/free-hosting\/?$/,/^\/posts\/vue-gridsome\/?$/,/^\/posts\/docker-note\/?$/,/^\/posts\/f2e-01-html\/?$/,/^\/posts\/svelte-note\/?$/,/^\/posts\/f2e-02-css\/?$/,/^\/posts\/f2e-04-git\/?$/,/^\/posts\/twitch-api\/?$/,/^\/posts\/vue-router\/?$/,/^\/posts\/ACG-books\/?$/,/^\/posts\/css-susy3\/?$/,/^\/posts\/tool-list\/?$/,/^\/posts\/vue-note\/?$/,/^\/posts\/vue-vuex\/?$/,/^\/posts\/docsify\/?$/,/^\/posts\/aviutl\/?$/,/^\/posts\/nodecg\/?$/,/^\/posts\/js-d3\/?$/,/^\/posts\/mpv\/?$/,/^\/([^/]+?)\.json$/],Vt=[{js:()=>Promise.all([import("./index.b28753a6.js"),__inject_styles(["client-0bab6a58.css","index-66fc572f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.939783c1.js"),__inject_styles(["client-0bab6a58.css","about-57d2b978.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].4c828e99.js"),__inject_styles(["client-0bab6a58.css","[slug]-78f24a6f.css"])]).then((function(t){return t[0]}))}],Yt=(Ft=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:t=>({slug:Ft(t[1])})}]}]);var Ft;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Wt(t,e,s,n){return new(s||(s=Promise))((function(o,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function i(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,i)}c((n=n.apply(t,e||[])).next())}))}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Qt,Zt=1;const te="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ee={};let se,ne;function oe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,s,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(n):e[s]=n}),e}function re(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(se))return null;let e=t.pathname.slice(se.length);if(""===e&&(e="/"),!Jt.some(t=>t.test(e)))for(let s=0;s<Yt.length;s+=1){const n=Yt[s],o=n.pattern.exec(e);if(o){const s=oe(t.search),r=n.parts[n.parts.length-1],a=r.params?r.params(o):{},i={host:location.host,path:e,query:s,params:a};return{href:t.href,route:n,match:o,page:i}}}}function ae(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,n=String(s?e.href.baseVal:e.href);if(n===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const o=new URL(n);if(o.pathname===location.pathname&&o.search===location.search)return;const r=re(o);if(r){le(r,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),te.pushState({id:Qt},"",o.href)}}function ie(){return{x:pageXOffset,y:pageYOffset}}function ce(t){if(ee[Qt]=ie(),t.state){const e=re(new URL(location.href));e?le(e,t.state.id):location.href=location.href}else Zt=Zt+1,function(t){Qt=t}(Zt),te.replaceState({id:Qt},"",location.href)}function le(t,e,s,n){return Wt(this,void 0,void 0,(function*(){const o=!!e;if(o)Qt=e;else{const t=ie();ee[Qt]=t,Qt=e=++Zt,ee[Qt]=s?t:{x:0,y:0}}if(yield ne(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!s){let t,s=ee[e];n&&(t=document.getElementById(n.slice(1)),t&&(s={x:0,y:t.getBoundingClientRect().top+scrollY})),ee[Qt]=s,o||t?scrollTo(s.x,s.y):scrollTo(0,0)}}))}function ue(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}let fe,pe=null;function he(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&function(t){const e=re(new URL(t,ue(document)));if(e)pe&&t===pe.href||(pe={href:t,promise:je(e)}),pe.promise}(e.href)}function de(t){clearTimeout(fe),fe=setTimeout(()=>{he(t)},20)}function me(t,e={noscroll:!1,replaceState:!1}){const s=re(new URL(t,ue(document)));return s?(te[e.replaceState?"replaceState":"pushState"]({id:Qt},"",t),le(s,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const $e="undefined"!=typeof __SAPPER__&&__SAPPER__;let ge,ye,ve,be=!1,we=[],ke="{}";const Ae={page:function(t){const e=ft(t);let s=!0;return{notify:function(){s=!0,e.update(t=>t)},set:function(t){s=!1,e.set(t)},subscribe:function(t){let n;return e.subscribe(e=>{(void 0===n||s&&e!==n)&&t(n=e)})}}}({}),preloading:ft(null),session:ft($e&&$e.session)};let Ce,_e,Ee;function xe(t,e){const{error:s}=t;return Object.assign({error:s},e)}function Ge(t){return Wt(this,void 0,void 0,(function*(){ge&&Ae.preloading.set(!0);const e=function(t){return pe&&pe.href===t.href?pe.promise:je(t)}(t),s=ye={},n=yield e,{redirect:o}=n;if(s===ye)if(o)yield me(o.location,{replaceState:!0});else{const{props:e,branch:s}=n;yield Se(s,e,xe(e,t.page))}}))}function Se(t,e,s){return Wt(this,void 0,void 0,(function*(){Ae.page.set(s),Ae.preloading.set(!1),ge?ge.$set(e):(e.stores={page:{subscribe:Ae.page.subscribe},preloading:{subscribe:Ae.preloading.subscribe},session:Ae.session},e.level0={props:yield ve},e.notify=Ae.page.notify,ge=new Ht({target:Ee,props:e,hydrate:!0})),we=t,ke=JSON.stringify(s.query),be=!0,_e=!1}))}function je(t){return Wt(this,void 0,void 0,(function*(){const{route:e,page:s}=t,n=s.path.split("/").filter(Boolean);let o=null;const r={error:null,status:200,segments:[n[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{r.error="string"==typeof e?new Error(e):e,r.status=t}};if(!ve){const t=()=>({});ve=$e.preloaded[0]||t.call(a,{host:s.host,path:s.path,query:s.query,params:{}},Ce)}let i,c=1;try{const o=JSON.stringify(s.query),l=e.pattern.exec(s.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>Wt(this,void 0,void 0,(function*(){const f=n[i];if(function(t,e,s,n){if(n!==ke)return!0;const o=we[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),r.segments[c]=n[i+1],!e)return{segment:f};const p=c++;if(!_e&&!u&&we[i]&&we[i].part===e.i)return we[i];u=!1;const{default:h,preload:d}=yield Vt[e.i].js();let m;return m=be||!$e.preloaded[i+1]?d?yield d.call(a,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},Ce):{}:$e.preloaded[i+1],r["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))))}catch(t){r.error=t,r.status=500,i=[]}return{redirect:o,props:r,branch:i}}))}Ae.session.subscribe(t=>Wt(void 0,void 0,void 0,(function*(){if(Ce=t,!be)return;_e=!0;const e=re(new URL(location.href)),s=ye={},{redirect:n,props:o,branch:r}=yield je(e);s===ye&&(n?yield me(n.location,{replaceState:!0}):yield Se(r,o,xe(o,e.page)))})));const Ne=()=>{return t=pt,L().$$.context.get(t);var t};var Pe,Le,Re;Pe={target:document.querySelector("#sapper")},Le=Pe.target,Ee=Le,Re=$e.baseUrl,se=Re,ne=Ge,"scrollRestoration"in te&&(te.scrollRestoration="manual"),addEventListener("beforeunload",()=>{te.scrollRestoration="auto"}),addEventListener("load",()=>{te.scrollRestoration="manual"}),addEventListener("click",ae),addEventListener("popstate",ce),addEventListener("touchstart",he),addEventListener("mousemove",de),$e.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:s}=location,{session:n,preloaded:o,status:r,error:a}=$e;ve||(ve=o&&o[0]);const i={error:a,status:r,session:n,level0:{props:ve},level1:{props:{status:r,error:a},component:zt},segments:o},c=oe(s);Se([],i,{host:t,path:e,query:c,params:{},error:a})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;te.replaceState({id:Zt},"",e);const s=re(new URL(location.href));if(s)return le(s,Zt,!0,t)});export{o as A,R as B,nt as C,ot as D,rt as E,W as F,X as G,at as H,j as I,lt as S,g as a,_ as b,A as c,k as d,m as e,C as f,h as g,b as h,ct as i,p as j,f as k,v as l,d as m,t as n,Q as o,E as p,S as q,y as r,a as s,$ as t,tt as u,Z as v,w,U as x,x as y,G as z};

import __inject_styles from './inject_styles.5607aec6.js';