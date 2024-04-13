<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';

	import type {Library_Links} from '$lib/library.svelte.js';

	interface Props {
		library_links: Library_Links;
		sidebar?: boolean; // TODO @multiple dialog navs (this shouldn't exist)
	}

	const {library_links, sidebar = true}: Props = $props();

	// TODO remove CSS below with reusable CSS or a Svelte component

	const hash = $derived($page.url.hash.slice(1));
</script>

<div class="library_page_links">
	<h6>On this page</h6>
	{#if sidebar}
		<div class="sidebar_wrapper">{@render content()}</div>
	{:else}
		{@render content()}
	{/if}
</div>

{#snippet content()}
	<ul class="unstyled">
		{#each library_links.library_links as item (item.id)}
			<li role="none" transition:slide>
				<a class="menu_item" href="#{item.slug}" class:selected={item.slug === hash}>{item.text}</a>
			</li>
		{/each}
	</ul>
{/snippet}

<style>
	.library_page_links {
		margin: var(--space_xl6) 0;
	}

	/* this is needed because `.library_page_links` needs to be a block to collapse the vertical margin */
	.sidebar_wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	/* TODO @multiple remove all :global usage after https://github.com/sveltejs/svelte/issues/10143 */
	.sidebar_wrapper :global(ul) {
		min-width: var(--library_menu_width);
	}

	/* TODO should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	ul a:hover {
		background-color: var(--bg_5);
	}
	ul a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>
