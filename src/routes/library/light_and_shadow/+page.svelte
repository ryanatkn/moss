<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import {get_color_scheme} from '@ryanatkn/fuz/Themed.svelte';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {shadow_variants} from '$lib/variable_data.js';

	const LIBRARY_ITEM_NAME = 'light and shadow';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const color_scheme = get_color_scheme();
	const toggle_color_scheme = () => {
		color_scheme.update((c) => (c === 'light' ? 'dark' : 'light'));
	};
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Moss is designed around the idea of stacking light and shadow with highlights and shading. The
			goal is easy authoring with simple and consistent rules for arbitrary compositions and states.
		</p>
		<p>
			Light mode's starting point is plain white documents (like paper) where we can think of
			applying UI subtractively in the color-value-space by assembling elements that contrast
			against the white background, while dark mode's is a lightless void where we add light (I
			think of videogames and augmented reality). The <Tome_Link name="colors" /> docs elaborate.
		</p>
		<p>
			Opacity is used to enable arbitrary stacking that visually inherits its context. Not all cases
			are properly handled yet, and some choices are made for performance reasons, like avoiding
			opacity on text. (I'm assuming this is still a thing)
		</p>
	</section>
	<section>
		<Tome_Subheading text="Shades and highlights" slug="shades-and-highlights" />
		<h4><code>darken</code> and <code>lighten</code></h4>
		<div class="swatch">
			{#each {length: 9} as _, i}
				{@const name = 'darken_' + (i + 1)}
				<div>
					<div class="color" style:background-color="var(--{name})"></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
		<div class="swatch">
			{#each {length: 9} as _, i}
				{@const name = 'lighten_' + (i + 1)}
				<div>
					<div class="color" style:background-color="var(--{name})"></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<h4><code>bg</code> and <code>fg</code></h4>
		<p>
			In light mode, <code>bg</code> is the same as <code>lighten</code> and <code>fg</code> is the
			same as <code>darken</code>. In dark mode, they're swapped.
		</p>
		<div class="swatch">
			{#each {length: 9} as _, i}
				{@const name = 'bg_' + (i + 1)}
				<div>
					<div class="color" style:background-color="var(--{name})"></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
		<div class="swatch">
			{#each {length: 9} as _, i}
				{@const name = 'fg_' + (i + 1)}
				<div>
					<div class="color" style:background-color="var(--{name})"></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Color_Scheme_Input />
	</section>
	<section>
		<aside>
			<p>
				tip: Try <button onclick={toggle_color_scheme}>toggling</button> between light and dark to
				see how <code>bg</code> and <code>fg</code>
				change, while <code>darken</code> and <code>lighten</code> don't change but do appear significantly
				different because of the context.
			</p>
		</aside>
	</section>
	<section>
		<Tome_Subheading text="Fading opacity" slug="fading-opacity" />
		<div class="swatch">
			<div>
				<div class="color" style:background-color="var(--color_a_5)"></div>
				<small style:font-family="var(--font_sans)">full opacity</small>
			</div>
			{#each {length: 6} as _, i}
				{@const name = 'fade_' + (i + 1)}
				<div>
					<div
						class="color"
						style:background-color="var(--color_a_5)"
						style:opacity="var(--{name})"
					></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Tome_Subheading text="Stacking opacity" slug="stacking-opacity" />
		<Code
			content={`<div style:background-color="var(--fg_1)" class="p_sm">
	<div style:background-color="var(--fg_1)" class="p_sm">
		<div style:background-color="var(--fg_1)" class="p_sm">
			<div style:background-color="var(--fg_1)" class="p_sm">
				<div style:background-color="var(--bg_4)" class="p_sm">
					...
				</div>
			</div>
		</div>
	</div>
</div>`}
		/>
		<div style:background-color="var(--fg_1)" class="p_sm">
			<div style:background-color="var(--fg_1)" class="p_sm">
				<div style:background-color="var(--fg_1)" class="p_sm">
					<div style:background-color="var(--fg_1)" class="p_sm">
						<div style:background-color="var(--bg_4)" class="p_sm">
							these variables have opacity, but notice how contrast changes with depth, creating
							limitations
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<Tome_Subheading text="Box shadows" slug="box-shadows" />
		<aside>
			⚠️ This section is incomplete. For the next iteration, I'm considering highlights, colored
			shadows, and interaction with CSS variables.
		</aside>
		{#each shadow_variants as variant}
			<div class="shadow_example" style:box-shadow="var(--shadow_{variant})">
				<Style_Variable_Button name="shadow_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div class="shadow_example" style:box-shadow="var(--shadow_inset_{variant})">
				<Style_Variable_Button name="shadow_inset_{variant}" />
			</div>
		{/each}
		{#each shadow_variants as variant}
			<div class="shadow_example" style:box-shadow="var(--shadow_outset_{variant})">
				<Style_Variable_Button name="shadow_outset_{variant}" />
			</div>
		{/each}
	</section>
</Tome_Detail>

<style>
	.swatch {
		font-family: var(--font_mono);
		margin-bottom: var(--space_md);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
		grid-auto-flow: row;
	}
	.color {
		height: var(--input_height_sm);
	}
	.shadow_example {
		margin-bottom: var(--space_xl8);
		padding: var(--space_md);
		font-family: var(--font_mono);
	}
	small {
		height: var(--input_height_sm);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
