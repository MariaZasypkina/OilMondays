# Oil Painting Mondays Developer Architecture

## Goal

Build an elegant editorial website for a women’s art club in Broomfield, Colorado, focused on presenting the club and helping visitors browse and reserve original paintings.

## Stack Recommendation

### Preferred

- React + Vite
- Tailwind CSS or CSS Modules
- React Router
- JSON-based content layer for v1
- Formspree or simple Node endpoint for forms
- Vercel or Netlify deployment

### Alternative

- Static HTML/CSS/JS if speed and budget are the highest priorities

## App Architecture

### Routes

- `/`
- `/about`
- `/artists`
- `/gallery`
- `/gallery/:slug`
- `/events`
- `/faq`
- `/purchase-delivery`
- `/contact`
- `/privacy-policy`
- `/terms-of-purchase`
- `/returns-policy`
- `/shipping-pickup`

### Core modules

- Layout system
- Theme system
- Gallery data and filtering engine
- Modal/lightbox viewer
- Inquiry workflow
- Static content pages

## Data Structure

### paintings.json

Fields:

- id
- slug
- title
- artist
- artistSlug
- price
- currency
- status
- medium
- style
- technique
- dimensions
- sizeCategory
- featured
- images[]
- description
- shippingAvailable
- pickupAvailable

### artists.json

Fields:

- id
- slug
- name
- bio
- statement
- portrait
- techniques[]
- styles[]
- featuredWorks[]

### events.json

Fields:

- id
- title
- date
- time
- location
- description
- status

## Component Tree

```text
App
 ├─ AppShell
 │   ├─ Header
 │   ├─ ThemeToggle
 │   ├─ MainNav
 │   └─ Footer
 ├─ HomePage
 │   ├─ HeroSection
 │   ├─ IntroSection
 │   ├─ MissionSection
 │   ├─ FeaturedPaintingsSection
 │   ├─ ArtistsPreviewSection
 │   ├─ EventsPreviewSection
 │   ├─ TestimonialsSection
 │   ├─ PurchaseStepsSection
 │   └─ CTASection
 ├─ GalleryPage
 │   ├─ GalleryToolbar
 │   ├─ FilterPanel
 │   ├─ ActiveFilters
 │   ├─ PaintingGrid
 │   │   └─ PaintingCard
 │   ├─ PaintingModal or PaintingDetailPage
 │   └─ InquiryDrawer or InquiryModal
 ├─ ArtistsPage
 │   ├─ ArtistGrid
 │   └─ ArtistCard
 ├─ EventsPage
 ├─ FAQPage
 ├─ PurchaseDeliveryPage
 ├─ ContactPage
 └─ LegalPages
```

## State Design

### Global state

Keep global state minimal:

- current theme
- currently selected filters
- selected painting for modal
- inquiry form open/closed

### Local state

Use local state for:

- form validation
- lightbox zoom state
- mobile filter drawer state
- accordions in FAQ

## Gallery Logic

### Required filters

- Artist
- Size
- Price
- Style
- Technique
- Availability

### Sorting options

- Featured
- Price low to high
- Price high to low
- Newest if applicable
- Artist A–Z

### Status behavior

- `available` → active reserve CTA
- `on_hold` → disabled reserve CTA + waitlist/inquiry optional
- `sold` → no reserve CTA, but allow “Inquire about similar works” later if desired

## Inquiry Flow

### UX sequence

1. User opens painting detail.
2. User clicks **Reserve This Painting**.
3. Form opens with artwork prefilled.
4. User chooses Shipping or Local Pickup.
5. Submission triggers success message.
6. Team manually follows up with payment and next steps.

### Required form fields

- name
- email
- phone optional
- painting title hidden/prefilled
- artist hidden/prefilled
- fulfillment option
- message optional
- consent checkbox

## Accessibility Requirements

- Semantic HTML landmarks
- One H1 per page
- Visible focus states
- Keyboard accessible modal and lightbox
- Escape closes modal
- Filter controls accessible on mobile and desktop
- All images have meaningful alt text
- Minimum 44x44 touch targets

## Visual System

### Direction

Luxury editorial, cool-toned, elegant, quiet.

### Typography

- Display serif for large headings
- Clean sans-serif for body and interface

### Color behavior

- Neutral background foundation
- One cool accent family, ideally plum/slate/midnight
- No brown, orange, red, green

## Performance Requirements

- Responsive images
- Lazy loading for gallery images
- Thumbnails separate from zoom-size assets if possible
- Minimal JS bundle
- Deferred non-critical scripts

## Suggested Folder Structure

```text
project/
  public/
    assets/
      paintings/
      artists/
  src/
    components/
    pages/
    data/
    hooks/
    utils/
    styles/
    App.jsx
    main.jsx
```

## Future-Proofing

Design the content model so the site can later support:

- CMS migration
- online invoices
- artist submissions
- event RSVPs
- limited prints
- better inventory workflows

## Delivery Standard

The final product should feel like a gallery publication with selective commerce, not an e-commerce template.
