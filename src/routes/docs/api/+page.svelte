<script lang="ts">
	import {page} from '$app/state';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import Identifier_Detail from '@ryanatkn/fuz/Identifier_Detail.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Docs_Search from '@ryanatkn/fuz/Docs_Search.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {DOCS_PATH} from '@ryanatkn/fuz/docs_helpers.svelte.js';

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	const at_root = $derived(page.url.pathname === DOCS_PATH);

	let search_query = $state('');

	const all_identifiers = $derived(pkg.identifiers);

	// Search and sort alphabetically
	const sorted_identifiers = $derived.by(() => {
		const items = search_query.trim() ? pkg.search_identifiers(search_query) : all_identifiers;
		return items.sort((a, b) => a.name.localeCompare(b.name));
	});
</script>

<svelte:head>
	<title>API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	{#if at_root}
		<section>
			<p>Browse the full <Tome_Link name="api" /> docs.</p>
		</section>
	{:else}
		<section>
			<p>{pkg.package_json.description}</p>

			{#if all_identifiers.length > 1}
				<Docs_Search
					placeholder="search identifiers..."
					total_count={all_identifiers.length}
					result_count={sorted_identifiers.length}
					bind:search_query
				/>
			{/if}
		</section>

		{#if sorted_identifiers.length === 0}
			<section>
				<p>No identifiers found matching "{search_query}"</p>
			</section>
		{:else}
			{#each sorted_identifiers as identifier (`${identifier.module_path}:${identifier.name}`)}
				<Tome_Section>
					<Tome_Section_Header text={identifier.name} />
					<article id={identifier.name}>
						<Identifier_Detail {identifier} />
					</article>
				</Tome_Section>
			{/each}
		{/if}
	{/if}
</Tome_Content>
