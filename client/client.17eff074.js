function t(){}function e(t,e){for(const s in e)t[s]=e[s];return t}function s(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(s)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,s,n){e.$$.on_destroy.push(function(e,...s){if(null==e)return t;const n=e.subscribe(...s);return n.unsubscribe?()=>n.unsubscribe():n}(s,n))}function c(t,s,n,o){return t[1]&&o?e(n.ctx.slice(),t[1](o(s))):n.ctx}function l(t,e,s,n,o,r,a){const i=function(t,e,s,n){if(t[2]&&n){const o=t[2](n(s));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],s=Math.max(e.dirty.length,o.length);for(let n=0;n<s;n+=1)t[n]=e.dirty[n]|o[n];return t}return e.dirty|o}return e.dirty}(e,n,o,r);if(i){const o=c(e,s,n,a);t.p(o,i)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function h(t){t.parentNode.removeChild(t)}function d(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function m(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function v(){return g("")}function b(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function w(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function k(t,e,s){const n=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&n.add(t[e].__value);return s||n.delete(e),Array.from(n)}function A(t){return Array.from(t.childNodes)}function C(t,e,s,n){for(let n=0;n<t.length;n+=1){const o=t[n];if(o.nodeName===e){let e=0;const r=[];for(;e<o.attributes.length;){const t=o.attributes[e++];s[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(n,1)[0]}}return n?$(e):m(e)}function _(t,e){for(let s=0;s<t.length;s+=1){const n=t[s];if(3===n.nodeType)return n.data=""+e,t.splice(s,1)[0]}return g(e)}function E(t){return _(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e,s,n){t.style.setProperty(e,s,n?"important":"")}function S(t,e,s){t.classList[s?"add":"remove"](e)}function j(t,e=document.body){return Array.from(e.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,s=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(s)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(h)}}let P;function L(t){P=t}function R(){if(!P)throw new Error("Function called outside component initialization");return P}function I(t){R().$$.on_mount.push(t)}const T=[],O=[],q=[],z=[],M=Promise.resolve();let U=!1;function K(t){q.push(t)}let B=!1;const D=new Set;function J(){if(!B){B=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];L(e),H(e.$$)}for(L(null),T.length=0;O.length;)O.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];D.has(e)||(D.add(e),e())}q.length=0}while(T.length);for(;z.length;)z.pop()();U=!1,B=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const V=new Set;let Y;function F(){Y={r:0,c:[],p:Y}}function W(){Y.r||o(Y.c),Y=Y.p}function X(t,e){t&&t.i&&(V.delete(t),t.i(e))}function Q(t,e,s,n){if(t&&t.o){if(V.has(t))return;V.add(t),Y.c.push(()=>{V.delete(t),n&&(s&&t.d(1),n())}),t.o(e)}}const Z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t,e){t.d(1),e.delete(t.key)}function et(t,e,s,n,o,r,a,i,c,l,u,f){let p=t.length,h=r.length,d=p;const m={};for(;d--;)m[t[d].key]=d;const $=[],g=new Map,y=new Map;for(d=h;d--;){const t=f(o,r,d),i=s(t);let c=a.get(i);c?n&&c.p(t,e):(c=l(i,t),c.c()),g.set(i,$[d]=c),i in m&&y.set(i,Math.abs(d-m[i]))}const v=new Set,b=new Set;function w(t){X(t,1),t.m(i,u),a.set(t.key,t),u=t.first,h--}for(;p&&h;){const e=$[h-1],s=t[p-1],n=e.key,o=s.key;e===s?(u=e.first,p--,h--):g.has(o)?!a.has(n)||v.has(n)?w(e):b.has(o)?p--:y.get(n)>y.get(o)?(b.add(n),w(e)):(v.add(o),p--):(c(s,a),p--)}for(;p--;){const e=t[p];g.has(e.key)||c(e,a)}for(;h;)w($[h-1]);return $}function st(t,e){const s={},n={},o={$$scope:1};let r=t.length;for(;r--;){const a=t[r],i=e[r];if(i){for(const t in a)t in i||(n[t]=1);for(const t in i)o[t]||(s[t]=i[t],o[t]=1);t[r]=i}else for(const t in a)o[t]=1}for(const t in n)t in s||(s[t]=void 0);return s}function nt(t){return"object"==typeof t&&null!==t?t:{}}function ot(t){t&&t.c()}function rt(t,e){t&&t.l(e)}function at(t,e,n){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,n),K(()=>{const e=i.map(s).filter(r);c?c.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(K)}function it(t,e){const s=t.$$;null!==s.fragment&&(o(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(T.push(t),U||(U=!0,M.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(e,s,r,a,i,c,l=[-1]){const u=P;L(e);const f=s.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let d=!1;if(p.ctx=r?r(e,f,(t,s,...n)=>{const o=n.length?n[0]:s;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&ct(e,t)),s}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=A(s.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&X(e.$$.fragment),at(e,s.target,s.anchor),J()}L(u)}class ut{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft=[];function pt(e,s=t){let n;const o=[];function r(t){if(a(e,t)&&(e=t,n)){const t=!ft.length;for(let t=0;t<o.length;t+=1){const s=o[t];s[1](),ft.push(s,e)}if(t){for(let t=0;t<ft.length;t+=2)ft[t][0](ft[t+1]);ft.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(a,i=t){const c=[a,i];return o.push(c),1===o.length&&(n=s(r)||t),a(e),()=>{const t=o.indexOf(c);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}const ht={};function dt(e){let s,n,o;return{c(){s=m("a"),n=m("img"),this.h()},l(t){s=C(t,"A",{href:!0});var e=A(s);n=C(e,"IMG",{alt:!0,src:!0,class:!0}),e.forEach(h),this.h()},h(){w(n,"alt","Buddha of Kamakura"),n.src!==(o="noun_great_buddha_of_kamakura_3572172.svg")&&w(n,"src","noun_great_buddha_of_kamakura_3572172.svg"),w(n,"class","svelte-nsstmh"),w(s,"href","/")},m(t,e){p(t,s,e),f(s,n)},p:t,i:t,o:t,d(t){t&&h(s)}}}class mt extends ut{constructor(t){super(),lt(this,t,null,dt,a,{})}}function $t(e){let s,n,o,r,a,i,c,l,d,$,v,b;return{c(){s=m("nav"),n=m("a"),o=g("blog"),a=y(),i=m("a"),c=g("about"),d=y(),$=m("a"),v=g("rss"),this.h()},l(t){s=C(t,"NAV",{class:!0});var e=A(s);n=C(e,"A",{class:!0,href:!0});var r=A(n);o=_(r,"blog"),r.forEach(h),a=E(e),i=C(e,"A",{class:!0,href:!0});var l=A(i);c=_(l,"about"),l.forEach(h),d=E(e),$=C(e,"A",{class:!0,href:!0});var u=A($);v=_(u,"rss"),u.forEach(h),e.forEach(h),this.h()},h(){w(n,"class",r=u(void 0===e[0]?"selected":"")+" svelte-1c2nkmp"),w(n,"href","."),w(i,"class",l=u("about"===e[0]?"selected":"")+" svelte-1c2nkmp"),w(i,"href","about"),w($,"class",b=u("rss"===e[0]?"selected":"")+" svelte-1c2nkmp"),w($,"href","rss.xml"),w(s,"class","svelte-1c2nkmp")},m(t,e){p(t,s,e),f(s,n),f(n,o),f(s,a),f(s,i),f(i,c),f(s,d),f(s,$),f($,v)},p(t,[e]){1&e&&r!==(r=u(void 0===t[0]?"selected":"")+" svelte-1c2nkmp")&&w(n,"class",r),1&e&&l!==(l=u("about"===t[0]?"selected":"")+" svelte-1c2nkmp")&&w(i,"class",l),1&e&&b!==(b=u("rss"===t[0]?"selected":"")+" svelte-1c2nkmp")&&w($,"class",b)},i:t,o:t,d(t){t&&h(s)}}}function gt(t,e,s){let{segment:n}=e;return t.$$set=t=>{"segment"in t&&s(0,n=t.segment)},[n]}class yt extends ut{constructor(t){super(),lt(this,t,gt,$t,a,{segment:0})}}function vt(t){let e,s,n,o,r;return s=new yt({props:{segment:t[0]}}),o=new mt({}),{c(){e=m("header"),ot(s.$$.fragment),n=y(),ot(o.$$.fragment),this.h()},l(t){e=C(t,"HEADER",{class:!0});var r=A(e);rt(s.$$.fragment,r),n=E(r),rt(o.$$.fragment,r),r.forEach(h),this.h()},h(){w(e,"class","svelte-310tmg")},m(t,a){p(t,e,a),at(s,e,null),f(e,n),at(o,e,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n)},i(t){r||(X(s.$$.fragment,t),X(o.$$.fragment,t),r=!0)},o(t){Q(s.$$.fragment,t),Q(o.$$.fragment,t),r=!1},d(t){t&&h(e),it(s),it(o)}}}function bt(t,e,s){let{segment:n}=e;return t.$$set=t=>{"segment"in t&&s(0,n=t.segment)},[n]}class wt extends ut{constructor(t){super(),lt(this,t,bt,vt,a,{segment:0})}}function kt(e){let s,n,o,r,a,i,c,l,u,d,$,v,b,k,x,G;return{c(){s=m("footer"),n=m("a"),o=g("CC BY-SA 4.0."),r=y(),a=m("div"),i=g("Made with "),c=m("span"),l=g("❤️"),u=g(",\r\n    "),d=m("a"),$=g("Sapper"),v=g("\r\n    and\r\n    "),b=m("a"),k=g("Chiron Sans HK"),x=y(),G=m("div"),this.h()},l(t){s=C(t,"FOOTER",{class:!0});var e=A(s);n=C(e,"A",{href:!0,target:!0,rel:!0});var f=A(n);o=_(f,"CC BY-SA 4.0."),f.forEach(h),r=E(e),a=C(e,"DIV",{class:!0});var p=A(a);i=_(p,"Made with "),c=C(p,"SPAN",{class:!0});var m=A(c);l=_(m,"❤️"),m.forEach(h),u=_(p,",\r\n    "),d=C(p,"A",{href:!0,target:!0,ref:!0});var g=A(d);$=_(g,"Sapper"),g.forEach(h),v=_(p,"\r\n    and\r\n    "),b=C(p,"A",{href:!0,target:!0,rel:!0});var y=A(b);k=_(y,"Chiron Sans HK"),y.forEach(h),p.forEach(h),x=E(e),G=C(e,"DIV",{class:!0}),A(G).forEach(h),e.forEach(h),this.h()},h(){w(n,"href","https://creativecommons.org/licenses/by-sa/4.0/"),w(n,"target","_blank"),w(n,"rel","noreferrer noopener nofollow"),w(c,"class","heart svelte-2kuhyy"),w(d,"href","https://github.com/Charca/sapper-blog-template"),w(d,"target","_blank"),w(d,"ref","noreferrer noopener nofollow"),w(b,"href","https://chiron-fonts.github.io/sans/"),w(b,"target","_blank"),w(b,"rel","noreferrer noopener nofollow"),w(a,"class","right svelte-2kuhyy"),w(G,"class","clearfix svelte-2kuhyy"),w(s,"class","svelte-2kuhyy")},m(t,e){p(t,s,e),f(s,n),f(n,o),f(s,r),f(s,a),f(a,i),f(a,c),f(c,l),f(a,u),f(a,d),f(d,$),f(a,v),f(a,b),f(b,k),f(s,x),f(s,G)},p:t,i:t,o:t,d(t){t&&h(s)}}}class At extends ut{constructor(t){super(),lt(this,t,null,kt,a,{})}}function Ct(e){let s,n;return{c(){s=m("script"),this.h()},l(t){const e=j('[data-svelte="svelte-a2kvt3"]',document.head);s=C(e,"SCRIPT",{async:!0,src:!0}),A(s).forEach(h),e.forEach(h),this.h()},h(){s.async=!0,s.src!==(n="https://www.googletagmanager.com/gtag/js?id="+e[0])&&w(s,"src",n)},m(t,e){f(document.head,s)},p(t,[e]){1&e&&s.src!==(n="https://www.googletagmanager.com/gtag/js?id="+t[0])&&w(s,"src",n)},i:t,o:t,d(t){h(s)}}}function _t(t,e,s){let n,{stores:o}=e,{id:r}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",r,{send_page_view:!1}));const{page:a}=o();return i(t,a,t=>s(3,n=t)),t.$$set=t=>{"stores"in t&&s(2,o=t.stores),"id"in t&&s(0,r=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",r,{page_path:n.path})},[r,a,o,n]}class Et extends ut{constructor(t){super(),lt(this,t,_t,Ct,a,{stores:2,id:0})}}function xt(e){let s,n;return{c(){s=m("script"),this.h()},l(t){const e=j('[data-svelte="svelte-1op50db"]',document.head);s=C(e,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),A(s).forEach(h),e.forEach(h),this.h()},h(){w(s,"data-ad-client",e[0]),s.async=!0,s.src!==(n="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&w(s,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")},m(t,e){f(document.head,s)},p(t,[e]){1&e&&w(s,"data-ad-client",t[0])},i:t,o:t,d(t){h(s)}}}function Gt(t,e,s){let{id:n}=e;return t.$$set=t=>{"id"in t&&s(0,n=t.id)},[n]}class St extends ut{constructor(t){super(),lt(this,t,Gt,xt,a,{id:0})}}function jt(e){let s,n,o,r,a,i,c;return{c(){s=m("link"),n=m("link"),o=m("link"),r=m("link"),a=m("link"),i=m("meta"),c=m("meta"),this.h()},l(t){const e=j('[data-svelte="svelte-12mb5ri"]',document.head);s=C(e,"LINK",{rel:!0,sizes:!0,href:!0}),n=C(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),o=C(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),r=C(e,"LINK",{rel:!0,href:!0}),a=C(e,"LINK",{rel:!0,href:!0,color:!0}),i=C(e,"META",{name:!0,content:!0}),c=C(e,"META",{name:!0,content:!0}),e.forEach(h),this.h()},h(){w(s,"rel","apple-touch-icon"),w(s,"sizes","180x180"),w(s,"href","/apple-touch-icon.png"),w(n,"rel","icon"),w(n,"type","image/png"),w(n,"sizes","32x32"),w(n,"href","/favicon-32x32.png"),w(o,"rel","icon"),w(o,"type","image/png"),w(o,"sizes","16x16"),w(o,"href","/favicon-16x16.png"),w(r,"rel","manifest"),w(r,"href","/site.webmanifest"),w(a,"rel","mask-icon"),w(a,"href","/safari-pinned-tab.svg"),w(a,"color","#5bbad5"),w(i,"name","msapplication-TileColor"),w(i,"content","#ffc40d"),w(c,"name","theme-color"),w(c,"content","#ffffff")},m(t,e){f(document.head,s),f(document.head,n),f(document.head,o),f(document.head,r),f(document.head,a),f(document.head,i),f(document.head,c)},p:t,i:t,o:t,d(t){h(s),h(n),h(o),h(r),h(a),h(i),h(c)}}}class Nt extends ut{constructor(t){super(),lt(this,t,null,jt,a,{})}}function Pt(t){let e,s,n,o,r,a,i,u,d,$,g,v,b;s=new Et({props:{stores:Pe,id:Lt}}),o=new St({props:{id:Rt}}),a=new Nt({}),u=new wt({props:{segment:t[0]}});const k=t[2].default,_=function(t,e,s,n){if(t){const o=c(t,e,s,n);return t[0](o)}}(k,t,t[1],null);return v=new At({}),{c(){e=m("div"),ot(s.$$.fragment),n=y(),ot(o.$$.fragment),r=y(),ot(a.$$.fragment),i=y(),ot(u.$$.fragment),d=y(),$=m("main"),_&&_.c(),g=y(),ot(v.$$.fragment),this.h()},l(t){e=C(t,"DIV",{class:!0});var c=A(e);rt(s.$$.fragment,c),n=E(c),rt(o.$$.fragment,c),r=E(c),rt(a.$$.fragment,c),i=E(c),rt(u.$$.fragment,c),d=E(c),$=C(c,"MAIN",{class:!0});var l=A($);_&&_.l(l),l.forEach(h),g=E(c),rt(v.$$.fragment,c),c.forEach(h),this.h()},h(){w($,"class","svelte-87vpjk"),w(e,"class","layout svelte-87vpjk")},m(t,c){p(t,e,c),at(s,e,null),f(e,n),at(o,e,null),f(e,r),at(a,e,null),f(e,i),at(u,e,null),f(e,d),f(e,$),_&&_.m($,null),f(e,g),at(v,e,null),b=!0},p(t,[e]){const s={};1&e&&(s.segment=t[0]),u.$set(s),_&&_.p&&2&e&&l(_,k,t,t[1],e,null,null)},i(t){b||(X(s.$$.fragment,t),X(o.$$.fragment,t),X(a.$$.fragment,t),X(u.$$.fragment,t),X(_,t),X(v.$$.fragment,t),b=!0)},o(t){Q(s.$$.fragment,t),Q(o.$$.fragment,t),Q(a.$$.fragment,t),Q(u.$$.fragment,t),Q(_,t),Q(v.$$.fragment,t),b=!1},d(t){t&&h(e),it(s),it(o),it(a),it(u),_&&_.d(t),it(v)}}}let Lt="UA-114661136-2",Rt="ca-pub-9613661448556355";function It(t,e,s){let{$$slots:n={},$$scope:o}=e,{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment),"$$scope"in t&&s(1,o=t.$$scope)},[r,o,n]}class Tt extends ut{constructor(t){super(),lt(this,t,It,Pt,a,{segment:0})}}function Ot(t){let e,s,n=t[1].stack+"";return{c(){e=m("pre"),s=g(n)},l(t){e=C(t,"PRE",{});var o=A(e);s=_(o,n),o.forEach(h)},m(t,n){p(t,e,n),f(e,s)},p(t,e){2&e&&n!==(n=t[1].stack+"")&&x(s,n)},d(t){t&&h(e)}}}function qt(e){let s,n,o,r,a,i,c,l,u,d=e[1].message+"";document.title=s=e[0];let $=e[2]&&e[1].stack&&Ot(e);return{c(){n=y(),o=m("h1"),r=g(e[0]),a=y(),i=m("p"),c=g(d),l=y(),$&&$.c(),u=v(),this.h()},l(t){j('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),n=E(t),o=C(t,"H1",{class:!0});var s=A(o);r=_(s,e[0]),s.forEach(h),a=E(t),i=C(t,"P",{class:!0});var f=A(i);c=_(f,d),f.forEach(h),l=E(t),$&&$.l(t),u=v(),this.h()},h(){w(o,"class","svelte-8od9u6"),w(i,"class","svelte-8od9u6")},m(t,e){p(t,n,e),p(t,o,e),f(o,r),p(t,a,e),p(t,i,e),f(i,c),p(t,l,e),$&&$.m(t,e),p(t,u,e)},p(t,[e]){1&e&&s!==(s=t[0])&&(document.title=s),1&e&&x(r,t[0]),2&e&&d!==(d=t[1].message+"")&&x(c,d),t[2]&&t[1].stack?$?$.p(t,e):($=Ot(t),$.c(),$.m(u.parentNode,u)):$&&($.d(1),$=null)},i:t,o:t,d(t){t&&h(n),t&&h(o),t&&h(a),t&&h(i),t&&h(l),$&&$.d(t),t&&h(u)}}}function zt(t,e,s){let{status:n}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&s(0,n=t.status),"error"in t&&s(1,o=t.error)},[n,o,false]}class Mt extends ut{constructor(t){super(),lt(this,t,zt,qt,a,{status:0,error:1})}}function Ut(t){let s,n,o;const r=[t[4].props];var a=t[4].component;function i(t){let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return{props:s}}return a&&(s=new a(i())),{c(){s&&ot(s.$$.fragment),n=v()},l(t){s&&rt(s.$$.fragment,t),n=v()},m(t,e){s&&at(s,t,e),p(t,n,e),o=!0},p(t,e){const o=16&e?st(r,[nt(t[4].props)]):{};if(a!==(a=t[4].component)){if(s){F();const t=s;Q(t.$$.fragment,1,0,()=>{it(t,1)}),W()}a?(s=new a(i()),ot(s.$$.fragment),X(s.$$.fragment,1),at(s,n.parentNode,n)):s=null}else a&&s.$set(o)},i(t){o||(s&&X(s.$$.fragment,t),o=!0)},o(t){s&&Q(s.$$.fragment,t),o=!1},d(t){t&&h(n),s&&it(s,t)}}}function Kt(t){let e,s;return e=new Mt({props:{error:t[0],status:t[1]}}),{c(){ot(e.$$.fragment)},l(t){rt(e.$$.fragment,t)},m(t,n){at(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.error=t[0]),2&s&&(n.status=t[1]),e.$set(n)},i(t){s||(X(e.$$.fragment,t),s=!0)},o(t){Q(e.$$.fragment,t),s=!1},d(t){it(e,t)}}}function Bt(t){let e,s,n,o;const r=[Kt,Ut],a=[];function i(t,e){return t[0]?0:1}return e=i(t),s=a[e]=r[e](t),{c(){s.c(),n=v()},l(t){s.l(t),n=v()},m(t,s){a[e].m(t,s),p(t,n,s),o=!0},p(t,o){let c=e;e=i(t),e===c?a[e].p(t,o):(F(),Q(a[c],1,1,()=>{a[c]=null}),W(),s=a[e],s?s.p(t,o):(s=a[e]=r[e](t),s.c()),X(s,1),s.m(n.parentNode,n))},i(t){o||(X(s),o=!0)},o(t){Q(s),o=!1},d(t){a[e].d(t),t&&h(n)}}}function Dt(t){let s,n;const o=[{segment:t[2][0]},t[3].props];let r={$$slots:{default:[Bt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);return s=new Tt({props:r}),{c(){ot(s.$$.fragment)},l(t){rt(s.$$.fragment,t)},m(t,e){at(s,t,e),n=!0},p(t,[e]){const n=12&e?st(o,[4&e&&{segment:t[2][0]},8&e&&nt(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(X(s.$$.fragment,t),n=!0)},o(t){Q(s.$$.fragment,t),n=!1},d(t){it(s,t)}}}function Jt(t,e,s){let{stores:n}=e,{error:o}=e,{status:r}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=ht,p=n,R().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&s(5,n=t.stores),"error"in t&&s(0,o=t.error),"status"in t&&s(1,r=t.status),"segments"in t&&s(2,a=t.segments),"level0"in t&&s(3,i=t.level0),"level1"in t&&s(4,c=t.level1),"notify"in t&&s(6,l=t.notify)},[o,r,a,i,c,n,l]}class Ht extends ut{constructor(t){super(),lt(this,t,Jt,Dt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Vt=[/^\/index\.json$/,/^\/sitemap\.xml$/,/^\/rss\.xml$/,/^\/posts\/ACG-animesama-59-eva-monster-shout-for-love-in-the-center-of-world\/?$/,/^\/posts\/ACG-truth-of-living-in-the-city-of-imaginary-patlabor-movie-2\/?$/,/^\/posts\/lyrics-saitou-kazuyoshi-star-over-the-sky-is-so-beautiful\/?$/,/^\/posts\/ACG-does-anno-hideaki-really-dont-know-what-he-is-making\/?$/,/^\/posts\/ACG-paintaking-of-anime-buble-tragedy-of-musashi-gundoh\/?$/,/^\/posts\/ACG-problems-about-taiwan-students-facing-japan-culture\/?$/,/^\/posts\/ACG-does-otaku-culture-really-change-after-earthquake\/?$/,/^\/posts\/ACG-end-of-evangelion-alternative-live-sequence-plot\/?$/,/^\/posts\/ACG-creation-and-destroy-of-tokyo-patlabor-movie-1\/?$/,/^\/posts\/ACG-message-to-children-under-covid19-from-tomino\/?$/,/^\/posts\/ACG-why-you-should-not-use-interpolation-on-anime\/?$/,/^\/posts\/ACG-all-about-kaworu-ikuhara-kunihiko-interview\/?$/,/^\/posts\/lyrics-higuchi-ryouichi-1-6-dream-traveller\/?$/,/^\/posts\/lyrics-yui-makino-modokashii-sekai-no-ue-de\/?$/,/^\/posts\/lyrics-the-high-lows-messenger-from-sunday\/?$/,/^\/posts\/lyrics-yoshida-takuro-dont-talk-about-life\/?$/,/^\/posts\/ACG-no-one-would-laugh-at-tear-of-maimoto\/?$/,/^\/posts\/ACG-would-netflix-be-the-saviour-of-anime\/?$/,/^\/posts\/lyrics-sambomaster-people-call-it-passion\/?$/,/^\/posts\/ACG-difference-of-director-and-producer\/?$/,/^\/posts\/ACG-ghost-of-upbringing-doctrine-otaku\/?$/,/^\/posts\/ACG-what-does-anime-describe-after-war\/?$/,/^\/posts\/lyrics-h-jungle-with-t-wow-war-tonight\/?$/,/^\/posts\/ACG-char-counterattack-fans-interview\/?$/,/^\/posts\/ACG-interview-of-jojo-sakuga-director\/?$/,/^\/posts\/lyrics-eastern-youth-song-of-daybreak\/?$/,/^\/posts\/ACG-our-bible-just-reissue-in-kindle\/?$/,/^\/posts\/ACG-tenki-no-ko-is-sekaikei-also-not\/?$/,/^\/posts\/lyrics-morikubo-shoutarou-the-answer\/?$/,/^\/posts\/lyrics-onitaba-chihiro-waltz-with-me\/?$/,/^\/posts\/ACG-world-of-anno-hideaki-interview\/?$/,/^\/posts\/generate-presentation-from-markdown\/?$/,/^\/posts\/lyrics-coffee-color-cheer-with-life\/?$/,/^\/posts\/lyrics-tiny-xevious-sang-by-pc-6601\/?$/,/^\/posts\/ACG-list-of-worthwhile-anime-ver-2\/?$/,/^\/posts\/ACG-tenki-no-ko-from-child-welfare\/?$/,/^\/posts\/ACG-the-influences-of-naoko-yamada\/?$/,/^\/posts\/ACG-the-opening-of-shirobako-movie\/?$/,/^\/posts\/ACG-what-does-wall-of-meisaku-mean\/?$/,/^\/posts\/how-to-customize-google-form-style\/?$/,/^\/posts\/lyrics-fukuyama-yoshiki-remember16\/?$/,/^\/posts\/lyrics-jam-project-the-everlasting\/?$/,/^\/posts\/lyrics-onitaba-chihiro-wing-of-wax\/?$/,/^\/posts\/lyrics-psy-s-earth-ark-on-the-tree\/?$/,/^\/posts\/2021-what-i-have-read-on-internet\/?$/,/^\/posts\/ACG-animesama-58-eva-end-of-world\/?$/,/^\/posts\/ACG-expression-of-light-and-heavy\/?$/,/^\/posts\/lyrics-fuumidou-song-of-nakimushi\/?$/,/^\/posts\/lyrics-joanne-hogg-stars-of-tears\/?$/,/^\/posts\/lyrics-onitaba-chihiro-borderline\/?$/,/^\/posts\/lyrics-sakai-mikio-wonderful-life\/?$/,/^\/posts\/lyrics-sorayori-kokokara-kokokara\/?$/,/^\/posts\/ACG-understanding-staff-of-anime\/?$/,/^\/posts\/lyrics-mika-arisaka-life-goes-on\/?$/,/^\/posts\/ACG-Pause-And-Select-Apocalypse\/?$/,/^\/posts\/ACG-anime-and-verstand-of-adult\/?$/,/^\/posts\/lyrics-suzuki-yume-one-and-only\/?$/,/^\/posts\/ACG-reconguista-in-g-interview\/?$/,/^\/posts\/capitalist-realism-mark-fisher\/?$/,/^\/posts\/lyrics-bump-of-chicken-lostman\/?$/,/^\/posts\/lyrics-fujioka-fujimaki-my-son\/?$/,/^\/posts\/lyrics-indigo-blue-cobalt-blue\/?$/,/^\/posts\/lyrics-jam-project-in-my-heart\/?$/,/^\/posts\/lyrics-susumu-hirasawa-kingdom\/?$/,/^\/posts\/lyrics-the-pillows-funny-bunny\/?$/,/^\/posts\/lyrics-toshihide-baba-ordinary\/?$/,/^\/posts\/ACG-curse-of-anime-evangelion\/?$/,/^\/posts\/ACG-doujin-contention-history\/?$/,/^\/posts\/js-modern-feature-vs-bad-code\/?$/,/^\/posts\/lyrics-okui-aki-boys-be-brave\/?$/,/^\/posts\/lyrics-okui-aki-wind-climbing\/?$/,/^\/posts\/lyrics-onitaba-chihiro-rollin\/?$/,/^\/posts\/lyrics-see-saw-story-with-you\/?$/,/^\/posts\/lyrics-sunset-swish-thank-you\/?$/,/^\/posts\/ACG-linda-cube-on-ps-archive\/?$/,/^\/posts\/ACG-petition-of-sakuga-otaku\/?$/,/^\/posts\/lyrics-bump-of-chicken-guild\/?$/,/^\/posts\/lyrics-radwimps-grand-escape\/?$/,/^\/posts\/ACG-80s-winter-age-of-anime\/?$/,/^\/posts\/ACG-game-contention-history\/?$/,/^\/posts\/ACG-linda-cube-introduction\/?$/,/^\/posts\/ACG-the-curse-of-evangelion\/?$/,/^\/posts\/f2e-05-editor-and-extension\/?$/,/^\/posts\/lyrics-furukawa-honpo-alice\/?$/,/^\/posts\/ACG-history-of-robot-anime\/?$/,/^\/posts\/ACG-thought-about-re-take\/?$/,/^\/posts\/lyrics-hamada-shogo-j-boy\/?$/,/^\/posts\/ACG-emotion-of-mother-00\/?$/,/^\/posts\/ACG-emotion-of-mother-01\/?$/,/^\/posts\/ACG-rockman-1-tas-glitch\/?$/,/^\/posts\/google-sheet-as-database\/?$/,/^\/posts\/ACG-ginza-demonstration\/?$/,/^\/posts\/ACG-theory-of-traveller\/?$/,/^\/posts\/lyrics-mr-children-fake\/?$/,/^\/posts\/creator-of-abomination\/?$/,/^\/posts\/google-app-script-note\/?$/,/^\/posts\/ACG-anime-report-2019\/?$/,/^\/posts\/lyrics-buzy-venus-say\/?$/,/^\/posts\/ACG-making-of-linda3\/?$/,/^\/posts\/ACG-until-anime-done\/?$/,/^\/posts\/ACG-sexual-illusion\/?$/,/^\/posts\/push-page-to-github\/?$/,/^\/posts\/ACG-links-and-note\/?$/,/^\/posts\/login-with-discord\/?$/,/^\/posts\/regular-expression\/?$/,/^\/posts\/ACG-eoe-interview\/?$/,/^\/posts\/f2e-03-javascript\/?$/,/^\/posts\/web-security-note\/?$/,/^\/posts\/ACG-on-your-mark\/?$/,/^\/posts\/blog-with-svelte\/?$/,/^\/posts\/f2e-07-unit-test\/?$/,/^\/posts\/js-type-convert\/?$/,/^\/posts\/movie-pornostar\/?$/,/^\/posts\/vue-fontawesome\/?$/,/^\/posts\/blog-with-hexo\/?$/,/^\/posts\/f2e-00-summary\/?$/,/^\/posts\/f2e-06-devtool\/?$/,/^\/posts\/vue-cheatsheet\/?$/,/^\/posts\/css-tailwind\/?$/,/^\/posts\/editor-Emmet\/?$/,/^\/posts\/f2e-08-tools\/?$/,/^\/posts\/free-hosting\/?$/,/^\/posts\/vue-gridsome\/?$/,/^\/posts\/docker-note\/?$/,/^\/posts\/f2e-01-html\/?$/,/^\/posts\/svelte-note\/?$/,/^\/posts\/f2e-02-css\/?$/,/^\/posts\/f2e-04-git\/?$/,/^\/posts\/twitch-api\/?$/,/^\/posts\/vue-router\/?$/,/^\/posts\/ACG-books\/?$/,/^\/posts\/css-susy3\/?$/,/^\/posts\/tool-list\/?$/,/^\/posts\/vue-note\/?$/,/^\/posts\/vue-vuex\/?$/,/^\/posts\/docsify\/?$/,/^\/posts\/aviutl\/?$/,/^\/posts\/nodecg\/?$/,/^\/posts\/js-d3\/?$/,/^\/posts\/mpv\/?$/,/^\/([^/]+?)\.json$/],Yt=[{js:()=>Promise.all([import("./index.db07172a.js"),__inject_styles(["client-0bab6a58.css","index-66fc572f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.532af422.js"),__inject_styles(["client-0bab6a58.css","about-57d2b978.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].6da45545.js"),__inject_styles(["client-0bab6a58.css","[slug]-db3f61d1.css"])]).then((function(t){return t[0]}))}],Ft=(Wt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:t=>({slug:Wt(t[1])})}]}]);var Wt;
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
function Xt(t,e,s,n){return new(s||(s=Promise))((function(o,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function i(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,i)}c((n=n.apply(t,e||[])).next())}))}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Zt,te=1;const ee="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let ne,oe;function re(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,s,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(n):e[s]=n}),e}function ae(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(ne))return null;let e=t.pathname.slice(ne.length);if(""===e&&(e="/"),!Vt.some(t=>t.test(e)))for(let s=0;s<Ft.length;s+=1){const n=Ft[s],o=n.pattern.exec(e);if(o){const s=re(t.search),r=n.parts[n.parts.length-1],a=r.params?r.params(o):{},i={host:location.host,path:e,query:s,params:a};return{href:t.href,route:n,match:o,page:i}}}}function ie(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,n=String(s?e.href.baseVal:e.href);if(n===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const o=new URL(n);if(o.pathname===location.pathname&&o.search===location.search)return;const r=ae(o);if(r){ue(r,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),ee.pushState({id:Zt},"",o.href)}}function ce(){return{x:pageXOffset,y:pageYOffset}}function le(t){if(se[Zt]=ce(),t.state){const e=ae(new URL(location.href));e?ue(e,t.state.id):location.href=location.href}else te=te+1,function(t){Zt=t}(te),ee.replaceState({id:Zt},"",location.href)}function ue(t,e,s,n){return Xt(this,void 0,void 0,(function*(){const o=!!e;if(o)Zt=e;else{const t=ce();se[Zt]=t,Zt=e=++te,se[Zt]=s?t:{x:0,y:0}}if(yield oe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!s){let t,s=se[e];n&&(t=document.getElementById(n.slice(1)),t&&(s={x:0,y:t.getBoundingClientRect().top+scrollY})),se[Zt]=s,o||t?scrollTo(s.x,s.y):scrollTo(0,0)}}))}function fe(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}let pe,he=null;function de(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&function(t){const e=ae(new URL(t,fe(document)));if(e)he&&t===he.href||(he={href:t,promise:Ne(e)}),he.promise}(e.href)}function me(t){clearTimeout(pe),pe=setTimeout(()=>{de(t)},20)}function $e(t,e={noscroll:!1,replaceState:!1}){const s=ae(new URL(t,fe(document)));return s?(ee[e.replaceState?"replaceState":"pushState"]({id:Zt},"",t),ue(s,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const ge="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,ve,be,we=!1,ke=[],Ae="{}";const Ce={page:function(t){const e=pt(t);let s=!0;return{notify:function(){s=!0,e.update(t=>t)},set:function(t){s=!1,e.set(t)},subscribe:function(t){let n;return e.subscribe(e=>{(void 0===n||s&&e!==n)&&t(n=e)})}}}({}),preloading:pt(null),session:pt(ge&&ge.session)};let _e,Ee,xe;function Ge(t,e){const{error:s}=t;return Object.assign({error:s},e)}function Se(t){return Xt(this,void 0,void 0,(function*(){ye&&Ce.preloading.set(!0);const e=function(t){return he&&he.href===t.href?he.promise:Ne(t)}(t),s=ve={},n=yield e,{redirect:o}=n;if(s===ve)if(o)yield $e(o.location,{replaceState:!0});else{const{props:e,branch:s}=n;yield je(s,e,Ge(e,t.page))}}))}function je(t,e,s){return Xt(this,void 0,void 0,(function*(){Ce.page.set(s),Ce.preloading.set(!1),ye?ye.$set(e):(e.stores={page:{subscribe:Ce.page.subscribe},preloading:{subscribe:Ce.preloading.subscribe},session:Ce.session},e.level0={props:yield be},e.notify=Ce.page.notify,ye=new Ht({target:xe,props:e,hydrate:!0})),ke=t,Ae=JSON.stringify(s.query),we=!0,Ee=!1}))}function Ne(t){return Xt(this,void 0,void 0,(function*(){const{route:e,page:s}=t,n=s.path.split("/").filter(Boolean);let o=null;const r={error:null,status:200,segments:[n[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{r.error="string"==typeof e?new Error(e):e,r.status=t}};if(!be){const t=()=>({});be=ge.preloaded[0]||t.call(a,{host:s.host,path:s.path,query:s.query,params:{}},_e)}let i,c=1;try{const o=JSON.stringify(s.query),l=e.pattern.exec(s.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>Xt(this,void 0,void 0,(function*(){const f=n[i];if(function(t,e,s,n){if(n!==Ae)return!0;const o=ke[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),r.segments[c]=n[i+1],!e)return{segment:f};const p=c++;if(!Ee&&!u&&ke[i]&&ke[i].part===e.i)return ke[i];u=!1;const{default:h,preload:d}=yield Yt[e.i].js();let m;return m=we||!ge.preloaded[i+1]?d?yield d.call(a,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},_e):{}:ge.preloaded[i+1],r["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))))}catch(t){r.error=t,r.status=500,i=[]}return{redirect:o,props:r,branch:i}}))}Ce.session.subscribe(t=>Xt(void 0,void 0,void 0,(function*(){if(_e=t,!we)return;Ee=!0;const e=ae(new URL(location.href)),s=ve={},{redirect:n,props:o,branch:r}=yield Ne(e);s===ve&&(n?yield $e(n.location,{replaceState:!0}):yield je(r,o,Ge(o,e.page)))})));const Pe=()=>{return t=ht,R().$$.context.get(t);var t};var Le,Re,Ie;Le={target:document.querySelector("#sapper")},Re=Le.target,xe=Re,Ie=ge.baseUrl,ne=Ie,oe=Se,"scrollRestoration"in ee&&(ee.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ee.scrollRestoration="auto"}),addEventListener("load",()=>{ee.scrollRestoration="manual"}),addEventListener("click",ie),addEventListener("popstate",le),addEventListener("touchstart",de),addEventListener("mousemove",me),ge.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:s}=location,{session:n,preloaded:o,status:r,error:a}=ge;be||(be=o&&o[0]);const i={error:a,status:r,session:n,level0:{props:be},level1:{props:{status:r,error:a},component:Mt},segments:o},c=re(s);je([],i,{host:t,path:e,query:c,params:{},error:a})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;ee.replaceState({id:te},"",e);const s=ae(new URL(location.href));if(s)return ue(s,te,!0,t)});export{S as A,o as B,I as C,ot as D,rt as E,at as F,X as G,Q as H,it as I,N as J,ut as S,y as a,$ as b,C as c,E as d,m as e,A as f,h as g,_ as h,lt as i,w as j,p as k,f as l,b as m,t as n,d as o,Z as p,j as q,x as r,a as s,g as t,et as u,v,tt as w,k as x,K as y,G as z};

import __inject_styles from './inject_styles.5607aec6.js';