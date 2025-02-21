import type {Css_Class_Declaration} from '$lib/css_class_helpers.js';

// TODO support iterpretable class names, for e.g. arbitrary numbers - lots here, UnoCSS is similar

// TODO add animation support, either as a separate thing or rename `css_classes_by_name` to be more generic, like `css_by_name` - need to collect `animation: foo ...` names like we do classes

// TODO think about variable support (much harder problem, need dependency graph)
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
	width_lg: {
		ruleset: `
			.width_lg {
				width: 100%;
				max-width: var(--width_lg);
			}
		`,
	},
	width_md: {
		ruleset: `
			.width_md {
				width: 100%;
				max-width: var(--width_md);
			}
		`,
	},
	width_sm: {
		ruleset: `
			.width_sm {
				width: 100%;
				max-width: var(--width_sm);
			}
		`,
	},
	width_xs: {
		ruleset: `
			.width_xs {
				width: 100%;
				max-width: var(--width_xs);
			}
		`,
	},
	min_width_lg: {
		ruleset: `
			.min_width_lg {
				width: 100%;
				min-width: var(--width_lg);
			}
		`,
	},
	min_width_md: {
		ruleset: `
			.min_width_md {
				width: 100%;
				min-width: var(--width_md);
			}
		`,
	},
	min_width_sm: {
		ruleset: `
			.min_width_sm {
				width: 100%;
				min-width: var(--width_sm);
			}
		`,
	},
	min_width_xs: {
		ruleset: `
			.min_width_xs {
				width: 100%;
				min-width: var(--width_xs);
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
				border-radius: var(--radius_xs);
			}
		`,
	},
	panel: {
		ruleset: `
			/* A panel is a box embedded into the page, useful for visually isolating content. */
			.panel {
				border-radius: var(--radius_xs);
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
				font-weight: 900;
				padding: 0;
			}
		`,
	},
	plain: {
		ruleset: `
			/* TODO maybe this belongs with the reset, like \`selected\`? or does \`selected\` belong here? */
			.plain:not(:hover) {
				border-color: transparent;
				box-shadow: none;
				--button_fill: transparent;
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
				font-weight: 600;
				padding: var(--space_xs5) var(--space_sm); /* maybe different inside \`p\`? using \`calc\` with \`--size\`? */
				background-color: var(--fg_1);
				border-radius: var(--radius_xs);
			}
			a.chip {
				font-weight: 700;
			}
		`,
	},
	pre: {
		// keep in sync with `pre` styling in `style.css`, except the `.inline` exception
		ruleset: `
			.pre {
				font-family: var(--font_mono);
				color: var(--text_color, var(--text_color_3));
				overflow: auto;
				max-width: 100%;
			}
			.pre > code {
				font-size: var(--size_sm); /* TODO @many use a var? maybe computed from generic \`--size\`? */
				font-weight: 500;
			}
			.pre:not(.inline) > code {
				display: block;
			}
		`,
	},

	relative: {declaration: 'position: relative;'},
	absolute: {declaration: 'position: absolute;'},
	fixed: {declaration: 'position: fixed;'},
	sticky: {declaration: 'position: sticky;'},
	static: {declaration: 'position: static;'},
	overflow_auto: {declaration: 'overflow: auto;'},
	overflow_hidden: {declaration: 'overflow: hidden;'},
	overflow_scroll: {declaration: 'overflow: scroll;'},
	overflow_clip: {declaration: 'overflow: clip;'},
	overflow_visible: {declaration: 'overflow: visible;'},
	overflow_x_auto: {declaration: 'overflow-x: auto;'},
	overflow_x_hidden: {declaration: 'overflow-x: hidden;'},
	overflow_x_scroll: {declaration: 'overflow-x: scroll;'},
	overflow_x_clip: {declaration: 'overflow-x: clip;'},
	overflow_x_visible: {declaration: 'overflow-x: visible;'},
	overflow_y_auto: {declaration: 'overflow-y: auto;'},
	overflow_y_hidden: {declaration: 'overflow-y: hidden;'},
	overflow_y_scroll: {declaration: 'overflow-y: scroll;'},
	overflow_y_clip: {declaration: 'overflow-y: clip;'},
	overflow_y_visible: {declaration: 'overflow-y: visible;'},
	overflow_wrap_anywhere: {declaration: 'overflow-wrap: anywhere;'},
	overflow_wrap_break_word: {declaration: 'overflow-wrap: break-word;'},

	/* these include the longhand `display_` because they're less common and would be more ambiguous */
	display_none: {declaration: 'display: none;'},
	display_contents: {declaration: 'display: contents;'},
	/* TODO others like `list-item` and `table` variants? after optimizing, sure - https://developer.mozilla.org/en-US/docs/Web/CSS/display */
	inline: {declaration: 'display: inline;'},
	inline_block: {declaration: 'display: inline-block;'},
	inline_flex: {declaration: 'display: inline-flex;'},
	inline_grid: {declaration: 'display: inline-grid;'},
	block: {declaration: 'display: block;'},

	/* TODO lots of these, but optimize first? .display_table {
	display: table;
} */
	flex: {declaration: 'display: flex;'},
	flex_1: {declaration: 'flex: 1;'},
	flex_wrap: {declaration: 'flex-wrap: wrap;'},
	flex_wrap_reverse: {declaration: 'flex-wrap: wrap-reverse;'},
	flex_nowrap: {declaration: 'flex-wrap: nowrap;'},
	flex_row: {declaration: 'flex-direction: row;'},
	flex_row_reverse: {declaration: 'flex-direction: row-reverse;'},
	flex_column: {declaration: 'flex-direction: column;'},
	flex_column_reverse: {declaration: 'flex-direction: column-reverse;'},
	grow: {declaration: 'flex-grow: 1;'},
	grow_0: {declaration: 'flex-grow: 0;'},
	shrink: {declaration: 'flex-shrink: 1;'},
	shrink_0: {declaration: 'flex-shrink: 0;'},

	/* TODO omitting some values, generating on demand will fill in the gaps */
	align_items_center: {declaration: 'align-items: center;'},
	align_items_start: {declaration: 'align-items: start;'},
	align_items_end: {declaration: 'align-items: end;'},
	align_items_baseline: {declaration: 'align-items: baseline;'},
	align_items_stretch: {declaration: 'align-items: stretch;'},
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
	/* TODO omitting some values, generating on demand will fill in the gaps */
	justify_content_center: {declaration: 'justify-content: center;'},
	justify_content_start: {declaration: 'justify-content: start;'},
	justify_content_end: {declaration: 'justify-content: end;'},
	justify_content_left: {declaration: 'justify-content: left;'},
	justify_content_right: {declaration: 'justify-content: right;'},
	justify_content_space_between: {declaration: 'justify-content: space-between;'},
	justify_content_space_around: {declaration: 'justify-content: space-around;'},
	justify_content_space_evenly: {declaration: 'justify-content: space-evenly;'},
	justify_content_stretch: {declaration: 'justify-content: stretch;'},
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
	grid: {declaration: 'display: grid;'},
	float_none: {declaration: 'float: none;'},
	float_left: {declaration: 'float: left;'},
	float_right: {declaration: 'float: right;'},
	float_inline_start: {declaration: 'float: inline-start;'},
	float_inline_end: {declaration: 'float: inline-end;'},
	flip_x: {declaration: 'transform: scaleX(-1);'},
	flip_y: {declaration: 'transform: scaleY(-1);'},
	flip_xy: {declaration: 'transform: scaleX(-1) scaleY(-1);'},

	font_sans: {declaration: 'font-family: var(--font_sans);'},
	font_mono: {declaration: 'font-family: var(--font_mono);'},
	line_height_0: {declaration: 'line-height: 0;'},
	line_height_1: {declaration: 'line-height: 1;'},
	line_height_xs: {declaration: 'line-height: var(--line_height_xs);'},
	line_height_sm: {declaration: 'line-height: var(--line_height_sm);'},
	line_height_md: {declaration: 'line-height: var(--line_height_md);'},
	line_height_lg: {declaration: 'line-height: var(--line_height_lg);'},
	line_height_xl: {declaration: 'line-height: var(--line_height_xl);'},
	size_xs: {declaration: 'font-size: var(--size_xs);'},
	size_sm: {declaration: 'font-size: var(--size_sm);'},
	size_md: {declaration: 'font-size: var(--size_md);'},
	size_lg: {declaration: 'font-size: var(--size_lg);'},
	size_xl: {declaration: 'font-size: var(--size_xl);'},
	size_xl2: {declaration: 'font-size: var(--size_xl2);'},
	size_xl3: {declaration: 'font-size: var(--size_xl3);'},
	size_xl4: {declaration: 'font-size: var(--size_xl4);'},
	size_xl5: {declaration: 'font-size: var(--size_xl5);'},
	size_xl6: {declaration: 'font-size: var(--size_xl6);'},
	size_xl7: {declaration: 'font-size: var(--size_xl7);'},
	size_xl8: {declaration: 'font-size: var(--size_xl8);'},
	size_xl9: {declaration: 'font-size: var(--size_xl9);'},
	icon_size_xs: {declaration: 'font-size: var(--icon_size_xs);'},
	icon_size_sm: {declaration: 'font-size: var(--icon_size_sm);'},
	icon_size_md: {declaration: 'font-size: var(--icon_size_md);'},
	icon_size_lg: {declaration: 'font-size: var(--icon_size_lg);'},
	icon_size_xl: {declaration: 'font-size: var(--icon_size_xl);'},
	icon_size_xl2: {declaration: 'font-size: var(--icon_size_xl2);'},
	icon_size_xl3: {declaration: 'font-size: var(--icon_size_xl3);'},
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

	/* TODO maybe use `initial` here instead of being consistent? because it looks weird */
	text_wrap_wrap: {declaration: 'text-wrap: wrap;'},
	text_wrap_nowrap: {declaration: 'text-wrap: nowrap;'},
	text_wrap_balance: {declaration: 'text-wrap: balance;'},
	text_wrap_pretty: {declaration: 'text-wrap: pretty;'},
	text_wrap_stable: {declaration: 'text-wrap: stable;'},
	ellipsis: {
		declaration: 'display: block;	white-space: nowrap;	overflow: hidden;	text-overflow: ellipsis;',
	},
	font_weight_100: {declaration: 'font-weight: 100;'},
	font_weight_200: {declaration: 'font-weight: 200;'},
	font_weight_300: {declaration: 'font-weight: 300;'},
	font_weight_400: {declaration: 'font-weight: 400;'},
	font_weight_500: {declaration: 'font-weight: 500;'},
	font_weight_600: {declaration: 'font-weight: 600;'},
	font_weight_700: {declaration: 'font-weight: 700;'},
	font_weight_800: {declaration: 'font-weight: 800;'},
	font_weight_900: {declaration: 'font-weight: 900;'},

	/*/

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
	bg_a_1: {declaration: 'background-color: var(--color_a_1);'},
	bg_a_2: {declaration: 'background-color: var(--color_a_2);'},
	bg_a_3: {declaration: 'background-color: var(--color_a_3);'},
	bg_a_4: {declaration: 'background-color: var(--color_a_4);'},
	bg_a_5: {declaration: 'background-color: var(--color_a_5);'},
	bg_a_6: {declaration: 'background-color: var(--color_a_6);'},
	bg_a_7: {declaration: 'background-color: var(--color_a_7);'},
	bg_a_8: {declaration: 'background-color: var(--color_a_8);'},
	bg_a_9: {declaration: 'background-color: var(--color_a_9);'},
	bg_b_1: {declaration: 'background-color: var(--color_b_1);'},
	bg_b_2: {declaration: 'background-color: var(--color_b_2);'},
	bg_b_3: {declaration: 'background-color: var(--color_b_3);'},
	bg_b_4: {declaration: 'background-color: var(--color_b_4);'},
	bg_b_5: {declaration: 'background-color: var(--color_b_5);'},
	bg_b_6: {declaration: 'background-color: var(--color_b_6);'},
	bg_b_7: {declaration: 'background-color: var(--color_b_7);'},
	bg_b_8: {declaration: 'background-color: var(--color_b_8);'},
	bg_b_9: {declaration: 'background-color: var(--color_b_9);'},
	bg_c_1: {declaration: 'background-color: var(--color_c_1);'},
	bg_c_2: {declaration: 'background-color: var(--color_c_2);'},
	bg_c_3: {declaration: 'background-color: var(--color_c_3);'},
	bg_c_4: {declaration: 'background-color: var(--color_c_4);'},
	bg_c_5: {declaration: 'background-color: var(--color_c_5);'},
	bg_c_6: {declaration: 'background-color: var(--color_c_6);'},
	bg_c_7: {declaration: 'background-color: var(--color_c_7);'},
	bg_c_8: {declaration: 'background-color: var(--color_c_8);'},
	bg_c_9: {declaration: 'background-color: var(--color_c_9);'},
	bg_d_1: {declaration: 'background-color: var(--color_d_1);'},
	bg_d_2: {declaration: 'background-color: var(--color_d_2);'},
	bg_d_3: {declaration: 'background-color: var(--color_d_3);'},
	bg_d_4: {declaration: 'background-color: var(--color_d_4);'},
	bg_d_5: {declaration: 'background-color: var(--color_d_5);'},
	bg_d_6: {declaration: 'background-color: var(--color_d_6);'},
	bg_d_7: {declaration: 'background-color: var(--color_d_7);'},
	bg_d_8: {declaration: 'background-color: var(--color_d_8);'},
	bg_d_9: {declaration: 'background-color: var(--color_d_9);'},
	bg_e_1: {declaration: 'background-color: var(--color_e_1);'},
	bg_e_2: {declaration: 'background-color: var(--color_e_2);'},
	bg_e_3: {declaration: 'background-color: var(--color_e_3);'},
	bg_e_4: {declaration: 'background-color: var(--color_e_4);'},
	bg_e_5: {declaration: 'background-color: var(--color_e_5);'},
	bg_e_6: {declaration: 'background-color: var(--color_e_6);'},
	bg_e_7: {declaration: 'background-color: var(--color_e_7);'},
	bg_e_8: {declaration: 'background-color: var(--color_e_8);'},
	bg_e_9: {declaration: 'background-color: var(--color_e_9);'},
	bg_f_1: {declaration: 'background-color: var(--color_f_1);'},
	bg_f_2: {declaration: 'background-color: var(--color_f_2);'},
	bg_f_3: {declaration: 'background-color: var(--color_f_3);'},
	bg_f_4: {declaration: 'background-color: var(--color_f_4);'},
	bg_f_5: {declaration: 'background-color: var(--color_f_5);'},
	bg_f_6: {declaration: 'background-color: var(--color_f_6);'},
	bg_f_7: {declaration: 'background-color: var(--color_f_7);'},
	bg_f_8: {declaration: 'background-color: var(--color_f_8);'},
	bg_f_9: {declaration: 'background-color: var(--color_f_9);'},
	bg_g_1: {declaration: 'background-color: var(--color_g_1);'},
	bg_g_2: {declaration: 'background-color: var(--color_g_2);'},
	bg_g_3: {declaration: 'background-color: var(--color_g_3);'},
	bg_g_4: {declaration: 'background-color: var(--color_g_4);'},
	bg_g_5: {declaration: 'background-color: var(--color_g_5);'},
	bg_g_6: {declaration: 'background-color: var(--color_g_6);'},
	bg_g_7: {declaration: 'background-color: var(--color_g_7);'},
	bg_g_8: {declaration: 'background-color: var(--color_g_8);'},
	bg_g_9: {declaration: 'background-color: var(--color_g_9);'},
	bg_h_1: {declaration: 'background-color: var(--color_h_1);'},
	bg_h_2: {declaration: 'background-color: var(--color_h_2);'},
	bg_h_3: {declaration: 'background-color: var(--color_h_3);'},
	bg_h_4: {declaration: 'background-color: var(--color_h_4);'},
	bg_h_5: {declaration: 'background-color: var(--color_h_5);'},
	bg_h_6: {declaration: 'background-color: var(--color_h_6);'},
	bg_h_7: {declaration: 'background-color: var(--color_h_7);'},
	bg_h_8: {declaration: 'background-color: var(--color_h_8);'},
	bg_h_9: {declaration: 'background-color: var(--color_h_9);'},
	bg_i_1: {declaration: 'background-color: var(--color_i_1);'},
	bg_i_2: {declaration: 'background-color: var(--color_i_2);'},
	bg_i_3: {declaration: 'background-color: var(--color_i_3);'},
	bg_i_4: {declaration: 'background-color: var(--color_i_4);'},
	bg_i_5: {declaration: 'background-color: var(--color_i_5);'},
	bg_i_6: {declaration: 'background-color: var(--color_i_6);'},
	bg_i_7: {declaration: 'background-color: var(--color_i_7);'},
	bg_i_8: {declaration: 'background-color: var(--color_i_8);'},
	bg_i_9: {declaration: 'background-color: var(--color_i_9);'},
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
	border_color_transparent: {declaration: 'border-color: transparent;'},
	border_width_0: {declaration: 'border-width: 0;'},
	border_width_1: {declaration: 'border-width: var(--border_width_1);'},
	border_width_2: {declaration: 'border-width: var(--border_width_2);'},
	border_width_3: {declaration: 'border-width: var(--border_width_3);'},
	border_width_4: {declaration: 'border-width: var(--border_width_4);'},
	border_width_5: {declaration: 'border-width: var(--border_width_5);'},
	border_width_6: {declaration: 'border-width: var(--border_width_6);'},
	outline_width_0: {declaration: 'outline-width: 0;'},
	outline_width_1: {declaration: 'outline-width: var(--outline_width_1);'},
	outline_width_2: {declaration: 'outline-width: var(--outline_width_2);'},
	outline_width_3: {declaration: 'outline-width: var(--outline_width_3);'},

	/* TODO add the top/right/bottom/left variants */
	/* @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-style */
	border_none: {declaration: 'border-style: none;'},
	border_hidden: {declaration: 'border-style: hidden;'},
	border_dotted: {declaration: 'border-style: dotted;'},
	border_dashed: {declaration: 'border-style: dashed;'},
	border_solid: {declaration: 'border-style: solid;'},
	border_double: {declaration: 'border-style: double;'},
	border_groove: {declaration: 'border-style: groove;'},
	border_ridge: {declaration: 'border-style: ridge;'},
	border_inset: {declaration: 'border-style: inset;'},
	border_outset: {declaration: 'border-style: outset;'},
	radius_100: {declaration: 'border-radius: 100%;'},
	radius_50: {declaration: 'border-radius: 50%;'},
	radius_0: {declaration: 'border-radius: 0;'},
	radius_xs3: {declaration: 'border-radius: var(--radius_xs3);'},
	radius_xs2: {declaration: 'border-radius: var(--radius_xs2);'},
	radius_xs: {declaration: 'border-radius: var(--radius_xs);'},
	radius_sm: {declaration: 'border-radius: var(--radius_sm);'},
	radius_md: {declaration: 'border-radius: var(--radius_md);'},
	radius_lg: {declaration: 'border-radius: var(--radius_lg);'},
	radius_xl: {declaration: 'border-radius: var(--radius_xl);'},

	/*

shading

*/
	fade_0: {declaration: 'opacity: 0;'},
	fade_100: {declaration: 'opacity: 1;'},
	fade_1: {declaration: 'opacity: var(--fade_1);'},
	fade_2: {declaration: 'opacity: var(--fade_2);'},
	fade_3: {declaration: 'opacity: var(--fade_3);'},
	fade_4: {declaration: 'opacity: var(--fade_4);'},
	fade_5: {declaration: 'opacity: var(--fade_5);'},
	fade_6: {declaration: 'opacity: var(--fade_6);'},

	/*/

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
	shadow_alpha_1: {declaration: '--shadow_alpha: var(--shadow_alpha_1);'},
	shadow_alpha_2: {declaration: '--shadow_alpha: var(--shadow_alpha_2);'},
	shadow_alpha_3: {declaration: '--shadow_alpha: var(--shadow_alpha_3);'},
	shadow_alpha_4: {declaration: '--shadow_alpha: var(--shadow_alpha_4);'},
	shadow_alpha_5: {declaration: '--shadow_alpha: var(--shadow_alpha_5);'},

	/* higher specificity */
	/* TODO which order should these be in? */
	shadow_inherit: {declaration: 'box-shadow: inherit;'},
	shadow_none: {declaration: 'box-shadow: none;'},

	/*/

layout

*/
	w_0: {declaration: 'width: 0;'},
	w_100: {declaration: 'width: 100%;'},
	w_auto: {declaration: 'width: auto;'},
	w_max_content: {declaration: 'width: max-content;'},
	w_min_content: {declaration: 'width: min-content;'},
	w_fit_content: {declaration: 'width: fit-content;'},
	w_stretch: {declaration: 'width: stretch;'},
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
	h_auto: {declaration: 'height: auto;'},
	h_max_content: {declaration: 'height: max-content;'},
	h_min_content: {declaration: 'height: min-content;'},
	h_fit_content: {declaration: 'height: fit-content;'},
	h_stretch: {declaration: 'height: stretch;'},
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
	t_auto: {declaration: 'top: auto;'},
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
	b_auto: {declaration: 'bottom: auto;'},
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
	l_auto: {declaration: 'left: auto;'},
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
	r_auto: {declaration: 'right: auto;'},
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
	p_0: {declaration: 'padding: 0;'},
	p_xs5: {declaration: 'padding: var(--space_xs5);'},
	p_xs4: {declaration: 'padding: var(--space_xs4);'},
	p_xs3: {declaration: 'padding: var(--space_xs3);'},
	p_xs2: {declaration: 'padding: var(--space_xs2);'},
	p_xs: {declaration: 'padding: var(--space_xs);'},
	p_sm: {declaration: 'padding: var(--space_sm);'},
	p_md: {declaration: 'padding: var(--space_md);'},
	p_lg: {declaration: 'padding: var(--space_lg);'},
	p_xl: {declaration: 'padding: var(--space_xl);'},
	p_xl2: {declaration: 'padding: var(--space_xl2);'},
	p_xl3: {declaration: 'padding: var(--space_xl3);'},
	p_xl4: {declaration: 'padding: var(--space_xl4);'},
	p_xl5: {declaration: 'padding: var(--space_xl5);'},
	p_xl6: {declaration: 'padding: var(--space_xl6);'},
	p_xl7: {declaration: 'padding: var(--space_xl7);'},
	p_xl8: {declaration: 'padding: var(--space_xl8);'},
	p_xl9: {declaration: 'padding: var(--space_xl9);'},
	p_xl10: {declaration: 'padding: var(--space_xl10);'},
	p_xl11: {declaration: 'padding: var(--space_xl11);'},
	p_xl12: {declaration: 'padding: var(--space_xl12);'},
	p_xl13: {declaration: 'padding: var(--space_xl13);'},
	p_xl14: {declaration: 'padding: var(--space_xl14);'},
	p_xl15: {declaration: 'padding: var(--space_xl15);'},
	pt_0: {declaration: 'padding-top: 0;'},
	pt_xs5: {declaration: 'padding-top: var(--space_xs5);'},
	pt_xs4: {declaration: 'padding-top: var(--space_xs4);'},
	pt_xs3: {declaration: 'padding-top: var(--space_xs3);'},
	pt_xs2: {declaration: 'padding-top: var(--space_xs2);'},
	pt_xs: {declaration: 'padding-top: var(--space_xs);'},
	pt_sm: {declaration: 'padding-top: var(--space_sm);'},
	pt_md: {declaration: 'padding-top: var(--space_md);'},
	pt_lg: {declaration: 'padding-top: var(--space_lg);'},
	pt_xl: {declaration: 'padding-top: var(--space_xl);'},
	pt_xl2: {declaration: 'padding-top: var(--space_xl2);'},
	pt_xl3: {declaration: 'padding-top: var(--space_xl3);'},
	pt_xl4: {declaration: 'padding-top: var(--space_xl4);'},
	pt_xl5: {declaration: 'padding-top: var(--space_xl5);'},
	pt_xl6: {declaration: 'padding-top: var(--space_xl6);'},
	pt_xl7: {declaration: 'padding-top: var(--space_xl7);'},
	pt_xl8: {declaration: 'padding-top: var(--space_xl8);'},
	pt_xl9: {declaration: 'padding-top: var(--space_xl9);'},
	pt_xl10: {declaration: 'padding-top: var(--space_xl10);'},
	pt_xl11: {declaration: 'padding-top: var(--space_xl11);'},
	pt_xl12: {declaration: 'padding-top: var(--space_xl12);'},
	pt_xl13: {declaration: 'padding-top: var(--space_xl13);'},
	pt_xl14: {declaration: 'padding-top: var(--space_xl14);'},
	pt_xl15: {declaration: 'padding-top: var(--space_xl15);'},
	pr_0: {declaration: 'padding-right: 0;'},
	pr_xs5: {declaration: 'padding-right: var(--space_xs5);'},
	pr_xs4: {declaration: 'padding-right: var(--space_xs4);'},
	pr_xs3: {declaration: 'padding-right: var(--space_xs3);'},
	pr_xs2: {declaration: 'padding-right: var(--space_xs2);'},
	pr_xs: {declaration: 'padding-right: var(--space_xs);'},
	pr_sm: {declaration: 'padding-right: var(--space_sm);'},
	pr_md: {declaration: 'padding-right: var(--space_md);'},
	pr_lg: {declaration: 'padding-right: var(--space_lg);'},
	pr_xl: {declaration: 'padding-right: var(--space_xl);'},
	pr_xl2: {declaration: 'padding-right: var(--space_xl2);'},
	pr_xl3: {declaration: 'padding-right: var(--space_xl3);'},
	pr_xl4: {declaration: 'padding-right: var(--space_xl4);'},
	pr_xl5: {declaration: 'padding-right: var(--space_xl5);'},
	pr_xl6: {declaration: 'padding-right: var(--space_xl6);'},
	pr_xl7: {declaration: 'padding-right: var(--space_xl7);'},
	pr_xl8: {declaration: 'padding-right: var(--space_xl8);'},
	pr_xl9: {declaration: 'padding-right: var(--space_xl9);'},
	pr_xl10: {declaration: 'padding-right: var(--space_xl10);'},
	pr_xl11: {declaration: 'padding-right: var(--space_xl11);'},
	pr_xl12: {declaration: 'padding-right: var(--space_xl12);'},
	pr_xl13: {declaration: 'padding-right: var(--space_xl13);'},
	pr_xl14: {declaration: 'padding-right: var(--space_xl14);'},
	pr_xl15: {declaration: 'padding-right: var(--space_xl15);'},
	pb_0: {declaration: 'padding-bottom: 0;'},
	pb_xs5: {declaration: 'padding-bottom: var(--space_xs5);'},
	pb_xs4: {declaration: 'padding-bottom: var(--space_xs4);'},
	pb_xs3: {declaration: 'padding-bottom: var(--space_xs3);'},
	pb_xs2: {declaration: 'padding-bottom: var(--space_xs2);'},
	pb_xs: {declaration: 'padding-bottom: var(--space_xs);'},
	pb_sm: {declaration: 'padding-bottom: var(--space_sm);'},
	pb_md: {declaration: 'padding-bottom: var(--space_md);'},
	pb_lg: {declaration: 'padding-bottom: var(--space_lg);'},
	pb_xl: {declaration: 'padding-bottom: var(--space_xl);'},
	pb_xl2: {declaration: 'padding-bottom: var(--space_xl2);'},
	pb_xl3: {declaration: 'padding-bottom: var(--space_xl3);'},
	pb_xl4: {declaration: 'padding-bottom: var(--space_xl4);'},
	pb_xl5: {declaration: 'padding-bottom: var(--space_xl5);'},
	pb_xl6: {declaration: 'padding-bottom: var(--space_xl6);'},
	pb_xl7: {declaration: 'padding-bottom: var(--space_xl7);'},
	pb_xl8: {declaration: 'padding-bottom: var(--space_xl8);'},
	pb_xl9: {declaration: 'padding-bottom: var(--space_xl9);'},
	pb_xl10: {declaration: 'padding-bottom: var(--space_xl10);'},
	pb_xl11: {declaration: 'padding-bottom: var(--space_xl11);'},
	pb_xl12: {declaration: 'padding-bottom: var(--space_xl12);'},
	pb_xl13: {declaration: 'padding-bottom: var(--space_xl13);'},
	pb_xl14: {declaration: 'padding-bottom: var(--space_xl14);'},
	pb_xl15: {declaration: 'padding-bottom: var(--space_xl15);'},
	pl_0: {declaration: 'padding-left: 0;'},
	pl_xs5: {declaration: 'padding-left: var(--space_xs5);'},
	pl_xs4: {declaration: 'padding-left: var(--space_xs4);'},
	pl_xs3: {declaration: 'padding-left: var(--space_xs3);'},
	pl_xs2: {declaration: 'padding-left: var(--space_xs2);'},
	pl_xs: {declaration: 'padding-left: var(--space_xs);'},
	pl_sm: {declaration: 'padding-left: var(--space_sm);'},
	pl_md: {declaration: 'padding-left: var(--space_md);'},
	pl_lg: {declaration: 'padding-left: var(--space_lg);'},
	pl_xl: {declaration: 'padding-left: var(--space_xl);'},
	pl_xl2: {declaration: 'padding-left: var(--space_xl2);'},
	pl_xl3: {declaration: 'padding-left: var(--space_xl3);'},
	pl_xl4: {declaration: 'padding-left: var(--space_xl4);'},
	pl_xl5: {declaration: 'padding-left: var(--space_xl5);'},
	pl_xl6: {declaration: 'padding-left: var(--space_xl6);'},
	pl_xl7: {declaration: 'padding-left: var(--space_xl7);'},
	pl_xl8: {declaration: 'padding-left: var(--space_xl8);'},
	pl_xl9: {declaration: 'padding-left: var(--space_xl9);'},
	pl_xl10: {declaration: 'padding-left: var(--space_xl10);'},
	pl_xl11: {declaration: 'padding-left: var(--space_xl11);'},
	pl_xl12: {declaration: 'padding-left: var(--space_xl12);'},
	pl_xl13: {declaration: 'padding-left: var(--space_xl13);'},
	pl_xl14: {declaration: 'padding-left: var(--space_xl14);'},
	pl_xl15: {declaration: 'padding-left: var(--space_xl15);'},
	px_0: {declaration: 'padding-left: 0;	padding-right: 0;'},
	px_xs5: {declaration: 'padding-left: var(--space_xs5);	padding-right: var(--space_xs5);'},
	px_xs4: {declaration: 'padding-left: var(--space_xs4);	padding-right: var(--space_xs4);'},
	px_xs3: {declaration: 'padding-left: var(--space_xs3);	padding-right: var(--space_xs3);'},
	px_xs2: {declaration: 'padding-left: var(--space_xs2);	padding-right: var(--space_xs2);'},
	px_xs: {declaration: 'padding-left: var(--space_xs);	padding-right: var(--space_xs);'},
	px_sm: {declaration: 'padding-left: var(--space_sm);	padding-right: var(--space_sm);'},
	px_md: {declaration: 'padding-left: var(--space_md);	padding-right: var(--space_md);'},
	px_lg: {declaration: 'padding-left: var(--space_lg);	padding-right: var(--space_lg);'},
	px_xl: {declaration: 'padding-left: var(--space_xl);	padding-right: var(--space_xl);'},
	px_xl2: {declaration: 'padding-left: var(--space_xl2);	padding-right: var(--space_xl2);'},
	px_xl3: {declaration: 'padding-left: var(--space_xl3);	padding-right: var(--space_xl3);'},
	px_xl4: {declaration: 'padding-left: var(--space_xl4);	padding-right: var(--space_xl4);'},
	px_xl5: {declaration: 'padding-left: var(--space_xl5);	padding-right: var(--space_xl5);'},
	px_xl6: {declaration: 'padding-left: var(--space_xl6);	padding-right: var(--space_xl6);'},
	px_xl7: {declaration: 'padding-left: var(--space_xl7);	padding-right: var(--space_xl7);'},
	px_xl8: {declaration: 'padding-left: var(--space_xl8);	padding-right: var(--space_xl8);'},
	px_xl9: {declaration: 'padding-left: var(--space_xl9);	padding-right: var(--space_xl9);'},
	px_xl10: {declaration: 'padding-left: var(--space_xl10);	padding-right: var(--space_xl10);'},
	px_xl11: {declaration: 'padding-left: var(--space_xl11);	padding-right: var(--space_xl11);'},
	px_xl12: {declaration: 'padding-left: var(--space_xl12);	padding-right: var(--space_xl12);'},
	px_xl13: {declaration: 'padding-left: var(--space_xl13);	padding-right: var(--space_xl13);'},
	px_xl14: {declaration: 'padding-left: var(--space_xl14);	padding-right: var(--space_xl14);'},
	px_xl15: {declaration: 'padding-left: var(--space_xl15);	padding-right: var(--space_xl15);'},
	py_0: {declaration: 'padding-top: 0;	padding-bottom: 0;'},
	py_xs5: {declaration: 'padding-top: var(--space_xs5);	padding-bottom: var(--space_xs5);'},
	py_xs4: {declaration: 'padding-top: var(--space_xs4);	padding-bottom: var(--space_xs4);'},
	py_xs3: {declaration: 'padding-top: var(--space_xs3);	padding-bottom: var(--space_xs3);'},
	py_xs2: {declaration: 'padding-top: var(--space_xs2);	padding-bottom: var(--space_xs2);'},
	py_xs: {declaration: 'padding-top: var(--space_xs);	padding-bottom: var(--space_xs);'},
	py_sm: {declaration: 'padding-top: var(--space_sm);	padding-bottom: var(--space_sm);'},
	py_md: {declaration: 'padding-top: var(--space_md);	padding-bottom: var(--space_md);'},
	py_lg: {declaration: 'padding-top: var(--space_lg);	padding-bottom: var(--space_lg);'},
	py_xl: {declaration: 'padding-top: var(--space_xl);	padding-bottom: var(--space_xl);'},
	py_xl2: {declaration: 'padding-top: var(--space_xl2);	padding-bottom: var(--space_xl2);'},
	py_xl3: {declaration: 'padding-top: var(--space_xl3);	padding-bottom: var(--space_xl3);'},
	py_xl4: {declaration: 'padding-top: var(--space_xl4);	padding-bottom: var(--space_xl4);'},
	py_xl5: {declaration: 'padding-top: var(--space_xl5);	padding-bottom: var(--space_xl5);'},
	py_xl6: {declaration: 'padding-top: var(--space_xl6);	padding-bottom: var(--space_xl6);'},
	py_xl7: {declaration: 'padding-top: var(--space_xl7);	padding-bottom: var(--space_xl7);'},
	py_xl8: {declaration: 'padding-top: var(--space_xl8);	padding-bottom: var(--space_xl8);'},
	py_xl9: {declaration: 'padding-top: var(--space_xl9);	padding-bottom: var(--space_xl9);'},
	py_xl10: {declaration: 'padding-top: var(--space_xl10);	padding-bottom: var(--space_xl10);'},
	py_xl11: {declaration: 'padding-top: var(--space_xl11);	padding-bottom: var(--space_xl11);'},
	py_xl12: {declaration: 'padding-top: var(--space_xl12);	padding-bottom: var(--space_xl12);'},
	py_xl13: {declaration: 'padding-top: var(--space_xl13);	padding-bottom: var(--space_xl13);'},
	py_xl14: {declaration: 'padding-top: var(--space_xl14);	padding-bottom: var(--space_xl14);'},
	py_xl15: {declaration: 'padding-top: var(--space_xl15);	padding-bottom: var(--space_xl15);'},
	m_0: {declaration: 'margin: 0;'},
	m_auto: {declaration: 'margin: auto;'},
	m_xs5: {declaration: 'margin: var(--space_xs5);'},
	m_xs4: {declaration: 'margin: var(--space_xs4);'},
	m_xs3: {declaration: 'margin: var(--space_xs3);'},
	m_xs2: {declaration: 'margin: var(--space_xs2);'},
	m_xs: {declaration: 'margin: var(--space_xs);'},
	m_sm: {declaration: 'margin: var(--space_sm);'},
	m_md: {declaration: 'margin: var(--space_md);'},
	m_lg: {declaration: 'margin: var(--space_lg);'},
	m_xl: {declaration: 'margin: var(--space_xl);'},
	m_xl2: {declaration: 'margin: var(--space_xl2);'},
	m_xl3: {declaration: 'margin: var(--space_xl3);'},
	m_xl4: {declaration: 'margin: var(--space_xl4);'},
	m_xl5: {declaration: 'margin: var(--space_xl5);'},
	m_xl6: {declaration: 'margin: var(--space_xl6);'},
	m_xl7: {declaration: 'margin: var(--space_xl7);'},
	m_xl8: {declaration: 'margin: var(--space_xl8);'},
	m_xl9: {declaration: 'margin: var(--space_xl9);'},
	m_xl10: {declaration: 'margin: var(--space_xl10);'},
	m_xl11: {declaration: 'margin: var(--space_xl11);'},
	m_xl12: {declaration: 'margin: var(--space_xl12);'},
	m_xl13: {declaration: 'margin: var(--space_xl13);'},
	m_xl14: {declaration: 'margin: var(--space_xl14);'},
	m_xl15: {declaration: 'margin: var(--space_xl15);'},
	mt_0: {declaration: 'margin-top: 0;'},
	mt_auto: {declaration: 'margin-top: auto;'},
	mt_xs5: {declaration: 'margin-top: var(--space_xs5);'},
	mt_xs4: {declaration: 'margin-top: var(--space_xs4);'},
	mt_xs3: {declaration: 'margin-top: var(--space_xs3);'},
	mt_xs2: {declaration: 'margin-top: var(--space_xs2);'},
	mt_xs: {declaration: 'margin-top: var(--space_xs);'},
	mt_sm: {declaration: 'margin-top: var(--space_sm);'},
	mt_md: {declaration: 'margin-top: var(--space_md);'},
	mt_lg: {declaration: 'margin-top: var(--space_lg);'},
	mt_xl: {declaration: 'margin-top: var(--space_xl);'},
	mt_xl2: {declaration: 'margin-top: var(--space_xl2);'},
	mt_xl3: {declaration: 'margin-top: var(--space_xl3);'},
	mt_xl4: {declaration: 'margin-top: var(--space_xl4);'},
	mt_xl5: {declaration: 'margin-top: var(--space_xl5);'},
	mt_xl6: {declaration: 'margin-top: var(--space_xl6);'},
	mt_xl7: {declaration: 'margin-top: var(--space_xl7);'},
	mt_xl8: {declaration: 'margin-top: var(--space_xl8);'},
	mt_xl9: {declaration: 'margin-top: var(--space_xl9);'},
	mt_xl10: {declaration: 'margin-top: var(--space_xl10);'},
	mt_xl11: {declaration: 'margin-top: var(--space_xl11);'},
	mt_xl12: {declaration: 'margin-top: var(--space_xl12);'},
	mt_xl13: {declaration: 'margin-top: var(--space_xl13);'},
	mt_xl14: {declaration: 'margin-top: var(--space_xl14);'},
	mt_xl15: {declaration: 'margin-top: var(--space_xl15);'},
	mr_0: {declaration: 'margin-right: 0;'},
	mr_auto: {declaration: 'margin-right: auto;'},
	mr_xs5: {declaration: 'margin-right: var(--space_xs5);'},
	mr_xs4: {declaration: 'margin-right: var(--space_xs4);'},
	mr_xs3: {declaration: 'margin-right: var(--space_xs3);'},
	mr_xs2: {declaration: 'margin-right: var(--space_xs2);'},
	mr_xs: {declaration: 'margin-right: var(--space_xs);'},
	mr_sm: {declaration: 'margin-right: var(--space_sm);'},
	mr_md: {declaration: 'margin-right: var(--space_md);'},
	mr_lg: {declaration: 'margin-right: var(--space_lg);'},
	mr_xl: {declaration: 'margin-right: var(--space_xl);'},
	mr_xl2: {declaration: 'margin-right: var(--space_xl2);'},
	mr_xl3: {declaration: 'margin-right: var(--space_xl3);'},
	mr_xl4: {declaration: 'margin-right: var(--space_xl4);'},
	mr_xl5: {declaration: 'margin-right: var(--space_xl5);'},
	mr_xl6: {declaration: 'margin-right: var(--space_xl6);'},
	mr_xl7: {declaration: 'margin-right: var(--space_xl7);'},
	mr_xl8: {declaration: 'margin-right: var(--space_xl8);'},
	mr_xl9: {declaration: 'margin-right: var(--space_xl9);'},
	mr_xl10: {declaration: 'margin-right: var(--space_xl10);'},
	mr_xl11: {declaration: 'margin-right: var(--space_xl11);'},
	mr_xl12: {declaration: 'margin-right: var(--space_xl12);'},
	mr_xl13: {declaration: 'margin-right: var(--space_xl13);'},
	mr_xl14: {declaration: 'margin-right: var(--space_xl14);'},
	mr_xl15: {declaration: 'margin-right: var(--space_xl15);'},
	mb_0: {declaration: 'margin-bottom: 0;'},
	mb_auto: {declaration: 'margin-bottom: auto;'},
	mb_xs5: {declaration: 'margin-bottom: var(--space_xs5);'},
	mb_xs4: {declaration: 'margin-bottom: var(--space_xs4);'},
	mb_xs3: {declaration: 'margin-bottom: var(--space_xs3);'},
	mb_xs2: {declaration: 'margin-bottom: var(--space_xs2);'},
	mb_xs: {declaration: 'margin-bottom: var(--space_xs);'},
	mb_sm: {declaration: 'margin-bottom: var(--space_sm);'},
	mb_md: {declaration: 'margin-bottom: var(--space_md);'},
	mb_lg: {declaration: 'margin-bottom: var(--space_lg);'},
	mb_xl: {declaration: 'margin-bottom: var(--space_xl);'},
	mb_xl2: {declaration: 'margin-bottom: var(--space_xl2);'},
	mb_xl3: {declaration: 'margin-bottom: var(--space_xl3);'},
	mb_xl4: {declaration: 'margin-bottom: var(--space_xl4);'},
	mb_xl5: {declaration: 'margin-bottom: var(--space_xl5);'},
	mb_xl6: {declaration: 'margin-bottom: var(--space_xl6);'},
	mb_xl7: {declaration: 'margin-bottom: var(--space_xl7);'},
	mb_xl8: {declaration: 'margin-bottom: var(--space_xl8);'},
	mb_xl9: {declaration: 'margin-bottom: var(--space_xl9);'},
	mb_xl10: {declaration: 'margin-bottom: var(--space_xl10);'},
	mb_xl11: {declaration: 'margin-bottom: var(--space_xl11);'},
	mb_xl12: {declaration: 'margin-bottom: var(--space_xl12);'},
	mb_xl13: {declaration: 'margin-bottom: var(--space_xl13);'},
	mb_xl14: {declaration: 'margin-bottom: var(--space_xl14);'},
	mb_xl15: {declaration: 'margin-bottom: var(--space_xl15);'},
	ml_0: {declaration: 'margin-left: 0;'},
	ml_auto: {declaration: 'margin-left: auto;'},
	ml_xs5: {declaration: 'margin-left: var(--space_xs5);'},
	ml_xs4: {declaration: 'margin-left: var(--space_xs4);'},
	ml_xs3: {declaration: 'margin-left: var(--space_xs3);'},
	ml_xs2: {declaration: 'margin-left: var(--space_xs2);'},
	ml_xs: {declaration: 'margin-left: var(--space_xs);'},
	ml_sm: {declaration: 'margin-left: var(--space_sm);'},
	ml_md: {declaration: 'margin-left: var(--space_md);'},
	ml_lg: {declaration: 'margin-left: var(--space_lg);'},
	ml_xl: {declaration: 'margin-left: var(--space_xl);'},
	ml_xl2: {declaration: 'margin-left: var(--space_xl2);'},
	ml_xl3: {declaration: 'margin-left: var(--space_xl3);'},
	ml_xl4: {declaration: 'margin-left: var(--space_xl4);'},
	ml_xl5: {declaration: 'margin-left: var(--space_xl5);'},
	ml_xl6: {declaration: 'margin-left: var(--space_xl6);'},
	ml_xl7: {declaration: 'margin-left: var(--space_xl7);'},
	ml_xl8: {declaration: 'margin-left: var(--space_xl8);'},
	ml_xl9: {declaration: 'margin-left: var(--space_xl9);'},
	ml_xl10: {declaration: 'margin-left: var(--space_xl10);'},
	ml_xl11: {declaration: 'margin-left: var(--space_xl11);'},
	ml_xl12: {declaration: 'margin-left: var(--space_xl12);'},
	ml_xl13: {declaration: 'margin-left: var(--space_xl13);'},
	ml_xl14: {declaration: 'margin-left: var(--space_xl14);'},
	ml_xl15: {declaration: 'margin-left: var(--space_xl15);'},
	mx_0: {declaration: 'margin-left: 0;	margin-right: 0;'},
	mx_auto: {declaration: 'margin-left: auto;	margin-right: auto;'},
	mx_xs5: {declaration: 'margin-left: var(--space_xs5);	margin-right: var(--space_xs5);'},
	mx_xs4: {declaration: 'margin-left: var(--space_xs4);	margin-right: var(--space_xs4);'},
	mx_xs3: {declaration: 'margin-left: var(--space_xs3);	margin-right: var(--space_xs3);'},
	mx_xs2: {declaration: 'margin-left: var(--space_xs2);	margin-right: var(--space_xs2);'},
	mx_xs: {declaration: 'margin-left: var(--space_xs);	margin-right: var(--space_xs);'},
	mx_sm: {declaration: 'margin-left: var(--space_sm);	margin-right: var(--space_sm);'},
	mx_md: {declaration: 'margin-left: var(--space_md);	margin-right: var(--space_md);'},
	mx_lg: {declaration: 'margin-left: var(--space_lg);	margin-right: var(--space_lg);'},
	mx_xl: {declaration: 'margin-left: var(--space_xl);	margin-right: var(--space_xl);'},
	mx_xl2: {declaration: 'margin-left: var(--space_xl2);	margin-right: var(--space_xl2);'},
	mx_xl3: {declaration: 'margin-left: var(--space_xl3);	margin-right: var(--space_xl3);'},
	mx_xl4: {declaration: 'margin-left: var(--space_xl4);	margin-right: var(--space_xl4);'},
	mx_xl5: {declaration: 'margin-left: var(--space_xl5);	margin-right: var(--space_xl5);'},
	mx_xl6: {declaration: 'margin-left: var(--space_xl6);	margin-right: var(--space_xl6);'},
	mx_xl7: {declaration: 'margin-left: var(--space_xl7);	margin-right: var(--space_xl7);'},
	mx_xl8: {declaration: 'margin-left: var(--space_xl8);	margin-right: var(--space_xl8);'},
	mx_xl9: {declaration: 'margin-left: var(--space_xl9);	margin-right: var(--space_xl9);'},
	mx_xl10: {declaration: 'margin-left: var(--space_xl10);	margin-right: var(--space_xl10);'},
	mx_xl11: {declaration: 'margin-left: var(--space_xl11);	margin-right: var(--space_xl11);'},
	mx_xl12: {declaration: 'margin-left: var(--space_xl12);	margin-right: var(--space_xl12);'},
	mx_xl13: {declaration: 'margin-left: var(--space_xl13);	margin-right: var(--space_xl13);'},
	mx_xl14: {declaration: 'margin-left: var(--space_xl14);	margin-right: var(--space_xl14);'},
	mx_xl15: {declaration: 'margin-left: var(--space_xl15);	margin-right: var(--space_xl15);'},
	my_0: {declaration: 'margin-top: 0;	margin-bottom: 0;'},
	my_auto: {declaration: 'margin-top: auto;	margin-bottom: auto;'},
	my_xs5: {declaration: 'margin-top: var(--space_xs5);	margin-bottom: var(--space_xs5);'},
	my_xs4: {declaration: 'margin-top: var(--space_xs4);	margin-bottom: var(--space_xs4);'},
	my_xs3: {declaration: 'margin-top: var(--space_xs3);	margin-bottom: var(--space_xs3);'},
	my_xs2: {declaration: 'margin-top: var(--space_xs2);	margin-bottom: var(--space_xs2);'},
	my_xs: {declaration: 'margin-top: var(--space_xs);	margin-bottom: var(--space_xs);'},
	my_sm: {declaration: 'margin-top: var(--space_sm);	margin-bottom: var(--space_sm);'},
	my_md: {declaration: 'margin-top: var(--space_md);	margin-bottom: var(--space_md);'},
	my_lg: {declaration: 'margin-top: var(--space_lg);	margin-bottom: var(--space_lg);'},
	my_xl: {declaration: 'margin-top: var(--space_xl);	margin-bottom: var(--space_xl);'},
	my_xl2: {declaration: 'margin-top: var(--space_xl2);	margin-bottom: var(--space_xl2);'},
	my_xl3: {declaration: 'margin-top: var(--space_xl3);	margin-bottom: var(--space_xl3);'},
	my_xl4: {declaration: 'margin-top: var(--space_xl4);	margin-bottom: var(--space_xl4);'},
	my_xl5: {declaration: 'margin-top: var(--space_xl5);	margin-bottom: var(--space_xl5);'},
	my_xl6: {declaration: 'margin-top: var(--space_xl6);	margin-bottom: var(--space_xl6);'},
	my_xl7: {declaration: 'margin-top: var(--space_xl7);	margin-bottom: var(--space_xl7);'},
	my_xl8: {declaration: 'margin-top: var(--space_xl8);	margin-bottom: var(--space_xl8);'},
	my_xl9: {declaration: 'margin-top: var(--space_xl9);	margin-bottom: var(--space_xl9);'},
	my_xl10: {declaration: 'margin-top: var(--space_xl10);	margin-bottom: var(--space_xl10);'},
	my_xl11: {declaration: 'margin-top: var(--space_xl11);	margin-bottom: var(--space_xl11);'},
	my_xl12: {declaration: 'margin-top: var(--space_xl12);	margin-bottom: var(--space_xl12);'},
	my_xl13: {declaration: 'margin-top: var(--space_xl13);	margin-bottom: var(--space_xl13);'},
	my_xl14: {declaration: 'margin-top: var(--space_xl14);	margin-bottom: var(--space_xl14);'},
	my_xl15: {declaration: 'margin-top: var(--space_xl15);	margin-bottom: var(--space_xl15);'},
	gap_xs5: {declaration: 'gap: var(--space_xs5);'},
	gap_xs4: {declaration: 'gap: var(--space_xs4);'},
	gap_xs3: {declaration: 'gap: var(--space_xs3);'},
	gap_xs2: {declaration: 'gap: var(--space_xs2);'},
	gap_xs: {declaration: 'gap: var(--space_xs);'},
	gap_sm: {declaration: 'gap: var(--space_sm);'},
	gap_md: {declaration: 'gap: var(--space_md);'},
	gap_lg: {declaration: 'gap: var(--space_lg);'},
	gap_xl: {declaration: 'gap: var(--space_xl);'},
	gap_xl2: {declaration: 'gap: var(--space_xl2);'},
	gap_xl3: {declaration: 'gap: var(--space_xl3);'},
	gap_xl4: {declaration: 'gap: var(--space_xl4);'},
	gap_xl5: {declaration: 'gap: var(--space_xl5);'},
	gap_xl6: {declaration: 'gap: var(--space_xl6);'},
	gap_xl7: {declaration: 'gap: var(--space_xl7);'},
	gap_xl8: {declaration: 'gap: var(--space_xl8);'},
	gap_xl9: {declaration: 'gap: var(--space_xl9);'},
	gap_xl10: {declaration: 'gap: var(--space_xl10);'},
	gap_xl11: {declaration: 'gap: var(--space_xl11);'},
	gap_xl12: {declaration: 'gap: var(--space_xl12);'},
	gap_xl13: {declaration: 'gap: var(--space_xl13);'},
	gap_xl14: {declaration: 'gap: var(--space_xl14);'},
	gap_xl15: {declaration: 'gap: var(--space_xl15);'},
	column_gap_xs5: {declaration: 'column-gap: var(--space_xs5);'},
	column_gap_xs4: {declaration: 'column-gap: var(--space_xs4);'},
	column_gap_xs3: {declaration: 'column-gap: var(--space_xs3);'},
	column_gap_xs2: {declaration: 'column-gap: var(--space_xs2);'},
	column_gap_xs: {declaration: 'column-gap: var(--space_xs);'},
	column_gap_sm: {declaration: 'column-gap: var(--space_sm);'},
	column_gap_md: {declaration: 'column-gap: var(--space_md);'},
	column_gap_lg: {declaration: 'column-gap: var(--space_lg);'},
	column_gap_xl: {declaration: 'column-gap: var(--space_xl);'},
	column_gap_xl2: {declaration: 'column-gap: var(--space_xl2);'},
	column_gap_xl3: {declaration: 'column-gap: var(--space_xl3);'},
	column_gap_xl4: {declaration: 'column-gap: var(--space_xl4);'},
	column_gap_xl5: {declaration: 'column-gap: var(--space_xl5);'},
	column_gap_xl6: {declaration: 'column-gap: var(--space_xl6);'},
	column_gap_xl7: {declaration: 'column-gap: var(--space_xl7);'},
	column_gap_xl8: {declaration: 'column-gap: var(--space_xl8);'},
	column_gap_xl9: {declaration: 'column-gap: var(--space_xl9);'},
	column_gap_xl10: {declaration: 'column-gap: var(--space_xl10);'},
	column_gap_xl11: {declaration: 'column-gap: var(--space_xl11);'},
	column_gap_xl12: {declaration: 'column-gap: var(--space_xl12);'},
	column_gap_xl13: {declaration: 'column-gap: var(--space_xl13);'},
	column_gap_xl14: {declaration: 'column-gap: var(--space_xl14);'},
	column_gap_xl15: {declaration: 'column-gap: var(--space_xl15);'},
	row_gap_xs5: {declaration: 'row-gap: var(--space_xs5);'},
	row_gap_xs4: {declaration: 'row-gap: var(--space_xs4);'},
	row_gap_xs3: {declaration: 'row-gap: var(--space_xs3);'},
	row_gap_xs2: {declaration: 'row-gap: var(--space_xs2);'},
	row_gap_xs: {declaration: 'row-gap: var(--space_xs);'},
	row_gap_sm: {declaration: 'row-gap: var(--space_sm);'},
	row_gap_md: {declaration: 'row-gap: var(--space_md);'},
	row_gap_lg: {declaration: 'row-gap: var(--space_lg);'},
	row_gap_xl: {declaration: 'row-gap: var(--space_xl);'},
	row_gap_xl2: {declaration: 'row-gap: var(--space_xl2);'},
	row_gap_xl3: {declaration: 'row-gap: var(--space_xl3);'},
	row_gap_xl4: {declaration: 'row-gap: var(--space_xl4);'},
	row_gap_xl5: {declaration: 'row-gap: var(--space_xl5);'},
	row_gap_xl6: {declaration: 'row-gap: var(--space_xl6);'},
	row_gap_xl7: {declaration: 'row-gap: var(--space_xl7);'},
	row_gap_xl8: {declaration: 'row-gap: var(--space_xl8);'},
	row_gap_xl9: {declaration: 'row-gap: var(--space_xl9);'},
	row_gap_xl10: {declaration: 'row-gap: var(--space_xl10);'},
	row_gap_xl11: {declaration: 'row-gap: var(--space_xl11);'},
	row_gap_xl12: {declaration: 'row-gap: var(--space_xl12);'},
	row_gap_xl13: {declaration: 'row-gap: var(--space_xl13);'},
	row_gap_xl14: {declaration: 'row-gap: var(--space_xl14);'},
	row_gap_xl15: {declaration: 'row-gap: var(--space_xl15);'},
};
