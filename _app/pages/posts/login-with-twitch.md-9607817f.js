import{S as gl,i as yl,s as Al,C as da,w as Ul,x as Tl,y as Cl,z as Dl,A as vl,q as bl,o as jl,B as Ol,v as Sl,_ as El,e as s,t as o,k as r,c as n,a,h as c,d as e,m as p,b as i,H as Ce,f as Pl,g as f,I as t,E as Rl}from"../../chunks/index-8418cccc.js";import{P as xl}from"../../chunks/_post-d4178251.js";import"../../chunks/BlinkAnchor-aec4dee8.js";function Bl(at){let d,L,v,_,h,k,E,lt,ha,Bt,ts,es,$t,ss,ns,ot,as,y,Nt,ls,os,ct,cs,B,Gt,is,rs,it,ps,Mt,zt,Vt,us,ds,qt,hs,fs,$,ks,Ht,_s,vs,De,N,Es,be,j,rt,ms,m,pt,ws,G,Ft,Is,Ls,Jt,gs,ys,ut,As,M,Wt,Us,Ts,Yt,Cs,Ds,dt,bs,A,ht,js,Zt,Kt,Os,Ss,ft,Ps,z,Qt,Rs,xs,Xt,Bs,$s,kt,Ns,V,te,Gs,Ms,_t,zs,q,ee,Vs,qs,se,Hs,Fs,vt,Js,ne,Et,Ws,U,mt,fa,ae,Ys,Zs,le,Ks,je,O,wt,Qs,w,g,oe,Xs,tn,ce,en,sn,ie,nn,an,ln,It,on,re,pe,cn,rn,Lt,pn,H,ue,un,dn,de,hn,fn,gt,kn,F,he,_n,vn,fe,T,yt,ka,ke,En,mn,At,wn,_e,Ut,In,ve,J,Ln,Ee,gn,yn,Oe,W,An,Se,S,Tt,Un,Y,me,C,Ct,_a,we,Tn,Cn,Ie,Dt,Il=`<code class="language-javascript"><span class="token keyword">const</span> userApiUrl <span class="token operator">=</span> <span class="token string">"https://api.twitch.tv/helix/users"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> urlParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> resultData <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>userApiUrl<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// \u5F9E\u7DB2\u5740\u53D6\u5F97\u91CD\u5C0E\u5411\u56DE\u50B3\u7684 access token</span>
    <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token string">"Bearer "</span> <span class="token operator">+</span> urlParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"#access_token"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string-property property">"Client-Id"</span><span class="token operator">:</span> clientID<span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!=</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"js-twitch-card"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"block"</span><span class="token punctuation">;</span>
      <span class="token comment">// \u8CC7\u6599\u6703\u4F4D\u65BC\u56DE\u50B3\u7684 data \u5C6C\u6027\u88E1</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>
        <span class="token string">"js-twitch-card--image"</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>r<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>profile_image_url<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>
        <span class="token string">"js-twitch-card--username"</span>
      <span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>r<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>login<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>r<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>display_name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,Dn,bt,bn,D,jt,va,Le,jn,Pe,Z,On,Re,K,Sn,xe,Ot,Be,I,St,Pn,Pt,$e,Q,b,ge,X,Rn,ye,tt,xn,Ae,et,Bn,Ue,st,$n;return{c(){d=s("h2"),L=o("1. \u65BC Twitch developers console \u767B\u9304\u61C9\u7528"),v=r(),_=s("ol"),h=s("li"),k=o("\u767B\u5165 "),E=s("a"),lt=s("img"),Bt=s("span"),ts=o("Twitch Developers"),es=r(),$t=s("li"),ss=o("\u300CRegister Your Application\u300D"),ns=r(),ot=s("li"),as=o("\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA\u300COAuth Verify\u300D"),y=s("ul"),Nt=s("li"),ls=o("\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),os=r(),ct=s("li"),cs=o("\u4EE5\u53CA\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),B=s("ul"),Gt=s("li"),is=o("\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),rs=r(),it=s("li"),ps=o("\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),Mt=s("ul"),zt=s("li"),Vt=s("code"),us=o("https://f6bfb5.github.io/login-with-twitch"),ds=r(),qt=s("li"),hs=o("\u300CCreate\u300D"),fs=r(),$=s("li"),ks=o("\u300CManage\u300D\u53D6\u5F97 "),Ht=s("code"),_s=o("Client ID"),vs=o("\uFF0C\u4E4B\u5F8C\u6703\u7528\u5230"),De=r(),N=s("h2"),Es=o("2. \u9032\u884C\u8A8D\u8B49\u53D6\u5F97 access token"),be=r(),j=s("ul"),rt=s("li"),ms=o("Twitch API \u5206\u6709\u5169\u7A2E access token"),m=s("ul"),pt=s("li"),ws=o("User access tokens"),G=s("ul"),Ft=s("li"),Is=o("\u7528\u65BC\u9700\u8981\u4F7F\u7528\u8005\u6388\u6B0A\u624D\u80FD\u5B58\u53D6\u7684\u8CC7\u6E90"),Ls=r(),Jt=s("li"),gs=o("\u4F8B\u5982\u53D6\u5F97\u804A\u5929\u5BA4\u4F7F\u7528\u8005\u6E05\u55AE\u3001\u4F7F\u7528\u8005\u7684\u4FE1\u7BB1"),ys=r(),ut=s("li"),As=o("App access tokens"),M=s("ul"),Wt=s("li"),Us=o("\u7528\u65BC\u4E0D\u9700\u8981\u4F7F\u7528\u8005\u6388\u6B0A\u5C31\u80FD\u53D6\u5F97\u7684\u8CC7\u6E90"),Ts=r(),Yt=s("li"),Cs=o("\u4F8B\u5982\u53D6\u5F97\u4F7F\u7528\u8005\u7684\u5F71\u7247\u4E00\u89BD"),Ds=r(),dt=s("li"),bs=o("\u5176\u4E2D User access tokens \u6709\u5169\u7A2E\u6388\u6B0A\u8A8D\u8B49\u65B9\u5F0F\u53EF\u53D6\u5F97"),A=s("ul"),ht=s("li"),js=o("Implicit grant flow"),Zt=s("ul"),Kt=s("li"),Os=o("\u7528\u65BC\u4E0D\u9700\u8981\u4F3A\u670D\u5668\u7684\u61C9\u7528"),Ss=r(),ft=s("li"),Ps=o("Authorization code grant flow"),z=s("ul"),Qt=s("li"),Rs=o("\u7528\u65BC\u9700\u8981\u4F3A\u670D\u5668\u7684\u61C9\u7528"),xs=r(),Xt=s("li"),Bs=o("\u53EF\u4EE5\u5132\u5B58 client secret\uFF0C\u4EE5\u53CA\u50B3\u9001\u4F3A\u670D\u5668\u8ACB\u6C42"),$s=r(),kt=s("li"),Ns=o("\u4E26\u5404\u63D0\u4F9B\u5169\u7A2E\u8A8D\u8B49\u6A5F\u5236"),V=s("ul"),te=s("li"),Gs=o("OAuth"),Ms=r(),_t=s("li"),zs=o("OpenID Connect"),q=s("ul"),ee=s("li"),Vs=o("\u57FA\u65BC OAuth 2.0 \u7684\u7C21\u6613\u8A8D\u8B49\u5C64"),qs=r(),se=s("li"),Hs=o("\u6703\u53E6\u6709\u4E00\u500B\u4EE5 JSON Web Token \u7DE8\u78BC\u8EAB\u4EFD\u4EE4\u724C\u7684 ID token"),Fs=r(),vt=s("li"),Js=o("App access tokens \u5247\u662F\u900F\u904E OAuth Client Credentials Flow \u53D6\u5F97"),ne=s("ul"),Et=s("li"),Ws=o("\u8A73\u7D30\u53EF\u53C3\u7167 "),U=s("a"),mt=s("img"),ae=s("span"),Ys=o("Authentication"),Zs=r(),le=s("li"),Ks=o("\u4EE5 OAuth Implicit Code Flow \u70BA\u7BC4\u4F8B"),je=r(),O=s("ol"),wt=s("li"),Qs=o("\u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),w=s("ul"),g=s("li"),oe=s("code"),Xs=o("https://id.twitch.tv/oauth2/authorize?response_type=token&client_id="),tn=o("[CLIENT ID]"),ce=s("code"),en=o("&redirect_uri="),sn=o("[REDIRECT URL]"),ie=s("code"),nn=o("&scope="),an=o("[SCOPE]"),ln=r(),It=s("li"),on=o("Client ID"),re=s("ul"),pe=s("li"),cn=o("\u65BC\u7B2C\u4E00\u6B65\u53D6\u5F97"),rn=r(),Lt=s("li"),pn=o("Redirect URL"),H=s("ul"),ue=s("li"),un=o("\u91CD\u5C0E\u5411\u7DB2\u5740"),dn=r(),de=s("li"),hn=o("\u672C\u6587\u7BC4\u4F8B\u4EE5\u6B64\u9801\u9762\u4F5C\u70BA\u9023\u7D50"),fn=r(),gt=s("li"),kn=o("Scope"),F=s("ul"),he=s("li"),_n=o("\u8981\u53D6\u5F97\u7684\u6388\u6B0A\u5167\u5BB9"),vn=r(),fe=s("li"),T=s("a"),yt=s("img"),ke=s("span"),En=o("Twitch Access Token Scopes"),mn=r(),At=s("li"),wn=o("\u9A57\u8B49\u4E4B\u5F8C\u53D6\u5F97 access token"),_e=s("ul"),Ut=s("li"),In=o("Implicit grant flow \u6703\u5C07 access token \u56DE\u50B3\u5230\u7DB2\u5740\u4E0A"),ve=s("ul"),J=s("li"),Ln=o("JavaScript \u53EF\u4F7F\u7528 "),Ee=s("code"),gn=o("document.location.hash"),yn=o(" \u53D6\u5F97"),Oe=r(),W=s("h2"),An=o("3. \u4F7F\u7528 access token \u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Se=r(),S=s("ul"),Tt=s("li"),Un=o("\u4F7F\u7528 access token \u5373\u53EF\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Y=s("ul"),me=s("li"),C=s("a"),Ct=s("img"),we=s("span"),Tn=o("Get Users"),Cn=r(),Ie=s("li"),Dt=s("pre"),Dn=r(),bt=s("li"),bn=o("API \u4E00\u89BD\uFF1A"),D=s("a"),jt=s("img"),Le=s("span"),jn=o("Reference"),Pe=r(),Z=s("h2"),On=o("\u7BC4\u4F8B"),Re=r(),K=s("button"),Sn=o("Login with Twitch"),xe=r(),Ot=s("span"),Be=r(),I=s("div"),St=s("img"),Pn=r(),Pt=s("div"),$e=r(),Q=s("div"),b=s("ul"),ge=s("li"),X=s("a"),Rn=o("1. \u65BC Twitch developers console \u767B\u9304\u61C9\u7528"),ye=s("li"),tt=s("a"),xn=o("2. \u9032\u884C\u8A8D\u8B49\u53D6\u5F97 access token"),Ae=s("li"),et=s("a"),Bn=o("3. \u4F7F\u7528 access token \u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Ue=s("li"),st=s("a"),$n=o("\u7BC4\u4F8B"),this.h()},l(l){d=n(l,"H2",{id:!0});var u=a(d);L=c(u,"1. \u65BC Twitch developers console \u767B\u9304\u61C9\u7528"),u.forEach(e),v=p(l),_=n(l,"OL",{});var P=a(_);h=n(P,"LI",{});var Nn=a(h);k=c(Nn,"\u767B\u5165 "),E=n(Nn,"A",{href:!0,rel:!0,target:!0});var Gn=a(E);lt=n(Gn,"IMG",{src:!0,alt:!0}),Bt=n(Gn,"SPAN",{});var Ea=a(Bt);ts=c(Ea,"Twitch Developers"),Ea.forEach(e),Gn.forEach(e),Nn.forEach(e),es=p(P),$t=n(P,"LI",{});var ma=a($t);ss=c(ma,"\u300CRegister Your Application\u300D"),ma.forEach(e),ns=p(P),ot=n(P,"LI",{});var Mn=a(ot);as=c(Mn,"\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA\u300COAuth Verify\u300D"),y=n(Mn,"UL",{});var Rt=a(y);Nt=n(Rt,"LI",{});var wa=a(Nt);ls=c(wa,"\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),wa.forEach(e),os=p(Rt),ct=n(Rt,"LI",{});var zn=a(ct);cs=c(zn,"\u4EE5\u53CA\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),B=n(zn,"UL",{});var Ne=a(B);Gt=n(Ne,"LI",{});var Ia=a(Gt);is=c(Ia,"\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),Ia.forEach(e),rs=p(Ne),it=n(Ne,"LI",{});var Vn=a(it);ps=c(Vn,"\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),Mt=n(Vn,"UL",{});var La=a(Mt);zt=n(La,"LI",{});var ga=a(zt);Vt=n(ga,"CODE",{});var ya=a(Vt);us=c(ya,"https://f6bfb5.github.io/login-with-twitch"),ya.forEach(e),ga.forEach(e),La.forEach(e),Vn.forEach(e),Ne.forEach(e),zn.forEach(e),ds=p(Rt),qt=n(Rt,"LI",{});var Aa=a(qt);hs=c(Aa,"\u300CCreate\u300D"),Aa.forEach(e),Rt.forEach(e),Mn.forEach(e),fs=p(P),$=n(P,"LI",{});var Ge=a($);ks=c(Ge,"\u300CManage\u300D\u53D6\u5F97 "),Ht=n(Ge,"CODE",{});var Ua=a(Ht);_s=c(Ua,"Client ID"),Ua.forEach(e),vs=c(Ge,"\uFF0C\u4E4B\u5F8C\u6703\u7528\u5230"),Ge.forEach(e),P.forEach(e),De=p(l),N=n(l,"H2",{id:!0});var Ta=a(N);Es=c(Ta,"2. \u9032\u884C\u8A8D\u8B49\u53D6\u5F97 access token"),Ta.forEach(e),be=p(l),j=n(l,"UL",{});var Me=a(j);rt=n(Me,"LI",{});var qn=a(rt);ms=c(qn,"Twitch API \u5206\u6709\u5169\u7A2E access token"),m=n(qn,"UL",{});var R=a(m);pt=n(R,"LI",{});var Hn=a(pt);ws=c(Hn,"User access tokens"),G=n(Hn,"UL",{});var ze=a(G);Ft=n(ze,"LI",{});var Ca=a(Ft);Is=c(Ca,"\u7528\u65BC\u9700\u8981\u4F7F\u7528\u8005\u6388\u6B0A\u624D\u80FD\u5B58\u53D6\u7684\u8CC7\u6E90"),Ca.forEach(e),Ls=p(ze),Jt=n(ze,"LI",{});var Da=a(Jt);gs=c(Da,"\u4F8B\u5982\u53D6\u5F97\u804A\u5929\u5BA4\u4F7F\u7528\u8005\u6E05\u55AE\u3001\u4F7F\u7528\u8005\u7684\u4FE1\u7BB1"),Da.forEach(e),ze.forEach(e),Hn.forEach(e),ys=p(R),ut=n(R,"LI",{});var Fn=a(ut);As=c(Fn,"App access tokens"),M=n(Fn,"UL",{});var Ve=a(M);Wt=n(Ve,"LI",{});var ba=a(Wt);Us=c(ba,"\u7528\u65BC\u4E0D\u9700\u8981\u4F7F\u7528\u8005\u6388\u6B0A\u5C31\u80FD\u53D6\u5F97\u7684\u8CC7\u6E90"),ba.forEach(e),Ts=p(Ve),Yt=n(Ve,"LI",{});var ja=a(Yt);Cs=c(ja,"\u4F8B\u5982\u53D6\u5F97\u4F7F\u7528\u8005\u7684\u5F71\u7247\u4E00\u89BD"),ja.forEach(e),Ve.forEach(e),Fn.forEach(e),Ds=p(R),dt=n(R,"LI",{});var Jn=a(dt);bs=c(Jn,"\u5176\u4E2D User access tokens \u6709\u5169\u7A2E\u6388\u6B0A\u8A8D\u8B49\u65B9\u5F0F\u53EF\u53D6\u5F97"),A=n(Jn,"UL",{});var xt=a(A);ht=n(xt,"LI",{});var Wn=a(ht);js=c(Wn,"Implicit grant flow"),Zt=n(Wn,"UL",{});var Oa=a(Zt);Kt=n(Oa,"LI",{});var Sa=a(Kt);Os=c(Sa,"\u7528\u65BC\u4E0D\u9700\u8981\u4F3A\u670D\u5668\u7684\u61C9\u7528"),Sa.forEach(e),Oa.forEach(e),Wn.forEach(e),Ss=p(xt),ft=n(xt,"LI",{});var Yn=a(ft);Ps=c(Yn,"Authorization code grant flow"),z=n(Yn,"UL",{});var qe=a(z);Qt=n(qe,"LI",{});var Pa=a(Qt);Rs=c(Pa,"\u7528\u65BC\u9700\u8981\u4F3A\u670D\u5668\u7684\u61C9\u7528"),Pa.forEach(e),xs=p(qe),Xt=n(qe,"LI",{});var Ra=a(Xt);Bs=c(Ra,"\u53EF\u4EE5\u5132\u5B58 client secret\uFF0C\u4EE5\u53CA\u50B3\u9001\u4F3A\u670D\u5668\u8ACB\u6C42"),Ra.forEach(e),qe.forEach(e),Yn.forEach(e),$s=p(xt),kt=n(xt,"LI",{});var Zn=a(kt);Ns=c(Zn,"\u4E26\u5404\u63D0\u4F9B\u5169\u7A2E\u8A8D\u8B49\u6A5F\u5236"),V=n(Zn,"UL",{});var He=a(V);te=n(He,"LI",{});var xa=a(te);Gs=c(xa,"OAuth"),xa.forEach(e),Ms=p(He),_t=n(He,"LI",{});var Kn=a(_t);zs=c(Kn,"OpenID Connect"),q=n(Kn,"UL",{});var Fe=a(q);ee=n(Fe,"LI",{});var Ba=a(ee);Vs=c(Ba,"\u57FA\u65BC OAuth 2.0 \u7684\u7C21\u6613\u8A8D\u8B49\u5C64"),Ba.forEach(e),qs=p(Fe),se=n(Fe,"LI",{});var $a=a(se);Hs=c($a,"\u6703\u53E6\u6709\u4E00\u500B\u4EE5 JSON Web Token \u7DE8\u78BC\u8EAB\u4EFD\u4EE4\u724C\u7684 ID token"),$a.forEach(e),Fe.forEach(e),Kn.forEach(e),He.forEach(e),Zn.forEach(e),xt.forEach(e),Jn.forEach(e),Fs=p(R),vt=n(R,"LI",{});var Qn=a(vt);Js=c(Qn,"App access tokens \u5247\u662F\u900F\u904E OAuth Client Credentials Flow \u53D6\u5F97"),ne=n(Qn,"UL",{});var Na=a(ne);Et=n(Na,"LI",{});var Xn=a(Et);Ws=c(Xn,"\u8A73\u7D30\u53EF\u53C3\u7167 "),U=n(Xn,"A",{href:!0,rel:!0,target:!0});var ta=a(U);mt=n(ta,"IMG",{src:!0,alt:!0}),ae=n(ta,"SPAN",{});var Ga=a(ae);Ys=c(Ga,"Authentication"),Ga.forEach(e),ta.forEach(e),Xn.forEach(e),Na.forEach(e),Qn.forEach(e),R.forEach(e),qn.forEach(e),Zs=p(Me),le=n(Me,"LI",{});var Ma=a(le);Ks=c(Ma,"\u4EE5 OAuth Implicit Code Flow \u70BA\u7BC4\u4F8B"),Ma.forEach(e),Me.forEach(e),je=p(l),O=n(l,"OL",{});var Je=a(O);wt=n(Je,"LI",{});var ea=a(wt);Qs=c(ea,"\u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),w=n(ea,"UL",{});var x=a(w);g=n(x,"LI",{});var nt=a(g);oe=n(nt,"CODE",{});var za=a(oe);Xs=c(za,"https://id.twitch.tv/oauth2/authorize?response_type=token&client_id="),za.forEach(e),tn=c(nt,"[CLIENT ID]"),ce=n(nt,"CODE",{});var Va=a(ce);en=c(Va,"&redirect_uri="),Va.forEach(e),sn=c(nt,"[REDIRECT URL]"),ie=n(nt,"CODE",{});var qa=a(ie);nn=c(qa,"&scope="),qa.forEach(e),an=c(nt,"[SCOPE]"),nt.forEach(e),ln=p(x),It=n(x,"LI",{});var sa=a(It);on=c(sa,"Client ID"),re=n(sa,"UL",{});var Ha=a(re);pe=n(Ha,"LI",{});var Fa=a(pe);cn=c(Fa,"\u65BC\u7B2C\u4E00\u6B65\u53D6\u5F97"),Fa.forEach(e),Ha.forEach(e),sa.forEach(e),rn=p(x),Lt=n(x,"LI",{});var na=a(Lt);pn=c(na,"Redirect URL"),H=n(na,"UL",{});var We=a(H);ue=n(We,"LI",{});var Ja=a(ue);un=c(Ja,"\u91CD\u5C0E\u5411\u7DB2\u5740"),Ja.forEach(e),dn=p(We),de=n(We,"LI",{});var Wa=a(de);hn=c(Wa,"\u672C\u6587\u7BC4\u4F8B\u4EE5\u6B64\u9801\u9762\u4F5C\u70BA\u9023\u7D50"),Wa.forEach(e),We.forEach(e),na.forEach(e),fn=p(x),gt=n(x,"LI",{});var aa=a(gt);kn=c(aa,"Scope"),F=n(aa,"UL",{});var Ye=a(F);he=n(Ye,"LI",{});var Ya=a(he);_n=c(Ya,"\u8981\u53D6\u5F97\u7684\u6388\u6B0A\u5167\u5BB9"),Ya.forEach(e),vn=p(Ye),fe=n(Ye,"LI",{});var Za=a(fe);T=n(Za,"A",{href:!0,rel:!0,target:!0});var la=a(T);yt=n(la,"IMG",{src:!0,alt:!0}),ke=n(la,"SPAN",{});var Ka=a(ke);En=c(Ka,"Twitch Access Token Scopes"),Ka.forEach(e),la.forEach(e),Za.forEach(e),Ye.forEach(e),aa.forEach(e),x.forEach(e),ea.forEach(e),mn=p(Je),At=n(Je,"LI",{});var oa=a(At);wn=c(oa,"\u9A57\u8B49\u4E4B\u5F8C\u53D6\u5F97 access token"),_e=n(oa,"UL",{});var Qa=a(_e);Ut=n(Qa,"LI",{});var ca=a(Ut);In=c(ca,"Implicit grant flow \u6703\u5C07 access token \u56DE\u50B3\u5230\u7DB2\u5740\u4E0A"),ve=n(ca,"UL",{});var Xa=a(ve);J=n(Xa,"LI",{});var Ze=a(J);Ln=c(Ze,"JavaScript \u53EF\u4F7F\u7528 "),Ee=n(Ze,"CODE",{});var tl=a(Ee);gn=c(tl,"document.location.hash"),tl.forEach(e),yn=c(Ze," \u53D6\u5F97"),Ze.forEach(e),Xa.forEach(e),ca.forEach(e),Qa.forEach(e),oa.forEach(e),Je.forEach(e),Oe=p(l),W=n(l,"H2",{id:!0});var el=a(W);An=c(el,"3. \u4F7F\u7528 access token \u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),el.forEach(e),Se=p(l),S=n(l,"UL",{});var Ke=a(S);Tt=n(Ke,"LI",{});var ia=a(Tt);Un=c(ia,"\u4F7F\u7528 access token \u5373\u53EF\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Y=n(ia,"UL",{});var Qe=a(Y);me=n(Qe,"LI",{});var sl=a(me);C=n(sl,"A",{href:!0,rel:!0,target:!0});var ra=a(C);Ct=n(ra,"IMG",{src:!0,alt:!0}),we=n(ra,"SPAN",{});var nl=a(we);Tn=c(nl,"Get Users"),nl.forEach(e),ra.forEach(e),sl.forEach(e),Cn=p(Qe),Ie=n(Qe,"LI",{});var al=a(Ie);Dt=n(al,"PRE",{class:!0});var Ll=a(Dt);Ll.forEach(e),al.forEach(e),Qe.forEach(e),ia.forEach(e),Dn=p(Ke),bt=n(Ke,"LI",{});var pa=a(bt);bn=c(pa,"API \u4E00\u89BD\uFF1A"),D=n(pa,"A",{href:!0,rel:!0,target:!0});var ua=a(D);jt=n(ua,"IMG",{src:!0,alt:!0}),Le=n(ua,"SPAN",{});var ll=a(Le);jn=c(ll,"Reference"),ll.forEach(e),ua.forEach(e),pa.forEach(e),Ke.forEach(e),Pe=p(l),Z=n(l,"H2",{id:!0});var ol=a(Z);On=c(ol,"\u7BC4\u4F8B"),ol.forEach(e),Re=p(l),K=n(l,"BUTTON",{id:!0});var cl=a(K);Sn=c(cl,"Login with Twitch"),cl.forEach(e),xe=p(l),Ot=n(l,"SPAN",{id:!0}),a(Ot).forEach(e),Be=p(l),I=n(l,"DIV",{class:!0,id:!0,style:!0});var Xe=a(I);St=n(Xe,"IMG",{alt:!0,class:!0,id:!0}),Pn=p(Xe),Pt=n(Xe,"DIV",{class:!0,id:!0}),a(Pt).forEach(e),Xe.forEach(e),$e=p(l),Q=n(l,"DIV",{class:!0});var il=a(Q);b=n(il,"UL",{class:!0});var Te=a(b);ge=n(Te,"LI",{});var rl=a(ge);X=n(rl,"A",{href:!0,onclick:!0});var pl=a(X);Rn=c(pl,"1. \u65BC Twitch developers console \u767B\u9304\u61C9\u7528"),pl.forEach(e),rl.forEach(e),ye=n(Te,"LI",{});var ul=a(ye);tt=n(ul,"A",{href:!0,onclick:!0});var dl=a(tt);xn=c(dl,"2. \u9032\u884C\u8A8D\u8B49\u53D6\u5F97 access token"),dl.forEach(e),ul.forEach(e),Ae=n(Te,"LI",{});var hl=a(Ae);et=n(hl,"A",{href:!0,onclick:!0});var fl=a(et);Bn=c(fl,"3. \u4F7F\u7528 access token \u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),fl.forEach(e),hl.forEach(e),Ue=n(Te,"LI",{});var kl=a(Ue);st=n(kl,"A",{href:!0,onclick:!0});var _l=a(st);$n=c(_l,"\u7BC4\u4F8B"),_l.forEach(e),kl.forEach(e),Te.forEach(e),il.forEach(e),this.h()},h(){i(d,"id","js-id-1-\u65BC-twitch-developers-console-\u767B\u9304\u61C9\u7528"),Ce(lt.src,ha="https://s2.googleusercontent.com/s2/favicons?domain=https://dev.twitch.tv/console/apps")||i(lt,"src",ha),i(lt,"alt","Twitch Developers"),i(E,"href","https://dev.twitch.tv/console/apps"),i(E,"rel","noopener"),i(E,"target","_blank"),i(N,"id","js-id-2-\u9032\u884C\u8A8D\u8B49\u53D6\u5F97-access-token"),Ce(mt.src,fa="https://s2.googleusercontent.com/s2/favicons?domain=https://dev.twitch.tv/docs/authentication/#user-access-tokens")||i(mt,"src",fa),i(mt,"alt","Authentication"),i(U,"href","https://dev.twitch.tv/docs/authentication/#user-access-tokens"),i(U,"rel","noopener"),i(U,"target","_blank"),Ce(yt.src,ka="https://s2.googleusercontent.com/s2/favicons?domain=https://dev.twitch.tv/docs/authentication/scopes/#twitch-api-scopes")||i(yt,"src",ka),i(yt,"alt","Twitch Access Token Scopes"),i(T,"href","https://dev.twitch.tv/docs/authentication/scopes/#twitch-api-scopes"),i(T,"rel","noopener"),i(T,"target","_blank"),i(W,"id","js-id-3-\u4F7F\u7528-access-token-\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Ce(Ct.src,_a="https://s2.googleusercontent.com/s2/favicons?domain=https://dev.twitch.tv/docs/api/reference/#get-users")||i(Ct,"src",_a),i(Ct,"alt","Get Users"),i(C,"href","https://dev.twitch.tv/docs/api/reference/#get-users"),i(C,"rel","noopener"),i(C,"target","_blank"),i(Dt,"class","language-javascript"),Ce(jt.src,va="https://s2.googleusercontent.com/s2/favicons?domain=https://dev.twitch.tv/docs/api/reference/")||i(jt,"src",va),i(jt,"alt","Reference"),i(D,"href","https://dev.twitch.tv/docs/api/reference/"),i(D,"rel","noopener"),i(D,"target","_blank"),i(Z,"id","js-id-\u7BC4\u4F8B"),i(K,"id","js-twitch-button"),i(Ot,"id","js-twitch-status"),i(St,"alt","profile"),i(St,"class","twitch-card--image svelte-17600ve"),i(St,"id","js-twitch-card--image"),i(Pt,"class","twitch-card--username"),i(Pt,"id","js-twitch-card--username"),i(I,"class","twitch-card"),i(I,"id","js-twitch-card"),Pl(I,"display","none"),i(X,"href","#"),i(X,"onclick","document.querySelector('#js-id-1-\u65BC-twitch-developers-console-\u767B\u9304\u61C9\u7528').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(tt,"href","#"),i(tt,"onclick","document.querySelector('#js-id-2-\u9032\u884C\u8A8D\u8B49\u53D6\u5F97-access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(et,"href","#"),i(et,"onclick","document.querySelector('#js-id-3-\u4F7F\u7528-access-token-\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(st,"href","#"),i(st,"onclick","document.querySelector('#js-id-\u7BC4\u4F8B').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(b,"class","toc"),i(Q,"class","toc-container")},m(l,u){f(l,d,u),t(d,L),f(l,v,u),f(l,_,u),t(_,h),t(h,k),t(h,E),t(E,lt),t(E,Bt),t(Bt,ts),t(_,es),t(_,$t),t($t,ss),t(_,ns),t(_,ot),t(ot,as),t(ot,y),t(y,Nt),t(Nt,ls),t(y,os),t(y,ct),t(ct,cs),t(ct,B),t(B,Gt),t(Gt,is),t(B,rs),t(B,it),t(it,ps),t(it,Mt),t(Mt,zt),t(zt,Vt),t(Vt,us),t(y,ds),t(y,qt),t(qt,hs),t(_,fs),t(_,$),t($,ks),t($,Ht),t(Ht,_s),t($,vs),f(l,De,u),f(l,N,u),t(N,Es),f(l,be,u),f(l,j,u),t(j,rt),t(rt,ms),t(rt,m),t(m,pt),t(pt,ws),t(pt,G),t(G,Ft),t(Ft,Is),t(G,Ls),t(G,Jt),t(Jt,gs),t(m,ys),t(m,ut),t(ut,As),t(ut,M),t(M,Wt),t(Wt,Us),t(M,Ts),t(M,Yt),t(Yt,Cs),t(m,Ds),t(m,dt),t(dt,bs),t(dt,A),t(A,ht),t(ht,js),t(ht,Zt),t(Zt,Kt),t(Kt,Os),t(A,Ss),t(A,ft),t(ft,Ps),t(ft,z),t(z,Qt),t(Qt,Rs),t(z,xs),t(z,Xt),t(Xt,Bs),t(A,$s),t(A,kt),t(kt,Ns),t(kt,V),t(V,te),t(te,Gs),t(V,Ms),t(V,_t),t(_t,zs),t(_t,q),t(q,ee),t(ee,Vs),t(q,qs),t(q,se),t(se,Hs),t(m,Fs),t(m,vt),t(vt,Js),t(vt,ne),t(ne,Et),t(Et,Ws),t(Et,U),t(U,mt),t(U,ae),t(ae,Ys),t(j,Zs),t(j,le),t(le,Ks),f(l,je,u),f(l,O,u),t(O,wt),t(wt,Qs),t(wt,w),t(w,g),t(g,oe),t(oe,Xs),t(g,tn),t(g,ce),t(ce,en),t(g,sn),t(g,ie),t(ie,nn),t(g,an),t(w,ln),t(w,It),t(It,on),t(It,re),t(re,pe),t(pe,cn),t(w,rn),t(w,Lt),t(Lt,pn),t(Lt,H),t(H,ue),t(ue,un),t(H,dn),t(H,de),t(de,hn),t(w,fn),t(w,gt),t(gt,kn),t(gt,F),t(F,he),t(he,_n),t(F,vn),t(F,fe),t(fe,T),t(T,yt),t(T,ke),t(ke,En),t(O,mn),t(O,At),t(At,wn),t(At,_e),t(_e,Ut),t(Ut,In),t(Ut,ve),t(ve,J),t(J,Ln),t(J,Ee),t(Ee,gn),t(J,yn),f(l,Oe,u),f(l,W,u),t(W,An),f(l,Se,u),f(l,S,u),t(S,Tt),t(Tt,Un),t(Tt,Y),t(Y,me),t(me,C),t(C,Ct),t(C,we),t(we,Tn),t(Y,Cn),t(Y,Ie),t(Ie,Dt),Dt.innerHTML=Il,t(S,Dn),t(S,bt),t(bt,bn),t(bt,D),t(D,jt),t(D,Le),t(Le,jn),f(l,Pe,u),f(l,Z,u),t(Z,On),f(l,Re,u),f(l,K,u),t(K,Sn),f(l,xe,u),f(l,Ot,u),f(l,Be,u),f(l,I,u),t(I,St),t(I,Pn),t(I,Pt),f(l,$e,u),f(l,Q,u),t(Q,b),t(b,ge),t(ge,X),t(X,Rn),t(b,ye),t(ye,tt),t(tt,xn),t(b,Ae),t(Ae,et),t(et,Bn),t(b,Ue),t(Ue,st),t(st,$n)},p:Rl,d(l){l&&e(d),l&&e(v),l&&e(_),l&&e(De),l&&e(N),l&&e(be),l&&e(j),l&&e(je),l&&e(O),l&&e(Oe),l&&e(W),l&&e(Se),l&&e(S),l&&e(Pe),l&&e(Z),l&&e(Re),l&&e(K),l&&e(xe),l&&e(Ot),l&&e(Be),l&&e(I),l&&e($e),l&&e(Q)}}}function $l(at){let d,L;const v=[at[0],ml];let _={$$slots:{default:[Bl]},$$scope:{ctx:at}};for(let h=0;h<v.length;h+=1)_=da(_,v[h]);return d=new xl({props:_}),{c(){Ul(d.$$.fragment)},l(h){Tl(d.$$.fragment,h)},m(h,k){Cl(d,h,k),L=!0},p(h,[k]){const E=k&1?Dl(v,[k&1&&vl(h[0]),k&0&&vl(ml)]):{};k&2&&(E.$$scope={dirty:k,ctx:h}),d.$set(E)},i(h){L||(bl(d.$$.fragment,h),L=!0)},o(h){jl(d.$$.fragment,h),L=!1},d(h){Ol(d,h)}}}const ml={title:"\u5BE6\u4F5C\u300C\u4F7F\u7528Twitch\u767B\u5165\u300D",date:"2023-05-02T20:11:13.000Z",tags:"F2E"},wl="duo2s0lhrxlom9n2h2z9gppy137xwn",Nl="https://f6bfb5.github.io/login-with-twitch",Gl="";function Ml(){document.location.href=`https://id.twitch.tv/oauth2/authorize
?client_id=${wl}
&redirect_uri=${encodeURIComponent(Nl)}
&response_type=token
&scope=${encodeURIComponent(Gl)}`}function zl(at,d,L){return Sl(()=>{document.getElementById("js-twitch-button").addEventListener("click",Ml);const v=new URLSearchParams(window.location.hash);v.has("#access_token")?fetch("https://api.twitch.tv/helix/users",{method:"GET",headers:{Authorization:"Bearer "+v.get("#access_token"),"Client-Id":wl}}).then(function(k){if(!k.ok)throw new Error(k.statusText);return document.getElementById("js-twitch-status").innerText="user data got",k.json()}).catch(function(k){document.getElementById("js-twitch-status").innerText=k}).then(function(k){k!=null&&(document.getElementById("js-twitch-card").style.display="block",document.getElementById("js-twitch-card--image").src=`${k.data[0].profile_image_url}`,document.getElementById("js-twitch-card--username").innerText=`${k.data[0].login}(${k.data[0].display_name})`)}):document.getElementById("js-twitch-status").innerText="Not logged in"}),at.$$set=v=>{L(0,d=da(da({},d),El(v)))},d=El(d),[d]}class Fl extends gl{constructor(d){super(),yl(this,d,zl,$l,Al,{})}}export{Fl as default,ml as metadata};