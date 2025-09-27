import type {
	Css_Class_Declaration,
	Css_Class_Declaration_Interpreted,
} from '$lib/css_class_helpers.js';
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
} from '$lib/variable_data.js';

// TODO add animation support, either as a separate thing or rename `css_classes_by_name` to be more generic, like `css_by_name` - need to collect `animation: foo ...` names like we do classes

// TODO think about variable support (much harder problem, need dependency graph)

// TODO modifiers for :hover/:active/:focus (how? do we need to give up the compat with JS identifier names?)

/**
 * Interpreter for opacity classes (opacity_0 through opacity_100)
 */
export const opacity_interpreter: Css_Class_Declaration_Interpreted = {
	pattern: /^opacity_(\d+)$/,
	interpret: (match) => {
		const value = parseInt(match[1]);
		if (value < 0 || value > 100) {
			console.warn(`Invalid opacity value: ${value}. Must be between 0 and 100.`);
			return null;
		}
		return `opacity: ${value === 0 ? '0' : value === 100 ? '1' : `${value}%`};`;
	},
	// comment: 'Interpreted opacity value',
};

/**
 * Interpreter for font-weight classes (font_weight_1 through font_weight_1000)
 * Supports the full 1-1000 range as per CSS spec
 */
export const font_weight_interpreter: Css_Class_Declaration_Interpreted = {
	pattern: /^font_weight_(\d+)$/,
	interpret: (match) => {
		const value = parseInt(match[1]);
		if (value < 1 || value > 1000) {
			console.warn(`Invalid font-weight value: ${value}. Must be between 1 and 1000.`);
			return null;
		}
		return `font-weight: ${value}; --font_weight: ${value};`;
	},
};

/**
 * Collection of all interpreters for dynamic CSS class generation
 */
export const css_class_interpreters: Array<Css_Class_Declaration_Interpreted> = [
	opacity_interpreter,
	font_weight_interpreter,
	// add new interpreters here
];

/**
 * @see `generate_classes_css`
 */
export const css_classes_by_name: Record<string, Css_Class_Declaration | undefined> = {
	// Composite classes go first, so they can be overridden by the more specific classes.
	pixelated: {
		declaration: `
			image-rendering: -webkit-optimize-contrast; /* Safari */
			image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */
			image-rendering: pixelated; /* in case crisp-edges isn't supported */
			image-rendering: crisp-edges; /* the recommended pixel art setting according to MDN */
		`,
	},
	box: {
		ruleset: `
			.box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		`,
	},
	column: {
		ruleset: `
			/* like \`.box\` but uncentered */
			.column {
				display: flex;
				flex-direction: column;
			}
		`,
	},
	row: {
		ruleset: `
			/* can be used to override the direction of a \`.box\` */
			.row {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
		`,
	},
	formatted: {
		ruleset: `
			/* Formats content to wrap long strings and preserve displayed whitespace. */
			.formatted {
				overflow: hidden;
				white-space: break-spaces;
			}
		`,
	},
	ellipsis: {
		declaration: 'display: block;	white-space: nowrap;	overflow: hidden;	text-overflow: ellipsis;',
	},
	width_xs: {
		ruleset: `
			.width_xs {
				width: 100%;
				max-width: var(--distance_xs);
			}
		`,
	},
	width_sm: {
		ruleset: `
			.width_sm {
				width: 100%;
				max-width: var(--distance_sm);
			}
		`,
	},
	width_md: {
		ruleset: `
			.width_md {
				width: 100%;
				max-width: var(--distance_md);
			}
		`,
	},
	width_lg: {
		ruleset: `
			.width_lg {
				width: 100%;
				max-width: var(--distance_lg);
			}
		`,
	},
	width_xl: {
		ruleset: `
			.width_xl {
				width: 100%;
				max-width: var(--distance_xl);
			}
		`,
	},
	min_width_xs: {
		ruleset: `
			.min_width_xs {
				width: 100%;
				min-width: var(--distance_xs);
			}
		`,
	},
	min_width_sm: {
		ruleset: `
			.min_width_sm {
				width: 100%;
				min-width: var(--distance_sm);
			}
		`,
	},
	min_width_md: {
		ruleset: `
			.min_width_md {
				width: 100%;
				min-width: var(--distance_md);
			}
		`,
	},
	min_width_lg: {
		ruleset: `
			.min_width_lg {
				width: 100%;
				min-width: var(--distance_lg);
			}
		`,
	},
	min_width_xl: {
		ruleset: `
			.min_width_xl {
				width: 100%;
				min-width: var(--distance_xl);
			}
		`,
	},
	// TODO rethink if this breaks too often or confusingly, `height: 100%` depends on the parent and often won't take effect
	height_xs: {
		ruleset: `
			.height_xs {
				height: 100%;
				max-height: var(--distance_xs);
			}
		`,
	},
	height_sm: {
		ruleset: `
			.height_sm {
				height: 100%;
				max-height: var(--distance_sm);
			}
		`,
	},
	height_md: {
		ruleset: `
			.height_md {
				height: 100%;
				max-height: var(--distance_md);
			}
		`,
	},
	height_lg: {
		ruleset: `
			.height_lg {
				height: 100%;
				max-height: var(--distance_lg);
			}
		`,
	},
	height_xl: {
		ruleset: `
			.height_xl {
				height: 100%;
				max-height: var(--distance_xl);
			}
		`,
	},
	min_height_xs: {
		ruleset: `
			.min_height_xs {
				height: 100%;
				min-height: var(--distance_xs);
			}
		`,
	},
	min_height_sm: {
		ruleset: `
			.min_height_sm {
				height: 100%;
				min-height: var(--distance_sm);
			}
		`,
	},
	min_height_md: {
		ruleset: `
			.min_height_md {
				height: 100%;
				min-height: var(--distance_md);
			}
		`,
	},
	min_height_lg: {
		ruleset: `
			.min_height_lg {
				height: 100%;
				min-height: var(--distance_lg);
			}
		`,
	},
	min_height_xl: {
		ruleset: `
			.min_height_xl {
				height: 100%;
				min-height: var(--distance_xl);
			}
		`,
	},
	selectable: {
		ruleset: `
			.selectable {
				--button_fill: color-mix(in hsl, var(--fill) 8%, transparent);
				--button_fill_hover: color-mix(in hsl, var(--fill) 16%, transparent);
				--button_fill_active: color-mix(in hsl, var(--fill) 24%, transparent);
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
		`,
	},
	clickable: {
		ruleset: `
			.clickable {
				cursor: pointer;
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
			.clickable:active,
			.clickable.active {
				transform: var(--clickable_transform_active, scale3d(1.2, 1.2, 1.2));
			}
		`,
	},
	pane: {
		ruleset: `
			/* A pane is a box floating over the page, like for dialogs.
			By default it's opaque, resetting the background to the initial depth. */
			.pane {
				background-color: var(--pane_bg, var(--bg));
				box-shadow: var(
					--pane_shadow,
					/* TODO this is terrible, maybe add all the variables? should be culled anyway? */
						var(--shadow_bottom_md)
						color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_3), transparent)
				);
				border-radius: var(--border_radius_xs);
			}
		`,
	},
	panel: {
		ruleset: `
			/* A panel is a box embedded into the page, useful for visually isolating content. */
			.panel {
				border-radius: var(--border_radius_xs);
				background-color: var(--panel_bg, var(--fg_1));
			}
		`,
	},
	icon_button: {
		ruleset: `
			/* TODO other button variants? */
			/* TODO this is slightly strange that it doesn't use --icon_size */
			/* These are used as modifiers to buttons, and so they use \`:where\` so they cascade. */
			.icon_button {
				width: var(--input_height);
				height: var(--input_height);
				min-width: var(--input_height);
				min-height: var(--input_height);
				flex-shrink: 0;
				line-height: 1;
				font-weight: 900;
				padding: 0;
			}
		`,
	},
	plain: {
		ruleset: `
			/* TODO maybe this belongs with the reset, like \`selected\`? or does \`selected\` belong here? */
			.plain:not(:hover) {
				--border_color: transparent;
				box-shadow: none;
				--button_fill: transparent;
			}
			.plain:hover, .plain:active {
				--border_color: transparent;
			}
		`,
	},
	menu_item: {
		ruleset: `
			.menu_item {
				--border_radius: 0;
				--border_color: var(--border_color_3);
				position: relative;
				z-index: 2;
				cursor: pointer;
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
				cursor: default;
			}
			.menu_item.selected.deselectable:not(:disabled) {
				cursor: pointer;
			}
			.menu_item:hover {
				--border_color: var(--border_color_3);
				background-color: var(--fg_0);
			}
			.menu_item:active,
			.menu_item.selected:hover {
				--border_color: var(--border_color_3);
				background-color: var(--fg_2);
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
		`,
	},
	chevron: {
		ruleset: `
			.chevron {
				position: relative;
				height: 8px;
			}
			.chevron::before {
				display: block;
				content: '';
				border: 4px solid transparent;
				border-left-color: var(--text_color_3);
			}
		`,
	},
	chip: {
		ruleset: `
			.chip {
				font-weight: 500;
				padding-left: var(--space_xs);
				padding-right: var(--space_xs);
				background-color: var(--fg_1);
				border-radius: var(--border_radius_xs);
			}
			a.chip {
				font-weight: 600;
			}
		`,
	},
	pre: {
		// keep in sync with `pre` styling in `style.css`, except the `.inline` exception
		ruleset: `
			.pre {
				font-family: var(--font_family_mono);
				color: var(--text_color, var(--text_color_3));
				overflow: auto;
				max-width: 100%;
			}
			.pre > code {
				font-size: var(--font_size_sm); /* TODO @many use a var? maybe computed from generic \`--font_size\`? */
				font-weight: 500;
			}
			.pre:not(.inline) > code {
				display: block;
			}
		`,
	},

	/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/position */
	...generate_classes(
		(v: string) => ({
			name: `position_${v}`,
			css: `position: ${to_kebab(v)};`,
		}),
		['static', 'relative', 'absolute', 'fixed', 'sticky', ...CSS_GLOBALS],
	),

	/** @see https://drafts.csswg.org/css-display/#display-value-summary. */
	// Display properties
	...generate_property_classes('display', display_values),
	...generate_property_classes('display', CSS_GLOBALS, to_kebab),

	visibility_visible: {declaration: 'visibility: visible;'},
	visibility_hidden: {declaration: 'visibility: hidden;'},
	visibility_collapse: {declaration: 'visibility: collapse;'},
	visibility_inherit: {declaration: 'visibility: inherit;'},
	visibility_initial: {declaration: 'visibility: initial;'},
	visibility_revert: {declaration: 'visibility: revert;'},
	visibility_revert_layer: {declaration: 'visibility: revert-layer;'},
	visibility_unset: {declaration: 'visibility: unset;'},

	/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/float */
	float_none: {declaration: 'float: none;'},
	float_left: {declaration: 'float: left;'},
	float_right: {declaration: 'float: right;'},
	float_inline_start: {declaration: 'float: inline-start;'},
	float_inherit: {declaration: 'float: inherit;'},
	float_initial: {declaration: 'float: initial;'},
	float_revert: {declaration: 'float: revert;'},
	float_revert_layer: {declaration: 'float: revert_layer;'},
	float_unset: {declaration: 'float: unset;'},

	// Overflow properties with axis variants
	...generate_property_with_axes('overflow', overflow_values),

	overflow_wrap_normal: {declaration: 'overflow-wrap: normal;'},
	overflow_wrap_anywhere: {declaration: 'overflow-wrap: anywhere;'},
	overflow_wrap_break_word: {declaration: 'overflow-wrap: break-word;'},
	overflow_wrap_inherit: {declaration: 'overflow-wrap: inherit;'},
	overflow_wrap_initial: {declaration: 'overflow-wrap: initial;'},
	overflow_wrap_revert: {declaration: 'overflow-wrap: revert;'},
	overflow_wrap_revert_layer: {declaration: 'overflow-wrap: revert-layer;'},
	overflow_wrap_unset: {declaration: 'overflow-wrap: unset;'},

	scrollbar_width_auto: {declaration: 'scrollbar-width: auto;'},
	scrollbar_width_thin: {declaration: 'scrollbar-width: thin;'},
	scrollbar_width_none: {declaration: 'scrollbar-width: none;'},
	scrollbar_width_inherit: {declaration: 'scrollbar-width: inherit;'},
	scrollbar_width_initial: {declaration: 'scrollbar-width: initial;'},
	scrollbar_width_revert: {declaration: 'scrollbar-width: revert;'},
	scrollbar_width_revert_layer: {declaration: 'scrollbar-width: revert-layer;'},
	scrollbar_width_unset: {declaration: 'scrollbar-width: unset;'},

	scrollbar_gutter_auto: {declaration: 'scrollbar-gutter: auto;'},
	scrollbar_gutter_stable: {declaration: 'scrollbar-gutter: stable;'},
	scrollbar_gutter_stable_both_edges: {declaration: 'scrollbar-gutter: stable both-edges;'},
	scrollbar_gutter_inherit: {declaration: 'scrollbar-gutter: inherit;'},
	scrollbar_gutter_initial: {declaration: 'scrollbar-gutter: initial;'},
	scrollbar_gutter_revert: {declaration: 'scrollbar-gutter: revert;'},
	scrollbar_gutter_revert_layer: {declaration: 'scrollbar-gutter: revert-layer;'},
	scrollbar_gutter_unset: {declaration: 'scrollbar-gutter: unset;'},

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
	...generate_property_classes('align-items', alignment_values, undefined, 'align_items'),
	// Align content
	...generate_property_classes(
		'align-content',
		[...alignment_values, 'space-between', 'space-around', 'space-evenly'],
		undefined,
		'align_content',
	),
	// Align self
	...generate_property_classes('align-self', alignment_values, undefined, 'align_self'),
	// Justify content
	...generate_property_classes('justify-content', justify_values, undefined, 'justify_content'),
	// Justify items
	...generate_property_classes(
		'justify-items',
		['center', 'start', 'end', 'left', 'right', 'baseline', 'stretch'],
		undefined,
		'justify_items',
	),
	// Justify self
	...generate_property_classes(
		'justify-self',
		['center', 'start', 'end', 'left', 'right', 'baseline', 'stretch'],
		undefined,
		'justify_self',
	),
	flip_x: {declaration: 'transform: scaleX(-1);'},
	flip_y: {declaration: 'transform: scaleY(-1);'},
	flip_xy: {declaration: 'transform: scaleX(-1) scaleY(-1);'},

	font_family_sans: {declaration: 'font-family: var(--font_family_sans);'},
	font_family_serif: {declaration: 'font-family: var(--font_family_serif);'},
	font_family_mono: {declaration: 'font-family: var(--font_family_mono);'},
	// Line height
	...generate_property_classes(
		'line-height',
		['0', '1', ...line_height_variants],
		(v) => (v === '0' || v === '1' ? v : `var(--line_height_${v})`),
		'line_height',
	),
	// Font size
	...generate_property_classes(
		'font-size',
		font_size_variants,
		(v) => `var(--font_size_${v}); --font_size: var(--font_size_${v})`,
		'font_size',
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
	...generate_property_classes(
		'white-space',
		['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line', 'break-spaces'],
		undefined,
		'white_space',
	),

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	// White space collapse
	...generate_property_classes(
		'white-space-collapse',
		['collapse', 'preserve', 'preserve-breaks', 'preserve-spaces', 'break-spaces'],
		undefined,
		'white_space_collapse',
	),
	...generate_property_classes(
		'white-space-collapse',
		CSS_GLOBALS,
		to_kebab,
		'white_space_collapse',
	),

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	// Text wrap
	...generate_property_classes(
		'text-wrap',
		['wrap', 'nowrap', 'balance', 'pretty', 'stable'],
		undefined,
		'text_wrap',
	),

	// User select
	...generate_property_classes(
		'user-select',
		['none', 'auto', 'text', 'all'],
		undefined,
		'user_select',
	),
	...generate_property_classes('user-select', CSS_GLOBALS, to_kebab, 'user_select'),

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
	hue_a: {declaration: '--hue: var(--hue_a);'},
	hue_b: {declaration: '--hue: var(--hue_b);'},
	hue_c: {declaration: '--hue: var(--hue_c);'},
	hue_d: {declaration: '--hue: var(--hue_d);'},
	hue_e: {declaration: '--hue: var(--hue_e);'},
	hue_f: {declaration: '--hue: var(--hue_f);'},
	hue_g: {declaration: '--hue: var(--hue_g);'},
	hue_h: {declaration: '--hue: var(--hue_h);'},
	hue_i: {declaration: '--hue: var(--hue_i);'},
	hue_j: {declaration: '--hue: var(--hue_j);'},
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
		'border_color',
	),
	// Border colors - hue variants
	...generate_property_classes(
		'border-color',
		color_variants,
		(v) => `var(--border_color_${v})`,
		'border_color',
	),
	border_color_transparent: {declaration: 'border-color: transparent;'},

	// Border width
	...generate_property_classes(
		'border-width',
		['0', ...border_distance_variants.map(String)],
		(v) => (v === '0' ? '0' : `var(--border_width_${v})`),
		'border_width',
	),
	outline_width_0: {declaration: 'outline-width: 0;'}, // TODO has no corresponding CSS variable, how to encode this?
	outline_width_focus: {declaration: 'outline-width: var(--outline_width_focus);'},
	outline_width_active: {declaration: 'outline-width: var(--outline_width_active);'},

	/* TODO add the top/right/bottom/left border-style multi-argument variants */
	/* @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style */
	// Border style
	...generate_property_classes('border-style', border_style_values, undefined, 'border_style'),
	...generate_property_classes('border-style', CSS_GLOBALS, to_kebab, 'border_style'),

	// Border radius - generated from variants
	...generate_property_classes(
		'border-radius',
		border_radius_variants,
		(v) => `var(--border_radius_${v})`,
		'border_radius',
	),
	// TODO BLOCK interpret
	// Border radius - percentage and zero
	...generate_property_classes(
		'border-radius',
		['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
		(v) => (v === '0' ? '0' : `${v}%`),
		'border_radius',
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
		['highlight', 'glow', 'shroud'],
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
		(alpha: string) => ({
			name: `shadow_alpha_${alpha}`,
			css: `--shadow_alpha: var(--shadow_alpha_${alpha});`,
		}),
		['1', '2', '3', '4', '5'],
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
