function t(){}function e(t,e){for(const s in e)t[s]=e[s];return t}function s(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(s)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,s,o){e.$$.on_destroy.push(function(e,...s){if(null==e)return t;const o=e.subscribe(...s);return o.unsubscribe?()=>o.unsubscribe():o}(s,o))}function c(t,s,o,n){return t[1]&&n?e(o.ctx.slice(),t[1](n(s))):o.ctx}function l(t,e,s,o,n,r,a){const i=function(t,e,s,o){if(t[2]&&o){const n=t[2](o(s));if(void 0===e.dirty)return n;if("object"==typeof n){const t=[],s=Math.max(e.dirty.length,n.length);for(let o=0;o<s;o+=1)t[o]=e.dirty[o]|n[o];return t}return e.dirty|n}return e.dirty}(e,o,n,r);if(i){const n=c(e,s,o,a);t.p(n,i)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function y(){return $("")}function v(t,e,s,o){return t.addEventListener(e,s,o),()=>t.removeEventListener(e,s,o)}function b(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function w(t){return Array.from(t.childNodes)}function k(t,e,s,o){for(let o=0;o<t.length;o+=1){const n=t[o];if(n.nodeName===e){let e=0;const r=[];for(;e<n.attributes.length;){const t=n.attributes[e++];s[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)n.removeAttribute(r[t]);return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function A(t,e){for(let s=0;s<t.length;s+=1){const o=t[s];if(3===o.nodeType)return o.data=""+e,t.splice(s,1)[0]}return $(e)}function _(t){return A(t," ")}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,s,o){t.style.setProperty(e,s,o?"important":"")}function E(t,e,s){t.classList[s?"add":"remove"](e)}function G(t,e=document.body){return Array.from(e.querySelectorAll(t))}let j;function S(t){j=t}function N(){if(!j)throw new Error("Function called outside component initialization");return j}const P=[],R=[],L=[],I=[],T=Promise.resolve();let O=!1;function q(t){L.push(t)}let z=!1;const U=new Set;function K(){if(!z){z=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];S(e),B(e.$$)}for(S(null),P.length=0;R.length;)R.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];U.has(e)||(U.add(e),e())}L.length=0}while(P.length);for(;I.length;)I.pop()();O=!1,z=!1,U.clear()}}function B(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const J=new Set;let M;function D(){M={r:0,c:[],p:M}}function V(){M.r||n(M.c),M=M.p}function Y(t,e){t&&t.i&&(J.delete(t),t.i(e))}function H(t,e,s,o){if(t&&t.o){if(J.has(t))return;J.add(t),M.c.push(()=>{J.delete(t),o&&(s&&t.d(1),o())}),t.o(e)}}function F(t,e){const s={},o={},n={$$scope:1};let r=t.length;for(;r--;){const a=t[r],i=e[r];if(i){for(const t in a)t in i||(o[t]=1);for(const t in i)n[t]||(s[t]=i[t],n[t]=1);t[r]=i}else for(const t in a)n[t]=1}for(const t in o)t in s||(s[t]=void 0);return s}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,o){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,o),q(()=>{const e=i.map(s).filter(r);c?c.push(...e):n(e),t.$$.on_mount=[]}),l.forEach(q)}function tt(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(P.push(t),O||(O=!0,T.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,s,r,a,i,c,l=[-1]){const u=j;S(e);const f=s.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=r?r(e,f,(t,s,...o)=>{const n=o.length?o[0]:s;return p.ctx&&i(p.ctx[t],p.ctx[t]=n)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](n),h&&et(e,t)),s}):[],p.update(),h=!0,n(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=w(s.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();s.intro&&Y(e.$$.fragment),Z(e,s.target,s.anchor),K()}S(u)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function rt(e,s=t){let o;const n=[];function r(t){if(a(e,t)&&(e=t,o)){const t=!nt.length;for(let t=0;t<n.length;t+=1){const s=n[t];s[1](),nt.push(s,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(a,i=t){const c=[a,i];return n.push(c),1===n.length&&(o=s(r)||t),a(e),()=>{const t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(o(),o=null)}}}}const at={};function it(e){let s,o,n;return{c(){s=m("a"),o=m("img"),this.h()},l(t){s=k(t,"A",{href:!0});var e=w(s);o=k(e,"IMG",{alt:!0,src:!0,class:!0}),e.forEach(d),this.h()},h(){b(o,"alt","Buddha of Kamakura"),o.src!==(n="noun_great_buddha_of_kamakura_3572172.svg")&&b(o,"src","noun_great_buddha_of_kamakura_3572172.svg"),b(o,"class","svelte-nsstmh"),b(s,"href","/")},m(t,e){p(t,s,e),f(s,o)},p:t,i:t,o:t,d(t){t&&d(s)}}}class ct extends ot{constructor(t){super(),st(this,t,null,it,a,{})}}function lt(e){let s,o,n,r,a,i,c,l,h,y,v,C;return{c(){s=m("nav"),o=m("a"),n=$("blog"),a=g(),i=m("a"),c=$("about"),h=g(),y=m("a"),v=$("rss"),this.h()},l(t){s=k(t,"NAV",{class:!0});var e=w(s);o=k(e,"A",{class:!0,href:!0});var r=w(o);n=A(r,"blog"),r.forEach(d),a=_(e),i=k(e,"A",{class:!0,href:!0});var l=w(i);c=A(l,"about"),l.forEach(d),h=_(e),y=k(e,"A",{class:!0,href:!0});var u=w(y);v=A(u,"rss"),u.forEach(d),e.forEach(d),this.h()},h(){b(o,"class",r=u(void 0===e[0]?"selected":"")+" svelte-1c2nkmp"),b(o,"href","."),b(i,"class",l=u("about"===e[0]?"selected":"")+" svelte-1c2nkmp"),b(i,"href","about"),b(y,"class",C=u("rss"===e[0]?"selected":"")+" svelte-1c2nkmp"),b(y,"href","rss.xml"),b(s,"class","svelte-1c2nkmp")},m(t,e){p(t,s,e),f(s,o),f(o,n),f(s,a),f(s,i),f(i,c),f(s,h),f(s,y),f(y,v)},p(t,[e]){1&e&&r!==(r=u(void 0===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(o,"class",r),1&e&&l!==(l=u("about"===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(i,"class",l),1&e&&C!==(C=u("rss"===t[0]?"selected":"")+" svelte-1c2nkmp")&&b(y,"class",C)},i:t,o:t,d(t){t&&d(s)}}}function ut(t,e,s){let{segment:o}=e;return t.$$set=t=>{"segment"in t&&s(0,o=t.segment)},[o]}class ft extends ot{constructor(t){super(),st(this,t,ut,lt,a,{segment:0})}}function pt(t){let e,s,o,n,r;return s=new ft({props:{segment:t[0]}}),n=new ct({}),{c(){e=m("header"),X(s.$$.fragment),o=g(),X(n.$$.fragment),this.h()},l(t){e=k(t,"HEADER",{class:!0});var r=w(e);Q(s.$$.fragment,r),o=_(r),Q(n.$$.fragment,r),r.forEach(d),this.h()},h(){b(e,"class","svelte-310tmg")},m(t,a){p(t,e,a),Z(s,e,null),f(e,o),Z(n,e,null),r=!0},p(t,[e]){const o={};1&e&&(o.segment=t[0]),s.$set(o)},i(t){r||(Y(s.$$.fragment,t),Y(n.$$.fragment,t),r=!0)},o(t){H(s.$$.fragment,t),H(n.$$.fragment,t),r=!1},d(t){t&&d(e),tt(s),tt(n)}}}function dt(t,e,s){let{segment:o}=e;return t.$$set=t=>{"segment"in t&&s(0,o=t.segment)},[o]}class ht extends ot{constructor(t){super(),st(this,t,dt,pt,a,{segment:0})}}function mt(e){let s,o;return{c(){s=m("script"),this.h()},l(t){const e=G('[data-svelte="svelte-a2kvt3"]',document.head);s=k(e,"SCRIPT",{async:!0,src:!0}),w(s).forEach(d),e.forEach(d),this.h()},h(){s.async=!0,s.src!==(o="https://www.googletagmanager.com/gtag/js?id="+e[0])&&b(s,"src",o)},m(t,e){f(document.head,s)},p(t,[e]){1&e&&s.src!==(o="https://www.googletagmanager.com/gtag/js?id="+t[0])&&b(s,"src",o)},i:t,o:t,d(t){d(s)}}}function $t(t,e,s){let o,{stores:n}=e,{id:r}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",r,{send_page_view:!1}));const{page:a}=n();return i(t,a,t=>s(3,o=t)),t.$$set=t=>{"stores"in t&&s(2,n=t.stores),"id"in t&&s(0,r=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",r,{page_path:o.path})},[r,a,n,o]}class gt extends ot{constructor(t){super(),st(this,t,$t,mt,a,{stores:2,id:0})}}function yt(e){let s,o;return{c(){s=m("script"),this.h()},l(t){const e=G('[data-svelte="svelte-1op50db"]',document.head);s=k(e,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),w(s).forEach(d),e.forEach(d),this.h()},h(){b(s,"data-ad-client",e[0]),s.async=!0,s.src!==(o="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&b(s,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")},m(t,e){f(document.head,s)},p(t,[e]){1&e&&b(s,"data-ad-client",t[0])},i:t,o:t,d(t){d(s)}}}function vt(t,e,s){let{id:o}=e;return t.$$set=t=>{"id"in t&&s(0,o=t.id)},[o]}class bt extends ot{constructor(t){super(),st(this,t,vt,yt,a,{id:0})}}function wt(e){let s,o,n,r,a,i,c;return{c(){s=m("link"),o=m("link"),n=m("link"),r=m("link"),a=m("link"),i=m("meta"),c=m("meta"),this.h()},l(t){const e=G('[data-svelte="svelte-12mb5ri"]',document.head);s=k(e,"LINK",{rel:!0,sizes:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),n=k(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),r=k(e,"LINK",{rel:!0,href:!0}),a=k(e,"LINK",{rel:!0,href:!0,color:!0}),i=k(e,"META",{name:!0,content:!0}),c=k(e,"META",{name:!0,content:!0}),e.forEach(d),this.h()},h(){b(s,"rel","apple-touch-icon"),b(s,"sizes","180x180"),b(s,"href","/apple-touch-icon.png"),b(o,"rel","icon"),b(o,"type","image/png"),b(o,"sizes","32x32"),b(o,"href","/favicon-32x32.png"),b(n,"rel","icon"),b(n,"type","image/png"),b(n,"sizes","16x16"),b(n,"href","/favicon-16x16.png"),b(r,"rel","manifest"),b(r,"href","/site.webmanifest"),b(a,"rel","mask-icon"),b(a,"href","/safari-pinned-tab.svg"),b(a,"color","#5bbad5"),b(i,"name","msapplication-TileColor"),b(i,"content","#ffc40d"),b(c,"name","theme-color"),b(c,"content","#ffffff")},m(t,e){f(document.head,s),f(document.head,o),f(document.head,n),f(document.head,r),f(document.head,a),f(document.head,i),f(document.head,c)},p:t,i:t,o:t,d(t){d(s),d(o),d(n),d(r),d(a),d(i),d(c)}}}class kt extends ot{constructor(t){super(),st(this,t,null,wt,a,{})}}function At(t){let e,s,o,n,r,a,i,u,h,y,v,C,x,E,G,j;s=new gt({props:{stores:Ae,id:_t}}),n=new bt({props:{id:Ct}}),a=new kt({}),u=new ht({props:{segment:t[0]}});const S=t[2].default,N=function(t,e,s,o){if(t){const n=c(t,e,s,o);return t[0](n)}}(S,t,t[1],null);return{c(){e=m("div"),X(s.$$.fragment),o=g(),X(n.$$.fragment),r=g(),X(a.$$.fragment),i=g(),X(u.$$.fragment),h=g(),y=m("main"),N&&N.c(),v=g(),C=m("footer"),x=m("span"),E=m("a"),G=$("CC BY-SA 4.0."),this.h()},l(t){e=k(t,"DIV",{class:!0});var c=w(e);Q(s.$$.fragment,c),o=_(c),Q(n.$$.fragment,c),r=_(c),Q(a.$$.fragment,c),i=_(c),Q(u.$$.fragment,c),h=_(c),y=k(c,"MAIN",{class:!0});var l=w(y);N&&N.l(l),l.forEach(d),v=_(c),C=k(c,"FOOTER",{class:!0});var f=w(C);x=k(f,"SPAN",{});var p=w(x);E=k(p,"A",{href:!0,target:!0,rel:!0});var m=w(E);G=A(m,"CC BY-SA 4.0."),m.forEach(d),p.forEach(d),f.forEach(d),c.forEach(d),this.h()},h(){b(y,"class","svelte-wjh32h"),b(E,"href","https://creativecommons.org/licenses/by-sa/4.0/"),b(E,"target","_blank"),b(E,"rel","noreferrer noopener nofollow"),b(C,"class","svelte-wjh32h"),b(e,"class","layout svelte-wjh32h")},m(t,c){p(t,e,c),Z(s,e,null),f(e,o),Z(n,e,null),f(e,r),Z(a,e,null),f(e,i),Z(u,e,null),f(e,h),f(e,y),N&&N.m(y,null),f(e,v),f(e,C),f(C,x),f(x,E),f(E,G),j=!0},p(t,[e]){const s={};1&e&&(s.segment=t[0]),u.$set(s),N&&N.p&&2&e&&l(N,S,t,t[1],e,null,null)},i(t){j||(Y(s.$$.fragment,t),Y(n.$$.fragment,t),Y(a.$$.fragment,t),Y(u.$$.fragment,t),Y(N,t),j=!0)},o(t){H(s.$$.fragment,t),H(n.$$.fragment,t),H(a.$$.fragment,t),H(u.$$.fragment,t),H(N,t),j=!1},d(t){t&&d(e),tt(s),tt(n),tt(a),tt(u),N&&N.d(t)}}}let _t="UA-114661136-2",Ct="ca-pub-9613661448556355";function xt(t,e,s){let{$$slots:o={},$$scope:n}=e,{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment),"$$scope"in t&&s(1,n=t.$$scope)},[r,n,o]}class Et extends ot{constructor(t){super(),st(this,t,xt,At,a,{segment:0})}}function Gt(t){let e,s,o=t[1].stack+"";return{c(){e=m("pre"),s=$(o)},l(t){e=k(t,"PRE",{});var n=w(e);s=A(n,o),n.forEach(d)},m(t,o){p(t,e,o),f(e,s)},p(t,e){2&e&&o!==(o=t[1].stack+"")&&C(s,o)},d(t){t&&d(e)}}}function jt(e){let s,o,n,r,a,i,c,l,u,h=e[1].message+"";document.title=s=e[0];let v=e[2]&&e[1].stack&&Gt(e);return{c(){o=g(),n=m("h1"),r=$(e[0]),a=g(),i=m("p"),c=$(h),l=g(),v&&v.c(),u=y(),this.h()},l(t){G('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),o=_(t),n=k(t,"H1",{class:!0});var s=w(n);r=A(s,e[0]),s.forEach(d),a=_(t),i=k(t,"P",{class:!0});var f=w(i);c=A(f,h),f.forEach(d),l=_(t),v&&v.l(t),u=y(),this.h()},h(){b(n,"class","svelte-8od9u6"),b(i,"class","svelte-8od9u6")},m(t,e){p(t,o,e),p(t,n,e),f(n,r),p(t,a,e),p(t,i,e),f(i,c),p(t,l,e),v&&v.m(t,e),p(t,u,e)},p(t,[e]){1&e&&s!==(s=t[0])&&(document.title=s),1&e&&C(r,t[0]),2&e&&h!==(h=t[1].message+"")&&C(c,h),t[2]&&t[1].stack?v?v.p(t,e):(v=Gt(t),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&d(o),t&&d(n),t&&d(a),t&&d(i),t&&d(l),v&&v.d(t),t&&d(u)}}}function St(t,e,s){let{status:o}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&s(0,o=t.status),"error"in t&&s(1,n=t.error)},[o,n,false]}class Nt extends ot{constructor(t){super(),st(this,t,St,jt,a,{status:0,error:1})}}function Pt(t){let s,o,n;const r=[t[4].props];var a=t[4].component;function i(t){let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return{props:s}}return a&&(s=new a(i())),{c(){s&&X(s.$$.fragment),o=y()},l(t){s&&Q(s.$$.fragment,t),o=y()},m(t,e){s&&Z(s,t,e),p(t,o,e),n=!0},p(t,e){const n=16&e?F(r,[W(t[4].props)]):{};if(a!==(a=t[4].component)){if(s){D();const t=s;H(t.$$.fragment,1,0,()=>{tt(t,1)}),V()}a?(s=new a(i()),X(s.$$.fragment),Y(s.$$.fragment,1),Z(s,o.parentNode,o)):s=null}else a&&s.$set(n)},i(t){n||(s&&Y(s.$$.fragment,t),n=!0)},o(t){s&&H(s.$$.fragment,t),n=!1},d(t){t&&d(o),s&&tt(s,t)}}}function Rt(t){let e,s;return e=new Nt({props:{error:t[0],status:t[1]}}),{c(){X(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,o){Z(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.error=t[0]),2&s&&(o.status=t[1]),e.$set(o)},i(t){s||(Y(e.$$.fragment,t),s=!0)},o(t){H(e.$$.fragment,t),s=!1},d(t){tt(e,t)}}}function Lt(t){let e,s,o,n;const r=[Rt,Pt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),s=a[e]=r[e](t),{c(){s.c(),o=y()},l(t){s.l(t),o=y()},m(t,s){a[e].m(t,s),p(t,o,s),n=!0},p(t,n){let c=e;e=i(t),e===c?a[e].p(t,n):(D(),H(a[c],1,1,()=>{a[c]=null}),V(),s=a[e],s?s.p(t,n):(s=a[e]=r[e](t),s.c()),Y(s,1),s.m(o.parentNode,o))},i(t){n||(Y(s),n=!0)},o(t){H(s),n=!1},d(t){a[e].d(t),t&&d(o)}}}function It(t){let s,o;const n=[{segment:t[2][0]},t[3].props];let r={$$slots:{default:[Lt]},$$scope:{ctx:t}};for(let t=0;t<n.length;t+=1)r=e(r,n[t]);return s=new Et({props:r}),{c(){X(s.$$.fragment)},l(t){Q(s.$$.fragment,t)},m(t,e){Z(s,t,e),o=!0},p(t,[e]){const o=12&e?F(n,[4&e&&{segment:t[2][0]},8&e&&W(t[3].props)]):{};147&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){o||(Y(s.$$.fragment,t),o=!0)},o(t){H(s.$$.fragment,t),o=!1},d(t){tt(s,t)}}}function Tt(t,e,s){let{stores:o}=e,{error:n}=e,{status:r}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,p;return u=l,N().$$.after_update.push(u),f=at,p=o,N().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&s(5,o=t.stores),"error"in t&&s(0,n=t.error),"status"in t&&s(1,r=t.status),"segments"in t&&s(2,a=t.segments),"level0"in t&&s(3,i=t.level0),"level1"in t&&s(4,c=t.level1),"notify"in t&&s(6,l=t.notify)},[n,r,a,i,c,o,l]}class Ot extends ot{constructor(t){super(),st(this,t,Tt,It,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const qt=[/^\/index\.json$/,/^\/sitemap\.xml$/,/^\/rss\.xml$/,/^\/posts\/ACG-animesama-59-eva-monster-shout-for-love-in-the-center-of-world\/?$/,/^\/posts\/ACG-truth-of-living-in-the-city-of-imaginary-patlabor-movie-2\/?$/,/^\/posts\/lyrics-saitou-kazuyoshi-star-over-the-sky-is-so-beautiful\/?$/,/^\/posts\/ACG-does-anno-hideaki-really-dont-know-what-he-is-making\/?$/,/^\/posts\/ACG-paintaking-of-anime-buble-tragedy-of-musashi-gundoh\/?$/,/^\/posts\/ACG-problems-about-taiwan-students-facing-japan-culture\/?$/,/^\/posts\/ACG-does-otaku-culture-really-change-after-earthquake\/?$/,/^\/posts\/ACG-end-ofevangelion-alternative-live-sequence-plot\/?$/,/^\/posts\/ACG-creation-and-destroy-of-tokyo-patlabor-movie-1\/?$/,/^\/posts\/ACG-message-to-children-under-covid19-from-tomino\/?$/,/^\/posts\/ACG-why-you-should-not-use-interpolation-on-anime\/?$/,/^\/posts\/ACG-all-about-kaworu-ikuhara-kunihiko-interview\/?$/,/^\/posts\/lyrics-higuchi-ryouichi-1-6-dream-traveller\/?$/,/^\/posts\/lyrics-yui-makino-modokashii-sekai-no-ue-de\/?$/,/^\/posts\/lyrics-the-high-lows-messenger-from-sunday\/?$/,/^\/posts\/lyrics-yoshida-takuro-dont-talk-about-life\/?$/,/^\/posts\/ACG-no-one-would-laugh-at-tear-of-maimoto\/?$/,/^\/posts\/ACG-would-netflix-be-the-saviour-of-anime\/?$/,/^\/posts\/lyrics-sambomaster-people-call-it-passion\/?$/,/^\/posts\/ACG-difference-of-director-and-producer\/?$/,/^\/posts\/ACG-ghost-of-upbringing-doctrine-otaku\/?$/,/^\/posts\/ACG-what-does-anime-describe-after-war\/?$/,/^\/posts\/lyrics-h-jungle-with-t-wow-war-tonight\/?$/,/^\/posts\/ACG-interview-of-jojo-sakuga-director\/?$/,/^\/posts\/lyrics-eastern-youth-song-of-daybreak\/?$/,/^\/posts\/ACG-our-bible-just-reissue-in-kindle\/?$/,/^\/posts\/ACG-tenki-no-ko-is-sekaikei-also-not\/?$/,/^\/posts\/lyrics-morikubo-shoutarou-the-answer\/?$/,/^\/posts\/lyrics-onitaba-chihiro-waltz-with-me\/?$/,/^\/posts\/ACG-world-of-anno-hideaki-interview\/?$/,/^\/posts\/generate-presentation-from-markdown\/?$/,/^\/posts\/lyrics-coffee-color-cheer-with-life\/?$/,/^\/posts\/lyrics-tiny-xevious-sang-by-pc-6601\/?$/,/^\/posts\/ACG-list-of-worthwhile-anime-ver-2\/?$/,/^\/posts\/ACG-tenki-no-ko-from-child-welfare\/?$/,/^\/posts\/ACG-the-influences-of-naoko-yamada\/?$/,/^\/posts\/ACG-the-opening-of-shirobako-movie\/?$/,/^\/posts\/ACG-what-does-wall-of-meisaku-mean\/?$/,/^\/posts\/how-to-customize-google-form-style\/?$/,/^\/posts\/lyrics-fukuyama-yoshiki-remember16\/?$/,/^\/posts\/lyrics-jam-project-the-everlasting\/?$/,/^\/posts\/lyrics-onitaba-chihiro-wing-of-wax\/?$/,/^\/posts\/lyrics-psy-s-earth-ark-on-the-tree\/?$/,/^\/posts\/ACG-animesama-58-eva-end-of-world\/?$/,/^\/posts\/ACG-expression-of-light-and-heavy\/?$/,/^\/posts\/lyrics-fuumidou-song-of-nakimushi\/?$/,/^\/posts\/lyrics-joanne-hogg-stars-of-tears\/?$/,/^\/posts\/lyrics-onitaba-chihiro-borderline\/?$/,/^\/posts\/lyrics-sakai-mikio-wonderful-life\/?$/,/^\/posts\/lyrics-sorayori-kokokara-kokokara\/?$/,/^\/posts\/ACG-understanding-staff-of-anime\/?$/,/^\/posts\/lyrics-mika-arisaka-life-goes-on\/?$/,/^\/posts\/ACG-Pause-And-Select-Apocalypse\/?$/,/^\/posts\/ACG-anime-and-verstand-of-adult\/?$/,/^\/posts\/lyrics-suzuki-yume-one-and-only\/?$/,/^\/posts\/ACG-reconguista-in-g-interview\/?$/,/^\/posts\/capitalist-realism-mark-fisher\/?$/,/^\/posts\/lyrics-bump-of-chicken-lostman\/?$/,/^\/posts\/lyrics-fujioka-fujimaki-my-son\/?$/,/^\/posts\/lyrics-indigo-blue-cobalt-blue\/?$/,/^\/posts\/lyrics-jam-project-in-my-heart\/?$/,/^\/posts\/lyrics-susumu-hirasawa-kingdom\/?$/,/^\/posts\/lyrics-the-pillows-funny-bunny\/?$/,/^\/posts\/lyrics-toshihide-baba-ordinary\/?$/,/^\/posts\/ACG-curse-of-anime-evangelion\/?$/,/^\/posts\/ACG-doujin-contention-history\/?$/,/^\/posts\/js-modern-feature-vs-bad-code\/?$/,/^\/posts\/lyrics-okui-aki-boys-be-brave\/?$/,/^\/posts\/lyrics-okui-aki-wind-climbing\/?$/,/^\/posts\/lyrics-onitaba-chihiro-rollin\/?$/,/^\/posts\/lyrics-see-saw-story-with-you\/?$/,/^\/posts\/lyrics-sunset-swish-thank-you\/?$/,/^\/posts\/ACG-linda-cube-on-ps-archive\/?$/,/^\/posts\/ACG-petition-of-sakuga-otaku\/?$/,/^\/posts\/lyrics-bump-of-chicken-guild\/?$/,/^\/posts\/lyrics-radwimps-grand-escape\/?$/,/^\/posts\/ACG-game-contention-history\/?$/,/^\/posts\/ACG-linda-cube-introduction\/?$/,/^\/posts\/f2e-05-editor-and-extension\/?$/,/^\/posts\/lyrics-furukawa-honpo-alice\/?$/,/^\/posts\/ACG-history-of-robot-anime\/?$/,/^\/posts\/ACG-thought-about-re-take\/?$/,/^\/posts\/lyrics-hamada-shogo-j-boy\/?$/,/^\/posts\/ACG-emotion-of-mother-00\/?$/,/^\/posts\/ACG-emotion-of-mother-01\/?$/,/^\/posts\/google-sheet-as-database\/?$/,/^\/posts\/ACG-ginza-demonstration\/?$/,/^\/posts\/ACG-theory-of-traveller\/?$/,/^\/posts\/lyrics-mr-children-fake\/?$/,/^\/posts\/google-app-script-note\/?$/,/^\/posts\/ACG-anime-report-2019\/?$/,/^\/posts\/lyrics-buzy-venus-say\/?$/,/^\/posts\/ACG-making-of-linda3\/?$/,/^\/posts\/ACG-until-anime-done\/?$/,/^\/posts\/ACG-sexual-illusion\/?$/,/^\/posts\/push-page-to-github\/?$/,/^\/posts\/ACG-links-and-note\/?$/,/^\/posts\/regular-expression\/?$/,/^\/posts\/ACG-eoe-interview\/?$/,/^\/posts\/f2e-03-javascript\/?$/,/^\/posts\/web-security-note\/?$/,/^\/posts\/ACG-on-your-mark\/?$/,/^\/posts\/blog-with-svelte\/?$/,/^\/posts\/login-by-discord\/?$/,/^\/posts\/f2e-07-unittest\/?$/,/^\/posts\/js-type-convert\/?$/,/^\/posts\/movie-pornostar\/?$/,/^\/posts\/vue-fontawesome\/?$/,/^\/posts\/blog-with-hexo\/?$/,/^\/posts\/f2e-00-summary\/?$/,/^\/posts\/f2e-06-devtool\/?$/,/^\/posts\/vue-cheatsheet\/?$/,/^\/posts\/f2e-08-e-tool\/?$/,/^\/posts\/css-tailwind\/?$/,/^\/posts\/editor-Emmet\/?$/,/^\/posts\/free-hosting\/?$/,/^\/posts\/vue-gridsome\/?$/,/^\/posts\/docker-note\/?$/,/^\/posts\/f2e-01-html\/?$/,/^\/posts\/svelte-note\/?$/,/^\/posts\/f2e-02-css\/?$/,/^\/posts\/f2e-04-git\/?$/,/^\/posts\/twitch-api\/?$/,/^\/posts\/vue-router\/?$/,/^\/posts\/ACG-books\/?$/,/^\/posts\/css-susy3\/?$/,/^\/posts\/tool-list\/?$/,/^\/posts\/vue-note\/?$/,/^\/posts\/vue-vuex\/?$/,/^\/posts\/docsify\/?$/,/^\/posts\/aviutl\/?$/,/^\/posts\/nodecg\/?$/,/^\/posts\/js-d3\/?$/,/^\/posts\/mpv\/?$/,/^\/([^/]+?)\.json$/],zt=[{js:()=>Promise.all([import("./index.e6a61f58.js"),__inject_styles(["client-6438aab0.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.55c13381.js"),__inject_styles(["client-6438aab0.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].20818ede.js"),__inject_styles(["client-6438aab0.css","[slug]-22838e00.css"])]).then((function(t){return t[0]}))}],Ut=(Kt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:t=>({slug:Kt(t[1])})}]}]);var Kt;
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
function Bt(t,e,s,o){return new(s||(s=Promise))((function(n,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function i(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,i)}c((o=o.apply(t,e||[])).next())}))}function Jt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Mt,Dt=1;const Vt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Yt={};let Ht,Ft;function Wt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,s,o=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(o):e[s]=o}),e}function Xt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ht))return null;let e=t.pathname.slice(Ht.length);if(""===e&&(e="/"),!qt.some(t=>t.test(e)))for(let s=0;s<Ut.length;s+=1){const o=Ut[s],n=o.pattern.exec(e);if(n){const s=Wt(t.search),r=o.parts[o.parts.length-1],a=r.params?r.params(n):{},i={host:location.host,path:e,query:s,params:a};return{href:t.href,route:o,match:n,page:i}}}}function Qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Jt(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,o=String(s?e.href.baseVal:e.href);if(o===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const n=new URL(o);if(n.pathname===location.pathname&&n.search===location.search)return;const r=Xt(n);if(r){ee(r,null,e.hasAttribute("sapper:noscroll"),n.hash),t.preventDefault(),Vt.pushState({id:Mt},"",n.href)}}function Zt(){return{x:pageXOffset,y:pageYOffset}}function te(t){if(Yt[Mt]=Zt(),t.state){const e=Xt(new URL(location.href));e?ee(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){Mt=t}(Dt),Vt.replaceState({id:Mt},"",location.href)}function ee(t,e,s,o){return Bt(this,void 0,void 0,(function*(){const n=!!e;if(n)Mt=e;else{const t=Zt();Yt[Mt]=t,Mt=e=++Dt,Yt[Mt]=s?t:{x:0,y:0}}if(yield Ft(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!s){let t,s=Yt[e];o&&(t=document.getElementById(o.slice(1)),t&&(s={x:0,y:t.getBoundingClientRect().top+scrollY})),Yt[Mt]=s,n||t?scrollTo(s.x,s.y):scrollTo(0,0)}}))}function se(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}let oe,ne=null;function re(t){const e=Jt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Xt(new URL(t,se(document)));if(e)ne&&t===ne.href||(ne={href:t,promise:ke(e)}),ne.promise}(e.href)}function ae(t){clearTimeout(oe),oe=setTimeout(()=>{re(t)},20)}function ie(t,e={noscroll:!1,replaceState:!1}){const s=Xt(new URL(t,se(document)));return s?(Vt[e.replaceState?"replaceState":"pushState"]({id:Mt},"",t),ee(s,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const ce="undefined"!=typeof __SAPPER__&&__SAPPER__;let le,ue,fe,pe=!1,de=[],he="{}";const me={page:function(t){const e=rt(t);let s=!0;return{notify:function(){s=!0,e.update(t=>t)},set:function(t){s=!1,e.set(t)},subscribe:function(t){let o;return e.subscribe(e=>{(void 0===o||s&&e!==o)&&t(o=e)})}}}({}),preloading:rt(null),session:rt(ce&&ce.session)};let $e,ge,ye;function ve(t,e){const{error:s}=t;return Object.assign({error:s},e)}function be(t){return Bt(this,void 0,void 0,(function*(){le&&me.preloading.set(!0);const e=function(t){return ne&&ne.href===t.href?ne.promise:ke(t)}(t),s=ue={},o=yield e,{redirect:n}=o;if(s===ue)if(n)yield ie(n.location,{replaceState:!0});else{const{props:e,branch:s}=o;yield we(s,e,ve(e,t.page))}}))}function we(t,e,s){return Bt(this,void 0,void 0,(function*(){me.page.set(s),me.preloading.set(!1),le?le.$set(e):(e.stores={page:{subscribe:me.page.subscribe},preloading:{subscribe:me.preloading.subscribe},session:me.session},e.level0={props:yield fe},e.notify=me.page.notify,le=new Ot({target:ye,props:e,hydrate:!0})),de=t,he=JSON.stringify(s.query),pe=!0,ge=!1}))}function ke(t){return Bt(this,void 0,void 0,(function*(){const{route:e,page:s}=t,o=s.path.split("/").filter(Boolean);let n=null;const r={error:null,status:200,segments:[o[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(n&&(n.statusCode!==t||n.location!==e))throw new Error("Conflicting redirects");n={statusCode:t,location:e}},error:(t,e)=>{r.error="string"==typeof e?new Error(e):e,r.status=t}};if(!fe){const t=()=>({});fe=ce.preloaded[0]||t.call(a,{host:s.host,path:s.path,query:s.query,params:{}},$e)}let i,c=1;try{const n=JSON.stringify(s.query),l=e.pattern.exec(s.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>Bt(this,void 0,void 0,(function*(){const f=o[i];if(function(t,e,s,o){if(o!==he)return!0;const n=de[t];return!!n&&(e!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(i,f,l,n)&&(u=!0),r.segments[c]=o[i+1],!e)return{segment:f};const p=c++;if(!ge&&!u&&de[i]&&de[i].part===e.i)return de[i];u=!1;const{default:d,preload:h}=yield zt[e.i].js();let m;return m=pe||!ce.preloaded[i+1]?h?yield h.call(a,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},$e):{}:ce.preloaded[i+1],r["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){r.error=t,r.status=500,i=[]}return{redirect:n,props:r,branch:i}}))}me.session.subscribe(t=>Bt(void 0,void 0,void 0,(function*(){if($e=t,!pe)return;ge=!0;const e=Xt(new URL(location.href)),s=ue={},{redirect:o,props:n,branch:r}=yield ke(e);s===ue&&(o?yield ie(o.location,{replaceState:!0}):yield we(r,n,ve(n,e.page)))})));const Ae=()=>{return t=at,N().$$.context.get(t);var t};var _e,Ce,xe;_e={target:document.querySelector("#sapper")},Ce=_e.target,ye=Ce,xe=ce.baseUrl,Ht=xe,Ft=be,"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Vt.scrollRestoration="auto"}),addEventListener("load",()=>{Vt.scrollRestoration="manual"}),addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",re),addEventListener("mousemove",ae),ce.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:s}=location,{session:o,preloaded:n,status:r,error:a}=ce;fe||(fe=n&&n[0]);const i={error:a,status:r,session:o,level0:{props:fe},level1:{props:{status:r,error:a},component:Nt},segments:n},c=Wt(s);we([],i,{host:t,path:e,query:c,params:{},error:a})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Dt},"",e);const s=Xt(new URL(location.href));if(s)return ee(s,Dt,!0,t)});export{H as A,tt as B,ot as S,g as a,w as b,k as c,A as d,m as e,d as f,_ as g,p as h,st as i,f as j,b as k,C as l,h as m,t as n,q as o,x as p,G as q,E as r,a as s,$ as t,v as u,n as v,X as w,Q as x,Z as y,Y as z};

import __inject_styles from './inject_styles.5607aec6.js';