import{c as r,s as e,a as i,t as g,z as De,e as C,f as j,r as t,A as Ve,n as oe}from"../chunks/disclose-version.gZ-2tz3Z.js";import{p as le,a as ve,g as n,t as m,d as y,J as G}from"../chunks/runtime.4yfH9i_8.js";import{s as P}from"../chunks/render.nIEHh2HH.js";import{M as ie,L as Ge}from"../chunks/Moss_Logo.K3oiUljJ.js";import{i as w,p as $}from"../chunks/props.BD3-fUzo.js";import{b as A,a as T,e as be,i as Te,s as F}from"../chunks/attributes.CPiNokUc.js";import{t as J,s as We}from"../chunks/class.BFlSs2mH.js";import{s as V}from"../chunks/style.iv2mhl8q.js";import{s as Ce,a as Ee,p as Ne}from"../chunks/stores.D3_KNvZh.js";import{e as ke,a as He,s as we}from"../chunks/string.ZJuK4sHN.js";import{f as Ue}from"../chunks/url.Dt0VZVCT.js";import{D as qe}from"../chunks/Details.CmazD-f3.js";import{S as Ke}from"../chunks/Spider.DPLA-AHl.js";import{B as ye}from"../chunks/Breadcrumb.CkXGVhb-.js";import{g as Oe}from"../chunks/pkg.Z3b6FFHI.js";var Ye=g('<div class="repo_name svelte-keb345"> <!></div>'),Ie=g('<div class="description svelte-keb345"> </div>'),Je=g('<div class="motto svelte-keb345"> </div>'),Ae=g('<blockquote class="npm_url svelte-keb345"> </blockquote>'),Re=g('<span class="title svelte-keb345">homepage</span> <div class="content svelte-keb345"><a class="chip svelte-keb345"><img> </a></div>',1),Xe=g('<span class="title svelte-keb345">repo</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="repo"> </a></div>',1),Qe=g('<span class="title svelte-keb345">npm</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="npm"> </a></div>',1),$e=g('<span class="title svelte-keb345">version</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="version"> </a></div>',1),ea=g('<span class="title svelte-keb345">license</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="license"> </a></div>',1),aa=g('<span class="title svelte-keb345">data</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="data">package.json</a> <a class="chip svelte-keb345" title="data">src.json</a></div>',1),ta=g('<div class="logo svelte-keb345"><img></div>'),ra=g("<li> </li>"),sa=g('<ul class="declarations unstyled svelte-keb345"></ul>'),la=g('<li class="module svelte-keb345"><div class="module_content svelte-keb345"><a class="chip"> </a> <!></div></li>'),va=g('<section class="svelte-keb345"><menu class="unstyled"></menu></section>'),na=g("raw data for <code>pkg: Package_Meta</code>",1),ia=g("<pre><code> </code></pre>"),oa=g('<div class="package_detail svelte-keb345"><div class="info svelte-keb345"><div class="flex flex_1"><div><header class="svelte-keb345"><!></header> <!> <!> <!> <!> <section class="properties svelte-keb345"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-keb345"><!></section></div>');function _a(f,a){le(a,!0);const h=Ce(),p=()=>Ee(Ne,"$page",h),z=y(()=>a.pkg),u=y(()=>{let{package_json:_,src_json:l}=n(z);return[_,l]}),v=y(()=>n(u)[0]),k=y(()=>n(u)[1]),H=y(()=>n(k)),b=y(()=>{let{modules:_}=n(H);return[_]}),x=y(()=>n(b)[0]),L=y(()=>n(v).repository?He(we(we(typeof n(v).repository=="string"?n(v).repository:n(v).repository.url,".git"),"/"),"git+"):null),M=y(()=>n(v).license&&n(L)?n(L)+"/blob/main/LICENSE":null),B=(_,l)=>_+"/blob/main/src/lib/"+(l.endsWith(".js")?l.slice(0,-3)+".ts":l),D=y(()=>n(v).exports&&Object.keys(n(v).exports)),S=y(()=>n(v).exports?Object.keys(n(v).exports).map(_=>{const l=He(_,"./");return l==="."?"index.js":l}):null);var E=oa(),Z=r(E),N=r(Z),W=r(N),K=r(W),X=r(K);w(X,()=>a.repo_name,_=>{var l=C(),c=j(l);A(c,()=>a.repo_name,()=>a.pkg.repo_name),i(_,l)},_=>{var l=Ye(),c=r(l),o=e(c);w(o,()=>n(v).glyph,s=>{var d=De();m(()=>P(d,` ${n(v).glyph??""}`)),i(s,d)}),t(l),m(()=>P(c,a.pkg.repo_name)),i(_,l)}),t(K);var ee=e(e(K,!0));w(ee,()=>a.children,_=>{var l=C(),c=j(l);A(c,()=>a.children,()=>a.pkg),i(_,l)});var ae=e(e(ee,!0));w(ae,()=>n(v).description,_=>{var l=C(),c=j(l);w(c,()=>a.description,o=>{var s=C(),d=j(s);A(d,()=>a.description,()=>n(v).description),i(o,s)},o=>{var s=Ie(),d=r(s);t(s),m(()=>P(d,n(v).description)),i(o,s)}),i(_,l)});var Q=e(e(ae,!0));w(Q,()=>n(v).motto,_=>{var l=C(),c=j(l);w(c,()=>a.motto,o=>{var s=C(),d=j(s);A(d,()=>a.motto,()=>n(v).motto),i(o,s)},o=>{var s=Je(),d=r(s);t(s),m(()=>P(d,n(v).motto)),i(o,s)}),i(_,l)});var Y=e(e(Q,!0));w(Y,()=>a.pkg.npm_url,_=>{var l=C(),c=j(l);w(c,()=>a.npm_url,o=>{var s=C(),d=j(s);A(d,()=>a.npm_url,()=>a.pkg.npm_url),i(o,s)},o=>{var s=Ae(),d=r(s);t(s),m(()=>P(d,`npm i -D ${n(v).name??""}`)),i(o,s)}),i(_,l)});var I=e(e(Y,!0)),_e=r(I);w(_e,()=>a.pkg.homepage_url,_=>{var l=C(),c=j(l);w(c,()=>a.homepage_url,o=>{var s=C(),d=j(s);A(d,()=>a.homepage_url,()=>a.pkg.homepage_url),i(o,s)},o=>{var s=Re(),d=j(s),U=e(e(d,!0)),R=r(U),O=r(R),te=e(O,!0);m(()=>P(te,` ${Ue(a.pkg.homepage_url)??""}`)),t(R),t(U),m(()=>{T(R,"href",a.pkg.homepage_url),J(R,"selected",a.pkg.homepage_url===p().url.href),T(O,"src",a.pkg.logo_url),T(O,"alt",a.pkg.logo_alt),V(O,"width","16px"),V(O,"height","16px"),V(O,"margin-right","var(--space_xs)")}),i(o,s)}),i(_,l)});var ce=e(e(_e,!0));w(ce,()=>a.pkg.repo_url,_=>{var l=Xe(),c=j(l),o=e(e(c,!0)),s=r(o),d=r(s);t(s),t(o),m(()=>{T(s,"href",a.pkg.repo_url),P(d,`${a.pkg.owner_name??""}/${a.pkg.repo_name??""}`)}),i(_,l)});var de=e(e(ce,!0));w(de,()=>a.pkg.npm_url,_=>{var l=Qe(),c=j(l),o=e(e(c,!0)),s=r(o),d=r(s);t(s),t(o),m(()=>{T(s,"href",a.pkg.npm_url),P(d,n(v).name)}),i(_,l)});var he=e(e(de,!0));w(he,()=>a.pkg.changelog_url,_=>{var l=$e(),c=j(l),o=e(e(c,!0)),s=r(o),d=r(s);t(s),t(o),m(()=>{T(s,"href",a.pkg.changelog_url),P(d,n(v).version)}),i(_,l)});var ue=e(e(he,!0));w(ue,()=>n(M),_=>{var l=ea(),c=j(l),o=e(e(c,!0)),s=r(o),d=r(s);t(s),t(o),m(()=>{T(s,"href",n(M)),P(d,n(v).license)}),i(_,l)});var xe=e(e(ue,!0));w(xe,()=>a.pkg.homepage_url,_=>{var l=aa(),c=j(l),o=e(e(c,!0)),s=r(o);m(()=>T(s,"href",`${ke(a.pkg.homepage_url,"/")??""}.well-known/package.json`));var d=e(e(s,!0));m(()=>T(d,"href",`${ke(a.pkg.homepage_url,"/")??""}.well-known/src.json`)),t(o),i(_,l)}),t(I),t(W),t(N);var je=e(e(N,!0));w(je,()=>a.pkg.logo_url,_=>{var l=ta(),c=r(l);t(l),m(()=>{T(c,"src",a.pkg.logo_url),T(c,"alt",a.pkg.logo_alt),V(c,"width","var(--size, var(--icon_size_xl2))"),V(c,"height","var(--size, var(--icon_size_xl2))")}),i(_,l)}),t(Z);var ge=e(e(Z,!0));w(ge,()=>n(S)&&a.pkg.repo_url,_=>{var l=va(),c=r(l);be(c,79,()=>n(S),(o,s)=>G(o),(o,s,d)=>{var U=la();const R=y(()=>B(a.pkg.repo_url,G(s))),O=y(()=>{var q;return(q=n(D))==null?void 0:q[G(d)]}),te=y(()=>{var q;return n(O)&&((q=n(x))==null?void 0:q[n(O)])});m(()=>J(U,"ts",G(s).endsWith(".js"))),m(()=>J(U,"svelte",G(s).endsWith(".svelte"))),m(()=>J(U,"css",G(s).endsWith(".css"))),m(()=>J(U,"json",G(s).endsWith(".json")));var fe=r(U),re=r(fe),Me=r(re);t(re);var Se=e(e(re,!0));w(Se,()=>{var q;return(q=n(te))==null?void 0:q.declarations.length},q=>{var ne=sa();be(ne,73,()=>n(te).declarations,Te,(Ze,pe,Pa)=>{let Pe=()=>G(G(pe)).name,Fe=()=>G(G(pe)).kind;var se=ra(),Be=r(se);t(se),m(()=>{We(se,`declaration chip ${Fe()??""}_declaration svelte-keb345`),P(Be,Pe())}),i(Ze,se)}),t(ne),i(q,ne)}),t(fe),t(U),m(()=>{T(re,"href",n(R)),P(Me,G(s))}),i(o,U)}),t(c),t(l),i(_,l)});var me=e(e(ge,!0)),Le=r(me);qe(Le,{summary:l=>{Ve();var c=na();e(j(c,!0)),i(l,c)},children:(l,c)=>{var o=ia(),s=r(o),d=r(s);m(()=>P(d,JSON.stringify(a.pkg,null,"	"))),t(s),t(o),i(l,o)},$$slots:{default:!0}}),t(me),t(E),i(f,E),ve()}var ca=g(", you are here",1),da=g(", you are here",1),ha=g(", you are here",1),ua=g(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function ga(f,a){var h=ua(),p=r(h);e(r(p)),Ve(),t(p);var z=e(e(p,!0)),u=r(z),v=e(e(u,!0)),k=e(e(v,!0)),H=e(k);w(H,()=>a.selected==="webdevladder.net",Y=>{var I=ca();i(Y,I)}),t(z);var b=e(e(z,!0)),x=r(b),L=e(e(x,!0)),M=e(e(L,!0)),B=e(M);w(B,()=>a.selected==="spiderspace.org",Y=>{var I=da();i(Y,I)}),t(b);var D=e(e(b,!0)),S=r(D),E=e(e(S,!0));w(E,()=>a.selected==="ryanatkn.com",Y=>{var I=ha();i(Y,I)}),t(D);var Z=e(e(D,!0)),N=e(r(Z));e(e(N,!0)),t(Z);var W=e(e(Z,!0)),K=e(r(W));e(e(K,!0)),t(W);var X=e(e(W,!0)),ee=e(r(X)),ae=e(e(ee,!0));e(e(ae,!0)),t(X);var Q=e(e(X,!0));e(r(Q)),t(Q),t(h),m(()=>{J(u,"selected",a.selected==="webdevladder.net"),J(x,"selected",a.selected==="spiderspace.org"),J(S,"selected",a.selected==="ryanatkn.com")}),i(f,h)}var ma=oe("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function fa(f,a){const h=$(a,"fill",3,"hsl(var(--color_g_5))"),p=$(a,"label",3,"three sleepy z's"),z=y(()=>a.width??a.size),u=y(()=>a.height??a.size);var v=ma();let k;var H=r(v),b=r(H);let x;t(H);var L=e(H),M=r(L);let B;var D=e(M);let S;t(L),t(v),m(()=>{k=F(v,k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...a.attrs,"aria-label":p(),class:a.classes},!1,""),V(v,"width",n(z)),V(v,"height",n(u)),x=F(b,x,{...a.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},!1,""),V(b,"fill",h()),B=F(M,B,{...a.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},!1,""),V(M,"fill",h()),S=F(D,S,{...a.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},!1,""),V(D,"fill",h())}),i(f,v)}class ze extends Error{constructor(a,h=`Unreachable case: ${a}`){super(h)}}const pa=f=>{switch(f){case"fuz":return"#6a3e1b";case"fuz_code":return"#e03e81";case"fuz_blog":return"#b19a25";case"fuz_mastodon":return"#6a40bf";case"fuz_gitops":return"#397fc6";default:throw new ze(f)}},ba=f=>{switch(f){case"fuz":return"blue";case"fuz_code":return"pink";case"fuz_blog":return"yellow";case"fuz_mastodon":return"purple";case"fuz_gitops":return"blue";default:throw new ze(f)}};function ka(f,a){le(a,!0);const h=y(()=>a.project?pa(a.project):a.fill??"hsl(var(--color_f_5))"),p=y(()=>a.label??(a.project?`a friendly ${ba(a.project)} spider facing you`:a.fill?"a friendly spider facing you":"a friendly brown spider facing you"));Ke(f,{get fill(){return n(h)},get size(){return a.size},get width(){return a.width},get height(){return a.height},get label(){return n(p)},get classes(){return a.classes},get path_attrs(){return a.path_attrs},get attrs(){return a.attrs}}),ve()}var Ha=oe("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function wa(f,a){const h=$(a,"label",3,"a pixelated green oak acorn with a glint of sun"),p=y(()=>a.width??a.size),z=y(()=>a.height??a.size);var u=Ha();let v;var k=r(u);let H;var b=e(k);let x;var L=e(b);let M;var B=e(L);let D;var S=e(B);let E;var Z=e(S);let N;var W=e(Z);let K;t(u),m(()=>{v=F(u,v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...a.attrs,"aria-label":h(),class:a.classes},!1,""),V(u,"width",n(p)),V(u,"height",n(z)),H=F(k,H,{...a.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},!1,""),V(k,"fill","#6f974c"),x=F(b,x,{...a.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},!1,""),V(b,"fill","#5e853f"),M=F(L,M,{...a.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),V(L,"fill","#6f492b"),D=F(B,D,{...a.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),V(B,"fill","#3b730f"),E=F(S,E,{...a.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},!1,""),V(S,"fill","#473323"),N=F(Z,N,{...a.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},!1,""),V(Z,"fill","#2e6006"),K=F(W,K,{...a.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},!1,""),V(W,"fill","#34251a")}),i(f,u)}var ya=oe("<svg><g><path></path></g></svg>");function Va(f,a){const h=$(a,"fill",3,"#f67c4c"),p=$(a,"label",3,"a friendly pixelated spider facing you"),z=y(()=>a.width??a.size),u=y(()=>a.height??a.size);var v=ya();let k;var H=r(v),b=r(H);let x;t(H),t(v),m(()=>{k=F(v,k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...a.attrs,"aria-label":p(),class:a.classes},!1,""),V(v,"width",n(z)),V(v,"height",n(u)),x=F(b,x,{...a.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},!1,""),V(b,"fill",h())}),i(f,v)}var za=g('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function xa(f){const a="var(--icon_size_lg)";var h=za(),p=j(h),z=r(p);fa(z,{size:a}),e(z),t(p);var u=e(e(p,!0)),v=r(u);ie(v,{size:a}),e(v),t(u);var k=e(e(u,!0)),H=r(k);ka(H,{size:a}),e(H),t(k);var b=e(e(k,!0)),x=r(b);wa(x,{size:a}),e(x),t(b);var L=e(e(b,!0)),M=r(L);Va(M,{size:a}),e(M),t(L),i(f,h)}var ja=g('<h2 class="mt_0 mb_lg">Links</h2>'),La=g('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Ma(f,a){le(a,!0);var h=La(),p=r(h);w(p,()=>a.children,k=>{var H=C(),b=j(H);A(b,()=>a.children),i(k,H)},k=>{var H=ja();i(k,H)});var z=e(e(p,!0));ga(z,{});var u=e(e(z,!0)),v=r(u);xa(v),t(u),t(h),i(f,h),ve()}var Sa=g('<div class="mb_xl5"><!></div>'),Za=g('<main class="width_md svelte-m017mk"><section><header class="box"><h1 class="mt_xl4 svelte-m017mk"> </h1></header> <!></section> <!> <section><div class="panel p_md width_md"><!></div></section> <section class="box mb_xl7"><!></section></main>');function Ja(f,a){le(a,!0);const h=Oe();var p=Za(),z=r(p),u=r(z),v=r(u),k=r(v);t(v),t(u);var H=e(e(u,!0));ye(H,{children:(S,E)=>{ie(S,{size:"32px"})},$$slots:{default:!0}}),t(z);var b=e(e(z,!0));Ma(b,{});var x=e(e(b,!0)),L=r(x),M=r(L);_a(M,{pkg:h}),t(L),t(x);var B=e(e(x,!0)),D=r(B);Ge(D,{pkg:h,children:(S,E)=>{var Z=Sa(),N=r(Z);ye(N,{children:(W,K)=>{ie(W,{size:"32px"})},$$slots:{default:!0}}),t(Z),i(S,Z)},$$slots:{default:!0}}),t(B),t(p),m(()=>P(k,h.repo_name)),i(f,p),ve()}export{Ja as component};