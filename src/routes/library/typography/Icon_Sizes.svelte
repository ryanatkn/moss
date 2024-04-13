<script lang="ts">
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	// TODO move to a single source of truth (JSON or ts), generate CSS and use to render here
	const sizes = {
		icon_size_xl2: '192px',
		icon_size_xl: '128px',
		icon_size_lg: '80px',
		icon_size_md: '48px',
		icon_size_sm: '32px',
		icon_size_xs: '18px',
	};
</script>

<section>
	<Tome_Subheading text="Icon sizes" slug="icon_size-variants" />
	<aside>
		unlike <code>--size_</code> variables, <code>--icon_</code> variables are in
		<code>px</code>
		not <code>rem</code>, so they're insensitive to browser font size
	</aside>
</section>
<div class="icon_sizes">
	<!-- TODO make this data driven -->
	<!-- TODO read these vars from the typescript and display their runtime values -->
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_xs" /> =
			<code>{sizes.icon_size_xs}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_xs); --size: var(--icon_size_xs);"
			title="--icon_size_xs is {sizes.icon_size_xs}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_sm" /> =
			<code>{sizes.icon_size_sm}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_sm); --size: var(--icon_size_sm);"
			title="--icon_size_sm is {sizes.icon_size_sm}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_md" /> =
			<code>{sizes.icon_size_md}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_md); --size: var(--icon_size_md);"
			title="--icon_size_md is {sizes.icon_size_md}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_lg" /> =
			<code>{sizes.icon_size_lg}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_lg); --size: var(--icon_size_lg);"
			title="--icon_size_lg is {sizes.icon_size_lg}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_xl" /> =
			<code>{sizes.icon_size_xl}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_xl); --size: var(--icon_size_xl);"
			title="--icon_size_xl is {sizes.icon_size_xl}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption>
			<Style_Variable_Button name="icon_size_xl2" /> =
			<code>{sizes.icon_size_xl2}</code>
		</figcaption>
		<div
			style="font-size: var(--icon_size_xl2); --size: var(--icon_size_xl2);"
			title="--icon_size_xl2 is {sizes.icon_size_xl2}"
		>
			🐢
		</div>
	</figure>
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
