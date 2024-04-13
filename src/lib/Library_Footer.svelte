<script lang="ts">
	import type {Url} from '@ryanatkn/gro/paths.js';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import {format_url} from '@ryanatkn/belt/url.js';
	import type {Snippet} from 'svelte';

	import Github_Logo from '$lib/Github_Logo.svelte';

	interface Props {
		pkg: Package_Meta;
		root_url?: Url | null;
		logo?: Snippet;
		logo_header?: Snippet;
		logo_footer?: Snippet;
		children?: Snippet;
	}

	const {pkg, root_url = null, logo, logo_header, logo_footer, children}: Props = $props();
</script>

<footer class="box">
	{#if children}{@render children()}{/if}
	<div class="logo box panel p_lg">
		{#if logo_header}{@render logo_header()}{/if}
		<a href={pkg.repo_url} rel="me" title="source code on GitHub"
			>{#if logo}{@render logo()}{:else}<Github_Logo />{/if}</a
		>
		{#if logo_footer}{@render logo_footer()}{/if}
	</div>
	{#if root_url}
		<div class="root_url">
			<a href={root_url}>{format_url(root_url)}</a>
		</div>
	{/if}
</footer>

<style>
	/* TODO probably extract */
	.logo a {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.logo a:hover {
		--border_color: var(--color_a_5);
	}
	.root_url {
		/* TODO messy */
		margin-top: var(--space_md);
	}
</style>
