import{a as n,C as Te,t as c,c as a,b as e,f as Me}from"../chunks/disclose-version.Dj_2BLBP.js";import{p as Pe,a as Se,g as l,t as _,d as m,D as u}from"../chunks/runtime.DKCg-osn.js";import{g as p,i as f}from"../chunks/attributes.BdgSbWfL.js";import{s as d}from"../chunks/style.iv2mhl8q.js";import{C as Ae}from"../chunks/Code.KxK97Poa.js";import{T as Be}from"../chunks/Tome_Detail.CgYZVSDo.js";import{C as Ce}from"../chunks/Color_Scheme_Input.DX7I1GLM.js";import{T as H}from"../chunks/Tome_Link.CAW6Qk6E.js";import{a as Ee}from"../chunks/tome.BQsYDXN1.js";import{g as Le}from"../chunks/theme.svelte._llWn6oX.js";import{T as b}from"../chunks/Tome_Subheading.BOFzYNOz.js";import{S as k}from"../chunks/Style_Variable_Button.mLTCSNaL.js";import{U as w}from"../chunks/Unfinished_Implementation_Warning.X1eaJbBC.js";var Re=c(`These concepts are still developing - some things are incomplete or inconsistent, and there
			will be a lot of breaking changes. I'm thinking of splitting this "light and shadow" section
			into "shadows" and "shading" something.`,1),Fe=c("theme",1),Ne=c("<code>darken</code> and <code>lighten</code>",1),Ue=c('<div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h"><!></small></div>'),De=c('<div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h"><!></small></div>'),We=c("<code>bg</code> and <code>fg</code>",1),Ye=c('<div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h"><!></small></div>'),qe=c('<div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h"><!></small></div>'),Oe=c('<div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h"><!></small></div>'),Ve=c(`<section><!> <p>Moss is designed around two simplistic models of light, one for dark mode and one for light
			mode. The goal is easy authoring with simple and consistent rules for arbitrary compositions
			and states. Each <!> can choose to implement either light
			mode or dark mode or both.</p> <p>Light mode's starting point is plain white documents (like paper) where we can think of UI
			construction as assembling elements that contrast against the white background, replacing some
			of the white blankness with darkened values/color/shape. Black shadows on the white background
			make natural sense, and white glows against a white background are invisible.</p> <p>In contrast, dark mode's starting point is a lightless void where we add light. We add
			elements which emanate light. I think of videogames and virtual/augmented/actual reality.
			Black shadows are invisible against a black background, and white glows make natural sense
			against a black background.</p> <p>This distinction leads to complication. For example, applying a black shadow to an element has
			a particular visual impact on the typical light mode page, but viewed in dark mode, it would
			disappear completely against a black background.</p> <p>Moss provides APIs that simplify or hide this complexity. For example, the <code>lighten</code> and <code>darken</code> variables are the same in light and dark modes, but <code>fg</code> and <code>bg</code> are equivalent values that swap places in dark mode. Thus <code>bg</code> and <code>fg</code> are called color-scheme-aware, and <code>lighten</code> and <code>darken</code> are color-scheme-agnostic. (maybe you can think of better terminology? I
			like the word "adaptive" but idk) The <!> docs elaborate more on this point.</p> <p>Opacity is used to enable arbitrary stacking that visually inherits its context. Not all cases
			are properly handled yet, and some choices are made for performance reasons, like avoiding
			opacity on text. (assuming this is still a thing?)</p></section> <section><!> <!> <!> <div class="swatch svelte-d8r5h"></div> <div class="swatch svelte-d8r5h"></div></section> <section><!> <p>In light mode, <code>bg</code> is the same as <code>lighten</code> and <code>fg</code> is the
			same as <code>darken</code>. In dark mode, they're swapped.</p> <div class="swatch svelte-d8r5h"></div> <div class="swatch svelte-d8r5h"></div></section> <section><!></section> <section><aside><p>tip: Try <button type="button">toggling</button> between light
				and dark to see how <code>bg</code> and <code>fg</code> change, while <code>darken</code> and <code>lighten</code> don't change but do appear significantly
				different because of the context.</p></aside></section> <section><!> <!> <div class="swatch svelte-d8r5h"><div><div class="color svelte-d8r5h"></div> <small class="svelte-d8r5h">full opacity</small></div> <!></div></section> <section><!> <!> <div class="p_sm radius_xs3"><div class="p_sm radius_xs3"><div class="p_sm radius_xs3"><div class="p_sm radius_xs3"><div class="p_sm radius_xs3">these variables have opacity, but notice how contrast changes with depth, creating
							limitations</div></div></div></div></div></section>`,1);function ia(J,K){Pe(K,!0);const Q=Ee("shading"),y=Le(),X=()=>{y.color_scheme=y.color_scheme==="light"?"dark":"light"};Be(J,{tome:Q,children:(Z,ze)=>{var $=Ve(),x=Me($),I=a(x);w(I,{children:(t,h)=>{var o=Re();n(t,o)},$$slots:{default:!0}});var T=e(e(I,!0)),ee=e(a(T));H(ee,{name:"themes",children:(t,h)=>{var o=Fe();n(t,o)},$$slots:{default:!0}});var ae=e(e(T,!0)),te=e(e(ae,!0)),oe=e(e(te,!0)),re=e(e(oe,!0)),se=e(a(re)),ie=e(e(se,!0)),de=e(e(ie,!0)),ne=e(e(de,!0)),le=e(e(ne,!0)),ce=e(e(le,!0)),ve=e(e(ce,!0)),ge=e(e(ve,!0)),he=e(e(ge,!0));H(he,{name:"colors"});var M=e(e(x,!0)),P=a(M);b(P,{text:"Shades and highlights",slug:"shades-and-highlights"});var S=e(e(P,!0));b(S,{text:"darken and lighten",slug:"darken-and-lighten",tag:"h4",children:(t,h)=>{var o=Ne();n(t,o)},$$slots:{default:!0}});var A=e(e(S,!0));w(A,{});var B=e(e(A,!0));p(B,73,()=>({length:9}),f,(t,h,o)=>{var s=Ue();const i=m(()=>"darken_"+(u(o)+1));var r=a(s),v=e(e(r,!0)),g=a(v);k(g,{get name(){return l(i)}}),_(()=>d(r,"background-color",`var(--${l(i)??""})`)),n(t,s)});var _e=e(e(B,!0));p(_e,73,()=>({length:9}),f,(t,h,o)=>{var s=De();const i=m(()=>"lighten_"+(u(o)+1));var r=a(s),v=e(e(r,!0)),g=a(v);k(g,{get name(){return l(i)}}),_(()=>d(r,"background-color",`var(--${l(i)??""})`)),n(t,s)});var C=e(e(M,!0)),E=a(C);b(E,{text:"bg and fg",slug:"bg-and-fg",tag:"h4",children:(t,h)=>{var o=We();n(t,o)},$$slots:{default:!0}});var me=e(e(E,!0)),L=e(e(me,!0));p(L,73,()=>({length:9}),f,(t,h,o)=>{var s=Ye();const i=m(()=>"bg_"+(u(o)+1));var r=a(s),v=e(e(r,!0)),g=a(v);k(g,{get name(){return l(i)}}),_(()=>d(r,"background-color",`var(--${l(i)??""})`)),n(t,s)});var ue=e(e(L,!0));p(ue,73,()=>({length:9}),f,(t,h,o)=>{var s=qe();const i=m(()=>"fg_"+(u(o)+1));var r=a(s),v=e(e(r,!0)),g=a(v);k(g,{get name(){return l(i)}}),_(()=>d(r,"background-color",`var(--${l(i)??""})`)),n(t,s)});var R=e(e(C,!0)),pe=a(R);Ce(pe,{});var F=e(e(R,!0)),fe=a(F),be=a(fe),ke=e(a(be));ke.__click=X;var N=e(e(F,!0)),U=a(N);b(U,{text:"Fading opacity",slug:"fading-opacity"});var D=e(e(U,!0));w(D,{});var we=e(e(D,!0)),W=a(we),Y=a(W);d(Y,"background-color","var(--color_a_5)");var ye=e(e(Y,!0));d(ye,"font-family","var(--font_sans)");var $e=e(e(W,!0));p($e,65,()=>({length:6}),f,(t,h,o)=>{var s=Oe();const i=m(()=>"fade_"+(u(o)+1));var r=a(s);d(r,"background-color","var(--color_a_5)");var v=e(e(r,!0)),g=a(v);k(g,{get name(){return l(i)}}),_(()=>d(r,"opacity",`var(--${l(i)??""})`)),n(t,s)});var xe=e(e(N,!0)),q=a(xe);b(q,{text:"Stacking opacity",slug:"stacking-opacity"});var O=e(e(q,!0));Ae(O,{content:`<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
	<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
		<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
			<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
				<div style:background-color="var(--bg_4)" class="p_sm radius_xs3">
					...
				</div>
			</div>
		</div>
	</div>
</div>`});var V=e(e(O,!0));d(V,"background-color","var(--fg_1)");var j=a(V);d(j,"background-color","var(--fg_1)");var z=a(j);d(z,"background-color","var(--fg_1)");var G=a(z);d(G,"background-color","var(--fg_1)");var Ie=a(G);d(Ie,"background-color","var(--bg_4)"),n(Z,$)},$$slots:{default:!0}}),Se()}Te(["click"]);export{ia as component};
