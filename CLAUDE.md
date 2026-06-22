# CLAUDE.md — Aureon Bridge Website
# Loaded: every session automatically by Claude Code
# Do NOT delete or rename this file.

---
STEP 0 → /graphify — run ONLY when files have been added, renamed, or architecture has changed.
          → Skip if no structural changes. NEVER read graphify-out/graph.json directly — query only.
          → Excluded via .graphifyignore: .next/ node_modules/ graphify-out/ *.pdf

## Mandatory Session Start Sequence
→ Trust session-start.md as your primary brief. Read project-context.md only when architecture questions arise.
```
STEP 1 → Read context/session-start.md          (active phase, next tasks, blockers)
STEP 2 → Read memory/session-log.md             (last entry only)
STEP 3 → Read memory/problems.md                (active + recurring only)
STEP 4 → Read peers/hive-config.md + resolve digests via HIVE.md (reads_from: MTECH, AUDB, AUREA)
STEP 5 → Report: phase, next 3 tasks, active blockers, relevant peer patterns
```

## Mandatory Session End Sequence
```
STEP 1 → PATCH memory/tasks.json                (update tasks touched this session)
STEP 2 → PATCH memory/problems.md               (update problems worked on)
STEP 3 → APPEND to memory/solutions-log.md      (if any pattern proven this session)
STEP 4 → APPEND to memory/session-log.md        (new timestamped entry — append only)
STEP 5 → PATCH context/session-start.md         (update phase, progress, next 3 tasks, blockers)
STEP 6 → OVERWRITE peers/peer-digest.md         (regenerate from current state)
```

## Critical File Rules
- `memory/session-log.md` is APPEND-ONLY.
- `context/session-start.md` is PATCHED each session — never overwritten.
- `memory/tasks.json` is the source of truth for all task states.
- DELIBERATION.md tracks open decisions — do not resolve them without Edwin's input.

---

# Aureon Bridge — Website Project

## What This Is

You are building the marketing and conversion website for **Aureon Bridge**, an AI automation agency. The site's one job is to convert visitors into booked consultations. Every design and copy decision should serve that goal.

This file contains everything you need. Read it fully before writing a single line of code.

---

## The Company

**Aureon Bridge** builds custom AI automation for small and mid-size businesses. "Aureon" derives from gold (quality, value). "Bridge" is the core concept — bridging the gap between a business and the technology that should be working for it.

**Founder:** Edwin Scripe. Background in marketing and business management, self-taught development skills. His father owns an auto repair shop — Edwin watched him struggle with expensive, fragmented tools that never worked together. He built Aureon Bridge to solve that problem at an affordable price.

**Current clients:** Morgatech Auto Repair (Beltsville, MD) — proof of concept. Engineering firm — secondary client.

**Long-term vision:** Horizontal automation agency across verticals, eventually productized into a SaaS platform.

**Proof of concept site (for reference only):** https://morgatechauto.com

---

## Brand

### Voice & Tone
- **Confident + human.** Direct claims, no hedging, no corporate jargon.
- Write like someone who grew up around the problem and built the real solution.
- "We automate booking and customer communication" — not "we help streamline your operations."
- Never: buzzword-heavy, over-casual, or stiff/corporate.

### The One-Liner (use this everywhere)
> "Is your admin process bleeding your profits? Aureon Bridge automates booking and customer communication so you reclaim margins and scale lean."

### Color Palette
```
DARK_NAVY:   #1A1A2E   — primary text, headers, dark backgrounds
GOLD:        #B8860B   — accent, CTAs, highlights (brand color)
GOLD_LIGHT:  #D4AF37   — secondary accent, rules, hover states
MID_GREY:    #4A4A5A   — body text
CREAM:       #FAF7F0   — warm off-white backgrounds
WHITE:       #FFFFFF
```

### Typography
- **Headings:** Bold, clean sans-serif (Inter or similar). Dark navy.
- **Body:** Regular weight, mid-grey, generous line height (1.6–1.7).
- **Accent text:** Gold for section labels, CTAs, highlights.
- No decorative fonts. No gradient text.

### Design Principles
- Flat design. No gradients, no mesh backgrounds, no noise textures.
- Generous whitespace. Sections should breathe.
- Every section has one job. No section tries to do two things.
- Gold left-border accents for callout blocks and pullquotes.
- Mobile-first. The cold-call follow-up page especially — managers will view it on their phone.

---

## Tech Stack

**Recommended:** Next.js 14+ (App Router) + Tailwind CSS + TypeScript

**Reasoning:**
- App Router handles SEO metadata cleanly per page
- React components needed for the AI booking chat interface (BookingChat)
- Tailwind for rapid, consistent styling
- TypeScript for safety in the booking flow logic

**Deployment:** Vercel (free tier handles this easily)

**Key integrations:**
- Calendly (embedded in booking flow) OR custom calendar solution
- OpenAI API (for the conversational booking intake — see Booking Flow below)
- A headless CMS (Contentful, Sanity, or MDX files) for blog posts when added in Phase 2

**Do not use:**
- WordPress
- Heavy animation libraries (GSAP, Framer Motion) at launch — keep it fast
- Any CSS framework other than Tailwind

---

## Page Architecture

### Phase 1 — Launch Pages

| Route | Name | Audience | Priority |
|---|---|---|---|
| `/` | Homepage | Shop owners (inbound/organic) | P0 |
| `/for-shops` | Cold Call Follow-Up | Managers (post-cold-call) | P0 |
| `/services` | Services | Both | P1 |
| `/pricing` | Pricing | Both | P1 |
| `/contact` | Contact + Book | Both | P1 |
| `/thank-you` | Thank You | Post-booking | P2 |
| `/privacy` | Privacy Policy | Legal | Required |
| `/terms` | Terms of Service | Legal | Required |

### Phase 2 — Post-Launch (do not build now)
- `/free-audit` — Lead magnet landing page
- `/results` — Case studies
- `/about` — Founder story and team
- `/blog` and `/blog/[slug]` — Content/SEO

---

## The AI Booking Flow (Most Important Feature)

### Concept
The booking experience IS the product demo. When a visitor books a consultation, they interact with a conversational AI intake — a chat interface that asks qualifying questions, generates a live estimate of their potential ROI, and then presents the Calendly calendar to pick a time.

This demonstrates what Aureon Bridge builds for clients. The visitor's first reaction should be: *"Wait — this is the thing they're selling."*

### How It Works

**Entry points:** The "Book a Free Consultation" CTA everywhere on the site leads to this flow. It lives on `/contact` and is also embedded on `/for-shops`.

**Flow — step by step:**

1. **Greeting** (AI message, no user input yet):
   > "Hi! I'm Aureon's intake assistant. Before we schedule your call, I'd love to learn a bit about your business — it'll help us make the most of your time with Edwin. Ready?"
   > [Yes, let's go →]

2. **Q1 — Business type:**
   > "What kind of business do you run?"
   - Auto repair shop
   - Engineering firm
   - Real estate operation
   - Something else (free text)

3. **Q2 — Staff size:**
   > "How many people work at your business?" (number input or range selector)

4. **Q3 — Biggest pain:**
   > "What's eating the most time in your operation right now?"
   - Answering calls / booking appointments
   - Following up with customers
   - Managing multiple software tools
   - Social media and marketing
   - Something else

5. **Q4 — Current monthly software spend (optional, skippable):**
   > "Roughly how much do you spend on software tools per month? (You can skip this.)"
   - Under $200
   - $200–$500
   - $500–$1,000
   - Over $1,000 / I'm not sure / Skip

6. **Results screen (personalized, calculated):**
   Based on answers, display a personalized insight. Example for auto repair:
   > "Based on what you've shared, shops like yours typically lose **$3,400–$4,800/month** in missed calls and disconnected tools. Aureon Bridge's Professional tier is built for exactly this.
   >
   > Edwin will review your answers before the call so you don't have to repeat yourself.
   >
   > Pick a time that works for you:"
   > [Calendly embed appears]

**If they skip:** A fallback simplified booking view — no intake, just the Calendly calendar with a short context paragraph.

### Tech Implementation Notes
- Build the chat as a React component with local state (message array)
- Questions render as AI "messages" on the left; answers as user "bubbles" on the right
- Use OpenAI API (gpt-4o-mini for cost efficiency) to generate the personalized results screen copy based on the answers — do NOT hardcode all combinations
- The prompt to OpenAI should include the user's answers and instruct it to: calculate an estimated monthly loss figure using industry data, recommend the appropriate tier, and write 2–3 sentences in Aureon Bridge's brand voice
- Store the intake answers in state and pass them as query params or a POST to the Calendly prefill API so Edwin sees them before each call
- The Calendly embed should use their prefill API to pass: name, email (if collected), and a "notes" field with the intake summary
- Typing indicator (animated dots) while "AI" is processing each message
- On mobile: full-screen chat view, calendar below

### What NOT to do
- Do not make this a standard form. It must feel like a conversation.
- Do not use a third-party chatbot widget (Intercom, Drift, etc.) — build it custom.
- Do not collect email before showing value. The results screen earns the ask.

---

## Homepage (`/`) — Section Layout

**Audience:** Shop owner. They arrived via Google search or referral after a cold call.
**Job:** Get them from "curious" to "I need to book a call."

### Section 1 — Hero
- **Headline (H1):** "Your admin process is bleeding your profits." — problem-first, generic (not industry-specific).
- **Subheadline:** "Aureon Bridge builds custom AI automation systems that handle booking, follow-up, and customer communication — so your team stops doing admin and starts doing the work that actually pays."
- **No industry switcher.** The hero is generic. Industry-specific content lives on /for-shops.
- **CTA button:** "Book a Free Consultation" — gold, prominent.
- **Below CTA:** Trust anchor — "Working with businesses in the DMV." Update to a specific count once a second client is confirmed.

### Section 2 — The Problem
- **Label:** "THE PROBLEM" (small caps, gold)
- **Headline:** "You're paying $800–$2,400/month for tools that don't talk to each other."
- **Body:** Speak to the fragmentation pain. Multiple SaaS tools, each $200–$400/month, each solving one piece of the puzzle. The manager still answers every call. The owner still manually follows up. The stack is expensive and the work isn't automated.
- **Visual:** Side-by-side or stacked comparison: "Your current stack" (logos of common tools, cost per month) vs. "Aureon Bridge" (one line, one price).

### Section 3 — The Solution
- **Label:** "HOW IT WORKS"
- **Headline:** "One custom automation system. Built for how your business actually runs."
- **Steps (numbered, horizontal on desktop):**
  1. **Audit** — We map your current workflows and identify exactly where time and revenue are leaking.
  2. **Build** — We design and deploy a custom automation stack. No templates. Built for your operation.
  3. **Run** — Your system handles booking, follow-up, reminders, and communications. You focus on the work.
- **CTA:** "See what this looks like for your business →" (links to /services)

### Section 4 — Services Preview
- **Label:** "WHAT WE AUTOMATE"
- Show 4–6 cards: Booking Automation, Customer Follow-Up, Social Media Content, Google Ads Management, Task Management, Email Campaigns.
- Each card: icon + name + one-sentence outcome.
- **CTA:** "View all services →" (links to /services)

### Section 5 — Proof / Social Proof
- **Label:** "IN PRACTICE"
- Morgatech reference: describe what was built (booking automation, Google Ads, social content, email campaigns) without specific numbers until they're ready. Or use placeholder: "See how we automated a DMV auto repair shop from intake to follow-up."
- Pull quote from Morgatech owner if available.
- Once second client exists, add their reference here.
- **CTA:** "Book a consultation to see what this looks like for your shop →"

### Section 6 — Pricing Anchor
- **Label:** "TRANSPARENT PRICING"
- One-sentence framing: "Most shops replacing Aureon Bridge's Professional tier were spending $1,400+/month on tools that didn't integrate. We do it for $700."
- Show pricing tier cards (all 4). Keep it light — full detail on /pricing.
- **CTA on each card:** "Get started →" → leads to booking flow

### Section 7 — Final CTA
- **Dark navy full-width band.**
- **Headline:** "Stop losing revenue to admin overhead."
- **Subheadline:** "Book a 30-minute call. We'll map out exactly what automation would look like for your operation — no commitment required."
- **CTA:** "Book a Free Consultation" (gold button)

---

## /for-shops Page — Cold Call Follow-Up

**Audience:** Manager or service adviser who just received a cold call from Edwin.
**Job:** Validate the call, build immediate credibility, get them to book OR forward to the owner.
**Tone:** Shorter, faster, more direct than the homepage. They already heard the pitch — this confirms it.

### Section 1 — Hero (above fold, punchy)
- **Headline:** "Thanks for taking my call. Here's what I meant."
- **Subheadline:** "I build custom AI automation for auto repair shops. No bloat, no enterprise pricing. Just tools that handle the admin work your operation runs on — without needing a person to run them."
- **CTA:** "See what this looks like →" (smooth scroll to Section 2)

### Section 2 — The 60-Second Version
- Three-column or stacked: **The problem / What we build / What it costs**
- Extremely concise. Bullet points. No fluff.
- Cost: "Starting at $700 setup, $300/month."

### Section 3 — One Proof Point
- The Morgatech reference. One paragraph, no padding.

### Section 4 — Single CTA
- "Ready to show your owner? Book a 15-minute call and we'll walk through it together."
- Booking flow embedded directly on this page (not a redirect).

---

## /services Page

- Intro: What Aureon Bridge does at a high level. Multi-vertical framing.
- Services grid: Each automation type as a card with icon, name, description, and which tier includes it.
- Industry section: "We work across industries." Auto repair (primary), Engineering, Real estate (coming soon), Other.
- CTA: Book a consultation.

---

## /pricing Page

- One-liner at the top: "Most shops were paying $1,400+/month for less. Here's what we charge."
- Pricing table: All 4 tiers. Setup fee + monthly. Scope per tier.
- Differentiate Professional vs. Enterprise clearly:
  - Professional: One location, 1–3 core automations, async support, monthly review.
  - Enterprise: Multi-location or 4+ integrated systems, dedicated optimization cadence, faster support SLA.
- FAQ section below the table:
  - "What happens if I cancel?" → You keep your data. Automations are tied to the active retainer.
  - "How long does setup take?" → Setup takes 3–14 working days depending on scope.
  - "Is there a contract?" → Yes, but it's a simple service agreement — easy to exit with short notice. No lock-in penalties.
  - "Do you work with my existing tools?" → We audit what you have and build around it. Most shops need fewer tools after we're done.
- CTA: Book a consultation.

---

## /contact Page

- Headline: "Let's talk about your operation."
- The full AI intake booking flow (see Booking Flow section above).
- Below the flow: simple contact email for those who prefer async.

---

## /thank-you Page

- Confirm the booking. "You're on the calendar."
- What to expect: "Edwin will review your intake answers before the call. No need to repeat yourself."
- One soft next step: "While you wait, here's what a typical first month looks like." (brief 3-step list)
- Hidden from navigation. No index.

---

## /privacy and /terms

- Standard legal pages. Use attorney-reviewed content when available.
- Placeholder: generate clean, readable versions using MODPA + CAN-SPAM + general best practices as a starting framework.
- Linked in footer only. Not in main navigation.

---

## Navigation

**Desktop nav (left to right):**
`Aureon Bridge [logo]` | `Services` | `Pricing` | `Blog` *(Phase 2)* | `[Book a Consultation]` *(gold button, right)*

**Mobile nav:** Hamburger → full-screen overlay with same links + CTA button.

**Footer:**
- Column 1: Logo + one-liner tagline + "Serving the DMV and beyond."
- Column 2: Quick links (Services, Pricing, Contact)
- Column 3: Legal links (Privacy Policy, Terms of Service)
- Bottom bar: "© 2026 Aureon Bridge LLC. All rights reserved."

---

## SEO Basics (implement from day one)

- Each page has a unique `<title>` tag and `<meta name="description">`.
- Homepage title: `Aureon Bridge | AI Automation for Auto Repair Shops & Beyond`
- Use semantic HTML: `<h1>` only once per page, proper `<h2>` hierarchy.
- Images: descriptive `alt` text on every image.
- No page should have a Largest Contentful Paint (LCP) over 2.5 seconds.
- `sitemap.xml` and `robots.txt` generated at build time.
- Structured data (JSON-LD): LocalBusiness schema on homepage.

---

## Component Checklist

Build these components first — everything else composes from them:

- [ ] `<NavBar />` — sticky, mobile-responsive
- [ ] `<Footer />` — full footer with columns
- [ ] `<CTAButton />` — primary (gold) and secondary variants
- [ ] `<SectionLabel />` — small caps gold label above section headings
- [ ] `<PricingCard />` — tier card with setup fee, monthly, scope, CTA
- [ ] `<ServiceCard />` — icon + name + one-line outcome
- [ ] `<BookingChat />` — the AI intake conversation interface (most complex)
- [ ] `<CalendlyEmbed />` — wrapper for Calendly with prefill support
- [ ] `<CalloutBlock />` — gold left-border callout/pullquote block
- [ ] `<HRRule />` — styled horizontal rule (gold)
- [ ] `<PageHero />` — reusable hero section shell

---

## Environment Variables Needed

```bash
OPENAI_API_KEY=          # For the booking intake AI response
CALENDLY_API_KEY=        # For prefilling intake data into booking
NEXT_PUBLIC_CALENDLY_URL= # Your Calendly scheduling link
```

---

## Borrow-First Rule
Before writing any file from scratch, check this map. Use the donor file as the starting point — adapt, don't recreate.

### Borrow from MTECH (`C:\Users\edwin\Desktop\web design\morgatech 5\Morgatech-current\`)
| Donor file | Action | What changes |
|---|---|---|
| `lib/utils.ts` | **Copy as-is** | Nothing — `cn()` is universal |
| `app/layout.tsx` | **Copy + adapt** | Replace metadata (ABRG brand), remove BookingProvider/BookingModal/ChatWidgetLoader/Shapo script, keep Inter font + Navbar/Footer composition + JSON-LD skeleton pattern |
| `next.config.ts` | **Copy + strip** | Remove `output:"standalone"` (Vercel, not Docker), remove `allowedDevOrigins`, remove MTECH redirects (start empty, add ABRG redirects when needed) |
| `types/index.ts` | **Copy + replace** | Keep TypeScript pattern, replace all MTECH types with ABRG types: Service, PricingTier, NavItem, Testimonial, BlogPost (Phase 2) |
| `next-env.d.ts` | **Copy as-is** | Nothing — standard Next.js |
| `components/layout/Navbar.tsx` | **Copy + adapt** | Replace MTECH nav links + brand with ABRG (Services, How It Works, Pricing, For Shops, CTA). Keep sticky/mobile-hamburger structure. |
| `components/layout/Footer.tsx` | **Copy + adapt** | Replace MTECH content with ABRG 4-column layout. Keep component structure. |
| `app/blog/[slug]/page.tsx` | **Note for Phase 2** | Do not build now — borrow when Phase 2 blog is ready |

### Borrow from AUDB (`C:\Users\edwin\Desktop\scripe ai\aureon\`)
| Donor file | Action | What changes |
|---|---|---|
| `app/globals.css` | **Copy + replace tokens** | Keep the `@theme inline` + CSS custom property structure. Replace ALL token values with ABRG palette: `--ab-navy: #1A1A2E`, `--ab-gold: #B8860B`, `--ab-gold-light: #D4AF37`, `--ab-grey: #4A4A5A`, `--ab-cream: #FAF7F0`. Remove dark theme block (no dark mode at launch). |

### Build from scratch (no donor equivalent)
- `lib/constants.ts` — ABRG static data (services, pricing tiers, nav links, footer links)
- `features/home/` — all homepage section components
- `features/for-shops/` — /for-shops section components
- `features/services/` — /services page components
- `features/pricing/` — /pricing page + PricingCard
- `components/BookingChat.tsx` — AI intake conversation (unique to ABRG — no donor)
- `components/CalendlyEmbed.tsx` — Calendly wrapper with prefill
- `app/api/intake/route.ts` — OpenAI call for personalized results screen

---

## Build Order (follow this sequence)

1. Project setup: Next.js + Tailwind + TypeScript. Configure design tokens (colors, fonts) in `tailwind.config.ts`.
2. Layout components: NavBar, Footer.
3. Shared components: CTAButton, SectionLabel, HRRule, CalloutBlock.
4. Homepage: build section by section, top to bottom.
5. BookingChat component + CalendlyEmbed.
6. /contact page integrating BookingChat.
7. /for-shops page.
8. /services page.
9. /pricing page + PricingCard component.
10. /thank-you page.
11. /privacy and /terms pages.
12. SEO metadata, sitemap, robots.txt.
13. Mobile responsiveness pass across all pages.
14. Performance audit (Lighthouse). Target: 90+ on all metrics.

---

## What NOT to Build (at launch)

- No blog (Phase 2)
- No about page (Phase 2)
- No case studies page (Phase 2)
- No lead magnet landing page (Phase 2)
- No admin dashboard or client portal
- No authentication
- No payment processing integration (consultations are booked, not purchased online)
- No dark mode at launch

---

## Key Business Context for Decision-Making

- **Primary CTA:** Book a Free Consultation — everywhere, always.
- **Two audiences:** Owners (homepage, organic) and Managers (post-cold-call, `/for-shops`).
- **The booking flow is the product demo.** It should feel like what Aureon Bridge sells.
- **Morgatech (morgatechauto.com) is the proof of concept** — do not over-reference it since it is smaller than the target market.
- **Pricing (monthly retainers, confirmed):** Starter $300/mo | Starter Complete $450/mo | Professional $700/mo | Enterprise $1,300/mo. Setup fees are quoted per client based on scope — do not display a fixed setup fee anywhere on the site without Edwin's confirmation.
- **Contracts:** A service agreement exists but is free and easy to exit. Do not write "no contract" anywhere — that is inaccurate. Use "simple service agreement" and "easy to exit."
- **Setup timeline:** 3–14 working days depending on scope. Use this range — not a single number.
- **Offboarding:** Clients keep their data. Automations stop if retainer ends.
- **Legal:** Privacy Policy and Terms of Service must be live before launch. TCPA, CAN-SPAM, and MODPA compliance required.
- **Multi-vertical:** Auto repair is the primary vertical with the strongest proof. Engineering is live. Real estate in development. The site acknowledges all three but leads with auto repair.

---

## Questions to Resolve Before or During Build

These were open as of the initial planning session. Clarify before making assumptions:

1. What Calendly account/link should the booking flow use?
2. Is there an existing Aureon Bridge logo? If not, a text-based wordmark in gold/dark is the fallback.
3. What photography/imagery assets exist? If none, use high-quality stock (auto repair shop, professional service contexts). No generic tech stock imagery.
4. What domain registrar is the domain on? (For DNS configuration on Vercel.)
5. Confirm the exact Wyoming LLC name as registered — use it in legal pages.
6. Has the OpenAI API account been set up? What spending limit is appropriate for the booking flow?
