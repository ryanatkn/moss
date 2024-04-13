import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
import {getContext, setContext} from 'svelte';

const KEY = Symbol('pkg');

export const set_pkg = (pkg: Package_Meta): Package_Meta => setContext(KEY, pkg);

export const get_pkg = (): Package_Meta => getContext(KEY);
