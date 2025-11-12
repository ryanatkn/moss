<script lang="ts">
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import Ecosystem_Links_Panel from '@ryanatkn/fuz/Ecosystem_Links_Panel.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';

	import {pkg_context} from '$routes/pkg.js';
	import {MAIN_HEADER_MARGIN_TOP} from '$routes/constants.js';

	const pkg = pkg_context.get();

	// TODO standardize
</script>

<main class="width_upto_md">
	<section>
		<header class="box width_upto_sm">
			<h1 class="mb_xl5" style:margin-top={MAIN_HEADER_MARGIN_TOP}>
				{pkg.repo_name}
			</h1>
		</header>
		<Breadcrumb><Svg data={moss_logo} size="var(--icon_size_sm)" /></Breadcrumb>
	</section>
	<Ecosystem_Links_Panel />
	<section>
		<div class="panel p_md width_upto_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<Docs_Footer {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Svg data={moss_logo} size="var(--icon_size_sm)" /></Breadcrumb>
			</div>
		</Docs_Footer>
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
