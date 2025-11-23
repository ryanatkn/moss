<script lang="ts">
	import {page} from '$app/state';
	import Api_Index from '@ryanatkn/fuz/Api_Index.svelte';
	import {DOCS_PATH} from '@ryanatkn/fuz/docs_helpers.svelte.js';

	// TODO this is a big strange because we use this page component in tomes, maybe it should be a separate component?
	const at_root = $derived(page.url.pathname === DOCS_PATH);
</script>

<Api_Index minimal={at_root} />
