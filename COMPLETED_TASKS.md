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
