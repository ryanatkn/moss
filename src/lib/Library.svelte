<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import {onNavigate} from '$app/navigation';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {Tome, set_tomes} from '$lib/tome.js';
	import Library_Primary_Nav from '$lib/Library_Primary_Nav.svelte';
	import Library_Secondary_Nav from '$lib/Library_Secondary_Nav.svelte';
	import Library_Tertiary_Nav from '$lib/Library_Tertiary_Nav.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {set_library_links} from '$lib/library.svelte.js';
	import Spider from '$routes/Spider.svelte';

	interface Props {
		tomes: Tome[];
		pkg: Package_Meta;
		children: Snippet;
	}

	const {tomes, pkg, children}: Props = $props();

	// TODO this API is messy, inconsistent usage of props/context
	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	// TODO @multiple dialog navs - this is messy to satisfy SSR with the current design that puts the secondary nav in a dialog
	const TERTIARY_NAV_BREAKPOINT = 1000;
	const SECONDARY_NAV_BREAKPOINT = 800;

	let innerWidth: number | undefined = $state();

	let show_secondary_nav_dialog = $state(false);
	const toggle_secondary_nav_dialog = (show?: boolean): void => {
		show_secondary_nav_dialog = show ?? !show_secondary_nav_dialog;
	};

	onNavigate(() => {
		show_secondary_nav_dialog = false;
	});

	set_library_links();
</script>

<svelte:window bind:innerWidth onhashchange={() => (show_secondary_nav_dialog = false)} />

<div class="library">
	<Library_Primary_Nav>
		<div class="nav_dialog_toggle">
			<button class="plain" type="button" onclick={() => toggle_secondary_nav_dialog()}>menu</button
			>
		</div>
	</Library_Primary_Nav>
	<!-- TODO @multiple dialog navs -->
	{#if !innerWidth || innerWidth > SECONDARY_NAV_BREAKPOINT}
		<div class="secondary_nav_wrapper">
			<Library_Secondary_Nav {tomes} />
		</div>
	{/if}
	<main>
		<div class="content">
			{@render children()}
			<!-- TODO @multiple dialog navs -->
			{#if !innerWidth || innerWidth > TERTIARY_NAV_BREAKPOINT}
				<Library_Tertiary_Nav {tomes} {tomes_by_name} />
			{/if}
			<section class="box">
				<Library_Footer {pkg}>
					<div class="mb_xl5">
						<Breadcrumb><Spider size="32px" /></Breadcrumb>
					</div>
				</Library_Footer>
			</section>
		</div>
	</main>
</div>
<!-- TODO @multiple dialog navs - instead of a dialog, probably use a popover (new component) -->
<!-- TODO this is messy rendering `Library_Secondary_Nav` twice to handle responsive states with SSR correctly -->
{#if show_secondary_nav_dialog && innerWidth && innerWidth <= TERTIARY_NAV_BREAKPOINT}
	<Dialog onclose={() => (show_secondary_nav_dialog = false)}>
		<div class="pane">
			<div class="p_xl pb_0"><Breadcrumb><Spider size="32px" /></Breadcrumb></div>
			<div class="px_lg pb_xl">
				<Library_Secondary_Nav {tomes} sidebar={false} />
				<Library_Tertiary_Nav {tomes} {tomes_by_name} sidebar={false} />
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.library {
		--library_primary_nav_height: 60px;
		--library_secondary_nav_padding: var(--space_md); /* also used by the tertiary nav */
		--library_menu_width: 180px;
		--library_content_padding: var(--space_xl5);
		--library_content_max_width: calc(var(--width_md) + var(--library_content_padding) * 2);
		--library_sidebar_width: max(
			calc(var(--library_menu_width) + var(--library_secondary_nav_padding) * 2),
			calc((100% - var(--library_content_max_width)) / 2)
		);
		display: contents;
	}

	.content {
		position: relative;
		width: calc(100% - var(--library_sidebar_width) * 2);
		max-width: var(--library_content_max_width);
		padding: var(--library_content_padding);
		padding-top: 0;
		margin: 0 auto;
		overflow: hidden; /* maybe heavy-handed */
	}

	.secondary_nav_wrapper {
		display: contents;
	}

	.nav_dialog_toggle {
		display: none;
	}
	.nav_dialog_toggle button {
		padding-left: var(--space_xl3);
		padding-right: var(--space_xl3);
		border-radius: 0;
	}

	@media (max-width: 1200px) {
		/* main {
			flex-direction: column;
		} */
	}

	/* sync this breakpoint with `Library_Tertiary_Nav` and `Tome_Subheading` */
	@media (max-width: 1000px) {
		/* main { */
		/* --library_content_max_width: calc(var(--width_md) + var(--library_content_padding)); */
		/* } */
		.content {
			--library_content_padding: var(--space_xl);
			/* handle the moved `Library_Tertiary_Nav` */
			width: calc(100% - var(--library_sidebar_width));
			margin-right: 0;
		}

		.nav_dialog_toggle {
			display: contents;
		}
	}

	/* sync this breakpoint with `Library_Primary_Nav`, `Library_Secondary_Nav`, and `Tome_Subheading` */
	@media (max-width: 800px) {
		.content {
			/* handle the moved `Library_Secondary_Nav` */
			width: 100%;
			margin-left: 0;
		}

		.secondary_nav_wrapper {
			display: none;
		}
	}

	section {
		padding: var(--space_xl2);
	}
</style>
