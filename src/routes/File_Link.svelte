<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	// TODO upstream?

	interface Props {
		path: string;
		/**
		 * Converts `.js` to `.ts` by default, pass `true` to keep `.js`.
		 */
		js?: boolean;
		base_path?: string;
		unstyled?: boolean;
		attrs?: SvelteHTMLElements['a'];
		icon?: Snippet | string;
		children?: Snippet;
	}

	const {
		path,
		js = false,
		base_path = 'https://github.com/ryanatkn/moss/blob/main/',
		unstyled = false,
		attrs,
		icon = '🗎', // TODO temporary, should be an svg
		children,
	}: Props = $props();

	const final_path = $derived(js ? path : path.replace(/\.js$/, '.ts'));

	const href = $derived(base_path + final_path);
</script>

<a {...attrs} {href} class:chip={!unstyled}
	>{#if typeof icon === 'string'}{icon}{:else}{@render icon()}{/if}
	{#if children}{@render children()}{:else}{final_path}{/if}</a
>
