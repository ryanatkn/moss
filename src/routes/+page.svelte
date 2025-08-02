<script lang="ts">
	import {resolve} from '$app/paths';
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';
	import Hidden_Personal_Links from '@ryanatkn/fuz/Hidden_Personal_Links.svelte';

	import {pkg_context} from '$routes/pkg.js';
	import Introduction from '$routes/Introduction.svelte';
	import {MAIN_HEADER_MARGIN_TOP} from '$routes/constants.js';
	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const pkg = pkg_context.get();
</script>

<main class="box mb_xl7">
	<section class="box">
		<h1 class="mb_sm" style:margin-top={MAIN_HEADER_MARGIN_TOP}>moss</h1>
		<Svg data={moss_logo} size="var(--icon_size_xl2)" />
		<div class="p_xl mt_lg border_radius_lg shadow_inset_bottom_xs">
			<blockquote class="shadow_inset_top_xs">magical organic stylesheets 🌿</blockquote>
		</div>
	</section>
	<section class="width_sm p_sm border_radius_md shadow_xs">
		<div class="panel p_lg bg shadow_sm">
			<Introduction />
		</div>
	</section>
	<section>
		<Card href={resolve('/docs')}>docs{#snippet icon()}🌿{/snippet}</Card>
	</section>
	<section class="width_sm p_sm border_radius_md shadow_xs">
		<div class="panel p_lg bg shadow_sm">
			<Unfinished_Implementation_Warning>
				Moss is in early alpha and will have many breaking changes to get to 1.0. Help is welcome,
				see
				<a href="https://github.com/ryanatkn/moss/blob/main/contributing.md">contributing.md</a>.
			</Unfinished_Implementation_Warning>
			<p>
				See also my Svelte UI library <a href="https://www.fuz.dev/">Fuz</a> that builds on Moss.
				Feel free to take the ideas and
				<a href="https://github.com/ryanatkn/moss">code</a> for your own purposes.
			</p>
			<p>
				Moss is being made to support <a href="https://www.zzz.software/">Zzz</a> and
				<a href="https://www.ryanatkn.com/">my other projects</a>
				that focus on end-users. It's grown slowly over 5 years, adding new features when I feel they're
				sufficiently generalizable or merit experimentation, and in 2025 I'm excited to explore themes!
				And then I'll think about announcing it.
			</p>
		</div>
	</section>
	<section class="p_xl border_radius_lg shadow_inset_bottom_xs">
		<Docs_Footer {pkg}>
			{#snippet logo_header()}
				<a href={resolve('/about')} class="mb_xs">about</a>
			{/snippet}
			<Hidden_Personal_Links />
		</Docs_Footer>
	</section>
</main>
