import{S as m,i as d,s as l,w as f,k as u,e as h,x as _,m as p,c as g,a as x,d as r,b as q,y as L,g as c,E as v,q as w,o as C,B as y}from"./index-8418cccc.js";import{L as z}from"./LibLoader-c2246e1c.js";function Q(s){let t,i,o,a;return t=new z({props:{url:"https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"}}),t.$on("loaded",s[0]),{c(){f(t.$$.fragment),i=u(),o=h("div"),this.h()},l(e){_(t.$$.fragment,e),i=p(e),o=g(e,"DIV",{id:!0}),x(o).forEach(r),this.h()},h(){q(o,"id","qrcode")},m(e,n){L(t,e,n),c(e,i,n),c(e,o,n),a=!0},p:v,i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){C(t.$$.fragment,e),a=!1},d(e){y(t,e),e&&r(i),e&&r(o)}}}function b(s,t,i){let{text:o="example"}=t,{size:a=64}=t;function e(){new QRCode(document.getElementById("qrcode"),{text:o,width:a,height:a,colorDark:"#181818",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H})}return s.$$set=n=>{"text"in n&&i(1,o=n.text),"size"in n&&i(2,a=n.size)},[e,o,a]}class R extends m{constructor(t){super(),d(this,t,b,Q,l,{text:1,size:2})}}export{R as Q};
