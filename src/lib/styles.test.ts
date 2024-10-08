import {test} from 'uvu';
import * as assert from 'uvu/assert';

import main_stylesheet from '$lib/style.css?raw';
import * as exported_variables from '$lib/variables.js';

// TODO BLOCK generate all styles here? only in memory? // style_animations, style_components,
const css_files = [main_stylesheet];

const extract_custom_properties = (css: string) =>
	Array.from(css.matchAll(/--([a-z][a-z0-9_]*(?<!_))/g)).map((m) => m[1]);

test('variables in the CSS exist', () => {
	const unknowns = new Set();
	for (const css of css_files) {
		assert.ok(css);
		const variable_names = extract_custom_properties(css);
		for (const name of variable_names) {
			if (!(name in exported_variables) && !known_without_variables.has(name)) {
				unknowns.add(name);
			}
		}
	}
	if (unknowns.size) {
		assert.unreachable(`unknown variables found: ${Array.from(unknowns).join(', ')}`);
	}
});

const known_without_variables = new Set([
	'button_fill',
	'button_fill_hover',
	'button_fill_active',
	'clickable_transform',
	'clickable_transform_origin',
	'clickable_transition_duration',
	'clickable_transform_focus',
	'clickable_transform_hover',
	'clickable_transform_active',
	'pane_bg',
	'pane_shadow',
	'panel_bg',
	'icon_size',
	'border_radius',
	'min_height',
	'menu_item_padding',
	'size',
	'color',
	'padding_left',
	'font_weight',
	'checkbox_content',
	'checkbox_content_empty',
	'checkbox_content_checked',
	'left',
	'top',
	'overflow',
	'thumb_size',
	'thumb_background_color',
	'button_text_color',
	'button_border_color',
	'button_border_color_hover',
	'button_border_color_active',
	'shadow',
	'hue',
	'shadow_alpha',
]);

test.run();
