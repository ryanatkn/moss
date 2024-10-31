import{d as z,u as L,a as p,t as C}from"../chunks/disclose-version.B5KzY4Sk.js";import{a3 as G,p as E,f as g,a as A,l as s,s as R,m as h,t as I,r as F,aN as P}from"../chunks/runtime.B9qgknVG.js";import{s as N,e as U}from"../chunks/context_helpers.tx2D1Pyy.js";import{a as j,e as q,s as M}from"../chunks/string.ZJuK4sHN.js";import{i as D}from"../chunks/if.Mxb7EVlD.js";import{h as H}from"../chunks/html.49x1mpcA.js";import{p as m}from"../chunks/props.DOEU5mjN.js";import{t as B,s as Q,l as W,a as Y,b as J,d as K,T as X,D as Z,r as $,e as aa,f as ea}from"../chunks/theme.svelte.DpEopzqt.js";import{s as ia}from"../chunks/style.PwPRnE0L.js";import{S as na,f as ra}from"../chunks/logos.B0buVJBo.js";import"../chunks/prism.Dh8QyuHA.js";import{p as la}from"../chunks/pkg.BE4_fPTJ.js";const _a=!0,Ma=Object.freeze(Object.defineProperty({__proto__:null,prerender:_a},Symbol.toStringTag,{value:"Module"})),oa=(a,e)=>{const{name:n}=a,i=(w=>w?M(j(M(w,".git"),"git+"),"/"):null)(a.repository?typeof a.repository=="string"?a.repository:a.repository.url:null);if(!i)throw new Error("failed to parse package_meta - `repo_url` is required in package_json");const o=a.homepage??null,_=!a.private&&!!a.exports&&a.version!=="0.0.1",r=_?"https://www.npmjs.com/package/"+a.name:null,d=_&&i?i+"/blob/main/CHANGELOG.md":null,t=da(n),v=i?j(i,"https://github.com/").split("/")[0]:null,k=o?q(o,"/")+(a.logo?j(a.logo,"/"):"favicon.png"):null,f=a.logo_alt??`logo for ${t}`;return{package_json:a,src_json:e,name:n,repo_name:t,repo_url:i,owner_name:v,homepage_url:o,logo_url:k,logo_alt:f,npm_url:r,changelog_url:d,published:_}},da=a=>a[0]==="@"?a.split("/")[1]:a,S=(a,e=1)=>{let n=!0,l=0;G(()=>{a(n),n&&(l+=1)>=e&&(n=!1)})};var sa=C("<!> <!>",1);function ta(a,e){E(e,!0);const n=m(e,"sync_color_scheme",3,Q),l=m(e,"load_color_scheme",3,W),i=m(e,"save_color_scheme",3,Y),o=m(e,"load_theme",3,J),_=m(e,"save_theme",3,K),r=m(e,"themer",19,()=>new X(o()(e.theme_fallback),l()(e.color_scheme_fallback)));B.set(r());const d=h(()=>r().theme.name),t=h(()=>s(d)===Z.name?null:$(r().theme)),v=h(()=>s(t)?aa(s(t)):null),k=h(()=>ea(e.color_scheme_fallback));S(c=>{const b=r().color_scheme;c||n()(b)}),S(c=>{const b=r().color_scheme;c||i()(b)}),S(c=>{const b=r().theme;c||_()(b)});var f=z();L(c=>{var b=sa(),V=g(b);D(V,()=>s(v),x=>{var u=z(),y=g(u);H(y,()=>s(v),!1,!1),p(x,u)});var O=R(V,2);D(O,()=>s(k),x=>{var u=z(),y=g(u);H(y,()=>s(k),!1,!1),p(x,u)}),p(c,b)});var w=g(f);N(w,()=>e.children,r,()=>s(t),()=>s(v),()=>s(k)),p(a,f),A()}const T=(a,e,n=Math.random)=>Math.floor(n()*(e-a+1))+a,ma=(a,e=T)=>{const{length:n}=a,l=n-1;for(let i=0;i<n;i++){const o=e(0,l);if(i===o)continue;const _=a[o];a[o]=a[i],a[i]=_}return a},ba=(...a)=>{let e=0,n=0,l=0,i=1;const o=a.length?a:[Date.now()];let _=va();e=_(" "),n=_(" "),l=_(" ");for(const d of o)e-=_(d),e<0&&(e+=1),n-=_(d),n<0&&(n+=1),l-=_(d),l<0&&(l+=1);_=null;const r=()=>{const d=2091639*e+i*23283064365386963e-26;return e=n,n=l,l=d-(i=d|0)};return r.uint32=()=>r()*4294967296,r.fract53=()=>r()+(r()*2097152|0)*11102230246251565e-32,r.version="Alea 0.9",r.seeds=o,r},va=()=>{let a=4022871197;return e=>{const n=e+"";for(let l=0;l<n.length;l++){a+=n.charCodeAt(l);let i=.02519603282416938*a;a=i>>>0,i-=a,i*=a,a=i>>>0,i-=a,a+=i*4294967296}return(a>>>0)*23283064365386963e-26}},ka=()=>{const a=new Date;return a.getHours()*60+a.getMinutes()};var ca=C('<div class="spiders svelte-8ktg52"></div>');function ha(a,e){E(e,!0);const n=m(e,"spiders",19,()=>["var(--color_a_5)","var(--color_b_5)","var(--color_c_5)","var(--color_d_5)","var(--color_e_5)","var(--color_f_5)","var(--color_g_5)","var(--color_h_5)","var(--color_i_5)"]),l=m(e,"seed",19,ka),i=m(e,"random",19,()=>ba(l())),o=h(()=>ma(n().slice(),(d,t)=>T(d,t,i()))),_=h(()=>s(o).map(()=>T(0,359,i())));var r=ca();U(r,22,()=>s(o),d=>d,(d,t,v)=>{var k=h(()=>({style:`transform: rotate(${s(_)[s(v)]}deg)`}));na(d,{data:ra,get fill(){return t},get attrs(){return s(k)}})}),F(r),I(()=>ia(r,"--spider_count",n().length)),p(a,r),A()}const pa={name:"@ryanatkn/moss",version:"0.19.0",description:"CSS framework",motto:"magical organic stylesheets",glyph:"🌿",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",public:!0,license:"MIT",homepage:"https://moss.ryanatkn.com/",repository:"https://github.com/ryanatkn/moss",author:{name:"Ryan Atkinson",email:"mail@ryanatkn.com",url:"https://www.ryanatkn.com/"},bugs:"https://github.com/ryanatkn/moss/issues",funding:"https://www.ryanatkn.com/funding",scripts:{start:"gro dev",dev:"gro dev",build:"gro build",check:"gro check",test:"gro test",preview:"vite preview",deploy:"gro deploy"},type:"module",engines:{node:">=20.17"},devDependencies:{"@changesets/changelog-git":"^0.2.0","@ryanatkn/belt":"^0.26.0","@ryanatkn/eslint-config":"^0.5.5","@ryanatkn/fuz":"^0.130.3","@ryanatkn/fuz_code":"^0.20.0","@ryanatkn/gro":"^0.144.1","@sveltejs/adapter-static":"^3.0.6","@sveltejs/kit":"^2.7.3","@sveltejs/package":"^2.3.7","@sveltejs/vite-plugin-svelte":"^4.0.0","@types/node":"^22.8.4",eslint:"^9.13.0","eslint-plugin-svelte":"^2.46.0",prettier:"^3.3.3","prettier-plugin-svelte":"^3.2.7","prism-svelte":"^0.5.0",prismjs:"^1.29.0",svelte:"^5.1.6","svelte-check":"^4.0.5",tslib:"^2.8.0",typescript:"^5.6.3","typescript-eslint":"^8.12.1",uvu:"^0.5.6"},prettier:{plugins:["prettier-plugin-svelte"],useTabs:!0,printWidth:100,singleQuote:!0,bracketSpacing:!1,overrides:[{files:"package.json",options:{useTabs:!1}}]},sideEffects:["**/*.css"],files:["dist","src/lib/**/*.ts","!src/lib/**/*.test.*","!dist/**/*.test.*"],exports:{"./package.json":"./package.json","./css_class_helpers.js":{types:"./dist/css_class_helpers.d.ts",default:"./dist/css_class_helpers.js"},"./css_classes.js":{types:"./dist/css_classes.d.ts",default:"./dist/css_classes.js"},"./style.css":{default:"./dist/style.css"},"./theme.css":{default:"./dist/theme.css"},"./theme.gen.css.js":{types:"./dist/theme.gen.css.d.ts",default:"./dist/theme.gen.css.js"},"./theme.js":{types:"./dist/theme.d.ts",default:"./dist/theme.js"},"./themes.js":{types:"./dist/themes.d.ts",default:"./dist/themes.js"},"./variable_data.js":{types:"./dist/variable_data.d.ts",default:"./dist/variable_data.js"},"./variable.js":{types:"./dist/variable.d.ts",default:"./dist/variable.js"},"./variables.js":{types:"./dist/variables.d.ts",default:"./dist/variables.js"}}},ua={name:"@ryanatkn/moss",version:"0.19.0",modules:{"./package.json":{path:"package.json",declarations:[]},"./css_class_helpers.js":{path:"css_class_helpers.ts",declarations:[{name:"Css_Extractor",kind:"type"},{name:"collect_css_classes",kind:"function"},{name:"Css_Classes",kind:"class"}]},"./css_classes.js":{path:"css_classes.ts",declarations:[{name:"Css_Class_Declaration",kind:"type"},{name:"Css_Class_Declaration_Item",kind:"type"},{name:"Css_Class_Declaration_Group",kind:"type"},{name:"css_classes_by_name",kind:"variable"}]},"./style.css":{path:"style.css",declarations:[]},"./theme.css":{path:"theme.css",declarations:[]},"./theme.gen.css.js":{path:"theme.gen.css.ts",declarations:[{name:"gen",kind:"variable"}]},"./theme.js":{path:"theme.ts",declarations:[{name:"Color_Scheme",kind:"type"},{name:"color_schemes",kind:"variable"},{name:"Theme",kind:"type"},{name:"Render_Theme_Style_Options",kind:"type"},{name:"render_theme_style",kind:"function"},{name:"render_theme_variable",kind:"function"}]},"./themes.js":{path:"themes.ts",declarations:[{name:"DEFAULT_THEME",kind:"variable"},{name:"default_themes",kind:"variable"}]},"./variable_data.js":{path:"variable_data.ts",declarations:[{name:"Size_Variant",kind:"type"},{name:"size_variants",kind:"variable"},{name:"size_names",kind:"variable"},{name:"Text_Variant",kind:"type"},{name:"text_variants",kind:"variable"},{name:"Space_Variant",kind:"type"},{name:"space_variants",kind:"variable"},{name:"Radius_Variant",kind:"type"},{name:"radius_variants",kind:"variable"},{name:"Line_Height_Variant",kind:"type"},{name:"line_height_variants",kind:"variable"},{name:"line_height_names",kind:"variable"},{name:"shadow_variant_prefixes",kind:"variable"},{name:"Shadow_Size_Variant",kind:"type"},{name:"shadow_size_variants",kind:"variable"},{name:"Shadow_Alpha_Variant",kind:"type"},{name:"shadow_alpha_variants",kind:"variable"},{name:"icon_sizes",kind:"variable"},{name:"Color_Variant",kind:"type"},{name:"color_variants",kind:"variable"}]},"./variable.js":{path:"variable.ts",declarations:[{name:"Style_Variable_Name",kind:"type"},{name:"Style_Variable",kind:"type"},{name:"STYLE_VARIABLE_NAME_MATCHER",kind:"variable"},{name:"is_style_variable_name",kind:"function"}]},"./variables.js":{path:"variables.ts",declarations:[{name:"hue_a",kind:"variable"},{name:"hue_b",kind:"variable"},{name:"hue_c",kind:"variable"},{name:"hue_d",kind:"variable"},{name:"hue_e",kind:"variable"},{name:"hue_f",kind:"variable"},{name:"hue_g",kind:"variable"},{name:"hue_h",kind:"variable"},{name:"hue_i",kind:"variable"},{name:"color_a_1",kind:"variable"},{name:"color_a_2",kind:"variable"},{name:"color_a_3",kind:"variable"},{name:"color_a_4",kind:"variable"},{name:"color_a_5",kind:"variable"},{name:"color_a_6",kind:"variable"},{name:"color_a_7",kind:"variable"},{name:"color_a_8",kind:"variable"},{name:"color_a_9",kind:"variable"},{name:"color_b_1",kind:"variable"},{name:"color_b_2",kind:"variable"},{name:"color_b_3",kind:"variable"},{name:"color_b_4",kind:"variable"},{name:"color_b_5",kind:"variable"},{name:"color_b_6",kind:"variable"},{name:"color_b_7",kind:"variable"},{name:"color_b_8",kind:"variable"},{name:"color_b_9",kind:"variable"},{name:"color_c_1",kind:"variable"},{name:"color_c_2",kind:"variable"},{name:"color_c_3",kind:"variable"},{name:"color_c_4",kind:"variable"},{name:"color_c_5",kind:"variable"},{name:"color_c_6",kind:"variable"},{name:"color_c_7",kind:"variable"},{name:"color_c_8",kind:"variable"},{name:"color_c_9",kind:"variable"},{name:"color_d_1",kind:"variable"},{name:"color_d_2",kind:"variable"},{name:"color_d_3",kind:"variable"},{name:"color_d_4",kind:"variable"},{name:"color_d_5",kind:"variable"},{name:"color_d_6",kind:"variable"},{name:"color_d_7",kind:"variable"},{name:"color_d_8",kind:"variable"},{name:"color_d_9",kind:"variable"},{name:"color_e_1",kind:"variable"},{name:"color_e_2",kind:"variable"},{name:"color_e_3",kind:"variable"},{name:"color_e_4",kind:"variable"},{name:"color_e_5",kind:"variable"},{name:"color_e_6",kind:"variable"},{name:"color_e_7",kind:"variable"},{name:"color_e_8",kind:"variable"},{name:"color_e_9",kind:"variable"},{name:"color_f_1",kind:"variable"},{name:"color_f_2",kind:"variable"},{name:"color_f_3",kind:"variable"},{name:"color_f_4",kind:"variable"},{name:"color_f_5",kind:"variable"},{name:"color_f_6",kind:"variable"},{name:"color_f_7",kind:"variable"},{name:"color_f_8",kind:"variable"},{name:"color_f_9",kind:"variable"},{name:"color_g_1",kind:"variable"},{name:"color_g_2",kind:"variable"},{name:"color_g_3",kind:"variable"},{name:"color_g_4",kind:"variable"},{name:"color_g_5",kind:"variable"},{name:"color_g_6",kind:"variable"},{name:"color_g_7",kind:"variable"},{name:"color_g_8",kind:"variable"},{name:"color_g_9",kind:"variable"},{name:"color_h_1",kind:"variable"},{name:"color_h_2",kind:"variable"},{name:"color_h_3",kind:"variable"},{name:"color_h_4",kind:"variable"},{name:"color_h_5",kind:"variable"},{name:"color_h_6",kind:"variable"},{name:"color_h_7",kind:"variable"},{name:"color_h_8",kind:"variable"},{name:"color_h_9",kind:"variable"},{name:"color_i_1",kind:"variable"},{name:"color_i_2",kind:"variable"},{name:"color_i_3",kind:"variable"},{name:"color_i_4",kind:"variable"},{name:"color_i_5",kind:"variable"},{name:"color_i_6",kind:"variable"},{name:"color_i_7",kind:"variable"},{name:"color_i_8",kind:"variable"},{name:"color_i_9",kind:"variable"},{name:"tint_hue",kind:"variable"},{name:"tint_saturation",kind:"variable"},{name:"darken_1",kind:"variable"},{name:"darken_2",kind:"variable"},{name:"darken_3",kind:"variable"},{name:"darken_4",kind:"variable"},{name:"darken_5",kind:"variable"},{name:"darken_6",kind:"variable"},{name:"darken_7",kind:"variable"},{name:"darken_8",kind:"variable"},{name:"darken_9",kind:"variable"},{name:"lighten_1",kind:"variable"},{name:"lighten_2",kind:"variable"},{name:"lighten_3",kind:"variable"},{name:"lighten_4",kind:"variable"},{name:"lighten_5",kind:"variable"},{name:"lighten_6",kind:"variable"},{name:"lighten_7",kind:"variable"},{name:"lighten_8",kind:"variable"},{name:"lighten_9",kind:"variable"},{name:"bg",kind:"variable"},{name:"fg",kind:"variable"},{name:"bg_0",kind:"variable"},{name:"bg_1",kind:"variable"},{name:"bg_2",kind:"variable"},{name:"bg_3",kind:"variable"},{name:"bg_4",kind:"variable"},{name:"bg_5",kind:"variable"},{name:"bg_6",kind:"variable"},{name:"bg_7",kind:"variable"},{name:"bg_8",kind:"variable"},{name:"bg_9",kind:"variable"},{name:"bg_10",kind:"variable"},{name:"fg_0",kind:"variable"},{name:"fg_1",kind:"variable"},{name:"fg_2",kind:"variable"},{name:"fg_3",kind:"variable"},{name:"fg_4",kind:"variable"},{name:"fg_5",kind:"variable"},{name:"fg_6",kind:"variable"},{name:"fg_7",kind:"variable"},{name:"fg_8",kind:"variable"},{name:"fg_9",kind:"variable"},{name:"fg_10",kind:"variable"},{name:"fill",kind:"variable"},{name:"fill_a",kind:"variable"},{name:"fill_b",kind:"variable"},{name:"fill_c",kind:"variable"},{name:"fill_d",kind:"variable"},{name:"fill_e",kind:"variable"},{name:"fill_f",kind:"variable"},{name:"fill_g",kind:"variable"},{name:"fill_h",kind:"variable"},{name:"fill_i",kind:"variable"},{name:"text_color",kind:"variable"},{name:"text_color_0",kind:"variable"},{name:"text_color_1",kind:"variable"},{name:"text_color_2",kind:"variable"},{name:"text_color_3",kind:"variable"},{name:"text_color_4",kind:"variable"},{name:"text_color_5",kind:"variable"},{name:"text_color_6",kind:"variable"},{name:"text_color_7",kind:"variable"},{name:"text_color_8",kind:"variable"},{name:"text_color_9",kind:"variable"},{name:"text_color_10",kind:"variable"},{name:"text_color_disabled",kind:"variable"},{name:"text_active",kind:"variable"},{name:"line_height_xs",kind:"variable"},{name:"line_height_sm",kind:"variable"},{name:"line_height_md",kind:"variable"},{name:"line_height_lg",kind:"variable"},{name:"line_height_xl",kind:"variable"},{name:"font_sans",kind:"variable"},{name:"font_mono",kind:"variable"},{name:"size_xs",kind:"variable"},{name:"size_sm",kind:"variable"},{name:"size_md",kind:"variable"},{name:"size_lg",kind:"variable"},{name:"size_xl",kind:"variable"},{name:"size_xl2",kind:"variable"},{name:"size_xl3",kind:"variable"},{name:"size_xl4",kind:"variable"},{name:"size_xl5",kind:"variable"},{name:"size_xl6",kind:"variable"},{name:"size_xl7",kind:"variable"},{name:"size_xl8",kind:"variable"},{name:"size_xl9",kind:"variable"},{name:"link_color",kind:"variable"},{name:"text_decoration",kind:"variable"},{name:"text_decoration_hover",kind:"variable"},{name:"text_decoration_selected",kind:"variable"},{name:"link_color_selected",kind:"variable"},{name:"space_xs5",kind:"variable"},{name:"space_xs4",kind:"variable"},{name:"space_xs3",kind:"variable"},{name:"space_xs2",kind:"variable"},{name:"space_xs",kind:"variable"},{name:"space_sm",kind:"variable"},{name:"space_md",kind:"variable"},{name:"space_lg",kind:"variable"},{name:"space_xl",kind:"variable"},{name:"space_xl2",kind:"variable"},{name:"space_xl3",kind:"variable"},{name:"space_xl4",kind:"variable"},{name:"space_xl5",kind:"variable"},{name:"space_xl6",kind:"variable"},{name:"space_xl7",kind:"variable"},{name:"space_xl8",kind:"variable"},{name:"space_xl9",kind:"variable"},{name:"space_xl10",kind:"variable"},{name:"space_xl11",kind:"variable"},{name:"space_xl12",kind:"variable"},{name:"space_xl13",kind:"variable"},{name:"space_xl14",kind:"variable"},{name:"space_xl15",kind:"variable"},{name:"width_md",kind:"variable"},{name:"width_sm",kind:"variable"},{name:"width_xs",kind:"variable"},{name:"border_color",kind:"variable"},{name:"border_style",kind:"variable"},{name:"border_color_1",kind:"variable"},{name:"border_color_2",kind:"variable"},{name:"border_color_3",kind:"variable"},{name:"border_color_4",kind:"variable"},{name:"border_color_5",kind:"variable"},{name:"border_color_a",kind:"variable"},{name:"border_color_b",kind:"variable"},{name:"border_color_c",kind:"variable"},{name:"border_color_d",kind:"variable"},{name:"border_color_e",kind:"variable"},{name:"border_color_f",kind:"variable"},{name:"border_color_g",kind:"variable"},{name:"border_color_h",kind:"variable"},{name:"border_color_i",kind:"variable"},{name:"border_width",kind:"variable"},{name:"border_width_1",kind:"variable"},{name:"border_width_2",kind:"variable"},{name:"border_width_3",kind:"variable"},{name:"border_width_4",kind:"variable"},{name:"border_width_5",kind:"variable"},{name:"border_width_6",kind:"variable"},{name:"outline_width",kind:"variable"},{name:"outline_width_1",kind:"variable"},{name:"outline_width_2",kind:"variable"},{name:"outline_width_3",kind:"variable"},{name:"outline_style",kind:"variable"},{name:"outline_color",kind:"variable"},{name:"radius_xl",kind:"variable"},{name:"radius_lg",kind:"variable"},{name:"radius_md",kind:"variable"},{name:"radius_sm",kind:"variable"},{name:"radius_xs",kind:"variable"},{name:"radius_xs2",kind:"variable"},{name:"radius_xs3",kind:"variable"},{name:"button_shadow",kind:"variable"},{name:"button_shadow_hover",kind:"variable"},{name:"button_shadow_active",kind:"variable"},{name:"input_fill",kind:"variable"},{name:"input_padding_y",kind:"variable"},{name:"input_padding_x",kind:"variable"},{name:"input_width_min",kind:"variable"},{name:"input_height",kind:"variable"},{name:"input_height_sm",kind:"variable"},{name:"input_height_inner",kind:"variable"},{name:"shadow_xs",kind:"variable"},{name:"shadow_top_xs",kind:"variable"},{name:"shadow_bottom_xs",kind:"variable"},{name:"shadow_inset_xs",kind:"variable"},{name:"shadow_inset_top_xs",kind:"variable"},{name:"shadow_inset_bottom_xs",kind:"variable"},{name:"shadow_sm",kind:"variable"},{name:"shadow_top_sm",kind:"variable"},{name:"shadow_bottom_sm",kind:"variable"},{name:"shadow_inset_sm",kind:"variable"},{name:"shadow_inset_top_sm",kind:"variable"},{name:"shadow_inset_bottom_sm",kind:"variable"},{name:"shadow_md",kind:"variable"},{name:"shadow_top_md",kind:"variable"},{name:"shadow_bottom_md",kind:"variable"},{name:"shadow_inset_md",kind:"variable"},{name:"shadow_inset_top_md",kind:"variable"},{name:"shadow_inset_bottom_md",kind:"variable"},{name:"shadow_lg",kind:"variable"},{name:"shadow_top_lg",kind:"variable"},{name:"shadow_bottom_lg",kind:"variable"},{name:"shadow_inset_lg",kind:"variable"},{name:"shadow_inset_top_lg",kind:"variable"},{name:"shadow_inset_bottom_lg",kind:"variable"},{name:"shadow_xl",kind:"variable"},{name:"shadow_top_xl",kind:"variable"},{name:"shadow_bottom_xl",kind:"variable"},{name:"shadow_inset_xl",kind:"variable"},{name:"shadow_inset_top_xl",kind:"variable"},{name:"shadow_inset_bottom_xl",kind:"variable"},{name:"shadow_color",kind:"variable"},{name:"shadow_color_highlight",kind:"variable"},{name:"shadow_color_glow",kind:"variable"},{name:"shadow_color_shroud",kind:"variable"},{name:"shadow_color_a",kind:"variable"},{name:"shadow_color_b",kind:"variable"},{name:"shadow_color_c",kind:"variable"},{name:"shadow_color_d",kind:"variable"},{name:"shadow_color_e",kind:"variable"},{name:"shadow_color_f",kind:"variable"},{name:"shadow_color_g",kind:"variable"},{name:"shadow_color_h",kind:"variable"},{name:"shadow_color_i",kind:"variable"},{name:"shadow_alpha_1",kind:"variable"},{name:"shadow_alpha_2",kind:"variable"},{name:"shadow_alpha_3",kind:"variable"},{name:"shadow_alpha_4",kind:"variable"},{name:"shadow_alpha_5",kind:"variable"},{name:"icon_size_xs",kind:"variable"},{name:"icon_size_sm",kind:"variable"},{name:"icon_size_md",kind:"variable"},{name:"icon_size_lg",kind:"variable"},{name:"icon_size_xl",kind:"variable"},{name:"icon_size_xl2",kind:"variable"},{name:"icon_size_xl3",kind:"variable"},{name:"duration_1",kind:"variable"},{name:"duration_2",kind:"variable"},{name:"duration_3",kind:"variable"},{name:"duration_4",kind:"variable"},{name:"duration_5",kind:"variable"},{name:"duration_6",kind:"variable"},{name:"fade_1",kind:"variable"},{name:"fade_2",kind:"variable"},{name:"fade_3",kind:"variable"},{name:"fade_4",kind:"variable"},{name:"fade_5",kind:"variable"},{name:"fade_6",kind:"variable"},{name:"disabled_opacity",kind:"variable"},{name:"default_variables",kind:"variable"}]}}};var ga=C("<!> <!>",1);function Da(a,e){E(e,!0),la.set(oa(pa,ua)),L(n=>{P.title="Moss - magical organic stylesheets"}),ta(a,{children:(n,l)=>{var i=ga(),o=g(i);N(o,()=>e.children);var _=R(o,2);ha(_,{}),p(n,i)},$$slots:{default:!0}}),A()}export{Da as component,Ma as universal};
