<script lang="ts">
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';
	import Theme_Input from '@ryanatkn/fuz/Theme_Input.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';

	import Module_Link from '$routes/Module_Link.svelte';
	import {default_themes} from '$lib/themes.js';
	import type {Theme} from '$lib/theme.js';
	import Theme_Form from '$routes/Theme_Form.svelte';
	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'themes';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	// let show_create_theme_dialog = false;
	let editing_theme: null | Theme = $state(null);
</script>

<Tome_Content {tome}>
	<section>
		<p>
			Moss supports both the browser's
			<Mdn_Link path="Web/CSS/color-scheme" />
			and custom themes based on <Tome_Link name="variables" />, which use
			<Mdn_Link path="Web/CSS/--*">CSS custom properties</Mdn_Link>.
		</p>
		<p>
			Moss works with any JS framework, but it provides only stylesheets, not integrations. This
			website uses my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a>
			to provide the UI below to control the Moss color scheme and themes.
		</p>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Color scheme" />
		<p>
			Moss supports
			<Mdn_Link path="Web/CSS/color-scheme" /> with dark and light modes. To apply dark mode manually,
			add the <code>dark</code> class to the root <code>html</code>
			element.
		</p>
		<p>
			The Fuz integration detects the default with
			<Mdn_Link path="Web/CSS/@media/prefers-color-scheme" />, and users can also set it directly
			with a component like
			<a href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Color_Scheme_Input.svelte"
				>this one</a
			>:
		</p>
		<div class="flex mb_lg">
			<Color_Scheme_Input />
		</div>
		<p>
			The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.
		</p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Builtin themes" />
		<p>
			A theme is a simple JSON collection of <Tome_Link name="variables" /> that can be transformed into
			CSS that set custom properties. Each variable can have values for light and/or dark color schemes.
			In other words, "dark" isn't a theme, it's a mode that any theme can implement.
		</p>
		<p>
			These docs are a work in progress, for now see <Module_Link path="theme.ts"
				><code>@ryanatkn/moss/theme.ts</code></Module_Link
			> and <Module_Link path="themes.ts"><code>@ryanatkn/moss/themes.ts</code></Module_Link>.
		</p>
		<!-- TODO explain when exported <Code code={`<Theme_Input\n\t{themes}\n\t{selected_theme}\n/>`} /> -->
		<div class="width_sm mb_lg">
			<Theme_Input {themes} enable_editing onedit={(t) => (editing_theme = t)} />
		</div>
		<!-- <button class="mb_lg" onclick={() => (show_create_theme_dialog = true)} disabled
				>create a new theme (todo)</button
			> -->
		<Unfinished_Implementation_Warning
			>The builtin themes need more work, but the proof of concept is ready!</Unfinished_Implementation_Warning
		>
	</Tome_Section>
</Tome_Content>

<!-- TODO enable creating themes -->
<!-- {#if show_create_theme_dialog}
	<Dialog onclose={() => (show_create_theme_dialog = false)} let:close>
		<div class="pane p_md width_md mx_auto">
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
		<div class="pane p_md width_md mx_auto">
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
