import type {Css_Class_Declaration_Interpreter} from '$lib/css_class_helpers.js';
import {Z_INDEX_MAX} from '$lib/variable_data.js';

/**
 * Interpreter for opacity classes (opacity_0 through opacity_100).
 */
export const opacity_interpreter: Css_Class_Declaration_Interpreter = {
	pattern: /^opacity_(\d+)$/,
	interpret: (matched, log) => {
		const value = parseInt(matched[1]!, 10);
		if (value < 0 || value > 100) {
			log?.warn(`Invalid opacity value: ${value}. Must be between 0 and 100.`);
			return null;
		}
		return `opacity: ${value === 0 ? '0' : value === 100 ? '1' : `${value}%`};`;
	},
	// comment: 'Interpreted opacity value',
};

/**
 * Interpreter for font-weight classes,
 * `font_weight_1` through `font_weight_1000` following the CSS spec.
 */
export const font_weight_interpreter: Css_Class_Declaration_Interpreter = {
	pattern: /^font_weight_(\d+)$/,
	interpret: (matched, log) => {
		const value = parseInt(matched[1]!, 10);
		if (value < 1 || value > 1000) {
			log?.warn(`Invalid font-weight value: ${value}. Must be between 1 and 1000.`);
			return null;
		}
		return `font-weight: ${value}; --font_weight: ${value};`;
	},
};

/**
 * Interpreter for border-radius percentage classes,
 * `border_radius_0` through `border_radius_100`.
 */
export const border_radius_interpreter: Css_Class_Declaration_Interpreter = {
	pattern: /^border_radius_(\d+)$/,
	interpret: (matched, log) => {
		const value = parseInt(matched[1]!, 10);
		if (value < 0 || value > 100) {
			log?.warn(`Invalid border-radius percentage: ${value}. Must be between 0 and 100.`);
			return null;
		}
		return `border-radius: ${value === 0 ? '0' : `${value}%`};`;
	},
};

/**
 * Interpreter for border radius corner percentage classes,
 * handles all four corners: top-left, top-right, bottom-left, bottom-right.
 * Examples: `border_top_left_radius_50`, `border_bottom_right_radius_100`.
 */
export const border_radius_corners_interpreter: Css_Class_Declaration_Interpreter = {
	pattern: /^border_(top|bottom)_(left|right)_radius_(\d+)$/,
	interpret: (matched, log) => {
		const vertical = matched[1]!;
		const horizontal = matched[2]!;
		const value = parseInt(matched[3]!, 10);
		if (value < 0 || value > 100) {
			log?.warn(
				`Invalid border-${vertical}-${horizontal}-radius percentage: ${value}. Must be between 0 and 100.`,
			);
			return null;
		}
		return `border-${vertical}-${horizontal}-radius: ${value === 0 ? '0' : `${value}%`};`;
	},
};

/**
 * Interpreter for z-index classes,
 * `z_index_0` through `z_index_${Z_INDEX_MAX}` (max CSS z-index).
 */
export const z_index_interpreter: Css_Class_Declaration_Interpreter = {
	pattern: /^z_index_(\d+)$/,
	interpret: (matched, log) => {
		const value = parseInt(matched[1]!, 10);
		if (value < 0 || value > Z_INDEX_MAX) {
			log?.warn(`Invalid z-index value: ${value}. Must be between 0 and ${Z_INDEX_MAX}.`);
			return null;
		}
		return `z-index: ${value};`;
	},
};

/**
 * Collection of all builtin interpreters for dynamic CSS class generation.
 */
export const css_class_interpreters: Array<Css_Class_Declaration_Interpreter> = [
	opacity_interpreter,
	font_weight_interpreter,
	border_radius_interpreter,
	border_radius_corners_interpreter,
	z_index_interpreter,
	// add new default interpreters here
];
