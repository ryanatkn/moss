import{F as p,G as w,P as C,I as D,m as v,J as M,u as T,K as q,R as y,L as b,M as N,O as U,Q as Y,S as x,T as G,o as $,D as h,U as z,V as H}from"./runtime.q7tUB77H.js";import{c as J,p as K}from"./store.BztFVUDJ.js";function Q(a){for(var r=h,t=h;r!==null&&!(r.f&(q|y));)r=r.parent;try{return b(r),a()}finally{b(t)}}function j(a,r,t,l){var O;var A=(t&N)!==0,R=!U,c=(t&Y)!==0,L=(t&z)!==0,I=!1,n;c?[n,I]=J(()=>a[r]):n=a[r];var B=x in a||G in a,u=((O=p(a,r))==null?void 0:O.set)??(B&&c&&r in a?e=>a[r]=e:void 0),f=l,d=!0,o=!1,g=()=>(o=!0,d&&(d=!1,L?f=T(l):f=l),f);n===void 0&&l!==void 0&&(u&&R&&w(),n=g(),u&&u(n));var s;if(s=()=>{var e=a[r];return e===void 0?g():(d=!0,o=!1,e)},!(t&C))return s;if(u){var F=a.$$legacy;return function(e,i){return arguments.length>0?((!i||F||I)&&u(i?s():e),e):s()}}var m=!1,E=!1,P=H(n),_=Q(()=>$(()=>{var e=s(),i=v(P);return m?(m=!1,E=!0,i):(E=!1,P.v=e)}));return A||(_.equals=D),function(e,i){if(arguments.length>0){const S=i?v(_):c?K(e):e;return _.equals(S)||(m=!0,M(P,S),o&&f!==void 0&&(f=S),T(()=>v(_))),e}return v(_)}}export{j as p};
