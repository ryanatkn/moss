import{b as p,z as A,c as T,e as b,E as q,w as y,L as C,M as F,N as M,g as o,v as U,u as Y,d as O,O as w,P as x}from"./runtime.4yfH9i_8.js";import{h as S,b as z,B,C as G,i as $,g as D,d as k,D as H,E as V,F as Z,G as j}from"./disclose-version.gZ-2tz3Z.js";function Q(u,s,f,i=null,h=!1){S&&z();var r=u,t=null,a=null,n=null,l=h?q:0;p(()=>{if(n===(n=!!s()))return;let _=!1;if(S){const m=r.data===B;n===m&&(r=G(),$(r),D(!1),_=!0)}n?(t?A(t):t=T(()=>f(r)),a&&b(a,()=>{a=null})):(a?A(a):i&&(a=T(()=>i(r))),t&&b(t,()=>{t=null})),_&&D(!0)},l),S&&(r=k)}function W(u,s,f,i){var g;var h=(f&V)!==0,r=(f&Z)!==0,t=(f&j)!==0,a=u[s],n=(g=y(u,s))==null?void 0:g.set,l=i,_=!0,m=()=>(t&&_&&(_=!1,l=Y(i)),l);a===void 0&&i!==void 0&&(n&&r&&C(),a=m(),n&&n(a));var v;if(r)v=()=>{var e=u[s];return e===void 0?m():(_=!0,e)};else{var R=(h?O:w)(()=>u[s]);R.f|=F,v=()=>{var e=o(R);return e!==void 0&&(l=void 0),e===void 0?l:e}}if(!(f&H))return v;if(n){var L=u.$$legacy;return function(e,d){return arguments.length>0?((!r||!d||L)&&n(d?v():e),e):v()}}var E=!1,P=x(a),c=O(()=>{var e=v(),d=o(P);return E?(E=!1,d):P.v=e});return h||(c.equals=M),function(e,d){var N=o(c);if(arguments.length>0){const I=d?o(c):e;return c.equals(I)||(E=!0,U(P,I),o(c)),e}return N}}export{Q as i,W as p};
