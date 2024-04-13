<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import {default_variables} from '$lib/variables.js';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	// TODO maybe FAQ? need a standardized pattern -- first add the "on this page" menu functionality
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Variables are <Mdn_Link href="Web/CSS/--*">CSS custom properties</Mdn_Link>
			that can be grouped into a <Tome_Link name="themes">theme</Tome_Link>. Each variable can have
			values for light and/or dark color schemes.
		</p>
		<p>
			The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			both developers and end-users. Variables can be composed in multiple ways:
		</p>
		<ul>
			<li>by CSS classes, both utility and semantic</li>
			<li>
				by other variables, both in calculations and to add useful semantics (e.g. <code
					>button_bg_hover</code
				>
				defaults to <code>fg_2</code> but can be themed independently)
			</li>
			<li>in JS like in Svelte components</li>
		</ul>
		<p>
			Variables also provide an interface that user-generated content can safely use in most cases.
			The result is a non-dogmatic system that aligns with modern CSS to deliver high-capability UX
			and DX with minimal overhead.
		</p>
		<aside>
			<p>
				These are named "variables" or "style variables" instead of the common name "design tokens"
				because Fuz is made by a programmer designing more for devs and end-users than designers.
				Their functionality is like JS variables but for CSS, and they're implemented with CSS
				custom properties, which are commonly called CSS variables. I'm familiar with tokens as
				secrets for authentication, and I don't like overloading the term - especially for sensitive
				secrets! Wikipedia has several programming usages for tokens but no page about design
				tokens. Maybe I'll change my mind?
			</p>
		</aside>
		<aside>
			<p>
				Variables are <code>snake_case</code> so that they're also valid JS identifiers, not for
				stylistic or contrarian reasons. This choice leaks to the CSS class naming conventions, so
				that variable-derived utility classes match their corresponding variable names. This fits
				nicely with
				<a href="https://svelte.dev/docs/element-directives#class-name"
					>Svelte's class shorthand syntax</a
				>.
			</p>
			<p>
				The naming convention also supports my goal of thinking about Fuz and your app as having a
				single unified flat namespace, where every identifier regardless of module is unique and
				part of a larger whole - the system's vocabulary, referenceable in every appropriate context
				- JS, HTML, and CSS, on the client and server, and in tests and dev tools. This makes each
				identifier a globally meaningful term. Maybe this needs a blog post.
			</p>
		</aside>
	</section>
	<section>
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
	<section>
		<Tome_Subheading text={`All ${variables.length} style variables`} slug="all-style-variables" />
		<aside class="mb_lg">⚠️ some of these will change</aside>
		<!-- TODO add info through the contextmenu or dialog -->
		<div class="variables">
			{#each variables as variable (variable.name)}
				<Style_Variable_Button name={variable.name} classes="menu_item" />
			{/each}
		</div>
	</section>
</Tome_Detail>

<style>
	.variables {
		width: 100%;
		display: inline-grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--style_variable_name_width, 240px), 1fr));
		font-family: var(--font_mono);
		white-space: nowrap;
	}
</style>
