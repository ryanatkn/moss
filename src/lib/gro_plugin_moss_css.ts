//
import {EMPTY_OBJECT} from '@ryanatkn/belt/object.js';
import type {Plugin} from '@ryanatkn/gro/plugin.js';
import type {Args} from '@ryanatkn/gro/args.js';
import {throttle} from '@ryanatkn/gro/throttle.js';
import {spawn_cli} from '@ryanatkn/gro/cli.js';
import type {Cleanup_Watch} from '@ryanatkn/gro/filer.js';
import {Unreachable_Error} from '@ryanatkn/belt/error.js';

const FLUSH_DEBOUNCE_DELAY = 500;

export interface Task_Args extends Args {
	watch?: boolean;
}

export interface Options {
	flush_debounce_delay?: number;
}

export const gro_plugin_moss_css = ({
	flush_debounce_delay = FLUSH_DEBOUNCE_DELAY,
}: Options = EMPTY_OBJECT): Plugin => {
	let generating = false;
	let regen = false;
	let flushing_timeout: NodeJS.Timeout | undefined;
	const queued_files: Set<string> = new Set();
	const queue_gen = (gen_file_id: string) => {
		console.log(`queue_gen gen_file_id`, gen_file_id);
		queued_files.add(gen_file_id);
		if (flushing_timeout === undefined) {
			flushing_timeout = setTimeout(() => {
				flushing_timeout = undefined;
				void flush_gen_queue();
			}); // the timeout batches synchronously
		}
	};
	const flush_gen_queue = throttle(async () => {
		// hacky way to avoid concurrent `gro gen` calls
		if (generating) {
			regen = true;
			return;
		}
		generating = true;
		const files = Array.from(queued_files);
		queued_files.clear();
		await gen(files);
		generating = false;
		if (regen) {
			regen = false;
			void flush_gen_queue();
		}
	}, flush_debounce_delay);
	const gen = (files: string[] = []) => spawn_cli('gro', ['gen', ...files]);

	let cleanup: Cleanup_Watch | undefined;

	return {
		name: 'gro_plugin_gen',
		setup: async ({watch, filer}) => {
			// Do we need to just generate everything once and exit?
			if (!watch) {
				// TODO BLOCK ?
				return;
			}

			// When a file builds, check it and its tree of dependents
			// for any `.gen.` files that need to run.
			cleanup = await filer.watch((change, source_file) => {
				console.log(`change, source_file.id`, change.type, source_file.id);
				switch (change.type) {
					case 'add':
					case 'update': {
						// TODO BLOCK
						break;
					}
					case 'delete': {
						// TODO BLOCK
						break;
					}
					default:
						throw new Unreachable_Error(change.type);
				}
			});
		},
		teardown: async () => {
			if (cleanup !== undefined) {
				await cleanup();
				cleanup = undefined;
			}
		},
	};
};
