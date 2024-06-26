import{m as Zt,d as te,a as d,t as r,f as _t,c as n,b as t,s as v}from"../chunks/disclose-version.CV3ElF3D.js";import{p as ee,a as oe,h as e,t as vt,y as p,x as E,l as mt,X as ne}from"../chunks/runtime.C9BLlFkQ.js";import{i as pt}from"../chunks/props.DMEd9I1P.js";import{g as se,i as ae}from"../chunks/attributes.CCxnytQ2.js";import{t as o,s as m}from"../chunks/class.BTBrs2Gn.js";import{t as ce,s as be}from"../chunks/index.CjorDTN9.js";import{C as a}from"../chunks/Code.BWxoXet5.js";import{T as ue}from"../chunks/Tome_Detail.Dl8_yrjT.js";import{a as le}from"../chunks/tome.D1Gikq0z.js";import{C as de}from"../chunks/Color_Scheme_Input.DVJA5TnI.js";import{T as I}from"../chunks/Tome_Subheading.B2RReK3M.js";var re=(i,c)=>p(c,!e(c)),ie=r("<div>clicked a button</div>"),_e=r("<section><!> <button> </button> <button disabled> </button> <button> </button> <button disabled> </button> <button> </button> <button disabled> </button></section>"),ve=r("With <code>.selected</code>",1),me=(i,c)=>p(c,0),pe=(i,c)=>p(c,1),fe=(i,c)=>p(c,2),he=(i,c)=>p(c,!e(c)),ge=r("<code>.selected</code>"),xe=r("unselected",1),$e=r("With <code>.plain</code> and <code>.icon_button</code>",1),ke=r(`<section><div class="mb_lg"><!> <button>a button</button> <!></div> <p>Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state.
			Instead of having two distinct styles of buttons with outlined and filled variants, Moss makes
			filled buttons the default, and selected buttons are outlined. There's also the <code>.deselectable</code> modifier class for buttons that can be clicked when selected. Themes
			can customize this behavior.</p> <button disabled>disabled button</button> <button class="selected">button.selected</button> <button class="selected" disabled>disabled button.selected</button> <button class="selected deselectable">button.selected.deselectable</button> <button class="selected deselectable" disabled>disabled button.selected.deselectable</button></section> <section><!> <!> <div class="box w_100 mb_lg"><!></div></section> <!> <section><!> <button disabled>:|</button></section> <section><!> <button disabled>a bigger disabled button</button></section> <section><!> <nav><button>button 0</button> <button>button 1</button> <button>button 2</button></nav></section> <section><!> <button class="w_100 selected">a button with <code>.selected</code></button></section> <section><p><code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when selected:</p> <!></section> <section><button class="w_100 deselectable">a <code>.deselectable</code> <!> button</button> <button class="w_100 selected deselectable" disabled>disabled <code>.deselectable</code> <code>.selected</code></button></section> <section><!> <!> <button class="plain">+</button> <button class="plain mb_lg" disabled>+</button> <!> <button class="icon_button">+</button> <button class="icon_button mb_lg" disabled>+</button> <!> <button class="plain icon_button">+</button> <button class="plain icon_button" disabled>+</button> <h4><code>.selected</code> variants</h4> <!> <button class="plain selected mb_lg">+</button> <!> <button class="icon_button selected mb_lg">+</button> <!> <button class="plain icon_button selected">+</button> <h4><code>.selected</code> and <code>.deselectable</code> variants</h4> <!> <button class="plain selected deselectable mb_lg">+</button> <!> <button class="icon_button selected deselectable mb_lg">+</button> <!> <button class="plain icon_button selected deselectable">+</button></section>`,1);function Ne(i,c){ee(c,!0);const ft=le("buttons");let R=E(!1),_=E(1),C=E(!0);const ht=["a","b","c","d","e","f","g"],s=!0;var y=te(),gt=_t(y);ue(gt,{tome:ft,children:(xt,Te)=>{var B=ke(),P=_t(B),L=n(P),N=n(L);a(N,{content:"<button>a button</button>"});var S=t(t(N,!0));S.__click=[re,R];var $t=t(t(S,!0));pt($t,()=>e(R),u=>{var l=ie();ce(3,l,()=>be),d(u,l)});var kt=t(t(L,!0)),Y=t(t(kt,!0));o(Y,"mb_xs",s);var z=t(t(Y,!0));o(z,"mb_xs",s);var D=t(t(z,!0));o(D,"mb_xs",s);var U=t(t(D,!0));o(U,"mb_xs",s);var wt=t(t(U,!0));o(wt,"mb_xs",s);var X=t(t(P,!0)),j=n(X);I(j,{text:"Colorful buttons",slug:"colorful-buttons"});var q=t(t(j,!0));se(q,65,()=>ht,ae,(u,l,g)=>{var rt=_e();const b=mt(()=>`color_${ne(l)}`);var it=n(rt),Gt=mt(()=>`<button class="${e(b)}">`);a(it,{get content(){return e(Gt)}});var x=t(t(it,!0)),Ht=n(x),$=t(t(x,!0)),Jt=n($),k=t(t($,!0)),Kt=n(k),w=t(t(k,!0)),Ot=n(w),T=t(t(w,!0)),Qt=n(T),A=t(t(T,!0)),Vt=n(A);vt(()=>{m(x,e(b)),o(x,"mb_xs",s),v(Ht,`.${e(b)??""}`),m($,e(b)),o($,"mb_xs",s),v(Jt,`disabled .${e(b)??""}`),m(k,`${e(b)??""} selected`),o(k,"mb_xs",s),v(Kt,`.${e(b)??""}.selected`),m(w,`${e(b)??""} selected`),o(w,"mb_xs",s),v(Ot,`disabled .${e(b)??""}.selected`),m(T,`${e(b)??""} selected deselectable`),o(T,"mb_xs",s),v(Qt,`.${e(b)??""}.selected.deselectable`),m(A,`${e(b)??""} selected deselectable`),o(A,"mb_xs",s),v(Vt,`disabled .${e(b)??""}.selected.deselectable`)}),d(u,rt)});var Tt=t(t(q,!0)),It=n(Tt);de(It,{});var F=t(t(X,!0));I(F,{text:"With disabled attribute",slug:"disabled-attribute"});var G=t(t(F,!0)),Ct=n(G);a(Ct,{content:`<button disabled>
	:|
</button>`});var H=t(t(G,!0)),Mt=n(H);a(Mt,{content:`<button disabled>
	a bigger disabled button
</button>`});var J=t(t(H,!0)),K=n(J);I(K,{text:"With .selected",slug:"selected-class",children:(u,l)=>{var g=ve();d(u,g)},$$slots:{default:!0}});var Wt=t(t(K,!0)),f=n(Wt);f.__click=[me,_],o(f,"mb_xs",s);var h=t(t(f,!0));h.__click=[pe,_],o(h,"mb_xs",s);var M=t(t(h,!0));M.__click=[fe,_],o(M,"mb_xs",s);var O=t(t(J,!0)),At=n(O);a(At,{content:'<button class="selected">...</button>'});var Q=t(t(O,!0)),Et=n(Q),Rt=t(t(Et,!0));a(Rt,{content:`<button class="selected deselectable">
	...
</button>`});var V=t(t(Q,!0)),W=n(V);W.__click=[he,C];var yt=t(n(W)),Bt=t(t(yt,!0));pt(Bt,()=>e(C),u=>{var l=ge();d(u,l)},u=>{var l=xe();d(u,l)});var Pt=t(t(V,!0)),Z=n(Pt);I(Z,{text:"With .plain and .icon_button",slug:"plain-and-icon_button",children:(u,l)=>{var g=$e();d(u,g)},$$slots:{default:!0}});var tt=t(t(Z,!0));a(tt,{content:`<button class="plain">
	+
</button>`});var et=t(t(tt,!0));o(et,"mb_xs",s);var Lt=t(t(et,!0)),ot=t(t(Lt,!0));a(ot,{content:`<button class="icon_button">
	+
</button>`});var nt=t(t(ot,!0));o(nt,"mb_xs",s);var Nt=t(t(nt,!0)),st=t(t(Nt,!0));a(st,{content:`<button class="plain icon_button">
	+
</button>`});var at=t(t(st,!0));o(at,"mb_xs",s);var St=t(t(at,!0)),Yt=t(t(St,!0)),ct=t(t(Yt,!0));a(ct,{content:`<button class="plain selected">
	+
</button>`});var zt=t(t(ct,!0)),bt=t(t(zt,!0));a(bt,{content:`<button class="icon_button selected">
	+
</button>`});var Dt=t(t(bt,!0)),ut=t(t(Dt,!0));a(ut,{content:`<button class="plain icon_button selected">
	+
</button>`});var Ut=t(t(ut,!0)),Xt=t(t(Ut,!0)),lt=t(t(Xt,!0));a(lt,{content:`<button class="plain selected deselectable">
	+
</button>`});var jt=t(t(lt,!0)),dt=t(t(jt,!0));a(dt,{content:`<button class="icon_button selected deselectable">
	+
</button>`});var qt=t(t(dt,!0)),Ft=t(t(qt,!0));a(Ft,{content:`<button class="plain icon_button selected deselectable">
	+
</button>`}),vt(()=>{o(f,"selected",e(_)===0),o(h,"selected",e(_)===1),o(M,"selected",e(_)===2),o(W,"selected",e(C))}),d(xt,B)},$$slots:{default:!0}}),d(i,y),oe()}Zt(["click"]);export{Ne as component};