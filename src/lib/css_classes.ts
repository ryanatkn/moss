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
	font_size_variants,
	line_height_variants,
	border_radius_variants,
	border_distance_variants,
	alignment_values,
	justify_values,
	overflow_values,
	border_style_values,
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
	display_none: {declaration: 'display: none;'},
	display_contents: {declaration: 'display: contents;'},
	display_block: {
		declaration: 'display: block;',
		comment: 'Same as `display: block flow`.',
	},
	display_flow_root: {
		declaration: 'display: flow-root;',
		comment: 'Same as `display: block flow-root`.',
	},
	display_inline: {
		declaration: 'display: inline;',
		comment: 'Same as `display: inline flow`.',
	},
	display_inline_block: {
		declaration: 'display: inline-block;',
		comment: 'Same as `display: inline flow-root`.',
	},
	display_run_in: {
		declaration: 'display: run-in;',
		comment: 'Same as `display: run-in flow`.',
	},
	display_list_item: {
		declaration: 'display: list-item;',
		comment: 'Same as `display: block flow list-item`.',
	},
	display_inline_list_item: {
		declaration: 'display: inline list-item;',
		comment: 'Same as `display: inline flow list-item`.',
	},
	display_flex: {
		declaration: 'display: flex;',
		comment: 'Same as `display: block flex`.',
	},
	display_inline_flex: {
		declaration: 'display: inline-flex;',
		comment: 'Same as `display: inline flex`.',
	},
	display_grid: {
		declaration: 'display: grid;',
		comment: 'Same as `display: block grid`.',
	},
	display_inline_grid: {
		declaration: 'display: inline-grid;',
		comment: 'Same as `display: inline grid`.',
	},
	display_ruby: {
		declaration: 'display: ruby;',
		comment: 'Same as `display: inline ruby`.',
	},
	display_block_ruby: {
		declaration: 'display: block ruby;',
		comment: 'Same as `display: block ruby`.',
	},
	display_table: {
		declaration: 'display: table;',
		comment: 'Same as `display: block table`.',
	},
	display_inline_table: {
		declaration: 'display: inline-table;',
		comment: 'Same as `display: inline table`.',
	},
	display_inherit: {declaration: 'display: inherit;'},
	display_initial: {declaration: 'display: initial;'},
	display_revert: {declaration: 'display: revert;'},
	display_revert_layer: {declaration: 'display: revert-layer;'},
	display_unset: {declaration: 'display: unset;'},

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
	/* TODO omitting some values, generating on demand will fill in the gaps */
	align_content_center: {declaration: 'align-content: center;'},
	align_content_start: {declaration: 'align-content: start;'},
	align_content_end: {declaration: 'align-content: end;'},
	align_content_baseline: {declaration: 'align-content: baseline;'},
	align_content_space_between: {declaration: 'align-content: space-between;'},
	align_content_space_around: {declaration: 'align-content: space-around;'},
	align_content_space_evenly: {declaration: 'align-content: space-evenly;'},
	align_content_stretch: {declaration: 'align-content: stretch;'},
	/* TODO omitting some values, generating on demand will fill in the gaps */
	align_self_center: {declaration: 'align-self: center;'},
	align_self_start: {declaration: 'align-self: start;'},
	align_self_end: {declaration: 'align-self: end;'},
	align_self_baseline: {declaration: 'align-self: baseline;'},
	align_self_stretch: {declaration: 'align-self: stretch;'},
	// Justify content
	...generate_property_classes('justify-content', justify_values, undefined, 'justify_content'),
	/* TODO omitting some values, generating on demand will fill in the gaps */
	justify_items_center: {declaration: 'justify-items: center;'},
	justify_items_start: {declaration: 'justify-items: start;'},
	justify_items_end: {declaration: 'justify-items: end;'},
	justify_items_left: {declaration: 'justify-items: left;'},
	justify_items_right: {declaration: 'justify-items: right;'},
	justify_items_baseline: {declaration: 'justify-items: baseline;'},
	justify_items_stretch: {declaration: 'justify-items: stretch;'},
	/* TODO omitting some values, generating on demand will fill in the gaps */
	justify_self_center: {declaration: 'justify-self: center;'},
	justify_self_start: {declaration: 'justify-self: start;'},
	justify_self_end: {declaration: 'justify-self: end;'},
	justify_self_left: {declaration: 'justify-self: left;'},
	justify_self_right: {declaration: 'justify-self: right;'},
	justify_self_baseline: {declaration: 'justify-self: baseline;'},
	justify_self_stretch: {declaration: 'justify-self: stretch;'},
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
		v => (v === '0' || v === '1') ? v : `var(--line_height_${v})`,
		'line_height'
	),
	// Font size
	...generate_property_classes(
		'font-size',
		font_size_variants,
		v => `var(--font_size_${v}); --font_size: var(--font_size_${v})`,
		'font_size'
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
	text_color_0: {declaration: 'color: var(--text_color_0);'},
	text_color_1: {declaration: 'color: var(--text_color_1);'},
	text_color_2: {declaration: 'color: var(--text_color_2);'},
	text_color_3: {declaration: 'color: var(--text_color_3);'},
	text_color_4: {declaration: 'color: var(--text_color_4);'},
	text_color_5: {declaration: 'color: var(--text_color_5);'},
	text_color_6: {declaration: 'color: var(--text_color_6);'},
	text_color_7: {declaration: 'color: var(--text_color_7);'},
	text_color_8: {declaration: 'color: var(--text_color_8);'},
	text_color_9: {declaration: 'color: var(--text_color_9);'},
	text_color_10: {declaration: 'color: var(--text_color_10);'},
	darken_1: {declaration: 'background-color: var(--darken_1);'},
	darken_2: {declaration: 'background-color: var(--darken_2);'},
	darken_3: {declaration: 'background-color: var(--darken_3);'},
	darken_4: {declaration: 'background-color: var(--darken_4);'},
	darken_5: {declaration: 'background-color: var(--darken_5);'},
	darken_6: {declaration: 'background-color: var(--darken_6);'},
	darken_7: {declaration: 'background-color: var(--darken_7);'},
	darken_8: {declaration: 'background-color: var(--darken_8);'},
	darken_9: {declaration: 'background-color: var(--darken_9);'},
	lighten_1: {declaration: 'background-color: var(--lighten_1);'},
	lighten_2: {declaration: 'background-color: var(--lighten_2);'},
	lighten_3: {declaration: 'background-color: var(--lighten_3);'},
	lighten_4: {declaration: 'background-color: var(--lighten_4);'},
	lighten_5: {declaration: 'background-color: var(--lighten_5);'},
	lighten_6: {declaration: 'background-color: var(--lighten_6);'},
	lighten_7: {declaration: 'background-color: var(--lighten_7);'},
	lighten_8: {declaration: 'background-color: var(--lighten_8);'},
	lighten_9: {declaration: 'background-color: var(--lighten_9);'},
	bg: {declaration: 'background-color: var(--bg);'},
	fg: {declaration: 'background-color: var(--fg);'},
	bg_1: {declaration: 'background-color: var(--bg_1);'},
	bg_2: {declaration: 'background-color: var(--bg_2);'},
	bg_3: {declaration: 'background-color: var(--bg_3);'},
	bg_4: {declaration: 'background-color: var(--bg_4);'},
	bg_5: {declaration: 'background-color: var(--bg_5);'},
	bg_6: {declaration: 'background-color: var(--bg_6);'},
	bg_7: {declaration: 'background-color: var(--bg_7);'},
	bg_8: {declaration: 'background-color: var(--bg_8);'},
	bg_9: {declaration: 'background-color: var(--bg_9);'},
	fg_1: {declaration: 'background-color: var(--fg_1);'},
	fg_2: {declaration: 'background-color: var(--fg_2);'},
	fg_3: {declaration: 'background-color: var(--fg_3);'},
	fg_4: {declaration: 'background-color: var(--fg_4);'},
	fg_5: {declaration: 'background-color: var(--fg_5);'},
	fg_6: {declaration: 'background-color: var(--fg_6);'},
	fg_7: {declaration: 'background-color: var(--fg_7);'},
	fg_8: {declaration: 'background-color: var(--fg_8);'},
	fg_9: {declaration: 'background-color: var(--fg_9);'},
	color_darken_1: {declaration: 'color: var(--darken_1);'},
	color_darken_2: {declaration: 'color: var(--darken_2);'},
	color_darken_3: {declaration: 'color: var(--darken_3);'},
	color_darken_4: {declaration: 'color: var(--darken_4);'},
	color_darken_5: {declaration: 'color: var(--darken_5);'},
	color_darken_6: {declaration: 'color: var(--darken_6);'},
	color_darken_7: {declaration: 'color: var(--darken_7);'},
	color_darken_8: {declaration: 'color: var(--darken_8);'},
	color_darken_9: {declaration: 'color: var(--darken_9);'},
	color_lighten_1: {declaration: 'color: var(--lighten_1);'},
	color_lighten_2: {declaration: 'color: var(--lighten_2);'},
	color_lighten_3: {declaration: 'color: var(--lighten_3);'},
	color_lighten_4: {declaration: 'color: var(--lighten_4);'},
	color_lighten_5: {declaration: 'color: var(--lighten_5);'},
	color_lighten_6: {declaration: 'color: var(--lighten_6);'},
	color_lighten_7: {declaration: 'color: var(--lighten_7);'},
	color_lighten_8: {declaration: 'color: var(--lighten_8);'},
	color_lighten_9: {declaration: 'color: var(--lighten_9);'},
	color_bg: {declaration: 'color: var(--bg);'},
	color_fg: {declaration: 'color: var(--fg);'},
	color_bg_1: {declaration: 'color: var(--bg_1);'},
	color_bg_2: {declaration: 'color: var(--bg_2);'},
	color_bg_3: {declaration: 'color: var(--bg_3);'},
	color_bg_4: {declaration: 'color: var(--bg_4);'},
	color_bg_5: {declaration: 'color: var(--bg_5);'},
	color_bg_6: {declaration: 'color: var(--bg_6);'},
	color_bg_7: {declaration: 'color: var(--bg_7);'},
	color_bg_8: {declaration: 'color: var(--bg_8);'},
	color_bg_9: {declaration: 'color: var(--bg_9);'},
	color_fg_1: {declaration: 'color: var(--fg_1);'},
	color_fg_2: {declaration: 'color: var(--fg_2);'},
	color_fg_3: {declaration: 'color: var(--fg_3);'},
	color_fg_4: {declaration: 'color: var(--fg_4);'},
	color_fg_5: {declaration: 'color: var(--fg_5);'},
	color_fg_6: {declaration: 'color: var(--fg_6);'},
	color_fg_7: {declaration: 'color: var(--fg_7);'},
	color_fg_8: {declaration: 'color: var(--fg_8);'},
	color_fg_9: {declaration: 'color: var(--fg_9);'},
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
	color_a_1: {declaration: 'color: var(--color_a_1);'},
	color_a_2: {declaration: 'color: var(--color_a_2);'},
	color_a_3: {declaration: 'color: var(--color_a_3);'},
	color_a_4: {declaration: 'color: var(--color_a_4);'},
	color_a_5: {declaration: 'color: var(--color_a_5);'},
	color_a_6: {declaration: 'color: var(--color_a_6);'},
	color_a_7: {declaration: 'color: var(--color_a_7);'},
	color_a_8: {declaration: 'color: var(--color_a_8);'},
	color_a_9: {declaration: 'color: var(--color_a_9);'},
	color_b_1: {declaration: 'color: var(--color_b_1);'},
	color_b_2: {declaration: 'color: var(--color_b_2);'},
	color_b_3: {declaration: 'color: var(--color_b_3);'},
	color_b_4: {declaration: 'color: var(--color_b_4);'},
	color_b_5: {declaration: 'color: var(--color_b_5);'},
	color_b_6: {declaration: 'color: var(--color_b_6);'},
	color_b_7: {declaration: 'color: var(--color_b_7);'},
	color_b_8: {declaration: 'color: var(--color_b_8);'},
	color_b_9: {declaration: 'color: var(--color_b_9);'},
	color_c_1: {declaration: 'color: var(--color_c_1);'},
	color_c_2: {declaration: 'color: var(--color_c_2);'},
	color_c_3: {declaration: 'color: var(--color_c_3);'},
	color_c_4: {declaration: 'color: var(--color_c_4);'},
	color_c_5: {declaration: 'color: var(--color_c_5);'},
	color_c_6: {declaration: 'color: var(--color_c_6);'},
	color_c_7: {declaration: 'color: var(--color_c_7);'},
	color_c_8: {declaration: 'color: var(--color_c_8);'},
	color_c_9: {declaration: 'color: var(--color_c_9);'},
	color_d_1: {declaration: 'color: var(--color_d_1);'},
	color_d_2: {declaration: 'color: var(--color_d_2);'},
	color_d_3: {declaration: 'color: var(--color_d_3);'},
	color_d_4: {declaration: 'color: var(--color_d_4);'},
	color_d_5: {declaration: 'color: var(--color_d_5);'},
	color_d_6: {declaration: 'color: var(--color_d_6);'},
	color_d_7: {declaration: 'color: var(--color_d_7);'},
	color_d_8: {declaration: 'color: var(--color_d_8);'},
	color_d_9: {declaration: 'color: var(--color_d_9);'},
	color_e_1: {declaration: 'color: var(--color_e_1);'},
	color_e_2: {declaration: 'color: var(--color_e_2);'},
	color_e_3: {declaration: 'color: var(--color_e_3);'},
	color_e_4: {declaration: 'color: var(--color_e_4);'},
	color_e_5: {declaration: 'color: var(--color_e_5);'},
	color_e_6: {declaration: 'color: var(--color_e_6);'},
	color_e_7: {declaration: 'color: var(--color_e_7);'},
	color_e_8: {declaration: 'color: var(--color_e_8);'},
	color_e_9: {declaration: 'color: var(--color_e_9);'},
	color_f_1: {declaration: 'color: var(--color_f_1);'},
	color_f_2: {declaration: 'color: var(--color_f_2);'},
	color_f_3: {declaration: 'color: var(--color_f_3);'},
	color_f_4: {declaration: 'color: var(--color_f_4);'},
	color_f_5: {declaration: 'color: var(--color_f_5);'},
	color_f_6: {declaration: 'color: var(--color_f_6);'},
	color_f_7: {declaration: 'color: var(--color_f_7);'},
	color_f_8: {declaration: 'color: var(--color_f_8);'},
	color_f_9: {declaration: 'color: var(--color_f_9);'},
	color_g_1: {declaration: 'color: var(--color_g_1);'},
	color_g_2: {declaration: 'color: var(--color_g_2);'},
	color_g_3: {declaration: 'color: var(--color_g_3);'},
	color_g_4: {declaration: 'color: var(--color_g_4);'},
	color_g_5: {declaration: 'color: var(--color_g_5);'},
	color_g_6: {declaration: 'color: var(--color_g_6);'},
	color_g_7: {declaration: 'color: var(--color_g_7);'},
	color_g_8: {declaration: 'color: var(--color_g_8);'},
	color_g_9: {declaration: 'color: var(--color_g_9);'},
	color_h_1: {declaration: 'color: var(--color_h_1);'},
	color_h_2: {declaration: 'color: var(--color_h_2);'},
	color_h_3: {declaration: 'color: var(--color_h_3);'},
	color_h_4: {declaration: 'color: var(--color_h_4);'},
	color_h_5: {declaration: 'color: var(--color_h_5);'},
	color_h_6: {declaration: 'color: var(--color_h_6);'},
	color_h_7: {declaration: 'color: var(--color_h_7);'},
	color_h_8: {declaration: 'color: var(--color_h_8);'},
	color_h_9: {declaration: 'color: var(--color_h_9);'},
	color_i_1: {declaration: 'color: var(--color_i_1);'},
	color_i_2: {declaration: 'color: var(--color_i_2);'},
	color_i_3: {declaration: 'color: var(--color_i_3);'},
	color_i_4: {declaration: 'color: var(--color_i_4);'},
	color_i_5: {declaration: 'color: var(--color_i_5);'},
	color_i_6: {declaration: 'color: var(--color_i_6);'},
	color_i_7: {declaration: 'color: var(--color_i_7);'},
	color_i_8: {declaration: 'color: var(--color_i_8);'},
	color_i_9: {declaration: 'color: var(--color_i_9);'},
	color_j_1: {declaration: 'color: var(--color_j_1);'},
	color_j_2: {declaration: 'color: var(--color_j_2);'},
	color_j_3: {declaration: 'color: var(--color_j_3);'},
	color_j_4: {declaration: 'color: var(--color_j_4);'},
	color_j_5: {declaration: 'color: var(--color_j_5);'},
	color_j_6: {declaration: 'color: var(--color_j_6);'},
	color_j_7: {declaration: 'color: var(--color_j_7);'},
	color_j_8: {declaration: 'color: var(--color_j_8);'},
	color_j_9: {declaration: 'color: var(--color_j_9);'},
	// Background colors - all hues × intensities
	...generate_classes(
		(hue: string, intensity: string) => ({
			name: `bg_${hue}_${intensity}`,
			css: `background-color: var(--color_${hue}_${intensity});`,
		}),
		color_variants,
		COLOR_INTENSITIES.slice(0, 9), // 1-9, not including 10
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
		v => v === '0' ? '0' : `var(--border_width_${v})`,
		'border_width'
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
		v => `var(--border_radius_${v})`,
		'border_radius'
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

	/* TODO % variants? */
	t_0: {declaration: 'top: 0;'},
	t_100: {declaration: 'top: 100%;'},
	t_1px: {declaration: 'top: 1px;'},
	t_2px: {declaration: 'top: 2px;'},
	t_3px: {declaration: 'top: 3px;'},
	t_auto: {declaration: 'top: auto;'},
	t_xs5: {declaration: 'top: var(--space_xs5);'},
	t_xs4: {declaration: 'top: var(--space_xs4);'},
	t_xs3: {declaration: 'top: var(--space_xs3);'},
	t_xs2: {declaration: 'top: var(--space_xs2);'},
	t_xs: {declaration: 'top: var(--space_xs);'},
	t_sm: {declaration: 'top: var(--space_sm);'},
	t_md: {declaration: 'top: var(--space_md);'},
	t_lg: {declaration: 'top: var(--space_lg);'},
	t_xl: {declaration: 'top: var(--space_xl);'},
	t_xl2: {declaration: 'top: var(--space_xl2);'},
	t_xl3: {declaration: 'top: var(--space_xl3);'},
	t_xl4: {declaration: 'top: var(--space_xl4);'},
	t_xl5: {declaration: 'top: var(--space_xl5);'},
	t_xl6: {declaration: 'top: var(--space_xl6);'},
	t_xl7: {declaration: 'top: var(--space_xl7);'},
	t_xl8: {declaration: 'top: var(--space_xl8);'},
	t_xl9: {declaration: 'top: var(--space_xl9);'},
	t_xl10: {declaration: 'top: var(--space_xl10);'},
	t_xl11: {declaration: 'top: var(--space_xl11);'},
	t_xl12: {declaration: 'top: var(--space_xl12);'},
	t_xl13: {declaration: 'top: var(--space_xl13);'},
	t_xl14: {declaration: 'top: var(--space_xl14);'},
	t_xl15: {declaration: 'top: var(--space_xl15);'},
	b_0: {declaration: 'bottom: 0;'},
	b_100: {declaration: 'bottom: 100%;'},
	b_1px: {declaration: 'bottom: 1px;'},
	b_2px: {declaration: 'bottom: 2px;'},
	b_3px: {declaration: 'bottom: 3px;'},
	b_auto: {declaration: 'bottom: auto;'},
	b_xs5: {declaration: 'bottom: var(--space_xs5);'},
	b_xs4: {declaration: 'bottom: var(--space_xs4);'},
	b_xs3: {declaration: 'bottom: var(--space_xs3);'},
	b_xs2: {declaration: 'bottom: var(--space_xs2);'},
	b_xs: {declaration: 'bottom: var(--space_xs);'},
	b_sm: {declaration: 'bottom: var(--space_sm);'},
	b_md: {declaration: 'bottom: var(--space_md);'},
	b_lg: {declaration: 'bottom: var(--space_lg);'},
	b_xl: {declaration: 'bottom: var(--space_xl);'},
	b_xl2: {declaration: 'bottom: var(--space_xl2);'},
	b_xl3: {declaration: 'bottom: var(--space_xl3);'},
	b_xl4: {declaration: 'bottom: var(--space_xl4);'},
	b_xl5: {declaration: 'bottom: var(--space_xl5);'},
	b_xl6: {declaration: 'bottom: var(--space_xl6);'},
	b_xl7: {declaration: 'bottom: var(--space_xl7);'},
	b_xl8: {declaration: 'bottom: var(--space_xl8);'},
	b_xl9: {declaration: 'bottom: var(--space_xl9);'},
	b_xl10: {declaration: 'bottom: var(--space_xl10);'},
	b_xl11: {declaration: 'bottom: var(--space_xl11);'},
	b_xl12: {declaration: 'bottom: var(--space_xl12);'},
	b_xl13: {declaration: 'bottom: var(--space_xl13);'},
	b_xl14: {declaration: 'bottom: var(--space_xl14);'},
	b_xl15: {declaration: 'bottom: var(--space_xl15);'},
	l_0: {declaration: 'left: 0;'},
	l_100: {declaration: 'left: 100%;'},
	l_1px: {declaration: 'left: 1px;'},
	l_2px: {declaration: 'left: 2px;'},
	l_3px: {declaration: 'left: 3px;'},
	l_auto: {declaration: 'left: auto;'},
	l_xs5: {declaration: 'left: var(--space_xs5);'},
	l_xs4: {declaration: 'left: var(--space_xs4);'},
	l_xs3: {declaration: 'left: var(--space_xs3);'},
	l_xs2: {declaration: 'left: var(--space_xs2);'},
	l_xs: {declaration: 'left: var(--space_xs);'},
	l_sm: {declaration: 'left: var(--space_sm);'},
	l_md: {declaration: 'left: var(--space_md);'},
	l_lg: {declaration: 'left: var(--space_lg);'},
	l_xl: {declaration: 'left: var(--space_xl);'},
	l_xl2: {declaration: 'left: var(--space_xl2);'},
	l_xl3: {declaration: 'left: var(--space_xl3);'},
	l_xl4: {declaration: 'left: var(--space_xl4);'},
	l_xl5: {declaration: 'left: var(--space_xl5);'},
	l_xl6: {declaration: 'left: var(--space_xl6);'},
	l_xl7: {declaration: 'left: var(--space_xl7);'},
	l_xl8: {declaration: 'left: var(--space_xl8);'},
	l_xl9: {declaration: 'left: var(--space_xl9);'},
	l_xl10: {declaration: 'left: var(--space_xl10);'},
	l_xl11: {declaration: 'left: var(--space_xl11);'},
	l_xl12: {declaration: 'left: var(--space_xl12);'},
	l_xl13: {declaration: 'left: var(--space_xl13);'},
	l_xl14: {declaration: 'left: var(--space_xl14);'},
	l_xl15: {declaration: 'left: var(--space_xl15);'},
	r_0: {declaration: 'right: 0;'},
	r_100: {declaration: 'right: 100%;'},
	r_1px: {declaration: 'right: 1px;'},
	r_2px: {declaration: 'right: 2px;'},
	r_3px: {declaration: 'right: 3px;'},
	r_auto: {declaration: 'right: auto;'},
	r_xs5: {declaration: 'right: var(--space_xs5);'},
	r_xs4: {declaration: 'right: var(--space_xs4);'},
	r_xs3: {declaration: 'right: var(--space_xs3);'},
	r_xs2: {declaration: 'right: var(--space_xs2);'},
	r_xs: {declaration: 'right: var(--space_xs);'},
	r_sm: {declaration: 'right: var(--space_sm);'},
	r_md: {declaration: 'right: var(--space_md);'},
	r_lg: {declaration: 'right: var(--space_lg);'},
	r_xl: {declaration: 'right: var(--space_xl);'},
	r_xl2: {declaration: 'right: var(--space_xl2);'},
	r_xl3: {declaration: 'right: var(--space_xl3);'},
	r_xl4: {declaration: 'right: var(--space_xl4);'},
	r_xl5: {declaration: 'right: var(--space_xl5);'},
	r_xl6: {declaration: 'right: var(--space_xl6);'},
	r_xl7: {declaration: 'right: var(--space_xl7);'},
	r_xl8: {declaration: 'right: var(--space_xl8);'},
	r_xl9: {declaration: 'right: var(--space_xl9);'},
	r_xl10: {declaration: 'right: var(--space_xl10);'},
	r_xl11: {declaration: 'right: var(--space_xl11);'},
	r_xl12: {declaration: 'right: var(--space_xl12);'},
	r_xl13: {declaration: 'right: var(--space_xl13);'},
	r_xl14: {declaration: 'right: var(--space_xl14);'},
	r_xl15: {declaration: 'right: var(--space_xl15);'},

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
