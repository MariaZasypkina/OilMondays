# Oil Painting Mondays Website Master Package

## Project Overview

**Working name:** Oil Painting Mondays  
**Type:** Women's art club / artist community  
**Location:** Broomfield, Colorado, USA  
**Primary goals:** Present the club elegantly and help visitors view works and reserve or buy paintings  
**Language:** English only  
**Initial catalog size:** About 30 paintings  
**Tech preference:** HTML/CSS/JS or React + Node  
**Visual direction:** Luxury editorial, modern, elegant, refined, not technical  
**Avoid colors:** Brown, orange, red, green  
**Theme support:** Light and dark mode

## Strategic Direction

This website should feel like a boutique gallery publication rather than an online store template. The design should prioritize atmosphere, typography, whitespace, image quality, and editorial pacing. The goal is to create trust and desire first, then make inquiry and reservation feel simple.

The core user flow is:

1. Discover the club and understand its identity.
2. Explore featured and full gallery works.
3. Open a painting detail view.
4. Click **Reserve / Inquire to Buy**.
5. Submit a short form choosing **Shipping** or **Local Pickup**.
6. Receive manual follow-up for payment and fulfillment.

This flow is the lowest-friction and lowest-fee legal path for launch because it avoids immediate processor integration while still creating a clear purchase path.

---

## Recommended Purchase Model

### Best initial solution

Use a **Reserve / Inquire to Buy** workflow instead of direct checkout.

### Why this is the best fit

- Lowest fees at launch.
- Legally simple for a nonprofit-led operation.
- Good for one-of-one artwork, where availability can change quickly.
- Lets the club confirm shipping, pickup, and final details before payment.
- Prevents double-selling a unique painting.

### Recommended CTA language

Do not use a generic “Buy Now” if there is no instant checkout.
Use one of these instead:

- **Reserve This Painting**
- **Inquire to Purchase**
- **Request to Buy**
- **Reserve & Arrange Payment**

### Recommended form fields

- Full name
- Email
- Phone (optional)
- Painting name
- Artist name
- Preferred fulfillment: Shipping / Local Pickup
- Notes
- Agreement checkbox: “This request does not guarantee purchase until confirmed by the club.”

### Manual follow-up workflow

1. Visitor submits form.
2. Club receives inquiry.
3. Club confirms availability.
4. Club replies with invoice or payment instructions.
5. Painting is marked **On Hold** or **Sold**.

### Best low-cost legal payment path after inquiry

For phase 1, the best practical choice is:

- **Manual invoice via Stripe Payment Link** or **Stripe Invoice** after confirmation.

Alternative:

- **PayPal invoice** if the organization already uses PayPal comfortably.

### Recommendation order

1. **Inquiry/reservation form first**
2. **Stripe invoice/payment link second**
3. Full e-commerce only later if the catalog grows significantly

---

## Information Architecture

### Primary navigation

- Home
- About
- Artists
- Gallery
- Events
- FAQ
- Purchase & Delivery
- Contact

### Utility navigation / footer links

- Privacy Policy
- Terms of Purchase
- Returns Policy
- Shipping & Pickup
- Contact

### Sitemap

```text
/
/about
/artists
/gallery
/gallery/[painting-slug]
/events
/faq
/purchase-delivery
/contact
/privacy-policy
/terms-of-purchase
/returns-policy
/shipping-pickup
```

If built as a static or simple React site, the painting detail views can be implemented as:

- dynamic routes, or
- modal/detail overlays from the gallery, or
- static detail pages generated from data.

---

## Page Structure

## Home

### Goals

- Establish identity and mood
- Explain the club briefly
- Showcase selected works
- Highlight artists and events
- Create a clear path into the gallery
- Offer a soft purchase entry point

### Recommended sections

1. **Hero**
   - Elegant headline
   - 1–2 sentence positioning statement
   - Primary CTA: View Gallery
   - Secondary CTA: About the Club
   - Full-bleed or editorial split-layout featured artwork image

2. **Club Introduction**
   - Short description of the women’s artist community
   - Broomfield, Colorado context
   - Why the club exists

3. **Mission**
   - Short editorial statement
   - 3 refined pillars, for example: creative practice, community, visibility

4. **Featured Paintings**
   - 4–6 selected works
   - Each card: image, title, artist, medium, price, status
   - CTA: View details / Reserve

5. **Artists Preview**
   - Portrait or artwork-led cards for 3–6 artists
   - CTA: Meet the Artists

6. **Events Preview**
   - Upcoming exhibition dates or club gatherings
   - CTA: View Events

7. **Testimonials**
   - 2–4 short quotes
   - Keep editorial and understated

8. **Purchase Process**
   - 3 simple steps
   - Explore → Reserve → Confirm & Pay

9. **Contact / Final CTA**
   - Invitation to inquire about a painting or event

## About

### Sections

- Club story
- Mission and values
- Why women-centered art community matters
- Broomfield local context
- Optional founder note
- CTA to Artists or Gallery

## Artists

### Sections

- Intro statement
- Artist directory grid
- Individual artist cards
- Optional artist profile pages or expandable bios

### Each artist profile should include

- Name
- Short bio
- Artistic focus
- Selected works
- Optional statement

## Gallery

### Core requirements

- Grid of about 30 paintings
- High-quality thumbnails
- Filter system
- Search or quick keyword filter if desired
- Lightbox or modal zoom
- Painting detail modal/page
- Reservation CTA

### Filters

- Artist
- Size
- Price
- Style
- Technique
- Availability

### Painting card content

- Image
- Title
- Artist
- Medium
- Dimensions
- Price
- Status
- Quick actions: View / Reserve

### Painting detail view

- Large zoomable image
- Additional images if available
- Full metadata
- Availability label
- Reserve/Inquire button
- Delivery options note: Shipping or Local Pickup
- Optional artist note

## Events

### Sections

- Intro heading
- Upcoming events
- Past exhibitions archive (optional)
- Exhibition details
- RSVP/contact CTA if needed

## FAQ

### Suggested FAQ categories

- Buying artwork
- Reserving a painting
- Shipping and pickup
- Returns
- Events
- Club information

## Purchase & Delivery

### Purpose

Make the purchase process feel transparent and trustworthy.

### Sections

- How to reserve a painting
- What happens after submitting a request
- Payment methods used after confirmation
- Shipping policy
- Local pickup policy
- Estimated timing
- Damage or issue reporting
- Returns policy summary with link

## Contact

### Sections

- Short invitation text
- Contact form
- Inquiry types: Artwork / Events / General
- Confirmation message
- Optional location note: Broomfield, Colorado

---

## UX Requirements

### Gallery UX

- Masonry or editorial grid with calm spacing
- Hover states must remain subtle and luxurious
- Clicking image opens fullscreen lightbox or modal
- Zoom should feel smooth and simple, not overly technical
- Include keyboard support for modal/lightbox
- Availability state must be visible: Available / On Hold / Sold

### Purchase UX

- Every available work has a clear reserve CTA
- Sold works remain visible but clearly labeled
- Reservation form should be short and calm
- Add “Response within 1–2 business days” style reassurance
- Add a discreet trust note explaining payment is arranged after confirmation

### Mobile UX

- Gallery filters collapse into drawers/chips
- Large tap targets
- Sticky reserve CTA on artwork detail if needed
- Images remain dominant; text should never feel cramped

---

## Visual Direction

### Brand personality

- Elegant
- Editorial
- Curated
- Feminine without clichés
- Contemporary
- Quietly premium

### Design principles

- Use typography and image scale as the main luxury signal.
- Use whitespace generously.
- Keep color restrained.
- Avoid anything that looks like a SaaS template or craft-market template.
- Prioritize asymmetric editorial composition over repetitive card grids where possible.

### Suggested color direction

Because brown, orange, red, and green are excluded, use a cool refined palette.

#### Light mode

- Porcelain / soft ivory background
- Ink or charcoal text
- Deep plum, aubergine, midnight, slate, or muted navy accent
- Very soft silver-gray dividers

#### Dark mode

- Inky charcoal background
- Soft ivory text
- Muted plum or cool moonlight accent
- Low-contrast elevated surfaces

### Recommended palette example

- Background: `#F6F4F1`
- Surface: `#FBFAF8`
- Text: `#18171B`
- Muted text: `#6F6A76`
- Accent: `#5E4A78`
- Accent dark: `#43345A`
- Divider: `#D8D2DD`
- Dark background: `#121116`
- Dark surface: `#1A1820`
- Dark text: `#F2EDF5`
- Dark accent: `#A892C5`

### Fonts

Luxury editorial direction suggests:

- **Display:** Canela, Cormorant Garamond, Instrument Serif, Bodoni Moda, or Editorial-style serif
- **Body/UI:** Manrope, Inter, Satoshi, Work Sans, or Suisse-style clean sans

### Pairing recommendation

- **Display:** Instrument Serif or Cormorant Garamond
- **Body:** Manrope or Inter

### Avoid visually

- Tech gradients
- Neon glows
- Sharp startup-style UI
- Playful craft-fair aesthetics
- Bright warm accents
- Heavy shadows
- Overdecorated floral motifs

---

## Content Model

### Painting data model

```json
{
  "id": "painting-001",
  "slug": "blue-morning-study",
  "title": "Blue Morning Study",
  "artist": "Artist Name",
  "artistSlug": "artist-name",
  "price": 650,
  "currency": "USD",
  "status": "available",
  "medium": "Oil on canvas",
  "style": "Abstract landscape",
  "technique": "Oil painting",
  "dimensions": "24 x 30 in",
  "sizeCategory": "Medium",
  "year": 2026,
  "featured": true,
  "images": [
    "/assets/paintings/blue-morning-study-1.jpg",
    "/assets/paintings/blue-morning-study-2.jpg"
  ],
  "description": "Short editorial description of the work.",
  "pickupAvailable": true,
  "shippingAvailable": true
}
```

### Artist data model

```json
{
  "id": "artist-001",
  "slug": "jane-doe",
  "name": "Jane Doe",
  "bio": "Short artist biography.",
  "statement": "Optional artist statement.",
  "portrait": "/assets/artists/jane-doe.jpg",
  "featuredWorks": ["painting-001", "painting-008"],
  "techniques": ["Oil painting"],
  "styles": ["Abstract", "Floral"]
}
```

### Event data model

```json
{
  "id": "event-001",
  "title": "Spring Salon Evening",
  "date": "2026-06-15",
  "time": "6:00 PM",
  "location": "Broomfield, CO",
  "description": "Short event description.",
  "status": "upcoming"
}
```

---

## Recommended Tech Architecture

## Option A: Best for elegant fast launch

**Frontend:** React + Vite  
**Styling:** Tailwind or custom SCSS/CSS modules  
**Data source:** Local JSON files or lightweight CMS later  
**Forms:** Formspree, Basin, Netlify Forms, or simple backend endpoint  
**Image zoom/lightbox:** PhotoSwipe or custom modal  
**Hosting:** Vercel or Netlify

### Why this is the best option

- Fast to build
- Easy gallery filtering
- Easy modal interactions
- Easy future expansion
- No heavy e-commerce complexity

## Option B: Minimal stack

**Frontend:** Static HTML/CSS/JS  
**Data:** JSON objects in JS  
**Forms:** Formspree or EmailJS or backend endpoint  
**Hosting:** Netlify / Vercel / static host

### Why choose it

- Cheapest and simplest possible setup
- Good if the site will stay relatively small

## Option C: React + Node backend

**Frontend:** React  
**Backend:** Node/Express  
**Database:** MongoDB/Postgres if needed later  
**Use when:** you want admin workflows, artwork inventory management, and custom inquiry handling

### Recommendation

Start with **Option A** unless there is a strong reason for a full backend immediately.

---

## Frontend Component Architecture

```text
src/
  assets/
  components/
    layout/
      Header
      Footer
      ThemeToggle
      PageIntro
    home/
      Hero
      ClubIntro
      MissionBlock
      FeaturedPaintings
      ArtistsPreview
      EventsPreview
      Testimonials
      PurchaseSteps
      FinalCTA
    gallery/
      GalleryToolbar
      FilterDrawer
      PaintingGrid
      PaintingCard
      PaintingModal
      ZoomViewer
      AvailabilityBadge
      ReserveButton
    artists/
      ArtistCard
      ArtistProfile
    events/
      EventCard
      EventList
    forms/
      InquiryForm
      ContactForm
  data/
    paintings.json
    artists.json
    events.json
    testimonials.json
    site.json
  pages/
    Home
    About
    Artists
    Gallery
    Events
    FAQ
    PurchaseDelivery
    Contact
    PrivacyPolicy
    TermsOfPurchase
    ReturnsPolicy
    ShippingPickup
  utils/
    filters.js
    formatPrice.js
    statusMap.js
```

---

## Functional Requirements

### Required features

- Responsive design
- Light and dark mode
- Editorial homepage
- Filterable gallery
- Zoomable painting images
- Individual painting detail view/modal
- Reservation/inquiry form
- Shipping vs pickup selector
- Status labels: Available / On Hold / Sold
- Artist pages
- Events page
- FAQ page
- Legal pages
- Contact page

### Optional features for phase 2

- CMS integration
- Waitlist for sold works
- Newsletter signup
- Artist application form
- Admin dashboard
- Inventory management
- Stripe payment links triggered after confirmation

---

## SEO Structure

### Core metadata

Each page should have:

- Unique title
- Unique meta description
- Open Graph image
- Canonical URL

### Useful keyword directions

- women’s art club in Colorado
- oil painting club Broomfield
- women artists Broomfield CO
- original oil paintings for sale Colorado
- local women artists near Denver/Broomfield

### Schema opportunities

- Organization
- LocalBusiness or nonprofit-related organization profile if appropriate
- Event schema for exhibitions
- Product schema for available paintings if implemented carefully

---

## Copy Direction

### Tone of voice

- Refined
- Warm
- Confident
- Clear
- Not salesy
- Not overly poetic
- Not corporate

### Headline style

Use short, elegant, specific lines.

Examples of direction:

- A women’s painting club rooted in practice, community, and collected beauty.
- Original works by local women artists in Broomfield, Colorado.
- Paintings to live with, collect, and return to.

### CTA style

Prefer:

- View Gallery
- Meet the Artists
- Explore Events
- Reserve This Painting
- Inquire to Purchase

Avoid:

- Buy now instantly
- Get started
- Unlock the collection
- Discover more today

---

## Legal and Trust Pages

Create the following pages even if initially brief:

- Privacy Policy
- Terms of Purchase
- Returns Policy
- Shipping & Pickup

### Important notes to include

- Reservation does not guarantee sale until confirmed
- Availability may change
- Shipping timing and costs are confirmed after inquiry
- Local pickup is available by arrangement
- Return eligibility depends on the final policy adopted

---

## Implementation Priorities

### Phase 1

- Home
- About
- Artists
- Gallery
- Painting modal/detail
- Inquiry form
- Events
- FAQ
- Purchase & Delivery
- Contact
- Legal pages

### Phase 2

- CMS or admin workflow
- invoice/payment-link automation
- analytics
- enhanced event workflows

---

## Final Recommendation

The ideal launch version is an editorial-style React site with a filterable gallery and a reservation/inquiry workflow instead of instant checkout. This gives the project an elegant premium feel, keeps fees low, supports unique one-of-one paintings, and avoids unnecessary e-commerce complexity at the beginning.
