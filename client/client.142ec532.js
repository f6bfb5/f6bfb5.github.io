function t(){}function e(t,e){for(const s in e)t[s]=e[s];return t}function s(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(s)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,s,o){e.$$.on_destroy.push(function(e,...s){if(null==e)return t;const o=e.subscribe(...s);return o.unsubscribe?()=>o.unsubscribe():o}(s,o))}function c(t,s,o,n){return t[1]&&n?e(o.ctx.slice(),t[1](n(s))):o.ctx}function l(t,e,s,o,n,r,a){const i=function(t,e,s,o){if(t[2]&&o){const n=t[2](o(s));if(void 0===e.dirty)return n;if("object"==typeof n){const t=[],s=Math.max(e.dirty.length,n.length);for(let o=0;o<s;o+=1)t[o]=e.dirty[o]|n[o];return t}return e.dirty|n}return e.dirty}(e,o,n,r);if(i){const n=c(e,s,o,a);t.p(n,i)}}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function d(t){t.parentNode.removeChild(t)}function h(t,e){for(let s=0;s<t.length;s+=1)t[s]&&t[s].d(e)}function m(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function g(){return $(" ")}function y(){return $("")}function v(t,e,s){null==s?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function b(t){return Array.from(t.childNodes)}function w(t,e,s,o){for(let o=0;o<t.length;o+=1){const n=t[o];if(n.nodeName===e){let e=0;const r=[];for(;e<n.attributes.length;){const t=n.attributes[e++];s[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)n.removeAttribute(r[t]);return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):m(e)}function k(t,e){for(let s=0;s<t.length;s+=1){const o=t[s];if(3===o.nodeType)return o.data=""+e,t.splice(s,1)[0]}return $(e)}function A(t){return k(t," ")}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let C;function E(t){C=t}function G(){if(!C)throw new Error("Function called outside component initialization");return C}const j=[],S=[],N=[],P=[],R=Promise.resolve();let L=!1;function I(t){N.push(t)}let T=!1;const O=new Set;function q(){if(!T){T=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];E(e),z(e.$$)}for(E(null),j.length=0;S.length;)S.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];O.has(e)||(O.add(e),e())}N.length=0}while(j.length);for(;P.length;)P.pop()();L=!1,T=!1,O.clear()}}function z(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const U=new Set;let K;function B(){K={r:0,c:[],p:K}}function J(){K.r||n(K.c),K=K.p}function M(t,e){t&&t.i&&(U.delete(t),t.i(e))}function D(t,e,s,o){if(t&&t.o){if(U.has(t))return;U.add(t),K.c.push(()=>{U.delete(t),o&&(s&&t.d(1),o())}),t.o(e)}}function V(t,e){const s={},o={},n={$$scope:1};let r=t.length;for(;r--;){const a=t[r],i=e[r];if(i){for(const t in a)t in i||(o[t]=1);for(const t in i)n[t]||(s[t]=i[t],n[t]=1);t[r]=i}else for(const t in a)n[t]=1}for(const t in o)t in s||(s[t]=void 0);return s}function Y(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function F(t,e){t&&t.l(e)}function W(t,e,o){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,o),I(()=>{const e=i.map(s).filter(r);c?c.push(...e):n(e),t.$$.on_mount=[]}),l.forEach(I)}function X(t,e){const s=t.$$;null!==s.fragment&&(n(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(j.push(t),L||(L=!0,R.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,s,r,a,i,c,l=[-1]){const u=C;E(e);const f=s.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=r?r(e,f,(t,s,...o)=>{const n=o.length?o[0]:s;return p.ctx&&i(p.ctx[t],p.ctx[t]=n)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](n),h&&Q(e,t)),s}):[],p.update(),h=!0,n(p.before_update),p.fragment=!!a&&a(p.ctx),s.target){if(s.hydrate){const t=b(s.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();s.intro&&M(e.$$.fragment),W(e,s.target,s.anchor),q()}E(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(e),()=>{const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function st(e,s=t){let o;const n=[];function r(t){if(a(e,t)&&(e=t,o)){const t=!et.length;for(let t=0;t<n.length;t+=1){const s=n[t];s[1](),et.push(s,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(a,i=t){const c=[a,i];return n.push(c),1===n.length&&(o=s(r)||t),a(e),()=>{const t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(o(),o=null)}}}}const ot={};function nt(e){let s,o,n;return{c(){s=m("a"),o=m("img"),this.h()},l(t){s=w(t,"A",{href:!0});var e=b(s);o=w(e,"IMG",{alt:!0,src:!0,class:!0}),e.forEach(d),this.h()},h(){v(o,"alt","Buddha of Kamakura"),o.src!==(n="noun_great_buddha_of_kamakura_3572172.svg")&&v(o,"src","noun_great_buddha_of_kamakura_3572172.svg"),v(o,"class","svelte-nsstmh"),v(s,"href","/")},m(t,e){p(t,s,e),f(s,o)},p:t,i:t,o:t,d(t){t&&d(s)}}}class rt extends tt{constructor(t){super(),Z(this,t,null,nt,a,{})}}function at(e){let s,o,n,r,a,i,c,l,h,y,_,x;return{c(){s=m("nav"),o=m("a"),n=$("blog"),a=g(),i=m("a"),c=$("about"),h=g(),y=m("a"),_=$("rss"),this.h()},l(t){s=w(t,"NAV",{class:!0});var e=b(s);o=w(e,"A",{class:!0,href:!0});var r=b(o);n=k(r,"blog"),r.forEach(d),a=A(e),i=w(e,"A",{class:!0,href:!0});var l=b(i);c=k(l,"about"),l.forEach(d),h=A(e),y=w(e,"A",{class:!0,href:!0});var u=b(y);_=k(u,"rss"),u.forEach(d),e.forEach(d),this.h()},h(){v(o,"class",r=u(void 0===e[0]?"selected":"")+" svelte-dvivxn"),v(o,"href","."),v(i,"class",l=u("about"===e[0]?"selected":"")+" svelte-dvivxn"),v(i,"href","about"),v(y,"class",x=u("rss"===e[0]?"selected":"")+" svelte-dvivxn"),v(y,"href","rss.xml"),v(s,"class","svelte-dvivxn")},m(t,e){p(t,s,e),f(s,o),f(o,n),f(s,a),f(s,i),f(i,c),f(s,h),f(s,y),f(y,_)},p(t,[e]){1&e&&r!==(r=u(void 0===t[0]?"selected":"")+" svelte-dvivxn")&&v(o,"class",r),1&e&&l!==(l=u("about"===t[0]?"selected":"")+" svelte-dvivxn")&&v(i,"class",l),1&e&&x!==(x=u("rss"===t[0]?"selected":"")+" svelte-dvivxn")&&v(y,"class",x)},i:t,o:t,d(t){t&&d(s)}}}function it(t,e,s){let{segment:o}=e;return t.$$set=t=>{"segment"in t&&s(0,o=t.segment)},[o]}class ct extends tt{constructor(t){super(),Z(this,t,it,at,a,{segment:0})}}function lt(t){let e,s,o,n,r;return s=new ct({props:{segment:t[0]}}),n=new rt({}),{c(){e=m("header"),H(s.$$.fragment),o=g(),H(n.$$.fragment),this.h()},l(t){e=w(t,"HEADER",{class:!0});var r=b(e);F(s.$$.fragment,r),o=A(r),F(n.$$.fragment,r),r.forEach(d),this.h()},h(){v(e,"class","svelte-310tmg")},m(t,a){p(t,e,a),W(s,e,null),f(e,o),W(n,e,null),r=!0},p(t,[e]){const o={};1&e&&(o.segment=t[0]),s.$set(o)},i(t){r||(M(s.$$.fragment,t),M(n.$$.fragment,t),r=!0)},o(t){D(s.$$.fragment,t),D(n.$$.fragment,t),r=!1},d(t){t&&d(e),X(s),X(n)}}}function ut(t,e,s){let{segment:o}=e;return t.$$set=t=>{"segment"in t&&s(0,o=t.segment)},[o]}class ft extends tt{constructor(t){super(),Z(this,t,ut,lt,a,{segment:0})}}function pt(e){let s,o;return{c(){s=m("script"),this.h()},l(t){const e=x('[data-svelte="svelte-a2kvt3"]',document.head);s=w(e,"SCRIPT",{async:!0,src:!0}),b(s).forEach(d),e.forEach(d),this.h()},h(){s.async=!0,s.src!==(o="https://www.googletagmanager.com/gtag/js?id="+e[0])&&v(s,"src",o)},m(t,e){f(document.head,s)},p(t,[e]){1&e&&s.src!==(o="https://www.googletagmanager.com/gtag/js?id="+t[0])&&v(s,"src",o)},i:t,o:t,d(t){d(s)}}}function dt(t,e,s){let o,{stores:n}=e,{id:r}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",r,{send_page_view:!1}));const{page:a}=n();return i(t,a,t=>s(3,o=t)),t.$$set=t=>{"stores"in t&&s(2,n=t.stores),"id"in t&&s(0,r=t.id)},t.$$.update=()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",r,{page_path:o.path})},[r,a,n,o]}class ht extends tt{constructor(t){super(),Z(this,t,dt,pt,a,{stores:2,id:0})}}function mt(e){let s,o;return{c(){s=m("script"),this.h()},l(t){const e=x('[data-svelte="svelte-1op50db"]',document.head);s=w(e,"SCRIPT",{"data-ad-client":!0,async:!0,src:!0}),b(s).forEach(d),e.forEach(d),this.h()},h(){v(s,"data-ad-client",e[0]),s.async=!0,s.src!==(o="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")&&v(s,"src","https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")},m(t,e){f(document.head,s)},p(t,[e]){1&e&&v(s,"data-ad-client",t[0])},i:t,o:t,d(t){d(s)}}}function $t(t,e,s){let{id:o}=e;return t.$$set=t=>{"id"in t&&s(0,o=t.id)},[o]}class gt extends tt{constructor(t){super(),Z(this,t,$t,mt,a,{id:0})}}function yt(e){let s,o,n,r,a,i,c;return{c(){s=m("link"),o=m("link"),n=m("link"),r=m("link"),a=m("link"),i=m("meta"),c=m("meta"),this.h()},l(t){const e=x('[data-svelte="svelte-12mb5ri"]',document.head);s=w(e,"LINK",{rel:!0,sizes:!0,href:!0}),o=w(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),n=w(e,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),r=w(e,"LINK",{rel:!0,href:!0}),a=w(e,"LINK",{rel:!0,href:!0,color:!0}),i=w(e,"META",{name:!0,content:!0}),c=w(e,"META",{name:!0,content:!0}),e.forEach(d),this.h()},h(){v(s,"rel","apple-touch-icon"),v(s,"sizes","180x180"),v(s,"href","/apple-touch-icon.png"),v(o,"rel","icon"),v(o,"type","image/png"),v(o,"sizes","32x32"),v(o,"href","/favicon-32x32.png"),v(n,"rel","icon"),v(n,"type","image/png"),v(n,"sizes","16x16"),v(n,"href","/favicon-16x16.png"),v(r,"rel","manifest"),v(r,"href","/site.webmanifest"),v(a,"rel","mask-icon"),v(a,"href","/safari-pinned-tab.svg"),v(a,"color","#5bbad5"),v(i,"name","msapplication-TileColor"),v(i,"content","#ffc40d"),v(c,"name","theme-color"),v(c,"content","#ffffff")},m(t,e){f(document.head,s),f(document.head,o),f(document.head,n),f(document.head,r),f(document.head,a),f(document.head,i),f(document.head,c)},p:t,i:t,o:t,d(t){d(s),d(o),d(n),d(r),d(a),d(i),d(c)}}}class vt extends tt{constructor(t){super(),Z(this,t,null,yt,a,{})}}function bt(t){let e,s,o,n,r,a,i,u,h,y,_,x,C,E,G,j;s=new ht({props:{stores:be,id:wt}}),n=new gt({props:{id:kt}}),a=new vt({}),u=new ft({props:{segment:t[0]}});const S=t[2].default,N=function(t,e,s,o){if(t){const n=c(t,e,s,o);return t[0](n)}}(S,t,t[1],null);return{c(){e=m("div"),H(s.$$.fragment),o=g(),H(n.$$.fragment),r=g(),H(a.$$.fragment),i=g(),H(u.$$.fragment),h=g(),y=m("main"),N&&N.c(),_=g(),x=m("footer"),C=m("span"),E=m("a"),G=$("CC BY-SA 4.0."),this.h()},l(t){e=w(t,"DIV",{class:!0});var c=b(e);F(s.$$.fragment,c),o=A(c),F(n.$$.fragment,c),r=A(c),F(a.$$.fragment,c),i=A(c),F(u.$$.fragment,c),h=A(c),y=w(c,"MAIN",{class:!0});var l=b(y);N&&N.l(l),l.forEach(d),_=A(c),x=w(c,"FOOTER",{class:!0});var f=b(x);C=w(f,"SPAN",{});var p=b(C);E=w(p,"A",{href:!0,target:!0,rel:!0});var m=b(E);G=k(m,"CC BY-SA 4.0."),m.forEach(d),p.forEach(d),f.forEach(d),c.forEach(d),this.h()},h(){v(y,"class","svelte-wjh32h"),v(E,"href","https://creativecommons.org/licenses/by-sa/4.0/"),v(E,"target","_blank"),v(E,"rel","noreferrer noopener nofollow"),v(x,"class","svelte-wjh32h"),v(e,"class","layout svelte-wjh32h")},m(t,c){p(t,e,c),W(s,e,null),f(e,o),W(n,e,null),f(e,r),W(a,e,null),f(e,i),W(u,e,null),f(e,h),f(e,y),N&&N.m(y,null),f(e,_),f(e,x),f(x,C),f(C,E),f(E,G),j=!0},p(t,[e]){const s={};1&e&&(s.segment=t[0]),u.$set(s),N&&N.p&&2&e&&l(N,S,t,t[1],e,null,null)},i(t){j||(M(s.$$.fragment,t),M(n.$$.fragment,t),M(a.$$.fragment,t),M(u.$$.fragment,t),M(N,t),j=!0)},o(t){D(s.$$.fragment,t),D(n.$$.fragment,t),D(a.$$.fragment,t),D(u.$$.fragment,t),D(N,t),j=!1},d(t){t&&d(e),X(s),X(n),X(a),X(u),N&&N.d(t)}}}let wt="UA-114661136-2",kt="ca-pub-9613661448556355";function At(t,e,s){let{$$slots:o={},$$scope:n}=e,{segment:r}=e;return t.$$set=t=>{"segment"in t&&s(0,r=t.segment),"$$scope"in t&&s(1,n=t.$$scope)},[r,n,o]}class _t extends tt{constructor(t){super(),Z(this,t,At,bt,a,{segment:0})}}function xt(t){let e,s,o=t[1].stack+"";return{c(){e=m("pre"),s=$(o)},l(t){e=w(t,"PRE",{});var n=b(e);s=k(n,o),n.forEach(d)},m(t,o){p(t,e,o),f(e,s)},p(t,e){2&e&&o!==(o=t[1].stack+"")&&_(s,o)},d(t){t&&d(e)}}}function Ct(e){let s,o,n,r,a,i,c,l,u,h=e[1].message+"";document.title=s=e[0];let C=e[2]&&e[1].stack&&xt(e);return{c(){o=g(),n=m("h1"),r=$(e[0]),a=g(),i=m("p"),c=$(h),l=g(),C&&C.c(),u=y(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(d),o=A(t),n=w(t,"H1",{class:!0});var s=b(n);r=k(s,e[0]),s.forEach(d),a=A(t),i=w(t,"P",{class:!0});var f=b(i);c=k(f,h),f.forEach(d),l=A(t),C&&C.l(t),u=y(),this.h()},h(){v(n,"class","svelte-8od9u6"),v(i,"class","svelte-8od9u6")},m(t,e){p(t,o,e),p(t,n,e),f(n,r),p(t,a,e),p(t,i,e),f(i,c),p(t,l,e),C&&C.m(t,e),p(t,u,e)},p(t,[e]){1&e&&s!==(s=t[0])&&(document.title=s),1&e&&_(r,t[0]),2&e&&h!==(h=t[1].message+"")&&_(c,h),t[2]&&t[1].stack?C?C.p(t,e):(C=xt(t),C.c(),C.m(u.parentNode,u)):C&&(C.d(1),C=null)},i:t,o:t,d(t){t&&d(o),t&&d(n),t&&d(a),t&&d(i),t&&d(l),C&&C.d(t),t&&d(u)}}}function Et(t,e,s){let{status:o}=e,{error:n}=e;return t.$$set=t=>{"status"in t&&s(0,o=t.status),"error"in t&&s(1,n=t.error)},[o,n,false]}class Gt extends tt{constructor(t){super(),Z(this,t,Et,Ct,a,{status:0,error:1})}}function jt(t){let s,o,n;const r=[t[4].props];var a=t[4].component;function i(t){let s={};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return{props:s}}return a&&(s=new a(i())),{c(){s&&H(s.$$.fragment),o=y()},l(t){s&&F(s.$$.fragment,t),o=y()},m(t,e){s&&W(s,t,e),p(t,o,e),n=!0},p(t,e){const n=16&e?V(r,[Y(t[4].props)]):{};if(a!==(a=t[4].component)){if(s){B();const t=s;D(t.$$.fragment,1,0,()=>{X(t,1)}),J()}a?(s=new a(i()),H(s.$$.fragment),M(s.$$.fragment,1),W(s,o.parentNode,o)):s=null}else a&&s.$set(n)},i(t){n||(s&&M(s.$$.fragment,t),n=!0)},o(t){s&&D(s.$$.fragment,t),n=!1},d(t){t&&d(o),s&&X(s,t)}}}function St(t){let e,s;return e=new Gt({props:{error:t[0],status:t[1]}}),{c(){H(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,o){W(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.error=t[0]),2&s&&(o.status=t[1]),e.$set(o)},i(t){s||(M(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){X(e,t)}}}function Nt(t){let e,s,o,n;const r=[St,jt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),s=a[e]=r[e](t),{c(){s.c(),o=y()},l(t){s.l(t),o=y()},m(t,s){a[e].m(t,s),p(t,o,s),n=!0},p(t,n){let c=e;e=i(t),e===c?a[e].p(t,n):(B(),D(a[c],1,1,()=>{a[c]=null}),J(),s=a[e],s?s.p(t,n):(s=a[e]=r[e](t),s.c()),M(s,1),s.m(o.parentNode,o))},i(t){n||(M(s),n=!0)},o(t){D(s),n=!1},d(t){a[e].d(t),t&&d(o)}}}function Pt(t){let s,o;const n=[{segment:t[2][0]},t[3].props];let r={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let t=0;t<n.length;t+=1)r=e(r,n[t]);return s=new _t({props:r}),{c(){H(s.$$.fragment)},l(t){F(s.$$.fragment,t)},m(t,e){W(s,t,e),o=!0},p(t,[e]){const o=12&e?V(n,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){o||(M(s.$$.fragment,t),o=!0)},o(t){D(s.$$.fragment,t),o=!1},d(t){X(s,t)}}}function Rt(t,e,s){let{stores:o}=e,{error:n}=e,{status:r}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f,p;return u=l,G().$$.after_update.push(u),f=ot,p=o,G().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&s(5,o=t.stores),"error"in t&&s(0,n=t.error),"status"in t&&s(1,r=t.status),"segments"in t&&s(2,a=t.segments),"level0"in t&&s(3,i=t.level0),"level1"in t&&s(4,c=t.level1),"notify"in t&&s(6,l=t.notify)},[n,r,a,i,c,o,l]}class Lt extends tt{constructor(t){super(),Z(this,t,Rt,Pt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const It=[/^\/index\.json$/,/^\/sitemap\.xml$/,/^\/rss\.xml$/,/^\/posts\/ACG-animesama-59-eva-monster-shout-for-love-in-the-center-of-world\/?$/,/^\/posts\/ACG-truth-of-living-in-the-city-of-imaginary-patlabor-movie-2\/?$/,/^\/posts\/lyrics-saitou-kazuyoshi-star-over-the-sky-is-so-beautiful\/?$/,/^\/posts\/ACG-does-anno-hideaki-really-dont-know-what-he-is-making\/?$/,/^\/posts\/ACG-paintaking-of-anime-buble-tragedy-of-musashi-gundoh\/?$/,/^\/posts\/ACG-problems-about-taiwan-students-facing-japan-culture\/?$/,/^\/posts\/ACG-does-otaku-culture-really-change-after-earthquake\/?$/,/^\/posts\/ACG-creation-and-destroy-of-tokyo-patlabor-movie-1\/?$/,/^\/posts\/ACG-message-to-children-under-covid19-from-tomino\/?$/,/^\/posts\/ACG-why-you-should-not-use-interpolation-on-anime\/?$/,/^\/posts\/lyrics-higuchi-ryouichi-1-6-dream-traveller\/?$/,/^\/posts\/lyrics-yui-makino-modokashii-sekai-no-ue-de\/?$/,/^\/posts\/lyrics-the-high-lows-messenger-from-sunday\/?$/,/^\/posts\/ACG-no-one-would-laugh-at-tear-of-maimoto\/?$/,/^\/posts\/ACG-would-netflix-be-the-saviour-of-anime\/?$/,/^\/posts\/lyrics-sambomaster-people-call-it-passion\/?$/,/^\/posts\/ACG-difference-of-director-and-producer\/?$/,/^\/posts\/ACG-ghost-of-upbringing-doctrine-otaku\/?$/,/^\/posts\/ACG-what-does-anime-describe-after-war\/?$/,/^\/posts\/lyrics-h-jungle-with-t-wow-war-tonight\/?$/,/^\/posts\/ACG-interview-of-jojo-sakuga-director\/?$/,/^\/posts\/lyrics-eastern-youth-song-of-daybreak\/?$/,/^\/posts\/ACG-our-bible-just-reissue-in-kindle\/?$/,/^\/posts\/ACG-tenki-no-ko-is-sekaikei-also-not\/?$/,/^\/posts\/lyrics-morikubo-shoutarou-the-answer\/?$/,/^\/posts\/lyrics-onitaba-chihiro-waltz-with-me\/?$/,/^\/posts\/generate-presentation-from-markdown\/?$/,/^\/posts\/lyrics-coffee-color-cheer-with-life\/?$/,/^\/posts\/lyrics-tiny-xevious-sang-by-pc-6601\/?$/,/^\/posts\/ACG-list-of-worthwhile-anime-ver-2\/?$/,/^\/posts\/ACG-tenki-no-ko-from-child-welfare\/?$/,/^\/posts\/ACG-the-influences-of-naoko-yamada\/?$/,/^\/posts\/ACG-the-opening-of-shirobako-movie\/?$/,/^\/posts\/ACG-what-does-wall-of-meisaku-mean\/?$/,/^\/posts\/how-to-customize-google-form-style\/?$/,/^\/posts\/lyrics-fukuyama-yoshiki-remember16\/?$/,/^\/posts\/lyrics-jam-project-the-everlasting\/?$/,/^\/posts\/lyrics-onitaba-chihiro-wing-of-wax\/?$/,/^\/posts\/lyrics-psy-s-earth-ark-on-the-tree\/?$/,/^\/posts\/ACG-animesama-58-eva-end-of-world\/?$/,/^\/posts\/ACG-expression-of-light-and-heavy\/?$/,/^\/posts\/lyrics-fuumidou-song-of-nakimushi\/?$/,/^\/posts\/lyrics-joanne-hogg-stars-of-tears\/?$/,/^\/posts\/lyrics-onitaba-chihiro-borderline\/?$/,/^\/posts\/lyrics-sorayori-kokokara-kokokara\/?$/,/^\/posts\/ACG-understanding-staff-of-anime\/?$/,/^\/posts\/lyrics-mika-arisaka-life-goes-on\/?$/,/^\/posts\/ACG-Pause-And-Select-Apocalypse\/?$/,/^\/posts\/ACG-anime-and-verstand-of-adult\/?$/,/^\/posts\/lyrics-suzuki-yume-one-and-only\/?$/,/^\/posts\/ACG-reconguista-in-g-interview\/?$/,/^\/posts\/capitalist-realism-mark-fisher\/?$/,/^\/posts\/lyrics-bump-of-chicken-lostman\/?$/,/^\/posts\/lyrics-fujioka-fujimaki-my-son\/?$/,/^\/posts\/lyrics-indigo-blue-cobalt-blue\/?$/,/^\/posts\/lyrics-jam-project-in-my-heart\/?$/,/^\/posts\/lyrics-sunset-switch-thank-you\/?$/,/^\/posts\/lyrics-susumu-hirasawa-kingdom\/?$/,/^\/posts\/lyrics-the-pillows-funny-bunny\/?$/,/^\/posts\/lyrics-toshihide-baba-ordinary\/?$/,/^\/posts\/ACG-curse-of-anime-evangelion\/?$/,/^\/posts\/ACG-doujin-contention-history\/?$/,/^\/posts\/js-modern-feature-vs-bad-code\/?$/,/^\/posts\/lyrics-okui-aki-boys-be-brave\/?$/,/^\/posts\/lyrics-okui-aki-wind-climbing\/?$/,/^\/posts\/lyrics-onitaba-chihiro-rollin\/?$/,/^\/posts\/lyrics-see-saw-story-with-you\/?$/,/^\/posts\/ACG-linda-cube-on-ps-archive\/?$/,/^\/posts\/ACG-petition-of-sakuga-otaku\/?$/,/^\/posts\/lyrics-bump-of-chicken-guild\/?$/,/^\/posts\/lyrics-radwimps-grand-escape\/?$/,/^\/posts\/ACG-game-contention-history\/?$/,/^\/posts\/ACG-linda-cube-introduction\/?$/,/^\/posts\/f2e-05-editor-and-extension\/?$/,/^\/posts\/lyrics-dont-talk-about-life\/?$/,/^\/posts\/lyrics-furukawa-honpo-alice\/?$/,/^\/posts\/ACG-history-of-robot-anime\/?$/,/^\/posts\/ACG-thought-about-re-take\/?$/,/^\/posts\/lyrics-hamada-shogo-j-boy\/?$/,/^\/posts\/ACG-emotion-of-mother-00\/?$/,/^\/posts\/google-sheet-as-database\/?$/,/^\/posts\/ACG-ginza-demonstration\/?$/,/^\/posts\/ACG-theory-of-traveller\/?$/,/^\/posts\/lyrics-mr-children-fake\/?$/,/^\/posts\/ACG-anime-report-2019\/?$/,/^\/posts\/lyrics-buzy-venus-say\/?$/,/^\/posts\/lyrics-wonderful-life\/?$/,/^\/posts\/make-chrome-extension\/?$/,/^\/posts\/ACG-making-of-linda3\/?$/,/^\/posts\/ACG-until-anime-done\/?$/,/^\/posts\/ACG-sexual-illusion\/?$/,/^\/posts\/push-page-to-github\/?$/,/^\/posts\/ACG-links-and-note\/?$/,/^\/posts\/regular-expression\/?$/,/^\/posts\/ACG-eoe-interview\/?$/,/^\/posts\/f2e-03-javascript\/?$/,/^\/posts\/google-app-script\/?$/,/^\/posts\/ACG-on-your-mark\/?$/,/^\/posts\/blog-with-svelte\/?$/,/^\/posts\/login-by-discord\/?$/,/^\/posts\/f2e-07-unittest\/?$/,/^\/posts\/js-type-convert\/?$/,/^\/posts\/vue-fontawesome\/?$/,/^\/posts\/blog-with-hexo\/?$/,/^\/posts\/f2e-00-summary\/?$/,/^\/posts\/f2e-06-devtool\/?$/,/^\/posts\/vue-cheatsheet\/?$/,/^\/posts\/f2e-08-e-tool\/?$/,/^\/posts\/css-tailwind\/?$/,/^\/posts\/editor-Emmet\/?$/,/^\/posts\/free-hosting\/?$/,/^\/posts\/vue-gridsome\/?$/,/^\/posts\/web-security\/?$/,/^\/posts\/webpack-note\/?$/,/^\/posts\/f2e-01-html\/?$/,/^\/posts\/svelte-note\/?$/,/^\/posts\/css-doodle\/?$/,/^\/posts\/f2e-02-css\/?$/,/^\/posts\/f2e-04-git\/?$/,/^\/posts\/react-note\/?$/,/^\/posts\/twitch-api\/?$/,/^\/posts\/vue-router\/?$/,/^\/posts\/ACG-books\/?$/,/^\/posts\/css-susy3\/?$/,/^\/posts\/tool-list\/?$/,/^\/posts\/vue-note\/?$/,/^\/posts\/vue-nuxt\/?$/,/^\/posts\/vue-vite\/?$/,/^\/posts\/vue-vuex\/?$/,/^\/posts\/docsify\/?$/,/^\/posts\/aviutl\/?$/,/^\/posts\/docker\/?$/,/^\/posts\/nodecg\/?$/,/^\/posts\/python\/?$/,/^\/posts\/js-d3\/?$/,/^\/posts\/mpv\/?$/,/^\/rss\/?$/,/^\/([^/]+?)\.json$/],Tt=[{js:()=>Promise.all([import("./index.dd1c4bc0.js"),__inject_styles(["client-d6603d8f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.59cf9a63.js"),__inject_styles(["client-d6603d8f.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].1ba0a803.js"),__inject_styles(["client-d6603d8f.css","[slug]-be2f2fa9.css"])]).then((function(t){return t[0]}))}],Ot=(qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/([^/]+?)\/?$/,parts:[{i:2,params:t=>({slug:qt(t[1])})}]}]);var qt;
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
function zt(t,e,s,o){return new(s||(s=Promise))((function(n,r){function a(t){try{c(o.next(t))}catch(t){r(t)}}function i(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(a,i)}c((o=o.apply(t,e||[])).next())}))}function Ut(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Kt,Bt=1;const Jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Mt={};let Dt,Vt;function Yt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,s,o=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[s]&&(e[s]=[e[s]]),"object"==typeof e[s]?e[s].push(o):e[s]=o}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Dt))return null;let e=t.pathname.slice(Dt.length);if(""===e&&(e="/"),!It.some(t=>t.test(e)))for(let s=0;s<Ot.length;s+=1){const o=Ot[s],n=o.pattern.exec(e);if(n){const s=Yt(t.search),r=o.parts[o.parts.length-1],a=r.params?r.params(n):{},i={host:location.host,path:e,query:s,params:a};return{href:t.href,route:o,match:n,page:i}}}}function Ft(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Ut(t.target);if(!e)return;if(!e.href)return;const s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,o=String(s?e.href.baseVal:e.href);if(o===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(s?e.target.baseVal:e.target)return;const n=new URL(o);if(n.pathname===location.pathname&&n.search===location.search)return;const r=Ht(n);if(r){Qt(r,null,e.hasAttribute("sapper:noscroll"),n.hash),t.preventDefault(),Jt.pushState({id:Kt},"",n.href)}}function Wt(){return{x:pageXOffset,y:pageYOffset}}function Xt(t){if(Mt[Kt]=Wt(),t.state){const e=Ht(new URL(location.href));e?Qt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Kt=t}(Bt),Jt.replaceState({id:Kt},"",location.href)}function Qt(t,e,s,o){return zt(this,void 0,void 0,(function*(){const n=!!e;if(n)Kt=e;else{const t=Wt();Mt[Kt]=t,Kt=e=++Bt,Mt[Kt]=s?t:{x:0,y:0}}if(yield Vt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!s){let t,s=Mt[e];o&&(t=document.getElementById(o.slice(1)),t&&(s={x:0,y:t.getBoundingClientRect().top+scrollY})),Mt[Kt]=s,n||t?scrollTo(s.x,s.y):scrollTo(0,0)}}))}function Zt(t){let e=t.baseURI;if(!e){const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL}return e}let te,ee=null;function se(t){const e=Ut(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ht(new URL(t,Zt(document)));if(e)ee&&t===ee.href||(ee={href:t,promise:ve(e)}),ee.promise}(e.href)}function oe(t){clearTimeout(te),te=setTimeout(()=>{se(t)},20)}function ne(t,e={noscroll:!1,replaceState:!1}){const s=Ht(new URL(t,Zt(document)));return s?(Jt[e.replaceState?"replaceState":"pushState"]({id:Kt},"",t),Qt(s,null,e.noscroll)):(location.href=t,new Promise(()=>{}))}const re="undefined"!=typeof __SAPPER__&&__SAPPER__;let ae,ie,ce,le=!1,ue=[],fe="{}";const pe={page:function(t){const e=st(t);let s=!0;return{notify:function(){s=!0,e.update(t=>t)},set:function(t){s=!1,e.set(t)},subscribe:function(t){let o;return e.subscribe(e=>{(void 0===o||s&&e!==o)&&t(o=e)})}}}({}),preloading:st(null),session:st(re&&re.session)};let de,he,me;function $e(t,e){const{error:s}=t;return Object.assign({error:s},e)}function ge(t){return zt(this,void 0,void 0,(function*(){ae&&pe.preloading.set(!0);const e=function(t){return ee&&ee.href===t.href?ee.promise:ve(t)}(t),s=ie={},o=yield e,{redirect:n}=o;if(s===ie)if(n)yield ne(n.location,{replaceState:!0});else{const{props:e,branch:s}=o;yield ye(s,e,$e(e,t.page))}}))}function ye(t,e,s){return zt(this,void 0,void 0,(function*(){pe.page.set(s),pe.preloading.set(!1),ae?ae.$set(e):(e.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},e.level0={props:yield ce},e.notify=pe.page.notify,ae=new Lt({target:me,props:e,hydrate:!0})),ue=t,fe=JSON.stringify(s.query),le=!0,he=!1}))}function ve(t){return zt(this,void 0,void 0,(function*(){const{route:e,page:s}=t,o=s.path.split("/").filter(Boolean);let n=null;const r={error:null,status:200,segments:[o[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(n&&(n.statusCode!==t||n.location!==e))throw new Error("Conflicting redirects");n={statusCode:t,location:e}},error:(t,e)=>{r.error="string"==typeof e?new Error(e):e,r.status=t}};if(!ce){const t=()=>({});ce=re.preloaded[0]||t.call(a,{host:s.host,path:s.path,query:s.query,params:{}},de)}let i,c=1;try{const n=JSON.stringify(s.query),l=e.pattern.exec(s.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>zt(this,void 0,void 0,(function*(){const f=o[i];if(function(t,e,s,o){if(o!==fe)return!0;const n=ue[t];return!!n&&(e!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,t+2))===JSON.stringify(s.slice(1,t+2)))||void 0)}(i,f,l,n)&&(u=!0),r.segments[c]=o[i+1],!e)return{segment:f};const p=c++;if(!he&&!u&&ue[i]&&ue[i].part===e.i)return ue[i];u=!1;const{default:d,preload:h}=yield Tt[e.i].js();let m;return m=le||!re.preloaded[i+1]?h?yield h.call(a,{host:s.host,path:s.path,query:s.query,params:e.params?e.params(t.match):{}},de):{}:re.preloaded[i+1],r["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){r.error=t,r.status=500,i=[]}return{redirect:n,props:r,branch:i}}))}pe.session.subscribe(t=>zt(void 0,void 0,void 0,(function*(){if(de=t,!le)return;he=!0;const e=Ht(new URL(location.href)),s=ie={},{redirect:o,props:n,branch:r}=yield ve(e);s===ie&&(o?yield ne(o.location,{replaceState:!0}):yield ye(r,n,$e(n,e.page)))})));const be=()=>{return t=ot,G().$$.context.get(t);var t};var we,ke,Ae;we={target:document.querySelector("#sapper")},ke=we.target,me=ke,Ae=re.baseUrl,Dt=Ae,Vt=ge,"scrollRestoration"in Jt&&(Jt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Jt.scrollRestoration="auto"}),addEventListener("load",()=>{Jt.scrollRestoration="manual"}),addEventListener("click",Ft),addEventListener("popstate",Xt),addEventListener("touchstart",se),addEventListener("mousemove",oe),re.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:s}=location,{session:o,preloaded:n,status:r,error:a}=re;ce||(ce=n&&n[0]);const i={error:a,status:r,session:o,level0:{props:ce},level1:{props:{status:r,error:a},component:Gt},segments:n},c=Yt(s);ye([],i,{host:t,path:e,query:c,params:{},error:a})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;Jt.replaceState({id:Bt},"",e);const s=Ht(new URL(location.href));if(s)return Qt(s,Bt,!0,t)});export{tt as S,g as a,b,w as c,k as d,m as e,d as f,A as g,p as h,Z as i,f as j,v as k,_ as l,h as m,t as n,x as q,a as s,$ as t};

import __inject_styles from './inject_styles.5607aec6.js';