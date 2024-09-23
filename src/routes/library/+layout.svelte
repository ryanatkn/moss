<script lang="ts">
	import type {Snippet} from 'svelte';
	import Library from '@ryanatkn/fuz/Library.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';

	import {tomes} from '$routes/library/tomes.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.svelte.js';
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
				<Svg data={moss_logo} size="var(--icon_size_sm)" /> <span class="ml_sm">moss</span>
			</div>
		{:else}
			<Svg data={moss_logo} size="var(--icon_size_sm)" />
		{/if}
	{/snippet}
	{@render children()}
</Library>

{#if selected_variable.value}
	<Dialog onclose={() => (selected_variable.value = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={selected_variable.value} />
					<Unfinished_Implementation_Warning />
					<button type="button" onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}
