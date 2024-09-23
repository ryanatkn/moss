<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import Community_Links_Panel from '@ryanatkn/fuz/Community_Links_Panel.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';

	import {get_pkg} from '$routes/pkg.js';

	const pkg = get_pkg();

	// TODO standardize
</script>

<main class="width_md">
	<section>
		<header class="box">
			<h1 class="mt_xl4">{pkg.repo_name}</h1>
		</header>
		<Breadcrumb><Svg data={moss_logo} size="var(--icon_size_sm)" /></Breadcrumb>
	</section>
	<Community_Links_Panel />
	<section>
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<Library_Footer {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Svg data={moss_logo} size="var(--icon_size_sm)" /></Breadcrumb>
			</div>
		</Library_Footer>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
</style>
