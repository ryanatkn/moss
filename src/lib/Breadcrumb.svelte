<script lang="ts">
	import {parse_path_pieces} from '@ryanatkn/belt/path.js';
	import {base} from '$app/paths';
	import {page} from '$app/stores';
	import type {Snippet} from 'svelte';

	interface Props {
		path?: string | undefined;
		/**
		 * `null` means none
		 */
		selected_path?: string | null | undefined;
		base_path?: string;
		separator?: Snippet;
		children?: Snippet;
	}

	const {path, selected_path, base_path, separator, children}: Props = $props();

	const final_path = $derived(path ?? $page.url.pathname);
	const final_selected_path = $derived(
		selected_path === null ? null : selected_path === undefined ? final_path : selected_path,
	);
	const final_base_path = $derived(base_path ?? base);

	const path_pieces = $derived(parse_path_pieces(final_path));

	const root_path = $derived(final_base_path || '/');

	// TODO animate these, need to use in a layout though, but then how to opt out?
	// `transition:slide={{axis: 'x'}}`
</script>

<div class="breadcrumb">
	<a href={root_path} class:selected={root_path === final_selected_path}
		>{#if children}{@render children()}{:else}•{/if}</a
	>{#each path_pieces as pathPiece}{#if pathPiece.type === 'piece'}<a
				href={final_base_path + pathPiece.path}
				class:selected={pathPiece.path === final_selected_path}>{pathPiece.name}</a
			>{:else}<span class="separator"
				>{#if separator}{@render separator()}{:else}/{/if}</span
			>{/if}{/each}
</div>

<style>
	.breadcrumb {
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		font-size: var(--size, var(--size_md));
	}
	a {
		position: relative;
		z-index: 1;
		padding: 0 calc(var(--size, var(--size_md)) * 0.5);
		display: flex;
		align-items: center;
	}
	.separator {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
	}
</style>
