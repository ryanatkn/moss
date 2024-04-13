<script lang="ts">
	import {base} from '$app/paths';

	import Library_Footer from '$lib/Library_Footer.svelte';
	import Card from '$lib/Card.svelte';
	import {get_pkg} from '$routes/pkg.js';
	import Spider from '$routes/Spider.svelte';

	const pkg = get_pkg();
</script>

<main class="box w_100">
	<div class="box width_md">
		<section class="box">
			<h1 class="mt_xl4 mb_lg">fuz</h1>
			<div class="box mb_xl"><Spider size="120px" /></div>
			<blockquote>friendly user zystem</blockquote>
			<div class="width_sm panel p_md">
				<p>
					Fuz is a Svelte UI library and CSS design system. It's in early alpha and there will be
					many breaking changes.
				</p>
				<p>
					Fuz is being made to support <a href="https://www.ryanatkn.com/table">my other projects</a
					>
					that focus on end-users. Fuz emphasizes capability and efficiency and tries to be simple for
					those goals. Compared to most UI libraries, Fuz has fewer features and more opinions.
				</p>
				<p>
					To learn more see <a href="https://www.fuz.dev/library">the docs</a>
					and <a href="https://github.com/ryanatkn/fuz#readme">readme</a>. Feel free to take the
					ideas and <a href="https://github.com/ryanatkn/fuz">code</a> for your own purposes.
				</p>
			</div>
		</section>
		<section>
			<Card href="{base}/library">library{#snippet icon()}🧶{/snippet}</Card>
		</section>
		<section class="panel p_lg">
			<!-- TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy -->
			<h2 class="mt_0">other packages</h2>
			<menu class="unstyled">
				<a class="chip" href="https://template.fuz.dev/">fuz_template</a>
				<a class="chip" href="https://gitops.fuz.dev/">fuz_gitops</a>
				<a class="chip" href="https://code.fuz.dev/">fuz_code</a>
				<a class="chip" href="https://mastodon.fuz.dev/">fuz_mastodon</a>
			</menu>
		</section>
		<section>
			<Library_Footer {pkg}>
				{#snippet logo_header()}
					<a href="{base}/about" class="mb_xs">about</a>
				{/snippet}
				<div hidden>
					@ryanatkn@hci.social on <a rel="me" href="https://hci.social/@ryanatkn">Mastodon</a>
				</div>
			</Library_Footer>
		</section>
	</div>
</main>

<style>
	menu {
		width: 100%;
		display: flex;
		gap: var(--space_lg);
		flex-direction: column;
		align-items: center;
		font-size: var(--size_lg);
	}
</style>
