import {Url} from '@ryanatkn/gro/paths.js';
import type {Logger} from '@ryanatkn/belt/log.js';
import {join} from 'node:path';
import {z} from 'zod';

export const Fuz_Config = z
	.object({
		deployments: z.array(Url),
	})
	.strict();
export type Fuz_Config = z.infer<typeof Fuz_Config>;

export const load_fuz_config = async (
	path: string,
	dir: string,
	log?: Logger,
): Promise<Fuz_Config> => {
	const config = (await import(join(dir, path))).default; // TODO error handling
	try {
		return Fuz_Config.parse(config);
	} catch (err) {
		try {
			log?.error(`invalid ${path}: ${JSON.parse(err.message)[0].message}`);
		} catch (err) {}
		throw err;
	}
};
