import{a as m,t as x,q as Ee,c as de,g as ce,b as J}from"./disclose-version.BUQKzkHR.js";import{p as H,O as ke,P as t,c as r,r as o,t as q,a as Q,U as P,V as C,aE as Ie,s as n,f as Y,Q as V,T as R,ae as Me}from"./runtime.B3w0Sz81.js";import{p as N,i as A,b as U}from"./props.CYeKYDdl.js";import{T as ze}from"./Tome_Detail.BPsHww5m.js";import{s as ve,t as ie,e as we,b as ue,d as Oe,r as se,k as he}from"./class.OuJpC35m.js";import{s as Pe}from"./style.Bk7ejTAN.js";import{b as le}from"./this.A9ezyZmi.js";import{s as te,a as Ae,C as De}from"./Color_Scheme_Input.a4WQuR0r.js";import{o as Le}from"./index-client.BlaVLTmt.js";import{a as Re}from"./tome.D6vM4_17.js";import{T as be}from"./Tome_Link.D6sZz34x.js";import{T as fe}from"./Tome_Subheading.BqsuOXhe.js";import{s as ee}from"./render.CMkdwi7K.js";import{g as Be,i as Ne}from"./theme.svelte.DkaS_rEP.js";import{M as re}from"./Mdn_Link.DqTkoPuN.js";import{M as ge}from"./Module_Link.i3tyDTjV.js";import{b as Ue}from"./input.DaehQLoD.js";import{C as qe}from"./Code.B5NC9bOb.js";import{d as We}from"./variables.DGMy1Wsn.js";import{U as pe}from"./Unfinished_Implementation_Warning.DkBbiAG1.js";const Fe=(i=0)=>new Promise(e=>setTimeout(e,i));var je=x('<div class="teleport svelte-gjkzv5"><!></div>');function Ve(i,e){H(e,!0);let a=P(void 0);ke(()=>{t(a)&&e.to&&b(t(a),e.to)});let s=P(!1);const b=(l,g)=>{var y;C(s,!0),g.appendChild(l),(y=e.onmove)==null||y.call(e,l,g)};Le(()=>{var l,g;(g=(l=t(a))==null?void 0:l.parentNode)==null||g.removeChild(t(a))});var c=je();le(c,l=>C(a,l),()=>t(a));var u=r(c);ve(u,()=>e.children),o(c),q(()=>c.hidden=!t(s)),m(i,c),Q()}var Je=(i,e,a)=>{i.target===t(e)&&a(i)},Ye=x('<div class="dialog svelte-7gv63e" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-7gv63e"><div class="dialog_wrapper svelte-7gv63e"><div class="dialog_bg svelte-7gv63e" aria-hidden="true"></div> <div class="dialog_content svelte-7gv63e" role="none"><!></div></div></div></div>');function xe(i,e){H(e,!0);const a=N(e,"layout",3,"centered"),s=N(e,"index",3,0),b=N(e,"active",3,!0),c="body",u="fuz_dialog";let l=P(void 0);ke(()=>{g(e.container)});const g=_=>{if(_)C(l,U(_));else{const h=document.getElementById(u);if(h)C(l,U(h));else{const w=document.querySelector(c);if(!w)throw Error(`Cannot find dialog root element with selector '${c}'`);C(l,U(document.createElement("div"))),t(l).id=u,t(l).style.display="contents",w.appendChild(t(l))}}};let y=P(void 0),v=P(void 0);const d=_=>{var h;_&&te(_),(h=e.onclose)==null||h.call(e)},T=_=>{var h,w;if(_.key==="Escape"&&!Ae(_.target)){const I=(h=t(y))==null?void 0:h.parentElement,E=(w=I==null?void 0:I.parentElement)==null?void 0:w.children,M=Array.prototype.indexOf.call(E,I);(!E||M===E.length-1||M===-1)&&d(_)}};let p=P(!1);Ee("keydown",Ie,function(..._){var h;(h=b()?T:void 0)==null||h.apply(this,_)}),Ve(i,{get to(){return t(l)},onmove:async()=>{var _;await Fe(),C(p,!0),(_=t(y))==null||_.focus()},children:(_,h)=>{var w=Ye();le(w,z=>C(y,z),()=>t(y));var I=r(w),E=r(I),M=r(E);M.__mousedown=d;var D=n(M,2);le(D,z=>C(v,z),()=>t(v)),D.__mousedown=[Je,v,d];var X=r(D);A(X,()=>t(p),z=>{var B=de(),W=Y(B);ve(W,()=>e.children,()=>d),m(z,B)}),o(D),o(E),o(I),o(w),q(()=>{ie(w,"ready",t(p)),ie(w,"layout_page",a()==="page"),Pe(w,"z-index",100+s())}),m(_,w)},$$slots:{default:!0}}),Q()}ce(["mousedown"]);var He=(i,e,a,s)=>{var b,c;te(i),((b=e())==null?void 0:b(t(a)))!==!1&&((c=s.onselect)==null||c.call(s,t(a)))},Qe=(i,e,a)=>{var s;te(i),(s=e.onedit)==null||s.call(e,t(a))},Ge=x('<button type="button" class="icon_button plain">•••</button>'),Ke=x('<li class="row" role="none"><button type="button" class="theme_button color_a svelte-df411s" role="menuitemradio"> </button> <!></li>'),Xe=x('<menu class="theme_input unstyled"></menu>');function Ze(i,e){H(e,!0);const a=N(e,"selected_theme",23,Be),s=N(e,"themes",3,Ne),b=N(e,"enable_editing",3,!1),c=N(e,"select",3,l=>{a().theme=l});var u=Xe();we(u,21,s,l=>l.name,(l,g)=>{var y=Ke();const v=V(()=>t(g).name===a().theme.name);var d=r(y);d.__click=[He,c,g,e];var T=r(d);o(d);var p=n(d,2);A(p,b,_=>{var h=Ge();h.__click=[Qe,e,g],m(_,h)}),o(y),q(()=>{ue(d,"aria-label",`${t(g).name??""} theme`),ue(d,"aria-checked",t(v)),ie(d,"selected",t(v)),ee(T,t(g).name)}),m(l,y)}),o(u),m(i,u),Q()}ce(["click"]);const $e={name:"base",variables:[]},Te=[$e,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue) var(--tint_saturation) 86%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_color_2",light:"hsl(var(--tint_hue) var(--tint_saturation) 8%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 90%)"},{name:"text_color_3",light:"hsl(var(--tint_hue) var(--tint_saturation) 16%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 83%)"},{name:"text_color_5",light:"hsl(var(--tint_hue) var(--tint_saturation) 24%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 75%)"}]}];var et=x('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),tt=x('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),at=x("<button><!><!><!></button>");function ot(i,e){H(e,!0);let a=P(!1),s=P(!1);const b=async v=>{var d,T;C(a,!1),C(s,!1);try{await navigator.clipboard.writeText(e.text)}catch{C(s,!0),(d=e.onclick)==null||d.call(e,null,v);return}C(a,!0),(T=e.onclick)==null||T.call(e,e.text,v)};var c=at();let u;var l=r(c);A(l,()=>e.children,v=>{var d=de(),T=Y(d);ve(T,()=>e.children,()=>t(a),()=>t(s)),m(v,d)},v=>{var d=J("📋");m(v,d)});var g=n(l);A(g,()=>t(a),v=>{var d=et();m(v,d)});var y=n(g);A(y,()=>t(s),v=>{var d=tt();m(v,d)}),o(c),q(()=>u=Oe(c,u,{...e.attrs,type:"button",class:e.classes??(e.children?void 0:"icon_button size_lg"),onclick:b},"svelte-rumh1g")),m(i,c),Q()}const nt=(i,e={})=>{const{comments:a=!1,id:s=null,empty_default_theme:b=!0,specificity:c=2}=e,u=i.name===Te[0].name?b?null:We:i.variables;if(!(u!=null&&u.length))return"";const l=u.map(v=>ye(v)).filter(Boolean),g=u.map(v=>ye(v,!0,a)).filter(Boolean),y=(s?"#"+s:":root").repeat(c);return`${l.length?`${y} {
	${l.join(`
	`)}
}`:""}
${g.length?`${y}.dark {
	${g.join(`
	`)}
}`:""}
`.trim()},ye=(i,e=!1,a=!0)=>{const s=e?i.dark:i.light;return s?"--"+i.name+": "+s+";"+(a&&i.summary?" /* "+i.summary+" */":""):""};var rt=x("<blockquote> </blockquote>"),it=x('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function st(i,e){H(e,!0);var a=de(),s=Y(a);A(s,()=>e.variable,b=>{var c=it(),u=r(c),l=n(r(u),2),g=r(l);o(l),o(u);var y=n(u,2);A(y,()=>e.variable.summary,_=>{var h=rt(),w=r(h);o(h),q(()=>ee(w,e.variable.summary)),m(_,h)});var v=n(y,2),d=n(r(v),2);se(d),o(v);var T=n(v,2),p=n(r(T),2);se(p),o(T),o(c),q(()=>{ee(g,`--${e.variable.name??""}`),he(d,e.variable.light??""),he(p,e.variable.dark??"")}),m(b,c)}),m(i,a),Q()}const lt=(i,e,a,s)=>{var b;t(e)&&((b=a.onsave)==null||b.call(a,t(s)))},dt=i=>{te(i),alert("TODO")};var ct=(i,e,a)=>e(i,t(a)),vt=x('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),_t=x('<div class="copy svelte-cno0i6"><!></div> <!>',1),mt=x('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),ut=x(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function ht(i,e){H(e,!0);const a=N(e,"theme",3,null);let s=P(U(a()?a().name:"new theme")),b=P(U(a()?a().variables:[]));const c=V(()=>({name:t(s),variables:t(b)})),u=V(()=>nt(t(c),{empty_default_theme:!1,specificity:1})),l=V(()=>t(b).reduce((f,k)=>k.light?f+1:f,0)),g=V(()=>t(b).reduce((f,k)=>k.dark?f+1:f,0));let y=P(null);const v=(f,k)=>{te(f),C(y,U(k)),C(b,U(t(b).slice()))},d=V(()=>!!a()),T=V(()=>a()?t(s)!==a().name||t(b)!==a().variables:!0);var p=ut(),_=Y(p),h=r(_),w=r(h);A(w,()=>t(d),f=>{var k=J("edit");m(f,k)},f=>{var k=J("create");m(f,k)}),R(),o(h);var I=n(h,4),E=r(I),M=r(E),D=r(M);o(M);var X=n(M,2);X.__click=[dt],o(E);var z=n(E,2),B=r(z),W=n(r(B),2);se(W),o(B);var G=n(B,2);G.__click=[lt,T,e,c];var ae=r(G);A(ae,()=>t(d),f=>{var k=J("save changes");m(f,k)},f=>{var k=J("create theme");m(f,k)}),o(G),o(z),o(I);var Z=n(I,2),F=r(Z);we(F,21,()=>t(b),f=>f.name,(f,k)=>{var O=vt();O.__click=[ct,v,k];var j=r(O);o(O),q(()=>ee(j,`--${t(k).name??""}`)),m(f,O)}),o(F);var oe=n(F,2),$=r(oe);A($,()=>t(u),f=>{var k=_t(),O=Y(k),j=r(O);ot(j,{get text(){return t(u)}}),o(O);var S=n(O,2);qe(S,{get content(){return t(u)},lang:"css"}),m(f,k)}),o(oe),o(Z),o(_);var ne=n(_,2);A(ne,()=>t(y),f=>{xe(f,{onclose:()=>C(y,null),children:(O,j=Me)=>{var S=mt(),K=r(S),L=r(K);st(L,{get variable(){return t(y)}});var _e=n(L,2);pe(_e,{});var Ce=n(_e,2);Ce.__click=function(...Se){var me;(me=j())==null||me.apply(this,Se)},o(K),o(S),m(O,S)}})}),q(()=>{ee(D,`variables: ${t(l)??""} light, ${t(g)??""} dark`),G.disabled=!t(T)}),Ue(W,()=>t(s),f=>C(s,f)),m(i,p),Q()}ce(["click"]);var bt=x("<code>@ryanatkn/moss/theme.ts</code>"),ft=x("<code>@ryanatkn/moss/themes.ts</code>"),gt=x(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),yt=x('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),kt=x("<!> <!>",1);function Wt(i,e){H(e,!0);const s=Re("themes"),b=Te.slice();let c=P(null);var u=kt(),l=Y(u);ze(l,{tome:s,children:(v,d)=>{var T=gt(),p=Y(T),_=r(p),h=n(r(_));re(h,{path:"Web/CSS/color-scheme"});var w=n(h,2);be(w,{name:"variables"});var I=n(w,2);re(I,{path:"Web/CSS/--*",children:(S,K)=>{R();var L=J("CSS custom properties");m(S,L)},$$slots:{default:!0}}),R(),o(_),R(2),o(p);var E=n(p,2),M=r(E);fe(M,{text:"Color scheme",slug:"color-scheme"});var D=n(M,2),X=n(r(D));re(X,{path:"Web/CSS/color-scheme"}),R(5),o(D);var z=n(D,2),B=n(r(z));re(B,{path:"Web/CSS/@media/prefers-color-scheme"}),R(3),o(z);var W=n(z,2),G=r(W);De(G,{}),o(W),R(2),o(E);var ae=n(E,2),Z=r(ae);fe(Z,{text:"Builtin themes",slug:"builtin-themes"});var F=n(Z,2),oe=n(r(F));be(oe,{name:"variables"}),R(),o(F);var $=n(F,2),ne=n(r($));ge(ne,{path:"theme.ts",children:(S,K)=>{var L=bt();m(S,L)},$$slots:{default:!0}});var f=n(ne,2);ge(f,{path:"themes.ts",children:(S,K)=>{var L=ft();m(S,L)},$$slots:{default:!0}}),R(),o($);var k=n($,2),O=r(k);Ze(O,{themes:b,enable_editing:!0,onedit:S=>C(c,U(S))}),o(k);var j=n(k,2);pe(j,{children:(S,K)=>{R();var L=J("The builtin themes need more work, but the proof of concept is ready!");m(S,L)},$$slots:{default:!0}}),o(ae),m(v,T)},$$slots:{default:!0}});var g=n(l);g.nodeValue="  ";var y=n(g);A(y,()=>t(c),v=>{xe(v,{onclose:()=>C(c,null),children:(d,T)=>{var p=yt(),_=r(p),h=r(_);ht(h,{get theme(){return t(c)},onsave:w=>{console.log("update theme",w),alert("todo")}}),o(_),o(p),m(d,p)},$$slots:{default:!0}})}),m(i,u),Q()}export{xe as D,st as S,Wt as _};
