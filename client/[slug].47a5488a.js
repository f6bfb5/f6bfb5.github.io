import{S as t,i as e,s as a,x as n,e as s,t as o,c,d as r,f as i,g as l,h as m,D as d,E as u,j as h,k as p,l as f,C as v,F as w,a as y,G as E,q as g,b as x,H as $,I as T,w as D,n as A,o as M,J as b}from"./client.137a464a.js";import"./about.62f00e22.js";function L(t){let e,a,y,E;return n(t[5]),{c(){e=s("div"),a=o("Back to top"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var n=r(e);a=i(n,"Back to top"),n.forEach(l),this.h()},h(){m(e,"class","back-to-top svelte-cjsxo8"),d(e,"right",t[2]),u(e,"hidden",t[1])},m(n,s){h(n,e,s),p(e,a),y||(E=[f(window,"scroll",t[3]),f(window,"resize",t[5]),f(e,"click",j)],y=!0)},p(t,[a]){4&a&&d(e,"right",t[2]),2&a&&u(e,"hidden",t[1])},i:v,o:v,d(t){t&&l(e),y=!1,w(E)}}}function j(){document.body.scrollIntoView()}function P(){return document.documentElement||document.body}function k(t,e,a){let n,s,{showOnPx:o=150}=e,c=!0;return t.$$set=t=>{"showOnPx"in t&&a(4,o=t.showOnPx)},t.$$.update=()=>{1&t.$$.dirty&&a(2,n=s>720?s/2-360+32+"px":"2em")},[s,c,n,function(){P()&&(P().scrollTop>o?a(1,c=!1):a(1,c=!0))},o,function(){a(0,s=window.innerWidth)}]}class z extends t{constructor(t){super(),e(this,t,k,L,a,{showOnPx:4})}}function H(t){let e,a,n,d,u,f,v,w,L,j,P,k,H,I,O,R,S,V,q,B,C,_,F,G,J,W,K,N,Q,U,X,Y,Z=t[0].title+"",tt=t[0].printDate+"",et=t[0].printReadingTime+"",at=t[0].html+"";return document.title=e=t[0].title,X=new z({}),{c(){a=s("meta"),n=s("meta"),u=s("meta"),v=s("meta"),L=s("meta"),j=s("meta"),k=s("meta"),I=s("meta"),O=s("meta"),S=y(),V=s("header"),q=s("h1"),B=o(Z),C=y(),_=s("p"),F=o(tt),G=y(),J=s("small"),W=o(et),K=y(),N=s("div"),Q=s("article"),U=y(),E(X.$$.fragment),this.h()},l(t){const e=g('[data-svelte="svelte-d2s233"]',document.head);a=c(e,"META",{property:!0,content:!0}),n=c(e,"META",{property:!0,content:!0}),u=c(e,"META",{name:!0,content:!0}),v=c(e,"META",{property:!0,content:!0}),L=c(e,"META",{name:!0,content:!0}),j=c(e,"META",{name:!0,value:!0}),k=c(e,"META",{name:!0,content:!0}),I=c(e,"META",{name:!0,value:!0}),O=c(e,"META",{name:!0,value:!0}),e.forEach(l),S=x(t),V=c(t,"HEADER",{class:!0});var s=r(V);q=c(s,"H1",{class:!0});var o=r(q);B=i(o,Z),o.forEach(l),C=x(s),_=c(s,"P",{class:!0});var m=r(_);F=i(m,tt),G=x(m),J=c(m,"SMALL",{class:!0});var d=r(J);W=i(d,et),d.forEach(l),m.forEach(l),s.forEach(l),K=x(t),N=c(t,"DIV",{class:!0});var h=r(N);Q=c(h,"ARTICLE",{class:!0}),r(Q).forEach(l),U=x(h),$(X.$$.fragment,h),h.forEach(l),this.h()},h(){m(a,"property","og:type"),m(a,"content","article"),m(n,"property","og:title"),m(n,"content",d=t[0].title),m(u,"name","Description"),m(u,"content",f=t[0].excerpt),m(v,"property","og:description"),m(v,"content",w=t[0].excerpt),m(L,"name","twitter:card"),m(L,"content","summary_large_image"),m(j,"name","twitter:title"),m(j,"value",P=t[0].title),m(k,"name","twitter:description"),m(k,"content",H=t[0].excerpt),m(I,"name","twitter:label1"),m(I,"value","Published on"),m(O,"name","twitter:data1"),m(O,"value",R=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),m(q,"class","svelte-73z1by"),m(J,"class","svelte-73z1by"),m(_,"class","svelte-73z1by"),m(V,"class","svelte-73z1by"),m(Q,"class","content"),m(N,"class","container")},m(t,e){p(document.head,a),p(document.head,n),p(document.head,u),p(document.head,v),p(document.head,L),p(document.head,j),p(document.head,k),p(document.head,I),p(document.head,O),h(t,S,e),h(t,V,e),p(V,q),p(q,B),p(V,C),p(V,_),p(_,F),p(_,G),p(_,J),p(J,W),h(t,K,e),h(t,N,e),p(N,Q),Q.innerHTML=at,p(N,U),T(X,N,null),Y=!0},p(t,[a]){(!Y||1&a)&&e!==(e=t[0].title)&&(document.title=e),(!Y||1&a&&d!==(d=t[0].title))&&m(n,"content",d),(!Y||1&a&&f!==(f=t[0].excerpt))&&m(u,"content",f),(!Y||1&a&&w!==(w=t[0].excerpt))&&m(v,"content",w),(!Y||1&a&&P!==(P=t[0].title))&&m(j,"value",P),(!Y||1&a&&H!==(H=t[0].excerpt))&&m(k,"content",H),(!Y||1&a&&R!==(R=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})))&&m(O,"value",R),(!Y||1&a)&&Z!==(Z=t[0].title+"")&&D(B,Z),(!Y||1&a)&&tt!==(tt=t[0].printDate+"")&&D(F,tt),(!Y||1&a)&&et!==(et=t[0].printReadingTime+"")&&D(W,et),(!Y||1&a)&&at!==(at=t[0].html+"")&&(Q.innerHTML=at)},i(t){Y||(A(X.$$.fragment,t),Y=!0)},o(t){M(X.$$.fragment,t),Y=!1},d(t){l(a),l(n),l(u),l(v),l(L),l(j),l(k),l(I),l(O),t&&l(S),t&&l(V),t&&l(K),t&&l(N),b(X)}}}async function I({params:t,query:e}){const a=await this.fetch(t.slug+".json"),n=await a.json();if(200===a.status)return{post:n};this.error(a.status,n.message)}function O(t,e,a){let{post:n}=e;return t.$$set=t=>{"post"in t&&a(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),e(this,t,O,H,a,{post:0})}}export{I as preload};
