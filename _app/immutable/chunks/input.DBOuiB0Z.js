import{h as m,u as w,i as u,t as C,q as b}from"./runtime.q7tUB77H.js";import{l as n}from"./disclose-version.BF4UlWwd.js";import{i as q}from"./store.BztFVUDJ.js";function g(e,v,a=v){n(e,"input",r=>{var l=r?e.defaultValue:e.value;if(l=_(e)?k(l):l,a(l),l!==(l=v())){var d=e.selectionStart,f=e.selectionEnd;e.value=l??"",f!==null&&(e.selectionStart=d,e.selectionEnd=Math.min(f,e.value.length))}}),(m&&e.defaultValue!==e.value||w(v)==null&&e.value)&&a(_(e)?k(e.value):e.value),u(()=>{var r=v();_(e)&&r===k(e.value)||e.type==="date"&&!r&&!e.value||r!==e.value&&(e.value=r??"")})}const h=new Set;function i(e,v,a,r,l=r){var d=a.getAttribute("type")==="checkbox",f=e;let t=!1;if(v!==null)for(var s of v)f=f[s]??(f[s]=[]);f.push(a),n(a,"change",()=>{var c=a.__value;d&&(c=S(f,c,a.checked)),l(c)},()=>l(d?[]:null)),u(()=>{var c=r();if(m&&a.defaultChecked!==a.checked){t=!0;return}d?(c=c||[],a.checked=c.includes(a.__value)):a.checked=q(a.__value,c)}),C(()=>{var c=f.indexOf(a);c!==-1&&f.splice(c,1)}),h.has(f)||(h.add(f),b(()=>{f.sort((c,o)=>c.compareDocumentPosition(o)===4?-1:1),h.delete(f)})),b(()=>{if(t){var c;if(d)c=S(f,c,a.checked);else{var o=f.find(y=>y.checked);c=o==null?void 0:o.__value}l(c)}})}function B(e,v,a=v){n(e,"change",r=>{var l=r?e.defaultChecked:e.checked;a(l)}),(m&&e.defaultChecked!==e.checked||w(v)==null)&&a(e.checked),u(()=>{var r=v();e.checked=!!r})}function S(e,v,a){for(var r=new Set,l=0;l<e.length;l+=1)e[l].checked&&r.add(e[l].__value);return a||r.delete(v),Array.from(r)}function _(e){var v=e.type;return v==="number"||v==="range"}function k(e){return e===""?null:+e}export{B as a,g as b,i as c};
