import{S as Ro,i as Ho,s as Bo,C as fa,w as xo,x as No,y as Uo,z as $o,A as ko,q as qo,o as Mo,B as Vo,v as zo,R as Eo,e as a,t as l,k as d,c as o,a as n,h as c,d as t,m as u,G as vo,b as i,f as Go,g as p,F as s,E as Ko}from"./index-1cb0a915.js";import{P as Fo}from"./_post-8b5fe991.js";function Qo(re){let _,h,E,D,k,v,A,we,f,Te,Le,pe,xt,at,I,ie,Nt,P,de,ka,Pe,Ut,$t,Se,qt,Mt,U,Vt,je,zt,Gt,Kt,S,Ft,Ae,Qt,Xt,Re,Wt,Zt,ot,ue,Jt,nt,y,He,Yt,gt,O,es,ts,ss,as,os,Be,ns,ls,xe,cs,rs,m,ps,is,ds,Ne,us,fs,Ue,_s,ks,$e,Es,vs,lt,$,ms,ct,R,hs,qe,Ds,Is,rt,q,ys,pt,w,bs,Me,Cs,Os,Ve,ws,Ts,it,fe,Ls,dt,M,Io=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=authorization_code
     &amp;code=[CODE]
     &amp;redirect_uri=[REDIRECT URL]\uFF08\u8981\u8207\u8A8D\u8B49 URL \u76F8\u540C\uFF09"</span>
     https://discordapp.com/api/oauth2/token</code>`,ut,V,Ps,ze,Ss,ft,z,yo=`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
  <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,_t,H,B,Ge,js,As,Ke,Rs,Hs,Bs,T,Fe,xs,Ns,Us,$s,Qe,qs,Ms,kt,G,Vs,Et,_e,zs,vt,K,bo=`<code class="language-bash"><span class="token function">curl</span> -H <span class="token string">"Authorization: Bearer [ACCESS TOKEN]"</span>
     https://discordapp.com/api/users/@me</code>`,mt,ke,Gs,ht,F,Co=`<code class="language-json"><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,Dt,Ee,j,Ks,Xe,Fs,Qs,We,Xs,Ws,It,Q,Zs,yt,ve,Js,bt,X,Oo=`<code class="language-bash"><span class="token function">curl</span> -X POST
     -H <span class="token string">"Content-Type:application/x-www-form-urlencoded"</span>
     -d <span class="token string">"client_id=[CLIENT ID]
     &amp;client_secret=[CLIENT SECRET]
     &amp;grant_type=refresh_token
     &amp;refresh_token=[REFRESH TOKEN]"</span>
     https://discordapp.com/api/oauth2/token</code>`,Ct,me,Ys,Ot,W,wo=`<code class="language-json"><span class="token punctuation">&#123;</span>
   <span class="token property">"access_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>ACCESS TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"expires_in"</span><span class="token operator">:</span> <span class="token number">604800</span><span class="token punctuation">,</span>
   <span class="token property">"refresh_token"</span><span class="token operator">:</span> <span class="token punctuation">[</span>REFRESH TOKEN<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span>SCOPE<span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">"token_type"</span><span class="token operator">:</span> <span class="token string">"Bearer"</span>
<span class="token punctuation">&#125;</span></code>`,wt,Z,gs,Tt,he,ea,Lt,J,ta,Pt,De,St,b,Ie,sa,ye,jt,Y,C,Ze,g,aa,Je,ee,oa,Ye,te,na,ge,se,la,et,ae,ca,tt,oe,ra;return{c(){_=a("ul"),h=a("li"),E=a("a"),D=a("img"),v=a("span"),A=l("\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),we=d(),f=a("h2"),Te=l("1. \u65BC Discord Developer Portal \u767B\u9304 Application"),Le=d(),pe=a("h3"),xt=l("a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),at=d(),I=a("ol"),ie=a("li"),Nt=l("\u767B\u5165 "),P=a("a"),de=a("img"),Pe=a("span"),Ut=l("Discord Developer Portal"),$t=d(),Se=a("li"),qt=l("\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u300CNew Application\u300D"),Mt=d(),U=a("li"),Vt=l("\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),je=a("code"),zt=l("OAuth Vertify"),Gt=l("\uFF0C\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A\uFF0C\u4E4B\u5F8C\u9EDE\u64CA\u300CCreate\u300D"),Kt=d(),S=a("li"),Ft=l("\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Ae=a("code"),Qt=l("Client ID"),Xt=l(" \u548C "),Re=a("code"),Wt=l("Client Secert"),Zt=l(" \u5F8C\u9762\u4E5F\u6703\u7528\u5230"),ot=d(),ue=a("h3"),Jt=l("b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),nt=d(),y=a("ol"),He=a("li"),Yt=l("\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),gt=d(),O=a("li"),es=l("\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u8981\u7528\u5230\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),ts=a("br"),ss=l(`
\u4F8B\u5982\u672C\u6587\u6700\u4E0B\u65B9\u6709\u9644\u4E0A\u5BE6\u4F5C\u7BC4\u4F8B`),as=a("br"),os=l(`
\u8F38\u5165\u7684\u7DB2\u5740\u5C31\u662F\u672C\u6587\u9023\u7D50 `),Be=a("code"),ns=l("https://f6bfb5.github.io/login-with-discord/"),ls=d(),xe=a("li"),cs=l(`\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09
\u88E1\u7684\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09\u548C\u300Cemail\u300D`),rs=d(),m=a("li"),ps=l("\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),is=a("br"),ds=l(`
\u4F8B\uFF1A`),Ne=a("code"),us=l("https://discord.com/api/oauth2/authorize?client_id="),fs=l("[CLIENT ID]"),Ue=a("code"),_s=l("&redirect_uri="),ks=l("[REDIRECT URL]"),$e=a("code"),Es=l("&response_type=code&scope="),vs=l("[SCOPE]"),lt=d(),$=a("h2"),ms=l("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),ct=d(),R=a("p"),hs=l("\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u4E26\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),qe=a("code"),Ds=l("code"),Is=l(" \u53C3\u6578"),rt=d(),q=a("h2"),ys=l("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),pt=d(),w=a("p"),bs=l("\u518D\u4F7F\u7528\u9019\u500B "),Me=a("code"),Cs=l("code"),Os=l(" \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),Ve=a("code"),ws=l("access_token"),Ts=l("\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),it=d(),fe=a("h3"),Ls=l("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),dt=d(),M=a("pre"),ut=d(),V=a("h3"),Ps=l("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),ze=a("code"),Ss=l("access token"),ft=d(),z=a("pre"),_t=d(),H=a("ul"),B=a("li"),Ge=a("code"),js=l("code"),As=l(" \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),Ke=a("code"),Rs=l("code"),Hs=l(" \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),Bs=d(),T=a("li"),Fe=a("code"),xs=l("access token"),Ns=l(" \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),Us=a("br"),$s=l(`
\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 `),Qe=a("code"),qs=l("refresh token"),Ms=l(" \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),kt=d(),G=a("h2"),Vs=l("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),Et=d(),_e=a("h3"),zs=l("a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),vt=d(),K=a("pre"),mt=d(),ke=a("h3"),Gs=l("b. \u82E5\u9806\u5229\u6210\u529F\uFF0C\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),ht=d(),F=a("pre"),Dt=d(),Ee=a("ul"),j=a("li"),Ks=l("\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),Xe=a("code"),Fs=l("https://cdn.discordapp.com/avatars/"),Qs=l("[Discord ID]"),We=a("code"),Xs=l("/"),Ws=l("[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),It=d(),Q=a("h2"),Zs=l("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),yt=d(),ve=a("h3"),Js=l("a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),bt=d(),X=a("pre"),Ct=d(),me=a("h3"),Ys=l("b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Ot=d(),W=a("pre"),wt=d(),Z=a("h2"),gs=l("\u7BC4\u4F8B"),Tt=d(),he=a("p"),ea=l("\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),Lt=d(),J=a("button"),ta=l("Login with Discord"),Pt=d(),De=a("span"),St=d(),b=a("div"),Ie=a("img"),sa=d(),ye=a("div"),jt=d(),Y=a("div"),C=a("ul"),Ze=a("li"),g=a("a"),aa=l("1. \u65BC Discord Developer Portal \u767B\u9304 Application"),Je=a("li"),ee=a("a"),oa=l("2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Ye=a("li"),te=a("a"),na=l("3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),ge=a("li"),se=a("a"),la=l("4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),et=a("li"),ae=a("a"),ca=l("5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),tt=a("li"),oe=a("a"),ra=l("\u7BC4\u4F8B"),this.h()},l(e){_=o(e,"UL",{});var r=n(_);h=o(r,"LI",{});var Ea=n(h);E=o(Ea,"A",{href:!0,rel:!0,target:!0});var pa=n(E);D=o(pa,"IMG",{src:!0,alt:!0}),v=o(pa,"SPAN",{});var va=n(v);A=c(va,"\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),va.forEach(t),pa.forEach(t),Ea.forEach(t),r.forEach(t),we=u(e),f=o(e,"H2",{id:!0});var ma=n(f);Te=c(ma,"1. \u65BC Discord Developer Portal \u767B\u9304 Application"),ma.forEach(t),Le=u(e),pe=o(e,"H3",{});var ha=n(pe);xt=c(ha,"a. \u53D6\u5F97 \u300CClient ID\u300D\u548C\u300CClient Secert\u300D"),ha.forEach(t),at=u(e),I=o(e,"OL",{});var x=n(I);ie=o(x,"LI",{});var ia=n(ie);Nt=c(ia,"\u767B\u5165 "),P=o(ia,"A",{href:!0,rel:!0,target:!0});var da=n(P);de=o(da,"IMG",{src:!0,alt:!0}),Pe=o(da,"SPAN",{});var Da=n(Pe);Ut=c(Da,"Discord Developer Portal"),Da.forEach(t),da.forEach(t),ia.forEach(t),$t=u(x),Se=o(x,"LI",{});var Ia=n(Se);qt=c(Ia,"\u9EDE\u64CA\u53F3\u4E0A\u89D2\u7684\u300CNew Application\u300D"),Ia.forEach(t),Mt=u(x),U=o(x,"LI",{});var At=n(U);Vt=c(At,"\u53D6\u540D\uFF0C\u672C\u6587\u7BC4\u4F8B\u53D6\u70BA "),je=o(At,"CODE",{});var ya=n(je);zt=c(ya,"OAuth Vertify"),ya.forEach(t),Gt=c(At,"\uFF0C\u6B64\u540D\u7A31\u6703\u986F\u793A\u65BC\u6388\u6B0A\u9801\u9762\u4E0A\uFF0C\u4E4B\u5F8C\u9EDE\u64CA\u300CCreate\u300D"),At.forEach(t),Kt=u(x),S=o(x,"LI",{});var be=n(S);Ft=c(be,"\u8CC7\u8A0A\u9801\u53F3\u65B9\u7684 "),Ae=o(be,"CODE",{});var ba=n(Ae);Qt=c(ba,"Client ID"),ba.forEach(t),Xt=c(be," \u548C "),Re=o(be,"CODE",{});var Ca=n(Re);Wt=c(Ca,"Client Secert"),Ca.forEach(t),Zt=c(be," \u5F8C\u9762\u4E5F\u6703\u7528\u5230"),be.forEach(t),x.forEach(t),ot=u(e),ue=o(e,"H3",{});var Oa=n(ue);Jt=c(Oa,"b. \u5EFA\u7ACB OAuth \u7528\u7684\u7DB2\u5740"),Oa.forEach(t),nt=u(e),y=o(e,"OL",{});var N=n(y);He=o(N,"LI",{});var wa=n(He);Yt=c(wa,"\u9EDE\u64CA\u5DE6\u5074\u7684\u300COAuth2\u300D\u5206\u9801"),wa.forEach(t),gt=u(N),O=o(N,"LI",{});var ne=n(O);es=c(ne,"\u9EDE\u64CA\u53F3\u5074\u7684\u300CAdd Redirect\u300D\uFF0C\u8F38\u5165\u8981\u7528\u5230\u9A57\u8B49\u767B\u5165\u7684\u7DB2\u5740"),ts=o(ne,"BR",{}),ss=c(ne,`
\u4F8B\u5982\u672C\u6587\u6700\u4E0B\u65B9\u6709\u9644\u4E0A\u5BE6\u4F5C\u7BC4\u4F8B`),as=o(ne,"BR",{}),os=c(ne,`
\u8F38\u5165\u7684\u7DB2\u5740\u5C31\u662F\u672C\u6587\u9023\u7D50 `),Be=o(ne,"CODE",{});var Ta=n(Be);ns=c(Ta,"https://f6bfb5.github.io/login-with-discord/"),Ta.forEach(t),ne.forEach(t),ls=u(N),xe=o(N,"LI",{});var La=n(xe);cs=c(La,`\u52FE\u9078\u4E0B\u65B9\u300CSCOPE\u300D\uFF08\u7D22\u53D6\u7684\u8CC7\u8A0A\u6B04\u4F4D\uFF09
\u88E1\u7684\u300Cidentify\u300D\uFF08Discord \u7684 ID\uFF09\u548C\u300Cemail\u300D`),La.forEach(t),rs=u(N),m=o(N,"LI",{});var L=n(m);ps=c(L,"\u5C31\u53EF\u65BC\u9801\u9762\u4E0B\u65B9\u53D6\u5F97\u8A8D\u8B49\u7528\u7684\u9023\u7D50"),is=o(L,"BR",{}),ds=c(L,`
\u4F8B\uFF1A`),Ne=o(L,"CODE",{});var Pa=n(Ne);us=c(Pa,"https://discord.com/api/oauth2/authorize?client_id="),Pa.forEach(t),fs=c(L,"[CLIENT ID]"),Ue=o(L,"CODE",{});var Sa=n(Ue);_s=c(Sa,"&redirect_uri="),Sa.forEach(t),ks=c(L,"[REDIRECT URL]"),$e=o(L,"CODE",{});var ja=n($e);Es=c(ja,"&response_type=code&scope="),ja.forEach(t),vs=c(L,"[SCOPE]"),L.forEach(t),N.forEach(t),lt=u(e),$=o(e,"H2",{id:!0});var Aa=n($);ms=c(Aa,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),Aa.forEach(t),ct=u(e),R=o(e,"P",{});var Rt=n(R);hs=c(Rt,"\u4F7F\u7528\u6B64\u8A8D\u8B49\u9023\u7D50\u767B\u5165\uFF0C\u4E26\u91CD\u65B0\u5C0E\u5411\u5230\u7D50\u679C\u9801\u9762\u5F8C\uFF0C\u7DB2\u5740\u4E0A\u6703\u591A\u51FA\u4E00\u500B\u56DE\u50B3\u7684 "),qe=o(Rt,"CODE",{});var Ra=n(qe);Ds=c(Ra,"code"),Ra.forEach(t),Is=c(Rt," \u53C3\u6578"),Rt.forEach(t),rt=u(e),q=o(e,"H2",{id:!0});var Ha=n(q);ys=c(Ha,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),Ha.forEach(t),pt=u(e),w=o(e,"P",{});var Ce=n(w);bs=c(Ce,"\u518D\u4F7F\u7528\u9019\u500B "),Me=o(Ce,"CODE",{});var Ba=n(Me);Cs=c(Ba,"code"),Ba.forEach(t),Os=c(Ce," \u9001\u51FA\u8ACB\u6C42\uFF0C\u53D6\u5F97 "),Ve=o(Ce,"CODE",{});var xa=n(Ve);ws=c(xa,"access_token"),xa.forEach(t),Ts=c(Ce,"\uFF0C\u624D\u80FD\u5F97\u5230\u5B58\u53D6\u8CC7\u6599\u7684\u6B0A\u9650"),Ce.forEach(t),it=u(e),fe=o(e,"H3",{});var Na=n(fe);Ls=c(Na,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Na.forEach(t),dt=u(e),M=o(e,"PRE",{class:!0});var To=n(M);To.forEach(t),ut=u(e),V=o(e,"H3",{});var ua=n(V);Ps=c(ua,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 "),ze=o(ua,"CODE",{});var Ua=n(ze);Ss=c(Ua,"access token"),Ua.forEach(t),ua.forEach(t),ft=u(e),z=o(e,"PRE",{class:!0});var Lo=n(z);Lo.forEach(t),_t=u(e),H=o(e,"UL",{});var Ht=n(H);B=o(Ht,"LI",{});var st=n(B);Ge=o(st,"CODE",{});var $a=n(Ge);js=c($a,"code"),$a.forEach(t),As=c(st," \u70BA\u4E00\u6B21\u6027\u4F7F\u7528\uFF0C\u540C\u4E00\u500B "),Ke=o(st,"CODE",{});var qa=n(Ke);Rs=c(qa,"code"),qa.forEach(t),Hs=c(st," \u7121\u6CD5\u9032\u884C\u7B2C\u4E8C\u6B21\u5B58\u53D6"),st.forEach(t),Bs=u(Ht),T=o(Ht,"LI",{});var le=n(T);Fe=o(le,"CODE",{});var Ma=n(Fe);xs=c(Ma,"access token"),Ma.forEach(t),Ns=c(le," \u7684\u6709\u6548\u671F\u9650\u70BA 604800 \u79D2\uFF1D\u4E00\u500B\u79AE\u62DC"),Us=o(le,"BR",{}),$s=c(le,`
\u82E5\u6709\u66F4\u65B0\u9700\u6C42\uFF0C\u9808\u4F7F\u7528\u56DE\u50B3\u5167\u5BB9\u4E2D\u7684 `),Qe=o(le,"CODE",{});var Va=n(Qe);qs=c(Va,"refresh token"),Va.forEach(t),Ms=c(le," \u91CD\u65B0\u9001\u51FA\u8ACB\u6C42"),le.forEach(t),Ht.forEach(t),kt=u(e),G=o(e,"H2",{id:!0});var za=n(G);Vs=c(za,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),za.forEach(t),Et=u(e),_e=o(e,"H3",{});var Ga=n(_e);zs=c(Ga,"a. \u50B3\u9001 GET \u8ACB\u6C42\u5230 Discord API"),Ga.forEach(t),vt=u(e),K=o(e,"PRE",{class:!0});var Po=n(K);Po.forEach(t),mt=u(e),ke=o(e,"H3",{});var Ka=n(ke);Gs=c(Ka,"b. \u82E5\u9806\u5229\u6210\u529F\uFF0C\u5C31\u53EF\u53D6\u5F97\u76F8\u95DC\u8CC7\u6599"),Ka.forEach(t),ht=u(e),F=o(e,"PRE",{class:!0});var So=n(F);So.forEach(t),Dt=u(e),Ee=o(e,"UL",{});var Fa=n(Ee);j=o(Fa,"LI",{});var Oe=n(j);Ks=c(Oe,"\u982D\u50CF\u7DB2\u5740\u53EF\u4EE5\u4F7F\u7528\u300C"),Xe=o(Oe,"CODE",{});var Qa=n(Xe);Fs=c(Qa,"https://cdn.discordapp.com/avatars/"),Qa.forEach(t),Qs=c(Oe,"[Discord ID]"),We=o(Oe,"CODE",{});var Xa=n(We);Xs=c(Xa,"/"),Xa.forEach(t),Ws=c(Oe,"[\u5927\u982D\u8CBC ID]\u300D\u53D6\u5F97"),Oe.forEach(t),Fa.forEach(t),It=u(e),Q=o(e,"H2",{id:!0});var Wa=n(Q);Zs=c(Wa,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),Wa.forEach(t),yt=u(e),ve=o(e,"H3",{});var Za=n(ve);Js=c(Za,"a. \u50B3\u9001 POST \u8ACB\u6C42\u5230 Discord API"),Za.forEach(t),bt=u(e),X=o(e,"PRE",{class:!0});var jo=n(X);jo.forEach(t),Ct=u(e),me=o(e,"H3",{});var Ja=n(me);Ys=c(Ja,"b. \u82E5\u6210\u529F\u5C31\u53EF\u53D6\u5F97 access token"),Ja.forEach(t),Ot=u(e),W=o(e,"PRE",{class:!0});var Ao=n(W);Ao.forEach(t),wt=u(e),Z=o(e,"H2",{id:!0});var Ya=n(Z);gs=c(Ya,"\u7BC4\u4F8B"),Ya.forEach(t),Tt=u(e),he=o(e,"P",{});var ga=n(he);ea=c(ga,"\u4EE5\u4E0B\u793A\u7BC4\u900F\u904E\u6B64\u65B9\u5F0F\uFF0C\u53D6\u5F97\u4F60\u7684 Discord ID \u8207\u5927\u982D\u8CBC\u5716\u7247\u3002"),ga.forEach(t),Lt=u(e),J=o(e,"BUTTON",{id:!0});var eo=n(J);ta=c(eo,"Login with Discord"),eo.forEach(t),Pt=u(e),De=o(e,"SPAN",{id:!0}),n(De).forEach(t),St=u(e),b=o(e,"DIV",{class:!0,id:!0,style:!0});var Bt=n(b);Ie=o(Bt,"IMG",{alt:!0,class:!0,id:!0}),sa=u(Bt),ye=o(Bt,"DIV",{class:!0,id:!0}),n(ye).forEach(t),Bt.forEach(t),jt=u(e),Y=o(e,"DIV",{class:!0});var to=n(Y);C=o(to,"UL",{class:!0});var ce=n(C);Ze=o(ce,"LI",{});var so=n(Ze);g=o(so,"A",{href:!0,onclick:!0});var ao=n(g);aa=c(ao,"1. \u65BC Discord Developer Portal \u767B\u9304 Application"),ao.forEach(t),so.forEach(t),Je=o(ce,"LI",{});var oo=n(Je);ee=o(oo,"A",{href:!0,onclick:!0});var no=n(ee);oa=c(no,"2. \u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97\u300Ccode\u300D"),no.forEach(t),oo.forEach(t),Ye=o(ce,"LI",{});var lo=n(Ye);te=o(lo,"A",{href:!0,onclick:!0});var co=n(te);na=c(co,"3. \u4F7F\u7528\u300Ccode\u300D\u53D6\u5F97\u300Ctoken\u300D"),co.forEach(t),lo.forEach(t),ge=o(ce,"LI",{});var ro=n(ge);se=o(ro,"A",{href:!0,onclick:!0});var po=n(se);la=c(po,"4. \u4F7F\u7528\u300Ctoken\u300D\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),po.forEach(t),ro.forEach(t),et=o(ce,"LI",{});var io=n(et);ae=o(io,"A",{href:!0,onclick:!0});var uo=n(ae);ca=c(uo,"5. \u4F7F\u7528 refresh token \u91CD\u65B0\u53D6\u5F97 access token"),uo.forEach(t),io.forEach(t),tt=o(ce,"LI",{});var fo=n(tt);oe=o(fo,"A",{href:!0,onclick:!0});var _o=n(oe);ra=c(_o,"\u7BC4\u4F8B"),_o.forEach(t),fo.forEach(t),ce.forEach(t),to.forEach(t),this.h()},h(){vo(D.src,k="https://s2.googleusercontent.com/s2/favicons?domain=https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98")||i(D,"src",k),i(D,"alt","\u300CDiscord \u306E ID \u3067\u30ED\u30B0\u30A4\u30F3\u300D\u3092\u5B9F\u88C5\u3059\u308B(Oauth2) - Qiita"),i(E,"href","https://qiita.com/masayoshi4649/items/46fdb744cb8255f5eb98"),i(E,"rel","noopener"),i(E,"target","_blank"),i(f,"id","js-id-1-\u65BC-discord-developer-portal-\u767B\u9304-application"),vo(de.src,ka="https://s2.googleusercontent.com/s2/favicons?domain=https://discord.com/developers/applications")||i(de,"src",ka),i(de,"alt","Discord Developer Portal"),i(P,"href","https://discord.com/developers/applications"),i(P,"rel","noopener"),i(P,"target","_blank"),i($,"id","js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code"),i(q,"id","js-id-3-\u4F7F\u7528code\u53D6\u5F97token"),i(M,"class","language-bash"),i(z,"class","language-json"),i(G,"id","js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599"),i(K,"class","language-bash"),i(F,"class","language-json"),i(Q,"id","js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token"),i(X,"class","language-bash"),i(W,"class","language-json"),i(Z,"id","js-id-\u7BC4\u4F8B"),i(J,"id","js-discord-button"),i(De,"id","js-discord-status"),i(Ie,"alt","profile"),i(Ie,"class","discord-card--image svelte-9ys6tj"),i(Ie,"id","js-discord-card--image"),i(ye,"class","discord-card--username"),i(ye,"id","js-discord-card--username"),i(b,"class","discord-card"),i(b,"id","js-discord-card"),Go(b,"display","none"),i(g,"href","#"),i(g,"onclick","document.querySelector('#js-id-1-\u65BC-discord-developer-portal-\u767B\u9304-application').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ee,"href","#"),i(ee,"onclick","document.querySelector('#js-id-2-\u5F9E\u8A8D\u8B49\u9023\u7D50\u53D6\u5F97code').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(te,"href","#"),i(te,"onclick","document.querySelector('#js-id-3-\u4F7F\u7528code\u53D6\u5F97token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(se,"href","#"),i(se,"onclick","document.querySelector('#js-id-4-\u4F7F\u7528token\u53D6\u5F97\u4F7F\u7528\u8005\u8CC7\u6599').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(ae,"href","#"),i(ae,"onclick","document.querySelector('#js-id-5-\u4F7F\u7528-refresh-token-\u91CD\u65B0\u53D6\u5F97-access-token').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(oe,"href","#"),i(oe,"onclick","document.querySelector('#js-id-\u7BC4\u4F8B').scrollIntoView(); window.scrollBy(0, -128); event.preventDefault();"),i(C,"class","toc"),i(Y,"class","toc-container")},m(e,r){p(e,_,r),s(_,h),s(h,E),s(E,D),s(E,v),s(v,A),p(e,we,r),p(e,f,r),s(f,Te),p(e,Le,r),p(e,pe,r),s(pe,xt),p(e,at,r),p(e,I,r),s(I,ie),s(ie,Nt),s(ie,P),s(P,de),s(P,Pe),s(Pe,Ut),s(I,$t),s(I,Se),s(Se,qt),s(I,Mt),s(I,U),s(U,Vt),s(U,je),s(je,zt),s(U,Gt),s(I,Kt),s(I,S),s(S,Ft),s(S,Ae),s(Ae,Qt),s(S,Xt),s(S,Re),s(Re,Wt),s(S,Zt),p(e,ot,r),p(e,ue,r),s(ue,Jt),p(e,nt,r),p(e,y,r),s(y,He),s(He,Yt),s(y,gt),s(y,O),s(O,es),s(O,ts),s(O,ss),s(O,as),s(O,os),s(O,Be),s(Be,ns),s(y,ls),s(y,xe),s(xe,cs),s(y,rs),s(y,m),s(m,ps),s(m,is),s(m,ds),s(m,Ne),s(Ne,us),s(m,fs),s(m,Ue),s(Ue,_s),s(m,ks),s(m,$e),s($e,Es),s(m,vs),p(e,lt,r),p(e,$,r),s($,ms),p(e,ct,r),p(e,R,r),s(R,hs),s(R,qe),s(qe,Ds),s(R,Is),p(e,rt,r),p(e,q,r),s(q,ys),p(e,pt,r),p(e,w,r),s(w,bs),s(w,Me),s(Me,Cs),s(w,Os),s(w,Ve),s(Ve,ws),s(w,Ts),p(e,it,r),p(e,fe,r),s(fe,Ls),p(e,dt,r),p(e,M,r),M.innerHTML=Io,p(e,ut,r),p(e,V,r),s(V,Ps),s(V,ze),s(ze,Ss),p(e,ft,r),p(e,z,r),z.innerHTML=yo,p(e,_t,r),p(e,H,r),s(H,B),s(B,Ge),s(Ge,js),s(B,As),s(B,Ke),s(Ke,Rs),s(B,Hs),s(H,Bs),s(H,T),s(T,Fe),s(Fe,xs),s(T,Ns),s(T,Us),s(T,$s),s(T,Qe),s(Qe,qs),s(T,Ms),p(e,kt,r),p(e,G,r),s(G,Vs),p(e,Et,r),p(e,_e,r),s(_e,zs),p(e,vt,r),p(e,K,r),K.innerHTML=bo,p(e,mt,r),p(e,ke,r),s(ke,Gs),p(e,ht,r),p(e,F,r),F.innerHTML=Co,p(e,Dt,r),p(e,Ee,r),s(Ee,j),s(j,Ks),s(j,Xe),s(Xe,Fs),s(j,Qs),s(j,We),s(We,Xs),s(j,Ws),p(e,It,r),p(e,Q,r),s(Q,Zs),p(e,yt,r),p(e,ve,r),s(ve,Js),p(e,bt,r),p(e,X,r),X.innerHTML=Oo,p(e,Ct,r),p(e,me,r),s(me,Ys),p(e,Ot,r),p(e,W,r),W.innerHTML=wo,p(e,wt,r),p(e,Z,r),s(Z,gs),p(e,Tt,r),p(e,he,r),s(he,ea),p(e,Lt,r),p(e,J,r),s(J,ta),p(e,Pt,r),p(e,De,r),p(e,St,r),p(e,b,r),s(b,Ie),s(b,sa),s(b,ye),p(e,jt,r),p(e,Y,r),s(Y,C),s(C,Ze),s(Ze,g),s(g,aa),s(C,Je),s(Je,ee),s(ee,oa),s(C,Ye),s(Ye,te),s(te,na),s(C,ge),s(ge,se),s(se,la),s(C,et),s(et,ae),s(ae,ca),s(C,tt),s(tt,oe),s(oe,ra)},p:Ko,d(e){e&&t(_),e&&t(we),e&&t(f),e&&t(Le),e&&t(pe),e&&t(at),e&&t(I),e&&t(ot),e&&t(ue),e&&t(nt),e&&t(y),e&&t(lt),e&&t($),e&&t(ct),e&&t(R),e&&t(rt),e&&t(q),e&&t(pt),e&&t(w),e&&t(it),e&&t(fe),e&&t(dt),e&&t(M),e&&t(ut),e&&t(V),e&&t(ft),e&&t(z),e&&t(_t),e&&t(H),e&&t(kt),e&&t(G),e&&t(Et),e&&t(_e),e&&t(vt),e&&t(K),e&&t(mt),e&&t(ke),e&&t(ht),e&&t(F),e&&t(Dt),e&&t(Ee),e&&t(It),e&&t(Q),e&&t(yt),e&&t(ve),e&&t(bt),e&&t(X),e&&t(Ct),e&&t(me),e&&t(Ot),e&&t(W),e&&t(wt),e&&t(Z),e&&t(Tt),e&&t(he),e&&t(Lt),e&&t(J),e&&t(Pt),e&&t(De),e&&t(St),e&&t(b),e&&t(jt),e&&t(Y)}}}function Xo(re){let _,h;const E=[re[0],_a];let D={$$slots:{default:[Qo]},$$scope:{ctx:re}};for(let k=0;k<E.length;k+=1)D=fa(D,E[k]);return _=new Fo({props:D}),{c(){xo(_.$$.fragment)},l(k){No(_.$$.fragment,k)},m(k,v){Uo(_,k,v),h=!0},p(k,[v]){const A=v&1?$o(E,[v&1&&ko(k[0]),v&0&&ko(_a)]):{};v&2&&(A.$$scope={dirty:v,ctx:k}),_.$set(A)},i(k){h||(qo(_.$$.fragment,k),h=!0)},o(k){Mo(_.$$.fragment,k),h=!1},d(k){Vo(_,k)}}}const _a={title:"\u5BE6\u4F5C\u300C\u4F7F\u7528 Discord \u767B\u5165\u300D",date:"2021-01-14T00:24:23.000Z",tags:"F2E"},mo="798950274114781204",ho="https://f6bfb5.github.io/login-with-discord",Do="identify email";function Wo(){document.location.href=`https://discord.com/api/oauth2/authorize?client_id=${mo}&redirect_uri=${encodeURIComponent(ho)}&response_type=code&scope=${encodeURIComponent(Do)}`}function Zo(re,_,h){return zo(()=>{document.getElementById("js-discord-button").addEventListener("click",Wo);const E=new URLSearchParams(window.location.search);if(E.has("code")){const D="3c-TeN5NxElL4la8E6h5BlT4zDHigser",k="https://discordapp.com/api/oauth2/token",v={client_id:mo,client_secret:D,grant_type:"authorization_code",code:E.get("code"),redirect_uri:ho,scope:Do},A=Object.keys(v).map(f=>encodeURIComponent(f)+"="+encodeURIComponent(v[f])).join("&");fetch(k,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:A}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="token got",f.json()}).then(function(f){let Te=f.access_token;return fetch("https://discordapp.com/api/users/@me",{method:"GET",headers:{authorization:"Bearer "+Te}})}).then(function(f){if(!f.ok)throw new Error(f.statusText);return document.getElementById("js-discord-status").innerText="user data got",f.json()}).catch(function(f){document.getElementById("js-discord-status").innerText=f}).then(function(f){f!=null&&(document.getElementById("js-discord-card").style.display="block",document.getElementById("js-discord-card--image").src=`https://cdn.discordapp.com/avatars/${f.id}/${f.avatar}`,document.getElementById("js-discord-card--username").innerText=`${f.username}#${f.discriminator}`)})}else document.getElementById("js-discord-status").innerText="Not logged in"}),re.$$set=E=>{h(0,_=fa(fa({},_),Eo(E)))},_=Eo(_),[_]}class Jo extends Ro{constructor(_){super(),Ho(this,_,Zo,Xo,Bo,{})}}var en=Object.freeze(Object.defineProperty({__proto__:null,default:Jo,metadata:_a},Symbol.toStringTag,{value:"Module"}));export{Jo as L,en as _,_a as m};
