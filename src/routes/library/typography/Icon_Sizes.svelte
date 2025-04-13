<script lang="ts">
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {icon_sizes} from '$lib/variable_data.js';
</script>

<Tome_Section>
	<Tome_Section_Header text="Icon sizes" />
	<aside>
		unlike <code>--size_</code> variables, <code>--icon_</code> variables are in
		<code>px</code>
		not <code>rem</code>, so they're insensitive to browser font size
	</aside>
</Tome_Section>
<div class="icon_sizes">
	{#each Object.entries(icon_sizes) as [name, value] (name)}
		<figure>
			<figcaption>
				<Style_Variable_Button {name} /> =
				<code>{value}</code>
			</figcaption>
			<div style:font-size="var(--{name})" style:--size="var(--{name})" title="--{name} is {value}">
				🐢
			</div>
		</figure>
	{/each}
</div>

<style>
	.icon_sizes {
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden; /* TODO hack because emoji are bigger than the defined dimensions, maybe dont use a 🐢? :(  */
	}
	.icon_sizes figure {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--space_xl) 0;
	}
	/* TODO layout with CSS grid */
	.icon_sizes figcaption {
		display: flex;
	}
	.icon_sizes figure > div {
		width: var(--size, var(--size_md));
		height: var(--size, var(--size_md));
		border: var(--border_width) var(--border_style) var(--border_color);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	code {
		white-space: nowrap;
	}
	figcaption {
		display: flex;
		align-items: center;
		z-index: 1;
	}
</style>
