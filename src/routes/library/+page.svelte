<script lang="ts">
	import Library_Content from '@ryanatkn/fuz/Library_Content.svelte';
	import {tomes_context} from '@ryanatkn/fuz/tome.js';

	import {pkg_context} from '$routes/pkg.js';

	const tomes_by_name = tomes_context.get();

	const tomes = Array.from(tomes_by_name.values());

	const pkg = pkg_context.get();
</script>

<Library_Content {tomes} {pkg}>
	{#snippet repo_name()}
		<h1 class="mb_sm">moss</h1>
	{/snippet}
</Library_Content>
