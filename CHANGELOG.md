# @ryanatkn/moss

## 0.13.4

### Patch Changes

- change `input`, `select`, and `textarea` to be blocks by default ([07274c8](https://github.com/ryanatkn/moss/commit/07274c8))

## 0.13.3

### Patch Changes

- add utility classes for `overflow-wrap` ([#35](https://github.com/ryanatkn/moss/pull/35))

## 0.13.2

### Patch Changes

- fix summary margin ([d65d160](https://github.com/ryanatkn/moss/commit/d65d160))

## 0.13.1

### Patch Changes

- add some flex utility classes ([#34](https://github.com/ryanatkn/moss/pull/34))

  - add variants for `.align|justify_items|content|self_`
  - add `.grow`, `.grow_0`, `.shrink`, and `.shrink_1`
  - add `.column`

## 0.13.0

### Minor Changes

- rename shadow color variables to numbered weights ([#33](https://github.com/ryanatkn/moss/pull/33))

### Patch Changes

- add `flex_nowrap` class ([#33](https://github.com/ryanatkn/moss/pull/33))

## 0.12.2

### Patch Changes

- add flex direction classes ([fb99dd8](https://github.com/ryanatkn/moss/commit/fb99dd8))

## 0.12.1

### Patch Changes

- add margin auto variants ([f684712](https://github.com/ryanatkn/moss/commit/f684712))

## 0.12.0

### Minor Changes

- rename `text_color_0-10` from `text_1-5` ([#32](https://github.com/ryanatkn/moss/pull/32))

## 0.11.1

### Patch Changes

- fix `.selectable` styles ([c55e4dd](https://github.com/ryanatkn/moss/commit/c55e4dd))

## 0.11.0

### Minor Changes

- change colors back to including `hsl()` ([#30](https://github.com/ryanatkn/moss/pull/30))
- move `Style_Variable` to `variables.ts` ([#29](https://github.com/ryanatkn/moss/pull/29))

### Patch Changes

- rework styles ([#31](https://github.com/ryanatkn/moss/pull/31))

  - rework button styles
  - reduce input border radius
  - rework shadow styles, reducing variable count by separating shadow position/blue/spread and color

## 0.10.1

### Patch Changes

- refactor some variables ([#28](https://github.com/ryanatkn/moss/pull/28))

  - add `button_shadow`, `button_shadow_hover`, and `button_shadow_active`

- soften xs and sm shadows ([d309880](https://github.com/ryanatkn/moss/commit/d309880))

## 0.10.0

### Minor Changes

- swap styles for colored buttons and selected variants ([#27](https://github.com/ryanatkn/moss/pull/27))

## 0.9.0

### Minor Changes

- add colors `h` and `i` ([#26](https://github.com/ryanatkn/moss/pull/26))

## 0.8.0

### Minor Changes

- remove the `hsl_` variables and change the `--color_` variables to require being wrapped in `hsl()` ([#24](https://github.com/ryanatkn/moss/pull/24))

## 0.7.1

### Patch Changes

- publish src files ([d4289dc](https://github.com/ryanatkn/moss/commit/d4289dc))
- enable tsconfig `declaration` and `declarationMap` ([fe60a19](https://github.com/ryanatkn/moss/commit/fe60a19))
- add tsconfig `sourceRoot` ([039be68](https://github.com/ryanatkn/moss/commit/039be68))

## 0.7.0

### Minor Changes

- update some theme-related styles ([#22](https://github.com/ryanatkn/moss/pull/22))

  - remove `.themed` styles
  - support `light` inside `.dark`, but as the fallback
  - add explicit `color-scheme: light dark` to `:root`

## 0.6.3

### Patch Changes

- add `sideEffects` to `package.json` ([9285817](https://github.com/ryanatkn/moss/commit/9285817))
- add vertical_align and missing text_align utility classes ([d5891ea](https://github.com/ryanatkn/moss/commit/d5891ea))

## 0.6.2

### Patch Changes

- fix input styles to not use `:where` for pseudo-elements ([#18](https://github.com/ryanatkn/moss/pull/18))

## 0.6.1

### Patch Changes

- upgrade gro with correctly formatted exports ([3b4f1cf](https://github.com/ryanatkn/moss/commit/3b4f1cf))

## 0.6.0

### Minor Changes

- support `node@20.12` and later ([108a2a7](https://github.com/ryanatkn/moss/commit/108a2a7))

## 0.5.0

### Minor Changes

- upgrade `node@22.3` ([#16](https://github.com/ryanatkn/moss/pull/16))

## 0.4.0

### Minor Changes

- extract composable shadow variables and remove the create shadow helpers ([#14](https://github.com/ryanatkn/moss/pull/14))

### Patch Changes

- extract hsl color variables ([#15](https://github.com/ryanatkn/moss/pull/15))

## 0.3.2

### Patch Changes

- remove `:where` from style components ([a9199e0](https://github.com/ryanatkn/moss/commit/a9199e0))

## 0.3.1

### Patch Changes

- tweak shadows ([#13](https://github.com/ryanatkn/moss/pull/13))

## 0.3.0

### Minor Changes

- upstream Svelte-specific theme helpers ([#9](https://github.com/ryanatkn/moss/pull/9))
- rename some variables ([#8](https://github.com/ryanatkn/moss/pull/8))

  - `button_fill` from `button_bg`
  - `button_fill_hover` from `button_bg_hover`
  - `button_fill_active` from `button_bg_active`
  - `input_fill` from `input_bg`

- use `:where` everywhere in the reset to fix specificity issues ([#3](https://github.com/ryanatkn/moss/pull/3))

### Patch Changes

- add fill color variables ([#7](https://github.com/ryanatkn/moss/pull/7))
- add `button_fill_selected` ([#6](https://github.com/ryanatkn/moss/pull/6))
- add colorful border variants ([#6](https://github.com/ryanatkn/moss/pull/6))
- add colorful shadow variants ([#3](https://github.com/ryanatkn/moss/pull/3))

## 0.2.0

### Minor Changes

- break: rename `shadow_outset_md` from `shadow_inset_md` and `shadow_inset_md` from `shadow_inset_inverse_md` ([#2](https://github.com/ryanatkn/moss/pull/2))

### Patch Changes

- feat: add variables shadow_inset|outset_xs-xl including utility classes ([#2](https://github.com/ryanatkn/moss/pull/2))

## 0.1.0

### Minor Changes

- extract from @ryanatkn/fuz - ([#1](https://github.com/ryanatkn/moss/pull/1))
  [github.com/ryanatkn/fuz/pull/20](https://github.com/ryanatkn/fuz/pull/20)
