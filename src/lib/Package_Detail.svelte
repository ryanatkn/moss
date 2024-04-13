<script lang="ts">
	import {page} from '$app/stores';
	import {ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import {format_url} from '@ryanatkn/belt/url.js';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import Details from '$lib/Details.svelte';

	interface Props {
		pkg: Package_Meta; // TODO normalized version with cached primitives?
		repo_name?: Snippet<[repo_name: string]>;
		description?: Snippet<[description: string]>;
		npm_url?: Snippet<[npm_url: string]>;
		homepage_url?: Snippet<[homepage_url: string]>;
		children?: Snippet<[pkg: Package_Meta]>;
	}

	const {pkg, repo_name, description, npm_url, homepage_url, children}: Props = $props();

	// TODO show other data (lines of code)

	const {package_json, src_json} = $derived(pkg);
	const {modules: pkg_modules} = $derived(src_json);

	// TODO helper (zod parser?)
	const repository_url = $derived(
		package_json.repository
			? strip_start(
					strip_end(
						strip_end(
							typeof package_json.repository === 'string'
								? package_json.repository
								: package_json.repository.url,
							'.git',
						),
						'/',
					),
					'git+',
				)
			: null,
	);
	const license_url = $derived(
		package_json.license && repository_url ? repository_url + '/blob/main/LICENSE' : null,
	);

	// TODO refactor
	const to_source_url = (repo_url: string, module_name: string): string =>
		repo_url +
		'/blob/main/src/lib/' +
		(module_name.endsWith('.js') ? module_name.slice(0, -3) + '.ts' : module_name);

	const pkg_exports_keys = $derived(package_json.exports && Object.keys(package_json.exports)); // TODO hacky, see usage

	// TODO helper, look at existing code
	const modules = $derived(
		package_json.exports
			? Object.keys(package_json.exports).map((k) => {
					const v = strip_start(k, './');
					return v === '.' ? 'index.js' : v;
				})
			: null,
	);
</script>

<div class="package_detail">
	<!-- TODO maybe continue this snippet pattern, or maybe simplify? -->
	<header>
		{#if repo_name}
			{@render repo_name(pkg.repo_name)}
		{:else}
			<div class="repo_name">
				{pkg.repo_name}{#if package_json.icon}{' '}{package_json.icon}{/if}
			</div>
		{/if}
	</header>
	{#if children}{@render children(pkg)}{/if}
	{#if package_json.description}
		{#if description}
			{@render description(package_json.description)}
		{:else}
			<div class="description">{package_json.description}</div>
		{/if}
	{/if}
	{#if pkg.npm_url}
		{#if npm_url}
			{@render npm_url(pkg.npm_url)}
		{:else}
			<blockquote class="npm_url">npm i -D {package_json.name}</blockquote>
		{/if}
	{/if}
	<section class="properties">
		{#if pkg.homepage_url}
			{#if homepage_url}
				{@render homepage_url(pkg.homepage_url)}
			{:else}
				<span class="title">homepage</span>
				<div class="content">
					<a
						class="chip"
						class:selected={pkg.homepage_url === $page.url.href}
						href={pkg.homepage_url}
					>
						<img
							src="{ensure_end(pkg.homepage_url, '/')}favicon.png"
							alt="favicon to homepage at {pkg.homepage_url}"
							style:width="16px"
							style:height="16px"
							style:margin-right="var(--space_xs)"
						/>
						{format_url(pkg.homepage_url)}
					</a>
				</div>
			{/if}
		{/if}
		{#if pkg.repo_url}
			<span class="title">repo</span>
			<div class="content">
				<a class="chip" title="repo" href={pkg.repo_url}>{pkg.repo_name}</a>
			</div>
		{/if}
		{#if pkg.npm_url}
			<span class="title">npm</span>
			<div class="content">
				<a class="chip" title="npm" href={pkg.npm_url}>{package_json.name}</a>
			</div>
		{/if}
		{#if pkg.changelog_url}
			<span class="title">version</span>
			<div class="content">
				<a class="chip" title="version" href={pkg.changelog_url}>{package_json.version}</a>
			</div>
		{/if}
		{#if license_url}
			<span class="title">license</span>
			<div class="content">
				<a class="chip" title="license" href={license_url}>{package_json.license}</a>
			</div>
		{/if}
		{#if pkg.homepage_url}
			<span class="title">data</span>
			<div class="content">
				<a
					class="chip"
					title="data"
					href="{ensure_end(pkg.homepage_url, '/')}.well-known/package.json">package.json</a
				>
				<a class="chip" title="data" href="{ensure_end(pkg.homepage_url, '/')}.well-known/src.json"
					>src.json</a
				>
			</div>
		{/if}
	</section>
	{#if modules && pkg.repo_url}
		<section>
			<menu class="unstyled">
				{#each modules as module_name, i (module_name)}
					{@const source_url = to_source_url(pkg.repo_url, module_name)}
					{@const exports_key = pkg_exports_keys?.[i]}
					{@const pkg_module = exports_key && pkg_modules?.[exports_key]}
					<li
						class="module"
						class:ts={module_name.endsWith('.js')}
						class:svelte={module_name.endsWith('.svelte')}
						class:css={module_name.endsWith('.css')}
						class:json={module_name.endsWith('.json')}
					>
						<div class="module_content">
							<a class="chip" href={source_url}>{module_name}</a>
							{#if pkg_module?.declarations.length}
								<ul class="declarations unstyled">
									{#each pkg_module.declarations as { name, kind }}
										<li class="declaration chip {kind}_declaration">
											{name}
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</li>
				{/each}
			</menu>
		</section>
	{/if}

	<section>
		<Details>
			{#snippet summary()}raw data for <code>pkg: Package_Meta</code>{/snippet}
			<pre><code>{JSON.stringify(pkg, null, '\t')}</code></pre>
		</Details>
	</section>

	<!-- TODO more details behind a `<details>`, including author -->
	<!-- TODO render exports, then link to source, then tomes -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_detail {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: var(--max_width, var(--width_md));
	}
	header {
		margin-bottom: var(--space_lg);
	}
	section {
		width: 100%;
		margin-bottom: var(--space_lg);
	}
	.repo_name {
		font-size: var(--size_xl2);
		font-weight: 400;
		text-align: center;
	}
	.npm_url {
		font-family: var(--font_mono);
		text-align: center;
		margin-bottom: var(--space_lg);
	}
	.description {
		margin-bottom: var(--space_lg);
	}
	.properties {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: var(--space_xs2);
		margin-bottom: var(--space_lg);
	}
	.title {
		text-align: right;
	}
	.content {
		display: flex;
	}
	.content a {
		display: flex;
		align-items: center;
		margin-left: var(--space_xs);
	}
	.module {
		margin-bottom: var(--space_xs);
		--link_color: var(--text_2);
	}
	.module_content {
		background-color: var(--bg_3);
		border-radius: var(--radius_sm);
		padding: var(--space_xs);
	}
	.ts {
		--link_color: var(--color_a_5);
	}
	.svelte {
		--link_color: var(--color_e_5);
	}
	.css {
		--link_color: var(--color_b_5);
	}
	.json {
		--link_color: var(--color_f_5);
	}
	/* TODO extract */
	.declarations {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--space_xs) 0;
		padding-top: var(--space_xs);
	}
	.declaration {
		font-family: var(--font_mono);
		font-size: var(--size_sm);
		margin-left: var(--space_xs2);
		margin-right: var(--space_xs2);
	}
	.variable_declaration {
		color: var(--color_d_5);
	}
	.function_declaration {
		color: var(--color_c_5);
	}
	.type_declaration {
		color: var(--color_g_5);
	}
	.class_declaration {
		color: var(--color_f_5);
	}
</style>
