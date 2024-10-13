<script lang="ts">
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';

	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';
</script>

<p>
	Moss is a CSS framework and design system that's built around <em>style variables</em>, which are
	<Mdn_Link path="Web/CSS/--*">CSS custom properties</Mdn_Link> and design tokens with additional capabilities
	and conventions.
</p>
<p>
	Moss can be used with any website and JS framework. It exports
	<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style.css">one main stylesheet</a>
	and
	<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/theme.css">a theme stylesheet</a>, and
	it also
	<a href="https://moss.ryanatkn.com/about">exports</a> the underlying CSS partials, types, helpers,
	and data for more complex usage.
</p>
<Unfinished_Implementation_Warning>
	Moss is in early alpha and will have many breaking changes to get to 1.0. Help is welcome, see
	<a href="https://github.com/ryanatkn/moss/blob/main/contributing.md">contributing.md</a>.
</Unfinished_Implementation_Warning>
