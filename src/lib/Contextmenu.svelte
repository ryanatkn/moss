<script lang="ts">
	import type {Snippet} from 'svelte';
	import {contextmenu_action} from '$lib/contextmenu.svelte.js';

	interface Props {
		entries: Snippet;
		children: Snippet;
	}

	const {entries, children}: Props = $props();

	// Ideally this wouldn't have a wrapper element,
	// but I don't see a decent way to map DOM click events
	// from anywhere to the Svelte context without gross overhead.

	// TODO probably do a writeup comparing this to the action syntax,
	// but probably wait until Svelte 5 has the successor to actions
</script>

<span use:contextmenu_action={entries} class="display_contents">{@render children()}</span>
