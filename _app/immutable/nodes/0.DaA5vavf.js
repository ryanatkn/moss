import{c as z,p as O,a as g,t as S}from"../chunks/disclose-version.BUQKzkHR.js";import{O as V,p as A,f as p,a as M,P as s,s as R,Q as h,t as F,r as G,aD as I}from"../chunks/runtime.B3w0Sz81.js";import{s as N,e as Q}from"../chunks/class.OuJpC35m.js";import{a as j,e as U,s as C}from"../chunks/string.ZJuK4sHN.js";import{p as m,i as H}from"../chunks/props.CYeKYDdl.js";import{h as L}from"../chunks/prism.D5QHetrA.js";import{s as q,a as B,l as W,b as Y,d as J,e as K,T as X,D as Z,r as $,f as aa,h as ea}from"../chunks/theme.svelte.DkaS_rEP.js";import{s as ia}from"../chunks/style.Bk7ejTAN.js";import{S as na}from"../chunks/Spider.DVdKuqXu.js";import{s as la}from"../chunks/pkg.BOheS1hR.js";const ra=!0,Aa=Object.freeze(Object.defineProperty({__proto__:null,prerender:ra},Symbol.toStringTag,{value:"Module"})),oa=(a,e)=>{const{name:n}=a,i=(w=>w?C(j(C(w,".git"),"git+"),"/"):null)(a.repository?typeof a.repository=="string"?a.repository:a.repository.url:null);if(!i)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const _=a.homepage??null,o=!a.private&&!!a.exports&&a.version!=="0.0.1",l=o?"https://www.npmjs.com/package/"+a.name:null,d=o&&i?i+"/blob/main/CHANGELOG.md":null,t=_a(n),v=i?j(i,"https://github.com/").split("/")[0]:null,c=_?U(_,"/")+(a.logo?j(a.logo,"/"):"favicon.png"):null,f=a.logo_alt??`logo for ${t}`;return{package_json:a,src_json:e,name:n,repo_name:t,repo_url:i,owner_name:v,homepage_url:_,logo_url:c,logo_alt:f,npm_url:l,changelog_url:d,published:o}},_a=a=>a[0]==="@"?a.split("/")[1]:a,T=(a,e=1)=>{let n=!0,r=0;V(()=>{a(n),n&&(r+=1)>=e&&(n=!1)})};var da=S("<!> <!>",1);function sa(a,e){A(e,!0);const n=m(e,"sync_color_scheme",3,B),r=m(e,"load_color_scheme",3,W),i=m(e,"save_color_scheme",3,Y),_=m(e,"load_theme",3,J),o=m(e,"save_theme",3,K),l=m(e,"themer",19,()=>new X(_()(e.theme_fallback),r()(e.color_scheme_fallback)));q(l());const d=h(()=>l().theme.name),t=h(()=>s(d)===Z.name?null:$(l().theme)),v=h(()=>s(t)?aa(s(t)):null),c=h(()=>ea(e.color_scheme_fallback));T(k=>{const b=l().color_scheme;k||n()(b)}),T(k=>{const b=l().color_scheme;k||i()(b)}),T(k=>{const b=l().theme;k||o()(b)});var f=z();O(k=>{var b=da(),D=p(b);H(D,()=>s(v),y=>{var u=z(),x=p(u);L(x,()=>s(v),!1,!1),g(y,u)});var P=R(D,2);H(P,()=>s(c),y=>{var u=z(),x=p(u);L(x,()=>s(c),!1,!1),g(y,u)}),g(k,b)});var w=p(f);N(w,()=>e.children,l,()=>s(t),()=>s(v),()=>s(c)),g(a,f),M()}const E=(a,e,n=Math.random)=>Math.floor(n()*(e-a+1))+a,ta=(a,e=E)=>{const{length:n}=a,r=n-1;for(let i=0;i<n;i++){const _=e(0,r);if(i===_)continue;const o=a[_];a[_]=a[i],a[i]=o}return a},ma=(...a)=>{let e=0,n=0,r=0,i=1;const _=a.length?a:[Date.now()];let o=ba();e=o(" "),n=o(" "),r=o(" ");for(const d of _)e-=o(d),e<0&&(e+=1),n-=o(d),n<0&&(n+=1),r-=o(d),r<0&&(r+=1);o=null;const l=()=>{const d=2091639*e+i*23283064365386963e-26;return e=n,n=r,r=d-(i=d|0)};return l.uint32=()=>l()*4294967296,l.fract53=()=>l()+(l()*2097152|0)*11102230246251565e-32,l.version="Alea 0.9",l.seeds=_,l},ba=()=>{let a=4022871197;return e=>{const n=e+"";for(let r=0;r<n.length;r++){a+=n.charCodeAt(r);let i=.02519603282416938*a;a=i>>>0,i-=a,i*=a,a=i>>>0,i-=a,a+=i*4294967296}return(a>>>0)*23283064365386963e-26}};var va=S('<div class="spiders svelte-f8uitl"></div>');const ca=()=>{const a=new Date;return a.getHours()*60+a.getMinutes()};function ka(a,e){A(e,!0);const n=m(e,"spiders",19,()=>["var(--color_a_5)","var(--color_b_5)","var(--color_c_5)","var(--color_d_5)","var(--color_e_5)","var(--color_f_5)","var(--color_g_5)","var(--color_h_5)","var(--color_i_5)"]),r=m(e,"seed",19,ca),i=m(e,"random",19,()=>ma(r())),_=h(()=>ta(n().slice(),(d,t)=>E(d,t,i()))),o=h(()=>s(_).map(()=>E(0,359,i())));var l=va();Q(l,22,()=>s(_),d=>d,(d,t,v)=>{var c=h(()=>({style:`transform: rotate(${s(o)[s(v)]}deg)`}));na(d,{get fill(){return t},get attrs(){return s(c)}})}),G(l),F(()=>ia(l,"--spider_count",n().length)),g(a,l),M()}const ha={name:"@ryanatkn/moss",version:"0.13.4",description:"CSS framework",motto:"magical organic stylesheets",glyph:"🌿",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",public:!0,license:"MIT",homepage:"https://moss.ryanatkn.com/",repository:"https://github.com/ryanatkn/moss",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/moss/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.12"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.24.12","@ryanatkn/eslint-config":"^0.5.1","@ryanatkn/fuz":"^0.120.10","@ryanatkn/fuz_code":"^0.18.0","@ryanatkn/gro":"^0.133.7","@sveltejs/adapter-static":"^3.0.4","@sveltejs/kit":"^2.5.24","@sveltejs/package":"^2.3.4","@sveltejs/vite-plugin-svelte":"^3.1.2","@types/node":"^22.5.0",eslint:"^9.9.1","eslint-plugin-svelte":"^2.43.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.6","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.0.0-next.236","svelte-check":"^3.8.6",tslib:"^2.7.0",typescript:"^5.5.4","typescript-eslint":"^8.2.0",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./style_animations.css":{default:"./dist/style_animations.css"},"./style_components.css":{default:"./dist/style_components.css"},"./style_reset.css":{default:"./dist/style_reset.css"},"./style_utilities.css":{default:"./dist/style_utilities.css"},"./style.css":{default:"./dist/style.css"},"./style.gen.css.js":{types:"./dist/style.gen.css.d.ts",default:"./dist/style.gen.css.js"},"./theme.css":{default:"./dist/theme.css"},"./theme.gen.css.js":{types:"./dist/theme.gen.css.d.ts",default:"./dist/theme.gen.css.js"},"./theme.js":{types:"./dist/theme.d.ts",default:"./dist/theme.js"},"./themes.js":{types:"./dist/themes.d.ts",default:"./dist/themes.js"},"./variable_data.js":{types:"./dist/variable_data.d.ts",default:"./dist/variable_data.js"},"./variable.js":{types:"./dist/variable.d.ts",default:"./dist/variable.js"},"./variables.js":{types:"./dist/variables.d.ts",default:"./dist/variables.js"}}},ga={name:"@ryanatkn/moss",version:"0.13.4",modules:{"./package.json":{path:"package.json",declarations:[]},"./style_animations.css":{path:"style_animations.css",declarations:[]},"./style_components.css":{path:"style_components.css",declarations:[]},"./style_reset.css":{path:"style_reset.css",declarations:[]},"./style_utilities.css":{path:"style_utilities.css",declarations:[]},"./style.css":{path:"style.css",declarations:[]},"./style.gen.css.js":{path:"style.gen.css.ts",declarations:[{name:"gen",kind:"variable"}]},"./theme.css":{path:"theme.css",declarations:[]},"./theme.gen.css.js":{path:"theme.gen.css.ts",declarations:[{name:"gen",kind:"variable"}]},"./theme.js":{path:"theme.ts",declarations:[{name:"Color_Scheme",kind:"type"},{name:"color_schemes",kind:"variable"},{name:"Theme",kind:"type"},{name:"Render_Theme_Style_Options",kind:"type"},{name:"render_theme_style",kind:"function"},{name:"render_theme_variable",kind:"function"}]},"./themes.js":{path:"themes.ts",declarations:[{name:"DEFAULT_THEME",kind:"variable"},{name:"default_themes",kind:"variable"}]},"./variable_data.js":{path:"variable_data.ts",declarations:[{name:"size_variants",kind:"variable"},{name:"size_names",kind:"variable"},{name:"text_variants",kind:"variable"},{name:"space_variants",kind:"variable"},{name:"radius_variants",kind:"variable"},{name:"line_height_variants",kind:"variable"},{name:"line_height_names",kind:"variable"},{name:"shadow_size_variants",kind:"variable"},{name:"shadow_weight_variants",kind:"variable"},{name:"icon_sizes",kind:"variable"},{name:"color_variants",kind:"variable"}]},"./variable.js":{path:"variable.ts",declarations:[{name:"Style_Variable_Name",kind:"type"},{name:"Style_Variable",kind:"type"},{name:"STYLE_VARIABLE_NAME_MATCHER",kind:"variable"},{name:"is_style_variable_name",kind:"function"}]},"./variables.js":{path:"variables.ts",declarations:[{name:"hue_a",kind:"variable"},{name:"hue_b",kind:"variable"},{name:"hue_c",kind:"variable"},{name:"hue_d",kind:"variable"},{name:"hue_e",kind:"variable"},{name:"hue_f",kind:"variable"},{name:"hue_g",kind:"variable"},{name:"hue_h",kind:"variable"},{name:"hue_i",kind:"variable"},{name:"color_a_1",kind:"variable"},{name:"color_a_2",kind:"variable"},{name:"color_a_3",kind:"variable"},{name:"color_a_4",kind:"variable"},{name:"color_a_5",kind:"variable"},{name:"color_a_6",kind:"variable"},{name:"color_a_7",kind:"variable"},{name:"color_a_8",kind:"variable"},{name:"color_a_9",kind:"variable"},{name:"color_b_1",kind:"variable"},{name:"color_b_2",kind:"variable"},{name:"color_b_3",kind:"variable"},{name:"color_b_4",kind:"variable"},{name:"color_b_5",kind:"variable"},{name:"color_b_6",kind:"variable"},{name:"color_b_7",kind:"variable"},{name:"color_b_8",kind:"variable"},{name:"color_b_9",kind:"variable"},{name:"color_c_1",kind:"variable"},{name:"color_c_2",kind:"variable"},{name:"color_c_3",kind:"variable"},{name:"color_c_4",kind:"variable"},{name:"color_c_5",kind:"variable"},{name:"color_c_6",kind:"variable"},{name:"color_c_7",kind:"variable"},{name:"color_c_8",kind:"variable"},{name:"color_c_9",kind:"variable"},{name:"color_d_1",kind:"variable"},{name:"color_d_2",kind:"variable"},{name:"color_d_3",kind:"variable"},{name:"color_d_4",kind:"variable"},{name:"color_d_5",kind:"variable"},{name:"color_d_6",kind:"variable"},{name:"color_d_7",kind:"variable"},{name:"color_d_8",kind:"variable"},{name:"color_d_9",kind:"variable"},{name:"color_e_1",kind:"variable"},{name:"color_e_2",kind:"variable"},{name:"color_e_3",kind:"variable"},{name:"color_e_4",kind:"variable"},{name:"color_e_5",kind:"variable"},{name:"color_e_6",kind:"variable"},{name:"color_e_7",kind:"variable"},{name:"color_e_8",kind:"variable"},{name:"color_e_9",kind:"variable"},{name:"color_f_1",kind:"variable"},{name:"color_f_2",kind:"variable"},{name:"color_f_3",kind:"variable"},{name:"color_f_4",kind:"variable"},{name:"color_f_5",kind:"variable"},{name:"color_f_6",kind:"variable"},{name:"color_f_7",kind:"variable"},{name:"color_f_8",kind:"variable"},{name:"color_f_9",kind:"variable"},{name:"color_g_1",kind:"variable"},{name:"color_g_2",kind:"variable"},{name:"color_g_3",kind:"variable"},{name:"color_g_4",kind:"variable"},{name:"color_g_5",kind:"variable"},{name:"color_g_6",kind:"variable"},{name:"color_g_7",kind:"variable"},{name:"color_g_8",kind:"variable"},{name:"color_g_9",kind:"variable"},{name:"color_h_1",kind:"variable"},{name:"color_h_2",kind:"variable"},{name:"color_h_3",kind:"variable"},{name:"color_h_4",kind:"variable"},{name:"color_h_5",kind:"variable"},{name:"color_h_6",kind:"variable"},{name:"color_h_7",kind:"variable"},{name:"color_h_8",kind:"variable"},{name:"color_h_9",kind:"variable"},{name:"color_i_1",kind:"variable"},{name:"color_i_2",kind:"variable"},{name:"color_i_3",kind:"variable"},{name:"color_i_4",kind:"variable"},{name:"color_i_5",kind:"variable"},{name:"color_i_6",kind:"variable"},{name:"color_i_7",kind:"variable"},{name:"color_i_8",kind:"variable"},{name:"color_i_9",kind:"variable"},{name:"tint_hue",kind:"variable"},{name:"tint_saturation",kind:"variable"},{name:"darken_1",kind:"variable"},{name:"darken_2",kind:"variable"},{name:"darken_3",kind:"variable"},{name:"darken_4",kind:"variable"},{name:"darken_5",kind:"variable"},{name:"darken_6",kind:"variable"},{name:"darken_7",kind:"variable"},{name:"darken_8",kind:"variable"},{name:"darken_9",kind:"variable"},{name:"lighten_1",kind:"variable"},{name:"lighten_2",kind:"variable"},{name:"lighten_3",kind:"variable"},{name:"lighten_4",kind:"variable"},{name:"lighten_5",kind:"variable"},{name:"lighten_6",kind:"variable"},{name:"lighten_7",kind:"variable"},{name:"lighten_8",kind:"variable"},{name:"lighten_9",kind:"variable"},{name:"bg",kind:"variable"},{name:"fg",kind:"variable"},{name:"bg_0",kind:"variable"},{name:"bg_1",kind:"variable"},{name:"bg_2",kind:"variable"},{name:"bg_3",kind:"variable"},{name:"bg_4",kind:"variable"},{name:"bg_5",kind:"variable"},{name:"bg_6",kind:"variable"},{name:"bg_7",kind:"variable"},{name:"bg_8",kind:"variable"},{name:"bg_9",kind:"variable"},{name:"bg_10",kind:"variable"},{name:"fg_0",kind:"variable"},{name:"fg_1",kind:"variable"},{name:"fg_2",kind:"variable"},{name:"fg_3",kind:"variable"},{name:"fg_4",kind:"variable"},{name:"fg_5",kind:"variable"},{name:"fg_6",kind:"variable"},{name:"fg_7",kind:"variable"},{name:"fg_8",kind:"variable"},{name:"fg_9",kind:"variable"},{name:"fg_10",kind:"variable"},{name:"fill",kind:"variable"},{name:"fill_a",kind:"variable"},{name:"fill_b",kind:"variable"},{name:"fill_c",kind:"variable"},{name:"fill_d",kind:"variable"},{name:"fill_e",kind:"variable"},{name:"fill_f",kind:"variable"},{name:"fill_g",kind:"variable"},{name:"fill_h",kind:"variable"},{name:"fill_i",kind:"variable"},{name:"text_color",kind:"variable"},{name:"text_color_0",kind:"variable"},{name:"text_color_1",kind:"variable"},{name:"text_color_2",kind:"variable"},{name:"text_color_3",kind:"variable"},{name:"text_color_4",kind:"variable"},{name:"text_color_5",kind:"variable"},{name:"text_color_6",kind:"variable"},{name:"text_color_7",kind:"variable"},{name:"text_color_8",kind:"variable"},{name:"text_color_9",kind:"variable"},{name:"text_color_10",kind:"variable"},{name:"text_color_disabled",kind:"variable"},{name:"text_active",kind:"variable"},{name:"line_height_xs",kind:"variable"},{name:"line_height_sm",kind:"variable"},{name:"line_height_md",kind:"variable"},{name:"line_height_lg",kind:"variable"},{name:"line_height_xl",kind:"variable"},{name:"font_sans",kind:"variable"},{name:"font_mono",kind:"variable"},{name:"size_xs",kind:"variable"},{name:"size_sm",kind:"variable"},{name:"size_md",kind:"variable"},{name:"size_lg",kind:"variable"},{name:"size_xl",kind:"variable"},{name:"size_xl2",kind:"variable"},{name:"size_xl3",kind:"variable"},{name:"size_xl4",kind:"variable"},{name:"size_xl5",kind:"variable"},{name:"size_xl6",kind:"variable"},{name:"size_xl7",kind:"variable"},{name:"size_xl8",kind:"variable"},{name:"size_xl9",kind:"variable"},{name:"link_color",kind:"variable"},{name:"text_decoration",kind:"variable"},{name:"text_decoration_hover",kind:"variable"},{name:"text_decoration_selected",kind:"variable"},{name:"link_color_selected",kind:"variable"},{name:"space_xs5",kind:"variable"},{name:"space_xs4",kind:"variable"},{name:"space_xs3",kind:"variable"},{name:"space_xs2",kind:"variable"},{name:"space_xs",kind:"variable"},{name:"space_sm",kind:"variable"},{name:"space_md",kind:"variable"},{name:"space_lg",kind:"variable"},{name:"space_xl",kind:"variable"},{name:"space_xl2",kind:"variable"},{name:"space_xl3",kind:"variable"},{name:"space_xl4",kind:"variable"},{name:"space_xl5",kind:"variable"},{name:"space_xl6",kind:"variable"},{name:"space_xl7",kind:"variable"},{name:"space_xl8",kind:"variable"},{name:"space_xl9",kind:"variable"},{name:"space_xl10",kind:"variable"},{name:"space_xl11",kind:"variable"},{name:"space_xl12",kind:"variable"},{name:"space_xl13",kind:"variable"},{name:"space_xl14",kind:"variable"},{name:"space_xl15",kind:"variable"},{name:"width_md",kind:"variable"},{name:"width_sm",kind:"variable"},{name:"width_xs",kind:"variable"},{name:"border_color",kind:"variable"},{name:"border_style",kind:"variable"},{name:"border_color_1",kind:"variable"},{name:"border_color_2",kind:"variable"},{name:"border_color_3",kind:"variable"},{name:"border_color_4",kind:"variable"},{name:"border_color_5",kind:"variable"},{name:"border_color_a",kind:"variable"},{name:"border_color_b",kind:"variable"},{name:"border_color_c",kind:"variable"},{name:"border_color_d",kind:"variable"},{name:"border_color_e",kind:"variable"},{name:"border_color_f",kind:"variable"},{name:"border_color_g",kind:"variable"},{name:"border_color_h",kind:"variable"},{name:"border_color_i",kind:"variable"},{name:"border_width",kind:"variable"},{name:"border_width_1",kind:"variable"},{name:"border_width_2",kind:"variable"},{name:"border_width_3",kind:"variable"},{name:"border_width_4",kind:"variable"},{name:"border_width_5",kind:"variable"},{name:"border_width_6",kind:"variable"},{name:"outline_width",kind:"variable"},{name:"outline_width_1",kind:"variable"},{name:"outline_width_2",kind:"variable"},{name:"outline_width_3",kind:"variable"},{name:"outline_style",kind:"variable"},{name:"outline_color",kind:"variable"},{name:"radius_xl",kind:"variable"},{name:"radius_lg",kind:"variable"},{name:"radius_md",kind:"variable"},{name:"radius_sm",kind:"variable"},{name:"radius_xs",kind:"variable"},{name:"radius_xs2",kind:"variable"},{name:"radius_xs3",kind:"variable"},{name:"button_shadow",kind:"variable"},{name:"button_shadow_hover",kind:"variable"},{name:"button_shadow_active",kind:"variable"},{name:"input_fill",kind:"variable"},{name:"input_padding_y",kind:"variable"},{name:"input_padding_x",kind:"variable"},{name:"input_width_min",kind:"variable"},{name:"input_height",kind:"variable"},{name:"input_height_sm",kind:"variable"},{name:"input_height_inner",kind:"variable"},{name:"shadow_color",kind:"variable"},{name:"highlight_color",kind:"variable"},{name:"glow_color",kind:"variable"},{name:"shroud_color",kind:"variable"},{name:"shadow_a_color",kind:"variable"},{name:"shadow_b_color",kind:"variable"},{name:"shadow_c_color",kind:"variable"},{name:"shadow_d_color",kind:"variable"},{name:"shadow_e_color",kind:"variable"},{name:"shadow_f_color",kind:"variable"},{name:"shadow_g_color",kind:"variable"},{name:"shadow_h_color",kind:"variable"},{name:"shadow_i_color",kind:"variable"},{name:"shadow_xs",kind:"variable"},{name:"shadow_inset_xs",kind:"variable"},{name:"shadow_outset_xs",kind:"variable"},{name:"shadow_sm",kind:"variable"},{name:"shadow_inset_sm",kind:"variable"},{name:"shadow_outset_sm",kind:"variable"},{name:"shadow_md",kind:"variable"},{name:"shadow_inset_md",kind:"variable"},{name:"shadow_outset_md",kind:"variable"},{name:"shadow_lg",kind:"variable"},{name:"shadow_inset_lg",kind:"variable"},{name:"shadow_outset_lg",kind:"variable"},{name:"shadow_xl",kind:"variable"},{name:"shadow_inset_xl",kind:"variable"},{name:"shadow_outset_xl",kind:"variable"},{name:"shadow_alpha_1",kind:"variable"},{name:"shadow_alpha_2",kind:"variable"},{name:"shadow_alpha_3",kind:"variable"},{name:"shadow_alpha_4",kind:"variable"},{name:"shadow_alpha_5",kind:"variable"},{name:"highlight_alpha_1",kind:"variable"},{name:"highlight_alpha_2",kind:"variable"},{name:"highlight_alpha_3",kind:"variable"},{name:"highlight_alpha_4",kind:"variable"},{name:"highlight_alpha_5",kind:"variable"},{name:"shadow_color_1",kind:"variable"},{name:"shadow_color_2",kind:"variable"},{name:"shadow_color_3",kind:"variable"},{name:"shadow_color_4",kind:"variable"},{name:"shadow_color_5",kind:"variable"},{name:"highlight_color_1",kind:"variable"},{name:"highlight_color_2",kind:"variable"},{name:"highlight_color_3",kind:"variable"},{name:"highlight_color_4",kind:"variable"},{name:"highlight_color_5",kind:"variable"},{name:"glow_color_1",kind:"variable"},{name:"glow_color_2",kind:"variable"},{name:"glow_color_3",kind:"variable"},{name:"glow_color_4",kind:"variable"},{name:"glow_color_5",kind:"variable"},{name:"shroud_color_1",kind:"variable"},{name:"shroud_color_2",kind:"variable"},{name:"shroud_color_3",kind:"variable"},{name:"shroud_color_4",kind:"variable"},{name:"shroud_color_5",kind:"variable"},{name:"shadow_color_a_1",kind:"variable"},{name:"shadow_color_a_2",kind:"variable"},{name:"shadow_color_a_3",kind:"variable"},{name:"shadow_color_a_4",kind:"variable"},{name:"shadow_color_a_5",kind:"variable"},{name:"shadow_color_b_1",kind:"variable"},{name:"shadow_color_b_2",kind:"variable"},{name:"shadow_color_b_3",kind:"variable"},{name:"shadow_color_b_4",kind:"variable"},{name:"shadow_color_b_5",kind:"variable"},{name:"shadow_color_c_1",kind:"variable"},{name:"shadow_color_c_2",kind:"variable"},{name:"shadow_color_c_3",kind:"variable"},{name:"shadow_color_c_4",kind:"variable"},{name:"shadow_color_c_5",kind:"variable"},{name:"shadow_color_d_1",kind:"variable"},{name:"shadow_color_d_2",kind:"variable"},{name:"shadow_color_d_3",kind:"variable"},{name:"shadow_color_d_4",kind:"variable"},{name:"shadow_color_d_5",kind:"variable"},{name:"shadow_color_e_1",kind:"variable"},{name:"shadow_color_e_2",kind:"variable"},{name:"shadow_color_e_3",kind:"variable"},{name:"shadow_color_e_4",kind:"variable"},{name:"shadow_color_e_5",kind:"variable"},{name:"shadow_color_f_1",kind:"variable"},{name:"shadow_color_f_2",kind:"variable"},{name:"shadow_color_f_3",kind:"variable"},{name:"shadow_color_f_4",kind:"variable"},{name:"shadow_color_f_5",kind:"variable"},{name:"shadow_color_g_1",kind:"variable"},{name:"shadow_color_g_2",kind:"variable"},{name:"shadow_color_g_3",kind:"variable"},{name:"shadow_color_g_4",kind:"variable"},{name:"shadow_color_g_5",kind:"variable"},{name:"shadow_color_h_1",kind:"variable"},{name:"shadow_color_h_2",kind:"variable"},{name:"shadow_color_h_3",kind:"variable"},{name:"shadow_color_h_4",kind:"variable"},{name:"shadow_color_h_5",kind:"variable"},{name:"shadow_color_i_1",kind:"variable"},{name:"shadow_color_i_2",kind:"variable"},{name:"shadow_color_i_3",kind:"variable"},{name:"shadow_color_i_4",kind:"variable"},{name:"shadow_color_i_5",kind:"variable"},{name:"icon_size_xs",kind:"variable"},{name:"icon_size_sm",kind:"variable"},{name:"icon_size_md",kind:"variable"},{name:"icon_size_lg",kind:"variable"},{name:"icon_size_xl",kind:"variable"},{name:"icon_size_xl2",kind:"variable"},{name:"icon_size_xl3",kind:"variable"},{name:"duration_1",kind:"variable"},{name:"duration_2",kind:"variable"},{name:"duration_3",kind:"variable"},{name:"duration_4",kind:"variable"},{name:"duration_5",kind:"variable"},{name:"duration_6",kind:"variable"},{name:"fade_1",kind:"variable"},{name:"fade_2",kind:"variable"},{name:"fade_3",kind:"variable"},{name:"fade_4",kind:"variable"},{name:"fade_5",kind:"variable"},{name:"fade_6",kind:"variable"},{name:"disabled_opacity",kind:"variable"},{name:"default_variables",kind:"variable"}]}}};var ua=S("<!> <!>",1);function Ma(a,e){A(e,!0),la(oa(ha,ga)),O(n=>{I.title="Moss - magical organic stylesheets"}),sa(a,{children:(n,r)=>{var i=ua(),_=p(i);N(_,()=>e.children);var o=R(_,2);ka(o,{}),g(n,i)},$$slots:{default:!0}}),M()}export{Ma as component,Aa as universal};
