<script lang="ts">
	import Color_Swatch_Item from '$routes/docs/colors/Color_Swatch_Item.svelte';

	interface Props {
		color_name: string;
		computed_styles: CSSStyleDeclaration | null;
	}

	const {color_name, computed_styles}: Props = $props();
</script>

<ul class="unstyled">
	{#each {length: 9} as _, index (index)}
		<Color_Swatch_Item {index} {color_name} {computed_styles} />
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		margin-bottom: var(--input_height_sm);
	}
</style>
