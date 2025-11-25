<script lang="ts">
	import type {Snippet} from 'svelte';
	import Docs from '@ryanatkn/fuz/Docs.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';

	import {tomes} from '$routes/docs/tomes.js';
	import {selected_variable_context} from '$routes/style_variable_helpers.svelte.js';
	import StyleVariableDetail from '$routes/StyleVariableDetail.svelte';
	import UnfinishedImplementationWarning from '$routes/docs/UnfinishedImplementationWarning.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const selected_variable = selected_variable_context.set();

	const pkg = pkg_context.get();
</script>

<Docs {tomes} {pkg}>
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
</Docs>

{#if selected_variable.value}
	<Dialog onclose={() => (selected_variable.value = null)}>
		{#snippet children(close)}
			<div class="pane p_xl width_upto_md mx_auto">
				<StyleVariableDetail variable={selected_variable.value} />
				<UnfinishedImplementationWarning />
				<button type="button" onclick={close}>ok</button>
			</div>
		{/snippet}
	</Dialog>
{/if}
