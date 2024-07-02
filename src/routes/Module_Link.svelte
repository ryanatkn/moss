<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import File_Link from '$routes/File_Link.svelte';

	// TODO upstream?

	interface Props {
		path: string;
		base_path?: string;
		attrs?: SvelteHTMLElements['a'];
		icon?: Snippet | string;
		children?: Snippet;
	}

	const {
		path,
		base_path = 'https://github.com/ryanatkn/moss/blob/main/src/lib/',
		attrs,
		icon = '🗎',
		children = fallback_children,
	}: Props = $props();
</script>

<File_Link {path} {base_path} {attrs} {icon} {children} />

{#snippet fallback_children()}@ryanatkn/moss/{path}{/snippet}
