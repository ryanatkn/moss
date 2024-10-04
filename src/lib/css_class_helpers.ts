// TODO BLOCK problem is text with interpolation like `class="shadow_main_example {shadow_variant_prefix}{shadow_size_variant} shadow_color_shroud"`

/*

Please rewrite the JS regexp:

```ts
/class(?:es)?\s*[=:]\s*["'`]([a-zA-Z-_0-9\s]+)["'`]/gi
```

So that it matches the classes `a` and `c` in `'classes="a {b} c"'` but ignores the `{b}` and any other Svelte expressions inside curly braces `{}`. 


*/

// These use `a-zA-Z-_0-9` because we're generating the classes
// and can therefore control the allowed characters.
// Turns out almost any character is allowed in CSS class names,
// but that makes parsing have a ton of edge cases.
const CSS_CLASS_MATCHERS: Array<{matcher: RegExp; mapper: (matches: RegExpExecArray) => string[]}> =
	[
		// `class:a`
		{
			matcher: /class:([a-zA-Z-_0-9]+)/gi,
			mapper: (matches) => [matches[1]],
		}, // initial capture group is fake just because the second regexp uses a capture group for its back reference

		// `class="a"`, `classes="a"`, `classes = 'a b'`, `classes: 'a b'` with any whitespace around the `=`/`:`
		{
			matcher: /(?<!['"`])class(?:es)?\s*[=:]\s*(["'`])([\s\S]+?)\1/gi, // omit leading quotes in case it's obviously a string, like in tests (even though tests are separately filtered by default in the plugin)
			mapper: (matches) =>
				matches[2]
					.replace(
						// TODO BLOCK technically this is only needed for the second match, restructure the code to have a function that includes the split/filter steps too, probably a `capture` helper too
						// omit all expressions with best-effort - it's not perfect especially
						// around double quote strings in JS in Svelte expressions, but using single quotes is better
						/\S*{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*}\S*/g,
						// same failures:
						// /\S*{(?:[^{}]*|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.|\$\{(?:[^{}]*|{[^{}]*})*\})*`|{(?:[^{}]*|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.|\$\{(?:[^{}]*|{[^{}]*})*\})*`)*})*}\S*/g,
						// 3 failures:
						// /\S*{(?:[^{}`'"]*|[`'"]((?:[^\\`'"]|\\.|\$\{[^}]*\})*)[`'"]|{[^{}]*})*}\S*/g,
						'',
					)
					.split(/\s+/)
					.filter(Boolean),
		},
	];

/**
 * Returns a Set of CSS classes from a string of HTML/Svelte/JS/TS content.
 * Handles class attributes, directives, and various forms of CSS class declarations.
 */
export const collect_css_classes = (contents: string): Set<string> => {
	const all_classes: Set<string> = new Set();

	for (const {matcher, mapper} of CSS_CLASS_MATCHERS) {
		for (const c of extract_classes(contents, matcher, mapper)) {
			all_classes.add(c);
		}
	}

	return all_classes;
};

const extract_classes = (
	contents: string,
	matcher: RegExp,
	mapper: (matches: RegExpExecArray) => string[],
): Set<string> => {
	const classes: Set<string> = new Set();
	let matched: RegExpExecArray | null;
	while ((matched = matcher.exec(contents)) !== null) {
		for (const c of mapper(matched)) {
			classes.add(c);
		}
	}
	return classes;
};

export class Css_Classes {
	#all: Set<string> = new Set();

	#all_sorted: string[] | null = null;

	#by_id: Map<string, Set<string>> = new Map();

	#dirty = true;

	constructor(public include_classes: Set<string> | null = null) {}

	add(id: string, classes: Set<string>): void {
		this.#dirty = true;
		this.#by_id.set(id, classes);
	}

	delete(id: string): void {
		this.#dirty = true;
		this.#by_id.delete(id);
	}

	get(): Set<string> {
		if (this.#dirty) {
			this.#dirty = false;
			this.#recalculate();
		}
		return this.#all;
	}

	get_sorted_array(): string[] {
		if (!this.#dirty && this.#all_sorted !== null) {
			return this.#all_sorted;
		}
		return (this.#all_sorted = Array.from(this.get()).sort((a, b) => a.localeCompare(b)));
	}

	#recalculate(): void {
		this.#all.clear();
		if (this.include_classes) {
			for (const c of this.include_classes) {
				this.#all.add(c);
			}
		}
		for (const classes of this.#by_id.values()) {
			for (const c of classes) {
				this.#all.add(c);
			}
		}
		this.#all_sorted = null;
	}
}
