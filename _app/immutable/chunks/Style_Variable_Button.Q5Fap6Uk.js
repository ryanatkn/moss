var w=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var i=(t,e,a)=>(w(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{a as c,c as C,t as p}from"./disclose-version.DMh2gfYs.js";import{j as A,U as B,Q as g,V as L,k as R,p as j,t as _,f as D,a as I,c as u,r as d,R as K}from"./runtime.tSR6J6RN.js";import{s as Q}from"./render.rKr1cOry.js";import{b as f,p as b,i as T}from"./props.Dt6qT62G.js";import{s as U,d as Y,t as h}from"./class.m1pjHSW2.js";import{d as q}from"./variables.BHo8bcJH.js";var r;class z{constructor(e=null){m(this,r,B());i(this,r).v=f(e)}get value(){return g(i(this,r))}set value(e){L(i(this,r),f(e))}}r=new WeakMap;const x=Symbol("selected_variable"),Z=(t=new z(null))=>A(x,t),F=()=>R(x);var G=p('<span class="font_mono"> </span>'),H=p("<button><!></button>");function $(t,e){j(e,!0);const a=b(e,"inline",3,!1),E=b(e,"plain",3,!0),S=K(()=>{const l=q.find(s=>s.name===e.name);if(!l)throw new Error(`cannot find variable named "${e.name}"`);return l}),y=F();var n=H(),V=()=>y.value=g(S);let v;var k=u(n);T(k,()=>e.children,l=>{var s=C(),o=D(s);U(o,()=>e.children),c(l,s)},l=>{var s=G(),o=u(s);d(s),_(()=>Q(o,e.name)),c(l,s)}),d(n),_(()=>{v=Y(n,v,{type:"button",...e.attrs,class:e.classes,onclick:V},"svelte-1esac4x"),h(n,"inline",a()),h(n,"plain",E())}),c(t,n),I()}export{$ as S,Z as s};
