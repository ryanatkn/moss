<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {slide} from 'svelte/transition';

	// TODO it may be possible to cleanly add the transition with eager rendering by intercepting the open user action
	// in this case, lazy rendering is probably the better default to retain `ctrl+f` functionality

	/**
	 * Like `details` but renders children lazily by default.
	 */
	interface Props {
		open?: boolean;
		/**
		 * Children are lazily rendered by default,
		 * enabling transitions and improving performance, sometimes significantly.
		 * Pass `true` to render children eagerly to gain
		 * `ctrl+f` functionality while trading away the benefits.
		 * Consider a `<details>` element instead of making this component eager.
		 */
		eager?: boolean;
		attrs?: SvelteHTMLElements['details'];
		summary: Snippet;
		summary_attrs?: SvelteHTMLElements['summary'];
		children: Snippet;
	}

	let {open = $bindable(), eager, attrs, summary_attrs, summary, children}: Props = $props(); // eslint-disable-line prefer-const

	// TODO why doesn't the slide out work?
</script>

<details {...attrs} bind:open>
	<summary {...summary_attrs}>{@render summary()}</summary>
	{#if eager}
		{@render children()}
	{:else if open}
		<div transition:slide>{@render children()}</div>
	{/if}
</details>
