<script lang="ts">
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import {resolve} from '$app/paths';

	import Module_Link from '$routes/Module_Link.svelte';
</script>

<p>
	Moss is a CSS framework and design system that's built around <em>style variables</em>, which are
	design tokens and <Mdn_Link path="Web/CSS/--*">CSS custom properties</Mdn_Link> with particular capabilities
	and conventions.
</p>
<p>
	Moss can be used with any website and JS framework. It exports
	<Module_Link path="style.css">one main stylesheet</Module_Link>
	and a replaceable <Module_Link path="theme.css">theme stylesheet</Module_Link>, and it also
	<a href="https://moss.ryanatkn.com/about">exports</a> the underlying CSS data, types, and helpers for
	more complex usage.
</p>
<p>
	See <a href={resolve('/docs')}>the docs</a>
	and <a href="https://github.com/ryanatkn/moss#readme">readme</a>.
</p>
