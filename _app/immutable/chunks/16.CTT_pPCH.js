import{a as u,t as x,q as Ee,c as le,g as de,b as V}from"./disclose-version.CYUEkZ6s.js";import{p as H,P as ke,Q as t,c as n,r as o,t as F,a as Q,U as P,V as C,aF as Ie,s as r,f as Y,R as J,n as R,af as Me}from"./runtime.DvazHU5t.js";import{p as U,i as A,b as q}from"./props.RETprpTh.js";import{T as ze}from"./Tome_Detail.BmGa0IEN.js";import{s as ce,t as re,e as we,b as ue,d as Pe,r as ie,k as he}from"./class.an1nRhKd.js";import{s as Ae}from"./style.Bk7ejTAN.js";import{b as se}from"./this.DL11GMmX.js";import{s as ee,a as De,C as Oe}from"./Color_Scheme_Input.DZy8mzpr.js";import{o as Re}from"./index-client.4pPqtcuF.js";import{a as Le}from"./tome.CWwvXkAA.js";import{T as be}from"./Tome_Link.D043OkJN.js";import{T as fe}from"./Tome_Subheading.CQDgnSH8.js";import{s as $}from"./render.Cpb4M2J0.js";import{g as Be,i as Ne}from"./theme.svelte.C9sMSE_1.js";import{M as oe}from"./Mdn_Link.Ctd6jbBJ.js";import{M as ge}from"./Module_Link.flCEfUBv.js";import{b as Ue}from"./input.3JjMmJid.js";import{C as qe}from"./Code.BpqY8T6K.js";import{d as Fe}from"./variables.C064wX_m.js";import{U as pe}from"./Unfinished_Implementation_Warning.D94y4Otm.js";const We=(i=0)=>new Promise(e=>setTimeout(e,i));var je=x('<div class="teleport svelte-gjkzv5"><!></div>');function Je(i,e){H(e,!0);let a=P(void 0);ke(()=>{t(a)&&e.to&&g(t(a),e.to)});let s=P(!1);const g=(l,y)=>{var b;C(s,!0),y.appendChild(l),(b=e.onmove)==null||b.call(e,l,y)};Re(()=>{var l,y;(y=(l=t(a))==null?void 0:l.parentNode)==null||y.removeChild(t(a))});var c=je();se(c,l=>C(a,l),()=>t(a));var h=n(c);ce(h,()=>e.children),o(c),F(()=>c.hidden=!t(s)),u(i,c),Q()}var Ve=(i,e,a)=>{i.target===t(e)&&a(i)},Ye=x('<div class="dialog svelte-2t3xer" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-2t3xer"><div class="dialog_wrapper svelte-2t3xer"><div class="dialog_bg svelte-2t3xer" aria-hidden="true"></div> <div class="dialog_content svelte-2t3xer" role="none"><!></div></div></div></div>');function xe(i,e){H(e,!0);const a=U(e,"layout",3,"centered"),s=U(e,"index",3,0),g=U(e,"active",3,!0),c="body",h="fuz_dialog";let l=P(void 0);ke(()=>{y(e.container)});const y=_=>{if(_)C(l,q(_));else{const f=document.getElementById(h);if(f)C(l,q(f));else{const p=document.querySelector(c);if(!p)throw Error(`Cannot find dialog root element with selector '${c}'`);C(l,q(document.createElement("div"))),t(l).id=h,t(l).style.display="contents",p.appendChild(t(l))}}};let b=P(void 0),v=P(void 0);const d=_=>{var f;_&&ee(_),(f=e.onclose)==null||f.call(e)},k=_=>{var f,p;if(_.key==="Escape"&&!De(_.target)){const S=(f=t(b))==null?void 0:f.parentElement,I=(p=S==null?void 0:S.parentElement)==null?void 0:p.children,M=Array.prototype.indexOf.call(I,S);(!I||M===I.length-1||M===-1)&&d(_)}};let T=P(!1);Ee("keydown",Ie,function(..._){var f;(f=g()?k:void 0)==null||f.apply(this,_)}),Je(i,{get to(){return t(l)},onmove:async()=>{var _;await We(),C(T,!0),(_=t(b))==null||_.focus()},children:(_,f)=>{var p=Ye();se(p,D=>C(b,D),()=>t(b));var S=n(p),I=n(S),M=n(I);M.__mousedown=d;var N=r(M,2);se(N,D=>C(v,D),()=>t(v)),N.__mousedown=[Ve,v,d];var W=n(N);A(W,()=>t(T),D=>{var L=le(),G=Y(L);ce(G,()=>e.children,()=>d),u(D,L)}),o(N),o(I),o(S),o(p),F(()=>{re(p,"ready",t(T)),re(p,"layout_page",a()==="page"),Ae(p,"z-index",100+s())}),u(_,p)},$$slots:{default:!0}}),Q()}de(["mousedown"]);var He=(i,e,a,s)=>{var g,c;ee(i),((g=e())==null?void 0:g(t(a)))!==!1&&((c=s.onselect)==null||c.call(s,t(a)))},Qe=(i,e,a)=>{var s;ee(i),(s=e.onedit)==null||s.call(e,t(a))},Ge=x('<button type="button" class="icon_button plain">•••</button>'),Ke=x('<li class="row" role="none"><button type="button" class="theme_button color_a svelte-df411s" role="menuitemradio"> </button> <!></li>'),Xe=x('<menu class="theme_input unstyled"></menu>');function Ze(i,e){H(e,!0);const a=U(e,"selected_theme",23,Be),s=U(e,"themes",3,Ne),g=U(e,"enable_editing",3,!1),c=U(e,"select",3,l=>{a().theme=l});var h=Xe();we(h,21,s,l=>l.name,(l,y)=>{var b=Ke();const v=J(()=>t(y).name===a().theme.name);var d=n(b);d.__click=[He,c,y,e];var k=n(d);o(d);var T=r(d,2);A(T,g,_=>{var f=Ge();f.__click=[Qe,e,y],u(_,f)}),o(b),F(()=>{ue(d,"aria-label",`${t(y).name??""} theme`),ue(d,"aria-checked",t(v)),re(d,"selected",t(v)),$(k,t(y).name)}),u(l,b)}),o(h),u(i,h),Q()}de(["click"]);const $e={name:"base",variables:[]},Te=[$e,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue) var(--tint_saturation) 86%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_color_2",light:"hsl(var(--tint_hue) var(--tint_saturation) 8%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 90%)"},{name:"text_color_3",light:"hsl(var(--tint_hue) var(--tint_saturation) 16%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 83%)"},{name:"text_color_5",light:"hsl(var(--tint_hue) var(--tint_saturation) 24%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 75%)"}]}];var et=x('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),tt=x('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),at=x("<button><!><!><!></button>");function ot(i,e){H(e,!0);let a=P(!1),s=P(!1);const g=async v=>{var d,k;C(a,!1),C(s,!1);try{await navigator.clipboard.writeText(e.text)}catch{C(s,!0),(d=e.onclick)==null||d.call(e,null,v);return}C(a,!0),(k=e.onclick)==null||k.call(e,e.text,v)};var c=at();let h;var l=n(c);A(l,()=>e.children,v=>{var d=le(),k=Y(d);ce(k,()=>e.children,()=>t(a),()=>t(s)),u(v,d)},v=>{var d=V("📋");u(v,d)});var y=r(l);A(y,()=>t(a),v=>{var d=et();u(v,d)});var b=r(y);A(b,()=>t(s),v=>{var d=tt();u(v,d)}),o(c),F(()=>h=Pe(c,h,{...e.attrs,type:"button",class:e.classes??(e.children?void 0:"icon_button size_lg"),onclick:g},"svelte-rumh1g")),u(i,c),Q()}const nt=(i,e={})=>{const{comments:a=!1,id:s=null,empty_default_theme:g=!0,specificity:c=2}=e,h=i.name===Te[0].name?g?null:Fe:i.variables;if(!(h!=null&&h.length))return"";const l=h.map(v=>ye(v)).filter(Boolean),y=h.map(v=>ye(v,!0,a)).filter(Boolean),b=(s?"#"+s:":root").repeat(c);return`${l.length?`${b} {
	${l.join(`
	`)}
}`:""}
${y.length?`${b}.dark {
	${y.join(`
	`)}
}`:""}
`.trim()},ye=(i,e=!1,a=!0)=>{const s=e?i.dark:i.light;return s?"--"+i.name+": "+s+";"+(a&&i.summary?" /* "+i.summary+" */":""):""};var rt=x("<blockquote> </blockquote>"),it=x('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function st(i,e){H(e,!0);var a=le(),s=Y(a);A(s,()=>e.variable,g=>{var c=it(),h=n(c),l=r(n(h),2),y=n(l);o(l),o(h);var b=r(h,2);A(b,()=>e.variable.summary,_=>{var f=rt(),p=n(f);o(f),F(()=>$(p,e.variable.summary)),u(_,f)});var v=r(b,2),d=r(n(v),2);ie(d),o(v);var k=r(v,2),T=r(n(k),2);ie(T),o(k),o(c),F(()=>{$(y,`--${e.variable.name??""}`),he(d,e.variable.light??""),he(T,e.variable.dark??"")}),u(g,c)}),u(i,a),Q()}const lt=(i,e,a,s)=>{var g;t(e)&&((g=a.onsave)==null||g.call(a,t(s)))},dt=i=>{ee(i),alert("TODO")};var ct=(i,e,a)=>e(i,t(a)),vt=x('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),_t=x('<div class="copy svelte-cno0i6"><!></div> <!>',1),mt=x('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),ut=x(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function ht(i,e){H(e,!0);const a=U(e,"theme",3,null);let s=P(q(a()?a().name:"new theme")),g=P(q(a()?a().variables:[]));const c=J(()=>({name:t(s),variables:t(g)})),h=J(()=>nt(t(c),{empty_default_theme:!1,specificity:1})),l=J(()=>t(g).reduce((m,w)=>w.light?m+1:m,0)),y=J(()=>t(g).reduce((m,w)=>w.dark?m+1:m,0));let b=P(null);const v=(m,w)=>{ee(m),C(b,q(w)),C(g,q(t(g).slice()))},d=J(()=>!!a()),k=J(()=>a()?t(s)!==a().name||t(g)!==a().variables:!0);var T=ut(),_=Y(T),f=n(_),p=n(f);A(p,()=>t(d),m=>{var w=V("edit");u(m,w)},m=>{var w=V("create");u(m,w)}),R(),o(f);var S=r(f,4),I=n(S),M=n(I),N=n(M);o(M);var W=r(M,2);W.__click=[dt],o(I);var D=r(I,2),L=n(D),G=r(n(L),2);ie(G),o(L);var j=r(L,2);j.__click=[lt,k,e,c];var te=n(j);A(te,()=>t(d),m=>{var w=V("save changes");u(m,w)},m=>{var w=V("create theme");u(m,w)}),o(j),o(D),o(S);var K=r(S,2),Z=n(K);we(Z,21,()=>t(g),m=>m.name,(m,w)=>{var z=vt();z.__click=[ct,v,w];var E=n(z);o(z),F(()=>$(E,`--${t(w).name??""}`)),u(m,z)}),o(Z);var X=r(Z,2),ae=n(X);A(ae,()=>t(h),m=>{var w=_t(),z=Y(w),E=n(z);ot(E,{get text(){return t(h)}}),o(z);var B=r(z,2);qe(B,{get content(){return t(h)},lang:"css"}),u(m,w)}),o(X),o(K),o(_);var ne=r(_,2);A(ne,()=>t(b),m=>{xe(m,{onclose:()=>C(b,null),children:(z,E=Me)=>{var B=mt(),O=n(B),ve=n(O);st(ve,{get variable(){return t(b)}});var _e=r(ve,2);pe(_e,{});var Ce=r(_e,2);Ce.__click=function(...Se){var me;(me=E())==null||me.apply(this,Se)},o(O),o(B),u(z,B)}})}),F(()=>{$(N,`variables: ${t(l)??""} light, ${t(y)??""} dark`),j.disabled=!t(k)}),Ue(G,()=>t(s),m=>C(s,m)),u(i,T),Q()}de(["click"]);var bt=x("<code>@ryanatkn/moss/theme.ts</code>"),ft=x("<code>@ryanatkn/moss/themes.ts</code>"),gt=x(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),yt=x('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),kt=x("<!>  <!>",1);function Ft(i,e){H(e,!0);const s=Le("themes"),g=Te.slice();let c=P(null);var h=kt(),l=Y(h);ze(l,{tome:s,children:(b,v)=>{var d=gt(),k=Y(d),T=n(k),_=r(n(T));oe(_,{path:"Web/CSS/color-scheme"});var f=r(_,2);be(f,{name:"variables"});var p=r(f,2);oe(p,{path:"Web/CSS/--*",children:(E,B)=>{R();var O=V("CSS custom properties");u(E,O)},$$slots:{default:!0}}),R(),o(T),R(2),o(k);var S=r(k,2),I=n(S);fe(I,{text:"Color scheme",slug:"color-scheme"});var M=r(I,2),N=r(n(M));oe(N,{path:"Web/CSS/color-scheme"}),R(5),o(M);var W=r(M,2),D=r(n(W));oe(D,{path:"Web/CSS/@media/prefers-color-scheme"}),R(3),o(W);var L=r(W,2),G=n(L);Oe(G,{}),o(L),R(2),o(S);var j=r(S,2),te=n(j);fe(te,{text:"Builtin themes",slug:"builtin-themes"});var K=r(te,2),Z=r(n(K));be(Z,{name:"variables"}),R(),o(K);var X=r(K,2),ae=r(n(X));ge(ae,{path:"theme.ts",children:(E,B)=>{var O=bt();u(E,O)},$$slots:{default:!0}});var ne=r(ae,2);ge(ne,{path:"themes.ts",children:(E,B)=>{var O=ft();u(E,O)},$$slots:{default:!0}}),R(),o(X);var m=r(X,2),w=n(m);Ze(w,{themes:g,enable_editing:!0,onedit:E=>C(c,q(E))}),o(m);var z=r(m,2);pe(z,{children:(E,B)=>{R();var O=V("The builtin themes need more work, but the proof of concept is ready!");u(E,O)},$$slots:{default:!0}}),o(j),u(b,d)},$$slots:{default:!0}});var y=r(l,2);A(y,()=>t(c),b=>{xe(b,{onclose:()=>C(c,null),children:(v,d)=>{var k=yt(),T=n(k),_=n(T);ht(_,{get theme(){return t(c)},onsave:f=>{console.log("update theme",f),alert("todo")}}),o(T),o(k),u(v,k)},$$slots:{default:!0}})}),u(i,h),Q()}export{xe as D,st as S,Ft as _};
