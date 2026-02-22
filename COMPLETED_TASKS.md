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

## Task 8: Add missing projects and reorder projects page
**Status:** [x] Complete
**Completed:** 2026-02-22 10:03:12
**Duration:** 4m 1s
**Commits:**
- 55d3691 Add 3 missing projects, reorder cards, and add spotlight layout

**Context:** The projects page (`projects.html`) currently lists 6 projects in this order: Personal Finance Dashboard, AI Portfolio Dashboard, Grocery Spending Dashboard, Curly Girl Wavy Girl UK, MSI Claw Controller Mapper, Daily AI Podcast. Three projects are missing entirely: The Agentcy (a playable browser game), Zoe Recipe Finder, and Acute HF EHR Pathway. CurlMagic (Curly Girl Wavy Girl UK) is the best "try it free" hook but is buried 4th behind three paid £5 products. The task also asks for 2-3 "spotlight" projects with more detail. The page uses a consistent card pattern with color bars, categories, tags, status dots, and action links. All styling is in `styles.css` (lines 477-628) with a 2-column grid on desktop, 1-column on mobile. Available color-bar classes: `bar-pink`, `bar-yellow`, `bar-indigo`, `bar-lime`, plus inline styles for `amber-400`, `violet-400`, `rose-400`. Blog post-1 covers the EHR Pathway and can inform its description.

**Plan:**

1. **Reorder existing cards in `projects.html`** (lines 70-234):
   - Move the Curly Girl Wavy Girl UK card (currently 4th, lines 155-181) to **first position** in the grid
   - Keep the three paid products (Finance, Portfolio, Grocery) grouped together after the free/spotlight items
   - Keep MSI Claw and Daily AI Podcast in their current relative positions

2. **Add new project card: The Agentcy** — Insert after CurlMagic (position 2):
   - Color bar: `bar-pink` (game/fun theme)
   - Category: "Game" with `background: var(--pink-500); color: white;`
   - Price/date: "Free"
   - Title: "The Agentcy"
   - Description: Business simulation game where you run an AI agent company. Hire agents, complete contracts, unlock upgrades, and progress through eras. 15 tasks, 90 agent results, 14 upgrades. Built entirely with AI, playable in the browser.
   - Tags: `#Game` `#Simulation` `#Browser`
   - Status: Live (green dot)
   - Link: Point to the game location (needs confirmation — likely hosted or to be hosted under stackless-site)

3. **Add new project card: Zoe Recipe Finder** — Insert as position 3:
   - Color bar: inline `background: var(--rose-400);`
   - Category: "Health" with `background: var(--rose-400); color: white;`
   - Price/date: "Free"
   - Title: "Zoe Recipe Finder"
   - Description: Recipe search tool built around ZOE personalised nutrition scores. Filter by your food list, find meals that work with your gut biology. Built for real dietary constraints, not generic healthy eating.
   - Tags: `#Health` `#Nutrition` `#WebApp`
   - Status: Complete (green dot)
   - Link: No external link (not hosted on stackless-site) — footer with status only, like Daily AI Podcast

4. **Add new project card: Acute HF EHR Pathway** — Insert as position 4:
   - Color bar: `bar-indigo`
   - Category: "Clinical" with `background: var(--indigo-500); color: white;`
   - Price/date: "2025"
   - Title: "Acute HF EHR Pathway"
   - Description: Interactive clinical pathway template for acute heart failure, designed for EHR integration. Maps the full patient journey from admission to discharge with decision points, escalation criteria, and documentation prompts. Built from real clinical experience.
   - Tags: `#Clinical` `#EHR` `#Healthcare`
   - Status: Complete (green dot)
   - Link: Blog post link `blog/post-1-ehr-pathway.html` with "Read More" text

5. **Add CSS for spotlight cards** in `styles.css` (after line 628):
   - Add `.project-card.spotlight` class that spans full width: `grid-column: 1 / -1;`
   - Spotlight cards use a horizontal layout on desktop: `flex-direction: row;` with the color bar on the left (vertical) instead of top
   - Alternatively, simpler approach: spotlight cards are just full-width standard cards with a slightly larger title and description area. Use `grid-column: 1 / -1;` only.
   - Apply `.spotlight` class to CurlMagic and The Agentcy cards (the two strongest free "try it" projects)

6. **Final card order** (9 total):
   1. Curly Girl Wavy Girl UK — **spotlight** (full-width)
   2. The Agentcy — **spotlight** (full-width)
   3. Zoe Recipe Finder — standard card
   4. Acute HF EHR Pathway — standard card
   5. MSI Claw Controller Mapper — standard card
   6. Daily AI Podcast — standard card
   7. Personal Finance Dashboard — standard card
   8. AI Portfolio Dashboard — standard card
   9. Grocery Spending Dashboard — standard card

7. **Update page intro text** (line 66-68) to reflect the expanded portfolio — change "A collection of practical tools" to mention the variety (games, clinical tools, consumer apps, dashboards).

**Acceptance Criteria:**
- [x] CurlMagic appears first on the projects page (no longer buried behind paid products)
- [x] The Agentcy, Zoe Recipe Finder, and Acute HF EHR Pathway all have project cards
- [x] 2 spotlight projects (CurlMagic + The Agentcy) display full-width on desktop
- [x] All new cards follow the existing HTML pattern (color bar, meta, title, desc, tags, footer)
- [x] All new cards render correctly in dark mode
- [x] Page is responsive — spotlight cards collapse to single-column on mobile
- [x] Existing cards and links remain functional (no broken hrefs)
- [x] Run tests and ensure they pass

**Files to check:** `projects.html`, `styles.css`, `blog/post-1-ehr-pathway.html`, `ideas.md`, `TODO.md`

---
## Task 8: Add missing projects and reorder projects page
**Status:** [x] Complete

**Context:** The projects page (`projects.html`) currently lists 6 projects in this order: Personal Finance Dashboard, AI Portfolio Dashboard, Grocery Spending Dashboard, Curly Girl Wavy Girl UK, MSI Claw Controller Mapper, Daily AI Podcast. Three projects are missing entirely: The Agentcy (a playable browser game), Zoe Recipe Finder, and Acute HF EHR Pathway. CurlMagic (Curly Girl Wavy Girl UK) is the best "try it free" hook but is buried 4th behind three paid £5 products. The task also asks for 2-3 "spotlight" projects with more detail. The page uses a consistent card pattern with color bars, categories, tags, status dots, and action links. All styling is in `styles.css` (lines 477-628) with a 2-column grid on desktop, 1-column on mobile. Available color-bar classes: `bar-pink`, `bar-yellow`, `bar-indigo`, `bar-lime`, plus inline styles for `amber-400`, `violet-400`, `rose-400`. Blog post-1 covers the EHR Pathway and can inform its description.

**Plan:**

1. **Reorder existing cards in `projects.html`** (lines 70-234):
   - Move the Curly Girl Wavy Girl UK card (currently 4th, lines 155-181) to **first position** in the grid
   - Keep the three paid products (Finance, Portfolio, Grocery) grouped together after the free/spotlight items
   - Keep MSI Claw and Daily AI Podcast in their current relative positions

2. **Add new project card: The Agentcy** — Insert after CurlMagic (position 2):
   - Color bar: `bar-pink` (game/fun theme)
   - Category: "Game" with `background: var(--pink-500); color: white;`
   - Price/date: "Free"
   - Title: "The Agentcy"
   - Description: Business simulation game where you run an AI agent company. Hire agents, complete contracts, unlock upgrades, and progress through eras. 15 tasks, 90 agent results, 14 upgrades. Built entirely with AI, playable in the browser.
   - Tags: `#Game` `#Simulation` `#Browser`
   - Status: Live (green dot)
   - Link: Point to the game location (needs confirmation — likely hosted or to be hosted under stackless-site)

3. **Add new project card: Zoe Recipe Finder** — Insert as position 3:
   - Color bar: inline `background: var(--rose-400);`
   - Category: "Health" with `background: var(--rose-400); color: white;`
   - Price/date: "Free"
   - Title: "Zoe Recipe Finder"
   - Description: Recipe search tool built around ZOE personalised nutrition scores. Filter by your food list, find meals that work with your gut biology. Built for real dietary constraints, not generic healthy eating.
   - Tags: `#Health` `#Nutrition` `#WebApp`
   - Status: Complete (green dot)
   - Link: No external link (not hosted on stackless-site) — footer with status only, like Daily AI Podcast

4. **Add new project card: Acute HF EHR Pathway** — Insert as position 4:
   - Color bar: `bar-indigo`
   - Category: "Clinical" with `background: var(--indigo-500); color: white;`
   - Price/date: "2025"
   - Title: "Acute HF EHR Pathway"
   - Description: Interactive clinical pathway template for acute heart failure, designed for EHR integration. Maps the full patient journey from admission to discharge with decision points, escalation criteria, and documentation prompts. Built from real clinical experience.
   - Tags: `#Clinical` `#EHR` `#Healthcare`
   - Status: Complete (green dot)
   - Link: Blog post link `blog/post-1-ehr-pathway.html` with "Read More" text

5. **Add CSS for spotlight cards** in `styles.css` (after line 628):
   - Add `.project-card.spotlight` class that spans full width: `grid-column: 1 / -1;`
   - Spotlight cards use a horizontal layout on desktop: `flex-direction: row;` with the color bar on the left (vertical) instead of top
   - Alternatively, simpler approach: spotlight cards are just full-width standard cards with a slightly larger title and description area. Use `grid-column: 1 / -1;` only.
   - Apply `.spotlight` class to CurlMagic and The Agentcy cards (the two strongest free "try it" projects)

6. **Final card order** (9 total):
   1. Curly Girl Wavy Girl UK — **spotlight** (full-width)
   2. The Agentcy — **spotlight** (full-width)
   3. Zoe Recipe Finder — standard card
   4. Acute HF EHR Pathway — standard card
   5. MSI Claw Controller Mapper — standard card
   6. Daily AI Podcast — standard card
   7. Personal Finance Dashboard — standard card
   8. AI Portfolio Dashboard — standard card
   9. Grocery Spending Dashboard — standard card

7. **Update page intro text** (line 66-68) to reflect the expanded portfolio — change "A collection of practical tools" to mention the variety (games, clinical tools, consumer apps, dashboards).

**Acceptance Criteria:**
- [x] CurlMagic appears first on the projects page (no longer buried behind paid products)
- [x] The Agentcy, Zoe Recipe Finder, and Acute HF EHR Pathway all have project cards
- [x] 2 spotlight projects (CurlMagic + The Agentcy) display full-width on desktop
- [x] All new cards follow the existing HTML pattern (color bar, meta, title, desc, tags, footer)
- [x] All new cards render correctly in dark mode
- [x] Page is responsive — spotlight cards collapse to single-column on mobile
- [x] Existing cards and links remain functional (no broken hrefs)
- [x] Run tests and ensure they pass

**Files to check:** `projects.html`, `styles.css`, `blog/post-1-ehr-pathway.html`, `ideas.md`, `TODO.md`

---

## Task 9: Audit blog posts — remove unverified tool references
**Status:** [x] Complete
**Completed:** 2026-02-22 10:07:26
**Duration:** 4m 2s
**Commits:**
- aa188df Mark Task 9 as complete in TASKS.md
- 25abefb Remove unverified third-party tool references from posts 8, 9, 10

**Context:** Posts 8, 9, and 10 contain claims about third-party tools (Cursor, Windsurf, Copilot, v0, Bolt, Lovable, Replit) including pricing, capabilities, and comparisons that haven't been verified against current product pages. These claims risk being outdated or inaccurate. The task is to remove these unverified sections while keeping the posts coherent and focused on the tools actually used (Claude Code, Gemini Canvas, ChatGPT, NotebookLM, Claude Artifacts).

**Plan:**

**post-8-non-coders-toolkit.html:**
1. Delete the `<h3>Cursor / Windsurf / Copilot</h3>` heading, its tool-card div (lines 305-313), and the follow-up paragraph (line 315)
2. Delete the `<h3>v0 (Vercel)</h3>` heading and its tool-card div (lines 317-325)
3. Delete the `<h3>Bolt / Lovable / Replit Agent</h3>` heading and its tool-card div (lines 327-335)
4. In the "How I Pick the Right Tool" list (lines 341-348): remove the v0 reference from the "Quick visual prototype?" bullet (change to just "Gemini Canvas"), and remove the entire "Need a full app with user accounts/database?" bullet mentioning Bolt/Replit Agent
5. Review surrounding text for flow. The section should jump from ChatGPT Canvas straight to "How I Pick the Right Tool"

**post-9-gemini-canvas-frontends.html:**
1. In the comparison table (lines 321-362): delete the `<tr>` row for v0 (Vercel) (lines 343-348) and the `<tr>` row for Bolt.new (lines 349-354)
2. Keep Gemini Canvas, Claude Code, and Claude Artifacts rows intact
3. No other references to remove in this file

**post-10-ai-orchestra.html:**
1. Delete the entire Cursor/Windsurf tool-card div (lines 275-282)
2. In the "New Shiny Tool" section (lines 313-325): delete the intro paragraph mentioning v0/Bolt/Replit/Lovable (line 315), delete the v0 paragraph (line 317), delete the Bolt.new paragraph (line 319), delete the Replit Agent paragraph (line 321)
3. Keep the Claude Artifacts paragraph (line 323) — reframe the section heading and intro to just mention Artifacts as an additional useful tool rather than comparing it to removed tools
4. Rewrite the closing paragraph (line 325) to not reference "chasing every new tool" since the removed tools no longer appear; instead reinforce the core-tools-plus-Artifacts message

**Acceptance Criteria:**
- [x] post-8: No mentions of Cursor, Windsurf, Copilot, v0, Bolt, Lovable, or Replit remain
- [x] post-9: Comparison table contains only Gemini Canvas, Claude Code, and Claude Artifacts rows
- [x] post-10: Cursor/Windsurf tool card removed; "New Shiny Tool" section reworked to only mention Claude Artifacts
- [x] All three posts read coherently after removals (no dangling references, broken transitions, or orphaned headings)
- [x] No broken HTML structure (unclosed tags, empty sections)
- [x] Run tests and ensure they pass

**Files to check:** `blog/post-8-non-coders-toolkit.html`, `blog/post-9-gemini-canvas-frontends.html`, `blog/post-10-ai-orchestra.html`

---
## Task 9: Audit blog posts — remove unverified tool references
**Status:** [x] Complete

**Context:** Posts 8, 9, and 10 contain claims about third-party tools (Cursor, Windsurf, Copilot, v0, Bolt, Lovable, Replit) including pricing, capabilities, and comparisons that haven't been verified against current product pages. These claims risk being outdated or inaccurate. The task is to remove these unverified sections while keeping the posts coherent and focused on the tools actually used (Claude Code, Gemini Canvas, ChatGPT, NotebookLM, Claude Artifacts).

**Plan:**

**post-8-non-coders-toolkit.html:**
1. Delete the `<h3>Cursor / Windsurf / Copilot</h3>` heading, its tool-card div (lines 305-313), and the follow-up paragraph (line 315)
2. Delete the `<h3>v0 (Vercel)</h3>` heading and its tool-card div (lines 317-325)
3. Delete the `<h3>Bolt / Lovable / Replit Agent</h3>` heading and its tool-card div (lines 327-335)
4. In the "How I Pick the Right Tool" list (lines 341-348): remove the v0 reference from the "Quick visual prototype?" bullet (change to just "Gemini Canvas"), and remove the entire "Need a full app with user accounts/database?" bullet mentioning Bolt/Replit Agent
5. Review surrounding text for flow. The section should jump from ChatGPT Canvas straight to "How I Pick the Right Tool"

**post-9-gemini-canvas-frontends.html:**
1. In the comparison table (lines 321-362): delete the `<tr>` row for v0 (Vercel) (lines 343-348) and the `<tr>` row for Bolt.new (lines 349-354)
2. Keep Gemini Canvas, Claude Code, and Claude Artifacts rows intact
3. No other references to remove in this file

**post-10-ai-orchestra.html:**
1. Delete the entire Cursor/Windsurf tool-card div (lines 275-282)
2. In the "New Shiny Tool" section (lines 313-325): delete the intro paragraph mentioning v0/Bolt/Replit/Lovable (line 315), delete the v0 paragraph (line 317), delete the Bolt.new paragraph (line 319), delete the Replit Agent paragraph (line 321)
3. Keep the Claude Artifacts paragraph (line 323) — reframe the section heading and intro to just mention Artifacts as an additional useful tool rather than comparing it to removed tools
4. Rewrite the closing paragraph (line 325) to not reference "chasing every new tool" since the removed tools no longer appear; instead reinforce the core-tools-plus-Artifacts message

**Acceptance Criteria:**
- [x] post-8: No mentions of Cursor, Windsurf, Copilot, v0, Bolt, Lovable, or Replit remain
- [x] post-9: Comparison table contains only Gemini Canvas, Claude Code, and Claude Artifacts rows
- [x] post-10: Cursor/Windsurf tool card removed; "New Shiny Tool" section reworked to only mention Claude Artifacts
- [x] All three posts read coherently after removals (no dangling references, broken transitions, or orphaned headings)
- [x] No broken HTML structure (unclosed tags, empty sections)
- [x] Run tests and ensure they pass

**Files to check:** `blog/post-8-non-coders-toolkit.html`, `blog/post-9-gemini-canvas-frontends.html`, `blog/post-10-ai-orchestra.html`

---

## Task 11: Replace placeholder Buy Now button URLs with Payhip product links
**Status:** [x] Complete (code infrastructure done — replace FINANCE_ID, PORTFOLIO_ID, GROCERY_ID with real Payhip product keys after account setup)
**Completed:** 2026-02-22 10:16:49
**Duration:** 4m 50s
**Commits:**
- bf07130 Add Payhip integration infrastructure to shop Buy Now buttons
- a7e4b15 Complete sitemap.xml with all 30 site pages

**Context:** The shop page (`shop/index.html`) has 3 product cards (Finance Dashboard, AI Portfolio Template, Grocery Spending Dashboard) each priced at £5, plus a "Buy Me a Coffee" donation button. All 4 buttons currently have `href="#"`, making them non-functional. The site already references Payhip in product delivery descriptions ("Instant download via Payhip") and a complete integration research guide exists at `research/research-payhip-integration.md` with account setup steps, embed code format, and pricing calculations. The homepage and projects page correctly link to the shop anchors (`#buy-finance`, `#buy-portfolio`, `#buy-grocery`), so the only missing piece is the actual Payhip product URLs on the buy buttons. A Ko-fi or similar link is needed for the donation button.

**Plan:**
1. **Manual prerequisite — Create Payhip account and products** (see MANUAL_TASKS below). This produces 3 product IDs and optionally a Ko-fi donation URL.
2. **Add Payhip embed script** to `shop/index.html` — insert `<script src="https://payhip.com/payhip.js"></script>` in the `<head>` section.
3. **Update Finance Dashboard buy button** (line ~453 in `shop/index.html`) — replace `href="#"` with `href="https://payhip.com/b/FINANCE_ID"` and add `data-payhip-button-id="FINANCE_ID"` attribute plus `class="payhip-buy-button"` alongside existing classes.
4. **Update AI Portfolio buy button** (line ~473) — same pattern with the portfolio product ID.
5. **Update Grocery Spending buy button** (line ~493) — same pattern with the grocery product ID.
6. **Update donation button** (line ~515) — replace `href="#"` with the Ko-fi (or Payhip tip) URL, add `target="_blank" rel="noopener"`.
7. **Add `target="_blank" rel="noopener"` to all 3 product buy buttons** so purchases open in a new tab (Payhip checkout overlay will handle it if the JS is loaded, but the fallback should open a new tab).
8. **Test locally** — open shop page, verify each button navigates to the correct Payhip checkout or Ko-fi page instead of scrolling to top.

**Acceptance Criteria:**
- [x] Payhip JS embed script is present in `shop/index.html` head
- [x] All 3 product Buy Now buttons have Payhip URLs with placeholder IDs (no more `href="#"`)
- [x] Donation button has Ko-fi URL (placeholder — update after creating Ko-fi account)
- [x] All buy buttons have `target="_blank" rel="noopener"` for new-tab fallback
- [x] Homepage and projects page "View Template" links still navigate to the correct shop sections
- [ ] **Manual:** Replace FINANCE_ID, PORTFOLIO_ID, GROCERY_ID with real Payhip product keys
- [ ] **Manual:** Verify Ko-fi URL is correct after account creation

**Files to check:** `shop/index.html`, `index.html`, `projects.html`, `research/research-payhip-integration.md`

---
## Task 11: Replace placeholder Buy Now button URLs with Payhip product links
**Status:** [x] Complete (code infrastructure done — replace FINANCE_ID, PORTFOLIO_ID, GROCERY_ID with real Payhip product keys after account setup)

**Context:** The shop page (`shop/index.html`) has 3 product cards (Finance Dashboard, AI Portfolio Template, Grocery Spending Dashboard) each priced at £5, plus a "Buy Me a Coffee" donation button. All 4 buttons currently have `href="#"`, making them non-functional. The site already references Payhip in product delivery descriptions ("Instant download via Payhip") and a complete integration research guide exists at `research/research-payhip-integration.md` with account setup steps, embed code format, and pricing calculations. The homepage and projects page correctly link to the shop anchors (`#buy-finance`, `#buy-portfolio`, `#buy-grocery`), so the only missing piece is the actual Payhip product URLs on the buy buttons. A Ko-fi or similar link is needed for the donation button.

**Plan:**
1. **Manual prerequisite — Create Payhip account and products** (see MANUAL_TASKS below). This produces 3 product IDs and optionally a Ko-fi donation URL.
2. **Add Payhip embed script** to `shop/index.html` — insert `<script src="https://payhip.com/payhip.js"></script>` in the `<head>` section.
3. **Update Finance Dashboard buy button** (line ~453 in `shop/index.html`) — replace `href="#"` with `href="https://payhip.com/b/FINANCE_ID"` and add `data-payhip-button-id="FINANCE_ID"` attribute plus `class="payhip-buy-button"` alongside existing classes.
4. **Update AI Portfolio buy button** (line ~473) — same pattern with the portfolio product ID.
5. **Update Grocery Spending buy button** (line ~493) — same pattern with the grocery product ID.
6. **Update donation button** (line ~515) — replace `href="#"` with the Ko-fi (or Payhip tip) URL, add `target="_blank" rel="noopener"`.
7. **Add `target="_blank" rel="noopener"` to all 3 product buy buttons** so purchases open in a new tab (Payhip checkout overlay will handle it if the JS is loaded, but the fallback should open a new tab).
8. **Test locally** — open shop page, verify each button navigates to the correct Payhip checkout or Ko-fi page instead of scrolling to top.

**Acceptance Criteria:**
- [x] Payhip JS embed script is present in `shop/index.html` head
- [x] All 3 product Buy Now buttons have Payhip URLs with placeholder IDs (no more `href="#"`)
- [x] Donation button has Ko-fi URL (placeholder — update after creating Ko-fi account)
- [x] All buy buttons have `target="_blank" rel="noopener"` for new-tab fallback
- [x] Homepage and projects page "View Template" links still navigate to the correct shop sections
- [ ] **Manual:** Replace FINANCE_ID, PORTFOLIO_ID, GROCERY_ID with real Payhip product keys
- [ ] **Manual:** Verify Ko-fi URL is correct after account creation

**Files to check:** `shop/index.html`, `index.html`, `projects.html`, `research/research-payhip-integration.md`

---
