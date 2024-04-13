import {getContext, setContext} from 'svelte';
import {writable, type Writable} from 'svelte/store';

import type {Style_Variable} from '$lib/theme.js';

// TODO @multiple add to $lib?

const SELECTED_VARIABLE_KEY = Symbol('selected_variable');

export const set_selected_variable = (
	value: Writable<Style_Variable | null> = writable(null),
): Writable<Style_Variable | null> => setContext(SELECTED_VARIABLE_KEY, value);

export const get_selected_variable = (): Writable<Style_Variable | null> =>
	getContext(SELECTED_VARIABLE_KEY);
