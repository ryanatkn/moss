<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import {default_variables} from '$lib/variables.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Module_Link from '$routes/Module_Link.svelte';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	// TODO maybe FAQ? need a standardized pattern -- first add the "on this page" menu functionality
</script>

<Tome_Content {tome}>
	<section>
		<p>
			Style variables, or just "variables" in Moss, are <Mdn_Link
				path="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</Mdn_Link
			> that can be grouped into a <Tome_Link name="themes">theme</Tome_Link>. Each variable can
			have values for light and/or dark <Mdn_Link path="Web/CSS/color-scheme"
				>color-schemes</Mdn_Link
			>. They're design tokens with an API.
		</p>
		<p>
			The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			for both developers and end-users. Variables can be composed in multiple ways:
		</p>
		<ul>
			<li>by CSS classes, both utility and component</li>
			<li>
				by other variables, both in calculations and to add useful semantics (e.g. <code
					>button_fill_hover</code
				>
				defaults to <code>fg_2</code> but can be themed independently)
			</li>
			<li>
				in JS like the <a href="https://svelte.dev/">Svelte</a> components in
				<a href="https://www.fuz.dev/">Fuz</a>
			</li>
		</ul>
		<p>
			Variables also provide an interface that's generally secure for user-generated content, if
			you're into that kind of thing.
		</p>
		<p>
			The result is a flexible system that aligns with modern CSS to deliver high-capability UX and
			DX with minimal overhead.
		</p>
	</section>
	<section>
		<div class="mb_md">
			<Module_Link path="theme.js" />
		</div>
		<Code
			lang="ts"
			content={`export interface Theme {
	name: string;
	variables: Style_Variable[];
}

export interface Style_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}
		/>
	</section>
	<Tome_Section>
		<Tome_Section_Header text={`All ${variables.length} style variables`} />
		<Unfinished_Implementation_Warning>Many of these will change.</Unfinished_Implementation_Warning
		>
		<!-- TODO add info through the contextmenu or dialog -->
		<div class="variables">
			{#each variables as variable (variable.name)}
				<Style_Variable_Button name={variable.name} classes="menu_item" />
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.variables {
		width: 100%;
		display: inline-grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--style_variable_name_width, 240px), 1fr));
		font-family: var(--font_mono);
		white-space: nowrap;
	}
</style>
