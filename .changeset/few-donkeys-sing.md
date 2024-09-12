---
'@ryanatkn/moss': minor
---

rework shadows

- rename `shadow_color_a-i` from `shadow_a-i_color`
- rename `shadow_color_highlight` from `highlight_color`
- rename `shadow_color_glow` from `glow_color`
- rename `shadow_color_shroud` from `shroud_color`
- rename `shadow_inset_bottom_` variables from `shadow_outset_`
- rename `shadow_inset_top_` variables from `shadow_inset_`
  and add `shadow_inset_` variants with no y offset
- remove shadow color variable variants `shadow_color_1-5`
  along with `highlight`/`glow`/`shroud` and colors `a-i` -
  alpha must now be applied manually with `color-mix` or relative colors,
  though maybe we'll add these back when we efficiently build only what's used
