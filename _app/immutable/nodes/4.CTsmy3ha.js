import{c as r,s as t,a as v,t as g,z as Be,e as T,f as q,r as a,A as ye,y as oe}from"../chunks/disclose-version.Cmho9P4e.js";import{p as le,a as ne,v as i,t as m,H as x,I as U}from"../chunks/runtime.DuKekwsY.js";import{s as Z}from"../chunks/render.Cb2nao7p.js";import{M as ve,L as De}from"../chunks/Moss_Logo.B8XAXXO4.js";import{i as k,p as $}from"../chunks/props.DS8PSEIH.js";import{s as J,b as D,t as I,e as we,i as Ge,h as Te,d as P}from"../chunks/class.B8v9gKBt.js";import{s as y}from"../chunks/style.Bk7ejTAN.js";import{s as We,a as Ce,p as Ee}from"../chunks/stores.CuBft-39.js";import{e as be,a as He,s as ke}from"../chunks/string.ZJuK4sHN.js";import{f as Ne}from"../chunks/url.Dt0VZVCT.js";import{D as Ue}from"../chunks/Details.CqEbaBWc.js";import{S as Ie}from"../chunks/Spider.BkpkMj-c.js";import{B as xe}from"../chunks/Breadcrumb.wcLRANqu.js";import{g as Ke}from"../chunks/pkg.BkrpB9w-.js";var Oe=g('<div class="repo_name svelte-w7xguq"> <!></div>'),Ye=g('<div class="description svelte-w7xguq"> </div>'),Ae=g('<div class="motto svelte-w7xguq"> </div>'),Je=g('<blockquote class="npm_url svelte-w7xguq"> </blockquote>'),Re=g('<span class="title svelte-w7xguq">homepage</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq"><img> </a></div>',1),Xe=g('<span class="title svelte-w7xguq">repo</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="repo"> </a></div>',1),Qe=g('<span class="title svelte-w7xguq">npm</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="npm"> </a></div>',1),$e=g('<span class="title svelte-w7xguq">version</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="version"> </a></div>',1),et=g('<span class="title svelte-w7xguq">license</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="license"> </a></div>',1),tt=g('<span class="title svelte-w7xguq">data</span> <div class="content svelte-w7xguq"><a class="chip svelte-w7xguq" title="data">package.json</a> <a class="chip svelte-w7xguq" title="data">src.json</a></div>',1),at=g('<div class="logo svelte-w7xguq"><img></div>'),rt=g("<li> </li>"),st=g('<ul class="declarations unstyled svelte-w7xguq"></ul>'),lt=g('<li class="module svelte-w7xguq"><div class="module_content svelte-w7xguq"><a class="chip"> </a> <!></div></li>'),nt=g('<section class="svelte-w7xguq"><menu class="unstyled"></menu></section>'),it=g("raw data for <code>pkg: Package_Meta</code>",1),vt=g("<pre><code> </code></pre>"),ot=g('<div class="package_detail svelte-w7xguq"><div class="info svelte-w7xguq"><div class="flex flex_1"><div><header class="svelte-w7xguq"><!></header> <!> <!> <!> <!> <section class="properties svelte-w7xguq"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-w7xguq"><!></section></div>');function dt(f,e){le(e,!0);const u=We(),p=()=>Ce(Ee,"$page",u),V=x(()=>e.pkg),h=x(()=>{let{package_json:d,src_json:l}=i(V);return[d,l]}),n=x(()=>i(h)[0]),b=x(()=>i(h)[1]),H=x(()=>i(b)),w=x(()=>{let{modules:d}=i(H);return[d]}),z=x(()=>i(w)[0]),j=x(()=>i(n).repository?He(ke(ke(typeof i(n).repository=="string"?i(n).repository:i(n).repository.url,".git"),"/"),"git+"):null),L=x(()=>i(n).license&&i(j)?i(j)+"/blob/main/LICENSE":null),F=(d,l)=>d+"/blob/main/src/lib/"+(l.endsWith(".js")?l.slice(0,-3)+".ts":l),B=x(()=>i(n).exports&&Object.keys(i(n).exports)),M=x(()=>i(n).exports?Object.keys(i(n).exports).map(d=>{const l=He(d,"./");return l==="."?"index.js":l}):null);var W=ot(),S=r(W),C=r(S),G=r(C),K=r(G),X=r(K);k(X,()=>e.repo_name,d=>{var l=T(),c=q(l);J(c,()=>e.repo_name,()=>e.pkg.repo_name),v(d,l)},d=>{var l=Oe(),c=r(l),o=t(c);k(o,()=>i(n).glyph,s=>{var _=Be();m(()=>Z(_,` ${i(n).glyph??""}`)),v(s,_)}),a(l),m(()=>Z(c,e.pkg.repo_name)),v(d,l)}),a(K);var ee=t(t(K,!0));k(ee,()=>e.children,d=>{var l=T(),c=q(l);J(c,()=>e.children,()=>e.pkg),v(d,l)});var te=t(t(ee,!0));k(te,()=>i(n).description,d=>{var l=T(),c=q(l);k(c,()=>e.description,o=>{var s=T(),_=q(s);J(_,()=>e.description,()=>i(n).description),v(o,s)},o=>{var s=Ye(),_=r(s);a(s),m(()=>Z(_,i(n).description)),v(o,s)}),v(d,l)});var Q=t(t(te,!0));k(Q,()=>i(n).motto,d=>{var l=T(),c=q(l);k(c,()=>e.motto,o=>{var s=T(),_=q(s);J(_,()=>e.motto,()=>i(n).motto),v(o,s)},o=>{var s=Ae(),_=r(s);a(s),m(()=>Z(_,i(n).motto)),v(o,s)}),v(d,l)});var Y=t(t(Q,!0));k(Y,()=>e.pkg.npm_url,d=>{var l=T(),c=q(l);k(c,()=>e.npm_url,o=>{var s=T(),_=q(s);J(_,()=>e.npm_url,()=>e.pkg.npm_url),v(o,s)},o=>{var s=Je(),_=r(s);a(s),m(()=>Z(_,`npm i -D ${i(n).name??""}`)),v(o,s)}),v(d,l)});var A=t(t(Y,!0)),de=r(A);k(de,()=>e.pkg.homepage_url,d=>{var l=T(),c=q(l);k(c,()=>e.homepage_url,o=>{var s=T(),_=q(s);J(_,()=>e.homepage_url,()=>e.pkg.homepage_url),v(o,s)},o=>{var s=Re(),_=q(s),E=t(t(_,!0)),R=r(E),O=r(R),ae=t(O,!0);m(()=>Z(ae,` ${Ne(e.pkg.homepage_url)??""}`)),a(R),a(E),m(()=>{D(R,"href",e.pkg.homepage_url),I(R,"selected",e.pkg.homepage_url===p().url.href),D(O,"src",e.pkg.logo_url),D(O,"alt",e.pkg.logo_alt),y(O,"width","16px"),y(O,"height","16px"),y(O,"margin-right","var(--space_xs)")}),v(o,s)}),v(d,l)});var ce=t(t(de,!0));k(ce,()=>e.pkg.repo_url,d=>{var l=Xe(),c=q(l),o=t(t(c,!0)),s=r(o),_=r(s);a(s),a(o),m(()=>{D(s,"href",e.pkg.repo_url),Z(_,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),v(d,l)});var _e=t(t(ce,!0));k(_e,()=>e.pkg.npm_url,d=>{var l=Qe(),c=q(l),o=t(t(c,!0)),s=r(o),_=r(s);a(s),a(o),m(()=>{D(s,"href",e.pkg.npm_url),Z(_,i(n).name)}),v(d,l)});var ue=t(t(_e,!0));k(ue,()=>e.pkg.changelog_url,d=>{var l=$e(),c=q(l),o=t(t(c,!0)),s=r(o),_=r(s);a(s),a(o),m(()=>{D(s,"href",e.pkg.changelog_url),Z(_,i(n).version)}),v(d,l)});var he=t(t(ue,!0));k(he,()=>i(L),d=>{var l=et(),c=q(l),o=t(t(c,!0)),s=r(o),_=r(s);a(s),a(o),m(()=>{D(s,"href",i(L)),Z(_,i(n).license)}),v(d,l)});var ze=t(t(he,!0));k(ze,()=>e.pkg.homepage_url,d=>{var l=tt(),c=q(l),o=t(t(c,!0)),s=r(o);m(()=>D(s,"href",`${be(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var _=t(t(s,!0));m(()=>D(_,"href",`${be(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),a(o),v(d,l)}),a(A),a(G),a(C);var qe=t(t(C,!0));k(qe,()=>e.pkg.logo_url,d=>{var l=at(),c=r(l);a(l),m(()=>{D(c,"src",e.pkg.logo_url),D(c,"alt",e.pkg.logo_alt),y(c,"width","var(--size, var(--icon_size_xl2))"),y(c,"height","var(--size, var(--icon_size_xl2))")}),v(d,l)}),a(S);var ge=t(t(S,!0));k(ge,()=>i(M)&&e.pkg.repo_url,d=>{var l=nt(),c=r(l);we(c,78,()=>i(M),(o,s)=>o,(o,s,_)=>{var E=lt();const R=x(()=>F(e.pkg.repo_url,U(s))),O=x(()=>{var N;return(N=i(B))==null?void 0:N[i(_)]}),ae=x(()=>{var N;return i(O)&&((N=i(z))==null?void 0:N[i(O)])});m(()=>I(E,"ts",U(s).endsWith(".js"))),m(()=>I(E,"svelte",U(s).endsWith(".svelte"))),m(()=>I(E,"css",U(s).endsWith(".css"))),m(()=>I(E,"json",U(s).endsWith(".json")));var fe=r(E),re=r(fe),Le=r(re);a(re);var Me=t(t(re,!0));k(Me,()=>{var N;return(N=i(ae))==null?void 0:N.declarations.length},N=>{var ie=st();we(ie,73,()=>i(ae).declarations,Ge,(Se,pe,Zt)=>{let Ze=()=>U(U(pe)).name,Pe=()=>U(U(pe)).kind;var se=rt(),Fe=r(se);a(se),m(()=>{Te(se,`declaration chip ${Pe()??""}_declaration svelte-w7xguq`),Z(Fe,Ze())}),v(Se,se)}),a(ie),v(N,ie)}),a(fe),a(E),m(()=>{D(re,"href",i(R)),Z(Le,U(s))}),v(o,E)}),a(c),a(l),v(d,l)});var me=t(t(ge,!0)),je=r(me);Ue(je,{summary:l=>{ye();var c=it();t(q(c,!0)),v(l,c)},children:(l,c)=>{var o=vt(),s=r(o),_=r(s);a(s),a(o),m(()=>Z(_,JSON.stringify(e.pkg,null,"	"))),v(l,o)},$$slots:{default:!0}}),a(me),a(W),v(f,W),ne()}var ct=g(", you are here",1),_t=g(", you are here",1),ut=g(", you are here",1),ht=g(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function gt(f,e){var u=ht(),p=r(u);t(r(p)),ye(),a(p);var V=t(t(p,!0)),h=r(V),n=t(t(h,!0)),b=t(t(n,!0)),H=t(b);k(H,()=>e.selected==="webdevladder.net",Y=>{var A=ct();v(Y,A)}),a(V);var w=t(t(V,!0)),z=r(w),j=t(t(z,!0)),L=t(t(j,!0)),F=t(L);k(F,()=>e.selected==="spiderspace.org",Y=>{var A=_t();v(Y,A)}),a(w);var B=t(t(w,!0)),M=r(B),W=t(t(M,!0));k(W,()=>e.selected==="ryanatkn.com",Y=>{var A=ut();v(Y,A)}),a(B);var S=t(t(B,!0)),C=t(r(S));t(t(C,!0)),a(S);var G=t(t(S,!0)),K=t(r(G));t(t(K,!0)),a(G);var X=t(t(G,!0)),ee=t(r(X)),te=t(t(ee,!0));t(t(te,!0)),a(X);var Q=t(t(X,!0));t(r(Q)),a(Q),a(u),m(()=>{I(h,"selected",e.selected==="webdevladder.net"),I(z,"selected",e.selected==="spiderspace.org"),I(M,"selected",e.selected==="ryanatkn.com")}),v(f,u)}var mt=oe("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function ft(f,e){const u=$(e,"fill",3,"var(--color_g_5)"),p=$(e,"label",3,"three sleepy z's"),V=x(()=>e.width??e.size),h=x(()=>e.height??e.size);var n=mt();let b;var H=r(n),w=r(H);let z;a(H);var j=t(H),L=r(j);let F;var B=t(L);let M;a(j),a(n),m(()=>{b=P(n,b,{viewBox:"0 0 100 100",...e.attrs,"aria-label":p(),class:e.classes},"svelte-16ciom8",!0),I(n,"inline",e.inline),y(n,"width",i(V),void 0,!0),y(n,"height",i(h),void 0,!0),z=P(w,z,{...e.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},"svelte-16ciom8",!0),y(w,"fill",u(),void 0,!0),F=P(L,F,{...e.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},"svelte-16ciom8",!0),y(L,"fill",u(),void 0,!0),M=P(B,M,{...e.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},"svelte-16ciom8",!0),y(B,"fill",u(),void 0,!0)}),v(f,n)}class Ve extends Error{constructor(e,u=`Unreachable case: ${e}`){super(u)}}const pt=f=>{switch(f){case"fuz":return"#6a3e1b";case"fuz_code":return"#e03e81";case"fuz_blog":return"#b19a25";case"fuz_mastodon":return"#6a40bf";case"fuz_gitops":return"#397fc6";default:throw new Ve(f)}},wt=f=>{switch(f){case"fuz":return"blue";case"fuz_code":return"pink";case"fuz_blog":return"yellow";case"fuz_mastodon":return"purple";case"fuz_gitops":return"blue";default:throw new Ve(f)}};function bt(f,e){le(e,!0);const u=x(()=>e.project?pt(e.project):e.fill??"var(--color_f_5)"),p=x(()=>e.label??(e.project?`a friendly ${wt(e.project)} spider facing you`:e.fill?"a friendly spider facing you":"a friendly brown spider facing you"));Ie(f,{get fill(){return i(u)},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return i(p)},get inline(){return e.inline},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return e.attrs}}),ne()}var Ht=oe("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function kt(f,e){const u=$(e,"label",3,"a pixelated green oak acorn with a glint of sun"),p=x(()=>e.width??e.size),V=x(()=>e.height??e.size);var h=Ht();let n;var b=r(h);let H;var w=t(b);let z;var j=t(w);let L;var F=t(j);let B;var M=t(F);let W;var S=t(M);let C;var G=t(S);let K;a(h),m(()=>{n=P(h,n,{viewBox:"0 0 100 100",...e.attrs,"aria-label":u(),class:e.classes},"svelte-16ciom8",!0),I(h,"inline",e.inline),y(h,"width",i(p),void 0,!0),y(h,"height",i(V),void 0,!0),H=P(b,H,{...e.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},"svelte-16ciom8",!0),y(b,"fill","#6f974c",void 0,!0),z=P(w,z,{...e.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},"svelte-16ciom8",!0),y(w,"fill","#5e853f",void 0,!0),L=P(j,L,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},"svelte-16ciom8",!0),y(j,"fill","#6f492b",void 0,!0),B=P(F,B,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},"svelte-16ciom8",!0),y(F,"fill","#3b730f",void 0,!0),W=P(M,W,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},"svelte-16ciom8",!0),y(M,"fill","#473323",void 0,!0),C=P(S,C,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},"svelte-16ciom8",!0),y(S,"fill","#2e6006",void 0,!0),K=P(G,K,{...e.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},"svelte-16ciom8",!0),y(G,"fill","#34251a",void 0,!0)}),v(f,h)}var xt=oe("<svg><g><path></path></g></svg>");function yt(f,e){const u=$(e,"fill",3,"#f67c4c"),p=$(e,"label",3,"a friendly pixelated spider facing you"),V=x(()=>e.width??e.size),h=x(()=>e.height??e.size);var n=xt();let b;var H=r(n),w=r(H);let z;a(H),a(n),m(()=>{b=P(n,b,{viewBox:"0 0 100 100",...e.attrs,"aria-label":p(),class:e.classes},void 0,!0),y(n,"width",i(V),void 0,!0),y(n,"height",i(h),void 0,!0),z=P(w,z,{...e.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},void 0,!0),y(w,"fill",u(),void 0,!0)}),v(f,n)}var Vt=g('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function zt(f){const e="var(--icon_size_lg)";var u=Vt(),p=q(u),V=r(p);ft(V,{size:e}),t(V),a(p);var h=t(t(p,!0)),n=r(h);ve(n,{size:e}),t(n),a(h);var b=t(t(h,!0)),H=r(b);bt(H,{size:e}),t(H),a(b);var w=t(t(b,!0)),z=r(w);kt(z,{size:e}),t(z),a(w);var j=t(t(w,!0)),L=r(j);yt(L,{size:e}),t(L),a(j),v(f,u)}var qt=g('<h2 class="mt_0 mb_lg">Links</h2>'),jt=g('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Lt(f,e){le(e,!0);var u=jt(),p=r(u);k(p,()=>e.children,b=>{var H=T(),w=q(H);J(w,()=>e.children),v(b,H)},b=>{var H=qt();v(b,H)});var V=t(t(p,!0));gt(V,{});var h=t(t(V,!0)),n=r(h);zt(n),a(h),a(u),v(f,u),ne()}var Mt=g('<div class="mb_xl5"><!></div>'),St=g('<main class="width_md svelte-m017mk"><section><header class="box"><h1 class="mt_xl4 svelte-m017mk"> </h1></header> <!></section> <!> <section><div class="panel p_md width_md"><!></div></section> <section class="box mb_xl7"><!></section></main>');function Yt(f,e){le(e,!0);const u=Ke();var p=St(),V=r(p),h=r(V),n=r(h),b=r(n);a(n),a(h);var H=t(t(h,!0));xe(H,{children:(M,W)=>{ve(M,{size:"32px"})},$$slots:{default:!0}}),a(V);var w=t(t(V,!0));Lt(w,{});var z=t(t(w,!0)),j=r(z),L=r(j);dt(L,{pkg:u}),a(j),a(z);var F=t(t(z,!0)),B=r(F);De(B,{pkg:u,children:(M,W)=>{var S=Mt(),C=r(S);xe(C,{children:(G,K)=>{ve(G,{size:"32px"})},$$slots:{default:!0}}),a(S),v(M,S)},$$slots:{default:!0}}),a(F),a(p),m(()=>Z(b,u.repo_name)),v(f,p),ne()}export{Yt as component};