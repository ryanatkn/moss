import {test, assert} from 'vitest';
import {readFileSync} from 'node:fs';

import * as exported_variables from '$lib/variables.js';
import css_classes_text from '../fixtures/css_classes_fixture.json?raw';

// vitest replaces this with an empty string because CSS isn't opted into being processed,
// and it has no CLI option, so just read it directly
const main_stylesheet_text = readFileSync('./src/lib/style.css', 'utf8');

const css_files = [main_stylesheet_text, css_classes_text];

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
		throw new Error(`unknown variables found: ${Array.from(unknowns).join(', ')}`);
	}
});

/**
 * These variables are known to be in the CSS but not in the exported variables.
 * This means they can be contextually used when defined, but otherwise have a fallback.
 */
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
	'font_size',
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
