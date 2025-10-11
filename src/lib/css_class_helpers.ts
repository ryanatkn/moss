import type {Logger} from '@ryanatkn/belt/log.js';

// TODO maybe just use the Svelte (and Oxc?) parser instead of this regexp madness?

export interface Css_Extractor {
	matcher: RegExp;
	mapper: (matched: RegExpExecArray) => Array<string>;
}

const CSS_CLASS_EXTRACTORS: Array<Css_Extractor> = [
	// `class:a`
	{
		matcher: /(?<!['"`])class:([^\s=>]+)/gi,
		mapper: (matched) => [matched[1]],
	}, // initial capture group is fake just because the second regexp uses a capture group for its back reference

	// `class="a"`, `classes="a"`, `classes = 'a b'`, `classes: 'a b'` with any whitespace around the `=`/`:`
	{
		matcher: /(?<!['"`])class(?:es)?\s*[=:]\s*(["'`])([\s\S]+?)\1/gi, // omit leading quotes in case it's obviously a string, like in tests (even though tests are separately filtered by default in the plugin)
		mapper: (matched) =>
			matched[2]
				.replace(
					// omit all expressions with best-effort - it's not perfect especially
					// around double quote strings in JS in Svelte expressions, but using single quotes is better imo
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
		mapper: (matched: RegExpExecArray): Array<string> => {
			const content = matched[1];
			if (content.includes('[')) return []; // TODO @many ideally fix instead of bailing, but maybe we need a real JS parser?
			const items = content.split(',').map((item) => item.trim());

			return items
				.reduce((classes: Array<string>, item: string) => {
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
	extractors: Array<Css_Extractor> = CSS_CLASS_EXTRACTORS,
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
	include_classes: Set<string> | null;

	#all: Set<string> = new Set();

	#by_id: Map<string, Set<string>> = new Map();

	#dirty = true;

	constructor(include_classes: Set<string> | null = null) {
		this.include_classes = include_classes;
	}

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
	}
}

export type Css_Class_Declaration =
	| Css_Class_Declaration_Item
	| Css_Class_Declaration_Group
	| Css_Class_Declaration_Interpreter;

export interface Css_Class_Declaration_Base {
	comment?: string;
}

export interface Css_Class_Declaration_Item extends Css_Class_Declaration_Base {
	declaration: string;
}
export interface Css_Class_Declaration_Group extends Css_Class_Declaration_Base {
	ruleset: string;
}
export interface Css_Class_Declaration_Interpreter extends Css_Class_Declaration_Base {
	pattern: RegExp;
	interpret: (matched: RegExpMatchArray, log?: Logger) => string | null;
}

export const generate_classes_css = (
	classes: Iterable<string>,
	classes_by_name: Record<string, Css_Class_Declaration | undefined>,
	interpreters: Array<Css_Class_Declaration_Interpreter>,
	log?: Logger,
): string => {
	// TODO when the API is redesigned this kind of thing should be cached
	// Create a map that has the index of each class name as the key
	const indexes: Map<string, number> = new Map();
	const keys = Object.keys(classes_by_name);
	for (let i = 0; i < keys.length; i++) {
		indexes.set(keys[i], i);
	}

	// If any classes are unknown, just put them at the end
	const sorted_classes = (Array.isArray(classes) ? classes : Array.from(classes)).sort((a, b) => {
		const index_a = indexes.get(a) ?? Number.MAX_VALUE;
		const index_b = indexes.get(b) ?? Number.MAX_VALUE;
		if (index_a !== index_b) return index_a - index_b;
		return a.localeCompare(b); // alphabetic tiebreaker for stable sort
	});

	let css = '';
	for (const c of sorted_classes) {
		let v = classes_by_name[c];

		// If not found statically, try interpreters
		if (!v) {
			for (const interpreter of interpreters) {
				const matched = c.match(interpreter.pattern);
				if (matched) {
					const declaration = interpreter.interpret(matched, log);
					if (declaration) {
						v = {declaration, comment: interpreter.comment};
						break;
					}
				}
			}
		}

		if (!v) {
			// diagnostic
			// if (!/^[a-z_0-9]+$/.test(c)) {
			// 	console.error('invalid class detected, fix the regexps', c);
			// }
			continue;
		}

		const {comment} = v;

		if (comment) {
			css += comment.includes('\n') ? `/*\n${comment}\n*/\n` : `/** ${comment} */\n`;
		}

		if ('declaration' in v) {
			css += `.${c} { ${v.declaration} }\n`;
		} else if ('ruleset' in v) {
			css += v.ruleset + '\n';
		}
		// Note: Interpreted types are converted to declaration above, so no else clause needed
	}

	return css;
};
