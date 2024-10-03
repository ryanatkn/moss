import type {Create_Gro_Config} from '@ryanatkn/gro';

import {gro_plugin_moss_css} from '$lib/gro_plugin_moss_css.js';

// TODO delete this after being added to Gro's base config (try/catch around a blind import)

export const config: Create_Gro_Config = (cfg) => {
	const get_base_plugins = cfg.plugins;
	cfg.plugins = async (ctx) => [gro_plugin_moss_css()].concat(await get_base_plugins(ctx));
	return cfg;
};

export default config;