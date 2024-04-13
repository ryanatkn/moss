<script lang="ts">
	import {base} from '$app/paths';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		name: string; // TODO type, generate from `tomes`?
		hash?: string;
		chip?: boolean;
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {name, hash, chip = true, attrs, children}: Props = $props();

	// TODO add contextmenu behavior
</script>

<a {...attrs} class:chip href="{base}/library/{name}{hash ? `#${hash}` : ''}"
	>{#if children}{@render children()}{:else}{name}{/if}</a
>

<style>
	a {
		font-family: var(--font_mono);
	}
</style>
