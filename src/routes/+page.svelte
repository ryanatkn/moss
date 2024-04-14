<script lang="ts">
	import {base} from '$app/paths';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Card from '@ryanatkn/fuz/Card.svelte';

	import {get_pkg} from '$routes/pkg.js';
	import Moss_Logo from '$routes/Moss_Logo.svelte';

	const pkg = get_pkg();
</script>

<main class="box w_100">
	<div class="box width_md">
		<section class="box">
			<h1 class="mt_xl4 mb_lg">moss</h1>
			<div class="box mb_xl"><Moss_Logo size="120px" /></div>
			<blockquote class="shadow_inset_inverse_md">
				CSS framework 🌿 magical organic stylesheets
			</blockquote>
			<div class="width_sm panel p_sm shadow_inset_inverse_md">
				<div class="panel p_sm bg shadow_md">
					<p>
						Moss is a CSS framework that's compatible with all websites and JS frameworks due to
						being a single stylesheet. It's in early alpha and there will be many breaking changes.
					</p>
					<p>
						Moss is being made to support <a href="https://www.ryanatkn.com/table"
							>my other projects</a
						>
						that focus on end-users. It's grown slowly over 5 years to fit my needs, and my goal for
						2024 is to fill out its API so it's more widely useful.
					</p>
					<p>
						To learn more see <a href="{base}/library">the docs</a>
						and <a href="https://github.com/ryanatkn/moss#readme">readme</a>. Feel free to take the
						ideas and <a href="https://github.com/ryanatkn/moss">code</a> for your own purposes.
					</p>
				</div>
			</div>
		</section>
		<section>
			<Card href="{base}/library">library{#snippet icon()}🧶{/snippet}</Card>
		</section>
		<section>
			<Library_Footer {pkg}>
				{#snippet logo_header()}
					<a href="{base}/about" class="mb_xs">about</a>
				{/snippet}
				<div hidden>
					@ryanatkn@hci.social on <a rel="me" href="https://hci.social/@ryanatkn">Mastodon</a>
				</div>
				<div hidden>
					@webdevladder@mastodon.social on <a rel="me" href="https://mastodon.social/@webdevladder"
						>Mastodon</a
					>
				</div>
			</Library_Footer>
		</section>
	</div>
</main>
