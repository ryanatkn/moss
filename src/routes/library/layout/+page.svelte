<script lang="ts">
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import {space_variants} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	const LIBRARY_ITEM_NAME = 'layout';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const computed_styles =
		typeof window === 'undefined' ? null : window.getComputedStyle(document.documentElement);
</script>

<Tome_Content {tome}>
	<Tome_Section>
		<Tome_Section_Header text="Space variables" />
		<div>
			{#each space_variants as space_size}
				{@const name = 'space_' + space_size}
				<div class="layout_example">
					<div class="fill" style:width="var(--{name})"></div>
					<div class="variable_wrapper"><Style_Variable_Button {name} /></div>
					<span class="pr_sm">=</span>
					<div class="computed_value">{computed_styles?.getPropertyValue('--' + name)}</div>
				</div>
			{/each}
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Width variables" />
		<div>
			{#each ['xs', 'sm', 'md'] as radius}
				{@const name = 'width_' + radius}
				<div class="layout_example">
					<div class="fill" style:width="var(--{name})"></div>
					<div class="variable_wrapper"><Style_Variable_Button {name} /></div>
					<span class="pr_sm">=</span>
					<div class="computed_value">{computed_styles?.getPropertyValue('--' + name)}</div>
				</div>
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

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
