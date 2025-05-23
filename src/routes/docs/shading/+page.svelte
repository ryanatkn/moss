<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import {themer_context} from '@ryanatkn/fuz/themer.svelte.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'shading';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const themer = themer_context.get();
	const toggle_color_scheme = () => {
		themer.color_scheme = themer.color_scheme === 'light' ? 'dark' : 'light';
	};

	const opacity_classes = [
		'opacity_0',
		'opacity_10',
		'opacity_20',
		'opacity_30',
		'opacity_40',
		'opacity_50',
		'opacity_60',
		'opacity_70',
		'opacity_80',
		'opacity_90',
		'opacity_100',
	];
</script>

<Tome_Content {tome}>
	<section>
		<Unfinished_Implementation_Warning>
			These concepts are still developing - some things are incomplete or inconsistent, and there
			will be a lot of breaking changes. I'm thinking of splitting this "light and shadow" section
			into "shadows" and "shading" something.
		</Unfinished_Implementation_Warning>
		<p>
			Moss is designed around two simplistic models of light, one for dark mode and one for light
			mode, mapping to the web platform's <Mdn_Link path="Web/CSS/color-scheme" />. The goal is easy
			authoring with simple and consistent rules for arbitrary compositions and states. Each <Tome_Link
				name="themes">theme</Tome_Link
			> can choose to implement either light mode or dark mode or both.
		</p>
		<p>
			Light mode's starting point is plain white documents (like paper) where we can think of UI
			construction as assembling elements that contrast against the white background, replacing some
			of the white blankness with darkened values/color/shape. In other words, we start with full
			lightness and subtract light to make visuals. Black shadows on the white background make
			natural sense, and white glows against a white background are invisible.
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
			like the word "adaptive" but idk) The <Tome_Link name="colors" /> docs elaborate more on this point
			and the <Tome_Link name="shadows" /> docs implement more of the idea.
		</p>
		<p>
			Opacity is used to enable arbitrary stacking that visually inherits its context. Not all cases
			are properly handled yet, and some choices are made for performance reasons, like avoiding
			opacity on text. (assuming this is still a thing?)
		</p>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Shades and highlights" />
		<Tome_Section>
			<Tome_Section_Header text="darken and lighten" tag="h4"
				><code>darken</code> and <code>lighten</code></Tome_Section_Header
			>
			<Unfinished_Implementation_Warning />
			<div class="swatch">
				{#each {length: 9} as _, i (i)}
					{@const name = 'darken_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
			<div class="swatch">
				{#each {length: 9} as _, i (i)}
					{@const name = 'lighten_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
		</Tome_Section>
		<Tome_Section>
			<Tome_Section_Header text="bg and fg" tag="h4"
				><code>bg</code> and <code>fg</code></Tome_Section_Header
			>
			<p>
				In light mode, <code>bg</code> is the same as <code>lighten</code> and <code>fg</code> is
				the same as <code>darken</code>. In dark mode, they're swapped.
			</p>
			<div class="swatch">
				{#each {length: 9} as _, i (i)}
					{@const name = 'bg_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
			<div class="swatch">
				{#each {length: 9} as _, i (i)}
					{@const name = 'fg_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
		</Tome_Section>
	</Tome_Section>
	<section>
		<Color_Scheme_Input />
		<aside class="mt_xl2 width_sm mx_auto">
			<p>
				tip: Try <button type="button" onclick={toggle_color_scheme}>toggling</button> between light
				and dark to see how <code>bg</code> and <code>fg</code>
				change, while <code>darken</code> and <code>lighten</code> don't change but do appear significantly
				different because of the context.
			</p>
		</aside>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Stacking transparency" />
		<p>
			Many styles are designed to stack, so things can appear in different contexts while retaining
			relative color value distinctiveness ("color value" as in darkness-lightness). Internally this
			uses simple transparency instead of complex selectors or other structure.
		</p>
		<Code
			content={`<div class="fg_1 p_sm">
	<div class="fg_1 p_sm">
		<div class="fg_1 p_sm">
			<div class="fg_1 p_sm">
				<div class="bg p_sm">
					...
				</div>
			</div>
		</div>
</div>`}
		/>
		<div class="fg_1 p_sm">
			<div class="fg_1 p_sm">
				<div class="fg_1 p_sm">
					<div class="fg_1 p_sm">
						<p class="bg p_sm">
							these shades use opacity, but notice how contrast changes with depth, creating
							limitations
						</p>
					</div>
				</div>
			</div>
		</div>
		<p class="mt_lg">
			This adds some complexity and performance costs, and it's currently incomplete, but so far it
			feels like an elegant solution with many unfinished details, and I plan to continue
			integrating the idea in more places while considering alternative designs. However alpha
			transparency has multiple costs, so I'm trying to be mindful to not use alpha for text and
			other cases that are more performance-sensitive, but we may need to change this behavior for
			the base cases, or include performance themes.
		</p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Opacity" />
		<p>These are not variables, they're just utility classes that map to <code>%</code> values.</p>
		<div class="swatch">
			{#each opacity_classes as opacity_class (opacity_class)}
				<div>
					<div class="color bg_a_5 {opacity_class}"></div>
					<small>.{opacity_class}</small>
				</div>
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.swatch {
		font-family: var(--font_family_mono);
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
