<script lang="ts">
	import {hsl_to_hex_string, hsl_to_rgb, parse_hsl_string} from '@ryanatkn/belt/colors.js';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	interface Props {
		color_name: string;
		computed_styles: CSSStyleDeclaration | null;
	}

	const {color_name, computed_styles}: Props = $props();

	const get_color_hsl_string = (name: string) => computed_styles?.getPropertyValue('--' + name);
</script>

<ul class="unstyled">
	{#each {length: 9} as _, i}
		{@const num = i + 1}
		{@const variable_name = `color_${color_name}_${num}`}
		{@const hsl_string = get_color_hsl_string(variable_name)}
		{@const hsl = hsl_string && parse_hsl_string(hsl_string)}
		<li style:--bg_color="var(--{variable_name})">
			<div class="color"></div>
			<div class="text">
				<Style_Variable_Button name={variable_name} />
				<div class="hex">{hsl && hsl_to_hex_string(...hsl)}</div>
				<div class="hsl">{hsl_string}</div>
				<div class="rgb">rgb({hsl && hsl_to_rgb(...hsl).join(', ')})</div>
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
