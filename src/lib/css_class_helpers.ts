const CSS_CLASS_MATCHERS = [
	// `class:a`
	/class:([^\s={]+)/gi,

	// `class="a"`, `classes="a"`, `classes = 'a b'`, `classes: 'a b'` with any whitespace around the `=`/`:`
	/class(?:es)?\s*[=:]\s*["'`]([^"'`]+)["'`]/gi,
];

/**
 * Returns a Set of CSS classes from a string of HTML/Svelte/JS/TS content.
 * Handles class attributes, directives, and various forms of CSS class declarations.
 */
export const collect_css_classes = (contents: string): Set<string> => {
	const all_classes: Set<string> = new Set();

	for (const matcher of CSS_CLASS_MATCHERS) {
		for (const c of extract_classes(contents, matcher)) {
			all_classes.add(c);
		}
	}

	return all_classes;
};

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
