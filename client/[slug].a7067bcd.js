import{S as t,i as e,s as a,p as n,e as s,t as o,c,b as r,d as i,f as l,k as m,r as d,u,h,j as p,v as f,o as v,w as y,a as w,x as E,q as g,g as x,y as $,z as T,m as A,A as D,B as M,C as b}from"./client.7c53315c.js";function L(t){let e,a,w,E;return n(t[5]),{c(){e=s("div"),a=o("Back to top"),this.h()},l(t){e=c(t,"DIV",{class:!0,style:!0});var n=r(e);a=i(n,"Back to top"),n.forEach(l),this.h()},h(){m(e,"class","back-to-top svelte-cjsxo8"),d(e,"right",t[2]),u(e,"hidden",t[1])},m(n,s){h(n,e,s),p(e,a),w||(E=[f(window,"scroll",t[3]),f(window,"resize",t[5]),f(e,"click",z)],w=!0)},p(t,[a]){4&a&&d(e,"right",t[2]),2&a&&u(e,"hidden",t[1])},i:v,o:v,d(t){t&&l(e),w=!1,y(E)}}}function z(){document.body.scrollIntoView()}function P(){return document.documentElement||document.body}function j(t,e,a){let n,s,{showOnPx:o=150}=e,c=!0;return t.$$set=t=>{"showOnPx"in t&&a(4,o=t.showOnPx)},t.$$.update=()=>{1&t.$$.dirty&&a(2,n=s>720?s/2-360+32+"px":"2em")},[s,c,n,function(){P()&&(P().scrollTop>o?a(1,c=!1):a(1,c=!0))},o,function(){a(0,s=window.innerWidth)}]}class k extends t{constructor(t){super(),e(this,t,j,L,a,{showOnPx:4})}}function H(t){let e,a,n,d,u,f,v,y,L,z,P,j,H,I,O,R,S,B,V,q,C,_,W,F,G,J,K,N,Q,U,X,Y,Z=t[0].title+"",tt=t[0].printDate+"",et=t[0].printReadingTime+"",at=t[0].html+"";return document.title=e=t[0].title,X=new k({}),{c(){a=s("meta"),n=s("meta"),u=s("meta"),v=s("meta"),L=s("meta"),z=s("meta"),j=s("meta"),I=s("meta"),O=s("meta"),S=w(),B=s("header"),V=s("h1"),q=o(Z),C=w(),_=s("p"),W=o(tt),F=w(),G=s("small"),J=o(et),K=w(),N=s("div"),Q=s("article"),U=w(),E(X.$$.fragment),this.h()},l(t){const e=g('[data-svelte="svelte-d2s233"]',document.head);a=c(e,"META",{property:!0,content:!0}),n=c(e,"META",{property:!0,content:!0}),u=c(e,"META",{name:!0,content:!0}),v=c(e,"META",{property:!0,content:!0}),L=c(e,"META",{name:!0,content:!0}),z=c(e,"META",{name:!0,value:!0}),j=c(e,"META",{name:!0,content:!0}),I=c(e,"META",{name:!0,value:!0}),O=c(e,"META",{name:!0,value:!0}),e.forEach(l),S=x(t),B=c(t,"HEADER",{class:!0});var s=r(B);V=c(s,"H1",{class:!0});var o=r(V);q=i(o,Z),o.forEach(l),C=x(s),_=c(s,"P",{class:!0});var m=r(_);W=i(m,tt),F=x(m),G=c(m,"SMALL",{class:!0});var d=r(G);J=i(d,et),d.forEach(l),m.forEach(l),s.forEach(l),K=x(t),N=c(t,"DIV",{class:!0});var h=r(N);Q=c(h,"ARTICLE",{class:!0}),r(Q).forEach(l),U=x(h),$(X.$$.fragment,h),h.forEach(l),this.h()},h(){m(a,"property","og:type"),m(a,"content","article"),m(n,"property","og:title"),m(n,"content",d=t[0].title),m(u,"name","Description"),m(u,"content",f=t[0].excerpt),m(v,"property","og:description"),m(v,"content",y=t[0].excerpt),m(L,"name","twitter:card"),m(L,"content","summary_large_image"),m(z,"name","twitter:title"),m(z,"value",P=t[0].title),m(j,"name","twitter:description"),m(j,"content",H=t[0].excerpt),m(I,"name","twitter:label1"),m(I,"value","Published on"),m(O,"name","twitter:data1"),m(O,"value",R=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),m(V,"class","svelte-73z1by"),m(G,"class","svelte-73z1by"),m(_,"class","svelte-73z1by"),m(B,"class","svelte-73z1by"),m(Q,"class","content"),m(N,"class","container")},m(t,e){p(document.head,a),p(document.head,n),p(document.head,u),p(document.head,v),p(document.head,L),p(document.head,z),p(document.head,j),p(document.head,I),p(document.head,O),h(t,S,e),h(t,B,e),p(B,V),p(V,q),p(B,C),p(B,_),p(_,W),p(_,F),p(_,G),p(G,J),h(t,K,e),h(t,N,e),p(N,Q),Q.innerHTML=at,p(N,U),T(X,N,null),Y=!0},p(t,[a]){(!Y||1&a)&&e!==(e=t[0].title)&&(document.title=e),(!Y||1&a&&d!==(d=t[0].title))&&m(n,"content",d),(!Y||1&a&&f!==(f=t[0].excerpt))&&m(u,"content",f),(!Y||1&a&&y!==(y=t[0].excerpt))&&m(v,"content",y),(!Y||1&a&&P!==(P=t[0].title))&&m(z,"value",P),(!Y||1&a&&H!==(H=t[0].excerpt))&&m(j,"content",H),(!Y||1&a&&R!==(R=new Date(t[0].printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})))&&m(O,"value",R),(!Y||1&a)&&Z!==(Z=t[0].title+"")&&A(q,Z),(!Y||1&a)&&tt!==(tt=t[0].printDate+"")&&A(W,tt),(!Y||1&a)&&et!==(et=t[0].printReadingTime+"")&&A(J,et),(!Y||1&a)&&at!==(at=t[0].html+"")&&(Q.innerHTML=at)},i(t){Y||(D(X.$$.fragment,t),Y=!0)},o(t){M(X.$$.fragment,t),Y=!1},d(t){l(a),l(n),l(u),l(v),l(L),l(z),l(j),l(I),l(O),t&&l(S),t&&l(B),t&&l(K),t&&l(N),b(X)}}}async function I({params:t,query:e}){const a=await this.fetch(t.slug+".json"),n=await a.json();if(200===a.status)return{post:n};this.error(a.status,n.message)}function O(t,e,a){let{post:n}=e;return t.$$set=t=>{"post"in t&&a(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),e(this,t,O,H,a,{post:0})}}export{I as preload};
