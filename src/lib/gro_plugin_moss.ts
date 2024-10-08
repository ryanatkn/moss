import {EMPTY_OBJECT} from '@ryanatkn/belt/object.js';
import type {Plugin} from '@ryanatkn/gro/plugin.js';
import type {Args} from '@ryanatkn/gro/args.js';
import {throttle} from '@ryanatkn/gro/throttle.js';
import type {Cleanup_Watch} from '@ryanatkn/gro/filer.js';
import {Unreachable_Error} from '@ryanatkn/belt/error.js';
import {format_file} from '@ryanatkn/gro/format_file.js';
import type {File_Filter} from '@ryanatkn/gro/path.js';
import {writeFileSync} from 'node:fs';

import {collect_css_classes, Css_Classes} from '$lib/css_class_helpers.js';
import {css_classes_by_name} from '$lib/css_classes.js';

export const generate_classes_css = (classes: Iterable<string>): string => {
	let css = '';
	for (const c of classes) {
		const v = css_classes_by_name[c];
		if (!v) {
			// diagnostic
			// if (!/^[a-z_0-9]+$/.test(c)) {
			// 	console.error('invalid class detected, fix the regexps', c);
			// }
			continue;
		}
		if ('declaration' in v) {
			css += `.${c} { ${v.declaration} }\n`;
		} else {
			css += v.ruleset + '\n';
		}
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
	filter_file?: File_Filter | null;
	flush_debounce_delay?: number;
}

export const gro_plugin_moss = ({
	include_classes = null,
	outfile = 'src/routes/moss.css', // TODO maybe support multiple files using file filters to check where to collect them?
	filter_file = (p) => !p.includes('.test.') && !p.includes('/test/'),
	flush_debounce_delay = FLUSH_DEBOUNCE_DELAY,
}: Options = EMPTY_OBJECT): Plugin => {
	const css_classes = new Css_Classes(
		Array.isArray(include_classes) ? new Set(include_classes) : include_classes,
	);

	let previous_output: string | undefined;

	let flushing_timeout: NodeJS.Timeout | undefined;
	const queue_gen = () => {
		if (flushing_timeout === undefined) {
			flushing_timeout = setTimeout(() => {
				flushing_timeout = undefined;
				void flush_gen_queue();
			}); // the timeout batches synchronously
		}
	};
	const flush_gen_queue = throttle(
		async () => {
			const css = generate_classes_css(css_classes.get_sorted_array());
			const output = await format_file(css, {filepath: outfile});
			// TODO think about using gen to implement this, would have some nice benefits like automatic change detection
			if (output === previous_output) return;
			previous_output = output;
			writeFileSync(outfile, output);
		},
		flush_debounce_delay,
		false,
	);

	let cleanup: Cleanup_Watch | undefined;

	return {
		name: 'gro_plugin_moss',
		setup: async ({filer}) => {
			// When a file builds, check it and its tree of dependents
			// for any `.gen.` files that need to run.
			cleanup = await filer.watch((change, source_file) => {
				if (filter_file && !filter_file(source_file.id)) {
					return;
				}
				switch (change.type) {
					case 'add':
					case 'update': {
						if (source_file.contents !== null) {
							const classes = collect_css_classes(source_file.contents);
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
