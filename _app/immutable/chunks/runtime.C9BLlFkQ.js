var gn=Array.isArray,ot=Array.from,lt=Object.isFrozen,it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ft=Object.getOwnPropertyDescriptors,ct=Object.prototype,_t=Array.prototype,pt=Object.getPrototypeOf,rn=Map.prototype,qn=rn.set,Ln=rn.get;function vt(n,t,e){qn.call(n,t,e)}function dt(n,t){return Ln.call(n,t)}function ht(n){return typeof n=="function"}const R=2,sn=4,D=8,un=16,T=32,K=64,y=128,b=256,m=512,E=1024,S=2048,C=4096,g=8192,Mn=16384,on=32768,mt=65536,Et=Symbol("$state"),Tt=Symbol("$state.frozen"),wt=Symbol("");function ln(n){return n===this.v}function Pn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function an(n){return!Pn(n,this.v)}const At=1,yt=2,It=4,Ot=8,Rt=16,St=64,Nt=1,kt=2,xt=4,Ct=8,Dt=1,gt=2,qt=4,Lt=1,Mt=2,Pt="[",bn="]",bt="",Ft=`${bn}!`,Ht={},Fn=Symbol(),Yt=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"],Ut=["touchstart","touchmove","touchend"],jt={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Bt="http://www.w3.org/2000/svg";function Vt(n,t="exclude-on"){return n.endsWith("capture")?t=="exclude-on"?n!=="gotpointercapture"&&n!=="lostpointercapture":n!=="ongotpointercapture"&&n!=="onlostpointercapture":!1}function Hn(n){throw new Error("effect_in_teardown")}function Yn(){throw new Error("effect_in_unowned_derived")}function Un(n){throw new Error("effect_orphan")}function jn(){throw new Error("effect_update_depth_exceeded")}function zt(){throw new Error("hydration_failed")}function Gt(n){throw new Error("props_invalid_value")}function Bn(){throw new Error("state_unsafe_mutation")}function fn(n){return{f:0,v:n,reactions:null,equals:ln,version:0}}function Kt(n){var e;const t=fn(n);return t.equals=an,f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(t),t}function $t(n,t){var e=n.v!==Fn;return e&&c!==null&&G()&&c.f&R&&Bn(),n.equals(t)||(n.v=t,n.version=On(),Q(n,E,!0),G()&&e&&a!==null&&a.f&m&&!(a.f&T)&&(v!==null&&v.includes(n)?(h(a,E),j(a)):A===null?Xn([n]):A.push(n))),t}function Zt(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function Vn(n){if(gn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function cn(n){a===null&&c===null&&Un(),c!==null&&c.f&y&&Yn(),Z&&Hn()}function X(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function q(n,t,e){var r=(n&K)!==0,s={ctx:f,deps:null,dom:null,f:n|E,first:null,fn:t,last:null,next:null,parent:r?null:a,prev:null,teardown:null,transitions:null};if(e){var o=k;try{J(!0),U(s),s.f|=Mn}finally{J(o)}}else t!==null&&j(s);var _=e&&s.deps===null&&s.first===null&&s.dom===null&&s.teardown===null;return!_&&!r&&(a!==null&&X(s,a),c!==null&&c.f&R&&X(s,c)),s}function Wt(n){const t=q(D,null,!1);return h(t,m),t.teardown=n,t}function Qt(n){cn();var t=a!==null&&(a.f&D)!==0&&f!==null&&!f.m;if(t){var e=f;(e.e??(e.e=[])).push(n)}else{var r=_n(n);return r}}function Xt(n){return cn(),pn(n)}function Jt(n){const t=q(K,n,!0);return()=>{$(t)}}function _n(n){return q(sn,n,!1)}function pn(n){return q(D,n,!0)}function ne(n){return pn(n)}function te(n,t=0){return q(D|un|t,n,!0)}function ee(n){return q(D|T,n,!0)}function vn(n){var t=n.teardown;if(t!==null){const e=Z,r=c;nn(!0),tn(null);try{t.call(null)}finally{nn(e),tn(r)}}}function $(n,t=!0){var e=n.dom;if(e!==null&&t&&Vn(e),W(n,t),Y(n,0),h(n,g),n.transitions)for(const s of n.transitions)s.stop();vn(n);var r=n.parent;r!==null&&n.f&T&&r.first!==null&&dn(n),n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function dn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function re(n,t){var e=[];hn(n,e,!0),zn(e,()=>{$(n),t&&t()})}function zn(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function hn(n,t,e){if(!(n.f&C)){if(n.f^=C,n.transitions!==null)for(const _ of n.transitions)(_.is_global||e)&&t.push(_);for(var r=n.first;r!==null;){var s=r.next,o=(r.f&on)!==0||(r.f&T)!==0;hn(r,t,o?e:!1),r=s}}}function se(n){mn(n,!0)}function mn(n,t){if(n.f&C){n.f^=C,M(n)&&U(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&on)!==0||(e.f&T)!==0;mn(e,s?t:!1),e=r}if(n.transitions!==null)for(const o of n.transitions)(o.is_global||t)&&o.in()}}const ue=()=>{};function En(n){for(var t=0;t<n.length;t++)n[t]()}const Gn=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let F=!1,H=!1,V=[],z=[];function Tn(){F=!1;const n=V.slice();V=[],En(n)}function wn(){H=!1;const n=z.slice();z=[],En(n)}function oe(n){F||(F=!0,queueMicrotask(Tn)),V.push(n)}function le(n){H||(H=!0,Gn(wn)),z.push(n)}function Kn(){F&&Tn(),H&&wn()}function $n(n){let t=R|E;a===null&&(t|=y);const e={deps:null,deriveds:null,equals:ln,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(c!==null&&c.f&R){var r=c;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function ie(n){const t=$n(n);return t.equals=an,t}function An(n){W(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)Zn(t[e])}}function yn(n){An(n);var t=Rn(n),e=(N||n.f&y)&&n.deps!==null?S:m;h(n,e),n.equals(t)||(n.v=t,n.version=On(),Q(n,E,!1))}function Zn(n){An(n),Y(n,0),h(n,g),n.first=n.last=n.deps=n.reactions=n.fn=null}function Wn(n){throw new Error("lifecycle_outside_component")}const In=0,Qn=1;let P=In,L=!1,k=!1,Z=!1;function J(n){k=n}function nn(n){Z=n}let O=[],x=0,c=null;function tn(n){c=n}let a=null,v=null,p=0,A=null;function Xn(n){A=n}let Jn=0,N=!1,f=null;function On(){return Jn++}function G(){return f!==null&&f.l===null}function M(n){var I;var t=n.f,e=(t&E)!==0;if(e)return!0;var r=(t&y)!==0,s=(t&b)!==0;if(t&S){var o=n.deps;if(o!==null)for(var _=o.length,l,u=0;u<_;u++){var i=o[u];!e&&M(i)&&yn(i);var d=i.version;if(r){if(d>n.version)return!0;!N&&!((I=i==null?void 0:i.reactions)!=null&&I.includes(n))&&(i.reactions??(i.reactions=[])).push(n)}else{if(n.f&E)return!0;s&&(d>n.version&&(e=!0),l=i.reactions,l===null?i.reactions=[n]:l.includes(n)||l.push(n))}}r||h(n,m),s&&(n.f^=b)}return e}function nt(n,t,e){throw n}function Rn(n){const t=v,e=p,r=A,s=c,o=N;v=null,p=0,A=null,c=n.f&(T|K)?null:n,N=!k&&(n.f&y)!==0;try{let _=(0,n.fn)(),l=n.deps;if(v!==null){let u;if(l!==null){const i=l.length,d=p===0?v:l.slice(0,p).concat(v),w=d.length>16&&i-p>1?new Set(d):null;for(u=p;u<i;u++){const B=l[u];(w!==null?!w.has(B):!d.includes(B))&&Sn(n,B)}}if(l!==null&&p>0)for(l.length=p+v.length,u=0;u<v.length;u++)l[p+u]=v[u];else n.deps=l=v;if(!N)for(u=p;u<l.length;u++){const i=l[u],d=i.reactions;d===null?i.reactions=[n]:d[d.length-1]!==n&&!d.includes(n)&&d.push(n)}}else l!==null&&p<l.length&&(Y(n,p),l.length=p);return _}finally{v=t,p=e,A=r,c=s,N=o}}function Sn(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&R&&(h(t,S),t.f&(y|b)||(t.f^=b),Y(t,0))}function Y(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const o=e[s];(r===null||!r.includes(o))&&Sn(n,o)}}}function W(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,$(e,t),e=r}function U(n){var t=n.f;if(!(t&g)){h(n,m);var e=n.ctx,r=a,s=f;a=n,f=e;try{t&un||W(n),vn(n);var o=Rn(n);n.teardown=typeof o=="function"?o:null}catch(_){nt(_)}finally{a=r,f=s}}}function Nn(){x>1e3&&(x=0,jn()),x++}function kn(n){var t=n.length;if(t!==0){Nn();var e=k;k=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&T))en([s]);else{var o=[];xn(s,o),en(o)}}}finally{k=e}}}function en(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(g|C))&&M(r)&&(U(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?dn(r):r.fn=null))}}function tt(){if(L=!1,x>1001)return;const n=O;O=[],kn(n),L||(x=0)}function j(n){P===In&&(L||(L=!0,queueMicrotask(tt)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&T){if(!(e&m))return;h(t,S)}}O.push(t)}function xn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,o=(s&(g|C))===0,_=s&T,l=(s&m)!==0,u=e.first;if(o&&(!_||!l)){if(_&&h(e,m),s&D){if(!_&&M(e)&&(U(e),u=e.first),u!==null){e=u;continue}}else if(s&sn)if(_||l){if(u!==null){e=u;continue}}else r.push(e)}var i=e.next;if(i===null){let w=e.parent;for(;w!==null;){if(n===w)break n;var d=w.next;if(d!==null){e=d;continue n}w=w.parent}}e=i}for(var I=0;I<r.length;I++)u=r[I],t.push(u),xn(u,t)}function Cn(n,t=!0){var e=P,r=O;try{Nn();const o=[];P=Qn,O=o,L=!1,t&&kn(r);var s=n==null?void 0:n();return Kn(),(O.length>0||o.length>0)&&Cn(),x=0,s}finally{P=e,O=r}}async function ae(){await Promise.resolve(),Cn()}function et(n){const t=n.f;if(t&g)return n.v;if(c!==null){const e=(c.f&y)!==0,r=c.deps;v===null&&r!==null&&r[p]===n&&!(e&&a!==null)?p++:(r===null||p===0||r[p-1]!==n)&&(v===null?v=[n]:v[v.length-1]!==n&&v.push(n)),A!==null&&a!==null&&a.f&m&&!(a.f&T)&&A.includes(n)&&(h(a,E),j(a))}return t&R&&M(n)&&yn(n),n.v}function Q(n,t,e){var r=n.reactions;if(r!==null)for(var s=G(),o=r.length,_=0;_<o;_++){var l=r[_],u=l.f;if(!(u&E||(!e||!s)&&l===a)){h(l,t);var i=(u&S)!==0,d=(u&y)!==0;(u&m||i&&d)&&(l.f&R?Q(l,S,e):j(l))}}}function fe(n){const t=c;try{return c=null,n()}finally{c=t}}const rt=~(E|S|m);function h(n,t){n.f=n.f&rt|t}function st(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function ce(n){return Dn().get(n)}function _e(n,t){return Dn().set(n,t),t}function Dn(n){return f===null&&Wn(),f.c??(f.c=new Map(ut(f)||void 0))}function ut(n){let t=n.p;for(;t!==null;){const e=t.c;if(e!==null)return e;t=t.p}return null}function pe(n,t=!1,e){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},t||(f.l={s:null,u:null,r1:[],r2:fn(!1)})}function ve(n){const t=f;if(t!==null){const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)_n(r[e])}f=t.p,t.m=!0}return{}}function de(n){return st(n)?et(n):n}export{qt as $,Kt as A,pt as B,ue as C,se as D,$ as E,Bt as F,f as G,Wn as H,Qt as I,Pn as J,Wt as K,Ft as L,on as M,Gt as N,mt as O,xt as P,an as Q,Nt as R,Et as S,kt as T,Fn as U,ie as V,Ct as W,de as X,un as Y,Mn as Z,ht as _,ve as a,Dt as a0,gt as a1,Ot as a2,Pt as a3,C as a4,At as a5,yt as a6,St as a7,hn as a8,zn as a9,Rt as aa,It as ab,wt as ac,le as ad,dt as ae,vt as af,Vt as ag,jt as ah,Yt as ai,ft as aj,Xt as ak,ae as al,bn as am,Ht as an,bt as ao,Cn as ap,zt as aq,ot as ar,Jt as as,Ut as at,Lt as au,Mt as av,te as b,ee as c,re as d,_n as e,a as f,ce as g,et as h,Vn as i,Zt as j,gn as k,$n as l,lt as m,Tt as n,ct as o,pe as p,oe as q,pn as r,_e as s,ne as t,fe as u,_t as v,it as w,fn as x,$t as y,at as z};