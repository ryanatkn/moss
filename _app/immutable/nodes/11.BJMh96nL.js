import{c as xe,a as o,t as c,b as be,k as Ne,z as Re}from"../chunks/BbIkhJBN.js";import{l as Ee,f as W,k as Le,e as r,r as a,j as q,s as e,m as t,o as C,a2 as z,J as U,n as R}from"../chunks/BBqbn4le.js";import{s as He}from"../chunks/BKKU8ObJ.js";import{a as pe,p as We}from"../chunks/CWijoqCz.js";import{s as ke,a as we,e as ye,b as J,r as B,i as Ce,t as ee}from"../chunks/B8uKRImT.js";import{s as te}from"../chunks/PwPRnE0L.js";import{t as $e,f as Te}from"../chunks/CNIWm5VX.js";import{b as me,a as Me,c as Ie}from"../chunks/CpHJcmrn.js";import{C as $}from"../chunks/CuoVY8Wq.js";import{p as Se}from"../chunks/ZFnGVk1t.js";import{T as Ue}from"../chunks/ByQOCBuW.js";import{M as he}from"../chunks/DknE4yQY.js";import{g as ze}from"../chunks/_fNHN2kW.js";import{T as ve,a as ue}from"../chunks/CI7u2B-h.js";import{U as Pe}from"../chunks/Q26B9bUK.js";const Ae={inform:{color:"var(--text_color_3)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var Be=c('<div class="icon svelte-tarwjh"><!></div>'),Fe=c('<!> <div class="content svelte-tarwjh"><!></div>',1),Oe=c("<button><!></button>"),Ye=c("<div><!></div>");function De(G,l){Ee(l,!0);const ae=k=>{var i=Fe(),L=W(i);{var F=O=>{var Y=Be(),de=r(Y);{var fe=M=>{var s=be();q(()=>He(s,t(K))),o(M,s)},T=M=>{var s=xe(),p=W(s);ke(p,()=>l.icon,()=>t(K)),o(M,s)};pe(de,M=>{!l.icon||typeof l.icon=="string"?M(fe):M(T,!1)})}a(Y),o(O,Y)};pe(L,O=>{l.icon!==null&&O(F)})}var X=e(L,2),ie=r(X);ke(ie,()=>l.children),a(X),o(k,i)},ge=Se(l,"status",3,"inform"),re=C(()=>Ae[ge()]),oe=C(()=>t(re).color),_=C(()=>t(re).icon),le=C(()=>l.color??t(oe)),K=C(()=>typeof l.icon=="string"?l.icon:t(_)??Ae.inform.icon);var Q=xe(),se=W(Q);{var ne=k=>{var i=Oe();let L;var F=r(i);ae(F),a(i),q(()=>{L=we(i,L,{class:"message",type:"button",onclick:l.onclick,disabled:l.disabled,...l.attrs},"svelte-tarwjh"),te(i,"--text_color",t(le))}),o(k,i)},V=k=>{var i=Ye();let L;var F=r(i);ae(F),a(i),q(()=>{L=we(i,L,{role:"alert",class:"message panel",...l.attrs},"svelte-tarwjh"),te(i,"--text_color",t(le))}),o(k,i)};pe(se,k=>{l.onclick?k(ne):k(V,!1)})}o(G,Q),Le()}var Je=c("<!> with a <!>",1),qe=c("<option> </option>"),Ge=(G,l)=>U(l,!0),Ke=(G,l)=>U(l,!1),Qe=c('<form><!> <button type="button" class="w_100">undo undo!</button></form>'),Ve=c(`<!> <!> <div class="width_sm"><form><fieldset><legend>This is a <!></legend> <label><div class="title">username</div> <input placeholder=">"></label> <label><div class="title">password</div> <input type="password" placeholder=">"></label> <p>More info can be included in <code></code> tags like this one. Here we could include
						info about passwords.</p> <label><div class="title">lifestory</div> <textarea placeholder="👀"></textarea></label> <label><div class="title">select</div> <select class="text_align_center size_xl5"></select></label> <button type="button">create account</button></fieldset></form> <!></div>`,1),Xe=c("<code>form</code> with range input",1),Ze=c('<!> <form><fieldset><!> <input type="range"></fieldset> <fieldset><!> <input type="range" disabled></fieldset></form>',1),et=c("<code>form</code> with checkboxes",1),tt=c('<!> <!> <form><fieldset><label class="row"><input type="checkbox"> <!></label> <label class="row"><input type="checkbox"> <!></label> <label class="row disabled"><input type="checkbox" disabled> <!> (disabled)</label> <label class="row disabled"><input type="checkbox" checked disabled> <!> (disabled)</label></fieldset></form> <aside>The above are wrapped with: <!> with <code>.disabled</code> as needed: <!></aside>',1),at=c("<code>form</code> with radio inputs",1),rt=c('<label class="row"><input type="radio"> <!></label>'),ot=c('<!> <form><fieldset><!> <label class="row disabled"><input type="radio" disabled> <!></label> <label class="row disabled selected"><input type="radio" checked disabled> <!></label></fieldset></form>',1),lt=c("<!> <!> <!> <!> <!>",1);function wt(G,l){Ee(l,!0);const ae=[],re=ze("forms"),oe=91;let _=z(!1);const le=["😊","😑","🤔","😉"];let K=z(""),Q=z(""),se=z("");const ne=["a radio input","another radio input"];let V=z(We(ne[0])),k=z(!1),i=z(!0);Ue(G,{tome:re,children:(L,F)=>{var X=lt(),ie=W(X);Pe(ie,{children:(T,M)=>{R();var s=be("Forms need more work.");o(T,s)},$$slots:{default:!0}});var O=e(ie,2);ve(O,{children:(T,M)=>{var s=Ve(),p=W(s);ue(p,{text:"form with a fieldset",children:(d,n)=>{var x=Je(),E=W(x);he(E,{path:"Web/HTML/Element/form"});var Z=e(E,2);he(Z,{path:"Web/HTML/Element/fieldset"}),o(d,x)},$$slots:{default:!0}});var P=e(p,2);$(P,{content:`<form>
	<fieldset>
		<legend>
			a <Mdn_Link path="Web/HTML/Element/legend" />
		</legend>
		<label>
			<div class="title">
				username
			</div>
			<input
				bind:value={username}
				placeholder=">"
			/>
		</label>
		...
	</fieldset>
	...
</form>`});var f=e(P,2),w=r(f),v=r(w),m=r(v),H=e(r(m));he(H,{path:"Web/HTML/Element/legend"}),a(m);var h=e(m,2),A=e(r(h),2);B(A),a(h);var u=e(h,2),b=e(r(u),2);B(b),a(u);var y=e(u,2),j=e(r(y));j.textContent="<p>",R(),a(y);var g=e(y,2),I=e(r(g),2);Re(I),a(g);var N=e(g,2),S=e(r(N),2);ye(S,20,()=>le,d=>d,(d,n)=>{var x=qe(),E={},Z=r(x,!0);a(x),q(()=>{E!==(E=n)&&(x.value=(x.__value=n)==null?"":n),He(Z,n)}),o(d,x)}),a(S),a(N);var D=e(N,2);D.__click=[Ge,_],a(v),a(w);var ce=e(w,2);{var _e=d=>{var n=Qe(),x=r(n);De(x,{status:"error",children:(Z,st)=>{R();var je=be("cannot create account because this library is fake");o(Z,je)},$$slots:{default:!0}});var E=e(x,2);E.__click=[Ke,_],a(n),$e(1,n,()=>Te,()=>({y:-100,duration:oe})),$e(2,n,()=>Te,()=>({y:100,duration:oe})),o(d,n)};pe(ce,d=>{t(_)&&d(_e)})}a(f),q(()=>{ee(h,"disabled",t(_)),A.disabled=t(_),ee(u,"disabled",t(_)),b.disabled=t(_),ee(g,"disabled",t(_)),I.disabled=t(_),ee(N,"disabled",t(_)),S.disabled=t(_),D.disabled=t(_)}),me(A,()=>t(K),d=>U(K,d)),me(b,()=>t(Q),d=>U(Q,d)),me(I,()=>t(se),d=>U(se,d)),o(T,s)},$$slots:{default:!0}});var Y=e(O,2);ve(Y,{children:(T,M)=>{var s=Ze(),p=W(s);ue(p,{text:"form with range input",children:(A,u)=>{var b=Xe();R(),o(A,b)},$$slots:{default:!0}});var P=e(p,2),f=r(P),w=r(f);$(w,{content:'<input type="range" />'});var v=e(w,2);J(v,"step",1),J(v,"min",0),J(v,"max",100),a(f);var m=e(f,2),H=r(m);$(H,{content:'<input type="range" disabled />'});var h=e(H,2);J(h,"step",1),J(h,"min",0),J(h,"max",100),a(m),a(P),o(T,s)},$$slots:{default:!0}});var de=e(Y,2);ve(de,{children:(T,M)=>{var s=tt(),p=W(s);ue(p,{text:"form with checkboxes",children:(n,x)=>{var E=et();R(),o(n,E)},$$slots:{default:!0}});var P=e(p,2);Pe(P,{children:(n,x)=>{R();var E=be("This will change, probably to toggles.");o(n,E)},$$slots:{default:!0}});var f=e(P,2),w=r(f),v=r(w),m=r(v);B(m),te(m,"margin-right","var(--space_lg)");var H=e(m,2);const h=C(()=>`<input type="checkbox" ${t(k)?"checked ":""}/>`);$(H,{get content(){return t(h)}}),a(v);var A=e(v,2),u=r(A);B(u),te(u,"margin-right","var(--space_lg)");var b=e(u,2);const y=C(()=>`<input type="checkbox" ${t(i)?"checked ":""}/>`);$(b,{get content(){return t(y)}}),a(A);var j=e(A,2),g=r(j);te(g,"margin-right","var(--space_lg)");var I=e(g,2);$(I,{content:'<input type="checkbox" disabled />'}),R(),a(j);var N=e(j,2),S=r(N);B(S);var D=e(S,2);$(D,{content:'<input type="checkbox" checked disabled />'}),R(),a(N),a(w),a(f);var ce=e(f,2),_e=e(r(ce));$(_e,{content:'<label class="row">'});var d=e(_e,4);$(d,{content:'<label class="row disabled">'}),a(ce),Me(m,()=>t(k),n=>U(k,n)),Me(u,()=>t(i),n=>U(i,n)),o(T,s)},$$slots:{default:!0}});var fe=e(de,2);ve(fe,{children:(T,M)=>{var s=ot(),p=W(s);ue(p,{text:"form with radio inputs",children:(u,b)=>{var y=at();R(),o(u,y)},$$slots:{default:!0}});var P=e(p,2),f=r(P),w=r(f);ye(w,17,()=>ne,Ce,(u,b)=>{var y=rt();const j=C(()=>t(b)===t(V));var g=r(y);B(g);var I,N=e(g,2);const S=C(()=>`<label class="row${t(j)?" selected":""}">
	<input type="radio" ${t(j)?"checked":""}/>
</label>`);$(N,{get content(){return t(S)}}),a(y),q(()=>{ee(y,"selected",t(j)),I!==(I=t(b))&&(g.value=(g.__value=t(b))==null?"":t(b))}),Ie(ae,[],g,()=>(t(b),t(V)),D=>U(V,D)),o(u,y)});var v=e(w,2),m=e(r(v),2);$(m,{content:`<label class="row">
	<input type="radio" disabled />
</label>`}),a(v);var H=e(v,2),h=r(H);B(h);var A=e(h,2);$(A,{content:`<label class="row">
	<input type="radio" checked disabled />
</label>`}),a(H),a(f),a(P),o(T,s)},$$slots:{default:!0}}),o(L,X)},$$slots:{default:!0}}),Le()}Ne(["click"]);export{wt as component};
