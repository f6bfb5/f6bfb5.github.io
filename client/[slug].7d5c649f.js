import{S as t,i as e,s as a,e as o,a as s,t as n,c as r,b as c,f as p,d as i,l as m,h as l,g as h,j as u,n as d}from"./client.6524b131.js";function E(t){var e,a,E,f,v,y,T,A,D,M,g,w,x,L,N,b,j,H,S,I,P,R,_,q,C,V,$=t.post.title,k=t.post.printDate,z=t.post.html;return document.title=e=t.post.title,{c(){a=o("meta"),E=o("meta"),v=o("meta"),T=o("meta"),D=o("meta"),M=o("meta"),w=o("meta"),L=o("meta"),N=o("meta"),j=s(),H=o("header"),S=o("h1"),I=n($),P=s(),R=o("p"),_=n(k),q=s(),C=o("div"),V=o("article"),this.h()},l(t){a=r(t,"META",{property:!0,content:!0},!1),c(a).forEach(p),E=r(t,"META",{property:!0,content:!0},!1),c(E).forEach(p),v=r(t,"META",{name:!0,content:!0},!1),c(v).forEach(p),T=r(t,"META",{property:!0,content:!0},!1),c(T).forEach(p),D=r(t,"META",{name:!0,content:!0},!1),c(D).forEach(p),M=r(t,"META",{name:!0,value:!0},!1),c(M).forEach(p),w=r(t,"META",{name:!0,content:!0},!1),c(w).forEach(p),L=r(t,"META",{name:!0,value:!0},!1),c(L).forEach(p),N=r(t,"META",{name:!0,value:!0},!1),c(N).forEach(p),j=i(t,"\n\n"),H=r(t,"HEADER",{class:!0},!1);var e=c(H);S=r(e,"H1",{class:!0},!1);var o=c(S);I=i(o,$),o.forEach(p),P=i(e,"\n  "),R=r(e,"P",{class:!0},!1);var s=c(R);_=i(s,k),s.forEach(p),e.forEach(p),q=i(t,"\n"),C=r(t,"DIV",{class:!0},!1);var n=c(C);V=r(n,"ARTICLE",{class:!0},!1),c(V).forEach(p),n.forEach(p),this.h()},h(){m(a,"property","og:type"),a.content="article",m(E,"property","og:title"),E.content=f=t.post.title,v.name="Description",v.content=y=t.post.excerpt,m(T,"property","og:description"),T.content=A=t.post.excerpt,D.name="twitter:card",D.content="summary_large_image",M.name="twitter:title",m(M,"value",g=t.post.title),w.name="twitter:description",w.content=x=t.post.excerpt,L.name="twitter:label1",m(L,"value","Published on"),N.name="twitter:data1",m(N,"value",b=new Date(t.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),S.className="svelte-1yfmhmu",R.className="svelte-1yfmhmu",H.className="svelte-1yfmhmu",V.className="content",C.className="container"},m(t,e){l(document.head,a),l(document.head,E),l(document.head,v),l(document.head,T),l(document.head,D),l(document.head,M),l(document.head,w),l(document.head,L),l(document.head,N),h(t,j,e),h(t,H,e),l(H,S),l(S,I),l(H,P),l(H,R),l(R,_),h(t,q,e),h(t,C,e),l(C,V),V.innerHTML=z},p(t,a){t.post&&e!==(e=a.post.title)&&(document.title=e),t.post&&f!==(f=a.post.title)&&(E.content=f),t.post&&y!==(y=a.post.excerpt)&&(v.content=y),t.post&&A!==(A=a.post.excerpt)&&(T.content=A),t.post&&g!==(g=a.post.title)&&m(M,"value",g),t.post&&x!==(x=a.post.excerpt)&&(w.content=x),t.post&&b!==(b=new Date(a.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}))&&m(N,"value",b),t.post&&$!==($=a.post.title)&&u(I,$),t.post&&k!==(k=a.post.printDate)&&u(_,k),t.post&&z!==(z=a.post.html)&&(V.innerHTML=z)},i:d,o:d,d(t){p(a),p(E),p(v),p(T),p(D),p(M),p(w),p(L),p(N),t&&(p(j),p(H),p(q),p(C))}}}async function f({params:t,query:e}){const a=await this.fetch(t.slug+".json"),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function v(t,e,a){let{post:o}=e;return t.$set=t=>{"post"in t&&a("post",o=t.post)},{post:o}}export default class extends t{constructor(t){super(),e(this,t,v,E,a,["post"])}}export{f as preload};
