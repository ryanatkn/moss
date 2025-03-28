import type {Theme} from '$lib/theme.js';

export const DEFAULT_THEME: Theme = {
	name: 'base',
	variables: [], // inherits base
};

/**
 * These are super basic proof-of-concept themes.
 */
export const default_themes: Array<Theme> = [
	DEFAULT_THEME,
	{
		name: 'low contrast',
		variables: [
			{name: 'tint_saturation', light: '8%'},
			{
				name: 'bg',
				light: 'hsl(var(--tint_hue) var(--tint_saturation) 86%)',
				dark: 'hsl(var(--tint_hue) var(--tint_saturation) 18%)',
			},
		],
	},
	{
		name: 'high contrast',
		variables: [
			{
				name: 'bg',
				light: '#fff',
				dark: '#000',
			},
			{
				name: 'text_color_2',
				light: 'hsl(var(--tint_hue) var(--tint_saturation) 8%)',
				dark: 'hsl(var(--tint_hue) var(--tint_saturation) 90%)',
			},
			{
				name: 'text_color_3',
				light: 'hsl(var(--tint_hue) var(--tint_saturation) 16%)',
				dark: 'hsl(var(--tint_hue) var(--tint_saturation) 83%)',
			},
			{
				name: 'text_color_5',
				light: 'hsl(var(--tint_hue) var(--tint_saturation) 24%)',
				dark: 'hsl(var(--tint_hue) var(--tint_saturation) 75%)',
			},
		],
	},
];
