import{a as r,C as Vt,t as d,c as n,b as t,f as Xt,s as p}from"../chunks/disclose-version.Dj_2BLBP.js";import{p as Zt,a as te,g as e,t as _t,k as f,j as M,d as vt,D as ee}from"../chunks/runtime.DKCg-osn.js";import{i as pt}from"../chunks/props.RUSqrPC9.js";import{g as oe,i as ne}from"../chunks/attributes.BdgSbWfL.js";import{t as o,s as m}from"../chunks/class.BxNEB1ir.js";import{t as se,s as ae}from"../chunks/index.Cs9X78LW.js";import{C as a}from"../chunks/Code.KxK97Poa.js";import{T as ue}from"../chunks/Tome_Detail.DFNAXc5X.js";import{a as be}from"../chunks/tome.BQsYDXN1.js";import{C as ce}from"../chunks/Color_Scheme_Input.DX7I1GLM.js";import{T as I}from"../chunks/Tome_Subheading.Da9i9VJk.js";import{U as le}from"../chunks/Unfinished_Implementation_Warning.X1eaJbBC.js";var re=(i,u)=>f(u,!e(u)),de=d("<div>clicked a button</div>"),ie=d(`Button colors will likely change significantly. Either fill will be an optional variant, or
			selected will be changed to be filled. In either case, unselected colored buttons will be less
			pronounced to be like the default but colored.`,1),_e=d('<section><!> <button type="button"> </button> <button type="button" disabled> </button> <button type="button"> </button> <button type="button" disabled> </button> <button type="button"> </button> <button type="button" disabled> </button></section>'),ve=d("With <code>.selected</code>",1),pe=(i,u)=>f(u,0),me=(i,u)=>f(u,1),fe=(i,u)=>f(u,2),he=(i,u)=>f(u,!e(u)),ge=d("<code>.selected</code>"),ye=d("unselected",1),xe=d("With <code>.plain</code> and <code>.icon_button</code>",1),$e=d(`<section><div class="mb_lg"><!> <button type="button">a button</button> <!></div> <p>Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state.
			Instead of having two distinct styles of buttons with outlined and filled variants, Moss makes
			filled buttons the default, and selected buttons are outlined. There's also the <code>.deselectable</code> modifier class for buttons that can be clicked when selected. Themes
			can customize this behavior.</p> <button type="button" disabled>disabled button</button> <button type="button" class="selected">button.selected</button> <button type="button" class="selected" disabled>disabled button.selected</button> <button type="button" class="selected deselectable">button.selected.deselectable</button> <button type="button" class="selected deselectable" disabled>disabled button.selected.deselectable</button></section> <section><!> <!> <!> <div class="box w_100 mb_lg"><!></div></section> <!> <section><!> <button type="button" disabled>:|</button></section> <section><!> <button type="button" disabled>a bigger disabled button</button></section> <section><!> <nav><button type="button">button 0</button> <button type="button">button 1</button> <button type="button">button 2</button></nav></section> <section><!> <button type="button" class="w_100 selected">a button with <code>.selected</code></button></section> <section><p><code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when selected:</p> <!></section> <section><button type="button" class="w_100 deselectable">a <code>.deselectable</code> <!> button</button> <button type="button" class="w_100 selected deselectable" disabled>disabled <code>.deselectable</code> <code>.selected</code></button></section> <section><!> <!> <button type="button" class="plain">+</button> <button type="button" class="plain mb_lg" disabled>+</button> <!> <button type="button" class="icon_button">+</button> <button type="button" class="icon_button mb_lg" disabled>+</button> <!> <button type="button" class="plain icon_button">+</button> <button type="button" class="plain icon_button" disabled>+</button> <h4><code>.selected</code> variants</h4> <!> <button type="button" class="plain selected mb_lg">+</button> <!> <button type="button" class="icon_button selected mb_lg">+</button> <!> <button type="button" class="plain icon_button selected">+</button> <h4><code>.selected</code> and <code>.deselectable</code> variants</h4> <!> <button type="button" class="plain selected deselectable mb_lg">+</button> <!> <button type="button" class="icon_button selected deselectable mb_lg">+</button> <!> <button type="button" class="plain icon_button selected deselectable">+</button></section>`,1);function Le(i,u){Zt(u,!0);const mt=be("buttons");let A=M(!1),_=M(1),T=M(!0);const ft=["a","b","c","d","e","f","g"],s=!0;ue(i,{tome:mt,children:(ht,we)=>{var B=$e(),P=Xt(B),R=n(P),U=n(R);a(U,{content:"<button>a button</button>"});var D=t(t(U,!0));D.__click=[re,A];var gt=t(t(D,!0));pt(gt,()=>e(A),b=>{var l=de();se(3,l,()=>ae),r(b,l)});var yt=t(t(R,!0)),L=t(t(yt,!0));o(L,"mb_xs",s);var N=t(t(L,!0));o(N,"mb_xs",s);var S=t(t(N,!0));o(S,"mb_xs",s);var Y=t(t(S,!0));o(Y,"mb_xs",s);var xt=t(t(Y,!0));o(xt,"mb_xs",s);var j=t(t(P,!0)),z=n(j);I(z,{text:"Colorful buttons",slug:"colorful-buttons"});var q=t(t(z,!0));le(q,{children:(b,l)=>{var v=ie();r(b,v)},$$slots:{default:!0}});var F=t(t(q,!0));oe(F,65,()=>ft,ne,(b,l,v)=>{var dt=_e();const c=vt(()=>`color_${ee(l)}`);var it=n(dt),Ft=vt(()=>`<button class="${e(c)}">`);a(it,{get content(){return e(Ft)}});var y=t(t(it,!0)),Gt=n(y),x=t(t(y,!0)),Ht=n(x),$=t(t(x,!0)),Jt=n($),k=t(t($,!0)),Kt=n(k),w=t(t(k,!0)),Ot=n(w),E=t(t(w,!0)),Qt=n(E);_t(()=>{m(y,e(c)),o(y,"mb_xs",s),p(Gt,`.${e(c)??""}`),m(x,e(c)),o(x,"mb_xs",s),p(Ht,`disabled .${e(c)??""}`),m($,`${e(c)??""} selected`),o($,"mb_xs",s),p(Jt,`.${e(c)??""}.selected`),m(k,`${e(c)??""} selected`),o(k,"mb_xs",s),p(Kt,`disabled .${e(c)??""}.selected`),m(w,`${e(c)??""} selected deselectable`),o(w,"mb_xs",s),p(Ot,`.${e(c)??""}.selected.deselectable`),m(E,`${e(c)??""} selected deselectable`),o(E,"mb_xs",s),p(Qt,`disabled .${e(c)??""}.selected.deselectable`)}),r(b,dt)});var $t=t(t(F,!0)),kt=n($t);ce(kt,{});var G=t(t(j,!0));I(G,{text:"With disabled attribute",slug:"disabled-attribute"});var H=t(t(G,!0)),wt=n(H);a(wt,{content:`<button disabled>
	:|
</button>`});var J=t(t(H,!0)),It=n(J);a(It,{content:`<button disabled>
	a bigger disabled button
</button>`});var K=t(t(J,!0)),O=n(K);I(O,{text:"With .selected",slug:"selected-class",children:(b,l)=>{var v=ve();r(b,v)},$$slots:{default:!0}});var Tt=t(t(O,!0)),h=n(Tt);h.__click=[pe,_],o(h,"mb_xs",s);var g=t(t(h,!0));g.__click=[me,_],o(g,"mb_xs",s);var C=t(t(g,!0));C.__click=[fe,_],o(C,"mb_xs",s);var Q=t(t(K,!0)),Ct=n(Q);a(Ct,{content:'<button class="selected">...</button>'});var V=t(t(Q,!0)),Wt=n(V),Et=t(t(Wt,!0));a(Et,{content:`<button class="selected deselectable">
	...
</button>`});var X=t(t(V,!0)),W=n(X);W.__click=[he,T];var Mt=t(n(W)),At=t(t(Mt,!0));pt(At,()=>e(T),b=>{var l=ge();r(b,l)},b=>{var l=ye();r(b,l)});var Bt=t(t(X,!0)),Z=n(Bt);I(Z,{text:"With .plain and .icon_button",slug:"plain-and-icon_button",children:(b,l)=>{var v=xe();r(b,v)},$$slots:{default:!0}});var tt=t(t(Z,!0));a(tt,{content:`<button class="plain">
	+
</button>`});var et=t(t(tt,!0));o(et,"mb_xs",s);var Pt=t(t(et,!0)),ot=t(t(Pt,!0));a(ot,{content:`<button class="icon_button">
	+
</button>`});var nt=t(t(ot,!0));o(nt,"mb_xs",s);var Rt=t(t(nt,!0)),st=t(t(Rt,!0));a(st,{content:`<button class="plain icon_button">
	+
</button>`});var at=t(t(st,!0));o(at,"mb_xs",s);var Ut=t(t(at,!0)),Dt=t(t(Ut,!0)),ut=t(t(Dt,!0));a(ut,{content:`<button class="plain selected">
	+
</button>`});var Lt=t(t(ut,!0)),bt=t(t(Lt,!0));a(bt,{content:`<button class="icon_button selected">
	+
</button>`});var Nt=t(t(bt,!0)),ct=t(t(Nt,!0));a(ct,{content:`<button class="plain icon_button selected">
	+
</button>`});var St=t(t(ct,!0)),Yt=t(t(St,!0)),lt=t(t(Yt,!0));a(lt,{content:`<button class="plain selected deselectable">
	+
</button>`});var jt=t(t(lt,!0)),rt=t(t(jt,!0));a(rt,{content:`<button class="icon_button selected deselectable">
	+
</button>`});var zt=t(t(rt,!0)),qt=t(t(zt,!0));a(qt,{content:`<button class="plain icon_button selected deselectable">
	+
</button>`}),_t(()=>{o(h,"selected",e(_)===0),o(g,"selected",e(_)===1),o(C,"selected",e(_)===2),o(W,"selected",e(T))}),r(ht,B)},$$slots:{default:!0}}),te()}Vt(["click"]);export{Le as component};