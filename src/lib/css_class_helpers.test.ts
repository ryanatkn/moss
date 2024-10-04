import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {collect_css_classes} from './css_class_helpers.js';

const values: Array<[contents: string, expected: string[]]> = [
	// `class=` attribute
	['class="a"', ['a']],
	['class="a b"', ['a', 'b']],
	['class="a b c"', ['a', 'b', 'c']],
	["class='a b c'", ['a', 'b', 'c']],
	// `class:` object property
	['class: "a"', ['a']],
	['class: "a b"', ['a', 'b']],
	['class: "a b c"', ['a', 'b', 'c']],
	["class: 'a b c'", ['a', 'b', 'c']],
	['class: `a b c`', ['a', 'b', 'c']],
	// `class:` directive
	['class:a', ['a']],
	['class:a ', ['a']],
	['class:a=', ['a']],
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
	["classes =\n  \t \n 'a'", ['a']],
	["classes =\n  \t \n 'a b'", ['a', 'b']],
	["classes\n \n=\n  \t \n 'a b c'", ['a', 'b', 'c']],
	["aclasses = 'a b c'", ['a', 'b', 'c']],
	["Aclasses = 'a b c'", ['a', 'b', 'c']],
	["_classes = 'a b c'", ['a', 'b', 'c']],
	["dcLaSses = 'a b c'", ['a', 'b', 'c']],
	// `classes:` object property
	['classes: "a"', ['a']],
	['classes: "a b"', ['a', 'b']],
	['classes: "a b c"', ['a', 'b', 'c']],
	["classes: 'a b c'", ['a', 'b', 'c']],
	['classes: `a b c`', ['a', 'b', 'c']],
	// `classes : ` object property
	["classes: 'a'", ['a']],
	["classes: 'a b'", ['a', 'b']],
	["classes: 'a b c'", ['a', 'b', 'c']],
	['classes: "a"', ['a']],
	['classes: "a b"', ['a', 'b']],
	['classes: "a b c"', ['a', 'b', 'c']],
	['classes: `a`', ['a']],
	['classes: `a b`', ['a', 'b']],
	['classes: `a b c`', ['a', 'b', 'c']],
	["CLASSES: 'a'", ['a']],
	["CLASSES: 'a b'", ['a', 'b']],
	["CLASSES: 'a b c'", ['a', 'b', 'c']],
	["classes :'a'", ['a']],
	["classes :'a b'", ['a', 'b']],
	["classes :'a b c'", ['a', 'b', 'c']],
	["classes:\n'a'", ['a']],
	["classes:\n'a b'", ['a', 'b']],
	["classes:\n'a b c'", ['a', 'b', 'c']],
	["classes:\n\t'a'", ['a']],
	["classes:\n\t'a b'", ['a', 'b']],
	["classes:\n\t'a b c'", ['a', 'b', 'c']],
	["classes:\n  \t \n 'a'", ['a']],
	["classes:\n  \t \n 'a b'", ['a', 'b']],
	["classes:\n  \t \n 'a b c'", ['a', 'b', 'c']],
	["classes\n \n:\n  \t \n 'a b c'", ['a', 'b', 'c']],
	['classes=" a \n b "', ['a', 'b']],
	["aclasses: 'a b c'", ['a', 'b', 'c']],
	["Aclasses: 'a b c'", ['a', 'b', 'c']],
	["_classes: 'a b c'", ['a', 'b', 'c']],
	["dcLaSses: 'a b c'", ['a', 'b', 'c']],
	// ignore optional Svelte expressions
	['classes="{a}"', []],
	['classes="{a}a"', []],
	['classes="a{a}"', []],
	['classes="a{a}a"', []],
	['classes="a {b} c"', ['a', 'c']],
	['classes="a {b}b c"', ['a', 'c']],
	['classes="a b{b} c"', ['a', 'c']],
	['classes="{b}b c"', ['c']],
	['classes="b{b} c"', ['c']],
	['classes="b{b}b c"', ['c']],
	['classes="a {b}b"', ['a']],
	['classes="a b{b}"', ['a']],
	['classes="a b{b}b"', ['a']],
	[`classes="{0} a {'b' + 'c'} d {'e'}"`, ['a', 'd']],
	[`classes="{0} a {'b' + 'ccc\${c}cc'} d {e}e f {fn(g, h)} i"`, ['a', 'd', 'f', 'i']],
	// same as above but JS template strings
	['classes="${a}"', []],
	['classes="${a}a"', []],
	['classes="a${a}"', []],
	['classes="a${a}a"', []],
	['classes="a ${b} c"', ['a', 'c']],
	['classes="a ${b}b c"', ['a', 'c']],
	['classes="a b${b} c"', ['a', 'c']],
	['classes="${b}b c"', ['c']],
	['classes="b${b} c"', ['c']],
	['classes="b${b}b c"', ['c']],
	['classes="a ${b}b"', ['a']],
	['classes="a b${b}"', ['a']],
	['classes="a b${b}b"', ['a']],
	[`classes="\${0} a \${'b' + 'c'} d \${'e'}"`, ['a', 'd']],
	[`classes="\${0} a \${'b' + 'ccc\${c}cc'} d \${e}e f \${fn(g, h)} i"`, ['a', 'd', 'f', 'i']],
	// putting it all together
	[
		`foo;
const classes = 'a b';
const more_classes = 'c d';
<C class="e f" classes="g {g2} h" />
{classes: 'i j', class: 'k l'}
bar;
		`,
		['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
	],
];

for (const [contents, expected] of values) {
	test(`collects CSS classes from a string of Svelte or TS with expression \`${contents}\``, () => {
		const found = collect_css_classes(contents);
		console.log(`found`, found);
		assert.equal(
			Array.from(found),
			expected,
			`failed to collect classes for input \`${contents}\``,
		);
	});
}

test.run();
