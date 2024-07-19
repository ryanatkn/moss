export const size_variants = [
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xl2',
	'xl3',
	'xl4',
	'xl5',
	'xl6',
	'xl7',
	'xl8',
	'xl9',
];

export const size_names = size_variants.map((s) => 'size_' + s);

export const space_variants = [
	'xs5',
	'xs4',
	'xs3',
	'xs2',
	'xs',
	'sm',
	'md',
	'lg',
	'xl',
	'xl2',
	'xl3',
	'xl4',
	'xl5',
	'xl6',
	'xl7',
	'xl8',
	'xl9',
	'xl10',
	'xl11',
	'xl12',
	'xl13',
	'xl14',
	'xl15',
];

export const radius_variants = ['xs3', 'xs2', 'xs', 'sm', 'md', 'lg', 'xl'];

export const line_height_variants = ['xs', 'sm', 'md', 'lg', 'xl'];

export const line_height_names = line_height_variants.map((s) => 'line_height_' + s);

export const shadow_variants = ['xs', 'sm', 'md', 'lg', 'xl'];

// TODO maybe put this inline? factor out the pieces with `icon_size_variants`?
export const icon_sizes = {
	icon_size_xs: '18px',
	icon_size_sm: '32px',
	icon_size_md: '48px',
	icon_size_lg: '80px',
	icon_size_xl: '128px',
	icon_size_xl2: '192px',
	icon_size_xl3: '256px',
};

export const color_variants = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
