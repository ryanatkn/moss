<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {color_variants, shadow_variants} from '$lib/variable_data.js';

	const LIBRARY_ITEM_NAME = 'shadows';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO this is a good usecase for h4 subheadings

	// <!-- TODO BLOCK -->
</script>

<Tome_Detail {tome}>
	<section>
		<Tome_Subheading text="Shadow variants" slug="shadow-variants" />
		{#each shadow_variants as variant}
			<div class="shadow_example shadow_{variant}">
				<Style_Variable_Button name="shadow_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div class="shadow_example shadow_inset_{variant}">
				<Style_Variable_Button name="shadow_inset_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div class="shadow_example shadow_outset_{variant}">
				<Style_Variable_Button name="shadow_outset_{variant}" />
			</div>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Colorful shadow variants" slug="colorful-shadow-variants" />
		{#each color_variants as color_variant}
			<section class="shadow_color_{color_variant}">
				{#each shadow_variants as variant}
					<div
						class="row shadow_example shadow_{variant} {variant === 'lg'
							? 'shadow_example_lg'
							: ''}"
					>
						<Style_Variable_Button name="shadow_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}" />
					</div>
				{/each}
				{#each shadow_variants as variant}
					<div class="row shadow_example shadow_inset_{variant}">
						<Style_Variable_Button name="shadow_inset_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}" />
					</div>
				{/each}
				{#each shadow_variants as variant}
					<div class="row shadow_example shadow_outset_{variant}">
						<Style_Variable_Button name="shadow_outset_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}" />
					</div>
				{/each}
			</section>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
</Tome_Detail>

<style>
	.swatch {
		font-family: var(--font_mono);
		margin-bottom: var(--space_md);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
		grid-auto-flow: row;
	}
	.color {
		height: var(--input_height_sm);
	}
	.shadow_example {
		position: relative;
		padding: var(--space_md);
		font-family: var(--font_mono);
		border-radius: var(--radius_xs3);
	}
	.shadow_example:not(:last-child) {
		margin-bottom: var(--space_lg);
	}
	small {
		height: var(--input_height_sm);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
