import{a as i,t as g,e as E,c as l,s as a,z as Te,r as t,f as j,A as ze,n as ve}from"../chunks/disclose-version.BNm3dIVn.js";import{p as ae,a as te,g as n,t as m,d as w,P as G}from"../chunks/runtime.Cr2oxsZ3.js";import{s as Z}from"../chunks/render.Dorzbu97.js";import{M as ne,L as We}from"../chunks/Moss_Logo.DTxuX-R_.js";import{i as H,p as X}from"../chunks/props.CM_3Vabi.js";import{b as J,a as T,g as we,i as Ce,s as P}from"../chunks/attributes.C8Gooiyf.js";import{t as A,s as Ee}from"../chunks/class.CZfAnSJ3.js";import{s as V}from"../chunks/style.iv2mhl8q.js";import{s as Ne,a as Ue,p as qe}from"../chunks/stores.DON8ntT1.js";import{e as se,a as le,s as ye}from"../chunks/string.ZJuK4sHN.js";import{f as Ke}from"../chunks/url.Dt0VZVCT.js";import{D as Oe}from"../chunks/Details.CW_NuIG7.js";import{S as Ye}from"../chunks/Spider.D3LY04Tz.js";import{B as Ve}from"../chunks/Breadcrumb.CMp9h9xC.js";import{g as Ie}from"../chunks/pkg.BfsCBd7k.js";var Ae=g('<div class="repo_name svelte-keb345"> <!></div>'),Je=g('<div class="description svelte-keb345"> </div>'),Re=g('<div class="motto svelte-keb345"> </div>'),Xe=g('<blockquote class="npm_url svelte-keb345"> </blockquote>'),Qe=g('<span class="title svelte-keb345">homepage</span> <div class="content svelte-keb345"><a class="chip svelte-keb345"><img> </a></div>',1),$e=g('<span class="title svelte-keb345">repo</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="repo"> </a></div>',1),ea=g('<span class="title svelte-keb345">npm</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="npm"> </a></div>',1),aa=g('<span class="title svelte-keb345">version</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="version"> </a></div>',1),ta=g('<span class="title svelte-keb345">license</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="license"> </a></div>',1),ra=g('<span class="title svelte-keb345">data</span> <div class="content svelte-keb345"><a class="chip svelte-keb345" title="data">package.json</a> <a class="chip svelte-keb345" title="data">src.json</a></div>',1),sa=g('<div class="logo svelte-keb345"><img></div>'),la=g("<li> </li>"),na=g('<ul class="declarations unstyled svelte-keb345"></ul>'),va=g('<li class="module svelte-keb345"><div class="module_content svelte-keb345"><a class="chip"> </a> <!></div></li>'),ia=g('<section class="svelte-keb345"><menu class="unstyled"></menu></section>'),oa=g("raw data for <code>pkg: Package_Meta</code>",1),_a=g("<pre><code> </code></pre>"),ca=g('<div class="package_detail svelte-keb345"><div class="info svelte-keb345"><div class="flex flex_1"><div><header class="svelte-keb345"><!></header> <!> <!> <!> <!> <section class="properties svelte-keb345"><!> <!> <!> <!> <!> <!></section></div></div> <!></div> <!> <section class="svelte-keb345"><!></section></div>');function da(f,e){ae(e,!0);const h=Ne(),b=()=>Ue(qe,"$page",h),z=w(()=>e.pkg),u=w(()=>{let{package_json:_,src_json:s}=n(z);return[_,s]}),v=w(()=>n(u)[0]),k=w(()=>n(u)[1]),y=w(()=>n(k)),p=w(()=>{let{modules:_}=n(y);return[_]}),x=w(()=>n(p)[0]),L=w(()=>n(v).repository?le(ye(ye(typeof n(v).repository=="string"?n(v).repository:n(v).repository.url,".git"),"/"),"git+"):null),S=w(()=>n(v).license&&n(L)?n(L)+"/blob/main/LICENSE":null),F=(_,s)=>_+"/blob/main/src/lib/"+(s.endsWith(".js")?s.slice(0,-3)+".ts":s),B=w(()=>n(v).exports&&Object.keys(n(v).exports)),M=w(()=>n(v).exports?Object.keys(n(v).exports).map(_=>{const s=le(_,"./");return s==="."?"index.js":s}):null),N=w(()=>e.pkg.homepage_url?se(e.pkg.homepage_url,"/")+(e.pkg.package_json.logo?le(e.pkg.package_json.logo,"/"):"favicon.png"):void 0),D=e.pkg.package_json.logo_alt??`logo for ${e.pkg.repo_name}`;var W=ca(),C=l(W),K=l(C),I=l(K),O=l(I),je=l(O);H(je,()=>e.repo_name,_=>{var s=E(),c=j(s);J(c,()=>e.repo_name,()=>e.pkg.repo_name),i(_,s)},_=>{var s=Ae(),c=l(s),o=a(c);H(o,()=>n(v).glyph,r=>{var d=Te();m(()=>Z(d,` ${n(v).glyph??""}`)),i(r,d)}),t(s),m(()=>Z(c,e.pkg.repo_name)),i(_,s)}),t(O);var ie=a(a(O,!0));H(ie,()=>e.children,_=>{var s=E(),c=j(s);J(c,()=>e.children,()=>e.pkg),i(_,s)});var oe=a(a(ie,!0));H(oe,()=>n(v).description,_=>{var s=E(),c=j(s);H(c,()=>e.description,o=>{var r=E(),d=j(r);J(d,()=>e.description,()=>n(v).description),i(o,r)},o=>{var r=Je(),d=l(r);t(r),m(()=>Z(d,n(v).description)),i(o,r)}),i(_,s)});var _e=a(a(oe,!0));H(_e,()=>n(v).motto,_=>{var s=E(),c=j(s);H(c,()=>e.motto,o=>{var r=E(),d=j(r);J(d,()=>e.motto,()=>n(v).motto),i(o,r)},o=>{var r=Re(),d=l(r);t(r),m(()=>Z(d,n(v).motto)),i(o,r)}),i(_,s)});var ce=a(a(_e,!0));H(ce,()=>e.pkg.npm_url,_=>{var s=E(),c=j(s);H(c,()=>e.npm_url,o=>{var r=E(),d=j(r);J(d,()=>e.npm_url,()=>e.pkg.npm_url),i(o,r)},o=>{var r=Xe(),d=l(r);t(r),m(()=>Z(d,`npm i -D ${n(v).name??""}`)),i(o,r)}),i(_,s)});var de=a(a(ce,!0)),he=l(de);H(he,()=>e.pkg.homepage_url,_=>{var s=E(),c=j(s);H(c,()=>e.homepage_url,o=>{var r=E(),d=j(r);J(d,()=>e.homepage_url,()=>e.pkg.homepage_url),i(o,r)},o=>{var r=Qe(),d=j(r),U=a(a(d,!0)),R=l(U),Y=l(R);T(Y,"alt",D);var Q=a(Y,!0);m(()=>Z(Q,` ${Ke(e.pkg.homepage_url)??""}`)),t(R),t(U),m(()=>{T(R,"href",e.pkg.homepage_url),A(R,"selected",e.pkg.homepage_url===b().url.href),T(Y,"src",n(N)),V(Y,"width","16px"),V(Y,"height","16px"),V(Y,"margin-right","var(--space_xs)")}),i(o,r)}),i(_,s)});var ue=a(a(he,!0));H(ue,()=>e.pkg.repo_url,_=>{var s=$e(),c=j(s),o=a(a(c,!0)),r=l(o),d=l(r);t(r),t(o),m(()=>{T(r,"href",e.pkg.repo_url),Z(d,`${e.pkg.owner_name??""}/${e.pkg.repo_name??""}`)}),i(_,s)});var ge=a(a(ue,!0));H(ge,()=>e.pkg.npm_url,_=>{var s=ea(),c=j(s),o=a(a(c,!0)),r=l(o),d=l(r);t(r),t(o),m(()=>{T(r,"href",e.pkg.npm_url),Z(d,n(v).name)}),i(_,s)});var me=a(a(ge,!0));H(me,()=>e.pkg.changelog_url,_=>{var s=aa(),c=j(s),o=a(a(c,!0)),r=l(o),d=l(r);t(r),t(o),m(()=>{T(r,"href",e.pkg.changelog_url),Z(d,n(v).version)}),i(_,s)});var fe=a(a(me,!0));H(fe,()=>n(S),_=>{var s=ta(),c=j(s),o=a(a(c,!0)),r=l(o),d=l(r);t(r),t(o),m(()=>{T(r,"href",n(S)),Z(d,n(v).license)}),i(_,s)});var Le=a(a(fe,!0));H(Le,()=>e.pkg.homepage_url,_=>{var s=ra(),c=j(s),o=a(a(c,!0)),r=l(o);m(()=>T(r,"href",`${se(e.pkg.homepage_url,"/")??""}.well-known/package.json`));var d=a(a(r,!0));m(()=>T(d,"href",`${se(e.pkg.homepage_url,"/")??""}.well-known/src.json`)),t(o),i(_,s)}),t(de),t(I),t(K);var Me=a(a(K,!0));H(Me,()=>n(N),_=>{var s=sa(),c=l(s);T(c,"alt",D),t(s),m(()=>{T(c,"src",n(N)),V(c,"width","var(--size, var(--icon_size_xl2))"),V(c,"height","var(--size, var(--icon_size_xl2))")}),i(_,s)}),t(C);var pe=a(a(C,!0));H(pe,()=>n(M)&&e.pkg.repo_url,_=>{var s=ia(),c=l(s);we(c,79,()=>n(M),(o,r)=>G(o),(o,r,d)=>{var U=va();const R=w(()=>F(e.pkg.repo_url,G(r))),Y=w(()=>{var q;return(q=n(B))==null?void 0:q[G(d)]}),Q=w(()=>{var q;return n(Y)&&((q=n(x))==null?void 0:q[n(Y)])});m(()=>A(U,"ts",G(r).endsWith(".js"))),m(()=>A(U,"svelte",G(r).endsWith(".svelte"))),m(()=>A(U,"css",G(r).endsWith(".css"))),m(()=>A(U,"json",G(r).endsWith(".json")));var ke=l(U),$=l(ke),Ze=l($);t($);var Pe=a(a($,!0));H(Pe,()=>{var q;return(q=n(Q))==null?void 0:q.declarations.length},q=>{var re=na();we(re,73,()=>n(Q).declarations,Ce,(Fe,He,Ba)=>{let Be=()=>G(G(He)).name,De=()=>G(G(He)).kind;var ee=la(),Ge=l(ee);t(ee),m(()=>{Ee(ee,`declaration chip ${De()??""}_declaration svelte-keb345`),Z(Ge,Be())}),i(Fe,ee)}),t(re),i(q,re)}),t(ke),t(U),m(()=>{T($,"href",n(R)),Z(Ze,G(r))}),i(o,U)}),t(c),t(s),i(_,s)});var be=a(a(pe,!0)),Se=l(be);Oe(Se,{summary:s=>{ze();var c=oa();i(s,c)},children:(s,c)=>{var o=_a(),r=l(o),d=l(r);m(()=>Z(d,JSON.stringify(e.pkg,null,"	"))),t(r),t(o),i(s,o)},$$slots:{default:!0}}),t(be),t(W),i(f,W),te()}var ha=g(", you are here",1),ua=g(", you are here",1),ga=g(", you are here",1),ma=g(`<ul><li>join <a rel="me" href="https://discord.gg/YU5tyeK72X">the Discord</a> community</li> <li><a rel="me" href="https://www.webdevladder.net/">webdevladder.net</a> - realworld webdev with TypeScript and Svelte, YouTube channels <a rel="me" href="https://youtube.com/@webdevladder">@webdevladder</a> and <a rel="me" href="https://youtube.com/@webdevladder_vods">@webdevladder_vods</a><!></li> <li><a rel="me" href="https://www.spiderspace.org/">spiderspace.org</a> - nontechnical design videos where we'll make a social website together with <a href="https://zzz.ryanatkn.com/">Zzz</a> when it's ready, YouTube channel <a rel="me" href="https://youtube.com/@spiderspace_8000">@spiderspace_8000</a><!></li> <li><a rel="me" href="https://www.ryanatkn.com/">ryanatkn.com</a> - my homepage<!></li> <li>GitHub - <a rel="me" href="https://github.com/ryanatkn">@ryanatkn</a> and <a rel="me" href="https://github.com/spiderspace">@spiderspace</a></li> <li>Mastodon as <a rel="me" href="https://mastodon.social/@webdevladder">@webdevladder@mastodon.social</a> and <a rel="me" href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></li> <li>@webdevladder on <a rel="me" href="https://twitter.com/webdevladder">Twitter</a>, <a rel="me" href="https://www.reddit.com/user/webdevladder/">Reddit</a>, and <a href="https://news.ycombinator.com/user?id=webdevladder">Hacker News</a></li> <li>support me at <a href="https://www.ryanatkn.com/funding">ryanatkn.com/funding</a></li></ul>`);function fa(f,e){var h=ma(),b=l(h);ze(),t(b);var z=a(a(b,!0)),u=l(z),v=a(a(u,!0)),k=a(a(v,!0)),y=a(k);H(y,()=>e.selected==="webdevladder.net",I=>{var O=ha();i(I,O)}),t(z);var p=a(a(z,!0)),x=l(p),L=a(a(x,!0)),S=a(a(L,!0)),F=a(S);H(F,()=>e.selected==="spiderspace.org",I=>{var O=ua();i(I,O)}),t(p);var B=a(a(p,!0)),M=l(B),N=a(a(M,!0));H(N,()=>e.selected==="ryanatkn.com",I=>{var O=ga();i(I,O)}),t(B);var D=a(a(B,!0));t(D);var W=a(a(D,!0));t(W);var C=a(a(W,!0));t(C);var K=a(a(C,!0));t(K),t(h),m(()=>{A(u,"selected",e.selected==="webdevladder.net"),A(x,"selected",e.selected==="spiderspace.org"),A(M,"selected",e.selected==="ryanatkn.com")}),i(f,h)}var pa=ve("<svg><g><path></path></g><g><path></path><path></path></g></svg>");function ba(f,e){const h=X(e,"fill",3,"hsl(var(--color_g_5))"),b=X(e,"label",3,"three sleepy z's"),z=w(()=>e.width??e.size),u=w(()=>e.height??e.size);var v=pa();let k;var y=l(v),p=l(y);let x;t(y);var L=a(y),S=l(L);let F;var B=a(S);let M;t(L),t(v),m(()=>{k=P(v,k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":b(),class:e.classes},!1,""),V(v,"width",n(z)),V(v,"height",n(u)),x=P(p,x,{...e.path_attrs,d:"m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"},!1,""),V(p,"fill",h()),F=P(S,F,{...e.path_attrs,d:"m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"},!1,""),V(S,"fill",h()),M=P(B,M,{...e.path_attrs,d:"M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"},!1,""),V(B,"fill",h())}),i(f,v)}class xe extends Error{constructor(e,h=`Unreachable case: ${e}`){super(h)}}const ka=f=>{switch(f){case"fuz":return"#6a3e1b";case"fuz_code":return"#e03e81";case"fuz_blog":return"#b19a25";case"fuz_mastodon":return"#6a40bf";case"fuz_gitops":return"#397fc6";default:throw new xe(f)}},Ha=f=>{switch(f){case"fuz":return"blue";case"fuz_code":return"pink";case"fuz_blog":return"yellow";case"fuz_mastodon":return"purple";case"fuz_gitops":return"blue";default:throw new xe(f)}};function wa(f,e){ae(e,!0);const h=w(()=>e.project?ka(e.project):e.fill??"hsl(var(--color_f_5))"),b=w(()=>e.label??(e.project?`a friendly ${Ha(e.project)} spider facing you`:e.fill?"a friendly spider facing you":"a friendly brown spider facing you"));Ye(f,{get fill(){return n(h)},get size(){return e.size},get width(){return e.width},get height(){return e.height},get label(){return n(b)},get classes(){return e.classes},get path_attrs(){return e.path_attrs},get attrs(){return e.attrs}}),te()}var ya=ve("<svg><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>");function Va(f,e){const h=X(e,"label",3,"a pixelated green oak acorn with a glint of sun"),b=w(()=>e.width??e.size),z=w(()=>e.height??e.size);var u=ya();let v;var k=l(u);let y;var p=a(k);let x;var L=a(p);let S;var F=a(L);let B;var M=a(F);let N;var D=a(M);let W;var C=a(D);let K;t(u),m(()=>{v=P(u,v,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":h(),class:e.classes},!1,""),V(u,"width",n(b)),V(u,"height",n(z)),y=P(k,y,{...e.path_attrs,d:"m 24.035592,57.306905 v -14.5 h 16.329497 v 14.25 z"},!1,""),V(k,"fill","#6f974c"),x=P(p,x,{...e.path_attrs,d:"M 43.75,93.75 H 37.5 V 87.5 H 31.25 V 81.25 H 25 V 75 H 18.75 V 62.5 H 12.5 V 50 H 6.25 V 43.75 H 4 v -21 L 22.75,16.5 h 40.5 l 0.5,61.5 -5,-0.75 -0.25,16.5 h -2.25 l -4,2.25 -2.24617,4 H 43.75 Z M 37.5,50 H 31.25 V 43.75 H 25 v 12.5 h 12.5 z"},!1,""),V(p,"fill","#5e853f"),S=P(L,S,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 v -25 H 6.25 V 12.5 h 12.5 V 6.25 H 37.5 V 0 h 25 v 6.25 h 18.75 v 6.25 h 12.5 v 6.25 H 100 v 25 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),V(L,"fill","#6f492b"),B=P(F,B,{...e.path_attrs,d:"m 50,93.75 h 6.25 V 75 H 62.5 V 50 H 56.25 V 37.5 H 50 V 31.25 H 43.75 V 25 H 31.25 V 18.75 H 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 V 62.5 H 81.25 V 75 H 75 v 6.25 H 68.75 V 87.5 H 62.5 v 6.25 H 56.25 V 100 H 50 Z"},!1,""),V(F,"fill","#3b730f"),N=P(M,N,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 V 18.75 H 43.75 25 V 25 H 12.5 v 6.25 H 6.25 v 12.5 H 0 V 25 H 12.5 V 18.75 H 25 V 12.5 H 43.75 V 6.25 h 12.5 V 12.5 H 75 v 6.25 H 87.5 V 25 H 100 V 43.75 H 93.75 V 50 H 87.5 Z"},!1,""),V(M,"fill","#473323"),W=P(D,W,{...e.path_attrs,d:"M 87.5,37.5 H 81.25 V 31.25 H 68.75 V 25 H 62.5 v -6.25 h -25 V 12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 h 12.5 V 25 h 12.5 v 6.25 H 100 v 12.5 H 93.75 V 50 H 87.5 Z"},!1,""),V(D,"fill","#2e6006"),K=P(C,K,{...e.path_attrs,d:"M 93.75,31.25 H 87.5 V 25 h 6.25 v 6.25 H 100 v 12.5 H 93.75 Z M 75,18.75 h 6.25 V 25 H 75 Z M 37.5,12.5 H 50 V 6.25 h 6.25 v 6.25 h 12.5 v 6.25 H 53.125 37.5 Z"},!1,""),V(C,"fill","#34251a")}),i(f,u)}var za=ve("<svg><g><path></path></g></svg>");function xa(f,e){const h=X(e,"fill",3,"#f75e22"),b=X(e,"label",3,"a friendly pixelated spider facing you"),z=w(()=>e.width??e.size),u=w(()=>e.height??e.size);var v=za();let k;var y=l(v),p=l(y);let x;t(y),t(v),m(()=>{k=P(v,k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",...e.attrs,"aria-label":b(),class:e.classes},!1,""),V(v,"width",n(z)),V(v,"height",n(u)),x=P(p,x,{...e.path_attrs,d:"m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"},!1,""),V(p,"fill",h())}),i(f,v)}var ja=g('<a class="project_link svelte-1bpnvy9" title="Zzz - social web app framework" href="https://zzz.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Zzz</span></a> <a class="project_link svelte-1bpnvy9" title="Moss - CSS framework" href="https://moss.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Moss</span></a> <a class="project_link svelte-1bpnvy9" title="Fuz - Svelte UI library" href="https://www.fuz.dev/"><!><span class="name svelte-1bpnvy9">Fuz</span></a> <a class="project_link svelte-1bpnvy9" title="Gro - task runner and toolkit extending SvelteKit" href="https://gro.ryanatkn.com/"><!><span class="name svelte-1bpnvy9">Gro</span></a> <a class="project_link svelte-1bpnvy9" title="fuz_template - a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro" href="https://template.fuz.dev/"><!><span class="name svelte-1bpnvy9">fuz_template</span></a>',1);function La(f){const e="var(--icon_size_lg)";var h=ja(),b=j(h),z=l(b);ba(z,{size:e}),t(b);var u=a(a(b,!0)),v=l(u);ne(v,{size:e}),t(u);var k=a(a(u,!0)),y=l(k);wa(y,{size:e}),t(k);var p=a(a(k,!0)),x=l(p);Va(x,{size:e}),t(p);var L=a(a(p,!0)),S=l(L);xa(S,{size:e}),t(L),i(f,h)}var Ma=g('<h2 class="mt_0 mb_lg">Links</h2>'),Sa=g('<section class="panel p_lg"><!> <!> <div class="box row"><!></div></section>');function Za(f,e){ae(e,!0);var h=Sa(),b=l(h);H(b,()=>e.children,k=>{var y=E(),p=j(y);J(p,()=>e.children),i(k,y)},k=>{var y=Ma();i(k,y)});var z=a(a(b,!0));fa(z,{});var u=a(a(z,!0)),v=l(u);La(v),t(u),t(h),i(f,h),te()}var Pa=g('<div class="mb_xl5"><!></div>'),Fa=g('<main class="width_md svelte-m017mk"><section><header class="box"><h1 class="mt_xl4 svelte-m017mk"> </h1></header> <!></section> <!> <section><div class="panel p_md width_md"><!></div></section> <section class="box mb_xl7"><!></section></main>');function Ra(f,e){ae(e,!0);const h=Ie();var b=Fa(),z=l(b),u=l(z),v=l(u),k=l(v);t(v),t(u);var y=a(a(u,!0));Ve(y,{children:(M,N)=>{ne(M,{size:"32px"})},$$slots:{default:!0}}),t(z);var p=a(a(z,!0));Za(p,{});var x=a(a(p,!0)),L=l(x),S=l(L);da(S,{pkg:h}),t(L),t(x);var F=a(a(x,!0)),B=l(F);We(B,{pkg:h,children:(M,N)=>{var D=Pa(),W=l(D);Ve(W,{children:(C,K)=>{ne(C,{size:"32px"})},$$slots:{default:!0}}),t(D),i(M,D)},$$slots:{default:!0}}),t(F),t(b),m(()=>Z(k,h.repo_name)),i(f,b),te()}export{Ra as component};
