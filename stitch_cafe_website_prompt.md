# Stitch Prompt: Small 6-Page Cafe Website

Design a **small, simple, 6-page responsive website** for a cozy specialty coffee cafe called **Brew & Bloom**. This is a student project that will be hand-coded in plain HTML, CSS and a little JavaScript, so keep every layout **simple, clean and easy to rebuild**. No complex widgets, no carousels, no heavy effects. Generate every page as a **desktop frame (1440px)** and a **mobile frame (390px)**.

Please **generate all images yourself** (food, drinks, cafe interior, gallery photos, hero images, icons). Use realistic, warm, high-quality cafe photography style.

---

## 1. Brand and Design System

- **Mood:** warm, cozy, modern, welcoming, minimal
- **Colour palette:**
  - Espresso brown `#3E2723` (headings, navbar)
  - Latte cream `#F5EBDD` (page backgrounds)
  - Caramel `#C68642` (buttons, accents, hover)
  - Milk white `#FFFFFF` (cards)
  - Soft green `#6B8E6B` (small accent, success states)
- **Fonts:** headings in a serif display font (Playfair Display); body in a clean sans-serif (Poppins or Lato)
- **Style details:** rounded corners (8-16px), soft box-shadows on cards, subtle gradients on hero sections, semi-transparent (rgba) overlays on images, generous white space
- **Buttons:** caramel background, white text, rounded, darker on hover
- **Logo:** simple text logo with a small coffee cup icon

## 2. Navigation Bar (on EVERY page)

Links to all six pages: **Home | Menu and Media | Register | Services | Gallery | Contact**

- The same links on every page, but **each page must style the navbar differently** (different background colour, link style, alignment or layout), for example:
  - Home: transparent navbar over the hero image, centered links
  - Media: solid dark brown bar, links right-aligned
  - Register: light cream bar with underline-on-hover links
  - Services: navbar with pill-shaped buttons for links
  - Gallery: dark navbar with logo centered and links split on both sides
  - Contact: minimal navbar with a bottom border and a small theme toggle icon
- Mobile: collapse into a simple hamburger menu

## 3. Footer (on every page)

Simple footer: logo, short tagline, address, opening hours, social icons, copyright. Keep it a different colour/arrangement per page where easy.

---

## 4. Page-by-Page Requirements

### Page 1: Home (`index.html`)
**Layout idea:** simple vertical stacking of blocks.
Include:
- Hero section with a large generated cafe image, a main **heading (h1)**, a short tagline and a "View Services" button
- Several **headings (h1-h3)** and **paragraphs** (about the cafe, our story, why choose us)
- A mix of **block and inline elements**: bold and italic highlighted words, a short quote or special offer text
- **One featured image** (barista or latte art)
- A **"Explore" link section with a link to every page** (six link cards or a simple link list: Home, Media, Register, Services, Gallery, Contact)
- Visible **borders**, solid **background colour** sections, and text styled with different font sizes, weights and colours

### Page 2: Menu and Media (`media.html`)
**Layout idea:** content sections with an image/video row, lists and a table.
Include:
- A page heading with a **background image** banner (coffee beans or cafe counter)
- One **image** (cafe interior or signature drink) with caption
- A **video** player area (placeholder frame labeled "Watch how we brew")
- An **audio** player area (placeholder labeled "Our cafe playlist")
- An **ordered list** (steps: "How we make the perfect pour-over", 5 steps)
- An **unordered list** (e.g. "Our specialties": 5 to 6 items)
- **One data table:** "Menu and Prices" with columns **Item | Category | Size | Price**, 6 to 8 rows (espresso, latte, cappuccino, cold brew, croissant, cheesecake)
- Content boxes with visible padding, margin, width and height so the box model is clear; one side-by-side area (image beside text); one scrollable box with long text

### Page 3: Register (`register.html`)
**Layout idea:** one centered form card on a cream background, single column.
Title: **"Join our Coffee Club"**. The form must include **all** of the following fields, each with a label:
- Full name (text, required)
- Username (text, minimum and maximum length shown)
- Password (password, required, minimum length)
- Email (email, required)
- Date of birth (date)
- Website or social link (url)
- Favourite colour (color picker)
- Cups of coffee per week (number, min and max)
- Preferred visit time (time)
- Mood / satisfaction (range slider)
- About you (textarea)
- Favourite drink (select dropdown with 4 to 5 options, one preselected)
- Upload profile photo (file)
- Gender (radio buttons, one pre-checked)
- Interests (checkboxes: Coffee, Tea, Desserts, Events; one pre-checked)
- One **read-only** field (e.g. "Membership type: Standard")
- One **disabled** field (e.g. "Member ID: auto-generated")
- Terms and conditions checkbox (required)
- **Submit** and **Reset** buttons

Also show design states in the frame: a field in **focus** (highlighted border), a **valid** field (green border) and an **invalid** field (red border with a small error message). Include small decorative elements (e.g. a "required" star after labels and a styled first letter or heading line).

### Page 4: Services (`services.html`)
**Layout idea:** a row of cards that wrap (**flexbox**).
Include:
- Page heading and short intro
- **6 service cards** in a wrapping flex row (3 per row on desktop, 2 on tablet, 1 on mobile) with equal gaps
- Each card has: **image, heading, short text and a link/button** ("Learn more" or "Order now")
- Suggested cards: Coffee and Espresso, Fresh Bakery, Breakfast and Brunch, Catering and Events, Online Ordering, Barista Workshops
- Cards should look like they **lift and slightly scale on hover** (show a hover version of one card) and show a smooth colour change on the button
- Add one **tilted or rotated badge** (e.g. "New!" or "Popular") on one card

### Page 5: Gallery / Portfolio (`portfolio.html`)
**Layout idea:** an image gallery in a **CSS grid**.
Include:
- Page heading "Our Gallery" with a short intro
- A **grid gallery of 9 to 12 generated images** (drinks, desserts, latte art, interior, baristas, customers) with a **caption under or over every image**
- On desktop use a layout where **some images are larger** (spanning 2 columns or rows), arranged in a clear grid structure; the grid should automatically fit more or fewer columns as the screen size changes
- Show at least **three layouts**: desktop (4 columns), tablet (2 columns), mobile (1 column)
- Add a small subtle **animation idea**: images fading and sliding in on load, and one decorative element gently pulsing or floating (e.g. a steam icon above a coffee cup)

### Page 6: Contact (`contact.html`)
**Layout idea:** mix of **flexbox and grid**, fully responsive.
Include:
- **About section** (cafe story, short text, a team of 3 baristas in a small row of cards with generated portrait images)
- **Contact form:** name, email, phone, subject (select), message (textarea) and a Send button; show a small **live validation message** under fields (e.g. "Please enter a valid email") and a **success message** after submit
- **Contact info block:** address, phone, email, opening hours
- A map placeholder image
- A small **"Show / Hide opening hours"** button or a **light/dark theme toggle** in the navbar (include the toggle design and show both light and dark versions of this page)
- Desktop: two columns (about and info on one side, form on the other); tablet and mobile: stacked

---

## 5. General Instructions

- **Keep it small and simple:** roughly 4 to 6 sections per page. Easy to hand-code.
- **Consistency:** same brand, fonts and palette on all pages, but **a different layout technique and navbar style on each page**.
- Use real, believable cafe copy (no "lorem ipsum").
- Use CSS3-friendly effects only: gradients, box-shadows, rounded corners, semi-transparent overlays, web fonts, hover states.
- Do not use features that are hard to code (parallax, 3D, complex animations, sliders).
- Provide **desktop and mobile frames for every page**, plus any key states described above (hover, focus, valid/invalid, dark mode).
- Name each frame clearly: `Home`, `Media`, `Register`, `Services`, `Portfolio`, `Contact`.
- Output should be easy to **export to Figma** with clean layers, grouped sections and meaningful layer names.
