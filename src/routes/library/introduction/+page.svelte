<script lang="ts">
	import Tome_Detail from '@ryanatkn/fuz/Tome_Detail.svelte';
	import {get_tome} from '@ryanatkn/fuz/tome.js';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<p>TODO write introduction</p>
		<ul>
			<li>goals</li>
			<li>status</li>
			<li>contributing</li>
		</ul>
	</section>
</Tome_Detail>
