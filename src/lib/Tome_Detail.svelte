<script lang="ts">
	import type {Snippet} from 'svelte';

	import Tome_Title from '$lib/Tome_Title.svelte';
	import type {Tome} from '$lib/tome.js';

	interface Props {
		tome: Tome;
		header?: Snippet;
		children: Snippet;
	}

	const {tome, header, children}: Props = $props();

	// TODO component name?
</script>

<div class="tome_detail width_md">
	<header>
		{#if header}
			{@render header()}
		{:else}
			<Tome_Title {tome} />
		{/if}
	</header>
	{@render children()}
</div>

<style>
	.tome_detail {
		margin-bottom: var(--space_xl9);
	}
	header {
		margin-bottom: var(--space_xl3);
	}
</style>
