var q=Object.defineProperty;var z=(e,t,a)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var C=(e,t,a)=>(z(e,typeof t!="symbol"?t+"":t,a),a),G=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var y=(e,t,a)=>(G(e,t,"read from private field"),a?a.call(e):t.get(e)),K=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)};import{b as U,a as l,c as R,t as u}from"./disclose-version.DMh2gfYs.js";import{j as J,U as M,Q as m,V as O,k as W,p as A,f as d,c as v,r as b,s as w,t as L,a as D,R as x,n as X,ae as Z}from"./runtime.tSR6J6RN.js";import{b as S,i as E}from"./props.Dt6qT62G.js";import{s as T,b as I,g as $}from"./class.m1pjHSW2.js";import{s as tt}from"./render.rKr1cOry.js";import{e as et}from"./svelte-element.Cs48QJ9y.js";import{s as at,a as st,p as rt}from"./stores.CDTz-sXN.js";import{o as it}from"./index-client.DeVFCMym.js";import{s as nt}from"./path.QeaNnfvq.js";import{b as ot}from"./entry.-hbzYPH-.js";const j="/library",lt=(e,t,a=j)=>{const s=t.split("/").at(-1);return{path:ot+a+"/"+e,path_is_selected:s===e,path_segment:s}},F=Symbol("library_links"),Dt=(e=new mt)=>J(F,e),_t=()=>{const e=W(F);if(!e)throw Error("get_library_links called before set_library_links");return e};var h;class mt{constructor(t=j){C(this,"root_path");K(this,h,M(S([])));this.root_path=t}get library_links(){return m(y(this,h))}set library_links(t){O(y(this,h),S(t))}add(t,a,s,o){const n=this.library_links.findIndex(i=>i.id===t),r={id:t,text:a,slug:s,tag:o};n===-1?this.library_links.push(r):this.library_links[n]=r}remove(t){const a=this.library_links.findIndex(s=>s.id===t);return a===-1?!1:(this.library_links.splice(a,1),!0)}}h=new WeakMap;var ct=u('<a class="hashlink svelte-1tcongx" aria-label="hashlink"><!></a> <span class="hashlink_scroll_target svelte-1tcongx" aria-hidden="true"></span>',1);function dt(e,t){A(t,!0);var a=ct(),s=d(a),o=v(s);E(o,()=>t.children,r=>{var i=R(),_=d(i);T(_,()=>t.children),l(r,i)},r=>{var i=U("#");l(r,i)}),b(s);var n=w(s,2);L(()=>{I(s,"href",`#${t.slug??""}`),I(n,"id",t.slug)}),l(e,a),D()}var ht=u("<a><!></a>"),ft=u("<!> <!>",1);let vt=0;function bt(e,t){A(t,!0);const a=at(),s=()=>st(rt,"$page",a),o=(g,p=Z)=>{X();var c=U();L(()=>tt(c,p())),l(g,c)},n="tome_title_"+((vt+=1)-1),r=_t(),i=nt(t.tome.name,!1);r.add(n,t.tome.name,i),it(()=>{r.remove(n)});const _=x(()=>lt(t.tome.slug,s().url.pathname)),N=x(()=>m(_).path),H=x(()=>m(_).path_is_selected);var Y=R(),P=d(Y);et(P,()=>m(H)?"h1":"h2",!1,(g,p)=>{$(g,null,{class:"tome_title"},"svelte-o77f70");var c=ft(),B=d(c);E(B,()=>m(H),k=>{o(k,()=>t.tome.name)},k=>{var f=ht(),V=v(f);o(V,()=>t.tome.name),b(f),L(()=>I(f,"href",m(N))),l(k,f)});var Q=w(B,2);dt(Q,{slug:i}),l(p,c)}),l(e,Y),D()}var ut=u('<div class="tome_detail width_md svelte-1f6fepp"><header class="svelte-1f6fepp"><!></header> <!></div>');function Et(e,t){A(t,!0);var a=ut(),s=v(a),o=v(s);E(o,()=>t.header,r=>{var i=R(),_=d(i);T(_,()=>t.header),l(r,i)},r=>{bt(r,{get tome(){return t.tome}})}),b(s);var n=w(s,2);T(n,()=>t.children),b(a),l(e,a),D()}export{dt as H,Et as T,_t as g,Dt as s};
