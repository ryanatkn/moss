var An=Array.isArray,In=Array.from,gn=Object.defineProperty,st=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,Sn=Object.prototype,On=Array.prototype,Vt=Object.getPrototypeOf;function Rn(t){return typeof t=="function"}const Nn=()=>{};function it(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,ft=4,C=8,_t=16,I=32,Z=64,O=128,B=256,v=512,A=1024,L=2048,D=4096,M=8192,Gt=16384,ct=32768,kn=65536,$t=1<<18,pt=1<<19,at=Symbol("$state"),xn=Symbol("");function vt(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Kt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function Dn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function qn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function Pn(t){return tn(rt(t))}function Fn(t){var r;const n=rt(t);return n.equals=ht,i!==null&&i.l!==null&&((r=i.l).s??(r.s=[])).push(n),n}function tn(t){return u!==null&&u.f&w&&(E===null?vn([t]):E.push(t)),t}function Ln(t,n){return u!==null&&tt()&&u.f&w&&(E===null||!E.includes(t))&&Qt(),t.equals(n)||(t.v=n,t.version=Pt(),dt(t,A),tt()&&l!==null&&l.f&v&&!(l.f&I)&&(p!==null&&p.includes(t)?(y(l,A),W(l)):m===null?hn([t]):m.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&A||!e&&o===l||(y(o,n),f&(v|O)&&(f&w?dt(o,L):W(o)))}}const Mn=1,Hn=2,Yn=4,jn=8,Bn=16,Un=1,Vn=2,Gn=4,$n=8,Kn=16,Zn=1,zn=2,Wn=4,Xn=1,Jn=2,nn="[",rn="[!",en="]",Et={},Qn=Symbol(),tr="http://www.w3.org/2000/svg";function yt(t){console.warn("hydration_mismatch")}let S=!1;function nr(t){S=t}let d;function U(t){if(t===null)throw yt(),Et;return d=t}function rr(){return U(R(d))}function er(t){if(S){if(R(d)!==null)throw yt(),Et;d=t}}function sr(t=1){if(S){for(var n=t,r=d;n--;)r=R(r);d=r}}function ar(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=R(n);n.remove(),n=e}}var ot,sn,wt,Tt;function or(){if(ot===void 0){ot=window,sn=document;var t=Element.prototype,n=Node.prototype;wt=st(n,"firstChild").get,Tt=st(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function mt(t=""){return document.createTextNode(t)}function X(t){return wt.call(t)}function R(t){return Tt.call(t)}function lr(t){if(!S)return X(t);var n=X(d);return n===null&&(n=d.appendChild(mt())),U(n),n}function ur(t,n){if(!S){var r=X(t);return r instanceof Comment&&r.data===""?R(r):r}return d}function ir(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=R(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var a=mt();return e==null||e.before(a),U(a),a}return U(e),e}function fr(t){t.textContent=""}function At(t){l===null&&u===null&&Wt(),u!==null&&u.f&O&&zt(),et&&Zt()}function an(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,a=l,o={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{lt(!0),z(o),o.f|=Gt}catch(T){throw H(o),T}finally{lt(f)}}else n!==null&&W(o);var _=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!_&&!s&&e&&(a!==null&&an(o,a),u!==null&&u.f&w)){var c=u;(c.children??(c.children=[])).push(o)}return o}function _r(t){const n=q(C,null,!1);return y(n,v),n.teardown=t,n}function cr(t){At();var n=l!==null&&(l.f&C)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=It(t);return e}}function pr(t){return At(),gt(t)}function vr(t){const n=q(Z,t,!0);return()=>{H(n)}}function It(t){return q(ft,t,!1)}function gt(t){return q(C,t,!0)}function hr(t){return gt(t)}function dr(t,n=0){return q(C|_t|n,t,!0)}function Er(t,n=!0){return q(C|I,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=et,e=u;ut(!0),$(null);try{n.call(null)}finally{ut(r),$(e)}}}function H(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:R(e);e.remove(),e=a}r=!0}Lt(t,n&&!r),F(t,0),y(t,M);var o=t.transitions;if(o!==null)for(const _ of o)_.stop();St(t);var f=t.parent;f!==null&&f.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yr(t,n){var r=[];Rt(t,r,!0),on(r,()=>{H(t),n&&n()})}function on(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Rt(t,n,r){if(!(t.f&D)){if(t.f^=D,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ct)!==0||(e.f&I)!==0;Rt(e,n,a?r:!1),e=s}}}function wr(t){Nt(t,!0)}function Nt(t,n){if(t.f&D){t.f^=D,Y(t)&&z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&I)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const ln=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,J=[],Q=[];function kt(){V=!1;const t=J.slice();J=[],it(t)}function xt(){G=!1;const t=Q.slice();Q=[],it(t)}function Tr(t){V||(V=!0,queueMicrotask(kt)),J.push(t)}function mr(t){G||(G=!0,ln(xt)),Q.push(t)}function un(){V&&kt(),G&&xt()}function fn(t){let n=w|A;l===null?n|=O:l.f|=pt;const r={children:null,deps:null,equals:vt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&w){var e=u;(e.children??(e.children=[])).push(r)}return r}function Ar(t){const n=fn(t);return n.equals=ht,n}function Dt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?_n(e):H(e)}}}function Ct(t){var n,r=l;K(t.parent);try{Dt(t),n=Ft(t)}finally{K(r)}var e=(N||t.f&O)&&t.deps!==null?L:v;y(t,e),t.equals(n)||(t.v=n,t.version=Pt())}function _n(t){Dt(t),F(t,0),y(t,M),t.children=t.deps=t.reactions=t.fn=null}function cn(t){throw new Error("lifecycle_outside_component")}const qt=0,pn=1;let j=qt,P=!1,k=!1,et=!1;function lt(t){k=t}function ut(t){et=t}let g=[],x=0;let u=null;function $(t){u=t}let l=null;function K(t){l=t}let E=null;function vn(t){E=t}let p=null,h=0,m=null;function hn(t){m=t}let bt=0,N=!1,i=null;function Pt(){return++bt}function tt(){return i!==null&&i.l===null}function Y(t){var o,f;var n=t.f;if(n&A)return!0;if(n&L){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&Ct(a),e&&l!==null&&!N&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,v)}return!1}function dn(t,n,r){throw t}function Ft(t){var T;var n=p,r=h,e=m,s=u,a=N,o=E;p=null,h=0,m=null,u=t.f&(I|Z)?null:t,N=!k&&(t.f&O)!==0,E=null;try{var f=(0,t.fn)(),_=t.deps;if(p!==null){var c;if(F(t,h),_!==null&&h>0)for(_.length=h+p.length,c=0;c<p.length;c++)_[h+c]=p[c];else t.deps=_=p;if(!N)for(c=h;c<_.length;c++)((T=_[c]).reactions??(T.reactions=[])).push(t)}else _!==null&&h<_.length&&(F(t,h),_.length=h);return f}finally{p=n,h=r,m=e,u=s,N=a,E=o}}function En(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(y(n,L),n.f&(O|B)||(n.f^=B),F(n,0))}function F(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)En(t,r[e])}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;H(r,n),r=e}}function z(t){var n=t.f;if(!(n&M)){y(t,v);var r=l,e=i;l=t,i=t.ctx;try{n&_t||Lt(t),St(t);var s=Ft(t);t.teardown=typeof s=="function"?s:null,t.version=bt}catch(a){dn(a)}finally{l=r,i=e}}}function Mt(){x>1e3&&(x=0,Xt()),x++}function Ht(t){var n=t.length;if(n!==0){Mt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&v||(s.f^=v);var a=[];Yt(s,a),yn(a)}}finally{k=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(M|D))&&Y(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function wn(){if(P=!1,x>1001)return;const t=g;g=[],Ht(t),P||(x=0)}function W(t){j===qt&&(P||(P=!0,queueMicrotask(wn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|I)){if(!(r&v))return;n.f^=v}}g.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&I)!==0,o=a&&(s&v)!==0;if(!o&&!(s&D))if(s&C){a?r.f^=v:Y(r)&&z(r);var f=r.first;if(f!==null){r=f;continue}}else s&ft&&e.push(r);var _=r.next;if(_===null){let b=r.parent;for(;b!==null;){if(t===b)break t;var c=b.next;if(c!==null){r=c;continue t}b=b.parent}}r=_}for(var T=0;T<e.length;T++)f=e[T],n.push(f),Yt(f,n)}function jt(t){var n=j,r=g;try{Mt();const s=[];j=pn,g=s,P=!1,Ht(r);var e=t==null?void 0:t();return un(),(g.length>0||s.length>0)&&jt(),x=0,e}finally{j=n,g=r}}async function Ir(){await Promise.resolve(),jt()}function gr(t){var n=t.f;if(n&M)return t.v;if(u!==null){E!==null&&E.includes(t)&&Jt();var r=u.deps;p===null&&r!==null&&r[h]===t?h++:p===null?p=[t]:p.push(t),m!==null&&l!==null&&l.f&v&&!(l.f&I)&&m.includes(t)&&(y(l,A),W(l))}if(n&w){var e=t;Y(e)&&Ct(e)}return t.v}function Sr(t){const n=u;try{return u=null,t()}finally{u=n}}const Tn=~(A|L|v);function y(t,n){t.f=t.f&Tn|n}function Or(t){return Bt().get(t)}function Rr(t,n){return Bt().set(t,n),n}function Bt(t){return i===null&&cn(),i.c??(i.c=new Map(mn(i)||void 0))}function mn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Nr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:rt(!1)})}function kr(t){const n=i;if(n!==null){const o=n.e;if(o!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];K(a.effect),$(a.reaction),It(a.fn)}}finally{K(r),$(e)}}i=n.p,n.m=!0}return{}}function xr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(at in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&at in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{cn as $,wr as A,mt as B,l as C,st as D,ct as E,Cn as F,ht as G,Et as H,Ln as I,Un as J,Vn as K,kn as L,$n as M,tr as N,Ar as O,Gn as P,Kn as Q,Fn as R,at as S,or as T,nn as U,en as V,Dn as W,fr as X,In as Y,vr as Z,i as _,kr as a,cr as a0,Nn as a1,_r as a2,tt as a3,Sn as a4,On as a5,rt as a6,qn as a7,Qn as a8,bn as a9,Rr as aA,Or as aB,xr as aC,Kt as aD,$t as aE,Xn as aF,Jn as aG,sn as aH,ot as aI,Vt as aa,An as ab,rn as ac,ar as ad,Pn as ae,_t as af,Gt as ag,Rn as ah,Wn as ai,Zn as aj,zn as ak,jt as al,gn as am,pr as an,Ir as ao,Yn as ap,D as aq,Mn as ar,Hn as as,Bn as at,Rt as au,on as av,jn as aw,xn as ax,Ut as ay,mr as az,rr as b,lr as c,dr as d,Er as e,ur as f,d as g,S as h,yr as i,It as j,gt as k,gr as l,fn as m,sr as n,R as o,Nr as p,Tr as q,er as r,ir as s,hr as t,Sr as u,yt as v,U as w,X as x,H as y,nr as z};