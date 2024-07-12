<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';
	import {get_themer} from '@ryanatkn/fuz/theme.svelte.js';
	import Tome_Subheading from '@ryanatkn/fuz/Tome_Subheading.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shading';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const themer = get_themer();
	const toggle_color_scheme = () => {
		themer.color_scheme = themer.color_scheme === 'light' ? 'dark' : 'light';
	};
</script>

<Tome_Detail {tome}>
	<section>
		<Unfinished_Implementation_Warning>
			These concepts are still developing - some things are incomplete or inconsistent, and there
			will be a lot of breaking changes. I'm thinking of splitting this "light and shadow" section
			into "shadows" and "shading" something.
		</Unfinished_Implementation_Warning>
		<p>
			Moss is designed around two simplistic models of light, one for dark mode and one for light
			mode. The goal is easy authoring with simple and consistent rules for arbitrary compositions
			and states. Each <Tome_Link name="themes">theme</Tome_Link> can choose to implement either light
			mode or dark mode or both.
		</p>
		<p>
			Light mode's starting point is plain white documents (like paper) where we can think of UI
			construction as assembling elements that contrast against the white background, replacing some
			of the white blankness with darkened values/color/shape. Black shadows on the white background
			make natural sense, and white glows against a white background are invisible.
		</p>
		<p>
			In contrast, dark mode's starting point is a lightless void where we add light. We add
			elements which emanate light. I think of videogames and virtual/augmented/actual reality.
			Black shadows are invisible against a black background, and white glows make natural sense
			against a black background.
		</p>
		<p>
			This distinction leads to complication. For example, applying a black shadow to an element has
			a particular visual impact on the typical light mode page, but viewed in dark mode, it would
			disappear completely against a black background.
		</p>
		<p>
			Moss provides APIs that simplify or hide this complexity. For example, the <code>lighten</code
			>
			and <code>darken</code> variables are the same in light and dark modes, but
			<code>fg</code>
			and <code>bg</code> are equivalent values that swap places in dark mode. Thus <code>bg</code>
			and <code>fg</code> are called color-scheme-aware, and <code>lighten</code> and
			<code>darken</code> are color-scheme-agnostic. (maybe you can think of better terminology? I
			like the word "adaptive" but idk) The <Tome_Link name="colors" /> docs elaborate more on this point.
		</p>
		<p>
			Opacity is used to enable arbitrary stacking that visually inherits its context. Not all cases
			are properly handled yet, and some choices are made for performance reasons, like avoiding
			opacity on text. (assuming this is still a thing?)
		</p>
	</section>
	<section>
		<Tome_Subheading text="Shades and highlights" slug="shades-and-highlights" />
		<Tome_Subheading text="darken and lighten" slug="darken-and-lighten" tag="h4"
			><code>darken</code> and <code>lighten</code></Tome_Subheading
		>
		<Unfinished_Implementation_Warning />
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
		<Tome_Subheading text="bg and fg" slug="bg-and-fg" tag="h4"
			><code>bg</code> and <code>fg</code></Tome_Subheading
		>
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
				tip: Try <button type="button" onclick={toggle_color_scheme}>toggling</button> between light
				and dark to see how <code>bg</code> and <code>fg</code>
				change, while <code>darken</code> and <code>lighten</code> don't change but do appear significantly
				different because of the context.
			</p>
		</aside>
	</section>
	<section>
		<Tome_Subheading text="Fading opacity" slug="fading-opacity" />
		<Unfinished_Implementation_Warning />
		<div class="swatch">
			<div>
				<div class="color bg_a_5"></div>
				<small style:font-family="var(--font_sans)">full opacity</small>
			</div>
			{#each {length: 6} as _, i}
				{@const name = 'fade_' + (i + 1)}
				<div>
					<div class="color bg_a_5" style:opacity="var(--{name})"></div>
					<small><Style_Variable_Button {name} /></small>
				</div>
			{/each}
		</div>
	</section>
	<section>
		<Tome_Subheading text="Stacking opacity" slug="stacking-opacity" />
		<Code
			content={`<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
	<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
		<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
			<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
				<div style:background-color="var(--bg_4)" class="p_sm radius_xs3">
					...
				</div>
			</div>
		</div>
	</div>
</div>`}
		/>
		<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
			<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
				<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
					<div style:background-color="var(--fg_1)" class="p_sm radius_xs3">
						<div style:background-color="var(--bg_4)" class="p_sm radius_xs3">
							these variables have opacity, but notice how contrast changes with depth, creating
							limitations
						</div>
					</div>
				</div>
			</div>
		</div>
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
	small {
		height: var(--input_height_sm);
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
