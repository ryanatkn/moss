<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Details from '@ryanatkn/fuz/Details.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_color_scheme} from '@ryanatkn/fuz/Themed.svelte';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';
	import Theme_Input from '@ryanatkn/fuz/Theme_Input.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';

	import {default_themes} from '$lib/themes.js';
	import type {Theme} from '$lib/theme.js';
	import Theme_Form from '$routes/Theme_Form.svelte';

	// TODO BLOCK separate correctly from the Themed docs

	const LIBRARY_ITEM_NAME = 'themes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	const selected_color_scheme = get_color_scheme();

	// let show_create_theme_dialog = false;
	let editing_theme: null | Theme = $state(null);
</script>

<Tome_Detail {tome}>
	<section class="theme">
		<p>
			<code>Themed</code> adds global support for both the browser's
			<Mdn_Link href="Web/CSS/color-scheme" />
			and custom themes based on <Tome_Link name="variables" />, which use
			<Mdn_Link href="Web/CSS/--*">CSS custom properties</Mdn_Link>.
			<code>Themed</code> is a singleton component that's mounted at the top-level of the page:
		</p>
		<Code content={`import Themed from '@ryanatkn/fuz/Themed.svelte';`} lang="ts" />
		<Code content={`<!-- +layout.svelte -->\n<Themed>\n\t{@render children()}\n</Themed>`} />
		<Details>
			{#snippet summary()}Why the singleton?{/snippet}
			<aside>
				<p>
					By default <code>Themed</code> syncs its settings to the global <code>:root</code> tag and
					persists to <code>localStorage</code>.
				</p>
				<p>These behaviors can be customized with its props:</p>
				<ul>
					<li><code>sync_color_scheme</code></li>
					<li><code>load_color_scheme</code></li>
					<li><code>save_color_scheme</code></li>
					<li><code>load_theme</code></li>
					<li><code>save_theme</code></li>
				</ul>
				<p>See <code>Themed_Scope</code> below to theme one branch of the DOM tree.</p>
			</aside>
		</Details>
		<Details>
			{#snippet summary()}Why nested children?{/snippet}
			<aside>
				<p>
					<code>Themed</code> is designed to wrap every page at the top level so it can provide the
					selected theme and color scheme in the Svelte context. It works without children, but
					<code>get_theme</code> and <code>get_color_scheme</code> will fail unless you call
					<code>set_theme</code> and <code>set_color_scheme</code> yourself.
				</p>
				<p>
					These context helpers provide the <code>writable</code> stores to your code, and they also
					reduce boilerplate in the helper components documented below.
				</p>
				<p>
					If you set stores in context manually, they must be the same references as the <code
						>Themed</code
					> props:
				</p>
				<Code
					content={'<' +
						`script>\n\tconst theme = writable(...);\n\tconst color_scheme = writable(...);\n\tset_theme(theme);\n\tset_color_scheme(color_scheme);\n</script>\n<Themed\n\tselected_theme={theme}\n\tselected_color_scheme={color_scheme}\n/>\n<!-- sibling content... -->`}
				/>
			</aside>
		</Details>
	</section>
	<section class="theme">
		<Tome_Subheading text="Color scheme" slug="color-scheme" />
		<p>
			<code>Themed</code> defaults to automatic
			<Mdn_Link href="Web/CSS/color-scheme" />
			detection with
			<Mdn_Link href="Web/CSS/@media/prefers-color-scheme" />, and users can also set it directly:
		</p>
		<Color_Scheme_Input />
		<Code
			content={`import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';`}
			lang="ts"
		/>
		<Code content="<Color_Scheme_Input />" />
		<p>Pass a prop to override the default:</p>
		<Code
			content={`<Color_Scheme_Input\n\tselected_color_scheme={writable(${
				$selected_color_scheme
					? "'" + JSON.stringify($selected_color_scheme).replace(/"/gu, '') + "'"
					: 'null'
			})}\n/>`}
		/>
		<p>
			The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.
		</p>
		<Details>
			{#snippet summary()}More about <code>Color_Scheme_Input</code>{/snippet}
			<aside>
				<p>
					<code>Color_Scheme_Input</code> enables users to choose and persist the color scheme without
					boilerplate.
				</p>
				<p>
					By default, <code>Color_Scheme_Input</code> works with <code>Themed</code> to save the
					user's preference to <code>localStorage</code>. To customize this behavior, pass a custom
					<code>selected_color_scheme</code>
					or <code>select</code> function prop.
				</p>
			</aside>
		</Details>
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
