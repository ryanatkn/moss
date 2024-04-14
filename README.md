[<img src="/static/favicon.png" align="right" width="192" height="192">](https://moss.ryanatkn.com/)

# @ryanatkn/moss 🌿

> magical organic stylesheets

[**moss.ryanatkn.com**](https://moss.ryanatkn.com/)

Moss is a CSS framework that can be used with any website and JS framework.
It grows a full styling system around _style variables_,
which are a Moss specialization of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

Usage can be as simple as importing a single stylesheet,
and it's built with a data-driven approach that makes its insides available in many forms,
like deconstructed CSS files and
TypeScript modules that provide data, types, and helpers around the variable and build systems.
It's in early alpha and there will be many breaking changes.

Moss is being made to support [my other projects](https://www.ryanatkn.com/table)
that focus on end-users.
Moss emphasizes capability and efficiency and tries to be simple for those goals.
Compared to most UI libraries, Moss has fewer features and more opinions.

To learn more see [the docs](https://moss.ryanatkn.com/library) and [contributing.md](contributing.md).
Feel free to take the ideas and code for your own purposes.

About Moss:

- plain CSS
- designed around variables aka style variables aka design tokens,
  a specialization of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
  - variables are a more primitive building block than classes
  - includes optional utility and semantic classes that use the variables
- the only required parts of the library are `@ryanatkn/moss/style.css` and either
  `@ryanatkn/moss/theme.css` or your own theme file, everything else can be used a la carte
- supports [`color-scheme` and custom themes](https://moss.ryanatkn.com/library/theme)
  (including dark mode)
- zero dependencies except for Svelte
- styles HTML tags directly, so you don't need to add `.btn` to buttons
  - encourages plain HTML elements like `button` and `a` over Svelte components
    unless the gains are substantial
- stylesheets:
  - [`@ryanatkn/moss/style.css`](/src/lib/style.css), which is composed of:
    - [`@ryanatkn/moss/style_reset.css`](/src/lib/style_reset.css) - required
    - [`@ryanatkn/moss/style_utilities.css`](/src/lib/style_utilities.css) - optional
    - [`@ryanatkn/moss/style_components.css`](/src/lib/style_components.css) - optional
    - [`@ryanatkn/moss/style_animations.css`](/src/lib/style_animations.css) - optional
  - [`theme.css`](/src/lib/theme.css) - or bring your own
  - prefers Svelte's `<style>` for nontrivial cases
    because its utility classes are not nearly as featureful and complete as Tailwind -
    instead of providing a full interface to CSS through classes,
    Moss provides an arbitrary subset that defers to Svelte CSS for complex and uncommon patterns
    (advanced build tooling like a compiler could change this, but I have no current plans for that)
  - it probably makes sense to include a Vite plugin to remove unused styles,
    but the primary apps I'm building provide these styles to users
    and therefore won't remove unused code, so the feature isn't urgent

## Contributing

See [contributing.md](contributing.md).

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

[MIT](LICENSE)
