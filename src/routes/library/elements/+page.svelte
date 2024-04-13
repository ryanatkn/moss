<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {base} from '$app/paths';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO consider a generated table that shows all of the computed styles like `block` and `inline`

	// TODO think about the best way to show the raw code (and how to get it, how much structure to apply to library authors)
</script>

<Tome_Detail {tome}>
	<blockquote>
		Styles for plain <Mdn_Link href="Web/HTML/Element">HTML elements</Mdn_Link>. See also <Tome_Link
			name="typography"
		/> and <Tome_Link name="forms" />.
	</blockquote>
	<section>
		<Tome_Subheading text="blockquote" slug="blockquote-element">
			<span style="font-size: var(--size_xl3)">👆</span>
			<Mdn_Link href="Web/HTML/Element/blockquote" />
		</Tome_Subheading>
		<Tome_Subheading text="hr" slug="hr">
			<span style="font-size: var(--size_xl3)">👇</span>
			<Mdn_Link href="Web/HTML/Element/hr" />
		</Tome_Subheading>
		<hr />
	</section>
	<section>
		<Tome_Subheading text="a" slug="a-element">
			<Mdn_Link href="Web/HTML/Element/a" />
		</Tome_Subheading>
		<p><a href="{base}/">a link</a> in a <code>p</code></p>
		<div><a href="{base}/">a link</a> in a <code>div</code></div>
		<p><a class="selected" href="{base}/">a link</a> with <code>.selected</code></p>
	</section>
	<section>
		<Tome_Subheading text="code" slug="code-element">
			<Mdn_Link href="Web/HTML/Element/code" />
		</Tome_Subheading>
		<p><code>code</code> in a <code>p</code></p>
		<div><code>code</code> in a <code>div</code></div>
	</section>
	<section>
		<Tome_Subheading text="pre" slug="pre-element">
			<Mdn_Link href="Web/HTML/Element/pre" />
		</Tome_Subheading>
		<pre>a <code class="inline">pre</code> is
  preformatted
					text</pre>
		<pre><code
				><code class="inline">code</code> in a <code class="inline">pre</code>
		 	is a
				 block</code
			></pre>
	</section>
	<section>
		<Tome_Subheading text="details and summary" slug="details-and-summary-elements">
			<Mdn_Link href="Web/HTML/Element/details" />
			and
			<Mdn_Link href="Web/HTML/Element/summary" />
		</Tome_Subheading>
		<details>
			<summary>Click this <code>summary</code> to see the rest of the <code>details</code></summary>
			<p>See also the <Tome_Link name="Details" /> component.</p>
			<Code
				content={`<details>
	<summary>
		Click this <code>summary</code>
		to see the rest of the <code>details</code>
	</summary>
	<p>See also the <Tome_Link name="Details" /> component.</p>
	<Code code={'...'} />
</details>`}
			/>
		</details>
	</section>
	<section>
		<Tome_Subheading text="aside" slug="aside-element">
			<Mdn_Link href="Web/HTML/Element/aside" />
		</Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading text="header" slug="header-element">
			<Mdn_Link href="Web/HTML/Element/header" />
		</Tome_Subheading>
		<Code content={`<header>header</header>`} />
		<header>header</header>
	</section>
	<section>
		<Tome_Subheading text="footer" slug="footer-element">
			<Mdn_Link href="Web/HTML/Element/footer" />
		</Tome_Subheading>
		<Code content={`<footer>footer</footer>`} />
		<footer>footer</footer>
	</section>
	<section>
		<Tome_Subheading text="section" slug="section-element">
			<Mdn_Link href="Web/HTML/Element/section" />
		</Tome_Subheading>
		<Code content={`<section>section</section>`} />
		<section>section</section>
	</section>
	<section>
		<Tome_Subheading text="ul" slug="ul-element"><code>ul</code></Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading text="ol" slug="ol-element"><code>ol</code></Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading text="menu" slug="menu-element"><code>menu</code></Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading text="table" slug="table-element">
			<Mdn_Link href="Web/HTML/Element/table" />
		</Tome_Subheading>
		<blockquote>⚠️ This is unfinished and will change.</blockquote>
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
	</section>
	<p>TODO more!</p>
</Tome_Detail>
