import{s as x,a as r,d as g,t as c,c as f,f as d,b as _,k as Z}from"../chunks/disclose-version.CV3ElF3D.js";import{p as X,t as u,h as m,a as B,l as P,X as N}from"../chunks/runtime.C9BLlFkQ.js";import{i as s,p as $}from"../chunks/props.DMEd9I1P.js";import{b as w,a as q,g as ee}from"../chunks/attributes.CCxnytQ2.js";import{c as ae}from"../chunks/svelte-component.Ddsx4VjH.js";import{u as R,s as T}from"../chunks/store.CbF-nWel.js";import{p as U}from"../chunks/stores.Dk2HCqVb.js";import{b as re}from"../chunks/entry.BTyL86eE.js";import{t as O}from"../chunks/class.BTBrs2Gn.js";import{s as Q}from"../chunks/style.iv2mhl8q.js";import{f as te}from"../chunks/url.Dt0VZVCT.js";import{g as oe}from"../chunks/tome.D1Gikq0z.js";import{g as _e}from"../chunks/pkg.D89LnoYe.js";var ve=c('<div class="repo_name svelte-1widkfd"> </div>'),ne=c("<img>"),ie=c("<blockquote> </blockquote>"),me=c('<p class="text_align_center"> <!></p>'),se=c('<div class="homepage_url svelte-1widkfd"><a class="chip svelte-1widkfd"> </a></div>'),le=c('<a class="chip svelte-1widkfd">repo</a>'),de=c('<a class="chip svelte-1widkfd" title="version"> </a>'),ge=c('<a class="chip svelte-1widkfd">npm</a>'),ce=c('<blockquote class="npm_url svelte-1widkfd"> </blockquote>'),ue=c('<div class="package_summary svelte-1widkfd"><header class="box svelte-1widkfd"><!> <!></header> <!> <!> <!> <!> <div class="links svelte-1widkfd"><!> <!> <!></div> <!></div>');function fe(z,e){X(e,!0);const p={};R(p);const j=()=>T(U,"$page",p),A=P(()=>e.pkg),b=P(()=>{let{package_json:t}=m(A);return[t]}),v=P(()=>m(b)[0]),y=P(()=>e.pkg.homepage_url+"/favicon.png");var k=ue(),h=f(k),C=f(h);s(C,()=>e.repo_name,t=>{var a=g(),i=d(a);w(()=>e.repo_name,i,()=>e.pkg.repo_name),r(t,a)},t=>{var a=ve(),i=f(a);u(()=>x(i,e.pkg.repo_name)),r(t,a)});var D=_(C,!0);D.nodeValue="  ";var S=_(D);s(S,()=>e.logo,t=>{var a=g(),i=d(a);w(()=>e.logo,i,()=>m(y)),r(t,a)},t=>{var a=ne();u(()=>{q(a,"src",m(y)),q(a,"alt",`logo for ${e.pkg.repo_name??""}`),O(a,"pixelated",e.pixelated_logo),Q(a,"width","var(--size, var(--icon_size_xl2))"),Q(a,"height","var(--size, var(--icon_size_xl2))")}),r(t,a)});var L=_(_(h,!0));s(L,()=>m(v).motto,t=>{var a=g(),i=d(a);s(i,()=>e.motto,l=>{var o=g(),n=d(o);w(()=>e.motto,n,()=>m(v).motto,()=>m(v).glyph),r(l,o)},l=>{var o=ie(),n=f(o);u(()=>x(n,`${m(v).motto??""}
				${m(v).glyph??""}`)),r(l,o)}),r(t,a)});var E=_(_(L,!0));s(E,()=>m(v).description,t=>{var a=g(),i=d(a);s(i,()=>e.description,l=>{var o=g(),n=d(o);w(()=>e.description,n,()=>m(v).description,()=>m(v).glyph),r(l,o)},l=>{var o=me(),n=f(o),V=_(n);s(V,()=>!m(v).motto,K=>{var M=Z(K);u(()=>x(M,m(v).glyph)),r(K,M)}),u(()=>x(n,`${m(v).description??""} `)),r(l,o)}),r(t,a)});var F=_(_(E,!0));s(F,()=>e.children,t=>{var a=g(),i=d(a);w(()=>e.children,i),r(t,a)});var G=_(_(F,!0));s(G,()=>e.pkg.homepage_url,t=>{var a=g(),i=d(a);s(i,()=>e.homepage_url,l=>{var o=g(),n=d(o);w(()=>e.homepage_url,n,()=>e.pkg.homepage_url),r(l,o)},l=>{var o=se(),n=f(o),V=f(n);u(()=>x(V,te(e.pkg.homepage_url))),u(()=>{q(n,"href",e.pkg.homepage_url),O(n,"selected",e.pkg.homepage_url===j().url.href)}),r(l,o)}),r(t,a)});var H=_(_(G,!0)),I=f(H);s(I,()=>e.pkg.repo_url,t=>{var a=le();u(()=>q(a,"href",e.pkg.repo_url)),r(t,a)});var J=_(_(I,!0));s(J,()=>e.pkg.changelog_url,t=>{var a=de(),i=f(a);u(()=>{q(a,"href",e.pkg.changelog_url),x(i,m(v).version)}),r(t,a)});var W=_(_(J,!0));s(W,()=>e.pkg.npm_url,t=>{var a=ge();u(()=>q(a,"href",e.pkg.npm_url)),r(t,a)});var Y=_(_(H,!0));s(Y,()=>e.pkg.npm_url,t=>{var a=g(),i=d(a);s(i,()=>e.npm_url,l=>{var o=g(),n=d(o);w(()=>e.npm_url,n,()=>e.pkg.npm_url),r(l,o)},l=>{var o=ce(),n=f(o);u(()=>x(n,`npm i -D ${m(v).name??""}`)),r(l,o)}),r(t,a)}),r(z,k),B()}var ke=c('<div class="box mb_xl5"><!></div>'),he=c('<!> <div class="tomes svelte-1vgrus8"></div>',1);function pe(z,e){X(e,!0);const p={};R(p);const j=()=>T(U,"$page",p),A=$(e,"root_path",3,"/library");var b=he(),v=d(b);s(v,()=>j().url.pathname===re+A(),k=>{var h=ke(),C=f(h);fe(C,{get pkg(){return e.pkg},get repo_name(){return e.repo_name}}),r(k,h)});var y=_(_(v,!0));ee(y,76,()=>e.tomes,(k,h)=>N(k),(k,h,C)=>{var D=g(),S=d(D);ae(()=>N(h).component,L=>{L(S,{})}),r(k,D)}),r(z,b),B()}var be=c('<h1 class="mb_sm">moss</h1>');function Xe(z,e){X(e,!0);const p=oe(),j=Array.from(p.values()),A=_e();var b=g(),v=d(b);{var y=k=>{var h=be();r(k,h)};pe(v,{tomes:j,pkg:A,repo_name:y})}r(z,b),B()}export{Xe as component};
