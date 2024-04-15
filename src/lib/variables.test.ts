import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {default_variables} from '$lib/variables.js';
import * as exported_variables from '$lib/variables.js';

test('variable names match their identifiers', () => {
	for (const v of default_variables) {
		assert.ok(
			v.name in exported_variables,
			`default variable with name "${v.name}" has no matching exported identifier`,
		);
	}
});

test('variable identifiers are all included in `default_variables`', () => {
	for (const identifier in exported_variables) {
		if (identifier === 'default_variables') continue;
		assert.ok(
			default_variables.some((v) => v.name === identifier),
			`exported variable with identifier "${identifier}" is not included in \`default_variables\``,
		);
	}
});

test.run();
