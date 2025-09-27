import type {Css_Class_Declaration} from '$lib/css_class_helpers.js';
import {
	generate_classes,
	to_kebab,
	CSS_GLOBALS,
	COLOR_INTENSITIES,
	generate_property_classes,
	generate_directional_classes,
	generate_property_with_axes,
	generate_border_radius_corners,
	generate_shadow_classes,
	format_spacing_value,
	format_dimension_value,
} from '$lib/css_class_generators.js';
import {
	space_variants,
	color_variants,
	text_color_variants,
	font_size_variants,
	icon_size_variants,
	line_height_variants,
	border_radius_variants,
	border_distance_variants,
	alignment_values,
	justify_values,
	overflow_values,
	border_style_values,
	display_values,
	text_align_values,
	vertical_align_values,
	word_break_values,
	position_values,
	visibility_values,
	float_values,
	overflow_wrap_values,
	scrollbar_width_values,
	scrollbar_gutter_values,
	shadow_semantic_values,
	shadow_alpha_variants,
} from '$lib/variable_data.js';
import {css_class_composites} from '$lib/css_class_composites.js';

// TODO add animation support, either as a separate thing or rename `css_classes_by_name` to be more generic, like `css_by_name` - need to collect `animation: foo ...` names like we do classes

// TODO think about variable support (much harder problem, need dependency graph)

// TODO modifiers for :hover/:active/:focus (how? do we need to give up the compat with JS identifier names?)

/**
 * @see `generate_classes_css`
 */
export const css_classes_by_name: Record<string, Css_Class_Declaration | undefined> = {
	// Composite classes go first, so they can be overridden by the more specific classes.
	...css_class_composites,

	/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/position */
	// Position
	...generate_property_classes('position', position_values),
	...generate_property_classes('position', CSS_GLOBALS, to_kebab),

	/** @see https://drafts.csswg.org/css-display/#display-value-summary. */
	// Display properties
	...generate_property_classes('display', display_values),
	...generate_property_classes('display', CSS_GLOBALS, to_kebab),

	// Visibility
	...generate_property_classes('visibility', visibility_values),
	...generate_property_classes('visibility', CSS_GLOBALS, to_kebab),

	/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/float */
	// Float
	...generate_property_classes('float', float_values),
	...generate_property_classes('float', CSS_GLOBALS, to_kebab),

	// Overflow properties with axis variants
	...generate_property_with_axes('overflow', overflow_values),

	// Overflow wrap
	...generate_property_classes('overflow-wrap', overflow_wrap_values),
	...generate_property_classes('overflow-wrap', CSS_GLOBALS, to_kebab, 'overflow_wrap'),

	// Scrollbar width
	...generate_property_classes('scrollbar-width', scrollbar_width_values),
	...generate_property_classes('scrollbar-width', CSS_GLOBALS, to_kebab, 'scrollbar_width'),

	// Scrollbar gutter
	...generate_property_classes('scrollbar-gutter', scrollbar_gutter_values),
	...generate_property_classes('scrollbar-gutter', CSS_GLOBALS, to_kebab, 'scrollbar_gutter'),

	// TODO make interpreted like opacity
	// z_index_0: {declaration: 'z-index: 0;'},
	// z_index_-1: {declaration: 'z-index: -1;'}, // TODO how to do negative numbers? `n1`? `negative_1`? `minus_1`?
	// z_index_123: {declaration: 'z-index: 123;'},

	flex_1: {declaration: 'flex: 1;'},
	flex_wrap_nowrap: {declaration: 'flex-wrap: nowrap;'},
	flex_wrap_wrap: {declaration: 'flex-wrap: wrap;'},
	flex_wrap_wrap_reverse: {declaration: 'flex-wrap: wrap-reverse;'},
	flex_wrap_inherit: {declaration: 'flex-wrap: inherit;'},
	flex_wrap_initial: {declaration: 'flex-wrap: initial;'},
	flex_wrap_revert: {declaration: 'flex-wrap: revert;'},
	flex_wrap_revert_layer: {declaration: 'flex-wrap: revert-layer;'},
	flex_wrap_unset: {declaration: 'flex-wrap: unset;'},
	// TODO BLOCk rename
	flex_row: {declaration: 'flex-direction: row;'},
	flex_row_reverse: {declaration: 'flex-direction: row-reverse;'},
	flex_column: {declaration: 'flex-direction: column;'},
	flex_column_reverse: {declaration: 'flex-direction: column-reverse;'},
	grow: {declaration: 'flex-grow: 1;'},
	grow_0: {declaration: 'flex-grow: 0;'},
	shrink: {declaration: 'flex-shrink: 1;'},
	shrink_0: {declaration: 'flex-shrink: 0;'},

	// Align items
	...generate_property_classes('align-items', alignment_values),
	// Align content
	...generate_property_classes('align-content', [
		...alignment_values,
		'space-between',
		'space-around',
		'space-evenly',
	]),
	// Align self
	...generate_property_classes('align-self', alignment_values),
	// Justify content
	...generate_property_classes('justify-content', justify_values),
	// Justify items
	...generate_property_classes('justify-items', [
		'center',
		'start',
		'end',
		'left',
		'right',
		'baseline',
		'stretch',
	]),
	// Justify self
	...generate_property_classes('justify-self', [
		'center',
		'start',
		'end',
		'left',
		'right',
		'baseline',
		'stretch',
	]),
	flip_x: {declaration: 'transform: scaleX(-1);'},
	flip_y: {declaration: 'transform: scaleY(-1);'},
	flip_xy: {declaration: 'transform: scaleX(-1) scaleY(-1);'},

	font_family_sans: {declaration: 'font-family: var(--font_family_sans);'},
	font_family_serif: {declaration: 'font-family: var(--font_family_serif);'},
	font_family_mono: {declaration: 'font-family: var(--font_family_mono);'},
	// Line height
	...generate_property_classes('line-height', ['0', '1', ...line_height_variants], (v) =>
		v === '0' || v === '1' ? v : `var(--line_height_${v})`,
	),
	// Font size
	...generate_property_classes(
		'font-size',
		font_size_variants,
		(v) => `var(--font_size_${v}); --font_size: var(--font_size_${v})`,
	),
	// Icon sizes
	...generate_property_classes(
		'font-size',
		icon_size_variants,
		(v) => `var(--icon_size_${v}); --font_size: var(--icon_size_${v})`,
		'icon_size',
	),
	// Text alignment
	...generate_property_classes('text-align', text_align_values),
	// Vertical alignment
	...generate_property_classes('vertical-align', vertical_align_values),
	// Word break
	...generate_property_classes('word-break', word_break_values),
	...generate_property_classes('word-break', CSS_GLOBALS, to_kebab),
	// White space
	...generate_property_classes('white-space', [
		'normal',
		'nowrap',
		'pre',
		'pre-wrap',
		'pre-line',
		'break-spaces',
	]),

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	// White space collapse
	...generate_property_classes('white-space-collapse', [
		'collapse',
		'preserve',
		'preserve-breaks',
		'preserve-spaces',
		'break-spaces',
	]),
	...generate_property_classes('white-space-collapse', CSS_GLOBALS, to_kebab),

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	// Text wrap
	...generate_property_classes('text-wrap', ['wrap', 'nowrap', 'balance', 'pretty', 'stable']),

	// User select
	...generate_property_classes('user-select', ['none', 'auto', 'text', 'all']),
	...generate_property_classes('user-select', CSS_GLOBALS, to_kebab),

	/*

	colors

	*/
	// Text color properties
	...generate_property_classes(
		'color',
		text_color_variants.map(String),
		(v) => `var(--text_color_${v})`,
		'text_color',
	),
	// Darken/lighten background colors
	...generate_property_classes(
		'background-color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--darken_${v})`,
		'darken',
	),
	...generate_property_classes(
		'background-color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--lighten_${v})`,
		'lighten',
	),
	// Semantic background colors
	bg: {declaration: 'background-color: var(--bg);'},
	fg: {declaration: 'background-color: var(--fg);'},
	...generate_property_classes(
		'background-color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--bg_${v})`,
		'bg',
	),
	...generate_property_classes(
		'background-color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--fg_${v})`,
		'fg',
	),
	// Darken/lighten text colors
	...generate_property_classes(
		'color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--darken_${v})`,
		'color_darken',
	),
	...generate_property_classes(
		'color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--lighten_${v})`,
		'color_lighten',
	),
	// Semantic text colors
	color_bg: {declaration: 'color: var(--bg);'},
	color_fg: {declaration: 'color: var(--fg);'},
	...generate_property_classes(
		'color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--bg_${v})`,
		'color_bg',
	),
	...generate_property_classes(
		'color',
		[1, 2, 3, 4, 5, 6, 7, 8, 9].map(String),
		(v) => `var(--fg_${v})`,
		'color_fg',
	),
	// Hue classes
	...generate_classes(
		(hue: string) => ({
			name: `hue_${hue}`,
			css: `--hue: var(--hue_${hue});`,
		}),
		color_variants,
	),
	// Color properties - all hues × intensities
	...generate_classes(
		(hue: string, intensity: string) => ({
			name: `color_${hue}_${intensity}`,
			css: `color: var(--color_${hue}_${intensity});`,
		}),
		color_variants,
		COLOR_INTENSITIES,
	),
	// Background colors - all hues × intensities
	...generate_classes(
		(hue: string, intensity: string) => ({
			name: `bg_${hue}_${intensity}`,
			css: `background-color: var(--color_${hue}_${intensity});`,
		}),
		color_variants,
		COLOR_INTENSITIES,
	),
	// Border colors - numeric variants
	...generate_property_classes(
		'border-color',
		[1, 2, 3, 4, 5].map(String),
		(v) => `var(--border_color_${v})`,
	),
	// Border colors - hue variants
	...generate_property_classes('border-color', color_variants, (v) => `var(--border_color_${v})`),
	border_color_transparent: {declaration: 'border-color: transparent;'},

	// Border width
	...generate_property_classes(
		'border-width',
		['0', ...border_distance_variants.map(String)],
		(v) => (v === '0' ? '0' : `var(--border_width_${v})`),
	),
	outline_width_0: {declaration: 'outline-width: 0;'}, // TODO has no corresponding CSS variable, how to encode this?
	outline_width_focus: {declaration: 'outline-width: var(--outline_width_focus);'},
	outline_width_active: {declaration: 'outline-width: var(--outline_width_active);'},

	/* TODO add the top/right/bottom/left border-style multi-argument variants */
	/* @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style */
	// Border style
	...generate_property_classes('border-style', border_style_values),
	...generate_property_classes('border-style', CSS_GLOBALS, to_kebab),

	// Border radius - generated from variants
	...generate_property_classes(
		'border-radius',
		border_radius_variants,
		(v) => `var(--border_radius_${v})`,
	),
	// TODO BLOCK interpret
	// Border radius - percentage and zero
	...generate_property_classes(
		'border-radius',
		['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
		(v) => (v === '0' ? '0' : `${v}%`),
	),
	// Border radius corners - percentage and zero
	...generate_border_radius_corners(
		['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
		(v) => (v === '0' ? '0' : `${v}%`),
	),
	// Border radius corners - using radius variants
	...generate_border_radius_corners(border_radius_variants, (v) => `var(--border_radius_${v})`),

	/*

	shadows

	*/
	// Shadow classes generated from sizes and alpha mappings
	...generate_shadow_classes(['xs', 'sm', 'md', 'lg', 'xl'], {
		xs: '1',
		sm: '2',
		md: '3',
		lg: '4',
		xl: '5',
	}),
	// Shadow color classes - semantic
	...generate_classes(
		(value: string) => ({
			name: `shadow_color_${value}`,
			css: `--shadow_color: var(--shadow_color_${value});`,
		}),
		shadow_semantic_values,
	),
	// Shadow color classes - hue variants
	...generate_classes(
		(hue: string) => ({
			name: `shadow_color_${hue}`,
			css: `--shadow_color: var(--shadow_color_${hue});`,
		}),
		color_variants,
	),
	// Shadow alpha classes
	...generate_classes(
		(alpha: number) => ({
			name: `shadow_alpha_${alpha}`,
			css: `--shadow_alpha: var(--shadow_alpha_${alpha});`,
		}),
		shadow_alpha_variants,
	),

	/* higher specificity */
	/* TODO which order should these be in? */
	shadow_inherit: {declaration: 'box-shadow: inherit;'},
	shadow_none: {declaration: 'box-shadow: none;'},

	/*

	layout

	*/
	// Width properties
	...generate_property_classes(
		'width',
		[
			'0',
			'100',
			'1px',
			'2px',
			'3px',
			'auto',
			'max-content',
			'min-content',
			'fit-content',
			'stretch',
			...space_variants,
		],
		format_dimension_value,
		'w',
	),
	// Height properties
	...generate_property_classes(
		'height',
		[
			'0',
			'100',
			'1px',
			'2px',
			'3px',
			'auto',
			'max-content',
			'min-content',
			'fit-content',
			'stretch',
			...space_variants,
		],
		format_dimension_value,
		'h',
	),

	// TODO BLOCK maybe longhand names here? and width/height above? then the current `width_` vars need to change
	// Position offset properties (top, right, bottom, left)
	...generate_property_classes(
		'top',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
		't',
	),
	...generate_property_classes(
		'right',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
		'r',
	),
	...generate_property_classes(
		'bottom',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
		'b',
	),
	...generate_property_classes(
		'left',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
		'l',
	),

	// Inset property
	...generate_property_classes(
		'inset',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
	),

	// Padding classes - all variants (p, pt, pr, pb, pl, px, py)
	...generate_directional_classes(
		'padding',
		['0', '100', '1px', '2px', '3px', ...space_variants],
		format_spacing_value,
	),

	// Margin classes - all variants (m, mt, mr, mb, ml, mx, my)
	...generate_directional_classes(
		'margin',
		['0', '100', '1px', '2px', '3px', 'auto', ...space_variants],
		format_spacing_value,
	),

	// Gap properties
	...generate_property_classes('gap', space_variants, format_spacing_value),
	...generate_property_classes('column-gap', space_variants, format_spacing_value),
	...generate_property_classes('row-gap', space_variants, format_spacing_value),
};
