import{S as G,i as Z,s as J,e as E,t as V,k as y,c as k,a as T,h as j,d as _,m as D,b as u,f as F,g as z,I as d,J as oe,j as Y,E as W,O as ce,u as ye,U as De,R as le,T as se,V as ne,W as Pe,X as Ie,l as ae,q as P,w as X,x,y as ee,o as L,B as te,n as K,p as Q,G as Se}from"../chunks/index-8418cccc.js";import{m as Le,t as H}from"../chunks/store-98bc4f53.js";import{b as de}from"../chunks/paths-396f020f.js";import"../chunks/index-17c965c3.js";function Me(n){let e,a,t,s,i,l,o;return{c(){e=E("div"),a=E("div"),t=V(n[0]),s=y(),i=E("div"),this.h()},l(r){e=k(r,"DIV",{class:!0,style:!0});var m=T(e);a=k(m,"DIV",{class:!0});var A=T(a);t=j(A,n[0]),A.forEach(_),s=D(m),i=k(m,"DIV",{style:!0,class:!0}),T(i).forEach(_),m.forEach(_),this.h()},h(){u(a,"class","marquee--content slideIn svelte-1s1ru60"),F(i,"display","none"),u(i,"class","slideOut svelte-1s1ru60"),u(e,"class","marquee svelte-1s1ru60"),F(e,"--slide-out-duration",n[3]),F(e,"--content-width",n[2])},m(r,m){z(r,e,m),d(e,a),d(a,t),n[5](a),d(e,s),d(e,i),l||(o=oe(a,"animationend",n[4]),l=!0)},p(r,[m]){m&1&&Y(t,r[0]),m&8&&F(e,"--slide-out-duration",r[3]),m&4&&F(e,"--content-width",r[2])},i:W,o:W,d(r){r&&_(e),n[5](null),l=!1,o()}}}function me(n){return n.length/8>6?n.length/8+"s":"6s"}function ze(n,e,a){let t;ce(n,Le,b=>a(7,t=b));let s=[...t].sort(()=>Math.random()-.5),i=s.shift(),l,o,r=me(i);function m(){a(2,o=l.offsetWidth+"px")}function A(){l.classList.contains("slideIn")?(l.classList.remove("slideIn"),l.classList.add("slideOut")):(s.length<=0&&(s=[...t].sort(()=>Math.random()-.5)),a(0,i=s.shift()),l.classList.remove("slideOut"),a(3,r=me(i)),l.classList.add("slideIn"))}ye(()=>{m()});function g(b){De[b?"unshift":"push"](()=>{l=b,a(1,l)})}return[i,l,o,r,A,g]}class Be extends G{constructor(e){super(),Z(this,e,ze,Me,J,{})}}function _e(n,e,a){const t=n.slice();return t[5]=e[a],t}function ge(n){let e,a,t,s,i,l,o,r,m,A=n[5]+"",g,b,$,h,f;return{c(){e=E("input"),s=y(),i=E("label"),l=le("svg"),o=le("path"),r=y(),m=E("span"),g=V(A),b=y(),this.h()},l(p){e=k(p,"INPUT",{class:!0,type:!0,name:!0,id:!0}),s=D(p),i=k(p,"LABEL",{class:!0,for:!0});var c=T(i);l=se(c,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var v=T(l);o=se(v,"path",{d:!0}),T(o).forEach(_),v.forEach(_),r=D(c),m=k(c,"SPAN",{});var w=T(m);g=j(w,A),w.forEach(_),b=D(c),c.forEach(_),this.h()},h(){u(e,"class","tag-checkbox svelte-1e8d81t"),u(e,"type","checkbox"),u(e,"name","filterCheckbox"),u(e,"id",a=n[5]),e.__value=t=n[5],e.value=e.__value,n[4][0].push(e),u(o,"d","M12.876 2h-8.876v9.015l10.972 11.124 9.028-9.028-11.124-11.111zm-3.139 5.737c-.684.684-1.791.684-2.475 0s-.684-1.791 0-2.474c.684-.684 1.791-.684 2.475 0 .684.683.684 1.791 0 2.474zm1.866 13.827l-1.369 1.436-10.234-10.257v-7.743h2v6.891l9.603 9.673z"),u(l,"xmlns","http://www.w3.org/2000/svg"),u(l,"width","12"),u(l,"height","12"),u(l,"viewBox","0 0 24 24"),u(l,"class","svelte-1e8d81t"),u(i,"class","tag tag-button svelte-1e8d81t"),u(i,"for",$=n[5])},m(p,c){z(p,e,c),e.checked=~n[1].indexOf(e.__value),z(p,s,c),z(p,i,c),d(i,l),d(l,o),d(i,r),d(i,m),d(m,g),d(i,b),h||(f=oe(e,"change",n[3]),h=!0)},p(p,c){c&1&&a!==(a=p[5])&&u(e,"id",a),c&1&&t!==(t=p[5])&&(e.__value=t,e.value=e.__value),c&2&&(e.checked=~p[1].indexOf(e.__value)),c&1&&A!==(A=p[5]+"")&&Y(g,A),c&1&&$!==($=p[5])&&u(i,"for",$)},d(p){p&&_(e),n[4][0].splice(n[4][0].indexOf(e),1),p&&_(s),p&&_(i),h=!1,f()}}}function Ve(n){let e,a,t,s,i,l,o,r,m,A,g,b,$=n[0],h=[];for(let f=0;f<$.length;f+=1)h[f]=ge(_e(n,$,f));return{c(){e=E("div"),a=E("input"),t=y(),s=E("label"),i=le("svg"),l=le("path"),o=y(),r=E("span"),m=V("All"),A=y();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=k(f,"DIV",{class:!0});var p=T(e);a=k(p,"INPUT",{class:!0,type:!0,name:!0,id:!0}),t=D(p),s=k(p,"LABEL",{class:!0,for:!0});var c=T(s);i=se(c,"svg",{width:!0,height:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,viewBox:!0,class:!0});var v=T(i);l=se(v,"path",{d:!0}),T(l).forEach(_),v.forEach(_),o=D(c),r=k(c,"SPAN",{});var w=T(r);m=j(w,"All"),w.forEach(_),c.forEach(_),A=D(p);for(let M=0;M<h.length;M+=1)h[M].l(p);p.forEach(_),this.h()},h(){u(a,"class","tag-checkbox svelte-1e8d81t"),u(a,"type","checkbox"),u(a,"name","filterCheckbox"),u(a,"id","All"),a.value="All",u(l,"d","M14.872 17.711c-.29.54-1.002.918-1.729.918-.447 0-.849-.147-1.15-.416-.301.269-.704.416-1.149.416-.729 0-1.44-.378-1.73-.918-.309-.576.536-1.14.94-.424.102.181.432.375.761.375.692 0 .631-.738.631-1.3-.423-.211-.717-.63-.717-1.006 0-.527.57-.762 1.271-.762s1.271.235 1.271.762c0 .38-.299.805-.73 1.014 0 .587-.056 1.254.599 1.254.341 0 .729-.208.863-.393.45-.624 1.185-.106.869.48zm.128-6.211c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.822-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm-6-2.667c-.46 0-.834.374-.834.834 0 .459.374.833.834.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.834-.822-1.834-1.833 0-1.012.823-1.834 1.834-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm12.113 3.986c-.78-7.61-2.462-11.289-4.568-13.869-1.21 1.055-2.044 1.769-3.321 3.667-.74-.121-1.769-.119-2.486.006-1.538-1.838-2.574-2.676-3.813-3.654-2.037 2.484-3.503 6.137-4.117 13.723-1.14-1.732-1.808-3.801-1.808-6.026 0-6.065 4.934-11 11-11 6.065 0 11 4.935 11 11 0 2.277-.696 4.396-1.887 6.153zm-9.113 4.847c-3.298 0-6.254-1.466-8.272-3.772.304-4.521 1.094-10.361 3.357-13.517 1.728 1.421 2.717 2.682 3.276 3.359.748-.19 1.823-.358 3.316.007.96-1.452 1.508-2.222 2.74-3.347 1.989 2.717 3.26 7.267 3.8 13.558-2.017 2.271-4.949 3.712-8.217 3.712zm0-23c-6.623 0-12 5.377-12 12 0 6.627 5.4 12 12 12 6.559 0 12-5.33 12-12 0-6.623-5.377-12-12-12z"),u(i,"width","12"),u(i,"height","12"),u(i,"xmlns","http://www.w3.org/2000/svg"),u(i,"fill-rule","evenodd"),u(i,"clip-rule","evenodd"),u(i,"viewBox","0 0 24 24"),u(i,"class","svelte-1e8d81t"),u(s,"class","tag tag-button svelte-1e8d81t"),u(s,"for","All"),u(e,"class","tag-group svelte-1e8d81t")},m(f,p){z(f,e,p),d(e,a),d(e,t),d(e,s),d(s,i),d(i,l),d(s,o),d(s,r),d(r,m),d(e,A);for(let c=0;c<h.length;c+=1)h[c].m(e,null);g||(b=oe(a,"click",n[2]),g=!0)},p(f,[p]){if(p&3){$=f[0];let c;for(c=0;c<$.length;c+=1){const v=_e(f,$,c);h[c]?h[c].p(v,p):(h[c]=ge(v),h[c].c(),h[c].m(e,null))}for(;c<h.length;c+=1)h[c].d(1);h.length=$.length}},i:W,o:W,d(f){f&&_(e),ne(h,f),g=!1,b()}}}function je(n,e,a){let t;ce(n,H,r=>a(1,t=r));let{allPostsTags:s}=e;function i(){let r=document.getElementsByName("filterCheckbox");for(let m=0;m<r.length;m++)r[m].checked=!1;Pe(H,t=[],t)}const l=[[]];function o(){t=Ie(l[0],this.__value,this.checked),H.set(t)}return n.$$set=r=>{"allPostsTags"in r&&a(0,s=r.allPostsTags)},[s,t,i,o,l]}class Oe extends G{constructor(e){super(),Z(this,e,je,Ve,J,{allPostsTags:0})}}function Ne(n){let e,a;return{c(){e=E("span"),a=V(n[0]),this.h()},l(t){e=k(t,"SPAN",{class:!0});var s=T(e);a=j(s,n[0]),s.forEach(_),this.h()},h(){u(e,"class","tag svelte-mlct3g")},m(t,s){z(t,e,s),d(e,a)},p(t,[s]){s&1&&Y(a,t[0])},i:W,o:W,d(t){t&&_(e)}}}function qe(n,e,a){let{tag:t}=e;return n.$$set=s=>{"tag"in s&&a(0,t=s.tag)},[t]}class Ue extends G{constructor(e){super(),Z(this,e,qe,Ne,J,{tag:0})}}function pe(n,e,a){const t=n.slice();return t[8]=e[a],t}function ve(n,e,a){const t=n.slice();return t[11]=e[a].slug,t[12]=e[a].metadata.title,t[13]=e[a].metadata.date,t[14]=e[a].metadata.tags,t}function be(n,e,a){const t=n.slice();return t[17]=e[a],t}function we(n){let e,a,t=n[8]+"",s,i,l,o,r,m=n[8]+"",A,g,b;function $(...c){return n[6](n[8],...c)}let h=n[1].filter(n[5]).filter($).sort(n[7]),f=[];for(let c=0;c<h.length;c+=1)f[c]=Ae(ve(n,h,c));const p=c=>L(f[c],1,1,()=>{f[c]=null});return{c(){e=E("div"),a=E("h2"),s=V(t),i=y(),l=E("ul");for(let c=0;c<f.length;c+=1)f[c].c();o=y(),r=E("div"),A=V(m),g=y(),this.h()},l(c){e=k(c,"DIV",{class:!0});var v=T(e);a=k(v,"H2",{class:!0});var w=T(a);s=j(w,t),w.forEach(_),i=D(v),l=k(v,"UL",{class:!0});var M=T(l);for(let U=0;U<f.length;U+=1)f[U].l(M);M.forEach(_),o=D(v),r=k(v,"DIV",{class:!0});var O=T(r);A=j(O,m),O.forEach(_),g=D(v),v.forEach(_),this.h()},h(){u(a,"class","svelte-cpnmpu"),u(l,"class","articles-list svelte-cpnmpu"),u(r,"class","articles-list--bordered-title svelte-cpnmpu"),u(e,"class","articles-list--container svelte-cpnmpu")},m(c,v){z(c,e,v),d(e,a),d(a,s),d(e,i),d(e,l);for(let w=0;w<f.length;w+=1)f[w].m(l,null);d(e,o),d(e,r),d(r,A),d(e,g),b=!0},p(c,v){if(n=c,(!b||v&1)&&t!==(t=n[8]+"")&&Y(s,t),v&7){h=n[1].filter(n[5]).filter($).sort(n[7]);let w;for(w=0;w<h.length;w+=1){const M=ve(n,h,w);f[w]?(f[w].p(M,v),P(f[w],1)):(f[w]=Ae(M),f[w].c(),P(f[w],1),f[w].m(l,null))}for(K(),w=h.length;w<f.length;w+=1)p(w);Q()}(!b||v&1)&&m!==(m=n[8]+"")&&Y(A,m)},i(c){if(!b){for(let v=0;v<h.length;v+=1)P(f[v]);b=!0}},o(c){f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)L(f[v]);b=!1},d(c){c&&_(e),ne(f,c)}}}function Ee(n){let e,a,t=n[14].split(", "),s=[];for(let l=0;l<t.length;l+=1)s[l]=ke(be(n,t,l));const i=l=>L(s[l],1,1,()=>{s[l]=null});return{c(){e=E("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=k(l,"DIV",{class:!0});var o=T(e);for(let r=0;r<s.length;r+=1)s[r].l(o);o.forEach(_),this.h()},h(){u(e,"class","articles-list--tags svelte-cpnmpu")},m(l,o){z(l,e,o);for(let r=0;r<s.length;r+=1)s[r].m(e,null);a=!0},p(l,o){if(o&7){t=l[14].split(", ");let r;for(r=0;r<t.length;r+=1){const m=be(l,t,r);s[r]?(s[r].p(m,o),P(s[r],1)):(s[r]=ke(m),s[r].c(),P(s[r],1),s[r].m(e,null))}for(K(),r=t.length;r<s.length;r+=1)i(r);Q()}},i(l){if(!a){for(let o=0;o<t.length;o+=1)P(s[o]);a=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)L(s[o]);a=!1},d(l){l&&_(e),ne(s,l)}}}function ke(n){let e,a;return e=new Ue({props:{tag:n[17]}}),{c(){X(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,s){ee(e,t,s),a=!0},p(t,s){const i={};s&7&&(i.tag=t[17]),e.$set(i)},i(t){a||(P(e.$$.fragment,t),a=!0)},o(t){L(e.$$.fragment,t),a=!1},d(t){te(e,t)}}}function Ae(n){let e,a,t,s=new Date(n[13]).toLocaleDateString("en-US",{month:"2-digit"})+"/"+new Date(n[13]).toLocaleDateString("en-US",{day:"2-digit"}),i,l,o,r=n[12]+"",m,A,g,b,$,h=n[14]&&Ee(n);return{c(){e=E("li"),a=E("div"),t=E("time"),i=V(s),l=y(),o=E("a"),m=V(r),g=y(),h&&h.c(),b=y(),this.h()},l(f){e=k(f,"LI",{class:!0});var p=T(e);a=k(p,"DIV",{class:!0});var c=T(a);t=k(c,"TIME",{class:!0});var v=T(t);i=j(v,s),v.forEach(_),l=D(c),o=k(c,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var w=T(o);m=j(w,r),w.forEach(_),c.forEach(_),g=D(p),h&&h.l(p),b=D(p),p.forEach(_),this.h()},h(){u(t,"class","svelte-cpnmpu"),u(o,"href",A=`${de}/${n[11]}`),u(o,"sveltekit:prefetch",""),u(o,"class","svelte-cpnmpu"),u(a,"class","articles-list--link svelte-cpnmpu"),u(e,"class","svelte-cpnmpu")},m(f,p){z(f,e,p),d(e,a),d(a,t),d(t,i),d(a,l),d(a,o),d(o,m),d(e,g),h&&h.m(e,null),d(e,b),$=!0},p(f,p){(!$||p&7)&&s!==(s=new Date(f[13]).toLocaleDateString("en-US",{month:"2-digit"})+"/"+new Date(f[13]).toLocaleDateString("en-US",{day:"2-digit"}))&&Y(i,s),(!$||p&7)&&r!==(r=f[12]+"")&&Y(m,r),(!$||p&7&&A!==(A=`${de}/${f[11]}`))&&u(o,"href",A),f[14]?h?(h.p(f,p),p&7&&P(h,1)):(h=Ee(f),h.c(),P(h,1),h.m(e,b)):h&&(K(),L(h,1,1,()=>{h=null}),Q())},i(f){$||(P(h),$=!0)},o(f){L(h),$=!1},d(f){f&&_(e),h&&h.d()}}}function Te(n){let e=n[1].filter(n[3]).some(s),a,t;function s(...l){return n[4](n[8],...l)}let i=e&&we(n);return{c(){i&&i.c(),a=ae()},l(l){i&&i.l(l),a=ae()},m(l,o){i&&i.m(l,o),z(l,a,o),t=!0},p(l,o){n=l,o&7&&(e=n[1].filter(n[3]).some(s)),e?i?(i.p(n,o),o&7&&P(i,1)):(i=we(n),i.c(),P(i,1),i.m(a.parentNode,a)):i&&(K(),L(i,1,1,()=>{i=null}),Q())},i(l){t||(P(i),t=!0)},o(l){L(i),t=!1},d(l){i&&i.d(l),l&&_(a)}}}function Ye(n){let e,a,t=n[0],s=[];for(let l=0;l<t.length;l+=1)s[l]=Te(pe(n,t,l));const i=l=>L(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=ae()},l(l){for(let o=0;o<s.length;o+=1)s[o].l(l);e=ae()},m(l,o){for(let r=0;r<s.length;r+=1)s[r].m(l,o);z(l,e,o),a=!0},p(l,[o]){if(o&7){t=l[0];let r;for(r=0;r<t.length;r+=1){const m=pe(l,t,r);s[r]?(s[r].p(m,o),P(s[r],1)):(s[r]=Te(m),s[r].c(),P(s[r],1),s[r].m(e.parentNode,e))}for(K(),r=t.length;r<s.length;r+=1)i(r);Q()}},i(l){if(!a){for(let o=0;o<t.length;o+=1)P(s[o]);a=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)L(s[o]);a=!1},d(l){ne(s,l),l&&_(e)}}}function $e(n,e){if(e.length==0)return!0;let a=n==null?void 0:n.split(", ");if(!a||a.length==0)return!!e.includes("Other");let t=!1;for(let s=0;s<e.length;s++)a.includes(e[s])&&(t=!0);return t}function Ce(n,e,a){let t;ce(n,H,g=>a(2,t=g));let{allPostsYears:s}=e,{posts:i}=e;H.set(t);const l=g=>$e(g.metadata.tags,t),o=(g,b)=>new Date(b.metadata.date).getFullYear()===g,r=g=>$e(g.metadata.tags,t),m=(g,b)=>new Date(b.metadata.date).getFullYear()===g,A=(g,b)=>new Date(b.metadata.date)-new Date(g.metadata.date);return n.$$set=g=>{"allPostsYears"in g&&a(0,s=g.allPostsYears),"posts"in g&&a(1,i=g.posts)},[s,i,t,l,o,r,m,A]}class Fe extends G{constructor(e){super(),Z(this,e,Ce,Ye,J,{allPostsYears:0,posts:1})}}function We(n){let e,a,t,s,i,l,o,r,m,A,g,b,$,h,f,p,c,v,w,M,O,U,N,re,q,ie,R;return b=new Be({}),O=new Oe({props:{allPostsTags:n[2]}}),N=new Fe({props:{allPostsYears:n[1],posts:n[0]}}),{c(){e=E("meta"),a=E("meta"),t=E("meta"),s=E("meta"),i=E("meta"),l=E("meta"),o=E("meta"),r=E("meta"),m=E("meta"),A=y(),g=E("div"),X(b.$$.fragment),$=y(),h=E("div"),f=E("h1"),p=V("Articles"),c=y(),v=E("div"),w=V("Articles"),M=y(),X(O.$$.fragment),U=y(),X(N.$$.fragment),re=y(),q=E("a"),ie=V("github.com/f6bfb5"),this.h()},l(I){const S=Se('[data-svelte="svelte-jgxmyp"]',document.head);e=k(S,"META",{property:!0,content:!0}),a=k(S,"META",{property:!0,content:!0}),t=k(S,"META",{name:!0,content:!0}),s=k(S,"META",{property:!0,content:!0}),i=k(S,"META",{property:!0,content:!0}),l=k(S,"META",{name:!0,content:!0}),o=k(S,"META",{name:!0,value:!0}),r=k(S,"META",{name:!0,content:!0}),m=k(S,"META",{name:!0,content:!0}),S.forEach(_),A=D(I),g=k(I,"DIV",{class:!0});var B=T(g);x(b.$$.fragment,B),$=D(B),h=k(B,"DIV",{class:!0});var C=T(h);f=k(C,"H1",{"data-text":!0,class:!0});var ue=T(f);p=j(ue,"Articles"),ue.forEach(_),c=D(C),v=k(C,"DIV",{class:!0});var fe=T(v);w=j(fe,"Articles"),fe.forEach(_),M=D(C),x(O.$$.fragment,C),C.forEach(_),U=D(B),x(N.$$.fragment,B),re=D(B),q=k(B,"A",{href:!0,rel:!0,style:!0});var he=T(q);ie=j(he,"github.com/f6bfb5"),he.forEach(_),B.forEach(_),this.h()},h(){document.title="f6bfb5's Blog",u(e,"property","og:type"),u(e,"content","article"),u(a,"property","og:title"),u(a,"content","f6bfb5's blog"),u(t,"name","Description"),u(t,"content","\u96E8\u5929\u6C7A\u884C"),u(s,"property","og:description"),u(s,"content","\u96E8\u5929\u6C7A\u884C"),u(i,"property","og:image"),u(i,"content","https://i.imgur.com/frsPyaZ.png"),u(l,"name","twitter:card"),u(l,"content","summary_large_image"),u(o,"name","twitter:title"),u(o,"value","f6bfb5's blog"),u(r,"name","twitter:description"),u(r,"content","\u96E8\u5929\u6C7A\u884C"),u(m,"name","google-site-verification"),u(m,"content","C2koaxPTcaB21Oif-Z4U_lyVAKw4H7hb-pM5OiGcSWQ"),u(f,"data-text","Articles"),u(f,"class","svelte-zjj8oi"),u(v,"class","h1-bordered svelte-zjj8oi"),u(h,"class","navbar svelte-zjj8oi"),u(q,"href","https://github.com/f6bfb5"),u(q,"rel","me"),F(q,"display","none"),u(g,"class","container svelte-zjj8oi")},m(I,S){d(document.head,e),d(document.head,a),d(document.head,t),d(document.head,s),d(document.head,i),d(document.head,l),d(document.head,o),d(document.head,r),d(document.head,m),z(I,A,S),z(I,g,S),ee(b,g,null),d(g,$),d(g,h),d(h,f),d(f,p),d(h,c),d(h,v),d(v,w),d(h,M),ee(O,h,null),d(g,U),ee(N,g,null),d(g,re),d(g,q),d(q,ie),R=!0},p(I,[S]){const B={};S&1&&(B.posts=I[0]),N.$set(B)},i(I){R||(P(b.$$.fragment,I),P(O.$$.fragment,I),P(N.$$.fragment,I),R=!0)},o(I){L(b.$$.fragment,I),L(O.$$.fragment,I),L(N.$$.fragment,I),R=!1},d(I){_(e),_(a),_(t),_(s),_(i),_(l),_(o),_(r),_(m),I&&_(A),I&&_(g),te(b),te(O),te(N)}}}async function Xe({fetch:n}){return{props:{posts:await n("/posts.json").then(a=>a.json())}}}function He(n){return[...new Set(n.map(e=>new Date(e.metadata.date).getFullYear()))].sort((e,a)=>a-e)}function Ge(n){let e=!1,a=[...new Set(n.map(t=>{if(t.metadata.tags)return t.metadata.tags.split(", ");e||(e=!0)}).filter(t=>!!t).flat().sort())];return e&&a.push("Other"),a}function Ze(n,e,a){let{posts:t}=e,s=He(t),i=Ge(t);return n.$$set=l=>{"posts"in l&&a(0,t=l.posts)},[t,s,i]}class xe extends G{constructor(e){super(),Z(this,e,Ze,We,J,{posts:0})}}export{xe as default,Xe as load};
