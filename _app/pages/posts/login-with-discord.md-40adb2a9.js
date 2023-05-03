import{S as ul,i as dl,s as fl,C as Ba,w as _l,x as El,y as kl,z as vl,A as Fo,q as hl,o as ml,B as Dl,v as Il,_ as Qo,e as a,t as n,k as u,c as o,a as l,h as r,d as t,m as d,H as Xo,b as i,f as yl,g as p,I as s,E as Ll}from"../../chunks/index-8418cccc.js";import{P as Cl}from"../../chunks/_post-d4178251.js";import"../../chunks/BlinkAnchor-aec4dee8.js";function wl(pe){let _,h,k,m,E,v,P,je,f,Ae,Re,ie,es,kt,D,ue,ts,O,de,Na,He,ss,as,Ue,os,ls,x,ns,xe,rs,B,Be,cs,ps,Ne,is,us,b,ds,$e,fs,_s,qe,Es,ks,vt,fe,vs,ht,I,Ve,hs,ms,_e,Ds,N,Me,Is,ys,Ee,Ls,ze,Ge,Ke,Cs,ws,ke,Os,$,Fe,bs,Ts,Qe,Ps,Ss,ve,js,Xe,y,As,We,Rs,Hs,Ze,Us,xs,Je,Bs,Ns,mt,q,$s,Dt,S,qs,Ye,Vs,Ms,It,V,zs,yt,w,Gs,ge,Ks,Fs,et,Qs,Xs,Lt,he,Ws,Ct,M,go=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=authorization_code
     &amp;code=[CODE]
     &amp;redirect_uri=[REDIRECT URL]\uFF08\u8981\u8207\u8A8D\u8B49 URL \u76F8\u540C\uFF09"</span>
     https://discordapp.com/api/oauth2/token</code>`,wt,z,Zs,tt,Js,Ot,G,el=`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
  <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,bt,j,A,st,Ys,gs,at,ea,ta,sa,K,ot,aa,oa,lt,F,la,nt,na,ra,Tt,Q,ca,Pt,me,pa,St,X,tl=`<code class="language-bash"><span class="token function">curl</span> -H <span class="token string">"Authorization: Bearer [ACCESS TOKEN]"</span>
     https://discordapp.com/api/users/@me</code>`,jt,De,ia,At,W,sl=`<code class="language-json"><span class="token punctuation">&#123;</span>
   <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">[</span>Discord ID<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"username"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\u4F7F\u7528\u8005\u540D\u7A31<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"avatar"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\u5927\u982D\u8CBC ID<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"discriminator"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\u4F7F\u7528\u8005\u7DE8\u865F<span class="token punctuation">]</span>\uFF08\u5728\u540D\u7A31#\u5F8C\u9762\u7684\u6578\u5B57\uFF09<span class="token punctuation">,</span>
   <span class="token property">"public_flags"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
   <span class="token property">"flags"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
   <span class="token property">"email"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\u4FE1\u7BB1<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"verified"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token property">"locale"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\u4F7F\u7528\u8A9E\u8A00<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"mfa_enabled"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">&#125;</span></code>`,Rt,Ie,T,ua,rt,da,fa,ct,_a,Ea,Ht,Z,ka,Ut,ye,va,xt,J,al=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=refresh_token
     &amp;refresh_token=[REFRESH TOKEN]"</span>
     https://discordapp.com/api/oauth2/token</code>`,Bt,Le,ha,Nt,Y,ol=`<code class="language-json"><span class="token punctuation">&#123;</span>
   <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
   <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,$t,g,ma,qt,Ce,Da,Vt,ee,Ia,Mt,we,zt,L,Oe,ya,be,Gt,te,C,pt,se,La,it,ae,Ca,ut,oe,wa,dt,le,Oa,ft,ne,ba,_t,re,Ta;return{c(){_=a("ul"),h=a("li"),k=a("a"),m=a("img"),v=a("span"),P=n("\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),je=u(),f=a("h2"),Ae=n("1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),Re=u(),ie=a("h3"),es=n("a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),kt=u(),D=a("ol"),ue=a("li"),ts=n("\u767B\u5165 "),O=a("a"),de=a("img"),He=a("span"),ss=n("Discord Developer Portal"),as=u(),Ue=a("li"),os=n("\u300CNew Application\u300D"),ls=u(),x=a("li"),ns=n("\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),xe=a("code"),rs=n("OAuth Verify"),B=a("ul"),Be=a("li"),cs=n("\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),ps=u(),Ne=a("li"),is=n("\u300CCreate\u300D"),us=u(),b=a("li"),ds=n("\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),$e=a("code"),fs=n("Client ID"),_s=n(" \u548C "),qe=a("code"),Es=n("Client Secert"),ks=n(" \u4E4B\u5F8C\u6703\u7528\u5230"),vt=u(),fe=a("h3"),vs=n("b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),ht=u(),I=a("ol"),Ve=a("li"),hs=n("\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),ms=u(),_e=a("li"),Ds=n("\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),N=a("ul"),Me=a("li"),Is=n("\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),ys=u(),Ee=a("li"),Ls=n("\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),ze=a("ul"),Ge=a("li"),Ke=a("code"),Cs=n("https://f6bfb5.github.io/login-with-discord"),ws=u(),ke=a("li"),Os=n("\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),$=a("ul"),Fe=a("li"),bs=n("\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),Ts=u(),Qe=a("li"),Ps=n("\u300Cemail\u300D"),Ss=u(),ve=a("li"),js=n("\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Xe=a("ul"),y=a("li"),As=n("\u4F8B\uFF1A"),We=a("code"),Rs=n("https://discord.com/api/oauth2/authorize?client_id="),Hs=n("[CLIENT ID]"),Ze=a("code"),Us=n("&redirect_uri="),xs=n("[REDIRECT URL]"),Je=a("code"),Bs=n("&response_type=code&scope="),Ns=n("[SCOPE]"),mt=u(),q=a("h2"),$s=n("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Dt=u(),S=a("p"),qs=n("\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),Ye=a("code"),Vs=n("code"),Ms=n(" \u53C3\u6578"),It=u(),V=a("h2"),zs=n("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),yt=u(),w=a("p"),Gs=n("\u4F7F\u7528\u9019\u500B "),ge=a("code"),Ks=n("code"),Fs=n(" \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),et=a("code"),Qs=n("access_token"),Xs=n("\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),Lt=u(),he=a("h3"),Ws=n("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Ct=u(),M=a("pre"),wt=u(),z=a("h3"),Zs=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),tt=a("code"),Js=n("access token"),Ot=u(),G=a("pre"),bt=u(),j=a("ul"),A=a("li"),st=a("code"),Ys=n("code"),gs=n(" \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),at=a("code"),ea=n("code"),ta=n(" \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),sa=u(),K=a("li"),ot=a("code"),aa=n("access token"),oa=n(" \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),lt=a("ul"),F=a("li"),la=n("\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),nt=a("code"),na=n("refresh token"),ra=n(" \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),Tt=u(),Q=a("h2"),ca=n("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Pt=u(),me=a("h3"),pa=n("a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),St=u(),X=a("pre"),jt=u(),De=a("h3"),ia=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),At=u(),W=a("pre"),Rt=u(),Ie=a("ul"),T=a("li"),ua=n("\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),rt=a("code"),da=n("https://cdn.discordapp.com/avatars/"),fa=n("[Discord ID]"),ct=a("code"),_a=n("/"),Ea=n("[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),Ht=u(),Z=a("h2"),ka=n("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),Ut=u(),ye=a("h3"),va=n("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),xt=u(),J=a("pre"),Bt=u(),Le=a("h3"),ha=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Nt=u(),Y=a("pre"),$t=u(),g=a("h2"),ma=n("\u7BC4\u4F8B"),qt=u(),Ce=a("p"),Da=n("\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),Vt=u(),ee=a("button"),Ia=n("Login with Discord"),Mt=u(),we=a("span"),zt=u(),L=a("div"),Oe=a("img"),ya=u(),be=a("div"),Gt=u(),te=a("div"),C=a("ul"),pt=a("li"),se=a("a"),La=n("1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),it=a("li"),ae=a("a"),Ca=n("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),ut=a("li"),oe=a("a"),wa=n("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),dt=a("li"),le=a("a"),Oa=n("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),ft=a("li"),ne=a("a"),ba=n("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),_t=a("li"),re=a("a"),Ta=n("\u7BC4\u4F8B"),this.h()},l(e){_=o(e,"UL",{});var c=l(_);h=o(c,"LI",{});var $a=l(h);k=o($a,"A",{href:!0,rel:!0,target:!0});var Pa=l(k);m=o(Pa,"IMG",{src:!0,alt:!0}),v=o(Pa,"SPAN",{});var qa=l(v);P=r(qa,"\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),qa.forEach(t),Pa.forEach(t),$a.forEach(t),c.forEach(t),je=d(e),f=o(e,"H2",{id:!0});var Va=l(f);Ae=r(Va,"1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),Va.forEach(t),Re=d(e),ie=o(e,"H3",{});var Ma=l(ie);es=r(Ma,"a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),Ma.forEach(t),kt=d(e),D=o(e,"OL",{});var R=l(D);ue=o(R,"LI",{});var Sa=l(ue);ts=r(Sa,"\u767B\u5165 "),O=o(Sa,"A",{href:!0,rel:!0,target:!0});var ja=l(O);de=o(ja,"IMG",{src:!0,alt:!0}),He=o(ja,"SPAN",{});var za=l(He);ss=r(za,"Discord Developer Portal"),za.forEach(t),ja.forEach(t),Sa.forEach(t),as=d(R),Ue=o(R,"LI",{});var Ga=l(Ue);os=r(Ga,"\u300CNew Application\u300D"),Ga.forEach(t),ls=d(R),x=o(R,"LI",{});var Kt=l(x);ns=r(Kt,"\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),xe=o(Kt,"CODE",{});var Ka=l(xe);rs=r(Ka,"OAuth Verify"),Ka.forEach(t),B=o(Kt,"UL",{});var Ft=l(B);Be=o(Ft,"LI",{});var Fa=l(Be);cs=r(Fa,"\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),Fa.forEach(t),ps=d(Ft),Ne=o(Ft,"LI",{});var Qa=l(Ne);is=r(Qa,"\u300CCreate\u300D"),Qa.forEach(t),Ft.forEach(t),Kt.forEach(t),us=d(R),b=o(R,"LI",{});var Te=l(b);ds=r(Te,"\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),$e=o(Te,"CODE",{});var Xa=l($e);fs=r(Xa,"Client ID"),Xa.forEach(t),_s=r(Te," \u548C "),qe=o(Te,"CODE",{});var Wa=l(qe);Es=r(Wa,"Client Secert"),Wa.forEach(t),ks=r(Te," \u4E4B\u5F8C\u6703\u7528\u5230"),Te.forEach(t),R.forEach(t),vt=d(e),fe=o(e,"H3",{});var Za=l(fe);vs=r(Za,"b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),Za.forEach(t),ht=d(e),I=o(e,"OL",{});var H=l(I);Ve=o(H,"LI",{});var Ja=l(Ve);hs=r(Ja,"\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),Ja.forEach(t),ms=d(H),_e=o(H,"LI",{});var Aa=l(_e);Ds=r(Aa,"\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),N=o(Aa,"UL",{});var Qt=l(N);Me=o(Qt,"LI",{});var Ya=l(Me);Is=r(Ya,"\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),Ya.forEach(t),ys=d(Qt),Ee=o(Qt,"LI",{});var Ra=l(Ee);Ls=r(Ra,"\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),ze=o(Ra,"UL",{});var ga=l(ze);Ge=o(ga,"LI",{});var eo=l(Ge);Ke=o(eo,"CODE",{});var to=l(Ke);Cs=r(to,"https://f6bfb5.github.io/login-with-discord"),to.forEach(t),eo.forEach(t),ga.forEach(t),Ra.forEach(t),Qt.forEach(t),Aa.forEach(t),ws=d(H),ke=o(H,"LI",{});var Ha=l(ke);Os=r(Ha,"\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),$=o(Ha,"UL",{});var Xt=l($);Fe=o(Xt,"LI",{});var so=l(Fe);bs=r(so,"\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),so.forEach(t),Ts=d(Xt),Qe=o(Xt,"LI",{});var ao=l(Qe);Ps=r(ao,"\u300Cemail\u300D"),ao.forEach(t),Xt.forEach(t),Ha.forEach(t),Ss=d(H),ve=o(H,"LI",{});var Ua=l(ve);js=r(Ua,"\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Xe=o(Ua,"UL",{});var oo=l(Xe);y=o(oo,"LI",{});var U=l(y);As=r(U,"\u4F8B\uFF1A"),We=o(U,"CODE",{});var lo=l(We);Rs=r(lo,"https://discord.com/api/oauth2/authorize?client_id="),lo.forEach(t),Hs=r(U,"[CLIENT ID]"),Ze=o(U,"CODE",{});var no=l(Ze);Us=r(no,"&redirect_uri="),no.forEach(t),xs=r(U,"[REDIRECT URL]"),Je=o(U,"CODE",{});var ro=l(Je);Bs=r(ro,"&response_type=code&scope="),ro.forEach(t),Ns=r(U,"[SCOPE]"),U.forEach(t),oo.forEach(t),Ua.forEach(t),H.forEach(t),mt=d(e),q=o(e,"H2",{id:!0});var co=l(q);$s=r(co,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),co.forEach(t),Dt=d(e),S=o(e,"P",{});var Wt=l(S);qs=r(Wt,"\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),Ye=o(Wt,"CODE",{});var po=l(Ye);Vs=r(po,"code"),po.forEach(t),Ms=r(Wt," \u53C3\u6578"),Wt.forEach(t),It=d(e),V=o(e,"H2",{id:!0});var io=l(V);zs=r(io,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),io.forEach(t),yt=d(e),w=o(e,"P",{});var Pe=l(w);Gs=r(Pe,"\u4F7F\u7528\u9019\u500B "),ge=o(Pe,"CODE",{});var uo=l(ge);Ks=r(uo,"code"),uo.forEach(t),Fs=r(Pe," \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),et=o(Pe,"CODE",{});var fo=l(et);Qs=r(fo,"access_token"),fo.forEach(t),Xs=r(Pe,"\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),Pe.forEach(t),Lt=d(e),he=o(e,"H3",{});var _o=l(he);Ws=r(_o,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),_o.forEach(t),Ct=d(e),M=o(e,"PRE",{class:!0});var ll=l(M);ll.forEach(t),wt=d(e),z=o(e,"H3",{});var xa=l(z);Zs=r(xa,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),tt=o(xa,"CODE",{});var Eo=l(tt);Js=r(Eo,"access token"),Eo.forEach(t),xa.forEach(t),Ot=d(e),G=o(e,"PRE",{class:!0});var nl=l(G);nl.forEach(t),bt=d(e),j=o(e,"UL",{});var Zt=l(j);A=o(Zt,"LI",{});var Et=l(A);st=o(Et,"CODE",{});var ko=l(st);Ys=r(ko,"code"),ko.forEach(t),gs=r(Et," \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),at=o(Et,"CODE",{});var vo=l(at);ea=r(vo,"code"),vo.forEach(t),ta=r(Et," \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),Et.forEach(t),sa=d(Zt),K=o(Zt,"LI",{});var Jt=l(K);ot=o(Jt,"CODE",{});var ho=l(ot);aa=r(ho,"access token"),ho.forEach(t),oa=r(Jt," \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),lt=o(Jt,"UL",{});var mo=l(lt);F=o(mo,"LI",{});var Yt=l(F);la=r(Yt,"\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),nt=o(Yt,"CODE",{});var Do=l(nt);na=r(Do,"refresh token"),Do.forEach(t),ra=r(Yt," \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),Yt.forEach(t),mo.forEach(t),Jt.forEach(t),Zt.forEach(t),Tt=d(e),Q=o(e,"H2",{id:!0});var Io=l(Q);ca=r(Io,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Io.forEach(t),Pt=d(e),me=o(e,"H3",{});var yo=l(me);pa=r(yo,"a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),yo.forEach(t),St=d(e),X=o(e,"PRE",{class:!0});var rl=l(X);rl.forEach(t),jt=d(e),De=o(e,"H3",{});var Lo=l(De);ia=r(Lo,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),Lo.forEach(t),At=d(e),W=o(e,"PRE",{class:!0});var cl=l(W);cl.forEach(t),Rt=d(e),Ie=o(e,"UL",{});var Co=l(Ie);T=o(Co,"LI",{});var Se=l(T);ua=r(Se,"\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),rt=o(Se,"CODE",{});var wo=l(rt);da=r(wo,"https://cdn.discordapp.com/avatars/"),wo.forEach(t),fa=r(Se,"[Discord ID]"),ct=o(Se,"CODE",{});var Oo=l(ct);_a=r(Oo,"/"),Oo.forEach(t),Ea=r(Se,"[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),Se.forEach(t),Co.forEach(t),Ht=d(e),Z=o(e,"H2",{id:!0});var bo=l(Z);ka=r(bo,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),bo.forEach(t),Ut=d(e),ye=o(e,"H3",{});var To=l(ye);va=r(To,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),To.forEach(t),xt=d(e),J=o(e,"PRE",{class:!0});var pl=l(J);pl.forEach(t),Bt=d(e),Le=o(e,"H3",{});var Po=l(Le);ha=r(Po,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Po.forEach(t),Nt=d(e),Y=o(e,"PRE",{class:!0});var il=l(Y);il.forEach(t),$t=d(e),g=o(e,"H2",{id:!0});var So=l(g);ma=r(So,"\u7BC4\u4F8B"),So.forEach(t),qt=d(e),Ce=o(e,"P",{});var jo=l(Ce);Da=r(jo,"\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),jo.forEach(t),Vt=d(e),ee=o(e,"BUTTON",{id:!0});var Ao=l(ee);Ia=r(Ao,"Login with Discord"),Ao.forEach(t),Mt=d(e),we=o(e,"SPAN",{id:!0}),l(we).forEach(t),zt=d(e),L=o(e,"DIV",{class:!0,id:!0,style:!0});var gt=l(L);Oe=o(gt,"IMG",{alt:!0,class:!0,id:!0}),ya=d(gt),be=o(gt,"DIV",{class:!0,id:!0}),l(be).forEach(t),gt.forEach(t),Gt=d(e),te=o(e,"DIV",{class:!0});var Ro=l(te);C=o(Ro,"UL",{class:!0});var ce=l(C);pt=o(ce,"LI",{});var Ho=l(pt);se=o(Ho,"A",{href:!0,onclick:!0});var Uo=l(se);La=r(Uo,"1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),Uo.forEach(t),Ho.forEach(t),it=o(ce,"LI",{});var xo=l(it);ae=o(xo,"A",{href:!0,onclick:!0});var Bo=l(ae);Ca=r(Bo,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Bo.forEach(t),xo.forEach(t),ut=o(ce,"LI",{});var No=l(ut);oe=o(No,"A",{href:!0,onclick:!0});var $o=l(oe);wa=r($o,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),$o.forEach(t),No.forEach(t),dt=o(ce,"LI",{});var qo=l(dt);le=o(qo,"A",{href:!0,onclick:!0});var Vo=l(le);Oa=r(Vo,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Vo.forEach(t),qo.forEach(t),ft=o(ce,"LI",{});var Mo=l(ft);ne=o(Mo,"A",{href:!0,onclick:!0});var zo=l(ne);ba=r(zo,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),zo.forEach(t),Mo.forEach(t),_t=o(ce,"LI",{});var Go=l(_t);re=o(Go,"A",{href:!0,onclick:!0});var Ko=l(re);Ta=r(Ko,"\u7BC4\u4F8B"),Ko.forEach(t),Go.forEach(t),ce.forEach(t),Ro.forEach(t),this.h()},h(){Xo(m.src,E="https://s2.googleusercontent.com/s2/favicons?domain=https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98")||i(m,"src",E),i(m,"alt","\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),i(k,"href","https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98"),i(k,"rel","noopener"),i(k,"target","_blank"),i(f,"id","js-id-1-\u65BC-discord-developer-portal-\u767B\u9304\u61C9\u7528"),Xo(de.src,Na="https://s2.googleusercontent.com/s2/favicons?domain=https://discord.com/developers/applications")||i(de,"src",Na),i(de,"alt","Discord Developer Portal"),i(O,"href","https://discord.com/developers/applications"),i(O,"rel","noopener"),i(O,"target","_blank"),i(q,"id","js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code"),i(V,"id","js-id-3-\u4F7F\u7528code\u53D6\u5F97token"),i(M,"class","language-bash"),i(G,"class","language-json"),i(Q,"id","js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),i(X,"class","language-bash"),i(W,"class","language-json"),i(Z,"id","js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token"),i(J,"class","language-bash"),i(Y,"class","language-json"),i(g,"id","js-id-\u7BC4\u4F8B"),i(ee,"id","js-discord-button"),i(we,"id","js-discord-status"),i(Oe,"alt","profile"),i(Oe,"class","discord-card--image svelte-9ys6tj"),i(Oe,"id","js-discord-card--image"),i(be,"class","discord-card--username"),i(be,"id","js-discord-card--username"),i(L,"class","discord-card"),i(L,"id","js-discord-card"),yl(L,"display","none"),i(se,"href","#"),i(se,"onclick","document.querySelector('#js-id-1-\u65BC-discord-developer-portal-\u767B\u9304\u61C9\u7528').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ae,"href","#"),i(ae,"onclick","document.querySelector('#js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(oe,"href","#"),i(oe,"onclick","document.querySelector('#js-id-3-\u4F7F\u7528code\u53D6\u5F97token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(le,"href","#"),i(le,"onclick","document.querySelector('#js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ne,"href","#"),i(ne,"onclick","document.querySelector('#js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(re,"href","#"),i(re,"onclick","document.querySelector('#js-id-\u7BC4\u4F8B').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(C,"class","toc"),i(te,"class","toc-container")},m(e,c){p(e,_,c),s(_,h),s(h,k),s(k,m),s(k,v),s(v,P),p(e,je,c),p(e,f,c),s(f,Ae),p(e,Re,c),p(e,ie,c),s(ie,es),p(e,kt,c),p(e,D,c),s(D,ue),s(ue,ts),s(ue,O),s(O,de),s(O,He),s(He,ss),s(D,as),s(D,Ue),s(Ue,os),s(D,ls),s(D,x),s(x,ns),s(x,xe),s(xe,rs),s(x,B),s(B,Be),s(Be,cs),s(B,ps),s(B,Ne),s(Ne,is),s(D,us),s(D,b),s(b,ds),s(b,$e),s($e,fs),s(b,_s),s(b,qe),s(qe,Es),s(b,ks),p(e,vt,c),p(e,fe,c),s(fe,vs),p(e,ht,c),p(e,I,c),s(I,Ve),s(Ve,hs),s(I,ms),s(I,_e),s(_e,Ds),s(_e,N),s(N,Me),s(Me,Is),s(N,ys),s(N,Ee),s(Ee,Ls),s(Ee,ze),s(ze,Ge),s(Ge,Ke),s(Ke,Cs),s(I,ws),s(I,ke),s(ke,Os),s(ke,$),s($,Fe),s(Fe,bs),s($,Ts),s($,Qe),s(Qe,Ps),s(I,Ss),s(I,ve),s(ve,js),s(ve,Xe),s(Xe,y),s(y,As),s(y,We),s(We,Rs),s(y,Hs),s(y,Ze),s(Ze,Us),s(y,xs),s(y,Je),s(Je,Bs),s(y,Ns),p(e,mt,c),p(e,q,c),s(q,$s),p(e,Dt,c),p(e,S,c),s(S,qs),s(S,Ye),s(Ye,Vs),s(S,Ms),p(e,It,c),p(e,V,c),s(V,zs),p(e,yt,c),p(e,w,c),s(w,Gs),s(w,ge),s(ge,Ks),s(w,Fs),s(w,et),s(et,Qs),s(w,Xs),p(e,Lt,c),p(e,he,c),s(he,Ws),p(e,Ct,c),p(e,M,c),M.innerHTML=go,p(e,wt,c),p(e,z,c),s(z,Zs),s(z,tt),s(tt,Js),p(e,Ot,c),p(e,G,c),G.innerHTML=el,p(e,bt,c),p(e,j,c),s(j,A),s(A,st),s(st,Ys),s(A,gs),s(A,at),s(at,ea),s(A,ta),s(j,sa),s(j,K),s(K,ot),s(ot,aa),s(K,oa),s(K,lt),s(lt,F),s(F,la),s(F,nt),s(nt,na),s(F,ra),p(e,Tt,c),p(e,Q,c),s(Q,ca),p(e,Pt,c),p(e,me,c),s(me,pa),p(e,St,c),p(e,X,c),X.innerHTML=tl,p(e,jt,c),p(e,De,c),s(De,ia),p(e,At,c),p(e,W,c),W.innerHTML=sl,p(e,Rt,c),p(e,Ie,c),s(Ie,T),s(T,ua),s(T,rt),s(rt,da),s(T,fa),s(T,ct),s(ct,_a),s(T,Ea),p(e,Ht,c),p(e,Z,c),s(Z,ka),p(e,Ut,c),p(e,ye,c),s(ye,va),p(e,xt,c),p(e,J,c),J.innerHTML=al,p(e,Bt,c),p(e,Le,c),s(Le,ha),p(e,Nt,c),p(e,Y,c),Y.innerHTML=ol,p(e,$t,c),p(e,g,c),s(g,ma),p(e,qt,c),p(e,Ce,c),s(Ce,Da),p(e,Vt,c),p(e,ee,c),s(ee,Ia),p(e,Mt,c),p(e,we,c),p(e,zt,c),p(e,L,c),s(L,Oe),s(L,ya),s(L,be),p(e,Gt,c),p(e,te,c),s(te,C),s(C,pt),s(pt,se),s(se,La),s(C,it),s(it,ae),s(ae,Ca),s(C,ut),s(ut,oe),s(oe,wa),s(C,dt),s(dt,le),s(le,Oa),s(C,ft),s(ft,ne),s(ne,ba),s(C,_t),s(_t,re),s(re,Ta)},p:Ll,d(e){e&&t(_),e&&t(je),e&&t(f),e&&t(Re),e&&t(ie),e&&t(kt),e&&t(D),e&&t(vt),e&&t(fe),e&&t(ht),e&&t(I),e&&t(mt),e&&t(q),e&&t(Dt),e&&t(S),e&&t(It),e&&t(V),e&&t(yt),e&&t(w),e&&t(Lt),e&&t(he),e&&t(Ct),e&&t(M),e&&t(wt),e&&t(z),e&&t(Ot),e&&t(G),e&&t(bt),e&&t(j),e&&t(Tt),e&&t(Q),e&&t(Pt),e&&t(me),e&&t(St),e&&t(X),e&&t(jt),e&&t(De),e&&t(At),e&&t(W),e&&t(Rt),e&&t(Ie),e&&t(Ht),e&&t(Z),e&&t(Ut),e&&t(ye),e&&t(xt),e&&t(J),e&&t(Bt),e&&t(Le),e&&t(Nt),e&&t(Y),e&&t($t),e&&t(g),e&&t(qt),e&&t(Ce),e&&t(Vt),e&&t(ee),e&&t(Mt),e&&t(we),e&&t(zt),e&&t(L),e&&t(Gt),e&&t(te)}}}function Ol(pe){let _,h;const k=[pe[0],Wo];let m={$$slots:{default:[wl]},$$scope:{ctx:pe}};for(let E=0;E<k.length;E+=1)m=Ba(m,k[E]);return _=new Cl({props:m}),{c(){_l(_.$$.fragment)},l(E){El(_.$$.fragment,E)},m(E,v){kl(_,E,v),h=!0},p(E,[v]){const P=v&1?vl(k,[v&1&&Fo(E[0]),v&0&&Fo(Wo)]):{};v&2&&(P.$$scope={dirty:v,ctx:E}),_.$set(P)},i(E){h||(hl(_.$$.fragment,E),h=!0)},o(E){ml(_.$$.fragment,E),h=!1},d(E){Dl(_,E)}}}const Wo={title:"\u5BE6\u4F5C\u300C\u4F7F\u7528Discord\u767B\u5165\u300D",date:"2021-01-14T00:24:23.000Z",tags:"F2E"},Zo="798950274114781204",Jo="https://f6bfb5.github.io/login-with-discord",Yo="identify email";function bl(){document.location.href=`https://discord.com/api/oauth2/authorize
?client_id=${Zo}
&redirect_uri=${encodeURIComponent(Jo)}
&response_type=code
&scope=${encodeURIComponent(Yo)}`}function Tl(pe,_,h){return Il(()=>{document.getElementById("js-discord-button").addEventListener("click",bl);const k=new URLSearchParams(window.location.search);if(k.has("code")){const m="3c-TeN5NxElL4la8E6h5BlT4zDHigser",E="https://discordapp.com/api/oauth2/token",v={client_id:Zo,client_secret:m,grant_type:"authorization_code",code:k.get("code"),redirect_uri:Jo,scope:Yo},P=Object.keys(v).map(f=>encodeURIComponent(f)+"="+encodeURIComponent(v[f])).join("&");fetch(E,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:P}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="token got",f.json()}).then(function(f){let Ae=f.access_token;return fetch("https://discordapp.com/api/users/@me",{method:"GET",headers:{authorization:"Bearer "+Ae}})}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="user data got",f.json()}).catch(function(f){document.getElementById("js-discord-status").innerText=f}).then(function(f){f!=null&&(document.getElementById("js-discord-card").style.display="block",document.getElementById("js-discord-card--image").src=`https://cdn.discordapp.com/avatars/${f.id}/${f.avatar}`,document.getElementById("js-discord-card--username").innerText=`${f.username}#${f.discriminator}`)})}else document.getElementById("js-discord-status").innerText="Not logged in"}),pe.$$set=k=>{h(0,_=Ba(Ba({},_),Qo(k)))},_=Qo(_),[_]}class Al extends ul{constructor(_){super(),dl(this,_,Tl,Ol,fl,{})}}export{Al as default,Wo as metadata};
