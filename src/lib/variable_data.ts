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

export type Shadow_Semantic_Value = Array_Element<typeof shadow_semantic_values>;
export const shadow_semantic_values = ['highlight', 'glow', 'shroud'] as const;

export type Icon_Size_Variant = Array_Element<typeof icon_size_variants>;
export const icon_size_variants = ['xs', 'sm', 'md', 'lg', 'xl', 'xl2', 'xl3'] as const;

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

export type Alignment_Value = Array_Element<typeof alignment_values>;
export const alignment_values = ['center', 'start', 'end', 'baseline', 'stretch'] as const;

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

export type Overflow_Value = Array_Element<typeof overflow_values>;
export const overflow_values = ['auto', 'hidden', 'scroll', 'clip', 'visible'] as const;

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

export type Display_Value = Array_Element<typeof display_values>;
export const display_values = [
	'none',
	'contents',
	'block',
	'flow-root',
	'inline',
	'inline-block',
	'run-in',
	'list-item',
	'inline list-item',
	'flex',
	'inline-flex',
	'grid',
	'inline-grid',
	'ruby',
	'block ruby',
	'table',
	'inline-table',
] as const;

export type Text_Align_Value = Array_Element<typeof text_align_values>;
export const text_align_values = [
	'start',
	'end',
	'left',
	'right',
	'center',
	'justify',
	'justify-all',
	'match-parent',
] as const;

export type Vertical_Align_Value = Array_Element<typeof vertical_align_values>;
export const vertical_align_values = [
	'baseline',
	'sub',
	'super',
	'text-top',
	'text-bottom',
	'middle',
	'top',
	'bottom',
] as const;

export type Word_Break_Value = Array_Element<typeof word_break_values>;
export const word_break_values = ['normal', 'break-all', 'keep-all'] as const;

export type Position_Value = Array_Element<typeof position_values>;
export const position_values = ['static', 'relative', 'absolute', 'fixed', 'sticky'] as const;

export type Visibility_Value = Array_Element<typeof visibility_values>;
export const visibility_values = ['visible', 'hidden', 'collapse'] as const;

export type Float_Value = Array_Element<typeof float_values>;
export const float_values = ['none', 'left', 'right', 'inline-start'] as const;

export type Flex_Wrap_Value = Array_Element<typeof flex_wrap_values>;
export const flex_wrap_values = ['nowrap', 'wrap', 'wrap-reverse'] as const;

export type Flex_Direction_Value = Array_Element<typeof flex_direction_values>;
export const flex_direction_values = ['row', 'row-reverse', 'column', 'column-reverse'] as const;

export type Overflow_Wrap_Value = Array_Element<typeof overflow_wrap_values>;
export const overflow_wrap_values = ['normal', 'anywhere', 'break-word'] as const;

export type Scrollbar_Width_Value = Array_Element<typeof scrollbar_width_values>;
export const scrollbar_width_values = ['auto', 'thin', 'none'] as const;

export type Scrollbar_Gutter_Value = Array_Element<typeof scrollbar_gutter_values>;
export const scrollbar_gutter_values = ['auto', 'stable', 'stable both-edges'] as const;

/**
 * Maximum value for CSS z-index property (32-bit signed integer max).
 */
export const Z_INDEX_MAX = 2_147_483_647;
