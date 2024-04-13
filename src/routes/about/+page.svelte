<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Moss_Logo from '$routes/Moss_Logo.svelte';
	import {get_pkg} from '$routes/pkg.js';

	const pkg = get_pkg();

	// TODO standardize
</script>

<main class="width_md">
	<section>
		<header class="box">
			<h1 class="mt_xl4">{pkg.repo_name}</h1>
		</header>
		<Breadcrumb><Moss_Logo size="32px" /></Breadcrumb>
	</section>
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<Library_Footer {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Moss_Logo size="32px" /></Breadcrumb>
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
