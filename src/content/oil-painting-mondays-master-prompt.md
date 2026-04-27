# Master Prompt for Cursor / Lovable / v0 / Replit / Bolt

Build a premium editorial-style website for a women’s art club called **Oil Painting Mondays** (working name), located in **Broomfield, Colorado, USA**.

## Project Goals

The website has two primary purposes:

1. Present the women’s art club beautifully and credibly.
2. Help visitors browse paintings and submit a reservation/inquiry to buy a painting.

This is **not** a technical, startup, or generic e-commerce design. It must feel **luxury editorial, refined, elegant, modern, image-led, and quietly premium**.

## Audience

- People interested in original art
- Local collectors
- Community supporters
- Visitors discovering the club
- People who may want to reserve and purchase a painting

## Key UX Goal

The main user journey is:

- arrive on the homepage
- understand the club
- explore artwork
- open a painting detail view
- zoom into the artwork
- click a CTA to reserve or inquire about buying it
- submit a form choosing Shipping or Local Pickup
- receive manual follow-up for payment later

## Purchase Model

Do **not** build instant checkout as the primary flow.

Instead, every available painting should use a **Reserve / Inquire to Buy** model.

### CTA language

Preferred CTA labels:

- Reserve This Painting
- Inquire to Purchase
- Request to Buy

### Form behavior

The inquiry form should:

- prefill the selected painting name
- prefill the artist name
- let the user choose Shipping or Local Pickup
- collect name and email
- optionally collect phone and notes
- include a consent note that reservation is subject to confirmation

## Site Pages

Create the following pages:

- Home
- About
- Artists
- Gallery
- Events
- FAQ
- Purchase & Delivery
- Contact
- Privacy Policy
- Terms of Purchase
- Returns Policy
- Shipping & Pickup

## Homepage Sections

Include these homepage sections in this order unless a better editorial sequence improves the experience:

1. Hero
2. Club intro
3. Mission
4. Featured paintings
5. Artists preview
6. Events preview
7. Testimonials
8. Purchase process
9. Final contact CTA

## Gallery Requirements

The gallery is a central feature.

### Must include

- around 30 paintings
- high-quality artwork thumbnails
- filter system
- elegant grid layout
- painting detail modal or dedicated detail page
- image enlargement / zoom
- metadata display
- availability status
- reserve/inquiry CTA

### Filters required

- artist
- size
- price
- style
- technique
- availability

### Painting card fields

- image
- title
- artist
- dimensions
- medium
- price
- status

### Painting detail fields

- large image
- zoom support
- title
- artist
- dimensions
- medium
- technique
- style
- price
- status
- short description
- shipping available
- pickup available
- reserve/inquiry CTA

## Design Direction

### Aesthetic

The site should feel like a boutique gallery, art publication, or contemporary cultural brand.

### Keywords

- luxury editorial
- elegant
- minimal but not sterile
- feminine without cliché
- refined
- curated
- modern
- atmospheric

### Must avoid

- technical SaaS look
- startup gradients
- neon glow
- craft-market look
- playful amateur art fair styling
- template-like e-commerce blocks
- loud warm colors

### Color constraints

Do not use brown, orange, red, or green as primary design colors.

Use a cool, elegant palette such as:

- porcelain / ivory backgrounds
- charcoal or ink text
- plum / aubergine / slate / midnight accent
- soft gray dividers

Support both **light mode and dark mode**.

### Typography

Use elegant serif typography for display headings and a clean sans-serif for body text.

Preferred combinations:

- Instrument Serif + Inter
- Cormorant Garamond + Manrope
- Bodoni Moda + Satoshi

Use typography, whitespace, and image scale as the main luxury signals.

## Technical Requirements

Preferred stack:

- React + Vite
- Tailwind CSS or custom CSS modules

Alternative acceptable stack:

- HTML/CSS/JS only

### Functional requirements

- responsive layout
- light/dark theme toggle
- filterable gallery
- modal or detail page for artwork
- image zoom/lightbox
- inquiry form
- shipping/pickup selector
- legal pages
- accessible interactions

### Data model

Structure data for:

- paintings
- artists
- events
- testimonials
- site settings

## Content Style

Write copy in English.

Tone should be:

- polished
- warm
- concise
- credible
- understated
- not overly sales-driven
- not corporate

## Build Quality Requirements

- strong spacing system
- clean hierarchy
- semantic HTML
- keyboard accessible modal behavior
- mobile-friendly filters
- lazy-loaded images
- no generic placeholder design patterns
- no repetitive feature-card SaaS blocks

## Final Output

Generate:

1. Full site structure
2. Page layouts
3. Reusable component architecture
4. Sample content blocks
5. Gallery UI with filters and zoom behavior
6. Inquiry flow UI
7. Legal/trust page structure
8. Clean production-ready code

The final result should feel like an elegant gallery website with selective commerce, not like an online store template.
