# Stackless TODO
**Last updated:** 2026-02-22

---

## High Priority — UI/UX

- [ ] **#2 Fix CurlMagic product card tag hierarchy**
  Convert brand/retailer/category meta pills to plain dot-separated text. Move LIGHTWEIGHT + CGM status badges to their own row. Give community tags (Holy Grail, Budget Starter etc.) a distinct style with ⭐ prefix. Fix "Good Sotc" → "Good SOTC" typo in products-data.js.

- [ ] **#7 Full UI/UX audit — Stackless main site**
  Review all 7 main pages (index, about, blog, fleet, shop, resources, projects) for consistency: tag/badge styles, spacing, dark mode, mobile nav, CTA placement, typography.

- [ ] **#8 Full UI/UX audit — CurlMagic sub-site**
  Review all 7 curly-girl pages. Products page is priority (tag fix above). Check dark mode, spacing, mobile nav.

---

## High Priority — Strategy & Structure

- [ ] **#11 Homepage overhaul**
  - Messaging: "code" is too narrow — reframe to AI tools broadly
  - Move CurlMagic (free) to top of projects list — it's the try-it hook
  - Remove duplicate "Browse Products" nav button (same as Shop)
  - Fix dark mode bug: white text on bright green background is invisible
  - Fix bottom of page: breadcrumb/cat element is disorganised
  - Expand lab feed beyond Finance + Consumer tabs

- [ ] **#12 New page: The Non-Coder Start Guide**
  The missing centrepiece. End-to-end guide: getting a Claude subscription → installing Claude Code → what a terminal is → first run → first project. Written from Lydia's real experience (watched videos, still didn't get it, husband helped with initial install). This is the key differentiator — nobody else is writing this from authentic non-developer experience.

- [ ] **#13 Rethink the shop — sell tutorials not just dashboards**
  Shift from selling £5 digital products to selling tutorials (step-by-step build guides). Different use cases for different people: non-coding gamer (MSI Claw mapper), busy parent (Tesco tracker), etc. Not labelled by persona — just different builds. MSI Claw is the natural first tutorial product.

- [ ] **#15 Reframe blog as tutorial hub**
  Lydia doesn't identify as a blogger and finds blogs boring. Rename/reframe to Guides, Tutorials, or similar. Lead with the tutorial framing. Integrate with the Non-Coder Start Guide page.

- [ ] **#16 Projects page — audit and add missing projects**
  Currently missing: The Agentcy (game, playable), Zoe Recipe Finder, Acute HF EHR Pathway.
  Move CurlMagic to first position (currently buried 4th behind paid products).
  Consider 2-3 spotlight projects with more detail.

---

## Content

- [ ] **#4 Write post-14: Security for Non-Coders**
  Next in Non-Expert Series. "What Actually Happens When You Get Hacked" — phishing, credential stuffing, demystify the threat not the defence. Follow posts 11-13 template. Update blog.html and series banner.

- [ ] **#14 Audit blog posts — remove tool references Lydia hasn't used**
  - post-8 (Non-Coder's Toolkit): full sections on Cursor/Windsurf/Copilot, v0, Bolt/Lovable/Replit Agent — worst offender
  - post-10 (AI Orchestra): tool card for Cursor/Windsurf, claims about trying v0/Bolt/Replit/Lovable
  - post-6 (Security): one passing mention of "Cursor, or similar" — easy removal
  - post-9 (Gemini Canvas): v0 and Bolt in comparison table
  Credibility depends on authentic non-developer voice — only reference tools actually used.

- [ ] **#10 MSI Claw mapper: blog post + push to GitHub**
  claw-mapper/ is built but not pushed. Write accompanying blog post. Reference from fleet page.

---

## Technical / SEO

- [ ] **#3 Fix Payhip buy button URLs**
  All Buy Now buttons currently point to #. Set up Payhip account, create product listings, replace placeholders.

- [ ] **#5 Add email signup to blog page**
  Mailchimp free tier. Between Non-Expert Series banner and article list. Minimal styling.

- [ ] **#6 Create sitemap.xml**
  Cover all main pages + 13 blog posts + curly-girl sub-site. Submit to Google Search Console.

---

## Needs Human Action

- [ ] **#9 Set up LinkedIn page for Stackless**
  Posts 11-13 ready to repurpose immediately using Social Adapter prompt from post-13.

---

## Done

- [x] Dark mode + sun/moon toggle — all Stackless pages + all CurlMagic pages
- [x] Nav fixes — fleet.html, shop/index.html
- [x] 3 new blog posts (posts 11-13: Non-Expert Series)
- [x] Non-Expert Series banner on blog.html
- [x] content-roadmap.md written
- [x] Deleted claw-camp folder and removed from CLAUDE.md
