<script lang="ts">
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';

	import {color_variants, radius_variants} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'borders';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);

	// TODO add `border_style_` variables from data
</script>

<Tome_Content {tome}>
	<!-- TODO  -->
	<!-- <div>border_color</div> -->
	<!-- <div>border_style</div> -->
	<!-- <div>border_width</div> -->
	<!-- <div>outline_width</div> -->
	<!-- <div>outline_style</div> -->
	<!-- <div>outline_color</div> -->

	<Tome_Section>
		<Tome_Section_Header text="Border colors" />
		<Unfinished_Implementation_Warning />
		<div class="border_examples border_colors">
			{#each {length: 5} as _, i (i)}
				{@const name = 'border_color_' + (i + 1)}
				<div class="border_color_outer">
					<div class="border_color_inner">
						<div class="border_example border_color" style:border-color="var(--{name})">
							<Style_Variable_Button {name} />
						</div>
						{#each {length: 5} as _, i (i)}
							<div
								class="border_color_width"
								style:border-color="var(--{name})"
								style:border-width="var(--{'border_width_' + (i + 2)})"
							></div>
						{/each}
					</div>
					<div>
						<span class="pl_sm pr_sm">=</span><code
							>{computed_styles?.getPropertyValue('--' + name)}</code
						>
					</div>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Colorful border variants" />
		<Unfinished_Implementation_Warning />
		<div class="border_examples border_colors">
			{#each color_variants as color_variant (color_variant)}
				{@const name = 'border_color_' + color_variant}
				<div class="border_color_outer">
					<div class="border_color_inner">
						<div class="border_example border_color" style:border-color="var(--{name})">
							<Style_Variable_Button {name} />
						</div>
						{#each {length: 5} as _, i (i)}
							<div
								class="border_color_width"
								style:border-color="var(--{name})"
								style:border-width="var(--{'border_width_' + (i + 2)})"
							></div>
						{/each}
					</div>
					<div>
						<span class="pl_sm pr_sm">=</span><code
							>{computed_styles?.getPropertyValue('--' + name)}</code
						>
					</div>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Border widths" />
		<Unfinished_Implementation_Warning />
		<div class="border_examples border_widths">
			{#each {length: 6} as _, i (i)}
				{@const name = 'border_width_' + (i + 1)}
				<div class="row">
					<div class="border_example border_width" style:border-width="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
					<span class="pl_sm pr_sm">=</span><code
						>{computed_styles?.getPropertyValue('--' + name)}</code
					>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Outline widths" />
		<div class="border_examples outline_widths">
			{#each {length: 3} as _, i (i)}
				{@const name = 'outline_width_' + (i + 1)}
				<div class="row">
					<div class="border_example outline_width" style:outline-width="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
					<span class="pl_sm pr_sm">=</span><code
						>{computed_styles?.getPropertyValue('--' + name)}</code
					>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Border radius" />
		<div class="border_examples border_radii">
			{#each radius_variants as radius (radius)}
				{@const name = 'radius_' + radius}
				<div class="row">
					<div class="border_example border_radius" style:border-radius="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
					<span class="pl_sm pr_sm">=</span><code
						>{computed_styles?.getPropertyValue('--' + name)}</code
					>
				</div>
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.border_examples {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border_example {
		width: 200px;
		display: flex;
		justify-content: center;
		margin-bottom: var(--space_md);
		padding: var(--space_md);
	}

	.border_colors .border_example {
		margin-bottom: var(--space_xs2);
	}
	.border_color_outer {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: var(--space_md);
	}
	.border_color_inner {
		display: flex;
	}
	.border_color {
		border-width: 1px;
		border-style: solid;
	}
	.border_color_width {
		border-style: solid;
		padding: 2px;
		margin-left: var(--space_xs2);
		margin-bottom: var(--space_xs2);
	}

	.border_width {
		border-color: var(--border_color_5);
		border-style: solid;
	}

	.outline_width {
		outline-color: var(--outline_color);
		outline-style: solid;
	}

	.border_radii .border_example {
		padding: var(--space_xl5) var(--space_md);
	}
	.border_radius {
		background-color: var(--fg_2);
	}
</style>
