// TODO maybe just use the Oxc parser?

export interface Css_Extractor {
	matcher: RegExp;
	mapper: (matched: RegExpExecArray) => string[];
}

const CSS_CLASS_EXTRACTORS: Css_Extractor[] = [
	// `class:a`
	{
		// This uses `a-zA-Z-_0-9` because we're generating the classes
		// and can therefore Moss controls the allowed characters.
		// Turns out almost any character is allowed in CSS class names,
		// but that makes parsing have a ton of edge cases.
		matcher: /class:([a-zA-Z-_0-9]+)/gi,
		mapper: (matched) => [matched[1]],
	}, // initial capture group is fake just because the second regexp uses a capture group for its back reference

	// `class="a"`, `classes="a"`, `classes = 'a b'`, `classes: 'a b'` with any whitespace around the `=`/`:`
	{
		matcher: /(?<!['"`])class(?:es)?\s*[=:]\s*(["'`])([\s\S]+?)\1/gi, // omit leading quotes in case it's obviously a string, like in tests (even though tests are separately filtered by default in the plugin)
		mapper: (matched) =>
			matched[2]
				.replace(
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
	// arrays like `class: ['a', 'b']`, `classes = ['a', 'b']`, `classes={['a', 'b']`
	{
		matcher: /(?<!['"`])class(?:es)?\s*[=:]\{?\s*\[([\s\S]*?)\]/g,
		mapper: (matched: RegExpExecArray): string[] => {
			const content = matched[1];
			const items = content.split(',').map((item) => item.trim());

			return items
				.reduce((classes: string[], item: string) => {
					// Match string literals within each item
					const string_literals = item.match(/(['"`])((?:(?!\1)[^\\]|\\.)*?)\1/g);
					if (!string_literals) return classes;

					// Check if the item contains concatenation
					const has_concatenation = /\s*\+\s*/.test(item);

					if (!has_concatenation && string_literals.length === 1) {
						const content = string_literals[0].slice(1, -1); // remove quotes
						if (!content.includes('${')) {
							classes.push(content.replace(/\\(['"`])/g, '$1').trim());
						}
					}

					return classes;
				}, [])
				.filter(Boolean); // Filter out empty strings
		},
	},
];

/**
 * Returns a Set of CSS classes from a string of HTML/Svelte/JS/TS content.
 * Handles class attributes, directives, and various forms of CSS class declarations.
 */
export const collect_css_classes = (
	contents: string,
	extractors: Css_Extractor[] = CSS_CLASS_EXTRACTORS,
): Set<string> => {
	const all_classes: Set<string> = new Set();

	for (const extractor of extractors) {
		for (const c of extract_classes(contents, extractor)) {
			all_classes.add(c);
		}
	}

	return all_classes;
};

const extract_classes = (contents: string, {matcher, mapper}: Css_Extractor): Set<string> => {
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
