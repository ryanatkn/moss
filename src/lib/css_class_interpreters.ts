import type {Css_Class_Declaration_Interpreter} from '$lib/css_class_helpers.js';

/**
 * Interpreter for opacity classes (opacity_0 through opacity_100).
 */
export const opacity_interpreter: Css_Class_Declaration_Interpreter = {
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
 * Interpreter for font-weight classes,
 * `font_weight_1` through `font_weight_1000` following the CSS spec.
 */
export const font_weight_interpreter: Css_Class_Declaration_Interpreter = {
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
 * Collection of all builtin interpreters for dynamic CSS class generation.
 */
export const css_class_interpreters: Array<Css_Class_Declaration_Interpreter> = [
	opacity_interpreter,
	font_weight_interpreter,
	// add new default interpreters here
];
