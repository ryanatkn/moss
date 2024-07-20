import {default_variables} from '$lib/variables.js';
import {default_themes} from '$lib/themes.js'; // TODO shoudln't be a dep, see usage below
import type {Style_Variable} from '$lib/variable.js';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
 */
export type Color_Scheme = 'dark' | 'light' | 'auto';

export const color_schemes: Color_Scheme[] = ['light', 'auto', 'dark'];

export interface Theme {
	name: string;
	variables: Style_Variable[];
}

export interface Render_Theme_Style_Options {
	comments?: boolean;
	id?: string | null;
	empty_default_theme?: boolean;
	/**
	 * Repeats the theme selector to handle unpredictable head content insertion order.
	 * Accepts any integer >= 1, defaults to 2.
	 */
	specificity?: number;
}

export const render_theme_style = (
	theme: Theme,
	options: Render_Theme_Style_Options = {},
): string => {
	const {comments = false, id = null, empty_default_theme = true, specificity = 2} = options;
	const variables =
		theme.name === default_themes[0].name
			? empty_default_theme
				? null
				: default_variables
			: theme.variables;
	if (!variables?.length) return '';
	const rendered_light = variables.map((v) => render_theme_variable(v)).filter(Boolean);
	const rendered_dark = variables
		.map((v) => render_theme_variable(v, true, comments))
		.filter(Boolean);
	const scope = (id ? '#' + id : ':root').repeat(specificity);
	return `${
		rendered_light.length
			? `${scope} {
	${rendered_light.join('\n\t')}
}`
			: ''
	}
${
	rendered_dark.length
		? `${scope}.dark {
	${rendered_dark.join('\n\t')}
}`
		: ''
}
`.trim();
};

export const render_theme_variable = (
	variable: Style_Variable,
	dark = false,
	comments = true,
): string => {
	const v = dark ? variable.dark : variable.light;
	if (!v) return '';
	return (
		'--' +
		variable.name +
		': ' +
		v +
		';' +
		(comments && variable.summary ? ' /* ' + variable.summary + ' */' : '')
	);
};
