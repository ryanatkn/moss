import{t as S,a as g,b as J}from"../chunks/ZJOpTZSG.js";import{k as D,e as c,s as t,o as i,v as E,r as n,l as Q,m as G,f as A,n as _}from"../chunks/9wzcdEVc.js";import{f as Y,e as F,i as q}from"../chunks/h1e0X-xx.js";import{T as ee}from"../chunks/_elb97t2.js";import{g as te}from"../chunks/UTx0jM8e.js";import{T as z}from"../chunks/BBLDFHrV.js";import{M as j}from"../chunks/BoEvY9zn.js";import{C as ae}from"../chunks/DMeNKuQe.js";import{T as V,a as W}from"../chunks/B16zqsf9.js";import{s as R}from"../chunks/C7U9hu-S.js";import{p as K}from"../chunks/DPNKLbCW.js";import{S as X}from"../chunks/-sy8zx4Y.js";import{t as oe}from"../chunks/BZ-p7E8E.js";import{U as re}from"../chunks/BE4EYs6I.js";import{c as O}from"../chunks/B7YDxFKm.js";var se=S('<li class="svelte-x81erv"><div class="color svelte-x81erv"></div> <div class="text svelte-x81erv"><!> <div class="hue svelte-x81erv"> </div> <small class="description svelte-x81erv"> </small></div></li>');function ne(a,e){D(e,!0);const o=K(e,"width",3,48),r=K(e,"height",3,48),h=s=>{var l;return(l=e.computed_styles)==null?void 0:l.getPropertyValue("--"+s)},d=E(()=>`hue_${e.color_name}`),v=E(()=>Number(h(i(d))));var u=se();let k;var $=c(u);let C;var y=t($,2),M=c(y);X(M,{get name(){return i(d)}});var f=t(M,2),L=c(f,!0);n(f);var m=t(f,2),T=c(m,!0);n(m),n(y),n(u),Q(()=>{k=Y(u,"",k,{"--hue":`var(--${i(d)??""})`}),C=Y($,"",C,{width:`${o()??""}px`,height:`${r()??""}px`}),R(L,i(v)),R(T,e.description)}),g(a,u),G()}const le=(a,e,o)=>"#"+U(a)+U(e)+U(o),U=a=>{var e=a.toString(16);return e.length===1?"0"+e:e},Z=(a,e,o)=>{var r,h,d;if(e===0)r=h=d=o;else{var v=o<.5?o*(1+e):o+e-o*e,u=2*o-v;r=B(u,v,a+1/3),h=B(u,v,a),d=B(u,v,a-1/3)}return[Math.round(r*255),Math.round(h*255),Math.round(d*255)]},B=(a,e,o)=>{var r=o<0?o+1:o>1?o-1:o;return r<1/6?a+(e-a)*6*r:r<1/2?e:r<2/3?a+(e-a)*(2/3-r)*6:a},ie=(a,e,o)=>{var r=Z(a,e,o);return le(r[0],r[1],r[2])},de=/^(hsl\()?\s*(\d+),?\s*(\d+)%,?\s*(\d+)%/,ce=a=>{var e=de.exec(a);if(!e)throw new Error("invalid HSL string");return[Number(e[2])/360,Number(e[3])/100,Number(e[4])/100]};var ue=S('<li class="svelte-140u2uc"><div class="color svelte-140u2uc"></div> <div class="text svelte-140u2uc"><!> <div class="hex svelte-140u2uc"> </div> <div class="hsl svelte-140u2uc"> </div> <div class="rgb svelte-140u2uc"> </div></div></li>');function he(a,e){D(e,!0);const o=oe.get(),r=E(()=>e.index+1),h=E(()=>`color_${e.color_name}_${i(r)}`),d=E(()=>{var s;return o.color_scheme,(s=e.computed_styles)==null?void 0:s.getPropertyValue("--"+i(h))}),v=E(()=>i(d)&&ce(i(d)));var u=ue();let k;var $=t(c(u),2),C=c($);X(C,{get name(){return i(h)}});var y=t(C,2),M=c(y,!0);n(y);var f=t(y,2),L=c(f,!0);n(f);var m=t(f,2),T=c(m);n(m),n($),n(u),Q((s,l)=>{k=Y(u,"",k,{"--bg_color":`var(--${i(h)??""})`}),R(M,s),R(L,i(d)),R(T,`rgb(${l??""})`)},[()=>i(v)&&ie(...i(v)),()=>i(v)&&Z(...i(v)).join(" ")]),g(a,u),G()}var ve=S('<ul class="unstyled svelte-6817yd"></ul>');function me(a,e){var o=ve();F(o,20,()=>({length:9}),q,(r,h,d)=>{he(r,{index:d,get color_name(){return e.color_name},get computed_styles(){return e.computed_styles}})}),n(o),g(a,o)}var pe=S(`<!> <p>Moss provides a palette of color and hue <!> designed to support concise
			authoring in light and dark modes, as well as straightforward <!> by both developers and end-users at runtime. The colors have more semantics than just plain values,
			so they automatically adapt to dark mode and custom themes, at the cost of having different values
			depending on color scheme and theme.</p> <h4>Adapting colors to dark mode</h4> <p>A color's subjective appearance depends on the context in which it's viewed, especially the
			surrounding colors and values. Moss' semantic colors are designed to work across color
			schemes, so each Moss color <!> has two values, one
			for light and one for dark mode. The exceptions are the lightest (1) and darkest (9) variants,
			although this may change if it yields better results.</p> <h4>Custom themes</h4> <p>Instead of "blue" and "red", colors are named with letters like "a" and "b", so you can change
			the primary "a" from blue to any color in a theme without breaking the name-to-color
			correspondence everywhere. This also flexibly handles more colors and cases than using names
			like "primary", and although it takes some learning, it's a simple pattern to remember.
			("primary" and its ilk require learning too!)</p> <p>A downside of this approach is that changing a color like the primary "a" affects the many
			places it's used. Sometimes you may want to change the color of a specific element or state,
			not all the things. In those cases, use plain CSS and optionally Moss variables. Compared to
			most libraries, Moss provides fewer handles for granular color customizations, but the
			benefits include consistency, efficiency, DRY authoring, and ease of app-wide theming.</p>`,1),_e=S(`<!> <p>For performance reasons, Moss does not currently have an extensive set of variants, like
			specialized states for elements or color values like "blue". Each of the 7 hues has 9 HSL
			color values (e.g. <code>hsl(120 55% 36%)</code>) and 9 HSL values (e.g. <code>120 55% 36%</code>, useful to apply custom alpha), handling most cases, and the base
			colors can be customized with platform APIs like the <!> CSS function.</p> <p>Variants will be expanded when Moss includes a Vite plugin or other build tooling for
			optimization. A downside of removing unused styles is that they won't be available to your
			end-users at runtime. We'll probably end up with an interpreted language like Tailwind's
			just-in-time compiler.</p>`,1),ge=S(`Colors are unfinished. I'm thinking of adding orange and cyan for a total of 9 hues. Moss may
			also change from HSL to <!>.`,1),fe=S(`<!> <!> <p>Hue variables contain a single <!> number. Each color variable combines
			a hue variable with hardcoded saturation and lightness values for light and dark modes.</p> <p>Hue variables therefore provide a single source of truth that's easy to theme, but to achieve
			pleasing results, setting the hue alone is not always sufficient. Custom colors will often
			require you to set per-variable saturation and lightness values.</p> <p>Hue variables are also useful to construct custom colors not covered by the color variables.
			For example, Moss' base stylesheet uses <code>hue_a</code> for the semi-transparent <code>::selection</code>. (try selecting some text - <span class="color_a_5">same hue!</span>)</p> <p>Unlike the color variables, the hue variables are the same in both light and dark modes.</p> <ul class="palette unstyled svelte-5ibhnb"></ul>`,1),be=S(`<!> <p>There are 9 variables per color, numbered 1 to 9, lightest to darkest. The 5th variable of
			each color is used as the base for things like <!>.</p> <p>Note that these values differ between light and dark modes! See the discussion above for why.</p> <p>These colors were eyeballed by a programmer, and will change :]</p> <ul class="palette unstyled pt_xl2 svelte-5ibhnb"></ul>`,1),ye=S('<!> <!> <!> <!> <div class="box w_100 mb_lg"><!></div>',1);function Re(a,e){D(e,!0);const r=te("colors"),h=typeof window>"u"?null:window.getComputedStyle(document.documentElement),d=["primary","success/help","error/danger","secondary","tertiary","quaternary","quinary","senary","septenary"];ee(a,{tome:r,children:(v,u)=>{var k=ye(),$=A(k);V($,{children:(m,T)=>{var s=pe(),l=A(s);W(l,{text:"Color semantics"});var p=t(l,2),b=t(c(p));z(b,{name:"variables"});var H=t(b,2);z(H,{name:"themes",children:(I,P)=>{_();var N=J("theming");g(I,N)},$$slots:{default:!0}}),_(),n(p);var x=t(p,4),w=t(c(x));z(w,{name:"variables",children:(I,P)=>{_();var N=J("variable");g(I,N)},$$slots:{default:!0}}),_(),n(x),_(6),g(m,s)},$$slots:{default:!0}});var C=t($,2);V(C,{children:(m,T)=>{var s=_e(),l=A(s);W(l,{text:"Caveats"});var p=t(l,2),b=t(c(p),5);j(b,{path:"Web/CSS/color_value/color-mix"}),_(),n(p),_(2),g(m,s)},$$slots:{default:!0}});var y=t(C,2);V(y,{children:(m,T)=>{var s=fe(),l=A(s);W(l,{text:"Hue variables"});var p=t(l,2);re(p,{children:(w,I)=>{_();var P=ge(),N=t(A(P));j(N,{path:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch"}),_(),g(w,P)}});var b=t(p,2),H=t(c(b));j(H,{path:"Web/CSS/hue"}),_(),n(b);var x=t(b,8);F(x,22,()=>O,w=>w,(w,I,P)=>{ne(w,{get color_name(){return I},computed_styles:h,get description(){return d[i(P)]}})}),n(x),g(m,s)},$$slots:{default:!0}});var M=t(y,2);V(M,{children:(m,T)=>{var s=be(),l=A(s);W(l,{text:"Color variables"});var p=t(l,2),b=t(c(p));z(b,{name:"buttons"}),_(),n(p);var H=t(p,6);F(H,20,()=>O,x=>x,(x,w)=>{me(x,{get color_name(){return w},computed_styles:h})}),n(H),g(m,s)},$$slots:{default:!0}});var f=t(M,2),L=c(f);ae(L,{}),n(f),g(v,k)},$$slots:{default:!0}}),G()}export{Re as component};
