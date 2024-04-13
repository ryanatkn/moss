export const prerender = true;
// TODO BLOCK remove this when we find that sneaky div in a p
// it also causes a bug in Vite with Prism that requires deleting the Vite cache directory,
// though I don't see an open issue, only the closed one
// if for some reason this isn't deleted, be sure to add a `noscript` tag
export const ssr = false;
