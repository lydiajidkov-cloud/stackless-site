# Tasks

## Task 1: <title>
**Status:** [ ] Incomplete

**Context:** <detailed explanation of what needs to change and why>

**Plan:**
<step-by-step implementation plan with specific files and changes>

**Acceptance Criteria:**
- [ ] <specific, verifiable criterion>
- [ ] <another criterion>
- [ ] Run tests and ensure they pass

**Files to check:** <comma-separated list of relevant files>

---

Interesting — post-12 and post-13 already have the pattern where `nav-cta` is used on a "Shop" label (no duplicate). So the CSS class is still needed. Now I have everything.

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
**Status:** [ ] Incomplete

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
**Status:** [ ] Incomplete

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
