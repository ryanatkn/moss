import{a as s,t as l,d as pe,c as q,h as ne,q as le}from"../chunks/disclose-version.P5-NcRrz.js";import{p as re,a as se,c as r,f as V,s as e,r as t,m as a,t as F,n as R,o as ae}from"../chunks/runtime.DM-2YmY5.js";import{s as C}from"../chunks/render.fsaK30mL.js";import{b as x,s as me,r as ee,e as J,i as Z}from"../chunks/context_helpers.CXn5gtRk.js";import{s as M}from"../chunks/style.PwPRnE0L.js";import{a as he,p as ve}from"../chunks/if.DsBicxI-.js";import{C as $e}from"../chunks/Code.Dh4-4x_L.js";import{T as we}from"../chunks/Tome_Content.DegYrX-3.js";import{M as de}from"../chunks/Mdn_Link.DzgL9Euk.js";import{T as be}from"../chunks/Tome_Link.CBdPzjeG.js";import{g as ze}from"../chunks/tome.D083l207.js";import{D as ye}from"../chunks/Details.Bu7rGfE_.js";import{T as K,a as Q}from"../chunks/Tome_Section_Header.BUMXz0U3.js";import{b as te}from"../chunks/input.BiMhaY4T.js";import{p as ue}from"../chunks/props.Dgdl3F2j.js";import{e as _e,i as Pe,f as ce,t as ke,l as Te}from"../chunks/variable_data.C_6XnIhS.js";import{S as X}from"../chunks/Style_Variable_Button.BaCCq1mc.js";import{d as Se}from"../chunks/variables.skCrsXf0.js";import{U as Ce}from"../chunks/Unfinished_Implementation_Warning.DP24MPbW.js";var Ie=l('<label><div class="title row w_100 flex_wrap"><!> = <input class="inline flex_1" type="number"></div> <input type="range"></label>');function Le(N,p){se(p,!0);let I=ue(p,"selected_font_weight",15,400);var z=Ie(),$=r(z),y=r($);{var o=w=>{var n=pe(),A=V(n);me(A,()=>p.children),s(w,n)},m=w=>{var n=q("font-weight");s(w,n)};he(y,w=>{p.children?w(o):w(m,!1)})}var v=e(y,2);ee(v),x(v,"min",100),x(v,"step",100),x(v,"max",900),t($);var d=e($,2);ee(d),x(d,"min",100),x(d,"step",100),x(d,"max",900),t(z),te(v,I),te(d,I),s(N,z),re()}var Me=l('<label><div class="title row w_100 flex_wrap"><!> = <input class="inline" type="number"> = var(<!>)</div> <input type="range"></label>');function Ae(N,p){se(p,!0);let I=ue(p,"selected_size",15,2);const z=1,$=_e.length,y=ae(()=>_e[I()-1]);var o=Me(),m=r(o),v=r(m);{var d=k=>{var W=pe(),U=V(W);me(U,()=>p.children),s(k,W)},w=k=>{var W=q("font-size");s(k,W)};he(v,k=>{p.children?k(d):k(w,!1)})}var n=e(v,2);ee(n),x(n,"min",z),x(n,"step",1),x(n,"max",$),M(n,"width","var(--space_xl7)"),M(n,"min-width","var(--space_xl7)");var A=e(n,2);X(A,{get name(){return`size_${a(y)??""}`},children:(k,W)=>{R();var U=q();F(()=>C(U,`--size_${a(y)??""}`)),s(k,U)},$$slots:{default:!0}}),R(),t(m);var P=e(m,2);ee(P),x(P,"min",z),x(P,"step",1),x(P,"max",$),t(o),te(n,I),te(P,I),s(N,o),re()}var Ee=l(`<!> <aside>unlike <code class="svelte-axdktc">--size_</code> variables, <code class="svelte-axdktc">--icon_</code> variables are in <code class="svelte-axdktc">px</code> not <code class="svelte-axdktc">rem</code>, so they're insensitive to browser font size</aside>`,1),De=l('<figure class="svelte-axdktc"><figcaption class="svelte-axdktc"><!> = <code class="svelte-axdktc"> </code></figcaption> <div class="svelte-axdktc">🐢</div></figure>'),Fe=l('<!> <div class="icon_sizes svelte-axdktc"></div>',1);function Re(N){var p=Fe(),I=V(p);K(I,{children:($,y)=>{var o=Ee(),m=V(o);Q(m,{text:"Icon sizes"}),R(2),s($,o)},$$slots:{default:!0}});var z=e(I,2);J(z,21,()=>Object.entries(Pe),Z,($,y)=>{let o=()=>a(y)[0],m=()=>a(y)[1];var v=De(),d=r(v),w=r(d);X(w,{get name(){return o()}});var n=e(w,2),A=r(n,!0);t(n),t(d);var P=e(d,2);t(v),F(()=>{C(A,m()),x(P,"title",`--${o()??""} is ${m()??""}`),M(P,"font-size",`var(--${o()??""})`),M(P,"--size",`var(--${o()??""})`)}),s($,v)}),t(z),s(N,p)}var Ve=l('<span class="font_sans"> </span>'),We=l('<div class="row flex_wrap"><!> <div class="row"><span class="pr_sm">=</span> <code> </code></div></div>'),Be=l('<!> <form class="width_sm"><!></form> <!>',1),Ne=l('<div class="white_space_nowrap"> </div>'),Ue=l("<!> <aside>There are no variables for <!> but there are <!>.</aside> <form><!></form> <div></div>",1),Ye=l('<span class="font_mono"> </span>'),je=l('<div class="row"><!> = <code> </code></div>'),qe=l('<!> <!> <div class="panel"></div>',1),He=l('<div class="button_contents font_mono svelte-11o6a8m"><div> <code> </code></div> <div> </div> <div> </div></div>'),Oe=l("<div><!></div>"),Ge=l("<!> <aside>Learn more about <!>.</aside> <div></div>",1),Je=l('<section><h1 title="--size_xl3">h1</h1> <h2 title="--size_xl2">h2</h2> <h3 title="--size_xl">h3</h3> <h4 title="--size_lg">h4</h4> <h5 title="--size_md">h5</h5> <h6 title="--size_sm">h6</h6> <p>paragraphs</p> <p>paragraphs</p> <p>paragraphs</p> <p>p with some <small>small</small> text</p> <p>p <sub>sub</sub> p <sup>sup</sup> p</p> <!></section> <!> <!> <!> <!> <!>',1);function ht(N,p){se(p,!0);const z=ze("typography"),$=[100,200,300,400,500,600,700,800,900],y=Se.filter(d=>ce.includes(d.name)),o=typeof window>"u"?null:window.getComputedStyle(document.documentElement);let m=le(400),v=le(3);we(N,{tome:z,children:(d,w)=>{var n=Je(),A=V(n),P=e(r(A),22);ye(P,{summary:Y=>{R();var h=q("show code");s(Y,h)},children:(Y,h)=>{$e(Y,{content:`<section>
	<h1 title="--size_xl3">h1</h1>
	<h2 title="--size_xl2">h2</h2>
	<h3 title="--size_xl">h3</h3>
	<h4 title="--size_lg">h4</h4>
	<h5 title="--size_md">h5</h5>
	<h6 title="--size_sm">h6</h6>
	<p>paragraphs</p>
	<p>paragraphs</p>
	<p>paragraphs</p>
	<p>p with some <small>small</small> text</p>
	<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
	<Details>
		{#snippet summary()}show code{/snippet}
		<Code ... />
	</Details>
</section>`})},$$slots:{summary:!0,default:!0}}),t(A);var k=e(A,2);K(k,{children:(B,Y)=>{var h=Be(),T=V(h);Q(T,{text:"Font sizes"});var u=e(T,2),E=r(u);Le(E,{get selected_font_weight(){return a(m)},set selected_font_weight(_){ne(m,ve(_))}}),t(u);var b=e(u,2);J(b,17,()=>y,_=>_.name,(_,i)=>{var c=We(),f=r(c),L=ae(()=>({title:a(i).light}));X(f,{get attrs(){return a(L)},get name(){return a(i).name},children:(D,O)=>{var j=Ve(),G=r(j,!0);t(j),F(()=>{M(j,"font-size",`var(--${a(i).name??""})`),M(j,"font-weight",a(m)),C(G,a(i).name)}),s(D,j)},$$slots:{default:!0}});var g=e(f,2),S=e(r(g),2),H=r(S,!0);F(()=>C(H,o==null?void 0:o.getPropertyValue("--"+a(i).name))),t(S),t(g),t(c),s(_,c)}),s(B,h)},$$slots:{default:!0}});var W=e(k,2);K(W,{children:(B,Y)=>{var h=Ue(),T=V(h);Q(T,{text:"Font weights"});var u=e(T,2),E=e(r(u));de(E,{path:"Web/CSS/font-weight"});var b=e(E,2);be(b,{name:"classes",hash:"utility-classes",children:(f,L)=>{R();var g=q("utility classes");s(f,g)},$$slots:{default:!0}}),R(),t(u);var _=e(u,2),i=r(_);Ae(i,{get selected_size(){return a(v)},set selected_size(f){ne(v,ve(f))}}),t(_);var c=e(_,2);J(c,21,()=>$,Z,(f,L)=>{var g=Ne(),S=r(g);t(g),F(()=>{M(g,"font-weight",a(L)),M(g,"font-size",`var(--${ce[a(v)-1]??""})`),C(S,`font-weight: ${a(L)??""}`)}),s(f,g)}),t(c),s(B,h)},$$slots:{default:!0}});var U=e(W,2);K(U,{children:(B,Y)=>{var h=qe(),T=V(h);Q(T,{text:"Text colors",children:(b,_)=>{R();var i=q("Text colors");s(b,i)},$$slots:{default:!0}});var u=e(T,2);Ce(u,{children:(b,_)=>{R();var i=q("Add color-scheme-adaptive versions?");s(b,i)},$$slots:{default:!0}});var E=e(u,2);J(E,21,()=>ke,Z,(b,_)=>{var i=je();const c=ae(()=>"text_color_"+a(_));var f=r(i);X(f,{get name(){return a(c)},children:(S,H)=>{var D=Ye(),O=r(D,!0);t(D),F(()=>{M(D,"color",`var(--${a(c)??""})`),C(O,a(c))}),s(S,D)},$$slots:{default:!0}});var L=e(f,2),g=r(L,!0);F(()=>C(g,o==null?void 0:o.getPropertyValue("--"+a(c)))),t(L),t(i),s(b,i)}),t(E),s(B,h)},$$slots:{default:!0}});var oe=e(U,2);K(oe,{children:(B,Y)=>{var h=Ge(),T=V(h);Q(T,{text:"Line heights"});var u=e(T,2),E=e(r(u));de(E,{path:"Web/CSS/line-height"}),R(),t(u);var b=e(u,2);J(b,21,()=>Te,Z,(_,i)=>{var c=Oe(),f=r(c);X(f,{get name(){return a(i)},children:(L,g)=>{var S=He(),H=r(S),D=r(H),O=e(D),j=r(O,!0);F(()=>C(j,o==null?void 0:o.getPropertyValue("--"+a(i)))),t(O),t(H);var G=e(H,2),ge=r(G,!0);t(G);var ie=e(G,2),xe=r(ie,!0);t(ie),t(S),F(()=>{M(S,"line-height",`var(--${a(i)??""})`),C(D,`${a(i)??""} = `),C(ge,a(i)),C(xe,a(i))}),s(L,S)},$$slots:{default:!0}}),t(c),s(_,c)}),t(b),s(B,h)},$$slots:{default:!0}});var fe=e(oe,2);Re(fe),s(d,n)},$$slots:{default:!0}}),re()}export{ht as component};
