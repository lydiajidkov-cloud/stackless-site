# Completed Tasks

---

### Archived (end of session): 2026-02-22 08:57:23

## Task 1: (Template — no task defined)
**Status:** [x] Complete (N/A — blank template, skipped)

## Task 2: Remove duplicate "Browse Products" nav button
**Status:** [x] Complete

**Context:** The site navigation has both a regular "Shop" link and a styled "Browse Products" CTA button (`class="nav-cta"`) that both point to the same destination (`shop/index.html`). This creates redundancy in the nav. The "Browse Products" `<li>` should be removed from the desktop nav (`<ul class="nav-links">`) and the equivalent `<a>` from the mobile menu (`<div class="mobile-menu">`) in every affected file. The `.nav-cta` CSS class must be kept because blog posts 12 and 13 use it on their "Shop" nav link.

**Plan:**
1. **index.html** — Remove line 67 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav, and remove line 315 (`<a href="shop/index.html" class="nav-cta">Browse Products</a>`) from mobile menu.
2. **about.html** — Remove line 49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav. No matching mobile menu entry found (already clean).
3. **projects.html** — Remove line 49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
4. **blog.html** — Remove line 49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
5. **fleet.html** — Remove line 426 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav, and remove line 764 (`<a href="shop/index.html" class="nav-cta">Browse Products</a>`) from mobile menu.
6. **resources.html** — Remove line 237 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
7. **shop/index.html** — Remove line 408 (`<li><a href="index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav. Mobile menu (line 536) already has only "Shop" with no duplicate.
8. **blog/post-11-privacy-for-non-coders.html** — Remove line 223 (`<li><a href="../shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav. Mobile menu (line 371) already has only "Shop".
9. **claw-mapper/index.html** — Remove line 236 (`<li><a href="../shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav. Mobile menu (line 440) already has only "Shop".
10. **Keep all `.nav-cta` CSS** in `styles.css`, `shop/styles.css`, and `claw-mapper/index.html` — the class is still used by blog posts 12 and 13 for their "Shop" CTA styling.
11. Verify no remaining "Browse Products" text exists in any HTML file (except TODO.md/ideas.md references).

**Acceptance Criteria:**
- [ ] No `<li>` or `<a>` containing "Browse Products" remains in any HTML file's nav or mobile menu
- [ ] The "Shop" link still appears in every page's desktop nav and mobile menu
- [ ] `.nav-cta` CSS rules are preserved (used by post-12, post-13)
- [ ] All pages render correctly with no broken nav layout
- [ ] Run tests and ensure they pass

**Files to check:** index.html, about.html, projects.html, blog.html, fleet.html, resources.html, shop/index.html, blog/post-11-privacy-for-non-coders.html, claw-mapper/index.html, styles.css, shop/styles.css

---

## Task 3: Remove Cursor mention from post-6 security blog post
**Status:** [x] Complete

**Context:** In `blog/post-6-security-for-non-coders.html` line 196, the intro paragraph references "Claude Code, Cursor, or similar" as example AI tools. The mention of Cursor should be removed so the text only references Claude Code, keeping the blog aligned with the Stackless brand focus.

**Plan:**
1. Edit `blog/post-6-security-for-non-coders.html` line 196
2. Change `non-coders using AI tools like Claude Code, Cursor, or similar` to `non-coders using AI tools like Claude Code`
3. Verify no other Cursor mentions exist in the file that need updating

**Acceptance Criteria:**
- [ ] Line 196 reads "non-coders using AI tools like Claude Code" with no mention of Cursor
- [ ] No broken HTML or missing closing tags
- [ ] Run tests and ensure they pass

**Files to check:** blog/post-6-security-for-non-coders.html

---

## Task 4: Remove duplicate "Browse Products" nav button across all pages
**Status:** [x] Complete

**Context:** The site navigation contains both a "Shop" link and a "Browse Products" CTA button, both pointing to `shop/index.html`. This is redundant — the CTA styled button (`class="nav-cta"`) duplicates the plain "Shop" link. The "Browse Products" button appears in 9 HTML files across desktop nav (`<li>` wrapped) and mobile menu (plain `<a>` tag) variants. After removal, the `.nav-cta` CSS rules in `styles.css` and `shop/styles.css` become dead code and should also be removed.

**Plan:**
1. **index.html** — Remove line ~67 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav `<ul class="nav-links">`, and remove line ~315 (`<a href="shop/index.html" class="nav-cta">Browse Products</a>`) from mobile menu `<div class="mobile-menu">`.
2. **about.html** — Remove line ~49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
3. **projects.html** — Remove line ~49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
4. **blog.html** — Remove line ~49 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
5. **fleet.html** — Remove line ~426 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav, and remove line ~764 (`<a href="shop/index.html" class="nav-cta">Browse Products</a>`) from mobile menu.
6. **resources.html** — Remove line ~237 (`<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
7. **shop/index.html** — Remove line ~408 (`<li><a href="index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
8. **blog/post-11-privacy-for-non-coders.html** — Remove line ~223 (`<li><a href="../shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
9. **claw-mapper/index.html** — Remove line ~236 (`<li><a href="../shop/index.html" class="nav-cta">Browse Products</a></li>`) from desktop nav.
10. **styles.css** — Remove `.nav-cta` rules at lines ~150-168 (base + hover), line ~777 (`.mobile-menu .nav-cta`), and line ~1207 (`[data-theme="dark"] .nav-cta`).
11. **shop/styles.css** — Remove `.nav-cta` rules at lines ~86-97 (base + hover) and ~443 (responsive).
12. Run a final grep for "Browse Products" and "nav-cta" across all HTML/CSS files to confirm no remnants.

**Acceptance Criteria:**
- [ ] No `<li>` or `<a>` containing "Browse Products" remains in any HTML file
- [ ] No `nav-cta` class references remain in any HTML file
- [ ] No `.nav-cta` CSS rules remain in styles.css or shop/styles.css
- [ ] The "Shop" link still appears and works correctly in both desktop and mobile nav on every page
- [ ] Run tests and ensure they pass

**Files to check:** index.html, about.html, projects.html, blog.html, fleet.html, resources.html, shop/index.html, blog/post-11-privacy-for-non-coders.html, claw-mapper/index.html, styles.css, shop/styles.css

---


## Task 3: Restructure product card tag hierarchy and fix SOTC typo
**Status:** [x] Complete
**Completed:** 2026-02-22 09:47:04
**Duration:** 3m 13s
**Commits:**
- bc659af Restructure product card tag hierarchy and fix SOTC typo

**Context:** Product cards in `curly-girl/products.html` currently render brand, retailer, category, weight, and CGM status all as styled pills inside a single `.product-meta` row. Community tags (Holy Grail, Budget Starter, etc.) render in a separate `.product-tags` row but look visually similar to meta pills. The task requires three visual hierarchy changes: (1) convert brand/retailer/category from styled pills to plain dot-separated text, (2) move LIGHTWEIGHT/weight and CGM badges to their own distinct row, and (3) give community tags a visually distinct style. Additionally, `formatLabel("good-sotc")` produces "Good Sotc" instead of "Good SOTC" — needs a special-case fix or data change.

**Plan:**

1. **Fix the typo in `products-data.js`** (lines ~427-439, `CG_PRODUCT_TAGS` definition):
   - The tag key `"good-sotc"` stays as-is (it's a slug used for CSS classes and filtering)
   - Change the label in `CG_PRODUCT_TAGS["good-sotc"]` from `"Good SOTC"` (already correct in definition) — but `formatLabel()` is what renders it on cards, not the tag definition label
   - The real fix: in `createProductCard()`, use `CG_PRODUCT_TAGS[t].label` instead of `formatLabel(t)` for tag rendering, so "Good SOTC" displays correctly from the definition

2. **Restructure `createProductCard()` in `products.html`** (line 129-134):
   - **Row 1 (meta text):** Replace brand/retailer/category pills with plain dot-separated text: `<div class="product-meta-text">Brand · Retailer · Category</div>`
   - **Row 2 (badges):** Create a new `<div class="product-badges">` containing the weight pill (`meta-weight-*`) and CGM badge (`product-cgm cgm-*`)
   - **Row 3 (community tags):** Keep `.product-tags` div but use `CG_PRODUCT_TAGS[t].label` for display text (fixes SOTC typo), and add a fallback to `formatLabel(t)` for unknown tags

3. **Update CSS in `styles.css`**:
   - **Add `.product-meta-text`:** Plain text style — `font-size: 0.65rem; color: var(--text-muted);` no background, no pill shape, dot separator
   - **Add `.product-badges`:** Flex row with gap, holds weight + CGM badges (keep existing pill styling for these)
   - **Restyle `.product-tag` community tags:** Give them a distinct look — e.g. outlined/bordered style instead of filled pills, or a softer background with a left border accent, to visually separate them from the weight/CGM badges
   - **Remove** now-unused `.meta-brand`, `.meta-retailer`, `.meta-category` pill styles (or leave as dead CSS if cautious)

4. **Dark mode check:** Verify dark mode overrides in styles.css still work for the restructured elements — the existing `.dark .product-meta-item` rules may need updating to target `.product-badges` children instead.

**Acceptance Criteria:**
- [x] Brand, retailer, and category display as plain dot-separated text (no pill/badge styling)
- [x] Weight (LIGHTWEIGHT/MEDIUM/HEAVY) and CGM badges appear on their own row with existing pill styling preserved
- [x] Community tags (Holy Grail, Budget Starter, Good SOTC, etc.) have a visually distinct style from badges
- [x] "Good SOTC" displays with correct capitalisation (not "Good Sotc")
- [x] Tag filtering still works correctly via the filterTag dropdown
- [x] Dark mode renders all restructured elements correctly
- [x] Run tests and ensure they pass

**Files to check:** `curly-girl/products.html`, `curly-girl/styles.css`, `curly-girl/products-data.js`

---
## Task 3: Restructure product card tag hierarchy and fix SOTC typo
**Status:** [x] Complete

**Context:** Product cards in `curly-girl/products.html` currently render brand, retailer, category, weight, and CGM status all as styled pills inside a single `.product-meta` row. Community tags (Holy Grail, Budget Starter, etc.) render in a separate `.product-tags` row but look visually similar to meta pills. The task requires three visual hierarchy changes: (1) convert brand/retailer/category from styled pills to plain dot-separated text, (2) move LIGHTWEIGHT/weight and CGM badges to their own distinct row, and (3) give community tags a visually distinct style. Additionally, `formatLabel("good-sotc")` produces "Good Sotc" instead of "Good SOTC" — needs a special-case fix or data change.

**Plan:**

1. **Fix the typo in `products-data.js`** (lines ~427-439, `CG_PRODUCT_TAGS` definition):
   - The tag key `"good-sotc"` stays as-is (it's a slug used for CSS classes and filtering)
   - Change the label in `CG_PRODUCT_TAGS["good-sotc"]` from `"Good SOTC"` (already correct in definition) — but `formatLabel()` is what renders it on cards, not the tag definition label
   - The real fix: in `createProductCard()`, use `CG_PRODUCT_TAGS[t].label` instead of `formatLabel(t)` for tag rendering, so "Good SOTC" displays correctly from the definition

2. **Restructure `createProductCard()` in `products.html`** (line 129-134):
   - **Row 1 (meta text):** Replace brand/retailer/category pills with plain dot-separated text: `<div class="product-meta-text">Brand · Retailer · Category</div>`
   - **Row 2 (badges):** Create a new `<div class="product-badges">` containing the weight pill (`meta-weight-*`) and CGM badge (`product-cgm cgm-*`)
   - **Row 3 (community tags):** Keep `.product-tags` div but use `CG_PRODUCT_TAGS[t].label` for display text (fixes SOTC typo), and add a fallback to `formatLabel(t)` for unknown tags

3. **Update CSS in `styles.css`**:
   - **Add `.product-meta-text`:** Plain text style — `font-size: 0.65rem; color: var(--text-muted);` no background, no pill shape, dot separator
   - **Add `.product-badges`:** Flex row with gap, holds weight + CGM badges (keep existing pill styling for these)
   - **Restyle `.product-tag` community tags:** Give them a distinct look — e.g. outlined/bordered style instead of filled pills, or a softer background with a left border accent, to visually separate them from the weight/CGM badges
   - **Remove** now-unused `.meta-brand`, `.meta-retailer`, `.meta-category` pill styles (or leave as dead CSS if cautious)

4. **Dark mode check:** Verify dark mode overrides in styles.css still work for the restructured elements — the existing `.dark .product-meta-item` rules may need updating to target `.product-badges` children instead.

**Acceptance Criteria:**
- [x] Brand, retailer, and category display as plain dot-separated text (no pill/badge styling)
- [x] Weight (LIGHTWEIGHT/MEDIUM/HEAVY) and CGM badges appear on their own row with existing pill styling preserved
- [x] Community tags (Holy Grail, Budget Starter, Good SOTC, etc.) have a visually distinct style from badges
- [x] "Good SOTC" displays with correct capitalisation (not "Good Sotc")
- [x] Tag filtering still works correctly via the filterTag dropdown
- [x] Dark mode renders all restructured elements correctly
- [x] Run tests and ensure they pass

**Files to check:** `curly-girl/products.html`, `curly-girl/styles.css`, `curly-girl/products-data.js`

---

## Task 5: Create "The Non-Coder Start Guide" page
**Status:** [x] Complete
**Completed:** 2026-02-22 09:52:29
**Duration:** 5m 14s
**Commits:**
- 389f70d Add Non-Coder Start Guide (post-14) with Start Here CTA

**Context:** The stackless-site is a neo-brutalist static site targeting non-coders building with AI. It already has two blog series ("The Stackless Guide" 3-part, "The Non-Expert Series" 3-part) covering security, testing, toolkit, privacy, and agents. However, there is no foundational "start here" guide that covers the absolute beginning: getting a Claude subscription, installing Claude Code, understanding what a terminal is, and running your first project. This is the missing "step zero" content — the on-ramp before the existing guides. It should be written from Lydia's real experience as a non-coder, making it the key differentiator for the site. The page will be a new blog post (post-14) following established patterns: inline `<style>` for article-body, series badge, back-link, tags, meta, and the site's neo-brutalist card system (warning-card, example-card, step-card, tip-box). It also needs to be added to `blog.html` as a featured series/entry and linked from the homepage as a prominent CTA.

**Plan:**
1. **Create `blog/post-14-non-coder-start-guide.html`** — New blog post following the exact template pattern from existing posts (post-8 is the closest reference as a toolkit/guide post):
   - Standard `<head>`: charset, viewport, title, Google Fonts (Inter), `../styles.css`, theme toggle script, SEO meta, OG tags, Twitter cards, canonical URL
   - Standard nav (all 7 links, none active since it's a blog subpage), theme toggle, hamburger
   - `<main>` with `<div class="article-body">` (max-width: 720px, centered)
   - Back link: `<a class="back-link" href="../blog.html">&larr; All Posts</a>`
   - Series badge linking to the Stackless Guide series (or a new "Start Here" standalone badge)
   - Tags: "Getting Started", "Claude Code", "Beginner"
   - Title: "The Non-Coder Start Guide: From Zero to Your First AI Project"
   - Meta: estimated ~20 min read, February 2026
   - Inline `<style>` block matching existing blog post styles (article-body, h1-h3, p, blockquote, card classes)
   - Dark mode support in the inline styles using `[data-theme="dark"]` selectors

2. **Write the guide content** in these sections (using step-card, example-card, warning-card, tip-box patterns):
   - **Why This Guide Exists** — Lydia's perspective: doctor, not a developer, built real products
   - **Step 1: Get Claude Pro** — What it costs (£18/mo), what you get, why Claude specifically (vs ChatGPT/Gemini for code)
   - **Step 2: What Is a Terminal?** — Demystify the terminal/command line for absolute beginners. Windows Terminal vs PowerShell vs Git Bash. "It's just a text box where you type commands"
   - **Step 3: Install the Prerequisites** — Node.js (what it is, how to install), Git (what it is, how to install), GitHub account (what it is, why you need it)
   - **Step 4: Install Claude Code** — `npm install -g @anthropic-ai/claude-code`, what that command means word by word
   - **Step 5: Your First Run** — `claude` command, what happens, the permission prompts, how to talk to it
   - **Step 6: Your First Project** — A simple practical example (e.g., "build me a personal website"), what to expect, how long it takes
   - **Step 7: What Next** — Links to the existing Stackless Guide series (security, testing, toolkit), the Non-Expert Series, and the about page
   - Use warning-cards for common mistakes (e.g., "Don't paste API keys"), example-cards for real terminal output, step-cards for each installation step

3. **Update `blog.html`** — Add the new post:
   - Add a new featured series block at the top (before "The Stackless Guide") styled as a prominent "START HERE" banner with a distinct color (amber/yellow to stand out). Or integrate it as a standalone featured item
   - Add the article-item entry at the top of the article-list with tags "Getting Started", "Claude Code", "Beginner" and a "START HERE" series badge

4. **Update `index.html`** — Add a visible CTA or mention in the hero section or Lab Feed area linking to the start guide as a key piece of content. Could be a new project card or a callout within the existing hero

5. **Update `sitemap.xml`** — Add the new URL `https://stackless.tech/blog/post-14-non-coder-start-guide.html`

6. **Standard footer, mobile menu, and theme toggle JS** — Copy from existing blog posts (post-8 or post-13 as reference)

**Acceptance Criteria:**
- [ ] `blog/post-14-non-coder-start-guide.html` exists and renders correctly with the site's neo-brutalist design
- [ ] Page has full SEO (meta description, OG tags, Twitter cards, canonical URL, structured data)
- [ ] Page has working dark mode toggle that persists
- [ ] Page has responsive layout (mobile hamburger menu, readable on small screens)
- [ ] Content covers the complete journey: subscription, terminal basics, prerequisites, Claude Code install, first run, first project
- [ ] Uses the site's card system (step-card, warning-card, example-card) for key information
- [ ] Written in Lydia's voice: direct, non-technical, from real experience
- [ ] `blog.html` lists the new post prominently (featured "Start Here" section + article entry)
- [ ] `sitemap.xml` updated with the new page URL
- [ ] All internal links work (back to blog, series links to existing guides)
- [ ] Nav links match all other pages (Home, About, Projects, Blog, The Fleet, Resources, Shop)
- [ ] Run tests and ensure they pass

**Files to check:** `blog.html`, `blog/post-8-non-coders-toolkit.html` (template reference), `blog/post-13-content-creator-agent.html` (latest post reference), `index.html`, `sitemap.xml`, `styles.css`

---
## Task 5: Create "The Non-Coder Start Guide" page
**Status:** [x] Complete

**Context:** The stackless-site is a neo-brutalist static site targeting non-coders building with AI. It already has two blog series ("The Stackless Guide" 3-part, "The Non-Expert Series" 3-part) covering security, testing, toolkit, privacy, and agents. However, there is no foundational "start here" guide that covers the absolute beginning: getting a Claude subscription, installing Claude Code, understanding what a terminal is, and running your first project. This is the missing "step zero" content — the on-ramp before the existing guides. It should be written from Lydia's real experience as a non-coder, making it the key differentiator for the site. The page will be a new blog post (post-14) following established patterns: inline `<style>` for article-body, series badge, back-link, tags, meta, and the site's neo-brutalist card system (warning-card, example-card, step-card, tip-box). It also needs to be added to `blog.html` as a featured series/entry and linked from the homepage as a prominent CTA.

**Plan:**
1. **Create `blog/post-14-non-coder-start-guide.html`** — New blog post following the exact template pattern from existing posts (post-8 is the closest reference as a toolkit/guide post):
   - Standard `<head>`: charset, viewport, title, Google Fonts (Inter), `../styles.css`, theme toggle script, SEO meta, OG tags, Twitter cards, canonical URL
   - Standard nav (all 7 links, none active since it's a blog subpage), theme toggle, hamburger
   - `<main>` with `<div class="article-body">` (max-width: 720px, centered)
   - Back link: `<a class="back-link" href="../blog.html">&larr; All Posts</a>`
   - Series badge linking to the Stackless Guide series (or a new "Start Here" standalone badge)
   - Tags: "Getting Started", "Claude Code", "Beginner"
   - Title: "The Non-Coder Start Guide: From Zero to Your First AI Project"
   - Meta: estimated ~20 min read, February 2026
   - Inline `<style>` block matching existing blog post styles (article-body, h1-h3, p, blockquote, card classes)
   - Dark mode support in the inline styles using `[data-theme="dark"]` selectors

2. **Write the guide content** in these sections (using step-card, example-card, warning-card, tip-box patterns):
   - **Why This Guide Exists** — Lydia's perspective: doctor, not a developer, built real products
   - **Step 1: Get Claude Pro** — What it costs (£18/mo), what you get, why Claude specifically (vs ChatGPT/Gemini for code)
   - **Step 2: What Is a Terminal?** — Demystify the terminal/command line for absolute beginners. Windows Terminal vs PowerShell vs Git Bash. "It's just a text box where you type commands"
   - **Step 3: Install the Prerequisites** — Node.js (what it is, how to install), Git (what it is, how to install), GitHub account (what it is, why you need it)
   - **Step 4: Install Claude Code** — `npm install -g @anthropic-ai/claude-code`, what that command means word by word
   - **Step 5: Your First Run** — `claude` command, what happens, the permission prompts, how to talk to it
   - **Step 6: Your First Project** — A simple practical example (e.g., "build me a personal website"), what to expect, how long it takes
   - **Step 7: What Next** — Links to the existing Stackless Guide series (security, testing, toolkit), the Non-Expert Series, and the about page
   - Use warning-cards for common mistakes (e.g., "Don't paste API keys"), example-cards for real terminal output, step-cards for each installation step

3. **Update `blog.html`** — Add the new post:
   - Add a new featured series block at the top (before "The Stackless Guide") styled as a prominent "START HERE" banner with a distinct color (amber/yellow to stand out). Or integrate it as a standalone featured item
   - Add the article-item entry at the top of the article-list with tags "Getting Started", "Claude Code", "Beginner" and a "START HERE" series badge

4. **Update `index.html`** — Add a visible CTA or mention in the hero section or Lab Feed area linking to the start guide as a key piece of content. Could be a new project card or a callout within the existing hero

5. **Update `sitemap.xml`** — Add the new URL `https://stackless.tech/blog/post-14-non-coder-start-guide.html`

6. **Standard footer, mobile menu, and theme toggle JS** — Copy from existing blog posts (post-8 or post-13 as reference)

**Acceptance Criteria:**
- [ ] `blog/post-14-non-coder-start-guide.html` exists and renders correctly with the site's neo-brutalist design
- [ ] Page has full SEO (meta description, OG tags, Twitter cards, canonical URL, structured data)
- [ ] Page has working dark mode toggle that persists
- [ ] Page has responsive layout (mobile hamburger menu, readable on small screens)
- [ ] Content covers the complete journey: subscription, terminal basics, prerequisites, Claude Code install, first run, first project
- [ ] Uses the site's card system (step-card, warning-card, example-card) for key information
- [ ] Written in Lydia's voice: direct, non-technical, from real experience
- [ ] `blog.html` lists the new post prominently (featured "Start Here" section + article entry)
- [ ] `sitemap.xml` updated with the new page URL
- [ ] All internal links work (back to blog, series links to existing guides)
- [ ] Nav links match all other pages (Home, About, Projects, Blog, The Fleet, Resources, Shop)
- [ ] Run tests and ensure they pass

**Files to check:** `blog.html`, `blog/post-8-non-coders-toolkit.html` (template reference), `blog/post-13-content-creator-agent.html` (latest post reference), `index.html`, `sitemap.xml`, `styles.css`

---

## Task 7: Reframe blog as tutorial hub with guides-first framing
**Status:** [x] Complete
**Completed:** 2026-02-22 09:58:55
**Duration:** 6m 11s
**Commits:**
- c16848b Reframe blog as tutorial hub: Blog → Guides across all pages

**Context:** The current blog page (`blog.html`) uses traditional blog framing throughout: the nav label says "Blog", the H1 says "Blog", the meta titles/descriptions all say "blog", and the intro text references "thoughts on building." However, the actual content is overwhelmingly tutorial and guide material: a structured 3-part "Stackless Guide" series, a 3-part "Non-Expert Series", and standalone posts mostly titled as practical guides ("Security for Non-Coders", "Testing for Non-Coders", "The Non-Coder's Toolkit", etc.). Reframing this as a tutorial/guides hub better reflects the content, improves SEO for people searching for AI tutorials for non-coders, and positions Stackless as a learning resource rather than a personal blog. The "Non-Coder Start Guide" referenced in the TODO likely refers to the existing 3-part Stackless Guide series (posts 6-8) which should be elevated as the recommended starting point. No file rename is needed (blog.html stays as-is for URL stability), but all visible labels, headings, and meta descriptions should shift from "blog" to "guides"/"tutorials" framing.

**Plan:**

1. **Update `blog.html` page content:**
   - Change `<title>` from "Blog — AI Tools, Non-Coder Dev..." to "Guides — AI Tools, Tutorials & Non-Coder Dev | Stackless"
   - Change `<meta name="description">` from "The Stackless blog" to tutorial/guides framing
   - Change OG and Twitter meta titles/descriptions similarly
   - Change the `<h1>Blog</h1>` to `<h1>Guides</h1>`
   - Rewrite the intro paragraph from "Thoughts on building with AI..." to something like "Practical tutorials and step-by-step guides for building with AI, no coding background required."
   - Add a prominent "Start Here" callout above the Stackless Guide series, pointing new visitors to Part 1 as the recommended entry point
   - Change the back-link text in the article list context from "All Posts" references to "All Guides" (in related navigation at bottom)

2. **Update navigation label across all site pages** (the word "Blog" in nav links, keeping `href="blog.html"` unchanged):
   - `index.html` (lines 63, 310)
   - `about.html` (lines 45, 113)
   - `projects.html` (lines 45, 247)
   - `blog.html` (lines 45, 231)
   - `fleet.html` (lines 422, 759)
   - `resources.html` (lines 233, 448)
   - `shop/index.html` (lines 404, 540)
   - `claw-mapper/index.html` (lines 232, 442)

3. **Update navigation label in all 13 blog post files** (both desktop nav and mobile menu):
   - Change `>Blog</a>` to `>Guides</a>` in nav links (keeping `href="../blog.html"`)
   - Change `← All Posts` back-links to `← All Guides` (posts 1-10 have `.back-link` class)
   - Change "All Posts" text in posts 8, 12, 13 bottom navigation to "All Guides"
   - Posts 12 and 13 also have inline-styled "Blog" links in their footer nav area — update those too

4. **Do NOT rename the file** `blog.html` to avoid breaking any external links, bookmarks, or SEO. The URL stays the same; only the visible label and framing changes.

**Acceptance Criteria:**
- [x] Nav label reads "Guides" (not "Blog") on all pages including mobile menus
- [x] `blog.html` H1 reads "Guides" with tutorial-focused intro paragraph
- [x] Meta title, description, OG, and Twitter card all use guides/tutorials framing (no "blog" word)
- [x] A "Start Here" callout is added above or integrated into the Stackless Guide series section, directing new visitors to Part 1
- [x] All "← All Posts" back-links in blog post files read "← All Guides"
- [x] All "All Posts" references in post bottom navigation read "All Guides"
- [x] File remains `blog.html` (no rename, no broken URLs)
- [x] Run tests and ensure they pass

**Files to check:** `blog.html`, `index.html`, `about.html`, `projects.html`, `fleet.html`, `resources.html`, `shop/index.html`, `claw-mapper/index.html`, `blog/post-1-ehr-pathway.html`, `blog/post-2-non-coder-shipping.html`, `blog/post-3-tools-i-use.html`, `blog/post-4-process-not-code.html`, `blog/post-5-what-ai-gets-wrong.html`, `blog/post-6-security-for-non-coders.html`, `blog/post-7-testing-for-non-coders.html`, `blog/post-8-non-coders-toolkit.html`, `blog/post-9-gemini-canvas-frontends.html`, `blog/post-10-ai-orchestra.html`, `blog/post-11-privacy-for-non-coders.html`, `blog/post-12-building-agent-teams.html`, `blog/post-13-content-creator-agent.html`

---
## Task 7: Reframe blog as tutorial hub with guides-first framing
**Status:** [x] Complete

**Context:** The current blog page (`blog.html`) uses traditional blog framing throughout: the nav label says "Blog", the H1 says "Blog", the meta titles/descriptions all say "blog", and the intro text references "thoughts on building." However, the actual content is overwhelmingly tutorial and guide material: a structured 3-part "Stackless Guide" series, a 3-part "Non-Expert Series", and standalone posts mostly titled as practical guides ("Security for Non-Coders", "Testing for Non-Coders", "The Non-Coder's Toolkit", etc.). Reframing this as a tutorial/guides hub better reflects the content, improves SEO for people searching for AI tutorials for non-coders, and positions Stackless as a learning resource rather than a personal blog. The "Non-Coder Start Guide" referenced in the TODO likely refers to the existing 3-part Stackless Guide series (posts 6-8) which should be elevated as the recommended starting point. No file rename is needed (blog.html stays as-is for URL stability), but all visible labels, headings, and meta descriptions should shift from "blog" to "guides"/"tutorials" framing.

**Plan:**

1. **Update `blog.html` page content:**
   - Change `<title>` from "Blog — AI Tools, Non-Coder Dev..." to "Guides — AI Tools, Tutorials & Non-Coder Dev | Stackless"
   - Change `<meta name="description">` from "The Stackless blog" to tutorial/guides framing
   - Change OG and Twitter meta titles/descriptions similarly
   - Change the `<h1>Blog</h1>` to `<h1>Guides</h1>`
   - Rewrite the intro paragraph from "Thoughts on building with AI..." to something like "Practical tutorials and step-by-step guides for building with AI, no coding background required."
   - Add a prominent "Start Here" callout above the Stackless Guide series, pointing new visitors to Part 1 as the recommended entry point
   - Change the back-link text in the article list context from "All Posts" references to "All Guides" (in related navigation at bottom)

2. **Update navigation label across all site pages** (the word "Blog" in nav links, keeping `href="blog.html"` unchanged):
   - `index.html` (lines 63, 310)
   - `about.html` (lines 45, 113)
   - `projects.html` (lines 45, 247)
   - `blog.html` (lines 45, 231)
   - `fleet.html` (lines 422, 759)
   - `resources.html` (lines 233, 448)
   - `shop/index.html` (lines 404, 540)
   - `claw-mapper/index.html` (lines 232, 442)

3. **Update navigation label in all 13 blog post files** (both desktop nav and mobile menu):
   - Change `>Blog</a>` to `>Guides</a>` in nav links (keeping `href="../blog.html"`)
   - Change `← All Posts` back-links to `← All Guides` (posts 1-10 have `.back-link` class)
   - Change "All Posts" text in posts 8, 12, 13 bottom navigation to "All Guides"
   - Posts 12 and 13 also have inline-styled "Blog" links in their footer nav area — update those too

4. **Do NOT rename the file** `blog.html` to avoid breaking any external links, bookmarks, or SEO. The URL stays the same; only the visible label and framing changes.

**Acceptance Criteria:**
- [x] Nav label reads "Guides" (not "Blog") on all pages including mobile menus
- [x] `blog.html` H1 reads "Guides" with tutorial-focused intro paragraph
- [x] Meta title, description, OG, and Twitter card all use guides/tutorials framing (no "blog" word)
- [x] A "Start Here" callout is added above or integrated into the Stackless Guide series section, directing new visitors to Part 1
- [x] All "← All Posts" back-links in blog post files read "← All Guides"
- [x] All "All Posts" references in post bottom navigation read "All Guides"
- [x] File remains `blog.html` (no rename, no broken URLs)
- [x] Run tests and ensure they pass

**Files to check:** `blog.html`, `index.html`, `about.html`, `projects.html`, `fleet.html`, `resources.html`, `shop/index.html`, `claw-mapper/index.html`, `blog/post-1-ehr-pathway.html`, `blog/post-2-non-coder-shipping.html`, `blog/post-3-tools-i-use.html`, `blog/post-4-process-not-code.html`, `blog/post-5-what-ai-gets-wrong.html`, `blog/post-6-security-for-non-coders.html`, `blog/post-7-testing-for-non-coders.html`, `blog/post-8-non-coders-toolkit.html`, `blog/post-9-gemini-canvas-frontends.html`, `blog/post-10-ai-orchestra.html`, `blog/post-11-privacy-for-non-coders.html`, `blog/post-12-building-agent-teams.html`, `blog/post-13-content-creator-agent.html`

---
