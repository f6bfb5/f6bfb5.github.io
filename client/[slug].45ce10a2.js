import{S as t,i as e,s as n,I as s,e as l,t as a,c,f as o,h as r,g as i,j as h,J as m,K as u,k as d,l as p,m as f,o as v,L as g,a as y,d as w,n as E,p as $,C as x,M as b,x as A,y as k,z as D,A as T,v as I,w as M,B as L,N as P}from"./client.d9cb4adf.js";function V(t){let e,n,y,w;return s(t[5]),{c(){e=l("div"),n=a("Back to top"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var s=o(e);n=r(s,"Back to top"),s.forEach(i),this.h()},h(){h(e,"class","back-to-top svelte-142cfra"),m(e,"right",t[2]),u(e,"hidden",t[1])},m(s,l){d(s,e,l),p(e,n),y||(w=[f(window,"scroll",t[3]),f(window,"resize",t[5]),f(e,"click",S)],y=!0)},p(t,[n]){4&n&&m(e,"right",t[2]),2&n&&u(e,"hidden",t[1])},i:v,o:v,d(t){t&&i(e),y=!1,g(w)}}}function S(){document.body.scrollIntoView({behavior:"smooth"})}function B(){return document.documentElement||document.body}function O(t,e,n){let s,l,{showOnPx:a=150}=e,c=!0;return t.$$set=t=>{"showOnPx"in t&&n(4,a=t.showOnPx)},t.$$.update=()=>{1&t.$$.dirty&&n(2,s=l>720?l/2-360+32+"px":"2em")},[l,c,s,function(){B()&&(B().scrollTop>a?n(1,c=!1):n(1,c=!0))},a,function(){n(0,l=window.innerWidth)}]}class j extends t{constructor(t){super(),e(this,t,O,V,n,{showOnPx:4})}}function N(t,e,n){const s=t.slice();return s[3]=e[n],s}function R(t){let e,n,s,m,u,f,v,g,x=t[1],b=[];for(let e=0;e<x.length;e+=1)b[e]=q(N(t,x,e));return{c(){e=l("div"),n=l("div"),s=a(t[0]),m=y(),u=l("div"),f=l("ul");for(let t=0;t<b.length;t+=1)b[t].c();v=y(),g=l("ul"),this.h()},l(l){e=c(l,"DIV",{class:!0});var a=o(e);n=c(a,"DIV",{class:!0});var h=o(n);s=r(h,t[0]),h.forEach(i),m=w(a),u=c(a,"DIV",{class:!0});var d=o(u);f=c(d,"UL",{class:!0});var p=o(f);for(let t=0;t<b.length;t+=1)b[t].l(p);v=w(p),g=c(p,"UL",{class:!0}),o(g).forEach(i),p.forEach(i),d.forEach(i),a.forEach(i),this.h()},h(){h(n,"class","toc--title svelte-1v73k9w"),h(g,"class","svelte-1v73k9w"),h(f,"class","svelte-1v73k9w"),h(u,"class","toc-dropdown svelte-1v73k9w"),h(e,"class","toc svelte-1v73k9w")},m(t,l){d(t,e,l),p(e,n),p(n,s),p(e,m),p(e,u),p(u,f);for(let t=0;t<b.length;t+=1)b[t].m(f,null);p(f,v),p(f,g)},p(t,e){if(1&e&&E(s,t[0]),2&e){let n;for(x=t[1],n=0;n<x.length;n+=1){const s=N(t,x,n);b[n]?b[n].p(s,e):(b[n]=q(s),b[n].c(),b[n].m(f,v))}for(;n<b.length;n+=1)b[n].d(1);b.length=x.length}},d(t){t&&i(e),$(b,t)}}}function q(t){let e,n,s,m,u,f=t[3].text+"";return{c(){e=l("li"),n=l("a"),s=a(f),this.h()},l(t){e=c(t,"LI",{class:!0});var l=o(e);n=c(l,"A",{onclick:!0,title:!0,class:!0});var a=o(n);s=r(a,f),a.forEach(i),l.forEach(i),this.h()},h(){h(n,"onclick",m="document.getElementById('"+t[3].href+"')\r\n              .scrollIntoView({ behavior: 'smooth' });"),h(n,"title",u=t[3].text),h(n,"class","svelte-1v73k9w"),h(e,"class","svelte-1v73k9w")},m(t,l){d(t,e,l),p(e,n),p(n,s)},p(t,e){2&e&&f!==(f=t[3].text+"")&&E(s,f),2&e&&m!==(m="document.getElementById('"+t[3].href+"')\r\n              .scrollIntoView({ behavior: 'smooth' });")&&h(n,"onclick",m),2&e&&u!==(u=t[3].text)&&h(n,"title",u)},d(t){t&&i(e)}}}function z(t){let e,n=0!==t[1].length&&R(t);return{c(){n&&n.c(),e=x()},l(t){n&&n.l(t),e=x()},m(t,s){n&&n.m(t,s),d(t,e,s)},p(t,[s]){0!==t[1].length?n?n.p(t,s):(n=R(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:v,o:v,d(t){n&&n.d(t),t&&i(e)}}}function C(t,e,n){let s,{title:l}=e,{html:a}=e;return b(async()=>{(new DOMParser).parseFromString(a,"text/html").querySelectorAll("h2").forEach(t=>{s.push({href:t.id,text:t.innerText})}),n(1,s)}),t.$$set=t=>{"title"in t&&n(0,l=t.title),"html"in t&&n(2,a=t.html)},n(1,s=[]),[l,s,a]}class H extends t{constructor(t){super(),e(this,t,C,z,n,{title:0,html:2})}}function K(t,e,n){const s=t.slice();return s[1]=e[n],s[3]=n,s}function U(t){let e,n,s=t[1]+"";return{c(){e=l("span"),n=a(s),this.h()},l(t){e=c(t,"SPAN",{style:!0,class:!0});var l=o(e);n=r(l,s),l.forEach(i),this.h()},h(){m(e,"animation-delay",125+25*t[3]+"ms"),h(e,"class","svelte-1en3ynh")},m(t,s){d(t,e,s),p(e,n)},p(t,e){1&e&&s!==(s=t[1]+"")&&E(n,s)},d(t){t&&i(e)}}}function _(t){let e,n,s,m,u,f,v,g,x,b,V,S,B,O,N,R,q,z,C,_,F,J,W,G,Q,X,Y,Z,tt,et,nt,st,lt,at,ct,ot,rt,it,ht,mt,ut=t[0].printDate+"",dt=t[0].printReadingTime+"",pt=t[0].html+"";document.title=e=t[0].title;let ft=t[0].title,vt=[];for(let e=0;e<ft.length;e+=1)vt[e]=U(K(t,ft,e));return rt=new H({props:{title:t[0].title,html:t[0].html}}),ht=new j({}),{c(){n=l("link"),m=l("meta"),f=l("meta"),v=l("meta"),x=l("meta"),V=l("meta"),B=l("meta"),N=l("meta"),R=l("meta"),z=l("meta"),_=l("meta"),F=l("meta"),W=y(),G=l("header"),Q=l("h1");for(let t=0;t<vt.length;t+=1)vt[t].c();X=y(),Y=l("p"),Z=a(ut),tt=y(),et=l("small"),nt=a(dt),st=y(),lt=l("div"),at=l("article"),ot=y(),A(rt.$$.fragment),it=y(),A(ht.$$.fragment),this.h()},l(t){const e=k('[data-svelte="svelte-oowxqk"]',document.head);n=c(e,"LINK",{rel:!0,href:!0,class:!0}),m=c(e,"META",{property:!0,content:!0,class:!0}),f=c(e,"META",{property:!0,content:!0,class:!0}),v=c(e,"META",{property:!0,content:!0,class:!0}),x=c(e,"META",{property:!0,content:!0,class:!0}),V=c(e,"META",{name:!0,content:!0,class:!0}),B=c(e,"META",{property:!0,content:!0,class:!0}),N=c(e,"META",{name:!0,content:!0,class:!0}),R=c(e,"META",{name:!0,value:!0,class:!0}),z=c(e,"META",{name:!0,content:!0,class:!0}),_=c(e,"META",{name:!0,value:!0,class:!0}),F=c(e,"META",{name:!0,value:!0,class:!0}),e.forEach(i),W=w(t),G=c(t,"HEADER",{class:!0});var s=o(G);Q=c(s,"H1",{class:!0});var l=o(Q);for(let t=0;t<vt.length;t+=1)vt[t].l(l);l.forEach(i),X=w(s),Y=c(s,"P",{class:!0});var a=o(Y);Z=r(a,ut),tt=w(a),et=c(a,"SMALL",{class:!0});var h=o(et);nt=r(h,dt),h.forEach(i),a.forEach(i),s.forEach(i),st=w(t),lt=c(t,"DIV",{class:!0});var u=o(lt);at=c(u,"ARTICLE",{class:!0});var d=o(at);ot=w(d),D(rt.$$.fragment,d),d.forEach(i),it=w(u),D(ht.$$.fragment,u),u.forEach(i),this.h()},h(){h(n,"rel","canonical"),h(n,"href",s="https://f6bfb5.github.io/"+t[0].slug),h(n,"class","svelte-1en3ynh"),h(m,"property","og:url"),h(m,"content",u="https://f6bfb5.github.io/"+t[0].slug),h(m,"class","svelte-1en3ynh"),h(f,"property","og:type"),h(f,"content","article"),h(f,"class","svelte-1en3ynh"),h(v,"property","og:title"),h(v,"content",g=t[0].title),h(v,"class","svelte-1en3ynh"),h(x,"property","og:description"),h(x,"content",b=t[0].excerpt),h(x,"class","svelte-1en3ynh"),h(V,"name","Description"),h(V,"content",S=t[0].excerpt),h(V,"class","svelte-1en3ynh"),h(B,"property","og:image"),h(B,"content",O=t[0].image),h(B,"class","svelte-1en3ynh"),h(N,"name","twitter:card"),h(N,"content","summary_large_image"),h(N,"class","svelte-1en3ynh"),h(R,"name","twitter:title"),h(R,"value",q=t[0].title),h(R,"class","svelte-1en3ynh"),h(z,"name","twitter:description"),h(z,"content",C=t[0].excerpt),h(z,"class","svelte-1en3ynh"),h(_,"name","twitter:label1"),h(_,"value","Published on"),h(_,"class","svelte-1en3ynh"),h(F,"name","twitter:data1"),h(F,"value",J=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),h(F,"class","svelte-1en3ynh"),h(Q,"class","title svelte-1en3ynh"),h(et,"class","svelte-1en3ynh"),h(Y,"class","svelte-1en3ynh"),h(G,"class","svelte-1en3ynh"),ct=new P(ot),h(at,"class","content svelte-1en3ynh"),h(lt,"class","container svelte-1en3ynh")},m(t,e){p(document.head,n),p(document.head,m),p(document.head,f),p(document.head,v),p(document.head,x),p(document.head,V),p(document.head,B),p(document.head,N),p(document.head,R),p(document.head,z),p(document.head,_),p(document.head,F),d(t,W,e),d(t,G,e),p(G,Q);for(let t=0;t<vt.length;t+=1)vt[t].m(Q,null);p(G,X),p(G,Y),p(Y,Z),p(Y,tt),p(Y,et),p(et,nt),d(t,st,e),d(t,lt,e),p(lt,at),ct.m(pt,at),p(at,ot),T(rt,at,null),p(lt,it),T(ht,lt,null),mt=!0},p(t,[l]){if((!mt||1&l)&&e!==(e=t[0].title)&&(document.title=e),(!mt||1&l&&s!==(s="https://f6bfb5.github.io/"+t[0].slug))&&h(n,"href",s),(!mt||1&l&&u!==(u="https://f6bfb5.github.io/"+t[0].slug))&&h(m,"content",u),(!mt||1&l&&g!==(g=t[0].title))&&h(v,"content",g),(!mt||1&l&&b!==(b=t[0].excerpt))&&h(x,"content",b),(!mt||1&l&&S!==(S=t[0].excerpt))&&h(V,"content",S),(!mt||1&l&&O!==(O=t[0].image))&&h(B,"content",O),(!mt||1&l&&q!==(q=t[0].title))&&h(R,"value",q),(!mt||1&l&&C!==(C=t[0].excerpt))&&h(z,"content",C),(!mt||1&l&&J!==(J=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})))&&h(F,"value",J),1&l){let e;for(ft=t[0].title,e=0;e<ft.length;e+=1){const n=K(t,ft,e);vt[e]?vt[e].p(n,l):(vt[e]=U(n),vt[e].c(),vt[e].m(Q,null))}for(;e<vt.length;e+=1)vt[e].d(1);vt.length=ft.length}(!mt||1&l)&&ut!==(ut=t[0].printDate+"")&&E(Z,ut),(!mt||1&l)&&dt!==(dt=t[0].printReadingTime+"")&&E(nt,dt),(!mt||1&l)&&pt!==(pt=t[0].html+"")&&ct.p(pt);const a={};1&l&&(a.title=t[0].title),1&l&&(a.html=t[0].html),rt.$set(a)},i(t){mt||(I(rt.$$.fragment,t),I(ht.$$.fragment,t),mt=!0)},o(t){M(rt.$$.fragment,t),M(ht.$$.fragment,t),mt=!1},d(t){i(n),i(m),i(f),i(v),i(x),i(V),i(B),i(N),i(R),i(z),i(_),i(F),t&&i(W),t&&i(G),$(vt,t),t&&i(st),t&&i(lt),L(rt),L(ht)}}}async function F({params:t,query:e}){const n=await this.fetch(t.slug+".json"),s=await n.json();if(200===n.status)return{post:s};this.error(n.status,s.message)}function J(t,e,n){let{post:s}=e;return t.$$set=t=>{"post"in t&&n(0,s=t.post)},[s]}export default class extends t{constructor(t){super(),e(this,t,J,_,n,{post:0})}}export{F as preload};
