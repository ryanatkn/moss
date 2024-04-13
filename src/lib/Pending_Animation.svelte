<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		running?: boolean;
		attrs?: SvelteHTMLElements['div'];
		children?: Snippet<[index: number]>;
	}

	const {running = true, attrs, children}: Props = $props();
</script>

<div {...attrs} class:pending_animation={true} class:running>
	<span style="animation-delay: 0s"
		>{#if children}{@render children(0)}{:else}•{/if}</span
	><span style="animation-delay: 0.09s"
		>{#if children}{@render children(1)}{:else}•{/if}</span
	><span style="animation-delay: 0.3s"
		>{#if children}{@render children(2)}{:else}•{/if}</span
	>
</div>

<style>
	.pending_animation {
		/* TODO upstream to style.css? or maybe delete and manually put them as fallbacks below? */
		--scale_x: 0.42;
		--scale_y: 0.42;
		--scale_z: 0.42;
		display: flex;
	}
	span {
		transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		animation: dot var(--animation_duration, var(--duration_5, 1.5s)) infinite paused;
	}
	.running span {
		animation-play-state: running;
	}
	@keyframes dot {
		0% {
			transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		}
		71% {
			transform: scale3d(1, 1, 1);
		}
		100% {
			transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		}
	}
</style>
