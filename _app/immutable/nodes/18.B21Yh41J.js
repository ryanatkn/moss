import{a as r,t as k,b as n}from"../chunks/disclose-version.B3so9ulc.js";import{p as z,f as x,a as B,c as l,l as M,s as t,n as o,r as i,m as W}from"../chunks/runtime.DbdpX3ac.js";import{e as j}from"../chunks/context_helpers.DgszPr9j.js";import{C as N}from"../chunks/Code.DscxxGaH.js";import{T as X}from"../chunks/Tome_Content.CYPuSkb-.js";import{T as Y}from"../chunks/Tome_Link.j_m1wusi.js";import{M as C}from"../chunks/Mdn_Link.BDqAxuPo.js";import{g as D}from"../chunks/tome.BSNn2bHY.js";import{T as F,a as H}from"../chunks/Tome_Section_Header.BKAwT14U.js";import{d as J}from"../chunks/variables.C064wX_m.js";import{S as q}from"../chunks/Style_Variable_Button.mIiaJi8O.js";import{M as G}from"../chunks/Module_Link.Dv4mqxzf.js";import{U as K}from"../chunks/Unfinished_Implementation_Warning.DGARwS3s.js";var O=k('<!> <!> <div class="variables svelte-tubmna"></div>',1),Q=k(`<section><p>Style variables, or just "variables" in Moss, are <!> that can be grouped into a <!>. Each variable can
			have values for light and/or dark <!>. They're design tokens with an API.</p> <p>The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			for both developers and end-users. Variables can be composed in multiple ways:</p> <ul><li>by CSS classes, both utility and component</li> <li>by other variables, both in calculations and to add useful semantics (e.g. <code>button_fill_hover</code> defaults to <code>fg_2</code> but can be themed independently)</li> <li>in JS like the <a href="https://svelte.dev/">Svelte</a> components in <a href="https://www.fuz.dev/">Fuz</a></li></ul> <p>Variables also provide an interface that's generally secure for user-generated content, if
			you're into that kind of thing.</p> <p>The result is a flexible system that aligns with modern CSS to deliver high-capability UX and
			DX with minimal overhead.</p></section> <section><div class="mb_md"><!></div> <!></section> <!>`,1);function he(w,P){z(P,!0);const A=D("variables"),v=J.slice().sort((m,f)=>m.name.localeCompare(f.name));X(w,{tome:A,children:(m,f)=>{var u=Q(),d=x(u),_=l(d),b=t(l(_));C(b,{path:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",children:(a,h)=>{o();var e=n("CSS custom properties");r(a,e)},$$slots:{default:!0}});var g=t(b,2);Y(g,{name:"themes",children:(a,h)=>{o();var e=n("theme");r(a,e)},$$slots:{default:!0}});var I=t(g,2);C(I,{path:"Web/CSS/color-scheme",children:(a,h)=>{o();var e=n("color-schemes");r(a,e)},$$slots:{default:!0}}),o(),i(_),o(8),i(d);var p=t(d,2),c=l(p),E=l(c);G(E,{path:"theme.js"}),i(c);var L=t(c,2);N(L,{lang:"ts",content:`export interface Theme {
	name: string;
	variables: Style_Variable[];
}

export interface Style_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}),i(p);var V=t(p,2);F(V,{children:(a,h)=>{var e=O(),$=x(e),R=W(()=>`All ${v.length} style variables`);H($,{get text(){return M(R)}});var S=t($,2);K(S,{children:(s,T)=>{o();var U=n("Many of these will change.");r(s,U)},$$slots:{default:!0}});var y=t(S,2);j(y,21,()=>v,s=>s.name,(s,T)=>{q(s,{get name(){return M(T).name},classes:"menu_item"})}),i(y),r(a,e)},$$slots:{default:!0}}),r(m,u)},$$slots:{default:!0}}),B()}export{he as component};