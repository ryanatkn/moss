<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'buttons';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	let clicked_button = $state(false);

	let selected_button = $state(1);
	let selected_deselectable_button = $state(true);

	// TODO probably want to put the buttons in a more consistent format so we can include `disabled` versions of each in a condensed format

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	const mb_xs = true;
</script>

<Tome_Detail {tome}>
	<section>
		<div class="mb_lg">
			<Code content={`<button>a button</button>`} />
			<button onclick={() => (clicked_button = !clicked_button)}>a button</button>
			{#if clicked_button}
				<div transition:slide>clicked a button</div>
			{/if}
		</div>
		<p>
			Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state. Instead
			of having two distinct styles of buttons with outlined and filled variants, Fuz makes filled buttons
			the default, and selected buttons are outlined.
		</p>
		<button disabled class:mb_xs>disabled button</button>
		<button class="selected" class:mb_xs>button.selected</button>
		<button class="selected" disabled class:mb_xs>disabled button.selected</button>
		<button class="selected deselectable" class:mb_xs>button.selected.deselectable</button>
		<button class="selected deselectable" disabled class:mb_xs
			>disabled button.selected.deselectable</button
		>
	</section>

	<section>
		<Tome_Subheading text="Colorful buttons" slug="colorful-buttons" />
		{#each color_names as c}
			{@const color_name = `color_${c}`}
			<section>
				<Code content={`<button class="${color_name}">`} />
				<button class={color_name} class:mb_xs>.{color_name}</button>
				<button class={color_name} disabled class:mb_xs>disabled .{color_name}</button>
				<button class="{color_name} selected" class:mb_xs>.{color_name}.selected</button>
				<button class="{color_name} selected" disabled class:mb_xs
					>disabled .{color_name}.selected</button
				>
				<button class="{color_name} selected deselectable" class:mb_xs
					>.{color_name}.selected.deselectable</button
				>
				<button class="{color_name} selected deselectable" disabled class:mb_xs
					>disabled .{color_name}.selected.deselectable</button
				>
			</section>
		{/each}
		<div class="box w_100 mb_lg">
			<Color_Scheme_Input />
		</div>
	</section>

	<Tome_Subheading text="With disabled attribute" slug="disabled-attribute" />
	<section>
		<Code content={`<button disabled>\n\t:|\n</button>`} />
		<button disabled>:|</button>
	</section>
	<section>
		<Code content={`<button disabled>\n\ta bigger disabled button\n</button>`} />
		<button disabled>a bigger disabled button</button>
	</section>

	<section>
		<Tome_Subheading text="With .selected" slug="selected-class">
			With <code>.selected</code>
		</Tome_Subheading>
		<nav>
			<button
				class:selected={selected_button === 0}
				onclick={() => (selected_button = 0)}
				class:mb_xs
			>
				button 0
			</button>
			<button
				class:selected={selected_button === 1}
				onclick={() => (selected_button = 1)}
				class:mb_xs
			>
				button 1
			</button>
			<button
				class:selected={selected_button === 2}
				onclick={() => (selected_button = 2)}
				class:mb_xs
			>
				button 2
			</button>
		</nav>
	</section>
	<section>
		<Code content={`<button class="selected">...</button>`} />
		<button class="w_100 selected">a button with <code>.selected</code></button>
	</section>
	<section>
		<p>
			<code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when selected:
		</p>
		<Code content={`<button class="selected deselectable">\n\t...\n</button>`} />
	</section>
	<section>
		<button
			class="w_100 deselectable"
			class:selected={selected_deselectable_button}
			onclick={() => (selected_deselectable_button = !selected_deselectable_button)}
			>a <code>.deselectable</code>
			{#if selected_deselectable_button}<code>.selected</code>{:else}unselected{/if} button</button
		>
		<button class="w_100 selected deselectable" disabled
			>disabled <code>.deselectable</code> <code>.selected</code></button
		>
	</section>

	<section>
		<Tome_Subheading text="With .plain and .icon_button" slug="plain-and-icon_button">
			With <code>.plain</code> and <code>.icon_button</code>
		</Tome_Subheading>
		<Code
			content={`<button class="plain">
	+
</button>`}
		/>
		<button class="plain" class:mb_xs>+</button>
		<button class="plain mb_lg" disabled>+</button>
		<Code
			content={`<button class="icon_button">
	+
</button>`}
		/>
		<button class="icon_button" class:mb_xs>+</button>
		<button class="icon_button mb_lg" disabled>+</button>
		<Code
			content={`<button class="plain icon_button">
	+
</button>`}
		/>
		<button class="plain icon_button" class:mb_xs>+</button>
		<button class="plain icon_button" disabled>+</button>
		<h4><code>.selected</code> variants</h4>
		<Code
			content={`<button class="plain selected">
	+
</button>`}
		/>
		<button class="plain selected mb_lg">+</button>
		<Code
			content={`<button class="icon_button selected">
	+
</button>`}
		/>
		<button class="icon_button selected mb_lg">+</button>
		<Code
			content={`<button class="plain icon_button selected">
	+
</button>`}
		/>
		<button class="plain icon_button selected">+</button>
		<h4><code>.selected</code> and <code>.deselectable</code> variants</h4>
		<Code
			content={`<button class="plain selected deselectable">
	+
</button>`}
		/>
		<button class="plain selected deselectable mb_lg">+</button>
		<Code
			content={`<button class="icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="icon_button selected deselectable mb_lg">+</button>
		<Code
			content={`<button class="plain icon_button selected deselectable">
	+
</button>`}
		/>
		<button class="plain icon_button selected deselectable">+</button>
	</section>
</Tome_Detail>
