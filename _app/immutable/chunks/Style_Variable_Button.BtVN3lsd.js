var k=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var o=(a,t,e)=>(k(a,t,"read from private field"),e?e.call(a):t.get(a)),u=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)};import{a as c,d as V,t as p}from"./disclose-version.OD-Gfqag.js";import{aj as j,l as h,I as B,p as E,t as v,f as I,a as q,c as f,r as d,m as z}from"./runtime.Dy2cFxT5.js";import{s as A}from"./render.Ca1jDPdn.js";import{p as C,i as D}from"./if.B84xD5S-.js";import{c as F,s as G,a as H,t as _}from"./context_helpers.CMnBhuuo.js";import{p as b}from"./props.igv1PDe6.js";import{d as J}from"./variables.C064wX_m.js";var l;class K{constructor(t=null){u(this,l,j());this.value=t}get value(){return h(o(this,l))}set value(t){B(o(this,l),C(t))}}l=new WeakMap;const L=F(()=>new K(null));var M=p('<span class="font_mono"> </span>'),N=p("<button><!></button>");function Y(a,t){E(t,!0);const e=b(t,"inline",3,!1),x=b(t,"plain",3,!0),g=z(()=>{const r=J.find(s=>s.name===t.name);if(!r)throw new Error(`cannot find variable named "${t.name}"`);return r}),y=L.get();var n=N(),S=()=>y.value=h(g);let m;var w=f(n);D(w,()=>t.children,r=>{var s=V(),i=I(s);G(i,()=>t.children),c(r,s)},r=>{var s=M(),i=f(s,!0);d(s),v(()=>A(i,t.name)),c(r,s)}),d(n),v(()=>{m=H(n,m,{type:"button",...t.attrs,class:t.classes,onclick:S},"svelte-1esac4x"),_(n,"inline",e()),_(n,"plain",x())}),c(a,n),q()}export{Y as S,L as s};
