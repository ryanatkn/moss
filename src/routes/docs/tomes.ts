import type {Tome} from '@ryanatkn/fuz/tome.js';

import introduction from '$routes/docs/introduction/+page.svelte';
import themes from '$routes/docs/themes/+page.svelte';
import colors from '$routes/docs/colors/+page.svelte';
import buttons from '$routes/docs/buttons/+page.svelte';
import forms from '$routes/docs/forms/+page.svelte';
import elements from '$routes/docs/elements/+page.svelte';
import classes from '$routes/docs/classes/+page.svelte';
import typography from '$routes/docs/typography/+page.svelte';
import variables from '$routes/docs/variables/+page.svelte';
import layout from '$routes/docs/layout/+page.svelte';
import shading from '$routes/docs/shading/+page.svelte';
import shadows from '$routes/docs/shadows/+page.svelte';
import borders from '$routes/docs/borders/+page.svelte';
// import menu_item from '$routes/docs/menu_item/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

export const tomes: Array<Tome> = [
	{
		name: 'introduction',
		category: 'guide',
		component: introduction,
		related_tomes: [],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'themes',
		category: 'systems',
		component: themes,
		related_tomes: ['variables', 'colors', 'typography'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'variables',
		category: 'systems',
		component: variables,
		related_tomes: ['themes'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'classes',
		category: 'systems',
		component: classes,
		related_tomes: ['elements'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'colors',
		category: 'styles',
		component: colors,
		related_tomes: ['themes', 'buttons', 'borders', 'shading', 'shadows'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'buttons',
		category: 'styles',
		component: buttons,
		related_tomes: ['colors', 'elements', 'forms', 'borders'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'elements',
		category: 'styles',
		component: elements,
		related_tomes: ['buttons', 'forms', 'classes', 'typography', 'borders', 'layout'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'forms',
		category: 'styles',
		component: forms,
		related_tomes: ['buttons', 'elements', 'borders'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'typography',
		category: 'styles',
		component: typography,
		related_tomes: ['themes', 'elements'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'borders',
		category: 'styles',
		component: borders,
		related_tomes: ['colors', 'buttons', 'elements', 'forms', 'shading', 'shadows'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'shading',
		category: 'styles',
		component: shading,
		related_tomes: ['colors', 'borders', 'shadows'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'shadows',
		category: 'styles',
		component: shadows,
		related_tomes: ['colors', 'borders', 'shading'],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'layout',
		category: 'styles',
		component: layout,
		related_tomes: ['elements'],
		related_modules: [],
		related_identifiers: [],
	},
	// TODO maybe? or do styles like this belong elsewhere? classes? problem is we'll have a classes page for the variables
	// {
	// 	name: 'menu item',
	// 	category: 'styles',
	// component: menu_item,
	// 	related_tomes: [],
	// related_modules: [],
	// related_identifiers: [],
	// },
];
