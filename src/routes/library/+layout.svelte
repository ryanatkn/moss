<script lang="ts">
	import type {Snippet} from 'svelte';
	import Library from '@ryanatkn/fuz/Library.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';

	import {tomes} from '$routes/library/tomes.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.js';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';
	import {get_pkg} from '$routes/pkg.js';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const selected_variable = set_selected_variable();

	const pkg = get_pkg();
</script>

<Library {tomes} {pkg}>
	{#snippet breadcrumb_children(is_primary_nav)}
		{#if is_primary_nav}
			<div class="icon row">
				<Moss_Logo size="32px" /> <span class="ml_sm">moss</span>
			</div>
		{:else}
			<Moss_Logo size="32px" />
		{/if}
	{/snippet}
	{@render children()}
</Library>

{#if $selected_variable}
	<Dialog onclose={() => ($selected_variable = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={$selected_variable} />
					<Unfinished_Implementation_Warning />
					<button type="button" onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}
