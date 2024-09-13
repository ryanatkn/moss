import type {Flavored} from '@ryanatkn/belt/types.js';

// TODO maybe rename this module to `style_variable` for consistency? what about `variables`?

export type Style_Variable_Name = Flavored<string, 'Style_Variable_Name'>;

export interface Style_Variable {
	name: Style_Variable_Name;
	light?: string;
	dark?: string;
	summary?: string;
}

export const STYLE_VARIABLE_NAME_MATCHER = /^[a-z][a-z0-9_]*(?<!_)$/;

/**
 * Same as `STYLE_VARIABLE_NAME_MATCHER` but includes the leading `--` for CSS custom properties.
 */
export const STYLE_VARIABLE_PROPERTY_MATCHER = /^--[a-z][a-z0-9_]*(?<!_)$/;

export const is_style_variable_name = (name: string): name is Style_Variable_Name =>
	STYLE_VARIABLE_NAME_MATCHER.test(name);
