<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '@ryanatkn/fuz_code/prism.css';

	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import Themed from '$lib/Themed.svelte';
	import {set_pkg} from '$routes/pkg.js';
	import {package_json, src_json} from '$routes/package.js';
	import Spiders from '$routes/Spiders.svelte';
	// TODO re-enable this, see comment below
	// import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	// import Dialog from '$lib/Dialog.svelte';
	// import Settings from '$routes/Settings.svelte';
	// import {contextmenu_action} from '$lib/contextmenu.svelte.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	set_pkg(parse_package_meta(package_json.homepage, package_json, src_json));

	// let show_settings = $state(false);
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<Themed>
	<!-- TODO add all of this and fixed scoped, so the library examples work as expected,
		or maybe disable this main contextmenu when in the library -->
	<!-- <Contextmenu_Root> -->
	{@render children()}
	<Spiders />
	<!-- </Contextmenu_Root> -->
	<!-- {#if show_settings}
		<Dialog onclose={() => (show_settings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if} -->
</Themed>

<!-- <svelte:body
	use:contextmenu_action={[
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
	]}
/> -->
