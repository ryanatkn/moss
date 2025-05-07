<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const style_global_values = 'inherit|initial|revert|revert_layer|unset';

	// TODO show these with `Details` hiding their expanded set of values (interpolated using this shorthand as the source of truth? isn't that complex)
	const style_utility_groups: Array<{group: string; items: Array<string>}> = [
		{
			group: 'Position and display',
			items: [
				`position_static|relative|absolute|fixed|sticky|${style_global_values}`,
				// TODO think about making `display_` bold, and making this more systematic in general
				`display_none|contents|block|flow_root|inline|inline_block|run_in|list_item|inline_list_item|flex|inline_flex|grid|inline_grid|ruby|block_ruby|table|inline_table|${style_global_values}`,
				'float_none|left|right|inline_start|inline_end',
				`visibility_visible|hidden|collapse|${style_global_values}`,
				'opacity_0|10-100',
				'overflow_auto|hidden|scroll|clip|visible',
				'overflow_x|y_auto|hidden|scroll|clip|visible',
				`overflow_wrap_normal|anywhere|break_word|${style_global_values}`,
				`scrollbar_width_auto|thin|none|${style_global_values}`,
				`scrollbar_gutter_auto|stable|stable_both_edges|${style_global_values}`,
			],
		},
		{
			group: 'Flexbox and grid',
			items: [
				'flex_1',
				'flex_wrap|wrap_reverse|nowrap', // TODO @many align with platform
				'flex_row|column|row_reverse|column_reverse',
				'grow|shrink', // TODO @many align with platform ?
				'grow|shrink_0',
				'align_items_center|start|end|baseline|stretch',
				'align_content_center|start|end|baseline|space_between|space_around|space_evenly|stretch',
				'align_self_center|start|end|baseline|stretch',
				'justify_content_center|start|end|left|right|space_between|space_around|space_evenly|stretch',
				'justify_items_center|start|end|left|right|baseline|stretch',
				'justify_self_center|start|end|left|right|baseline|stretch',
			],
		},
		{
			group: 'Sizing and spacing',
			items: [
				'w|h_0|100|1px-3px|auto|max_content|min_content|fit_content|stretch',
				'w|h_xs5-xl15',
				't|b|l|r_0|100|1px-3px|auto',
				't|b|l|r_xs5-xl15',
				'inset_0|1px-3px|xs5-xl15',
				'p|pt|pr|pb|pl|px|py_xs5-xl15',
				'p|pt|pr|pb|pl|px|py_0|1px-3px',
				'pt|pr|pb|pl_100',
				'm|mt|mr|mb|ml|mx|my_xs5-xl15',
				'm|mt|mr|mb|ml|mx|my_0|1px-3px|auto',
				'mt|mr|mb|ml_100',
				'gap_xs5-xl15',
				'column|row_gap_xs5-xl15',
				'width_xs-xl',
				'min_width_xs-xl',
				'height_xs-xl',
				'min_height_xs-xl',
			],
		},
		{
			group: 'Typography',
			items: [
				'font_family_sans|serif|mono',
				'line_height_xs-xl|0|1',
				'font_size_xs-xl9',
				'icon_size_xs-xl3',
				'text_align_start|end|left|right|center|justify|justify_all|match_parent',
				'vertical_align_baseline|sub|super|text_top|text_bottom|middle|top|bottom',
				`word_break_normal|break_all|keep_all|${style_global_values}`,
				'white_space_normal|nowrap|pre|pre_wrap|pre_line|break_spaces',
				`white_space_collapse_collapse|preserve|preserve_breaks|preserve_spaces|break_spaces|${style_global_values}`,
				'text_wrap_wrap|nowrap|balance|pretty|stable',
				`user_select_none|auto|text|all|${style_global_values}`,
				'font_weight_100-900',
				'ellipsis',
			],
		},
		{
			group: 'Colors',
			items: [
				'text_color_0-10',
				'darken|lighten_1-9',
				'bg|fg',
				'bg|fg_1-9',
				'color_darken|lighten_1-9',
				'color_bg|fg',
				'color_bg|fg_1-9',
				'hue_a-i',
				'color_a-i_1-9',
				'bg_a-i_1-9',
			],
		},
		{
			group: 'Borders and outlines',
			items: [
				'border_color_1-5', // TODO change this
				'border_color_a-i',
				'border_color_transparent',
				'border_width_0-9',
				'outline_width_0|focused|active',
				`border_style_none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|${style_global_values}`,
				'border_radius_0|10|20|30|40|50|60|70|80|90|100',
				'border_radius_xs3-xl',
				'border_top|bottom_left|right_radius_0|10|20|30|40|50|60|70|80|90|100',
				'border_top|bottom_left|right_radius_xs3-xl',
			],
		},
		{
			group: 'Shadows',
			items: [
				'shadow_xs-xl',
				'shadow_top|bottom_xs-xl',
				'shadow_inset_xs-xl',
				'shadow_inset_top|bottom_xs-xl',
				'shadow_color_highlight|glow|shroud',
				'shadow_color_a-i',
				'shadow_alpha_1-5',
				'shadow_inherit|none',
			],
		},
		{
			group: 'Transforms and visual effects',
			items: ['flip_x|y|xy', 'pixelated'],
		},
		{
			group: 'Composite classes',
			items: [
				'box',
				'column',
				'row',
				'formatted',
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
			],
		},
	];

	// TODO extract a `Github_Link` like `Mdn_Link`
</script>

<Tome_Content {tome}>
	<Unfinished_Implementation_Warning
		>Both the docs and implementation of these need a lot more work.</Unfinished_Implementation_Warning
	>
	<Tome_Section>
		<Tome_Section_Header text="Optional CSS classes" />
		<p>Moss has three CSS files, two of which are required:</p>
		<Code
			content={`<!-- +layout.svelte -->
${'<' as string}script>
	import '@ryanatkn/moss/style.css'; // required
	import '@ryanatkn/moss/theme.css'; // required, can bring your own
	import '$routes/moss.css'; // optional, generated by \`gro_plugin_moss\`
	// ...
</script>`}
		/>
		<p>
			The <code>moss.css</code> file is created on demand with the utility classes that your code
			uses, if any. For now it requires <a href="https://github.com/ryanatkn/gro">Gro</a> to build
			it, but it isn't hard to make your own integration. See the example integration in
			<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/gro_plugin_moss.ts"
				>gro_plugin_moss.ts</a
			>.
		</p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Utility classes" />
		<p>
			Moss supports utility classes. The API has been drifting to be more consistently match CSS at
			the cost of verbosity.
		</p>
		<p>
			Moss exports <a href="https://github.com/ryanatkn/moss/blob/main/src/lib/css_class_helpers.ts"
				>helpers</a
			> to generate styles on demand based on class usage in your source files, so you can ship the minimal
			code needed.
		</p>
		<aside>
			⚠️ Moss does not fully support <a
				href="https://svelte.dev/docs/svelte/class#Attributes-Objects-and-arrays"
				>Svelte's object+array class syntax</a
			>, added in 5.16. For now see
			<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/css_class_helpers.test.ts"
				>the tests</a
			> for the supported forms. The current strategy uses a regexp for TS and Svelte files, but we'll
			probably need to more robustly scan the parsed AST.
		</aside>
		<div class="utility_classes">
			{#each style_utility_groups as group (group.group)}
				<h4>{group.group}</h4>
				<ul class="unstyled">
					{#each group.items as c (c)}
						<li class="overflow_wrap_break_word">.{c}</li>
					{/each}
				</ul>
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.utility_classes {
		font-family: var(--font_family_mono);
	}
	.utility_classes li {
		padding: var(--space_xs3);
	}
	.utility_classes li:nth-child(odd) {
		background-color: var(--fg_1);
		padding: var(--space_xs3);
	}
</style>
