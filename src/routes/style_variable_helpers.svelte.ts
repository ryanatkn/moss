import {create_context} from '@ryanatkn/fuz/context_helpers.js';

import type {Style_Variable} from '$lib/variable.js';

// TODO maybe change this to a generic wrapper class for any value?
// TODO @many add to $lib?
export class Selected_Style_Variable {
	value: Style_Variable | null = $state()!;

	constructor(initial: Style_Variable | null = null) {
		this.value = initial;
	}
}

export const selected_variable_context = create_context(() => new Selected_Style_Variable(null));
