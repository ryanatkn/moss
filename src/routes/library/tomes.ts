import {init_tome, type Tome} from '@ryanatkn/fuz/tome.js';

import introduction from '$routes/library/introduction/+page.svelte';
import themes from '$routes/library/themes/+page.svelte';
import colors from '$routes/library/colors/+page.svelte';
import buttons from '$routes/library/buttons/+page.svelte';
import forms from '$routes/library/forms/+page.svelte';
import elements from '$routes/library/elements/+page.svelte';
import classes from '$routes/library/classes/+page.svelte';
import typography from '$routes/library/typography/+page.svelte';
import variables from '$routes/library/variables/+page.svelte';
import layout from '$routes/library/layout/+page.svelte';
import shading from '$routes/library/shading/+page.svelte';
import shadows from '$routes/library/shadows/+page.svelte';
import borders from '$routes/library/borders/+page.svelte';
// import menu_item from '$routes/library/menu_item/+page.svelte';

// TODO maybe decouple `related` from `Tome` to get bidirectionality for free

export const tomes: Tome[] = [
	{
		name: 'introduction',
		slug: 'introduction',
		pathname: '',
		category: 'guide',
		component: introduction,
		related: [],
	},
	{
		name: 'themes',
		slug: 'themes',
		pathname: '',
		category: 'systems',
		component: themes,
		related: ['variables', 'colors', 'typography'],
	},
	{
		name: 'variables',
		slug: 'variables',
		pathname: '',
		category: 'systems',
		component: variables,
		related: ['themes'],
	},
	{
		name: 'classes',
		slug: 'classes',
		pathname: '',
		category: 'systems',
		component: classes,
		related: ['elements'],
	},
	{
		name: 'colors',
		slug: 'colors',
		pathname: '',
		category: 'styles',
		component: colors,
		related: ['themes', 'buttons', 'borders', 'shading', 'shadows'],
	},
	{
		name: 'buttons',
		slug: 'buttons',
		pathname: '',
		category: 'styles',
		component: buttons,
		related: ['colors', 'elements', 'forms', 'borders'],
	},
	{
		name: 'elements',
		slug: 'elements',
		pathname: '',
		category: 'styles',
		component: elements,
		related: ['buttons', 'forms', 'classes', 'typography', 'borders', 'layout'],
	},
	{
		name: 'forms',
		slug: 'forms',
		pathname: '',
		category: 'styles',
		component: forms,
		related: ['buttons', 'elements', 'borders'],
	},
	{
		name: 'typography',
		slug: 'typography',
		pathname: '',
		category: 'styles',
		component: typography,
		related: ['themes', 'elements'],
	},
	{
		name: 'borders',
		slug: 'borders',
		pathname: '',
		category: 'styles',
		component: borders,
		related: ['colors', 'buttons', 'elements', 'forms', 'shading', 'shadows'],
	},
	{
		name: 'shading',
		slug: 'shading',
		pathname: '',
		category: 'styles',
		component: shading,
		related: ['colors', 'borders', 'shadows'],
	},
	{
		name: 'shadows',
		slug: 'shadows',
		pathname: '',
		category: 'styles',
		component: shadows,
		related: ['colors', 'borders', 'shading'],
	},
	{
		name: 'layout',
		slug: 'layout',
		pathname: '',
		category: 'styles',
		component: layout,
		related: ['elements'],
	},
	// TODO maybe? or do styles like this belong elsewhere? classes? problem is we'll have a classes page for the variables
	// {
	// 	name: 'menu item',
	// 	slug: 'menu_item',
	// 	pathname: '',
	// 	category: 'styles',
	// component: menu_item,
	// 	related: [],
	// },
];

for (const t of tomes) init_tome(t);
