import {test, assert} from 'vitest';

import {tomes} from '$routes/docs/tomes.js';

// `related` data is denormalized but probably shouldn't be - delete if the data structure no longer needs the check.
// This also ensures we don't accidentally use
test('tomes have valid `related` tomes', () => {
	for (const tome of tomes) {
		for (const related_tome_name of tome.related_tomes) {
			const t = tomes.find((t) => t.name === related_tome_name);
			assert.ok(
				t,
				`expected to find tome with name "${related_tome_name}" referenced by tome named "${tome.name}"`,
			);
			assert.ok(
				t.related_tomes.includes(tome.name),
				`expected tome named "${t.name}" to have related tome name "${tome.name}"`,
			);
		}
	}
});
