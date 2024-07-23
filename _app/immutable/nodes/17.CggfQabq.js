import{c as r,a as i,e as Pe,f as Q,s as e,t as c,r as t,z as Ye,A as k}from"../chunks/disclose-version.C18h83_w.js";import{p as de,a as _e,v as $,t as D,I as le,J as n,m as we,k as be}from"../chunks/runtime.C2zfFJJN.js";import{s as w}from"../chunks/render.DoF8UeDv.js";import{s as Se,b as h,r as H,e as W,i as G}from"../chunks/class.pTPFZAyC.js";import{s as T}from"../chunks/style.iv2mhl8q.js";import{p as ze}from"../chunks/proxy.BFqpwO-x.js";import{C as je}from"../chunks/Code.DTj2vom3.js";import{T as Je}from"../chunks/Tome_Detail.phi68Jv8.js";import{M as ye}from"../chunks/Mdn_Link.r7d5RMZ2.js";import{T as qe}from"../chunks/Tome_Link.Bbhz7cKm.js";import{a as Ge}from"../chunks/tome.CUyVYEB6.js";import{D as He}from"../chunks/Details.DZVYVCv7.js";import{T as N}from"../chunks/Tome_Subheading.DDLfs6yq.js";import{p as Ce,i as Ie}from"../chunks/props.D3g7YjpN.js";import{b as K}from"../chunks/input.CHnKLn5Q.js";import{b as ke,i as Ke,d as Te,t as Qe,l as Ue}from"../chunks/variable_data.BCsA1Roj.js";import{S as Y}from"../chunks/Style_Variable_Button.C6hCIFon.js";import{d as Xe}from"../chunks/variables.DsgZe1ef.js";var Ze=c("font-weight",1),et=c('<label><div class="title row w_100 flex_wrap"><!> = <input class="inline flex_1" type="number"></div> <input type="range"></label>');function tt(A,m){de(m,!0);let p=Ce(m,"selected_font_weight",7,400);var f=et(),g=r(f),P=r(g);Ie(P,()=>m.children,d=>{var o=Pe(),E=Q(o);Se(E,()=>m.children),i(d,o)},d=>{var o=Ze();i(d,o)});var s=e(e(P,!0));H(s),h(s,"min",100),h(s,"step",100),h(s,"max",900),t(g);var u=e(e(g,!0));H(u),h(u,"min",100),h(u,"step",100),h(u,"max",900),t(f),K(s,p,d=>p(d)),K(u,p,d=>p(d)),i(A,f),_e()}var rt=c("font-size",1),at=c('<label><div class="title row w_100 flex_wrap"><!> = <input class="inline" type="number"> = var(<!>)</div> <input type="range"></label>');function st(A,m){de(m,!0);let p=Ce(m,"selected_size",7,2);const f=1,g=ke.length,P=le(()=>ke[p()-1]);var s=at(),u=r(s),d=r(u);Ie(d,()=>m.children,v=>{var b=Pe(),z=Q(b);Se(z,()=>m.children),i(v,b)},v=>{var b=rt();i(v,b)});var o=e(e(d,!0));H(o),h(o,"min",f),h(o,"step",1),h(o,"max",g),T(o,"width","var(--space_xl7)"),T(o,"min-width","var(--space_xl7)");var E=e(e(o,!0));Y(E,{get name(){return`size_${$(P)??""}`},children:(v,b)=>{k();var z=Ye();D(()=>w(z,`--size_${$(P)??""}`)),i(v,z)},$$slots:{default:!0}}),k(),t(u);var S=e(e(u,!0));H(S),h(S,"min",f),h(S,"step",1),h(S,"max",g),t(s),K(o,p,v=>p(v)),K(S,p,v=>p(v)),i(A,s),_e()}var it=c('<figure class="svelte-axdktc"><figcaption class="svelte-axdktc"><!> = <code class="svelte-axdktc"> </code></figcaption> <div class="svelte-axdktc">🐢</div></figure>'),ot=c(`<section><!> <aside>unlike <code class="svelte-axdktc">--size_</code> variables, <code class="svelte-axdktc">--icon_</code> variables are in <code class="svelte-axdktc">px</code> not <code class="svelte-axdktc">rem</code>, so they're insensitive to browser font size</aside></section> <div class="icon_sizes svelte-axdktc"></div>`,1);function nt(A){var m=ot(),p=Q(m),f=r(p);N(f,{text:"Icon sizes",slug:"icon_size-variants"});var g=e(e(f,!0)),P=e(r(g)),s=e(e(P,!0)),u=e(e(s,!0));e(e(u,!0)),k(),t(g),t(p);var d=e(e(p,!0));W(d,73,()=>Object.entries(Ke),G,(o,E,S)=>{let v=()=>n(n(E))[0],b=()=>n(n(E))[1];var z=it(),V=r(z),j=r(V);Y(j,{get name(){return v()}});var J=e(e(j,!0)),U=r(J);t(J),t(V);var B=e(e(V,!0));t(z),D(()=>{w(U,b()),h(B,"title",`--${v()??""} is ${b()??""}`),T(B,"font-size",`var(--${v()??""})`),T(B,"--size",`var(--${v()??""})`)}),i(o,z)}),t(d),i(A,m)}var vt=c("show code",1),lt=c('<span class="font_sans"> </span>'),dt=c('<div class="row flex_wrap"><!> <div class="row"><span class="pr_sm">=</span> <code> </code></div></div>'),_t=c("utility classes",1),ct=c('<div class="white_space_nowrap"> </div>'),pt=c("Text colors",1),ut=c('<span class="font_mono"> </span>'),mt=c('<div class="row"><!> = <code> </code></div>'),ht=c('<div class="button_contents font_mono svelte-11o6a8m"><div> <code> </code></div> <div> </div> <div> </div></div>'),ft=c('<div class="spaced"><!></div>'),gt=c('<section><h1 title="--size_xl3">h1</h1> <h2 title="--size_xl2">h2</h2> <h3 title="--size_xl">h3</h3> <h4 title="--size_lg">h4</h4> <h5 title="--size_md">h5</h5> <h6 title="--size_sm">h6</h6> <p>paragraphs</p> <p>paragraphs</p> <p>paragraphs</p> <p>p with some <small>small</small> text</p> <p>p <sub>sub</sub> p <sup>sup</sup> p</p> <!></section> <section><!> <form class="width_sm"><!></form> <!></section> <section><!> <aside>There are no variables for <!> but there are utility <!>.</aside> <form><!></form> <div></div></section> <section><!> <aside>TODO needs work</aside> <div class="panel"></div></section> <section><!> <aside>Learn more about <!>.</aside> <div></div></section> <!>',1);function Rt(A,m){de(m,!0);const f=Ge("typography"),g=[100,200,300,400,500,600,700,800,900],P=Xe.filter(o=>Te.includes(o.name)),s=typeof window>"u"?null:window.getComputedStyle(document.documentElement);let u=be(400),d=be(3);Je(A,{tome:f,children:(o,E)=>{var S=gt(),v=Q(S),b=r(v),z=e(e(b,!0)),V=e(e(z,!0)),j=e(e(V,!0)),J=e(e(j,!0)),U=e(e(J,!0)),B=e(e(U,!0)),De=e(e(B,!0)),Le=e(e(De,!0)),X=e(e(Le,!0));e(r(X)),k(),t(X);var Z=e(e(X,!0)),Me=e(r(Z));e(e(Me,!0)),k(),t(Z);var Ae=e(e(Z,!0));He(Ae,{summary:a=>{k();var y=vt();i(a,y)},children:(a,y)=>{je(a,{content:`<section>
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
</section>`})},$$slots:{default:!0}}),t(v);var ee=e(e(v,!0)),ce=r(ee);N(ce,{text:"Font sizes",slug:"font-sizes"});var te=e(e(ce,!0)),Ee=r(te);tt(Ee,{get selected_font_weight(){return $(u)},set selected_font_weight(l){we(u,ze(l))}}),t(te);var Fe=e(e(te,!0));W(Fe,69,()=>P,(l,a)=>n(l).name,(l,a,y)=>{var _=dt(),x=r(_),F=le(()=>({title:n(a).light}));Y(x,{get attrs(){return $(F)},get name(){return n(a).name},children:(C,q)=>{var I=lt(),ve=r(I);t(I),D(()=>{T(I,"font-size",`var(--${n(a).name??""})`),T(I,"font-weight",$(u)),w(ve,n(a).name)}),i(C,I)},$$slots:{default:!0}});var R=e(e(x,!0)),L=r(R),M=e(e(L,!0)),O=r(M);D(()=>w(O,s==null?void 0:s.getPropertyValue("--"+n(a).name))),t(M),t(R),t(_),i(l,_)}),t(ee);var re=e(e(ee,!0)),pe=r(re);N(pe,{text:"Font weights",slug:"font-weight"});var ae=e(e(pe,!0)),ue=e(r(ae));ye(ue,{path:"Web/CSS/font-weight"});var Re=e(e(ue,!0));qe(Re,{name:"classes",hash:"utility-classes",children:(l,a)=>{k();var y=_t();i(l,y)},$$slots:{default:!0}}),k(),t(ae);var se=e(e(ae,!0)),Ve=r(se);st(Ve,{get selected_size(){return $(d)},set selected_size(l){we(d,ze(l))}}),t(se);var me=e(e(se,!0));W(me,73,()=>g,G,(l,a,y)=>{var _=ct(),x=r(_);t(_),D(()=>{T(_,"font-weight",n(a)),T(_,"font-size",`var(--${Te[$(d)-1]??""})`),w(x,`font-weight: ${n(a)??""}`)}),i(l,_)}),t(me),t(re);var ie=e(e(re,!0)),he=r(ie);N(he,{text:"Text colors",slug:"text-colors",children:(l,a)=>{k();var y=pt();i(l,y)},$$slots:{default:!0}});var Be=e(e(he,!0)),fe=e(e(Be,!0));W(fe,73,()=>Qe,G,(l,a,y)=>{var _=mt();const x=le(()=>"text_color_"+n(a));var F=r(_);Y(F,{get name(){return $(x)},children:(M,O)=>{var C=ut(),q=r(C);t(C),D(()=>{T(C,"color",`var(--${$(x)??""})`),w(q,$(x))}),i(M,C)},$$slots:{default:!0}});var R=e(e(F,!0)),L=r(R);D(()=>w(L,s==null?void 0:s.getPropertyValue("--"+$(x)))),t(R),t(_),i(l,_)}),t(fe),t(ie);var oe=e(e(ie,!0)),ge=r(oe);N(ge,{text:"Line heights",slug:"line-height"});var ne=e(e(ge,!0)),Oe=e(r(ne));ye(Oe,{path:"Web/CSS/line-height"}),k(),t(ne);var xe=e(e(ne,!0));W(xe,73,()=>Ue,G,(l,a,y)=>{var _=ft(),x=r(_);Y(x,{get name(){return n(a)},children:(F,R)=>{var L=ht(),M=r(L),O=r(M),C=e(O),q=r(C);D(()=>w(q,s==null?void 0:s.getPropertyValue("--"+n(a)))),t(C),t(M);var I=e(e(M,!0)),ve=r(I);t(I);var $e=e(e(I,!0)),Ne=r($e);t($e),t(L),D(()=>{T(L,"line-height",`var(--${n(a)??""})`),w(O,`${n(a)??""} = `),w(ve,n(a)),w(Ne,n(a))}),i(F,L)},$$slots:{default:!0}}),t(_),i(l,_)}),t(xe),t(oe);var We=e(e(oe,!0));nt(We),i(o,S)},$$slots:{default:!0}}),_e()}export{Rt as component};
