// class="a b"
const CLASS_ATTR_MATCHER = /class=["'`]([^"'`]+)["'`]/g;

// class:a
const CLASS_DIRECTIVE_MATCHER = /class:([^=]+)=["'`]([^"'`]+)["'`]/g;

// classes="a b"
const CLASSES_PROP_MATCHER = /classes=["'`]([^"'`]+)["'`]/g;

// *classes = ['a', 'b']
// extracts the contents of one or more string literals in an array
const CLASSES_ARRAY_LITERAL_MATCHER = /classes\s*=\s*\[([^\]]+)\]/gi;

// *classes = 'a b'
// TODO BLOCK `'"
const CLASSES_STRING_LITERAL_MATCHER = /classes\s*=\s*["'`]([^["'`]]+)["'`]/gi;

// TODO BLOCK tests with all forms, including multiline

/**
 * Returns an array of CSS classes from a string of HTML content.
 * These are inferred in a variety of ways, including normal Svelte contructs
 * and some custom heuristics.
 */
export const collect_css_classes = (contents: string): Set<string> => {
	// TODO BLOCK some false positives
	// TODO BLOCK ensure no overlap in regexps
	const classes: Set<string> = new Set();
	const add_classes = (match: string, class_list: string) => {
		for (const c of class_list.split(/\s+/).filter(Boolean)) {
			classes.add(c);
		}
		return match;
	};
	// TODO BLOCK the `replace` is wasted work, we just want to extract classes
	contents.replace(CLASS_ATTR_MATCHER, add_classes);
	contents.replace(CLASS_DIRECTIVE_MATCHER, add_classes);
	contents.replace(CLASSES_PROP_MATCHER, add_classes);
	contents.replace(CLASSES_ARRAY_LITERAL_MATCHER, add_classes);
	contents.replace(CLASSES_STRING_LITERAL_MATCHER, add_classes);
	return classes;
};
