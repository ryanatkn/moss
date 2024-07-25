<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {color_variants, shadow_variants} from '$lib/variable_data.js';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shadows';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO BLOCK fg/bg instead? 1-5? or shadow_color_1-5? shadow_alpha_1-5? or the existing `--fade`?
</script>

<Tome_Detail {tome}>
	<section>
		<Tome_Subheading text="Shadows" slug="shadows" />
		<p>Shadows darken in light mode and lighten in dark mode.</p>
		<Unfinished_Implementation_Warning
			>Maybe rename for clarity? It's weird that shadows lighten in dark mode.</Unfinished_Implementation_Warning
		>
		{#each shadow_variants as shadow_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_{shadow_variant}) var(--shadow_color_{shadow_variant})"
				>
					<Style_Variable_Button name="shadow_{shadow_variant}" />
					<Style_Variable_Button name="shadow_color_{shadow_variant}" />
				</div>
				{@render shadow_variant_examples(null, shadow_variant, 'shadow')}
			</div>
		{/each}
		{#each shadow_variants as shadow_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_inset_{shadow_variant}) var(--shadow_color_{shadow_variant})"
				>
					<Style_Variable_Button name="shadow_inset_{shadow_variant}" />
					<Style_Variable_Button name="shadow_color_{shadow_variant}" />
				</div>
				{@render shadow_variant_examples(null, shadow_variant, 'shadow')}
			</div>
		{/each}
		{#each shadow_variants as shadow_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--shadow_color_{shadow_variant})"
				>
					<Style_Variable_Button name="shadow_outset_{shadow_variant}" />
					<Style_Variable_Button name="shadow_color_{shadow_variant}" />
				</div>
				{@render shadow_variant_examples(null, shadow_variant, 'shadow')}
			</div>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Highlights" slug="highlights" />
		<p>Hightlights lighten in light mode and darken in dark mode.</p>
		<div class="panel fg_3 p_md">
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_variant}) var(--highlight_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_{shadow_variant}" />
						<Style_Variable_Button name="highlight_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'highlight')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_variant}) var(--highlight_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_variant}" />
						<Style_Variable_Button name="highlight_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'highlight')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--highlight_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_variant}" />
						<Style_Variable_Button name="highlight_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'highlight')}
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Glows" slug="glows" />
		<p>Glows lighten in both light and dark mode.</p>
		<div class="panel darken_3 p_md">
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_variant}) var(--glow_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_{shadow_variant}" />
						<Style_Variable_Button name="glow_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'glow')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_variant}) var(--glow_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_variant}" />
						<Style_Variable_Button name="glow_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'glow')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--glow_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_variant}" />
						<Style_Variable_Button name="glow_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'glow')}
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Shrouds" slug="shrouds" />
		<p>Shrouds darken in both light and dark mode.</p>
		<div class="panel lighten_3 p_md">
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_variant}) var(--shroud_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_{shadow_variant}" />
						<Style_Variable_Button name="shroud_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'shroud')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_variant}) var(--shroud_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_variant}" />
						<Style_Variable_Button name="shroud_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'shroud')}
				</div>
			{/each}
			{#each shadow_variants as shadow_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--shroud_color_{shadow_variant})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_variant}" />
						<Style_Variable_Button name="shroud_color_{shadow_variant}" />
					</div>
					{@render shadow_variant_examples(null, shadow_variant, 'shroud')}
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Colorful glows" slug="colorful-glows" />
		<p>These are darker in light mode than in dark mode.</p>
		{#each color_variants as color_variant}
			{@const classes = 'color_' + color_variant}
			<section>
				{#each shadow_variants as shadow_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_{shadow_variant}) var(--shadow_color_{color_variant}_{shadow_variant})"
						>
							<Style_Variable_Button name="shadow_{shadow_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{shadow_variant}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(color_variant, shadow_variant, 'shadow')}
					</div>
				{/each}
				{#each shadow_variants as shadow_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_inset_{shadow_variant}) var(--shadow_color_{color_variant}_{shadow_variant})"
						>
							<Style_Variable_Button name="shadow_inset_{shadow_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{shadow_variant}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(color_variant, shadow_variant, 'shadow')}
					</div>
				{/each}
				{#each shadow_variants as shadow_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--shadow_color_{color_variant}_{shadow_variant})"
						>
							<Style_Variable_Button name="shadow_outset_{shadow_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{shadow_variant}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(color_variant, shadow_variant, 'shadow')}
					</div>
				{/each}
			</section>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
</Tome_Detail>

{#snippet shadow_variant_examples(
	color_variant: string | null,
	shadow_variant: string,
	shadow_type: string,
)}
	{#each shadow_variants as v (v)}
		<div
			class="shadow_variant_example"
			style:box-shadow="var(--shadow_outset_{shadow_variant}) var(--{shadow_type}_color_{color_variant
				? color_variant + '_' + v
				: v}"
		></div>
	{/each}
{/snippet}

<style>
	.color_variant_example {
		/*  */
	}
	.shadow_example {
		position: relative;
		padding: var(--space_md);
		font-family: var(--font_mono);
		border-radius: var(--radius_xs3);
		display: flex;
		align-items: center;
		gap: var(--space_lg);
	}
	.shadow_main_example {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		padding: var(--space_sm);
		gap: var(--space_lg);
	}
	.shadow_example:not(:last-child) {
		margin-bottom: var(--space_lg);
	}
	.shadow_variant_example {
		width: var(--input_height);
		min-width: var(--input_height);
		height: var(--input_height);
	}
</style>
