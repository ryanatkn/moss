<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';
	import Theme_Input from '@ryanatkn/fuz/Theme_Input.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';

	import {default_themes} from '$lib/themes.js';
	import type {Theme} from '$lib/theme.js';
	import Theme_Form from '$routes/Theme_Form.svelte';

	// TODO separate correctly from the Themed docs

	const LIBRARY_ITEM_NAME = 'themes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	// let show_create_theme_dialog = false;
	let editing_theme: null | Theme = $state(null);
</script>

<Tome_Detail {tome}>
	<section class="theme">
		<p>
			Moss supports both the browser's
			<Mdn_Link href="Web/CSS/color-scheme" />
			and custom themes based on <Tome_Link name="variables" />, which use
			<Mdn_Link href="Web/CSS/--*">CSS custom properties</Mdn_Link>.
		</p>
	</section>
	<section class="theme">
		<Tome_Subheading text="Color scheme" slug="color-scheme" />
		<p>
			Moss supports
			<Mdn_Link href="Web/CSS/color-scheme" /> with dark and light modes. It detects the default with
			<Mdn_Link href="Web/CSS/@media/prefers-color-scheme" />, and users can also set it directly:
		</p>
		<div class="flex mb_lg">
			<Color_Scheme_Input />
		</div>
		<p>
			The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.
		</p>
	</section>
	<section class="theme">
		<Tome_Subheading text="Builtin themes" slug="builtin-themes" />
		<p>
			A theme is a simple JSON collection of <Tome_Link name="variables" /> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.
		</p>
		<!-- TODO explain when exported <Code code={`<Theme_Input\n\t{themes}\n\t{selected_theme}\n/>`} /> -->
		<div class="width_sm mb_lg">
			<Theme_Input {themes} enable_editing onedit={(t) => (editing_theme = t)} />
		</div>
		<!-- <button class="mb_lg" onclick={() => (show_create_theme_dialog = true)} disabled
				>create a new theme (todo)</button
			> -->
		<aside>The builtin themes need more work, but the proof of concept is ready!</aside>
	</section>
</Tome_Detail>

<!-- TODO enable creating themes -->
<!-- {#if show_create_theme_dialog}
	<Dialog onclose={() => (show_create_theme_dialog = false)} let:close>
		<div class="pane">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					oncreate={(theme) => {
						themes = themes.concat(theme);
						close();
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if} -->
{#if editing_theme}
	<Dialog onclose={() => (editing_theme = null)}>
		<div class="pane">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					theme={editing_theme}
					onsave={(theme) => {
						console.log(`update theme`, theme); // eslint-disable-line no-console
						alert('todo'); // eslint-disable-line no-alert
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.theme_editor_wrapper {
		width: var(--width_md);
		padding: var(--space_lg);
	}
</style>
