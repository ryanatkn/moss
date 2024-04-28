<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		children?: Snippet;
	}

	const {children}: Props = $props();
</script>

<aside>
	⚠️ {#if children}{@render children()}{:else}This is unfinished and will change.{/if}
</aside>
