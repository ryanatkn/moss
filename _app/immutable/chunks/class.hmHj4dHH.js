import{k as fe,M as m,h as N,i as O,b as ne,C as le,D as z,g as D,d as I,m as ue,O as H,Q as P,R as oe,p as ee,S as ce,V as _e,W as G,B as ve,X as de,N as he,Y as ge}from"./disclose-version.CbFGAbSB.js";import{b as re,F as Ee,f as ae,c as V,d as Ae,R as pe,q as $,i as W,z as Q,M as Ne,y as J,T as be,U as Te,h as se,E as ye,V as Ce,W as Ie,H as K,X as Re}from"./runtime.G-HD_0f4.js";let L=null;function Ye(e){L=e}function qe(e,r){return r}function we(e,r,a,s){for(var i=[],_=r.length,n=0;n<_;n++)be(r[n].e,i,!0);var b=_>0&&i.length===0&&a!==null;if(b){var A=a.parentNode;ee(A),A.append(a),s.clear(),y(e,r[0].prev,r[_-1].next)}Te(i,()=>{for(var g=0;g<_;g++){var E=r[g];b||(s.delete(E.k),y(e,E.prev,E.next)),se(E.e,!b)}})}function Fe(e,r,a,s,i,_=null){var n=e,b={flags:r,items:new Map,first:null},A=(r&m)!==0;if(A){var g=e;n=N?O(g.firstChild):g.appendChild(fe())}N&&ne();var E=null;re(()=>{var u=a(),p=Ee(u)?u:u==null?[]:Array.from(u),c=p.length;let v=!1;if(N){var d=n.data===le;d!==(c===0)&&(n=z(),O(n),D(!1),v=!0)}if(N){for(var l=null,o,h=0;h<c;h++){if(I.nodeType===8&&I.data===ue){n=I,v=!0,D(!1);break}var t=p[h],f=s(t,h);o=ie(I,b,l,null,t,f,h,i,r),b.items.set(f,o),l=o}c>0&&O(z())}N||Le(p,b,n,i,r,s),_!==null&&(c===0?E?ae(E):E=V(()=>_(n)):E!==null&&Ae(E,()=>{E=null})),v&&D(!0)}),N&&(n=I)}function Le(e,r,a,s,i,_){var Y,q,F,U;var n=(i&ce)!==0,b=(i&(H|P))!==0,A=e.length,g=r.items,E=r.first,u=E,p=new Set,c=null,v=new Set,d=[],l=[],o,h,t,f;if(n)for(f=0;f<A;f+=1)o=e[f],h=_(o,f),t=g.get(h),t!==void 0&&((Y=t.a)==null||Y.measure(),v.add(t));for(f=0;f<A;f+=1){if(o=e[f],h=_(o,f),t=g.get(h),t===void 0){var w=u?u.e.nodes.start:a;c=ie(w,r,c,c===null?r.first:c.next,o,h,f,s,i),g.set(h,c),d=[],l=[],u=c.next;continue}if(b&&Se(t,o,f,i),t.e.f&pe&&(ae(t.e),n&&((q=t.a)==null||q.unfix(),v.delete(t))),t!==u){if(p.has(t)){if(d.length<l.length){var C=l[0],T;c=C.prev;var B=d[0],M=d[d.length-1];for(T=0;T<d.length;T+=1)Z(d[T],C,a);for(T=0;T<l.length;T+=1)p.delete(l[T]);y(r,B.prev,M.next),y(r,c,B),y(r,M,C),u=C,c=M,f-=1,d=[],l=[]}else p.delete(t),Z(t,u,a),y(r,t.prev,t.next),y(r,t,c===null?r.first:c.next),y(r,c,t),c=t;continue}for(d=[],l=[];u!==null&&u.k!==h;)p.add(u),l.push(u),u=u.next;if(u===null)continue;t=u}d.push(t),c=t,u=t.next}const R=Array.from(p);for(;u!==null;)R.push(u),u=u.next;var k=R.length;if(k>0){var te=i&m&&A===0?a:null;if(n){for(f=0;f<k;f+=1)(F=R[f].a)==null||F.measure();for(f=0;f<k;f+=1)(U=R[f].a)==null||U.fix()}we(r,R,te,g)}n&&$(()=>{var X;for(t of v)(X=t.a)==null||X.apply()}),W.first=r.first&&r.first.e,W.last=c&&c.e}function Se(e,r,a,s){s&H&&Q(e.v,r),s&P?Q(e.i,a):e.i=a}function ie(e,r,a,s,i,_,n,b,A){var g=L;try{var E=(A&H)!==0,u=(A&oe)===0,p=E?u?Ne(i):J(i):i,c=A&P?J(n):n,v={i:c,v:p,k:_,a:null,e:null,prev:a,next:s};return L=v,v.e=V(()=>b(e,p,c),N),v.e.prev=a&&a.e,v.e.next=s&&s.e,a===null?r.first=v:(a.next=v,a.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{L=g}}function Z(e,r,a){for(var s=e.next?e.next.e.nodes.start:a,i=r?r.e.nodes.start:a,_=e.e.nodes.start;_!==s;){var n=_.nextSibling;i.before(_),_=n}}function y(e,r,a){r===null?e.first=a:(r.next=a,r.e.next=a&&a.e),a!==null&&(a.prev=r,a.e.prev=r&&r.e)}function Ue(e,r,...a){var s=e,i,_;re(()=>{i!==(i=r())&&(_&&(se(_),_=null),i&&(_=V(()=>i(s,...a))))},ye),N&&(s=I)}function Me(e,r){if(r){const a=document.body;e.autofocus=!0,$(()=>{document.activeElement===a&&e.focus()})}}function Xe(e){N&&e.firstChild!==null&&ee(e)}let x=!1;function ke(){x||(x=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function ze(e){if(N){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var s=e.value;S(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var i=e.checked;S(e,"checked",null),e.checked=i}}};e.__on_r=a,Ie(a),ke()}}function Ge(e,r){var a=e.__attributes??(e.__attributes={});a.value!==(a.value=r)&&(e.value=r)}function S(e,r,a,s){a=a==null?null:a+"";var i=e.__attributes??(e.__attributes={});N&&(i[r]=e.getAttribute(r),r==="src"||r==="href"||r==="srcset")||i[r]!==(i[r]=a)&&(r==="loading"&&(e[Ce]=a),a===null?e.removeAttribute(r):e.setAttribute(r,a))}function Oe(e,r,a){if(r in e){var s=e[r],i=typeof s=="boolean"&&a===""?!0:a;(typeof s!="object"||s!==i)&&(e[r]=i)}else S(e,r,a)}function De(e,r,a,s,i=!1,_){var n=r||{},b=e.tagName==="OPTION";for(var A in r)A in a||(a[A]=null);s!==void 0&&(a.class=a.class?a.class+" "+s:s);var g=j.get(e.nodeName);g||j.set(e.nodeName,g=Pe(e));var E=e.__attributes??(e.__attributes={}),u=[];for(const l in a){let o=a[l];if(b&&l==="value"&&o==null){e.value=e.__value="",n[l]=o;continue}var p=n[l];if(o!==p){n[l]=o;var c=l[0]+l[1];if(c!=="$$")if(c==="on"){const h={},t="$$"+l;let f=l.slice(2);var v=ge(f);if(_e(f)&&(f=f.slice(0,-7),h.capture=!0),!v&&p){if(o!=null)continue;e.removeEventListener(f,n[t],h),n[t]=null}if(o!=null)if(v)e[`__${f}`]=o,ve([f]);else{let w=function(C){n[l].call(this,C)};r?n[t]=G(f,e,w,h):u.push([l,o,()=>n[t]=G(f,e,w,h)])}}else if(o==null)E[l]=null,e.removeAttribute(l);else if(l==="style")e.style.cssText=o+"";else if(l==="autofocus")Me(e,!!o);else if(l==="__value"||l==="value")e.value=e[l]=e.__value=o;else{var d=l;i||(d=de(d)),g.includes(d)?N&&(d==="src"||d==="href"||d==="srcset")||(e[d]=o):typeof o!="function"&&S(e,d,o)}}}return r||$(()=>{if(e.isConnected)for(const[l,o,h]of u)n[l]===o&&h()}),n}function We(e,r,a,s){if(e.tagName.includes("-")){for(var i in r)i in a||(a[i]=null);s!==void 0&&(a.class=a.class?a.class+" "+s:s);for(i in a)Oe(e,i,a[i]);return a}return De(e,r,a,s,e.namespaceURI!==he)}var He=["width","height","draggable"],j=new Map;function Pe(e){for(var r=[],a,s=K(e);s.constructor.name!=="Element";){a=Re(s);for(var i in a)a[i].set&&!He.includes(i)&&r.push(i);s=K(s)}return r}function Qe(e,r){var a=e.__className,s=Ve(r);N&&e.className===s?e.__className=s:(a!==s||N&&e.className!==s)&&(r==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function Ve(e){return e??""}function Je(e,r,a){if(a){if(e.classList.contains(r))return;e.classList.add(r)}else{if(!e.classList.contains(r))return;e.classList.remove(r)}}export{Ye as a,S as b,L as c,De as d,Fe as e,ke as f,We as g,Qe as h,qe as i,Xe as j,Ge as k,ze as r,Ue as s,Je as t};
