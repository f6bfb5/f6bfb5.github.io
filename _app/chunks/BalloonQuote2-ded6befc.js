import{S as N,i as P,s as T,e as k,t as J,c as w,a as q,h as K,d,b as h,g as b,F as z,j as O,G as E,k as y,m as B,f as v,E as I,w as S,l as V,x as R,y as M,n as j,o as C,B as D,p as G,q as g}from"./index-e9af3959.js";function A(s){let e,i;return{c(){e=k("span"),i=J(s[0]),this.h()},l(l){e=w(l,"SPAN",{class:!0});var t=q(e);i=K(t,s[0]),t.forEach(d),this.h()},h(){h(e,"class","circle-border-content svelte-sb3t2")},m(l,t){b(l,e,t),z(e,i)},p(l,t){t&1&&O(i,l[0])},d(l){l&&d(e)}}}function H(s){let e,i;return{c(){e=k("img"),this.h()},l(l){e=w(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","circle-border-content image svelte-sb3t2"),E(e.src,i=s[2])||h(e,"src",i),h(e,"alt","circle-bordered")},m(l,t){b(l,e,t)},p(l,t){t&4&&!E(e.src,i=l[2])&&h(e,"src",i)},d(l){l&&d(e)}}}function U(s){let e,i,l=s[0]!=null&&A(s),t=s[2]!=null&&H(s);return{c(){e=k("div"),l&&l.c(),i=y(),t&&t.c(),this.h()},l(f){e=w(f,"DIV",{class:!0,style:!0});var r=q(e);l&&l.l(r),i=B(r),t&&t.l(r),r.forEach(d),this.h()},h(){h(e,"class","circle-border svelte-sb3t2"),v(e,"--size",s[3]),v(e,"border","3px solid "+s[4]),v(e,"color",s[1]),v(e,"background-color",s[5])},m(f,r){b(f,e,r),l&&l.m(e,null),z(e,i),t&&t.m(e,null)},p(f,[r]){f[0]!=null?l?l.p(f,r):(l=A(f),l.c(),l.m(e,i)):l&&(l.d(1),l=null),f[2]!=null?t?t.p(f,r):(t=H(f),t.c(),t.m(e,null)):t&&(t.d(1),t=null),r&8&&v(e,"--size",f[3]),r&16&&v(e,"border","3px solid "+f[4]),r&2&&v(e,"color",f[1]),r&32&&v(e,"background-color",f[5])},i:I,o:I,d(f){f&&d(e),l&&l.d(),t&&t.d()}}}function W(s,e,i){let{text:l}=e,{textColor:t="black"}=e,{image:f}=e,{size:r="80px"}=e,{borderColor:a="skyblue"}=e,{backgroundColor:o="white"}=e;return s.$$set=n=>{"text"in n&&i(0,l=n.text),"textColor"in n&&i(1,t=n.textColor),"image"in n&&i(2,f=n.image),"size"in n&&i(3,r=n.size),"borderColor"in n&&i(4,a=n.borderColor),"backgroundColor"in n&&i(5,o=n.backgroundColor)},[l,t,f,r,a,o]}class le extends N{constructor(e){super(),P(this,e,W,U,T,{text:0,textColor:1,image:2,size:3,borderColor:4,backgroundColor:5})}}function X(s){let e,i;return{c(){e=k("span"),i=J(s[0]),this.h()},l(l){e=w(l,"SPAN",{style:!0});var t=q(e);i=K(t,s[0]),t.forEach(d),this.h()},h(){h(e,"style",s[1])},m(l,t){b(l,e,t),z(e,i)},p(l,[t]){t&1&&O(i,l[0]),t&2&&h(e,"style",l[1])},i:I,o:I,d(l){l&&d(e)}}}function Y(s,e,i){let{size:l=2}=e,{color:t="#242222"}=e,{text:f="text"}=e;const r=o=>"#"+o.match(/[a-f0-9]{2}/gi).map(n=>(255-parseInt(n,16)|0).toString(16).replace(/^([a-f0-9])$/,"0$1")).join("");let a="text-shadow: ";for(let o=l*-1;o<=l;o++)for(let n=l*-1;n<=l;n++)a+=o==l&&n==l?`${o}px ${n}px ${t};`:`${o}px ${n}px ${t},`;return a+=`color: ${r(t)};`,s.$$set=o=>{"size"in o&&i(2,l=o.size),"color"in o&&i(3,t=o.color),"text"in o&&i(0,f=o.text)},[f,a,l,t]}class Z extends N{constructor(e){super(),P(this,e,Y,X,T,{size:2,color:3,text:0})}}function L(s){let e;return{c(){e=k("p"),this.h()},l(i){e=w(i,"P",{class:!0});var l=q(e);l.forEach(d),this.h()},h(){h(e,"class","svelte-1dv68iz")},m(i,l){b(i,e,l),e.innerHTML=s[0]},p(i,l){l&1&&(e.innerHTML=i[0])},d(i){i&&d(e)}}}function Q(s){let e,i;return{c(){e=k("img"),this.h()},l(l){e=w(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){E(e.src,i=s[1])||h(e,"src",i),h(e,"alt","image-in-balloon"),h(e,"class","svelte-1dv68iz")},m(l,t){b(l,e,t)},p(l,t){t&2&&!E(e.src,i=l[1])&&h(e,"src",i)},d(l){l&&d(e)}}}function F(s){let e,i,l;var t=s[2];function f(r){return{props:{text:r[3]!=null?r[3]:""}}}return t&&(e=new t(f(s))),{c(){e&&S(e.$$.fragment),i=V()},l(r){e&&R(e.$$.fragment,r),i=V()},m(r,a){e&&M(e,r,a),b(r,i,a),l=!0},p(r,a){const o={};if(a&8&&(o.text=r[3]!=null?r[3]:""),t!==(t=r[2])){if(e){j();const n=e;C(n.$$.fragment,1,0,()=>{D(n,1)}),G()}t?(e=new t(f(r)),S(e.$$.fragment),g(e.$$.fragment,1),M(e,i.parentNode,i)):e=null}else t&&e.$set(o)},i(r){l||(e&&g(e.$$.fragment,r),l=!0)},o(r){e&&C(e.$$.fragment,r),l=!1},d(r){r&&d(i),e&&D(e,r)}}}function p(s){let e,i,l;return i=new Z({props:{text:"\u25BC"}}),{c(){e=k("div"),S(i.$$.fragment),this.h()},l(t){e=w(t,"DIV",{class:!0});var f=q(e);R(i.$$.fragment,f),f.forEach(d),this.h()},h(){h(e,"class","balloon-arrow svelte-1dv68iz")},m(t,f){b(t,e,f),M(i,e,null),l=!0},i(t){l||(g(i.$$.fragment,t),l=!0)},o(t){C(i.$$.fragment,t),l=!1},d(t){t&&d(e),D(i)}}}function x(s){let e,i,l,t,f,r,a,o=s[0]!=null&&L(s),n=s[1]!=null&&Q(s),c=s[2]!=null&&F(s),_=s[5]&&p();return{c(){e=k("div"),o&&o.c(),i=y(),n&&n.c(),l=y(),c&&c.c(),t=y(),_&&_.c(),this.h()},l(u){e=w(u,"DIV",{class:!0,style:!0});var m=q(e);o&&o.l(m),i=B(m),n&&n.l(m),l=B(m),c&&c.l(m),t=B(m),_&&_.l(m),m.forEach(d),this.h()},h(){h(e,"class",f="balloon-quote "+(s[4]?"right":"")+" svelte-1dv68iz"),h(e,"style",r=s[5]?"cursor: pointer;":"")},m(u,m){b(u,e,m),o&&o.m(e,null),z(e,i),n&&n.m(e,null),z(e,l),c&&c.m(e,null),z(e,t),_&&_.m(e,null),a=!0},p(u,[m]){u[0]!=null?o?o.p(u,m):(o=L(u),o.c(),o.m(e,i)):o&&(o.d(1),o=null),u[1]!=null?n?n.p(u,m):(n=Q(u),n.c(),n.m(e,l)):n&&(n.d(1),n=null),u[2]!=null?c?(c.p(u,m),m&4&&g(c,1)):(c=F(u),c.c(),g(c,1),c.m(e,t)):c&&(j(),C(c,1,1,()=>{c=null}),G()),u[5]?_?m&32&&g(_,1):(_=p(),_.c(),g(_,1),_.m(e,null)):_&&(j(),C(_,1,1,()=>{_=null}),G()),(!a||m&16&&f!==(f="balloon-quote "+(u[4]?"right":"")+" svelte-1dv68iz"))&&h(e,"class",f),(!a||m&32&&r!==(r=u[5]?"cursor: pointer;":""))&&h(e,"style",r)},i(u){a||(g(c),g(_),a=!0)},o(u){C(c),C(_),a=!1},d(u){u&&d(e),o&&o.d(),n&&n.d(),c&&c.d(),_&&_.d()}}}function $(s,e,i){let{quote:l}=e,{image:t}=e,{component:f}=e,{component_prop:r}=e,{right:a}=e,{arrow:o=!1}=e;return s.$$set=n=>{"quote"in n&&i(0,l=n.quote),"image"in n&&i(1,t=n.image),"component"in n&&i(2,f=n.component),"component_prop"in n&&i(3,r=n.component_prop),"right"in n&&i(4,a=n.right),"arrow"in n&&i(5,o=n.arrow)},[l,t,f,r,a,o]}class te extends N{constructor(e){super(),P(this,e,$,x,T,{quote:0,image:1,component:2,component_prop:3,right:4,arrow:5})}}export{Z as B,le as C,te as a};