<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Details from '@ryanatkn/fuz/Details.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Font_Weight_Control from '$routes/Font_Weight_Control.svelte';
	import Font_Size_Control from '$routes/Font_Size_Control.svelte';
	import {default_variables} from '$lib/variables.js';
	import Icon_Sizes from '$routes/library/typography/Icon_Sizes.svelte';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {line_height_names, size_names, text_variants} from '$lib/variable_data.js';

	const LIBRARY_ITEM_NAME = 'typography';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO refactor
	const font_weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

	const size_variants = default_variables.filter((p) => size_names.includes(p.name));

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);

	// TODO selected_font_family
	let selected_font_weight = $state(400);
	let selected_size = $state(3);
</script>

<Tome_Content {tome}>
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
	<Tome_Section>
		<Tome_Section_Header text="Font sizes" />
		<form class="width_sm">
			<Font_Weight_Control bind:selected_font_weight></Font_Weight_Control>
		</form>
		{#each size_variants as size (size.name)}
			<div class="row flex_wrap">
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
	</Tome_Section>
	<Tome_Section>
		<!-- TODO add a slider for the font size here -->
		<Tome_Section_Header text="Font weights" />
		<aside>
			There are no variables for <Mdn_Link path="Web/CSS/font-weight" /> but there are
			<Tome_Link name="classes" hash="utility-classes">utility classes</Tome_Link>.
		</aside>
		<form>
			<Font_Size_Control bind:selected_size />
		</form>
		<div>
			{#each font_weights as font_weight (font_weight)}
				<div
					class="white_space_nowrap"
					style:font-weight={font_weight}
					style:font-size="var(--{size_names[selected_size - 1]})"
				>
					font-weight: {font_weight}
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Text colors">Text colors</Tome_Section_Header>
		<Unfinished_Implementation_Warning>
			Add color-scheme-adaptive versions?
		</Unfinished_Implementation_Warning>
		<div class="panel">
			{#each text_variants as text_variant (text_variant)}
				{@const name = 'text_color_' + text_variant}
				<div class="row">
					<Style_Variable_Button {name}
						><span class="font_mono" style:color="var(--{name})">
							{name}
						</span></Style_Variable_Button
					> = <code>{computed_styles?.getPropertyValue('--' + name)}</code>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<!-- <section> 'text_color_disabled' 'text_active'</section> -->
	<Tome_Section>
		<Tome_Section_Header text="Line heights" />
		<aside>Learn more about <Mdn_Link path="Web/CSS/line-height" />.</aside>
		<div>
			{#each line_height_names as name (name)}
				<div>
					<Style_Variable_Button {name}
						><div style:line-height="var(--{name})" class="button_contents font_mono">
							<div>
								{name} =
								<code>{computed_styles?.getPropertyValue('--' + name)}</code>
							</div>
							<div>{name}</div>
							<div>{name}</div>
						</div></Style_Variable_Button
					>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Icon_Sizes />
</Tome_Content>

<style>
	.button_contents {
		font-weight: normal;
		text-align: left;
		padding: var(--space_sm) 0;
	}
</style>
