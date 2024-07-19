<script lang="ts">
	import {hsl_to_hex_string, hsl_to_rgb, parse_hsl_string} from '@ryanatkn/belt/colors.js';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	interface Props {
		color_name: string;
		computed_styles: CSSStyleDeclaration | null;
	}

	const {color_name, computed_styles}: Props = $props();
</script>

<ul class="unstyled">
	{#each {length: 9} as _, i}
		{@const num = i + 1}
		{@const name = `color_${color_name}_${num}`}
		{@const value = computed_styles?.getPropertyValue('--' + name)}
		{@const hsl = value && parse_hsl_string(value)}
		<li style:--bg_color="hsl(var(--{name}))">
			<div class="color"></div>
			<div class="text">
				<Style_Variable_Button {name} />
				<div class="hex">{hsl && hsl_to_hex_string(...hsl)}</div>
				<div class="hsl">hsl({value})</div>
				<div class="rgb">rgb({hsl && hsl_to_rgb(...hsl).join(' ')})</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		margin-bottom: var(--input_height_sm);
	}
	li {
		display: flex;
		align-items: stretch;
		font-family: var(--font_mono);
		min-height: var(--input_height_sm);
	}
	li:hover {
		background-color: var(--bg);
	}
	.text {
		display: flex;
		align-items: center;
		flex: 1;
		padding-left: var(--space_sm);
	}
	.hex {
		width: 73px;
		font-size: var(--size_sm);
		padding-left: var(--space_sm);
	}
	.hsl {
		width: 149px;
		font-size: var(--size_sm);
		padding-left: var(--space_sm);
	}
	.rgb {
		font-size: var(--size_sm);
		padding-left: var(--space_sm);
	}
	.color {
		width: 100px;
		min-width: 50px;
		background-color: var(--bg_color);
		color: hsl(210, 55%, 62%);
	}
	@media (max-width: 630px) {
		.text {
			flex-direction: column;
			align-items: flex-start;
			padding: var(--space_sm);
		}
	}
</style>
