<script lang="ts">
	import type {Snippet} from 'svelte';

	import Pending_Animation from '$lib/Pending_Animation.svelte';

	interface Props {
		pending: boolean;
		onclick: () => void;
		running?: boolean;
		title?: string;
		disabled?: boolean;
		attrs?: any;
		children: Snippet;
	}

	// TODO maybe this shouldn't disable? cancelable?

	const {pending, onclick, running, title, disabled, attrs, children}: Props = $props();
</script>

<button type="button" {...attrs} disabled={disabled ?? pending} {title} class:pending {onclick}>
	<div class="content">
		{@render children()}
	</div>
	{#if pending}
		<div class="animation">
			<Pending_Animation {running} />
		</div>
	{/if}
</button>

<style>
	button {
		position: relative;
	}
	.content {
		display: contents;
	}
	.pending .content {
		visibility: hidden; /* preserve the size */
	}
	.animation {
		position: absolute;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
