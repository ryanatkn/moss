import{a as p,t as m,b as kt,j as wt}from"../chunks/disclose-version.B3so9ulc.js";import{p as Tt,f as N,a as It,I as Y,l as o,ae as J,s as t,t as ct,c as a,r as b,n as f,m as dt}from"../chunks/runtime.DbdpX3ac.js";import{s as T}from"../chunks/render.jjSlWHqM.js";import{i as ut}from"../chunks/if.DAJkPoPR.js";import{t as e,e as Pt,i as Ct,h as I}from"../chunks/context_helpers.DgszPr9j.js";import{t as Mt,s as Wt}from"../chunks/index.DmjGKYg2.js";import{C as l}from"../chunks/Code.DscxxGaH.js";import{T as At}from"../chunks/Tome_Content.CYPuSkb-.js";import{g as Et}from"../chunks/tome.BSNn2bHY.js";import{C as rt}from"../chunks/Color_Scheme_Input.CMbMhRDw.js";import{T as H,a as U}from"../chunks/Tome_Section_Header.BKAwT14U.js";import{c as Rt}from"../chunks/variable_data.Cy_5qU0o.js";var Bt=(M,c)=>Y(c,!o(c)),St=m("<div>clicked a button</div>"),Lt=m('<section><!> <button type="button"> </button> <button type="button" disabled> </button> <button type="button"> </button> <button type="button" disabled> </button> <button type="button"> </button> <button type="button" disabled> </button> <button type="button"> </button> <button type="button" disabled> </button></section>'),Nt=m('<!> <!> <div class="box w_100 mb_lg"><!></div>',1),Yt=m('<!> <!> <button type="button" disabled>:|</button> <button type="button" disabled>a bigger disabled button</button>',1),jt=m("With <code>.selected</code>",1),zt=(M,c)=>Y(c,0),Ht=(M,c)=>Y(c,1),Ut=(M,c)=>Y(c,2),qt=(M,c)=>Y(c,!o(c)),Dt=m("<code>.selected</code>"),Ft=m(`<!> <nav><button type="button">button 0</button> <button type="button">button 1</button> <button type="button">button 2</button></nav> <section><!> <button type="button" class="w_100 selected">a button with <code>.selected</code></button></section> <section><p><code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when
				selected:</p> <!></section> <section><button type="button" class="w_100 deselectable">a <code>.deselectable</code> <!> button</button> <button type="button" class="w_100 selected deselectable" disabled>disabled <code>.deselectable</code> <code>.selected</code></button></section>`,1),Gt=m("With <code>.plain</code> and <code>.icon_button</code>",1),Jt=m('<!> <!> <button type="button" class="plain">+</button> <button type="button" class="plain mb_lg" disabled>+</button> <!> <button type="button" class="icon_button">+</button> <button type="button" class="icon_button mb_lg" disabled>+</button> <!> <button type="button" class="plain icon_button">+</button> <button type="button" class="plain icon_button" disabled>+</button> <h4><code>.selected</code> variants</h4> <!> <button type="button" class="plain selected mb_lg">+</button> <!> <button type="button" class="icon_button selected mb_lg">+</button> <!> <button type="button" class="plain icon_button selected">+</button> <h4><code>.selected</code> and <code>.deselectable</code> variants</h4> <!> <button type="button" class="plain selected deselectable mb_lg">+</button> <!> <button type="button" class="icon_button selected deselectable mb_lg">+</button> <!> <button type="button" class="plain icon_button selected deselectable">+</button>',1),Kt=m(`<section><p>Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state.
			Instead of having two distinct styles of buttons with outlined and filled variants, Moss makes
			filled buttons the default, and selected buttons are outlined. There's also the <code>.deselectable</code> modifier class for buttons that can be clicked when selected. Themes
			can customize this behavior.</p> <div><!> <button type="button">a button</button> <!></div> <button type="button" disabled>button:disabled</button> <button type="button" class="plain">button.plain</button> <button type="button" class="plain" disabled>button.plain:disabled</button> <button type="button" class="selected">button.selected</button> <button type="button" class="selected" disabled>button.selected:disabled</button> <button type="button" class="selected deselectable">button.selected.deselectable</button> <button type="button" class="selected deselectable" disabled>button.selected.deselectable:disabled</button></section> <section><div class="box w_100 mb_lg"><!></div></section> <!> <!> <!> <!>`,1);function de(M,c){Tt(c,!0);const _t=Et("buttons");let K=J(!1),W=J(1),q=J(!0);const s=!0;At(M,{tome:_t,children:(it,Qt)=>{var O=Kt(),D=N(O),j=t(a(D),2);e(j,"mb_xs",s);var Q=a(j);l(Q,{content:"<button>a button</button>"});var V=t(Q,2);V.__click=[Bt,K];var vt=t(V,2);ut(vt,()=>o(K),x=>{var A=St();Mt(3,A,()=>Wt),p(x,A)}),b(j);var X=t(j,2);e(X,"mb_xs",s);var Z=t(X,2);e(Z,"mb_xs",s);var tt=t(Z,2);e(tt,"mb_xs",s);var et=t(tt,2);e(et,"mb_xs",s);var ot=t(et,2);e(ot,"mb_xs",s);var nt=t(ot,2);e(nt,"mb_xs",s);var pt=t(nt,2);e(pt,"mb_xs",s),b(D);var F=t(D,2),st=a(F),mt=a(st);rt(mt,{}),b(st),b(F);var at=t(F,2);H(at,{children:(x,A)=>{var i=Nt(),v=N(i);U(v,{text:"Colorful buttons"});var r=t(v,2);Pt(r,17,()=>Rt,Ct,(y,h)=>{var g=Lt();const n=dt(()=>`color_${o(h)}`);var P=a(g),C=dt(()=>`<button class="${o(n)}">`);l(P,{get content(){return o(C)}});var d=t(P,2),E=a(d);b(d);var u=t(d,2),k=a(u);b(u);var w=t(u,2),G=a(w);b(w);var R=t(w,2),$t=a(R);b(R);var B=t(R,2),ft=a(B);b(B);var S=t(B,2),yt=a(S);b(S);var L=t(S,2),ht=a(L);b(L);var z=t(L,2),gt=a(z);b(z),b(g),ct(()=>{I(d,o(n)),e(d,"mb_xs",s),T(E,`.${o(n)??""}`),I(u,o(n)),e(u,"mb_xs",s),T(k,`.${o(n)??""}:disabled`),I(w,`${o(n)??""} plain`),e(w,"mb_xs",s),T(G,`.${o(n)??""}.plain`),I(R,`${o(n)??""} plain`),e(R,"mb_xs",s),T($t,`.${o(n)??""}.plain:disabled`),I(B,`${o(n)??""} selected`),e(B,"mb_xs",s),T(ft,`.${o(n)??""}.selected`),I(S,`${o(n)??""} selected`),e(S,"mb_xs",s),T(yt,`.${o(n)??""}.selected:disabled`),I(L,`${o(n)??""} selected deselectable`),e(L,"mb_xs",s),T(ht,`.${o(n)??""}.selected.deselectable`),I(z,`${o(n)??""} selected deselectable`),e(z,"mb_xs",s),T(gt,`.${o(n)??""}.selected.deselectable:disabled`)}),p(y,g)});var _=t(r,2),$=a(_);rt($,{}),b(_),p(x,i)},$$slots:{default:!0}});var bt=t(at,2);H(bt,{children:(x,A)=>{var i=Yt(),v=N(i);U(v,{text:"With disabled attribute"});var r=t(v,2);l(r,{content:`<button disabled>
	:|
</button>`});var _=t(r,2);e(_,"mb_xs",s),f(2),p(x,i)},$$slots:{default:!0}});var lt=t(bt,2);H(lt,{children:(x,A)=>{var i=Ft(),v=N(i);U(v,{text:"With .selected",children:(u,k)=>{f();var w=jt();f(),p(u,w)},$$slots:{default:!0}});var r=t(v,2),_=a(r);_.__click=[zt,W],e(_,"mb_xs",s);var $=t(_,2);$.__click=[Ht,W],e($,"mb_xs",s);var y=t($,2);y.__click=[Ut,W],e(y,"mb_xs",s),b(r);var h=t(r,2),g=a(h);l(g,{content:'<button class="selected">...</button>'}),f(2),b(h);var n=t(h,2),P=t(a(n),2);l(P,{content:`<button class="selected deselectable">
	...
</button>`}),b(n);var C=t(n,2),d=a(C);d.__click=[qt,q];var E=t(a(d),3);ut(E,()=>o(q),u=>{var k=Dt();p(u,k)},u=>{var k=kt("unselected");p(u,k)}),f(),b(d),f(2),b(C),ct(()=>{e(_,"selected",o(W)===0),e($,"selected",o(W)===1),e(y,"selected",o(W)===2),e(d,"selected",o(q))}),p(x,i)},$$slots:{default:!0}});var xt=t(lt,2);H(xt,{children:(x,A)=>{var i=Jt(),v=N(i);U(v,{text:"With .plain and .icon_button",children:(k,w)=>{f();var G=Gt();f(3),p(k,G)},$$slots:{default:!0}});var r=t(v,2);l(r,{content:`<button class="plain">
	+
</button>`});var _=t(r,2);e(_,"mb_xs",s);var $=t(_,4);l($,{content:`<button class="icon_button">
	+
</button>`});var y=t($,2);e(y,"mb_xs",s);var h=t(y,4);l(h,{content:`<button class="plain icon_button">
	+
</button>`});var g=t(h,2);e(g,"mb_xs",s);var n=t(g,6);l(n,{content:`<button class="plain selected">
	+
</button>`});var P=t(n,4);l(P,{content:`<button class="icon_button selected">
	+
</button>`});var C=t(P,4);l(C,{content:`<button class="plain icon_button selected">
	+
</button>`});var d=t(C,6);l(d,{content:`<button class="plain selected deselectable">
	+
</button>`});var E=t(d,4);l(E,{content:`<button class="icon_button selected deselectable">
	+
</button>`});var u=t(E,4);l(u,{content:`<button class="plain icon_button selected deselectable">
	+
</button>`}),f(2),p(x,i)},$$slots:{default:!0}}),p(it,O)},$$slots:{default:!0}}),It()}wt(["click"]);export{de as component};