import{K as x,r as s,q as m}from"./runtime.4yfH9i_8.js";import{f as E}from"./attributes.CPiNokUc.js";import{g as h,i as L}from"./proxy.BzgpQmmp.js";import{h as w}from"./disclose-version.gZ-2tz3Z.js";function C(e,c,r,a=!0){a&&r();for(var v of c)e.addEventListener(v,r);x(()=>{for(var _ of c)e.removeEventListener(_,r)})}function d(e,c,r,a=r){e.addEventListener(c,r);const v=e.__on_r;v?e.__on_r=()=>{v(),a()}:e.__on_r=a,E()}function D(e,c,r){d(e,"input",()=>{r(b(e)?g(e.value):e.value)}),s(()=>{var a=c();if(w&&e.defaultValue!==e.value){r(e.value);return}b(e)&&a===g(e.value)||e.type==="date"&&!a&&!e.value||(e.value=a??"")})}const n=new Set;function K(e,c,r,a,v){var _=r.getAttribute("type")==="checkbox",o=e;let i=!1;if(c!==null)for(var t of c){var u=o;o=u[t],o===void 0&&(o=u[t]=[])}o.push(r),d(r,"change",()=>{var f=r.__value;_&&(f=k(o,f,r.checked)),v(f)},()=>v(_?[]:null)),s(()=>{var f=a();if(w&&r.defaultChecked!==r.checked){i=!0;return}_?(f=f||[],r.checked=h(f).includes(h(r.__value))):r.checked=L(r.__value,f)}),x(()=>{var f=o.indexOf(r);f!==-1&&o.splice(f,1)}),n.has(o)||(n.add(o),m(()=>{o.sort((f,l)=>f.compareDocumentPosition(l)===4?-1:1),n.delete(o)})),m(()=>{if(i){var f;if(_)f=k(o,f,r.checked);else{var l=o.find(y=>y.checked);f=l==null?void 0:l.__value}v(f)}})}function O(e,c,r){d(e,"change",()=>{var a=e.checked;r(a)}),c()==null&&r(!1),s(()=>{var a=c();e.checked=!!a})}function k(e,c,r){for(var a=new Set,v=0;v<e.length;v+=1)e[v].checked&&a.add(e[v].__value);return r||a.delete(c),Array.from(a)}function b(e){var c=e.type;return c==="number"||c==="range"}function g(e){return e===""?null:+e}export{O as a,D as b,K as c,C as l};