const CLASS_MATCHERS = [
	// `class="a b"` and `class: 'a b'`
	/class[=:]["'`]([^"'`]+)["'`]/g,

	// `class:a`
	/class:([^\s={]+)/gi,

	// `classes = 'a b'` and `classes: 'a b'`
	/classes\s*[=:]\s*["'`]([^"'`]+)["'`]/gi,

	// class: 'a b'
	/class:\s*["'`]([^"'`]+)["'`]/gi,

	// TODO maybe support this?
	// *classes = ['a', 'b']
	// extracts the contents of one or more string literals in an array
	// /classes\s*[=:]\s*\[((?:["'`][^"'`]*["'`]\s*,?\s*)+)\]/gi,
];

const extract_classes = (contents: string, matcher: RegExp): Set<string> => {
	const classes: Set<string> = new Set();
	let match;
	while ((match = matcher.exec(contents)) !== null) {
		const class_list = match[1]; // Only extract the relevant class string
		for (const c of class_list.split(/\s+/).filter(Boolean)) {
			classes.add(c);
		}
	}
	return classes;
};

/**
 * Returns a Set of CSS classes from a string of HTML/Svelte/JS/TS content.
 * Handles class attributes, directives, and various forms of CSS class declarations.
 */
export const collect_css_classes = (contents: string): Set<string> => {
	const all_classes: Set<string> = new Set();

	for (const matcher of CLASS_MATCHERS) {
		for (const c of extract_classes(contents, matcher)) {
			all_classes.add(c);
		}
	}

	return all_classes;
};
