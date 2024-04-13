<script lang="ts">
	import {base} from '$app/paths';
	import Spider from '@ryanatkn/fuz/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		image?: boolean;
		src?: string;
		alt?: string;
	}

	const {
		size,
		image = false,
		src,
		alt = 'the Moss logo, a fuzzy tuft of green moss',
	}: Props = $props();

	// TODO publish a plain SVG probably

	// color:
	// #298e29
	// hsl(120, 55%, 36%)
	// rgb(41, 142, 41)
</script>

{#if image}<img src={src ?? `${base}/favicon.png`} {alt} width={size} height={size} />{:else}<span
		aria-label={alt}
		style:--color="var(--color_b_5)"
		class="inline_block"
		style:width={size}
		style:height={size}><Spider /></span
	>{/if}

<style>
	span {
		transform: scaleX(-1) rotate(180deg);
	}
</style>
