import{S as m,a3 as C,a4 as K,a5 as y,a6 as Y,J as v,F as E,a7 as d,m as w,D as k,a8 as q,a9 as B,aa as H,b as J,h as I,a as Z,E as $,ab as z,ac as G,x as Q,C as A,A as D,c as j,p as F,d as V,R as W,a1 as L,ad as X,ae as p,t as ee,af as te}from"./BBqbn4le.js";function h(t,l=null,o){if(typeof t!="object"||t===null||m in t)return t;const s=B(t);if(s!==C&&s!==K)return t;var a=new Map,c=H(t),_=y(0);c&&a.set("length",y(t.length));var g;return new Proxy(t,{defineProperty(f,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Y();var i=a.get(e);return i===void 0?(i=y(n.value),a.set(e,i)):v(i,h(n.value,g)),!0},deleteProperty(f,e){var n=a.get(e);if(n===void 0)e in f&&a.set(e,y(d));else{if(c&&typeof e=="string"){var i=a.get("length"),r=Number(e);Number.isInteger(r)&&r<i.v&&v(i,r)}v(n,d),M(_)}return!0},get(f,e,n){var b;if(e===m)return t;var i=a.get(e),r=e in f;if(i===void 0&&(!r||(b=E(f,e))!=null&&b.writable)&&(i=y(h(r?f[e]:d,g)),a.set(e,i)),i!==void 0){var u=w(i);return u===d?void 0:u}return Reflect.get(f,e,n)},getOwnPropertyDescriptor(f,e){var n=Reflect.getOwnPropertyDescriptor(f,e);if(n&&"value"in n){var i=a.get(e);i&&(n.value=w(i))}else if(n===void 0){var r=a.get(e),u=r==null?void 0:r.v;if(r!==void 0&&u!==d)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(f,e){var u;if(e===m)return!0;var n=a.get(e),i=n!==void 0&&n.v!==d||Reflect.has(f,e);if(n!==void 0||k!==null&&(!i||(u=E(f,e))!=null&&u.writable)){n===void 0&&(n=y(i?h(f[e],g):d),a.set(e,n));var r=w(n);if(r===d)return!1}return i},set(f,e,n,i){var S;var r=a.get(e),u=e in f;if(c&&e==="length")for(var b=n;b<r.v;b+=1){var N=a.get(b+"");N!==void 0?v(N,d):b in f&&(N=y(d),a.set(b+"",N))}r===void 0?(!u||(S=E(f,e))!=null&&S.writable)&&(r=y(void 0),v(r,h(n,g)),a.set(e,r)):(u=r.v!==d,v(r,h(n,g)));var x=Reflect.getOwnPropertyDescriptor(f,e);if(x!=null&&x.set&&x.set.call(i,n),!u){if(c&&typeof e=="string"){var P=a.get("length"),T=Number(e);Number.isInteger(T)&&T>=P.v&&v(P,T+1)}M(_)}return!0},ownKeys(f){w(_);var e=Reflect.ownKeys(f).filter(r=>{var u=a.get(r);return u===void 0||u.v!==d});for(var[n,i]of a)i.v!==d&&!(n in f)&&e.push(n);return e},setPrototypeOf(){q()}})}function M(t,l=1){v(t,t.v+l)}function U(t){return t!==null&&typeof t=="object"&&m in t?t[m]:t}function re(t,l){return Object.is(U(t),U(l))}function ae(t,l,o=!1){I&&Z();var s=t,a=null,c=null,_=d,g=o?$:0,f=!1;const e=(i,r=!0)=>{f=!0,n(r,i)},n=(i,r)=>{if(_===(_=i))return;let u=!1;if(I){const b=s.data===z;!!_===b&&(s=G(),Q(s),A(!1),u=!0)}_?(a?D(a):r&&(a=j(()=>r(s))),c&&F(c,()=>{c=null})):(c?D(c):r&&(c=j(()=>r(s))),a&&F(a,()=>{a=null})),u&&A(!0)};J(()=>{f=!1,l(e),f||n(null,null)},g),I&&(s=V)}let R=!1,O=Symbol();function ie(t,l,o){const s=o[l]??(o[l]={store:null,source:W(void 0),unsubscribe:L});if(s.store!==t&&!(O in o))if(s.unsubscribe(),s.store=t??null,t==null)s.source.v=void 0,s.unsubscribe=L;else{var a=!0;s.unsubscribe=X(t,c=>{a?s.source.v=c:v(s.source,c)}),a=!1}return t&&O in o?p(t):w(s.source)}function fe(){const t={};function l(){ee(()=>{for(var o in t)t[o].unsubscribe();te(t,O,{enumerable:!1,value:!0})})}return[t,l]}function se(t){var l=R;try{return R=!1,[t(),R]}finally{R=l}}export{ae as a,ie as b,se as c,re as i,h as p,fe as s};
