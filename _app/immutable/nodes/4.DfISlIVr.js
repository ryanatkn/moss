import{s as Ue,a as v,t as m,d as C,c as ee,b as Ve}from"../chunks/disclose-version.P5-NcRrz.js";import{p as te,a2 as Ye,m as o,t as u,a as re,c as s,f as h,s as c,r,n as T,o as j}from"../chunks/runtime.DM-2YmY5.js";import{s as z}from"../chunks/render.fsaK30mL.js";import{L as Ae}from"../chunks/Library_Footer.cgvG_URa.js";import{a as p}from"../chunks/if.DsBicxI-.js";import{s as B,e as fe,b as P,t as O,i as Qe,d as Xe}from"../chunks/context_helpers.CXn5gtRk.js";import{s as V}from"../chunks/style.PwPRnE0L.js";import{p as Ze}from"../chunks/stores.BcRqS2f5.js";import{e as he,a as ke,s as we}from"../chunks/string.ZJuK4sHN.js";import{f as $e}from"../chunks/url.Dt0VZVCT.js";import{D as ea}from"../chunks/Details.Bu7rGfE_.js";import{S as K,a as ae,f as aa,b as ta,c as ra}from"../chunks/logos.B0Dnq6dz.js";import{B as xe}from"../chunks/Breadcrumb.CveoGQnm.js";import{p as sa}from"../chunks/pkg.DbZXOBaW.js";var oa=m('<div class="repo_name svelte-w7xguq"> <!></div>'),la=m('<div class="description svelte-w7xguq"> </div>'),na=m('<div class="motto svelte-w7xguq"> </div>'),va=m('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),ia=m('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),da=m('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),ca=m('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),_a=m('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),ga=m('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),ma=m('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),ua=m('<div class="logo svelte-w7xguq"><img></div>'),pa=m("<li> </li>"),fa=m('<ul class="declarations unstyled svelte-w7xguq"></ul>'),ha=m('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),ka=m('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),wa=m("raw data for <code>pkg: Package_Meta</code>",1),xa=m("<pre><code> </code></pre>"),ba=m('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function ya(D,e){re(e,!0);const k=Ue(),w=()=>Ve(Ze,"$page",k),_=j(()=>e.pkg.package_json),S=j(()=>e.pkg.src_json),L=j(()=>o(S).modules),y=j(()=>o(_).repository?ke(we(we(typeof o(_).repository=="string"?o(_).repository:o(_).repository.url,".git"),"/"),"git+"):null),W=j(()=>o(_).license&&o(y)?o(y)+"/blob/main/LICENSE":null),x=(a,t)=>a+"/blob/main/src/lib/"+(t.endsWith(".js")?t.slice(0,-3)+".ts":t),q=j(()=>o(_).exports&&Object.keys(o(_).exports)),b=j(()=>o(_).exports?Object.keys(o(_).exports).map(a=>{const t=ke(a,"./");return t==="."?"index.js":t}):null);var F=ba(),E=s(F),J=s(E),H=s(J),R=s(H),U=s(R);{var Q=a=>{var t=C(),l=h(t);B(l,()=>e.repo_name,()=>e.pkg.repo_name),v(a,t)},X=a=>{var t=oa(),l=s(t,!0),i=c(l);{var g=d=>{var n=ee();u(()=>z(n,` ${o(_).glyph??""}`)),v(d,n)};p(i,d=>{o(_).glyph&&d(g)})}r(t),u(()=>z(l,e.pkg.repo_name)),v(a,t)};p(U,a=>{e.repo_name?a(Q):a(X,!1)})}r(R);var Z=c(R,2);B(Z,()=>e.children??Ye,()=>e.pkg);var se=c(Z,2);{var be=a=>{var t=C(),l=h(t);{var i=d=>{var n=C(),f=h(n);B(f,()=>e.description,()=>o(_).description),v(d,n)},g=d=>{var n=la(),f=s(n,!0);r(n),u(()=>z(f,o(_).description)),v(d,n)};p(l,d=>{e.description?d(i):d(g,!1)})}v(a,t)};p(se,a=>{o(_).description&&a(be)})}var oe=c(se,2);{var ye=a=>{var t=C(),l=h(t);{var i=d=>{var n=C(),f=h(n);B(f,()=>e.motto,()=>o(_).motto),v(d,n)},g=d=>{var n=na(),f=s(n,!0);r(n),u(()=>z(f,o(_).motto)),v(d,n)};p(l,d=>{e.motto?d(i):d(g,!1)})}v(a,t)};p(oe,a=>{o(_).motto&&a(ye)})}var le=c(oe,2);{var qe=a=>{var t=C(),l=h(t);{var i=d=>{var n=C(),f=h(n);B(f,()=>e.npm_url,()=>e.pkg.npm_url),v(d,n)},g=d=>{var n=va(),f=s(n);r(n),u(()=>z(f,`npm i -D ${o(_).name??""}`)),v(d,n)};p(l,d=>{e.npm_url?d(i):d(g,!1)})}v(a,t)};p(le,a=>{e.pkg.npm_url&&a(qe)})}var ne=c(le,2),ve=s(ne);{var je=a=>{var t=C(),l=h(t);{var i=d=>{var n=C(),f=h(n);B(f,()=>e.homepage_url,()=>e.pkg.homepage_url),v(d,n)},g=d=>{var n=ia(),f=c(h(n),2),N=s(f),G=s(N),$=c(G);u(()=>z($,` ${$e(e.pkg.homepage_url)??""}`)),r(N),r(f),u(()=>{P(N,"href",e.pkg.homepage_url),O(N,"selected",e.pkg.homepage_url===w().url.href),P(G,"src",e.pkg.logo_url),P(G,"alt",e.pkg.logo_alt),V(G,"width","16px"),V(G,"height","16px"),V(G,"margin-right","var(--space_xs)")}),v(d,n)};p(l,d=>{e.homepage_url?d(i):d(g,!1)})}v(a,t)};p(ve,a=>{e.pkg.homepage_url&&a(je)})}var ie=c(ve,2);{var ze=a=>{var t=da(),l=c(h(t),2),i=s(l),g=s(i);r(i),r(l),u(()=>{P(i,"href",e.pkg.repo_url),z(g,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),v(a,t)};p(ie,a=>{e.pkg.repo_url&&a(ze)})}var de=c(ie,2);{var Se=a=>{var t=ca(),l=c(h(t),2),i=s(l),g=s(i,!0);r(i),r(l),u(()=>{P(i,"href",e.pkg.npm_url),z(g,o(_).name)}),v(a,t)};p(de,a=>{e.pkg.npm_url&&a(Se)})}var ce=c(de,2);{var Pe=a=>{var t=_a(),l=c(h(t),2),i=s(l),g=s(i,!0);r(i),r(l),u(()=>{P(i,"href",e.pkg.changelog_url),z(g,o(_).version)}),v(a,t)};p(ce,a=>{e.pkg.changelog_url&&a(Pe)})}var _e=c(ce,2);{var Le=a=>{var t=ga(),l=c(h(t),2),i=s(l),g=s(i,!0);r(i),r(l),u(()=>{P(i,"href",o(W)),z(g,o(_).license)}),v(a,t)};p(_e,a=>{o(W)&&a(Le)})}var We=c(_e,2);{var Ce=a=>{var t=ma(),l=c(h(t),2),i=s(l);u(()=>P(i,"href",`${he(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var g=c(i,2);u(()=>P(g,"href",`${he(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),r(l),v(a,t)};p(We,a=>{e.pkg.homepage_url&&a(Ce)})}r(ne),r(H),r(J);var De=c(J,2);{var Fe=a=>{var t=ua(),l=s(t);r(t),u(()=>{P(l,"src",e.pkg.logo_url),P(l,"alt",e.pkg.logo_alt),V(l,"width","var(--size, var(--icon_size_xl2))"),V(l,"height","var(--size, var(--icon_size_xl2))")}),v(a,t)};p(De,a=>{e.pkg.logo_url&&a(Fe)})}r(E);var ge=c(E,2);{var Ge=a=>{var t=ka(),l=s(t);fe(l,22,()=>o(b),i=>i,(i,g,d)=>{var n=ha();const f=j(()=>x(e.pkg.repo_url,g)),N=j(()=>{var M;return(M=o(q))==null?void 0:M[o(d)]}),G=j(()=>{var M;return o(N)?(M=o(L))==null?void 0:M[o(N)]:void 0}),$=j(()=>g.endsWith(".js"));u(()=>O(n,"ts",o($)));const Ne=j(()=>g.endsWith(".svelte"));u(()=>O(n,"svelte",o(Ne)));const Be=j(()=>g.endsWith(".css"));u(()=>O(n,"css",o(Be)));const Oe=j(()=>g.endsWith(".json"));u(()=>O(n,"json",o(Oe)));var ue=s(n),Y=s(ue),Te=s(Y,!0);r(Y);var Ee=c(Y,2);{var He=M=>{var I=fa();fe(I,21,()=>o(G).declarations,Qe,(Ie,pe)=>{let Ke=()=>o(pe).name,Je=()=>o(pe).kind;var A=pa(),Re=s(A,!0);r(A),u(()=>{Xe(A,`declaration chip ${Je()??""}_declaration svelte-w7xguq`),z(Re,Ke())}),v(Ie,A)}),r(I),v(M,I)};p(Ee,M=>{var I;(I=o(G))!=null&&I.declarations.length&&M(He)})}r(ue),r(n),u(()=>{P(Y,"href",o(f)),z(Te,g)}),v(i,n)}),r(l),r(t),v(a,t)};p(ge,a=>{o(b)&&e.pkg.repo_url&&a(Ge)})}var me=c(ge,2),Me=s(me);ea(Me,{summary:t=>{T();var l=wa();T(),v(t,l)},children:(t,l)=>{var i=xa(),g=s(i),d=s(g,!0);u(()=>z(d,JSON.stringify(e.pkg,null,"	"))),r(g),r(i),v(t,i)},$$slots:{summary:!0,default:!0}}),r(me),r(F),v(D,F),te()}var qa=m('<ul><li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, <a href="https://www.webdevladder.net/blog">blog</a> and YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and Bluesky as <a href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a></li> <li>Mastodon as <a rel="me" href="https://fosstodon.org/@ryanatkn">@ryanatkn@fosstodon.org</a>, <a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a> and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>');function ja(D,e){var k=qa(),w=s(k),_=s(w),S=c(_,7);{var L=b=>{var F=ee(", you are here");v(b,F)};p(S,b=>{e.selected==="webdevladder.net"&&b(L)})}r(w);var y=c(w,2),W=s(y),x=c(W,2);{var q=b=>{var F=ee(", you are here");v(b,F)};p(x,b=>{e.selected==="ryanatkn.com"&&b(q)})}r(y),T(8),r(k),u(()=>{O(_,"selected",e.selected==="webdevladder.net"),O(W,"selected",e.selected==="ryanatkn.com")}),v(D,k)}var za=m('<a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function Sa(D){const e="var(--icon_size_lg)";var k=za(),w=h(k),_=s(w);K(_,{data:ae,size:e}),T(),r(w);var S=c(w,2),L=s(S);K(L,{data:aa,size:e}),T(),r(S);var y=c(S,2),W=s(y);K(W,{data:ta,size:e}),T(),r(y);var x=c(y,2),q=s(x);K(q,{data:ra,size:e}),T(),r(x),v(D,k)}var Pa=m('<h2 class="mt_0 mb_lg">Links</h2>'),La=m('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Wa(D,e){re(e,!0);var k=La(),w=s(k);{var _=x=>{var q=C(),b=h(q);B(b,()=>e.children),v(x,q)},S=x=>{var q=Pa();v(x,q)};p(w,x=>{e.children?x(_):x(S,!1)})}var L=c(w,2);ja(L,{});var y=c(L,2),W=s(y);Sa(W),r(y),r(k),v(D,k),te()}var Ca=m('<div class="mb_xl5"><!></div>'),Da=m('<main class="width_md svelte-m017mk"><section><header class="box"><h1 class="mt_xl4 svelte-m017mk"> </h1></header> <!></section> <!> <section><div class="panel p_md width_md"><!></div></section> <section class="box mb_xl7"><!></section></main>');function Va(D,e){re(e,!0);const k=sa.get();var w=Da(),_=s(w),S=s(_),L=s(S),y=s(L,!0);r(L),r(S);var W=c(S,2);xe(W,{children:(H,R)=>{K(H,{data:ae,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(_);var x=c(_,2);Wa(x,{});var q=c(x,2),b=s(q),F=s(b);ya(F,{pkg:k}),r(b),r(q);var E=c(q,2),J=s(E);Ae(J,{pkg:k,children:(H,R)=>{var U=Ca(),Q=s(U);xe(Q,{children:(X,Z)=>{K(X,{data:ae,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(U),v(H,U)},$$slots:{default:!0}}),r(E),r(w),u(()=>z(y,k.repo_name)),v(D,w),te()}export{Va as component};
