import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {default_variables} from '$lib/variables.js';
import * as exported_variables from '$lib/variables.js';
import type {Style_Variable} from '$lib/theme.js';

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
		const exported = (exported_variables as any)[identifier];
		if (!is_style_variable(exported)) continue;
		assert.is(
			identifier,
			exported.name,
			`variable identifier "${identifier}" does not match its name ${exported.name}`,
		);
		assert.ok(
			default_variables.some((v) => v.name === identifier),
			`exported variable with identifier "${identifier}" is not included in \`default_variables\``,
		);
	}
});

// TODO test color_variants

test.run();

// TODO extract?
const is_style_variable = (v: any): v is Style_Variable => typeof v === 'object' && 'name' in v;
