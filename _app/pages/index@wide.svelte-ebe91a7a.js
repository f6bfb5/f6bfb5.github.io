import{S as H,i as G,s as Z,e as w,t as B,k as D,c as E,a as k,h as j,d as v,m as P,b as f,f as Y,g as L,I as d,J as ie,j as C,E as F,O as ce,u as $e,U as De,R as te,T as le,V as ae,W as Pe,X as Se,l as se,q as A,w as R,x as X,y as x,o as I,B as ee,n as J,p as K,G as Ie}from"../chunks/index-8418cccc.js";import{m as Le,t as W}from"../chunks/store-aaa8e5d0.js";import{b as de}from"../chunks/paths-396f020f.js";import"../chunks/index-17c965c3.js";function Me(n){let e,a,t,s,o,l,i;return{c(){e=w("div"),a=w("div"),t=B(n[0]),s=D(),o=w("div"),this.h()},l(r){e=E(r,"DIV",{class:!0,style:!0});var g=k(e);a=E(g,"DIV",{class:!0});var b=k(a);t=j(b,n[0]),b.forEach(v),s=P(g),o=E(g,"DIV",{style:!0,class:!0}),k(o).forEach(v),g.forEach(v),this.h()},h(){f(a,"class","marquee--content slideIn svelte-1s1ru60"),Y(o,"display","none"),f(o,"class","slideOut svelte-1s1ru60"),f(e,"class","marquee svelte-1s1ru60"),Y(e,"--slide-out-duration",n[3]),Y(e,"--content-width",n[2])},m(r,g){L(r,e,g),d(e,a),d(a,t),n[5](a),d(e,s),d(e,o),l||(i=ie(a,"animationend",n[4]),l=!0)},p(r,[g]){g&1&&C(t,r[0]),g&8&&Y(e,"--slide-out-duration",r[3]),g&4&&Y(e,"--content-width",r[2])},i:F,o:F,d(r){r&&v(e),n[5](null),l=!1,i()}}}function me(n){return n.length/8>6?n.length/8+"s":"6s"}function ze(n,e,a){let t;ce(n,Le,y=>a(7,t=y));let s=[...t].sort(()=>Math.random()-.5),o=s.shift(),l,i,r=me(o);function g(){a(2,i=l.offsetWidth+"px")}function b(){l.classList.contains("slideIn")?(l.classList.remove("slideIn"),l.classList.add("slideOut")):(s.length<=0&&(s=[...t].sort(()=>Math.random()-.5)),a(0,o=s.shift()),l.classList.remove("slideOut"),a(3,r=me(o)),l.classList.add("slideIn"))}$e(()=>{g()});function u(y){De[y?"unshift":"push"](()=>{l=y,a(1,l)})}return[o,l,i,r,b,u]}class Be extends H{constructor(e){super(),G(this,e,ze,Me,Z,{})}}function _e(n,e,a){const t=n.slice();return t[5]=e[a],t}function ge(n){let e,a,t,s,o,l,i,r,g,b=n[5]+"",u,y,p,c,h;return{c(){e=w("input"),s=D(),o=w("label"),l=te("svg"),i=te("path"),r=D(),g=w("span"),u=B(b),y=D(),this.h()},l(m){e=E(m,"INPUT",{class:!0,type:!0,name:!0,id:!0}),s=P(m),o=E(m,"LABEL",{class:!0,for:!0});var _=k(o);l=le(_,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,class:!0});var T=k(l);i=le(T,"path",{d:!0}),k(i).forEach(v),T.forEach(v),r=P(_),g=E(_,"SPAN",{});var M=k(g);u=j(M,b),M.forEach(v),y=P(_),_.forEach(v),this.h()},h(){f(e,"class","tag-checkbox svelte-1e8d81t"),f(e,"type","checkbox"),f(e,"name","filterCheckbox"),f(e,"id",a=n[5]),e.__value=t=n[5],e.value=e.__value,n[4][0].push(e),f(i,"d","M12.876 2h-8.876v9.015l10.972 11.124 9.028-9.028-11.124-11.111zm-3.139 5.737c-.684.684-1.791.684-2.475 0s-.684-1.791 0-2.474c.684-.684 1.791-.684 2.475 0 .684.683.684 1.791 0 2.474zm1.866 13.827l-1.369 1.436-10.234-10.257v-7.743h2v6.891l9.603 9.673z"),f(l,"xmlns","http://www.w3.org/2000/svg"),f(l,"width","12"),f(l,"height","12"),f(l,"viewBox","0 0 24 24"),f(l,"class","svelte-1e8d81t"),f(o,"class","tag tag-button svelte-1e8d81t"),f(o,"for",p=n[5])},m(m,_){L(m,e,_),e.checked=~n[1].indexOf(e.__value),L(m,s,_),L(m,o,_),d(o,l),d(l,i),d(o,r),d(o,g),d(g,u),d(o,y),c||(h=ie(e,"change",n[3]),c=!0)},p(m,_){_&1&&a!==(a=m[5])&&f(e,"id",a),_&1&&t!==(t=m[5])&&(e.__value=t,e.value=e.__value),_&2&&(e.checked=~m[1].indexOf(e.__value)),_&1&&b!==(b=m[5]+"")&&C(u,b),_&1&&p!==(p=m[5])&&f(o,"for",p)},d(m){m&&v(e),n[4][0].splice(n[4][0].indexOf(e),1),m&&v(s),m&&v(o),c=!1,h()}}}function je(n){let e,a,t,s,o,l,i,r,g,b,u,y,p=n[0],c=[];for(let h=0;h<p.length;h+=1)c[h]=ge(_e(n,p,h));return{c(){e=w("div"),a=w("input"),t=D(),s=w("label"),o=te("svg"),l=te("path"),i=D(),r=w("span"),g=B("All"),b=D();for(let h=0;h<c.length;h+=1)c[h].c();this.h()},l(h){e=E(h,"DIV",{class:!0});var m=k(e);a=E(m,"INPUT",{class:!0,type:!0,name:!0,id:!0}),t=P(m),s=E(m,"LABEL",{class:!0,for:!0});var _=k(s);o=le(_,"svg",{width:!0,height:!0,xmlns:!0,"fill-rule":!0,"clip-rule":!0,viewBox:!0,class:!0});var T=k(o);l=le(T,"path",{d:!0}),k(l).forEach(v),T.forEach(v),i=P(_),r=E(_,"SPAN",{});var M=k(r);g=j(M,"All"),M.forEach(v),_.forEach(v),b=P(m);for(let N=0;N<c.length;N+=1)c[N].l(m);m.forEach(v),this.h()},h(){f(a,"class","tag-checkbox svelte-1e8d81t"),f(a,"type","checkbox"),f(a,"name","filterCheckbox"),f(a,"id","All"),a.value="All",f(l,"d","M14.872 17.711c-.29.54-1.002.918-1.729.918-.447 0-.849-.147-1.15-.416-.301.269-.704.416-1.149.416-.729 0-1.44-.378-1.73-.918-.309-.576.536-1.14.94-.424.102.181.432.375.761.375.692 0 .631-.738.631-1.3-.423-.211-.717-.63-.717-1.006 0-.527.57-.762 1.271-.762s1.271.235 1.271.762c0 .38-.299.805-.73 1.014 0 .587-.056 1.254.599 1.254.341 0 .729-.208.863-.393.45-.624 1.185-.106.869.48zm.128-6.211c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.822-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm-6-2.667c-.46 0-.834.374-.834.834 0 .459.374.833.834.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.834-.822-1.834-1.833 0-1.012.823-1.834 1.834-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm12.113 3.986c-.78-7.61-2.462-11.289-4.568-13.869-1.21 1.055-2.044 1.769-3.321 3.667-.74-.121-1.769-.119-2.486.006-1.538-1.838-2.574-2.676-3.813-3.654-2.037 2.484-3.503 6.137-4.117 13.723-1.14-1.732-1.808-3.801-1.808-6.026 0-6.065 4.934-11 11-11 6.065 0 11 4.935 11 11 0 2.277-.696 4.396-1.887 6.153zm-9.113 4.847c-3.298 0-6.254-1.466-8.272-3.772.304-4.521 1.094-10.361 3.357-13.517 1.728 1.421 2.717 2.682 3.276 3.359.748-.19 1.823-.358 3.316.007.96-1.452 1.508-2.222 2.74-3.347 1.989 2.717 3.26 7.267 3.8 13.558-2.017 2.271-4.949 3.712-8.217 3.712zm0-23c-6.623 0-12 5.377-12 12 0 6.627 5.4 12 12 12 6.559 0 12-5.33 12-12 0-6.623-5.377-12-12-12z"),f(o,"width","12"),f(o,"height","12"),f(o,"xmlns","http://www.w3.org/2000/svg"),f(o,"fill-rule","evenodd"),f(o,"clip-rule","evenodd"),f(o,"viewBox","0 0 24 24"),f(o,"class","svelte-1e8d81t"),f(s,"class","tag tag-button svelte-1e8d81t"),f(s,"for","All"),f(e,"class","tag-group svelte-1e8d81t")},m(h,m){L(h,e,m),d(e,a),d(e,t),d(e,s),d(s,o),d(o,l),d(s,i),d(s,r),d(r,g),d(e,b);for(let _=0;_<c.length;_+=1)c[_].m(e,null);u||(y=ie(a,"click",n[2]),u=!0)},p(h,[m]){if(m&3){p=h[0];let _;for(_=0;_<p.length;_+=1){const T=_e(h,p,_);c[_]?c[_].p(T,m):(c[_]=ge(T),c[_].c(),c[_].m(e,null))}for(;_<c.length;_+=1)c[_].d(1);c.length=p.length}},i:F,o:F,d(h){h&&v(e),ae(c,h),u=!1,y()}}}function Oe(n,e,a){let t;ce(n,W,r=>a(1,t=r));let{allPostsTags:s}=e;function o(){let r=document.getElementsByName("filterCheckbox");for(let g=0;g<r.length;g++)r[g].checked=!1;Pe(W,t=[],t)}const l=[[]];function i(){t=Se(l[0],this.__value,this.checked),W.set(t)}return n.$$set=r=>{"allPostsTags"in r&&a(0,s=r.allPostsTags)},[s,t,o,i,l]}class Ve extends H{constructor(e){super(),G(this,e,Oe,je,Z,{allPostsTags:0})}}function Ne(n){let e,a;return{c(){e=w("span"),a=B(n[0]),this.h()},l(t){e=E(t,"SPAN",{class:!0});var s=k(e);a=j(s,n[0]),s.forEach(v),this.h()},h(){f(e,"class","tag svelte-mlct3g")},m(t,s){L(t,e,s),d(e,a)},p(t,[s]){s&1&&C(a,t[0])},i:F,o:F,d(t){t&&v(e)}}}function qe(n,e,a){let{tag:t}=e;return n.$$set=s=>{"tag"in s&&a(0,t=s.tag)},[t]}class Ue extends H{constructor(e){super(),G(this,e,qe,Ne,Z,{tag:0})}}function ve(n,e,a){const t=n.slice();return t[8]=e[a],t}function pe(n,e,a){const t=n.slice();return t[11]=e[a].slug,t[12]=e[a].metadata.title,t[13]=e[a].metadata.date,t[14]=e[a].metadata.tags,t}function be(n,e,a){const t=n.slice();return t[17]=e[a],t}function we(n){let e,a,t=n[8]+"",s,o,l,i,r;function g(...p){return n[6](n[8],...p)}let b=n[1].filter(n[5]).filter(g).sort(n[7]),u=[];for(let p=0;p<b.length;p+=1)u[p]=ke(pe(n,b,p));const y=p=>I(u[p],1,1,()=>{u[p]=null});return{c(){e=w("div"),a=w("h2"),s=B(t),o=D(),l=w("ul");for(let p=0;p<u.length;p+=1)u[p].c();i=D(),this.h()},l(p){e=E(p,"DIV",{class:!0});var c=k(e);a=E(c,"H2",{class:!0});var h=k(a);s=j(h,t),h.forEach(v),o=P(c),l=E(c,"UL",{class:!0});var m=k(l);for(let _=0;_<u.length;_+=1)u[_].l(m);m.forEach(v),i=P(c),c.forEach(v),this.h()},h(){f(a,"class","svelte-19y7s28"),f(l,"class","articles-list svelte-19y7s28"),f(e,"class","articles-list--container svelte-19y7s28")},m(p,c){L(p,e,c),d(e,a),d(a,s),d(e,o),d(e,l);for(let h=0;h<u.length;h+=1)u[h].m(l,null);d(e,i),r=!0},p(p,c){if(n=p,(!r||c&1)&&t!==(t=n[8]+"")&&C(s,t),c&7){b=n[1].filter(n[5]).filter(g).sort(n[7]);let h;for(h=0;h<b.length;h+=1){const m=pe(n,b,h);u[h]?(u[h].p(m,c),A(u[h],1)):(u[h]=ke(m),u[h].c(),A(u[h],1),u[h].m(l,null))}for(J(),h=b.length;h<u.length;h+=1)y(h);K()}},i(p){if(!r){for(let c=0;c<b.length;c+=1)A(u[c]);r=!0}},o(p){u=u.filter(Boolean);for(let c=0;c<u.length;c+=1)I(u[c]);r=!1},d(p){p&&v(e),ae(u,p)}}}function Ee(n){let e,a,t=n[14].split(", "),s=[];for(let l=0;l<t.length;l+=1)s[l]=ye(be(n,t,l));const o=l=>I(s[l],1,1,()=>{s[l]=null});return{c(){e=w("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=E(l,"DIV",{class:!0});var i=k(e);for(let r=0;r<s.length;r+=1)s[r].l(i);i.forEach(v),this.h()},h(){f(e,"class","articles-list--tags svelte-19y7s28")},m(l,i){L(l,e,i);for(let r=0;r<s.length;r+=1)s[r].m(e,null);a=!0},p(l,i){if(i&7){t=l[14].split(", ");let r;for(r=0;r<t.length;r+=1){const g=be(l,t,r);s[r]?(s[r].p(g,i),A(s[r],1)):(s[r]=ye(g),s[r].c(),A(s[r],1),s[r].m(e,null))}for(J(),r=t.length;r<s.length;r+=1)o(r);K()}},i(l){if(!a){for(let i=0;i<t.length;i+=1)A(s[i]);a=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)I(s[i]);a=!1},d(l){l&&v(e),ae(s,l)}}}function ye(n){let e,a;return e=new Ue({props:{tag:n[17]}}),{c(){R(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,s){x(e,t,s),a=!0},p(t,s){const o={};s&7&&(o.tag=t[17]),e.$set(o)},i(t){a||(A(e.$$.fragment,t),a=!0)},o(t){I(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function ke(n){let e,a,t,s=new Date(n[13]).toLocaleDateString("en-US",{month:"2-digit"})+"/"+new Date(n[13]).toLocaleDateString("en-US",{day:"2-digit"}),o,l,i,r=n[12]+"",g,b,u,y,p,c=n[14]&&Ee(n);return{c(){e=w("li"),a=w("div"),t=w("time"),o=B(s),l=D(),i=w("a"),g=B(r),u=D(),c&&c.c(),y=D(),this.h()},l(h){e=E(h,"LI",{class:!0});var m=k(e);a=E(m,"DIV",{class:!0});var _=k(a);t=E(_,"TIME",{class:!0});var T=k(t);o=j(T,s),T.forEach(v),l=P(_),i=E(_,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var M=k(i);g=j(M,r),M.forEach(v),_.forEach(v),u=P(m),c&&c.l(m),y=P(m),m.forEach(v),this.h()},h(){f(t,"class","svelte-19y7s28"),f(i,"href",b=`${de}/${n[11]}`),f(i,"sveltekit:prefetch",""),f(i,"class","svelte-19y7s28"),f(a,"class","articles-list--link svelte-19y7s28"),f(e,"class","svelte-19y7s28")},m(h,m){L(h,e,m),d(e,a),d(a,t),d(t,o),d(a,l),d(a,i),d(i,g),d(e,u),c&&c.m(e,null),d(e,y),p=!0},p(h,m){(!p||m&7)&&s!==(s=new Date(h[13]).toLocaleDateString("en-US",{month:"2-digit"})+"/"+new Date(h[13]).toLocaleDateString("en-US",{day:"2-digit"}))&&C(o,s),(!p||m&7)&&r!==(r=h[12]+"")&&C(g,r),(!p||m&7&&b!==(b=`${de}/${h[11]}`))&&f(i,"href",b),h[14]?c?(c.p(h,m),m&7&&A(c,1)):(c=Ee(h),c.c(),A(c,1),c.m(e,y)):c&&(J(),I(c,1,1,()=>{c=null}),K())},i(h){p||(A(c),p=!0)},o(h){I(c),p=!1},d(h){h&&v(e),c&&c.d()}}}function Ae(n){let e=n[1].filter(n[3]).some(s),a,t;function s(...l){return n[4](n[8],...l)}let o=e&&we(n);return{c(){o&&o.c(),a=se()},l(l){o&&o.l(l),a=se()},m(l,i){o&&o.m(l,i),L(l,a,i),t=!0},p(l,i){n=l,i&7&&(e=n[1].filter(n[3]).some(s)),e?o?(o.p(n,i),i&7&&A(o,1)):(o=we(n),o.c(),A(o,1),o.m(a.parentNode,a)):o&&(J(),I(o,1,1,()=>{o=null}),K())},i(l){t||(A(o),t=!0)},o(l){I(o),t=!1},d(l){o&&o.d(l),l&&v(a)}}}function Ye(n){let e,a,t=n[0],s=[];for(let l=0;l<t.length;l+=1)s[l]=Ae(ve(n,t,l));const o=l=>I(s[l],1,1,()=>{s[l]=null});return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=se()},l(l){for(let i=0;i<s.length;i+=1)s[i].l(l);e=se()},m(l,i){for(let r=0;r<s.length;r+=1)s[r].m(l,i);L(l,e,i),a=!0},p(l,[i]){if(i&7){t=l[0];let r;for(r=0;r<t.length;r+=1){const g=ve(l,t,r);s[r]?(s[r].p(g,i),A(s[r],1)):(s[r]=Ae(g),s[r].c(),A(s[r],1),s[r].m(e.parentNode,e))}for(J(),r=t.length;r<s.length;r+=1)o(r);K()}},i(l){if(!a){for(let i=0;i<t.length;i+=1)A(s[i]);a=!0}},o(l){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)I(s[i]);a=!1},d(l){ae(s,l),l&&v(e)}}}function Te(n,e){if(e.length==0)return!0;let a=n==null?void 0:n.split(", ");if(!a||a.length==0)return!!e.includes("Other");let t=!1;for(let s=0;s<e.length;s++)a.includes(e[s])&&(t=!0);return t}function Ce(n,e,a){let t;ce(n,W,u=>a(2,t=u));let{allPostsYears:s}=e,{posts:o}=e;W.set(t);const l=u=>Te(u.metadata.tags,t),i=(u,y)=>new Date(y.metadata.date).getFullYear()===u,r=u=>Te(u.metadata.tags,t),g=(u,y)=>new Date(y.metadata.date).getFullYear()===u,b=(u,y)=>new Date(y.metadata.date)-new Date(u.metadata.date);return n.$$set=u=>{"allPostsYears"in u&&a(0,s=u.allPostsYears),"posts"in u&&a(1,o=u.posts)},[s,o,t,l,i,r,g,b]}class Fe extends H{constructor(e){super(),G(this,e,Ce,Ye,Z,{allPostsYears:0,posts:1})}}function We(n){let e,a,t,s,o,l,i,r,g,b,u,y,p,c,h,m,_,T,M,N,q,ne,O,re,V,oe,Q;return y=new Be({}),q=new Ve({props:{allPostsTags:n[2]}}),O=new Fe({props:{allPostsYears:n[1],posts:n[0]}}),{c(){e=w("meta"),a=w("meta"),t=w("meta"),s=w("meta"),o=w("meta"),l=w("meta"),i=w("meta"),r=w("meta"),g=w("meta"),b=D(),u=w("div"),R(y.$$.fragment),p=D(),c=w("div"),h=w("h1"),m=B("Articles"),_=D(),T=w("div"),M=B("Articles"),N=D(),R(q.$$.fragment),ne=D(),R(O.$$.fragment),re=D(),V=w("a"),oe=B("github.com/f6bfb5"),this.h()},l($){const S=Ie('[data-svelte="svelte-jgxmyp"]',document.head);e=E(S,"META",{property:!0,content:!0}),a=E(S,"META",{property:!0,content:!0}),t=E(S,"META",{name:!0,content:!0}),s=E(S,"META",{property:!0,content:!0}),o=E(S,"META",{property:!0,content:!0}),l=E(S,"META",{name:!0,content:!0}),i=E(S,"META",{name:!0,value:!0}),r=E(S,"META",{name:!0,content:!0}),g=E(S,"META",{name:!0,content:!0}),S.forEach(v),b=P($),u=E($,"DIV",{class:!0});var z=k(u);X(y.$$.fragment,z),p=P(z),c=E(z,"DIV",{class:!0});var U=k(c);h=E(U,"H1",{"data-text":!0,class:!0});var ue=k(h);m=j(ue,"Articles"),ue.forEach(v),_=P(U),T=E(U,"DIV",{class:!0});var fe=k(T);M=j(fe,"Articles"),fe.forEach(v),N=P(U),X(q.$$.fragment,U),U.forEach(v),ne=P(z),X(O.$$.fragment,z),re=P(z),V=E(z,"A",{href:!0,rel:!0,style:!0});var he=k(V);oe=j(he,"github.com/f6bfb5"),he.forEach(v),z.forEach(v),this.h()},h(){document.title="f6bfb5's Blog",f(e,"property","og:type"),f(e,"content","article"),f(a,"property","og:title"),f(a,"content","f6bfb5's blog"),f(t,"name","Description"),f(t,"content","\u96E8\u5929\u6C7A\u884C"),f(s,"property","og:description"),f(s,"content","\u96E8\u5929\u6C7A\u884C"),f(o,"property","og:image"),f(o,"content","https://i.imgur.com/frsPyaZ.png"),f(l,"name","twitter:card"),f(l,"content","summary_large_image"),f(i,"name","twitter:title"),f(i,"value","f6bfb5's blog"),f(r,"name","twitter:description"),f(r,"content","\u96E8\u5929\u6C7A\u884C"),f(g,"name","google-site-verification"),f(g,"content","C2koaxPTcaB21Oif-Z4U_lyVAKw4H7hb-pM5OiGcSWQ"),f(h,"data-text","Articles"),f(h,"class","svelte-zjj8oi"),f(T,"class","h1-bordered svelte-zjj8oi"),f(c,"class","navbar svelte-zjj8oi"),f(V,"href","https://github.com/f6bfb5"),f(V,"rel","me"),Y(V,"display","none"),f(u,"class","container svelte-zjj8oi")},m($,S){d(document.head,e),d(document.head,a),d(document.head,t),d(document.head,s),d(document.head,o),d(document.head,l),d(document.head,i),d(document.head,r),d(document.head,g),L($,b,S),L($,u,S),x(y,u,null),d(u,p),d(u,c),d(c,h),d(h,m),d(c,_),d(c,T),d(T,M),d(c,N),x(q,c,null),d(u,ne),x(O,u,null),d(u,re),d(u,V),d(V,oe),Q=!0},p($,[S]){const z={};S&1&&(z.posts=$[0]),O.$set(z)},i($){Q||(A(y.$$.fragment,$),A(q.$$.fragment,$),A(O.$$.fragment,$),Q=!0)},o($){I(y.$$.fragment,$),I(q.$$.fragment,$),I(O.$$.fragment,$),Q=!1},d($){v(e),v(a),v(t),v(s),v(o),v(l),v(i),v(r),v(g),$&&v(b),$&&v(u),ee(y),ee(q),ee(O)}}}async function Xe({fetch:n}){return{props:{posts:await n("/posts.json").then(a=>a.json())}}}function He(n){return[...new Set(n.map(e=>new Date(e.metadata.date).getFullYear()))].sort((e,a)=>a-e)}function Ge(n){let e=!1,a=[...new Set(n.map(t=>{if(t.metadata.tags)return t.metadata.tags.split(", ");e||(e=!0)}).filter(t=>!!t).flat().sort())];return e&&a.push("Other"),a}function Ze(n,e,a){let{posts:t}=e,s=He(t),o=Ge(t);return n.$$set=l=>{"posts"in l&&a(0,t=l.posts)},[t,s,o]}class xe extends H{constructor(e){super(),G(this,e,Ze,We,Z,{posts:0})}}export{xe as default,Xe as load};