import {getContext, onDestroy, setContext, type Snippet} from 'svelte';
import type {Result} from '@ryanatkn/belt/result.js';
import {is_promise} from '@ryanatkn/belt/async.js';
import type {ActionReturn} from 'svelte/action';

import {Dimensions} from '$lib/dimensions.svelte.js';

// TODO @multiple added this hack with Svelte 4, didn't see an open issue about it
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

export type Contextmenu_Params =
	| Snippet
	// TODO maybe this should be generic?
	| {snippet: 'link'; props: {href: string; icon?: string}}
	| {snippet: 'text'; props: {content: string; icon: string; run: Contextmenu_Run}};

type Activate_Result = Result<any, {message?: string}> | any;

export type Item_State = Submenu_State | Entry_State;

export class Entry_State {
	readonly is_menu = false; // TODO rename to `type`?
	readonly menu: Submenu_State | Root_Menu_State;

	selected: boolean = $state(false);
	run: Contextmenu_Run = $state()!;
	pending: boolean = $state(false);
	error_message: string | null = $state(null);
	promise: Promise<any> | null = $state(null);

	constructor(menu: Submenu_State | Root_Menu_State, run: Contextmenu_Run) {
		this.menu = menu;
		this.run = run;
	}
}

export class Submenu_State {
	readonly is_menu = true;
	readonly menu: Submenu_State | Root_Menu_State;
	readonly depth: number;

	selected: boolean = $state(false);
	items: Item_State[] = $state([]);

	constructor(menu: Submenu_State | Root_Menu_State, depth: number) {
		this.menu = menu;
		this.depth = depth;
	}
}

export class Root_Menu_State {
	readonly is_menu = true;
	readonly menu = null;
	readonly depth = 1;

	items: Item_State[] = $state([]);
}

export interface Contextmenu_Run {
	(): unknown | Promise<Activate_Result>;
}

export interface Contextmenu_Store_Options {
	link_snippet?: [href: string, icon?: Snippet<[icon: string]>];
	text_snippet?: [content: string, icon: string];
	layout?: Dimensions; // TODO consider making this a prop on `Contextmenu_Root`, and being assigned here
}

/**
 * Creates a `contextmenu` store.
 * See usage with `Contextmenu_Root.svelte` and `Contextmenu.svelte`.
 */
export class Contextmenu_Store {
	layout: Dimensions; // TODO $state?
	/**
	 * If an initial layout is provided, control is deferred externally.
	 * Otherwise the layout syncs to the page dimensions.
	 */
	initial_layout: Dimensions | undefined; // TODO $state?

	// State for external consumers.
	opened: boolean = $state(false);
	x: number = $state(0);
	y: number = $state(0);
	params: Contextmenu_Params[] = $state([]);
	error: string | undefined = $state();

	// These two properties are mutated internally.
	// If you need reactivity, use `$contextmenu` in a reactive statement to react to all changes, and
	// then access the mutable non-reactive  `contextmenu.root_menu` and `contextmenu.selections`.
	// See `Contextmenu_Entry.svelte` and `Contextmenu_Submenu.svelte` for reactive usage examples.
	root_menu: Root_Menu_State = $state(new Root_Menu_State());
	selections: Item_State[] = $state([]);

	constructor(options?: Contextmenu_Store_Options) {
		this.initial_layout = options?.layout;

		this.layout = this.initial_layout || new Dimensions();
	}

	open(params: Contextmenu_Params[], x: number, y: number): void {
		this.selections.length = 0;
		this.opened = true;
		this.x = x;
		this.y = y;
		this.params = params;
	}

	close(): void {
		if (!this.opened) return;
		this.reset_items(this.root_menu.items);
		this.opened = false;
	}

	reset_items(items: Item_State[]): void {
		for (const item of items) {
			if (item.is_menu) {
				this.reset_items(item.items);
			} else {
				if (item.promise !== null) item.promise = null;
				if (item.error_message !== null) item.error_message = null;
			}
		}
	}

	activate(item: Item_State): boolean | Promise<Activate_Result> {
		if (item.is_menu) {
			this.expand_selected();
		} else {
			let returned;
			try {
				returned = item.run();
			} catch (err) {
				const message = typeof err?.message === 'string' ? err.message : undefined;
				item.error_message = message ?? 'unknown error';
				this.error = message;
			}
			if (is_promise(returned)) {
				item.pending = true;
				item.error_message = null;
				const promise = (item.promise = returned
					.then(
						(result) => {
							if (promise !== item.promise) return;
							if (typeof result?.ok === 'boolean') {
								if (result.ok) {
									this.close();
								} else {
									const message = typeof result.message === 'string' ? result.message : undefined;
									item.error_message = message ?? 'unknown error';
									this.error = message;
								}
							} else {
								this.close();
							}
							return result;
						},
						(err) => {
							if (promise !== item.promise) return;
							const message = typeof err?.message === 'string' ? err.message : undefined;
							item.error_message = message ?? 'unknown error';
							this.error = message;
						},
					)
					.finally(() => {
						if (promise !== item.promise) return;
						item.pending = false;
						item.promise = null;
					}));
				return item.promise; // async path
			}
			this.close(); // synchronous path only
		}
		return true;
	}

	activate_selected(): void | boolean | Promise<Activate_Result> {
		const selected = this.selections.at(-1)!;
		return selected ? this.activate(selected) : this.select_first();
	}

	// Instead of diffing, this does the simple thing and
	// deselects everything and then re-creates the list of selections.
	// Could be improved but it's fine because we're using mutation and the N is very small,
	// and it allows us to have a single code path for the various selection methods.
	/**
	 * Activates the selected entry, or if none, selects the first.
	 */
	select(item: Item_State): void {
		if (this.selections.at(-1)! === item) return;
		for (const s of this.selections) s.selected = false;
		this.selections.length = 0;
		let i: Item_State | Root_Menu_State = item;
		do {
			i.selected = true;
			this.selections.unshift(i);
		} while ((i = i.menu) && i.menu);
	}

	collapse_selected(): void {
		if (this.selections.length <= 1) return;
		const deselected = this.selections.pop()!;
		deselected.selected = false;
	}

	expand_selected(): void {
		const parent = this.selections.at(-1)!;
		if (!parent?.is_menu) return;
		const selected = parent.items[0];
		selected.selected = true;
		this.selections.push(selected);
	}

	select_next(): void {
		if (!this.selections.length) return this.select_first();
		const item = this.selections.at(-1)!;
		const index = item.menu.items.indexOf(item);
		this.select(item.menu.items[index === item.menu.items.length - 1 ? 0 : index + 1]);
	}

	select_previous(): void {
		if (!this.selections.length) return this.select_last();
		const item = this.selections.at(-1)!;
		const index = item.menu.items.indexOf(item);
		this.select(item.menu.items[index === 0 ? item.menu.items.length - 1 : index - 1]);
	}

	select_first(): void {
		this.select((this.selections.at(-1)?.menu || this.root_menu).items[0]);
	}

	select_last(): void {
		const {items} = this.selections.at(-1)?.menu || this.root_menu;
		return this.select(items.at(-1)!);
	}

	/**
	 * Used by `Contextmenu_Entry` and custom entry components
	 * @initializes
	 */
	add_entry(run: Contextmenu_Run): Entry_State {
		const menu = get_contextmenu_submenu() || this.root_menu;
		const entry = new Entry_State(menu, run);
		menu.items.push(entry);
		// TODO messy, runs more than needed
		onDestroy(() => {
			menu.items.length = 0;
		});
		return entry;
	}

	/**
	 * @initializes
	 */
	add_submenu(): Submenu_State {
		const menu = get_contextmenu_submenu() || this.root_menu;
		const submenu = new Submenu_State(menu, menu.depth + 1);
		menu.items.push(submenu);
		set_contextmenu_submenu(submenu);
		// TODO messy, runs more than needed
		onDestroy(() => {
			menu.items.length = 0;
		});
		return submenu;
	}
}

// The dataset key must not have capital letters or dashes or it'll differ between JS and DOM:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
const CONTEXTMENU_DATASET_KEY = 'contextmenu';
const CONTEXTMENU_DOM_QUERY = `a,[data-${CONTEXTMENU_DATASET_KEY}]`;
const contextmenu_cache = new Map<string, Contextmenu_Params | Contextmenu_Params[]>();
let cache_key_counter = 0;

export const contextmenu_action = <T extends Contextmenu_Params, U extends T | T[]>(
	el: HTMLElement | SVGElement,
	params: U,
): ActionReturn<U> => {
	const key = cache_key_counter++ + '';
	el.dataset[CONTEXTMENU_DATASET_KEY] = key;
	contextmenu_cache.set(key, params);
	return {
		update: (p: U) => {
			contextmenu_cache.set(key, p);
		},
		destroy: () => {
			contextmenu_cache.delete(key);
		},
	};
};

const CONTEXTMENU_OPEN_VIBRATE_DURATION = 17;

/**
 * Opens the contextmenu, if appropriate,
 * querying the menu items from the DOM starting at the event target.
 * @param target - the leaf element from which to open the contextmenu
 * @param x - the page X coordinate at which to open the contextmenu, typically the mouse `pageX`
 * @param y - the page Y coordinate at which to open the contextmenu, typically the mouse `pageY`
 * @param contextmenu - the contextmenu store
 * @returns a boolean indicating if the menu was opened or not
 */
export const open_contextmenu = (
	target: HTMLElement | SVGElement,
	x: number,
	y: number,
	contextmenu: Contextmenu_Store,
): boolean => {
	const params = query_contextmenu_params(target);
	if (!params?.length) return false;
	contextmenu.open(params, x, y);
	// Unfortunately `vibrate` this gets blocked by some (all?) browsers the way we're doing it
	// outside of a user interaction in a custom `longpress` gesture that triggers on a timeout,
	// which exists only because iOS doesn't support the contextmenu event.
	navigator.vibrate?.(CONTEXTMENU_OPEN_VIBRATE_DURATION);
	return true;
};

const query_contextmenu_params = (
	target: HTMLElement | SVGElement,
): null | Contextmenu_Params[] => {
	let params: null | Contextmenu_Params[] = null;
	// crawl DOM for contextmenu entries
	let el: HTMLElement | SVGElement | null | undefined = target;
	let cache_key: string, cached: Contextmenu_Params | Contextmenu_Params[] | undefined;
	while ((el = el?.closest(CONTEXTMENU_DOM_QUERY))) {
		if ((cache_key = el.dataset[CONTEXTMENU_DATASET_KEY]!)) {
			if (!params) params = [];
			cached = contextmenu_cache.get(cache_key);
			if (cached === undefined) {
				continue;
			}
			// preserve bubbling order
			if (Array.isArray(cached)) {
				(params || (params = [])).push(...cached);
			} else {
				(params || (params = [])).push(cached);
			}
		}
		if (el.tagName === 'A') {
			(params || (params = [])).push({
				snippet: 'link',
				props: {href: (el as HTMLAnchorElement).href},
			});
		}
		el = el.parentElement;
	}
	// add "Copy text" entry if anything is selected and we have any other entries
	if (params) {
		const text = window.getSelection()?.toString();
		if (text) {
			params.unshift({
				snippet: 'text',
				props: {
					content: 'Copy text',
					icon: '📋',
					run: () => void navigator.clipboard.writeText(text),
				},
			});
		}
	}
	return params;
};

const CONTEXTMENU_STORE_KEY = Symbol();
export const set_contextmenu = (contextmenu: Contextmenu_Store): Contextmenu_Store =>
	setContext(CONTEXTMENU_STORE_KEY, contextmenu);
export const get_contextmenu = (): Contextmenu_Store => getContext(CONTEXTMENU_STORE_KEY);

const CONTEXTMENU_STATE_KEY = Symbol();
export const set_contextmenu_submenu = (submenu: Submenu_State): Submenu_State =>
	setContext(CONTEXTMENU_STATE_KEY, submenu);
export const get_contextmenu_submenu = (): Submenu_State | undefined =>
	getContext(CONTEXTMENU_STATE_KEY);

const CONTEXTMENU_DIMENSIONS_STORE_KEY = Symbol();
export const set_contextmenu_dimensions = (dimensions = new Dimensions()): Dimensions => {
	setContext(CONTEXTMENU_DIMENSIONS_STORE_KEY, dimensions);
	return dimensions;
};
export const get_contextmenu_dimensions = (): Dimensions =>
	getContext(CONTEXTMENU_DIMENSIONS_STORE_KEY);
