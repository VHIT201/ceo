# Design System: Executive Profile

## 1. Visual Theme & Atmosphere

A restrained, gallery-dark interface with confident asymmetric layouts and fluid spring-physics motion. The atmosphere is executive yet warm — like a private office in a modern skyscraper at dusk. Deep charcoal surfaces hold warm ivory typography, punctuated by a single gold accent that signals authority without ostentation. Every panel breathes. Every number is precise. The mood is calm power: credible, expensive, and quietly ambitious.

- **Density:** 3 (Art Gallery Airy) — generous whitespace, large section gaps
- **Variance:** 8 (Asymmetric) — split-screen heroes, offset grids, deliberate empty zones
- **Motion:** 6 (Fluid CSS + Spring) — smooth reveals, hover micro-physics, staggered mounts

## 2. Color Palette & Roles

- **Deep Void** (#0a0a0b) — Primary page background. Warm near-black, not pure black. Used for 90% of surfaces.
- **Elevated Surface** (#141416) — Cards, panels, elevated containers. Subtle lift from the void.
- **Warm Ivory** (#f4f4f5) — Primary text, headlines, body copy. Zinc-100 with warmth.
- **Soft Silver** (#a1a1aa) — Secondary text, metadata, timestamps, captions. Zinc-400.
- **Pale Border** (rgba(255, 255, 255, 0.08)) — 1px structural lines, dividers, card borders.
- **Executive Gold** (#c19a6b) — Single accent. CTAs, active states, focus rings, metric highlights, timeline nodes. Saturation ~45%, warm and expensive.
- **Muted Gold** (rgba(193, 154, 107, 0.15)) — Subtle gold tint for hover backgrounds, badges, ghost buttons.
- **Deep Ink** (#18181b) — Zinc-950 for alternate dark sections or gradient stops.

Rules:
- Maximum 1 accent color (Executive Gold).
- No purple/blue neon glow. No gradients on text except subtle dark-to-void on hero images.
- Never use pure black (#000000).
- Consistent warm palette — no cool gray fluctuation.

## 3. Typography Rules

- **Display / Headlines:** `Geist` — Track-tight (`tracking-tight`), controlled scale. Hierarchy through weight and color, not just massive size. Hero H1: `text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]`.
- **Body:** `Geist` — Relaxed leading (`leading-relaxed`), max 65ch width. `text-base md:text-lg` for running copy.
- **Mono / Numbers:** `Geist Mono` — All metrics, stats, years, financial figures. `font-mono` mandatory for numbers in high-density contexts.
- **Nav / Labels:** `Geist` — `text-sm font-medium tracking-wide uppercase` for section labels and microcopy.
- **Banned:** Inter, Times New Roman, Georgia, Garamond. Serif is banned entirely — this is a business executive profile, not an editorial magazine.

Scale:
- Hero Display: 56px–72px (weight 600)
- Section Headline: 36px–44px (weight 600)
- Subheadline: 24px–28px (weight 500)
- Body Large: 18px (weight 400, line-height 1.65)
- Body: 16px (weight 400, line-height 1.6)
- Caption / Label: 12px–14px (weight 500, uppercase, letter-spacing 0.05em)
- Mono Metric: 48px–64px (weight 500, Geist Mono)

## 4. Component Stylings

- **Buttons:**
  - Primary: Executive Gold fill (#c19a6b), Deep Void text (#0a0a0b), generous padding (14px 32px), `rounded-full` (pill shape), `font-medium`.
  - Ghost: Transparent fill, 1px Pale Border, Warm Ivory text. Hover: Muted Gold background tint.
  - Active state: `-translate-y-[1px]` tactile push. No neon outer glows.
- **Cards:**
  - Used sparingly — only when elevation communicates hierarchy.
  - Background: Elevated Surface (#141416).
  - Border: 1px Pale Border (rgba(255,255,255,0.08)).
  - Corners: `rounded-2xl` (16px). No heavy shadows — rely on border and surface contrast.
  - Padding: `p-8` or `p-10` inside major cards.
- **Inputs (Contact Form):**
  - Background: Elevated Surface.
  - Border: 1px Pale Border, `rounded-lg`.
  - Label above input in Soft Silver, 12px uppercase.
  - Focus: 2px Executive Gold border. No floating labels.
  - Error: Soft red text below input (#ef4444).
- **Badges / Chips:**
  - Muted Gold background tint, Executive Gold text, `rounded-full`, `px-3 py-1`, `text-xs font-medium uppercase`.
- **Dividers:**
  - 1px Pale Border. Used between timeline items and sections.
- **Timeline Node:**
  - 12px circle, Executive Gold fill. Connected by 1px Pale Border vertical line.

## 5. Layout Principles

- **Hero Section:** Asymmetric split-screen (60/40 or 50/50). Left: large left-aligned headline + subhead + single CTA. Right: editorial portrait photo with subtle gradient fade into Deep Void. **Centered heroes are BANNED.**
- **Content Containment:** Max-width 1280px (`max-w-[1280px] mx-auto`), with `px-6 md:px-12` side padding.
- **Section Spacing:** Vertical gaps `clamp(4rem, 10vw, 8rem)` between major sections. Generous breathing room.
- **Grid Strategy:** CSS Grid over Flexbox math. Never use `calc()` percentage hacks.
  - Metrics: 2-column or 4-column bento grid.
  - Timeline: Single column, left rail with sticky year labels.
  - Values: Asymmetric bento (2fr + 1fr, or 1fr + 2fr).
- **Mobile (< 768px):** All multi-column layouts collapse to single column. Navigation collapses to hamburger. Hero becomes stacked (text above image). No horizontal scroll.
- **Full-Height Sections:** Use `min-h-[100dvh]` for hero — never `h-screen`.

## 6. CEO Page Sections

### Section A: Hero
- Split layout: Left text block (name, title, one-line manifesto), Right portrait.
- Name: Hero Display size, Warm Ivory.
- Title: Caption uppercase, Soft Silver, above name.
- Manifesto: Body Large, Soft Silver, max 60ch.
- Single Primary CTA: "Get in Touch" pill button.
- No secondary CTA. No scroll arrows. No bouncing chevrons.

### Section B: Key Metrics
- 4-column bento grid at desktop, 2-column tablet, 1-column mobile.
- Each cell: large Mono Metric number (Executive Gold), label below (Warm Ivory), micro description (Soft Silver).
- Numbers must feel organic: "$2.4B", "47 Markets", "12 Years", "340% Growth".
- No generic fake numbers like 99.99% or 50%.

### Section C: Executive Biography
- Asymmetric two-column: Left large paragraph (Body Large, max 65ch), Right smaller secondary paragraph or pull quote.
- Pull quote: larger text, Warm Ivory, left border 2px Executive Gold.
- No card container — pure typography on Deep Void.

### Section D: Career Timeline
- Vertical timeline, left-aligned rail.
- Each entry: year (Mono, Executive Gold), role title (Warm Ivory, title size), company + description (Soft Silver, body size).
- 1px Pale Border vertical connector. Timeline node: 12px Executive Gold circle.
- Alternating subtle offset for visual rhythm.

### Section E: Leadership Values
- Bento grid: 3–4 asymmetric cards on Elevated Surface.
- Each card: icon (simple geometric SVG, Executive Gold), title, one-line description.
- Cards should not be equal sizes — mix 2fr and 1fr widths.

### Section F: Press & Recognition
- Horizontal scrolling logo strip or 2-column asymmetric grid of publication logos (grayscale, hover to Warm Ivory).
- Below: 1–2 quote cards with publication name, date, excerpt.
- Quote marks: large, Executive Gold, low opacity.

### Section G: Contact
- Clean form: Name, Email, Company, Message.
- Or minimal contact block: email + LinkedIn link.
- Background: Elevated Surface with `rounded-2xl`, `p-10`.

## 7. Motion & Interaction

- **Spring Physics:** `stiffness: 100, damping: 20` for all interactive elements. Premium, weighty feel.
- **Hero Reveal:** Staggered cascade on mount — title first, then subtitle, then CTA with 120ms delays.
- **Scroll Reveals:** Sections fade in + translate-y (`opacity: 0 → 1`, `y: 40px → 0`) using Intersection Observer or Framer Motion `whileInView`.
- **Perpetual Micro-Interactions:**
  - Metric numbers: subtle counting animation on scroll into view.
  - CTA button: gentle pulse glow (very subtle, Muted Gold) on idle.
  - Timeline nodes: scale up on hover.
- **Hover States:**
  - Cards: `translateY(-4px)` + border brightens to rgba(255,255,255,0.15).
  - Links: Executive Gold underline animates in from left.
- **Staggered Lists:** Timeline items and metric cards mount with 100ms stagger delays.
- **Performance:** Animate exclusively via `transform` and `opacity`. No `top`, `left`, `width`, `height` animation.

## 8. Anti-Patterns (Banned)

- No emojis anywhere.
- No Inter font.
- No generic serif fonts.
- No pure black (#000000).
- No neon / outer glow shadows.
- No oversaturated accents.
- No excessive gradient text on large headers.
- No custom mouse cursors.
- No overlapping elements — clean spatial separation always.
- No 3-column equal card layouts.
- No generic names ("John Doe", "Acme").
- No fake round numbers (99.99%, 50%).
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
- No filler UI text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons.
- No centered Hero sections.
- No broken Unsplash links — use `picsum.photos` or reliable placeholders.
- No shadcn/ui in default generic state — if used, must customize radii, colors, shadows to match this dark gold system.

## 9. Responsive Breakpoints

- **Mobile:** < 768px — Single column, stacked hero, collapsed nav, full-width cards.
- **Tablet:** 768px–1024px — 2-column grids, hero text above image.
- **Desktop:** 1024px–1440px — Full asymmetric layouts, 4-column metrics.
- **Wide:** > 1440px — Max-width containment, larger gutters.

## 10. Image Direction

- **Portrait:** Editorial, dramatic but soft lighting. Dark background preferred, blending into Deep Void. No generic stock-photo smiles.
- **Atmosphere:** Cinematic cityscapes at dusk, abstract architectural details, textured dark materials (concrete, leather, brushed metal).
- **Treatment:** Low saturation, warm tint, subtle grain. Halftone or print texture acceptable for background accents.
- **Placeholders:** Use `https://picsum.photos/seed/{word}/800/1000` for portrait, `https://picsum.photos/seed/{word}/1200/800` for atmospheric images.
