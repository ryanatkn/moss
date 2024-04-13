<script lang="ts">
	import type {Readable} from 'svelte/store';
	import {swallow} from '@ryanatkn/belt/dom.js';

	import {get_theme, type Theme} from '$lib/theme.js';
	import {default_themes} from '$lib/themes.js';

	interface Props {
		selected_theme?: Readable<Theme | null>;
		themes?: Theme[];
		enable_editing?: boolean;
		select?: ((theme: Theme) => void | boolean) | null;
		onselect?: (theme: Theme) => void;
		onedit?: (theme: Theme) => void;
	}

	const {
		selected_theme = get_theme(),
		themes = default_themes,
		enable_editing = false,
		select = (theme) => {
			$selected_theme = theme;
		},
		onselect,
		onedit,
	}: Props = $props();

	const selected_theme_name = $derived($selected_theme?.name);
</script>

<menu class="theme_input unstyled">
	{#each themes as theme (theme.name)}
		<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
		{@const selected = theme.name === selected_theme_name}
		<li class="row" role="none">
			<button
				type="button"
				class="theme_button"
				role="menuitemradio"
				aria-label="{theme.name} theme"
				aria-checked={selected}
				class:selected
				onclick={(e) => {
					swallow(e);
					if (select?.(theme) !== false) {
						onselect?.(theme);
					}
				}}
			>
				{theme.name}
			</button>
			{#if enable_editing}
				<button
					type="button"
					class="icon_button plain"
					onclick={(e) => {
						swallow(e);
						onedit?.(theme);
					}}>•••</button
				>
			{/if}
		</li>
	{/each}
</menu>

<style>
	.theme_button {
		flex: 1;
	}
</style>
