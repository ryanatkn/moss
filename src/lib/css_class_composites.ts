import type {Css_Class_Declaration} from '$lib/css_class_helpers.js';

export const css_class_composites: Record<string, Css_Class_Declaration | undefined> = {
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
};
