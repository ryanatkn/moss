<script lang="ts">
	import type {Snippet} from 'svelte';

	import {font_size_variants} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	interface Props {
		selected_size?: number; // TODO improve API, is index for `'md'`
		children?: Snippet;
	}

	let {selected_size = $bindable(2), children}: Props = $props();

	// TODO the API is strange

	// TODO @many publish in $lib when ready

	const min = 1;
	const max = font_size_variants.length;

	const selected_name = $derived(font_size_variants[selected_size - 1]);
</script>

<label
	><div class="title row w_100 flex_wrap">
		{#if children}
			{@render children()}
		{:else}
			font-size
		{/if} =
		<input
			class="display_inline"
			type="number"
			style:width="var(--space_xl7)"
			style:min-width="var(--space_xl7)"
			bind:value={selected_size}
			{min}
			step={1}
			{max}
		/>
		= var(<Style_Variable_Button name="font_size_{selected_name}"
			>--font_size_{selected_name}</Style_Variable_Button
		>)
	</div>
	<input type="range" bind:value={selected_size} {min} step={1} {max} />
</label>
