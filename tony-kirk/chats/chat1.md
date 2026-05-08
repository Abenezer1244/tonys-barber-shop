# Barbershop Website Design

_Started 2026-04-30 19:59 UTC_

---

## User

use this inspiration 

Tony's Barbershop
About us:

We welcome walk-ins, so please stop by anytime during our open hours.

Our doors are open Monday through Saturday from 8:00 AM to 7:00 PM and on Sundays from 9:00 AM to 6:00 PM.

Closed on Tuesdays.

We proudly present an extensive array of grooming services tailored for men, women, and children, encompassing expert haircuts, precision shaves, meticulous beard trims, and much more. Our seasoned barbers are dedicated to providing individualized attention, guaranteeing that you depart not only with an impeccable style but also with a memorable and enjoyable experience.


We ensure quality in our service and prioritize your satisfaction as part of our policy!


Make you feel really comfortable with our shaving, fresh with hair wash.

© Tony’s Barber Shop

Address: 13520 100th Ave NE Suite 55 Kirkland, Washington, 98034

Contact: (425) 821-3767

Tony's Barber Shop
4.9
(48)
Barber shop

Overview

Reviews

About


Directions


Save


Nearby


Send to phone


Share
 


13520 100th Ave NE Ste 55, Kirkland, WA 98034



Open now

Thursday
8 AM–6 PM

Friday
8 AM–6 PM

Saturday
8 AM–6 PM

Sunday
9 AM–6 PM

Monday
8 AM–6 PM

Tuesday
8 AM–6 PM

Wednesday
8 AM–6 PM

## Assistant

I'll build a full website for Tony's Barber Shop in Kirkland, WA, using the real photos and reviews you provided. Let me note the constraints first:

- This is an original design inspired by the reference layout you shared (not a recreation of any branded UI)
- Real Tony's Barber Shop info: Kirkland WA, (425) 821-3767, 4.9★ (48 reviews), real customer reviews, real photos
- I'll design with a warm, confident, plainspoken tone — neither corporate nor snobby

Let me check what's in the project and plan the build.

_[tool: list_files]_

_[tool: list_files]_

Let me look at the uploaded images so I know what I'm working with.

_[tool: view_image]_

I have enough context — Tony's is a real solo-barber shop in Kirkland with great photos and reviews. Let me set up the project, copy the photos, and build a single-file responsive site.

**Design system declaration (committing up front):**
- **Aesthetic:** Warm, masculine, confident. Espresso-dark palette (deep brown #1a1410, warm cream #f4ede3, brass accent oklch(0.72 0.13 65) — burnished amber/brass)
- **Type:** "Bebda Neue" / "Oswald" condensed display for headlines (uppercase, tight, editorial), "Inter" for body — clean and readable. Mono accents in "JetBrains Mono" for prices and meta.
- **Vocabulary:** Heavy uppercase display type, generous black space, real photography full-bleed, brass-amber accents on CTAs, mono prices, ribbon barber-pole detail used sparingly.
- **Tone:** "Quality cuts. No drama." Plainspoken, warm, all-y'all welcome.

**Plan:** Single-file React prototype with a simple page-router (Home / Services / About / Team / Locations / Memberships / Gift Cards / FAQ / Careers). Sticky header + sticky mobile Book bar. Real customer reviews. Real Kirkland address & hours.

Let me copy the photos into the project and build.

_[tool: copy_files]_

Now let me build the site. I'll split into a few JSX files to keep things manageable.

_[tool: write_file]_

Now let me build the React components in modular files.

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: done]_

_[tool: snip]_

_[tool: fork_verifier_agent]_

Built a full responsive site for Tony's Barber Shop with all 9 pages plus a 3-step booking flow. Key choices:

- **Aesthetic:** warm cream/espresso palette, brass accents, Bebas Neue display + Inter body + JetBrains Mono prices
- **Real content:** actual address, hours (Mon–Sat 8a–7p, Sun 9a–6p, closed Tuesday), phone, 4.9★/48 reviews, real customer quotes from your Google reviews
- **Tone:** plainspoken — "Where men get ready," "Quality cuts. No drama.," "All-y'all welcome"
- **Every page:** Home (hero + booking card, marquee, value props, services preview, about snippet, membership band, IG gallery, reviews, map/contact, $20 newsletter), Services (flagship card + 6 categorized blocks), About (founder story + 3 rules + press), Team (4 barbers), Locations, Memberships (3 tiers + comparison), Gift Cards (interactive amount picker), FAQ (accordion), Careers (3 roles), Book (3-step flow)
- **Mobile:** sticky bottom Book bar, hamburger menu, click-to-call, ≥44px tap targets
- **SEO:** LocalBusiness/HairSalon schema with NAP, hours, geo, rating

Placeholder text: salon name "Tony's Barber Shop" and city "Kirkland/Juanita" — swap globally in `data.jsx` (the `SHOP` object).

