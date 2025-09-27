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
	format_spacing_value,
} from '$lib/css_class_generators.js';
import {
	space_variants,
	color_variants,
	text_color_variants,
	font_size_variants,
	line_height_variants,
	border_radius_variants,
	border_distance_variants,
	alignment_values,
	justify_values,
	overflow_values,
	border_style_values,
	display_values,
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
	icon_size_xs: {
		declaration: 'font-size: var(--icon_size_xs); --font_size: var(--icon_size_xs);',
	},
	icon_size_sm: {
		declaration: 'font-size: var(--icon_size_sm); --font_size: var(--icon_size_sm);',
	},
	icon_size_md: {
		declaration: 'font-size: var(--icon_size_md); --font_size: var(--icon_size_md);',
	},
	icon_size_lg: {
		declaration: 'font-size: var(--icon_size_lg); --font_size: var(--icon_size_lg);',
	},
	icon_size_xl: {
		declaration: 'font-size: var(--icon_size_xl); --font_size: var(--icon_size_xl);',
	},
	icon_size_xl2: {
		declaration: 'font-size: var(--icon_size_xl2); --font_size: var(--icon_size_xl2);',
	},
	icon_size_xl3: {
		declaration: 'font-size: var(--icon_size_xl3); --font_size: var(--icon_size_xl3);',
	},
	text_align_start: {declaration: 'text-align: start;'},
	text_align_end: {declaration: 'text-align: end;'},
	text_align_left: {declaration: 'text-align: left;'},
	text_align_right: {declaration: 'text-align: right;'},
	text_align_center: {declaration: 'text-align: center;'},
	text_align_justify: {declaration: 'text-align: justify;'},
	text_align_justify_all: {declaration: 'text-align: justify-all;'},
	text_align_match_parent: {declaration: 'text-align: match-parent;'},
	vertical_align_baseline: {declaration: 'vertical-align: baseline;'},
	vertical_align_sub: {declaration: 'vertical-align: sub;'},
	vertical_align_super: {declaration: 'vertical-align: super;'},
	vertical_align_text_top: {declaration: 'vertical-align: text-top;'},
	vertical_align_text_bottom: {declaration: 'vertical-align: text-bottom;'},
	vertical_align_middle: {declaration: 'vertical-align: middle;'},
	vertical_align_top: {declaration: 'vertical-align: top;'},
	vertical_align_bottom: {declaration: 'vertical-align: bottom;'},
	word_break_normal: {declaration: 'word-break: normal;'},
	word_break_break_all: {declaration: 'word-break: break-all;'},
	word_break_keep_all: {declaration: 'word-break: keep-all;'},
	word_break_inherit: {declaration: 'word-break: inherit;'},
	word_break_initial: {declaration: 'word-break: initial;'},
	word_break_revert: {declaration: 'word-break: revert;'},
	word_break_revert_layer: {declaration: 'word-break: revert-layer;'},
	word_break_unset: {declaration: 'word-break: unset;'},
	white_space_normal: {declaration: 'white-space: normal;'},
	white_space_nowrap: {declaration: 'white-space: nowrap;'},
	white_space_pre: {declaration: 'white-space: pre;'},
	white_space_pre_wrap: {declaration: 'white-space: pre-wrap;'},
	white_space_pre_line: {declaration: 'white-space: pre-line;'},
	white_space_break_spaces: {declaration: 'white-space: break-spaces;'},

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	white_space_collapse_collapse: {declaration: 'white-space-collapse: collapse;'},
	white_space_collapse_preserve: {declaration: 'white-space-collapse: preserve;'},
	white_space_collapse_preserve_breaks: {declaration: 'white-space-collapse: preserve-breaks;'},
	white_space_collapse_preserve_spaces: {declaration: 'white-space-collapse: preserve-spaces;'},
	white_space_collapse_break_spaces: {declaration: 'white-space-collapse: break-spaces;'},
	white_space_collapse_inherit: {declaration: 'white-space-collapse: inherit;'},
	white_space_collapse_initial: {declaration: 'white-space-collapse: initial;'},
	white_space_collapse_revert: {declaration: 'white-space-collapse: revert;'},
	white_space_collapse_revert_layer: {declaration: 'white-space-collapse: revert-layer;'},
	white_space_collapse_unset: {declaration: 'white-space-collapse: unset;'},

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	text_wrap_wrap: {declaration: 'text-wrap: wrap;'},
	text_wrap_nowrap: {declaration: 'text-wrap: nowrap;'},
	text_wrap_balance: {declaration: 'text-wrap: balance;'},
	text_wrap_pretty: {declaration: 'text-wrap: pretty;'},
	text_wrap_stable: {declaration: 'text-wrap: stable;'},

	user_select_none: {declaration: 'user-select: none;'},
	user_select_auto: {declaration: 'user-select: auto;'},
	user_select_text: {declaration: 'user-select: text;'},
	user_select_all: {declaration: 'user-select: all;'},
	user_select_inherit: {declaration: 'user-select: inherit;'},
	user_select_initial: {declaration: 'user-select: initial;'},
	user_select_revert: {declaration: 'user-select: revert;'},
	user_select_revert_layer: {declaration: 'user-select: revert-layer;'},
	user_select_unset: {declaration: 'user-select: unset;'},

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
	border_color_1: {declaration: 'border-color: var(--border_color_1);'},
	border_color_2: {declaration: 'border-color: var(--border_color_2);'},
	border_color_3: {declaration: 'border-color: var(--border_color_3);'},
	border_color_4: {declaration: 'border-color: var(--border_color_4);'},
	border_color_5: {declaration: 'border-color: var(--border_color_5);'},
	border_color_a: {declaration: 'border-color: var(--border_color_a);'},
	border_color_b: {declaration: 'border-color: var(--border_color_b);'},
	border_color_c: {declaration: 'border-color: var(--border_color_c);'},
	border_color_d: {declaration: 'border-color: var(--border_color_d);'},
	border_color_e: {declaration: 'border-color: var(--border_color_e);'},
	border_color_f: {declaration: 'border-color: var(--border_color_f);'},
	border_color_g: {declaration: 'border-color: var(--border_color_g);'},
	border_color_h: {declaration: 'border-color: var(--border_color_h);'},
	border_color_i: {declaration: 'border-color: var(--border_color_i);'},
	border_color_j: {declaration: 'border-color: var(--border_color_j);'},
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
	// Border radius - percentage based
	border_radius_100: {declaration: 'border-radius: 100%;'},
	border_radius_90: {declaration: 'border-radius: 90%;'},
	border_radius_80: {declaration: 'border-radius: 80%;'},
	border_radius_70: {declaration: 'border-radius: 70%;'},
	border_radius_60: {declaration: 'border-radius: 60%;'},
	border_radius_50: {declaration: 'border-radius: 50%;'},
	border_radius_40: {declaration: 'border-radius: 40%;'},
	border_radius_30: {declaration: 'border-radius: 30%;'},
	border_radius_20: {declaration: 'border-radius: 20%;'},
	border_radius_10: {declaration: 'border-radius: 10%;'},
	border_radius_0: {declaration: 'border-radius: 0;'},
	border_radius_xs3: {declaration: 'border-radius: var(--border_radius_xs3);'},
	border_radius_xs2: {declaration: 'border-radius: var(--border_radius_xs2);'},
	border_radius_xs: {declaration: 'border-radius: var(--border_radius_xs);'},
	border_radius_sm: {declaration: 'border-radius: var(--border_radius_sm);'},
	border_radius_md: {declaration: 'border-radius: var(--border_radius_md);'},
	border_radius_lg: {declaration: 'border-radius: var(--border_radius_lg);'},
	border_radius_xl: {declaration: 'border-radius: var(--border_radius_xl);'},
	border_top_left_radius_100: {declaration: 'border-top-left-radius: 100%;'},
	border_top_left_radius_90: {declaration: 'border-top-left-radius: 90%;'},
	border_top_left_radius_80: {declaration: 'border-top-left-radius: 80%;'},
	border_top_left_radius_70: {declaration: 'border-top-left-radius: 70%;'},
	border_top_left_radius_60: {declaration: 'border-top-left-radius: 60%;'},
	border_top_left_radius_50: {declaration: 'border-top-left-radius: 50%;'},
	border_top_left_radius_40: {declaration: 'border-top-left-radius: 40%;'},
	border_top_left_radius_30: {declaration: 'border-top-left-radius: 30%;'},
	border_top_left_radius_20: {declaration: 'border-top-left-radius: 20%;'},
	border_top_left_radius_10: {declaration: 'border-top-left-radius: 10%;'},
	border_top_left_radius_0: {declaration: 'border-top-left-radius: 0;'},
	border_top_left_radius_xs3: {declaration: 'border-top-left-radius: var(--border_radius_xs3);'},
	border_top_left_radius_xs2: {declaration: 'border-top-left-radius: var(--border_radius_xs2);'},
	border_top_left_radius_xs: {declaration: 'border-top-left-radius: var(--border_radius_xs);'},
	border_top_left_radius_sm: {declaration: 'border-top-left-radius: var(--border_radius_sm);'},
	border_top_left_radius_md: {declaration: 'border-top-left-radius: var(--border_radius_md);'},
	border_top_left_radius_lg: {declaration: 'border-top-left-radius: var(--border_radius_lg);'},
	border_top_left_radius_xl: {declaration: 'border-top-left-radius: var(--border_radius_xl);'},
	border_top_right_radius_100: {declaration: 'border-top-right-radius: 100%;'},
	border_top_right_radius_90: {declaration: 'border-top-right-radius: 90%;'},
	border_top_right_radius_80: {declaration: 'border-top-right-radius: 80%;'},
	border_top_right_radius_70: {declaration: 'border-top-right-radius: 70%;'},
	border_top_right_radius_60: {declaration: 'border-top-right-radius: 60%;'},
	border_top_right_radius_50: {declaration: 'border-top-right-radius: 50%;'},
	border_top_right_radius_40: {declaration: 'border-top-right-radius: 40%;'},
	border_top_right_radius_30: {declaration: 'border-top-right-radius: 30%;'},
	border_top_right_radius_20: {declaration: 'border-top-right-radius: 20%;'},
	border_top_right_radius_10: {declaration: 'border-top-right-radius: 10%;'},
	border_top_right_radius_0: {declaration: 'border-top-right-radius: 0;'},
	border_top_right_radius_xs3: {declaration: 'border-top-right-radius: var(--border_radius_xs3);'},
	border_top_right_radius_xs2: {declaration: 'border-top-right-radius: var(--border_radius_xs2);'},
	border_top_right_radius_xs: {declaration: 'border-top-right-radius: var(--border_radius_xs);'},
	border_top_right_radius_sm: {declaration: 'border-top-right-radius: var(--border_radius_sm);'},
	border_top_right_radius_md: {declaration: 'border-top-right-radius: var(--border_radius_md);'},
	border_top_right_radius_lg: {declaration: 'border-top-right-radius: var(--border_radius_lg);'},
	border_top_right_radius_xl: {declaration: 'border-top-right-radius: var(--border_radius_xl);'},
	border_bottom_left_radius_100: {declaration: 'border-bottom-left-radius: 100%;'},
	border_bottom_left_radius_90: {declaration: 'border-bottom-left-radius: 90%;'},
	border_bottom_left_radius_80: {declaration: 'border-bottom-left-radius: 80%;'},
	border_bottom_left_radius_70: {declaration: 'border-bottom-left-radius: 70%;'},
	border_bottom_left_radius_60: {declaration: 'border-bottom-left-radius: 60%;'},
	border_bottom_left_radius_50: {declaration: 'border-bottom-left-radius: 50%;'},
	border_bottom_left_radius_40: {declaration: 'border-bottom-left-radius: 40%;'},
	border_bottom_left_radius_30: {declaration: 'border-bottom-left-radius: 30%;'},
	border_bottom_left_radius_20: {declaration: 'border-bottom-left-radius: 20%;'},
	border_bottom_left_radius_10: {declaration: 'border-bottom-left-radius: 10%;'},
	border_bottom_left_radius_0: {declaration: 'border-bottom-left-radius: 0;'},
	border_bottom_left_radius_xs3: {
		declaration: 'border-bottom-left-radius: var(--border_radius_xs3);',
	},
	border_bottom_left_radius_xs2: {
		declaration: 'border-bottom-left-radius: var(--border_radius_xs2);',
	},
	border_bottom_left_radius_xs: {
		declaration: 'border-bottom-left-radius: var(--border_radius_xs);',
	},
	border_bottom_left_radius_sm: {
		declaration: 'border-bottom-left-radius: var(--border_radius_sm);',
	},
	border_bottom_left_radius_md: {
		declaration: 'border-bottom-left-radius: var(--border_radius_md);',
	},
	border_bottom_left_radius_lg: {
		declaration: 'border-bottom-left-radius: var(--border_radius_lg);',
	},
	border_bottom_left_radius_xl: {
		declaration: 'border-bottom-left-radius: var(--border_radius_xl);',
	},
	border_bottom_right_radius_100: {declaration: 'border-bottom-right-radius: 100%;'},
	border_bottom_right_radius_90: {declaration: 'border-bottom-right-radius: 90%;'},
	border_bottom_right_radius_80: {declaration: 'border-bottom-right-radius: 80%;'},
	border_bottom_right_radius_70: {declaration: 'border-bottom-right-radius: 70%;'},
	border_bottom_right_radius_60: {declaration: 'border-bottom-right-radius: 60%;'},
	border_bottom_right_radius_50: {declaration: 'border-bottom-right-radius: 50%;'},
	border_bottom_right_radius_40: {declaration: 'border-bottom-right-radius: 40%;'},
	border_bottom_right_radius_30: {declaration: 'border-bottom-right-radius: 30%;'},
	border_bottom_right_radius_20: {declaration: 'border-bottom-right-radius: 20%;'},
	border_bottom_right_radius_10: {declaration: 'border-bottom-right-radius: 10%;'},
	border_bottom_right_radius_0: {declaration: 'border-bottom-right-radius: 0;'},
	border_bottom_right_radius_xs3: {
		declaration: 'border-bottom-right-radius: var(--border_radius_xs3);',
	},
	border_bottom_right_radius_xs2: {
		declaration: 'border-bottom-right-radius: var(--border_radius_xs2);',
	},
	border_bottom_right_radius_xs: {
		declaration: 'border-bottom-right-radius: var(--border_radius_xs);',
	},
	border_bottom_right_radius_sm: {
		declaration: 'border-bottom-right-radius: var(--border_radius_sm);',
	},
	border_bottom_right_radius_md: {
		declaration: 'border-bottom-right-radius: var(--border_radius_md);',
	},
	border_bottom_right_radius_lg: {
		declaration: 'border-bottom-right-radius: var(--border_radius_lg);',
	},
	border_bottom_right_radius_xl: {
		declaration: 'border-bottom-right-radius: var(--border_radius_xl);',
	},

	/*

	shadows

	*/
	shadow_xs: {
		declaration:
			'box-shadow: var(--shadow_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_sm: {
		declaration:
			'box-shadow: var(--shadow_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_md: {
		declaration:
			'box-shadow: var(--shadow_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_lg: {
		declaration:
			'box-shadow: var(--shadow_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_xl: {
		declaration:
			'box-shadow: var(--shadow_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_top_xs: {
		declaration:
			'box-shadow: var(--shadow_top_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_top_sm: {
		declaration:
			'box-shadow: var(--shadow_top_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_top_md: {
		declaration:
			'box-shadow: var(--shadow_top_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_top_lg: {
		declaration:
			'box-shadow: var(--shadow_top_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_top_xl: {
		declaration:
			'box-shadow: var(--shadow_top_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_bottom_xs: {
		declaration:
			'box-shadow: var(--shadow_bottom_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_bottom_sm: {
		declaration:
			'box-shadow: var(--shadow_bottom_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_bottom_md: {
		declaration:
			'box-shadow: var(--shadow_bottom_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_bottom_lg: {
		declaration:
			'box-shadow: var(--shadow_bottom_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_bottom_xl: {
		declaration:
			'box-shadow: var(--shadow_bottom_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_inset_xs: {
		declaration:
			'box-shadow: var(--shadow_inset_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_inset_sm: {
		declaration:
			'box-shadow: var(--shadow_inset_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_inset_md: {
		declaration:
			'box-shadow: var(--shadow_inset_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_inset_lg: {
		declaration:
			'box-shadow: var(--shadow_inset_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_inset_xl: {
		declaration:
			'box-shadow: var(--shadow_inset_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_inset_top_xs: {
		declaration:
			'box-shadow: var(--shadow_inset_top_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_inset_top_sm: {
		declaration:
			'box-shadow: var(--shadow_inset_top_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_inset_top_md: {
		declaration:
			'box-shadow: var(--shadow_inset_top_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_inset_top_lg: {
		declaration:
			'box-shadow: var(--shadow_inset_top_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_inset_top_xl: {
		declaration:
			'box-shadow: var(--shadow_inset_top_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_inset_bottom_xs: {
		declaration:
			'box-shadow: var(--shadow_inset_bottom_xs) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_1)), transparent);',
	},
	shadow_inset_bottom_sm: {
		declaration:
			'box-shadow: var(--shadow_inset_bottom_sm) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_2)), transparent);',
	},
	shadow_inset_bottom_md: {
		declaration:
			'box-shadow: var(--shadow_inset_bottom_md) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_3)), transparent);',
	},
	shadow_inset_bottom_lg: {
		declaration:
			'box-shadow: var(--shadow_inset_bottom_lg) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_4)), transparent);',
	},
	shadow_inset_bottom_xl: {
		declaration:
			'box-shadow: var(--shadow_inset_bottom_xl) color-mix(in hsl, var(--shadow_color) var(--shadow_alpha, var(--shadow_alpha_5)), transparent);',
	},
	shadow_color_highlight: {declaration: '--shadow_color: var(--shadow_color_highlight);'},
	shadow_color_glow: {declaration: '--shadow_color: var(--shadow_color_glow);'},
	shadow_color_shroud: {declaration: '--shadow_color: var(--shadow_color_shroud);'},
	shadow_color_a: {declaration: '--shadow_color: var(--shadow_color_a);'},
	shadow_color_b: {declaration: '--shadow_color: var(--shadow_color_b);'},
	shadow_color_c: {declaration: '--shadow_color: var(--shadow_color_c);'},
	shadow_color_d: {declaration: '--shadow_color: var(--shadow_color_d);'},
	shadow_color_e: {declaration: '--shadow_color: var(--shadow_color_e);'},
	shadow_color_f: {declaration: '--shadow_color: var(--shadow_color_f);'},
	shadow_color_g: {declaration: '--shadow_color: var(--shadow_color_g);'},
	shadow_color_h: {declaration: '--shadow_color: var(--shadow_color_h);'},
	shadow_color_i: {declaration: '--shadow_color: var(--shadow_color_i);'},
	shadow_color_j: {declaration: '--shadow_color: var(--shadow_color_j);'},
	shadow_alpha_1: {declaration: '--shadow_alpha: var(--shadow_alpha_1);'},
	shadow_alpha_2: {declaration: '--shadow_alpha: var(--shadow_alpha_2);'},
	shadow_alpha_3: {declaration: '--shadow_alpha: var(--shadow_alpha_3);'},
	shadow_alpha_4: {declaration: '--shadow_alpha: var(--shadow_alpha_4);'},
	shadow_alpha_5: {declaration: '--shadow_alpha: var(--shadow_alpha_5);'},

	/* higher specificity */
	/* TODO which order should these be in? */
	shadow_inherit: {declaration: 'box-shadow: inherit;'},
	shadow_none: {declaration: 'box-shadow: none;'},

	/*

	layout

	*/
	w_0: {declaration: 'width: 0;'},
	w_100: {declaration: 'width: 100%;'},
	w_1px: {declaration: 'width: 1px;'}, // TODO maybe 🔢 to specify replacement? and/or regexps?
	w_2px: {declaration: 'width: 2px;'},
	w_3px: {declaration: 'width: 3px;'},
	w_auto: {declaration: 'width: auto;'},
	w_max_content: {declaration: 'width: max-content;'},
	w_min_content: {declaration: 'width: min-content;'},
	w_fit_content: {declaration: 'width: fit-content;'},
	w_stretch: {declaration: 'width: stretch;'},
	w_xs5: {declaration: 'width: var(--space_xs5);'},
	w_xs4: {declaration: 'width: var(--space_xs4);'},
	w_xs3: {declaration: 'width: var(--space_xs3);'},
	w_xs2: {declaration: 'width: var(--space_xs2);'},
	w_xs: {declaration: 'width: var(--space_xs);'},
	w_sm: {declaration: 'width: var(--space_sm);'},
	w_md: {declaration: 'width: var(--space_md);'},
	w_lg: {declaration: 'width: var(--space_lg);'},
	w_xl: {declaration: 'width: var(--space_xl);'},
	w_xl2: {declaration: 'width: var(--space_xl2);'},
	w_xl3: {declaration: 'width: var(--space_xl3);'},
	w_xl4: {declaration: 'width: var(--space_xl4);'},
	w_xl5: {declaration: 'width: var(--space_xl5);'},
	w_xl6: {declaration: 'width: var(--space_xl6);'},
	w_xl7: {declaration: 'width: var(--space_xl7);'},
	w_xl8: {declaration: 'width: var(--space_xl8);'},
	w_xl9: {declaration: 'width: var(--space_xl9);'},
	w_xl10: {declaration: 'width: var(--space_xl10);'},
	w_xl11: {declaration: 'width: var(--space_xl11);'},
	w_xl12: {declaration: 'width: var(--space_xl12);'},
	w_xl13: {declaration: 'width: var(--space_xl13);'},
	w_xl14: {declaration: 'width: var(--space_xl14);'},
	w_xl15: {declaration: 'width: var(--space_xl15);'},
	h_0: {declaration: 'height: 0;'},
	h_100: {declaration: 'height: 100%;'},
	h_1px: {declaration: 'height: 1px;'},
	h_2px: {declaration: 'height: 2px;'},
	h_3px: {declaration: 'height: 3px;'},
	h_auto: {declaration: 'height: auto;'},
	h_max_content: {declaration: 'height: max-content;'},
	h_min_content: {declaration: 'height: min-content;'},
	h_fit_content: {declaration: 'height: fit-content;'},
	h_stretch: {declaration: 'height: stretch;'},
	h_xs5: {declaration: 'height: var(--space_xs5);'},
	h_xs4: {declaration: 'height: var(--space_xs4);'},
	h_xs3: {declaration: 'height: var(--space_xs3);'},
	h_xs2: {declaration: 'height: var(--space_xs2);'},
	h_xs: {declaration: 'height: var(--space_xs);'},
	h_sm: {declaration: 'height: var(--space_sm);'},
	h_md: {declaration: 'height: var(--space_md);'},
	h_lg: {declaration: 'height: var(--space_lg);'},
	h_xl: {declaration: 'height: var(--space_xl);'},
	h_xl2: {declaration: 'height: var(--space_xl2);'},
	h_xl3: {declaration: 'height: var(--space_xl3);'},
	h_xl4: {declaration: 'height: var(--space_xl4);'},
	h_xl5: {declaration: 'height: var(--space_xl5);'},
	h_xl6: {declaration: 'height: var(--space_xl6);'},
	h_xl7: {declaration: 'height: var(--space_xl7);'},
	h_xl8: {declaration: 'height: var(--space_xl8);'},
	h_xl9: {declaration: 'height: var(--space_xl9);'},
	h_xl10: {declaration: 'height: var(--space_xl10);'},
	h_xl11: {declaration: 'height: var(--space_xl11);'},
	h_xl12: {declaration: 'height: var(--space_xl12);'},
	h_xl13: {declaration: 'height: var(--space_xl13);'},
	h_xl14: {declaration: 'height: var(--space_xl14);'},
	h_xl15: {declaration: 'height: var(--space_xl15);'},

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
