import{S as hl,i as ml,s as vl,C as io,w as El,x as wl,y as Al,z as yl,A as cl,q as Sl,o as gl,B as kl,R as ul,e as l,t as s,k as u,c as r,a,h as i,d as t,m as f,G as oe,b as n,g as d,F as e,E as xl}from"./index-1cb0a915.js";import{P as Il}from"./_post-84ef0c92.js";function Cl(F){let p,A,y,v,_,E,B,at,le,st,it,re,S,K,co,ae,nt,Ue,U,ct,ze,h,P,se,ut,ft,z,fl=`<code class="language-ahk">^+r::Reload ; Ctrl + Shift + r

!x::ExitApp ; Alt + x

^!f::       ; Ctrl + Alt + f
MouseGetPos, xpos, ypos
MsgBox, The cursor is at X%xpos% Y%ypos%.
return</code>`,dt,ie,W,ne,pt,_t,ce,ht,mt,ue,T,fe,vt,Et,de,wt,At,pe,b,_e,yt,St,he,gt,kt,me,q,xt,ve,It,Ct,Ht,Ee,O,Lt,we,Pt,Wt,Tt,Ae,M,ye,bt,qt,Ot,Se,ge,g,R,uo,ke,Dt,Me,X,Ft,Re,w,xe,Bt,Kt,Ie,Ce,Ut,zt,He,Le,Mt,Rt,Pe,We,Xt,Xe,N,Nt,Ne,G,Gt,Ge,$,Te,k,j,fo,be,$t,$e,D,dl=`<code class="language-undefined">^+q::
xonar_window := &quot;Xonar Essence STX Audio Center&quot;
2s := &quot;2\u30B9\u30D4\u30FC\u30AB\u30FC&quot;
h := &quot;\u30D8\u30C3\u30C9\u30D5\u30A9\u30F3&quot;

equalizer_window := &quot;Equalizer APO 1.2.1 Configuration Editor&quot;

DetectHiddenText, On
Run, &quot;C:Program FilesASUS Xonar Essence STX AudioCustomappAsusAudioCenter.exe&quot;
WinWait, %xonar_window%
IfWinNotActive, %xonar_window%, , WinActivate, %xonar_window%
WinWaitActive, %xonar_window%
WinGetText, vText, %xonar_window%
IfInString, vText, %2s%, ControlSend, ComboBox5, &#123;Home&#125;
; IfInString, vText, 2 Speakers, ControlSend, ComboBox5, h
else IfInString, vText, %h%, ControlSend, ComboBox5, 2
; else IfInString, vText, Headphone, ControlSend, ComboBox5, 2
WinClose

Run, Editor.exe, C:Program FilesEqualizerAPO
WinWait, %equalizer_window%
IfWinNotActive, %equalizer_window%, , WinActivate, %equalizer_window%
WinWaitActive, %equalizer_window%
Click, LEFT, 78, 128
WinClose
Return</code>`,je,J,jt,Je,H,qe,x,Q,po,Oe,Jt,Qt,De,I,Y,_o,Fe,Yt,Qe,V,Vt,Ye,Z,Be,C,ee,ho,Ke,Zt;return{c(){p=l("h2"),A=s("Introduction"),y=u(),v=l("ul"),_=l("li"),E=l("del"),B=s("2022 \u5E74\u624D\u958B\u59CB\u7814\u7A76 AHK"),at=u(),le=l("li"),st=s("AutoHotKey \u662F\u53EF\u4EE5\u81EA\u7531\u81EA\u52D5\u5316\u8207\u5BA2\u88FD\u5316 Windows \u64CD\u4F5C\u7684\u8173\u672C\u5F15\u64CE"),it=u(),re=l("li"),S=l("a"),K=l("img"),ae=l("span"),nt=s("\u4E0B\u8F09"),Ue=u(),U=l("h2"),ct=s("Basic instruction"),ze=u(),h=l("ul"),P=l("li"),se=l("p"),ut=s("Example:"),ft=u(),z=l("pre"),dt=u(),ie=l("li"),W=l("p"),ne=l("code"),pt=s("^"),_t=s(": "),ce=l("code"),ht=s("Ctrl"),mt=u(),ue=l("li"),T=l("p"),fe=l("code"),vt=s("+"),Et=s(": "),de=l("code"),wt=s("Shift"),At=u(),pe=l("li"),b=l("p"),_e=l("code"),yt=s("!"),St=s(": "),he=l("code"),gt=s("Alt"),kt=u(),me=l("li"),q=l("p"),xt=s("left of "),ve=l("code"),It=s("::"),Ct=s(": Keys to trigger function"),Ht=u(),Ee=l("li"),O=l("p"),Lt=s("right of "),we=l("code"),Pt=s("::"),Wt=s(": Function content"),Tt=u(),Ae=l("li"),M=l("p"),ye=l("code"),bt=s("return"),qt=s(": Function end"),Ot=u(),Se=l("li"),ge=l("p"),g=l("a"),R=l("img"),ke=l("span"),Dt=s("Hotkeys"),Me=u(),X=l("h2"),Ft=s("Write script"),Re=u(),w=l("ul"),xe=l("li"),Bt=s("Window Spy"),Kt=u(),Ie=l("li"),Ce=l("code"),Ut=s('x := "string"'),zt=u(),He=l("li"),Le=l("code"),Mt=s("#IfWinActive"),Rt=u(),Pe=l("li"),We=l("code"),Xt=s("#IfWinExist"),Xe=u(),N=l("h2"),Nt=s("Snippet"),Ne=u(),G=l("h3"),Gt=s("Xonar Essence STX - Switch Speaker and Headphone"),Ge=u(),$=l("ul"),Te=l("li"),k=l("a"),j=l("img"),be=l("span"),$t=s("AutoHotKey script"),$e=u(),D=l("pre"),je=u(),J=l("h2"),jt=s("Community script"),Je=u(),H=l("ul"),qe=l("li"),x=l("a"),Q=l("img"),Oe=l("span"),Jt=s("[AutoHotkey Programming Tools] + Featured Scripts - AutoHotkey Community"),Qt=u(),De=l("li"),I=l("a"),Y=l("img"),Fe=l("span"),Yt=s("QuickSwitch - Use opened file manager folders in File dialogs"),Qe=u(),V=l("h2"),Vt=s("Ref"),Ye=u(),Z=l("ul"),Be=l("li"),C=l("a"),ee=l("img"),Ke=l("span"),Zt=s("AutoHotkeyJp"),this.h()},l(o){p=r(o,"H2",{});var c=a(p);A=i(c,"Introduction"),c.forEach(t),y=f(o),v=r(o,"UL",{});var te=a(v);_=r(te,"LI",{});var mo=a(_);E=r(mo,"DEL",{});var vo=a(E);B=i(vo,"2022 \u5E74\u624D\u958B\u59CB\u7814\u7A76 AHK"),vo.forEach(t),mo.forEach(t),at=f(te),le=r(te,"LI",{});var Eo=a(le);st=i(Eo,"AutoHotKey \u662F\u53EF\u4EE5\u81EA\u7531\u81EA\u52D5\u5316\u8207\u5BA2\u88FD\u5316 Windows \u64CD\u4F5C\u7684\u8173\u672C\u5F15\u64CE"),Eo.forEach(t),it=f(te),re=r(te,"LI",{});var wo=a(re);S=r(wo,"A",{href:!0,rel:!0,target:!0});var eo=a(S);K=r(eo,"IMG",{src:!0,alt:!0}),ae=r(eo,"SPAN",{});var Ao=a(ae);nt=i(Ao,"\u4E0B\u8F09"),Ao.forEach(t),eo.forEach(t),wo.forEach(t),te.forEach(t),Ue=f(o),U=r(o,"H2",{});var yo=a(U);ct=i(yo,"Basic instruction"),yo.forEach(t),ze=f(o),h=r(o,"UL",{});var m=a(h);P=r(m,"LI",{});var Ve=a(P);se=r(Ve,"P",{});var So=a(se);ut=i(So,"Example:"),So.forEach(t),ft=f(Ve),z=r(Ve,"PRE",{class:!0});var pl=a(z);pl.forEach(t),Ve.forEach(t),dt=f(m),ie=r(m,"LI",{});var go=a(ie);W=r(go,"P",{});var Ze=a(W);ne=r(Ze,"CODE",{});var ko=a(ne);pt=i(ko,"^"),ko.forEach(t),_t=i(Ze,": "),ce=r(Ze,"CODE",{});var xo=a(ce);ht=i(xo,"Ctrl"),xo.forEach(t),Ze.forEach(t),go.forEach(t),mt=f(m),ue=r(m,"LI",{});var Io=a(ue);T=r(Io,"P",{});var et=a(T);fe=r(et,"CODE",{});var Co=a(fe);vt=i(Co,"+"),Co.forEach(t),Et=i(et,": "),de=r(et,"CODE",{});var Ho=a(de);wt=i(Ho,"Shift"),Ho.forEach(t),et.forEach(t),Io.forEach(t),At=f(m),pe=r(m,"LI",{});var Lo=a(pe);b=r(Lo,"P",{});var tt=a(b);_e=r(tt,"CODE",{});var Po=a(_e);yt=i(Po,"!"),Po.forEach(t),St=i(tt,": "),he=r(tt,"CODE",{});var Wo=a(he);gt=i(Wo,"Alt"),Wo.forEach(t),tt.forEach(t),Lo.forEach(t),kt=f(m),me=r(m,"LI",{});var To=a(me);q=r(To,"P",{});var ot=a(q);xt=i(ot,"left of "),ve=r(ot,"CODE",{});var bo=a(ve);It=i(bo,"::"),bo.forEach(t),Ct=i(ot,": Keys to trigger function"),ot.forEach(t),To.forEach(t),Ht=f(m),Ee=r(m,"LI",{});var qo=a(Ee);O=r(qo,"P",{});var lt=a(O);Lt=i(lt,"right of "),we=r(lt,"CODE",{});var Oo=a(we);Pt=i(Oo,"::"),Oo.forEach(t),Wt=i(lt,": Function content"),lt.forEach(t),qo.forEach(t),Tt=f(m),Ae=r(m,"LI",{});var Do=a(Ae);M=r(Do,"P",{});var to=a(M);ye=r(to,"CODE",{});var Fo=a(ye);bt=i(Fo,"return"),Fo.forEach(t),qt=i(to,": Function end"),to.forEach(t),Do.forEach(t),Ot=f(m),Se=r(m,"LI",{});var Bo=a(Se);ge=r(Bo,"P",{});var Ko=a(ge);g=r(Ko,"A",{href:!0,rel:!0,target:!0});var oo=a(g);R=r(oo,"IMG",{src:!0,alt:!0}),ke=r(oo,"SPAN",{});var Uo=a(ke);Dt=i(Uo,"Hotkeys"),Uo.forEach(t),oo.forEach(t),Ko.forEach(t),Bo.forEach(t),m.forEach(t),Me=f(o),X=r(o,"H2",{});var zo=a(X);Ft=i(zo,"Write script"),zo.forEach(t),Re=f(o),w=r(o,"UL",{});var L=a(w);xe=r(L,"LI",{});var Mo=a(xe);Bt=i(Mo,"Window Spy"),Mo.forEach(t),Kt=f(L),Ie=r(L,"LI",{});var Ro=a(Ie);Ce=r(Ro,"CODE",{});var Xo=a(Ce);Ut=i(Xo,'x := "string"'),Xo.forEach(t),Ro.forEach(t),zt=f(L),He=r(L,"LI",{});var No=a(He);Le=r(No,"CODE",{});var Go=a(Le);Mt=i(Go,"#IfWinActive"),Go.forEach(t),No.forEach(t),Rt=f(L),Pe=r(L,"LI",{});var $o=a(Pe);We=r($o,"CODE",{});var jo=a(We);Xt=i(jo,"#IfWinExist"),jo.forEach(t),$o.forEach(t),L.forEach(t),Xe=f(o),N=r(o,"H2",{});var Jo=a(N);Nt=i(Jo,"Snippet"),Jo.forEach(t),Ne=f(o),G=r(o,"H3",{});var Qo=a(G);Gt=i(Qo,"Xonar Essence STX - Switch Speaker and Headphone"),Qo.forEach(t),Ge=f(o),$=r(o,"UL",{});var Yo=a($);Te=r(Yo,"LI",{});var Vo=a(Te);k=r(Vo,"A",{href:!0,rel:!0,target:!0});var lo=a(k);j=r(lo,"IMG",{src:!0,alt:!0}),be=r(lo,"SPAN",{});var Zo=a(be);$t=i(Zo,"AutoHotKey script"),Zo.forEach(t),lo.forEach(t),Vo.forEach(t),Yo.forEach(t),$e=f(o),D=r(o,"PRE",{class:!0});var _l=a(D);_l.forEach(t),je=f(o),J=r(o,"H2",{});var el=a(J);jt=i(el,"Community script"),el.forEach(t),Je=f(o),H=r(o,"UL",{});var rt=a(H);qe=r(rt,"LI",{});var tl=a(qe);x=r(tl,"A",{href:!0,rel:!0,target:!0});var ro=a(x);Q=r(ro,"IMG",{src:!0,alt:!0}),Oe=r(ro,"SPAN",{});var ol=a(Oe);Jt=i(ol,"[AutoHotkey Programming Tools] + Featured Scripts - AutoHotkey Community"),ol.forEach(t),ro.forEach(t),tl.forEach(t),Qt=f(rt),De=r(rt,"LI",{});var ll=a(De);I=r(ll,"A",{href:!0,rel:!0,target:!0});var ao=a(I);Y=r(ao,"IMG",{src:!0,alt:!0}),Fe=r(ao,"SPAN",{});var rl=a(Fe);Yt=i(rl,"QuickSwitch - Use opened file manager folders in File dialogs"),rl.forEach(t),ao.forEach(t),ll.forEach(t),rt.forEach(t),Qe=f(o),V=r(o,"H2",{});var al=a(V);Vt=i(al,"Ref"),al.forEach(t),Ye=f(o),Z=r(o,"UL",{});var sl=a(Z);Be=r(sl,"LI",{});var il=a(Be);C=r(il,"A",{href:!0,rel:!0,target:!0});var so=a(C);ee=r(so,"IMG",{src:!0,alt:!0}),Ke=r(so,"SPAN",{});var nl=a(Ke);Zt=i(nl,"AutoHotkeyJp"),nl.forEach(t),so.forEach(t),il.forEach(t),sl.forEach(t),this.h()},h(){oe(K.src,co="https://s2.googleusercontent.com/s2/favicons?domain=https://www.autohotkey.com/download/ahk-install.exe")||n(K,"src",co),n(K,"alt","\u4E0B\u8F09"),n(S,"href","https://www.autohotkey.com/download/ahk-install.exe"),n(S,"rel","noopener"),n(S,"target","_blank"),n(z,"class","language-ahk"),oe(R.src,uo="https://s2.googleusercontent.com/s2/favicons?domain=https://www.autohotkey.com/docs/Hotkeys.htm")||n(R,"src",uo),n(R,"alt","Hotkeys"),n(g,"href","https://www.autohotkey.com/docs/Hotkeys.htm"),n(g,"rel","noopener"),n(g,"target","_blank"),oe(j.src,fo="https://s2.googleusercontent.com/s2/favicons?domain=https://www.amazon.com/review/R17HDTKPBDSYSX?ASIN=B001OV789U")||n(j,"src",fo),n(j,"alt","AutoHotKey script"),n(k,"href","https://www.amazon.com/review/R17HDTKPBDSYSX?ASIN=B001OV789U"),n(k,"rel","noopener"),n(k,"target","_blank"),n(D,"class","language-undefined"),oe(Q.src,po="https://s2.googleusercontent.com/s2/favicons?domain=https://www.autohotkey.com/boards/viewtopic.php?t=4161")||n(Q,"src",po),n(Q,"alt","[AutoHotkey Programming Tools] + Featured Scripts - AutoHotkey Community"),n(x,"href","https://www.autohotkey.com/boards/viewtopic.php?t=4161"),n(x,"rel","noopener"),n(x,"target","_blank"),oe(Y.src,_o="https://s2.googleusercontent.com/s2/favicons?domain=https://www.autohotkey.com/boards/viewtopic.php?style=19&t=102377")||n(Y,"src",_o),n(Y,"alt","QuickSwitch - Use opened file manager folders in File dialogs"),n(I,"href","https://www.autohotkey.com/boards/viewtopic.php?style=19&t=102377"),n(I,"rel","noopener"),n(I,"target","_blank"),oe(ee.src,ho="https://s2.googleusercontent.com/s2/favicons?domain=https://sites.google.com/site/autohotkeyjp/")||n(ee,"src",ho),n(ee,"alt","AutoHotkeyJp"),n(C,"href","https://sites.google.com/site/autohotkeyjp/"),n(C,"rel","noopener"),n(C,"target","_blank")},m(o,c){d(o,p,c),e(p,A),d(o,y,c),d(o,v,c),e(v,_),e(_,E),e(E,B),e(v,at),e(v,le),e(le,st),e(v,it),e(v,re),e(re,S),e(S,K),e(S,ae),e(ae,nt),d(o,Ue,c),d(o,U,c),e(U,ct),d(o,ze,c),d(o,h,c),e(h,P),e(P,se),e(se,ut),e(P,ft),e(P,z),z.innerHTML=fl,e(h,dt),e(h,ie),e(ie,W),e(W,ne),e(ne,pt),e(W,_t),e(W,ce),e(ce,ht),e(h,mt),e(h,ue),e(ue,T),e(T,fe),e(fe,vt),e(T,Et),e(T,de),e(de,wt),e(h,At),e(h,pe),e(pe,b),e(b,_e),e(_e,yt),e(b,St),e(b,he),e(he,gt),e(h,kt),e(h,me),e(me,q),e(q,xt),e(q,ve),e(ve,It),e(q,Ct),e(h,Ht),e(h,Ee),e(Ee,O),e(O,Lt),e(O,we),e(we,Pt),e(O,Wt),e(h,Tt),e(h,Ae),e(Ae,M),e(M,ye),e(ye,bt),e(M,qt),e(h,Ot),e(h,Se),e(Se,ge),e(ge,g),e(g,R),e(g,ke),e(ke,Dt),d(o,Me,c),d(o,X,c),e(X,Ft),d(o,Re,c),d(o,w,c),e(w,xe),e(xe,Bt),e(w,Kt),e(w,Ie),e(Ie,Ce),e(Ce,Ut),e(w,zt),e(w,He),e(He,Le),e(Le,Mt),e(w,Rt),e(w,Pe),e(Pe,We),e(We,Xt),d(o,Xe,c),d(o,N,c),e(N,Nt),d(o,Ne,c),d(o,G,c),e(G,Gt),d(o,Ge,c),d(o,$,c),e($,Te),e(Te,k),e(k,j),e(k,be),e(be,$t),d(o,$e,c),d(o,D,c),D.innerHTML=dl,d(o,je,c),d(o,J,c),e(J,jt),d(o,Je,c),d(o,H,c),e(H,qe),e(qe,x),e(x,Q),e(x,Oe),e(Oe,Jt),e(H,Qt),e(H,De),e(De,I),e(I,Y),e(I,Fe),e(Fe,Yt),d(o,Qe,c),d(o,V,c),e(V,Vt),d(o,Ye,c),d(o,Z,c),e(Z,Be),e(Be,C),e(C,ee),e(C,Ke),e(Ke,Zt)},p:xl,d(o){o&&t(p),o&&t(y),o&&t(v),o&&t(Ue),o&&t(U),o&&t(ze),o&&t(h),o&&t(Me),o&&t(X),o&&t(Re),o&&t(w),o&&t(Xe),o&&t(N),o&&t(Ne),o&&t(G),o&&t(Ge),o&&t($),o&&t($e),o&&t(D),o&&t(je),o&&t(J),o&&t(Je),o&&t(H),o&&t(Qe),o&&t(V),o&&t(Ye),o&&t(Z)}}}function Hl(F){let p,A;const y=[F[0],no];let v={$$slots:{default:[Cl]},$$scope:{ctx:F}};for(let _=0;_<y.length;_+=1)v=io(v,y[_]);return p=new Il({props:v}),{c(){El(p.$$.fragment)},l(_){wl(p.$$.fragment,_)},m(_,E){Al(p,_,E),A=!0},p(_,[E]){const B=E&1?yl(y,[E&1&&cl(_[0]),E&0&&cl(no)]):{};E&2&&(B.$$scope={dirty:E,ctx:_}),p.$set(B)},i(_){A||(Sl(p.$$.fragment,_),A=!0)},o(_){gl(p.$$.fragment,_),A=!1},d(_){kl(p,_)}}}const no={title:"AutoHotKey \u7B46\u8A18",date:"2022-06-11T23:36:19.000Z",summary:"",tags:"Toolbox"};function Ll(F,p,A){return F.$$set=y=>{A(0,p=io(io({},p),ul(y)))},p=ul(p),[p]}class Pl extends hl{constructor(p){super(),ml(this,p,Ll,Hl,vl,{})}}var bl=Object.freeze(Object.defineProperty({__proto__:null,default:Pl,metadata:no},Symbol.toStringTag,{value:"Module"}));export{Pl as A,bl as _,no as m};
