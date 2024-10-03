const CLASS_MATCHERS = [
	// class="a b"
	/class=["'`]([^"'`]+)["'`]/g,

	// class:a
	/class:([a-zA-Z0-9_-]+)(?:=\{([^}]+)\})?/g,

	// classes="a b"
	/classes=["'`]([^"'`]+)["'`]/g,

	// *classes = ['a', 'b']
	// extracts the contents of one or more string literals in an array
	/classes\s*=\s*\[((?:["'`][^"'`]*["'`]\s*,?\s*)+)\]/gi,

	// *classes = 'a b'
	/classes\s*=\s*["'`]([^"'`]+)["'`]/gi,

	// class: 'a b'
	/class:\s*["'`]([^"'`]+)["'`]/gi,
];

// TODO BLOCK tests with all forms, including multiline

// Unified helper function to extract class lists
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
		const extracted = extract_classes(contents, matcher);
		extracted.forEach((cls) => all_classes.add(cls)); // Merge all into one set
	}

	return all_classes;
};
