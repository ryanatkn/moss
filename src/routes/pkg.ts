import type {Pkg} from '@ryanatkn/fuz/pkg.svelte.js';
import {create_context} from '@ryanatkn/fuz/context_helpers.js';

export const pkg_context = create_context<Pkg>();
