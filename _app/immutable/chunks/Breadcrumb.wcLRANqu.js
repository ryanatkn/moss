import{c as i,s as L,a as r,t as l,e as g,f as b,r as c}from"./disclose-version.Cmho9P4e.js";import{p as M,t as H,a as N,v as s,H as v,I as m}from"./runtime.DuKekwsY.js";import{s as O}from"./render.Cb2nao7p.js";import{i as u}from"./props.DS8PSEIH.js";import{e as P,s as I,i as Q,b as q,t as z}from"./class.B8v9gKBt.js";import{s as R,a as S,p as T}from"./stores.CuBft-39.js";import{p as U}from"./path.QeaNnfvq.js";import{b as V}from"./entry.ClmmkTGk.js";var W=l("•",1),X=l('<a class="svelte-44vg7j"> </a>'),Y=l("/",1),Z=l('<span class="separator svelte-44vg7j"><!></span>'),$=l('<div class="breadcrumb svelte-44vg7j"><a class="svelte-44vg7j"><!></a><!></div>');function la(A,a){M(a,!0);const C=R(),D=()=>S(T,"$page",C),x=v(()=>a.path??D().url.pathname),j=v(()=>a.selected_path===null?null:a.selected_path??s(x)),B=v(()=>a.base_path??V),E=v(()=>U(s(x))),k=v(()=>s(B)||"/");var p=$(),o=i(p),F=i(o);u(F,()=>a.children,n=>{var e=g(),w=b(e);I(w,()=>a.children),r(n,e)},n=>{var e=W();r(n,e)}),c(o);var G=L(o);P(G,65,()=>s(E),Q,(n,e,w)=>{var y=g(),J=b(y);u(J,()=>m(e).type==="piece",d=>{var t=X(),f=i(t);c(t),H(()=>{q(t,"href",s(B)+m(e).path),z(t,"selected",m(e).path===s(j)),O(f,m(e).name)}),r(d,t)},d=>{var t=Z(),f=i(t);u(f,()=>a.separator,h=>{var _=g(),K=b(_);I(K,()=>a.separator),r(h,_)},h=>{var _=Y();r(h,_)}),c(t),r(d,t)}),r(n,y)}),c(p),H(()=>{q(o,"href",s(k)),z(o,"selected",s(k)===s(j))}),r(A,p),N()}export{la as B};