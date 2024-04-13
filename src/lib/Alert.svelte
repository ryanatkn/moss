<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {HTMLAttributes} from 'svelte/elements';

	import type {Alert_Status} from '$lib/alert.js';
	import {alert_status_options} from '$lib/alert.js';

	// TODO think through Alert+Card APIs together, one can be a button and the other a link atm

	interface Props {
		status?: Alert_Status;
		color?: string;
		// TODO this API is a mess in part because of the types, maybe an explicit `Alert_Button` is better,
		// or rethink the design because `role="alert"` can't be put on buttons.
		// $props must be destructured, so we can't use a union with narrowing right?
		// so `disabled` only makes sense if `onclick` is defined, and we dont get the other HTMLButtonElement attributes
		onclick?: (() => void) | undefined;
		disabled?: boolean;
		attrs?: HTMLAttributes<HTMLElement> | undefined;
		icon?: string | Snippet<[icon: string]> | null | undefined; // TODO experimenting with this, gets complex in the impl
		children: Snippet;
	}

	const {status = 'inform', color, onclick, disabled, attrs, icon, children}: Props = $props();

	const options = $derived(alert_status_options[status]);
	// TODO change this to use the hue and put transparency on the borders, or add a borderColor option
	const {color: status_color, icon: status_icon} = $derived(options);
	const final_color = $derived(color ?? status_color);
	const final_icon = $derived(
		typeof icon === 'string' ? icon : status_icon ?? alert_status_options.inform.icon!,
	);
</script>

{#if onclick}
	<button class="message" type="button" style:--color={final_color} {onclick} {disabled} {...attrs}>
		{@render content()}
	</button>
{:else}
	<div role="alert" class="message panel" style:--color={final_color} {...attrs}>
		{@render content()}
	</div>
{/if}

{#snippet content()}
	{#if icon !== null}
		<div class="icon">
			{#if !icon || typeof icon === 'string'}
				{final_icon}
			{:else}
				{@render icon(final_icon)}
			{/if}
		</div>
	{/if}
	<!-- TODO conflict in the names of content as the snippet and this inner div -->
	<div class="content">
		{@render children()}
	</div>
{/snippet}

<style>
	.message {
		min-height: var(--message_min_height);
		width: 100%;
		color: var(--color);
		font-weight: 700;
		font-size: var(--size_md);
		border-width: var(--border_width_1);
		border-style: var(--border_style);
		border-color: var(--color);
		display: flex;
		justify-content: flex-start; /* override button horizontal centering */
		align-items: center;
		padding: var(--space_xs2) var(--space_lg) var(--space_xs2) var(--space_xs);
		margin-bottom: var(--space_lg);
	}
	.message:last-child {
		margin-bottom: 0;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: var(--space_md);
		font-size: var(--size_xl2);
		min-width: var(--size_xl2);
		text-align: center;
	}
	.content {
		text-align: left;
		flex: 1;
	}
</style>
