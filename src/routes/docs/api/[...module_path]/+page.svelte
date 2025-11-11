<script lang="ts">
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import Identifier_Detail from '@ryanatkn/fuz/Identifier_Detail.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Docs_Search from '@ryanatkn/fuz/Docs_Search.svelte';

	const {params} = $props();

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	// extract module path from params
	const module_path_param = $derived(params.module_path ?? '');

	// find the module using the lookup helper
	const module = $derived(pkg.lookup_module(module_path_param));

	// fallback for 404
	const module_name = $derived(module?.path || '[missing module]');

	let search_query = $state('');

	const all_identifiers = $derived(module?.identifiers ?? []);

	// Search and sort alphabetically
	const sorted_identifiers = $derived.by(() => {
		if (!module) return [];
		const items = search_query.trim()
			? all_identifiers.filter((id) => id.name.toLowerCase().includes(search_query.toLowerCase()))
			: all_identifiers;
		return items.sort((a, b) => a.name.localeCompare(b.name));
	});

	// GitHub source URL for the module
	const source_url = $derived(module?.url_github);
</script>

<svelte:head>
	<title>{module_name} - API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	{#snippet header()}
		<h1 class="mt_xl4">{module_name}</h1>
	{/snippet}

	<section>
		{#if module?.module_comment}
			<blockquote>
				{module.module_comment}
			</blockquote>
		{/if}

		{#if all_identifiers.length > 1}
			<Docs_Search
				placeholder="search identifiers in this module..."
				total_count={all_identifiers.length}
				result_count={sorted_identifiers.length}
				bind:search_query
			/>
		{/if}

		{#if source_url}
			<p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={source_url} target="_blank" rel="noopener">view source</a>
			</p>
		{/if}
	</section>

	{#if !module}
		<section>
			<p>Module not found: {module_path_param}</p>
		</section>
	{:else if sorted_identifiers.length === 0}
		<section>
			{#if search_query}
				<p>No identifiers found matching "{search_query}"</p>
			{:else}
				<p>No identifiers in this module</p>
			{/if}
		</section>
	{:else}
		{#each sorted_identifiers as identifier (identifier.name)}
			<Tome_Section>
				<Tome_Section_Header text={identifier.name} />
				<article id={identifier.name}>
					<Identifier_Detail {identifier} />
				</article>
			</Tome_Section>
		{/each}
	{/if}
</Tome_Content>
