<script lang="ts">
	import {writable} from 'svelte/store';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Details from '@ryanatkn/fuz/Details.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_theme, get_color_scheme} from '@ryanatkn/fuz/Themed.svelte';
	import {default_themes} from '@ryanatkn/moss/themes.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';
	import Theme_Input from '@ryanatkn/fuz/Theme_Input.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import Themed_Scope from '@ryanatkn/fuz/Themed_Scope.svelte';

	import {type Theme, save_theme} from '$lib/theme.js';
	import Theme_Form from '$routes/Theme_Form.svelte';

	const LIBRARY_ITEM_NAME = 'themes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	const selected_theme = get_theme();
	const selected_color_scheme = get_color_scheme();

	// This is only needed for the custom controls below,
	// it's automated by default with `Theme_Input` and the top-level `Themed`.
	const select_theme = (theme: Theme): void => {
		$selected_theme = theme;
		save_theme(theme);
	};

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
	<section class="theme">
		<Tome_Subheading text="Scoped themes" slug="scoped-themes" />
		<Details>
			{#snippet summary()}⚠️ Scoped themes are a work in progress and may not be supported depending
				on complexity. It shouldn't worsen the unscoped API.{/snippet}
			<div class="mb_lg">
				<p>Scope a theme to one branch of the DOM tree with <code>Themed_Scope</code>:</p>
				<Code content={`import Themed_Scope from '@ryanatkn/fuz/Themed_Scope.svelte';`} lang="ts" />
				<Code content={`<Themed_Scope {selected_theme}>\n\t\t...\n</Themed_Scope>`} />
			</div>
			<div>
				<!-- TODO this is a lot of copypasta -->
				{#each themes as theme (theme.name)}
					<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
					{@const selected =
						$selected_color_scheme === 'light' && theme.name === $selected_theme.name}
					<Themed_Scope selected_theme={writable(theme)} selected_color_scheme={writable('light')}>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								onclick={() => {
									select_theme(theme);
									$selected_color_scheme = 'light';
								}}
								>{#if selected}★{:else}☆{/if}</button
							>
							<div style:flex="1" class="p_md">
								the <code>{theme.name}</code> theme
							</div>
						</div>
					</Themed_Scope>
				{/each}
				{#each themes as theme (theme.name)}
					<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
					{@const selected =
						$selected_color_scheme === 'dark' && theme.name === $selected_theme.name}
					<Themed_Scope selected_theme={writable(theme)} selected_color_scheme={writable('dark')}>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								onclick={() => {
									select_theme(theme);
									$selected_color_scheme = 'dark';
								}}
								>{#if selected}★{:else}☆{/if}</button
							>
							<div style:flex="1" class="p_md">
								the <code>{theme.name}</code> theme
							</div>
						</div>
					</Themed_Scope>
				{/each}
			</div>
		</Details>
	</section>
	<section class="theme">
		<Tome_Subheading text="Theme usage" slug="theme-usage" />
		<p>Themes are plain CSS that can be sourced in a variety of ways.</p>
		<p>To use fuz's base theme:</p>
		<Code
			content={`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}
	
	const {children}: Props = $props();
<script>

<!-- enable theme and color-scheme support -->
<Themed>
	{@render children()}
</Themed>`}
		/>
		<p>
			<code>Themed</code> can be customized with the nonreactive, bindable, writable store props
			<code>selected_theme</code>
			and <code>selected_color_scheme</code>:
		</p>
		<Code
			content={`<Themed {selected_theme} {selected_color_scheme}>
	{@render children()}
</Themed>`}
		/>
		<p>
			<code>Themed</code> sets the writable stores <code>selected_theme</code>
			and <code>selected_color_scheme</code> in the Svelte context:
		</p>
		<Code
			content={`// get values from the Svelte context provided by
// the nearest \`Themed\` or \`Themed_Scope\` ancestor:

import {get_theme} from '@ryanatkn/moss/theme.js';
const selected_theme = get_theme();
$selected_theme.name; // '${$selected_theme.name}'

import {get_color_scheme} from '@ryanatkn/moss/theme.js';
const selected_color_scheme = get_color_scheme();
$selected_color_scheme; // '${$selected_color_scheme}'`}
			lang="js"
		/>
		<Details>
			{#snippet summary()}More about <code>Themed</code>{/snippet}
			<aside>
				<p>
					<code>Themed</code> initializes the system's theme support. Without it, the page will not
					reflect the user's system
					<code>color-scheme</code>. By default, <code>Themed</code> applies the base theme to the
					root of the page via <code>create_theme_setup_script</code>. It uses JS to add the
					<code>.dark</code> CSS class to the <code>:root</code> element.
				</p>
				<p>
					This strategy enables color scheme and theme support with minimal CSS and optimal
					performance for most use cases. The system supports plain CSS usage that can be static or
					dynamic, scoped or global, or imported at buildtime or runtime. It also allows runtime
					access to the data if you want to pay the performance costs.
				</p>
				<p>
					The theme setup script interacts with <code>sync_color_scheme</code> to save the user's
					preference to <code>localStorage</code>. See also <code>Color_Scheme_Input</code>.
				</p>
				<p>
					The setup script avoids flash-on-load due to color scheme, but currently themes flash in
					after loading. We'll try to fix this when the system stabilizes.
				</p>
			</aside>
		</Details>
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
