<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {fly} from 'svelte/transition';
	import Alert from '@ryanatkn/fuz/Alert.svelte';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Unfinished_Implementation_Warning from '$routes/docs/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'forms';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO extract this to where? (where is it used in the css? check all @keyframe)
	const ANIMATION_DURATION_FAST = 91; // ms

	let created_account = $state(false);

	const faces = ['😊', '😑', '🤔', '😉'];

	let username = $state('');
	let password = $state('');
	let lifestory = $state('');

	const radio_items = ['a radio input', 'another radio input'];
	let selected_radio_item = $state(radio_items[0]);

	let checked1 = $state(false);
	let checked2 = $state(true);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<Unfinished_Implementation_Warning>Forms need more work.</Unfinished_Implementation_Warning>

	<Tome_Section>
		<Tome_Section_Header text="form with a fieldset">
			<Mdn_Link path="Web/HTML/Element/form" /> with a <Mdn_Link path="Web/HTML/Element/fieldset" />
		</Tome_Section_Header>
		<Code
			content={`<form>
	<fieldset>
		<legend>
			a <Mdn_Link path="Web/HTML/Element/legend" />
		</legend>
		<label>
			<div class="title">
				username
			</div>
			<input
				bind:value={username}
				placeholder=">"
			/>
		</label>
		...
	</fieldset>
	...
</form>`}
		/>
		<div class="width_sm">
			<form>
				<fieldset>
					<legend>This is a <Mdn_Link path="Web/HTML/Element/legend" /></legend>
					<label class:disabled={created_account}>
						<div class="title">username</div>
						<input bind:value={username} disabled={created_account} placeholder=">" />
					</label>
					<label class:disabled={created_account}>
						<div class="title">password</div>
						<input
							type="password"
							bind:value={password}
							disabled={created_account}
							placeholder=">"
						/>
					</label>
					<p>
						More info can be included in <code>{'<'}p></code> tags like this one. Here we could include
						info about passwords.
					</p>
					<label class:disabled={created_account}>
						<div class="title">lifestory</div>
						<textarea bind:value={lifestory} disabled={created_account} placeholder="👀"
						></textarea></label
					>
					<label class:disabled={created_account}>
						<div class="title">select</div>
						<select class="text_align_center font_size_xl5" disabled={created_account}>
							{#each faces as face (face)}
								<option value={face}>{face}</option>
							{/each}
						</select>
					</label>
					<button type="button" disabled={created_account} onclick={() => (created_account = true)}>
						create account
					</button>
				</fieldset>
			</form>
			{#if created_account}
				<form
					in:fly={{y: -100, duration: ANIMATION_DURATION_FAST}}
					out:fly={{y: 100, duration: ANIMATION_DURATION_FAST}}
				>
					<Alert status="error">cannot create account because the docs are fake</Alert>
					<button type="button" class="w_100" onclick={() => (created_account = false)}>
						undo undo!
					</button>
				</form>
			{/if}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="form with range input">
			<code>form</code> with range input
		</Tome_Section_Header>
		<form>
			<fieldset>
				<Code content={`<input type="range" />`} />
				<input type="range" step={1} min={0} max={100} />
			</fieldset>
			<fieldset>
				<Code content={`<input type="range" disabled />`} />
				<input type="range" step={1} min={0} max={100} disabled />
			</fieldset>
		</form>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="form with checkboxes">
			<code>form</code> with checkboxes
		</Tome_Section_Header>
		<Unfinished_Implementation_Warning
			>This will change, probably to toggles.</Unfinished_Implementation_Warning
		>
		<!-- TODO make this a form, but figure out the checkbox problem -- maybe a last-child exception? -->
		<form>
			<fieldset>
				<label class="row">
					<input type="checkbox" bind:checked={checked1} style:margin-right="var(--space_lg)" />
					<Code content={`<input type="checkbox" ${checked1 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row">
					<input type="checkbox" bind:checked={checked2} style:margin-right="var(--space_lg)" />
					<Code content={`<input type="checkbox" ${checked2 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row disabled">
					<input type="checkbox" disabled style:margin-right="var(--space_lg)" />
					<Code content={`<input type="checkbox" disabled />`} /> (disabled)
				</label>
				<label class="row disabled">
					<input type="checkbox" checked disabled />
					<Code content={`<input type="checkbox" checked disabled />`} /> (disabled)
				</label>
			</fieldset>
		</form>
		<aside>
			The above are wrapped with: <Code content={`<label class="row">`} />
			with <code>.disabled</code> as needed: <Code content={`<label class="row disabled">`} />
		</aside>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="form with radio inputs">
			<code>form</code> with radio inputs
		</Tome_Section_Header>
		<form>
			<fieldset>
				{#each radio_items as radio_item (radio_item)}
					{@const selected = radio_item === selected_radio_item}
					<label class="row" class:selected
						><input type="radio" bind:group={selected_radio_item} value={radio_item} />
						<Code
							content={`<label class="row${selected ? ' selected' : ''}">\n\t<input type="radio" ${
								selected ? 'checked' : ''
							}/>\n</label>`}
						/></label
					>
				{/each}
				<label class="row disabled">
					<input type="radio" disabled />
					<Code content={`<label class="row">\n\t<input type="radio" disabled />\n</label>`} />
				</label>
				<label class="row disabled selected">
					<input type="radio" checked disabled />
					<Code
						content={`<label class="row">\n\t<input type="radio" checked disabled />\n</label>`}
					/>
				</label>
			</fieldset>
		</form>
	</Tome_Section>
</Tome_Content>
