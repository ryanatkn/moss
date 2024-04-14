<script lang="ts">
	import {base} from '$app/paths';
</script>

<main>
	<section class="box">
		<header class="box">
			<h1 class="mt_xl2 mb_xl2">moss</h1>
			<img
				src="{base}/favicon.png"
				alt="the Moss logo, a fuzzy tuft of green moss"
				style:width="var(--icon_size_xl2)"
				style:height="var(--icon_size_xl2)"
				class="mb_xl2"
			/>
			<blockquote>CSS framework 🌿 magical organic stylesheets</blockquote>
			<a href="https://github.com/ryanatkn/moss">source code</a>
		</header>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
