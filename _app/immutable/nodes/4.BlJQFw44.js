import{t as m,a as i,b as X,c as F}from"../chunks/ZJOpTZSG.js";import{k as be,m as ye,a3 as Je,s as _,e as s,r,o,v as D,l as h,n as J,f as k}from"../chunks/9wzcdEVc.js";import{s as q}from"../chunks/C7U9hu-S.js";import{L as Re}from"../chunks/Cxab2Hwj.js";import{i as u,s as Ue,a as Ve}from"../chunks/CtG4OL_I.js";import{a as E,b as S,f as pe,e as fe,d as V,i as Ye}from"../chunks/h1e0X-xx.js";import{p as Ae}from"../chunks/NOkdFPHe.js";import{a as he,s as ke,e as we}from"../chunks/ZJuK4sHN.js";import{f as Qe}from"../chunks/DMQk6Yvo.js";import{D as Xe}from"../chunks/DXRsoJad.js";import{S as R,b as Ze,a as ae,f as $e,c as ea}from"../chunks/bZ6KUEZj.js";import{B as xe}from"../chunks/i_uE15c4.js";import{p as aa}from"../chunks/dDCCYsJP.js";var ta=m('<div class="repo_name svelte-w7xguq"> <!></div>'),ra=m('<div class="description svelte-w7xguq"> </div>'),sa=m('<div class="motto svelte-w7xguq"> </div>'),la=m('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),oa=m('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a><img> </a></div>',1),va=m('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),na=m('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),ia=m('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),da=m('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),_a=m('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),ca=m('<div class="logo svelte-w7xguq"><img></div>'),ga=m("<li> </li>"),ma=m('<ul class="declarations unstyled svelte-w7xguq"></ul>'),ua=m('<li><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),pa=m('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),fa=m("<pre><code> </code></pre>"),ha=m('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function ka(G,e){be(e,!0);const[w,x]=Ue(),j=()=>Ve(Ae,"$page",w),c=D(()=>e.pkg.package_json),L=D(()=>e.pkg.src_json),z=D(()=>o(L).modules),P=D(()=>o(c).repository?he(ke(ke(typeof o(c).repository=="string"?o(c).repository:o(c).repository.url,".git"),"/"),"git+"):null),p=D(()=>o(c).license&&o(P)?o(P)+"/blob/main/LICENSE":null),y=(a,t)=>a+"/blob/main/src/lib/"+(t.endsWith(".js")?t.slice(0,-3)+".ts":t),N=D(()=>o(c).exports&&Object.keys(o(c).exports)),H=D(()=>o(c).exports?Object.keys(o(c).exports).map(a=>{const t=he(a,"./");return t==="."?"index.js":t}):null);var b=ha(),W=s(b),B=s(W),Y=s(B),M=s(Y),Z=s(M);{var $=a=>{var t=F(),v=k(t);E(v,()=>e.repo_name,()=>e.pkg.repo_name),i(a,t)},te=a=>{var t=ta(),v=s(t,!0),d=_(v);{var g=n=>{var l=X();h(()=>q(l,` ${o(c).glyph??""}`)),i(n,l)};u(d,n=>{o(c).glyph&&n(g)})}r(t),h(()=>q(v,e.pkg.repo_name)),i(a,t)};u(Z,a=>{e.repo_name?a($):a(te,!1)})}r(M);var re=_(M,2);E(re,()=>e.children??Je,()=>e.pkg);var se=_(re,2);{var qe=a=>{var t=F(),v=k(t);{var d=n=>{var l=F(),f=k(l);E(f,()=>e.description,()=>o(c).description),i(n,l)},g=n=>{var l=ra(),f=s(l,!0);r(l),h(()=>q(f,o(c).description)),i(n,l)};u(v,n=>{e.description?n(d):n(g,!1)})}i(a,t)};u(se,a=>{o(c).description&&a(qe)})}var le=_(se,2);{var je=a=>{var t=F(),v=k(t);{var d=n=>{var l=F(),f=k(l);E(f,()=>e.motto,()=>o(c).motto),i(n,l)},g=n=>{var l=sa(),f=s(l,!0);r(l),h(()=>q(f,o(c).motto)),i(n,l)};u(v,n=>{e.motto?n(d):n(g,!1)})}i(a,t)};u(le,a=>{o(c).motto&&a(je)})}var oe=_(le,2);{var ze=a=>{var t=F(),v=k(t);{var d=n=>{var l=F(),f=k(l);E(f,()=>e.npm_url,()=>e.pkg.npm_url),i(n,l)},g=n=>{var l=la(),f=s(l);r(l),h(()=>q(f,`npm i -D ${o(c).name??""}`)),i(n,l)};u(v,n=>{e.npm_url?n(d):n(g,!1)})}i(a,t)};u(oe,a=>{e.pkg.npm_url&&a(ze)})}var ve=_(oe,2),ne=s(ve);{var Se=a=>{var t=F(),v=k(t);{var d=n=>{var l=F(),f=k(l);E(f,()=>e.homepage_url,()=>e.pkg.homepage_url),i(n,l)},g=n=>{var l=oa(),f=_(k(l),2),O=s(f);let U;var T=s(O);pe(T,"",{},{width:"16px",height:"16px","margin-right":"var(--space_xs)"});var A=_(T);r(O),r(f),h((I,ee)=>{U=V(O,1,"chip svelte-w7xguq",null,U,I),S(O,"href",e.pkg.homepage_url),S(T,"src",e.pkg.logo_url),S(T,"alt",e.pkg.logo_alt),q(A,` ${ee??""}`)},[()=>({selected:e.pkg.homepage_url===j().url.href}),()=>Qe(e.pkg.homepage_url)]),i(n,l)};u(v,n=>{e.homepage_url?n(d):n(g,!1)})}i(a,t)};u(ne,a=>{e.pkg.homepage_url&&a(Se)})}var ie=_(ne,2);{var Le=a=>{var t=va(),v=_(k(t),2),d=s(v),g=s(d);r(d),r(v),h(()=>{S(d,"href",e.pkg.repo_url),q(g,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),i(a,t)};u(ie,a=>{e.pkg.repo_url&&a(Le)})}var de=_(ie,2);{var Pe=a=>{var t=na(),v=_(k(t),2),d=s(v),g=s(d,!0);r(d),r(v),h(()=>{S(d,"href",e.pkg.npm_url),q(g,o(c).name)}),i(a,t)};u(de,a=>{e.pkg.npm_url&&a(Pe)})}var _e=_(de,2);{var We=a=>{var t=ia(),v=_(k(t),2),d=s(v),g=s(d,!0);r(d),r(v),h(()=>{S(d,"href",e.pkg.changelog_url),q(g,o(c).version)}),i(a,t)};u(_e,a=>{e.pkg.changelog_url&&a(We)})}var ce=_(_e,2);{var Ce=a=>{var t=da(),v=_(k(t),2),d=s(v),g=s(d,!0);r(d),r(v),h(()=>{S(d,"href",o(p)),q(g,o(c).license)}),i(a,t)};u(ce,a=>{o(p)&&a(Ce)})}var De=_(ce,2);{var Fe=a=>{var t=_a(),v=_(k(t),2),d=s(v),g=_(d,2);r(v),h((n,l)=>{S(d,"href",`${n??""}.well-known/package.json`),S(g,"href",`${l??""}.well-known/src.json`)},[()=>we(e.pkg.homepage_url,"/"),()=>we(e.pkg.homepage_url,"/")]),i(a,t)};u(De,a=>{e.pkg.homepage_url&&a(Fe)})}r(ve),r(Y),r(B);var Ge=_(B,2);{var Ne=a=>{var t=ca(),v=s(t);pe(v,"",{},{width:"var(--size, var(--icon_size_xl2))",height:"var(--size, var(--icon_size_xl2))"}),r(t),h(()=>{S(v,"src",e.pkg.logo_url),S(v,"alt",e.pkg.logo_alt)}),i(a,t)};u(Ge,a=>{e.pkg.logo_url&&a(Ne)})}r(W);var ge=_(W,2);{var Be=a=>{var t=pa(),v=s(t);fe(v,22,()=>o(H),d=>d,(d,g,n)=>{var l=ua();const f=D(()=>y(e.pkg.repo_url,g)),O=D(()=>{var C;return(C=o(N))==null?void 0:C[o(n)]}),U=D(()=>{var C;return o(O)?(C=o(z))==null?void 0:C[o(O)]:void 0});let T;var A=s(l),I=s(A),ee=s(I,!0);r(I);var Oe=_(I,2);{var Te=C=>{var K=ma();fe(K,21,()=>o(U).declarations,Ye,(Ee,ue)=>{let He=()=>o(ue).name,Ie=()=>o(ue).kind;var Q=ga(),Ke=s(Q,!0);r(Q),h(()=>{V(Q,1,`declaration chip ${Ie()??""}_declaration`,"svelte-w7xguq"),q(Ke,He())}),i(Ee,Q)}),r(K),i(C,K)};u(Oe,C=>{var K;(K=o(U))!=null&&K.declarations.length&&C(Te)})}r(A),r(l),h(C=>{T=V(l,1,"module svelte-w7xguq",null,T,C),S(I,"href",o(f)),q(ee,g)},[()=>({ts:g.endsWith(".js"),svelte:g.endsWith(".svelte"),css:g.endsWith(".css"),json:g.endsWith(".json")})]),i(d,l)}),r(v),r(t),i(a,t)};u(ge,a=>{o(H)&&e.pkg.repo_url&&a(Be)})}var me=_(ge,2),Me=s(me);Xe(Me,{summary:t=>{J();var v=X("raw package metadata");i(t,v)},children:(t,v)=>{var d=fa(),g=s(d),n=s(g,!0);r(g),r(d),h(l=>q(n,l),[()=>JSON.stringify(e.pkg,null,"	")]),i(t,d)},$$slots:{summary:!0,default:!0}}),r(me),r(b),i(G,b),ye(),x()}var wa=m('<ul><li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub as <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and Bluesky as <a href="https://bsky.app/profile/ryanatkn.com">@ryanatkn.com</a></li> <li>Mastodon as <a rel="me" href="https://fosstodon.org/@ryanatkn">@ryanatkn@fosstodon.org</a> and <a rel="me" href="https://fosstodon.org/@webdevladder">@webdevladder@fosstodon.org</a></li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, <a href="https://www.webdevladder.net/blog">blog</a> and YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li>@webdevladder on <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a> and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li></ul>');function xa(G,e){var w=wa(),x=s(w),j=s(x);let c;var L=_(j,2);{var z=b=>{var W=X(", you are here");i(b,W)};u(L,b=>{e.selected==="ryanatkn.com"&&b(z)})}r(x);var P=_(x,6),p=s(P);let y;var N=_(p,7);{var H=b=>{var W=X(", you are here");i(b,W)};u(N,b=>{e.selected==="webdevladder.net"&&b(H)})}r(P),J(2),r(w),h((b,W)=>{c=V(j,1,"",null,c,b),y=V(p,1,"",null,y,W)},[()=>({selected:e.selected==="ryanatkn.com"}),()=>({selected:e.selected==="webdevladder.net"})]),i(G,w)}var ba=m('<a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function ya(G){const e="var(--icon_size_lg)";var w=ba(),x=k(w),j=s(x);R(j,{data:Ze,size:e}),J(),r(x);var c=_(x,2),L=s(c);R(L,{data:ae,size:e}),J(),r(c);var z=_(c,2),P=s(z);R(P,{data:$e,size:e}),J(),r(z);var p=_(z,2),y=s(p);R(y,{data:ea,size:e}),J(),r(p),i(G,w)}var qa=m('<h2 class="mt_0 mb_lg">Links</h2>'),ja=m('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function za(G,e){var w=ja(),x=s(w);{var j=p=>{var y=F(),N=k(y);E(N,()=>e.children),i(p,y)},c=p=>{var y=qa();i(p,y)};u(x,p=>{e.children?p(j):p(c,!1)})}var L=_(x,2);xa(L,{});var z=_(L,2),P=s(z);ya(P),r(z),r(w),i(G,w)}var Sa=m('<div class="mb_xl5"><!></div>'),La=m('<main class="width_md svelte-m017mk"><section><header class="box"><h1 class="mt_xl4 svelte-m017mk"> </h1></header> <!></section> <!> <section><div class="panel p_md width_md"><!></div></section> <section class="box mb_xl7"><!></section></main>');function Ia(G,e){be(e,!0);const w=aa.get();var x=La(),j=s(x),c=s(j),L=s(c),z=s(L,!0);r(L),r(c);var P=_(c,2);xe(P,{children:(B,Y)=>{R(B,{data:ae,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(j);var p=_(j,2);za(p,{});var y=_(p,2),N=s(y),H=s(N);ka(H,{pkg:w}),r(N),r(y);var b=_(y,2),W=s(b);Re(W,{pkg:w,children:(B,Y)=>{var M=Sa(),Z=s(M);xe(Z,{children:($,te)=>{R($,{data:ae,size:"var(--icon_size_sm)"})},$$slots:{default:!0}}),r(M),i(B,M)},$$slots:{default:!0}}),r(b),r(x),h(()=>q(z,w.repo_name)),i(G,x),ye()}export{Ia as component};
