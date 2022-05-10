import{S as Es,i as js,s as xs,C as Ka,w as Ps,x as Ss,y as Cs,z as Bs,A as gs,q as Hs,o as Os,B as $s,R as vs,e as c,t,k as f,c as l,a as u,h as p,d as s,m as d,b as k,g as o,G as n,E as qs}from"./index-1ddf5aaf.js";import{P as As}from"./_post-4b9489f2.js";function Ds($){let i,y,_,B,r,m,q,ma,V,w,fa,b,da,_a,I,ga,va,W,A,ya,X,D,wa,Y,E,ha,j,ba,Ea,aa,H,ys=`<code class="language-javascript"><span class="token comment">// ...</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// another utility JavaScript file, will be described after</span>
<span class="token keyword">const</span> createTitleImage <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./src/utils/title-image.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token keyword">async</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">md<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// markdown file content</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> data<span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> rawContent <span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">matter</span><span class="token punctuation">(</span>md<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">&#123;</span> title<span class="token punctuation">,</span> date <span class="token punctuation">&#125;</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// image meta info placeholder</span>
    <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
    <span class="token comment">// if had set custom image then don't generate</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>image<span class="token punctuation">)</span> image <span class="token operator">=</span> data<span class="token punctuation">.</span>image<span class="token punctuation">;</span>
    <span class="token comment">// if not set custom image then generate it</span>
    <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">try</span> <span class="token punctuation">&#123;</span>
        <span class="token comment">// generate canvas</span>
        <span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTitleImage</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
          title<span class="token punctuation">,</span>
          <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">"f6bfb5.github.io"</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// save canvas to file</span>
        <span class="token keyword">const</span> imagePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"./static/preview/"</span><span class="token punctuation">,</span> slug <span class="token operator">+</span> <span class="token string">".png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span><span class="token string">"./static/preview/"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span><span class="token string">"./static/preview/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>imagePath<span class="token punctuation">,</span> buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// set image meta info</span>
        image <span class="token operator">=</span> <span class="token string">"https://f6bfb5.github.io/preview/"</span> <span class="token operator">+</span> slug <span class="token operator">+</span> <span class="token string">".png"</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// add image to meta info</span>
    <span class="token keyword">const</span> exportFromModule <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> title <span class="token operator">||</span> slug<span class="token punctuation">,</span>
      slug<span class="token punctuation">,</span>
      html<span class="token punctuation">,</span>
      date<span class="token punctuation">,</span>
      excerpt<span class="token punctuation">,</span>
      printDate<span class="token punctuation">,</span>
      printReadingTime<span class="token punctuation">,</span>
      tags<span class="token punctuation">,</span>
      image<span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// ...</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,sa,T,ja,na,v,xa,x,Pa,Sa,J,Ca,Ba,L,Ha,Oa,ta,F,$a,pa,g,Q,qa,Aa,Z,Da,Ta,K,Fa,Ma,U,Ra,Ga,ea,M,Na,oa,P,za,S,Ia,Ja,ca,O,ws=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">preload</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> params<span class="token punctuation">,</span> query <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token comment">// will get data and meta info from markdown files</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>params<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.json</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span> <span class="token literal-property property">post</span><span class="token operator">:</span> data <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span> <span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>status<span class="token punctuation">,</span> data<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- ... --></span>
<span class="token comment">&lt;!-- add image meta info --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>og:image<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;post.image&#125;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,la,R,La,ua,G,Qa,ia,N,Za;return{c(){i=c("p"),y=t("\u4F8B\u5982 "),_=c("a"),B=t("Qiita"),r=t(" \u6216 "),m=c("a"),q=t("Hatena Blog"),ma=t("\uFF0C\u73FE\u5728\u8A31\u591A\u7DB2\u7AD9\u90FD\u80FD\u5728\u9810\u89BD\u6642\u7684\u7E2E\u5716\u4E0A\u986F\u793A\u5C0D\u61C9\u6587\u7AE0\u7684\u6A19\u984C\uFF0C\u800C\u9019\u5BE6\u969B\u4E0A\u5230\u5E95\u662F\u600E\u9EBC\u505A\u5230\u7684\uFF1F"),V=f(),w=c("p"),fa=t("\u6211\u5F88\u5927\u5E45\u5EA6\uFF08\u6216\u8005\u8AAA\u5E7E\u4E4E\u5168\u90E8\uFF09\u53C3\u8003\u4E86 "),b=c("a"),da=t("Generating Twitter Card images from blog post titles"),_a=t(" \u9019\u7BC7\u6587\u7AE0\u7684\u505A\u6CD5\uFF0C\u4F7F\u7528 Node.js \u7684 canvas library "),I=c("code"),ga=t("node-canvas"),va=t(" \u76F4\u63A5\u5728 canvas \u4E0A\u756B\u597D\u9810\u89BD\u5716\uFF0C\u5B58\u6210\u6A94\u6848\u5F8C\uFF0C\u518D\u8A2D\u5B9A\u597D\u76F8\u95DC\u5143\u7D20\u7684\u5C0D\u61C9\u6A94\u6848\u8DEF\u5F91\uFF0C\u5C31\u80FD\u66FF\u7DB2\u7AD9\u6587\u7AE0\u52A0\u4E0A\u9810\u89BD\u5716\u4E86\u3002"),W=f(),A=c("h2"),ya=t("\u8655\u7406\u6B65\u9A5F"),X=f(),D=c("h3"),wa=t("1. \u53D6\u5F97\u6587\u7AE0\u8CC7\u8A0A"),Y=f(),E=c("p"),ha=t("\u8981\u7522\u751F\u5716\u7247\uFF0C\u9996\u5148\u5F97\u8981\u6709\u6587\u7AE0\u7684\u6A19\u984C\u6216\u76F8\u95DC\u8CC7\u8A0A\uFF0CSapper \u7684 Blog \u6A23\u677F\u63D0\u4F9B\u4E86\u4E00\u652F "),j=c("a"),ba=t("markdown.js"),Ea=t(" \u8655\u7406\u524D\u7F6E\u7684\u6A94\u6848\u532F\u5165\u8207 meta \u8CC7\u8A0A\u7684\u7522\u751F\uFF0C\u6545\u53EA\u9700\u518D\u591A\u52A0\u4E0A\u7E2E\u5716\u7528\u7684 meta \u8CC7\u8A0A\uFF0C\u4E26\u5F9E\u6B64\u50B3\u5165\u76F8\u95DC\u8CC7\u8A0A\u81F3\u751F\u6210 function \u5373\u53EF\uFF1A"),aa=f(),H=c("pre"),sa=f(),T=c("h3"),ja=t("2. \u7522\u751F\u5716\u7247"),na=f(),v=c("p"),xa=t("\u4E0A\u65B9\u63D0\u53CA\u7684\u6587\u7AE0\u4F5C\u8005\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684\u7A0B\u5F0F\u78BC "),x=c("a"),Pa=t("title-image.js"),Sa=t("\uFF0C\u975E\u5E38\u611F\u6FC0\u5730\u53EA\u66F4\u6539\u4E86\u88E1\u982D\u7684\u5B57\u9AD4\u5F8C\u5B8C\u5168\u501F\u7528\uFF0C\u4F7F\u7528\u524D\u4E5F\u9700\u6CE8\u610F\u662F\u5426\u5DF2\u5B89\u88DD "),J=c("code"),Ca=t("node-canvas"),Ba=t("\uFF0C\u82E5\u7121\u5247\u9700\u5148 "),L=c("code"),Ha=t("npm i canvas"),Oa=t("\u3002"),ta=f(),F=c("h3"),$a=t("3. \u5B58\u70BA\u6A94\u6848"),pa=f(),g=c("p"),Q=c("code"),qa=t("title-image.js"),Aa=t(" \u56DE\u50B3\u7684\u662F Buffer object\uFF0C\u56E0\u6B64\u9700\u8981\u518D\u4F7F\u7528 "),Z=c("code"),Da=t("fs"),Ta=t(" \u5B58\u70BA\u6A94\u6848\uFF0C\u9019\u90E8\u5206\u7684\u7A0B\u5F0F\u78BC\u4E5F\u5DF2\u5BEB\u5728\u7B2C 1 \u6B65 "),K=c("code"),Fa=t("else"),Ma=t(" \u7684\u90E8\u5206\u88E1\uFF0C\u9019\u908A\u50B3\u5165\u6587\u7AE0\u5225\u540D\u4F5C\u70BA\u6A94\u6848\u540D\u7A31\uFF0C\u4E26\u6AA2\u67E5\u76EE\u6A19\u8CC7\u6599\u593E\u662F\u5426\u5B58\u5728\uFE50\u82E5\u662F\u5982\u9060\u7AEF\u63A8\u64AD\u74B0\u5883\u5247\u53E6\u884C\u7522\u751F\uFF0C\u6700\u5F8C\u4F7F\u7528 "),U=c("code"),Ra=t("writeFileSync"),Ga=t(" \u5B58\u5165\u6A94\u6848\u3002"),ea=f(),M=c("h3"),Na=t("4. \u8A2D\u5B9A meta tag"),oa=f(),P=c("p"),za=t("\u6709\u4E86\u5716\u7247\u6A94\u6848\u5F8C\uFF0C\u5C31\u80FD\u5C07\u8DEF\u5F91\u50B3\u9032\u6587\u7AE0\u6A23\u677F\u88E1\u7684\u5C0D\u61C9 meta \u88E1\uFF0C\u540C\u6A23\u7684\uFF0CSapper \u7684 "),S=c("a"),Ia=t("Blog \u6587\u7AE0\u6A23\u677F"),Ja=t("\u4E5F\u9644\u4E0A\u4E86\u793E\u7FA4\u7DB2\u7AD9\u7528\u7684 meta tag\uFF0C\u53EA\u9700\u52A0\u5165\u7B2C 1 \u6B65\u65B0\u589E\u7684\u7E2E\u5716 meta \u8CC7\u8A0A\u5373\u53EF\u3002"),ca=f(),O=c("pre"),la=f(),R=c("p"),La=t("\u5B8C\u6210\uFF01"),ua=f(),G=c("h2"),Qa=t("\u6539\u5584\u9EDE"),ia=f(),N=c("p"),Za=t("\u96D6\u7136\u770B\u4F86\u539F\u672C\u4E5F\u6709\u8003\u616E\u5230\u65E5\u6587\u6A19\u984C\u7684\u60C5\u6CC1\uFF0C\u76EE\u524D\u770B\u4F86\u4E00\u4E9B\u592A\u9577\u7684\u6A19\u984C\u9084\u662F\u6703\u5168\u7E2E\u5728\u540C\u4E00\u884C\u5C0E\u81F4\u5B57\u8B8A\u5F97\u592A\u5C0F\uFF0C\u767C\u751F\u6587\u5B57\u7121\u6CD5\u59A5\u5584\u5206\u884C\u7684\u72C0\u6CC1\uFF0C\u4E5F\u6709\u50CF\u9019\u7BC7\u53E6\u5916\u4F7F\u7528\u4E86\u6587\u5B57\u578B\u614B\u5206\u6790 library \u89E3\u6C7A\u9019\u500B\u554F\u984C\uFF0C\u4EE5\u53CA\u6574\u9AD4\u7684\u914D\u8272\u6216\u914D\u7F6E\u8003\u91CF\uFF0C\u90FD\u662F\u65E5\u5F8C\u9996\u8981\u7684\u6539\u5584\u9EDE\u3002"),this.h()},l(a){i=l(a,"P",{});var e=u(i);y=p(e,"\u4F8B\u5982 "),_=l(e,"A",{href:!0,rel:!0,target:!0});var Va=u(_);B=p(Va,"Qiita"),Va.forEach(s),r=p(e," \u6216 "),m=l(e,"A",{href:!0,rel:!0,target:!0});var Wa=u(m);q=p(Wa,"Hatena Blog"),Wa.forEach(s),ma=p(e,"\uFF0C\u73FE\u5728\u8A31\u591A\u7DB2\u7AD9\u90FD\u80FD\u5728\u9810\u89BD\u6642\u7684\u7E2E\u5716\u4E0A\u986F\u793A\u5C0D\u61C9\u6587\u7AE0\u7684\u6A19\u984C\uFF0C\u800C\u9019\u5BE6\u969B\u4E0A\u5230\u5E95\u662F\u600E\u9EBC\u505A\u5230\u7684\uFF1F"),e.forEach(s),V=d(a),w=l(a,"P",{});var z=u(w);fa=p(z,"\u6211\u5F88\u5927\u5E45\u5EA6\uFF08\u6216\u8005\u8AAA\u5E7E\u4E4E\u5168\u90E8\uFF09\u53C3\u8003\u4E86 "),b=l(z,"A",{href:!0,rel:!0,target:!0});var Xa=u(b);da=p(Xa,"Generating Twitter Card images from blog post titles"),Xa.forEach(s),_a=p(z," \u9019\u7BC7\u6587\u7AE0\u7684\u505A\u6CD5\uFF0C\u4F7F\u7528 Node.js \u7684 canvas library "),I=l(z,"CODE",{});var Ya=u(I);ga=p(Ya,"node-canvas"),Ya.forEach(s),va=p(z," \u76F4\u63A5\u5728 canvas \u4E0A\u756B\u597D\u9810\u89BD\u5716\uFF0C\u5B58\u6210\u6A94\u6848\u5F8C\uFF0C\u518D\u8A2D\u5B9A\u597D\u76F8\u95DC\u5143\u7D20\u7684\u5C0D\u61C9\u6A94\u6848\u8DEF\u5F91\uFF0C\u5C31\u80FD\u66FF\u7DB2\u7AD9\u6587\u7AE0\u52A0\u4E0A\u9810\u89BD\u5716\u4E86\u3002"),z.forEach(s),W=d(a),A=l(a,"H2",{});var as=u(A);ya=p(as,"\u8655\u7406\u6B65\u9A5F"),as.forEach(s),X=d(a),D=l(a,"H3",{});var ss=u(D);wa=p(ss,"1. \u53D6\u5F97\u6587\u7AE0\u8CC7\u8A0A"),ss.forEach(s),Y=d(a),E=l(a,"P",{});var ra=u(E);ha=p(ra,"\u8981\u7522\u751F\u5716\u7247\uFF0C\u9996\u5148\u5F97\u8981\u6709\u6587\u7AE0\u7684\u6A19\u984C\u6216\u76F8\u95DC\u8CC7\u8A0A\uFF0CSapper \u7684 Blog \u6A23\u677F\u63D0\u4F9B\u4E86\u4E00\u652F "),j=l(ra,"A",{href:!0,rel:!0,target:!0});var ns=u(j);ba=p(ns,"markdown.js"),ns.forEach(s),Ea=p(ra," \u8655\u7406\u524D\u7F6E\u7684\u6A94\u6848\u532F\u5165\u8207 meta \u8CC7\u8A0A\u7684\u7522\u751F\uFF0C\u6545\u53EA\u9700\u518D\u591A\u52A0\u4E0A\u7E2E\u5716\u7528\u7684 meta \u8CC7\u8A0A\uFF0C\u4E26\u5F9E\u6B64\u50B3\u5165\u76F8\u95DC\u8CC7\u8A0A\u81F3\u751F\u6210 function \u5373\u53EF\uFF1A"),ra.forEach(s),aa=d(a),H=l(a,"PRE",{class:!0});var hs=u(H);hs.forEach(s),sa=d(a),T=l(a,"H3",{});var ts=u(T);ja=p(ts,"2. \u7522\u751F\u5716\u7247"),ts.forEach(s),na=d(a),v=l(a,"P",{});var C=u(v);xa=p(C,"\u4E0A\u65B9\u63D0\u53CA\u7684\u6587\u7AE0\u4F5C\u8005\u4E5F\u63D0\u4F9B\u4E86\u81EA\u5DF1\u7684\u7A0B\u5F0F\u78BC "),x=l(C,"A",{href:!0,rel:!0,target:!0});var ps=u(x);Pa=p(ps,"title-image.js"),ps.forEach(s),Sa=p(C,"\uFF0C\u975E\u5E38\u611F\u6FC0\u5730\u53EA\u66F4\u6539\u4E86\u88E1\u982D\u7684\u5B57\u9AD4\u5F8C\u5B8C\u5168\u501F\u7528\uFF0C\u4F7F\u7528\u524D\u4E5F\u9700\u6CE8\u610F\u662F\u5426\u5DF2\u5B89\u88DD "),J=l(C,"CODE",{});var es=u(J);Ca=p(es,"node-canvas"),es.forEach(s),Ba=p(C,"\uFF0C\u82E5\u7121\u5247\u9700\u5148 "),L=l(C,"CODE",{});var os=u(L);Ha=p(os,"npm i canvas"),os.forEach(s),Oa=p(C,"\u3002"),C.forEach(s),ta=d(a),F=l(a,"H3",{});var cs=u(F);$a=p(cs,"3. \u5B58\u70BA\u6A94\u6848"),cs.forEach(s),pa=d(a),g=l(a,"P",{});var h=u(g);Q=l(h,"CODE",{});var ls=u(Q);qa=p(ls,"title-image.js"),ls.forEach(s),Aa=p(h," \u56DE\u50B3\u7684\u662F Buffer object\uFF0C\u56E0\u6B64\u9700\u8981\u518D\u4F7F\u7528 "),Z=l(h,"CODE",{});var us=u(Z);Da=p(us,"fs"),us.forEach(s),Ta=p(h," \u5B58\u70BA\u6A94\u6848\uFF0C\u9019\u90E8\u5206\u7684\u7A0B\u5F0F\u78BC\u4E5F\u5DF2\u5BEB\u5728\u7B2C 1 \u6B65 "),K=l(h,"CODE",{});var is=u(K);Fa=p(is,"else"),is.forEach(s),Ma=p(h," \u7684\u90E8\u5206\u88E1\uFF0C\u9019\u908A\u50B3\u5165\u6587\u7AE0\u5225\u540D\u4F5C\u70BA\u6A94\u6848\u540D\u7A31\uFF0C\u4E26\u6AA2\u67E5\u76EE\u6A19\u8CC7\u6599\u593E\u662F\u5426\u5B58\u5728\uFE50\u82E5\u662F\u5982\u9060\u7AEF\u63A8\u64AD\u74B0\u5883\u5247\u53E6\u884C\u7522\u751F\uFF0C\u6700\u5F8C\u4F7F\u7528 "),U=l(h,"CODE",{});var rs=u(U);Ra=p(rs,"writeFileSync"),rs.forEach(s),Ga=p(h," \u5B58\u5165\u6A94\u6848\u3002"),h.forEach(s),ea=d(a),M=l(a,"H3",{});var ks=u(M);Na=p(ks,"4. \u8A2D\u5B9A meta tag"),ks.forEach(s),oa=d(a),P=l(a,"P",{});var ka=u(P);za=p(ka,"\u6709\u4E86\u5716\u7247\u6A94\u6848\u5F8C\uFF0C\u5C31\u80FD\u5C07\u8DEF\u5F91\u50B3\u9032\u6587\u7AE0\u6A23\u677F\u88E1\u7684\u5C0D\u61C9 meta \u88E1\uFF0C\u540C\u6A23\u7684\uFF0CSapper \u7684 "),S=l(ka,"A",{href:!0,rel:!0,target:!0});var ms=u(S);Ia=p(ms,"Blog \u6587\u7AE0\u6A23\u677F"),ms.forEach(s),Ja=p(ka,"\u4E5F\u9644\u4E0A\u4E86\u793E\u7FA4\u7DB2\u7AD9\u7528\u7684 meta tag\uFF0C\u53EA\u9700\u52A0\u5165\u7B2C 1 \u6B65\u65B0\u589E\u7684\u7E2E\u5716 meta \u8CC7\u8A0A\u5373\u53EF\u3002"),ka.forEach(s),ca=d(a),O=l(a,"PRE",{class:!0});var bs=u(O);bs.forEach(s),la=d(a),R=l(a,"P",{});var fs=u(R);La=p(fs,"\u5B8C\u6210\uFF01"),fs.forEach(s),ua=d(a),G=l(a,"H2",{});var ds=u(G);Qa=p(ds,"\u6539\u5584\u9EDE"),ds.forEach(s),ia=d(a),N=l(a,"P",{});var _s=u(N);Za=p(_s,"\u96D6\u7136\u770B\u4F86\u539F\u672C\u4E5F\u6709\u8003\u616E\u5230\u65E5\u6587\u6A19\u984C\u7684\u60C5\u6CC1\uFF0C\u76EE\u524D\u770B\u4F86\u4E00\u4E9B\u592A\u9577\u7684\u6A19\u984C\u9084\u662F\u6703\u5168\u7E2E\u5728\u540C\u4E00\u884C\u5C0E\u81F4\u5B57\u8B8A\u5F97\u592A\u5C0F\uFF0C\u767C\u751F\u6587\u5B57\u7121\u6CD5\u59A5\u5584\u5206\u884C\u7684\u72C0\u6CC1\uFF0C\u4E5F\u6709\u50CF\u9019\u7BC7\u53E6\u5916\u4F7F\u7528\u4E86\u6587\u5B57\u578B\u614B\u5206\u6790 library \u89E3\u6C7A\u9019\u500B\u554F\u984C\uFF0C\u4EE5\u53CA\u6574\u9AD4\u7684\u914D\u8272\u6216\u914D\u7F6E\u8003\u91CF\uFF0C\u90FD\u662F\u65E5\u5F8C\u9996\u8981\u7684\u6539\u5584\u9EDE\u3002"),_s.forEach(s),this.h()},h(){k(_,"href","https://qiita.com/"),k(_,"rel","noopener"),k(_,"target","_blank"),k(m,"href","https://hatenablog.com/"),k(m,"rel","noopener"),k(m,"target","_blank"),k(b,"href","https://shuheikagawa.com/blog/2019/10/13/generating-twitter-card-images/"),k(b,"rel","noopener"),k(b,"target","_blank"),k(j,"href","https://github.com/Charca/sapper-blog-template/blob/master/src/utils/markdown.js"),k(j,"rel","noopener"),k(j,"target","_blank"),k(H,"class","language-javascript"),k(x,"href","https://github.com/shuhei/shuhei.github.com/blob/f30cb5cd85a4ef35a4fb73d94a01da44e03ae116/plugins/title-image.js"),k(x,"rel","noopener"),k(x,"target","_blank"),k(S,"href","https://github.com/Charca/sapper-blog-template/blob/master/src/routes/blog/%5Bslug%5D.svelte"),k(S,"rel","noopener"),k(S,"target","_blank"),k(O,"class","language-html")},m(a,e){o(a,i,e),n(i,y),n(i,_),n(_,B),n(i,r),n(i,m),n(m,q),n(i,ma),o(a,V,e),o(a,w,e),n(w,fa),n(w,b),n(b,da),n(w,_a),n(w,I),n(I,ga),n(w,va),o(a,W,e),o(a,A,e),n(A,ya),o(a,X,e),o(a,D,e),n(D,wa),o(a,Y,e),o(a,E,e),n(E,ha),n(E,j),n(j,ba),n(E,Ea),o(a,aa,e),o(a,H,e),H.innerHTML=ys,o(a,sa,e),o(a,T,e),n(T,ja),o(a,na,e),o(a,v,e),n(v,xa),n(v,x),n(x,Pa),n(v,Sa),n(v,J),n(J,Ca),n(v,Ba),n(v,L),n(L,Ha),n(v,Oa),o(a,ta,e),o(a,F,e),n(F,$a),o(a,pa,e),o(a,g,e),n(g,Q),n(Q,qa),n(g,Aa),n(g,Z),n(Z,Da),n(g,Ta),n(g,K),n(K,Fa),n(g,Ma),n(g,U),n(U,Ra),n(g,Ga),o(a,ea,e),o(a,M,e),n(M,Na),o(a,oa,e),o(a,P,e),n(P,za),n(P,S),n(S,Ia),n(P,Ja),o(a,ca,e),o(a,O,e),O.innerHTML=ws,o(a,la,e),o(a,R,e),n(R,La),o(a,ua,e),o(a,G,e),n(G,Qa),o(a,ia,e),o(a,N,e),n(N,Za)},p:qs,d(a){a&&s(i),a&&s(V),a&&s(w),a&&s(W),a&&s(A),a&&s(X),a&&s(D),a&&s(Y),a&&s(E),a&&s(aa),a&&s(H),a&&s(sa),a&&s(T),a&&s(na),a&&s(v),a&&s(ta),a&&s(F),a&&s(pa),a&&s(g),a&&s(ea),a&&s(M),a&&s(oa),a&&s(P),a&&s(ca),a&&s(O),a&&s(la),a&&s(R),a&&s(ua),a&&s(G),a&&s(ia),a&&s(N)}}}function Ts($){let i,y;const _=[$[0],Ua];let B={$$slots:{default:[Ds]},$$scope:{ctx:$}};for(let r=0;r<_.length;r+=1)B=Ka(B,_[r]);return i=new As({props:B}),{c(){Ps(i.$$.fragment)},l(r){Ss(i.$$.fragment,r)},m(r,m){Cs(i,r,m),y=!0},p(r,[m]){const q=m&1?Bs(_,[m&1&&gs(r[0]),m&0&&gs(Ua)]):{};m&2&&(q.$$scope={dirty:m,ctx:r}),i.$set(q)},i(r){y||(Hs(i.$$.fragment,r),y=!0)},o(r){Os(i.$$.fragment,r),y=!1},d(r){$s(i,r)}}}const Ua={title:"\u81EA\u52D5\u7522\u751F\u90E8\u843D\u683C\u9810\u89BD\u5716\u7247",date:"2021-08-26T15:26:19.000Z",tags:"F2E"};function Fs($,i,y){return $.$$set=_=>{y(0,i=Ka(Ka({},i),vs(_)))},i=vs(i),[i]}class Ms extends Es{constructor(i){super(),js(this,i,Fs,Ts,xs,{})}}var Ns=Object.freeze(Object.defineProperty({__proto__:null,default:Ms,metadata:Ua},Symbol.toStringTag,{value:"Module"}));export{Ms as A,Ns as _,Ua as m};