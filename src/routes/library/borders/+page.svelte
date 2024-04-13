<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import {radius_variants} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'borders';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);
</script>

<Tome_Detail {tome}>
	<!-- TODO  -->
	<!-- <div>border_disabled</div> -->
	<!-- <div>border_color</div> -->
	<!-- <div>border_style</div> -->
	<!-- <div>border_width</div> -->
	<!-- <div>outline_width</div> -->
	<!-- <div>outline_style</div> -->
	<!-- <div>outline_color</div> -->

	<section>
		<Tome_Subheading text="Border colors" slug="border-colors" />
		<aside>TODO needs work</aside>
		<div class="border_examples border_colors">
			{#each {length: 5} as _, i}
				{@const name = 'border_color_' + (i + 1)}
				<div class="border_color_outer">
					<div class="border_color_inner">
						<div class="border_example border_color" style:border-color="var(--{name})">
							<Style_Variable_Button {name} />
						</div>
						{#each {length: 5} as _, i}
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
	</section>

	<section>
		<Tome_Subheading text="Border widths" slug="border-widths" />
		<div class="border_examples border_widths">
			{#each {length: 6} as _, i}
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
	</section>

	<section>
		<Tome_Subheading text="Outline widths" slug="outline-widths" />
		<div class="border_examples outline_widths">
			{#each {length: 3} as _, i}
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
	</section>

	<section>
		<Tome_Subheading text="Border radius" slug="border-radius" />
		<div class="border_examples border_radii">
			{#each radius_variants as radius}
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
	</section>
</Tome_Detail>

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
