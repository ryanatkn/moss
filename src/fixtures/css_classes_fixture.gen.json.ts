import type {Gen} from '@ryanatkn/gro';

import {css_classes_by_name} from '$lib/css_classes.js';

export const gen: Gen = () => {
	return JSON.stringify(css_classes_by_name, null, '\t');
};
