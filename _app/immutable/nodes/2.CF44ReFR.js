import{e as I,f as P,a as r,c as o,s as t,z as Z,r as s,t as f,_ as fe,a0 as ye,I as ce}from"../chunks/disclose-version.gZ-2tz3Z.js";import{r as xe,h as $e,K as ke,p as C,a as F,v as W,g as b,m as ee,t as R,d as O,J as w,Q as ae}from"../chunks/runtime.4yfH9i_8.js";import{i as L,p as se}from"../chunks/props.BD3-fUzo.js";import{b as S,e as re,a as ve}from"../chunks/attributes.CPiNokUc.js";import{s as V}from"../chunks/render.nIEHh2HH.js";import{p as we}from"../chunks/proxy.BzgpQmmp.js";import{l as ze}from"../chunks/input.GgA3caM1.js";import{b as Le,o as Pe}from"../chunks/entry.C71YrBqa.js";import{B as te}from"../chunks/Breadcrumb.CEKwU3V_.js";import{s as je,i as Te}from"../chunks/tome.DlDF76X-.js";import{t as U}from"../chunks/class.BFlSs2mH.js";import{s as X,a as q,p as G}from"../chunks/stores.diKzrObn.js";import{i as Ne}from"../chunks/Color_Scheme_Input.DY4471Tv.js";import{t as me,s as _e}from"../chunks/index.LoIJQWn0.js";import{g as Ae,s as Ee}from"../chunks/Tome_Detail.CrMcQOCW.js";import{D as ue,_ as Ie,S as Oe}from"../chunks/16.Xmg02L2p.js";import{L as Re,M as le}from"../chunks/Moss_Logo.K3oiUljJ.js";import{component as Be}from"./12.DrEeqFtt.js";import{component as De}from"./9.AnF0HsDj.js";import{component as Me}from"./7.CdI6a8zm.js";import{component as Se}from"./11.DzBsiBKf.js";import{component as Ve}from"./10.CUGg8OHt.js";import{component as Ye}from"./8.1Clracvu.js";import{component as Ke}from"./17.4MP8ie1g.js";import{component as We}from"./18.zteOHQpZ.js";import{component as Ue}from"./13.DiQ1U0oa.js";import{component as Ce}from"./14.C00aO1x2.js";import{component as Fe}from"./15.BOk2shs_.js";import{component as Je}from"./6.B1DJnPNP.js";import{s as Qe}from"../chunks/Style_Variable_Button.CMqiypxa.js";import{g as Xe}from"../chunks/pkg.Z3b6FFHI.js";import{U as qe}from"../chunks/Unfinished_Implementation_Warning.WKqJHAkV.js";function Ge(y,e,x){var u=()=>{g=!0,clearTimeout(n),n=setTimeout($,100),x(window.scrollY)};addEventListener("scroll",u,{passive:!0});var g=!1,n,$=()=>{g=!1},d=!0;xe(()=>{var i=e();d?d=!1:!g&&i!=null&&(g=!0,clearTimeout(n),scrollTo(window.scrollX,i),n=setTimeout($,100))}),$e(u),ke(()=>{removeEventListener("scroll",u)})}function He(y,e){ze(window,["resize"],()=>e(window[y]))}var Ze=f('<div class="library_primary_nav svelte-1v06zp8"><div class="background svelte-1v06zp8" aria-hidden="true"></div> <div class="content svelte-1v06zp8"><nav class="svelte-1v06zp8"><!></nav> <!></div></div>');function ea(y,e){C(e,!0);const x=X(),u=()=>q(G,"$page",x),g=O(()=>u().url),n=O(()=>{let{pathname:p}=b(g);return[p]}),$=O(()=>b(n)[0]),d=O(()=>b($)==="/"),k=!Ne();let c=ee(0);const a=O(()=>b(c)>0);var v=I(),_=P(v);L(_,()=>k,p=>{var l=Ze(),m=o(l),N=t(t(m,!0)),j=o(N),B=o(j);te(B,{children:(A,z)=>{var T=I(),D=P(T);L(D,()=>e.breadcrumb_children,Y=>{var E=I(),K=P(E);S(K,()=>e.breadcrumb_children,()=>!0),r(Y,E)},Y=>{var E=Z();R(()=>V(E,e.pkg.package_json.glyph??"🏠")),r(Y,E)}),r(A,T)},$$slots:{default:!0}}),s(j);var h=t(t(j,!0));L(h,()=>e.children,A=>{var z=I(),T=P(z);S(T,()=>e.children),r(A,z)}),s(N),s(l),R(()=>{U(l,"scrolled",b(a)),U(j,"selected_root",b(d))}),r(p,l)}),Ge("y",()=>b(c),p=>W(c,p)),r(y,v),F()}var aa=f("<h6> </h6>"),ra=f('<li role="none"><a class="menu_item svelte-1rxe5ap"> </a></li>'),ta=f('<li class="category svelte-1rxe5ap"><!> <ul class="unstyled svelte-1rxe5ap"></ul></li>'),sa=f('<ul class="library_menu unstyled svelte-1rxe5ap"></ul>');function ge(y,e){C(e,!0);const x=X(),u=()=>q(G,"$page",x),g=O(()=>e.tomes.reduce((d,i)=>(i.category in d||(d[i.category]=[]),d[i.category].push(i),d),{}));var n=sa();re(n,79,()=>Object.entries(b(g)),(d,i)=>w(w(d))[0],(d,i,k)=>{let c=()=>w(w(i))[0],a=()=>w(w(i))[1];var v=ta(),_=o(v);L(_,()=>e.children,l=>{var m=I(),N=P(m);S(N,()=>e.children,c),r(l,m)},l=>{var m=aa(),N=o(m);s(m),R(()=>V(N,c())),r(l,m)});var p=t(t(_,!0));re(p,77,a,(l,m)=>w(l).slug,(l,m,N)=>{var j=ra();me(3,j,()=>_e);var B=o(j),h=o(B);s(B),s(j),R(()=>{ve(B,"href",`${Le??""}/library/${w(m).slug??""}`),U(B,"selected",w(m).pathname===u().url.pathname),V(h,w(m).name)}),r(l,j)}),s(p),s(v),r(d,v)}),s(n),r(y,n),F()}var oa=f('<aside class="library_secondary_nav unstyled svelte-3z2jtl"><nav><!></nav></aside>');function ie(y,e){const x=se(e,"sidebar",3,!0);var u=oa(),g=o(u),n=o(g);ge(n,{get tomes(){return e.tomes}}),s(g),s(u),R(()=>U(u,"sidebar",x())),r(y,u)}var na=f('<li role="none"><a class="menu_item svelte-puyjaz"> </a></li>'),la=f('<ul class="unstyled svelte-puyjaz"></ul>'),ia=f('<div class="sidebar_wrapper svelte-puyjaz"><!></div>'),da=f('<div class="library_page_links svelte-puyjaz"><h6>On this page</h6> <!></div>');function ca(y,e){C(e,!0);const x=X(),u=()=>q(G,"$page",x),g=c=>{var a=la();re(a,77,()=>e.library_links.library_links,(v,_)=>w(v).id,(v,_,p)=>{var l=na();me(3,l,()=>_e);var m=o(l),N=o(m);s(m),s(l),R(()=>{U(l,"pl_xl4",w(_).tag==="h4"),ve(m,"href",`#${w(_).slug??""}`),U(m,"selected",w(_).slug===b($)),V(N,w(_).text)}),r(v,l)}),s(a),r(c,a)},n=se(e,"sidebar",3,!0),$=O(()=>u().url.hash.slice(1));var d=da(),i=o(d),k=t(t(i,!0));L(k,n,c=>{var a=ia(),v=o(a);g(v),s(a),r(c,a)},c=>{g(c)}),s(d),r(y,d),F()}var va=f("<h6> </h6>"),ma=f('<aside class="library_tertiary_nav unstyled svelte-vi1gc0"><!> <!></aside>');function de(y,e){C(e,!0);const x=X(),u=()=>q(G,"$page",x),g=se(e,"sidebar",3,!0),n=O(()=>e.tomes.find(a=>a.pathname===u().url.pathname)),$=O(()=>{var a;return(a=b(n))==null?void 0:a.related.map(v=>e.tomes_by_name.get(v))}),d=Ae();var i=ma(),k=o(i);L(k,()=>{var a;return(a=b($))==null?void 0:a.length},a=>{ge(a,{get tomes(){return b($)},children:(_,p=ae)=>{var l=va(),m=o(l);s(l),R(()=>V(m,`related ${p()??""}`)),r(_,l)}})});var c=t(t(k,!0));L(c,()=>d.library_links.length>1,a=>{ca(a,{library_links:d,get sidebar(){return g()}})}),s(i),r(y,i),F()}var _a=(y,e)=>e(),ua=f('<div class="nav_dialog_toggle svelte-185hm91"><button class="plain svelte-185hm91" type="button">menu</button></div>'),ga=f('<div class="secondary_nav_wrapper svelte-185hm91"><!></div>'),pa=f('<div class="mb_xl5"><!></div>'),ha=f('<div class="pane"><div class="p_xl pb_0"><!></div> <div class="px_lg pb_xl"><!> <!></div></div>'),ba=f('<div class="library svelte-185hm91"><!> <!> <main><div class="content svelte-185hm91"><!> <!> <section class="box svelte-185hm91"><!></section></div></main></div> <!>',1);function fa(y,e){C(e,!0);const x=new Map(e.tomes.map(h=>[h.name,h]));je(x);const u=1e3,g=800;let n=ee(void 0),$=ee(!1);const d=h=>{W($,we(h??!b($)))};Pe(()=>{W($,!1)}),Ee();var i=ba();fe("hashchange",ye,()=>W($,!1),!1);var k=P(i),c=o(k);ea(c,{get pkg(){return e.pkg},get breadcrumb_children(){return e.breadcrumb_children},children:(h,A)=>{var z=ua(),T=o(z);T.__click=[_a,d],s(z),r(h,z)},$$slots:{default:!0}});var a=t(t(c,!0));L(a,()=>!b(n)||b(n)>g,h=>{var A=ga(),z=o(A);ie(z,{get tomes(){return e.tomes}}),s(A),r(h,A)});var v=t(t(a,!0)),_=o(v),p=o(_);S(p,()=>e.children);var l=t(t(p,!0));L(l,()=>!b(n)||b(n)>u,h=>{de(h,{get tomes(){return e.tomes},tomes_by_name:x})});var m=t(t(l,!0)),N=o(m);Re(N,{get pkg(){return e.pkg},children:(h,A)=>{var z=pa(),T=o(z);te(T,{children:(D,Y)=>{var E=I(),K=P(E);L(K,()=>e.breadcrumb_children,J=>{var M=I(),oe=P(M);S(oe,()=>e.breadcrumb_children,()=>!1),r(J,M)},J=>{var M=Z();R(()=>V(M,e.pkg.package_json.glyph??"🏠")),r(J,M)}),r(D,E)},$$slots:{default:!0}}),s(z),r(h,z)},$$slots:{default:!0}}),s(m),s(_),s(v),s(k);var j=t(k,!0);j.nodeValue="  ";var B=t(j);L(B,()=>b($)&&b(n)&&b(n)<=u,h=>{ue(h,{onclose:()=>W($,!1),children:(A,z)=>{var T=ha(),D=o(T),Y=o(D);te(Y,{children:(M,oe)=>{var ne=I(),he=P(ne);L(he,()=>e.breadcrumb_children,H=>{var Q=I(),be=P(Q);S(be,()=>e.breadcrumb_children,()=>!1),r(H,Q)},H=>{var Q=Z();R(()=>V(Q,e.pkg.package_json.glyph??"🏠")),r(H,Q)}),r(M,ne)},$$slots:{default:!0}}),s(D);var E=t(t(D,!0)),K=o(E);ie(K,{get tomes(){return e.tomes},sidebar:!1});var J=t(t(K,!0));de(J,{get tomes(){return e.tomes},tomes_by_name:x,sidebar:!1}),s(E),s(T),r(A,T)},$$slots:{default:!0}})}),He("innerWidth",h=>W(n,h)),r(y,i),F()}ce(["click"]);const pe=[{name:"introduction",slug:"introduction",pathname:"",category:"guide",component:Be,related:[]},{name:"themes",slug:"themes",pathname:"",category:"systems",component:Ie,related:["variables","colors","typography"]},{name:"variables",slug:"variables",pathname:"",category:"systems",component:We,related:["themes"]},{name:"classes",slug:"classes",pathname:"",category:"systems",component:Ye,related:["elements"]},{name:"colors",slug:"colors",pathname:"",category:"styles",component:De,related:["themes","buttons","borders","shading","shadows"]},{name:"buttons",slug:"buttons",pathname:"",category:"styles",component:Me,related:["colors","elements","forms","borders"]},{name:"elements",slug:"elements",pathname:"",category:"styles",component:Ve,related:["buttons","forms","classes","typography","borders","layout"]},{name:"forms",slug:"forms",pathname:"",category:"styles",component:Se,related:["buttons","elements","borders"]},{name:"typography",slug:"typography",pathname:"",category:"styles",component:Ke,related:["themes","elements"]},{name:"borders",slug:"borders",pathname:"",category:"styles",component:Je,related:["colors","buttons","elements","forms","shading","shadows"]},{name:"shading",slug:"shading",pathname:"",category:"styles",component:Ce,related:["colors","borders","shadows"]},{name:"shadows",slug:"shadows",pathname:"",category:"styles",component:Fe,related:["colors","borders","shading"]},{name:"layout",slug:"layout",pathname:"",category:"styles",component:Ue,related:["elements"]}];for(const y of pe)Te(y);var ya=f('<div class="icon row"><!> <span class="ml_sm">moss</span></div>'),xa=f('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),$a=f("<!> <!>",1);function ar(y,e){C(e,!0);const x=Qe(),u=Xe();var g=$a(),n=P(g);fa(n,{tomes:pe,pkg:u,breadcrumb_children:(i,k=ae)=>{var c=I(),a=P(c);L(a,k,v=>{var _=ya(),p=o(_);le(p,{size:"32px"}),t(t(p,!0)),s(_),r(v,_)},v=>{le(v,{size:"32px"})}),r(i,c)},children:(i,k)=>{var c=I(),a=P(c);S(a,()=>e.children),r(i,c)},$$slots:{default:!0}});var $=t(t(n,!0));L($,()=>x.value,d=>{ue(d,{onclose:()=>x.value=null,children:(k,c=ae)=>{var a=xa(),v=o(a),_=o(v);Oe(_,{get variable(){return x.value}});var p=t(t(_,!0));qe(p,{});var l=t(t(p,!0));l.__click=c(),s(v),s(a),r(k,a)}})}),r(y,g),F()}ce(["click"]);export{ar as component};
