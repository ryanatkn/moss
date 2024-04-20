// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/moss',
	version: '0.2.0',
	description: 'CSS framework',
	motto: 'magical organic stylesheets',
	icon: '🌿',
	public: true,
	license: 'MIT',
	homepage: 'https://moss.ryanatkn.com/',
	repository: 'https://github.com/ryanatkn/moss',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/moss/issues',
	funding: 'https://www.ryanatkn.com/funding',
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist', 'CHANGELOG.md'],
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.10',
		'@ryanatkn/eslint-config': '^0.1.2',
		'@ryanatkn/fuz': '^0.99.3',
		'@ryanatkn/fuz_code': '^0.11.0',
		'@ryanatkn/gro': '^0.115.2',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.7',
		'@sveltejs/package': '^2.3.1',
		'@sveltejs/vite-plugin-svelte': '^3.1.0',
		'@types/node': '^20.12.7',
		'@typescript-eslint/eslint-plugin': '^7.7.0',
		'@typescript-eslint/parser': '^7.7.0',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.36.0-next.13',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.3',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.104',
		'svelte-check': '^3.6.9',
		tslib: '^2.6.2',
		typescript: '^5.4.5',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn', rules: {'no-console': 1}},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./package.json': './package.json',
		'./style_animations.css': {default: './dist/style_animations.css'},
		'./style_components.css': {default: './dist/style_components.css'},
		'./style_reset.css': {default: './dist/style_reset.css'},
		'./style_utilities.css': {default: './dist/style_utilities.css'},
		'./style.css': {default: './dist/style.css'},
		'./style.gen.css.js': {default: './dist/style.gen.css.js', types: './dist/style.gen.css.d.ts'},
		'./theme.css': {default: './dist/theme.css'},
		'./theme.gen.css.js': {default: './dist/theme.gen.css.js', types: './dist/theme.gen.css.d.ts'},
		'./theme.js': {default: './dist/theme.js', types: './dist/theme.d.ts'},
		'./themes.js': {default: './dist/themes.js', types: './dist/themes.d.ts'},
		'./variable_data.js': {default: './dist/variable_data.js', types: './dist/variable_data.d.ts'},
		'./variables.js': {default: './dist/variables.js', types: './dist/variables.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/moss',
	version: '0.2.0',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./style_animations.css': {path: 'style_animations.css', declarations: []},
		'./style_components.css': {path: 'style_components.css', declarations: []},
		'./style_reset.css': {path: 'style_reset.css', declarations: []},
		'./style_utilities.css': {path: 'style_utilities.css', declarations: []},
		'./style.css': {path: 'style.css', declarations: []},
		'./style.gen.css.js': {
			path: 'style.gen.css.ts',
			declarations: [{name: 'gen', kind: 'variable'}],
		},
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
				{name: 'Style_Variable', kind: 'type'},
				{name: 'Render_Theme_Style_Options', kind: 'type'},
				{name: 'render_theme_style', kind: 'function'},
				{name: 'render_theme_variable', kind: 'function'},
				{name: 'sync_color_scheme', kind: 'function'},
				{name: 'COLOR_SCHEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_color_scheme', kind: 'function'},
				{name: 'load_color_scheme', kind: 'function'},
				{name: 'THEME_STORAGE_KEY', kind: 'variable'},
				{name: 'save_theme', kind: 'function'},
				{name: 'load_theme', kind: 'function'},
				{name: 'create_theme_setup_script', kind: 'function'},
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
				{name: 'size_variants', kind: 'variable'},
				{name: 'size_names', kind: 'variable'},
				{name: 'space_variants', kind: 'variable'},
				{name: 'radius_variants', kind: 'variable'},
				{name: 'line_height_variants', kind: 'variable'},
				{name: 'line_height_names', kind: 'variable'},
				{name: 'shadow_variants', kind: 'variable'},
				{name: 'icon_sizes', kind: 'variable'},
				{name: 'color_variants', kind: 'variable'},
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
				{name: 'tint_hue', kind: 'variable'},
				{name: 'tint_saturation', kind: 'variable'},
				{name: 'bg', kind: 'variable'},
				{name: 'fg', kind: 'variable'},
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
				{name: 'text_color', kind: 'variable'},
				{name: 'text_1', kind: 'variable'},
				{name: 'text_2', kind: 'variable'},
				{name: 'text_3', kind: 'variable'},
				{name: 'text_disabled', kind: 'variable'},
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
				{name: 'border_disabled', kind: 'variable'},
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
				{name: 'button_bg', kind: 'variable'},
				{name: 'button_bg_hover', kind: 'variable'},
				{name: 'button_bg_active', kind: 'variable'},
				{name: 'button_bg_disabled', kind: 'variable'},
				{name: 'input_bg', kind: 'variable'},
				{name: 'input_padding_y', kind: 'variable'},
				{name: 'input_padding_x', kind: 'variable'},
				{name: 'input_width_min', kind: 'variable'},
				{name: 'input_height', kind: 'variable'},
				{name: 'input_height_sm', kind: 'variable'},
				{name: 'input_height_inner', kind: 'variable'},
				{name: 'Create_Shadow_Options', kind: 'type'},
				{name: 'create_shadow_xs', kind: 'function'},
				{name: 'create_shadow_sm', kind: 'function'},
				{name: 'create_shadow_md', kind: 'function'},
				{name: 'create_shadow_lg', kind: 'function'},
				{name: 'create_shadow_xl', kind: 'function'},
				{name: 'shadow_color', kind: 'variable'},
				{name: 'shadow_a_color', kind: 'variable'},
				{name: 'shadow_b_color', kind: 'variable'},
				{name: 'shadow_c_color', kind: 'variable'},
				{name: 'shadow_d_color', kind: 'variable'},
				{name: 'shadow_e_color', kind: 'variable'},
				{name: 'shadow_f_color', kind: 'variable'},
				{name: 'shadow_g_color', kind: 'variable'},
				{name: 'shadow_xs', kind: 'variable'},
				{name: 'shadow_sm', kind: 'variable'},
				{name: 'shadow_md', kind: 'variable'},
				{name: 'shadow_lg', kind: 'variable'},
				{name: 'shadow_xl', kind: 'variable'},
				{name: 'shadow_inset_xs', kind: 'variable'},
				{name: 'shadow_inset_sm', kind: 'variable'},
				{name: 'shadow_inset_md', kind: 'variable'},
				{name: 'shadow_inset_lg', kind: 'variable'},
				{name: 'shadow_inset_xl', kind: 'variable'},
				{name: 'shadow_outset_xs', kind: 'variable'},
				{name: 'shadow_outset_sm', kind: 'variable'},
				{name: 'shadow_outset_md', kind: 'variable'},
				{name: 'shadow_outset_lg', kind: 'variable'},
				{name: 'shadow_outset_xl', kind: 'variable'},
				{name: 'shadow_a_xs', kind: 'variable'},
				{name: 'shadow_a_sm', kind: 'variable'},
				{name: 'shadow_a_md', kind: 'variable'},
				{name: 'shadow_a_lg', kind: 'variable'},
				{name: 'shadow_a_xl', kind: 'variable'},
				{name: 'shadow_a_inset_xs', kind: 'variable'},
				{name: 'shadow_a_inset_sm', kind: 'variable'},
				{name: 'shadow_a_inset_md', kind: 'variable'},
				{name: 'shadow_a_inset_lg', kind: 'variable'},
				{name: 'shadow_a_inset_xl', kind: 'variable'},
				{name: 'shadow_a_outset_xs', kind: 'variable'},
				{name: 'shadow_a_outset_sm', kind: 'variable'},
				{name: 'shadow_a_outset_md', kind: 'variable'},
				{name: 'shadow_a_outset_lg', kind: 'variable'},
				{name: 'shadow_a_outset_xl', kind: 'variable'},
				{name: 'shadow_b_xs', kind: 'variable'},
				{name: 'shadow_b_sm', kind: 'variable'},
				{name: 'shadow_b_md', kind: 'variable'},
				{name: 'shadow_b_lg', kind: 'variable'},
				{name: 'shadow_b_xl', kind: 'variable'},
				{name: 'shadow_b_inset_xs', kind: 'variable'},
				{name: 'shadow_b_inset_sm', kind: 'variable'},
				{name: 'shadow_b_inset_md', kind: 'variable'},
				{name: 'shadow_b_inset_lg', kind: 'variable'},
				{name: 'shadow_b_inset_xl', kind: 'variable'},
				{name: 'shadow_b_outset_xs', kind: 'variable'},
				{name: 'shadow_b_outset_sm', kind: 'variable'},
				{name: 'shadow_b_outset_md', kind: 'variable'},
				{name: 'shadow_b_outset_lg', kind: 'variable'},
				{name: 'shadow_b_outset_xl', kind: 'variable'},
				{name: 'shadow_c_xs', kind: 'variable'},
				{name: 'shadow_c_sm', kind: 'variable'},
				{name: 'shadow_c_md', kind: 'variable'},
				{name: 'shadow_c_lg', kind: 'variable'},
				{name: 'shadow_c_xl', kind: 'variable'},
				{name: 'shadow_c_inset_xs', kind: 'variable'},
				{name: 'shadow_c_inset_sm', kind: 'variable'},
				{name: 'shadow_c_inset_md', kind: 'variable'},
				{name: 'shadow_c_inset_lg', kind: 'variable'},
				{name: 'shadow_c_inset_xl', kind: 'variable'},
				{name: 'shadow_c_outset_xs', kind: 'variable'},
				{name: 'shadow_c_outset_sm', kind: 'variable'},
				{name: 'shadow_c_outset_md', kind: 'variable'},
				{name: 'shadow_c_outset_lg', kind: 'variable'},
				{name: 'shadow_c_outset_xl', kind: 'variable'},
				{name: 'shadow_d_xs', kind: 'variable'},
				{name: 'shadow_d_sm', kind: 'variable'},
				{name: 'shadow_d_md', kind: 'variable'},
				{name: 'shadow_d_lg', kind: 'variable'},
				{name: 'shadow_d_xl', kind: 'variable'},
				{name: 'shadow_d_inset_xs', kind: 'variable'},
				{name: 'shadow_d_inset_sm', kind: 'variable'},
				{name: 'shadow_d_inset_md', kind: 'variable'},
				{name: 'shadow_d_inset_lg', kind: 'variable'},
				{name: 'shadow_d_inset_xl', kind: 'variable'},
				{name: 'shadow_d_outset_xs', kind: 'variable'},
				{name: 'shadow_d_outset_sm', kind: 'variable'},
				{name: 'shadow_d_outset_md', kind: 'variable'},
				{name: 'shadow_d_outset_lg', kind: 'variable'},
				{name: 'shadow_d_outset_xl', kind: 'variable'},
				{name: 'shadow_e_xs', kind: 'variable'},
				{name: 'shadow_e_sm', kind: 'variable'},
				{name: 'shadow_e_md', kind: 'variable'},
				{name: 'shadow_e_lg', kind: 'variable'},
				{name: 'shadow_e_xl', kind: 'variable'},
				{name: 'shadow_e_inset_xs', kind: 'variable'},
				{name: 'shadow_e_inset_sm', kind: 'variable'},
				{name: 'shadow_e_inset_md', kind: 'variable'},
				{name: 'shadow_e_inset_lg', kind: 'variable'},
				{name: 'shadow_e_inset_xl', kind: 'variable'},
				{name: 'shadow_e_outset_xs', kind: 'variable'},
				{name: 'shadow_e_outset_sm', kind: 'variable'},
				{name: 'shadow_e_outset_md', kind: 'variable'},
				{name: 'shadow_e_outset_lg', kind: 'variable'},
				{name: 'shadow_e_outset_xl', kind: 'variable'},
				{name: 'shadow_f_xs', kind: 'variable'},
				{name: 'shadow_f_sm', kind: 'variable'},
				{name: 'shadow_f_md', kind: 'variable'},
				{name: 'shadow_f_lg', kind: 'variable'},
				{name: 'shadow_f_xl', kind: 'variable'},
				{name: 'shadow_f_inset_xs', kind: 'variable'},
				{name: 'shadow_f_inset_sm', kind: 'variable'},
				{name: 'shadow_f_inset_md', kind: 'variable'},
				{name: 'shadow_f_inset_lg', kind: 'variable'},
				{name: 'shadow_f_inset_xl', kind: 'variable'},
				{name: 'shadow_f_outset_xs', kind: 'variable'},
				{name: 'shadow_f_outset_sm', kind: 'variable'},
				{name: 'shadow_f_outset_md', kind: 'variable'},
				{name: 'shadow_f_outset_lg', kind: 'variable'},
				{name: 'shadow_f_outset_xl', kind: 'variable'},
				{name: 'shadow_g_xs', kind: 'variable'},
				{name: 'shadow_g_sm', kind: 'variable'},
				{name: 'shadow_g_md', kind: 'variable'},
				{name: 'shadow_g_lg', kind: 'variable'},
				{name: 'shadow_g_xl', kind: 'variable'},
				{name: 'shadow_g_inset_xs', kind: 'variable'},
				{name: 'shadow_g_inset_sm', kind: 'variable'},
				{name: 'shadow_g_inset_md', kind: 'variable'},
				{name: 'shadow_g_inset_lg', kind: 'variable'},
				{name: 'shadow_g_inset_xl', kind: 'variable'},
				{name: 'shadow_g_outset_xs', kind: 'variable'},
				{name: 'shadow_g_outset_sm', kind: 'variable'},
				{name: 'shadow_g_outset_md', kind: 'variable'},
				{name: 'shadow_g_outset_lg', kind: 'variable'},
				{name: 'shadow_g_outset_xl', kind: 'variable'},
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
