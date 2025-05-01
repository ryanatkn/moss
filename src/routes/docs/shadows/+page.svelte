<script lang="ts">
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {
		color_variants,
		shadow_size_variants,
		shadow_variant_prefixes,
		shadow_alpha_variants,
		type Shadow_Size_Variant,
		type Color_Variant,
	} from '$lib/variable_data.js';
	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shadows';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO populates `moss.css` with all of the shadows. Could be improved.
	// classes="shadow_xs shadow_sm shadow_md shadow_lg shadow_xl shadow_top_xs shadow_top_sm shadow_top_md shadow_top_lg shadow_top_xl shadow_bottom_xs shadow_bottom_sm shadow_bottom_md shadow_bottom_lg shadow_bottom_xl shadow_inset_xs shadow_inset_sm shadow_inset_md shadow_inset_lg shadow_inset_xl shadow_inset_top_xs shadow_inset_top_sm shadow_inset_top_md shadow_inset_top_lg shadow_inset_top_xl shadow_inset_bottom_xs shadow_inset_bottom_sm shadow_inset_bottom_md shadow_inset_bottom_lg shadow_inset_bottom_xl"
	// classes="shadow_alpha_1 shadow_alpha_2 shadow_alpha_3 shadow_alpha_4 shadow_alpha_5"
	// classes="shadow_color_a shadow_color_b shadow_color_c shadow_color_d shadow_color_e shadow_color_f shadow_color_g shadow_color_h shadow_color_i"

	// TODO duplicate shadows links
</script>

<Tome_Content {tome}>
	<Unfinished_Implementation_Warning
		>This is unfinished and will change. It feels simultaneously limiting in usage and bloated in
		the implementation.</Unfinished_Implementation_Warning
	>
	<Tome_Section>
		<Tome_Section_Header text="Shadow" />
		<p>Shadows darken in light mode and lighten in dark mode.</p>
		<Unfinished_Implementation_Warning
			>Maybe rename for clarity? It's weird that shadows lighten in dark mode.</Unfinished_Implementation_Warning
		>
		{@render shadow_example_header()}
		{#each shadow_variant_prefixes as shadow_variant_prefix (shadow_variant_prefix)}
			{#each shadow_size_variants as shadow_size_variant (shadow_size_variant)}
				<div class="shadow_example">
					<div class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant}">
						<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
						<Style_Variable_Button name="shadow_color" />
					</div>
					{@render shadow_variant_examples(null, shadow_size_variant, shadow_variant_prefix)}
				</div>
			{/each}
		{/each}
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Highlight" />
		<p>Hightlights lighten in light mode and darken in dark mode.</p>
		<div class="panel fg_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix (shadow_variant_prefix)}
				{#each shadow_size_variants as shadow_size_variant (shadow_size_variant)}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_highlight"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_highlight" />
						</div>
						{@render shadow_variant_examples(
							'highlight',
							shadow_size_variant,
							shadow_variant_prefix,
						)}
					</div>
				{/each}
			{/each}
		</div>
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Glow" />
		<p>Glows lighten in both light and dark mode.</p>
		<div class="panel darken_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix (shadow_variant_prefix)}
				{#each shadow_size_variants as shadow_size_variant (shadow_size_variant)}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_glow"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_glow" />
						</div>
						{@render shadow_variant_examples('glow', shadow_size_variant, shadow_variant_prefix)}
					</div>
				{/each}
			{/each}
		</div>
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Shroud" />
		<p>Shrouds darken in both light and dark mode.</p>
		<div class="panel lighten_3 p_md">
			{@render shadow_example_header()}
			{#each shadow_variant_prefixes as shadow_variant_prefix (shadow_variant_prefix)}
				{#each shadow_size_variants as shadow_size_variant (shadow_size_variant)}
					<div class="shadow_example">
						<div
							class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_shroud"
						>
							<Style_Variable_Button name="{shadow_variant_prefix}{shadow_size_variant}" />
							<Style_Variable_Button name="shadow_color_shroud" />
						</div>
						{@render shadow_variant_examples('shroud', shadow_size_variant, shadow_variant_prefix)}
					</div>
				{/each}
			{/each}
		</div>
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Colorful shadows" />
		<p>These are darker in light mode than in dark mode.</p>
		{@render shadow_example_header()}
		{#each color_variants as color_variant (color_variant)}
			{@const classes = 'color_' + color_variant}
			<section>
				{#each shadow_variant_prefixes as shadow_variant_prefix (shadow_variant_prefix)}
					{#each shadow_size_variants as shadow_size_variant (shadow_size_variant)}
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
								shadow_variant_prefix,
							)}
						</div>
					{/each}
				{/each}
			</section>
		{/each}
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
	</section>
</Tome_Content>

{#snippet shadow_example_header()}
	<div class="shadow_example">
		<code>shadow_alpha_</code>
		<div class="row gap_lg">
			{#each shadow_alpha_variants as alpha (alpha)}
				<code class="shadow_variant_example box">
					<Style_Variable_Button name="shadow_alpha_{alpha}">{alpha}</Style_Variable_Button>
				</code>
			{/each}
		</div>
	</div>
{/snippet}

{#snippet shadow_variant_examples(
	color_variant: Color_Variant | 'highlight' | 'glow' | 'shroud' | null,
	shadow_size_variant: Shadow_Size_Variant,
	shadow_variant_prefix: string,
)}
	<div class="row gap_lg">
		{#each shadow_alpha_variants as alpha (alpha)}
			{@const shadow_size = shadow_variant_prefix + shadow_size_variant}
			{@const shadow_color = `shadow_color${color_variant ? '_' + color_variant : ''}`}
			<div
				title="{shadow_size} with {shadow_color}"
				class="shadow_variant_example {shadow_size} {shadow_color} shadow_alpha_{alpha}"
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
		padding: var(--space_xs);
		min-height: var(--input_height);
		gap: var(--space_xs);
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
