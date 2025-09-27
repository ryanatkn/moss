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

/**
 * Format spacing values for CSS (handles 0, auto, percentages, pixels, and CSS variables).
 * Used by margin, padding, gap, inset, top/right/bottom/left, etc.
 */
export const format_spacing_value = (value: string): string => {
	if (value === '0') return '0';
	if (value === 'auto') return 'auto';
	if (value === '100') return '100%';
	if (value.endsWith('px')) return value;
	return `var(--space_${value})`;
};

/**
 * Generate classes for a single CSS property with various values.
 * This is the most common pattern, used by display, visibility, float, etc.
 *
 * @param property - The CSS property name (e.g. 'display', 'gap')
 * @param values - The values to generate classes for
 * @param formatter - Optional function to format values (e.g. v => `var(--space_${v})`)
 * @param prefix - Optional class name prefix (defaults to property with dashes replaced by underscores)
 */
export const generate_property_classes = (
	property: string,
	values: Iterable<string>,
	formatter?: (value: string) => string,
	prefix?: string,
): Record<string, Css_Class_Declaration> => {
	const format = formatter || ((v) => v);
	const class_prefix = prefix || property.replace(/-/g, '_');

	return generate_classes(
		(value: string) => ({
			name: `${class_prefix}_${value.replace(/-/g, '_')}`,
			css: `${property}: ${format(value)};`,
		}),
		values,
	);
};

/**
 * Generate directional classes for properties like margin and padding.
 * Creates classes for all directions: base, top, right, bottom, left, x (horizontal), y (vertical).
 *
 * @param property - The base CSS property name (e.g. 'margin', 'padding')
 * @param values - The values to generate classes for
 * @param value_formatter - Optional function to format values (defaults to identity)
 */
export const generate_directional_classes = (
	property: string,
	values: Iterable<string>,
	value_formatter?: (v: string) => string,
): Record<string, Css_Class_Declaration> => {
	const format = value_formatter || ((v) => v);
	const prefix = property[0]; // 'm' for margin, 'p' for padding

	return generate_classes(
		(variant: string, value: string) => {
			const formatted = format(value);

			// Map variants to their configurations
			const configs: Record<string, {name: string; css: string}> = {
				'': {name: `${prefix}_${value}`, css: `${property}: ${formatted};`},
				t: {name: `${prefix}t_${value}`, css: `${property}-top: ${formatted};`},
				r: {name: `${prefix}r_${value}`, css: `${property}-right: ${formatted};`},
				b: {name: `${prefix}b_${value}`, css: `${property}-bottom: ${formatted};`},
				l: {name: `${prefix}l_${value}`, css: `${property}-left: ${formatted};`},
				x: {
					name: `${prefix}x_${value}`,
					css: `${property}-left: ${formatted};\t${property}-right: ${formatted};`,
				},
				y: {
					name: `${prefix}y_${value}`,
					css: `${property}-top: ${formatted};\t${property}-bottom: ${formatted};`,
				},
			};

			return configs[variant] || null;
		},
		['', 't', 'r', 'b', 'l', 'x', 'y'],
		values,
	);
};

/**
 * Generate classes for properties with axis variants (e.g. overflow, overflow-x, overflow-y).
 *
 * @param property - The base CSS property name (e.g. 'overflow')
 * @param values - The values to generate classes for
 */
export const generate_property_with_axes = (
	property: string,
	values: Iterable<string>,
): Record<string, Css_Class_Declaration> => {
	return generate_classes(
		(axis: string, value: string) => {
			const prop = axis === '' ? property : `${property}-${axis}`;
			const prefix = axis === '' ? property : `${property}_${axis}`;
			return {
				name: `${prefix.replace(/-/g, '_')}_${value}`,
				css: `${prop}: ${value};`,
			};
		},
		['', 'x', 'y'],
		values,
	);
};
