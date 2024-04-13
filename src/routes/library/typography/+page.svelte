<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Font_Weight_Control from '$routes/Font_Weight_Control.svelte';
	import Font_Size_Control from '$routes/Font_Size_Control.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {default_variables} from '$lib/variables.js';
	import {get_tome} from '$lib/tome.js';
	import Icon_Sizes from '$routes/library/typography/Icon_Sizes.svelte';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {line_height_names, size_names} from '$lib/variable_data.js';
	import Details from '$lib/Details.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'typography';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO refactor
	const font_weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

	const size_variants = default_variables.filter((p) => size_names.includes(p.name));

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);

	// TODO selected_font_family
	let selected_font_weight = $state(400);
	let selected_size = $state(3);
</script>

<Tome_Detail {tome}>
	<section>
		<h1 title="--size_xl3">h1</h1>
		<h2 title="--size_xl2">h2</h2>
		<h3 title="--size_xl">h3</h3>
		<h4 title="--size_lg">h4</h4>
		<h5 title="--size_md">h5</h5>
		<h6 title="--size_sm">h6</h6>
		<p>paragraphs</p>
		<p>paragraphs</p>
		<p>paragraphs</p>
		<p>p with some <small>small</small> text</p>
		<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
		<Details>
			{#snippet summary()}show code{/snippet}
			<Code
				content={`<section>
	<h1 title="--size_xl3">h1</h1>
	<h2 title="--size_xl2">h2</h2>
	<h3 title="--size_xl">h3</h3>
	<h4 title="--size_lg">h4</h4>
	<h5 title="--size_md">h5</h5>
	<h6 title="--size_sm">h6</h6>
	<p>paragraphs</p>
	<p>paragraphs</p>
	<p>paragraphs</p>
	<p>p with some <small>small</small> text</p>
	<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
	<Details>
		{#snippet summary()}show code{/snippet}
		<Code ... />
	</Details>
</section>`}
			/>
		</Details>
	</section>
	<section>
		<Tome_Subheading text="Font sizes" slug="font-sizes" />
		<form class="width_sm">
			<Font_Weight_Control bind:selected_font_weight></Font_Weight_Control>
		</form>
		{#each size_variants as size (size.name)}
			<div class="row wrap">
				<Style_Variable_Button attrs={{title: size.light}} name={size.name}
					><span
						style:font-size="var(--{size.name})"
						style:font-weight={selected_font_weight}
						class="font_sans">{size.name}</span
					></Style_Variable_Button
				>
				<div class="row">
					<span class="pr_sm">=</span>
					<code>{computed_styles?.getPropertyValue('--' + size.name)}</code>
				</div>
			</div>
		{/each}
	</section>
	<section>
		<!-- TODO add a slider for the font size here -->
		<Tome_Subheading text="Font weights" slug="font-weight" />
		<aside>
			There are no variables for <Mdn_Link href="Web/CSS/font-weight" /> but there are utility
			<Tome_Link name="classes" hash="utility-classes">utility classes</Tome_Link>.
		</aside>
		<form>
			<Font_Size_Control bind:selected_size />
		</form>
		<div>
			{#each font_weights as font_weight}
				<div
					class="nowrap"
					style:font-weight={font_weight}
					style:font-size="var(--{size_names[selected_size - 1]})"
				>
					font-weight: {font_weight}
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Tome_Subheading text="Text colors" slug="text-colors">Text colors</Tome_Subheading>
		<aside>TODO needs work</aside>
		<div>
			{#each {length: 3} as _, i}
				{@const name = 'text_' + (i + 1)}
				<div class="row">
					<Style_Variable_Button {name}
						><span style:color="var(--{name})">
							{name}
						</span></Style_Variable_Button
					> = <code>{computed_styles?.getPropertyValue('--' + name)}</code>
				</div>
			{/each}
		</div>
	</section>
	<!-- <section> 'text_disabled' 'text_active'</section> -->
	<section>
		<Tome_Subheading text="Line heights" slug="line-height" />
		<aside>Learn more about <Mdn_Link href="Web/CSS/line-height" />.</aside>
		<div>
			{#each line_height_names as name}
				<div class="spaced">
					<Style_Variable_Button {name}
						><div style:line-height="var(--{name})" class="button_contents">
							<div>
								{name} =
								<code class="font_mono">{computed_styles?.getPropertyValue('--' + name)}</code>
							</div>
							<div>{name}</div>
							<div>{name}</div>
						</div></Style_Variable_Button
					>
				</div>
			{/each}
		</div>
	</section>
	<Icon_Sizes />
</Tome_Detail>

<style>
	.button_contents {
		font-weight: normal;
		text-align: left;
		padding: var(--space_sm) 0;
	}
</style>
