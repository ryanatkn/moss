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
		<aside class="mb_lg">
			⚠️ These concepts are still developing - some things are incomplete or inconsistent, and there
			will be a lot of breaking changes.
		</aside>
		<p>
			Moss is designed around two simplistic models of light, one for dark mode and one for light
			mode. The goal is easy authoring with simple and consistent rules for arbitrary compositions
			and states.
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
			Black shadows don't work against a black background, and white glows make natural sense
			against a black background.
		</p>
		<p>
			This distinction leads to complication. For example, applying a black shadow to an element has
			a particular visual impact on the typical light mode page, but viewed in dark mode, it would
			disappear completely against a black background.
		</p>
		<p>
			Moss provides APIs that simplify or hide the complexity. For the <code>lighten</code>
			and <code>darken</code> variables are the same in light and dark modes, but
			<code>fg</code>
			and <code>bg</code> swap places. Some variables are color-scheme-aware like this.
		</p>
		<aside>
			<p>
				Currently, the choice is to make "shadow" change semantically to a glow in dark mode, but
				this is likely to change as things become clearer.
			</p>
			<p>
				The <Tome_Link name="colors" /> docs elaborate more on this point. I have multiple design questions
				about this - I may write down all of the considerations in one place, and maybe make a post/video
				about it. Broadly, I like the "light and shadow" framing to thinking about UI. I think "dark
				mode" is more interesting than it lets on, because of
			</p>
		</aside>
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
			<p>⚠️ This section is incomplete and has many open questions:</p>
			<ul>
				<li>
					Should glows and shadows be reversed for dark mode like this? Ties into the bigger
					question about how light works in dark mode. Maybe the current color-scheme-aware "shadow"
					just needs a rename, like "shade", and then "shadow" becomes more intuitively
					color-scheme-agnostic.
				</li>
				<li>
					Colored shadows/glows? By composing variables? <code>--shadow|glow_color</code>
					or
					<code>--shadow|glow</code> or something else? Abstracting alpha too?
				</li>
				<li>
					For buttons and similar cases, add variants that combine a shadow and glow? Maybe <code
						>shaded_</code
					>? Currently doing <code>box-shadow: var(--shadow_outset_xs), var(--glow_inset_xs);</code>
					- maybe also add semantic vars like base/hover/active?
				</li>
				<li>Tweak values? Seems we need another variant at the low end - keep 5 total?</li>
			</ul>
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
		<div class="mb_xl7"><Color_Scheme_Input /></div>
		<p>
			Glows are the inverse of shadows. Notice how glows use the same color as the <code>bg</code> and
			are therefore invisible against a plain background.
		</p>
		<div class="p_lg panel fg_3">
			{#each shadow_variants as variant}
				<div class="shadow_example" style:box-shadow="var(--glow_{variant})">
					<Style_Variable_Button name="glow_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div class="shadow_example" style:box-shadow="var(--glow_inset_{variant})">
					<Style_Variable_Button name="glow_inset_{variant}" />
				</div>
			{/each}
			{#each shadow_variants as variant}
				<div class="shadow_example" style:box-shadow="var(--glow_outset_{variant})">
					<Style_Variable_Button name="glow_outset_{variant}" />
				</div>
			{/each}
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
