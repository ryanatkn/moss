var G=Object.defineProperty;var J=(t,e,a)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var K=(t,e,a)=>(J(t,typeof e!="symbol"?e+"":e,a),a),M=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var L=(t,e,a)=>(M(t,e,"read from private field"),a?a.call(t):e.get(t)),P=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{f as v,c as k,a as l,e as H,r as y,s as m,t as g,A as O,z as Q}from"./disclose-version.Cmho9P4e.js";import{s as V,k as W,v as _,m as X,g as Z,p as R,t as T,a as w,H as p,P as $}from"./runtime.DuKekwsY.js";import{i as D}from"./props.DS8PSEIH.js";import{s as A,b as I,g as ee}from"./class.B8v9gKBt.js";import{s as te}from"./render.Cb2nao7p.js";import{e as ae}from"./svelte-element.DMRc__yF.js";import{s as se,a as re,p as ie}from"./stores.CuBft-39.js";import{o as ne}from"./index-client.A21cfD6T.js";import{s as oe}from"./path.QeaNnfvq.js";import{p as S}from"./proxy.B6Yliv7g.js";import{b as le}from"./entry.ClmmkTGk.js";const j="/library",_e=(t,e,a=j)=>{const s=e.split("/").at(-1);return{path:le+a+"/"+t,path_is_selected:s===t,path_segment:s}},z=Symbol("library_links"),Ye=(t=new de)=>V(z,t),me=()=>{const t=Z(z);if(!t)throw Error("get_library_links called before set_library_links");return t};var u;class de{constructor(e=j){K(this,"root_path");P(this,u,W(S([])));this.root_path=e}get library_links(){return _(L(this,u))}set library_links(e){X(L(this,u),S(e))}add(e,a,s,o){const n=this.library_links.findIndex(i=>i.id===e),r={id:e,text:a,slug:s,tag:o};n===-1?this.library_links.push(r):this.library_links[n]=r}remove(e){const a=this.library_links.findIndex(s=>s.id===e);return a===-1?!1:(this.library_links.splice(a,1),!0)}}u=new WeakMap;var ce=g("#",1),he=g('<a class="hashlink svelte-1tcongx" aria-label="hashlink"><!></a> <span class="hashlink_scroll_target svelte-1tcongx" aria-hidden="true"></span>',1);function fe(t,e){R(e,!0);var a=he(),s=v(a),o=k(s);D(o,()=>e.children,r=>{var i=H(),d=v(i);A(d,()=>e.children),l(r,i)},r=>{var i=ce();l(r,i)}),y(s);var n=m(m(s,!0));T(()=>{I(s,"href",`#${e.slug??""}`),I(n,"id",e.slug)}),l(t,a),w()}var ve=g("<a><!></a>"),ue=g("<!> <!>",1);let ge=0;function be(t,e){R(e,!0);const a=se(),s=()=>re(ie,"$page",a),o=(c,h=$)=>{O();var f=Q();T(()=>te(f,h())),l(c,f)},n="tome_title_"+ge++,r=me(),i=oe(e.tome.name,!1);r.add(n,e.tome.name,i),ne(()=>{r.remove(n)});const d=p(()=>_e(e.tome.slug,s().url.pathname)),E=p(()=>{let{path:c,path_is_selected:h}=_(d);return[c,h]}),F=p(()=>_(E)[0]),Y=p(()=>_(E)[1]);var B=H(),N=v(B);ae(N,()=>_(Y)?"h1":"h2",!1,(c,h)=>{ee(c,null,{class:"tome_title"},"svelte-o77f70");var f=ue(),C=v(f);D(C,()=>_(Y),x=>{o(x,()=>e.tome.name)},x=>{var b=ve(),q=k(b);o(q,()=>e.tome.name),y(b),T(()=>I(b,"href",_(F))),l(x,b)});var U=m(m(C,!0));fe(U,{slug:i}),l(h,f)}),l(t,B),w()}var pe=g('<div class="tome_detail width_md svelte-1f6fepp"><header class="svelte-1f6fepp"><!></header> <!></div>');function Be(t,e){R(e,!0);var a=pe(),s=k(a),o=k(s);D(o,()=>e.header,r=>{var i=H(),d=v(i);A(d,()=>e.header),l(r,i)},r=>{be(r,{get tome(){return e.tome}})}),y(s);var n=m(m(s,!0));A(n,()=>e.children),y(a),l(t,a),w()}export{fe as H,Be as T,me as g,Ye as s};