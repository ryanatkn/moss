import {test} from 'uvu';
import * as assert from 'uvu/assert';

import css_animations from '$lib/style_animations.css?raw';

test('variables in the CSS exist', () => {
	console.log(`css_animations`, css_animations);
	assert.ok(css_animations);
});

test.run();
