<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const style_global_values = 'inherit|initial|revert|revert_layer|unset';

	// TODO show these with `Details` hiding their expanded set of values (interpolated using this shorthand as the source of truth? isn't that complex)
	const style_utilities_items = [
		'relative|absolute|fixed|sticky|static',
		'overflow_auto|hidden|scroll|clip|visible',
		'overflow_x|y_auto|hidden|scroll|clip|visible',
		'overflow_wrap_anywhere|break_word',
		`scrollbar_width_auto|thin|none|${style_global_values}`,
		`scrollbar_gutter_auto|stable|stable_both_edges|${style_global_values}`,
		'display_none|contents',
		'inline|inline_block|inline_flex|inline_grid',
		'block',
		'flex',
		'flex_1',
		'flex_wrap|wrap_reverse|nowrap',
		'flex_row|column|row_reverse|column_reverse',
		'grow|shrink',
		'grow|shrink_0',
		'align_items_center|start|end|baseline|stretch',
		'align_content_center|start|end|baseline|space_between|space_around|space_evenly|stretch',
		'align_self_center|start|end|baseline|stretch',
		'justify_content_center|start|end|left|right|space_between|space_around|space_evenly|stretch',
		'justify_items_center|start|end|left|right|baseline|stretch',
		'justify_self_center|start|end|left|right|baseline|stretch',
		'grid',
		'float_none|left|right|inline_start|inline_end',
		'flip_x|y|xy',
		'font_sans|serif|mono',
		'line_height_xs-xl',
		'size_xs-xl9',
		'icon_size_xs-xl3',
		'text_align_start|end|left|right|center|justify|justify_all|match_parent',
		'vertical_align_baseline|sub|super|text_top|text_bottom|middle|top|bottom',
		`word_break_normal|break_all|keep_all|${style_global_values}`, // TODO add `inherit/initial/etc` to the others now that we have on-demand building
		'white_space_normal|nowrap|pre|pre_wrap|pre_line|break_spaces',
		'white_space_collapse_collapse|preserve|preserve_breaks|preserve_spaces|break_spaces',
		'text_wrap_wrap|nowrap|balance|pretty|stable',
		`user_select_none|auto|text|all|${style_global_values}`,
		'font_weight_100-900',
		'text_color_0-10',
		'darken|lighten_1-9',
		'bg|fg',
		'bg|fg_1-9',
		'color_darken|lighten_1-9',
		'color_bg|fg',
		'color_bg|fg_1-9',
		'hue_a-i',
		'color_a-i_1 -9',
		'bg_a-i_1-9',
		'border_color_1-5',
		'border_color_a-i',
		'border_color_transparent',
		'border_width_0-6',
		'outline_width_0-3',
		'border_none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset',
		'radius_0|50|100', // TODO probably add 25/75 or 10-90
		'radius_xs3-xl',
		'fade_0|100',
		'fade_1-6',
		'shadow_xs-xl',
		'shadow_top|bottom_xs-xl',
		'shadow_inset_xs-xl',
		'shadow_inset_top|bottom_xs-xl',
		'shadow_color_highlight|glow|shroud',
		'shadow_color_a-i',
		'shadow_alpha_1-5',
		'shadow_inherit|none',
		'w|h_0|100|auto|max_content|min_content|fit_content|stretch',
		'w|h_xs-xl15',
		't|b|l|r_0|100|auto',
		't|b|l|r_xs-xl15',
		'p|pt|pr|pb|pl|px|py_0',
		'p|pt|pr|pb|pl|px|py_xs5-xl15',
		'm|mt|mr|mb|ml|mx|my_auto',
		'm|mt|mr|mb|ml|mx|my_0',
		'm|mt|mr|mb|ml|mx|my_xs5-xl15',
		'gap_xs5-xl15',
		'column|row_gap_xs5-xl15',
		'pixelated',
		'box',
		'column',
		'row',
		'formatted',
		'ellipsis',
		'width_xs-xl',
		'min_width_xs-xl',
		'selected',
		'selectable',
		'clickable',
		'pane',
		'panel',
		'icon_button',
		'plain',
		'menu_item',
		'chevron',
		'chip',
	];

	// TODO extract a `Github_Link` like `Mdn_Link`
</script>

<Tome_Content {tome}>
	<Unfinished_Implementation_Warning
		>Both the docs and implementation of these need a lot more work.</Unfinished_Implementation_Warning
	>
	<Tome_Section>
		<Tome_Section_Header text="Optional CSS classes" />
		<p>Moss has three CSS files:</p>
		<Code
			content={`<!-- +layout.svelte -->
${'<' as string}script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css'; // or bring your own
	import '$routes/moss.css'; // generated by \`gro_plugin_moss\`
	// ...
</script>`}
		/>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Utility classes" />
		<ul class="classes unstyled">
			{#each style_utilities_items as c (c)}
				<li>.{c}</li>
			{/each}
		</ul>
	</Tome_Section>
</Tome_Content>

<style>
	.classes {
		font-family: var(--font_mono);
	}
	.classes li {
		padding: var(--space_xs3);
	}
	.classes li:hover {
		background-color: var(--bg_3);
	}
</style>
