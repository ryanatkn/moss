<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {swallow} from '@ryanatkn/belt/dom.js';

	import {color_schemes, type Color_Scheme, get_color_scheme} from '$lib/theme.js';

	interface Props {
		selected_color_scheme?: Writable<Color_Scheme | null>;
		select?: ((color_scheme: Color_Scheme) => void | boolean) | null;
		onselect?: (color_scheme: Color_Scheme) => void;
	}

	const {
		selected_color_scheme = get_color_scheme(),
		select = (color_scheme) => {
			$selected_color_scheme = color_scheme;
		},
		onselect,
	}: Props = $props();
</script>

<!-- TODO maybe support menubar aria
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role -->
<menu class="color_scheme_control unstyled">
	{#each color_schemes as color_scheme (color_scheme)}
		{@const selected = color_scheme === $selected_color_scheme}
		<button
			class="color_scheme"
			type="button"
			role="menuitemradio"
			title={selected
				? `${color_scheme} color scheme is selected`
				: `select ${color_scheme} color scheme`}
			class:selected
			aria-checked={selected}
			onclick={(e) => {
				swallow(e);
				if (select?.(color_scheme) !== false) {
					onselect?.(color_scheme);
				}
			}}
		>
			<div class="content">{color_scheme}</div>
		</button>
	{/each}
</menu>

<style>
	.color_scheme_control {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 var(--space_lg);
	}
	.color_scheme {
		border-radius: 0;
	}
	.color_scheme:first-child {
		border-top-left-radius: var(--border_radius, var(--radius_md));
		border-bottom-left-radius: var(--border_radius, var(--radius_md));
	}
	.color_scheme:last-child {
		border-top-right-radius: var(--border_radius, var(--radius_md));
		border-bottom-right-radius: var(--border_radius, var(--radius_md));
	}
</style>
