import type {ComponentProps, ComponentType, SvelteComponent} from 'svelte';

import type Dialog from '$lib/Dialog.svelte';

// TODO @multiple added this hack with Svelte 4, didn't see an open issue about it
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

/**
 * This helper function is needed to construct `Dialog_Params` with type safety.
 * It uses TypeScript's inferred generics for functions,
 * which do not work for plain objects as of v5.0.4.
 * * `ContextmenuParams` uses a similar strategy.
 */
export const to_dialog_params = <T extends SvelteComponent>(
	Component: ComponentType<T>,
	props: ComponentProps<T>,
	dialog_props?: ComponentProps<Dialog>,
): Dialog_Params<T> => ({
	Component,
	props,
	dialog_props,
});

/**
 * This pattern is based on:
 * https://github.com/ivanhofer/sveltekit-typescript-showcase/blob/main/src/01-props/09-svelte-component/Component.svelte
 * The main limitation is that the generic cannot be inferred automatically,
 * so we use `to_dialog_params` to construct instances in most cases.
 * Definining `Dialog_Params` with no concrete `T` lacks typechecking for `props`.
 */
export interface Dialog_Params<T extends SvelteComponent = SvelteComponent> {
	Component: ComponentType<T>;
	props: ComponentProps<T>;
	dialog_props?: ComponentProps<Dialog> | undefined;
}

export type Dialog_Layout = 'centered' | 'page';
export const dialog_layouts: Dialog_Layout[] = ['centered', 'page'];
