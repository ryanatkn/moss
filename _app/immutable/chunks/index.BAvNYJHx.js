import{E as O,ag as R,ah as q,l as z,A as L,u as M,ai as U,q as j,af as g,aj as B,ak as P,al as W}from"./runtime.DvazHU5t.js";import{b as G}from"./render.Cpb4M2J0.js";const K=requestAnimationFrame,D=()=>performance.now(),h={tick:a=>K(a),now:()=>D(),tasks:new Set};function C(a){h.tasks.forEach(t=>{t.c(a)||(h.tasks.delete(t),t.f())}),h.tasks.size!==0&&h.tick(C)}function H(a){let t;return h.tasks.size===0&&h.tick(C),{promise:new Promise(r=>{h.tasks.add(t={c:a,f:r})}),abort(){h.tasks.delete(t)}}}function F(a,t){a.dispatchEvent(new CustomEvent(t))}function J(a){const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function N(a){const t={},r=a.split(";");for(const e of r){const[u,n]=e.split(":");if(!u||n===void 0)break;const p=J(u.trim());t[p]=n.trim()}return t}const Q=a=>a;function Y(a,t,r,e){var u=(a&P)!==0,n=(a&W)!==0,p=u&&n,l=(a&B)!==0,$=p?"both":u?"in":"out",c,s=t.inert,f,o;function y(){return c??(c=r()(t,(e==null?void 0:e())??{},{direction:$}))}var m={is_global:l,in(){var _;if(t.inert=s,!u){o==null||o.abort(),(_=o==null?void 0:o.reset)==null||_.call(o);return}n||f==null||f.abort(),F(t,"introstart"),f=T(t,y(),o,1,()=>{F(t,"introend"),f==null||f.abort(),f=c=void 0})},out(_){if(!n){_==null||_(),c=void 0;return}t.inert=!0,F(t,"outrostart"),o=T(t,y(),f,0,()=>{F(t,"outroend"),_==null||_()})},stop:()=>{f==null||f.abort(),o==null||o.abort()}},d=L;if((d.transitions??(d.transitions=[])).push(m),u&&G){var v=l;if(!v){for(var i=d.parent;i&&i.f&O;)for(;(i=i.parent)&&!(i.f&R););v=!i||(i.f&q)!==0}v&&z(()=>{M(()=>m.in())})}}function T(a,t,r,e,u){var n=e===1;if(U(t)){var p,l=!1;return j(()=>{if(!l){var v=t({direction:n?"in":"out"});p=T(a,v,r,e,u)}}),{abort:()=>{l=!0,p==null||p.abort()},deactivate:()=>p.deactivate(),reset:()=>p.reset(),t:()=>p.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return u(),{abort:g,deactivate:g,reset:g,t:()=>e};const{delay:$=0,css:c,tick:s,easing:f=Q}=t;var o=[];if(n&&r===void 0&&(s&&s(0,1),c)){var y=N(c(0,1));o.push(y,y)}var m=()=>1-e,d=a.animate(o,{duration:$});return d.onfinish=()=>{var v=(r==null?void 0:r.t())??1-e;r==null||r.abort();var i=e-v,_=t.duration*Math.abs(i),x=[];if(_>0){if(c)for(var E=Math.ceil(_/16.666666666666668),w=0;w<=E;w+=1){var k=v+i*f(w/E),I=c(k,1-k);x.push(N(I))}m=()=>{var b=d.currentTime;return v+i*f(b/_)},s&&H(()=>{if(d.playState!=="running")return!1;var b=m();return s(b,1-b),!0})}d=a.animate(x,{duration:_,fill:"forwards"}),d.onfinish=()=>{m=()=>e,s==null||s(e,1-e),u()}},{abort:()=>{d&&(d.cancel(),d.effect=null)},deactivate:()=>{u=g},reset:()=>{e===0&&(s==null||s(1,0))},t:()=>m()}}function S(a){const t=a-1;return t*t*t+1}function A(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function Z(a,{delay:t=0,duration:r=400,easing:e=S,x:u=0,y:n=0,opacity:p=0}={}){const l=getComputedStyle(a),$=+l.opacity,c=l.transform==="none"?"":l.transform,s=$*(1-p),[f,o]=A(u),[y,m]=A(n);return{delay:t,duration:r,easing:e,css:(d,v)=>`
			transform: ${c} translate(${(1-d)*f}${o}, ${(1-d)*y}${m});
			opacity: ${$-s*v}`}}function tt(a,{delay:t=0,duration:r=400,easing:e=S,axis:u="y"}={}){const n=getComputedStyle(a),p=+n.opacity,l=u==="y"?"height":"width",$=parseFloat(n[l]),c=u==="y"?["top","bottom"]:["left","right"],s=c.map(i=>`${i[0].toUpperCase()}${i.slice(1)}`),f=parseFloat(n[`padding${s[0]}`]),o=parseFloat(n[`padding${s[1]}`]),y=parseFloat(n[`margin${s[0]}`]),m=parseFloat(n[`margin${s[1]}`]),d=parseFloat(n[`border${s[0]}Width`]),v=parseFloat(n[`border${s[1]}Width`]);return{delay:t,duration:r,easing:e,css:i=>`overflow: hidden;opacity: ${Math.min(i*20,1)*p};${l}: ${i*$}px;padding-${c[0]}: ${i*f}px;padding-${c[1]}: ${i*o}px;margin-${c[0]}: ${i*y}px;margin-${c[1]}: ${i*m}px;border-${c[0]}-width: ${i*d}px;border-${c[1]}-width: ${i*v}px;`}}export{Z as f,tt as s,Y as t};
