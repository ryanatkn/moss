var k=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var o=(t,e,a)=>(k(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{a as c,c as w,t as h}from"./disclose-version.CYUEkZ6s.js";import{j as C,U as A,Q as p,V as B,k as L,p as R,t as _,f as j,a as D,c as u,r as d,R as I}from"./runtime.DvazHU5t.js";import{s as K}from"./render.Cpb4M2J0.js";import{b as Q,p as f,i as T}from"./props.RETprpTh.js";import{s as U,d as Y,t as b}from"./class.an1nRhKd.js";import{d as q}from"./variables.C064wX_m.js";var r;class z{constructor(e=null){m(this,r,A());this.value=e}get value(){return p(o(this,r))}set value(e){B(o(this,r),Q(e))}}r=new WeakMap;const g=Symbol("selected_variable"),Z=(t=new z(null))=>C(g,t),F=()=>L(g);var G=h('<span class="font_mono"> </span>'),H=h("<button><!></button>");function $(t,e){R(e,!0);const a=f(e,"inline",3,!1),x=f(e,"plain",3,!0),E=I(()=>{const l=q.find(s=>s.name===e.name);if(!l)throw new Error(`cannot find variable named "${e.name}"`);return l}),S=F();var n=H(),y=()=>S.value=p(E);let v;var V=u(n);T(V,()=>e.children,l=>{var s=w(),i=j(s);U(i,()=>e.children),c(l,s)},l=>{var s=G(),i=u(s);d(s),_(()=>K(i,e.name)),c(l,s)}),d(n),_(()=>{v=Y(n,v,{type:"button",...e.attrs,class:e.classes,onclick:y},"svelte-1esac4x"),b(n,"inline",a()),b(n,"plain",x())}),c(t,n),D()}export{$ as S,Z as s};
