import{T as C,q as D,ay as I,a2 as M,z as m,d as O,aB as x,h as c,H as P,C as b,o as A,v as g,g as s,y as _,A as S,aC as R,aD as B,b as V}from"./runtime.DvazHU5t.js";const W=new Set,q=new Set;function F(e,t,r,o){function n(a){if(o.capture||H.call(t,a),!a.cancelBubble)return r.call(this,a)}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?D(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function Y(e,t,r,o,n){var a={capture:o,passive:n},i=F(e,t,r,a);(t===document.body||t===window||t===document)&&C(()=>{t.removeEventListener(e,i,a)})}function J(e){for(var t=0;t<e.length;t++)W.add(e[t]);for(var r of q)r(e)}function H(e){var T;var t=this,r=t.ownerDocument,o=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],a=n[0]||e.target,i=0,f=e.__root;if(f){var l=n.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var E=n.indexOf(t);if(E===-1)return;l<=E&&(i=l)}if(a=n[i]||e.target,a!==t){I(e,"currentTarget",{configurable:!0,get(){return a||r}});try{for(var h,w=[];a!==null;){var y=a.parentNode||a.host||null;try{var p=a["__"+o];if(p!==void 0&&!a.disabled)if(M(p)){var[L,...k]=p;L.apply(a,[e,...k])}else p.call(a,e)}catch(v){h?w.push(v):h=v}if(e.cancelBubble||y===t||y===null)break;a=y}if(h){for(let v of w)queueMicrotask(()=>{throw v});throw h}}finally{e.__root=t,delete e.currentTarget}}}let u;function K(){u=void 0}function Q(e){let t=null,r=c;var o;if(c){for(t=s,u===void 0&&(u=_(document.head));u!==null&&(u.nodeType!==8||u.data!==P);)u=b(u);u===null?A(!1):u=g(b(u))}c||(o=document.head.appendChild(m()));try{O(()=>e(o),x)}finally{r&&(A(!0),u=s,g(t))}}function N(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function d(e,t){var r=S;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function X(e,t){var r=(t&R)!==0,o=(t&B)!==0,n,a=!e.startsWith("<!>");return()=>{if(c)return d(s,null),s;n===void 0&&(n=N(a?e:"<!>"+e),r||(n=_(n)));var i=o?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=_(i),l=i.lastChild;d(f,l)}else d(i,i);return i}}function Z(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(c)return d(s,null),s;if(!a){var i=N(n),f=_(i);a=_(f)}var l=a.cloneNode(!0);return d(l,l),l}}function ee(e=""){if(!c){var t=m(e+"");return d(t,t),t}var r=s;return r.nodeType!==3&&(r.before(r=m()),g(r)),d(r,r),r}function te(){if(c)return d(s,null),s;var e=document.createDocumentFragment(),t=document.createComment(""),r=m();return e.append(t,r),d(t,r),e}function re(e,t){if(c){S.nodes_end=s,V();return}e!==null&&e.before(t)}function ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const U=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ne(e){return U.includes(e)}const $={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function oe(e){return e=e.toLowerCase(),$[e]??e}const z=["wheel","mousewheel","touchstart","touchmove"];function ie(e){return z.includes(e)}const G="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(G);export{re as a,ee as b,te as c,d,W as e,K as f,J as g,H as h,ie as i,N as j,ae as k,F as l,oe as m,Z as n,ne as o,Q as p,Y as q,q as r,X as t};
