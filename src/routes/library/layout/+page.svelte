<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import {space_variants} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'layout';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);
</script>

<Tome_Detail {tome}>
	<section>
		<Tome_Subheading text="Space variables" slug="space-variables" />
		<div>
			{#each space_variants as space_size}
				{@const name = 'space_' + space_size}
				<div class="layout_example">
					<div class="fill" style:width="var(--{name})" />
					<div class="variable_wrapper"><Style_Variable_Button {name} /></div>
					<span class="pr_sm">=</span>
					<div class="computed_value">{computed_styles?.getPropertyValue('--' + name)}</div>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Tome_Subheading text="Width variables" slug="width-variables" />
		<div>
			{#each ['xs', 'sm', 'md'] as radius}
				{@const name = 'width_' + radius}
				<div class="layout_example">
					<div class="fill" style:width="var(--{name})" />
					<div class="variable_wrapper"><Style_Variable_Button {name} /></div>
					<span class="pr_sm">=</span>
					<div class="computed_value">{computed_styles?.getPropertyValue('--' + name)}</div>
				</div>
			{/each}
		</div>
	</section>
</Tome_Detail>

<style>
	.layout_example {
		position: relative;
		height: var(--input_height_sm);
		display: flex;
		align-items: center;
	}

	.fill {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		z-index: -1;
		background-color: var(--fg_2);
	}

	.variable_wrapper {
		width: 110px;
	}

	.computed_value {
		margin-left: var(--space_md);
		font-family: var(--font_mono);
	}
</style>
