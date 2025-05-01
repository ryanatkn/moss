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
		related: [],
	},
	{
		name: 'themes',
		category: 'systems',
		component: themes,
		related: ['variables', 'colors', 'typography'],
	},
	{
		name: 'variables',
		category: 'systems',
		component: variables,
		related: ['themes'],
	},
	{
		name: 'classes',
		category: 'systems',
		component: classes,
		related: ['elements'],
	},
	{
		name: 'colors',
		category: 'styles',
		component: colors,
		related: ['themes', 'buttons', 'borders', 'shading', 'shadows'],
	},
	{
		name: 'buttons',
		category: 'styles',
		component: buttons,
		related: ['colors', 'elements', 'forms', 'borders'],
	},
	{
		name: 'elements',
		category: 'styles',
		component: elements,
		related: ['buttons', 'forms', 'classes', 'typography', 'borders', 'layout'],
	},
	{
		name: 'forms',
		category: 'styles',
		component: forms,
		related: ['buttons', 'elements', 'borders'],
	},
	{
		name: 'typography',
		category: 'styles',
		component: typography,
		related: ['themes', 'elements'],
	},
	{
		name: 'borders',
		category: 'styles',
		component: borders,
		related: ['colors', 'buttons', 'elements', 'forms', 'shading', 'shadows'],
	},
	{
		name: 'shading',
		category: 'styles',
		component: shading,
		related: ['colors', 'borders', 'shadows'],
	},
	{
		name: 'shadows',
		category: 'styles',
		component: shadows,
		related: ['colors', 'borders', 'shading'],
	},
	{
		name: 'layout',
		category: 'styles',
		component: layout,
		related: ['elements'],
	},
	// TODO maybe? or do styles like this belong elsewhere? classes? problem is we'll have a classes page for the variables
	// {
	// 	name: 'menu item',
	// 	category: 'styles',
	// component: menu_item,
	// 	related: [],
	// },
];
