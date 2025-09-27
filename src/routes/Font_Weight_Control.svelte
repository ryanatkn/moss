<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		selected_font_weight?: number;
		children?: Snippet;
	}

	let {selected_font_weight = $bindable(400), children}: Props = $props();

	// TODO @many publish in $lib when ready, the 950 thing has me wack
</script>

<label
	><div class="title row w_100 flex_wrap_wrap">
		{#if children}
			{@render children()}
		{:else}
			font-weight
		{/if} =
		<input
			class="display_inline flex_1"
			type="number"
			bind:value={selected_font_weight}
			min={100}
			step={100}
			max={900}
		/>
	</div>
	<input type="range" bind:value={selected_font_weight} min={100} step={100} max={900} />
</label>
