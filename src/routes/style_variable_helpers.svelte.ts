import {getContext, setContext} from 'svelte';

import type {Style_Variable} from '$lib/variable.js';

// TODO maybe change this to a generic wrapper class for any value?
// TODO @many add to $lib?
export class Selected_Style_Variable {
	value: Style_Variable | null = $state()!;

	constructor(initial: Style_Variable | null = null) {
		this.value = initial;
	}
}

const SELECTED_VARIABLE_KEY = Symbol('selected_variable');

export const set_selected_variable = (
	value = new Selected_Style_Variable(null),
): Selected_Style_Variable => setContext(SELECTED_VARIABLE_KEY, value);

export const get_selected_variable = (): Selected_Style_Variable =>
	getContext(SELECTED_VARIABLE_KEY);
