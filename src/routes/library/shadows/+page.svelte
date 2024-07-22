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
</script>

<Tome_Detail {tome}>
	<section>
		<Tome_Subheading text="Shadows" slug="shadows" />
		<p>Shadows darken in light mode and lighten in dark mode.</p>
		<Unfinished_Implementation_Warning
			>Maybe rename for clarity? It's weird that shadows lighten in dark mode.</Unfinished_Implementation_Warning
		>
		{#each shadow_variants as variant}
			<div
				class="shadow_example"
				style:box-shadow="var(--shadow_{variant}) var(--shadow_color_{variant})"
			>
				<Style_Variable_Button name="shadow_{variant}" />
				<Style_Variable_Button name="shadow_color_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div
				class="shadow_example"
				style:box-shadow="var(--shadow_inset_{variant}) var(--shadow_color_{variant})"
			>
				<Style_Variable_Button name="shadow_inset_{variant}" />
				<Style_Variable_Button name="shadow_color_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div
				class="shadow_example"
				style:box-shadow="var(--shadow_outset_{variant}) var(--shadow_color_{variant})"
			>
				<Style_Variable_Button name="shadow_outset_{variant}" />
				<Style_Variable_Button name="shadow_color_{variant}" />
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
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_{variant}) var(--highlight_color_{variant})"
				>
					<Style_Variable_Button name="shadow_{variant}" />
					<Style_Variable_Button name="highlight_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_inset_{variant}) var(--highlight_color_{variant})"
				>
					<Style_Variable_Button name="shadow_inset_{variant}" />
					<Style_Variable_Button name="highlight_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_outset_{variant}) var(--highlight_color_{variant})"
				>
					<Style_Variable_Button name="shadow_outset_{variant}" />
					<Style_Variable_Button name="highlight_color_{variant}" />
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
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_{variant}) var(--glow_color_{variant})"
				>
					<Style_Variable_Button name="shadow_{variant}" />
					<Style_Variable_Button name="glow_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_inset_{variant}) var(--glow_color_{variant})"
				>
					<Style_Variable_Button name="shadow_inset_{variant}" />
					<Style_Variable_Button name="glow_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_outset_{variant}) var(--glow_color_{variant})"
				>
					<Style_Variable_Button name="shadow_outset_{variant}" />
					<Style_Variable_Button name="glow_color_{variant}" />
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
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_{variant}) var(--shroud_color_{variant})"
				>
					<Style_Variable_Button name="shadow_{variant}" />
					<Style_Variable_Button name="shroud_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_inset_{variant}) var(--shroud_color_{variant})"
				>
					<Style_Variable_Button name="shadow_inset_{variant}" />
					<Style_Variable_Button name="shroud_color_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div
					class="shadow_example"
					style:box-shadow="var(--shadow_outset_{variant}) var(--shroud_color_{variant})"
				>
					<Style_Variable_Button name="shadow_outset_{variant}" />
					<Style_Variable_Button name="shroud_color_{variant}" />
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
			<section>
				{#each shadow_variants as variant}
					<div
						class="shadow_example"
						style:box-shadow="var(--shadow_{variant}) var(--shadow_color_{color_variant}_{variant})"
					>
						<Style_Variable_Button name="shadow_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}_{variant}" />
					</div>
				{/each}
				{#each shadow_variants as variant}
					<div
						class="shadow_example"
						style:box-shadow="var(--shadow_inset_{variant}) var(--shadow_color_{color_variant}_{variant})"
					>
						<Style_Variable_Button name="shadow_inset_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}_{variant}" />
					</div>
				{/each}
				{#each shadow_variants as variant}
					<div
						class="shadow_example"
						style:box-shadow="var(--shadow_outset_{variant}) var(--shadow_color_{color_variant}_{variant})"
					>
						<Style_Variable_Button name="shadow_outset_{variant}" />
						<Style_Variable_Button name="shadow_color_{color_variant}_{variant}" />
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
	.shadow_example {
		position: relative;
		padding: var(--space_md);
		font-family: var(--font_mono);
		border-radius: var(--radius_xs3);
		display: flex;
	}
	.shadow_example:not(:last-child) {
		margin-bottom: var(--space_lg);
	}
</style>
