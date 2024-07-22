<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import {color_variants} from '$lib/variable_data.js';

	const LIBRARY_ITEM_NAME = 'buttons';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	let clicked_button = $state(false);

	let selected_button = $state(1);
	let selected_deselectable_button = $state(true);

	// TODO probably want to put the buttons in a more consistent format so we can include `disabled` versions of each in a condensed format

	const mb_xs = true;
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Buttons have a <code>.selected</code> state that can be used for various UI purposes, like
			showing a selected item in a menu or a styling button's <code>aria-pressed</code> state.
			Instead of having two distinct styles of buttons with outlined and filled variants, Moss makes
			filled buttons the default, and selected buttons are outlined. There's also the
			<code>.deselectable</code> modifier class for buttons that can be clicked when selected. Themes
			can customize this behavior.
		</p>
		<div class:mb_xs>
			<Code content={`<button>a button</button>`} />
			<button type="button" onclick={() => (clicked_button = !clicked_button)}>a button</button>
			{#if clicked_button}
				<div transition:slide>clicked a button</div>
			{/if}
		</div>
		<button type="button" disabled class:mb_xs>button:disabled</button>
		<button type="button" class="plain" class:mb_xs>button.plain</button>
		<button type="button" class="plain" disabled class:mb_xs>button.plain:disabled</button>
		<button type="button" class="selected" class:mb_xs>button.selected</button>
		<button type="button" class="selected" disabled class:mb_xs>button.selected:disabled</button>
		<button type="button" class="selected deselectable" class:mb_xs
			>button.selected.deselectable</button
		>
		<button type="button" class="selected deselectable" disabled class:mb_xs
			>button.selected.deselectable:disabled</button
		>
	</section>

	<section>
		<div class="box w_100 mb_lg">
			<Color_Scheme_Input />
		</div>
	</section>

	<section>
		<Tome_Subheading text="Colorful buttons" slug="colorful-buttons" />
		{#each color_variants as c}
			{@const color_name = `color_${c}`}
			<section>
				<Code content={`<button class="${color_name}">`} />
				<button type="button" class={color_name} class:mb_xs>.{color_name}</button>
				<button type="button" class={color_name} disabled class:mb_xs>.{color_name}:disabled</button
				>
				<button type="button" class="{color_name} plain" class:mb_xs>.{color_name}.plain</button>
				<button type="button" class="{color_name} plain" disabled class:mb_xs
					>.{color_name}.plain:disabled</button
				>
				<button type="button" class="{color_name} selected" class:mb_xs
					>.{color_name}.selected</button
				>
				<button type="button" class="{color_name} selected" disabled class:mb_xs
					>.{color_name}.selected:disabled</button
				>
				<button type="button" class="{color_name} selected deselectable" class:mb_xs
					>.{color_name}.selected.deselectable</button
				>
				<button type="button" class="{color_name} selected deselectable" disabled class:mb_xs
					>.{color_name}.selected.deselectable:disabled</button
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
		<button type="button" disabled class:mb_xs>:|</button>
		<button type="button" disabled>a bigger disabled button</button>
	</section>

	<section>
		<Tome_Subheading text="With .selected" slug="selected-class">
			With <code>.selected</code>
		</Tome_Subheading>
		<nav>
			<button
				type="button"
				class:selected={selected_button === 0}
				onclick={() => (selected_button = 0)}
				class:mb_xs
			>
				button 0
			</button>
			<button
				type="button"
				class:selected={selected_button === 1}
				onclick={() => (selected_button = 1)}
				class:mb_xs
			>
				button 1
			</button>
			<button
				type="button"
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
		<button type="button" class="w_100 selected">a button with <code>.selected</code></button>
	</section>
	<section>
		<p>
			<code>.selected</code> buttons with <code>.deselectable</code> continue to be clickable when selected:
		</p>
		<Code content={`<button class="selected deselectable">\n\t...\n</button>`} />
	</section>
	<section>
		<button
			type="button"
			class="w_100 deselectable"
			class:selected={selected_deselectable_button}
			onclick={() => (selected_deselectable_button = !selected_deselectable_button)}
			>a <code>.deselectable</code>
			{#if selected_deselectable_button}<code>.selected</code>{:else}unselected{/if} button</button
		>
		<button type="button" class="w_100 selected deselectable" disabled
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
		<button type="button" class="plain" class:mb_xs>+</button>
		<button type="button" class="plain mb_lg" disabled>+</button>
		<Code
			content={`<button class="icon_button">
	+
</button>`}
		/>
		<button type="button" class="icon_button" class:mb_xs>+</button>
		<button type="button" class="icon_button mb_lg" disabled>+</button>
		<Code
			content={`<button class="plain icon_button">
	+
</button>`}
		/>
		<button type="button" class="plain icon_button" class:mb_xs>+</button>
		<button type="button" class="plain icon_button" disabled>+</button>
		<h4><code>.selected</code> variants</h4>
		<Code
			content={`<button class="plain selected">
	+
</button>`}
		/>
		<button type="button" class="plain selected mb_lg">+</button>
		<Code
			content={`<button class="icon_button selected">
	+
</button>`}
		/>
		<button type="button" class="icon_button selected mb_lg">+</button>
		<Code
			content={`<button class="plain icon_button selected">
	+
</button>`}
		/>
		<button type="button" class="plain icon_button selected">+</button>
		<h4><code>.selected</code> and <code>.deselectable</code> variants</h4>
		<Code
			content={`<button class="plain selected deselectable">
	+
</button>`}
		/>
		<button type="button" class="plain selected deselectable mb_lg">+</button>
		<Code
			content={`<button class="icon_button selected deselectable">
	+
</button>`}
		/>
		<button type="button" class="icon_button selected deselectable mb_lg">+</button>
		<Code
			content={`<button class="plain icon_button selected deselectable">
	+
</button>`}
		/>
		<button type="button" class="plain icon_button selected deselectable">+</button>
	</section>
</Tome_Detail>
