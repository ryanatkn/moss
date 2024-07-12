import type {Style_Variable} from '$lib/theme.js';
import {icon_sizes} from '$lib/variable_data.js';

/*

TODO lots of things here to address:

- lots of inconsistencies, like the relationship between base and modified values
	- in some cases the base value is just a value, in other cases it's the "current" value
- going from `_lg` to `_1` is awkward - maybe replace all xs/sm/md/lg with 1/2/3/4
	- issues with this:
		- less semantically meaningful, harder to read/write so you'll have to learn the system
			- 3 won't always be "medium" for each usage because of the lower end values
		- changing the bottom end of the range will cause bad churn (can't just add a new `_xs4`)
		- numbers will get into the double digits

*/

/*

colors

*/
// TODO these were eyeballed and intepolated with a spreadsheet, a professional designer will have opinions
export const hue_a: Style_Variable = {name: 'hue_a', light: '210', summary: 'blue'};
export const hue_b: Style_Variable = {name: 'hue_b', light: '120', summary: 'green'};
export const hue_c: Style_Variable = {name: 'hue_c', light: '0', summary: 'red'};
export const hue_d: Style_Variable = {name: 'hue_d', light: '260', summary: 'purple'};
export const hue_e: Style_Variable = {name: 'hue_e', light: '50', summary: 'yellow'};
export const hue_f: Style_Variable = {name: 'hue_f', light: '27', summary: 'brown'};
export const hue_g: Style_Variable = {name: 'hue_g', light: '335', summary: 'pink'};
export const color_a_1: Style_Variable = {
	name: 'color_a_1',
	light: 'var(--hue_a) 65% 91%',
};
export const color_a_2: Style_Variable = {
	name: 'color_a_2',
	light: 'var(--hue_a) 62% 84%',
	dark: 'var(--hue_a) 62% 87%',
};
export const color_a_3: Style_Variable = {
	name: 'color_a_3',
	light: 'var(--hue_a) 60% 73%',
	dark: 'var(--hue_a) 60% 82%',
};
export const color_a_4: Style_Variable = {
	name: 'color_a_4',
	light: 'var(--hue_a) 60% 62%',
	dark: 'var(--hue_a) 60% 76%',
};
export const color_a_5: Style_Variable = {
	name: 'color_a_5',
	light: 'var(--hue_a) 55% 50%',
	dark: 'var(--hue_a) 55% 70%',
};
export const color_a_6: Style_Variable = {
	name: 'color_a_6',
	light: 'var(--hue_a) 55% 40%',
	dark: 'var(--hue_a) 55% 55%',
};
export const color_a_7: Style_Variable = {
	name: 'color_a_7',
	light: 'var(--hue_a) 55% 30%',
	dark: 'var(--hue_a) 55% 40%',
};
export const color_a_8: Style_Variable = {
	name: 'color_a_8',
	light: 'var(--hue_a) 55% 20%',
	dark: 'var(--hue_a) 55% 25%',
};
export const color_a_9: Style_Variable = {
	name: 'color_a_9',
	light: 'var(--hue_a) 55% 10%',
};
export const color_b_1: Style_Variable = {
	name: 'color_b_1',
	light: 'var(--hue_b) 55% 90%',
};
export const color_b_2: Style_Variable = {
	name: 'color_b_2',
	light: 'var(--hue_b) 50% 77%',
	dark: 'var(--hue_b) 50% 82%',
};
export const color_b_3: Style_Variable = {
	name: 'color_b_3',
	light: 'var(--hue_b) 50% 63%',
	dark: 'var(--hue_b) 50% 74%',
};
export const color_b_4: Style_Variable = {
	name: 'color_b_4',
	light: 'var(--hue_b) 50% 49%',
	dark: 'var(--hue_b) 50% 66%',
};
export const color_b_5: Style_Variable = {
	name: 'color_b_5',
	light: 'var(--hue_b) 55% 36%',
	dark: 'var(--hue_b) 43% 58%',
};
export const color_b_6: Style_Variable = {
	name: 'color_b_6',
	light: 'var(--hue_b) 60% 25%',
	dark: 'var(--hue_b) 51% 45%',
};
export const color_b_7: Style_Variable = {
	name: 'color_b_7',
	light: 'var(--hue_b) 65% 18%',
	dark: 'var(--hue_b) 59% 33%',
};
export const color_b_8: Style_Variable = {
	name: 'color_b_8',
	light: 'var(--hue_b) 70% 12%',
	dark: 'var(--hue_b) 67% 20%',
};
export const color_b_9: Style_Variable = {
	name: 'color_b_9',
	light: 'var(--hue_b) 75% 7%',
};
export const color_c_1: Style_Variable = {
	name: 'color_c_1',
	light: 'var(--hue_c) 85% 92%',
};
export const color_c_2: Style_Variable = {
	name: 'color_c_2',
	light: 'var(--hue_c) 80% 83%',
	dark: 'var(--hue_c) 81% 83%',
};
export const color_c_3: Style_Variable = {
	name: 'color_c_3',
	light: 'var(--hue_c) 75% 73%',
	dark: 'var(--hue_c) 78% 74%',
};
export const color_c_4: Style_Variable = {
	name: 'color_c_4',
	light: 'var(--hue_c) 70% 63%',
	dark: 'var(--hue_c) 74% 65%',
};
export const color_c_5: Style_Variable = {
	name: 'color_c_5',
	light: 'var(--hue_c) 65% 50%',
	dark: 'var(--hue_c) 70% 56%',
};
export const color_c_6: Style_Variable = {
	name: 'color_c_6',
	light: 'var(--hue_c) 65% 40%',
	dark: 'var(--hue_c) 65% 45%',
};
export const color_c_7: Style_Variable = {
	name: 'color_c_7',
	light: 'var(--hue_c) 65% 30%',
	dark: 'var(--hue_c) 65% 33%',
};
export const color_c_8: Style_Variable = {
	name: 'color_c_8',
	light: 'var(--hue_c) 65% 20%',
	dark: 'var(--hue_c) 65% 22%',
};
export const color_c_9: Style_Variable = {
	name: 'color_c_9',
	light: 'var(--hue_c) 65% 10%',
};
export const color_d_1: Style_Variable = {
	name: 'color_d_1',
	light: 'var(--hue_d) 50% 91%',
};
export const color_d_2: Style_Variable = {
	name: 'color_d_2',
	light: 'var(--hue_d) 50% 82%',
	dark: 'var(--hue_d) 50% 86%',
};
export const color_d_3: Style_Variable = {
	name: 'color_d_3',
	light: 'var(--hue_d) 50% 72%',
	dark: 'var(--hue_d) 50% 81%',
};
export const color_d_4: Style_Variable = {
	name: 'color_d_4',
	light: 'var(--hue_d) 50% 62%',
	dark: 'var(--hue_d) 50% 76%',
};
export const color_d_5: Style_Variable = {
	name: 'color_d_5',
	light: 'var(--hue_d) 50% 50%',
	dark: 'var(--hue_d) 50% 70%',
};
export const color_d_6: Style_Variable = {
	name: 'color_d_6',
	light: 'var(--hue_d) 50% 40%',
	dark: 'var(--hue_d) 50% 55%',
};
export const color_d_7: Style_Variable = {
	name: 'color_d_7',
	light: 'var(--hue_d) 50% 30%',
	dark: 'var(--hue_d) 50% 40%',
};
export const color_d_8: Style_Variable = {
	name: 'color_d_8',
	light: 'var(--hue_d) 50% 20%',
	dark: 'var(--hue_d) 50% 25%',
};
export const color_d_9: Style_Variable = {
	name: 'color_d_9',
	light: 'var(--hue_d) 50% 10%',
};
export const color_e_1: Style_Variable = {
	name: 'color_e_1',
	light: 'var(--hue_e) 85% 91%',
};
export const color_e_2: Style_Variable = {
	name: 'color_e_2',
	light: 'var(--hue_e) 80% 79%',
	dark: 'var(--hue_e) 80% 83%',
};
export const color_e_3: Style_Variable = {
	name: 'color_e_3',
	light: 'var(--hue_e) 75% 68%',
	dark: 'var(--hue_e) 75% 76%',
};
export const color_e_4: Style_Variable = {
	name: 'color_e_4',
	light: 'var(--hue_e) 70% 56%',
	dark: 'var(--hue_e) 70% 69%',
};
export const color_e_5: Style_Variable = {
	name: 'color_e_5',
	light: 'var(--hue_e) 65% 42%',
	dark: 'var(--hue_e) 70% 62%',
};
export const color_e_6: Style_Variable = {
	name: 'color_e_6',
	light: 'var(--hue_e) 70% 34%',
	dark: 'var(--hue_e) 70% 49%',
};
export const color_e_7: Style_Variable = {
	name: 'color_e_7',
	light: 'var(--hue_e) 75% 26%',
	dark: 'var(--hue_e) 75% 36%',
};
export const color_e_8: Style_Variable = {
	name: 'color_e_8',
	light: 'var(--hue_e) 80% 18%',
	dark: 'var(--hue_e) 80% 23%',
};
export const color_e_9: Style_Variable = {
	name: 'color_e_9',
	light: 'var(--hue_e) 85% 10%',
};
export const color_f_1: Style_Variable = {
	name: 'color_f_1',
	light: 'var(--hue_f) 32% 87%',
};
export const color_f_2: Style_Variable = {
	name: 'color_f_2',
	light: 'var(--hue_f) 32% 72%',
	dark: 'var(--hue_f) 32% 79%',
};
export const color_f_3: Style_Variable = {
	name: 'color_f_3',
	light: 'var(--hue_f) 32% 57%',
	dark: 'var(--hue_f) 32% 72%',
};
export const color_f_4: Style_Variable = {
	name: 'color_f_4',
	light: 'var(--hue_f) 42% 41%',
	dark: 'var(--hue_f) 32% 64%',
};
export const color_f_5: Style_Variable = {
	name: 'color_f_5',
	light: 'var(--hue_f) 60% 26%',
	dark: 'var(--hue_f) 30% 56%',
};
export const color_f_6: Style_Variable = {
	name: 'color_f_6',
	light: 'var(--hue_f) 65% 18%',
	dark: 'var(--hue_f) 40% 44%',
};
export const color_f_7: Style_Variable = {
	name: 'color_f_7',
	light: 'var(--hue_f) 70% 14%',
	dark: 'var(--hue_f) 50% 31%',
};
export const color_f_8: Style_Variable = {
	name: 'color_f_8',
	light: 'var(--hue_f) 75% 10%',
	dark: 'var(--hue_f) 70% 19%',
};
export const color_f_9: Style_Variable = {
	name: 'color_f_9',
	light: 'var(--hue_f) 80% 6%',
};
export const color_g_1: Style_Variable = {
	name: 'color_g_1',
	light: 'var(--hue_g) 72% 91%',
};
export const color_g_2: Style_Variable = {
	name: 'color_g_2',
	light: 'var(--hue_g) 72% 83%',
	dark: 'var(--hue_g) 72% 86%',
};
export const color_g_3: Style_Variable = {
	name: 'color_g_3',
	light: 'var(--hue_g) 72% 74%',
	dark: 'var(--hue_g) 72% 81%',
};
export const color_g_4: Style_Variable = {
	name: 'color_g_4',
	light: 'var(--hue_g) 72% 65%',
	dark: 'var(--hue_g) 72% 76%',
};
export const color_g_5: Style_Variable = {
	name: 'color_g_5',
	light: 'var(--hue_g) 72% 56%',
	dark: 'var(--hue_g) 72% 70%',
};
export const color_g_6: Style_Variable = {
	name: 'color_g_6',
	light: 'var(--hue_g) 72% 44%',
	dark: 'var(--hue_g) 72% 55%',
};
export const color_g_7: Style_Variable = {
	name: 'color_g_7',
	light: 'var(--hue_g) 72% 32%',
	dark: 'var(--hue_g) 72% 40%',
};
export const color_g_8: Style_Variable = {
	name: 'color_g_8',
	light: 'var(--hue_g) 72% 20%',
	dark: 'var(--hue_g) 72% 25%',
};
export const color_g_9: Style_Variable = {
	name: 'color_g_9',
	light: 'var(--hue_g) 72% 10%',
};

/*
		color variants - using these usually means handling both light and dark modes separately -
		the semantic variants	that handle `color-schema` automatically include `--bg_1` and `--bg_2`
	*/
// TODO some of these may be too subtle, but there may be cases where it's needed so keeping them for now
export const darken_1: Style_Variable = {name: 'darken_1', light: '#0000000f', summary: '6%'};
export const darken_2: Style_Variable = {name: 'darken_2', light: '#0000001f', summary: '12%'};
export const darken_3: Style_Variable = {name: 'darken_3', light: '#00000036', summary: '21%'};
export const darken_4: Style_Variable = {name: 'darken_4', light: '#00000052', summary: '32%'};
export const darken_5: Style_Variable = {name: 'darken_5', light: '#00000073', summary: '45%'};
export const darken_6: Style_Variable = {name: 'darken_6', light: '#000000a6', summary: '65%'};
export const darken_7: Style_Variable = {name: 'darken_7', light: '#000000cc', summary: '80%'};
export const darken_8: Style_Variable = {name: 'darken_8', light: '#000000e3', summary: '89%'};
export const darken_9: Style_Variable = {name: 'darken_9', light: '#000000f5', summary: '96%'};
export const lighten_1: Style_Variable = {name: 'lighten_1', light: '#ffffff0f', summary: '6%'};
export const lighten_2: Style_Variable = {name: 'lighten_2', light: '#ffffff1f', summary: '12%'};
export const lighten_3: Style_Variable = {name: 'lighten_3', light: '#ffffff36', summary: '21%'};
export const lighten_4: Style_Variable = {name: 'lighten_4', light: '#ffffff52', summary: '32%'};
export const lighten_5: Style_Variable = {name: 'lighten_5', light: '#ffffff73', summary: '45%'};
export const lighten_6: Style_Variable = {name: 'lighten_6', light: '#ffffffa6', summary: '65%'};
export const lighten_7: Style_Variable = {name: 'lighten_7', light: '#ffffffcc', summary: '80%'};
export const lighten_8: Style_Variable = {name: 'lighten_8', light: '#ffffffe3', summary: '89%'};
export const lighten_9: Style_Variable = {name: 'lighten_9', light: '#fffffff5', summary: '96%'};

/*

tint colors

*/
export const tint_hue: Style_Variable = {name: 'tint_hue', light: 'var(--hue_e)'};
export const tint_saturation: Style_Variable = {name: 'tint_saturation', light: '11%'};

/*

background colors

*/
export const bg: Style_Variable = {
	name: 'bg',
	light: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
	dark: 'hsl(var(--tint_hue), var(--tint_saturation), 6%)',
};
export const fg: Style_Variable = {
	name: 'fg',
	light: 'hsl(var(--tint_hue), var(--tint_saturation), 6%)',
	dark: 'hsl(var(--tint_hue), var(--tint_saturation), 96%)',
};
/* these are light or dark with a low alpha, so they nest/stack arbitrarily */
// TODO these inconsistently don't use tint, unlike bg/fg
export const bg_0: Style_Variable = {
	name: 'bg_0',
	light: '#000',
	dark: '#fff',
};
export const bg_1: Style_Variable = {
	name: 'bg_1',
	light: 'var(--lighten_1)',
	dark: 'var(--darken_1)',
};
export const bg_2: Style_Variable = {
	name: 'bg_2',
	light: 'var(--lighten_2)',
	dark: 'var(--darken_2)',
};
export const bg_3: Style_Variable = {
	name: 'bg_3',
	light: 'var(--lighten_3)',
	dark: 'var(--darken_3)',
};
export const bg_4: Style_Variable = {
	name: 'bg_4',
	light: 'var(--lighten_4)',
	dark: 'var(--darken_4)',
};
export const bg_5: Style_Variable = {
	name: 'bg_5',
	light: 'var(--lighten_5)',
	dark: 'var(--darken_5)',
};
export const bg_6: Style_Variable = {
	name: 'bg_6',
	light: 'var(--lighten_6)',
	dark: 'var(--darken_6)',
};
export const bg_7: Style_Variable = {
	name: 'bg_7',
	light: 'var(--lighten_7)',
	dark: 'var(--darken_7)',
};
export const bg_8: Style_Variable = {
	name: 'bg_8',
	light: 'var(--lighten_8)',
	dark: 'var(--darken_8)',
};
export const bg_9: Style_Variable = {
	name: 'bg_9',
	light: 'var(--lighten_9)',
	dark: 'var(--darken_9)',
};
export const bg_10: Style_Variable = {
	name: 'bg_10',
	light: '#fff',
	dark: '#000',
};
export const fg_0: Style_Variable = {
	name: 'fg_0',
	light: '#fff',
	dark: '#000',
};
export const fg_1: Style_Variable = {
	name: 'fg_1',
	light: 'var(--darken_1)',
	dark: 'var(--lighten_1)',
};
export const fg_2: Style_Variable = {
	name: 'fg_2',
	light: 'var(--darken_2)',
	dark: 'var(--lighten_2)',
};
export const fg_3: Style_Variable = {
	name: 'fg_3',
	light: 'var(--darken_3)',
	dark: 'var(--lighten_3)',
};
export const fg_4: Style_Variable = {
	name: 'fg_4',
	light: 'var(--darken_4)',
	dark: 'var(--lighten_4)',
};
export const fg_5: Style_Variable = {
	name: 'fg_5',
	light: 'var(--darken_5)',
	dark: 'var(--lighten_5)',
};
export const fg_6: Style_Variable = {
	name: 'fg_6',
	light: 'var(--darken_6)',
	dark: 'var(--lighten_6)',
};
export const fg_7: Style_Variable = {
	name: 'fg_7',
	light: 'var(--darken_7)',
	dark: 'var(--lighten_7)',
};
export const fg_8: Style_Variable = {
	name: 'fg_8',
	light: 'var(--darken_8)',
	dark: 'var(--lighten_8)',
};
export const fg_9: Style_Variable = {
	name: 'fg_9',
	light: 'var(--darken_9)',
	dark: 'var(--lighten_9)',
};
export const fg_10: Style_Variable = {
	name: 'fg_10',
	light: '#000',
	dark: '#fff',
};
export const fill_a: Style_Variable = {
	name: 'fill_a',
	light: 'hsl(var(--color_a_4))',
	dark: 'hsl(var(--color_a_6))',
};
export const fill_b: Style_Variable = {
	name: 'fill_b',
	light: 'hsl(var(--color_b_4))',
	dark: 'hsl(var(--color_b_6))',
};
export const fill_c: Style_Variable = {
	name: 'fill_c',
	light: 'hsl(var(--color_c_4))',
	dark: 'hsl(var(--color_c_6))',
};
export const fill_d: Style_Variable = {
	name: 'fill_d',
	light: 'hsl(var(--color_d_4))',
	dark: 'hsl(var(--color_d_6))',
};
export const fill_e: Style_Variable = {
	name: 'fill_e',
	light: 'hsl(var(--color_e_4))',
	dark: 'hsl(var(--color_e_6))',
};
export const fill_f: Style_Variable = {
	name: 'fill_f',
	light: 'hsl(var(--color_f_4))',
	dark: 'hsl(var(--color_f_6))',
};
export const fill_g: Style_Variable = {
	name: 'fill_g',
	light: 'hsl(var(--color_g_4))',
	dark: 'hsl(var(--color_g_6))',
};

/*

text colors

*/

// TODO probably need more variants, 5 total?
/* text colors don't use alpha because it affects performance too much */
export const text_color: Style_Variable = {name: 'text_color', light: 'var(--text_1)'};
export const text_1: Style_Variable = {
	name: 'text_1',
	light: 'hsl(var(--tint_hue), var(--tint_saturation), 16%)',
	dark: 'hsl(var(--tint_hue), var(--tint_saturation), 80%)',
};
export const text_2: Style_Variable = {
	name: 'text_2',
	light: 'hsl(var(--tint_hue), var(--tint_saturation), 32%)',
	dark: 'hsl(var(--tint_hue), var(--tint_saturation), 65%)',
};
export const text_3: Style_Variable = {
	name: 'text_3',
	light: 'hsl(var(--tint_hue), var(--tint_saturation), 48%)',
	dark: 'hsl(var(--tint_hue), var(--tint_saturation), 50%)',
};
export const text_disabled: Style_Variable = {name: 'text_disabled', light: 'var(--text_3)'};
export const text_active: Style_Variable = {
	name: 'text_active',
	light: 'hsl(var(--hue_a), 55%, 40%);',
	dark: 'hsl(var(--hue_a), 65%, 65%);',
};

/* fonts */
export const line_height_xs: Style_Variable = {name: 'line_height_xs', light: '1'};
export const line_height_sm: Style_Variable = {name: 'line_height_sm', light: '1.2'};
export const line_height_md: Style_Variable = {name: 'line_height_md', light: '1.4'};
export const line_height_lg: Style_Variable = {name: 'line_height_lg', light: '1.6'};
export const line_height_xl: Style_Variable = {name: 'line_height_xl', light: '2'};
export const font_sans: Style_Variable = {
	name: 'font_sans',
	light: "system-ui, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
	summary:
		'@source https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/',
};
export const font_mono: Style_Variable = {
	name: 'font_mono',
	light: "ui-monospace, 'Fira Mono', monospace",
};

/* sizes like font-size */
export const size_xs: Style_Variable = {name: 'size_xs', light: '1rem'};
export const size_sm: Style_Variable = {name: 'size_sm', light: '1.3rem'};
export const size_md: Style_Variable = {name: 'size_md', light: '1.6rem'};
export const size_lg: Style_Variable = {name: 'size_lg', light: '2.04rem'};
export const size_xl: Style_Variable = {name: 'size_xl', light: '2.59rem'};
export const size_xl2: Style_Variable = {name: 'size_xl2', light: '3.29rem'};
export const size_xl3: Style_Variable = {name: 'size_xl3', light: '4.19rem'};
export const size_xl4: Style_Variable = {name: 'size_xl4', light: '5.33rem'};
export const size_xl5: Style_Variable = {name: 'size_xl5', light: '6.78rem'};
export const size_xl6: Style_Variable = {name: 'size_xl6', light: '8.62rem'};
export const size_xl7: Style_Variable = {name: 'size_xl7', light: '10.97rem'};
export const size_xl8: Style_Variable = {name: 'size_xl8', light: '13.95rem'};
export const size_xl9: Style_Variable = {name: 'size_xl9', light: '17.74rem'};

/* links */
export const link_color: Style_Variable = {
	name: 'link_color',
	light: 'hsl(var(--hue_a), 61%, 35%)',
	dark: 'hsl(var(--hue_a), 61%, 58%)',
};
export const text_decoration: Style_Variable = {name: 'text_decoration', light: 'none'};
export const text_decoration_hover: Style_Variable = {
	name: 'text_decoration_hover',
	light: 'underline',
};
export const text_decoration_selected: Style_Variable = {
	name: 'text_decoration_selected',
	light: 'underline',
};
export const link_color_selected: Style_Variable = {
	name: 'link_color_selected',
	light: 'var(--text_color)',
};

/* spacings, rounded to pixels for the default 16px case */
export const space_xs5: Style_Variable = {name: 'space_xs5', light: '0.1rem'};
export const space_xs4: Style_Variable = {name: 'space_xs4', light: '0.2rem'};
export const space_xs3: Style_Variable = {name: 'space_xs3', light: '0.3rem'};
export const space_xs2: Style_Variable = {name: 'space_xs2', light: '0.4rem'};
export const space_xs: Style_Variable = {name: 'space_xs', light: '0.6rem'};
export const space_sm: Style_Variable = {name: 'space_sm', light: '0.8rem'};
export const space_md: Style_Variable = {name: 'space_md', light: '1rem'};
export const space_lg: Style_Variable = {name: 'space_lg', light: '1.3rem'};
export const space_xl: Style_Variable = {name: 'space_xl', light: '1.6rem'};
export const space_xl2: Style_Variable = {name: 'space_xl2', light: '2.1rem'};
export const space_xl3: Style_Variable = {name: 'space_xl3', light: '2.6rem'};
export const space_xl4: Style_Variable = {name: 'space_xl4', light: '3.3rem'};
export const space_xl5: Style_Variable = {name: 'space_xl5', light: '4.2rem'};
export const space_xl6: Style_Variable = {name: 'space_xl6', light: '5.4rem'};
export const space_xl7: Style_Variable = {name: 'space_xl7', light: '6.9rem'};
export const space_xl8: Style_Variable = {name: 'space_xl8', light: '8.7rem'};
export const space_xl9: Style_Variable = {name: 'space_xl9', light: '11.1rem'};
export const space_xl10: Style_Variable = {name: 'space_xl10', light: '14.1rem'};
export const space_xl11: Style_Variable = {name: 'space_xl11', light: '17.9rem'};
export const space_xl12: Style_Variable = {name: 'space_xl12', light: '22.8rem'};
export const space_xl13: Style_Variable = {name: 'space_xl13', light: '29rem'};
export const space_xl14: Style_Variable = {name: 'space_xl14', light: '36.9rem'};
export const space_xl15: Style_Variable = {name: 'space_xl15', light: '47rem'};
export const width_md: Style_Variable = {name: 'width_md', light: '800px'};
export const width_sm: Style_Variable = {name: 'width_sm', light: '320px'};
export const width_xs: Style_Variable = {name: 'width_xs', light: '200px'};

/* borders and outlines */
// TODO remove these two generics? composability doesn't work like I wanted
export const border_color: Style_Variable = {
	name: 'border_color',
	light: 'var(--border_color_3)',
};
export const border_style: Style_Variable = {
	name: 'border_style',
	light: 'solid',
};
// TODO add tint vars for these?
export const border_color_1: Style_Variable = {
	name: 'border_color_1',
	light: 'hsl(var(--tint_hue), 60%, 20%, 15%)',
	dark: 'hsl(var(--tint_hue), 60%, 80%, 85%)',
};
export const border_color_2: Style_Variable = {
	name: 'border_color_2',
	light: 'hsl(var(--tint_hue), 60%, 20%, 25%)',
	dark: 'hsl(var(--tint_hue), 60%, 80%, 70%)',
};
export const border_color_3: Style_Variable = {
	name: 'border_color_3',
	light: 'hsl(var(--tint_hue), 60%, 20%, 35%)',
	dark: 'hsl(var(--tint_hue), 60%, 80%, 50%)',
};
export const border_color_4: Style_Variable = {
	name: 'border_color_4',
	light: 'hsl(var(--tint_hue), 60%, 20%, 50%)',
	dark: 'hsl(var(--tint_hue), 60%, 80%, 40%)',
};
export const border_color_5: Style_Variable = {
	name: 'border_color_5',
	light: 'hsl(var(--tint_hue), 60%, 20%, 70%)',
	dark: 'hsl(var(--tint_hue), 60%, 80%, 25%)',
};
export const border_color_a: Style_Variable = {
	name: 'border_color_a',
	light: 'hsl(var(--color_a_5))',
};
export const border_color_b: Style_Variable = {
	name: 'border_color_b',
	light: 'hsl(var(--color_b_5))',
};
export const border_color_c: Style_Variable = {
	name: 'border_color_c',
	light: 'hsl(var(--color_c_5))',
};
export const border_color_d: Style_Variable = {
	name: 'border_color_d',
	light: 'hsl(var(--color_d_5))',
};
export const border_color_e: Style_Variable = {
	name: 'border_color_e',
	light: 'hsl(var(--color_e_5))',
};
export const border_color_f: Style_Variable = {
	name: 'border_color_f',
	light: 'hsl(var(--color_f_5))',
};
export const border_color_g: Style_Variable = {
	name: 'border_color_g',
	light: 'hsl(var(--color_g_5))',
};
// TODO disabled doesn't work with colors
export const border_disabled: Style_Variable = {
	name: 'border_disabled',
	light: 'var(--border_color_3)',
};
export const border_width: Style_Variable = {name: 'border_width', light: 'var(--border_width_1)'};
export const border_width_1: Style_Variable = {name: 'border_width_1', light: '1px'};
export const border_width_2: Style_Variable = {name: 'border_width_2', light: '2px'};
export const border_width_3: Style_Variable = {name: 'border_width_3', light: '3px'};
export const border_width_4: Style_Variable = {name: 'border_width_4', light: '4px'};
export const border_width_5: Style_Variable = {name: 'border_width_5', light: '6px'};
export const border_width_6: Style_Variable = {name: 'border_width_6', light: '8px'};
export const outline_width: Style_Variable = {
	name: 'outline_width',
	light: 'var(--outline_width_1)',
};
export const outline_width_1: Style_Variable = {name: 'outline_width_1', light: '0'};
export const outline_width_2: Style_Variable = {
	name: 'outline_width_2',
	light: 'var(--border_width_2)',
};
export const outline_width_3: Style_Variable = {
	name: 'outline_width_3',
	light: 'var(--border_width_1)',
};
export const outline_style: Style_Variable = {name: 'outline_style', light: 'solid'};
export const outline_color: Style_Variable = {
	name: 'outline_color',
	light: 'var(--border_color_a)',
};

/* border radii */
export const radius_xl: Style_Variable = {name: 'radius_xl', light: '5.5rem'};
export const radius_lg: Style_Variable = {name: 'radius_lg', light: '3.4rem'};
export const radius_md: Style_Variable = {name: 'radius_md', light: '2.1rem'};
export const radius_sm: Style_Variable = {name: 'radius_sm', light: '1.3rem'};
export const radius_xs: Style_Variable = {name: 'radius_xs', light: '0.8rem'};
export const radius_xs2: Style_Variable = {name: 'radius_xs2', light: '0.5rem'};
export const radius_xs3: Style_Variable = {name: 'radius_xs3', light: '0.3rem'};

/* button colors */
export const button_fill: Style_Variable = {name: 'button_fill', light: 'var(--fg_1)'};
export const button_fill_hover: Style_Variable = {name: 'button_fill_hover', light: 'var(--fg_2)'}; // TODO keep these? what about `::before` and `::after` visuals with gradients/animations;
export const button_fill_active: Style_Variable = {
	name: 'button_fill_active',
	light: 'var(--bg_3)',
};
export const button_fill_selected: Style_Variable = {
	name: 'button_fill_selected',
	light: 'var(--bg_3)',
};
export const button_fill_disabled: Style_Variable = {
	name: 'button_fill_disabled',
	light: 'transparent',
};

/* inputs */
export const input_fill: Style_Variable = {name: 'input_fill', light: 'var(--bg_5)'};
export const input_padding_y: Style_Variable = {name: 'input_padding_y', light: '0'};
export const input_padding_x: Style_Variable = {name: 'input_padding_x', light: 'var(--space_lg)'};
export const input_width_min: Style_Variable = {name: 'input_width_min', light: '100px'};
export const input_height: Style_Variable = {name: 'input_height', light: 'var(--space_xl5)'};
export const input_height_sm: Style_Variable = {name: 'input_height_sm', light: 'var(--space_xl4)'};
export const input_height_inner: Style_Variable = {
	name: 'input_height_inner',
	light: 'calc(var(--input_height) - 2 * var(--border_width) - 2 * var(--input_padding_y))',
};

// TODO think about more API surface area like colors, `shadow_xs_a-g` or use a variable `--shadow_color`
// rewrite this with helpers so we get the color variants declared here statically, without repeating things like the px values
// if we have a generic form for those variables, we could make it work with fg/bg/border colors, etc,
// thus giving us the idea of "highlights" (bg color) as the base, and keeping the current tinted versions as the default.

/* shadows */
// TODO these shouldn't use tint, use lighten/darken instead,
// but ideally we'd have a blend mode make the colors right,
// which would require a pseduo-element,
// but that's heavier and requires the element to be positioned (I think?)

// TODO maybe:
// - shadow and glow - color-scheme-agnostic
// - lift and depth that have both shadow and glow, color-scheme-aware

export interface Create_Shadow_Options {
	inset?: boolean;
	scale?: number;
}

export const shadow_color: Style_Variable = {
	name: 'shadow_color',
	light: 'var(--tint_hue) var(--tint_saturation) 6%',
	dark: 'var(--tint_hue) var(--tint_saturation) 82%',
};
export const shadow_a_color: Style_Variable = {
	name: 'shadow_a_color',
	light: 'var(--color_a_7)',
	dark: 'var(--color_a_3)',
};
export const shadow_b_color: Style_Variable = {
	name: 'shadow_b_color',
	light: 'var(--color_b_7)',
	dark: 'var(--color_b_3)',
};
export const shadow_c_color: Style_Variable = {
	name: 'shadow_c_color',
	light: 'var(--color_c_7)',
	dark: 'var(--color_c_3)',
};
export const shadow_d_color: Style_Variable = {
	name: 'shadow_d_color',
	light: 'var(--color_d_7)',
	dark: 'var(--color_d_3)',
};
export const shadow_e_color: Style_Variable = {
	name: 'shadow_e_color',
	light: 'var(--color_e_7)',
	dark: 'var(--color_e_3)',
};
export const shadow_f_color: Style_Variable = {
	name: 'shadow_f_color',
	light: 'var(--color_f_7)',
	dark: 'var(--color_f_3)',
};
export const shadow_g_color: Style_Variable = {
	name: 'shadow_g_color',
	light: 'var(--color_g_7)',
	dark: 'var(--color_g_3)',
};

// These are grouped differently than the normal convention (xs-xl)
// because the `outset` variants have negative positions, but otherwise match.
// TODO is this the best granularity? combines x/y offsets with blur and spread
// TODO Are these variables useful enough to be extracted? Is there a significant performance implication to using these variables instead of inlining in the shadow variables?
export const shadow_values_xs: Style_Variable = {
	name: 'shadow_values_xs',
	light: '0.5px 1px 3px 0px',
};
export const shadow_values_inset_xs: Style_Variable = {
	name: 'shadow_values_inset_xs',
	light: '0.5px 1px 3px 0px',
};
export const shadow_values_outset_xs: Style_Variable = {
	name: 'shadow_values_outset_xs',
	light: '-0.5px -1px 3px 0px',
};
export const shadow_values_sm: Style_Variable = {
	name: 'shadow_values_sm',
	light: '1px 2px 4px 0px',
};
export const shadow_values_inset_sm: Style_Variable = {
	name: 'shadow_values_inset_sm',
	light: '1px 2px 4px 0px',
};
export const shadow_values_outset_sm: Style_Variable = {
	name: 'shadow_values_outset_sm',
	light: '-1px -2px 4px 0px',
};
export const shadow_values_md: Style_Variable = {
	name: 'shadow_values_md',
	light: '1.5px 3px 6px 0px',
};
export const shadow_values_inset_md: Style_Variable = {
	name: 'shadow_values_inset_md',
	light: '1.5px 3px 6px 0px',
};
export const shadow_values_outset_md: Style_Variable = {
	name: 'shadow_values_outset_md',
	light: '-1.5px -3px 6px 0px',
};
export const shadow_values_lg: Style_Variable = {
	name: 'shadow_values_lg',
	light: '2px 4px 10px 0px',
};
export const shadow_values_inset_lg: Style_Variable = {
	name: 'shadow_values_inset_lg',
	light: '2px 4px 10px 0px',
};
export const shadow_values_outset_lg: Style_Variable = {
	name: 'shadow_values_outset_lg',
	light: '-2px -4px 10px 0px',
};
export const shadow_values_xl: Style_Variable = {
	name: 'shadow_values_xl',
	light: '3px 5px 20px 0px',
};
export const shadow_values_inset_xl: Style_Variable = {
	name: 'shadow_values_inset_xl',
	light: '3px 5px 20px 0px',
};
export const shadow_values_outset_xl: Style_Variable = {
	name: 'shadow_values_outset_xl',
	light: '-3px -5px 20px 0px',
};
export const shadow_alpha_xs: Style_Variable = {
	name: 'shadow_alpha_xs',
	light: '0.2',
};
export const shadow_alpha_sm: Style_Variable = {
	name: 'shadow_alpha_sm',
	light: '0.3',
};
export const shadow_alpha_md: Style_Variable = {
	name: 'shadow_alpha_md',
	light: '0.4',
};
export const shadow_alpha_lg: Style_Variable = {
	name: 'shadow_alpha_lg',
	light: '0.6',
};
export const shadow_alpha_xl: Style_Variable = {
	name: 'shadow_alpha_xl',
	light: '0.8',
};

export const shadow_xs: Style_Variable = {
	name: 'shadow_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_color) / var(--shadow_alpha_xs))',
};
export const shadow_sm: Style_Variable = {
	name: 'shadow_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_color) / var(--shadow_alpha_sm))',
};
export const shadow_md: Style_Variable = {
	name: 'shadow_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_color) / var(--shadow_alpha_md))',
};
export const shadow_lg: Style_Variable = {
	name: 'shadow_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_color) / var(--shadow_alpha_lg))',
};
export const shadow_xl: Style_Variable = {
	name: 'shadow_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_color) / var(--shadow_alpha_xl))',
};
export const shadow_inset_xs: Style_Variable = {
	name: 'shadow_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_inset_sm: Style_Variable = {
	name: 'shadow_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_inset_md: Style_Variable = {
	name: 'shadow_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_inset_lg: Style_Variable = {
	name: 'shadow_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_inset_xl: Style_Variable = {
	name: 'shadow_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_outset_xs: Style_Variable = {
	name: 'shadow_outset_xs',
	light: 'var(--shadow_values_outset_xs) hsla(var(--shadow_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_outset_sm: Style_Variable = {
	name: 'shadow_outset_sm',
	light: 'var(--shadow_values_outset_sm) hsla(var(--shadow_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_outset_md: Style_Variable = {
	name: 'shadow_outset_md',
	light: 'var(--shadow_values_outset_md) hsla(var(--shadow_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_outset_lg: Style_Variable = {
	name: 'shadow_outset_lg',
	light: 'var(--shadow_values_outset_lg) hsla(var(--shadow_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_outset_xl: Style_Variable = {
	name: 'shadow_outset_xl',
	light: 'var(--shadow_values_outset_xl) hsla(var(--shadow_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_a_xs: Style_Variable = {
	name: 'shadow_a_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_a_color) / var(--shadow_alpha_xs))',
};
export const shadow_a_sm: Style_Variable = {
	name: 'shadow_a_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_a_color) / var(--shadow_alpha_sm))',
};
export const shadow_a_md: Style_Variable = {
	name: 'shadow_a_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_a_color) / var(--shadow_alpha_md))',
};
export const shadow_a_lg: Style_Variable = {
	name: 'shadow_a_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_a_color) / var(--shadow_alpha_lg))',
};
export const shadow_a_xl: Style_Variable = {
	name: 'shadow_a_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_a_color) / var(--shadow_alpha_xl))',
};
export const shadow_a_inset_xs: Style_Variable = {
	name: 'shadow_a_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_a_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_a_inset_sm: Style_Variable = {
	name: 'shadow_a_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_a_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_a_inset_md: Style_Variable = {
	name: 'shadow_a_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_a_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_a_inset_lg: Style_Variable = {
	name: 'shadow_a_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_a_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_a_inset_xl: Style_Variable = {
	name: 'shadow_a_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_a_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_a_outset_xs: Style_Variable = {
	name: 'shadow_a_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_a_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_a_outset_sm: Style_Variable = {
	name: 'shadow_a_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_a_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_a_outset_md: Style_Variable = {
	name: 'shadow_a_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_a_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_a_outset_lg: Style_Variable = {
	name: 'shadow_a_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_a_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_a_outset_xl: Style_Variable = {
	name: 'shadow_a_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_a_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_b_xs: Style_Variable = {
	name: 'shadow_b_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_b_color) / var(--shadow_alpha_xs))',
};
export const shadow_b_sm: Style_Variable = {
	name: 'shadow_b_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_b_color) / var(--shadow_alpha_sm))',
};
export const shadow_b_md: Style_Variable = {
	name: 'shadow_b_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_b_color) / var(--shadow_alpha_md))',
};
export const shadow_b_lg: Style_Variable = {
	name: 'shadow_b_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_b_color) / var(--shadow_alpha_lg))',
};
export const shadow_b_xl: Style_Variable = {
	name: 'shadow_b_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_b_color) / var(--shadow_alpha_xl))',
};
export const shadow_b_inset_xs: Style_Variable = {
	name: 'shadow_b_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_b_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_b_inset_sm: Style_Variable = {
	name: 'shadow_b_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_b_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_b_inset_md: Style_Variable = {
	name: 'shadow_b_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_b_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_b_inset_lg: Style_Variable = {
	name: 'shadow_b_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_b_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_b_inset_xl: Style_Variable = {
	name: 'shadow_b_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_b_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_b_outset_xs: Style_Variable = {
	name: 'shadow_b_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_b_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_b_outset_sm: Style_Variable = {
	name: 'shadow_b_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_b_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_b_outset_md: Style_Variable = {
	name: 'shadow_b_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_b_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_b_outset_lg: Style_Variable = {
	name: 'shadow_b_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_b_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_b_outset_xl: Style_Variable = {
	name: 'shadow_b_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_b_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_c_xs: Style_Variable = {
	name: 'shadow_c_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_c_color) / var(--shadow_alpha_xs))',
};
export const shadow_c_sm: Style_Variable = {
	name: 'shadow_c_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_c_color) / var(--shadow_alpha_sm))',
};
export const shadow_c_md: Style_Variable = {
	name: 'shadow_c_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_c_color) / var(--shadow_alpha_md))',
};
export const shadow_c_lg: Style_Variable = {
	name: 'shadow_c_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_c_color) / var(--shadow_alpha_lg))',
};
export const shadow_c_xl: Style_Variable = {
	name: 'shadow_c_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_c_color) / var(--shadow_alpha_xl))',
};
export const shadow_c_inset_xs: Style_Variable = {
	name: 'shadow_c_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_c_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_c_inset_sm: Style_Variable = {
	name: 'shadow_c_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_c_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_c_inset_md: Style_Variable = {
	name: 'shadow_c_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_c_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_c_inset_lg: Style_Variable = {
	name: 'shadow_c_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_c_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_c_inset_xl: Style_Variable = {
	name: 'shadow_c_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_c_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_c_outset_xs: Style_Variable = {
	name: 'shadow_c_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_c_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_c_outset_sm: Style_Variable = {
	name: 'shadow_c_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_c_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_c_outset_md: Style_Variable = {
	name: 'shadow_c_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_c_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_c_outset_lg: Style_Variable = {
	name: 'shadow_c_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_c_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_c_outset_xl: Style_Variable = {
	name: 'shadow_c_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_c_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_d_xs: Style_Variable = {
	name: 'shadow_d_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_d_color) / var(--shadow_alpha_xs))',
};
export const shadow_d_sm: Style_Variable = {
	name: 'shadow_d_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_d_color) / var(--shadow_alpha_sm))',
};
export const shadow_d_md: Style_Variable = {
	name: 'shadow_d_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_d_color) / var(--shadow_alpha_md))',
};
export const shadow_d_lg: Style_Variable = {
	name: 'shadow_d_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_d_color) / var(--shadow_alpha_lg))',
};
export const shadow_d_xl: Style_Variable = {
	name: 'shadow_d_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_d_color) / var(--shadow_alpha_xl))',
};
export const shadow_d_inset_xs: Style_Variable = {
	name: 'shadow_d_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_d_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_d_inset_sm: Style_Variable = {
	name: 'shadow_d_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_d_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_d_inset_md: Style_Variable = {
	name: 'shadow_d_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_d_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_d_inset_lg: Style_Variable = {
	name: 'shadow_d_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_d_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_d_inset_xl: Style_Variable = {
	name: 'shadow_d_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_d_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_d_outset_xs: Style_Variable = {
	name: 'shadow_d_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_d_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_d_outset_sm: Style_Variable = {
	name: 'shadow_d_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_d_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_d_outset_md: Style_Variable = {
	name: 'shadow_d_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_d_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_d_outset_lg: Style_Variable = {
	name: 'shadow_d_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_d_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_d_outset_xl: Style_Variable = {
	name: 'shadow_d_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_d_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_e_xs: Style_Variable = {
	name: 'shadow_e_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_e_color) / var(--shadow_alpha_xs))',
};
export const shadow_e_sm: Style_Variable = {
	name: 'shadow_e_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_e_color) / var(--shadow_alpha_sm))',
};
export const shadow_e_md: Style_Variable = {
	name: 'shadow_e_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_e_color) / var(--shadow_alpha_md))',
};
export const shadow_e_lg: Style_Variable = {
	name: 'shadow_e_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_e_color) / var(--shadow_alpha_lg))',
};
export const shadow_e_xl: Style_Variable = {
	name: 'shadow_e_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_e_color) / var(--shadow_alpha_xl))',
};
export const shadow_e_inset_xs: Style_Variable = {
	name: 'shadow_e_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_e_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_e_inset_sm: Style_Variable = {
	name: 'shadow_e_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_e_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_e_inset_md: Style_Variable = {
	name: 'shadow_e_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_e_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_e_inset_lg: Style_Variable = {
	name: 'shadow_e_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_e_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_e_inset_xl: Style_Variable = {
	name: 'shadow_e_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_e_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_e_outset_xs: Style_Variable = {
	name: 'shadow_e_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_e_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_e_outset_sm: Style_Variable = {
	name: 'shadow_e_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_e_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_e_outset_md: Style_Variable = {
	name: 'shadow_e_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_e_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_e_outset_lg: Style_Variable = {
	name: 'shadow_e_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_e_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_e_outset_xl: Style_Variable = {
	name: 'shadow_e_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_e_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_f_xs: Style_Variable = {
	name: 'shadow_f_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_f_color) / var(--shadow_alpha_xs))',
};
export const shadow_f_sm: Style_Variable = {
	name: 'shadow_f_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_f_color) / var(--shadow_alpha_sm))',
};
export const shadow_f_md: Style_Variable = {
	name: 'shadow_f_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_f_color) / var(--shadow_alpha_md))',
};
export const shadow_f_lg: Style_Variable = {
	name: 'shadow_f_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_f_color) / var(--shadow_alpha_lg))',
};
export const shadow_f_xl: Style_Variable = {
	name: 'shadow_f_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_f_color) / var(--shadow_alpha_xl))',
};
export const shadow_f_inset_xs: Style_Variable = {
	name: 'shadow_f_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_f_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_f_inset_sm: Style_Variable = {
	name: 'shadow_f_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_f_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_f_inset_md: Style_Variable = {
	name: 'shadow_f_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_f_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_f_inset_lg: Style_Variable = {
	name: 'shadow_f_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_f_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_f_inset_xl: Style_Variable = {
	name: 'shadow_f_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_f_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_f_outset_xs: Style_Variable = {
	name: 'shadow_f_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_f_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_f_outset_sm: Style_Variable = {
	name: 'shadow_f_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_f_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_f_outset_md: Style_Variable = {
	name: 'shadow_f_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_f_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_f_outset_lg: Style_Variable = {
	name: 'shadow_f_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_f_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_f_outset_xl: Style_Variable = {
	name: 'shadow_f_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_f_color) / var(--shadow_alpha_xl)) inset',
};

export const shadow_g_xs: Style_Variable = {
	name: 'shadow_g_xs',
	light: 'var(--shadow_values_xs) hsla(var(--shadow_g_color) / var(--shadow_alpha_xs))',
};
export const shadow_g_sm: Style_Variable = {
	name: 'shadow_g_sm',
	light: 'var(--shadow_values_sm) hsla(var(--shadow_g_color) / var(--shadow_alpha_sm))',
};
export const shadow_g_md: Style_Variable = {
	name: 'shadow_g_md',
	light: 'var(--shadow_values_md) hsla(var(--shadow_g_color) / var(--shadow_alpha_md))',
};
export const shadow_g_lg: Style_Variable = {
	name: 'shadow_g_lg',
	light: 'var(--shadow_values_lg) hsla(var(--shadow_g_color) / var(--shadow_alpha_lg))',
};
export const shadow_g_xl: Style_Variable = {
	name: 'shadow_g_xl',
	light: 'var(--shadow_values_xl) hsla(var(--shadow_g_color) / var(--shadow_alpha_xl))',
};
export const shadow_g_inset_xs: Style_Variable = {
	name: 'shadow_g_inset_xs',
	light: 'var(--shadow_values_inset_xs) hsla(var(--shadow_g_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_g_inset_sm: Style_Variable = {
	name: 'shadow_g_inset_sm',
	light: 'var(--shadow_values_inset_sm) hsla(var(--shadow_g_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_g_inset_md: Style_Variable = {
	name: 'shadow_g_inset_md',
	light: 'var(--shadow_values_inset_md) hsla(var(--shadow_g_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_g_inset_lg: Style_Variable = {
	name: 'shadow_g_inset_lg',
	light: 'var(--shadow_values_inset_lg) hsla(var(--shadow_g_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_g_inset_xl: Style_Variable = {
	name: 'shadow_g_inset_xl',
	light: 'var(--shadow_values_inset_xl) hsla(var(--shadow_g_color) / var(--shadow_alpha_xl)) inset',
};
export const shadow_g_outset_xs: Style_Variable = {
	name: 'shadow_g_outset_xs',
	light:
		'var(--shadow_values_outset_xs) hsla(var(--shadow_g_color) / var(--shadow_alpha_xs)) inset',
};
export const shadow_g_outset_sm: Style_Variable = {
	name: 'shadow_g_outset_sm',
	light:
		'var(--shadow_values_outset_sm) hsla(var(--shadow_g_color) / var(--shadow_alpha_sm)) inset',
};
export const shadow_g_outset_md: Style_Variable = {
	name: 'shadow_g_outset_md',
	light:
		'var(--shadow_values_outset_md) hsla(var(--shadow_g_color) / var(--shadow_alpha_md)) inset',
};
export const shadow_g_outset_lg: Style_Variable = {
	name: 'shadow_g_outset_lg',
	light:
		'var(--shadow_values_outset_lg) hsla(var(--shadow_g_color) / var(--shadow_alpha_lg)) inset',
};
export const shadow_g_outset_xl: Style_Variable = {
	name: 'shadow_g_outset_xl',
	light:
		'var(--shadow_values_outset_xl) hsla(var(--shadow_g_color) / var(--shadow_alpha_xl)) inset',
};

/* icons */
/* these decrease by the golden ratio, rounded to the nearest pixel,
	and they're insensitive to font size (`px` not `rem`) */
export const icon_size_xs: Style_Variable = {name: 'icon_size_xs', light: icon_sizes.icon_size_xs};
export const icon_size_sm: Style_Variable = {name: 'icon_size_sm', light: icon_sizes.icon_size_sm};
export const icon_size_md: Style_Variable = {name: 'icon_size_md', light: icon_sizes.icon_size_md};
export const icon_size_lg: Style_Variable = {name: 'icon_size_lg', light: icon_sizes.icon_size_lg};
export const icon_size_xl: Style_Variable = {name: 'icon_size_xl', light: icon_sizes.icon_size_xl};
export const icon_size_xl2: Style_Variable = {
	name: 'icon_size_xl2',
	light: icon_sizes.icon_size_xl2,
};
export const icon_size_xl3: Style_Variable = {
	name: 'icon_size_xl3',
	light: icon_sizes.icon_size_xl3,
};

/* durations */
// TODO maybe change the scale from xs-xl, and add an xs here around 0.04s or 0.03s
export const duration_1: Style_Variable = {name: 'duration_1', light: '0.08s'};
export const duration_2: Style_Variable = {name: 'duration_2', light: '0.2s'};
export const duration_3: Style_Variable = {name: 'duration_3', light: '0.5s'};
export const duration_4: Style_Variable = {name: 'duration_4', light: '1s'};
export const duration_5: Style_Variable = {name: 'duration_5', light: '1.5s'};
export const duration_6: Style_Variable = {name: 'duration_6', light: '3s'};

/* transparencies */
// TODO add one for 7 total?
/* TODO maybe delete these? they do help with standardizing/consistency */
export const fade_1: Style_Variable = {name: 'fade_1', light: '86%'};
export const fade_2: Style_Variable = {name: 'fade_2', light: '62%'};
export const fade_3: Style_Variable = {name: 'fade_3', light: '38%'};
export const fade_4: Style_Variable = {name: 'fade_4', light: '24%'};
export const fade_5: Style_Variable = {name: 'fade_5', light: '15%'};
export const fade_6: Style_Variable = {name: 'fade_6', light: '9%'};
export const disabled_opacity: Style_Variable = {name: 'disabled_opacity', light: 'var(--fade_2)'};

/**
 * These are implicitly the variables for the `base` theme.
 * See also the empty `variables` array of the `base` theme above.
 */
export const default_variables: Style_Variable[] = [
	/*
		colors - eyeballed and intepolated with a spreadsheet,
		a professional designer will have opinions
	*/
	hue_a,
	hue_b,
	hue_c,
	hue_d,
	hue_e,
	hue_f,
	hue_g,
	color_a_1,
	color_a_2,
	color_a_3,
	color_a_4,
	color_a_5,
	color_a_6,
	color_a_7,
	color_a_8,
	color_a_9,
	color_b_1,
	color_b_2,
	color_b_3,
	color_b_4,
	color_b_5,
	color_b_6,
	color_b_7,
	color_b_8,
	color_b_9,
	color_c_1,
	color_c_2,
	color_c_3,
	color_c_4,
	color_c_5,
	color_c_6,
	color_c_7,
	color_c_8,
	color_c_9,
	color_d_1,
	color_d_2,
	color_d_3,
	color_d_4,
	color_d_5,
	color_d_6,
	color_d_7,
	color_d_8,
	color_d_9,
	color_e_1,
	color_e_2,
	color_e_3,
	color_e_4,
	color_e_5,
	color_e_6,
	color_e_7,
	color_e_8,
	color_e_9,
	color_f_1,
	color_f_2,
	color_f_3,
	color_f_4,
	color_f_5,
	color_f_6,
	color_f_7,
	color_f_8,
	color_f_9,
	color_g_1,
	color_g_2,
	color_g_3,
	color_g_4,
	color_g_5,
	color_g_6,
	color_g_7,
	color_g_8,
	color_g_9,

	/*
		color variants - using these usually means handling both light and dark modes separately -
		the semantic variants	that handle `color-schema` automatically include `--bg_1` and `--bg_2`
	*/
	// TODO some of these may be too subtle, but there may be cases where it's needed so keeping them for now
	darken_1,
	darken_2,
	darken_3,
	darken_4,
	darken_5,
	darken_6,
	darken_7,
	darken_8,
	darken_9,
	lighten_1,
	lighten_2,
	lighten_3,
	lighten_4,
	lighten_5,
	lighten_6,
	lighten_7,
	lighten_8,
	lighten_9,

	/* tint colors */
	tint_hue,
	tint_saturation,

	/* bg colors */
	bg,
	fg,
	/* these are light or dark with a low alpha, so they nest/stack arbitrarily */
	// TODO these inconsistently don't use tint, unlike bg/fg
	bg_0,
	bg_1,
	bg_2,
	bg_3,
	bg_4,
	bg_5,
	bg_6,
	bg_7,
	bg_8,
	bg_9,
	bg_10,
	fg_0,
	fg_1,
	fg_2,
	fg_3,
	fg_4,
	fg_5,
	fg_6,
	fg_7,
	fg_8,
	fg_9,
	fg_10,
	fill_a,
	fill_b,
	fill_c,
	fill_d,
	fill_e,
	fill_f,
	fill_g,
	// TODO probably need more variants, 5 total?
	/* text colors don't use alpha because it affects performance too much */
	text_color,
	text_1,
	text_2,
	text_3,
	text_disabled,
	text_active,

	/* fonts */
	line_height_xs,
	line_height_sm,
	line_height_md,
	line_height_lg,
	line_height_xl,
	font_sans,
	font_mono,

	/* sizes like font-size */
	size_xs,
	size_sm,
	size_md,
	size_lg,
	size_xl,
	size_xl2,
	size_xl3,
	size_xl4,
	size_xl5,
	size_xl6,
	size_xl7,
	size_xl8,
	size_xl9,

	/* links */
	link_color,
	text_decoration,
	text_decoration_hover,
	text_decoration_selected,
	link_color_selected,

	/* space, rounded to pixels for the default 16px case */
	space_xs5,
	space_xs4,
	space_xs3,
	space_xs2,
	space_xs,
	space_sm,
	space_md,
	space_lg,
	space_xl,
	space_xl2,
	space_xl3,
	space_xl4,
	space_xl5,
	space_xl6,
	space_xl7,
	space_xl8,
	space_xl9,
	space_xl10,
	space_xl11,
	space_xl12,
	space_xl13,
	space_xl14,
	space_xl15,
	width_md,
	width_sm,
	width_xs,

	/* borders and outlines */
	border_color,
	border_style,
	// TODO add tint vars for these?
	border_color_1,
	border_color_2,
	border_color_3,
	border_color_4,
	border_color_5,
	border_color_a,
	border_color_b,
	border_color_c,
	border_color_d,
	border_color_e,
	border_color_f,
	border_color_g,
	border_disabled,
	border_width,
	border_width_1,
	border_width_2,
	border_width_3,
	border_width_4,
	border_width_5,
	border_width_6,
	outline_width,
	outline_width_1,
	outline_width_2,
	outline_width_3,
	outline_style,
	outline_color,

	/* border radii */
	radius_xl,
	radius_lg,
	radius_md,
	radius_sm,
	radius_xs,
	radius_xs2,
	radius_xs3,

	/* button colors */
	button_fill,
	button_fill_hover,
	button_fill_active,
	button_fill_selected,
	button_fill_disabled,

	/* inputs */
	input_fill,
	input_padding_y,
	input_padding_x,
	input_width_min,
	input_height,
	input_height_sm,
	input_height_inner,

	/* shadows */
	shadow_color,
	shadow_a_color,
	shadow_b_color,
	shadow_c_color,
	shadow_d_color,
	shadow_e_color,
	shadow_f_color,
	shadow_g_color,
	shadow_values_xs,
	shadow_values_sm,
	shadow_values_md,
	shadow_values_lg,
	shadow_values_xl,
	shadow_values_inset_xs,
	shadow_values_inset_sm,
	shadow_values_inset_md,
	shadow_values_inset_lg,
	shadow_values_inset_xl,
	shadow_values_outset_xs,
	shadow_values_outset_sm,
	shadow_values_outset_md,
	shadow_values_outset_lg,
	shadow_values_outset_xl,
	shadow_alpha_xs,
	shadow_alpha_sm,
	shadow_alpha_md,
	shadow_alpha_lg,
	shadow_alpha_xl,
	shadow_xs,
	shadow_sm,
	shadow_md,
	shadow_lg,
	shadow_xl,
	shadow_inset_xs,
	shadow_inset_sm,
	shadow_inset_md,
	shadow_inset_lg,
	shadow_inset_xl,
	shadow_outset_xs,
	shadow_outset_sm,
	shadow_outset_md,
	shadow_outset_lg,
	shadow_outset_xl,
	shadow_a_xs,
	shadow_a_sm,
	shadow_a_md,
	shadow_a_lg,
	shadow_a_xl,
	shadow_a_inset_xs,
	shadow_a_inset_sm,
	shadow_a_inset_md,
	shadow_a_inset_lg,
	shadow_a_inset_xl,
	shadow_a_outset_xs,
	shadow_a_outset_sm,
	shadow_a_outset_md,
	shadow_a_outset_lg,
	shadow_a_outset_xl,
	shadow_b_xs,
	shadow_b_sm,
	shadow_b_md,
	shadow_b_lg,
	shadow_b_xl,
	shadow_b_inset_xs,
	shadow_b_inset_sm,
	shadow_b_inset_md,
	shadow_b_inset_lg,
	shadow_b_inset_xl,
	shadow_b_outset_xs,
	shadow_b_outset_sm,
	shadow_b_outset_md,
	shadow_b_outset_lg,
	shadow_b_outset_xl,
	shadow_c_xs,
	shadow_c_sm,
	shadow_c_md,
	shadow_c_lg,
	shadow_c_xl,
	shadow_c_inset_xs,
	shadow_c_inset_sm,
	shadow_c_inset_md,
	shadow_c_inset_lg,
	shadow_c_inset_xl,
	shadow_c_outset_xs,
	shadow_c_outset_sm,
	shadow_c_outset_md,
	shadow_c_outset_lg,
	shadow_c_outset_xl,
	shadow_d_xs,
	shadow_d_sm,
	shadow_d_md,
	shadow_d_lg,
	shadow_d_xl,
	shadow_d_inset_xs,
	shadow_d_inset_sm,
	shadow_d_inset_md,
	shadow_d_inset_lg,
	shadow_d_inset_xl,
	shadow_d_outset_xs,
	shadow_d_outset_sm,
	shadow_d_outset_md,
	shadow_d_outset_lg,
	shadow_d_outset_xl,
	shadow_e_xs,
	shadow_e_sm,
	shadow_e_md,
	shadow_e_lg,
	shadow_e_xl,
	shadow_e_inset_xs,
	shadow_e_inset_sm,
	shadow_e_inset_md,
	shadow_e_inset_lg,
	shadow_e_inset_xl,
	shadow_e_outset_xs,
	shadow_e_outset_sm,
	shadow_e_outset_md,
	shadow_e_outset_lg,
	shadow_e_outset_xl,
	shadow_f_xs,
	shadow_f_sm,
	shadow_f_md,
	shadow_f_lg,
	shadow_f_xl,
	shadow_f_inset_xs,
	shadow_f_inset_sm,
	shadow_f_inset_md,
	shadow_f_inset_lg,
	shadow_f_inset_xl,
	shadow_f_outset_xs,
	shadow_f_outset_sm,
	shadow_f_outset_md,
	shadow_f_outset_lg,
	shadow_f_outset_xl,
	shadow_g_xs,
	shadow_g_sm,
	shadow_g_md,
	shadow_g_lg,
	shadow_g_xl,
	shadow_g_inset_xs,
	shadow_g_inset_sm,
	shadow_g_inset_md,
	shadow_g_inset_lg,
	shadow_g_inset_xl,
	shadow_g_outset_xs,
	shadow_g_outset_sm,
	shadow_g_outset_md,
	shadow_g_outset_lg,
	shadow_g_outset_xl,

	/* icons */
	icon_size_xs,
	icon_size_sm,
	icon_size_md,
	icon_size_lg,
	icon_size_xl,
	icon_size_xl2,
	icon_size_xl3,

	/* durations */
	duration_1,
	duration_2,
	duration_3,
	duration_4,
	duration_5,
	duration_6,

	/* transparencies */
	// TODO add one for 7 total?
	fade_1,
	fade_2,
	fade_3,
	fade_4,
	fade_5,
	fade_6,
	disabled_opacity,
];
