import{S as t,i as e,s as n,x as a,e as s,t as l,c,d as o,f as r,g as i,h,y as m,z as u,j as d,k as p,l as f,n as v,A as g,a as y,b as E,p as w,m as $,B as x,C as D,q as A,D as T,E as q,F as M,G as b,H as I,I as L}from"./client.c777220a.js";function P(t){let e,n,y,E;return a(t[5]),{c(){e=s("div"),n=l("Back to top"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var a=o(e);n=r(a,"Back to top"),a.forEach(i),this.h()},h(){h(e,"class","back-to-top svelte-cjsxo8"),m(e,"right",t[2]),u(e,"hidden",t[1])},m(a,s){d(a,e,s),p(e,n),y||(E=[f(window,"scroll",t[3]),f(window,"resize",t[5]),f(e,"click",V)],y=!0)},p(t,[n]){4&n&&m(e,"right",t[2]),2&n&&u(e,"hidden",t[1])},i:v,o:v,d(t){t&&i(e),y=!1,g(E)}}}function V(){document.body.scrollIntoView()}function z(){return document.documentElement||document.body}function S(t,e,n){let a,s,{showOnPx:l=150}=e,c=!0;return t.$$set=t=>{"showOnPx"in t&&n(4,l=t.showOnPx)},t.$$.update=()=>{1&t.$$.dirty&&n(2,a=s>720?s/2-360+32+"px":"2em")},[s,c,a,function(){z()&&(z().scrollTop>l?n(1,c=!1):n(1,c=!0))},l,function(){n(0,s=window.innerWidth)}]}class j extends t{constructor(t){super(),e(this,t,S,P,n,{showOnPx:4})}}function k(t,e,n){const a=t.slice();return a[3]=e[n],a}function O(t){let e,n,a,m,u,f,v,g,x,D=t[1],A=[];for(let e=0;e<D.length;e+=1)A[e]=R(k(t,D,e));return{c(){e=s("div"),n=s("div"),a=l(t[0]),m=y(),u=s("ul");for(let t=0;t<A.length;t+=1)A[t].c();f=y(),v=s("ul"),g=y(),x=s("div"),this.h()},l(s){e=c(s,"DIV",{class:!0});var l=o(e);n=c(l,"DIV",{class:!0});var h=o(n);a=r(h,t[0]),h.forEach(i),m=E(l),u=c(l,"UL",{class:!0});var d=o(u);for(let t=0;t<A.length;t+=1)A[t].l(d);f=E(d),v=c(d,"UL",{class:!0}),o(v).forEach(i),d.forEach(i),l.forEach(i),g=E(s),x=c(s,"DIV",{class:!0}),o(x).forEach(i),this.h()},h(){h(n,"class","toc--title svelte-yq6itt"),h(v,"class","svelte-yq6itt"),h(u,"class","svelte-yq6itt"),h(e,"class","toc svelte-yq6itt"),h(x,"class","toc-menu svelte-yq6itt")},m(t,s){d(t,e,s),p(e,n),p(n,a),p(e,m),p(e,u);for(let t=0;t<A.length;t+=1)A[t].m(u,null);p(u,f),p(u,v),d(t,g,s),d(t,x,s)},p(t,e){if(1&e&&w(a,t[0]),2&e){let n;for(D=t[1],n=0;n<D.length;n+=1){const a=k(t,D,n);A[n]?A[n].p(a,e):(A[n]=R(a),A[n].c(),A[n].m(u,f))}for(;n<A.length;n+=1)A[n].d(1);A.length=D.length}},d(t){t&&i(e),$(A,t),t&&i(g),t&&i(x)}}}function R(t){let e,n,a,m,u,f=t[3].text+"";return{c(){e=s("li"),n=s("a"),a=l(f),this.h()},l(t){e=c(t,"LI",{class:!0});var s=o(e);n=c(s,"A",{href:!0,title:!0,class:!0});var l=o(n);a=r(l,f),l.forEach(i),s.forEach(i),this.h()},h(){h(n,"href",m=t[3].href),h(n,"title",u=t[3].text),h(n,"class","svelte-yq6itt"),h(e,"class","svelte-yq6itt")},m(t,s){d(t,e,s),p(e,n),p(n,a)},p(t,e){2&e&&f!==(f=t[3].text+"")&&w(a,f),2&e&&m!==(m=t[3].href)&&h(n,"href",m),2&e&&u!==(u=t[3].text)&&h(n,"title",u)},d(t){t&&i(e)}}}function B(t){let e,n=0!==t[1].length&&O(t);return{c(){e=s("div"),n&&n.c(),this.h()},l(t){e=c(t,"DIV",{class:!0});var a=o(e);n&&n.l(a),a.forEach(i),this.h()},h(){h(e,"class","toc-dropdown svelte-yq6itt")},m(t,a){d(t,e,a),n&&n.m(e,null)},p(t,[a]){0!==t[1].length?n?n.p(t,a):(n=O(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:v,o:v,d(t){t&&i(e),n&&n.d()}}}function H(t,e,n){let a,{title:s}=e,{html:l}=e;return x(async()=>{(new DOMParser).parseFromString(l,"text/html").querySelectorAll("h2").forEach(t=>{a.push({href:window.location.origin+window.location.pathname+"#"+t.id,text:t.innerText})}),console.log(a),n(1,a)}),t.$$set=t=>{"title"in t&&n(0,s=t.title),"html"in t&&n(2,l=t.html)},n(1,a=[]),[s,a,l]}class C extends t{constructor(t){super(),e(this,t,H,B,n,{title:0,html:2})}}function F(t){let e,n,a,m,u,f,v,g,$,x,P,V,z,S,k,O,R,B,H,F,U,_,G,W,J,K,N,Q,X,Y,Z,tt,et,nt,at,st=t[0].title+"",lt=t[0].printDate+"",ct=t[0].printReadingTime+"",ot=t[0].html+"";return document.title=e=t[0].title,tt=new C({props:{title:t[0].title,html:t[0].html}}),nt=new j({}),{c(){n=s("meta"),a=s("meta"),u=s("meta"),v=s("meta"),$=s("meta"),x=s("meta"),V=s("meta"),S=s("meta"),k=s("meta"),R=y(),B=s("header"),H=s("h1"),F=l(st),U=y(),_=s("p"),G=l(lt),W=y(),J=s("small"),K=l(ct),N=y(),Q=s("div"),X=s("article"),Z=y(),D(tt.$$.fragment),et=y(),D(nt.$$.fragment),this.h()},l(t){const e=A('[data-svelte="svelte-d2s233"]',document.head);n=c(e,"META",{property:!0,content:!0}),a=c(e,"META",{property:!0,content:!0}),u=c(e,"META",{name:!0,content:!0}),v=c(e,"META",{property:!0,content:!0}),$=c(e,"META",{name:!0,content:!0}),x=c(e,"META",{name:!0,value:!0}),V=c(e,"META",{name:!0,content:!0}),S=c(e,"META",{name:!0,value:!0}),k=c(e,"META",{name:!0,value:!0}),e.forEach(i),R=E(t),B=c(t,"HEADER",{class:!0});var s=o(B);H=c(s,"H1",{class:!0});var l=o(H);F=r(l,st),l.forEach(i),U=E(s),_=c(s,"P",{class:!0});var h=o(_);G=r(h,lt),W=E(h),J=c(h,"SMALL",{class:!0});var m=o(J);K=r(m,ct),m.forEach(i),h.forEach(i),s.forEach(i),N=E(t),Q=c(t,"DIV",{class:!0});var d=o(Q);X=c(d,"ARTICLE",{class:!0});var p=o(X);Z=E(p),T(tt.$$.fragment,p),p.forEach(i),et=E(d),T(nt.$$.fragment,d),d.forEach(i),this.h()},h(){h(n,"property","og:type"),h(n,"content","article"),h(a,"property","og:title"),h(a,"content",m=t[0].title),h(u,"name","Description"),h(u,"content",f=t[0].excerpt),h(v,"property","og:description"),h(v,"content",g=t[0].excerpt),h($,"name","twitter:card"),h($,"content","summary_large_image"),h(x,"name","twitter:title"),h(x,"value",P=t[0].title),h(V,"name","twitter:description"),h(V,"content",z=t[0].excerpt),h(S,"name","twitter:label1"),h(S,"value","Published on"),h(k,"name","twitter:data1"),h(k,"value",O=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),h(H,"class","svelte-73z1by"),h(J,"class","svelte-73z1by"),h(_,"class","svelte-73z1by"),h(B,"class","svelte-73z1by"),Y=new L(Z),h(X,"class","content"),h(Q,"class","container")},m(t,e){p(document.head,n),p(document.head,a),p(document.head,u),p(document.head,v),p(document.head,$),p(document.head,x),p(document.head,V),p(document.head,S),p(document.head,k),d(t,R,e),d(t,B,e),p(B,H),p(H,F),p(B,U),p(B,_),p(_,G),p(_,W),p(_,J),p(J,K),d(t,N,e),d(t,Q,e),p(Q,X),Y.m(ot,X),p(X,Z),q(tt,X,null),p(Q,et),q(nt,Q,null),at=!0},p(t,[n]){(!at||1&n)&&e!==(e=t[0].title)&&(document.title=e),(!at||1&n&&m!==(m=t[0].title))&&h(a,"content",m),(!at||1&n&&f!==(f=t[0].excerpt))&&h(u,"content",f),(!at||1&n&&g!==(g=t[0].excerpt))&&h(v,"content",g),(!at||1&n&&P!==(P=t[0].title))&&h(x,"value",P),(!at||1&n&&z!==(z=t[0].excerpt))&&h(V,"content",z),(!at||1&n&&O!==(O=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})))&&h(k,"value",O),(!at||1&n)&&st!==(st=t[0].title+"")&&w(F,st),(!at||1&n)&&lt!==(lt=t[0].printDate+"")&&w(G,lt),(!at||1&n)&&ct!==(ct=t[0].printReadingTime+"")&&w(K,ct),(!at||1&n)&&ot!==(ot=t[0].html+"")&&Y.p(ot);const s={};1&n&&(s.title=t[0].title),1&n&&(s.html=t[0].html),tt.$set(s)},i(t){at||(M(tt.$$.fragment,t),M(nt.$$.fragment,t),at=!0)},o(t){b(tt.$$.fragment,t),b(nt.$$.fragment,t),at=!1},d(t){i(n),i(a),i(u),i(v),i($),i(x),i(V),i(S),i(k),t&&i(R),t&&i(B),t&&i(N),t&&i(Q),I(tt),I(nt)}}}async function U({params:t,query:e}){const n=await this.fetch(t.slug+".json"),a=await n.json();if(200===n.status)return{post:a};this.error(n.status,a.message)}function _(t,e,n){let{post:a}=e;return t.$$set=t=>{"post"in t&&n(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),e(this,t,_,F,n,{post:0})}}export{U as preload};
