import{c as n,r as o,a as h,t as p,_ as ze,a0 as Ie,s as e,e as pe,f as K,I as le,A as U}from"./disclose-version.gZ-2tz3Z.js";import{p as X,I as ye,g as r,t as Y,a as Z,m as A,v as T,J as B,d as V,Q as Me}from"./runtime.4yfH9i_8.js";import{p as j,i as O}from"./props.BD3-fUzo.js";import{p as M}from"./proxy.BzgpQmmp.js";import{T as Ae}from"./Tome_Detail.B78poo8S.js";import{b as ke,e as we,a as _e,r as de,j as me}from"./attributes.CPiNokUc.js";import{t as ve}from"./class.BFlSs2mH.js";import{s as xe}from"./style.iv2mhl8q.js";import{b as ce}from"./this.DdSMzWEL.js";import{s as te,a as De,C as Oe}from"./Color_Scheme_Input.DY4471Tv.js";import{o as Pe}from"./index-client.C6VXGNE_.js";import{a as Le}from"./tome.DlDF76X-.js";import{T as he}from"./Tome_Link.BlUdTKEc.js";import{T as fe}from"./Tome_Subheading.xFx2cJm0.js";import{s as ae}from"./render.nIEHh2HH.js";import{g as Re,i as Be}from"./theme.svelte.WxnBbugB.js";import{M as ie}from"./Mdn_Link.UCLggpkN.js";import{M as be}from"./Module_Link.CJK1uXrt.js";import{b as Ne}from"./input.GgA3caM1.js";import{C as Ue}from"./Code.Pz-7eqrk.js";import{d as We}from"./variables.BdXDZ_u3.js";import{U as Te}from"./Unfinished_Implementation_Warning.WKqJHAkV.js";const je=(s=0)=>new Promise(t=>setTimeout(t,s));var qe=p('<div class="teleport svelte-gjkzv5"><!></div>');function Fe(s,t){X(t,!0);let a=A(void 0);ye(()=>{r(a)&&t.to&&i(r(a),t.to)});let l=A(!1);const i=(d,_)=>{var y;T(l,!0),_.appendChild(d),(y=t.onmove)==null||y.call(t,d,_)};Pe(()=>{var d,_;(_=(d=r(a))==null?void 0:d.parentNode)==null||_.removeChild(r(a))});var c=qe();ce(c,d=>T(a,M(d)),()=>r(a));var u=n(c);ke(u,()=>t.children),o(c),Y(()=>c.hidden=!r(l)),h(s,c),Z()}var Je=(s,t,a)=>{s.target===r(t)&&a(s)},Ve=p('<div class="dialog svelte-n45e52" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-n45e52"><div class="dialog_wrapper svelte-n45e52"><div class="dialog_bg svelte-n45e52" aria-hidden="true"></div> <div class="dialog_content svelte-n45e52" role="none"><!></div></div></div></div>');function Ce(s,t){X(t,!0);const a=j(t,"layout",3,"centered"),l=j(t,"index",3,0),i=j(t,"active",3,!0),c="body",u="fuz_dialog";let d=A(void 0);ye(()=>{_(t.container)});const _=v=>{if(v)T(d,M(v));else{const f=document.getElementById(u);if(f)T(d,M(f));else{const b=document.querySelector(c);if(!b)throw Error(`Cannot find dialog root element with selector '${c}'`);T(d,M(document.createElement("div"))),r(d).id=u,r(d).style.display="contents",b.appendChild(r(d))}}};let y=A(void 0),k=A(void 0);const C=v=>{var f;v&&te(v),(f=t.onclose)==null||f.call(t)},x=v=>{var f,b;if(v.key==="Escape"&&!De(v.target)){const I=(f=r(y))==null?void 0:f.parentElement,S=(b=I==null?void 0:I.parentElement)==null?void 0:b.children,z=Array.prototype.indexOf.call(S,I);(!S||z===S.length-1||z===-1)&&C(v)}};let w=A(!1);ze("keydown",Ie,function(...v){const f=i()?x:void 0;return f==null?void 0:f.apply(this,v)},!1),Fe(s,{get to(){return r(d)},onmove:async()=>{var v;await je(),T(w,!0),(v=r(y))==null||v.focus()},children:(v,f)=>{var b=Ve();ce(b,P=>T(y,M(P)),()=>r(y));var I=n(b),S=n(I),z=n(S);z.__mousedown=C;var D=e(e(z,!0));ce(D,P=>T(k,M(P)),()=>r(k)),D.__mousedown=[Je,k,C];var q=n(D);O(q,()=>r(w),P=>{var F=pe(),N=K(F);ke(N,()=>t.children,()=>C),h(P,F)}),o(D),o(S),o(I),o(b),Y(()=>{ve(b,"ready",r(w)),ve(b,"layout_page",a()==="page"),xe(b,"z-index",100+l())}),h(v,b)},$$slots:{default:!0}}),Z()}le(["mousedown"]);var Ye=(s,t,a,l,i)=>{var c,u;t(s),((c=a())==null?void 0:c(B(l)))!==!1&&((u=i.onselect)==null||u.call(i,B(l)))},He=(s,t,a,l)=>{var i;t(s),(i=a.onedit)==null||i.call(a,B(l))},Qe=p('<button type="button" class="icon_button plain">•••</button>'),Ge=p('<li class="row" role="none"><button type="button" class="theme_button svelte-df411s" role="menuitemradio"> </button> <!></li>'),Ke=p('<menu class="theme_input unstyled"></menu>');function Xe(s,t){X(t,!0);const a=j(t,"selected_theme",15,()=>M(Re())),l=j(t,"themes",3,Be),i=j(t,"enable_editing",3,!1),c=j(t,"select",3,d=>{a().theme=d});var u=Ke();we(u,77,l,(d,_)=>B(d).name,(d,_,y)=>{var k=Ge();const C=V(()=>B(_).name===a().theme.name);var x=n(k);x.__click=[Ye,te,c,_,t];var w=n(x);o(x);var v=e(e(x,!0));O(v,i,f=>{var b=Qe();b.__click=[He,te,t,_],h(f,b)}),o(k),Y(()=>{_e(x,"aria-label",`${B(_).name??""} theme`),_e(x,"aria-checked",r(C)),ve(x,"selected",r(C)),ae(w,B(_).name)}),h(d,k)}),o(u),h(s,u),Z()}le(["click"]);const Ze={name:"base",variables:[]},Se=[Ze,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],$e=async(s,t,a,l)=>{T(t,!1),T(a,!1);try{await navigator.clipboard.writeText(l.text)}catch{T(a,!0);return}T(t,!0)};var et=p('<small class="color_b_5 svelte-1y2zubh">copied!</small>'),tt=p('<small class="color_c_5 svelte-1y2zubh">failed</small>'),at=p('<div class="copy_to_clipboard svelte-1y2zubh"><button type="button" class="icon_button">📋</button> <!> <!></div>');function rt(s,t){let a=A(!1),l=A(!1);var i=at(),c=n(i);c.__click=[$e,a,l,t],xe(c,"font-size","var(--size_lg)");var u=e(e(c,!0));O(u,()=>r(a),_=>{var y=et();h(_,y)});var d=e(e(u,!0));O(d,()=>r(l),_=>{var y=tt();h(_,y)}),o(i),h(s,i)}le(["click"]);const ot=(s,t={})=>{const{comments:a=!1,id:l=null,empty_default_theme:i=!0,specificity:c=2}=t,u=s.name===Se[0].name?i?null:We:s.variables;if(!(u!=null&&u.length))return"";const d=u.map(k=>ge(k)).filter(Boolean),_=u.map(k=>ge(k,!0,a)).filter(Boolean),y=(l?"#"+l:":root").repeat(c);return`${d.length?`${y} {
	${d.join(`
	`)}
}`:""}
${_.length?`${y}.dark {
	${_.join(`
	`)}
}`:""}
`.trim()},ge=(s,t=!1,a=!0)=>{const l=t?s.dark:s.light;return l?"--"+s.name+": "+l+";"+(a&&s.summary?" /* "+s.summary+" */":""):""};var nt=p("<blockquote> </blockquote>"),st=p('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function it(s,t){X(t,!0);var a=pe(),l=K(a);O(l,()=>t.variable,i=>{var c=st(),u=n(c),d=n(u),_=e(e(d,!0)),y=n(_);o(_),o(u);var k=e(e(u,!0));O(k,()=>t.variable.summary,I=>{var S=nt(),z=n(S);o(S),Y(()=>ae(z,t.variable.summary)),h(I,S)});var C=e(e(k,!0)),x=n(C),w=e(e(x,!0));de(w),o(C);var v=e(e(C,!0)),f=n(v),b=e(e(f,!0));de(b),o(v),o(c),Y(()=>{ae(y,`--${t.variable.name??""}`),me(w,t.variable.light??""),me(b,t.variable.dark??"")}),h(i,c)}),h(s,a),Z()}const lt=(s,t,a,l)=>{var i;r(t)&&((i=a.onsave)==null||i.call(a,r(l)))},dt=(s,t)=>{t(s),alert("TODO")};var vt=p("edit",1),ct=p("create",1),ut=p("save changes",1),_t=p("create theme",1),mt=(s,t,a)=>t(s,B(a)),ht=p('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),ft=p('<div class="copy svelte-cno0i6"><!></div> <!>',1),bt=p('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),gt=p(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function pt(s,t){X(t,!0);const a=j(t,"theme",3,null);let l=A(M(a()?a().name:"new theme")),i=A(M(a()?a().variables:[]));const c=V(()=>({name:r(l),variables:r(i)})),u=V(()=>ot(r(c),{empty_default_theme:!1,specificity:1})),d=V(()=>r(i).reduce((m,g)=>g.light?m+1:m,0)),_=V(()=>r(i).reduce((m,g)=>g.dark?m+1:m,0));let y=A(null);const k=(m,g)=>{te(m),T(y,M(g)),T(i,M(r(i).slice()))},C=V(()=>!!a()),x=V(()=>a()?r(l)!==a().name||r(i)!==a().variables:!0);var w=gt(),v=K(w),f=n(v),b=n(f);O(b,()=>r(C),m=>{var g=vt();h(m,g)},m=>{var g=ct();h(m,g)}),U(),o(f);var I=e(e(f,!0)),S=e(e(I,!0)),z=n(S),D=n(z),q=n(D);o(D);var P=e(e(D,!0));P.__click=[dt,te],o(z);var F=e(e(z,!0)),N=n(F),re=n(N),H=e(e(re,!0));de(H),o(N);var Q=e(e(N,!0));Q.__click=[lt,x,t,c];var oe=n(Q);O(oe,()=>r(C),m=>{var g=ut();h(m,g)},m=>{var g=_t();h(m,g)}),o(Q),o(F),o(S);var $=e(e(S,!0)),J=n($);we(J,77,()=>r(i),(m,g)=>B(m).name,(m,g,W)=>{var L=ht();L.__click=[mt,k,g];var E=n(L);o(L),Y(()=>ae(E,`--${B(g).name??""}`)),h(m,L)}),o(J);var ne=e(e(J,!0)),ee=n(ne);O(ee,()=>r(u),m=>{var g=ft(),W=K(g),L=n(W);rt(L,{get text(){return r(u)}}),o(W);var E=e(e(W,!0));Ue(E,{get content(){return r(u)},lang:"css"}),h(m,g)}),o(ne),o($),o(v);var se=e(e(v,!0));O(se,()=>r(y),m=>{Ce(m,{onclose:()=>T(y,null),children:(W,L=Me)=>{var E=bt(),G=n(E),R=n(G);it(R,{get variable(){return r(y)}});var ue=e(e(R,!0));Te(ue,{});var Ee=e(e(ue,!0));Ee.__click=L(),o(G),o(E),h(W,E)}})}),Y(()=>{ae(q,`variables: ${r(d)??""} light, ${r(_)??""} dark`),Q.disabled=!r(x)}),Ne(H,()=>r(l),m=>T(l,m)),h(s,w),Z()}le(["click"]);var yt=p("CSS custom properties",1),kt=p("<code>@ryanatkn/moss/theme.ts</code>"),wt=p("<code>@ryanatkn/moss/themes.ts</code>"),xt=p("The builtin themes need more work, but the proof of concept is ready!",1),Tt=p(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),Ct=p('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),St=p("<!> <!>",1);function Gt(s,t){X(t,!0);const l=Le("themes"),i=Se.slice();let c=A(null);var u=St(),d=K(u);Ae(d,{tome:l,children:(k,C)=>{var x=Tt(),w=K(x),v=n(w),f=e(n(v));ie(f,{path:"Web/CSS/color-scheme"});var b=e(e(f,!0));he(b,{name:"variables"});var I=e(e(b,!0));ie(I,{path:"Web/CSS/--*",children:(E,G)=>{U();var R=yt();h(E,R)},$$slots:{default:!0}}),U(),o(v);var S=e(e(v,!0));e(n(S)),U(),o(S),o(w);var z=e(e(w,!0)),D=n(z);fe(D,{text:"Color scheme",slug:"color-scheme"});var q=e(e(D,!0)),P=e(n(q));ie(P,{path:"Web/CSS/color-scheme"});var F=e(e(P,!0));e(e(F,!0)),U(),o(q);var N=e(e(q,!0)),re=e(n(N));ie(re,{path:"Web/CSS/@media/prefers-color-scheme"}),e(e(re,!0)),U(),o(N);var H=e(e(N,!0)),Q=n(H);Oe(Q,{}),o(H),e(e(H,!0)),o(z);var oe=e(e(z,!0)),$=n(oe);fe($,{text:"Builtin themes",slug:"builtin-themes"});var J=e(e($,!0)),ne=e(n(J));he(ne,{name:"variables"}),U(),o(J);var ee=e(e(J,!0)),se=e(n(ee));be(se,{path:"theme.ts",children:(E,G)=>{var R=kt();h(E,R)},$$slots:{default:!0}});var m=e(e(se,!0));be(m,{path:"themes.ts",children:(E,G)=>{var R=wt();h(E,R)},$$slots:{default:!0}}),U(),o(ee);var g=e(e(ee,!0)),W=n(g);Xe(W,{themes:i,enable_editing:!0,onedit:E=>T(c,M(E))}),o(g);var L=e(e(g,!0));Te(L,{children:(E,G)=>{U();var R=xt();h(E,R)},$$slots:{default:!0}}),o(oe),h(k,x)},$$slots:{default:!0}});var _=e(d,!0);_.nodeValue="  ";var y=e(_);O(y,()=>r(c),k=>{Ce(k,{onclose:()=>T(c,null),children:(C,x)=>{var w=Ct(),v=n(w),f=n(v);pt(f,{get theme(){return r(c)},onsave:b=>{console.log("update theme",b),alert("todo")}}),o(v),o(w),h(C,w)},$$slots:{default:!0}})}),h(s,u),Z()}export{Ce as D,it as S,Gt as _};