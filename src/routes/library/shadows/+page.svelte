<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {
		color_variants,
		shadow_size_variants,
		shadow_variant_prefixes,
		shadow_weight_variants,
	} from '$lib/variable_data.js';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shadows';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO duplicate shadows links
</script>

<Tome_Detail {tome}>
	<Unfinished_Implementation_Warning
		>This is unfinished and will change. It feels simultaneously limiting in usage and bloated in
		the implementation.</Unfinished_Implementation_Warning
	>
	<section>
		<Tome_Subheading text="Shadow" slug="shadow" />
		<p>Shadows darken in light mode and lighten in dark mode.</p>
		<Unfinished_Implementation_Warning
			>Maybe rename for clarity? It's weird that shadows lighten in dark mode.</Unfinished_Implementation_Warning
		>
		{@render shadow_example_header()}
		{#each shadow_variant_prefixes as shadow_variant_prefix}
			{#each shadow_size_variants as shadow_size_variant}
				<div class="shadow_example">
					<div class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant}">
						<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
						<Style_Variable_Button name="shadow_color" />
					</div>
					{@render shadow_variant_examples(
						null,
						shadow_size_variant,
						'shadow',
						shadow_variant_prefix,
					)}
				</div>
			{/each}
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Highlight" slug="highlight" />
		<p>Hightlights lighten in light mode and darken in dark mode.</p>
		<div class="panel fg_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix}
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_highlight"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_highlight" />
						</div>
						{@render shadow_variant_examples(
							null,
							shadow_size_variant,
							'highlight',
							shadow_variant_prefix,
						)}
					</div>
				{/each}
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Glow" slug="glow" />
		<p>Glows lighten in both light and dark mode.</p>
		<div class="panel darken_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix}
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_glow"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_glow" />
						</div>
						{@render shadow_variant_examples(
							null,
							shadow_size_variant,
							'glow',
							shadow_variant_prefix,
						)}
					</div>
				{/each}
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Shroud" slug="shroud" />
		<p>Shrouds darken in both light and dark mode.</p>
		<div class="panel lighten_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix}
				{#each shadow_size_variants as shadow_size_variant}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_shroud"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_shroud" />
						</div>
						{@render shadow_variant_examples(
							null,
							shadow_size_variant,
							'shroud',
							shadow_variant_prefix,
						)}
					</div>
				{/each}
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<Tome_Subheading text="Colorful shadows" slug="colorful-shadows" />
		<p>These are darker in light mode than in dark mode.</p>
		{@render shadow_example_header()}
		{#each color_variants as color_variant}
			{@const classes = 'color_' + color_variant}
			<section>
				{#each shadow_variant_prefixes as shadow_variant_prefix}
					{#each shadow_size_variants as shadow_size_variant}
						<div class="shadow_example">
							<div
								class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_{color_variant}"
							>
								<Style_Variable_Button
									name="{shadow_variant_prefix}{shadow_size_variant}"
									{classes}
								/>
								<Style_Variable_Button name="shadow_color_{color_variant}" {classes} />
							</div>
							{@render shadow_variant_examples(
								color_variant,
								shadow_size_variant,
								'shadow',
								shadow_variant_prefix,
							)}
						</div>
					{/each}
				{/each}
			</section>
		{/each}
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
</Tome_Detail>

{#snippet shadow_example_header()}
	<div class="shadow_example">
		<code>shadow_alpha_</code>
		<div class="row gap_lg">
			{#each shadow_weight_variants as w (w)}
				<code class="shadow_variant_example box">
					<Style_Variable_Button name="shadow_alpha_{w}">{w}</Style_Variable_Button>
				</code>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet shadow_variant_examples(
	color_variant: string | null,
	shadow_size_variant: string,
	shadow_type: string,
	shadow_variant_prefix: string,
)}
	<div class="row gap_lg">
		{#each shadow_weight_variants as w (w)}
			{@const shadow_size = shadow_variant_prefix + shadow_size_variant}
			{@const shadow_color = `${shadow_type}_color${color_variant ? '_' + color_variant : ''}`}
			<div
				title="{shadow_size} with {shadow_color}"
				class="shadow_variant_example {shadow_size} {shadow_color} shadow_alpha_{w}"
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
		justify-content: end;
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
