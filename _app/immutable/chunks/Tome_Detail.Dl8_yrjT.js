var z=Object.defineProperty;var G=(t,e,a)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var K=(t,e,a)=>(G(t,typeof e!="symbol"?e+"":e,a),a),J=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var w=(t,e,a)=>(J(t,e,"read from private field"),a?a.call(t):e.get(t)),S=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{a as n,d as b,t as p,f as c,c as k,b as v,s as M,k as O}from"./disclose-version.CV3ElF3D.js";import{s as Q,x as V,h as m,y as X,g as Z,p as C,t as A,a as R,l as y,C as $}from"./runtime.C9BLlFkQ.js";import{i as D}from"./props.DMEd9I1P.js";import{b as T,a as I,f as ee}from"./attributes.CCxnytQ2.js";import{e as te}from"./svelte-element.BGPK9FyN.js";import{u as ae,s as re}from"./store.CbF-nWel.js";import{p as se}from"./stores.D60ZVhNF.js";import{o as ie}from"./index-client.99mBDArk.js";import{p as j}from"./proxy.Dxw38Qlp.js";import{b as ne}from"./entry.BWzS5zmj.js";const F="/library",oe=(t,e,a=F)=>{const r=e.split("/").at(-1);return{path:ne+a+"/"+t,path_is_selected:r===t,path_segment:r}},N=Symbol("library_links"),Re=(t=new _e)=>Q(N,t),le=()=>{const t=Z(N);if(!t)throw Error("get_library_links called before set_library_links");return t};var g;class _e{constructor(e=F){K(this,"root_path");S(this,g,V(j([])));this.root_path=e}get library_links(){return m(w(this,g))}set library_links(e){X(w(this,g),j(e))}add(e,a,r,l){const o=this.library_links.findIndex(s=>s.id===e),i={id:e,text:a,slug:r,tag:l};o===-1?this.library_links.push(i):this.library_links[o]=i}remove(e){const a=this.library_links.findIndex(r=>r.id===e);return a===-1?!1:(this.library_links.splice(a,1),!0)}}g=new WeakMap;var de=p("#",1),me=p('<a class="hashlink svelte-iahrxw" aria-label="hashlink"><!></a> <span class="hashlink_scroll_target svelte-iahrxw" aria-hidden="true"></span>',1);function ce(t,e){C(e,!0);var a=me(),r=c(a),l=k(r);D(l,()=>e.children,i=>{var s=b(),_=c(s);T(()=>e.children,_),n(i,s)},i=>{var s=de();n(i,s)});var o=v(v(r,!0));A(()=>{I(r,"href",`#${e.slug??""}`),I(o,"id",e.slug)}),n(t,a),R()}var he=p("<a><!></a>"),ve=p("<!> <!>",1);let fe=0;function ue(t,e){C(e,!0);const a={};ae(a);const r=()=>re(se,"$page",a);var l=(d,f=$)=>{var u=O(d);A(()=>M(u,f())),n(d,u)};const o="tome_title_"+fe++,i=d=>d.toLowerCase().replaceAll(/\s/gu,"-").replaceAll(/\W/gu,""),s=le(),_=i(e.tome.name);s.add(o,e.tome.name,_),ie(()=>s.remove(o));const P=y(()=>oe(e.tome.slug,r().url.pathname)),E=y(()=>{let{path:d,path_is_selected:f}=m(P);return[d,f]}),U=y(()=>m(E)[0]),H=y(()=>m(E)[1]);var Y=b(),W=c(Y);te(W,()=>m(H)?"h1":"h2",!1,(d,f)=>{ee(d,null,{class:"tome_title"},"svelte-187f62t");var u=ve(),B=c(u);D(B,()=>m(H),x=>{var h=b(),L=c(h);l(L,()=>e.tome.name),n(x,h)},x=>{var h=he(),L=k(h);l(L,()=>e.tome.name),A(()=>I(h,"href",m(U))),n(x,h)});var q=v(v(B,!0));ce(q,{slug:_}),n(f,u)}),n(t,Y),R()}var be=p('<div class="tome_detail width_md svelte-1f6fepp"><header class="svelte-1f6fepp"><!></header> <!></div>');function De(t,e){C(e,!0);var a=be(),r=k(a),l=k(r);D(l,()=>e.header,i=>{var s=b(),_=c(s);T(()=>e.header,_),n(i,s)},i=>{var s=b(),_=c(s);ue(_,{get tome(){return e.tome}}),n(i,s)});var o=v(v(r,!0));T(()=>e.children,o),n(t,a),R()}export{ce as H,De as T,le as g,Re as s};