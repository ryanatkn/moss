<script lang="ts">
	import Library_Content from '@ryanatkn/fuz/Library_Content.svelte';
	import {get_tomes} from '@ryanatkn/fuz/tome.js';

	import {pkg_context} from '$routes/pkg.js';

	const tomes_by_name = get_tomes();

	const tomes = Array.from(tomes_by_name.values());

	const pkg = pkg_context.get();
</script>

<Library_Content {tomes} {pkg}>
	{#snippet repo_name()}
		<h1 class="mb_sm">moss</h1>
	{/snippet}
</Library_Content>
