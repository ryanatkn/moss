import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {is_style_variable_name} from '$lib/variable.js';

test('is_style_variable_name', () => {
	// valid names
	assert.ok(is_style_variable_name('a'));
	assert.ok(is_style_variable_name('ab'));
	assert.ok(is_style_variable_name('a_b'));
	assert.ok(is_style_variable_name('a_9'));
	assert.ok(is_style_variable_name('a_b_c'));
	// invalid
	assert.ok(!is_style_variable_name('A'));
	assert.ok(!is_style_variable_name('_a'));
	assert.ok(!is_style_variable_name('_a_b'));
	assert.ok(!is_style_variable_name('a_'));
	assert.ok(!is_style_variable_name('a_b_'));
	assert.ok(!is_style_variable_name('a-b'));
	assert.ok(!is_style_variable_name('a_B'));
	assert.ok(!is_style_variable_name('9'));
	assert.ok(!is_style_variable_name('9a'));
	assert.ok(!is_style_variable_name('9_a'));
});

test.run();
