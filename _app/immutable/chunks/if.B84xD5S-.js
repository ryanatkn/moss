import{S as h,a9 as k,aa as B,ab as _,ac as C,I as o,D as R,ad as u,l as x,C as F,ae as K,af as M,ag as Y,d as q,z as O,e as A,i as D,h as T,b as z,E as H,ah as U,ai as Z,w as G,B as S,g as J}from"./runtime.Dy2cFxT5.js";function b(f,y=null,E){if(typeof f!="object"||f===null||h in f)return f;const g=M(f);if(g!==k&&g!==B)return f;var a=new Map,d=Y(f),v=_(0);d&&a.set("length",_(f.length));var l;return new Proxy(f,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&C();var r=a.get(e);return r===void 0?(r=_(t.value),a.set(e,r)):o(r,b(t.value,l)),!0},deleteProperty(n,e){var t=a.get(e);if(t===void 0)e in n&&a.set(e,_(u));else{if(d&&typeof e=="string"){var r=a.get("length"),i=Number(e);Number.isInteger(i)&&i<r.v&&o(r,i)}o(t,u),j(v)}return!0},get(n,e,t){var c;if(e===h)return f;var r=a.get(e),i=e in n;if(r===void 0&&(!i||(c=R(n,e))!=null&&c.writable)&&(r=_(b(i?n[e]:u,l)),a.set(e,r)),r!==void 0){var s=x(r);return s===u?void 0:s}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=a.get(e);r&&(t.value=x(r))}else if(t===void 0){var i=a.get(e),s=i==null?void 0:i.v;if(i!==void 0&&s!==u)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return t},has(n,e){var s;if(e===h)return!0;var t=a.get(e),r=t!==void 0&&t.v!==u||Reflect.has(n,e);if(t!==void 0||F!==null&&(!r||(s=R(n,e))!=null&&s.writable)){t===void 0&&(t=_(r?b(n[e],l):u),a.set(e,t));var i=x(t);if(i===u)return!1}return r},set(n,e,t,r){var P;var i=a.get(e),s=e in n;if(d&&e==="length")for(var c=t;c<i.v;c+=1){var w=a.get(c+"");w!==void 0?o(w,u):c in n&&(w=_(u),a.set(c+"",w))}i===void 0?(!s||(P=R(n,e))!=null&&P.writable)&&(i=_(void 0),o(i,b(t,l)),a.set(e,i)):(s=i.v!==u,o(i,b(t,l)));var m=Reflect.getOwnPropertyDescriptor(n,e);if(m!=null&&m.set&&m.set.call(r,t),!s){if(d&&typeof e=="string"){var I=a.get("length"),N=Number(e);Number.isInteger(N)&&N>=I.v&&o(I,N+1)}j(v)}return!0},ownKeys(n){x(v);var e=Reflect.ownKeys(n).filter(i=>{var s=a.get(i);return s===void 0||s.v!==u});for(var[t,r]of a)r.v!==u&&!(t in n)&&e.push(t);return e},setPrototypeOf(){K()}})}function j(f,y=1){o(f,f.v+y)}function L(f){return f!==null&&typeof f=="object"&&h in f?f[h]:f}function V(f,y){return Object.is(L(f),L(y))}function W(f,y,E,g=null,a=!1){T&&z();var d=f,v=null,l=null,n=null,e=a?H:0;q(()=>{if(n===(n=!!y()))return;let t=!1;if(T){const r=d.data===U;n===r&&(d=Z(),G(d),S(!1),t=!0)}n?(v?O(v):v=A(()=>E(d)),l&&D(l,()=>{l=null})):(l?O(l):g&&(l=A(()=>g(d))),v&&D(v,()=>{v=null})),t&&S(!0)},e),T&&(d=J)}export{V as a,W as i,b as p};
