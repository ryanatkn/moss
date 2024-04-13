<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import {default_variables} from '$lib/variables.js';
	import {get_selected_variable} from '$routes/style_variable_helpers.js';

	interface Props {
		name: string; // TODO type? generate from `tomes`? or keep extensible?
		classes?: string;
		inline?: boolean;
		plain?: boolean;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet;
	}

	const {name, classes, inline = false, plain = true, attrs, children}: Props = $props();

	// TODO @multiple add to $lib?

	// TODO add contextmenu behavior

	const variable = $derived.by(() => {
		const v = default_variables.find((v) => v.name === name);
		if (!v) throw new Error(`cannot find variable named "${name}"`);
		return v;
	});

	const selected_variable = get_selected_variable();
</script>

<button
	type="button"
	{...attrs}
	class={classes}
	class:inline
	class:plain
	onclick={() => ($selected_variable = variable ?? null)}
	>{#if children}{@render children()}{:else}<span class="font_mono">{name}</span>{/if}</button
>

<style>
	button {
		min-height: var(--input_height_sm);
	}
</style>
