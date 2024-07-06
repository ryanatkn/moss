import{d as z,a3 as G,a as u,f,b as p,t as E,a4 as I}from"../chunks/disclose-version.Dj_2BLBP.js";import{y as N,p as M,a as D,g as t,d as c,t as Q,D as j}from"../chunks/runtime.DKCg-osn.js";import{b as P,g as V}from"../chunks/attributes.BdgSbWfL.js";import{a as C,s as O}from"../chunks/string.ZJuK4sHN.js";import{p as o,i as H}from"../chunks/props.RUSqrPC9.js";import{h as L}from"../chunks/prism.D35eMsl2.js";import{s as W,a as q,l as B,b as J,d as K,e as X,T as Y,D as Z,r as $,f as aa,h as ea}from"../chunks/theme.svelte._llWn6oX.js";import{s as na}from"../chunks/style.iv2mhl8q.js";import{S as ia}from"../chunks/Spider.mZ5-2C10.js";import{s as la}from"../chunks/pkg.CfuFecmW.js";const _a=!0,Ea=Object.freeze(Object.defineProperty({__proto__:null,prerender:_a},Symbol.toStringTag,{value:"Module"})),da=(e,a,n)=>{const{name:_}=a,d=(g=>g?O(C(O(g,".git"),"git+"),"/"):null)(a.repository?typeof a.repository=="string"?a.repository:a.repository.url:null),s=a.homepage??null,l=!a.private&&!!a.exports&&a.version!=="0.0.1",r=l?"https://www.npmjs.com/package/"+a.name:null,m=l&&d?d+"/blob/main/CHANGELOG.md":null,v=sa(_),k=d?C(d,"https://github.com/").split("/")[0]:null;return{url:e,package_json:a,src_json:n,name:_,repo_name:v,repo_url:d,owner_name:k,homepage_url:s,npm_url:r,changelog_url:m,published:l}},sa=e=>e[0]==="@"?e.split("/")[1]:e,T=(e,a=1)=>{let n=!0,_=0;N(()=>{e(n),n&&++_>=a&&(n=!1)})};var ra=E("<!> <!>",1);function ta(e,a){M(a,!0);const n=o(a,"sync_color_scheme",3,q),_=o(a,"load_color_scheme",3,B),i=o(a,"save_color_scheme",3,J),d=o(a,"load_theme",3,K),s=o(a,"save_theme",3,X),l=o(a,"themer",11,()=>new Y(d()(a.theme_fallback),_()(a.color_scheme_fallback)));W(l());const r=c(()=>l().theme.name),m=c(()=>t(r)===Z.name?null:$(l().theme)),v=c(()=>t(m)?aa(t(m)):null),k=c(()=>ea(a.color_scheme_fallback));T(h=>{const b=l().color_scheme;h||n()(b)}),T(h=>{const b=l().color_scheme;h||i()(b)}),T(h=>{const b=l().theme;h||s()(b)});var g=z();G(h=>{var b=ra(),A=f(b);H(A,()=>t(v),x=>{var w=z(),y=f(w);L(y,()=>t(v),!1,!1),u(x,w)});var U=p(p(A,!0));H(U,()=>t(k),x=>{var w=z(),y=f(w);L(y,()=>t(k),!1,!1),u(x,w)}),u(h,b)});var R=f(g);P(R,()=>a.children,l,()=>t(m),()=>t(v),()=>t(k)),u(e,g),D()}const S=(e,a,n=Math.random)=>Math.floor(n()*(a-e+1))+e,ma=(e,a=S)=>{const{length:n}=e,_=n-1;for(let i=0;i<n;i++){const d=a(0,_);if(i===d)continue;const s=e[d];e[d]=e[i],e[i]=s}return e},oa=(...e)=>{let a=0,n=0,_=0,i=1;const d=e.length?e:[Date.now()];let s=ba();a=s(" "),n=s(" "),_=s(" ");for(const r of d)a-=s(r),a<0&&(a+=1),n-=s(r),n<0&&(n+=1),_-=s(r),_<0&&(_+=1);s=null;const l=()=>{const r=2091639*a+i*23283064365386963e-26;return a=n,n=_,_=r-(i=r|0)};return l.uint32=()=>l()*4294967296,l.fract53=()=>l()+(l()*2097152|0)*11102230246251565e-32,l.version="Alea 0.9",l.seeds=d,l},ba=()=>{let e=4022871197;return a=>{const n=a+"";for(let _=0;_<n.length;_++){e+=n.charCodeAt(_);let i=.02519603282416938*e;e=i>>>0,i-=e,i*=e,e=i>>>0,i-=e,e+=i*4294967296}return(e>>>0)*23283064365386963e-26}};var va=E('<div class="spiders svelte-eiv23e"></div>');const ka=()=>{const e=new Date;return e.getHours()*60+e.getMinutes()};function ha(e,a){M(a,!0);const n=o(a,"spiders",11,()=>["var(--color_a_5)","var(--color_b_5)","var(--color_c_5)","var(--color_d_5)","var(--color_e_5)","var(--color_f_5)","var(--color_g_5)"]),_=o(a,"seed",11,ka),i=o(a,"random",11,()=>oa(_())),d=c(()=>ma(n().slice(),(r,m)=>S(r,m,i()))),s=c(()=>t(d).map(()=>S(0,359,i())));var l=va();V(l,79,()=>t(d),(r,m)=>j(r),(r,m,v)=>{var k=c(()=>({style:`transform: rotate(${t(s)[j(v)]}deg)`}));ia(r,{get fill(){return j(m)},get attrs(){return t(k)}})}),Q(()=>na(l,"--width",`${100/n().length}%`)),u(e,l),D()}const F={name:"@ryanatkn/moss",version:"0.7.0",description:"CSS framework",motto:"magical organic stylesheets",glyph:"🌿",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",public:!0,license:"MIT",homepage:"https://moss.ryanatkn.com/",repository:"https://github.com/ryanatkn/moss",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/moss/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.2","@ryanatkn/eslint-config":"^0.4.0","@ryanatkn/fuz":"^0.108.2","@ryanatkn/fuz_code":"^0.15.1","@ryanatkn/gro":"^0.129.0","@sveltejs/adapter-static":"^3.0.2","@sveltejs/kit":"^2.5.18","@sveltejs/package":"^2.3.2","@sveltejs/vite-plugin-svelte":"^3.1.1","@types/node":"^20.14.10",eslint:"^9.6.0","eslint-plugin-svelte":"^2.41.0",prettier:"^3.3.2","prettier-plugin-svelte":"^3.2.5","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.175","svelte-check":"^3.8.4",tslib:"^2.6.3",typescript:"^5.5.3","typescript-eslint":"^8.0.0-alpha.39",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist"],exports:{"./package.json":"./package.json","./style_animations.css":{default:"./dist/style_animations.css"},"./style_components.css":{default:"./dist/style_components.css"},"./style_reset.css":{default:"./dist/style_reset.css"},"./style_utilities.css":{default:"./dist/style_utilities.css"},"./style.css":{default:"./dist/style.css"},"./style.gen.css.js":{types:"./dist/style.gen.css.d.ts",default:"./dist/style.gen.css.js"},"./theme.css":{default:"./dist/theme.css"},"./theme.gen.css.js":{types:"./dist/theme.gen.css.d.ts",default:"./dist/theme.gen.css.js"},"./theme.js":{types:"./dist/theme.d.ts",default:"./dist/theme.js"},"./themes.js":{types:"./dist/themes.d.ts",default:"./dist/themes.js"},"./variable_data.js":{types:"./dist/variable_data.d.ts",default:"./dist/variable_data.js"},"./variables.js":{types:"./dist/variables.d.ts",default:"./dist/variables.js"}}},ca={name:"@ryanatkn/moss",version:"0.7.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./style_animations.css":{path:"style_animations.css",declarations:[]},"./style_components.css":{path:"style_components.css",declarations:[]},"./style_reset.css":{path:"style_reset.css",declarations:[]},"./style_utilities.css":{path:"style_utilities.css",declarations:[]},"./style.css":{path:"style.css",declarations:[]},"./style.gen.css.js":{path:"style.gen.css.ts",declarations:[{name:"gen",kind:"variable"}]},"./theme.css":{path:"theme.css",declarations:[]},"./theme.gen.css.js":{path:"theme.gen.css.ts",declarations:[{name:"gen",kind:"variable"}]},"./theme.js":{path:"theme.ts",declarations:[{name:"Color_Scheme",kind:"type"},{name:"color_schemes",kind:"variable"},{name:"Theme",kind:"type"},{name:"Style_Variable",kind:"type"},{name:"Render_Theme_Style_Options",kind:"type"},{name:"render_theme_style",kind:"function"},{name:"render_theme_variable",kind:"function"}]},"./themes.js":{path:"themes.ts",declarations:[{name:"DEFAULT_THEME",kind:"variable"},{name:"default_themes",kind:"variable"}]},"./variable_data.js":{path:"variable_data.ts",declarations:[{name:"size_variants",kind:"variable"},{name:"size_names",kind:"variable"},{name:"space_variants",kind:"variable"},{name:"radius_variants",kind:"variable"},{name:"line_height_variants",kind:"variable"},{name:"line_height_names",kind:"variable"},{name:"shadow_variants",kind:"variable"},{name:"icon_sizes",kind:"variable"},{name:"color_variants",kind:"variable"}]},"./variables.js":{path:"variables.ts",declarations:[{name:"hue_a",kind:"variable"},{name:"hue_b",kind:"variable"},{name:"hue_c",kind:"variable"},{name:"hue_d",kind:"variable"},{name:"hue_e",kind:"variable"},{name:"hue_f",kind:"variable"},{name:"hue_g",kind:"variable"},{name:"hsl_a_1",kind:"variable"},{name:"hsl_a_2",kind:"variable"},{name:"hsl_a_3",kind:"variable"},{name:"hsl_a_4",kind:"variable"},{name:"hsl_a_5",kind:"variable"},{name:"hsl_a_6",kind:"variable"},{name:"hsl_a_7",kind:"variable"},{name:"hsl_a_8",kind:"variable"},{name:"hsl_a_9",kind:"variable"},{name:"hsl_b_1",kind:"variable"},{name:"hsl_b_2",kind:"variable"},{name:"hsl_b_3",kind:"variable"},{name:"hsl_b_4",kind:"variable"},{name:"hsl_b_5",kind:"variable"},{name:"hsl_b_6",kind:"variable"},{name:"hsl_b_7",kind:"variable"},{name:"hsl_b_8",kind:"variable"},{name:"hsl_b_9",kind:"variable"},{name:"hsl_c_1",kind:"variable"},{name:"hsl_c_2",kind:"variable"},{name:"hsl_c_3",kind:"variable"},{name:"hsl_c_4",kind:"variable"},{name:"hsl_c_5",kind:"variable"},{name:"hsl_c_6",kind:"variable"},{name:"hsl_c_7",kind:"variable"},{name:"hsl_c_8",kind:"variable"},{name:"hsl_c_9",kind:"variable"},{name:"hsl_d_1",kind:"variable"},{name:"hsl_d_2",kind:"variable"},{name:"hsl_d_3",kind:"variable"},{name:"hsl_d_4",kind:"variable"},{name:"hsl_d_5",kind:"variable"},{name:"hsl_d_6",kind:"variable"},{name:"hsl_d_7",kind:"variable"},{name:"hsl_d_8",kind:"variable"},{name:"hsl_d_9",kind:"variable"},{name:"hsl_e_1",kind:"variable"},{name:"hsl_e_2",kind:"variable"},{name:"hsl_e_3",kind:"variable"},{name:"hsl_e_4",kind:"variable"},{name:"hsl_e_5",kind:"variable"},{name:"hsl_e_6",kind:"variable"},{name:"hsl_e_7",kind:"variable"},{name:"hsl_e_8",kind:"variable"},{name:"hsl_e_9",kind:"variable"},{name:"hsl_f_1",kind:"variable"},{name:"hsl_f_2",kind:"variable"},{name:"hsl_f_3",kind:"variable"},{name:"hsl_f_4",kind:"variable"},{name:"hsl_f_5",kind:"variable"},{name:"hsl_f_6",kind:"variable"},{name:"hsl_f_7",kind:"variable"},{name:"hsl_f_8",kind:"variable"},{name:"hsl_f_9",kind:"variable"},{name:"hsl_g_1",kind:"variable"},{name:"hsl_g_2",kind:"variable"},{name:"hsl_g_3",kind:"variable"},{name:"hsl_g_4",kind:"variable"},{name:"hsl_g_5",kind:"variable"},{name:"hsl_g_6",kind:"variable"},{name:"hsl_g_7",kind:"variable"},{name:"hsl_g_8",kind:"variable"},{name:"hsl_g_9",kind:"variable"},{name:"color_a_1",kind:"variable"},{name:"color_a_2",kind:"variable"},{name:"color_a_3",kind:"variable"},{name:"color_a_4",kind:"variable"},{name:"color_a_5",kind:"variable"},{name:"color_a_6",kind:"variable"},{name:"color_a_7",kind:"variable"},{name:"color_a_8",kind:"variable"},{name:"color_a_9",kind:"variable"},{name:"color_b_1",kind:"variable"},{name:"color_b_2",kind:"variable"},{name:"color_b_3",kind:"variable"},{name:"color_b_4",kind:"variable"},{name:"color_b_5",kind:"variable"},{name:"color_b_6",kind:"variable"},{name:"color_b_7",kind:"variable"},{name:"color_b_8",kind:"variable"},{name:"color_b_9",kind:"variable"},{name:"color_c_1",kind:"variable"},{name:"color_c_2",kind:"variable"},{name:"color_c_3",kind:"variable"},{name:"color_c_4",kind:"variable"},{name:"color_c_5",kind:"variable"},{name:"color_c_6",kind:"variable"},{name:"color_c_7",kind:"variable"},{name:"color_c_8",kind:"variable"},{name:"color_c_9",kind:"variable"},{name:"color_d_1",kind:"variable"},{name:"color_d_2",kind:"variable"},{name:"color_d_3",kind:"variable"},{name:"color_d_4",kind:"variable"},{name:"color_d_5",kind:"variable"},{name:"color_d_6",kind:"variable"},{name:"color_d_7",kind:"variable"},{name:"color_d_8",kind:"variable"},{name:"color_d_9",kind:"variable"},{name:"color_e_1",kind:"variable"},{name:"color_e_2",kind:"variable"},{name:"color_e_3",kind:"variable"},{name:"color_e_4",kind:"variable"},{name:"color_e_5",kind:"variable"},{name:"color_e_6",kind:"variable"},{name:"color_e_7",kind:"variable"},{name:"color_e_8",kind:"variable"},{name:"color_e_9",kind:"variable"},{name:"color_f_1",kind:"variable"},{name:"color_f_2",kind:"variable"},{name:"color_f_3",kind:"variable"},{name:"color_f_4",kind:"variable"},{name:"color_f_5",kind:"variable"},{name:"color_f_6",kind:"variable"},{name:"color_f_7",kind:"variable"},{name:"color_f_8",kind:"variable"},{name:"color_f_9",kind:"variable"},{name:"color_g_1",kind:"variable"},{name:"color_g_2",kind:"variable"},{name:"color_g_3",kind:"variable"},{name:"color_g_4",kind:"variable"},{name:"color_g_5",kind:"variable"},{name:"color_g_6",kind:"variable"},{name:"color_g_7",kind:"variable"},{name:"color_g_8",kind:"variable"},{name:"color_g_9",kind:"variable"},{name:"darken_1",kind:"variable"},{name:"darken_2",kind:"variable"},{name:"darken_3",kind:"variable"},{name:"darken_4",kind:"variable"},{name:"darken_5",kind:"variable"},{name:"darken_6",kind:"variable"},{name:"darken_7",kind:"variable"},{name:"darken_8",kind:"variable"},{name:"darken_9",kind:"variable"},{name:"lighten_1",kind:"variable"},{name:"lighten_2",kind:"variable"},{name:"lighten_3",kind:"variable"},{name:"lighten_4",kind:"variable"},{name:"lighten_5",kind:"variable"},{name:"lighten_6",kind:"variable"},{name:"lighten_7",kind:"variable"},{name:"lighten_8",kind:"variable"},{name:"lighten_9",kind:"variable"},{name:"tint_hue",kind:"variable"},{name:"tint_saturation",kind:"variable"},{name:"bg",kind:"variable"},{name:"fg",kind:"variable"},{name:"bg_0",kind:"variable"},{name:"bg_1",kind:"variable"},{name:"bg_2",kind:"variable"},{name:"bg_3",kind:"variable"},{name:"bg_4",kind:"variable"},{name:"bg_5",kind:"variable"},{name:"bg_6",kind:"variable"},{name:"bg_7",kind:"variable"},{name:"bg_8",kind:"variable"},{name:"bg_9",kind:"variable"},{name:"bg_10",kind:"variable"},{name:"fg_0",kind:"variable"},{name:"fg_1",kind:"variable"},{name:"fg_2",kind:"variable"},{name:"fg_3",kind:"variable"},{name:"fg_4",kind:"variable"},{name:"fg_5",kind:"variable"},{name:"fg_6",kind:"variable"},{name:"fg_7",kind:"variable"},{name:"fg_8",kind:"variable"},{name:"fg_9",kind:"variable"},{name:"fg_10",kind:"variable"},{name:"fill_a",kind:"variable"},{name:"fill_b",kind:"variable"},{name:"fill_c",kind:"variable"},{name:"fill_d",kind:"variable"},{name:"fill_e",kind:"variable"},{name:"fill_f",kind:"variable"},{name:"fill_g",kind:"variable"},{name:"text_color",kind:"variable"},{name:"text_1",kind:"variable"},{name:"text_2",kind:"variable"},{name:"text_3",kind:"variable"},{name:"text_disabled",kind:"variable"},{name:"text_active",kind:"variable"},{name:"line_height_xs",kind:"variable"},{name:"line_height_sm",kind:"variable"},{name:"line_height_md",kind:"variable"},{name:"line_height_lg",kind:"variable"},{name:"line_height_xl",kind:"variable"},{name:"font_sans",kind:"variable"},{name:"font_mono",kind:"variable"},{name:"size_xs",kind:"variable"},{name:"size_sm",kind:"variable"},{name:"size_md",kind:"variable"},{name:"size_lg",kind:"variable"},{name:"size_xl",kind:"variable"},{name:"size_xl2",kind:"variable"},{name:"size_xl3",kind:"variable"},{name:"size_xl4",kind:"variable"},{name:"size_xl5",kind:"variable"},{name:"size_xl6",kind:"variable"},{name:"size_xl7",kind:"variable"},{name:"size_xl8",kind:"variable"},{name:"size_xl9",kind:"variable"},{name:"link_color",kind:"variable"},{name:"text_decoration",kind:"variable"},{name:"text_decoration_hover",kind:"variable"},{name:"text_decoration_selected",kind:"variable"},{name:"link_color_selected",kind:"variable"},{name:"space_xs5",kind:"variable"},{name:"space_xs4",kind:"variable"},{name:"space_xs3",kind:"variable"},{name:"space_xs2",kind:"variable"},{name:"space_xs",kind:"variable"},{name:"space_sm",kind:"variable"},{name:"space_md",kind:"variable"},{name:"space_lg",kind:"variable"},{name:"space_xl",kind:"variable"},{name:"space_xl2",kind:"variable"},{name:"space_xl3",kind:"variable"},{name:"space_xl4",kind:"variable"},{name:"space_xl5",kind:"variable"},{name:"space_xl6",kind:"variable"},{name:"space_xl7",kind:"variable"},{name:"space_xl8",kind:"variable"},{name:"space_xl9",kind:"variable"},{name:"space_xl10",kind:"variable"},{name:"space_xl11",kind:"variable"},{name:"space_xl12",kind:"variable"},{name:"space_xl13",kind:"variable"},{name:"space_xl14",kind:"variable"},{name:"space_xl15",kind:"variable"},{name:"width_md",kind:"variable"},{name:"width_sm",kind:"variable"},{name:"width_xs",kind:"variable"},{name:"border_color",kind:"variable"},{name:"border_style",kind:"variable"},{name:"border_color_1",kind:"variable"},{name:"border_color_2",kind:"variable"},{name:"border_color_3",kind:"variable"},{name:"border_color_4",kind:"variable"},{name:"border_color_5",kind:"variable"},{name:"border_color_a",kind:"variable"},{name:"border_color_b",kind:"variable"},{name:"border_color_c",kind:"variable"},{name:"border_color_d",kind:"variable"},{name:"border_color_e",kind:"variable"},{name:"border_color_f",kind:"variable"},{name:"border_color_g",kind:"variable"},{name:"border_disabled",kind:"variable"},{name:"border_width",kind:"variable"},{name:"border_width_1",kind:"variable"},{name:"border_width_2",kind:"variable"},{name:"border_width_3",kind:"variable"},{name:"border_width_4",kind:"variable"},{name:"border_width_5",kind:"variable"},{name:"border_width_6",kind:"variable"},{name:"outline_width",kind:"variable"},{name:"outline_width_1",kind:"variable"},{name:"outline_width_2",kind:"variable"},{name:"outline_width_3",kind:"variable"},{name:"outline_style",kind:"variable"},{name:"outline_color",kind:"variable"},{name:"radius_xl",kind:"variable"},{name:"radius_lg",kind:"variable"},{name:"radius_md",kind:"variable"},{name:"radius_sm",kind:"variable"},{name:"radius_xs",kind:"variable"},{name:"radius_xs2",kind:"variable"},{name:"radius_xs3",kind:"variable"},{name:"button_fill",kind:"variable"},{name:"button_fill_hover",kind:"variable"},{name:"button_fill_active",kind:"variable"},{name:"button_fill_selected",kind:"variable"},{name:"button_fill_disabled",kind:"variable"},{name:"input_fill",kind:"variable"},{name:"input_padding_y",kind:"variable"},{name:"input_padding_x",kind:"variable"},{name:"input_width_min",kind:"variable"},{name:"input_height",kind:"variable"},{name:"input_height_sm",kind:"variable"},{name:"input_height_inner",kind:"variable"},{name:"Create_Shadow_Options",kind:"type"},{name:"shadow_color",kind:"variable"},{name:"shadow_a_color",kind:"variable"},{name:"shadow_b_color",kind:"variable"},{name:"shadow_c_color",kind:"variable"},{name:"shadow_d_color",kind:"variable"},{name:"shadow_e_color",kind:"variable"},{name:"shadow_f_color",kind:"variable"},{name:"shadow_g_color",kind:"variable"},{name:"shadow_values_xs",kind:"variable"},{name:"shadow_values_inset_xs",kind:"variable"},{name:"shadow_values_outset_xs",kind:"variable"},{name:"shadow_values_sm",kind:"variable"},{name:"shadow_values_inset_sm",kind:"variable"},{name:"shadow_values_outset_sm",kind:"variable"},{name:"shadow_values_md",kind:"variable"},{name:"shadow_values_inset_md",kind:"variable"},{name:"shadow_values_outset_md",kind:"variable"},{name:"shadow_values_lg",kind:"variable"},{name:"shadow_values_inset_lg",kind:"variable"},{name:"shadow_values_outset_lg",kind:"variable"},{name:"shadow_values_xl",kind:"variable"},{name:"shadow_values_inset_xl",kind:"variable"},{name:"shadow_values_outset_xl",kind:"variable"},{name:"shadow_alpha_xs",kind:"variable"},{name:"shadow_alpha_sm",kind:"variable"},{name:"shadow_alpha_md",kind:"variable"},{name:"shadow_alpha_lg",kind:"variable"},{name:"shadow_alpha_xl",kind:"variable"},{name:"shadow_xs",kind:"variable"},{name:"shadow_sm",kind:"variable"},{name:"shadow_md",kind:"variable"},{name:"shadow_lg",kind:"variable"},{name:"shadow_xl",kind:"variable"},{name:"shadow_inset_xs",kind:"variable"},{name:"shadow_inset_sm",kind:"variable"},{name:"shadow_inset_md",kind:"variable"},{name:"shadow_inset_lg",kind:"variable"},{name:"shadow_inset_xl",kind:"variable"},{name:"shadow_outset_xs",kind:"variable"},{name:"shadow_outset_sm",kind:"variable"},{name:"shadow_outset_md",kind:"variable"},{name:"shadow_outset_lg",kind:"variable"},{name:"shadow_outset_xl",kind:"variable"},{name:"shadow_a_xs",kind:"variable"},{name:"shadow_a_sm",kind:"variable"},{name:"shadow_a_md",kind:"variable"},{name:"shadow_a_lg",kind:"variable"},{name:"shadow_a_xl",kind:"variable"},{name:"shadow_a_inset_xs",kind:"variable"},{name:"shadow_a_inset_sm",kind:"variable"},{name:"shadow_a_inset_md",kind:"variable"},{name:"shadow_a_inset_lg",kind:"variable"},{name:"shadow_a_inset_xl",kind:"variable"},{name:"shadow_a_outset_xs",kind:"variable"},{name:"shadow_a_outset_sm",kind:"variable"},{name:"shadow_a_outset_md",kind:"variable"},{name:"shadow_a_outset_lg",kind:"variable"},{name:"shadow_a_outset_xl",kind:"variable"},{name:"shadow_b_xs",kind:"variable"},{name:"shadow_b_sm",kind:"variable"},{name:"shadow_b_md",kind:"variable"},{name:"shadow_b_lg",kind:"variable"},{name:"shadow_b_xl",kind:"variable"},{name:"shadow_b_inset_xs",kind:"variable"},{name:"shadow_b_inset_sm",kind:"variable"},{name:"shadow_b_inset_md",kind:"variable"},{name:"shadow_b_inset_lg",kind:"variable"},{name:"shadow_b_inset_xl",kind:"variable"},{name:"shadow_b_outset_xs",kind:"variable"},{name:"shadow_b_outset_sm",kind:"variable"},{name:"shadow_b_outset_md",kind:"variable"},{name:"shadow_b_outset_lg",kind:"variable"},{name:"shadow_b_outset_xl",kind:"variable"},{name:"shadow_c_xs",kind:"variable"},{name:"shadow_c_sm",kind:"variable"},{name:"shadow_c_md",kind:"variable"},{name:"shadow_c_lg",kind:"variable"},{name:"shadow_c_xl",kind:"variable"},{name:"shadow_c_inset_xs",kind:"variable"},{name:"shadow_c_inset_sm",kind:"variable"},{name:"shadow_c_inset_md",kind:"variable"},{name:"shadow_c_inset_lg",kind:"variable"},{name:"shadow_c_inset_xl",kind:"variable"},{name:"shadow_c_outset_xs",kind:"variable"},{name:"shadow_c_outset_sm",kind:"variable"},{name:"shadow_c_outset_md",kind:"variable"},{name:"shadow_c_outset_lg",kind:"variable"},{name:"shadow_c_outset_xl",kind:"variable"},{name:"shadow_d_xs",kind:"variable"},{name:"shadow_d_sm",kind:"variable"},{name:"shadow_d_md",kind:"variable"},{name:"shadow_d_lg",kind:"variable"},{name:"shadow_d_xl",kind:"variable"},{name:"shadow_d_inset_xs",kind:"variable"},{name:"shadow_d_inset_sm",kind:"variable"},{name:"shadow_d_inset_md",kind:"variable"},{name:"shadow_d_inset_lg",kind:"variable"},{name:"shadow_d_inset_xl",kind:"variable"},{name:"shadow_d_outset_xs",kind:"variable"},{name:"shadow_d_outset_sm",kind:"variable"},{name:"shadow_d_outset_md",kind:"variable"},{name:"shadow_d_outset_lg",kind:"variable"},{name:"shadow_d_outset_xl",kind:"variable"},{name:"shadow_e_xs",kind:"variable"},{name:"shadow_e_sm",kind:"variable"},{name:"shadow_e_md",kind:"variable"},{name:"shadow_e_lg",kind:"variable"},{name:"shadow_e_xl",kind:"variable"},{name:"shadow_e_inset_xs",kind:"variable"},{name:"shadow_e_inset_sm",kind:"variable"},{name:"shadow_e_inset_md",kind:"variable"},{name:"shadow_e_inset_lg",kind:"variable"},{name:"shadow_e_inset_xl",kind:"variable"},{name:"shadow_e_outset_xs",kind:"variable"},{name:"shadow_e_outset_sm",kind:"variable"},{name:"shadow_e_outset_md",kind:"variable"},{name:"shadow_e_outset_lg",kind:"variable"},{name:"shadow_e_outset_xl",kind:"variable"},{name:"shadow_f_xs",kind:"variable"},{name:"shadow_f_sm",kind:"variable"},{name:"shadow_f_md",kind:"variable"},{name:"shadow_f_lg",kind:"variable"},{name:"shadow_f_xl",kind:"variable"},{name:"shadow_f_inset_xs",kind:"variable"},{name:"shadow_f_inset_sm",kind:"variable"},{name:"shadow_f_inset_md",kind:"variable"},{name:"shadow_f_inset_lg",kind:"variable"},{name:"shadow_f_inset_xl",kind:"variable"},{name:"shadow_f_outset_xs",kind:"variable"},{name:"shadow_f_outset_sm",kind:"variable"},{name:"shadow_f_outset_md",kind:"variable"},{name:"shadow_f_outset_lg",kind:"variable"},{name:"shadow_f_outset_xl",kind:"variable"},{name:"shadow_g_xs",kind:"variable"},{name:"shadow_g_sm",kind:"variable"},{name:"shadow_g_md",kind:"variable"},{name:"shadow_g_lg",kind:"variable"},{name:"shadow_g_xl",kind:"variable"},{name:"shadow_g_inset_xs",kind:"variable"},{name:"shadow_g_inset_sm",kind:"variable"},{name:"shadow_g_inset_md",kind:"variable"},{name:"shadow_g_inset_lg",kind:"variable"},{name:"shadow_g_inset_xl",kind:"variable"},{name:"shadow_g_outset_xs",kind:"variable"},{name:"shadow_g_outset_sm",kind:"variable"},{name:"shadow_g_outset_md",kind:"variable"},{name:"shadow_g_outset_lg",kind:"variable"},{name:"shadow_g_outset_xl",kind:"variable"},{name:"icon_size_xs",kind:"variable"},{name:"icon_size_sm",kind:"variable"},{name:"icon_size_md",kind:"variable"},{name:"icon_size_lg",kind:"variable"},{name:"icon_size_xl",kind:"variable"},{name:"icon_size_xl2",kind:"variable"},{name:"icon_size_xl3",kind:"variable"},{name:"duration_1",kind:"variable"},{name:"duration_2",kind:"variable"},{name:"duration_3",kind:"variable"},{name:"duration_4",kind:"variable"},{name:"duration_5",kind:"variable"},{name:"duration_6",kind:"variable"},{name:"fade_1",kind:"variable"},{name:"fade_2",kind:"variable"},{name:"fade_3",kind:"variable"},{name:"fade_4",kind:"variable"},{name:"fade_5",kind:"variable"},{name:"fade_6",kind:"variable"},{name:"disabled_opacity",kind:"variable"},{name:"default_variables",kind:"variable"}]}}};var ua=E("<!> <!>",1);function Ma(e,a){M(a,!0),la(da(F.homepage,F,ca)),G(n=>{I.title="Moss - magical organic stylesheets"}),ta(e,{children:(n,_)=>{var i=ua(),d=f(i);P(d,()=>a.children);var s=p(p(d,!0));ha(s,{}),u(n,i)},$$slots:{default:!0}}),D()}export{Ma as component,Ea as universal};
