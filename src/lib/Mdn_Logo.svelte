<script lang="ts">
	interface Props {
		size?: string;
		fill?: string;
		label?: string;
		attrs?: any;
	}

	const {
		size = 'var(--size, var(--size_md))',
		fill = '#8cb4ff',
		label = 'GitHub icon',
		attrs,
	}: Props = $props();

	// TODO do something more optimal
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	aria-label={label}
	viewBox="0 0 100 100"
	style:width={size}
	style:height={size}
	fill="none"
	{...attrs}
>
	<path
		d="M42 .2 13.4 92.3H1.7L30.2.2Zm10.4 0v92.1H42V.2Zm40.3 0L64.2 92.3H52.5L81 .2Zm10.4 0v92.1H92.7V.2Z"
		{fill}
	/>
</svg>
