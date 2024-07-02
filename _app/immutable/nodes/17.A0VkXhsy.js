import{a as r,d as j,t as l,c as t,b as e,f as A,k as Ye,s as x}from"../chunks/disclose-version.YLdr8toi.js";import{p as J,a as K,g as $,t as T,d as H,X as v,y as de,x as _e}from"../chunks/runtime.BCD8ssac.js";import{p as ce}from"../chunks/proxy.CJLor5SH.js";import{b as me,a as u,r as X,g as R,i as Y}from"../chunks/attributes.Dtd4ZxzV.js";import{s as S}from"../chunks/style.iv2mhl8q.js";import{C as je}from"../chunks/Code.B-A2CnPe.js";import{T as Xe}from"../chunks/Tome_Detail.BPAd7Fhy.js";import{M as pe}from"../chunks/Mdn_Link.COSCCU3k.js";import{T as qe}from"../chunks/Tome_Link.eilc6H25.js";import{a as Ge}from"../chunks/tome.4aA1IwVf.js";import{D as He}from"../chunks/Details.BP6EEald.js";import{T as V}from"../chunks/Tome_Subheading.Dz20LSK6.js";import{p as fe,i as ge}from"../chunks/props.WAOq0f2j.js";import{b as q}from"../chunks/input.DPsmYTOa.js";import{b as ue,i as Je,d as Ke,e as he,l as Qe}from"../chunks/variables.DHXR6JaE.js";import{S as B}from"../chunks/Style_Variable_Button.CfEzMQ_B.js";var Ue=l("font-weight",1),Ze=l('<label><div class="title row w_100 wrap"><!> = <input class="inline flex_1" type="number"></div> <input type="range"></label>');function et(C,_){J(_,!0);let c=fe(_,"selected_font_weight",7,400);var b=Ze(),z=t(b),y=t(z);ge(y,()=>_.children,o=>{var n=j(),P=A(n);me(()=>_.children,P),r(o,n)},o=>{var n=Ue();r(o,n)});var s=e(e(y,!0));X(s),u(s,"min",100),u(s,"step",100),u(s,"max",900);var h=e(e(z,!0));X(h),u(h,"min",100),u(h,"step",100),u(h,"max",900),q(s,c,o=>c(o)),q(h,c,o=>c(o)),r(C,b),K()}var tt=l("font-size",1),at=l('<label><div class="title row w_100 wrap"><!> = <input class="inline" type="number"> = var(<!>)</div> <input type="range"></label>');function rt(C,_){J(_,!0);let c=fe(_,"selected_size",7,2);const b=1,z=ue.length,y=H(()=>ue[c()-1]);var s=at(),h=t(s),o=t(h);ge(o,()=>_.children,p=>{var w=j(),k=A(w);me(()=>_.children,k),r(p,w)},p=>{var w=tt();r(p,w)});var n=e(e(o,!0));X(n),u(n,"min",b),u(n,"step",1),u(n,"max",z),S(n,"width","var(--space_xl7)"),S(n,"min-width","var(--space_xl7)");var P=e(e(n,!0));B(P,{get name(){return`size_${$(y)??""}`},children:(p,w)=>{var k=Ye(p);T(()=>x(k,`--size_${$(y)??""}`)),r(p,k)},$$slots:{default:!0}});var m=e(e(h,!0));X(m),u(m,"min",b),u(m,"step",1),u(m,"max",z),q(n,c,p=>c(p)),q(m,c,p=>c(p)),r(C,s),K()}var st=l('<figure class="svelte-axdktc"><figcaption class="svelte-axdktc"><!> = <code class="svelte-axdktc"> </code></figcaption> <div class="svelte-axdktc">🐢</div></figure>'),it=l(`<section><!> <aside>unlike <code class="svelte-axdktc">--size_</code> variables, <code class="svelte-axdktc">--icon_</code> variables are in <code class="svelte-axdktc">px</code> not <code class="svelte-axdktc">rem</code>, so they're insensitive to browser font size</aside></section> <div class="icon_sizes svelte-axdktc"></div>`,1);function ot(C){var _=it(),c=A(_),b=t(c);V(b,{text:"Icon sizes",slug:"icon_size-variants"});var z=e(e(c,!0));R(z,73,()=>Object.entries(Je),Y,(y,s,h)=>{let o=()=>v(v(s))[0],n=()=>v(v(s))[1];var P=st(),m=t(P),p=t(m);B(p,{get name(){return o()}});var w=e(e(p,!0)),k=t(w),O=e(e(m,!0));T(()=>{x(k,n()),u(O,"style",`font-size: var(--${o()??""}); --size: var(--${o()??""});`),u(O,"title",`--${o()??""} is ${n()??""}`)}),r(y,P)}),r(C,_)}var nt=l("show code",1),vt=l('<span class="font_sans"> </span>'),lt=l('<div class="row wrap"><!> <div class="row"><span class="pr_sm">=</span> <code> </code></div></div>'),dt=l("utility classes",1),_t=l('<div class="nowrap"> </div>'),ct=l("Text colors",1),pt=l("<span> </span>"),ut=l('<div class="row"><!> = <code> </code></div>'),ht=l('<div class="button_contents svelte-11o6a8m"><div> <code class="font_mono"> </code></div> <div> </div> <div> </div></div>'),mt=l('<div class="spaced"><!></div>'),ft=l('<section><h1 title="--size_xl3">h1</h1> <h2 title="--size_xl2">h2</h2> <h3 title="--size_xl">h3</h3> <h4 title="--size_lg">h4</h4> <h5 title="--size_md">h5</h5> <h6 title="--size_sm">h6</h6> <p>paragraphs</p> <p>paragraphs</p> <p>paragraphs</p> <p>p with some <small>small</small> text</p> <p>p <sub>sub</sub> p <sup>sup</sup> p</p> <!></section> <section><!> <form class="width_sm"><!></form> <!></section> <section><!> <aside>There are no variables for <!> but there are utility <!>.</aside> <form><!></form> <div></div></section> <section><!> <aside>TODO needs work</aside> <div></div></section> <section><!> <aside>Learn more about <!>.</aside> <div></div></section> <!>',1);function Et(C,_){J(_,!0);const b=Ge("typography"),z=[100,200,300,400,500,600,700,800,900],y=Ke.filter(m=>he.includes(m.name)),s=typeof window>"u"?null:window.getComputedStyle(document.documentElement);let h=_e(400),o=_e(3);var n=j(),P=A(n);Xe(P,{tome:b,children:(m,p)=>{var w=ft(),k=A(w),O=t(k),xe=e(e(O,!0)),$e=e(e(xe,!0)),we=e(e($e,!0)),be=e(e(we,!0)),ze=e(e(be,!0)),ye=e(e(ze,!0)),ke=e(e(ye,!0)),Te=e(e(ke,!0)),Pe=e(e(Te,!0)),Se=e(e(Pe,!0)),Ce=e(e(Se,!0));{var De=i=>{var a=nt();r(i,a)};He(Ce,{summary:De,children:(i,a)=>{var f=j(),d=A(f);je(d,{content:`<section>
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
</section>`}),r(i,f)},$$slots:{default:!0}})}var Q=e(e(k,!0)),U=t(Q);V(U,{text:"Font sizes",slug:"font-sizes"});var Z=e(e(U,!0)),Ie=t(Z);et(Ie,{get selected_font_weight(){return $(h)},set selected_font_weight(i){de(h,ce(i))}});var Le=e(e(Z,!0));R(Le,69,()=>y,(i,a)=>v(i).name,(i,a,f)=>{var d=lt(),g=t(d),M=H(()=>({title:v(a).light}));B(g,{get attrs(){return $(M)},get name(){return v(a).name},children:(I,N)=>{var L=vt(),G=t(L);T(()=>{S(L,"font-size",`var(--${v(a).name??""})`),S(L,"font-weight",$(h)),x(G,v(a).name)}),r(I,L)},$$slots:{default:!0}});var W=e(e(g,!0)),D=t(W),E=e(e(D,!0)),F=t(E);T(()=>x(F,s==null?void 0:s.getPropertyValue("--"+v(a).name))),r(i,d)});var ee=e(e(Q,!0)),te=t(ee);V(te,{text:"Font weights",slug:"font-weight"});var ae=e(e(te,!0)),re=e(t(ae));pe(re,{path:"Web/CSS/font-weight"});var Me=e(e(re,!0));qe(Me,{name:"classes",hash:"utility-classes",children:(i,a)=>{var f=dt();r(i,f)},$$slots:{default:!0}});var se=e(e(ae,!0)),Ee=t(se);rt(Ee,{get selected_size(){return $(o)},set selected_size(i){de(o,ce(i))}});var Ae=e(e(se,!0));R(Ae,73,()=>z,Y,(i,a,f)=>{var d=_t(),g=t(d);T(()=>{S(d,"font-weight",v(a)),S(d,"font-size",`var(--${he[$(o)-1]??""})`),x(g,`font-weight: ${v(a)??""}`)}),r(i,d)});var ie=e(e(ee,!0)),oe=t(ie);V(oe,{text:"Text colors",slug:"text-colors",children:(i,a)=>{var f=ct();r(i,f)},$$slots:{default:!0}});var Fe=e(e(oe,!0)),Re=e(e(Fe,!0));R(Re,73,()=>({length:3}),Y,(i,a,f)=>{var d=ut();const g=H(()=>"text_"+(v(f)+1));var M=t(d);B(M,{get name(){return $(g)},children:(E,F)=>{var I=pt(),N=t(I);T(()=>{S(I,"color",`var(--${$(g)??""})`),x(N,$(g))}),r(E,I)},$$slots:{default:!0}});var W=e(e(M,!0)),D=t(W);T(()=>x(D,s==null?void 0:s.getPropertyValue("--"+$(g)))),r(i,d)});var ne=e(e(ie,!0)),ve=t(ne);V(ve,{text:"Line heights",slug:"line-height"});var le=e(e(ve,!0)),Ve=e(t(le));pe(Ve,{path:"Web/CSS/line-height"});var Be=e(e(le,!0));R(Be,73,()=>Qe,Y,(i,a,f)=>{var d=mt(),g=t(d);B(g,{get name(){return v(a)},children:(M,W)=>{var D=ht(),E=t(D),F=t(E),I=e(F),N=t(I);T(()=>x(N,s==null?void 0:s.getPropertyValue("--"+v(a))));var L=e(e(E,!0)),G=t(L),We=e(e(L,!0)),Ne=t(We);T(()=>{S(D,"line-height",`var(--${v(a)??""})`),x(F,`${v(a)??""} = `),x(G,v(a)),x(Ne,v(a))}),r(M,D)},$$slots:{default:!0}}),r(i,d)});var Oe=e(e(ne,!0));ot(Oe),r(m,w)},$$slots:{default:!0}}),r(C,n),K()}export{Et as component};
