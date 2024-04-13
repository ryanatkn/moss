<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {onDestroy} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links, to_library_path_info} from '$lib/library.svelte.js';

	interface Props {
		tome: Tome;
	}

	const {tome}: Props = $props();

	const id = 'tome_title_' + _id++;

	const slugify = (str: string) => str.toLowerCase().replaceAll(/\s/gu, '-').replaceAll(/\W/gu, ''); // TODO extract to helper

	const library_links = get_library_links();

	// TODO how to make reactive?
	const slug = slugify(tome.name);
	library_links.add(id, tome.name, slug);
	// const slug = $derived(slugify(tome.name));
	// $effect(() => library_links.add(id, tome.name, slug));

	onDestroy(() => library_links.remove(id));

	const {path, path_is_selected} = $derived(to_library_path_info(tome.slug, $page.url.pathname));
</script>

<svelte:element this={path_is_selected ? 'h1' : 'h2'} class="tome_title">
	{#if path_is_selected}
		{@render content(tome.name)}
	{:else}
		<a href={path}>{@render content(tome.name)}</a>
	{/if}
	<Hashlink {slug} />
</svelte:element>

{#snippet content(name: string)}
	{name}
{/snippet}

<style>
	.tome_title {
		margin-top: var(--space_xl4);
		position: relative;
	}
	/* TODO @multiple how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	.tome_title:hover :global(.hashlink) {
		opacity: 1;
	}
</style>
