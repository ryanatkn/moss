import{d as J,a as r,t as e,f as d,c as _,b as n,s as T}from"../chunks/disclose-version.CV3ElF3D.js";import{p as K,a as Q,t as $,X as D}from"../chunks/runtime.C9BLlFkQ.js";import{g as S,i as C}from"../chunks/attributes.CCxnytQ2.js";import{C as x}from"../chunks/Code.BWxoXet5.js";import{T as Z}from"../chunks/Tome_Detail.CMRDjAzR.js";import{T as nn}from"../chunks/Tome_Link.CaTr1RYJ.js";import{G as M}from"../chunks/Github_Logo.C7xkyicJ.js";import{a as an}from"../chunks/tome.D1Gikq0z.js";import{D as A}from"../chunks/Details.DYeuQVCA.js";import{T as c}from"../chunks/Tome_Subheading.lL3acggC.js";const _n=`/* @ryanatkn/moss/style_utilities.css */

/* TODO @multiple docs in library */

/* TODO what would APIs look like that used classes to set variables? */

/*

Variable classes are a specialization of utility classes.
They couple style variables with CSS properties.

The utility classes not based on style variables are in \`style_utilities.css\`.

*/

/* TODO vite plugin for removing unused */

/* TODO display_flex? more predictable+verbose or shorthand? */

.relative {
	position: relative;
}
.absolute {
	position: absolute;
}
.fixed {
	position: fixed;
}
.sticky {
	position: sticky;
}
.static {
	position: static;
}

.overflow_auto {
	overflow: auto;
}
.overflow_hidden {
	overflow: hidden;
}
.overflow_scroll {
	overflow: scroll;
}
.overflow_clip {
	overflow: clip;
}
.overflow_visible {
	overflow: visible;
}

.overflow_x_auto {
	overflow-x: auto;
}
.overflow_x_hidden {
	overflow-x: hidden;
}
.overflow_x_scroll {
	overflow-x: scroll;
}
.overflow_x_clip {
	overflow-x: clip;
}
.overflow_x_visible {
	overflow-x: visible;
}

.overflow_y_auto {
	overflow-y: auto;
}
.overflow_y_hidden {
	overflow-y: hidden;
}
.overflow_y_scroll {
	overflow-y: scroll;
}
.overflow_y_clip {
	overflow-y: clip;
}
.overflow_y_visible {
	overflow-y: visible;
}

.inline {
	display: inline;
}
.inline_block {
	display: inline-block;
}
.block {
	display: block;
}
.display_none {
	display: none;
}
.display_contents {
	display: contents;
}
/* TODO lots of these, but optimize first? .display_table {
	display: table;
} */
.flex {
	display: flex;
}
.flex_1 {
	flex: 1;
}
.grid {
	display: grid;
}

.float_none {
	float: none;
}
.float_left {
	float: left;
}
.float_right {
	float: right;
}
.float_inline_start {
	float: inline-start;
}
.float_inline_end {
	float: inline-end;
}

.flip_x {
	transform: scaleX(-1);
}
.flip_y {
	transform: scaleY(-1);
}
.flip_xy {
	transform: scaleX(-1) scaleY(-1);
}

/*

text

*/

.ellipsis {
	display: block;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.pixelated {
	image-rendering: -webkit-optimize-contrast; /* Safari */
	image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */
	image-rendering: pixelated; /* in case crisp-edges isn't supported */
	image-rendering: crisp-edges; /* the recommended pixel art setting according to MDN */
}

/*

text

*/

.font_sans {
	font-family: var(--font_sans);
}
.font_mono {
	font-family: var(--font_mono);
}

.line_height_xs {
	line-height: var(--line_height_xs);
}
.line_height_sm {
	line-height: var(--line_height_sm);
}
.line_height_md {
	line-height: var(--line_height_md);
}
.line_height_lg {
	line-height: var(--line_height_lg);
}
.line_height_xl {
	line-height: var(--line_height_xl);
}

.size_xs {
	font-size: var(--size_xs);
}
.size_sm {
	font-size: var(--size_sm);
}
.size_md {
	font-size: var(--size_md);
}
.size_lg {
	font-size: var(--size_lg);
}
.size_xl {
	font-size: var(--size_xl);
}
.size_xl2 {
	font-size: var(--size_xl2);
}
.size_xl3 {
	font-size: var(--size_xl3);
}
.size_xl4 {
	font-size: var(--size_xl4);
}
.size_xl5 {
	font-size: var(--size_xl5);
}
.size_xl6 {
	font-size: var(--size_xl6);
}
.size_xl7 {
	font-size: var(--size_xl7);
}
.size_xl8 {
	font-size: var(--size_xl8);
}
.size_xl9 {
	font-size: var(--size_xl9);
}

.icon_size_xs {
	font-size: var(--icon_size_xs);
}
.icon_size_sm {
	font-size: var(--icon_size_sm);
}
.icon_size_md {
	font-size: var(--icon_size_md);
}
.icon_size_lg {
	font-size: var(--icon_size_lg);
}
.icon_size_xl {
	font-size: var(--icon_size_xl);
}
.icon_size_xl2 {
	font-size: var(--icon_size_xl2);
}
.icon_size_xl3 {
	font-size: var(--icon_size_xl3);
}

.text_align_center {
	text-align: center;
}
.text_align_right {
	text-align: right;
}
.text_align_left {
	text-align: left;
}
.text_align_justify {
	text-align: justify;
}

.font_weight_100 {
	font-weight: 100;
}
.font_weight_200 {
	font-weight: 200;
}
.font_weight_300 {
	font-weight: 300;
}
.font_weight_400 {
	font-weight: 400;
}
.font_weight_500 {
	font-weight: 500;
}
.font_weight_600 {
	font-weight: 600;
}
.font_weight_700 {
	font-weight: 700;
}
.font_weight_800 {
	font-weight: 800;
}
.font_weight_900 {
	font-weight: 900;
}

/*

colors

*/

.text_1 {
	color: var(--text_1);
}
.text_2 {
	color: var(--text_2);
}
.text_3 {
	color: var(--text_3);
}

.darken_1 {
	background-color: var(--darken_1);
}
.darken_2 {
	background-color: var(--darken_2);
}
.darken_3 {
	background-color: var(--darken_3);
}
.darken_4 {
	background-color: var(--darken_4);
}
.darken_5 {
	background-color: var(--darken_5);
}
.darken_6 {
	background-color: var(--darken_6);
}
.darken_7 {
	background-color: var(--darken_7);
}
.darken_8 {
	background-color: var(--darken_8);
}
.darken_9 {
	background-color: var(--darken_9);
}

.lighten_1 {
	background-color: var(--lighten_1);
}
.lighten_2 {
	background-color: var(--lighten_2);
}
.lighten_3 {
	background-color: var(--lighten_3);
}
.lighten_4 {
	background-color: var(--lighten_4);
}
.lighten_5 {
	background-color: var(--lighten_5);
}
.lighten_6 {
	background-color: var(--lighten_6);
}
.lighten_7 {
	background-color: var(--lighten_7);
}
.lighten_8 {
	background-color: var(--lighten_8);
}
.lighten_9 {
	background-color: var(--lighten_9);
}

.bg {
	background-color: var(--bg);
}

.fg {
	background-color: var(--fg);
}

.bg_1 {
	background-color: var(--bg_1);
}
.bg_2 {
	background-color: var(--bg_2);
}
.bg_3 {
	background-color: var(--bg_3);
}
.bg_4 {
	background-color: var(--bg_4);
}
.bg_5 {
	background-color: var(--bg_5);
}
.bg_6 {
	background-color: var(--bg_6);
}
.bg_7 {
	background-color: var(--bg_7);
}
.bg_8 {
	background-color: var(--bg_8);
}
.bg_9 {
	background-color: var(--bg_9);
}

.fg_1 {
	background-color: var(--fg_1);
}
.fg_2 {
	background-color: var(--fg_2);
}
.fg_3 {
	background-color: var(--fg_3);
}
.fg_4 {
	background-color: var(--fg_4);
}
.fg_5 {
	background-color: var(--fg_5);
}
.fg_6 {
	background-color: var(--fg_6);
}
.fg_7 {
	background-color: var(--fg_7);
}
.fg_8 {
	background-color: var(--fg_8);
}
.fg_9 {
	background-color: var(--fg_9);
}

.color_darken_1 {
	color: var(--darken_1);
}
.color_darken_2 {
	color: var(--darken_2);
}
.color_darken_3 {
	color: var(--darken_3);
}
.color_darken_4 {
	color: var(--darken_4);
}
.color_darken_5 {
	color: var(--darken_5);
}
.color_darken_6 {
	color: var(--darken_6);
}
.color_darken_7 {
	color: var(--darken_7);
}
.color_darken_8 {
	color: var(--darken_8);
}
.color_darken_9 {
	color: var(--darken_9);
}

.color_lighten_1 {
	color: var(--lighten_1);
}
.color_lighten_2 {
	color: var(--lighten_2);
}
.color_lighten_3 {
	color: var(--lighten_3);
}
.color_lighten_4 {
	color: var(--lighten_4);
}
.color_lighten_5 {
	color: var(--lighten_5);
}
.color_lighten_6 {
	color: var(--lighten_6);
}
.color_lighten_7 {
	color: var(--lighten_7);
}
.color_lighten_8 {
	color: var(--lighten_8);
}
.color_lighten_9 {
	color: var(--lighten_9);
}

.color_bg {
	color: var(--bg);
}

.color_fg {
	color: var(--fg);
}

.color_bg_1 {
	color: var(--bg_1);
}
.color_bg_2 {
	color: var(--bg_2);
}
.color_bg_3 {
	color: var(--bg_3);
}
.color_bg_4 {
	color: var(--bg_4);
}
.color_bg_5 {
	color: var(--bg_5);
}
.color_bg_6 {
	color: var(--bg_6);
}
.color_bg_7 {
	color: var(--bg_7);
}
.color_bg_8 {
	color: var(--bg_8);
}
.color_bg_9 {
	color: var(--bg_9);
}

.color_fg_1 {
	color: var(--fg_1);
}
.color_fg_2 {
	color: var(--fg_2);
}
.color_fg_3 {
	color: var(--fg_3);
}
.color_fg_4 {
	color: var(--fg_4);
}
.color_fg_5 {
	color: var(--fg_5);
}
.color_fg_6 {
	color: var(--fg_6);
}
.color_fg_7 {
	color: var(--fg_7);
}
.color_fg_8 {
	color: var(--fg_8);
}
.color_fg_9 {
	color: var(--fg_9);
}

.hue_a {
	--hue: var(--hue_a);
}
.hue_b {
	--hue: var(--hue_b);
}
.hue_c {
	--hue: var(--hue_c);
}
.hue_d {
	--hue: var(--hue_d);
}
.hue_e {
	--hue: var(--hue_e);
}
.hue_f {
	--hue: var(--hue_f);
}
.hue_g {
	--hue: var(--hue_g);
}

.color_a_1 {
	color: var(--color_a_1);
}
.color_a_2 {
	color: var(--color_a_2);
}
.color_a_3 {
	color: var(--color_a_3);
}
.color_a_4 {
	color: var(--color_a_4);
}
.color_a_5 {
	color: var(--color_a_5);
}
.color_a_6 {
	color: var(--color_a_6);
}
.color_a_7 {
	color: var(--color_a_7);
}
.color_a_8 {
	color: var(--color_a_8);
}
.color_a_9 {
	color: var(--color_a_9);
}
.color_b_1 {
	color: var(--color_b_1);
}
.color_b_2 {
	color: var(--color_b_2);
}
.color_b_3 {
	color: var(--color_b_3);
}
.color_b_4 {
	color: var(--color_b_4);
}
.color_b_5 {
	color: var(--color_b_5);
}
.color_b_6 {
	color: var(--color_b_6);
}
.color_b_7 {
	color: var(--color_b_7);
}
.color_b_8 {
	color: var(--color_b_8);
}
.color_b_9 {
	color: var(--color_b_9);
}
.color_c_1 {
	color: var(--color_c_1);
}
.color_c_2 {
	color: var(--color_c_2);
}
.color_c_3 {
	color: var(--color_c_3);
}
.color_c_4 {
	color: var(--color_c_4);
}
.color_c_5 {
	color: var(--color_c_5);
}
.color_c_6 {
	color: var(--color_c_6);
}
.color_c_7 {
	color: var(--color_c_7);
}
.color_c_8 {
	color: var(--color_c_8);
}
.color_c_9 {
	color: var(--color_c_9);
}
.color_d_1 {
	color: var(--color_d_1);
}
.color_d_2 {
	color: var(--color_d_2);
}
.color_d_3 {
	color: var(--color_d_3);
}
.color_d_4 {
	color: var(--color_d_4);
}
.color_d_5 {
	color: var(--color_d_5);
}
.color_d_6 {
	color: var(--color_d_6);
}
.color_d_7 {
	color: var(--color_d_7);
}
.color_d_8 {
	color: var(--color_d_8);
}
.color_d_9 {
	color: var(--color_d_9);
}
.color_e_1 {
	color: var(--color_e_1);
}
.color_e_2 {
	color: var(--color_e_2);
}
.color_e_3 {
	color: var(--color_e_3);
}
.color_e_4 {
	color: var(--color_e_4);
}
.color_e_5 {
	color: var(--color_e_5);
}
.color_e_6 {
	color: var(--color_e_6);
}
.color_e_7 {
	color: var(--color_e_7);
}
.color_e_8 {
	color: var(--color_e_8);
}
.color_e_9 {
	color: var(--color_e_9);
}
.color_f_1 {
	color: var(--color_f_1);
}
.color_f_2 {
	color: var(--color_f_2);
}
.color_f_3 {
	color: var(--color_f_3);
}
.color_f_4 {
	color: var(--color_f_4);
}
.color_f_5 {
	color: var(--color_f_5);
}
.color_f_6 {
	color: var(--color_f_6);
}
.color_f_7 {
	color: var(--color_f_7);
}
.color_f_8 {
	color: var(--color_f_8);
}
.color_f_9 {
	color: var(--color_f_9);
}
.color_g_1 {
	color: var(--color_g_1);
}
.color_g_2 {
	color: var(--color_g_2);
}
.color_g_3 {
	color: var(--color_g_3);
}
.color_g_4 {
	color: var(--color_g_4);
}
.color_g_5 {
	color: var(--color_g_5);
}
.color_g_6 {
	color: var(--color_g_6);
}
.color_g_7 {
	color: var(--color_g_7);
}
.color_g_8 {
	color: var(--color_g_8);
}
.color_g_9 {
	color: var(--color_g_9);
}

.bg_a_1 {
	background-color: var(--color_a_1);
}
.bg_a_2 {
	background-color: var(--color_a_2);
}
.bg_a_3 {
	background-color: var(--color_a_3);
}
.bg_a_4 {
	background-color: var(--color_a_4);
}
.bg_a_5 {
	background-color: var(--color_a_5);
}
.bg_a_6 {
	background-color: var(--color_a_6);
}
.bg_a_7 {
	background-color: var(--color_a_7);
}
.bg_a_8 {
	background-color: var(--color_a_8);
}
.bg_a_9 {
	background-color: var(--color_a_9);
}
.bg_b_1 {
	background-color: var(--color_b_1);
}
.bg_b_2 {
	background-color: var(--color_b_2);
}
.bg_b_3 {
	background-color: var(--color_b_3);
}
.bg_b_4 {
	background-color: var(--color_b_4);
}
.bg_b_5 {
	background-color: var(--color_b_5);
}
.bg_b_6 {
	background-color: var(--color_b_6);
}
.bg_b_7 {
	background-color: var(--color_b_7);
}
.bg_b_8 {
	background-color: var(--color_b_8);
}
.bg_b_9 {
	background-color: var(--color_b_9);
}
.bg_c_1 {
	background-color: var(--color_c_1);
}
.bg_c_2 {
	background-color: var(--color_c_2);
}
.bg_c_3 {
	background-color: var(--color_c_3);
}
.bg_c_4 {
	background-color: var(--color_c_4);
}
.bg_c_5 {
	background-color: var(--color_c_5);
}
.bg_c_6 {
	background-color: var(--color_c_6);
}
.bg_c_7 {
	background-color: var(--color_c_7);
}
.bg_c_8 {
	background-color: var(--color_c_8);
}
.bg_c_9 {
	background-color: var(--color_c_9);
}
.bg_d_1 {
	background-color: var(--color_d_1);
}
.bg_d_2 {
	background-color: var(--color_d_2);
}
.bg_d_3 {
	background-color: var(--color_d_3);
}
.bg_d_4 {
	background-color: var(--color_d_4);
}
.bg_d_5 {
	background-color: var(--color_d_5);
}
.bg_d_6 {
	background-color: var(--color_d_6);
}
.bg_d_7 {
	background-color: var(--color_d_7);
}
.bg_d_8 {
	background-color: var(--color_d_8);
}
.bg_d_9 {
	background-color: var(--color_d_9);
}
.bg_e_1 {
	background-color: var(--color_e_1);
}
.bg_e_2 {
	background-color: var(--color_e_2);
}
.bg_e_3 {
	background-color: var(--color_e_3);
}
.bg_e_4 {
	background-color: var(--color_e_4);
}
.bg_e_5 {
	background-color: var(--color_e_5);
}
.bg_e_6 {
	background-color: var(--color_e_6);
}
.bg_e_7 {
	background-color: var(--color_e_7);
}
.bg_e_8 {
	background-color: var(--color_e_8);
}
.bg_e_9 {
	background-color: var(--color_e_9);
}
.bg_f_1 {
	background-color: var(--color_f_1);
}
.bg_f_2 {
	background-color: var(--color_f_2);
}
.bg_f_3 {
	background-color: var(--color_f_3);
}
.bg_f_4 {
	background-color: var(--color_f_4);
}
.bg_f_5 {
	background-color: var(--color_f_5);
}
.bg_f_6 {
	background-color: var(--color_f_6);
}
.bg_f_7 {
	background-color: var(--color_f_7);
}
.bg_f_8 {
	background-color: var(--color_f_8);
}
.bg_f_9 {
	background-color: var(--color_f_9);
}
.bg_g_1 {
	background-color: var(--color_g_1);
}
.bg_g_2 {
	background-color: var(--color_g_2);
}
.bg_g_3 {
	background-color: var(--color_g_3);
}
.bg_g_4 {
	background-color: var(--color_g_4);
}
.bg_g_5 {
	background-color: var(--color_g_5);
}
.bg_g_6 {
	background-color: var(--color_g_6);
}
.bg_g_7 {
	background-color: var(--color_g_7);
}
.bg_g_8 {
	background-color: var(--color_g_8);
}
.bg_g_9 {
	background-color: var(--color_g_9);
}

/*

borders

*/
.border_color_1 {
	border-color: var(--border_color_1);
}
.border_color_2 {
	border-color: var(--border_color_2);
}
.border_color_3 {
	border-color: var(--border_color_3);
}
.border_color_4 {
	border-color: var(--border_color_4);
}
.border_color_5 {
	border-color: var(--border_color_5);
}
.border_color_a {
	border-color: var(--border_color_a);
}
.border_color_b {
	border-color: var(--border_color_b);
}
.border_color_c {
	border-color: var(--border_color_c);
}
.border_color_d {
	border-color: var(--border_color_d);
}
.border_color_e {
	border-color: var(--border_color_e);
}
.border_color_f {
	border-color: var(--border_color_f);
}
.border_color_g {
	border-color: var(--border_color_g);
}
.border_color_disabled {
	border-color: var(--border_color_disabled);
}

.border_width_0 {
	border-width: 0;
}
.border_width_1 {
	border-width: var(--border_width_1);
}
.border_width_2 {
	border-width: var(--border_width_2);
}
.border_width_3 {
	border-width: var(--border_width_3);
}
.border_width_4 {
	border-width: var(--border_width_4);
}
.border_width_5 {
	border-width: var(--border_width_5);
}
.border_width_6 {
	border-width: var(--border_width_6);
}

.outline_width_0 {
	outline-width: 0;
}
.outline_width_1 {
	outline-width: var(--outline_width_1);
}
.outline_width_2 {
	outline-width: var(--outline_width_2);
}
.outline_width_3 {
	outline-width: var(--outline_width_3);
}

.radius_100 {
	border-radius: 100%;
}
.radius_50 {
	border-radius: 50%;
}
.radius_0 {
	border-radius: 0;
}
.radius_xs3 {
	border-radius: var(--radius_xs3);
}
.radius_xs2 {
	border-radius: var(--radius_xs2);
}
.radius_xs {
	border-radius: var(--radius_xs);
}
.radius_sm {
	border-radius: var(--radius_sm);
}
.radius_md {
	border-radius: var(--radius_md);
}
.radius_lg {
	border-radius: var(--radius_lg);
}
.radius_xl {
	border-radius: var(--radius_xl);
}

/* TODO add the top/right/bottom/left variants */
/* @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style */
.border_none {
	border-style: none;
}
.border_hidden {
	border-style: hidden;
}
.border_dotted {
	border-style: dotted;
}
.border_dashed {
	border-style: dashed;
}
.border_solid {
	border-style: solid;
}
.border_double {
	border-style: double;
}
.border_groove {
	border-style: groove;
}
.border_ridge {
	border-style: ridge;
}
.border_inset {
	border-style: inset;
}
.border_outset {
	border-style: outset;
}

/*

shading

*/

.fade_0 {
	opacity: 0;
}
.fade_100 {
	opacity: 1;
}
.fade_1 {
	opacity: var(--fade_1);
}
.fade_2 {
	opacity: var(--fade_2);
}
.fade_3 {
	opacity: var(--fade_3);
}
.fade_4 {
	opacity: var(--fade_4);
}
.fade_5 {
	opacity: var(--fade_5);
}
.fade_6 {
	opacity: var(--fade_6);
}

/* shadows */

.shadow_xs {
	box-shadow: var(--shadow_xs);
}
.shadow_sm {
	box-shadow: var(--shadow_sm);
}
.shadow_md {
	box-shadow: var(--shadow_md);
}
.shadow_lg {
	box-shadow: var(--shadow_lg);
}
.shadow_xl {
	box-shadow: var(--shadow_xl);
}
.shadow_outset_xs {
	box-shadow: var(--shadow_outset_xs);
}
.shadow_outset_sm {
	box-shadow: var(--shadow_outset_sm);
}
.shadow_outset_md {
	box-shadow: var(--shadow_outset_md);
}
.shadow_outset_lg {
	box-shadow: var(--shadow_outset_lg);
}
.shadow_outset_xl {
	box-shadow: var(--shadow_outset_xl);
}
.shadow_inset_xs {
	box-shadow: var(--shadow_inset_xs);
}
.shadow_inset_sm {
	box-shadow: var(--shadow_inset_sm);
}
.shadow_inset_md {
	box-shadow: var(--shadow_inset_md);
}
.shadow_inset_lg {
	box-shadow: var(--shadow_inset_lg);
}
.shadow_inset_xl {
	box-shadow: var(--shadow_inset_xl);
}
.shadow_a_xs {
	box-shadow: var(--shadow_a_xs);
}
.shadow_a_sm {
	box-shadow: var(--shadow_a_sm);
}
.shadow_a_md {
	box-shadow: var(--shadow_a_md);
}
.shadow_a_lg {
	box-shadow: var(--shadow_a_lg);
}
.shadow_a_xl {
	box-shadow: var(--shadow_a_xl);
}
.shadow_a_outset_xs {
	box-shadow: var(--shadow_a_outset_xs);
}
.shadow_a_outset_sm {
	box-shadow: var(--shadow_a_outset_sm);
}
.shadow_a_outset_md {
	box-shadow: var(--shadow_a_outset_md);
}
.shadow_a_outset_lg {
	box-shadow: var(--shadow_a_outset_lg);
}
.shadow_a_outset_xl {
	box-shadow: var(--shadow_a_outset_xl);
}
.shadow_a_inset_xs {
	box-shadow: var(--shadow_a_inset_xs);
}
.shadow_a_inset_sm {
	box-shadow: var(--shadow_a_inset_sm);
}
.shadow_a_inset_md {
	box-shadow: var(--shadow_a_inset_md);
}
.shadow_a_inset_lg {
	box-shadow: var(--shadow_a_inset_lg);
}
.shadow_a_inset_xl {
	box-shadow: var(--shadow_a_inset_xl);
}
.shadow_b_xs {
	box-shadow: var(--shadow_b_xs);
}
.shadow_b_sm {
	box-shadow: var(--shadow_b_sm);
}
.shadow_b_md {
	box-shadow: var(--shadow_b_md);
}
.shadow_b_lg {
	box-shadow: var(--shadow_b_lg);
}
.shadow_b_xl {
	box-shadow: var(--shadow_b_xl);
}
.shadow_b_outset_xs {
	box-shadow: var(--shadow_b_outset_xs);
}
.shadow_b_outset_sm {
	box-shadow: var(--shadow_b_outset_sm);
}
.shadow_b_outset_md {
	box-shadow: var(--shadow_b_outset_md);
}
.shadow_b_outset_lg {
	box-shadow: var(--shadow_b_outset_lg);
}
.shadow_b_outset_xl {
	box-shadow: var(--shadow_b_outset_xl);
}
.shadow_b_inset_xs {
	box-shadow: var(--shadow_b_inset_xs);
}
.shadow_b_inset_sm {
	box-shadow: var(--shadow_b_inset_sm);
}
.shadow_b_inset_md {
	box-shadow: var(--shadow_b_inset_md);
}
.shadow_b_inset_lg {
	box-shadow: var(--shadow_b_inset_lg);
}
.shadow_b_inset_xl {
	box-shadow: var(--shadow_b_inset_xl);
}
.shadow_c_xs {
	box-shadow: var(--shadow_c_xs);
}
.shadow_c_sm {
	box-shadow: var(--shadow_c_sm);
}
.shadow_c_md {
	box-shadow: var(--shadow_c_md);
}
.shadow_c_lg {
	box-shadow: var(--shadow_c_lg);
}
.shadow_c_xl {
	box-shadow: var(--shadow_c_xl);
}
.shadow_c_outset_xs {
	box-shadow: var(--shadow_c_outset_xs);
}
.shadow_c_outset_sm {
	box-shadow: var(--shadow_c_outset_sm);
}
.shadow_c_outset_md {
	box-shadow: var(--shadow_c_outset_md);
}
.shadow_c_outset_lg {
	box-shadow: var(--shadow_c_outset_lg);
}
.shadow_c_outset_xl {
	box-shadow: var(--shadow_c_outset_xl);
}
.shadow_c_inset_xs {
	box-shadow: var(--shadow_c_inset_xs);
}
.shadow_c_inset_sm {
	box-shadow: var(--shadow_c_inset_sm);
}
.shadow_c_inset_md {
	box-shadow: var(--shadow_c_inset_md);
}
.shadow_c_inset_lg {
	box-shadow: var(--shadow_c_inset_lg);
}
.shadow_c_inset_xl {
	box-shadow: var(--shadow_c_inset_xl);
}
.shadow_d_xs {
	box-shadow: var(--shadow_d_xs);
}
.shadow_d_sm {
	box-shadow: var(--shadow_d_sm);
}
.shadow_d_md {
	box-shadow: var(--shadow_d_md);
}
.shadow_d_lg {
	box-shadow: var(--shadow_d_lg);
}
.shadow_d_xl {
	box-shadow: var(--shadow_d_xl);
}
.shadow_d_outset_xs {
	box-shadow: var(--shadow_d_outset_xs);
}
.shadow_d_outset_sm {
	box-shadow: var(--shadow_d_outset_sm);
}
.shadow_d_outset_md {
	box-shadow: var(--shadow_d_outset_md);
}
.shadow_d_outset_lg {
	box-shadow: var(--shadow_d_outset_lg);
}
.shadow_d_outset_xl {
	box-shadow: var(--shadow_d_outset_xl);
}
.shadow_d_inset_xs {
	box-shadow: var(--shadow_d_inset_xs);
}
.shadow_d_inset_sm {
	box-shadow: var(--shadow_d_inset_sm);
}
.shadow_d_inset_md {
	box-shadow: var(--shadow_d_inset_md);
}
.shadow_d_inset_lg {
	box-shadow: var(--shadow_d_inset_lg);
}
.shadow_d_inset_xl {
	box-shadow: var(--shadow_d_inset_xl);
}
.shadow_e_xs {
	box-shadow: var(--shadow_e_xs);
}
.shadow_e_sm {
	box-shadow: var(--shadow_e_sm);
}
.shadow_e_md {
	box-shadow: var(--shadow_e_md);
}
.shadow_e_lg {
	box-shadow: var(--shadow_e_lg);
}
.shadow_e_xl {
	box-shadow: var(--shadow_e_xl);
}
.shadow_e_outset_xs {
	box-shadow: var(--shadow_e_outset_xs);
}
.shadow_e_outset_sm {
	box-shadow: var(--shadow_e_outset_sm);
}
.shadow_e_outset_md {
	box-shadow: var(--shadow_e_outset_md);
}
.shadow_e_outset_lg {
	box-shadow: var(--shadow_e_outset_lg);
}
.shadow_e_outset_xl {
	box-shadow: var(--shadow_e_outset_xl);
}
.shadow_e_inset_xs {
	box-shadow: var(--shadow_e_inset_xs);
}
.shadow_e_inset_sm {
	box-shadow: var(--shadow_e_inset_sm);
}
.shadow_e_inset_md {
	box-shadow: var(--shadow_e_inset_md);
}
.shadow_e_inset_lg {
	box-shadow: var(--shadow_e_inset_lg);
}
.shadow_e_inset_xl {
	box-shadow: var(--shadow_e_inset_xl);
}
.shadow_f_xs {
	box-shadow: var(--shadow_f_xs);
}
.shadow_f_sm {
	box-shadow: var(--shadow_f_sm);
}
.shadow_f_md {
	box-shadow: var(--shadow_f_md);
}
.shadow_f_lg {
	box-shadow: var(--shadow_f_lg);
}
.shadow_f_xl {
	box-shadow: var(--shadow_f_xl);
}
.shadow_f_outset_xs {
	box-shadow: var(--shadow_f_outset_xs);
}
.shadow_f_outset_sm {
	box-shadow: var(--shadow_f_outset_sm);
}
.shadow_f_outset_md {
	box-shadow: var(--shadow_f_outset_md);
}
.shadow_f_outset_lg {
	box-shadow: var(--shadow_f_outset_lg);
}
.shadow_f_outset_xl {
	box-shadow: var(--shadow_f_outset_xl);
}
.shadow_f_inset_xs {
	box-shadow: var(--shadow_f_inset_xs);
}
.shadow_f_inset_sm {
	box-shadow: var(--shadow_f_inset_sm);
}
.shadow_f_inset_md {
	box-shadow: var(--shadow_f_inset_md);
}
.shadow_f_inset_lg {
	box-shadow: var(--shadow_f_inset_lg);
}
.shadow_f_inset_xl {
	box-shadow: var(--shadow_f_inset_xl);
}
.shadow_g_xs {
	box-shadow: var(--shadow_g_xs);
}
.shadow_g_sm {
	box-shadow: var(--shadow_g_sm);
}
.shadow_g_md {
	box-shadow: var(--shadow_g_md);
}
.shadow_g_lg {
	box-shadow: var(--shadow_g_lg);
}
.shadow_g_xl {
	box-shadow: var(--shadow_g_xl);
}
.shadow_g_outset_xs {
	box-shadow: var(--shadow_g_outset_xs);
}
.shadow_g_outset_sm {
	box-shadow: var(--shadow_g_outset_sm);
}
.shadow_g_outset_md {
	box-shadow: var(--shadow_g_outset_md);
}
.shadow_g_outset_lg {
	box-shadow: var(--shadow_g_outset_lg);
}
.shadow_g_outset_xl {
	box-shadow: var(--shadow_g_outset_xl);
}
.shadow_g_inset_xs {
	box-shadow: var(--shadow_g_inset_xs);
}
.shadow_g_inset_sm {
	box-shadow: var(--shadow_g_inset_sm);
}
.shadow_g_inset_md {
	box-shadow: var(--shadow_g_inset_md);
}
.shadow_g_inset_lg {
	box-shadow: var(--shadow_g_inset_lg);
}
.shadow_g_inset_xl {
	box-shadow: var(--shadow_g_inset_xl);
}
/* higher specificity */
/* TODO which order should these be in? */
.shadow_inherit {
	box-shadow: inherit;
}
.shadow_initial {
	box-shadow: initial;
}
.shadow_none {
	box-shadow: none;
}

/*

layout

*/

.w_0 {
	width: 0;
}
.w_100 {
	width: 100%;
}
.w_xs {
	width: var(--space_xs);
}
.w_sm {
	width: var(--space_sm);
}
.w_md {
	width: var(--space_md);
}
.w_lg {
	width: var(--space_lg);
}
.w_xl {
	width: var(--space_xl);
}
.w_xl2 {
	width: var(--space_xl2);
}
.w_xl3 {
	width: var(--space_xl3);
}
.w_xl4 {
	width: var(--space_xl4);
}
.w_xl5 {
	width: var(--space_xl5);
}
.w_xl6 {
	width: var(--space_xl6);
}
.w_xl7 {
	width: var(--space_xl7);
}
.w_xl8 {
	width: var(--space_xl8);
}
.w_xl9 {
	width: var(--space_xl9);
}
.w_xl10 {
	width: var(--space_xl10);
}
.w_xl11 {
	width: var(--space_xl11);
}
.w_xl12 {
	width: var(--space_xl12);
}
.w_xl13 {
	width: var(--space_xl13);
}
.w_xl14 {
	width: var(--space_xl14);
}
.w_xl15 {
	width: var(--space_xl15);
}

.h_0 {
	height: 0;
}
.h_100 {
	height: 100%;
}
.h_xs {
	height: var(--space_xs);
}
.h_sm {
	height: var(--space_sm);
}
.h_md {
	height: var(--space_md);
}
.h_lg {
	height: var(--space_lg);
}
.h_xl {
	height: var(--space_xl);
}
.h_xl2 {
	height: var(--space_xl2);
}
.h_xl3 {
	height: var(--space_xl3);
}
.h_xl4 {
	height: var(--space_xl4);
}
.h_xl5 {
	height: var(--space_xl5);
}
.h_xl6 {
	height: var(--space_xl6);
}
.h_xl7 {
	height: var(--space_xl7);
}
.h_xl8 {
	height: var(--space_xl8);
}
.h_xl9 {
	height: var(--space_xl9);
}
.h_xl10 {
	height: var(--space_xl10);
}
.h_xl11 {
	height: var(--space_xl11);
}
.h_xl12 {
	height: var(--space_xl12);
}
.h_xl13 {
	height: var(--space_xl13);
}
.h_xl14 {
	height: var(--space_xl14);
}
.h_xl15 {
	height: var(--space_xl15);
}

.p_0 {
	padding: 0;
}
.p_xs5 {
	padding: var(--space_xs5);
}
.p_xs4 {
	padding: var(--space_xs4);
}
.p_xs3 {
	padding: var(--space_xs3);
}
.p_xs2 {
	padding: var(--space_xs2);
}
.p_xs {
	padding: var(--space_xs);
}
.p_sm {
	padding: var(--space_sm);
}
.p_md {
	padding: var(--space_md);
}
.p_lg {
	padding: var(--space_lg);
}
.p_xl {
	padding: var(--space_xl);
}
.p_xl2 {
	padding: var(--space_xl2);
}
.p_xl3 {
	padding: var(--space_xl3);
}
.p_xl4 {
	padding: var(--space_xl4);
}
.p_xl5 {
	padding: var(--space_xl5);
}
.p_xl6 {
	padding: var(--space_xl6);
}
.p_xl7 {
	padding: var(--space_xl7);
}
.p_xl8 {
	padding: var(--space_xl8);
}
.p_xl9 {
	padding: var(--space_xl9);
}
.p_xl10 {
	padding: var(--space_xl10);
}
.p_xl11 {
	padding: var(--space_xl11);
}
.p_xl12 {
	padding: var(--space_xl12);
}
.p_xl13 {
	padding: var(--space_xl13);
}
.p_xl14 {
	padding: var(--space_xl14);
}
.p_xl15 {
	padding: var(--space_xl15);
}

.pt_0 {
	padding-top: 0;
}
.pt_xs5 {
	padding-top: var(--space_xs5);
}
.pt_xs4 {
	padding-top: var(--space_xs4);
}
.pt_xs3 {
	padding-top: var(--space_xs3);
}
.pt_xs2 {
	padding-top: var(--space_xs2);
}
.pt_xs {
	padding-top: var(--space_xs);
}
.pt_sm {
	padding-top: var(--space_sm);
}
.pt_md {
	padding-top: var(--space_md);
}
.pt_lg {
	padding-top: var(--space_lg);
}
.pt_xl {
	padding-top: var(--space_xl);
}
.pt_xl2 {
	padding-top: var(--space_xl2);
}
.pt_xl3 {
	padding-top: var(--space_xl3);
}
.pt_xl4 {
	padding-top: var(--space_xl4);
}
.pt_xl5 {
	padding-top: var(--space_xl5);
}
.pt_xl6 {
	padding-top: var(--space_xl6);
}
.pt_xl7 {
	padding-top: var(--space_xl7);
}
.pt_xl8 {
	padding-top: var(--space_xl8);
}
.pt_xl9 {
	padding-top: var(--space_xl9);
}
.pt_xl10 {
	padding-top: var(--space_xl10);
}
.pt_xl11 {
	padding-top: var(--space_xl11);
}
.pt_xl12 {
	padding-top: var(--space_xl12);
}
.pt_xl13 {
	padding-top: var(--space_xl13);
}
.pt_xl14 {
	padding-top: var(--space_xl14);
}
.pt_xl15 {
	padding-top: var(--space_xl15);
}

.pr_0 {
	padding-right: 0;
}
.pr_xs5 {
	padding-right: var(--space_xs5);
}
.pr_xs4 {
	padding-right: var(--space_xs4);
}
.pr_xs3 {
	padding-right: var(--space_xs3);
}
.pr_xs2 {
	padding-right: var(--space_xs2);
}
.pr_xs {
	padding-right: var(--space_xs);
}
.pr_sm {
	padding-right: var(--space_sm);
}
.pr_md {
	padding-right: var(--space_md);
}
.pr_lg {
	padding-right: var(--space_lg);
}
.pr_xl {
	padding-right: var(--space_xl);
}
.pr_xl2 {
	padding-right: var(--space_xl2);
}
.pr_xl3 {
	padding-right: var(--space_xl3);
}
.pr_xl4 {
	padding-right: var(--space_xl4);
}
.pr_xl5 {
	padding-right: var(--space_xl5);
}
.pr_xl6 {
	padding-right: var(--space_xl6);
}
.pr_xl7 {
	padding-right: var(--space_xl7);
}
.pr_xl8 {
	padding-right: var(--space_xl8);
}
.pr_xl9 {
	padding-right: var(--space_xl9);
}
.pr_xl10 {
	padding-right: var(--space_xl10);
}
.pr_xl11 {
	padding-right: var(--space_xl11);
}
.pr_xl12 {
	padding-right: var(--space_xl12);
}
.pr_xl13 {
	padding-right: var(--space_xl13);
}
.pr_xl14 {
	padding-right: var(--space_xl14);
}
.pr_xl15 {
	padding-right: var(--space_xl15);
}

.pb_0 {
	padding-bottom: 0;
}
.pb_xs5 {
	padding-bottom: var(--space_xs5);
}
.pb_xs4 {
	padding-bottom: var(--space_xs4);
}
.pb_xs3 {
	padding-bottom: var(--space_xs3);
}
.pb_xs2 {
	padding-bottom: var(--space_xs2);
}
.pb_xs {
	padding-bottom: var(--space_xs);
}
.pb_sm {
	padding-bottom: var(--space_sm);
}
.pb_md {
	padding-bottom: var(--space_md);
}
.pb_lg {
	padding-bottom: var(--space_lg);
}
.pb_xl {
	padding-bottom: var(--space_xl);
}
.pb_xl2 {
	padding-bottom: var(--space_xl2);
}
.pb_xl3 {
	padding-bottom: var(--space_xl3);
}
.pb_xl4 {
	padding-bottom: var(--space_xl4);
}
.pb_xl5 {
	padding-bottom: var(--space_xl5);
}
.pb_xl6 {
	padding-bottom: var(--space_xl6);
}
.pb_xl7 {
	padding-bottom: var(--space_xl7);
}
.pb_xl8 {
	padding-bottom: var(--space_xl8);
}
.pb_xl9 {
	padding-bottom: var(--space_xl9);
}
.pb_xl10 {
	padding-bottom: var(--space_xl10);
}
.pb_xl11 {
	padding-bottom: var(--space_xl11);
}
.pb_xl12 {
	padding-bottom: var(--space_xl12);
}
.pb_xl13 {
	padding-bottom: var(--space_xl13);
}
.pb_xl14 {
	padding-bottom: var(--space_xl14);
}
.pb_xl15 {
	padding-bottom: var(--space_xl15);
}

.pl_0 {
	padding-left: 0;
}
.pl_xs5 {
	padding-left: var(--space_xs5);
}
.pl_xs4 {
	padding-left: var(--space_xs4);
}
.pl_xs3 {
	padding-left: var(--space_xs3);
}
.pl_xs2 {
	padding-left: var(--space_xs2);
}
.pl_xs {
	padding-left: var(--space_xs);
}
.pl_sm {
	padding-left: var(--space_sm);
}
.pl_md {
	padding-left: var(--space_md);
}
.pl_lg {
	padding-left: var(--space_lg);
}
.pl_xl {
	padding-left: var(--space_xl);
}
.pl_xl2 {
	padding-left: var(--space_xl2);
}
.pl_xl3 {
	padding-left: var(--space_xl3);
}
.pl_xl4 {
	padding-left: var(--space_xl4);
}
.pl_xl5 {
	padding-left: var(--space_xl5);
}
.pl_xl6 {
	padding-left: var(--space_xl6);
}
.pl_xl7 {
	padding-left: var(--space_xl7);
}
.pl_xl8 {
	padding-left: var(--space_xl8);
}
.pl_xl9 {
	padding-left: var(--space_xl9);
}
.pl_xl10 {
	padding-left: var(--space_xl10);
}
.pl_xl11 {
	padding-left: var(--space_xl11);
}
.pl_xl12 {
	padding-left: var(--space_xl12);
}
.pl_xl13 {
	padding-left: var(--space_xl13);
}
.pl_xl14 {
	padding-left: var(--space_xl14);
}
.pl_xl15 {
	padding-left: var(--space_xl15);
}

.px_0 {
	padding-left: 0;
	padding-right: 0;
}
.px_xs5 {
	padding-left: var(--space_xs5);
	padding-right: var(--space_xs5);
}
.px_xs4 {
	padding-left: var(--space_xs4);
	padding-right: var(--space_xs4);
}
.px_xs3 {
	padding-left: var(--space_xs3);
	padding-right: var(--space_xs3);
}
.px_xs2 {
	padding-left: var(--space_xs2);
	padding-right: var(--space_xs2);
}
.px_xs {
	padding-left: var(--space_xs);
	padding-right: var(--space_xs);
}
.px_sm {
	padding-left: var(--space_sm);
	padding-right: var(--space_sm);
}
.px_md {
	padding-left: var(--space_md);
	padding-right: var(--space_md);
}
.px_lg {
	padding-left: var(--space_lg);
	padding-right: var(--space_lg);
}
.px_xl {
	padding-left: var(--space_xl);
	padding-right: var(--space_xl);
}
.px_xl2 {
	padding-left: var(--space_xl2);
	padding-right: var(--space_xl2);
}
.px_xl3 {
	padding-left: var(--space_xl3);
	padding-right: var(--space_xl3);
}
.px_xl4 {
	padding-left: var(--space_xl4);
	padding-right: var(--space_xl4);
}
.px_xl5 {
	padding-left: var(--space_xl5);
	padding-right: var(--space_xl5);
}
.px_xl6 {
	padding-left: var(--space_xl6);
	padding-right: var(--space_xl6);
}
.px_xl7 {
	padding-left: var(--space_xl7);
	padding-right: var(--space_xl7);
}
.px_xl8 {
	padding-left: var(--space_xl8);
	padding-right: var(--space_xl8);
}
.px_xl9 {
	padding-left: var(--space_xl9);
	padding-right: var(--space_xl9);
}
.px_xl10 {
	padding-left: var(--space_xl10);
	padding-right: var(--space_xl10);
}
.px_xl11 {
	padding-left: var(--space_xl11);
	padding-right: var(--space_xl11);
}
.px_xl12 {
	padding-left: var(--space_xl12);
	padding-right: var(--space_xl12);
}
.px_xl13 {
	padding-left: var(--space_xl13);
	padding-right: var(--space_xl13);
}
.px_xl14 {
	padding-left: var(--space_xl14);
	padding-right: var(--space_xl14);
}
.px_xl15 {
	padding-left: var(--space_xl15);
	padding-right: var(--space_xl15);
}

.py_0 {
	padding-top: 0;
	padding-bottom: 0;
}
.py_xs5 {
	padding-top: var(--space_xs5);
	padding-bottom: var(--space_xs5);
}
.py_xs4 {
	padding-top: var(--space_xs4);
	padding-bottom: var(--space_xs4);
}
.py_xs3 {
	padding-top: var(--space_xs3);
	padding-bottom: var(--space_xs3);
}
.py_xs2 {
	padding-top: var(--space_xs2);
	padding-bottom: var(--space_xs2);
}
.py_xs {
	padding-top: var(--space_xs);
	padding-bottom: var(--space_xs);
}
.py_sm {
	padding-top: var(--space_sm);
	padding-bottom: var(--space_sm);
}
.py_md {
	padding-top: var(--space_md);
	padding-bottom: var(--space_md);
}
.py_lg {
	padding-top: var(--space_lg);
	padding-bottom: var(--space_lg);
}
.py_xl {
	padding-top: var(--space_xl);
	padding-bottom: var(--space_xl);
}
.py_xl2 {
	padding-top: var(--space_xl2);
	padding-bottom: var(--space_xl2);
}
.py_xl3 {
	padding-top: var(--space_xl3);
	padding-bottom: var(--space_xl3);
}
.py_xl4 {
	padding-top: var(--space_xl4);
	padding-bottom: var(--space_xl4);
}
.py_xl5 {
	padding-top: var(--space_xl5);
	padding-bottom: var(--space_xl5);
}
.py_xl6 {
	padding-top: var(--space_xl6);
	padding-bottom: var(--space_xl6);
}
.py_xl7 {
	padding-top: var(--space_xl7);
	padding-bottom: var(--space_xl7);
}
.py_xl8 {
	padding-top: var(--space_xl8);
	padding-bottom: var(--space_xl8);
}
.py_xl9 {
	padding-top: var(--space_xl9);
	padding-bottom: var(--space_xl9);
}
.py_xl10 {
	padding-top: var(--space_xl10);
	padding-bottom: var(--space_xl10);
}
.py_xl11 {
	padding-top: var(--space_xl11);
	padding-bottom: var(--space_xl11);
}
.py_xl12 {
	padding-top: var(--space_xl12);
	padding-bottom: var(--space_xl12);
}
.py_xl13 {
	padding-top: var(--space_xl13);
	padding-bottom: var(--space_xl13);
}
.py_xl14 {
	padding-top: var(--space_xl14);
	padding-bottom: var(--space_xl14);
}
.py_xl15 {
	padding-top: var(--space_xl15);
	padding-bottom: var(--space_xl15);
}

.m_auto {
	margin: auto;
}
.mx_auto {
	margin-left: auto;
	margin-right: auto;
}
.my_auto {
	margin-top: auto;
	margin-bottom: auto;
}

.m_0 {
	margin: 0;
}
.m_xs5 {
	margin: var(--space_xs5);
}
.m_xs4 {
	margin: var(--space_xs4);
}
.m_xs3 {
	margin: var(--space_xs3);
}
.m_xs2 {
	margin: var(--space_xs2);
}
.m_xs {
	margin: var(--space_xs);
}
.m_sm {
	margin: var(--space_sm);
}
.m_md {
	margin: var(--space_md);
}
.mlg {
	margin: var(--space_lg);
}
.m_xl {
	margin: var(--space_xl);
}
.m_xl2 {
	margin: var(--space_xl2);
}
.m_xl3 {
	margin: var(--space_xl3);
}
.m_xl4 {
	margin: var(--space_xl4);
}
.m_xl5 {
	margin: var(--space_xl5);
}
.m_xl6 {
	margin: var(--space_xl6);
}
.m_xl7 {
	margin: var(--space_xl7);
}
.m_xl8 {
	margin: var(--space_xl8);
}
.m_xl9 {
	margin: var(--space_xl9);
}
.m_xl10 {
	margin: var(--space_xl10);
}
.m_xl11 {
	margin: var(--space_xl11);
}
.m_xl12 {
	margin: var(--space_xl12);
}
.m_xl13 {
	margin: var(--space_xl13);
}
.m_xl14 {
	margin: var(--space_xl14);
}
.m_xl15 {
	margin: var(--space_xl15);
}

.mt_0 {
	margin-top: 0;
}
.mt_xs5 {
	margin-top: var(--space_xs5);
}
.mt_xs4 {
	margin-top: var(--space_xs4);
}
.mt_xs3 {
	margin-top: var(--space_xs3);
}
.mt_xs2 {
	margin-top: var(--space_xs2);
}
.mt_xs {
	margin-top: var(--space_xs);
}
.mt_sm {
	margin-top: var(--space_sm);
}
.mt_md {
	margin-top: var(--space_md);
}
.mt_lg {
	margin-top: var(--space_lg);
}
.mt_xl {
	margin-top: var(--space_xl);
}
.mt_xl2 {
	margin-top: var(--space_xl2);
}
.mt_xl3 {
	margin-top: var(--space_xl3);
}
.mt_xl4 {
	margin-top: var(--space_xl4);
}
.mt_xl5 {
	margin-top: var(--space_xl5);
}
.mt_xl6 {
	margin-top: var(--space_xl6);
}
.mt_xl7 {
	margin-top: var(--space_xl7);
}
.mt_xl8 {
	margin-top: var(--space_xl8);
}
.mt_xl9 {
	margin-top: var(--space_xl9);
}
.mt_xl10 {
	margin-top: var(--space_xl10);
}
.mt_xl11 {
	margin-top: var(--space_xl11);
}
.mt_xl12 {
	margin-top: var(--space_xl12);
}
.mt_xl13 {
	margin-top: var(--space_xl13);
}
.mt_xl14 {
	margin-top: var(--space_xl14);
}
.mt_xl15 {
	margin-top: var(--space_xl15);
}

.mr_0 {
	margin-right: 0;
}
.mr_xs5 {
	margin-right: var(--space_xs5);
}
.mr_xs4 {
	margin-right: var(--space_xs4);
}
.mr_xs3 {
	margin-right: var(--space_xs3);
}
.mr_xs2 {
	margin-right: var(--space_xs2);
}
.mr_xs {
	margin-right: var(--space_xs);
}
.mr_sm {
	margin-right: var(--space_sm);
}
.mr_md {
	margin-right: var(--space_md);
}
.mr_lg {
	margin-right: var(--space_lg);
}
.mr_xl {
	margin-right: var(--space_xl);
}
.mr_xl2 {
	margin-right: var(--space_xl2);
}
.mr_xl3 {
	margin-right: var(--space_xl3);
}
.mr_xl4 {
	margin-right: var(--space_xl4);
}
.mr_xl5 {
	margin-right: var(--space_xl5);
}
.mr_xl6 {
	margin-right: var(--space_xl6);
}
.mr_xl7 {
	margin-right: var(--space_xl7);
}
.mr_xl8 {
	margin-right: var(--space_xl8);
}
.mr_xl9 {
	margin-right: var(--space_xl9);
}
.mr_xl10 {
	margin-right: var(--space_xl10);
}
.mr_xl11 {
	margin-right: var(--space_xl11);
}
.mr_xl12 {
	margin-right: var(--space_xl12);
}
.mr_xl13 {
	margin-right: var(--space_xl13);
}
.mr_xl14 {
	margin-right: var(--space_xl14);
}
.mr_xl15 {
	margin-right: var(--space_xl15);
}

.mb_0 {
	margin-bottom: 0;
}
.mb_xs5 {
	margin-bottom: var(--space_xs5);
}
.mb_xs4 {
	margin-bottom: var(--space_xs4);
}
.mb_xs3 {
	margin-bottom: var(--space_xs3);
}
.mb_xs2 {
	margin-bottom: var(--space_xs2);
}
.mb_xs {
	margin-bottom: var(--space_xs);
}
.mb_sm {
	margin-bottom: var(--space_sm);
}
.mb_md {
	margin-bottom: var(--space_md);
}
.mb_lg {
	margin-bottom: var(--space_lg);
}
.mb_xl {
	margin-bottom: var(--space_xl);
}
.mb_xl2 {
	margin-bottom: var(--space_xl2);
}
.mb_xl3 {
	margin-bottom: var(--space_xl3);
}
.mb_xl4 {
	margin-bottom: var(--space_xl4);
}
.mb_xl5 {
	margin-bottom: var(--space_xl5);
}
.mb_xl6 {
	margin-bottom: var(--space_xl6);
}
.mb_xl7 {
	margin-bottom: var(--space_xl7);
}
.mb_xl8 {
	margin-bottom: var(--space_xl8);
}
.mb_xl9 {
	margin-bottom: var(--space_xl9);
}
.mb_xl10 {
	margin-bottom: var(--space_xl10);
}
.mb_xl11 {
	margin-bottom: var(--space_xl11);
}
.mb_xl12 {
	margin-bottom: var(--space_xl12);
}
.mb_xl13 {
	margin-bottom: var(--space_xl13);
}
.mb_xl14 {
	margin-bottom: var(--space_xl14);
}
.mb_xl15 {
	margin-bottom: var(--space_xl15);
}

.ml_0 {
	margin-left: 0;
}
.ml_xs5 {
	margin-left: var(--space_xs5);
}
.ml_xs4 {
	margin-left: var(--space_xs4);
}
.ml_xs3 {
	margin-left: var(--space_xs3);
}
.ml_xs2 {
	margin-left: var(--space_xs2);
}
.ml_xs {
	margin-left: var(--space_xs);
}
.ml_sm {
	margin-left: var(--space_sm);
}
.ml_md {
	margin-left: var(--space_md);
}
.ml_lg {
	margin-left: var(--space_lg);
}
.ml_xl {
	margin-left: var(--space_xl);
}
.ml_xl2 {
	margin-left: var(--space_xl2);
}
.ml_xl3 {
	margin-left: var(--space_xl3);
}
.ml_xl4 {
	margin-left: var(--space_xl4);
}
.ml_xl5 {
	margin-left: var(--space_xl5);
}
.ml_xl6 {
	margin-left: var(--space_xl6);
}
.ml_xl7 {
	margin-left: var(--space_xl7);
}
.ml_xl8 {
	margin-left: var(--space_xl8);
}
.ml_xl9 {
	margin-left: var(--space_xl9);
}
.ml_xl10 {
	margin-left: var(--space_xl10);
}
.ml_xl11 {
	margin-left: var(--space_xl11);
}
.ml_xl12 {
	margin-left: var(--space_xl12);
}
.ml_xl13 {
	margin-left: var(--space_xl13);
}
.ml_xl14 {
	margin-left: var(--space_xl14);
}
.ml_xl15 {
	margin-left: var(--space_xl15);
}

.mx_0 {
	margin-left: 0;
	margin-right: 0;
}
.mx_xs5 {
	margin-left: var(--space_xs5);
	margin-right: var(--space_xs5);
}
.mx_xs4 {
	margin-left: var(--space_xs4);
	margin-right: var(--space_xs4);
}
.mx_xs3 {
	margin-left: var(--space_xs3);
	margin-right: var(--space_xs3);
}
.mx_xs2 {
	margin-left: var(--space_xs2);
	margin-right: var(--space_xs2);
}
.mx_xs {
	margin-left: var(--space_xs);
	margin-right: var(--space_xs);
}
.mx_sm {
	margin-left: var(--space_sm);
	margin-right: var(--space_sm);
}
.mx_md {
	margin-left: var(--space_md);
	margin-right: var(--space_md);
}
.mx_lg {
	margin-left: var(--space_lg);
	margin-right: var(--space_lg);
}
.mx_xl {
	margin-left: var(--space_xl);
	margin-right: var(--space_xl);
}
.mx_xl2 {
	margin-left: var(--space_xl2);
	margin-right: var(--space_xl2);
}
.mx_xl3 {
	margin-left: var(--space_xl3);
	margin-right: var(--space_xl3);
}
.mx_xl4 {
	margin-left: var(--space_xl4);
	margin-right: var(--space_xl4);
}
.mx_xl5 {
	margin-left: var(--space_xl5);
	margin-right: var(--space_xl5);
}
.mx_xl6 {
	margin-left: var(--space_xl6);
	margin-right: var(--space_xl6);
}
.mx_xl7 {
	margin-left: var(--space_xl7);
	margin-right: var(--space_xl7);
}
.mx_xl8 {
	margin-left: var(--space_xl8);
	margin-right: var(--space_xl8);
}
.mx_xl9 {
	margin-left: var(--space_xl9);
	margin-right: var(--space_xl9);
}
.mx_xl10 {
	margin-left: var(--space_xl10);
	margin-right: var(--space_xl10);
}
.mx_xl11 {
	margin-left: var(--space_xl11);
	margin-right: var(--space_xl11);
}
.mx_xl12 {
	margin-left: var(--space_xl12);
	margin-right: var(--space_xl12);
}
.mx_xl13 {
	margin-left: var(--space_xl13);
	margin-right: var(--space_xl13);
}
.mx_xl14 {
	margin-left: var(--space_xl14);
	margin-right: var(--space_xl14);
}
.mx_xl15 {
	margin-left: var(--space_xl15);
	margin-right: var(--space_xl15);
}

.my_0 {
	margin-top: 0;
	margin-bottom: 0;
}
.my_xs5 {
	margin-top: var(--space_xs5);
	margin-bottom: var(--space_xs5);
}
.my_xs4 {
	margin-top: var(--space_xs4);
	margin-bottom: var(--space_xs4);
}
.my_xs3 {
	margin-top: var(--space_xs3);
	margin-bottom: var(--space_xs3);
}
.my_xs2 {
	margin-top: var(--space_xs2);
	margin-bottom: var(--space_xs2);
}
.my_xs {
	margin-top: var(--space_xs);
	margin-bottom: var(--space_xs);
}
.my_sm {
	margin-top: var(--space_sm);
	margin-bottom: var(--space_sm);
}
.my_md {
	margin-top: var(--space_md);
	margin-bottom: var(--space_md);
}
.my_lg {
	margin-top: var(--space_lg);
	margin-bottom: var(--space_lg);
}
.my_xl {
	margin-top: var(--space_xl);
	margin-bottom: var(--space_xl);
}
.my_xl2 {
	margin-top: var(--space_xl2);
	margin-bottom: var(--space_xl2);
}
.my_xl3 {
	margin-top: var(--space_xl3);
	margin-bottom: var(--space_xl3);
}
.my_xl4 {
	margin-top: var(--space_xl4);
	margin-bottom: var(--space_xl4);
}
.my_xl5 {
	margin-top: var(--space_xl5);
	margin-bottom: var(--space_xl5);
}
.my_xl6 {
	margin-top: var(--space_xl6);
	margin-bottom: var(--space_xl6);
}
.my_xl7 {
	margin-top: var(--space_xl7);
	margin-bottom: var(--space_xl7);
}
.my_xl8 {
	margin-top: var(--space_xl8);
	margin-bottom: var(--space_xl8);
}
.my_xl9 {
	margin-top: var(--space_xl9);
	margin-bottom: var(--space_xl9);
}
.my_xl10 {
	margin-top: var(--space_xl10);
	margin-bottom: var(--space_xl10);
}
.my_xl11 {
	margin-top: var(--space_xl11);
	margin-bottom: var(--space_xl11);
}
.my_xl12 {
	margin-top: var(--space_xl12);
	margin-bottom: var(--space_xl12);
}
.my_xl13 {
	margin-top: var(--space_xl13);
	margin-bottom: var(--space_xl13);
}
.my_xl14 {
	margin-top: var(--space_xl14);
	margin-bottom: var(--space_xl14);
}
.my_xl15 {
	margin-top: var(--space_xl15);
	margin-bottom: var(--space_xl15);
}

.gap_xs5 {
	gap: var(--space_xs5);
}
.gap_xs4 {
	gap: var(--space_xs4);
}
.gap_xs3 {
	gap: var(--space_xs3);
}
.gap_xs2 {
	gap: var(--space_xs2);
}
.gap_xs {
	gap: var(--space_xs);
}
.gap_sm {
	gap: var(--space_sm);
}
.gap_md {
	gap: var(--space_md);
}
.gap_lg {
	gap: var(--space_lg);
}
.gap_xl {
	gap: var(--space_xl);
}
.gap_xl2 {
	gap: var(--space_xl2);
}
.gap_xl3 {
	gap: var(--space_xl3);
}
.gap_xl4 {
	gap: var(--space_xl4);
}
.gap_xl5 {
	gap: var(--space_xl5);
}
.gap_xl6 {
	gap: var(--space_xl6);
}
.gap_xl7 {
	gap: var(--space_xl7);
}
.gap_xl8 {
	gap: var(--space_xl8);
}
.gap_xl9 {
	gap: var(--space_xl9);
}
.gap_xl10 {
	gap: var(--space_xl10);
}
.gap_xl11 {
	gap: var(--space_xl11);
}
.gap_xl12 {
	gap: var(--space_xl12);
}
.gap_xl13 {
	gap: var(--space_xl13);
}
.gap_xl14 {
	gap: var(--space_xl14);
}
.gap_xl15 {
	gap: var(--space_xl15);
}

.column_gap_xs5 {
	column-gap: var(--space_xs5);
}
.column_gap_xs4 {
	column-gap: var(--space_xs4);
}
.column_gap_xs3 {
	column-gap: var(--space_xs3);
}
.column_gap_xs2 {
	column-gap: var(--space_xs2);
}
.column_gap_xs {
	column-gap: var(--space_xs);
}
.column_gap_sm {
	column-gap: var(--space_sm);
}
.column_gap_md {
	column-gap: var(--space_md);
}
.column_gap_lg {
	column-gap: var(--space_lg);
}
.column_gap_xl {
	column-gap: var(--space_xl);
}
.column_gap_xl2 {
	column-gap: var(--space_xl2);
}
.column_gap_xl3 {
	column-gap: var(--space_xl3);
}
.column_gap_xl4 {
	column-gap: var(--space_xl4);
}
.column_gap_xl5 {
	column-gap: var(--space_xl5);
}
.column_gap_xl6 {
	column-gap: var(--space_xl6);
}
.column_gap_xl7 {
	column-gap: var(--space_xl7);
}
.column_gap_xl8 {
	column-gap: var(--space_xl8);
}
.column_gap_xl9 {
	column-gap: var(--space_xl9);
}
.column_gap_xl10 {
	column-gap: var(--space_xl10);
}
.column_gap_xl11 {
	column-gap: var(--space_xl11);
}
.column_gap_xl12 {
	column-gap: var(--space_xl12);
}
.column_gap_xl13 {
	column-gap: var(--space_xl13);
}
.column_gap_xl14 {
	column-gap: var(--space_xl14);
}
.column_gap_xl15 {
	column-gap: var(--space_xl15);
}

.row_gap_xs5 {
	row-gap: var(--space_xs5);
}
.row_gap_xs4 {
	row-gap: var(--space_xs4);
}
.row_gap_xs3 {
	row-gap: var(--space_xs3);
}
.row_gap_xs2 {
	row-gap: var(--space_xs2);
}
.row_gap_xs {
	row-gap: var(--space_xs);
}
.row_gap_sm {
	row-gap: var(--space_sm);
}
.row_gap_md {
	row-gap: var(--space_md);
}
.row_gap_lg {
	row-gap: var(--space_lg);
}
.row_gap_xl {
	row-gap: var(--space_xl);
}
.row_gap_xl2 {
	row-gap: var(--space_xl2);
}
.row_gap_xl3 {
	row-gap: var(--space_xl3);
}
.row_gap_xl4 {
	row-gap: var(--space_xl4);
}
.row_gap_xl5 {
	row-gap: var(--space_xl5);
}
.row_gap_xl6 {
	row-gap: var(--space_xl6);
}
.row_gap_xl7 {
	row-gap: var(--space_xl7);
}
.row_gap_xl8 {
	row-gap: var(--space_xl8);
}
.row_gap_xl9 {
	row-gap: var(--space_xl9);
}
.row_gap_xl10 {
	row-gap: var(--space_xl10);
}
.row_gap_xl11 {
	row-gap: var(--space_xl11);
}
.row_gap_xl12 {
	row-gap: var(--space_xl12);
}
.row_gap_xl13 {
	row-gap: var(--space_xl13);
}
.row_gap_xl14 {
	row-gap: var(--space_xl14);
}
.row_gap_xl15 {
	row-gap: var(--space_xl15);
}
`,on=`/* @ryanatkn/moss/style_components.css */

.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

/* can be used to override the direction of a \`.box\` */
.row {
	display: flex;
	flex-direction: row;
	align-items: center;
}

/* Makes flexboxes wrap. */
.wrap {
	flex-wrap: wrap;
	white-space: initial;
}

/* Stops text from wrapping. */
.nowrap {
	flex-wrap: nowrap;
	white-space: nowrap;
}

/* Formats content to wrap long strings and preserve displayed whitespace. */
.formatted {
	overflow: hidden;
	white-space: break-spaces;
}

/* TODO rename these? use to be columns, maybe should be? */
.width_md {
	width: 100%;
	max-width: var(--width_md);
}
.width_sm {
	width: 100%;
	max-width: var(--width_sm);
}

.selectable {
	cursor: pointer;
	background-color: var(--button_fill);
	border-color: var(--border_color_3);
	border-style: var(--border_style);
	border-width: var(--border_width);
}
.selectable:hover {
	background-color: var(--button_fill_hover);
	border-color: var(--border_color_2);
}
.selectable.selected,
.selectable:active {
	background-color: var(--button_fill_active);
	border-color: var(--color_a_5);
}
.selectable.selected {
	cursor: default;
}
.selectable.selected.deselectable:not(:disabled) {
	cursor: pointer;
}

/* A pane is a box floating over the page, like for dialogs.
By default it's opaque, resetting the background to the initial depth. */
.pane {
	background-color: var(--pane_bg, var(--bg));
	box-shadow: var(--pane_shadow, var(--shadow_md));
	border-radius: var(--radius_xs);
}
/* A panel is a box embedded into the page, useful for visually isolating content. */
.panel {
	border-radius: var(--radius_sm);
	background-color: var(--panel_bg, var(--fg_1));
}

/* TODO @multiple docs in library */

/* TODO other button variants? */
/* TODO this is slightly strange that it doesn't use --icon_size */
/* These are used as modifiers to buttons, and so they use \`:where\` so they cascade.  */
.icon_button {
	width: var(--input_height);
	height: var(--input_height);
	min-width: var(--input_height);
	min-height: var(--input_height);
	flex-shrink: 0;
	font-weight: 900;
	padding: 0;
}
/* TODO maybe this belongs with the reset, like \`selected\`? or does \`selected\` belong here? */
.plain:not(:hover) {
	border-color: transparent;
	box-shadow: none;
	--button_fill: transparent;
}

.menu_item {
	--border_radius: 0;
	--border_color: var(--border_color_3);
	position: relative;
	z-index: 2;
	width: 100%;
	min-height: var(--min_height, var(--icon_size_sm));
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--menu_item_padding, var(--space_xs3) var(--space_xs));
}
.menu_item.selected {
	/* TODO different patterns for border and bg? */
	--border_color: var(--color_a_5);
	background-color: var(--fg_1);
	z-index: 1;
}
.menu_item.plain {
	border: none;
}
.menu_item .content {
	display: flex;
	align-items: center;
	flex: 1;
	/* allows the flex children to shrink */
	min-width: 0;
}
.menu_item .icon {
	width: var(--icon_size, var(--icon_size_md));
	margin-right: var(--space_sm);
	flex-shrink: 0;
	text-align: center;
	font-weight: 900;
}
.menu_item .title {
	margin-right: var(--space_lg);
	flex-shrink: 1;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	line-height: var(--line_height_lg); /* prevents the bottom of g's and others from being cut off */
}

.chevron {
	position: relative;
	height: 8px;
}
.chevron::before {
	display: block;
	content: '';
	border: 4px solid transparent;
	border-left-color: var(--text_2);
}

.chip {
	font-weight: 600;
	padding: var(--space_xs5) var(--space_sm); /* maybe different inside \`p\`? using \`calc\` with \`--size\`? */
	background-color: var(--fg_1);
	border-radius: var(--radius_xs);
}
a.chip {
	font-weight: 700;
}

.clickable {
	transform: var(--clickable_transform, scale3d(1, 1, 1));
	transform-origin: var(--clickable_transform_origin);
	transition-duration: var(--clickable_transition_duration); /* default to instant, chunky/lofi */
}
.clickable:focus {
	transform: var(--clickable_transform_focus, scale3d(1.07, 1.07, 1.07));
}
.clickable:hover {
	transform: var(--clickable_transform_hover, scale3d(1.1, 1.1, 1.1));
}
.clickable:active {
	transform: var(--clickable_transform_active, scale3d(1.2, 1.2, 1.2));
}
`;var tn=e('<li class="svelte-1gekuvc"> </li>'),rn=e('<li class="svelte-1gekuvc"> </li>'),sn=e('<span class="font_mono">@ryanatkn/moss/style_utilities.css</span>'),ln=e('<p class="source_link svelte-1gekuvc"><a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/style_utilities.css" class="svelte-1gekuvc"><!> <span class="ml_xs">source</span></a></p> <!>',1),en=e('<span class="font_mono">@ryanatkn/moss/style_components.css</span>'),dn=e('<p class="source_link svelte-1gekuvc"><a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/style_components.css" class="svelte-1gekuvc"><!> <span class="ml_xs">source</span></a></p> <!>',1),cn=e(`<aside>both the docs and implementation of these need more work</aside> <section><!> <p>Moss has three optional CSS files with different kinds of classes:</p> <!> <p>Utility classes use plain CSS for convenient HTML authoring. Many are based on Moss style <!>.</p> <p>Component classes are semantic groupings of styles.</p> <aside>With more sophisticated build tooling, these classes could be generated on demand instead of
			distributed as static files, or unused classes could be removed with a Vite plugin.</aside></section> <section><!> <ul class="classes unstyled svelte-1gekuvc"></ul></section> <section><!> <aside>These are like utility classes but don't map as cleanly to a single style property.</aside> <ul class="classes unstyled svelte-1gekuvc"></ul></section> <section><!> <!> <!></section>`,1);function zn(j,I){K(I,!0);const L=an("classes"),R=["relative|absolute|fixed|sticky|static","overflow_auto|hidden|scroll|clip|visible","overflow_x|y_auto|hidden|scroll|clip|visible","inline|inline_block|block|flex|grid","display_none|contents","flex_1","box","row","wrap|nowrap","float_none|left|right|inline_start|inline_end","flip_x|y|xy","font_sans|mono","line_height","line_height_xs-xl","size_xs-xl9","icon_size_xs-xl2","text_align_center|right|left|justify","font_weight_100-900","ellipsis","pixelated","text_1-3","darken|lighten_1-9","bg|fg","bg|fg_1-9","color_darken|lighten_1-9","color_bg|fg","color_bg|fg_1-9","hue_a-g","color_a-g_1 -9","bg_a-g_1-9","border_color_1-5","border_width_1-6","outline_width_1-3","border_none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","radius_0|50|100","radius_xs3-xl","fade_0|100","fade_1-6","shadow_xs-xl","shadow_inset|outset_xs-xl","shadow_inherit|initial|none","w|h_0|100","w|h_xs-xl15","p|pt|pr|pb|pl|px|py_0","p|pt|pr|pb|pl|px|py_xs5-xl15","m|mx|my_auto","m|mt|mr|mb|ml|mx|my_0","m|mt|mr|mb|ml|mx|my_xs5-xl15","gap_xs5-xl15","row|column_gap_xs5-xl15"],E=["selectable","pane","panel","icon_button","plain","menu_item","chevron","chip","formatted","width_xs-md"];var v=J(),P=d(v);Z(P,{tome:L,children:(X,gn)=>{var m=cn(),Y=d(m),h=n(n(Y,!0)),b=_(h);c(b,{text:"Optional CSS classes",slug:"css-classes"});var B=n(n(b,!0)),w=n(n(B,!0));x(w,{content:`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css'; // or bring your own
	// or import individual parts of \`@ryanatkn/moss/style.css\`:
	import '@ryanatkn/moss/style_reset.css'; // required
	import '@ryanatkn/moss/style_utilities.css'; // optional
	import '@ryanatkn/moss/style_components.css'; // optional
	import '@ryanatkn/moss/style_animations.css'; // optional
	// ...`});var N=n(n(w,!0)),U=n(_(N));nn(U,{name:"variables"});var u=n(n(h,!0)),f=_(u);c(f,{text:"Utility classes",slug:"utility-classes"});var W=n(n(f,!0));S(W,73,()=>R,C,(s,o,l)=>{var a=tn(),t=_(a);$(()=>T(t,`.${D(o)??""}`)),r(s,a)});var k=n(n(u,!0)),y=_(k);c(y,{text:"Component classes",slug:"semantic-classes"});var q=n(n(y,!0)),G=n(n(q,!0));S(G,73,()=>E,C,(s,o,l)=>{var a=rn(),t=_(a);$(()=>T(t,`.${D(o)??""}`)),r(s,a)});var V=n(n(k,!0)),z=_(V);c(z,{text:"Raw CSS",slug:"raw-css"});var O=n(n(z,!0));{var i=s=>{var o=sn();r(s,o)};A(O,{summary:i,children:(s,o)=>{var l=ln(),a=d(l),t=_(a),p=_(t);M(p,{size:"var(--icon_size_xs)"});var g=n(n(a,!0));x(g,{content:_n,lang:"css"}),r(s,l)},$$slots:{default:!0}})}var F=n(n(O,!0));{var i=o=>{var l=en();r(o,l)};A(F,{summary:i,children:(o,l)=>{var a=dn(),t=d(a),p=_(t),g=_(p);M(g,{size:"var(--icon_size_xs)"});var H=n(n(t,!0));x(H,{content:on,lang:"css"}),r(o,a)},$$slots:{default:!0}})}r(X,m)},$$slots:{default:!0}}),r(j,v),Q()}export{zn as component};
