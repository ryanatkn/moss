<script context="module" lang="ts">
	/**
	 * Returns the minute of the current day.
	 */
	const minute_of_day = (): number => {
		const now = new Date();
		return now.getHours() * 60 + now.getMinutes();
	};
</script>

<script lang="ts">
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';
	import {random_int, shuffle} from '@ryanatkn/belt/random.js';
	import {create_random_alea} from '@ryanatkn/belt/random_alea.js';

	interface Props {
		spiders?: string[]; // for now, just colors
		seed?: unknown;
		random?: typeof Math.random;
	}

	const {
		spiders = [
			'var(--color_a_5)',
			'var(--color_b_5)',
			'var(--color_c_5)',
			'var(--color_d_5)',
			'var(--color_e_5)',
			'var(--color_f_5)',
			'var(--color_g_5)',
		],
		seed = minute_of_day(),
		random = create_random_alea(seed),
	}: Props = $props();

	const shuffled = $derived(shuffle(spiders.slice(), (min, max) => random_int(min, max, random)));
</script>

<!-- TODO animate each in randomly -->
<!-- TODO show when intersected in viewport, maybe inline `svelte-intersect` in Fuz? -->
<div class="spiders" style:--width="{100 / spiders.length}%">
	{#each shuffled as color (color)}
		<div style:--color={color} class="col_2">
			<Fuz_Logo />
		</div>
	{/each}
</div>

<style>
	.spiders {
		position: relative;
		z-index: -1;
		margin-top: var(--space_xl9);
		display: grid;
		grid-template-columns: repeat(7, 1fr);
	}
</style>
