import{r as o,a as h,t as g,c as n,_ as ze,a0 as Ie,e as pe,s as e,f as G,I as se,A as J}from"./disclose-version.BNm3dIVn.js";import{p as K,I as ye,g as r,t as Y,a as X,m as A,v as C,P as R,d as V,Q as Me}from"./runtime.Cr2oxsZ3.js";import{p as W,i as O}from"./props.CM_3Vabi.js";import{p as M}from"./proxy.DC59BMmj.js";import{T as Ae}from"./Tome_Detail.D7LtV3g8.js";import{b as ke,g as we,a as _e,r as le,j as me}from"./attributes.C8Gooiyf.js";import{t as de}from"./class.CZfAnSJ3.js";import{s as xe}from"./style.iv2mhl8q.js";import{b as ve}from"./this.kuk1hfYT.js";import{s as $,a as Pe,C as De}from"./Color_Scheme_Input.62CbUqax.js";import{o as Oe}from"./index-client.DeSrF-0E.js";import{a as Le}from"./tome.DmKdddQO.js";import{T as he}from"./Tome_Link.Cmm0DsTr.js";import{T as fe}from"./Tome_Subheading.Dp8xmxVR.js";import{s as ee}from"./render.Dorzbu97.js";import{g as Re,i as Be}from"./theme.svelte.DDWWKAMb.js";import{M as ne}from"./Mdn_Link.d0wFPOhI.js";import{M as be}from"./Module_Link.C9N09AwP.js";import{b as Ne}from"./input.DDHGk-uP.js";import{C as Ue}from"./Code.mje5J1bs.js";import{d as We}from"./variables.Bf2vO9Ya.js";import{U as Te}from"./Unfinished_Implementation_Warning.C9mxwOEX.js";const je=(s=0)=>new Promise(t=>setTimeout(t,s));var qe=g('<div class="teleport svelte-gjkzv5"><!></div>');function Fe(s,t){K(t,!0);let a=A(void 0);ye(()=>{r(a)&&t.to&&i(r(a),t.to)});let l=A(!1);const i=(d,_)=>{var p;C(l,!0),_.appendChild(d),(p=t.onmove)==null||p.call(t,d,_)};Oe(()=>{var d,_;(_=(d=r(a))==null?void 0:d.parentNode)==null||_.removeChild(r(a))});var c=qe();ve(c,d=>C(a,M(d)),()=>r(a));var u=n(c);ke(u,()=>t.children),o(c),Y(()=>c.hidden=!r(l)),h(s,c),X()}var Je=(s,t,a)=>{s.target===r(t)&&a(s)},Ve=g('<div class="dialog svelte-n45e52" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-n45e52"><div class="dialog_wrapper svelte-n45e52"><div class="dialog_bg svelte-n45e52" aria-hidden="true"></div> <div class="dialog_content svelte-n45e52" role="none"><!></div></div></div></div>');function Ce(s,t){K(t,!0);const a=W(t,"layout",3,"centered"),l=W(t,"index",3,0),i=W(t,"active",3,!0),c="body",u="fuz_dialog";let d=A(void 0);ye(()=>{_(t.container)});const _=v=>{if(v)C(d,M(v));else{const f=document.getElementById(u);if(f)C(d,M(f));else{const b=document.querySelector(c);if(!b)throw Error(`Cannot find dialog root element with selector '${c}'`);C(d,M(document.createElement("div"))),r(d).id=u,r(d).style.display="contents",b.appendChild(r(d))}}};let p=A(void 0),k=A(void 0);const S=v=>{var f;v&&$(v),(f=t.onclose)==null||f.call(t)},x=v=>{var f,b;if(v.key==="Escape"&&!Pe(v.target)){const I=(f=r(p))==null?void 0:f.parentElement,E=(b=I==null?void 0:I.parentElement)==null?void 0:b.children,z=Array.prototype.indexOf.call(E,I);(!E||z===E.length-1||z===-1)&&S(v)}};let w=A(!1);ze("keydown",Ie,function(...v){const f=i()?x:void 0;return f==null?void 0:f.apply(this,v)},!1),Fe(s,{get to(){return r(d)},onmove:async()=>{var v;await je(),C(w,!0),(v=r(p))==null||v.focus()},children:(v,f)=>{var b=Ve();ve(b,B=>C(p,M(B)),()=>r(p));var I=n(b),E=n(I),z=n(E);z.__mousedown=S;var P=e(e(z,!0));ve(P,B=>C(k,M(B)),()=>r(k)),P.__mousedown=[Je,k,S];var j=n(P);O(j,()=>r(w),B=>{var N=pe(),q=G(N);ke(q,()=>t.children,()=>S),h(B,N)}),o(P),o(E),o(I),o(b),Y(()=>{de(b,"ready",r(w)),de(b,"layout_page",a()==="page"),xe(b,"z-index",100+l())}),h(v,b)},$$slots:{default:!0}}),X()}se(["mousedown"]);var Ye=(s,t,a,l,i)=>{var c,u;t(s),((c=a())==null?void 0:c(R(l)))!==!1&&((u=i.onselect)==null||u.call(i,R(l)))},He=(s,t,a,l)=>{var i;t(s),(i=a.onedit)==null||i.call(a,R(l))},Qe=g('<button type="button" class="icon_button plain">•••</button>'),Ge=g('<li class="row" role="none"><button type="button" class="theme_button svelte-df411s" role="menuitemradio"> </button> <!></li>'),Ke=g('<menu class="theme_input unstyled"></menu>');function Xe(s,t){K(t,!0);const a=W(t,"selected_theme",15,()=>M(Re())),l=W(t,"themes",3,Be),i=W(t,"enable_editing",3,!1),c=W(t,"select",3,d=>{a().theme=d});var u=Ke();we(u,77,l,(d,_)=>R(d).name,(d,_,p)=>{var k=Ge();const S=V(()=>R(_).name===a().theme.name);var x=n(k);x.__click=[Ye,$,c,_,t];var w=n(x);o(x);var v=e(e(x,!0));O(v,i,f=>{var b=Qe();b.__click=[He,$,t,_],h(f,b)}),o(k),Y(()=>{_e(x,"aria-label",`${R(_).name??""} theme`),_e(x,"aria-checked",r(S)),de(x,"selected",r(S)),ee(w,R(_).name)}),h(d,k)}),o(u),h(s,u),X()}se(["click"]);const Ze={name:"base",variables:[]},Se=[Ze,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],$e=async(s,t,a,l)=>{C(t,!1),C(a,!1);try{await navigator.clipboard.writeText(l.text)}catch{C(a,!0);return}C(t,!0)};var et=g('<small class="color_b_5 svelte-1y2zubh">copied!</small>'),tt=g('<small class="color_c_5 svelte-1y2zubh">failed</small>'),at=g('<div class="copy_to_clipboard svelte-1y2zubh"><button type="button" class="icon_button">📋</button> <!> <!></div>');function rt(s,t){let a=A(!1),l=A(!1);var i=at(),c=n(i);c.__click=[$e,a,l,t],xe(c,"font-size","var(--size_lg)");var u=e(e(c,!0));O(u,()=>r(a),_=>{var p=et();h(_,p)});var d=e(e(u,!0));O(d,()=>r(l),_=>{var p=tt();h(_,p)}),o(i),h(s,i)}se(["click"]);const ot=(s,t={})=>{const{comments:a=!1,id:l=null,empty_default_theme:i=!0,specificity:c=2}=t,u=s.name===Se[0].name?i?null:We:s.variables;if(!(u!=null&&u.length))return"";const d=u.map(k=>ge(k)).filter(Boolean),_=u.map(k=>ge(k,!0,a)).filter(Boolean),p=(l?"#"+l:":root").repeat(c);return`${d.length?`${p} {
	${d.join(`
	`)}
}`:""}
${_.length?`${p}.dark {
	${_.join(`
	`)}
}`:""}
`.trim()},ge=(s,t=!1,a=!0)=>{const l=t?s.dark:s.light;return l?"--"+s.name+": "+l+";"+(a&&s.summary?" /* "+s.summary+" */":""):""};var nt=g("<blockquote> </blockquote>"),st=g('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function it(s,t){K(t,!0);var a=pe(),l=G(a);O(l,()=>t.variable,i=>{var c=st(),u=n(c),d=n(u),_=e(e(d,!0)),p=n(_);o(_),o(u);var k=e(e(u,!0));O(k,()=>t.variable.summary,I=>{var E=nt(),z=n(E);o(E),Y(()=>ee(z,t.variable.summary)),h(I,E)});var S=e(e(k,!0)),x=n(S),w=e(e(x,!0));le(w),o(S);var v=e(e(S,!0)),f=n(v),b=e(e(f,!0));le(b),o(v),o(c),Y(()=>{ee(p,`--${t.variable.name??""}`),me(w,t.variable.light??""),me(b,t.variable.dark??"")}),h(i,c)}),h(s,a),X()}const lt=(s,t,a,l)=>{var i;r(t)&&((i=a.onsave)==null||i.call(a,r(l)))},dt=(s,t)=>{t(s),alert("TODO")};var vt=g("edit",1),ct=g("create",1),ut=g("save changes",1),_t=g("create theme",1),mt=(s,t,a)=>t(s,R(a)),ht=g('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),ft=g('<div class="copy svelte-cno0i6"><!></div> <!>',1),bt=g('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),gt=g(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function pt(s,t){K(t,!0);const a=W(t,"theme",3,null);let l=A(M(a()?a().name:"new theme")),i=A(M(a()?a().variables:[]));const c=V(()=>({name:r(l),variables:r(i)})),u=V(()=>ot(r(c),{empty_default_theme:!1,specificity:1})),d=V(()=>r(i).reduce((m,y)=>y.light?m+1:m,0)),_=V(()=>r(i).reduce((m,y)=>y.dark?m+1:m,0));let p=A(null);const k=(m,y)=>{$(m),C(p,M(y)),C(i,M(r(i).slice()))},S=V(()=>!!a()),x=V(()=>a()?r(l)!==a().name||r(i)!==a().variables:!0);var w=gt(),v=G(w),f=n(v),b=n(f);O(b,()=>r(S),m=>{var y=vt();h(m,y)},m=>{var y=ct();h(m,y)}),J(),o(f);var I=e(e(f,!0)),E=e(e(I,!0)),z=n(E),P=n(z),j=n(P);o(P);var B=e(e(P,!0));B.__click=[dt,$],o(z);var N=e(e(z,!0)),q=n(N),te=n(q),ae=e(e(te,!0));le(ae),o(q);var F=e(e(q,!0));F.__click=[lt,x,t,c];var re=n(F);O(re,()=>r(S),m=>{var y=ut();h(m,y)},m=>{var y=_t();h(m,y)}),o(F),o(N),o(E);var H=e(e(E,!0)),Z=n(H);we(Z,77,()=>r(i),(m,y)=>R(m).name,(m,y,U)=>{var T=ht();T.__click=[mt,k,y];var D=n(T);o(T),Y(()=>ee(D,`--${R(y).name??""}`)),h(m,T)}),o(Z);var Q=e(e(Z,!0)),oe=n(Q);O(oe,()=>r(u),m=>{var y=ft(),U=G(y),T=n(U);rt(T,{get text(){return r(u)}}),o(U);var D=e(e(U,!0));Ue(D,{get content(){return r(u)},lang:"css"}),h(m,y)}),o(Q),o(H),o(v);var ie=e(e(v,!0));O(ie,()=>r(p),m=>{Ce(m,{onclose:()=>C(p,null),children:(U,T=Me)=>{var D=bt(),L=n(D),ce=n(L);it(ce,{get variable(){return r(p)}});var ue=e(e(ce,!0));Te(ue,{});var Ee=e(e(ue,!0));Ee.__click=T(),o(L),o(D),h(U,D)}})}),Y(()=>{ee(j,`variables: ${r(d)??""} light, ${r(_)??""} dark`),F.disabled=!r(x)}),Ne(ae,()=>r(l),m=>C(l,m)),h(s,w),X()}se(["click"]);var yt=g("CSS custom properties",1),kt=g("<code>@ryanatkn/moss/theme.ts</code>"),wt=g("<code>@ryanatkn/moss/themes.ts</code>"),xt=g("The builtin themes need more work, but the proof of concept is ready!",1),Tt=g(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),Ct=g('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),St=g("<!> <!>",1);function Gt(s,t){K(t,!0);const l=Le("themes"),i=Se.slice();let c=A(null);var u=St(),d=G(u);Ae(d,{tome:l,children:(k,S)=>{var x=Tt(),w=G(x),v=n(w),f=e(n(v));ne(f,{path:"Web/CSS/color-scheme"});var b=e(e(f,!0));he(b,{name:"variables"});var I=e(e(b,!0));ne(I,{path:"Web/CSS/--*",children:(T,D)=>{var L=yt();h(T,L)},$$slots:{default:!0}}),J(),o(v);var E=e(e(v,!0));J(),o(E),o(w);var z=e(e(w,!0)),P=n(z);fe(P,{text:"Color scheme",slug:"color-scheme"});var j=e(e(P,!0)),B=e(n(j));ne(B,{path:"Web/CSS/color-scheme"}),J(),o(j);var N=e(e(j,!0)),q=e(n(N));ne(q,{path:"Web/CSS/@media/prefers-color-scheme"}),J(),o(N);var te=e(e(N,!0)),ae=n(te);De(ae,{}),o(te),o(z);var F=e(e(z,!0)),re=n(F);fe(re,{text:"Builtin themes",slug:"builtin-themes"});var H=e(e(re,!0)),Z=e(n(H));he(Z,{name:"variables"}),J(),o(H);var Q=e(e(H,!0)),oe=e(n(Q));be(oe,{path:"theme.ts",children:(T,D)=>{var L=kt();h(T,L)},$$slots:{default:!0}});var ie=e(e(oe,!0));be(ie,{path:"themes.ts",children:(T,D)=>{var L=wt();h(T,L)},$$slots:{default:!0}}),J(),o(Q);var m=e(e(Q,!0)),y=n(m);Xe(y,{themes:i,enable_editing:!0,onedit:T=>C(c,M(T))}),o(m);var U=e(e(m,!0));Te(U,{children:(T,D)=>{var L=xt();h(T,L)},$$slots:{default:!0}}),o(F),h(k,x)},$$slots:{default:!0}});var _=e(d,!0);_.nodeValue="  ";var p=e(_);O(p,()=>r(c),k=>{Ce(k,{onclose:()=>C(c,null),children:(S,x)=>{var w=Ct(),v=n(w),f=n(v);pt(f,{get theme(){return r(c)},onsave:b=>{console.log("update theme",b),alert("todo")}}),o(v),o(w),h(S,w)},$$slots:{default:!0}})}),h(s,u),X()}export{Ce as D,it as S,Gt as _};
