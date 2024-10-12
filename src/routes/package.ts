// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/moss',
	version: '0.18.1',
	description: 'CSS framework',
	motto: 'magical organic stylesheets',
	glyph: '🌿',
	logo: 'logo.svg',
	logo_alt: 'a fuzzy tuft of green moss',
	public: true,
	license: 'MIT',
	homepage: 'https://moss.ryanatkn.com/',
	repository: 'https://github.com/ryanatkn/moss',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/moss/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.25.3',
		'@ryanatkn/eslint-config': '^0.5.5',
		'@ryanatkn/fuz': '^0.129.1',
		'@ryanatkn/fuz_code': '^0.19.0',
		'@ryanatkn/gro': '^0.139.1',
		'@sveltejs/adapter-static': '^3.0.5',
		'@sveltejs/kit': '^2.6.3',
		'@sveltejs/package': '^2.3.5',
		'@sveltejs/vite-plugin-svelte': '^3.1.2',
		'@types/node': '^22.7.5',
		eslint: '^9.12.0',
		'eslint-plugin-svelte': '^2.44.1',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.7',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.263',
		'svelte-check': '^4.0.4',
		tslib: '^2.7.0',
		typescript: '^5.6.2',
		'typescript-eslint': '^8.8.1',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'./package.json': './package.json',
		'./css_class_helpers.js': {
			types: './dist/css_class_helpers.d.ts',
			default: './dist/css_class_helpers.js',
		},
		'./css_classes.js': {types: './dist/css_classes.d.ts', default: './dist/css_classes.js'},
		'./gro_plugin_moss.js': {
			types: './dist/gro_plugin_moss.d.ts',
			default: './dist/gro_plugin_moss.js',
		},
		'./style.css': {default: './dist/style.css'},
		'./theme.css': {default: './dist/theme.css'},
		'./theme.gen.css.js': {types: './dist/theme.gen.css.d.ts', default: './dist/theme.gen.css.js'},
		'./theme.js': {types: './dist/theme.d.ts', default: './dist/theme.js'},
		'./themes.js': {types: './dist/themes.d.ts', default: './dist/themes.js'},
		'./variable_data.js': {types: './dist/variable_data.d.ts', default: './dist/variable_data.js'},
		'./variable.js': {types: './dist/variable.d.ts', default: './dist/variable.js'},
		'./variables.js': {types: './dist/variables.d.ts', default: './dist/variables.js'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/moss',
	version: '0.18.1',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./css_class_helpers.js': {
			path: 'css_class_helpers.ts',
			declarations: [
				{name: 'Css_Extractor', kind: 'type'},
				{name: 'collect_css_classes', kind: 'function'},
				{name: 'Css_Classes', kind: 'class'},
			],
		},
		'./css_classes.js': {
			path: 'css_classes.ts',
			declarations: [
				{name: 'Css_Class_Declaration', kind: 'type'},
				{name: 'Css_Class_Declaration_Item', kind: 'type'},
				{name: 'Css_Class_Declaration_Group', kind: 'type'},
				{name: 'css_classes_by_name', kind: 'variable'},
			],
		},
		'./gro_plugin_moss.js': {
			path: 'gro_plugin_moss.ts',
			declarations: [
				{name: 'generate_classes_css', kind: 'function'},
				{name: 'Task_Args', kind: 'type'},
				{name: 'Options', kind: 'type'},
				{name: 'gro_plugin_moss', kind: 'function'},
			],
		},
		'./style.css': {path: 'style.css', declarations: []},
		'./theme.css': {path: 'theme.css', declarations: []},
		'./theme.gen.css.js': {
			path: 'theme.gen.css.ts',
			declarations: [{name: 'gen', kind: 'variable'}],
		},
		'./theme.js': {
			path: 'theme.ts',
			declarations: [
				{name: 'Color_Scheme', kind: 'type'},
				{name: 'color_schemes', kind: 'variable'},
				{name: 'Theme', kind: 'type'},
				{name: 'Render_Theme_Style_Options', kind: 'type'},
				{name: 'render_theme_style', kind: 'function'},
				{name: 'render_theme_variable', kind: 'function'},
			],
		},
		'./themes.js': {
			path: 'themes.ts',
			declarations: [
				{name: 'DEFAULT_THEME', kind: 'variable'},
				{name: 'default_themes', kind: 'variable'},
			],
		},
		'./variable_data.js': {
			path: 'variable_data.ts',
			declarations: [
				{name: 'Size_Variant', kind: 'type'},
				{name: 'size_variants', kind: 'variable'},
				{name: 'size_names', kind: 'variable'},
				{name: 'Text_Variant', kind: 'type'},
				{name: 'text_variants', kind: 'variable'},
				{name: 'Space_Variant', kind: 'type'},
				{name: 'space_variants', kind: 'variable'},
				{name: 'Radius_Variant', kind: 'type'},
				{name: 'radius_variants', kind: 'variable'},
				{name: 'Line_Height_Variant', kind: 'type'},
				{name: 'line_height_variants', kind: 'variable'},
				{name: 'line_height_names', kind: 'variable'},
				{name: 'shadow_variant_prefixes', kind: 'variable'},
				{name: 'Shadow_Size_Variant', kind: 'type'},
				{name: 'shadow_size_variants', kind: 'variable'},
				{name: 'Shadow_Alpha_Variant', kind: 'type'},
				{name: 'shadow_alpha_variants', kind: 'variable'},
				{name: 'icon_sizes', kind: 'variable'},
				{name: 'Color_Variant', kind: 'type'},
				{name: 'color_variants', kind: 'variable'},
			],
		},
		'./variable.js': {
			path: 'variable.ts',
			declarations: [
				{name: 'Style_Variable_Name', kind: 'type'},
				{name: 'Style_Variable', kind: 'type'},
				{name: 'STYLE_VARIABLE_NAME_MATCHER', kind: 'variable'},
				{name: 'is_style_variable_name', kind: 'function'},
			],
		},
		'./variables.js': {
			path: 'variables.ts',
			declarations: [
				{name: 'hue_a', kind: 'variable'},
				{name: 'hue_b', kind: 'variable'},
				{name: 'hue_c', kind: 'variable'},
				{name: 'hue_d', kind: 'variable'},
				{name: 'hue_e', kind: 'variable'},
				{name: 'hue_f', kind: 'variable'},
				{name: 'hue_g', kind: 'variable'},
				{name: 'hue_h', kind: 'variable'},
				{name: 'hue_i', kind: 'variable'},
				{name: 'color_a_1', kind: 'variable'},
				{name: 'color_a_2', kind: 'variable'},
				{name: 'color_a_3', kind: 'variable'},
				{name: 'color_a_4', kind: 'variable'},
				{name: 'color_a_5', kind: 'variable'},
				{name: 'color_a_6', kind: 'variable'},
				{name: 'color_a_7', kind: 'variable'},
				{name: 'color_a_8', kind: 'variable'},
				{name: 'color_a_9', kind: 'variable'},
				{name: 'color_b_1', kind: 'variable'},
				{name: 'color_b_2', kind: 'variable'},
				{name: 'color_b_3', kind: 'variable'},
				{name: 'color_b_4', kind: 'variable'},
				{name: 'color_b_5', kind: 'variable'},
				{name: 'color_b_6', kind: 'variable'},
				{name: 'color_b_7', kind: 'variable'},
				{name: 'color_b_8', kind: 'variable'},
				{name: 'color_b_9', kind: 'variable'},
				{name: 'color_c_1', kind: 'variable'},
				{name: 'color_c_2', kind: 'variable'},
				{name: 'color_c_3', kind: 'variable'},
				{name: 'color_c_4', kind: 'variable'},
				{name: 'color_c_5', kind: 'variable'},
				{name: 'color_c_6', kind: 'variable'},
				{name: 'color_c_7', kind: 'variable'},
				{name: 'color_c_8', kind: 'variable'},
				{name: 'color_c_9', kind: 'variable'},
				{name: 'color_d_1', kind: 'variable'},
				{name: 'color_d_2', kind: 'variable'},
				{name: 'color_d_3', kind: 'variable'},
				{name: 'color_d_4', kind: 'variable'},
				{name: 'color_d_5', kind: 'variable'},
				{name: 'color_d_6', kind: 'variable'},
				{name: 'color_d_7', kind: 'variable'},
				{name: 'color_d_8', kind: 'variable'},
				{name: 'color_d_9', kind: 'variable'},
				{name: 'color_e_1', kind: 'variable'},
				{name: 'color_e_2', kind: 'variable'},
				{name: 'color_e_3', kind: 'variable'},
				{name: 'color_e_4', kind: 'variable'},
				{name: 'color_e_5', kind: 'variable'},
				{name: 'color_e_6', kind: 'variable'},
				{name: 'color_e_7', kind: 'variable'},
				{name: 'color_e_8', kind: 'variable'},
				{name: 'color_e_9', kind: 'variable'},
				{name: 'color_f_1', kind: 'variable'},
				{name: 'color_f_2', kind: 'variable'},
				{name: 'color_f_3', kind: 'variable'},
				{name: 'color_f_4', kind: 'variable'},
				{name: 'color_f_5', kind: 'variable'},
				{name: 'color_f_6', kind: 'variable'},
				{name: 'color_f_7', kind: 'variable'},
				{name: 'color_f_8', kind: 'variable'},
				{name: 'color_f_9', kind: 'variable'},
				{name: 'color_g_1', kind: 'variable'},
				{name: 'color_g_2', kind: 'variable'},
				{name: 'color_g_3', kind: 'variable'},
				{name: 'color_g_4', kind: 'variable'},
				{name: 'color_g_5', kind: 'variable'},
				{name: 'color_g_6', kind: 'variable'},
				{name: 'color_g_7', kind: 'variable'},
				{name: 'color_g_8', kind: 'variable'},
				{name: 'color_g_9', kind: 'variable'},
				{name: 'color_h_1', kind: 'variable'},
				{name: 'color_h_2', kind: 'variable'},
				{name: 'color_h_3', kind: 'variable'},
				{name: 'color_h_4', kind: 'variable'},
				{name: 'color_h_5', kind: 'variable'},
				{name: 'color_h_6', kind: 'variable'},
				{name: 'color_h_7', kind: 'variable'},
				{name: 'color_h_8', kind: 'variable'},
				{name: 'color_h_9', kind: 'variable'},
				{name: 'color_i_1', kind: 'variable'},
				{name: 'color_i_2', kind: 'variable'},
				{name: 'color_i_3', kind: 'variable'},
				{name: 'color_i_4', kind: 'variable'},
				{name: 'color_i_5', kind: 'variable'},
				{name: 'color_i_6', kind: 'variable'},
				{name: 'color_i_7', kind: 'variable'},
				{name: 'color_i_8', kind: 'variable'},
				{name: 'color_i_9', kind: 'variable'},
				{name: 'tint_hue', kind: 'variable'},
				{name: 'tint_saturation', kind: 'variable'},
				{name: 'darken_1', kind: 'variable'},
				{name: 'darken_2', kind: 'variable'},
				{name: 'darken_3', kind: 'variable'},
				{name: 'darken_4', kind: 'variable'},
				{name: 'darken_5', kind: 'variable'},
				{name: 'darken_6', kind: 'variable'},
				{name: 'darken_7', kind: 'variable'},
				{name: 'darken_8', kind: 'variable'},
				{name: 'darken_9', kind: 'variable'},
				{name: 'lighten_1', kind: 'variable'},
				{name: 'lighten_2', kind: 'variable'},
				{name: 'lighten_3', kind: 'variable'},
				{name: 'lighten_4', kind: 'variable'},
				{name: 'lighten_5', kind: 'variable'},
				{name: 'lighten_6', kind: 'variable'},
				{name: 'lighten_7', kind: 'variable'},
				{name: 'lighten_8', kind: 'variable'},
				{name: 'lighten_9', kind: 'variable'},
				{name: 'bg', kind: 'variable'},
				{name: 'fg', kind: 'variable'},
				{name: 'bg_0', kind: 'variable'},
				{name: 'bg_1', kind: 'variable'},
				{name: 'bg_2', kind: 'variable'},
				{name: 'bg_3', kind: 'variable'},
				{name: 'bg_4', kind: 'variable'},
				{name: 'bg_5', kind: 'variable'},
				{name: 'bg_6', kind: 'variable'},
				{name: 'bg_7', kind: 'variable'},
				{name: 'bg_8', kind: 'variable'},
				{name: 'bg_9', kind: 'variable'},
				{name: 'bg_10', kind: 'variable'},
				{name: 'fg_0', kind: 'variable'},
				{name: 'fg_1', kind: 'variable'},
				{name: 'fg_2', kind: 'variable'},
				{name: 'fg_3', kind: 'variable'},
				{name: 'fg_4', kind: 'variable'},
				{name: 'fg_5', kind: 'variable'},
				{name: 'fg_6', kind: 'variable'},
				{name: 'fg_7', kind: 'variable'},
				{name: 'fg_8', kind: 'variable'},
				{name: 'fg_9', kind: 'variable'},
				{name: 'fg_10', kind: 'variable'},
				{name: 'fill', kind: 'variable'},
				{name: 'fill_a', kind: 'variable'},
				{name: 'fill_b', kind: 'variable'},
				{name: 'fill_c', kind: 'variable'},
				{name: 'fill_d', kind: 'variable'},
				{name: 'fill_e', kind: 'variable'},
				{name: 'fill_f', kind: 'variable'},
				{name: 'fill_g', kind: 'variable'},
				{name: 'fill_h', kind: 'variable'},
				{name: 'fill_i', kind: 'variable'},
				{name: 'text_color', kind: 'variable'},
				{name: 'text_color_0', kind: 'variable'},
				{name: 'text_color_1', kind: 'variable'},
				{name: 'text_color_2', kind: 'variable'},
				{name: 'text_color_3', kind: 'variable'},
				{name: 'text_color_4', kind: 'variable'},
				{name: 'text_color_5', kind: 'variable'},
				{name: 'text_color_6', kind: 'variable'},
				{name: 'text_color_7', kind: 'variable'},
				{name: 'text_color_8', kind: 'variable'},
				{name: 'text_color_9', kind: 'variable'},
				{name: 'text_color_10', kind: 'variable'},
				{name: 'text_color_disabled', kind: 'variable'},
				{name: 'text_active', kind: 'variable'},
				{name: 'line_height_xs', kind: 'variable'},
				{name: 'line_height_sm', kind: 'variable'},
				{name: 'line_height_md', kind: 'variable'},
				{name: 'line_height_lg', kind: 'variable'},
				{name: 'line_height_xl', kind: 'variable'},
				{name: 'font_sans', kind: 'variable'},
				{name: 'font_mono', kind: 'variable'},
				{name: 'size_xs', kind: 'variable'},
				{name: 'size_sm', kind: 'variable'},
				{name: 'size_md', kind: 'variable'},
				{name: 'size_lg', kind: 'variable'},
				{name: 'size_xl', kind: 'variable'},
				{name: 'size_xl2', kind: 'variable'},
				{name: 'size_xl3', kind: 'variable'},
				{name: 'size_xl4', kind: 'variable'},
				{name: 'size_xl5', kind: 'variable'},
				{name: 'size_xl6', kind: 'variable'},
				{name: 'size_xl7', kind: 'variable'},
				{name: 'size_xl8', kind: 'variable'},
				{name: 'size_xl9', kind: 'variable'},
				{name: 'link_color', kind: 'variable'},
				{name: 'text_decoration', kind: 'variable'},
				{name: 'text_decoration_hover', kind: 'variable'},
				{name: 'text_decoration_selected', kind: 'variable'},
				{name: 'link_color_selected', kind: 'variable'},
				{name: 'space_xs5', kind: 'variable'},
				{name: 'space_xs4', kind: 'variable'},
				{name: 'space_xs3', kind: 'variable'},
				{name: 'space_xs2', kind: 'variable'},
				{name: 'space_xs', kind: 'variable'},
				{name: 'space_sm', kind: 'variable'},
				{name: 'space_md', kind: 'variable'},
				{name: 'space_lg', kind: 'variable'},
				{name: 'space_xl', kind: 'variable'},
				{name: 'space_xl2', kind: 'variable'},
				{name: 'space_xl3', kind: 'variable'},
				{name: 'space_xl4', kind: 'variable'},
				{name: 'space_xl5', kind: 'variable'},
				{name: 'space_xl6', kind: 'variable'},
				{name: 'space_xl7', kind: 'variable'},
				{name: 'space_xl8', kind: 'variable'},
				{name: 'space_xl9', kind: 'variable'},
				{name: 'space_xl10', kind: 'variable'},
				{name: 'space_xl11', kind: 'variable'},
				{name: 'space_xl12', kind: 'variable'},
				{name: 'space_xl13', kind: 'variable'},
				{name: 'space_xl14', kind: 'variable'},
				{name: 'space_xl15', kind: 'variable'},
				{name: 'width_md', kind: 'variable'},
				{name: 'width_sm', kind: 'variable'},
				{name: 'width_xs', kind: 'variable'},
				{name: 'border_color', kind: 'variable'},
				{name: 'border_style', kind: 'variable'},
				{name: 'border_color_1', kind: 'variable'},
				{name: 'border_color_2', kind: 'variable'},
				{name: 'border_color_3', kind: 'variable'},
				{name: 'border_color_4', kind: 'variable'},
				{name: 'border_color_5', kind: 'variable'},
				{name: 'border_color_a', kind: 'variable'},
				{name: 'border_color_b', kind: 'variable'},
				{name: 'border_color_c', kind: 'variable'},
				{name: 'border_color_d', kind: 'variable'},
				{name: 'border_color_e', kind: 'variable'},
				{name: 'border_color_f', kind: 'variable'},
				{name: 'border_color_g', kind: 'variable'},
				{name: 'border_color_h', kind: 'variable'},
				{name: 'border_color_i', kind: 'variable'},
				{name: 'border_width', kind: 'variable'},
				{name: 'border_width_1', kind: 'variable'},
				{name: 'border_width_2', kind: 'variable'},
				{name: 'border_width_3', kind: 'variable'},
				{name: 'border_width_4', kind: 'variable'},
				{name: 'border_width_5', kind: 'variable'},
				{name: 'border_width_6', kind: 'variable'},
				{name: 'outline_width', kind: 'variable'},
				{name: 'outline_width_1', kind: 'variable'},
				{name: 'outline_width_2', kind: 'variable'},
				{name: 'outline_width_3', kind: 'variable'},
				{name: 'outline_style', kind: 'variable'},
				{name: 'outline_color', kind: 'variable'},
				{name: 'radius_xl', kind: 'variable'},
				{name: 'radius_lg', kind: 'variable'},
				{name: 'radius_md', kind: 'variable'},
				{name: 'radius_sm', kind: 'variable'},
				{name: 'radius_xs', kind: 'variable'},
				{name: 'radius_xs2', kind: 'variable'},
				{name: 'radius_xs3', kind: 'variable'},
				{name: 'button_shadow', kind: 'variable'},
				{name: 'button_shadow_hover', kind: 'variable'},
				{name: 'button_shadow_active', kind: 'variable'},
				{name: 'input_fill', kind: 'variable'},
				{name: 'input_padding_y', kind: 'variable'},
				{name: 'input_padding_x', kind: 'variable'},
				{name: 'input_width_min', kind: 'variable'},
				{name: 'input_height', kind: 'variable'},
				{name: 'input_height_sm', kind: 'variable'},
				{name: 'input_height_inner', kind: 'variable'},
				{name: 'shadow_xs', kind: 'variable'},
				{name: 'shadow_top_xs', kind: 'variable'},
				{name: 'shadow_bottom_xs', kind: 'variable'},
				{name: 'shadow_inset_xs', kind: 'variable'},
				{name: 'shadow_inset_top_xs', kind: 'variable'},
				{name: 'shadow_inset_bottom_xs', kind: 'variable'},
				{name: 'shadow_sm', kind: 'variable'},
				{name: 'shadow_top_sm', kind: 'variable'},
				{name: 'shadow_bottom_sm', kind: 'variable'},
				{name: 'shadow_inset_sm', kind: 'variable'},
				{name: 'shadow_inset_top_sm', kind: 'variable'},
				{name: 'shadow_inset_bottom_sm', kind: 'variable'},
				{name: 'shadow_md', kind: 'variable'},
				{name: 'shadow_top_md', kind: 'variable'},
				{name: 'shadow_bottom_md', kind: 'variable'},
				{name: 'shadow_inset_md', kind: 'variable'},
				{name: 'shadow_inset_top_md', kind: 'variable'},
				{name: 'shadow_inset_bottom_md', kind: 'variable'},
				{name: 'shadow_lg', kind: 'variable'},
				{name: 'shadow_top_lg', kind: 'variable'},
				{name: 'shadow_bottom_lg', kind: 'variable'},
				{name: 'shadow_inset_lg', kind: 'variable'},
				{name: 'shadow_inset_top_lg', kind: 'variable'},
				{name: 'shadow_inset_bottom_lg', kind: 'variable'},
				{name: 'shadow_xl', kind: 'variable'},
				{name: 'shadow_top_xl', kind: 'variable'},
				{name: 'shadow_bottom_xl', kind: 'variable'},
				{name: 'shadow_inset_xl', kind: 'variable'},
				{name: 'shadow_inset_top_xl', kind: 'variable'},
				{name: 'shadow_inset_bottom_xl', kind: 'variable'},
				{name: 'shadow_color', kind: 'variable'},
				{name: 'shadow_color_highlight', kind: 'variable'},
				{name: 'shadow_color_glow', kind: 'variable'},
				{name: 'shadow_color_shroud', kind: 'variable'},
				{name: 'shadow_color_a', kind: 'variable'},
				{name: 'shadow_color_b', kind: 'variable'},
				{name: 'shadow_color_c', kind: 'variable'},
				{name: 'shadow_color_d', kind: 'variable'},
				{name: 'shadow_color_e', kind: 'variable'},
				{name: 'shadow_color_f', kind: 'variable'},
				{name: 'shadow_color_g', kind: 'variable'},
				{name: 'shadow_color_h', kind: 'variable'},
				{name: 'shadow_color_i', kind: 'variable'},
				{name: 'shadow_alpha_1', kind: 'variable'},
				{name: 'shadow_alpha_2', kind: 'variable'},
				{name: 'shadow_alpha_3', kind: 'variable'},
				{name: 'shadow_alpha_4', kind: 'variable'},
				{name: 'shadow_alpha_5', kind: 'variable'},
				{name: 'icon_size_xs', kind: 'variable'},
				{name: 'icon_size_sm', kind: 'variable'},
				{name: 'icon_size_md', kind: 'variable'},
				{name: 'icon_size_lg', kind: 'variable'},
				{name: 'icon_size_xl', kind: 'variable'},
				{name: 'icon_size_xl2', kind: 'variable'},
				{name: 'icon_size_xl3', kind: 'variable'},
				{name: 'duration_1', kind: 'variable'},
				{name: 'duration_2', kind: 'variable'},
				{name: 'duration_3', kind: 'variable'},
				{name: 'duration_4', kind: 'variable'},
				{name: 'duration_5', kind: 'variable'},
				{name: 'duration_6', kind: 'variable'},
				{name: 'fade_1', kind: 'variable'},
				{name: 'fade_2', kind: 'variable'},
				{name: 'fade_3', kind: 'variable'},
				{name: 'fade_4', kind: 'variable'},
				{name: 'fade_5', kind: 'variable'},
				{name: 'fade_6', kind: 'variable'},
				{name: 'disabled_opacity', kind: 'variable'},
				{name: 'default_variables', kind: 'variable'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
