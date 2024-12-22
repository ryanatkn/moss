import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {collect_css_classes} from '$lib/css_class_helpers.js';

const values: Array<[contents: string, expected: Array<string>]> = [
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
	['class:a>', ['a']],
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
	// `classes = ` array declaration
	["classes = ['a']", ['a']],
	["classes = ['a', 'b']", ['a', 'b']],
	["classes = ['a', 'b', 'c']", ['a', 'b', 'c']],
	['classes = ["a", "b", "c"]', ['a', 'b', 'c']],
	['classes = [`a`, `b`, `c`]', ['a', 'b', 'c']],
	['classes = [\'a\', "b", `c`]', ['a', 'b', 'c']],
	[`classes = [\'a\', \'b\', \'c\']`, ['a', 'b', 'c']], // eslint-disable-line no-useless-escape
	['classes=[`a`, `b`, `c`]', ['a', 'b', 'c']],
	['classes=\n[`a`, `b`, `c`]', ['a', 'b', 'c']],
	['classes\n=[`a`, `b`, `c`]', ['a', 'b', 'c']],
	['classes\n = \n [`a`, `b`, `c`]', ['a', 'b', 'c']],
	['classes\n = \n [\n`a`,\n `b`,\n `c`\n]', ['a', 'b', 'c']],
	['classes = [a, b, c]', []],
	["classes = ['a', b, c]", ['a']],
	["classes = [a, 'b', c]", ['b']],
	["classes = [a, b, 'c']", ['c']],
	["classes = ['a', b, 'c']", ['a', 'c']],
	["classes = [a, 'b', 'c']", ['b', 'c']],
	["classes: ['a', 'b', 'c']", ['a', 'b', 'c']],
	["classes:['a', 'b', 'c']", ['a', 'b', 'c']],
	["classes:[\n'a', 'b', 'c']", ['a', 'b', 'c']],
	// multi-line array declarations
	[
		`classes = [
		 'a',
		 'b',
		 'c'
	 ]`,
		['a', 'b', 'c'],
	],
	[
		`classes = [
		 "a",
		 "b",
		 "c"
	 ]`,
		['a', 'b', 'c'],
	],
	// arrays with extra whitespace
	['classes = [ "a" , "b" , "c" ]', ['a', 'b', 'c']],
	['classes = [\n  "a",\n  "b",\n  "c"\n]', ['a', 'b', 'c']],
	// arrays with comments
	[
		`classes = [
		 'a', // first class
		 'b', // second class
		 'c'  // third class
	 ]`,
		['a', 'b', 'c'],
	],
	[
		`classes = [
		 'a', /* first class */
		 'b', /* second class */
		 'c'  /* third class */
	 ]`,
		['a', 'b', 'c'],
	],
	// arrays with mixed valid and invalid elements
	["classes = ['a', b, 'c']", ['a', 'c']],
	["classes = [a, 'b', c, 'd']", ['b', 'd']],
	["classes = ['a', 2, 'c', true, 'd']", ['a', 'c', 'd']],
	["Sclasses = ['a', 2, 'c', true, 'd']", ['a', 'c', 'd']],
	// arrays with escaped quotes
	[`classes = ['a\\'s', "b\\"s", \`c\\\`s\`]`, ["a's", 'b"s', 'c`s']],
	// arrays with template literals containing expressions
	['classes = [`a${x}`, `b${y}`, `c`]', ['c']],
	['classes = [`a`, `b${y}c`, `d`]', ['a', 'd']],
	['classes = [`a`, `a${x}`, `b${y}`]', ['a']],
	// arrays with string concatenation
	["classes = ['a' + 'b', 'c' + 'd']", []],
	["classes = ['a' + 'b', 'c', 'd']", ['c', 'd']],
	["classes = ['a', 'b' + 'c', 'd']", ['a', 'd']],
	["classes = ['a', 'b', 'c' + 'd']", ['a', 'b']],
	// array edge cases
	['classes = []', []],
	['classes = [""]', []],
	['classes = ["", ""]', []],
	['classes = [,,,]', []],
	["classes = ['a'", []],
	['classes = ["a",,"b",,,"c",]', ['a', 'b', 'c']],
	// nested arrays
	['classes = [["a", "b"], "c", ["d"]]', []], // TODO @many ideally fix instead of bailing, but maybe we need a real JS parser?
	['classes = ["a", ["b", "c"], "d"]', []], // TODO @many ideally fix instead of bailing, but maybe we need a real JS parser?
	// arrays in component prop
	['<Component classes={["a", "b", "c"]} />', ['a', 'b', 'c']],
	['<Component class={["a", "b", "c"]} />', ['a', 'b', 'c']],
	['<Component classes={ \n["a", "b", "c"]} />', ['a', 'b', 'c']],
	['<Component class={ \n["a", "b", "c"]} />', ['a', 'b', 'c']],
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
	[`classes="{0} a {'b' + 'ccc{c}cc'} d {e}e f {fn(g, '}}')} h"`, ['a', 'd', 'f', 'h']],
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
	[`classes="\${0} a \${'b' + 'ccc\${c}cc'} d \${e}e f \${fn(g, '}}')} h"`, ['a', 'd', 'f', 'h']],
	// unclosed quotes
	[`classes="a`, []],
	[`classes='a`, []],
	[`classes="a'`, []],
	// more expression corner cases
	[`classes="a {func({nested: 'object'})} b"`, ['a', 'b']],
	[`classes="a {\`string with \'escaped\' quotes\`} b"`, ['a', 'b']], // eslint-disable-line no-useless-escape
	['classes="a {func(\'string with {braces}\')} b"', ['a', 'b']],
	['classes="a {func(\'unbalanced)} b"', ['a', 'b']],
	['classes="a {`template ${with.expression}`} b"', ['a', 'b']],
	// nested objects
	[`classes="a {func({nested: 'object'})} b"`, ['a', 'b']],
	[`classes="a {func({nested: {deeper: 'object'}})} b"`, ['a', 'b']],
	[`classes="a {obj.prop} b"`, ['a', 'b']],
	[`classes="a {obj['prop']} b"`, ['a', 'b']],
	[`classes="a {obj[\`prop\`]} b"`, ['a', 'b']],
	// escaped quotes
	[`classes="a {'string with \\'escaped\\' quotes'} b"`, ['a', 'b']],
	// strings with braces
	['classes="a {func(\'string with {braces}\')} b"', ['a', 'b']],
	['classes="a {func(`string with {braces}`)} b"', ['a', 'b']],
	// unbalanced quotes (error cases, but should still be handled)
	['classes="a {func(\'unbalanced)} b"', ['a', 'b']],
	['classes="a {func(`unbalanced)} b"', ['a', 'b']],
	// template literals
	['classes="a {`template ${with.expression}`} b"', ['a', 'b']],
	['classes="a {`template ${with.nested.expression}`} b"', ['a', 'b']],
	['classes="a {`template ${1 + 2}`} b"', ['a', 'b']],
	// multiple expressions
	[`classes="a {expr1} b {expr2} c"`, ['a', 'b', 'c']],
	[`classes="{expr1} a {expr2} b {expr3} c"`, ['a', 'b', 'c']],
	// edge cases
	[`classes="a {/* comment */} b"`, ['a', 'b']],
	[`classes="a {// comment\\n} b"`, ['a', 'b']],
	[
		`classes="a {\`multi
	line
	template\`} b"`,
		['a', 'b'],
	],
	[`classes="a {10 > 5 ? 'greater' : 'lesser'} b"`, ['a', 'b']],
	[`classes="a {arr.map(item => item.name).join(' ')} b"`, ['a', 'b']],
	// complex nested structures
	[`classes="a {func({nested: ['array', 'with', {object: 'inside'}]})} b"`, ['a', 'b']],
	[`classes="a {\`template ${{key: 'value'}}\`} b"`, ['a', 'b']], // eslint-disable-line @typescript-eslint/no-base-to-string
	[`classes="a {\`outer ${'nested'} template\`} b"`, ['a', 'b']], // eslint-disable-line @typescript-eslint/no-unnecessary-template-expression
	// empty expressions
	[`classes="a {} b"`, ['a', 'b']],
	[`classes="{} a {} b {}"`, ['a', 'b']],
	// expressions at start/end
	[`classes="{expr} a b"`, ['a', 'b']],
	[`classes="a b {expr}"`, ['a', 'b']],
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
		assert.equal(
			Array.from(found),
			expected,
			`failed to collect classes for input \`${contents}\``,
		);
	});
}

test.run();
