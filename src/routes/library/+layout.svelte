<script lang="ts">
	import type {Snippet} from 'svelte';

	import Library from '$lib/Library.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.js';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {get_pkg} from '$routes/pkg.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const selected_variable = set_selected_variable();

	const pkg = get_pkg();
</script>

<Library {tomes} {pkg}>
	{@render children()}
</Library>

{#if $selected_variable}
	<Dialog onclose={() => ($selected_variable = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={$selected_variable} />
					<aside>⚠️ This is unfinished and will change.</aside>
					<button onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}
