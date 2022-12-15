import{S as an,i as on,s as nn,C as Sa,w as ln,x as cn,y as rn,z as pn,A as No,q as un,o as dn,B as fn,v as _n,_ as $o,e as a,t as l,k as u,c as o,a as n,h as c,d as t,m as d,H as qo,b as i,f as kn,g as p,I as s,E as En}from"../../chunks/index-8418cccc.js";import{P as vn}from"../../chunks/_post-d4178251.js";import"../../chunks/BlinkAnchor-aec4dee8.js";function hn(re){let _,h,E,m,k,v,P,Pe,f,Se,Ae,pe,Zt,_t,D,ie,Jt,O,ue,Aa,je,Yt,gt,Re,es,ts,S,ss,He,as,os,Ue,xe,ns,ls,b,cs,Be,rs,ps,Ne,is,us,kt,de,ds,Et,I,$e,fs,_s,fe,ks,B,qe,Es,vs,Ve,Me,hs,ms,_e,Ds,N,ze,Is,ys,Ge,Cs,Ls,ke,ws,Ke,y,Os,Fe,bs,Ts,Qe,Ps,Ss,Xe,As,js,vt,$,Rs,ht,A,Hs,We,Us,xs,mt,q,Bs,Dt,w,Ns,Ze,$s,qs,Je,Vs,Ms,It,Ee,zs,yt,V,Ko=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=authorization_code
     &amp;code=[CODE]
     &amp;redirect_uri=[REDIRECT URL]\uFF08\u8981\u8207\u8A8D\u8B49 URL \u76F8\u540C\uFF09"</span>
     https://discordapp.com/api/oauth2/token</code>`,Ct,M,Gs,Ye,Ks,Lt,z,Fo=`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
  <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,wt,j,R,ge,Fs,Qs,et,Xs,Ws,Zs,G,tt,Js,Ys,st,K,gs,at,ea,ta,Ot,F,sa,bt,ve,aa,Tt,Q,Qo=`<code class="language-bash"><span class="token function">curl</span> -H <span class="token string">"Authorization: Bearer [ACCESS TOKEN]"</span>
     https://discordapp.com/api/users/@me</code>`,Pt,he,oa,St,X,Xo=`<code class="language-json"><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,At,me,T,na,ot,la,ca,nt,ra,pa,jt,W,ia,Rt,De,ua,Ht,Z,Wo=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=refresh_token
     &amp;refresh_token=[REFRESH TOKEN]"</span>
     https://discordapp.com/api/oauth2/token</code>`,Ut,Ie,da,xt,J,Zo=`<code class="language-json"><span class="token punctuation">&#123;</span>
   <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
   <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,Bt,Y,fa,Nt,ye,_a,$t,g,ka,qt,Ce,Vt,C,Le,Ea,we,Mt,ee,L,lt,te,va,ct,se,ha,rt,ae,ma,pt,oe,Da,it,ne,Ia,ut,le,ya;return{c(){_=a("ul"),h=a("li"),E=a("a"),m=a("img"),v=a("span"),P=l("\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),Pe=u(),f=a("h2"),Se=l("1. \u65BC Discord Developer Portal \u767B\u9304 Application"),Ae=u(),pe=a("h3"),Zt=l("a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),_t=u(),D=a("ol"),ie=a("li"),Jt=l("\u767B\u5165 "),O=a("a"),ue=a("img"),je=a("span"),Yt=l("Discord Developer Portal"),gt=u(),Re=a("li"),es=l("\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u300CNew Application\u300D"),ts=u(),S=a("li"),ss=l("\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),He=a("code"),as=l("OAuth Vertify"),os=l("\uFF0C\u4E4B\u5F8C\u9EDE\u64CA\u300CCreate\u300D"),Ue=a("ul"),xe=a("li"),ns=l("\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),ls=u(),b=a("li"),cs=l("\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Be=a("code"),rs=l("Client ID"),ps=l(" \u548C "),Ne=a("code"),is=l("Client Secert"),us=l(" \u5F8C\u9762\u4E5F\u6703\u7528\u5230"),kt=u(),de=a("h3"),ds=l("b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),Et=u(),I=a("ol"),$e=a("li"),fs=l("\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),_s=u(),fe=a("li"),ks=l("\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u7528\u5230\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),B=a("ul"),qe=a("li"),Es=l("\u4F8B\u5982\u672C\u6587\u6700\u4E0B\u65B9\u6709\u9644\u4E0A\u5BE6\u4F5C\u7BC4\u4F8B\uFF0C\u8F38\u5165\u7DB2\u5740\u5C31\u662F\u672C\u6587\u9023\u7D50\uFF1A"),vs=u(),Ve=a("li"),Me=a("code"),hs=l("https://f6bfb5.github.io/login-with-discord"),ms=u(),_e=a("li"),Ds=l("\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),N=a("ul"),ze=a("li"),Is=l("\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),ys=u(),Ge=a("li"),Cs=l("\u300Cemail\u300D"),Ls=u(),ke=a("li"),ws=l("\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Ke=a("ul"),y=a("li"),Os=l("\u4F8B\uFF1A"),Fe=a("code"),bs=l("https://discord.com/api/oauth2/authorize?client_id="),Ts=l("[CLIENT ID]"),Qe=a("code"),Ps=l("&redirect_uri="),Ss=l("[REDIRECT URL]"),Xe=a("code"),As=l("&response_type=code&scope="),js=l("[SCOPE]"),vt=u(),$=a("h2"),Rs=l("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),ht=u(),A=a("p"),Hs=l("\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),We=a("code"),Us=l("code"),xs=l(" \u53C3\u6578"),mt=u(),q=a("h2"),Bs=l("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),Dt=u(),w=a("p"),Ns=l("\u4F7F\u7528\u9019\u500B "),Ze=a("code"),$s=l("code"),qs=l(" \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),Je=a("code"),Vs=l("access_token"),Ms=l("\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),It=u(),Ee=a("h3"),zs=l("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),yt=u(),V=a("pre"),Ct=u(),M=a("h3"),Gs=l("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),Ye=a("code"),Ks=l("access token"),Lt=u(),z=a("pre"),wt=u(),j=a("ul"),R=a("li"),ge=a("code"),Fs=l("code"),Qs=l(" \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),et=a("code"),Xs=l("code"),Ws=l(" \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),Zs=u(),G=a("li"),tt=a("code"),Js=l("access token"),Ys=l(" \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),st=a("ul"),K=a("li"),gs=l("\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),at=a("code"),ea=l("refresh token"),ta=l(" \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),Ot=u(),F=a("h2"),sa=l("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),bt=u(),ve=a("h3"),aa=l("a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),Tt=u(),Q=a("pre"),Pt=u(),he=a("h3"),oa=l("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),St=u(),X=a("pre"),At=u(),me=a("ul"),T=a("li"),na=l("\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),ot=a("code"),la=l("https://cdn.discordapp.com/avatars/"),ca=l("[Discord ID]"),nt=a("code"),ra=l("/"),pa=l("[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),jt=u(),W=a("h2"),ia=l("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),Rt=u(),De=a("h3"),ua=l("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Ht=u(),Z=a("pre"),Ut=u(),Ie=a("h3"),da=l("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),xt=u(),J=a("pre"),Bt=u(),Y=a("h2"),fa=l("\u7BC4\u4F8B"),Nt=u(),ye=a("p"),_a=l("\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),$t=u(),g=a("button"),ka=l("Login with Discord"),qt=u(),Ce=a("span"),Vt=u(),C=a("div"),Le=a("img"),Ea=u(),we=a("div"),Mt=u(),ee=a("div"),L=a("ul"),lt=a("li"),te=a("a"),va=l("1. \u65BC Discord Developer Portal \u767B\u9304 Application"),ct=a("li"),se=a("a"),ha=l("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),rt=a("li"),ae=a("a"),ma=l("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),pt=a("li"),oe=a("a"),Da=l("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),it=a("li"),ne=a("a"),Ia=l("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),ut=a("li"),le=a("a"),ya=l("\u7BC4\u4F8B"),this.h()},l(e){_=o(e,"UL",{});var r=n(_);h=o(r,"LI",{});var ja=n(h);E=o(ja,"A",{href:!0,rel:!0,target:!0});var Ca=n(E);m=o(Ca,"IMG",{src:!0,alt:!0}),v=o(Ca,"SPAN",{});var Ra=n(v);P=c(Ra,"\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),Ra.forEach(t),Ca.forEach(t),ja.forEach(t),r.forEach(t),Pe=d(e),f=o(e,"H2",{id:!0});var Ha=n(f);Se=c(Ha,"1. \u65BC Discord Developer Portal \u767B\u9304 Application"),Ha.forEach(t),Ae=d(e),pe=o(e,"H3",{});var Ua=n(pe);Zt=c(Ua,"a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),Ua.forEach(t),_t=d(e),D=o(e,"OL",{});var H=n(D);ie=o(H,"LI",{});var La=n(ie);Jt=c(La,"\u767B\u5165 "),O=o(La,"A",{href:!0,rel:!0,target:!0});var wa=n(O);ue=o(wa,"IMG",{src:!0,alt:!0}),je=o(wa,"SPAN",{});var xa=n(je);Yt=c(xa,"Discord Developer Portal"),xa.forEach(t),wa.forEach(t),La.forEach(t),gt=d(H),Re=o(H,"LI",{});var Ba=n(Re);es=c(Ba,"\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u300CNew Application\u300D"),Ba.forEach(t),ts=d(H),S=o(H,"LI",{});var dt=n(S);ss=c(dt,"\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),He=o(dt,"CODE",{});var Na=n(He);as=c(Na,"OAuth Vertify"),Na.forEach(t),os=c(dt,"\uFF0C\u4E4B\u5F8C\u9EDE\u64CA\u300CCreate\u300D"),Ue=o(dt,"UL",{});var $a=n(Ue);xe=o($a,"LI",{});var qa=n(xe);ns=c(qa,"\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A"),qa.forEach(t),$a.forEach(t),dt.forEach(t),ls=d(H),b=o(H,"LI",{});var Oe=n(b);cs=c(Oe,"\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Be=o(Oe,"CODE",{});var Va=n(Be);rs=c(Va,"Client ID"),Va.forEach(t),ps=c(Oe," \u548C "),Ne=o(Oe,"CODE",{});var Ma=n(Ne);is=c(Ma,"Client Secert"),Ma.forEach(t),us=c(Oe," \u5F8C\u9762\u4E5F\u6703\u7528\u5230"),Oe.forEach(t),H.forEach(t),kt=d(e),de=o(e,"H3",{});var za=n(de);ds=c(za,"b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),za.forEach(t),Et=d(e),I=o(e,"OL",{});var U=n(I);$e=o(U,"LI",{});var Ga=n($e);fs=c(Ga,"\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),Ga.forEach(t),_s=d(U),fe=o(U,"LI",{});var Oa=n(fe);ks=c(Oa,"\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u7528\u5230\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),B=o(Oa,"UL",{});var zt=n(B);qe=o(zt,"LI",{});var Ka=n(qe);Es=c(Ka,"\u4F8B\u5982\u672C\u6587\u6700\u4E0B\u65B9\u6709\u9644\u4E0A\u5BE6\u4F5C\u7BC4\u4F8B\uFF0C\u8F38\u5165\u7DB2\u5740\u5C31\u662F\u672C\u6587\u9023\u7D50\uFF1A"),Ka.forEach(t),vs=d(zt),Ve=o(zt,"LI",{});var Fa=n(Ve);Me=o(Fa,"CODE",{});var Qa=n(Me);hs=c(Qa,"https://f6bfb5.github.io/login-with-discord"),Qa.forEach(t),Fa.forEach(t),zt.forEach(t),Oa.forEach(t),ms=d(U),_e=o(U,"LI",{});var ba=n(_e);Ds=c(ba,"\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09\u88E1\u7684"),N=o(ba,"UL",{});var Gt=n(N);ze=o(Gt,"LI",{});var Xa=n(ze);Is=c(Xa,"\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09"),Xa.forEach(t),ys=d(Gt),Ge=o(Gt,"LI",{});var Wa=n(Ge);Cs=c(Wa,"\u300Cemail\u300D"),Wa.forEach(t),Gt.forEach(t),ba.forEach(t),Ls=d(U),ke=o(U,"LI",{});var Ta=n(ke);ws=c(Ta,"\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),Ke=o(Ta,"UL",{});var Za=n(Ke);y=o(Za,"LI",{});var x=n(y);Os=c(x,"\u4F8B\uFF1A"),Fe=o(x,"CODE",{});var Ja=n(Fe);bs=c(Ja,"https://discord.com/api/oauth2/authorize?client_id="),Ja.forEach(t),Ts=c(x,"[CLIENT ID]"),Qe=o(x,"CODE",{});var Ya=n(Qe);Ps=c(Ya,"&redirect_uri="),Ya.forEach(t),Ss=c(x,"[REDIRECT URL]"),Xe=o(x,"CODE",{});var ga=n(Xe);As=c(ga,"&response_type=code&scope="),ga.forEach(t),js=c(x,"[SCOPE]"),x.forEach(t),Za.forEach(t),Ta.forEach(t),U.forEach(t),vt=d(e),$=o(e,"H2",{id:!0});var eo=n($);Rs=c(eo,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),eo.forEach(t),ht=d(e),A=o(e,"P",{});var Kt=n(A);Hs=c(Kt,"\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),We=o(Kt,"CODE",{});var to=n(We);Us=c(to,"code"),to.forEach(t),xs=c(Kt," \u53C3\u6578"),Kt.forEach(t),mt=d(e),q=o(e,"H2",{id:!0});var so=n(q);Bs=c(so,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),so.forEach(t),Dt=d(e),w=o(e,"P",{});var be=n(w);Ns=c(be,"\u4F7F\u7528\u9019\u500B "),Ze=o(be,"CODE",{});var ao=n(Ze);$s=c(ao,"code"),ao.forEach(t),qs=c(be," \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),Je=o(be,"CODE",{});var oo=n(Je);Vs=c(oo,"access_token"),oo.forEach(t),Ms=c(be,"\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),be.forEach(t),It=d(e),Ee=o(e,"H3",{});var no=n(Ee);zs=c(no,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),no.forEach(t),yt=d(e),V=o(e,"PRE",{class:!0});var Jo=n(V);Jo.forEach(t),Ct=d(e),M=o(e,"H3",{});var Pa=n(M);Gs=c(Pa,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),Ye=o(Pa,"CODE",{});var lo=n(Ye);Ks=c(lo,"access token"),lo.forEach(t),Pa.forEach(t),Lt=d(e),z=o(e,"PRE",{class:!0});var Yo=n(z);Yo.forEach(t),wt=d(e),j=o(e,"UL",{});var Ft=n(j);R=o(Ft,"LI",{});var ft=n(R);ge=o(ft,"CODE",{});var co=n(ge);Fs=c(co,"code"),co.forEach(t),Qs=c(ft," \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),et=o(ft,"CODE",{});var ro=n(et);Xs=c(ro,"code"),ro.forEach(t),Ws=c(ft," \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),ft.forEach(t),Zs=d(Ft),G=o(Ft,"LI",{});var Qt=n(G);tt=o(Qt,"CODE",{});var po=n(tt);Js=c(po,"access token"),po.forEach(t),Ys=c(Qt," \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),st=o(Qt,"UL",{});var io=n(st);K=o(io,"LI",{});var Xt=n(K);gs=c(Xt,"\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 "),at=o(Xt,"CODE",{});var uo=n(at);ea=c(uo,"refresh token"),uo.forEach(t),ta=c(Xt," \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),Xt.forEach(t),io.forEach(t),Qt.forEach(t),Ft.forEach(t),Ot=d(e),F=o(e,"H2",{id:!0});var fo=n(F);sa=c(fo,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),fo.forEach(t),bt=d(e),ve=o(e,"H3",{});var _o=n(ve);aa=c(_o,"a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),_o.forEach(t),Tt=d(e),Q=o(e,"PRE",{class:!0});var go=n(Q);go.forEach(t),Pt=d(e),he=o(e,"H3",{});var ko=n(he);oa=c(ko,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),ko.forEach(t),St=d(e),X=o(e,"PRE",{class:!0});var en=n(X);en.forEach(t),At=d(e),me=o(e,"UL",{});var Eo=n(me);T=o(Eo,"LI",{});var Te=n(T);na=c(Te,"\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),ot=o(Te,"CODE",{});var vo=n(ot);la=c(vo,"https://cdn.discordapp.com/avatars/"),vo.forEach(t),ca=c(Te,"[Discord ID]"),nt=o(Te,"CODE",{});var ho=n(nt);ra=c(ho,"/"),ho.forEach(t),pa=c(Te,"[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),Te.forEach(t),Eo.forEach(t),jt=d(e),W=o(e,"H2",{id:!0});var mo=n(W);ia=c(mo,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),mo.forEach(t),Rt=d(e),De=o(e,"H3",{});var Do=n(De);ua=c(Do,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Do.forEach(t),Ht=d(e),Z=o(e,"PRE",{class:!0});var tn=n(Z);tn.forEach(t),Ut=d(e),Ie=o(e,"H3",{});var Io=n(Ie);da=c(Io,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Io.forEach(t),xt=d(e),J=o(e,"PRE",{class:!0});var sn=n(J);sn.forEach(t),Bt=d(e),Y=o(e,"H2",{id:!0});var yo=n(Y);fa=c(yo,"\u7BC4\u4F8B"),yo.forEach(t),Nt=d(e),ye=o(e,"P",{});var Co=n(ye);_a=c(Co,"\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),Co.forEach(t),$t=d(e),g=o(e,"BUTTON",{id:!0});var Lo=n(g);ka=c(Lo,"Login with Discord"),Lo.forEach(t),qt=d(e),Ce=o(e,"SPAN",{id:!0}),n(Ce).forEach(t),Vt=d(e),C=o(e,"DIV",{class:!0,id:!0,style:!0});var Wt=n(C);Le=o(Wt,"IMG",{alt:!0,class:!0,id:!0}),Ea=d(Wt),we=o(Wt,"DIV",{class:!0,id:!0}),n(we).forEach(t),Wt.forEach(t),Mt=d(e),ee=o(e,"DIV",{class:!0});var wo=n(ee);L=o(wo,"UL",{class:!0});var ce=n(L);lt=o(ce,"LI",{});var Oo=n(lt);te=o(Oo,"A",{href:!0,onclick:!0});var bo=n(te);va=c(bo,"1. \u65BC Discord Developer Portal \u767B\u9304 Application"),bo.forEach(t),Oo.forEach(t),ct=o(ce,"LI",{});var To=n(ct);se=o(To,"A",{href:!0,onclick:!0});var Po=n(se);ha=c(Po,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Po.forEach(t),To.forEach(t),rt=o(ce,"LI",{});var So=n(rt);ae=o(So,"A",{href:!0,onclick:!0});var Ao=n(ae);ma=c(Ao,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),Ao.forEach(t),So.forEach(t),pt=o(ce,"LI",{});var jo=n(pt);oe=o(jo,"A",{href:!0,onclick:!0});var Ro=n(oe);Da=c(Ro,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Ro.forEach(t),jo.forEach(t),it=o(ce,"LI",{});var Ho=n(it);ne=o(Ho,"A",{href:!0,onclick:!0});var Uo=n(ne);Ia=c(Uo,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),Uo.forEach(t),Ho.forEach(t),ut=o(ce,"LI",{});var xo=n(ut);le=o(xo,"A",{href:!0,onclick:!0});var Bo=n(le);ya=c(Bo,"\u7BC4\u4F8B"),Bo.forEach(t),xo.forEach(t),ce.forEach(t),wo.forEach(t),this.h()},h(){qo(m.src,k="https://s2.googleusercontent.com/s2/favicons?domain=https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98")||i(m,"src",k),i(m,"alt","\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),i(E,"href","https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98"),i(E,"rel","noopener"),i(E,"target","_blank"),i(f,"id","js-id-1-\u65BC-discord-developer-portal-\u767B\u9304-application"),qo(ue.src,Aa="https://s2.googleusercontent.com/s2/favicons?domain=https://discord.com/developers/applications")||i(ue,"src",Aa),i(ue,"alt","Discord Developer Portal"),i(O,"href","https://discord.com/developers/applications"),i(O,"rel","noopener"),i(O,"target","_blank"),i($,"id","js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code"),i(q,"id","js-id-3-\u4F7F\u7528code\u53D6\u5F97token"),i(V,"class","language-bash"),i(z,"class","language-json"),i(F,"id","js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),i(Q,"class","language-bash"),i(X,"class","language-json"),i(W,"id","js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token"),i(Z,"class","language-bash"),i(J,"class","language-json"),i(Y,"id","js-id-\u7BC4\u4F8B"),i(g,"id","js-discord-button"),i(Ce,"id","js-discord-status"),i(Le,"alt","profile"),i(Le,"class","discord-card--image svelte-9ys6tj"),i(Le,"id","js-discord-card--image"),i(we,"class","discord-card--username"),i(we,"id","js-discord-card--username"),i(C,"class","discord-card"),i(C,"id","js-discord-card"),kn(C,"display","none"),i(te,"href","#"),i(te,"onclick","document.querySelector('#js-id-1-\u65BC-discord-developer-portal-\u767B\u9304-application').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(se,"href","#"),i(se,"onclick","document.querySelector('#js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ae,"href","#"),i(ae,"onclick","document.querySelector('#js-id-3-\u4F7F\u7528code\u53D6\u5F97token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(oe,"href","#"),i(oe,"onclick","document.querySelector('#js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ne,"href","#"),i(ne,"onclick","document.querySelector('#js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(le,"href","#"),i(le,"onclick","document.querySelector('#js-id-\u7BC4\u4F8B').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(L,"class","toc"),i(ee,"class","toc-container")},m(e,r){p(e,_,r),s(_,h),s(h,E),s(E,m),s(E,v),s(v,P),p(e,Pe,r),p(e,f,r),s(f,Se),p(e,Ae,r),p(e,pe,r),s(pe,Zt),p(e,_t,r),p(e,D,r),s(D,ie),s(ie,Jt),s(ie,O),s(O,ue),s(O,je),s(je,Yt),s(D,gt),s(D,Re),s(Re,es),s(D,ts),s(D,S),s(S,ss),s(S,He),s(He,as),s(S,os),s(S,Ue),s(Ue,xe),s(xe,ns),s(D,ls),s(D,b),s(b,cs),s(b,Be),s(Be,rs),s(b,ps),s(b,Ne),s(Ne,is),s(b,us),p(e,kt,r),p(e,de,r),s(de,ds),p(e,Et,r),p(e,I,r),s(I,$e),s($e,fs),s(I,_s),s(I,fe),s(fe,ks),s(fe,B),s(B,qe),s(qe,Es),s(B,vs),s(B,Ve),s(Ve,Me),s(Me,hs),s(I,ms),s(I,_e),s(_e,Ds),s(_e,N),s(N,ze),s(ze,Is),s(N,ys),s(N,Ge),s(Ge,Cs),s(I,Ls),s(I,ke),s(ke,ws),s(ke,Ke),s(Ke,y),s(y,Os),s(y,Fe),s(Fe,bs),s(y,Ts),s(y,Qe),s(Qe,Ps),s(y,Ss),s(y,Xe),s(Xe,As),s(y,js),p(e,vt,r),p(e,$,r),s($,Rs),p(e,ht,r),p(e,A,r),s(A,Hs),s(A,We),s(We,Us),s(A,xs),p(e,mt,r),p(e,q,r),s(q,Bs),p(e,Dt,r),p(e,w,r),s(w,Ns),s(w,Ze),s(Ze,$s),s(w,qs),s(w,Je),s(Je,Vs),s(w,Ms),p(e,It,r),p(e,Ee,r),s(Ee,zs),p(e,yt,r),p(e,V,r),V.innerHTML=Ko,p(e,Ct,r),p(e,M,r),s(M,Gs),s(M,Ye),s(Ye,Ks),p(e,Lt,r),p(e,z,r),z.innerHTML=Fo,p(e,wt,r),p(e,j,r),s(j,R),s(R,ge),s(ge,Fs),s(R,Qs),s(R,et),s(et,Xs),s(R,Ws),s(j,Zs),s(j,G),s(G,tt),s(tt,Js),s(G,Ys),s(G,st),s(st,K),s(K,gs),s(K,at),s(at,ea),s(K,ta),p(e,Ot,r),p(e,F,r),s(F,sa),p(e,bt,r),p(e,ve,r),s(ve,aa),p(e,Tt,r),p(e,Q,r),Q.innerHTML=Qo,p(e,Pt,r),p(e,he,r),s(he,oa),p(e,St,r),p(e,X,r),X.innerHTML=Xo,p(e,At,r),p(e,me,r),s(me,T),s(T,na),s(T,ot),s(ot,la),s(T,ca),s(T,nt),s(nt,ra),s(T,pa),p(e,jt,r),p(e,W,r),s(W,ia),p(e,Rt,r),p(e,De,r),s(De,ua),p(e,Ht,r),p(e,Z,r),Z.innerHTML=Wo,p(e,Ut,r),p(e,Ie,r),s(Ie,da),p(e,xt,r),p(e,J,r),J.innerHTML=Zo,p(e,Bt,r),p(e,Y,r),s(Y,fa),p(e,Nt,r),p(e,ye,r),s(ye,_a),p(e,$t,r),p(e,g,r),s(g,ka),p(e,qt,r),p(e,Ce,r),p(e,Vt,r),p(e,C,r),s(C,Le),s(C,Ea),s(C,we),p(e,Mt,r),p(e,ee,r),s(ee,L),s(L,lt),s(lt,te),s(te,va),s(L,ct),s(ct,se),s(se,ha),s(L,rt),s(rt,ae),s(ae,ma),s(L,pt),s(pt,oe),s(oe,Da),s(L,it),s(it,ne),s(ne,Ia),s(L,ut),s(ut,le),s(le,ya)},p:En,d(e){e&&t(_),e&&t(Pe),e&&t(f),e&&t(Ae),e&&t(pe),e&&t(_t),e&&t(D),e&&t(kt),e&&t(de),e&&t(Et),e&&t(I),e&&t(vt),e&&t($),e&&t(ht),e&&t(A),e&&t(mt),e&&t(q),e&&t(Dt),e&&t(w),e&&t(It),e&&t(Ee),e&&t(yt),e&&t(V),e&&t(Ct),e&&t(M),e&&t(Lt),e&&t(z),e&&t(wt),e&&t(j),e&&t(Ot),e&&t(F),e&&t(bt),e&&t(ve),e&&t(Tt),e&&t(Q),e&&t(Pt),e&&t(he),e&&t(St),e&&t(X),e&&t(At),e&&t(me),e&&t(jt),e&&t(W),e&&t(Rt),e&&t(De),e&&t(Ht),e&&t(Z),e&&t(Ut),e&&t(Ie),e&&t(xt),e&&t(J),e&&t(Bt),e&&t(Y),e&&t(Nt),e&&t(ye),e&&t($t),e&&t(g),e&&t(qt),e&&t(Ce),e&&t(Vt),e&&t(C),e&&t(Mt),e&&t(ee)}}}function mn(re){let _,h;const E=[re[0],Vo];let m={$$slots:{default:[hn]},$$scope:{ctx:re}};for(let k=0;k<E.length;k+=1)m=Sa(m,E[k]);return _=new vn({props:m}),{c(){ln(_.$$.fragment)},l(k){cn(_.$$.fragment,k)},m(k,v){rn(_,k,v),h=!0},p(k,[v]){const P=v&1?pn(E,[v&1&&No(k[0]),v&0&&No(Vo)]):{};v&2&&(P.$$scope={dirty:v,ctx:k}),_.$set(P)},i(k){h||(un(_.$$.fragment,k),h=!0)},o(k){dn(_.$$.fragment,k),h=!1},d(k){fn(_,k)}}}const Vo={title:"\u5BE6\u4F5C\u300C\u4F7F\u7528Discord\u767B\u5165\u300D",date:"2021-01-14T00:24:23.000Z",tags:"F2E"},Mo="798950274114781204",zo="https://f6bfb5.github.io/login-with-discord",Go="identify email";function Dn(){document.location.href=`https://discord.com/api/oauth2/authorize?client_id=${Mo}&redirect_uri=${encodeURIComponent(zo)}&response_type=code&scope=${encodeURIComponent(Go)}`}function In(re,_,h){return _n(()=>{document.getElementById("js-discord-button").addEventListener("click",Dn);const E=new URLSearchParams(window.location.search);if(E.has("code")){const m="3c-TeN5NxElL4la8E6h5BlT4zDHigser",k="https://discordapp.com/api/oauth2/token",v={client_id:Mo,client_secret:m,grant_type:"authorization_code",code:E.get("code"),redirect_uri:zo,scope:Go},P=Object.keys(v).map(f=>encodeURIComponent(f)+"="+encodeURIComponent(v[f])).join("&");fetch(k,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:P}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="token got",f.json()}).then(function(f){let Se=f.access_token;return fetch("https://discordapp.com/api/users/@me",{method:"GET",headers:{authorization:"Bearer "+Se}})}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="user data got",f.json()}).catch(function(f){document.getElementById("js-discord-status").innerText=f}).then(function(f){f!=null&&(document.getElementById("js-discord-card").style.display="block",document.getElementById("js-discord-card--image").src=`https://cdn.discordapp.com/avatars/${f.id}/${f.avatar}`,document.getElementById("js-discord-card--username").innerText=`${f.username}#${f.discriminator}`)})}else document.getElementById("js-discord-status").innerText="Not logged in"}),re.$$set=E=>{h(0,_=Sa(Sa({},_),$o(E)))},_=$o(_),[_]}class wn extends an{constructor(_){super(),on(this,_,In,mn,nn,{})}}export{wn as default,Vo as metadata};