import{c as he,a as o,t as d,b as _e,j as Fe}from"../chunks/disclose-version.D3R_asnC.js";import{p as Pe,f as N,c as r,r as a,t as K,o as t,a as Ae,s as e,v as R,ag as B,K as I,n as H}from"../chunks/runtime.C8Pux0DW.js";import{s as Ee}from"../chunks/render.DO8eBapu.js";import{i as ve,p as He}from"../chunks/if.BJuFYGD9.js";import{a as ge,s as xe,e as we,d as D,r as O,j as Ne,t as X,i as Re}from"../chunks/class.C4NhCvp4.js";import{s as Z}from"../chunks/style.Bk7ejTAN.js";import{t as ke,f as ye}from"../chunks/index.z_6Uw5Mv.js";import{b as be,a as $e,c as We}from"../chunks/input.KYGUYBlb.js";import{C as k}from"../chunks/Code.C21nr9Lv.js";import{p as Ce}from"../chunks/props.BeRCdfH9.js";import{T as Ie}from"../chunks/Tome_Content.nAsulf2o.js";import{M as pe}from"../chunks/Mdn_Link.pLw824Wt.js";import{d as Se}from"../chunks/tome.JzzRwLwL.js";import{T as de,a as ce}from"../chunks/Tome_Section_Header.BJYm97VD.js";import{U as Te}from"../chunks/Unfinished_Implementation_Warning.CTrSNsje.js";const Me={inform:{color:"var(--text_color_3)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var Ue=d('<div class="icon svelte-tarwjh"><!></div>'),Be=d('<!> <div class="content svelte-tarwjh"><!></div>',1),Oe=d("<button><!></button>"),Ye=d("<div><!></div>");function ze(q,l){Pe(l,!0);const ee=W=>{var s=Be(),g=N(s);ve(g,()=>l.icon!==null,me=>{var Y=Ue(),le=r(Y);ve(le,()=>!l.icon||typeof l.icon=="string",z=>{var C=_e();K(()=>Ee(C,t(G))),o(z,C)},z=>{var C=he(),ne=N(C);xe(ne,()=>l.icon,()=>t(G)),o(z,C)}),a(Y),o(me,Y)});var P=e(g,2),ue=r(P);xe(ue,()=>l.children),a(P),o(W,s)},fe=Ce(l,"status",3,"inform"),te=R(()=>Me[fe()]),ae=R(()=>t(te).color),_=R(()=>t(te).icon),re=R(()=>l.color??t(ae)),G=R(()=>typeof l.icon=="string"?l.icon:t(_)??Me.inform.icon);var J=he(),oe=N(J);ve(oe,()=>l.onclick,W=>{var s=Oe();let g;var P=r(s);ee(P),a(s),K(()=>{g=ge(s,g,{class:"message",type:"button",onclick:l.onclick,disabled:l.disabled,...l.attrs},"svelte-tarwjh"),Z(s,"--text_color",t(re),void 0,!0)}),o(W,s)},W=>{var s=Ye();let g;var P=r(s);ee(P),a(s),K(()=>{g=ge(s,g,{role:"alert",class:"message panel",...l.attrs},"svelte-tarwjh"),Z(s,"--text_color",t(re),void 0,!0)}),o(W,s)}),o(q,J),Ae()}var De=d("<!> with a <!>",1),Ke=d("<option> </option>"),qe=(q,l)=>I(l,!0),Ge=(q,l)=>I(l,!1),Je=d('<form><!> <button type="button" class="w_100">undo undo!</button></form>'),Qe=d(`<!> <!> <div class="width_sm"><form><fieldset><legend>This is a <!></legend> <label><div class="title">username</div> <input placeholder=">"></label> <label><div class="title">password</div> <input type="password" placeholder=">"></label> <p>More info can be included in <code></code> tags like this one. Here we could include
						info about passwords.</p> <label><div class="title">lifestory</div> <textarea placeholder="👀"></textarea></label> <label><div class="title">select</div> <select class="text_align_center size_xl5"></select></label> <button type="button">create account</button></fieldset></form> <!></div>`,1),Ve=d("<code>form</code> with range input",1),Xe=d('<!> <form><fieldset><!> <input type="range"></fieldset> <fieldset><!> <input type="range" disabled></fieldset></form>',1),Ze=d("<code>form</code> with checkboxes",1),et=d('<!> <!> <form><fieldset><label class="row"><input type="checkbox"> <!></label> <label class="row"><input type="checkbox"> <!></label> <label class="row disabled"><input type="checkbox" disabled> <!> (disabled)</label> <label class="row disabled"><input type="checkbox" checked disabled> <!> (disabled)</label></fieldset></form> <aside>The above are wrapped with: <!> with <code>.disabled</code> as needed: <!></aside>',1),tt=d("<code>form</code> with radio inputs",1),at=d('<label class="row"><input type="radio"> <!></label>'),rt=d('<!> <form><fieldset><!> <label class="row disabled"><input type="radio" disabled> <!></label> <label class="row disabled selected"><input type="radio" checked disabled> <!></label></fieldset></form>',1),ot=d("<!> <!> <!> <!> <!>",1);function wt(q,l){Pe(l,!0);const ee=[],te=Se("forms"),ae=91;let _=B(!1);const re=["😊","😑","🤔","😉"];let G=B(""),J=B(""),oe=B("");const W=["a radio input","another radio input"];let s=B(He(W[0])),g=B(!1),P=B(!0);Ie(q,{tome:te,children:(ue,me)=>{var Y=ot(),le=N(Y);Te(le,{children:(j,se)=>{H();var b=_e("Forms need more work.");o(j,b)},$$slots:{default:!0}});var z=e(le,2);de(z,{children:(j,se)=>{var b=Qe(),y=N(b);ce(y,{text:"form with a fieldset",children:(c,n)=>{var h=De(),M=N(h);pe(M,{path:"Web/HTML/Element/form"});var V=e(M,2);pe(V,{path:"Web/HTML/Element/fieldset"}),o(c,h)},$$slots:{default:!0}});var $=e(y,2);k($,{content:`<form>
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
</form>`});var p=e($,2),x=r(p),v=r(x),f=r(v),A=e(r(f));pe(A,{path:"Web/HTML/Element/legend"}),a(f);var w=e(f,2),m=e(r(w),2);O(m),a(w);var i=e(w,2),u=e(r(i),2);O(u),a(i);var F=e(i,2),T=e(r(F));T.textContent="<p>",H(),a(F);var E=e(F,2),S=e(r(E),2);Ne(S),a(E);var L=e(E,2),U=e(r(L),2);we(U,20,()=>re,c=>c,(c,n)=>{var h=Ke(),M={},V=r(h);a(h),K(()=>{M!==(M=n)&&(h.value=(h.__value=n)==null?"":n),Ee(V,n)}),o(c,h)}),a(U),a(L);var Q=e(L,2);Q.__click=[qe,_],a(v),a(x);var ie=e(x,2);ve(ie,()=>t(_),c=>{var n=Je(),h=r(n);ze(h,{status:"error",children:(V,lt)=>{H();var je=_e("cannot create account because this library is fake");o(V,je)},$$slots:{default:!0}});var M=e(h,2);M.__click=[Ge,_],a(n),ke(1,n,()=>ye,()=>({y:-100,duration:ae})),ke(2,n,()=>ye,()=>({y:100,duration:ae})),o(c,n)}),a(p),K(()=>{X(w,"disabled",t(_)),m.disabled=t(_),X(i,"disabled",t(_)),u.disabled=t(_),X(E,"disabled",t(_)),S.disabled=t(_),X(L,"disabled",t(_)),U.disabled=t(_),Q.disabled=t(_)}),be(m,()=>t(G),c=>I(G,c)),be(u,()=>t(J),c=>I(J,c)),be(S,()=>t(oe),c=>I(oe,c)),o(j,b)},$$slots:{default:!0}});var C=e(z,2);de(C,{children:(j,se)=>{var b=Xe(),y=N(b);ce(y,{text:"form with range input",children:(m,i)=>{var u=Ve();H(),o(m,u)},$$slots:{default:!0}});var $=e(y,2),p=r($),x=r(p);k(x,{content:'<input type="range" />'});var v=e(x,2);D(v,"step",1),D(v,"min",0),D(v,"max",100),a(p);var f=e(p,2),A=r(f);k(A,{content:'<input type="range" disabled />'});var w=e(A,2);D(w,"step",1),D(w,"min",0),D(w,"max",100),a(f),a($),o(j,b)},$$slots:{default:!0}});var ne=e(C,2);de(ne,{children:(j,se)=>{var b=et(),y=N(b);ce(y,{text:"form with checkboxes",children:(n,h)=>{var M=Ze();H(),o(n,M)},$$slots:{default:!0}});var $=e(y,2);Te($,{children:(n,h)=>{H();var M=_e("This will change, probably to toggles.");o(n,M)},$$slots:{default:!0}});var p=e($,2),x=r(p),v=r(x),f=r(v);O(f),Z(f,"margin-right","var(--space_lg)");var A=e(f,2),w=R(()=>`<input type="checkbox" ${t(g)?"checked ":""}/>`);k(A,{get content(){return t(w)}}),a(v);var m=e(v,2),i=r(m);O(i),Z(i,"margin-right","var(--space_lg)");var u=e(i,2),F=R(()=>`<input type="checkbox" ${t(P)?"checked ":""}/>`);k(u,{get content(){return t(F)}}),a(m);var T=e(m,2),E=r(T);Z(E,"margin-right","var(--space_lg)");var S=e(E,2);k(S,{content:'<input type="checkbox" disabled />'}),H(),a(T);var L=e(T,2);O(L);var U=e(r(L),2);k(U,{content:'<input type="checkbox" checked disabled />'}),H(),a(L),a(x),a(p);var Q=e(p,2),ie=e(r(Q));k(ie,{content:'<label class="row">'});var c=e(ie,4);k(c,{content:'<label class="row disabled">'}),a(Q),$e(f,()=>t(g),n=>I(g,n)),$e(i,()=>t(P),n=>I(P,n)),o(j,b)},$$slots:{default:!0}});var Le=e(ne,2);de(Le,{children:(j,se)=>{var b=rt(),y=N(b);ce(y,{text:"form with radio inputs",children:(m,i)=>{var u=tt();H(),o(m,u)},$$slots:{default:!0}});var $=e(y,2),p=r($),x=r(p);we(x,17,()=>W,Re,(m,i)=>{var u=at();const F=R(()=>t(i)===t(s));var T=r(u);O(T);var E,S=e(T,2),L=R(()=>`<label class="row${t(F)?" selected":""}">
	<input type="radio" ${t(F)?"checked":""}/>
</label>`);k(S,{get content(){return t(L)}}),a(u),K(()=>{X(u,"selected",t(F)),E!==(E=t(i))&&(T.value=(T.__value=t(i))==null?"":t(i))}),We(ee,[],T,()=>(t(i),t(s)),U=>I(s,U)),o(m,u)});var v=e(x,2),f=e(r(v),2);k(f,{content:`<label class="row">
	<input type="radio" disabled />
</label>`}),a(v);var A=e(v,2);O(A);var w=e(r(A),2);k(w,{content:`<label class="row">
	<input type="radio" checked disabled />
</label>`}),a(A),a(p),a($),o(j,b)},$$slots:{default:!0}}),o(ue,Y)},$$slots:{default:!0}}),Ae()}Fe(["click"]);export{wt as component};
