---
name: Warm Artisanal Botanical
colors:
  surface: '#fff8f2'
  surface-dim: '#e2d9cb'
  surface-bright: '#fff8f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e4'
  surface-container: '#f7edde'
  surface-container-high: '#f1e7d9'
  surface-container-highest: '#ebe1d3'
  on-surface: '#1f1b13'
  on-surface-variant: '#504442'
  inverse-surface: '#353027'
  inverse-on-surface: '#f9efe1'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#885210'
  on-secondary: '#ffffff'
  secondary-container: '#fdb56c'
  on-secondary-container: '#774401'
  tertiary: '#001d06'
  on-tertiary: '#ffffff'
  tertiary-container: '#133318'
  on-tertiary-container: '#799d79'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#ffdcbe'
  secondary-fixed-dim: '#ffb870'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#693c00'
  tertiary-fixed: '#c6edc4'
  tertiary-fixed-dim: '#abd0a9'
  on-tertiary-fixed: '#012108'
  on-tertiary-fixed-variant: '#2e4e30'
  background: '#fff8f2'
  on-background: '#1f1b13'
  surface-variant: '#ebe1d3'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system captures the sensory sanctuary of an artisanal cafe and floral boutique. The brand personality balances earthy warmth, relaxed comfort, and refined craftsmanship. The interface evokes the peaceful ambiance of a morning coffee surrounded by indoor greenery: slow-paced, inviting, and uncluttered.

The design movement combines **warm organic minimalism** with **tactile editorial warmth**. It prioritizes high legibility, clean semantic layouts, generous breathing room, and soft textural contrasts that can be implemented cleanly with standard CSS box-model paradigms.

## Colors

The palette draws directly from roasted coffee, steamed milk, spun caramel, and living greenery:

- **Primary (`#3E2723` - Espresso Brown):** High-contrast anchor used for major editorial headings, active navigation headers, primary body text on light backgrounds, and high-impact structural blocks.
- **Secondary (`#C68642` - Warm Caramel):** Interactive accent color for primary call-to-actions, active filter states, focus indicators, and promotional highlights.
- **Tertiary (`#6B8E6B` - Botanical Sage Green):** Accent tone for organic indicators, dietary flags (e.g., vegan/organic badges), operational status (e.g., "Open Now"), and confirmation states.
- **Neutral Canvas (`#F5EBDD` - Latte Cream):** The base background surface that provides warm, low-glare reading contrast.
- **Elevated White (`#FFFFFF` - Milk White):** Applied to layered cards, dropdown menus, modal dialogs, and text placed over deep espresso surfaces.

## Typography

The typography system pairs **Playfair Display** (a high-contrast, editorial serif) with **DM Sans** (a modern, geometric, and warm sans-serif).

- Use Playfair Display exclusively for hero statements, menu category titles, and feature headings to give the brand an artisanal, culinary publication feel.
- Use DM Sans for menu item descriptions, prices, interface controls, nutritional specs, and metadata to maintain effortless scanning and accessibility.
- Maintain a minimum 1.5 line-height ratio for body copy to reinforce the relaxed, airy reading pace.

## Layout & Spacing

The layout operates on a fixed-width, responsive grid wrapped inside a container with a max-width of `1200px`:

- **Desktop (>= 1024px):** 12-column layout with `1.5rem` (`24px`) gutters and a minimum outer margin of `2rem` (`32px`).
- **Tablet (768px – 1023px):** 6-column layout with `1.5rem` gutters and `1.5rem` outer page margins.
- **Mobile (< 768px):** 4-column layout with `1rem` (`16px`) gutters and `1rem` outer canvas padding.

Vertical rhythm relies on generous structural spacing: major sections use `space-xl` to create deliberate visual pauses. In-card padding scales between `space-md` (`16px`) and `space-lg` (`24px`).

## Elevation & Depth

Hierarchy is established through soft, warm ambient depth that avoids sharp digital drops:

- **Surface Floor (`0`):** Latte Cream `#F5EBDD` as the base canvas.
- **Card Surface (`1`):** Pure Milk White `#FFFFFF` with a warm, diffuse shadow: `0 4px 16px -2px rgba(62, 39, 35, 0.08)`.
- **Raised Interactive / Hover (`2`):** Cards lifted on hover apply an expanded soft shadow: `0 8px 24px -4px rgba(62, 39, 35, 0.12)` with a slight `translateY(-2px)` transition.
- **Overlays & Dialogs (`3`):** Modal backdrop uses `rgba(62, 39, 35, 0.45)` with a `backdrop-filter: blur(4px)` to sustain warmth while focusing visual attention.
- **Borders:** Low-contrast borders use `rgba(62, 39, 35, 0.08)` to softly define edges without rigid boundaries.

## Shapes

The interface embraces organic curvature without turning completely pill-shaped across large elements:

- Base radius (`rounded`, `0.5rem` / `8px`): Used for inputs, text areas, item thumbnails, and compact badges.
- Medium radius (`rounded-lg`, `1rem` / `16px`): Standard for menu item cards, event banners, and modal dialogs.
- Large radius (`rounded-xl`, `1.5rem` / `24px`): Reserved for hero feature panels and imagery wrappers.
- Pills (`full`): Exclusively used for interactive tags, filter pills, and button components.

## Components

### Buttons
- **Primary Button:** Background in Caramel (`#C68642`), text in Milk White (`#FFFFFF`), fully rounded pill radius (`9999px`), padding `0.75rem 1.75rem`. Hover state shifts to `#B37433` with smooth `transition: all 0.2s ease`.
- **Secondary Button:** Transparent background, `1.5px` border in Espresso Brown (`#3E2723`), text in Espresso Brown (`#3E2723`). Hover fills with Espresso Brown and text turns Milk White.
- **Tertiary / Botanical Button:** Soft Green (`#6B8E6B`) background with white text, used for ordering seasonal floral bundles or sustainability actions.

### Cards (Menu Items & Specials)
- Surface in Milk White (`#FFFFFF`), border-radius `16px`, padding `1.5rem`.
- Subtle warm shadow (`rgba(62, 39, 35, 0.08)`).
- Food/drink imagery spans full width at the top with a subtle inset overflow clip (`12px` top border-radius).
- Heading in Playfair Display (`headline-sm`), price in DM Sans (`title-md`) rendered in Espresso Brown.

### Badges & Chips
- Background in `rgba(107, 142, 107, 0.15)` with Soft Green (`#6B8E6B`) text for vegan, gluten-free, or fresh roast indicators.
- Category filters use a Latte Cream base with Espresso Brown text; active filter switches to Caramel (`#C68642`) with Milk White text.

### Inputs & Form Fields
- Background in Milk White (`#FFFFFF`), border `1.5px solid rgba(62, 39, 35, 0.18)`, border-radius `8px`, padding `0.75rem 1rem`.
- Focus state: border color switches to Caramel (`#C68642`) with an ambient outer glow `0 0 0 3px rgba(198, 134, 66, 0.2)`. Outline is removed.

### Checkboxes & Radio Buttons
- Custom box with `2px solid #3E2723`, border-radius `4px` (checkbox) or `50%` (radio).
- Checked state fills with Caramel (`#C68642`) showing a clean Milk White checkmark or inner dot.

### Menu List Item (Alternative to Cards)
- Borderless row with horizontal alignment: item name with dotted leaderline connecting to price, followed by a small Botanical Green tag and an add-to-order button. Separated by a thin `rgba(62, 39, 35, 0.08)` divider.