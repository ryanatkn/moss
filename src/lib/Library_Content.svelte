<script lang="ts">
	import {page} from '$app/stores';
	import {base} from '$app/paths';

	import type {Tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import {get_pkg} from '$routes/pkg';

	interface Props {
		root_path?: string;
		tomes: Tome[];
	}

	const {root_path = '/library', tomes}: Props = $props();

	const pkg = get_pkg();
</script>

{#if $page.url.pathname === base + root_path}
	<div class="box mb_xl5">
		<Package_Summary {pkg}>
			{#snippet repo_name()}
				<h1 class="mb_sm">fuz</h1>
			{/snippet}
		</Package_Summary>
	</div>
{/if}
<div class="tomes">
	{#each tomes as tome (tome)}
		<svelte:component this={tome.component} />
	{/each}
</div>

<style>
	.tomes {
		width: 100%;
	}
</style>
