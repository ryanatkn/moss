import type {Css_Class_Declaration} from '$lib/css_class_helpers.js';

export type Class_Template_Result = {
	name: string;
	css: string;
} | null;

export type Class_Template_Fn<T1 = string, T2 = string, T3 = string> =
	| ((v1: T1) => Class_Template_Result)
	| ((v1: T1, v2: T2) => Class_Template_Result)
	| ((v1: T1, v2: T2, v3: T3) => Class_Template_Result);

/**
 * Generates CSS class declarations from templates.
 * Supports up to 3 dimensions of multiplicative combinations.
 *
 * @param template - Function that generates CSS from values, can return null to skip
 * @param values - Primary iterable of values
 * @param multipliers - Optional second dimension (makes it multiplicative)
 * @param tertiary - Optional third dimension for even more combinations
 *
 * @example
 * // Simple list
 * generate_classes(
 *   v => ({ name: `position_${v}`, css: `position: ${v};` }),
 *   ['static', 'relative', 'absolute']
 * )
 *
 * @example
 * // Two dimensions (multiplicative)
 * generate_classes(
 *   (dir, size) => ({ name: `m${dir}_${size}`, css: `margin-${dir}: ${size};` }),
 *   ['top', 'bottom'],
 *   ['0', '1px', '2px']
 * )
 */
export const generate_classes = <T1 = string, T2 = string, T3 = string>(
	template: Class_Template_Fn<T1, T2, T3>,
	values: Iterable<T1>,
	multipliers?: Iterable<T2>,
	tertiary?: Iterable<T3>,
): Record<string, Css_Class_Declaration> => {
	const result: Record<string, Css_Class_Declaration> = {};

	for (const v1 of values) {
		if (multipliers) {
			for (const v2 of multipliers) {
				if (tertiary) {
					for (const v3 of tertiary) {
						const generated = (template as any)(v1, v2, v3);
						if (generated) {
							result[generated.name] = {declaration: generated.css};
						}
					}
				} else {
					const generated = (template as any)(v1, v2);
					if (generated) {
						result[generated.name] = {declaration: generated.css};
					}
				}
			}
		} else {
			const generated = (template as any)(v1);
			if (generated) {
				result[generated.name] = {declaration: generated.css};
			}
		}
	}

	return result;
};

// Common value sets for CSS properties
export const CSS_GLOBALS = ['inherit', 'initial', 'revert', 'revert_layer', 'unset'] as const;
export type Css_Global = (typeof CSS_GLOBALS)[number];

export const CSS_DIRECTIONS = ['top', 'right', 'bottom', 'left'] as const;
export type Css_Direction = (typeof CSS_DIRECTIONS)[number];

export const COLOR_INTENSITIES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] as const;
export type Color_Intensity = (typeof COLOR_INTENSITIES)[number];

// Helper to convert snake_case to kebab-case for CSS properties
export const to_kebab = (str: string): string => str.replace(/_/g, '-');

// Helper to generate global value classes for any CSS property
export const generate_global_classes = (
	property: string,
): Record<string, Css_Class_Declaration> => {
	return generate_classes(
		(global: (typeof CSS_GLOBALS)[number]) => ({
			name: `${property.replace(/-/g, '_')}_${global}`,
			css: `${property}: ${to_kebab(global)};`,
		}),
		CSS_GLOBALS,
	);
};
