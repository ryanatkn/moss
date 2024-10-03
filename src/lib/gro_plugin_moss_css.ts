import {EMPTY_OBJECT} from '@ryanatkn/belt/object.js';
import type {Plugin} from '@ryanatkn/gro/plugin.js';
import type {Args} from '@ryanatkn/gro/args.js';
import {throttle} from '@ryanatkn/gro/throttle.js';
import type {Cleanup_Watch} from '@ryanatkn/gro/filer.js';
import {Unreachable_Error} from '@ryanatkn/belt/error.js';
import {format_file} from '@ryanatkn/gro/format_file.js';

import {collect_css_classes, Css_Classes} from '$lib/css_class_helpers.js';
import {css_classes_by_name} from '$lib/css_classes.js';
import {writeFileSync} from 'fs';

export const generate_classes_css = (classes: Iterable<string>): string => {
	let css = '';
	for (const c of classes) {
		const v = css_classes_by_name[c];
		if (!v) {
			console.log('unknown class', c);
			continue;
		}
		css += `.${c} { ${v.value} }\n`;
	}

	return css;
};

const FLUSH_DEBOUNCE_DELAY = 500;

export interface Task_Args extends Args {
	watch?: boolean;
}

export interface Options {
	include_classes?: string[] | Set<string> | null;
	outfile?: string;
	flush_debounce_delay?: number;
}

export const gro_plugin_moss_css = ({
	include_classes = null,
	outfile = 'src/routes/moss.css', // TODO BLOCK what about multiple files using file filters to check where to collect them?
	flush_debounce_delay = FLUSH_DEBOUNCE_DELAY,
}: Options = EMPTY_OBJECT): Plugin => {
	const css_classes = new Css_Classes(
		Array.isArray(include_classes) ? new Set(include_classes) : include_classes,
	);

	let flushing_timeout: NodeJS.Timeout | undefined;
	const queue_gen = () => {
		console.log(`queue_gen`);
		if (flushing_timeout === undefined) {
			flushing_timeout = setTimeout(() => {
				flushing_timeout = undefined;
				void flush_gen_queue();
			}); // the timeout batches synchronously
		}
	};
	const flush_gen_queue = throttle(
		async () => {
			// TODO BLOCK this is taken care of by the throttle function, right?
			// hacky way to avoid concurrent `gro gen` calls
			// if (generating) {
			// 	regen = true;
			// 	return;
			// }
			// generating = true;
			const sorted = Array.from(css_classes.get()).sort((a, b) => a.localeCompare(b));
			const css = generate_classes_css(sorted);
			console.log('WRITING FILE', css.length);
			const formatted = await format_file(css, {filepath: outfile});
			writeFileSync(outfile, formatted); // TODO BLOCK what if this was implemented using gen?
			// generating = false;
			// if (regen) {
			// 	regen = false;
			// 	void flush_gen_queue();
			// }
		},
		flush_debounce_delay,
		false,
	);

	let cleanup: Cleanup_Watch | undefined;

	return {
		name: 'gro_plugin_gen',
		setup: async ({filer}) => {
			// When a file builds, check it and its tree of dependents
			// for any `.gen.` files that need to run.
			cleanup = await filer.watch((change, source_file) => {
				console.log(`change, source_file.id`, change.type, source_file.id);
				switch (change.type) {
					case 'add':
					case 'update': {
						if (source_file.contents !== null) {
							const classes = collect_css_classes(source_file.contents);
							console.log(`COLLECTED classes`, classes);
							css_classes.add(source_file.id, classes);
							queue_gen();
						}
						break;
					}
					case 'delete': {
						css_classes.delete(source_file.id);
						break;
					}
					default:
						throw new Unreachable_Error(change.type);
				}
			});
			console.log('inited'); // TODO BLOCK should this re-enable generation now?
			queue_gen();
		},
		teardown: async () => {
			if (cleanup !== undefined) {
				await cleanup();
				cleanup = undefined;
			}
		},
	};
};
