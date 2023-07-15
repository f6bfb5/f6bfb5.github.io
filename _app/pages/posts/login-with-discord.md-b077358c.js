import{S as Sl,i as Pl,s as jl,C as Za,w as Al,x as Rl,y as Ul,z as Hl,A as pl,q as xl,o as Bl,B as Nl,v as $l,_ as ul,e as a,t as n,k as u,c as o,a as l,h as c,d as t,m as d,H as dl,b as p,f as ql,g as i,I as s,E as Vl}from"../../chunks/index-8418cccc.js";import{P as Ml}from"../../chunks/_post-d4178251.js";import"../../chunks/BlinkAnchor-aec4dee8.js";function zl(pe){let _,h,k,m,E,v,b,Ue,f,He,xe,ue,is,Ct,I,de,ps,w,fe,Ja,Be,us,ds,Ne,fs,_s,H,Es,$e,ks,x,qe,vs,hs,Ve,ms,Is,O,Ds,Me,ys,Ls,ze,Cs,ws,wt,_e,Os,Ot,D,Ge,bs,Ts,Ee,Ss,B,Ke,Ps,js,ke,As,Fe,Qe,Xe,Rs,Us,ve,Hs,N,We,xs,Bs,Ze,Ns,$s,he,qs,Je,y,Vs,Ye,Ms,zs,ge,Gs,Ks,et,Fs,Qs,bt,$,Xs,Tt,me,Ie,Ws,tt,q,Zs,st,Js,Ys,St,V,gs,Pt,De,T,ea,at,ta,sa,ot,M,aa,lt,oa,la,jt,ye,na,At,z,vl=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=authorization_code
     &amp;code=[CODE]
     &amp;redirect_uri=[REDIRECT URL]\uFF08\u8981\u8207\u8A8D\u8B49 URL \u76F8\u540C\uFF09"</span>
     https://discordapp.com/api/oauth2/token</code>`,Rt,G,ca,nt,ra,Ut,K,hl=`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
  <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,Ht,S,P,ct,ia,pa,rt,ua,da,fa,F,it,_a,Ea,pt,Q,ka,ut,va,ha,xt,X,ma,Bt,Le,Ia,Nt,W,ml=`<code class="language-bash"><span class="token function">curl</span> -H <span class="token string">"Authorization: Bearer [ACCESS TOKEN]"</span>
     https://discordapp.com/api/users/@me</code>`,$t,Ce,Da,qt,Z,Il=`<code class="language-json"><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,Vt,we,Oe,ya,dt,j,ft,La,Ca,_t,wa,Oa,Mt,J,ba,zt,be,Ta,Gt,Y,Dl=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=refresh_token
     &amp;refresh_token=[REFRESH TOKEN]"</span>
     https://discordapp.com/api/oauth2/token</code>`,Kt,Te,Sa,Ft,g,yl=`<code class="language-json"><span class="token punctuation">&#123;</span>
   <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
   <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,Qt,ee,Pa,Xt,Se,ja,Wt,te,Aa,Zt,Pe,Jt,L,je,Ra,Ae,Yt,se,C,Et,ae,Ua,kt,oe,Ha,vt,le,xa,ht,ne,Ba,mt,ce,Na,It,re,$a;return{c(){_=a("ul"),h=a("li"),k=a("a"),m=a("img"),v=a("span"),b=n("\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),Ue=u(),f=a("h2"),He=n("1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),xe=u(),ue=a("h3"),is=n("a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),Ct=u(),I=a("ol"),de=a("li"),ps=n("\u767B\u5165 "),w=a("a"),fe=a("img"),Be=a("span"),us=n("Discord Developer Portal"),ds=u(),Ne=a("li"),fs=n("\u300CNew Application\u300D"),_s=u(),H=a("li"),Es=n("\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),$e=a("code"),ks=n("OAuth Verify"),x=a("ul"),qe=a("li"),vs=n("\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),hs=u(),Ve=a("li"),ms=n("\u300CCreate\u300D"),Is=u(),O=a("li"),Ds=n("\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Me=a("code"),ys=n("Client ID"),Ls=n(" \u548C "),ze=a("code"),Cs=n("Client Secert"),ws=n(" \u4E4B\u5F8C\u6703\u7528\u5230"),wt=u(),_e=a("h3"),Os=n("b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),Ot=u(),D=a("ol"),Ge=a("li"),bs=n("\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),Ts=u(),Ee=a("li"),Ss=n("\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),B=a("ul"),Ke=a("li"),Ps=n("\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),js=u(),ke=a("li"),As=n("\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),Fe=a("ul"),Qe=a("li"),Xe=a("code"),Rs=n("https://f6bfb5.github.io/login-with-discord"),Us=u(),ve=a("li"),Hs=n("\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),N=a("ul"),We=a("li"),xs=n("\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),Bs=u(),Ze=a("li"),Ns=n("\u300Cemail\u300D"),$s=u(),he=a("li"),qs=n("\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Je=a("ul"),y=a("li"),Vs=n("\u4F8B\uFF1A"),Ye=a("code"),Ms=n("https://discord.com/api/oauth2/authorize?client_id="),zs=n("[CLIENT ID]"),ge=a("code"),Gs=n("&redirect_uri="),Ks=n("[REDIRECT URL]"),et=a("code"),Fs=n("&response_type=code&scope="),Qs=n("[SCOPE]"),bt=u(),$=a("h2"),Xs=n("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Tt=u(),me=a("ul"),Ie=a("li"),Ws=n("\u4F7F\u7528\u8A8D\u8B49\u9023\u7D50\u767B\u5165"),tt=a("ul"),q=a("li"),Zs=n("\u91CD\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),st=a("code"),Js=n("code"),Ys=n(" \u53C3\u6578"),St=u(),V=a("h2"),gs=n("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Caccess token\u300D"),Pt=u(),De=a("ul"),T=a("li"),ea=n("\u4F7F\u7528\u9019\u500B "),at=a("code"),ta=n("code"),sa=n(" \u9001\u51FA\u8ACB\u6C42"),ot=a("ul"),M=a("li"),aa=n("\u53D6\u5F97 "),lt=a("code"),oa=n("access_token"),la=n("\uFF0C\u624D\u80FD\u64C1\u6709\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),jt=u(),ye=a("h3"),na=n("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),At=u(),z=a("pre"),Rt=u(),G=a("h3"),ca=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),nt=a("code"),ra=n("access token"),Ut=u(),K=a("pre"),Ht=u(),S=a("ul"),P=a("li"),ct=a("code"),ia=n("code"),pa=n(" \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),rt=a("code"),ua=n("code"),da=n(" \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),fa=u(),F=a("li"),it=a("code"),_a=n("access token"),Ea=n(" \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),pt=a("ul"),Q=a("li"),ka=n("\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),ut=a("code"),va=n("refresh token"),ha=n(" \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),xt=u(),X=a("h2"),ma=n("4. \u4F7F\u7528\u300Caccess token\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Bt=u(),Le=a("h3"),Ia=n("a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),Nt=u(),W=a("pre"),$t=u(),Ce=a("h3"),Da=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),qt=u(),Z=a("pre"),Vt=u(),we=a("ul"),Oe=a("li"),ya=n("\u642D\u914D\u982D\u50CF\u7DB2\u5740\u53D6\u5F97\u5716\u7247"),dt=a("ul"),j=a("li"),ft=a("code"),La=n("https://cdn.discordapp.com/avatars/"),Ca=n("[Discord ID]"),_t=a("code"),wa=n("/"),Oa=n("[\u5927\u982D\u8CBC ID]"),Mt=u(),J=a("h2"),ba=n("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),zt=u(),be=a("h3"),Ta=n("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Gt=u(),Y=a("pre"),Kt=u(),Te=a("h3"),Sa=n("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Ft=u(),g=a("pre"),Qt=u(),ee=a("h2"),Pa=n("\u7BC4\u4F8B"),Xt=u(),Se=a("p"),ja=n("\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),Wt=u(),te=a("button"),Aa=n("Login with Discord"),Zt=u(),Pe=a("span"),Jt=u(),L=a("div"),je=a("img"),Ra=u(),Ae=a("div"),Yt=u(),se=a("div"),C=a("ul"),Et=a("li"),ae=a("a"),Ua=n("1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),kt=a("li"),oe=a("a"),Ha=n("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),vt=a("li"),le=a("a"),xa=n("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Caccess token\u300D"),ht=a("li"),ne=a("a"),Ba=n("4. \u4F7F\u7528\u300Caccess token\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),mt=a("li"),ce=a("a"),Na=n("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),It=a("li"),re=a("a"),$a=n("\u7BC4\u4F8B"),this.h()},l(e){_=o(e,"UL",{});var r=l(_);h=o(r,"LI",{});var Ya=l(h);k=o(Ya,"A",{href:!0,rel:!0,target:!0});var qa=l(k);m=o(qa,"IMG",{src:!0,alt:!0}),v=o(qa,"SPAN",{});var ga=l(v);b=c(ga,"\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),ga.forEach(t),qa.forEach(t),Ya.forEach(t),r.forEach(t),Ue=d(e),f=o(e,"H2",{id:!0});var eo=l(f);He=c(eo,"1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),eo.forEach(t),xe=d(e),ue=o(e,"H3",{});var to=l(ue);is=c(to,"a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),to.forEach(t),Ct=d(e),I=o(e,"OL",{});var A=l(I);de=o(A,"LI",{});var Va=l(de);ps=c(Va,"\u767B\u5165 "),w=o(Va,"A",{href:!0,rel:!0,target:!0});var Ma=l(w);fe=o(Ma,"IMG",{src:!0,alt:!0}),Be=o(Ma,"SPAN",{});var so=l(Be);us=c(so,"Discord Developer Portal"),so.forEach(t),Ma.forEach(t),Va.forEach(t),ds=d(A),Ne=o(A,"LI",{});var ao=l(Ne);fs=c(ao,"\u300CNew Application\u300D"),ao.forEach(t),_s=d(A),H=o(A,"LI",{});var gt=l(H);Es=c(gt,"\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),$e=o(gt,"CODE",{});var oo=l($e);ks=c(oo,"OAuth Verify"),oo.forEach(t),x=o(gt,"UL",{});var es=l(x);qe=o(es,"LI",{});var lo=l(qe);vs=c(lo,"\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),lo.forEach(t),hs=d(es),Ve=o(es,"LI",{});var no=l(Ve);ms=c(no,"\u300CCreate\u300D"),no.forEach(t),es.forEach(t),gt.forEach(t),Is=d(A),O=o(A,"LI",{});var Re=l(O);Ds=c(Re,"\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Me=o(Re,"CODE",{});var co=l(Me);ys=c(co,"Client ID"),co.forEach(t),Ls=c(Re," \u548C "),ze=o(Re,"CODE",{});var ro=l(ze);Cs=c(ro,"Client Secert"),ro.forEach(t),ws=c(Re," \u4E4B\u5F8C\u6703\u7528\u5230"),Re.forEach(t),A.forEach(t),wt=d(e),_e=o(e,"H3",{});var io=l(_e);Os=c(io,"b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),io.forEach(t),Ot=d(e),D=o(e,"OL",{});var R=l(D);Ge=o(R,"LI",{});var po=l(Ge);bs=c(po,"\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),po.forEach(t),Ts=d(R),Ee=o(R,"LI",{});var za=l(Ee);Ss=c(za,"\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u9A57\u8B49\u5B8C\u5F8C\u91CD\u5C0E\u5411\u7684\u7DB2\u5740"),B=o(za,"UL",{});var ts=l(B);Ke=o(ts,"LI",{});var uo=l(Ke);Ps=c(uo,"\u4E5F\u5C31\u662F\u8981\u7528\u65BC\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),uo.forEach(t),js=d(ts),ke=o(ts,"LI",{});var Ga=l(ke);As=c(Ga,"\u672C\u6587\u5BE6\u4F5C\u7BC4\u4F8B\u7684\u7DB2\u5740\u5C31\u662F\u6B64\u9801\u9762\u9023\u7D50\uFF1A"),Fe=o(Ga,"UL",{});var fo=l(Fe);Qe=o(fo,"LI",{});var _o=l(Qe);Xe=o(_o,"CODE",{});var Eo=l(Xe);Rs=c(Eo,"https://f6bfb5.github.io/login-with-discord"),Eo.forEach(t),_o.forEach(t),fo.forEach(t),Ga.forEach(t),ts.forEach(t),za.forEach(t),Us=d(R),ve=o(R,"LI",{});var Ka=l(ve);Hs=c(Ka,"\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),N=o(Ka,"UL",{});var ss=l(N);We=o(ss,"LI",{});var ko=l(We);xs=c(ko,"\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),ko.forEach(t),Bs=d(ss),Ze=o(ss,"LI",{});var vo=l(Ze);Ns=c(vo,"\u300Cemail\u300D"),vo.forEach(t),ss.forEach(t),Ka.forEach(t),$s=d(R),he=o(R,"LI",{});var Fa=l(he);qs=c(Fa,"\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Je=o(Fa,"UL",{});var ho=l(Je);y=o(ho,"LI",{});var U=l(y);Vs=c(U,"\u4F8B\uFF1A"),Ye=o(U,"CODE",{});var mo=l(Ye);Ms=c(mo,"https://discord.com/api/oauth2/authorize?client_id="),mo.forEach(t),zs=c(U,"[CLIENT ID]"),ge=o(U,"CODE",{});var Io=l(ge);Gs=c(Io,"&redirect_uri="),Io.forEach(t),Ks=c(U,"[REDIRECT URL]"),et=o(U,"CODE",{});var Do=l(et);Fs=c(Do,"&response_type=code&scope="),Do.forEach(t),Qs=c(U,"[SCOPE]"),U.forEach(t),ho.forEach(t),Fa.forEach(t),R.forEach(t),bt=d(e),$=o(e,"H2",{id:!0});var yo=l($);Xs=c(yo,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),yo.forEach(t),Tt=d(e),me=o(e,"UL",{});var Lo=l(me);Ie=o(Lo,"LI",{});var Qa=l(Ie);Ws=c(Qa,"\u4F7F\u7528\u8A8D\u8B49\u9023\u7D50\u767B\u5165"),tt=o(Qa,"UL",{});var Co=l(tt);q=o(Co,"LI",{});var as=l(q);Zs=c(as,"\u91CD\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),st=o(as,"CODE",{});var wo=l(st);Js=c(wo,"code"),wo.forEach(t),Ys=c(as," \u53C3\u6578"),as.forEach(t),Co.forEach(t),Qa.forEach(t),Lo.forEach(t),St=d(e),V=o(e,"H2",{id:!0});var Oo=l(V);gs=c(Oo,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Caccess token\u300D"),Oo.forEach(t),Pt=d(e),De=o(e,"UL",{});var bo=l(De);T=o(bo,"LI",{});var Dt=l(T);ea=c(Dt,"\u4F7F\u7528\u9019\u500B "),at=o(Dt,"CODE",{});var To=l(at);ta=c(To,"code"),To.forEach(t),sa=c(Dt," \u9001\u51FA\u8ACB\u6C42"),ot=o(Dt,"UL",{});var So=l(ot);M=o(So,"LI",{});var os=l(M);aa=c(os,"\u53D6\u5F97 "),lt=o(os,"CODE",{});var Po=l(lt);oa=c(Po,"access_token"),Po.forEach(t),la=c(os,"\uFF0C\u624D\u80FD\u64C1\u6709\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),os.forEach(t),So.forEach(t),Dt.forEach(t),bo.forEach(t),jt=d(e),ye=o(e,"H3",{});var jo=l(ye);na=c(jo,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),jo.forEach(t),At=d(e),z=o(e,"PRE",{class:!0});var Ll=l(z);Ll.forEach(t),Rt=d(e),G=o(e,"H3",{});var Xa=l(G);ca=c(Xa,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),nt=o(Xa,"CODE",{});var Ao=l(nt);ra=c(Ao,"access token"),Ao.forEach(t),Xa.forEach(t),Ut=d(e),K=o(e,"PRE",{class:!0});var Cl=l(K);Cl.forEach(t),Ht=d(e),S=o(e,"UL",{});var ls=l(S);P=o(ls,"LI",{});var yt=l(P);ct=o(yt,"CODE",{});var Ro=l(ct);ia=c(Ro,"code"),Ro.forEach(t),pa=c(yt," \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),rt=o(yt,"CODE",{});var Uo=l(rt);ua=c(Uo,"code"),Uo.forEach(t),da=c(yt," \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),yt.forEach(t),fa=d(ls),F=o(ls,"LI",{});var ns=l(F);it=o(ns,"CODE",{});var Ho=l(it);_a=c(Ho,"access token"),Ho.forEach(t),Ea=c(ns," \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),pt=o(ns,"UL",{});var xo=l(pt);Q=o(xo,"LI",{});var cs=l(Q);ka=c(cs,"\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),ut=o(cs,"CODE",{});var Bo=l(ut);va=c(Bo,"refresh token"),Bo.forEach(t),ha=c(cs," \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),cs.forEach(t),xo.forEach(t),ns.forEach(t),ls.forEach(t),xt=d(e),X=o(e,"H2",{id:!0});var No=l(X);ma=c(No,"4. \u4F7F\u7528\u300Caccess token\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),No.forEach(t),Bt=d(e),Le=o(e,"H3",{});var $o=l(Le);Ia=c($o,"a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),$o.forEach(t),Nt=d(e),W=o(e,"PRE",{class:!0});var wl=l(W);wl.forEach(t),$t=d(e),Ce=o(e,"H3",{});var qo=l(Ce);Da=c(qo,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),qo.forEach(t),qt=d(e),Z=o(e,"PRE",{class:!0});var Ol=l(Z);Ol.forEach(t),Vt=d(e),we=o(e,"UL",{});var Vo=l(we);Oe=o(Vo,"LI",{});var Wa=l(Oe);ya=c(Wa,"\u642D\u914D\u982D\u50CF\u7DB2\u5740\u53D6\u5F97\u5716\u7247"),dt=o(Wa,"UL",{});var Mo=l(dt);j=o(Mo,"LI",{});var Lt=l(j);ft=o(Lt,"CODE",{});var zo=l(ft);La=c(zo,"https://cdn.discordapp.com/avatars/"),zo.forEach(t),Ca=c(Lt,"[Discord ID]"),_t=o(Lt,"CODE",{});var Go=l(_t);wa=c(Go,"/"),Go.forEach(t),Oa=c(Lt,"[\u5927\u982D\u8CBC ID]"),Lt.forEach(t),Mo.forEach(t),Wa.forEach(t),Vo.forEach(t),Mt=d(e),J=o(e,"H2",{id:!0});var Ko=l(J);ba=c(Ko,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),Ko.forEach(t),zt=d(e),be=o(e,"H3",{});var Fo=l(be);Ta=c(Fo,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Fo.forEach(t),Gt=d(e),Y=o(e,"PRE",{class:!0});var bl=l(Y);bl.forEach(t),Kt=d(e),Te=o(e,"H3",{});var Qo=l(Te);Sa=c(Qo,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Qo.forEach(t),Ft=d(e),g=o(e,"PRE",{class:!0});var Tl=l(g);Tl.forEach(t),Qt=d(e),ee=o(e,"H2",{id:!0});var Xo=l(ee);Pa=c(Xo,"\u7BC4\u4F8B"),Xo.forEach(t),Xt=d(e),Se=o(e,"P",{});var Wo=l(Se);ja=c(Wo,"\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),Wo.forEach(t),Wt=d(e),te=o(e,"BUTTON",{id:!0});var Zo=l(te);Aa=c(Zo,"Login with Discord"),Zo.forEach(t),Zt=d(e),Pe=o(e,"SPAN",{id:!0}),l(Pe).forEach(t),Jt=d(e),L=o(e,"DIV",{class:!0,id:!0,style:!0});var rs=l(L);je=o(rs,"IMG",{alt:!0,class:!0,id:!0}),Ra=d(rs),Ae=o(rs,"DIV",{class:!0,id:!0}),l(Ae).forEach(t),rs.forEach(t),Yt=d(e),se=o(e,"DIV",{class:!0});var Jo=l(se);C=o(Jo,"UL",{class:!0});var ie=l(C);Et=o(ie,"LI",{});var Yo=l(Et);ae=o(Yo,"A",{href:!0,onclick:!0});var go=l(ae);Ua=c(go,"1. \u65BC Discord Developer Portal \u767B\u9304\u61C9\u7528"),go.forEach(t),Yo.forEach(t),kt=o(ie,"LI",{});var el=l(kt);oe=o(el,"A",{href:!0,onclick:!0});var tl=l(oe);Ha=c(tl,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),tl.forEach(t),el.forEach(t),vt=o(ie,"LI",{});var sl=l(vt);le=o(sl,"A",{href:!0,onclick:!0});var al=l(le);xa=c(al,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Caccess token\u300D"),al.forEach(t),sl.forEach(t),ht=o(ie,"LI",{});var ol=l(ht);ne=o(ol,"A",{href:!0,onclick:!0});var ll=l(ne);Ba=c(ll,"4. \u4F7F\u7528\u300Caccess token\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),ll.forEach(t),ol.forEach(t),mt=o(ie,"LI",{});var nl=l(mt);ce=o(nl,"A",{href:!0,onclick:!0});var cl=l(ce);Na=c(cl,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),cl.forEach(t),nl.forEach(t),It=o(ie,"LI",{});var rl=l(It);re=o(rl,"A",{href:!0,onclick:!0});var il=l(re);$a=c(il,"\u7BC4\u4F8B"),il.forEach(t),rl.forEach(t),ie.forEach(t),Jo.forEach(t),this.h()},h(){dl(m.src,E="https://s2.googleusercontent.com/s2/favicons?domain=https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98")||p(m,"src",E),p(m,"alt","\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),p(k,"href","https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98"),p(k,"rel","noopener"),p(k,"target","_blank"),p(f,"id","js-id-1-\u65BC-discord-developer-portal-\u767B\u9304\u61C9\u7528"),dl(fe.src,Ja="https://s2.googleusercontent.com/s2/favicons?domain=https://discord.com/developers/applications")||p(fe,"src",Ja),p(fe,"alt","Discord Developer Portal"),p(w,"href","https://discord.com/developers/applications"),p(w,"rel","noopener"),p(w,"target","_blank"),p($,"id","js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code"),p(V,"id","js-id-3-\u4F7F\u7528code\u53D6\u5F97access-token"),p(z,"class","language-bash"),p(K,"class","language-json"),p(X,"id","js-id-4-\u4F7F\u7528access-token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),p(W,"class","language-bash"),p(Z,"class","language-json"),p(J,"id","js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token"),p(Y,"class","language-bash"),p(g,"class","language-json"),p(ee,"id","js-id-\u7BC4\u4F8B"),p(te,"id","js-discord-button"),p(Pe,"id","js-discord-status"),p(je,"alt","profile"),p(je,"class","discord-card--image svelte-9ys6tj"),p(je,"id","js-discord-card--image"),p(Ae,"class","discord-card--username"),p(Ae,"id","js-discord-card--username"),p(L,"class","discord-card"),p(L,"id","js-discord-card"),ql(L,"display","none"),p(ae,"href","#"),p(ae,"onclick","document.querySelector('#js-id-1-\u65BC-discord-developer-portal-\u767B\u9304\u61C9\u7528').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(oe,"href","#"),p(oe,"onclick","document.querySelector('#js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(le,"href","#"),p(le,"onclick","document.querySelector('#js-id-3-\u4F7F\u7528code\u53D6\u5F97access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(ne,"href","#"),p(ne,"onclick","document.querySelector('#js-id-4-\u4F7F\u7528access-token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(ce,"href","#"),p(ce,"onclick","document.querySelector('#js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(re,"href","#"),p(re,"onclick","document.querySelector('#js-id-\u7BC4\u4F8B').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),p(C,"class","toc"),p(se,"class","toc-container")},m(e,r){i(e,_,r),s(_,h),s(h,k),s(k,m),s(k,v),s(v,b),i(e,Ue,r),i(e,f,r),s(f,He),i(e,xe,r),i(e,ue,r),s(ue,is),i(e,Ct,r),i(e,I,r),s(I,de),s(de,ps),s(de,w),s(w,fe),s(w,Be),s(Be,us),s(I,ds),s(I,Ne),s(Ne,fs),s(I,_s),s(I,H),s(H,Es),s(H,$e),s($e,ks),s(H,x),s(x,qe),s(qe,vs),s(x,hs),s(x,Ve),s(Ve,ms),s(I,Is),s(I,O),s(O,Ds),s(O,Me),s(Me,ys),s(O,Ls),s(O,ze),s(ze,Cs),s(O,ws),i(e,wt,r),i(e,_e,r),s(_e,Os),i(e,Ot,r),i(e,D,r),s(D,Ge),s(Ge,bs),s(D,Ts),s(D,Ee),s(Ee,Ss),s(Ee,B),s(B,Ke),s(Ke,Ps),s(B,js),s(B,ke),s(ke,As),s(ke,Fe),s(Fe,Qe),s(Qe,Xe),s(Xe,Rs),s(D,Us),s(D,ve),s(ve,Hs),s(ve,N),s(N,We),s(We,xs),s(N,Bs),s(N,Ze),s(Ze,Ns),s(D,$s),s(D,he),s(he,qs),s(he,Je),s(Je,y),s(y,Vs),s(y,Ye),s(Ye,Ms),s(y,zs),s(y,ge),s(ge,Gs),s(y,Ks),s(y,et),s(et,Fs),s(y,Qs),i(e,bt,r),i(e,$,r),s($,Xs),i(e,Tt,r),i(e,me,r),s(me,Ie),s(Ie,Ws),s(Ie,tt),s(tt,q),s(q,Zs),s(q,st),s(st,Js),s(q,Ys),i(e,St,r),i(e,V,r),s(V,gs),i(e,Pt,r),i(e,De,r),s(De,T),s(T,ea),s(T,at),s(at,ta),s(T,sa),s(T,ot),s(ot,M),s(M,aa),s(M,lt),s(lt,oa),s(M,la),i(e,jt,r),i(e,ye,r),s(ye,na),i(e,At,r),i(e,z,r),z.innerHTML=vl,i(e,Rt,r),i(e,G,r),s(G,ca),s(G,nt),s(nt,ra),i(e,Ut,r),i(e,K,r),K.innerHTML=hl,i(e,Ht,r),i(e,S,r),s(S,P),s(P,ct),s(ct,ia),s(P,pa),s(P,rt),s(rt,ua),s(P,da),s(S,fa),s(S,F),s(F,it),s(it,_a),s(F,Ea),s(F,pt),s(pt,Q),s(Q,ka),s(Q,ut),s(ut,va),s(Q,ha),i(e,xt,r),i(e,X,r),s(X,ma),i(e,Bt,r),i(e,Le,r),s(Le,Ia),i(e,Nt,r),i(e,W,r),W.innerHTML=ml,i(e,$t,r),i(e,Ce,r),s(Ce,Da),i(e,qt,r),i(e,Z,r),Z.innerHTML=Il,i(e,Vt,r),i(e,we,r),s(we,Oe),s(Oe,ya),s(Oe,dt),s(dt,j),s(j,ft),s(ft,La),s(j,Ca),s(j,_t),s(_t,wa),s(j,Oa),i(e,Mt,r),i(e,J,r),s(J,ba),i(e,zt,r),i(e,be,r),s(be,Ta),i(e,Gt,r),i(e,Y,r),Y.innerHTML=Dl,i(e,Kt,r),i(e,Te,r),s(Te,Sa),i(e,Ft,r),i(e,g,r),g.innerHTML=yl,i(e,Qt,r),i(e,ee,r),s(ee,Pa),i(e,Xt,r),i(e,Se,r),s(Se,ja),i(e,Wt,r),i(e,te,r),s(te,Aa),i(e,Zt,r),i(e,Pe,r),i(e,Jt,r),i(e,L,r),s(L,je),s(L,Ra),s(L,Ae),i(e,Yt,r),i(e,se,r),s(se,C),s(C,Et),s(Et,ae),s(ae,Ua),s(C,kt),s(kt,oe),s(oe,Ha),s(C,vt),s(vt,le),s(le,xa),s(C,ht),s(ht,ne),s(ne,Ba),s(C,mt),s(mt,ce),s(ce,Na),s(C,It),s(It,re),s(re,$a)},p:Vl,d(e){e&&t(_),e&&t(Ue),e&&t(f),e&&t(xe),e&&t(ue),e&&t(Ct),e&&t(I),e&&t(wt),e&&t(_e),e&&t(Ot),e&&t(D),e&&t(bt),e&&t($),e&&t(Tt),e&&t(me),e&&t(St),e&&t(V),e&&t(Pt),e&&t(De),e&&t(jt),e&&t(ye),e&&t(At),e&&t(z),e&&t(Rt),e&&t(G),e&&t(Ut),e&&t(K),e&&t(Ht),e&&t(S),e&&t(xt),e&&t(X),e&&t(Bt),e&&t(Le),e&&t(Nt),e&&t(W),e&&t($t),e&&t(Ce),e&&t(qt),e&&t(Z),e&&t(Vt),e&&t(we),e&&t(Mt),e&&t(J),e&&t(zt),e&&t(be),e&&t(Gt),e&&t(Y),e&&t(Kt),e&&t(Te),e&&t(Ft),e&&t(g),e&&t(Qt),e&&t(ee),e&&t(Xt),e&&t(Se),e&&t(Wt),e&&t(te),e&&t(Zt),e&&t(Pe),e&&t(Jt),e&&t(L),e&&t(Yt),e&&t(se)}}}function Gl(pe){let _,h;const k=[pe[0],fl];let m={$$slots:{default:[zl]},$$scope:{ctx:pe}};for(let E=0;E<k.length;E+=1)m=Za(m,k[E]);return _=new Ml({props:m}),{c(){Al(_.$$.fragment)},l(E){Rl(_.$$.fragment,E)},m(E,v){Ul(_,E,v),h=!0},p(E,[v]){const b=v&1?Hl(k,[v&1&&pl(E[0]),v&0&&pl(fl)]):{};v&2&&(b.$$scope={dirty:v,ctx:E}),_.$set(b)},i(E){h||(xl(_.$$.fragment,E),h=!0)},o(E){Bl(_.$$.fragment,E),h=!1},d(E){Nl(_,E)}}}const fl={title:"\u5BE6\u4F5C\u300C\u4F7F\u7528Discord\u767B\u5165\u300D",date:"2021-01-14T00:24:23.000Z",tags:"F2E"},_l="798950274114781204",El="https://f6bfb5.github.io/login-with-discord",kl="identify email";function Kl(){document.location.href=`https://discord.com/api/oauth2/authorize
?client_id=${_l}
&redirect_uri=${encodeURIComponent(El)}
&response_type=code
&scope=${encodeURIComponent(kl)}`}function Fl(pe,_,h){return $l(()=>{document.getElementById("js-discord-button").addEventListener("click",Kl);const k=new URLSearchParams(window.location.search);if(k.has("code")){const m="3c-TeN5NxElL4la8E6h5BlT4zDHigser",E="https://discordapp.com/api/oauth2/token",v={client_id:_l,client_secret:m,grant_type:"authorization_code",code:k.get("code"),redirect_uri:El,scope:kl},b=Object.keys(v).map(f=>encodeURIComponent(f)+"="+encodeURIComponent(v[f])).join("&");fetch(E,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:b}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="token got",f.json()}).then(function(f){let He=f.access_token;return fetch("https://discordapp.com/api/users/@me",{method:"GET",headers:{authorization:"Bearer "+He}})}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="user data got",f.json()}).catch(function(f){document.getElementById("js-discord-status").innerText=f}).then(function(f){f!=null&&(document.getElementById("js-discord-card").style.display="block",document.getElementById("js-discord-card--image").src=`https://cdn.discordapp.com/avatars/${f.id}/${f.avatar}`,document.getElementById("js-discord-card--username").innerText=`${f.username}#${f.discriminator}`)})}else document.getElementById("js-discord-status").innerText="Not logged in"}),pe.$$set=k=>{h(0,_=Za(Za({},_),ul(k)))},_=ul(_),[_]}class Zl extends Sl{constructor(_){super(),Pl(this,_,Fl,Gl,jl,{})}}export{Zl as default,fl as metadata};