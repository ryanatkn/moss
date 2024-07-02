<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';

	import Module_Link from '$routes/Module_Link.svelte';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Moss is a CSS framework and design system that can be used with any website and JS framework.
			It's built around <em>style variables</em>, which are
			<Mdn_Link href="Web/CSS/--*">CSS custom properties</Mdn_Link> and design tokens with additional
			capabilities and conventions.
		</p>
		<Unfinished_Implementation_Warning>
			Moss is in early alpha and there will be many breaking changes.
		</Unfinished_Implementation_Warning>
		<p>Characteristics:</p>
		<ul>
			<li>plain CSS</li>
			<li>zero dependencies</li>
			<li>exports one main stylesheet that can be optimized by other tools</li>
			<li>also exports the underlying CSS partials, helpers, types, and data</li>
			<li>
				uses its own concept of style variables, a specialization of CSS custom properties and
				design tokens
				<ul>
					<li>variables are the main source of truth</li>
					<li>each variable provides values to light and/or dark mode</li>
					<li>includes optional utility and component classes that use the variables</li>
				</ul>
			</li>
			<li>themes are groups of variables</li>
			<li>
				dark mode is a first-class concept in the system, not a theme, instead each theme can
				support light and/or dark <Mdn_Link href="Web/CSS/color-scheme">color-schemes</Mdn_Link>
			</li>
			<li>includes a CSS reset that styles HTML tags directly with the variables</li>
			<li>
				is agnostic to JS frameworks, for example usage see <a
					href="https://www.fuz.dev/library/Themed"><code>Themed</code></a
				>
				in my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a>
			</li>
		</ul>
		<p>The stylesheets:</p>
		<ul>
			<li>
				<Module_Link path="style.css"><code>@ryanatkn/moss/style.css</code></Module_Link>, which is
				composed of:
				<ul>
					<li>
						<Module_Link path="style_reset.css"
							><code>@ryanatkn/moss/style_reset.css</code></Module_Link
						> - required
					</li>
					<li>
						<Module_Link path="style_utilities.css"
							><code>@ryanatkn/moss/style_utilities.css</code></Module_Link
						> - optional
					</li>
					<li>
						<Module_Link path="style_components.css"
							><code>@ryanatkn/moss/style_components.css</code></Module_Link
						> - optional
					</li>
					<li>
						<Module_Link path="style_animations.css"
							><code>@ryanatkn/moss/style_animations.css</code></Module_Link
						> - optional
					</li>
				</ul>
			</li>
			<li>
				<Module_Link path="theme.css"><code>@ryanatkn/moss/theme.css</code></Module_Link> - or bring
				your own
			</li>
			<li>
				optimizing the stylesheet is out of Moss's scope, but it's just CSS so it works with
				existing tools
				<ul>
					<li>
						I'm planning to include a Vite plugin to remove unused styles in my Svelte UI library <a
							href="https://www.fuz.dev/">Fuz</a
						>
					</li>
					<li>
						optimizing the stylesheet will become increasingly important as the utility classes fill
						out - the plan is to include the commonly useful things, but not everything like
						Tailwind
					</li>
				</ul>
			</li>
		</ul>
		<p>
			Moss is being made to support <a href="https://www.ryanatkn.com/">my other projects</a>, which
			are higher priority, so it'll grow relatively slowly as I encounter more usecases. It's
			hobby-ready but expect a lot of breaking changes. Feel free to take the code and ideas for
			your own purposes.
		</p>
		<p>
			In the docs, you'll see I'm writing asides using "⚠️" with open questions and other discussion
			of uncertainties. Your input is appreciated in the <a href="https://discord.gg/YU5tyeK72X"
				>Discord</a
			>, the
			<a href="https://github.com/ryanatkn/moss/issues">GitHub issues</a>, or
			<a href="https://www.webdevladder.net/">other social media</a>, on these and other topics, see
			<a href="https://github.com/ryanatkn/moss/blob/main/contributing.md">contributing.md</a> for more
			🌿
		</p>
	</section>
</Tome_Detail>
