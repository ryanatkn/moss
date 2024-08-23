<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {
		color_variants,
		shadow_size_variants,
		shadow_weight_variants,
	} from '$lib/variable_data.js';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shadows';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// simply map the sizes to the weights for docs, although any combination is valid
	const weight_by_size = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 5,
	};

	// TODO duplicate shadows links
</script>

<Tome_Detail {tome}>
	<section>
		<Tome_Subheading text="Shadows" slug="shadows" />
		<p>Shadows darken in light mode and lighten in dark mode.</p>
		<Unfinished_Implementation_Warning
			>Maybe rename for clarity? It's weird that shadows lighten in dark mode.</Unfinished_Implementation_Warning
		>
		{@render shadow_example_header('shadow_color_')}
		{#each shadow_size_variants as shadow_size_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_{shadow_size_variant}) var(--shadow_color_{weight_by_size[
						shadow_size_variant
					]})"
				>
					<Style_Variable_Button name="shadow_{shadow_size_variant}" />
					<Style_Variable_Button name="shadow_color_{weight_by_size[shadow_size_variant]}" />
				</div>
				{@render shadow_variant_examples(null, shadow_size_variant, 'shadow', '')}
			</div>
		{/each}
		{#each shadow_size_variants as shadow_size_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_inset_{shadow_size_variant}) var(--shadow_color_{weight_by_size[
						shadow_size_variant
					]})"
				>
					<Style_Variable_Button name="shadow_inset_{shadow_size_variant}" />
					<Style_Variable_Button name="shadow_color_{weight_by_size[shadow_size_variant]}" />
				</div>
				{@render shadow_variant_examples(null, shadow_size_variant, 'shadow', '_inset')}
			</div>
		{/each}
		{#each shadow_size_variants as shadow_size_variant}
			<div class="shadow_example">
				<div
					class="shadow_main_example"
					style:box-shadow="var(--shadow_outset_{shadow_size_variant}) var(--shadow_color_{weight_by_size[
						shadow_size_variant
					]})"
				>
					<Style_Variable_Button name="shadow_outset_{shadow_size_variant}" />
					<Style_Variable_Button name="shadow_color_{weight_by_size[shadow_size_variant]}" />
				</div>
				{@render shadow_variant_examples(null, shadow_size_variant, 'shadow', '_outset')}
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
			<!-- TODO think about this or something less verbose: `{@render shadow_example_header(shadow_example_header_highlight_color_snippet)}` -->
			{@render shadow_example_header('highlight_color_')}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_size_variant}) var(--highlight_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_{shadow_size_variant}" />
						<Style_Variable_Button name="highlight_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'highlight', '')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_size_variant}) var(--highlight_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_size_variant}" />
						<Style_Variable_Button name="highlight_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'highlight', '_inset')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_size_variant}) var(--highlight_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_size_variant}" />
						<Style_Variable_Button name="highlight_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'highlight', '_outset')}
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
			{@render shadow_example_header('glow_color_')}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_size_variant}) var(--glow_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_{shadow_size_variant}" />
						<Style_Variable_Button name="glow_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'glow', '')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_size_variant}) var(--glow_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_size_variant}" />
						<Style_Variable_Button name="glow_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'glow', '_inset')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_size_variant}) var(--glow_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_size_variant}" />
						<Style_Variable_Button name="glow_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'glow', '_outset')}
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
			{@render shadow_example_header('shroud_color_')}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_{shadow_size_variant}) var(--shroud_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_{shadow_size_variant}" />
						<Style_Variable_Button name="shroud_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'shroud', '')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_inset_{shadow_size_variant}) var(--shroud_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_inset_{shadow_size_variant}" />
						<Style_Variable_Button name="shroud_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'shroud', '_inset')}
				</div>
			{/each}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div
						class="shadow_main_example"
						style:box-shadow="var(--shadow_outset_{shadow_size_variant}) var(--shroud_color_{weight_by_size[
							shadow_size_variant
						]})"
					>
						<Style_Variable_Button name="shadow_outset_{shadow_size_variant}" />
						<Style_Variable_Button name="shroud_color_{weight_by_size[shadow_size_variant]}" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, 'shroud', '_outset')}
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
		{@render shadow_example_header('shadow_color_')}
		{#each color_variants as color_variant}
			{@const classes = 'color_' + color_variant}
			<section>
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_{shadow_size_variant}) var(--shadow_color_{color_variant}_{weight_by_size[
								shadow_size_variant
							]})"
						>
							<Style_Variable_Button name="shadow_{shadow_size_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{weight_by_size[shadow_size_variant]}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(color_variant, shadow_size_variant, 'shadow', '')}
					</div>
				{/each}
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_inset_{shadow_size_variant}) var(--shadow_color_{color_variant}_{weight_by_size[
								shadow_size_variant
							]})"
						>
							<Style_Variable_Button name="shadow_inset_{shadow_size_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{weight_by_size[shadow_size_variant]}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(
							color_variant,
							shadow_size_variant,
							'shadow',
							'_inset',
						)}
					</div>
				{/each}
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example"
							style:box-shadow="var(--shadow_outset_{shadow_size_variant}) var(--shadow_color_{color_variant}_{weight_by_size[
								shadow_size_variant
							]})"
						>
							<Style_Variable_Button name="shadow_outset_{shadow_size_variant}" {classes} />
							<Style_Variable_Button
								name="shadow_color_{color_variant}_{weight_by_size[shadow_size_variant]}"
								{classes}
							/>
						</div>
						{@render shadow_variant_examples(
							color_variant,
							shadow_size_variant,
							'shadow',
							'_outset',
						)}
					</div>
				{/each}
			</section>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
</Tome_Detail>

{#snippet shadow_example_header(text: string)}
	<div class="shadow_example justify_content_end">
		<code>{text}</code>
		{#each shadow_weight_variants as w (w)}
			<code class="shadow_variant_example box">
				<Style_Variable_Button name="{text}{w}">{w}</Style_Variable_Button>
			</code>
		{/each}
	</div>
{/snippet}

{#snippet shadow_variant_examples(
	color_variant: string | null,
	shadow_size_variant: string,
	shadow_type: string,
	shadow_position: string, // TODO name?
)}
	<div class="row gap_lg">
		{#each shadow_weight_variants as w (w)}
			{@const shadow_size = `shadow${shadow_position}_${shadow_size_variant}`}
			{@const shadow_color = `${shadow_type}_color_${color_variant ? color_variant + '_' + w : w}`}
			<div
				title="{shadow_size} with {shadow_color}"
				class="shadow_variant_example"
				style:box-shadow="var(--{shadow_size}) var(--{shadow_color})"
			></div>
		{/each}
	</div>
{/snippet}

<style>
	.shadow_example {
		position: relative;
		padding: var(--space_md);
		font-family: var(--font_mono);
		border-radius: var(--radius_xs3);
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space_lg);
	}
	.shadow_main_example {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		padding: var(--space_sm);
		gap: var(--space_lg);
		min-width: 260px;
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
