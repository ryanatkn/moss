<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<blockquote>
			⚠️ Docs are a work in progress. Moss was recently extracted from
			<a href="https://www.fuz.dev/">Fuz</a>, and these docs are incomplete and misleading in some
			cases, because they now need to be agnostic to Svelte and deal with more inner workings of the
			CSS.
		</blockquote>
		<p>
			Moss is a CSS framework that can be used with any website and JS framework. Its design system
			centers on <em>style variables</em>, which are
			<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</a> and design
			tokens with more capabilities.
		</p>
		<p>
			Usage Moss can be as simple as importing <a
				href="https://github.com/ryanatkn/moss/blob/main/src/lib/style.css"
				>a single static stylesheet</a
			>, and it's built with a data-driven approach that makes its insides available in many forms,
			like deconstructed CSS files and TypeScript modules that provide data, types, and helpers
			around the variable and build systems. It's in early alpha and there will be many breaking
			changes.
		</p>
		<p>
			To learn more see <a href="https://moss.ryanatkn.com/library">the docs</a> and
			<a href="https://github.com/ryanatkn/moss/blob/main/contributing.md">contributing.md</a>. Feel
			free to take the ideas and code for your own purposes.
		</p>
		<p>Some features:</p>
		<ul>
			<li>
				plain CSS, most users import a single stylesheet (optimizing it is currently out of scope,
				see tools like <a href="https://github.com/FullHuman/purgecss">PurgeCSS</a>)
			</li>
			<li>zero dependencies</li>
			<li>
				designed around <em>style variables</em>, a specialization of
				<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS custom properties</a>
				and design tokens
				<ul>
					<li>variables are a more primitive building block than classes</li>
					<li>includes optional utility and component classes that use the variables</li>
				</ul>
			</li>
			<li>
				<!-- TODO inner link -->
				supports
				<a href="https://moss.ryanatkn.com/library/theme"
					><code>color-scheme</code> and custom themes</a
				>
				(including dark mode)
			</li>
			<li>styles HTML tags directly, so you don't need to add `.btn` to buttons</li>
			<li>
				stylesheets:
				<ul>
					<li>
						<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style.css"
							><code>@ryanatkn/moss/style.css</code></a
						>, which is composed of:
						<ul>
							<li>
								<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style_reset.css"
									><code>@ryanatkn/moss/style_reset.css</code></a
								> - required
							</li>
							<li>
								<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style_utilities.css"
									><code>@ryanatkn/moss/style_utilities.css</code></a
								> - optional
							</li>
							<li>
								<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style_components.css"
									><code>@ryanatkn/moss/style_components.css</code></a
								> - optional
							</li>
							<li>
								<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style_animations.css"
									><code>@ryanatkn/moss/style_animations.css</code></a
								> - optional
							</li>
						</ul>
					</li>
					<li>
						<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/theme.css"
							><code>@ryanatkn/moss/theme.css</code></a
						> - or bring your own
					</li>
					<li>
						it probably makes sense to include a Vite plugin to remove unused styles, but the
						primary apps I'm building provide these styles to users and therefore won't remove
						unused code, so the feature isn't urgent
					</li>
				</ul>
			</li>
		</ul>
		<p>
			In the docs, you'll see I'm writing asides using "⚠️" with open questions and other discussion
			of uncertainties. Your input is appreciated in the <a href="https://discord.gg/YU5tyeK72X"
				>Discord</a
			>, the
			<a href="https://github.com/ryanatkn/moss/issues">GitHub issues</a>, or
			<a href="https://www.webdevladder.net/">other social media</a>, on these and other topics 🌿
		</p>
		<aside>
			<p>⚠️ TODO:</p>
			<ul>
				<li>do a pass on all of the existing docs</li>
				<li>describe in depth the mechanics of the CSS, starting with dark mode</li>
				<li>write docs about build tooling</li>
			</ul>
		</aside>
	</section>
</Tome_Detail>
