import{a as m,t as g,c as o,a5 as Se,a6 as Ee,d as fe,b as e,f as F,C as ae,s as G}from"./disclose-version.Dj_2BLBP.js";import{p as J,y as ge,g as r,t as j,a as V,j as D,k,D as L,d as N,n as ze}from"./runtime.DKCg-osn.js";import{p as M}from"./proxy.Cg5-PIzF.js";import{p as B,i as O}from"./props.RUSqrPC9.js";import{T as Ie}from"./Tome_Detail.CgYZVSDo.js";import{b as pe,g as ye,a as ce,r as se,j as ue}from"./attributes.BdgSbWfL.js";import{t as ie}from"./class.BxNEB1ir.js";import{s as te}from"./style.iv2mhl8q.js";import{b as le}from"./this.B1Dkvf_w.js";import{s as K,a as Me,C as De}from"./Color_Scheme_Input.DX7I1GLM.js";import{o as Ae}from"./index-client.CJObhH2x.js";import{a as Oe}from"./tome.BQsYDXN1.js";import{T as _e}from"./Tome_Link.CAW6Qk6E.js";import{T as me}from"./Tome_Subheading.BOFzYNOz.js";import{g as Pe,i as Le}from"./theme.svelte._llWn6oX.js";import{M as ee}from"./Mdn_Link.BIsEBi0p.js";import{M as he}from"./Module_Link.VSLv0x2n.js";import{b as Re}from"./input.U0lbUMm1.js";import{C as Be}from"./Code.KxK97Poa.js";import{d as Ne}from"./variables.DHXR6JaE.js";import{U as ke}from"./Unfinished_Implementation_Warning.X1eaJbBC.js";const je=(n=0)=>new Promise(t=>setTimeout(t,n));var Ue=g('<div class="teleport svelte-gjkzv5"><!></div>');function We(n,t){J(t,!0);let a=D(void 0);ge(()=>{r(a)&&t.to&&i(r(a),t.to)});let s=D(!1);const i=(l,c)=>{var h;k(s,!0),c.appendChild(l),(h=t.onmove)==null||h.call(t,l,c)};Ae(()=>{var l,c;(c=(l=r(a))==null?void 0:l.parentNode)==null||c.removeChild(r(a))});var d=Ue();le(d,l=>k(a,M(l)),()=>r(a));var v=o(d);pe(v,()=>t.children),j(()=>d.hidden=!r(s)),m(n,d),V()}var qe=(n,t,a)=>{n.target===r(t)&&a(n)},Fe=g('<div class="dialog svelte-n45e52" role="dialog" aria-modal="true" tabindex="-1"><div class="dialog_layout svelte-n45e52"><div class="dialog_wrapper svelte-n45e52"><div class="dialog_bg svelte-n45e52" aria-hidden="true"></div> <div class="dialog_content svelte-n45e52" role="none"><!></div></div></div></div>');function we(n,t){J(t,!0);const a=B(t,"layout",3,"centered"),s=B(t,"index",3,0),i=B(t,"active",3,!0),d="body",v="fuz_dialog";let l=D(void 0);ge(()=>{c(t.container)});const c=u=>{if(u)k(l,M(u));else{const b=document.getElementById(v);if(b)k(l,M(b));else{const f=document.querySelector(d);if(!f)throw Error(`Cannot find dialog root element with selector '${d}'`);k(l,M(document.createElement("div"))),r(l).id=v,r(l).style.display="contents",f.appendChild(r(l))}}};let h=D(void 0),y=D(void 0);const T=u=>{var b;u&&K(u),(b=t.onclose)==null||b.call(t)},w=u=>{var b,f;if(u.key==="Escape"&&!Me(u.target)){const I=(b=r(h))==null?void 0:b.parentElement,S=(f=I==null?void 0:I.parentElement)==null?void 0:f.children,z=Array.prototype.indexOf.call(S,I);(!S||z===S.length-1||z===-1)&&T(u)}};let x=D(!1);Se("keydown",Ee,function(...u){const b=i()?w:void 0;return b==null?void 0:b.apply(this,u)},!1),We(n,{get to(){return r(l)},onmove:async()=>{var u;await je(),k(x,!0),(u=r(h))==null||u.focus()},children:(u,b)=>{var f=Fe();le(f,P=>k(h,M(P)),()=>r(h));var I=o(f),S=o(I),z=o(S);z.__mousedown=T;var R=e(e(z,!0));le(R,P=>k(y,M(P)),()=>r(y)),R.__mousedown=[qe,y,T];var Y=o(R);O(Y,()=>r(x),P=>{var U=fe(),W=F(U);pe(W,()=>t.children,()=>T),m(P,U)}),j(()=>{ie(f,"ready",r(x)),ie(f,"layout_page",a()==="page"),te(f,"z-index",100+s())}),m(u,f)},$$slots:{default:!0}}),V()}ae(["mousedown"]);var Je=(n,t,a,s,i)=>{var d,v;t(n),((d=a())==null?void 0:d(L(s)))!==!1&&((v=i.onselect)==null||v.call(i,L(s)))},Ve=(n,t,a,s)=>{var i;t(n),(i=a.onedit)==null||i.call(a,L(s))},Ye=g('<button type="button" class="icon_button plain">•••</button>'),He=g('<li class="row" role="none"><button type="button" class="theme_button svelte-df411s" role="menuitemradio"> </button> <!></li>'),Ge=g('<menu class="theme_input unstyled"></menu>');function Ke(n,t){J(t,!0);const a=B(t,"selected_theme",15,()=>M(Pe())),s=B(t,"themes",3,Le),i=B(t,"enable_editing",3,!1),d=B(t,"select",3,l=>{a().theme=l});var v=Ge();ye(v,77,s,(l,c)=>L(l).name,(l,c,h)=>{var y=He();const T=N(()=>L(c).name===a().theme.name);var w=o(y);w.__click=[Je,K,d,c,t];var x=o(w),u=e(e(w,!0));O(u,i,b=>{var f=Ye();f.__click=[Ve,K,t,c],m(b,f)}),j(()=>{ce(w,"aria-label",`${L(c).name??""} theme`),ce(w,"aria-checked",r(T)),ie(w,"selected",r(T)),G(x,L(c).name)}),m(l,y)}),m(n,v),V()}ae(["click"]);const Qe={name:"base",variables:[]},xe=[Qe,{name:"low contrast",variables:[{name:"tint_saturation",light:"8%"},{name:"bg",light:"hsl(var(--tint_hue), var(--tint_saturation), 86%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 18%)"}]},{name:"high contrast",variables:[{name:"bg",light:"#fff",dark:"#000"},{name:"text_1",light:"hsl(var(--tint_hue), var(--tint_saturation), 8%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 90%)"},{name:"text_2",light:"hsl(var(--tint_hue), var(--tint_saturation), 16%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 83%)"},{name:"text_3",light:"hsl(var(--tint_hue), var(--tint_saturation), 24%)",dark:"hsl(var(--tint_hue), var(--tint_saturation), 75%)"}]}],Xe=async(n,t,a,s)=>{k(t,!1),k(a,!1);try{await navigator.clipboard.writeText(s.text)}catch{k(a,!0);return}k(t,!0)};var Ze=g('<small class="svelte-1y2zubh">copied!</small>'),$e=g('<small class="svelte-1y2zubh">failed</small>'),et=g('<div class="copy_to_clipboard svelte-1y2zubh"><button type="button" class="icon_button">📋</button> <!> <!></div>');function tt(n,t){let a=D(!1),s=D(!1);var i=et(),d=o(i);d.__click=[Xe,a,s,t],te(d,"font-size","var(--size_lg)");var v=e(e(d,!0));O(v,()=>r(a),c=>{var h=Ze();te(h,"color","var(--color_b_5)"),m(c,h)});var l=e(e(v,!0));O(l,()=>r(s),c=>{var h=$e();te(h,"color","var(--color_c_5)"),m(c,h)}),m(n,i)}ae(["click"]);const at=(n,t={})=>{const{comments:a=!1,id:s=null,empty_default_theme:i=!0,specificity:d=2}=t,v=n.name===xe[0].name?i?null:Ne:n.variables;if(!(v!=null&&v.length))return"";const l=v.map(y=>be(y)).filter(Boolean),c=v.map(y=>be(y,!0,a)).filter(Boolean),h=(s?"#"+s:":root").repeat(d);return`${l.length?`${h} {
	${l.join(`
	`)}
}`:""}
${c.length?`${h}.dark {
	${c.join(`
	`)}
}`:""}
`.trim()},be=(n,t=!1,a=!0)=>{const s=t?n.dark:n.light;return s?"--"+n.name+": "+s+";"+(a&&n.summary?" /* "+n.summary+" */":""):""};var rt=g("<blockquote> </blockquote>"),ot=g('<div class="variable svelte-c0zdia"><div class="usage svelte-c0zdia"><div class="title svelte-c0zdia">variable</div> <code class="svelte-c0zdia"> </code></div> <!> <label><div class="title">light</div> <input disabled></label> <label><div class="title">dark</div> <input disabled></label></div>');function nt(n,t){J(t,!0);var a=fe(),s=F(a);O(s,()=>t.variable,i=>{var d=ot(),v=o(d),l=o(v),c=e(e(l,!0)),h=o(c),y=e(e(v,!0));O(y,()=>t.variable.summary,I=>{var S=rt(),z=o(S);j(()=>G(z,t.variable.summary)),m(I,S)});var T=e(e(y,!0)),w=o(T),x=e(e(w,!0));se(x);var u=e(e(T,!0)),b=o(u),f=e(e(b,!0));se(f),j(()=>{G(h,`--${t.variable.name??""}`),ue(x,t.variable.light??""),ue(f,t.variable.dark??"")}),m(i,d)}),m(n,a),V()}const st=(n,t,a,s)=>{var i;r(t)&&((i=a.onsave)==null||i.call(a,r(s)))},it=(n,t)=>{t(n),alert("TODO")};var lt=g("edit",1),dt=g("create",1),vt=g("save changes",1),ct=g("create theme",1),ut=(n,t,a)=>t(n,L(a)),_t=g('<button type="button" class="variable menu_item svelte-cno0i6"> </button>'),mt=g('<div class="copy svelte-cno0i6"><!></div> <!>',1),ht=g('<div class="pane"><div class="panel p_lg box"><!> <!> <button type="button">ok</button></div></div>'),bt=g(`<div class="theme_form svelte-cno0i6"><h2 class="text_align_center"><!> theme</h2> <aside>Creating and editing themes at runtime is a work in progress, but you can click around to see
		where it's going!</aside> <header class="svelte-cno0i6"><div class="variables_header svelte-cno0i6"><p> </p> <button type="button" class="w_100" disabled>add a variable</button></div> <form class="svelte-cno0i6"><label><div class="title">name</div> <input placeholder=">"></label> <button type="button"><!></button></form></header> <div class="content svelte-cno0i6"><div class="variables svelte-cno0i6"></div> <div class="rendered svelte-cno0i6"><!></div></div></div> <!>`,1);function ft(n,t){J(t,!0);const a=B(t,"theme",3,null);let s=D(M(a()?a().name:"new theme")),i=D(M(a()?a().variables:[]));const d=N(()=>({name:r(s),variables:r(i)})),v=N(()=>at(r(d),{empty_default_theme:!1,specificity:1})),l=N(()=>r(i).reduce((_,p)=>p.light?_+1:_,0)),c=N(()=>r(i).reduce((_,p)=>p.dark?_+1:_,0));let h=D(null);const y=(_,p)=>{K(_),k(h,M(p)),k(i,M(r(i).slice()))},T=N(()=>!!a()),w=N(()=>a()?r(s)!==a().name||r(i)!==a().variables:!0);var x=bt(),u=F(x),b=o(u),f=o(b);O(f,()=>r(T),_=>{var p=lt();m(_,p)},_=>{var p=dt();m(_,p)});var I=e(e(b,!0)),S=e(e(I,!0)),z=o(S),R=o(z),Y=o(R),P=e(e(R,!0));P.__click=[it,K];var U=e(e(z,!0)),W=o(U),re=o(W),Q=e(e(re,!0));se(Q);var q=e(e(W,!0));q.__click=[st,w,t,d];var X=o(q);O(X,()=>r(T),_=>{var p=vt();m(_,p)},_=>{var p=ct();m(_,p)});var oe=e(e(S,!0)),H=o(oe);ye(H,77,()=>r(i),(_,p)=>L(_).name,(_,p,C)=>{var A=_t();A.__click=[ut,y,p];var E=o(A);j(()=>G(E,`--${L(p).name??""}`)),m(_,A)});var Z=e(e(H,!0)),ne=o(Z);O(ne,()=>r(v),_=>{var p=mt(),C=F(p),A=o(C);tt(A,{get text(){return r(v)}});var E=e(e(C,!0));Be(E,{get content(){return r(v)},lang:"css"}),m(_,p)});var $=e(e(u,!0));O($,()=>r(h),_=>{we(_,{onclose:()=>k(h,null),children:(C,A=ze)=>{var E=ht(),Te=o(E),de=o(Te);nt(de,{get variable(){return r(h)}});var ve=e(e(de,!0));ke(ve,{});var Ce=e(e(ve,!0));Ce.__click=A(),m(C,E)}})}),j(()=>{G(Y,`variables: ${r(l)??""} light, ${r(c)??""} dark`),q.disabled=!r(w)}),Re(Q,()=>r(s),_=>k(s,_)),m(n,x),V()}ae(["click"]);var gt=g("CSS custom properties",1),pt=g("<code>@ryanatkn/moss/theme.ts</code>"),yt=g("<code>@ryanatkn/moss/themes.ts</code>"),kt=g("The builtin themes need more work, but the proof of concept is ready!",1),wt=g(`<section class="theme"><p>Moss supports both the browser's <!> and custom themes based on <!>, which use <!>.</p> <p>Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> to provide the UI below to control the Moss color scheme and themes.</p></section> <section class="theme"><!> <p>Moss supports <!> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code> element.</p> <p>The Fuz integration detects the default with <!>, and users can also set it directly
			with a component like <a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte">this one</a>:</p> <div class="flex mb_lg"><!></div> <p>The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.</p></section> <section class="theme"><!> <p>A theme is a simple JSON collection of <!> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.</p> <p>These docs are a work in progress, for now see <!> and <!>.</p> <div class="width_sm mb_lg"><!></div> <!></section>`,1),xt=g('<div class="pane"><div class="theme_editor_wrapper panel svelte-1io66l"><!></div></div>'),Tt=g("<!> <!>",1);function Yt(n,t){J(t,!0);const s=Oe("themes"),i=xe.slice();let d=D(null);var v=Tt(),l=F(v);Ie(l,{tome:s,children:(y,T)=>{var w=wt(),x=F(w),u=o(x),b=e(o(u));ee(b,{path:"Web/CSS/color-scheme"});var f=e(e(b,!0));_e(f,{name:"variables"});var I=e(e(f,!0));ee(I,{path:"Web/CSS/--*",children:(C,A)=>{var E=gt();m(C,E)},$$slots:{default:!0}});var S=e(e(x,!0)),z=o(S);me(z,{text:"Color scheme",slug:"color-scheme"});var R=e(e(z,!0)),Y=e(o(R));ee(Y,{path:"Web/CSS/color-scheme"});var P=e(e(R,!0)),U=e(o(P));ee(U,{path:"Web/CSS/@media/prefers-color-scheme"});var W=e(e(P,!0)),re=o(W);De(re,{});var Q=e(e(S,!0)),q=o(Q);me(q,{text:"Builtin themes",slug:"builtin-themes"});var X=e(e(q,!0)),oe=e(o(X));_e(oe,{name:"variables"});var H=e(e(X,!0)),Z=e(o(H));he(Z,{path:"theme.ts",children:(C,A)=>{var E=pt();m(C,E)},$$slots:{default:!0}});var ne=e(e(Z,!0));he(ne,{path:"themes.ts",children:(C,A)=>{var E=yt();m(C,E)},$$slots:{default:!0}});var $=e(e(H,!0)),_=o($);Ke(_,{themes:i,enable_editing:!0,onedit:C=>k(d,M(C))});var p=e(e($,!0));ke(p,{children:(C,A)=>{var E=kt();m(C,E)},$$slots:{default:!0}}),m(y,w)},$$slots:{default:!0}});var c=e(l,!0);c.nodeValue="  ";var h=e(c);O(h,()=>r(d),y=>{we(y,{onclose:()=>k(d,null),children:(T,w)=>{var x=xt(),u=o(x),b=o(u);ft(b,{get theme(){return r(d)},onsave:f=>{console.log("update theme",f),alert("todo")}}),m(T,x)},$$slots:{default:!0}})}),m(n,v),V()}export{we as D,nt as S,Yt as _};
