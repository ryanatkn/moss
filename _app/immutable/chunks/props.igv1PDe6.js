import{D as q,F as w,L as B,P as N,G as U,l,I as M,u as D,J as Y,R as x,K as T,M as y,O as G,Q as V,m as A,T as $,U as z,V as H,C as g,W as J,X as K}from"./runtime.Dy2cFxT5.js";import{p as Q}from"./if.B84xD5S-.js";import{g as W}from"./disclose-version.OD-Gfqag.js";function L(a){for(var r=g,t=g;r!==null&&!(r.f&(Y|x));)r=r.parent;try{return T(r),a()}finally{T(t)}}function k(a,r,t,d){var h;var I=(t&y)!==0,c=(t&G)!==0,R=(t&V)!==0,C=(t&J)!==0,S=!1,u;R?[u,S]=W(()=>a[r]):u=a[r];var s=(h=q(a,r))==null?void 0:h.set,n=d,o=!0,P=!1,O=()=>(P=!0,o&&(o=!1,C?n=D(d):n=d),n);u===void 0&&d!==void 0&&(s&&c&&w(),u=O(),s&&s(u));var i;if(c)i=()=>{var e=a[r];return e===void 0?O():(o=!0,P=!1,e)};else{var p=L(()=>(I?A:$)(()=>a[r]));p.f|=B,i=()=>{var e=l(p);return e!==void 0&&(n=void 0),e===void 0?n:e}}if(!(t&N))return i;if(s){var F=a.$$legacy;return function(e,f){return arguments.length>0?((!c||!f||F||S)&&s(f?i():e),e):i()}}var m=!1,b=!1,E=K(u),_=L(()=>A(()=>{var e=i(),f=l(E),v=z;return m||e===void 0&&v.f&H?(m=!1,b=!0,f):(b=!1,E.v=e)}));return I||(_.equals=U),function(e,f){if(arguments.length>0){const v=f?l(_):c&&R?Q(e):e;return _.equals(v)||(m=!0,M(E,v),P&&n!==void 0&&(n=v),D(()=>l(_))),e}return l(_)}}export{k as p};
