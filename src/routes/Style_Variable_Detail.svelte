<script lang="ts">
	import type {Style_Variable} from '$lib/theme.js';

	interface Props {
		variable: Style_Variable | null;
	}

	const {variable}: Props = $props();

	// TODO @multiple add to $lib?

	// TODO needs a lot of work - for example, enable editing the values directly, and certain values like colors could be rendered
</script>

{#if variable}
	<div class="variable">
		<div class="name"><code>--{variable.name}</code></div>
		{#if variable.summary}<blockquote>{variable.summary}</blockquote>{/if}
		<label>
			<div class="title">light</div>
			<input disabled value={variable.light ?? ''} />
		</label>
		<label>
			<div class="title">dark</div>
			<input disabled value={variable.dark ?? ''} />
		</label>
	</div>
{/if}

<style>
	.variable {
		align-items: flex-start;
		/* ... */
		padding: var(--space_xs) 0;
	}
	.name {
		font-size: var(--size_xl);
		text-align: center;
		margin-bottom: var(--space_xl);
	}
</style>
