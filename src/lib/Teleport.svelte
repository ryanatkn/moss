<script lang="ts">
	import {onDestroy, type Snippet} from 'svelte';

	interface Props {
		/**
		 * Defaults to `undefined` to lessen friction with SSR.
		 * We may want to change this to optionally accept a string selector,
		 * but that didn't seem to be the best API for the `Dialog`.
		 */
		to?: HTMLElement | undefined | null;
		onmove?: (el: HTMLElement, to: HTMLElement) => void;
		children: Snippet;
	}

	const {to, onmove, children}: Props = $props();

	let el: HTMLElement | undefined | null = $state();

	$effect(() => {
		if (el && to) {
			move(el, to);
		}
	});

	let moved = $state(false);

	const move = (el: HTMLElement, to: HTMLElement): void => {
		moved = true;
		to.appendChild(el);
		onmove?.(el, to);
	};

	onDestroy(() => {
		el?.parentNode?.removeChild(el);
	});
</script>

<div class="teleport" bind:this={el} hidden={!moved}>
	{@render children()}
</div>

<style>
	.teleport {
		display: contents;
	}
</style>
