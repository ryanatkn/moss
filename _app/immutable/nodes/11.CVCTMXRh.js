import{d as te,a as i,t as d,s as ze,f as $,c as t,k as xt,b as e,m as kt}from"../chunks/disclose-version.CV3ElF3D.js";import{p as Be,t as A,h as a,a as Ce,l as f,x as y,y as w,X as m}from"../chunks/runtime.C9BLlFkQ.js";import{p as yt}from"../chunks/proxy.Dxw38Qlp.js";import{p as Tt,i as O}from"../chunks/props.DMEd9I1P.js";import{s as Fe,b as He,g as Ne,a as M,r as T,h as Mt,i as $t}from"../chunks/attributes.CCxnytQ2.js";import{t as At}from"../chunks/class.BTBrs2Gn.js";import{s as N}from"../chunks/style.iv2mhl8q.js";import{t as Re,f as We}from"../chunks/index.CjorDTN9.js";import{b as Z,a as Ie,c as Et}from"../chunks/input.D4LgY_Gq.js";import{C as u}from"../chunks/Code.BWxoXet5.js";import{T as Lt}from"../chunks/Tome_Detail.Dl8_yrjT.js";import{M as ee}from"../chunks/Mdn_Link.CL_xDjjE.js";import{a as Pt}from"../chunks/tome.D1Gikq0z.js";import{T as D}from"../chunks/Tome_Subheading.B2RReK3M.js";import{U as jt}from"../chunks/Unfinished_Implementation_Warning.zwYCKLV1.js";const Ue={inform:{color:"var(--text_2)",icon:"✻"},help:{color:"var(--color_b_5)",icon:"➺"},error:{color:"var(--color_c_5)",icon:"!?"}};var Ft=d('<div class="icon svelte-tarwjh"><!></div>'),Ht=d('<!> <div class="content svelte-tarwjh"><!></div>',1),Nt=d("<button><!></button>"),Rt=d("<div><!></div>");function Wt(E,o){Be(o,!0);var R=_=>{var n=Ht(),b=$(n);O(b,()=>o.icon!==null,re=>{var H=Ft(),X=t(H);O(X,()=>!o.icon||typeof o.icon=="string",k=>{var h=xt(k);A(()=>ze(h,a(P))),i(k,h)},k=>{var h=te(),U=$(h);He(()=>o.icon,U,()=>a(P)),i(k,h)}),i(re,H)});var x=e(e(b,!0)),V=t(x);He(()=>o.children,V),i(_,n)};const ae=Tt(o,"status",3,"inform"),S=f(()=>Ue[ae()]),W=f(()=>a(S)),v=f(()=>{let{color:_,icon:n}=a(W);return[_,n]}),Y=f(()=>a(v)[0]),I=f(()=>a(v)[1]),L=f(()=>o.color??a(Y)),P=f(()=>typeof o.icon=="string"?o.icon:a(I)??Ue.inform.icon);var j=te(),F=$(j);O(F,()=>o.onclick,_=>{var n=Nt();let b;var x=t(n);R(x),A(()=>{b=Fe(n,b,{class:"message",type:"button",onclick:o.onclick,disabled:o.disabled,...o.attrs},!0,"svelte-tarwjh"),N(n,"--text_color",a(L))}),i(_,n)},_=>{var n=Rt();let b;var x=t(n);R(x),A(()=>{b=Fe(n,b,{role:"alert",class:"message panel",...o.attrs},!0,"svelte-tarwjh"),N(n,"--text_color",a(L))}),i(_,n)}),i(E,j),Ce()}var It=d("<!> with a <!>",1),Ut=d("<option> </option>"),zt=(E,o)=>w(o,!0),Bt=d("cannot create account because this library is fake",1),Ct=(E,o)=>w(o,!1),Dt=d('<form><!> <button type="button">undo undo!</button></form>'),Ot=d("<code>form</code> with range input",1),St=d("<code>form</code> with checkboxes",1),Yt=d("This will change, probably to toggles.",1),Vt=d("<code>form</code> with radio inputs",1),Xt=d('<label class="row"><input type="radio"> <!></label>'),qt=d(`<aside>forms need more work</aside> <section><!> <!> <div class="width_sm"><form><fieldset><legend>This is a <!></legend> <label><div class="title">username</div> <input placeholder=">"></label> <label><div class="title">password</div> <input type="password" placeholder=">"></label> <p>More info can be included in <code> </code> tags like this one. Here we could include
						info about passwords.</p> <label><div class="title">lifestory</div> <textarea placeholder="👀"></textarea></label> <label><div class="title">select</div> <select class="text_align_center" style="font-size: var(--size_xl5)"></select></label> <button type="button">create account</button></fieldset></form> <!></div></section> <section><!> <form><fieldset><!> <input type="range"></fieldset> <fieldset><!> <input type="range" disabled></fieldset></form></section> <section><!> <!> <form><fieldset><label class="row"><input type="checkbox"> <!></label> <label class="row"><input type="checkbox"> <!></label> <label class="row disabled"><input type="checkbox" disabled> <!> (disabled)</label> <label class="row disabled"><input type="checkbox" checked disabled> <!> (disabled)</label></fieldset></form> <aside>The above are wrapped with: <!> with <code>.disabled</code> as needed: <!></aside></section> <section><!> <form><fieldset><!> <label class="row disabled"><input type="radio" disabled> <!></label> <label class="row disabled selected"><input type="radio" checked disabled> <!></label></fieldset></form></section>`,1);function ca(E,o){Be(o,!0);const R=[],S=Pt("forms"),W=91;let v=y(!1);const Y=["😊","😑","🤔","😉"];let I=y(""),L=y(""),P=y("");const j=["a radio input","another radio input"];let F=y(yt(j[0])),_=y(!1),n=y(!0);var b=te(),x=$(b);Lt(x,{tome:S,children:(V,re)=>{var H=qt(),X=$(H),k=e(e(X,!0)),h=t(k);D(h,{text:"form with a fieldset",slug:"form-with-a-fieldset",children:(r,l)=>{var s=It(),c=$(s);ee(c,{href:"Web/HTML/Element/form"});var p=e(e(c,!0));ee(p,{href:"Web/HTML/Element/fieldset"}),i(r,s)},$$slots:{default:!0}});var U=e(e(h,!0));u(U,{content:`<form>
	<fieldset>
		<legend>
			a <Mdn_Link href="Web/HTML/Element/legend" />
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
</form>`});var De=e(e(U,!0)),oe=t(De),Oe=t(oe),le=t(Oe),Se=e(t(le));ee(Se,{href:"Web/HTML/Element/legend"});var ne=e(e(le,!0)),Ye=t(ne),q=e(e(Ye,!0));T(q);var ie=e(e(ne,!0)),Ve=t(ie),G=e(e(Ve,!0));T(G);var se=e(e(ie,!0)),Xe=e(t(se)),qe=t(Xe);qe.nodeValue="<p>";var de=e(e(se,!0)),Ge=t(de),J=e(e(Ge,!0));Mt(J);var ce=e(e(de,!0)),Je=t(ce),ue=e(e(Je,!0));Ne(ue,76,()=>Y,(r,l)=>m(r),(r,l,s)=>{var c=Ut(),p,g=t(c);A(()=>{p!==(p=m(l))&&(c.value=(c.__value=m(l))==null?"":m(l)),ze(g,m(l))}),i(r,c)});var ve=e(e(ce,!0));ve.__click=[zt,v];var Ke=e(e(oe,!0));O(Ke,()=>a(v),r=>{var l=Dt();Re(1,l,()=>We,()=>({y:-100,duration:W})),Re(2,l,()=>We,()=>({y:100,duration:W}));var s=t(l);Wt(s,{status:"error",children:(p,g)=>{var C=Bt();i(p,C)},$$slots:{default:!0}});var c=e(e(s,!0));c.__click=[Ct,v],i(r,l)});var _e=e(e(k,!0)),be=t(_e);D(be,{text:"form with range input",slug:"form-with-range-input",children:(r,l)=>{var s=Ot();i(r,s)},$$slots:{default:!0}});var Qe=e(e(be,!0)),fe=t(Qe),pe=t(fe);u(pe,{content:'<input type="range" />'});var K=e(e(pe,!0));M(K,"step",1),M(K,"min",0),M(K,"max",100);var Ze=e(e(fe,!0)),me=t(Ze);u(me,{content:'<input type="range" disabled />'});var Q=e(e(me,!0));M(Q,"step",1),M(Q,"min",0),M(Q,"max",100);var he=e(e(_e,!0)),ge=t(he);D(ge,{text:"form with checkboxes",slug:"form-with-checkboxes",children:(r,l)=>{var s=St();i(r,s)},$$slots:{default:!0}});var we=e(e(ge,!0));jt(we,{children:(r,l)=>{var s=Yt();i(r,s)},$$slots:{default:!0}});var xe=e(e(we,!0)),et=t(xe),ke=t(et),z=t(ke);T(z),N(z,"margin-right","var(--space_lg)");var tt=e(e(z,!0)),at=f(()=>`<input type="checkbox" ${a(_)?"checked ":""}/>`);u(tt,{get content(){return a(at)}});var ye=e(e(ke,!0)),B=t(ye);T(B),N(B,"margin-right","var(--space_lg)");var rt=e(e(B,!0)),ot=f(()=>`<input type="checkbox" ${a(n)?"checked ":""}/>`);u(rt,{get content(){return a(ot)}});var Te=e(e(ye,!0)),Me=t(Te);N(Me,"margin-right","var(--space_lg)");var lt=e(e(Me,!0));u(lt,{content:'<input type="checkbox" disabled />'});var nt=e(e(Te,!0)),$e=t(nt);T($e);var it=e(e($e,!0));u(it,{content:'<input type="checkbox" checked disabled />'});var st=e(e(xe,!0)),Ae=e(t(st));u(Ae,{content:'<label class="row">'});var dt=e(e(Ae,!0)),ct=e(e(dt,!0));u(ct,{content:'<label class="row disabled">'});var ut=e(e(he,!0)),Ee=t(ut);D(Ee,{text:"form with radio inputs",slug:"form-with-radio-inputs",children:(r,l)=>{var s=Vt();i(r,s)},$$slots:{default:!0}});var vt=e(e(Ee,!0)),_t=t(vt),Le=t(_t);Ne(Le,65,()=>j,$t,(r,l,s)=>{var c=Xt();const p=f(()=>m(l)===a(F));var g=t(c);T(g);var C,ht=e(e(g,!0)),gt=f(()=>`<label class="row${a(p)?" selected":""}">
	<input type="radio" ${a(p)?"checked":""}/>
</label>`);u(ht,{get content(){return a(gt)}}),A(()=>{At(c,"selected",a(p)),C!==(C=m(l))&&(g.value=(g.__value=m(l))==null?"":m(l))}),Et(R,[],g,()=>(m(l),a(F)),wt=>w(F,wt)),i(r,c)});var Pe=e(e(Le,!0)),bt=t(Pe),ft=e(e(bt,!0));u(ft,{content:`<label class="row">
	<input type="radio" disabled />
</label>`});var pt=e(e(Pe,!0)),je=t(pt);T(je);var mt=e(e(je,!0));u(mt,{content:`<label class="row">
	<input type="radio" checked disabled />
</label>`}),A(()=>{q.disabled=a(v),G.disabled=a(v),J.disabled=a(v),ue.disabled=a(v),ve.disabled=a(v)}),Z(q,()=>a(I),r=>w(I,r)),Z(G,()=>a(L),r=>w(L,r)),Z(J,()=>a(P),r=>w(P,r)),Ie(z,()=>a(_),r=>w(_,r)),Ie(B,()=>a(n),r=>w(n,r)),i(V,H)},$$slots:{default:!0}}),i(E,b),Ce()}kt(["click"]);export{ca as component};