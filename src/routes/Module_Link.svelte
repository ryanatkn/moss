<script lang="ts">
	import type {ComponentProps} from 'svelte';

	import File_Link from '$routes/File_Link.svelte';

	// TODO upstream?

	type Props = ComponentProps<typeof File_Link>;

	const {
		base_path = 'https://github.com/ryanatkn/moss/blob/main/src/lib/',
		children = fallback_children,
		...rest
	}: Props = $props();
</script>

<File_Link {...rest} {base_path} {children} />

{#snippet fallback_children()}@ryanatkn/moss/{rest.path}{/snippet}
