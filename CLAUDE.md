# Moss CSS Framework - Project Guide

## Overview

Moss is a CSS framework built around CSS custom properties (variables) for runtime theming. It provides both light and dark mode support through a sophisticated variable system.

## Key Concepts

### Style Variables

- All CSS values are defined as TypeScript objects in `src/lib/variables.ts`
- Each variable has optional `light` and `dark` values
- Variables are the single source of truth for all styling
- Utility classes are supported and extend the variable patterns

## Code Style Guidelines

### TypeScript/JavaScript

- **Tabs for indentation** (not spaces)
- **Snake_case naming** for variables and types (e.g., `Style_Variable`, `bg_color_1`)
- **Single quotes** for strings
- **No trailing semicolons** in TypeScript interfaces
- **Explicit type exports** (e.g., `export type`, `export interface`)

### CSS Variables

- CSS variable names use lowercase and underscores: `--bg_1`, `--color_a_1`
- Variables follow semantic naming patterns:
  - `bg_*` and `fg_*` are color-scheme-aware (swap in dark mode)
  - `darken_*` and `lighten_*` are color-scheme-agnostic
  - Numbered suffixes indicate intensity (1-10)

### File Organization

- Variables defined in `src/lib/variables.ts`
- CSS generation in `src/lib/gen_moss_css.ts`
- Theme definitions in `src/lib/themes.ts`
- Generated CSS in `theme.css` and `style.css`

## Build & Test Commands

```bash
npm run dev      # Development server
npm run build    # Build the project
npm run check    # Type checking
npm run test     # Run tests
```
