import type {Array_Element} from '@ryanatkn/belt/types.js';

export type Size_Variant = Array_Element<typeof font_size_variants>;
export const font_size_variants = [
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

export const font_size_names = font_size_variants.map((s) => 'font_size_' + s);

export type Font_Family_Variant = Array_Element<typeof font_family_variants>;
export const font_family_variants = [
	'font_family_sans',
	'font_family_serif',
	'font_family_mono',
] as const;

export type Text_Color_Variant = Array_Element<typeof text_color_variants>;
export const text_color_variants = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export type Space_Variant = Array_Element<typeof space_variants>;
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

export type Distance_Variant = Array_Element<typeof distance_variants>;
export const distance_variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type Border_Radius_Variant = Array_Element<typeof border_radius_variants>;
export const border_radius_variants = ['xs3', 'xs2', 'xs', 'sm', 'md', 'lg', 'xl'] as const;

export type Line_Height_Variant = Array_Element<typeof line_height_variants>;
export const line_height_variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const line_height_names = line_height_variants.map((s) => 'line_height_' + s);

export const shadow_variant_prefixes = [
	'shadow_',
	'shadow_top_',
	'shadow_bottom_',
	'shadow_inset_',
	'shadow_inset_top_',
	'shadow_inset_bottom_',
] as const;

export type Shadow_Size_Variant = Array_Element<typeof shadow_font_size_variants>;
export const shadow_font_size_variants = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export type Shadow_Alpha_Variant = Array_Element<typeof shadow_alpha_variants>;
export const shadow_alpha_variants = [1, 2, 3, 4, 5] as const;

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

export type Color_Variant = Array_Element<typeof color_variants>;
export const color_variants = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] as const;

export type Border_Distance_Variant = Array_Element<typeof border_distance_variants>;
export const border_distance_variants = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export type Outline_Distance_Variant = Array_Element<typeof outline_distance_variants>;
export const outline_distance_variants = ['focus', 'active'] as const;

// Common alignment values used in flexbox/grid properties
export type Alignment_Value = Array_Element<typeof alignment_values>;
export const alignment_values = ['center', 'start', 'end', 'baseline', 'stretch'] as const;

// Common flexbox justify values
export type Justify_Value = Array_Element<typeof justify_values>;
export const justify_values = [
	'center',
	'start',
	'end',
	'left',
	'right',
	'space-between',
	'space-around',
	'space-evenly',
	'stretch',
] as const;

// Overflow property values
export type Overflow_Value = Array_Element<typeof overflow_values>;
export const overflow_values = ['auto', 'hidden', 'scroll', 'clip', 'visible'] as const;

// Border style values
export type Border_Style_Value = Array_Element<typeof border_style_values>;
export const border_style_values = [
	'none',
	'hidden',
	'dotted',
	'dashed',
	'solid',
	'double',
	'groove',
	'ridge',
	'inset',
	'outset',
] as const;
