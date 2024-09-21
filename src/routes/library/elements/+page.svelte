<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {base} from '$app/paths';
	import Tome_Content from '@ryanatkn/fuz/Tome_Content.svelte';
	import Tome_Link from '@ryanatkn/fuz/Tome_Link.svelte';
	import {get_tome_by_name} from '@ryanatkn/fuz/tome.js';
	import Mdn_Link from '@ryanatkn/fuz/Mdn_Link.svelte';
	import Tome_Section_Header from '@ryanatkn/fuz/Tome_Section_Header.svelte';
	import Tome_Section from '@ryanatkn/fuz/Tome_Section.svelte';

	import Unfinished_Implementation_Warning from '$routes/library/Unfinished_Implementation_Warning.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO consider a generated table that shows all of the computed styles like `block` and `inline`

	// TODO think about the best way to show the raw code (and how to get it, how much structure to apply to library authors)
</script>

<Tome_Content {tome}>
	<Unfinished_Implementation_Warning
		>Element styles are incomplete. Any requests?</Unfinished_Implementation_Warning
	>
	<blockquote>
		Styles for plain <Mdn_Link path="Web/HTML/Element">HTML elements</Mdn_Link>. See also <Tome_Link
			name="typography"
		/> and <Tome_Link name="forms" />.
	</blockquote>
	<Tome_Section>
		<Tome_Section_Header text="blockquote">
			<span class="size_xl3">👆</span>
			<Mdn_Link path="Web/HTML/Element/blockquote" />
		</Tome_Section_Header>
		<Tome_Section_Header text="hr">
			<span class="size_xl3">👇</span>
			<Mdn_Link path="Web/HTML/Element/hr" />
		</Tome_Section_Header>
		<hr />
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="a">
			<Mdn_Link path="Web/HTML/Element/a" />
		</Tome_Section_Header>
		<p><a href="{base}/">a link</a> in a <code>p</code></p>
		<div><a href="{base}/">a link</a> in a <code>div</code></div>
		<p><a class="selected" href="{base}/">a link</a> with <code>.selected</code></p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="code">
			<Mdn_Link path="Web/HTML/Element/code" />
		</Tome_Section_Header>
		<p><code>code</code> in a <code>p</code></p>
		<div><code>code</code> in a <code>div</code></div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="pre">
			<Mdn_Link path="Web/HTML/Element/pre" />
		</Tome_Section_Header>
		<pre>a <code class="inline">pre</code> is
  preformatted
					text</pre>
		<pre><code
				><code class="inline">code</code> in a <code class="inline">pre</code>
		 	is a
				 block</code
			></pre>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="details and summary">
			<Mdn_Link path="Web/HTML/Element/details" />
			and
			<Mdn_Link path="Web/HTML/Element/summary" />
		</Tome_Section_Header>
		<details>
			<summary>Click this <code>summary</code> to see the rest of the <code>details</code></summary>
			<p>The children of the <code>details</code> excluding the <code>summary</code>.</p>
			<Code
				content={`<details>
	<summary>
		Click this <code>summary</code>
		to see the rest of the <code>details</code>
	</summary>
	<p>The children of the <code>details</code> excluding the <code>summary</code>.</p>
	<Code code={'...'} />
</details>`}
			/>
		</details>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="aside">
			<Mdn_Link path="Web/HTML/Element/aside" />
		</Tome_Section_Header>
		<aside>
			the <code>aside</code> looks like this
		</aside>
		<aside>
			<Code
				content={`<aside>
	<aside>
		<aside>nested asides</aside>
	</aside>
</aside>`}
			/>
			<aside>
				<aside>
					<aside>nested asides</aside>
				</aside>
			</aside>
		</aside>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="header">
			<Mdn_Link path="Web/HTML/Element/header" />
		</Tome_Section_Header>
		<Code content={`<header>header</header>`} />
		<header>header</header>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="footer">
			<Mdn_Link path="Web/HTML/Element/footer" />
		</Tome_Section_Header>
		<Code content={`<footer>footer</footer>`} />
		<footer>footer</footer>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="section">
			<Mdn_Link path="Web/HTML/Element/section" />
		</Tome_Section_Header>
		<Code content={`<section>section</section>`} />
		<section>section</section>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="ul"><code>ul</code></Tome_Section_Header>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
		<h4><code>ul</code> with <code>.unstyled</code></h4>
		<ul class="unstyled">
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="ol"><code>ol</code></Tome_Section_Header>
		<ol>
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
		<h4><code>ol</code> with <code>.unstyled</code></h4>
		<ol class="unstyled">
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="menu"><code>menu</code></Tome_Section_Header>
		<menu>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
		<h4><code>menu</code> with <code>.unstyled</code></h4>
		<menu class="unstyled">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="table">
			<Mdn_Link path="Web/HTML/Element/table" />
		</Tome_Section_Header>
		<Unfinished_Implementation_Warning />
		<Code
			content={`<table>
	<thead>
		<tr>
			<th>th</th>
			<th>th</th>
			<th>th</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
	</tbody>
</table>`}
		/>
		<table>
			<thead>
				<tr>
					<th>th</th>
					<th>th</th>
					<th>th</th>
				</tr>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
		<Code content={`<table class="w_100">\n\t...\n</table>`} />
		<table class="w_100">
			<thead>
				<tr>
					<th>th</th>
					<th>th</th>
					<th>th</th>
				</tr>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
	</Tome_Section>
	<p>TODO more!</p>
</Tome_Content>
