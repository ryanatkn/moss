import{a as c,t as p,q as Ie,c as le,g as se,b as G}from"./disclose-version.CdPiE6k7.js";import{p as K,a2 as we,F as t,G as C,c as n,r as o,t as H,a as V,ag as A,aI as Me,s as r,f as F,K as Y,n as R,af as ze}from"./runtime.c_5Q9pFk.js";import{p as W,i as O}from"./if.NhGLqRpJ.js";import{T as Pe}from"./Tome_Content.f0VhGnET.js";import{s as de,t as re,e as pe,b as ue,d as Ae,r as ne,k as he}from"./class.DaKLncqJ.js";import{s as Oe}from"./style.Bk7ejTAN.js";import{b as ie}from"./this.XWmbQ0jt.js";import{p as j}from"./props.q41Iy6B9.js";import{s as ee,a as De,C as Le}from"./Color_Scheme_Input.CCWibgYc.js";import{o as Re}from"./index-client.DB2246K_.js";import{f as Be}from"./tome.DmBdPuTz.js";import{T as fe}from"./Tome_Link.U2HWPKp5.js";import{T as be,a as ge}from"./Tome_Section_Header.B1hRAN3-.js";import{s as $}from"./render.CyQl6cMn.js";import{g as Ne,i as qe}from"./theme.svelte.CTSoF__d.js";import{M as ae}from"./Mdn_Link.DcCnEKXj.js";import{M as ye}from"./Module_Link.But9wPtU.js";import{b as Fe}from"./input.B4vDjf85.js";import{C as Ue}from"./Code.CdVYVEZR.js";import{d as We}from"./variables.C064wX_m.js";import{U as xe}from"./Unfinished_Implementation_Warning.Bmn-vyW3.js";const je=(i=0)=>new Promise(e=>setTimeout(e,i));var He=p('<div class="teleport svelte-gjkzv5"><!></div>');function Je(i,e){K(e,!0);let a=A(void 0);we(()=>{t(a)&&e.to&&g(t(a),e.to)});let l=A(!1);const g=(s,k)=>{var h;C(l,!0),k.appendChild(s),(h=e.onmove)==null||h.call(e,s,k)};Re(()=>{var s,k;(k=(s=t(a))==null?void 0:s.parentNode)==null||k.removeChild(t(a))});var v=He();ie(v,s=>C(a,s),()=>t(a));var u=n(v);de(u,()=>e.children),o(v),H(()=>v.hidden=!t(l)),c(i,v),V()}var Ye=(i,e,a)=>{i.target===t(e)&&a(i)},Ge=p('<div class="dialog svelte-2t3xer" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-2t3xer"><div class="dialog_wrapper svelte-2t3xer"><div class="dialog_bg svelte-2t3xer" aria-hidden="true"></div> <div class="dialog_content svelte-2t3xer" role="none"><!></div></div></div></div>');function Te(i,e){K(e,!0);const a=j(e,"layout",3,"centered"),l=j(e,"index",3,0),g=j(e,"active",3,!0),v="body",u="fuz_dialog";let s=A(void 0);we(()=>{k(e.container)});const k=m=>{if(m)C(s,W(m));else{const f=document.getElementById(u);if(f)C(s,W(f));else{const x=document.querySelector(v);if(!x)throw Error(`Cannot find dialog root element with selector '${v}'`);C(s,W(document.createElement("div"))),t(s).id=u,t(s).style.display="contents",x.appendChild(t(s))}}};let h=A(void 0),_=A(void 0);const d=m=>{var f;m&&ee(m),(f=e.onclose)==null||f.call(e)},w=m=>{var f,x;if(m.key==="Escape"&&!De(m.target)){const E=(f=t(h))==null?void 0:f.parentElement,z=(x=E==null?void 0:E.parentElement)==null?void 0:x.children,S=Array.prototype.indexOf.call(z,E);(!z||S===z.length-1||S===-1)&&d(m)}};let T=A(!1);Ie("keydown",Me,function(...m){var f;(f=g()?w:void 0)==null||f.apply(this,m)}),Je(i,{get to(){return t(s)},onmove:async()=>{var m;await je(),C(T,!0),(m=t(h))==null||m.focus()},children:(m,f)=>{var x=Ge();ie(x,I=>C(h,I),()=>t(h));var E=n(x),z=n(E),S=n(z);S.__mousedown=d;var B=r(S,2);ie(B,I=>C(_,I),()=>t(_)),B.__mousedown=[Ye,_,d];var D=n(B);O(D,()=>t(T),I=>{var M=le(),U=F(M);de(U,()=>e.children,()=>d),c(I,M)}),o(B),o(z),o(E),o(x),H(()=>{re(x,"ready",t(T)),re(x,"layout_page",a()==="page"),Oe(x,"z-index",100+l())}),c(m,x)},$$slots:{default:!0}}),V()}se(["mousedown"]);var Ke=(i,e,a,l)=>{var g,v;ee(i),((g=e())==null?void 0:g(t(a)))!==!1&&((v=l.onselect)==null||v.call(l,t(a)))},Ve=(i,e,a)=>{var l;ee(i),(l=e.onedit)==null||l.call(e,t(a))},Qe=p('<button type="button" class="icon_button plain">•••</button>'),Xe=p('<li class="row" role="none"><button type="button" class="theme_button color_a svelte-df411s" role="menuitemradio"> </button> <!></li>'),Ze=p('<menu class="theme_input unstyled"></menu>');function $e(i,e){K(e,!0);const a=j(e,"selected_theme",23,Ne),l=j(e,"themes",3,qe),g=j(e,"enable_editing",3,!1),v=j(e,"select",3,s=>{a().theme=s});var u=Ze();pe(u,21,l,s=>s.name,(s,k)=>{var h=Xe();const _=Y(()=>t(k).name===a().theme.name);var d=n(h);d.__click=[Ke,v,k,e];var w=n(d);o(d);var T=r(d,2);O(T,g,m=>{var f=Qe();f.__click=[Ve,e,k],c(m,f)}),o(h),H(()=>{ue(d,"aria-label",`${t(k).name??""} theme`),ue(d,"aria-checked",t(_)),re(d,"selected",t(_)),$(w,t(k).name)}),c(s,h)}),o(u),c(i,u),V()}se(["click"]);const et={name:"base",variables:[]},Ce=[et,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue) var(--tint_saturation) 86%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_color_2",light:"hsl(var(--tint_hue) var(--tint_saturation) 8%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 90%)"},{name:"text_color_3",light:"hsl(var(--tint_hue) var(--tint_saturation) 16%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 83%)"},{name:"text_color_5",light:"hsl(var(--tint_hue) var(--tint_saturation) 24%)",dark:"hsl(var(--tint_hue) var(--tint_saturation) 75%)"}]}];var tt=p('<small class="indicator color_b_5 svelte-rumh1g">copied!</small>'),at=p('<small class="indicator color_c_5 svelte-rumh1g">failed</small>'),ot=p("<button><!><!><!></button>");function rt(i,e){K(e,!0);let a=A(!1),l=A(!1);const g=async _=>{var d,w;C(a,!1),C(l,!1);try{await navigator.clipboard.writeText(e.text)}catch{C(l,!0),(d=e.onclick)==null||d.call(e,null,_);return}C(a,!0),(w=e.onclick)==null||w.call(e,e.text,_)};var v=ot();let u;var s=n(v);O(s,()=>e.children,_=>{var d=le(),w=F(d);de(w,()=>e.children,()=>t(a),()=>t(l)),c(_,d)},_=>{var d=G("📋");c(_,d)});var k=r(s);O(k,()=>t(a),_=>{var d=tt();c(_,d)});var h=r(k);O(h,()=>t(l),_=>{var d=at();c(_,d)}),o(v),H(()=>u=Ae(v,u,{...e.attrs,type:"button",class:e.classes??(e.children?void 0:"icon_button size_lg"),onclick:g},"svelte-rumh1g")),c(i,v),V()}const nt=(i,e={})=>{const{comments:a=!1,id:l=null,empty_default_theme:g=!0,specificity:v=2}=e,u=i.name===Ce[0].name?g?null:We:i.variables;if(!(u!=null&&u.length))return"";const s=u.map(_=>ke(_)).filter(Boolean),k=u.map(_=>ke(_,!0,a)).filter(Boolean),h=(l?"#"+l:":root").repeat(v);return`${s.length?`${h} {
	${s.join(`
	`)}
}`:""}
${k.length?`${h}.dark {
	${k.join(`
	`)}
}`:""}
`.trim()},ke=(i,e=!1,a=!0)=>{const l=e?i.dark:i.light;return l?"--"+i.name+": "+l+";"+(a&&i.summary?" /* "+i.summary+" */":""):""};var it=p("<blockquote> </blockquote>"),lt=p('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function st(i,e){K(e,!0);var a=le(),l=F(a);O(l,()=>e.variable,g=>{var v=lt(),u=n(v),s=r(n(u),2),k=n(s);o(s),o(u);var h=r(u,2);O(h,()=>e.variable.summary,m=>{var f=it(),x=n(f);o(f),H(()=>$(x,e.variable.summary)),c(m,f)});var _=r(h,2),d=r(n(_),2);ne(d),o(_);var w=r(_,2),T=r(n(w),2);ne(T),o(w),o(v),H(()=>{$(k,`--${e.variable.name??""}`),he(d,e.variable.light??""),he(T,e.variable.dark??"")}),c(g,v)}),c(i,a),V()}const dt=(i,e,a,l)=>{var g;t(e)&&((g=a.onsave)==null||g.call(a,t(l)))},vt=i=>{ee(i),alert("TODO")};var ct=(i,e,a)=>e(i,t(a)),_t=p('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),mt=p('<div class="copy svelte-cno0i6"><!></div> <!>',1),ut=p('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),ht=p(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function ft(i,e){K(e,!0);const a=j(e,"theme",3,null);let l=A(W(a()?a().name:"new theme")),g=A(W(a()?a().variables:[]));const v=Y(()=>({name:t(l),variables:t(g)})),u=Y(()=>nt(t(v),{empty_default_theme:!1,specificity:1})),s=Y(()=>t(g).reduce((b,y)=>y.light?b+1:b,0)),k=Y(()=>t(g).reduce((b,y)=>y.dark?b+1:b,0));let h=A(null);const _=(b,y)=>{ee(b),C(h,W(y)),C(g,W(t(g).slice()))},d=Y(()=>!!a()),w=Y(()=>a()?t(l)!==a().name||t(g)!==a().variables:!0);var T=ht(),m=F(T),f=n(m),x=n(f);O(x,()=>t(d),b=>{var y=G("edit");c(b,y)},b=>{var y=G("create");c(b,y)}),R(),o(f);var E=r(f,4),z=n(E),S=n(z),B=n(S);o(S);var D=r(S,2);D.__click=[vt],o(z);var I=r(z,2),M=n(I),U=r(n(M),2);ne(U),o(M);var P=r(M,2);P.__click=[dt,w,e,v];var Q=n(P);O(Q,()=>t(d),b=>{var y=G("save changes");c(b,y)},b=>{var y=G("create theme");c(b,y)}),o(P),o(I),o(E);var J=r(E,2),N=n(J);pe(N,21,()=>t(g),b=>b.name,(b,y)=>{var L=_t();L.__click=[ct,_,y];var X=n(L);o(L),H(()=>$(X,`--${t(y).name??""}`)),c(b,L)}),o(N);var te=r(N,2),oe=n(te);O(oe,()=>t(u),b=>{var y=mt(),L=F(y),X=n(L);rt(X,{get text(){return t(u)}}),o(L);var Z=r(L,2);Ue(Z,{get content(){return t(u)},lang:"css"}),c(b,y)}),o(te),o(J),o(m);var q=r(m,2);O(q,()=>t(h),b=>{Te(b,{onclose:()=>C(h,null),children:(L,X=ze)=>{var Z=ut(),ve=n(Z),ce=n(ve);st(ce,{get variable(){return t(h)}});var _e=r(ce,2);xe(_e,{});var Se=r(_e,2);Se.__click=function(...Ee){var me;(me=X())==null||me.apply(this,Ee)},o(ve),o(Z),c(L,Z)}})}),H(()=>{$(B,`variables: ${t(s)??""} light, ${t(k)??""} dark`),P.disabled=!t(w)}),Fe(U,()=>t(l),b=>C(l,b)),c(i,T),V()}se(["click"]);var bt=p(`<!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p>`,1),gt=p("<code>@ryanatkn/moss/theme.ts</code>"),yt=p("<code>@ryanatkn/moss/themes.ts</code>"),kt=p(`<!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!>`,1),wt=p(`<section><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <!> <!>`,1),pt=p('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),xt=p("<!>  <!>",1);function Jt(i,e){K(e,!0);const l=Be("themes"),g=Ce.slice();let v=A(null);var u=xt(),s=F(u);Pe(s,{tome:l,children:(h,_)=>{var d=wt(),w=F(d),T=n(w),m=r(n(T));ae(m,{path:"Web/CSS/color-scheme"});var f=r(m,2);fe(f,{name:"variables"});var x=r(f,2);ae(x,{path:"Web/CSS/--*",children:(S,B)=>{R();var D=G("CSS custom properties");c(S,D)},$$slots:{default:!0}}),R(),o(T),R(2),o(w);var E=r(w,2);be(E,{children:(S,B)=>{var D=bt(),I=F(D);ge(I,{text:"Color scheme"});var M=r(I,2),U=r(n(M));ae(U,{path:"Web/CSS/color-scheme"}),R(5),o(M);var P=r(M,2),Q=r(n(P));ae(Q,{path:"Web/CSS/@media/prefers-color-scheme"}),R(3),o(P);var J=r(P,2),N=n(J);Le(N,{}),o(J),R(2),c(S,D)},$$slots:{default:!0}});var z=r(E,2);be(z,{children:(S,B)=>{var D=kt(),I=F(D);ge(I,{text:"Builtin themes"});var M=r(I,2),U=r(n(M));fe(U,{name:"variables"}),R(),o(M);var P=r(M,2),Q=r(n(P));ye(Q,{path:"theme.ts",children:(q,b)=>{var y=gt();c(q,y)},$$slots:{default:!0}});var J=r(Q,2);ye(J,{path:"themes.ts",children:(q,b)=>{var y=yt();c(q,y)},$$slots:{default:!0}}),R(),o(P);var N=r(P,2),te=n(N);$e(te,{themes:g,enable_editing:!0,onedit:q=>C(v,W(q))}),o(N);var oe=r(N,2);xe(oe,{children:(q,b)=>{R();var y=G("The builtin themes need more work, but the proof of concept is ready!");c(q,y)},$$slots:{default:!0}}),c(S,D)},$$slots:{default:!0}}),c(h,d)},$$slots:{default:!0}});var k=r(s,2);O(k,()=>t(v),h=>{Te(h,{onclose:()=>C(v,null),children:(_,d)=>{var w=pt(),T=n(w),m=n(T);ft(m,{get theme(){return t(v)},onsave:f=>{console.log("update theme",f),alert("todo")}}),o(T),o(w),c(_,w)},$$slots:{default:!0}})}),c(i,u),V()}export{Te as D,st as S,Jt as _};
