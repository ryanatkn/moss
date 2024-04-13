<script lang="ts">
	import {page} from '$app/stores';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';
	import {format_url} from '@ryanatkn/belt/url.js';

	interface Props {
		pkg: Package_Meta; // TODO normalized version with cached primitives?
		repo_name?: Snippet<[repo_name: string]>;
		description?: Snippet<[description: string, icon?: string]>;
		npm_url?: Snippet<[npm_url: string]>;
		homepage_url?: Snippet<[homepage_url: string]>;
		children?: Snippet;
	}

	const {pkg, repo_name, description, npm_url, homepage_url, children}: Props = $props();

	const {package_json} = $derived(pkg);
</script>

<div class="package_summary">
	<!-- TODO maybe continue this snippet pattern, or maybe simplify? -->
	<header class="box">
		{#if repo_name}
			{@render repo_name(pkg.repo_name)}
		{:else}
			<div class="repo_name">{pkg.repo_name}</div>
		{/if}
		<!-- TODO maybe add this value to package.json, `icon_alt` -->
		<img
			style:width="var(--size, var(--icon_size_xl2))"
			style:height="var(--size, var(--icon_size_xl2))"
			src="{pkg.homepage_url}/favicon.png"
			alt="favicon for {pkg.repo_name}"
		/>
	</header>
	{#if package_json.description}
		{#if description}
			{@render description(package_json.description, package_json.icon)}
		{:else}
			<blockquote class="description">
				{package_json.description}
				{package_json.icon}
			</blockquote>
		{/if}
	{/if}
	{#if children}{@render children()}{/if}
	{#if pkg.homepage_url}
		{#if homepage_url}
			{@render homepage_url(pkg.homepage_url)}
		{:else}
			<div class="homepage_url">
				<a class="chip" class:selected={homepage_url === $page.url.href} href={homepage_url}
					>{format_url(pkg.homepage_url)}</a
				>
			</div>
		{/if}
	{/if}
	<div class="links">
		{#if pkg.repo_url}
			<a class="chip" href={pkg.repo_url}>repo</a>
		{/if}
		{#if pkg.changelog_url}
			<a class="chip" title="version" href={pkg.changelog_url}>{package_json.version}</a>
		{/if}
		{#if pkg.npm_url}
			<a class="chip" href={pkg.npm_url}>npm</a>
		{/if}
	</div>
	{#if pkg.npm_url}
		{#if npm_url}
			{@render npm_url(pkg.npm_url)}
		{:else}
			<blockquote class="npm_url">npm i -D {package_json.name}</blockquote>
		{/if}
	{/if}
	<!-- TODO more details behind a `<details>`, including author -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_summary {
		padding: var(--space_lg);
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--max_width, var(--width_sm));
	}
	header {
		margin-bottom: var(--space_lg);
	}
	.links {
		display: flex;
		margin-bottom: var(--space_lg);
	}
	.description {
		margin-bottom: var(--space_lg);
		text-align: center;
	}
	.homepage_url {
		margin-bottom: var(--space_lg);
	}
	.repo_name {
		font-size: var(--size_xl2);
		font-weight: 400;
		text-align: center;
		margin-bottom: var(--space_lg);
	}
	.npm_url {
		font-family: var(--font_mono);
		text-align: center;
	}
	.chip {
		margin-left: var(--space_xs2);
		margin-right: var(--space_xs2);
	}
</style>
