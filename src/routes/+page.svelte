<script lang="ts">
	import {base} from '$app/paths';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Moss_Logo from '@ryanatkn/fuz/Moss_Logo.svelte';
	import Hidden_Personal_Links from '@ryanatkn/fuz/Hidden_Personal_Links.svelte';

	import {get_pkg} from '$routes/pkg.js';

	const pkg = get_pkg();
</script>

<main class="box">
	<section class="box">
		<h1 class="mt_xl4 mb_lg">moss</h1>
		<div class="box mb_xl"><Moss_Logo size="var(--icon_size_xl2)" /></div>
		<div class="p_xl radius_lg shadow_outset_xs">
			<blockquote class="shadow_inset_xs">magical organic stylesheets 🌿</blockquote>
		</div>
	</section>
	<section class="width_sm p_xs radius_md shadow_sm">
		<div class="panel p_lg bg shadow_md">
			<p>
				Moss is a CSS framework that can be used with any website or JS framework. It exports
				<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style.css"
					>one main stylesheet</a
				>
				and
				<a href="https://github.com/ryanatkn/moss/blob/main/src/lib/style.css">a theme stylesheet</a
				>, and it also
				<a href="https://moss.ryanatkn.com/about">exports</a> the underlying CSS partials, types, helpers,
				and data for more complex usage.
			</p>
			<p>
				Moss is in early alpha and will have many breaking changes to get to 1.0. To follow along or
				lend some help, see <a href="https://discord.gg/YU5tyeK72X">the Discord</a>
				and
				<a href="https://github.com/ryanatkn/moss/blob/main/contributing.md">contributing.md</a>.
			</p>
			<p>
				Moss is being made to support <a href="https://zzz.ryanatkn.com/">Zzz</a> and
				<a href="https://www.ryanatkn.com/">my other projects</a>
				that focus on end-users. It's grown slowly over 5 years, adding new features when I feel they're
				sufficiently generalizable or merit experimentation, and my goal for 2024 is to fill out its
				APIs so it's more coherent and complete.
			</p>
			<p>
				To learn more see <a href="{base}/library">the docs</a>
				and <a href="https://github.com/ryanatkn/moss#readme">the readme</a>. See also my Svelte UI
				library <a href="https://www.fuz.dev/">Fuz</a> that builds on Moss. Feel free to take the
				ideas and
				<a href="https://github.com/ryanatkn/moss">code</a> for your own purposes.
			</p>
		</div>
	</section>
	<section>
		<Card href="{base}/library">library{#snippet icon()}🌿{/snippet}</Card>
	</section>
	<section class="p_xl radius_lg shadow_outset_xs">
		<Library_Footer {pkg}>
			{#snippet logo_header()}
				<a href="{base}/about" class="mb_xs">about</a>
			{/snippet}
			<Hidden_Personal_Links />
		</Library_Footer>
	</section>
</main>
