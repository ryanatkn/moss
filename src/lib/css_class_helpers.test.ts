import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {collect_css_classes} from './css_class_helpers.js';

const values: Array<[contents: string, expected: string[]]> = [
	// `class=` attribute
	['class="a"', ['a']],
	['class="a b"', ['a', 'b']],
	['class="a b c"', ['a', 'b', 'c']],
	["class='a b c'", ['a', 'b', 'c']],
	// `class:` directive
	['class:a', ['a']],
	['class:a "', ['a']],
	['class:a="', ['a']],
	// `classes=` prop
	['classes="a"', ['a']],
	['classes="a b"', ['a', 'b']],
	['classes="a b c"', ['a', 'b', 'c']],
	["classes='a b c'", ['a', 'b', 'c']],
	// `classes = ` variable declaration
	["classes = 'a'", ['a']],
	["classes = 'a b'", ['a', 'b']],
	["classes = 'a b c'", ['a', 'b', 'c']],
	['classes = "a"', ['a']],
	['classes = "a b"', ['a', 'b']],
	['classes = "a b c"', ['a', 'b', 'c']],
	['classes = `a`', ['a']],
	['classes = `a b`', ['a', 'b']],
	['classes = `a b c`', ['a', 'b', 'c']],
	["CLASSES = 'a'", ['a']],
	["CLASSES = 'a b'", ['a', 'b']],
	["CLASSES = 'a b c'", ['a', 'b', 'c']],
	["classes='a'", ['a']],
	["classes='a b'", ['a', 'b']],
	["classes='a b c'", ['a', 'b', 'c']],
	["classes =\n'a'", ['a']],
	["classes =\n'a b'", ['a', 'b']],
	["classes =\n'a b c'", ['a', 'b', 'c']],
	["classes =\n\t'a'", ['a']],
	["classes =\n\t'a b'", ['a', 'b']],
	["classes =\n\t'a b c'", ['a', 'b', 'c']],
	["classes =\n  \t 'a'", ['a']],
	["classes =\n  \t 'a b'", ['a', 'b']],
	["classes =\n  \t 'a b c'", ['a', 'b', 'c']],
	["aclasses = 'a b c'", ['a', 'b', 'c']],
	["Aclasses = 'a b c'", ['a', 'b', 'c']],
	["_classes = 'a b c'", ['a', 'b', 'c']],
	["dcLaSses = 'a b c'", ['a', 'b', 'c']],
	// TODO BLOCK unify regexp so it doesn't care if it's a `=` or `:`, handles any whitespace and quotes? or maybe enforce formatted code and do several more targetted regexps?
	// TODO BLOCK `class: 'a'` and `classes: 'a'` and `Xclasses: 'a'` object properties
	// TODO BLOCK support array of strings?
];

test('collects CSS classes from a string of Svelte or TS', () => {
	for (const [contents, expected] of values) {
		const found = collect_css_classes(contents);
		assert.equal(
			Array.from(found),
			expected,
			`failed to collect classes for input \`${contents}\``,
		);
	}
});

test.run();
