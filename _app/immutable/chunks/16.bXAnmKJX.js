import{c as n,r as o,a as u,t as p,_ as Me,a0 as ze,s as e,e as ce,f as V,G as ue,A as B}from"./disclose-version.Cmho9P4e.js";import{p as Y,G as we,v as a,t as q,a as K,k as z,m as C,I as W,H as J,P as Ae}from"./runtime.DuKekwsY.js";import{p as U,i as A}from"./props.DS8PSEIH.js";import{p as j}from"./proxy.B6Yliv7g.js";import{T as Pe}from"./Tome_Detail.BFscG95t.js";import{s as _e,t as le,e as xe,b as be,d as je,r as de,k as fe}from"./class.B8v9gKBt.js";import{s as De}from"./style.Bk7ejTAN.js";import{b as ve}from"./this.DLDY2xZk.js";import{s as ae,a as Oe,C as Le}from"./Color_Scheme_Input.DHnWWhmW.js";import{o as Re}from"./index-client.A21cfD6T.js";import{a as Be}from"./tome.DloDQlTQ.js";import{T as ge}from"./Tome_Link.qZt7ScmI.js";import{T as pe}from"./Tome_Subheading.BDGLGbCD.js";import{s as te}from"./render.Cb2nao7p.js";import{g as Ne,i as Ue}from"./theme.svelte.DBkxfRJw.js";import{M as se}from"./Mdn_Link.vn1n0y1d.js";import{M as ye}from"./Module_Link.BUMlk74U.js";import{b as We}from"./input.GV9nr1U9.js";import{C as qe}from"./Code.BFR8Z_jD.js";import{d as Fe}from"./variables.b17j5l5A.js";import{U as Te}from"./Unfinished_Implementation_Warning.yg570mXG.js";const Ge=(i=0)=>new Promise(t=>setTimeout(t,i));var He=p('<div class="teleport svelte-gjkzv5"><!></div>');function Je(i,t){Y(t,!0);let r=z(void 0);we(()=>{a(r)&&t.to&&h(a(r),t.to)});let s=z(!1);const h=(l,m)=>{var w;C(s,!0),m.appendChild(l),(w=t.onmove)==null||w.call(t,l,m)};Re(()=>{var l,m;(m=(l=a(r))==null?void 0:l.parentNode)==null||m.removeChild(a(r))});var d=He();ve(d,l=>C(r,j(l)),()=>a(r));var _=n(d);_e(_,()=>t.children),o(d),q(()=>d.hidden=!a(s)),u(i,d),K()}var Ve=(i,t,r)=>{i.target===a(t)&&r(i)},Ye=p('<div class="dialog svelte-161ujlb" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-161ujlb"><div class="dialog_wrapper svelte-161ujlb"><div class="dialog_bg svelte-161ujlb" aria-hidden="true"></div> <div class="dialog_content svelte-161ujlb" role="none"><!></div></div></div></div>');function Ce(i,t){Y(t,!0);const r=U(t,"layout",3,"centered"),s=U(t,"index",3,0),h=U(t,"active",3,!0),d="body",_="fuz_dialog";let l=z(void 0);we(()=>{m(t.container)});const m=v=>{if(v)C(l,j(v));else{const y=document.getElementById(_);if(y)C(l,j(y));else{const g=document.querySelector(d);if(!g)throw Error(`Cannot find dialog root element with selector '${d}'`);C(l,j(document.createElement("div"))),a(l).id=_,a(l).style.display="contents",g.appendChild(a(l))}}};let w=z(void 0),c=z(void 0);const f=v=>{var y;v&&ae(v),(y=t.onclose)==null||y.call(t)},x=v=>{var y,g;if(v.key==="Escape"&&!Oe(v.target)){const M=(y=a(w))==null?void 0:y.parentElement,S=(g=M==null?void 0:M.parentElement)==null?void 0:g.children,I=Array.prototype.indexOf.call(S,M);(!S||I===S.length-1||I===-1)&&f(v)}};let T=z(!1);Me("keydown",ze,function(...v){var y;(y=h()?x:void 0)==null||y.apply(this,v)}),Je(i,{get to(){return a(l)},onmove:async()=>{var v;await Ge(),C(T,!0),(v=a(w))==null||v.focus()},children:(v,y)=>{var g=Ye();ve(g,D=>C(w,j(D)),()=>a(w));var M=n(g),S=n(M),I=n(S);I.__mousedown=f;var P=e(e(I,!0));ve(P,D=>C(c,j(D)),()=>a(c)),P.__mousedown=[Ve,c,f];var F=n(P);A(F,()=>a(T),D=>{var G=ce(),R=V(G);_e(R,()=>t.children,()=>f),u(D,G)}),o(P),o(S),o(M),o(g),q(()=>{le(g,"ready",a(T)),le(g,"layout_page",r()==="page"),De(g,"z-index",100+s())}),u(v,g)},$$slots:{default:!0}}),K()}ue(["mousedown"]);var Ke=(i,t,r,s)=>{var h,d;ae(i),((h=t())==null?void 0:h(W(r)))!==!1&&((d=s.onselect)==null||d.call(s,W(r)))},Qe=(i,t,r)=>{var s;ae(i),(s=t.onedit)==null||s.call(t,W(r))},Xe=p('<button type="button" class="icon_button plain">•••</button>'),Ze=p('<li class="row" role="none"><button type="button" class="theme_button color_a svelte-df411s" role="menuitemradio"> </button> <!></li>'),$e=p('<menu class="theme_input unstyled"></menu>');function et(i,t){Y(t,!0);const r=U(t,"selected_theme",15,Ne),s=U(t,"themes",3,Ue),h=U(t,"enable_editing",3,!1),d=U(t,"select",3,l=>{r().theme=l});var _=$e();xe(_,77,s,(l,m)=>l.name,(l,m,w)=>{var c=Ze();const f=J(()=>W(m).name===r().theme.name);var x=n(c);x.__click=[Ke,d,m,t];var T=n(x);o(x);var v=e(e(x,!0));A(v,h,y=>{var g=Xe();g.__click=[Qe,t,m],u(y,g)}),o(c),q(()=>{be(x,"aria-label",`${W(m).name??""} theme`),be(x,"aria-checked",a(f)),le(x,"selected",a(f)),te(T,W(m).name)}),u(l,c)}),o(_),u(i,_),K()}ue(["click"]);const tt={name:"base",variables:[]},Se=[tt,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue) var(--tint_saturation) 86%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_color_2",light:"hsl(var(--tint_hue) var(--tint_saturation) 8%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 90%)"},{name:"text_color_3",light:"hsl(var(--tint_hue) var(--tint_saturation) 16%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 83%)"},{name:"text_color_5",light:"hsl(var(--tint_hue) var(--tint_saturation) 24%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 75%)"}]}];var at=p("📋",1),rt=p('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),ot=p('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),nt=p("<button><!><!><!></button>");function it(i,t){Y(t,!0);let r=z(!1),s=z(!1);const h=async()=>{C(r,!1),C(s,!1);try{await navigator.clipboard.writeText(t.text)}catch{C(s,!0);return}C(r,!0)};var d=nt();let _;var l=n(d);A(l,()=>t.children,c=>{var f=ce(),x=V(f);_e(x,()=>t.children,()=>a(r),()=>a(s)),u(c,f)},c=>{var f=at();u(c,f)});var m=e(l);A(m,()=>a(r),c=>{var f=rt();u(c,f)});var w=e(m);A(w,()=>a(s),c=>{var f=ot();u(c,f)}),o(d),q(()=>_=je(d,_,{...t.attrs,type:"button",class:t.classes??(t.children?void 0:"icon_button size_lg"),onclick:h},"svelte-rumh1g")),u(i,d),K()}const st=(i,t={})=>{const{comments:r=!1,id:s=null,empty_default_theme:h=!0,specificity:d=2}=t,_=i.name===Se[0].name?h?null:Fe:i.variables;if(!(_!=null&&_.length))return"";const l=_.map(c=>ke(c)).filter(Boolean),m=_.map(c=>ke(c,!0,r)).filter(Boolean),w=(s?"#"+s:":root").repeat(d);return`${l.length?`${w} {
	${l.join(`
	`)}
}`:""}
${m.length?`${w}.dark {
	${m.join(`
	`)}
}`:""}
`.trim()},ke=(i,t=!1,r=!0)=>{const s=t?i.dark:i.light;return s?"--"+i.name+": "+s+";"+(r&&i.summary?" /* "+i.summary+" */":""):""};var lt=p("<blockquote> </blockquote>"),dt=p('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function vt(i,t){Y(t,!0);var r=ce(),s=V(r);A(s,()=>t.variable,h=>{var d=dt(),_=n(d),l=n(_),m=e(e(l,!0)),w=n(m);o(m),o(_);var c=e(e(_,!0));A(c,()=>t.variable.summary,M=>{var S=lt(),I=n(S);o(S),q(()=>te(I,t.variable.summary)),u(M,S)});var f=e(e(c,!0)),x=n(f),T=e(e(x,!0));de(T),o(f);var v=e(e(f,!0)),y=n(v),g=e(e(y,!0));de(g),o(v),o(d),q(()=>{te(w,`--${t.variable.name??""}`),fe(T,t.variable.light??""),fe(g,t.variable.dark??"")}),u(h,d)}),u(i,r),K()}const ct=(i,t,r,s)=>{var h;a(t)&&((h=r.onsave)==null||h.call(r,a(s)))},ut=i=>{ae(i),alert("TODO")};var _t=p("edit",1),mt=p("create",1),ht=p("save changes",1),bt=p("create theme",1),ft=(i,t,r)=>t(i,W(r)),gt=p('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),pt=p('<div class="copy svelte-cno0i6"><!></div> <!>',1),yt=p('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),kt=p(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function wt(i,t){Y(t,!0);const r=U(t,"theme",3,null);let s=z(j(r()?r().name:"new theme")),h=z(j(r()?r().variables:[]));const d=J(()=>({name:a(s),variables:a(h)})),_=J(()=>st(a(d),{empty_default_theme:!1,specificity:1})),l=J(()=>a(h).reduce((b,k)=>k.light?b+1:b,0)),m=J(()=>a(h).reduce((b,k)=>k.dark?b+1:b,0));let w=z(null);const c=(b,k)=>{ae(b),C(w,j(k)),C(h,j(a(h).slice()))},f=J(()=>!!r()),x=J(()=>r()?a(s)!==r().name||a(h)!==r().variables:!0);var T=kt(),v=V(T),y=n(v),g=n(y);A(g,()=>a(f),b=>{var k=_t();u(b,k)},b=>{var k=mt();u(b,k)}),B(),o(y);var M=e(e(y,!0)),S=e(e(M,!0)),I=n(S),P=n(I),F=n(P);o(P);var D=e(e(P,!0));D.__click=[ut],o(I);var G=e(e(I,!0)),R=n(G),re=n(R),Q=e(e(re,!0));de(Q),o(R);var X=e(e(R,!0));X.__click=[ct,x,t,d];var oe=n(X);A(oe,()=>a(f),b=>{var k=ht();u(b,k)},b=>{var k=bt();u(b,k)}),o(X),o(G),o(S);var $=e(e(S,!0)),H=n($);xe(H,77,()=>a(h),(b,k)=>b.name,(b,k,N)=>{var O=gt();O.__click=[ft,c,k];var E=n(O);o(O),q(()=>te(E,`--${W(k).name??""}`)),u(b,O)}),o(H);var ne=e(e(H,!0)),ee=n(ne);A(ee,()=>a(_),b=>{var k=pt(),N=V(k),O=n(N);it(O,{get text(){return a(_)}}),o(N);var E=e(e(N,!0));qe(E,{get content(){return a(_)},lang:"css"}),u(b,k)}),o(ne),o($),o(v);var ie=e(e(v,!0));A(ie,()=>a(w),b=>{Ce(b,{onclose:()=>C(w,null),children:(N,O=Ae)=>{var E=yt(),Z=n(E),L=n(Z);vt(L,{get variable(){return a(w)}});var me=e(e(L,!0));Te(me,{});var Ee=e(e(me,!0));Ee.__click=function(...Ie){var he;(he=O())==null||he.apply(this,Ie)},o(Z),o(E),u(N,E)}})}),q(()=>{te(F,`variables: ${a(l)??""} light, ${a(m)??""} dark`),X.disabled=!a(x)}),We(Q,()=>a(s),b=>C(s,b)),u(i,T),K()}ue(["click"]);var xt=p("CSS custom properties",1),Tt=p("<code>@ryanatkn/moss/theme.ts</code>"),Ct=p("<code>@ryanatkn/moss/themes.ts</code>"),St=p("The builtin themes need more work, but the proof of concept is ready!",1),Et=p(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),It=p('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),Mt=p("<!> <!>",1);function Xt(i,t){Y(t,!0);const s=Be("themes"),h=Se.slice();let d=z(null);var _=Mt(),l=V(_);Pe(l,{tome:s,children:(c,f)=>{var x=Et(),T=V(x),v=n(T),y=e(n(v));se(y,{path:"Web/CSS/color-scheme"});var g=e(e(y,!0));ge(g,{name:"variables"});var M=e(e(g,!0));se(M,{path:"Web/CSS/--*",children:(E,Z)=>{B();var L=xt();u(E,L)},$$slots:{default:!0}}),B(),o(v);var S=e(e(v,!0));e(n(S)),B(),o(S),o(T);var I=e(e(T,!0)),P=n(I);pe(P,{text:"Color scheme",slug:"color-scheme"});var F=e(e(P,!0)),D=e(n(F));se(D,{path:"Web/CSS/color-scheme"});var G=e(e(D,!0));e(e(G,!0)),B(),o(F);var R=e(e(F,!0)),re=e(n(R));se(re,{path:"Web/CSS/@media/prefers-color-scheme"}),e(e(re,!0)),B(),o(R);var Q=e(e(R,!0)),X=n(Q);Le(X,{}),o(Q),e(e(Q,!0)),o(I);var oe=e(e(I,!0)),$=n(oe);pe($,{text:"Builtin themes",slug:"builtin-themes"});var H=e(e($,!0)),ne=e(n(H));ge(ne,{name:"variables"}),B(),o(H);var ee=e(e(H,!0)),ie=e(n(ee));ye(ie,{path:"theme.ts",children:(E,Z)=>{var L=Tt();u(E,L)},$$slots:{default:!0}});var b=e(e(ie,!0));ye(b,{path:"themes.ts",children:(E,Z)=>{var L=Ct();u(E,L)},$$slots:{default:!0}}),B(),o(ee);var k=e(e(ee,!0)),N=n(k);et(N,{themes:h,enable_editing:!0,onedit:E=>C(d,j(E))}),o(k);var O=e(e(k,!0));Te(O,{children:(E,Z)=>{B();var L=St();u(E,L)},$$slots:{default:!0}}),o(oe),u(c,x)},$$slots:{default:!0}});var m=e(l,!0);m.nodeValue="  ";var w=e(m);A(w,()=>a(d),c=>{Ce(c,{onclose:()=>C(d,null),children:(f,x)=>{var T=It(),v=n(T),y=n(v);wt(y,{get theme(){return a(d)},onsave:g=>{console.log("update theme",g),alert("todo")}}),o(v),o(T),u(f,T)},$$slots:{default:!0}})}),u(i,_),K()}export{Ce as D,vt as S,Xt as _};
