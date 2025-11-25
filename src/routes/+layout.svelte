<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '$routes/moss.css';
	import '@ryanatkn/fuz_code/theme.css';

	import {Pkg, pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import type {Snippet} from 'svelte';
	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Spiders from '@ryanatkn/fuz/Spiders.svelte';

	import {package_json, src_json} from '$routes/package.js';
	// TODO re-enable this, see comment below
	// import ContextmenuRoot from '$lib/ContextmenuRoot.svelte';
	// import Dialog from '$lib/Dialog.svelte';
	// import Settings from '$routes/Settings.svelte';
	// import {contextmenu_attachment} from '$lib/contextmenu_helpers.svelte.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	pkg_context.set(new Pkg(package_json, src_json));

	// let show_settings = $state(false);
</script>

<svelte:head>
	<title>Moss - magical organic stylesheets</title>
</svelte:head>

<Themed>
	<!-- TODO add all of this and fixed scoped, so the docs examples work as expected,
		or maybe disable this main contextmenu when in the docs -->
	<!-- <ContextmenuRoot> -->
	{@render children()}
	<Spiders />
	<!-- </ContextmenuRoot> -->
	<!-- {#if show_settings}
		<Dialog onclose={() => (show_settings = false)}>
			<div class="pane p_md width_upto_md mx_auto">
				<Settings />
			</div>
		</Dialog>
	{/if} -->
</Themed>

<!-- <svelte:body
	{@attach contextmenu_attachment([
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	])}
/> -->
