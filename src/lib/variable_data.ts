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
] as const;

export const size_names = size_variants.map((s) => 'size_' + s);

export const text_variants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

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
] as const;

export const radius_variants = ['xs3', 'xs2', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

export const line_height_variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const line_height_names = line_height_variants.map((s) => 'line_height_' + s);

export const shadow_variant_prefixes = [
	'shadow_',
	'shadow_inset_',
	'shadow_outset_',
	'shadow_inner_',
	'shadow_outer_',
] as const;
export const shadow_size_variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const shadow_weight_variants = [1, 2, 3, 4, 5] as const;

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

export const color_variants = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'] as const;
