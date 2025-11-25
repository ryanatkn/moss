<script lang="ts">
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import PackageDetail from '@ryanatkn/fuz/PackageDetail.svelte';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {moss_logo} from '@ryanatkn/fuz/logos.js';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';

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
	<EcosystemLinksPanel />
	<section>
		<div class="panel p_md width_upto_md">
			<PackageDetail {pkg} />
		</div>
	</section>
	<section class="box mb_xl7">
		<DocsFooter {pkg}>
			<div class="mb_xl5">
				<Breadcrumb><Svg data={moss_logo} size="var(--icon_size_sm)" /></Breadcrumb>
			</div>
		</DocsFooter>
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
