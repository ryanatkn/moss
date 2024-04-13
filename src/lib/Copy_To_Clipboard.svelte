<script lang="ts">
	interface Props {
		text: string;
	}

	// TODO add library entry

	const {text}: Props = $props();

	let copied = $state(false);
	let failed = $state(false);

	const copy = async () => {
		copied = false;
		failed = false;
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			failed = true;
			return;
		}
		copied = true;
	};
</script>

<div class="copy_to_clipboard">
	<button type="button" class="icon_button" style:font-size="var(--size_lg)" onclick={copy}
		>📋</button
	>
	{#if copied}<small style:color="var(--color_b_5)">copied!</small>{/if}
	{#if failed}<small style:color="var(--color_c_5)">failed</small>{/if}
</div>

<style>
	.copy_to_clipboard {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	small {
		font-weight: 700;
		margin-top: var(--space_xs);
		opacity: 0;
		animation: fade-in 1.5s ease-in reverse;
	}
</style>
