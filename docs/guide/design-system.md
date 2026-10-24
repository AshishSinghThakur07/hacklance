# Design System & Tokens

HACKLANCE uses a bespoke Crimson Editorial design language combining the minimalism of modern design studios with the technical precision of developer tools.

## Color Tokens

### Light Theme
- **Primary Crimson:** `#B91F35`
- **Deep Crimson:** `#8F182B`
- **Burgundy:** `#5B1020`
- **Warm White:** `#FAF9F6`
- **Primary Ink:** `#171719`
- **Border:** `#E9E5E4`

### Dark Theme
- **Primary Crimson:** `#F05263`
- **Deep Red:** `#B91F35`
- **Charcoal Surface:** `#101012`
- **Elevated Card:** `#1D1D21`
- **Primary Text:** `#F6F5F3`
- **Border:** `#343238`

## Typography

- **Headings:** `Manrope` (weights 500, 600, 700, 800)
- **Body & Interface:** `Inter` (weights 400, 500, 600)
- **Code & Metadata:** `JetBrains Mono` (weights 400, 500)

## Technical Grid Background

The technical grid is implemented via lightweight CSS linear gradients in `.technical-grid` and `.technical-grid-dense` with radial masks to ensure readability and 60fps scrolling performance without heavy WebGL overhead.
