// TODO uncomment when Gro supports Svelte 5

// import {test} from 'uvu';
// import * as assert from 'uvu/assert';

// import {tomes} from '$routes/library/tomes.js';

// // Slug `related` data is denormalized but probably shouldn't be - delete if the data structure no longer needs the check.
// // This also ensures we don't accidentally use
// test('tomes have valid `related` tomes', () => {
// 	for (const tome of tomes) {
// 		for (const related_tome_slug of tome.related) {
// 			const t = tomes.find((t) => t.slug === related_tome_slug);
// 			assert.ok(
// 				t,
// 				`expected to find tome with slug "${related_tome_slug}" referenced by tome named "${tome.name}"`,
// 			);
// 			assert.ok(
// 				t.related.includes(tome.slug),
// 				`expected tome named "${t.name}" to have related tome slug "${tome.slug}"`,
// 			);
// 		}
// 	}
// });

// test.run();
