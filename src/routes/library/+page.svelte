<script lang="ts">
	import Library_Content from '@ryanatkn/fuz/Library_Content.svelte';
	import {get_tomes} from '@ryanatkn/fuz/tome.js';

	const tomes_by_name = get_tomes();

	const tomes = Array.from(tomes_by_name.values());
</script>

<Library_Content {tomes} />
