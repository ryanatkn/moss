import"../chunks/DsnmJJEf.js";import{p as R,c as U,f as C,a as x,z as n,b as o,s as t,i as M,d as l,y as s,r as i,u as B}from"../chunks/CY4wiuS3.js";import{i as W}from"../chunks/D6GnupWV.js";import{C as j}from"../chunks/DTyG3oUw.js";import{T as N}from"../chunks/Dt9pBxQD.js";import{T as X}from"../chunks/BK0lCUXs.js";import{M as w}from"../chunks/D7hOcmnS.js";import{g as Y}from"../chunks/RTGj4b2x.js";import{T as D,a as F}from"../chunks/HOvpdovP.js";import{d as H}from"../chunks/BSLhL1FI.js";import{S as J}from"../chunks/BEmvOeVl.js";import{M as q}from"../chunks/BQ6u4pFG.js";import{U as G}from"../chunks/cCVtR1Ep.js";var K=C('<!> <!> <div class="variables svelte-ap0s2i"></div>',1),O=C(`<section><p>Style variables, or just "variables" in Moss, are <!> that can be grouped into a <!>. Each variable can have
			values for light and/or dark <!>.
			They're design tokens with an API.</p> <p>The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			for both developers and end-users. Variables can be composed in multiple ways:</p> <ul><li>by CSS classes, both utility and component</li> <li>by other variables, both in calculations and to add useful semantics (e.g. <code>button_fill_hover</code> defaults to <code>fg_2</code> but can be themed independently)</li> <li>in JS like the <a href="https://svelte.dev/">Svelte</a> components in <a href="https://www.fuz.dev/">Fuz</a></li></ul> <p>Variables also provide an interface that's generally secure for user-generated content, if
			you're into that kind of thing.</p> <p>The result is a flexible system that aligns with modern CSS to deliver high-capability UX and
			DX with low overhead.</p></section> <section><div class="mb_md"><!></div> <!></section> <!>`,1);function ce(k,P){R(P,!0);const A=Y("variables"),v=H.slice().sort((m,f)=>m.name.localeCompare(f.name));N(k,{get tome(){return A},children:(m,f)=>{var u=O(),d=x(u),b=l(d),g=t(l(b));w(g,{path:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*",children:(a,h)=>{s();var e=n("CSS custom properties");o(a,e)},$$slots:{default:!0}});var _=t(g,2);X(_,{name:"themes",children:(a,h)=>{s();var e=n("theme");o(a,e)},$$slots:{default:!0}});var I=t(_,2);w(I,{path:"Web/CSS/color-scheme",children:(a,h)=>{s();var e=n("color-schemes");o(a,e)},$$slots:{default:!0}}),s(),i(b),s(8),i(d);var p=t(d,2),c=l(p),E=l(c);q(E,{path:"theme.js"}),i(c);var L=t(c,2);j(L,{lang:"ts",content:`export interface Theme {
	name: string;
	variables: StyleVariable[];
}

export interface StyleVariable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}),i(p);var V=t(p,2);D(V,{children:(a,h)=>{var e=K(),$=x(e);{let r=B(()=>`All ${v.length} style variables`);F($,{get text(){return M(r)}})}var y=t($,2);G(y,{children:(r,T)=>{s();var z=n("Many of these will change.");o(r,z)}});var S=t(y,2);W(S,21,()=>v,r=>r.name,(r,T)=>{J(r,{get name(){return M(T).name},classes:"menu_item"})}),i(S),o(a,e)},$$slots:{default:!0}}),o(m,u)},$$slots:{default:!0}}),U()}export{ce as component};
