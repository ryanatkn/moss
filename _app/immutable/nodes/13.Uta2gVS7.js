import{a as g,t as x,c as t,r as a,f as Y,b as e,s as T}from"../chunks/disclose-version.DmEdRbAM.js";import{p as D,a as W,g as d,t as n,d as E,C as S}from"../chunks/runtime.DQLNIWkh.js";import{g as A,i as I}from"../chunks/attributes.CS5iO7kD.js";import{s as M}from"../chunks/style.iv2mhl8q.js";import{T as j}from"../chunks/Tome_Detail.DwMifZYs.js";import{a as k}from"../chunks/tome.BbggBCby.js";import{T as R}from"../chunks/Tome_Subheading.BNGsokwu.js";import{s as q}from"../chunks/variables.DHXR6JaE.js";import{S as B}from"../chunks/Style_Variable_Button.CcGihuV_.js";var F=x('<div class="layout_example svelte-114iz3d"><div class="fill svelte-114iz3d"></div> <div class="variable_wrapper svelte-114iz3d"><!></div> <span class="pr_sm">=</span> <div class="computed_value svelte-114iz3d"> </div></div>'),G=x('<div class="layout_example svelte-114iz3d"><div class="fill svelte-114iz3d"></div> <div class="variable_wrapper svelte-114iz3d"><!></div> <span class="pr_sm">=</span> <div class="computed_value svelte-114iz3d"> </div></div>'),H=x("<section><!> <div></div></section> <section><!> <div></div></section>",1);function se(P,V){D(V,!0);const C=k("layout"),v=typeof window>"u"?null:window.getComputedStyle(document.documentElement);j(P,{tome:C,children:(L,K)=>{var h=H(),p=Y(h),w=t(p);R(w,{text:"Space variables",slug:"space-variables"});var b=e(e(w,!0));A(b,73,()=>q,I,(_,m,N)=>{var r=F();const s=E(()=>"space_"+S(m));var o=t(r),i=e(e(o,!0)),c=t(i);B(c,{get name(){return d(s)}}),a(i);var u=e(e(i,!0)),l=e(e(u,!0)),f=t(l);n(()=>T(f,v==null?void 0:v.getPropertyValue("--"+d(s)))),a(l),a(r),n(()=>M(o,"width",`var(--${d(s)??""})`)),g(_,r)}),a(b),a(p);var $=e(e(p,!0)),z=t($);R(z,{text:"Width variables",slug:"width-variables"});var y=e(e(z,!0));A(y,73,()=>["xs","sm","md"],I,(_,m,N)=>{var r=G();const s=E(()=>"width_"+S(m));var o=t(r),i=e(e(o,!0)),c=t(i);B(c,{get name(){return d(s)}}),a(i);var u=e(e(i,!0)),l=e(e(u,!0)),f=t(l);n(()=>T(f,v==null?void 0:v.getPropertyValue("--"+d(s)))),a(l),a(r),n(()=>M(o,"width",`var(--${d(s)??""})`)),g(_,r)}),a(y),a($),g(L,h)},$$slots:{default:!0}}),W()}export{se as component};
