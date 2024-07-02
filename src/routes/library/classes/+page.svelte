<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import Github_Logo from '@ryanatkn/fuz/Github_Logo.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Details from '@ryanatkn/fuz/Details.svelte';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import style_utilities_text from '$lib/style_utilities.css?raw';
	import style_components_text from '$lib/style_components.css?raw';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO show these with `Details` hiding their expanded set of values (interpolated using this shorthand as the source of truth? isn't that complex)
	const style_utilities_items = [
		'relative|absolute|fixed|sticky|static',
		'overflow_auto|hidden|scroll|clip|visible',
		'overflow_x|y_auto|hidden|scroll|clip|visible',
		'inline|inline_block|block|flex|grid',
		'display_none|contents',
		'flex_1',
		'box',
		'row',
		'wrap|nowrap',
		'float_none|left|right|inline_start|inline_end',
		'flip_x|y|xy',
		'font_sans|mono',
		'line_height',
		'line_height_xs-xl',
		'size_xs-xl9',
		'icon_size_xs-xl2',
		'text_align_center|right|left|justify',
		'font_weight_100-900',
		'ellipsis',
		'pixelated',
		'text_1-3',
		'darken|lighten_1-9',
		'bg|fg',
		'bg|fg_1-9',
		'color_darken|lighten_1-9',
		'color_bg|fg',
		'color_bg|fg_1-9',
		'hue_a-g',
		'color_a-g_1 -9',
		'bg_a-g_1-9',
		'border_color_1-5',
		'border_width_1-6',
		'outline_width_1-3',
		'border_none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset',
		'radius_0|50|100', // TODO probably add 25/75 or 10-90
		'radius_xs3-xl',
		'fade_0|100',
		'fade_1-6',
		'shadow_xs-xl',
		'shadow_inset|outset_xs-xl',
		'shadow_inherit|initial|none',
		'w|h_0|100',
		'w|h_xs-xl15',
		'p|pt|pr|pb|pl|px|py_0',
		'p|pt|pr|pb|pl|px|py_xs5-xl15',
		'm|mx|my_auto',
		'm|mt|mr|mb|ml|mx|my_0',
		'm|mt|mr|mb|ml|mx|my_xs5-xl15',
		'gap_xs5-xl15',
		'row|column_gap_xs5-xl15',
	];
	const style_components_items = [
		'selectable',
		'pane',
		'panel',
		'icon_button',
		'plain',
		'menu_item',
		'chevron',
		'chip',
		'formatted',
		'width_xs-md',
	];

	// TODO extract a `Github_Link` like `Mdn_Link`
</script>

<Tome_Detail {tome}>
	<Unfinished_Implementation_Warning
		>Both the docs and implementation of these need more work.</Unfinished_Implementation_Warning
	>
	<section>
		<Tome_Subheading text="Optional CSS classes" slug="css-classes" />
		<p>Moss has three optional CSS files with different kinds of classes:</p>
		<Code
			content={`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css'; // or bring your own
	// or import individual parts of \`@ryanatkn/moss/style.css\`:
	import '@ryanatkn/moss/style_reset.css'; // required
	import '@ryanatkn/moss/style_utilities.css'; // optional
	import '@ryanatkn/moss/style_components.css'; // optional
	import '@ryanatkn/moss/style_animations.css'; // optional
	// ...`}
		/>
		<p>
			Utility classes use plain CSS for convenient HTML authoring. Many are based on Moss style <Tome_Link
				name="variables"
			/>.
		</p>
		<p>Component classes are semantic groupings of styles.</p>
		<aside>
			Unused clases can be removed with build tooling, which is out of scope for Moss, and with a
			more sophisticated architecture these classes could potentially be generated on demand instead
			of distributed as static files.
		</aside>
	</section>
	<section>
		<Tome_Subheading text="Utility classes" slug="utility-classes" />
		<ul class="classes unstyled">
			{#each style_utilities_items as c}
				<li>.{c}</li>
			{/each}
		</ul>
	</section>
	<section>
		<Tome_Subheading text="Component classes" slug="semantic-classes" />
		<aside>
			These are like utility classes but don't map as cleanly to a single style property.
		</aside>
		<ul class="classes unstyled">
			{#each style_components_items as c}
				<li>.{c}</li>
			{/each}
		</ul>
	</section>
	<section>
		<Tome_Subheading text="Raw CSS" slug="raw-css" />
		<!-- TODO maybe add a github source link? -->
		<Details>
			{#snippet summary()}
				<span class="font_mono">@ryanatkn/moss/style_utilities.css</span>
			{/snippet}
			<p class="source_link">
				<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/style_utilities.css"
					><Github_Logo size="var(--icon_size_xs)" /> <span class="ml_xs">source</span></a
				>
			</p>
			<Code content={style_utilities_text} lang="css" />
		</Details>
		<Details>
			{#snippet summary()}
				<span class="font_mono">@ryanatkn/moss/style_components.css</span>
			{/snippet}
			<p class="source_link">
				<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/style_components.css"
					><Github_Logo size="var(--icon_size_xs)" /> <span class="ml_xs">source</span></a
				>
			</p>
			<Code content={style_components_text} lang="css" />
		</Details>
	</section>
</Tome_Detail>

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
	.source_link {
		display: flex;
		margin-bottom: var(--space_lg);
	}
	.source_link a {
		display: flex;
		align-items: center;
	}
</style>
