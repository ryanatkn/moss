import{V as m,z as H,W as L,w as O,H as p,C as c,y as D,a as Y,d as _,X as C,x as I,Y as V,Z as $,_ as j,$ as k,B as M,c as S,h as w,k as W,a0 as z,D as B,m as P}from"./9wzcdEVc.js";import{f as X,r as N,h,g as Z,j as q,d as F}from"./ZJOpTZSG.js";let R=!0;function Q(t){R=t}function U(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function G(t,e){return b(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const r=e.target,u=w,l=_;try{for(var a=H(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw p;c(!0),D(a),Y();const o=b(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==C)throw I(),p;return c(!1),o}catch(o){if(o===p)return e.recover===!1&&V(),m(),$(r),c(!1),G(t,e);throw o}finally{c(u),D(l),q()}}const i=new Map;function b(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:o=!0}){m();var y=new Set,v=d=>{for(var s=0;s<d.length;s++){var n=d[s];if(!y.has(n)){y.add(n);var f=Z(n);e.addEventListener(n,h,{passive:f});var E=i.get(n);E===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,E+1)}}};v(j(X)),N.add(v);var g=void 0,A=k(()=>{var d=r??e.appendChild(M());return S(()=>{if(a){W({});var s=z;s.c=a}l&&(u.$$events=l),w&&F(d,null),R=o,g=t(d,u)||{},R=!0,w&&(B.nodes_end=_),a&&P()}),()=>{var f;for(var s of y){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}N.delete(v),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return T.set(g,A),g}let T=new WeakMap;function ee(t,e){const r=T.get(t);return r?(T.delete(t),r(e)):Promise.resolve()}export{Q as a,R as b,x as h,G as m,U as s,ee as u};
