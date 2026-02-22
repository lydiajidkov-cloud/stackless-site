# Tasks




This task is already fully completed. No "Browse Products" text remains in any HTML files. Here's the plan document reflecting the completed work:

## Task 1: Remove duplicate "Browse Products" nav button from all main site pages
**Status:** [x] Complete

**Context:** The site navigation contained both a "Shop" link and a "Browse Products" CTA button (`class="nav-cta"`), both pointing to `shop/index.html`. This redundancy appeared across 9 HTML files in desktop nav (`<li>` wrapped) and mobile menu (plain `<a>` tag) variants. Two commits addressed this: `016ac4d` removed the duplicate buttons from all HTML files, and `2c857c4` cleaned up the now-dead `.nav-cta` CSS rules from `styles.css` and `shop/styles.css`.

**Plan:**
1. Remove `<li><a href="shop/index.html" class="nav-cta">Browse Products</a></li>` from desktop nav in: `index.html`, `about.html`, `projects.html`, `blog.html`, `fleet.html`, `resources.html`, `shop/index.html`, `blog/post-11-privacy-for-non-coders.html`, `claw-mapper/index.html`
2. Remove `<a href="shop/index.html" class="nav-cta">Browse Products</a>` from mobile menu in: `index.html`, `fleet.html`
3. Remove all `.nav-cta` CSS rules from `styles.css` and `shop/styles.css` (dead code after button removal)
4. Grep all HTML/CSS files for "Browse Products" and "nav-cta" to confirm no remnants

**Acceptance Criteria:**
- [x] No `<li>` or `<a>` containing "Browse Products" remains in any HTML file
- [x] No `.nav-cta` CSS rules remain in any stylesheet
- [x] "Shop" link still present and functional in all page navs
- [x] Run tests and ensure they pass

**Files to check:** index.html, about.html, projects.html, blog.html, fleet.html, resources.html, shop/index.html, blog/post-11-privacy-for-non-coders.html, claw-mapper/index.html, styles.css, shop/styles.css

---

This task is already complete. The commit `2a487f7` removed the Cursor mention from post-6. No "Cursor" references remain in the file.

## Task 2: Remove Cursor mention from post-6 security blog post
**Status:** [x] Complete

**Context:** The blog post `blog/post-6-security-for-non-coders.html` previously referenced "Cursor, or similar" alongside Claude Code. To keep the blog aligned with the Stackless brand (which uses only Claude Code), the Cursor mention was removed. Commit `2a487f7` already applied this change — the phrase was edited to reference only Claude Code, and no "Cursor" references remain in the file.

**Plan:**
1. Open `blog/post-6-security-for-non-coders.html`
2. Find the line mentioning "Cursor, or similar"
3. Replace with a reference to only Claude Code
4. Commit the change

**Acceptance Criteria:**
- [x] No mention of "Cursor" remains in `blog/post-6-security-for-non-coders.html`
- [x] Blog post still reads naturally after the edit
- [x] Change committed (commit `2a487f7`)

**Files to check:** `blog/post-6-security-for-non-coders.html`

---

Now I have all the information needed. Here's the plan:


Now I have a comprehensive understanding of the codebase. Let me output the plan:


Good, post-11 doesn't have a back-link. I now have all the information needed to produce the plan.


I now have all the information needed. Here's the plan:



Now I have all the information needed. Let me produce the implementation plan.

## Task 10: Write post-15 "Security for Non-Coders: What Actually Happens When You Get Hacked"
**Status:** [x] Complete

**Context:** Post-14 is the next entry in the Non-Expert Series (following posts 11-13). The content roadmap specifies the topic as "Security for Non-Coders: What Actually Happens When You Get Hacked" — covering phishing, credential stuffing, and what hackers do first, demystifying the threat rather than the defence. The post should follow the template established by posts 12-13 (simplified nav, article-nav footer, full custom footer, embedded scoped CSS with card components using 3px border + 6px box-shadow pattern, dark mode overrides, tags, reading time meta). Post-13's `article-nav` currently has no "Next Post" link — that needs updating. The blog index (blog.html) Non-Expert Series section and individual post listing also need updating.

**Plan:**
1. **Create `blog/post-14-security-for-non-coders.html`** using the post-12/13 template structure:
   - Simplified nav (`.nav` / `.nav-inner` / `.nav-logo` pattern from posts 12-13)
   - Dark mode script in `<head>`
   - SEO meta tags (og:title, og:description, og:url, twitter:card) with canonical URL `https://stackless.tech/blog/post-14-security-for-non-coders.html`
   - Tags: `Security`, `Privacy`, `Non-Expert` (inline tag spans)
   - Reading time ~10 min, date February 2026
   - Article content covering: (a) what actually happens in a hack — the kill chain in plain English, (b) phishing — how it works, real examples, what to look for, (c) credential stuffing — password reuse attacks explained, (d) what hackers do first once they're in (lateral movement, data exfiltration, persistence), (e) practical "what to do right now" checklist
   - Custom card components scoped to `.article-body`: `.attack-card` (indigo shadow), `.warning-card` (pink shadow), `.checklist` (lime shadow), `.scenario-card` (orange shadow) — following the 3px border + 6px box-shadow convention
   - Dark mode CSS overrides for all card types and article typography
   - `article-nav` footer with Previous (post-13), All Posts, and no Next Post link (latest post)
   - Full custom footer matching posts 12-13

2. **Update `blog/post-13-content-creator-agent.html`** — change the `article-nav` "Next Post" link from empty/absent to point to `post-14-security-for-non-coders.html`

3. **Update `blog.html`** (blog index page):
   - Add post-14 link to the Non-Expert Series banner section (alongside posts 11-13)
   - Add a new article item entry for post-14 with tags (`Security`, `Privacy`, NON-EXPERT badge), reading time, excerpt, and link

4. **Update `sitemap.xml`** — add entry for `https://stackless.tech/blog/post-14-security-for-non-coders.html` with current date and monthly changefreq

**Acceptance Criteria:**
- [ ] `post-14-security-for-non-coders.html` exists with complete article content (~10 min read)
- [ ] Post follows posts 12-13 template: simplified nav, embedded scoped CSS, card components with box-shadow pattern, dark mode support, article-nav footer, full footer
- [ ] SEO metadata (title, description, canonical, og tags, twitter card) is complete
- [ ] Dark mode renders correctly (all cards, text, blockquotes have `[data-theme="dark"]` overrides)
- [ ] Content covers phishing, credential stuffing, attacker first moves, and actionable checklist — demystifying threats in plain English for non-coders
- [ ] Post-13 article-nav updated with Next Post link to post-14
- [ ] blog.html Non-Expert Series section includes post-14 link
- [ ] blog.html has a new article listing entry for post-14
- [ ] sitemap.xml includes post-14 URL
- [ ] All internal links resolve correctly (prev/next navigation, blog index links)
- [ ] Run tests and ensure they pass

**Files to check:** `blog/post-13-content-creator-agent.html`, `blog/post-12-building-agent-teams.html`, `blog/post-11-privacy-for-non-coders.html`, `blog.html`, `sitemap.xml`, `styles.css`, `content-roadmap.md`

---



## Task 13: Create complete sitemap.xml covering all pages and sub-sites
**Status:** [x] Complete

**Context:** A `sitemap.xml` already exists at the project root but is incomplete. It covers 15 of 28 pages: the 6 main pages, shop, and 9 blog posts (post-2 through post-10). Missing entirely: `post-1-ehr-pathway.html`, `post-11` through `post-13`, `resources.html`, all 7 curly-girl sub-site pages, and `claw-mapper/index.html`. The `robots.txt` already references the sitemap at `https://stackless.tech/sitemap.xml`. The base URL is `https://stackless.tech/`. The existing sitemap follows a consistent XML structure with `<loc>`, `<priority>`, and `<changefreq>` tags per URL.

**Plan:**
1. **Edit `sitemap.xml`** to add all missing URLs, keeping the existing structure and priority scheme:
   - Add `resources.html` (priority 0.5, monthly)
   - Add `blog/post-1-ehr-pathway.html` (priority 0.6, monthly)
   - Add `blog/post-11-privacy-for-non-coders.html` (priority 0.6, monthly)
   - Add `blog/post-12-building-agent-teams.html` (priority 0.6, monthly)
   - Add `blog/post-13-content-creator-agent.html` (priority 0.6, monthly)
   - Add `curly-girl/index.html` (priority 0.8, weekly) — sub-site landing page
   - Add `curly-girl/about.html` (priority 0.6, monthly)
   - Add `curly-girl/checker.html` (priority 0.7, monthly) — interactive tool
   - Add `curly-girl/quiz.html` (priority 0.7, monthly) — interactive tool
   - Add `curly-girl/products.html` (priority 0.7, weekly) — 257-product browser
   - Add `curly-girl/faq.html` (priority 0.6, monthly)
   - Add `curly-girl/listen.html` (priority 0.5, monthly)
   - Add `claw-mapper/index.html` (priority 0.6, monthly)
2. **Verify `robots.txt`** still correctly references `Sitemap: https://stackless.tech/sitemap.xml` (already confirmed correct).
3. **Validate the XML** is well-formed after editing (check closing tags, encoding declaration).
4. **Manual step:** Submit the updated sitemap to Google Search Console after deploying.

**Acceptance Criteria:**
- [x] `sitemap.xml` contains all 30 indexable HTML pages (7 main + 1 shop + 15 blog + 7 curly-girl + 1 claw-mapper)
- [x] All URLs use the `https://stackless.tech/` base domain
- [x] Each URL entry includes `<loc>`, `<priority>`, and `<changefreq>` tags
- [x] XML is well-formed (valid opening/closing tags, proper XML declaration)
- [x] `robots.txt` references the sitemap URL (already done)
- [x] No duplicate URLs exist in the sitemap

**Files to check:** `sitemap.xml`, `robots.txt`, `blog/*.html`, `curly-girl/*.html`, `claw-mapper/index.html`, `resources.html`

---

Good. Now I have everything I need. The next blog post would be post-14. Let me produce the plan.


Good - nav links are consistent across pages. Now I have all the information needed. Here's the plan:


## Task 16: UI/UX audit and fixes for CurlMagic sub-site (7 pages, products priority)
**Status:** [ ] Incomplete

**Context:** The CurlMagic (Curly Girl Wavy Girl UK) sub-site has 7 HTML pages, 1 shared CSS file (2,437 lines), and 3 JS files. The site is well-built with consistent navigation, working dark mode, and responsive design using clamp() and a single 768px breakpoint. However, several UI/UX issues exist across pages. The Products page (priority) lacks a "Clear all filters" button, has no loading indicator on "Load More", and filter dropdowns could be improved. Cross-site issues include: inconsistent footers (3 different variants), listen.html has ~200 lines of inline CSS not in the shared stylesheet, theme toggle logic is duplicated in every page instead of being in app.js, quiz lacks a visible "Question X of Y" indicator, no skip-to-main-content link, no aria-live regions on dynamic content, and the about page is very long with no jump-to-section navigation.

**Plan:**

**Phase 1 — Products page (priority)**
1. **Add "Clear all filters" button** in `products.html` — add a button after the filter chips area; in `app.js` add a `clearAllFilters()` function that resets all 6 dropdowns, clears search input, removes all filter chips, and re-runs `filterProducts()`
2. **Add loading state to "Load More"** — in `app.js`, add a brief visual indicator (button text changes to "Loading..." or spinner class) when `showMore()` is triggered, especially useful for large result sets
3. **Add aria-live region** to the products results container in `products.html` so screen readers announce filter result count changes
4. **Add "no results" empty state** — in `app.js` `filterProducts()`, display a friendly message when zero products match filters

**Phase 2 — Cross-site consistency**
5. **Standardise footers** — choose the home page's rich footer variant and apply it consistently to all 7 pages (currently home has a full footer, 5 pages have a minimal 2-line footer, listen.html has an inline-styled footer)
6. **Move listen.html inline styles** (~200 lines) into `styles.css` under properly namespaced classes (`.listen-*`, `.episode-*`)
7. **Deduplicate theme toggle script** — move the inline theme toggle JS from each page's footer into `app.js`, keep only the FOUC-prevention snippet in `<head>`

**Phase 3 — Accessibility improvements**
8. **Add skip-to-main-content link** to all 7 pages — visually hidden, appears on keyboard focus
9. **Add quiz progress indicator** — show "Question X of 7" text alongside the progress bar in `quiz.html`; add `aria-label` and `aria-valuenow` to the progress bar
10. **Add aria-live regions** to FAQ search results counter and scanner results areas in `faq.html` and `checker.html`

**Phase 4 — Content UX**
11. **Add table of contents** to `about.html` — a sticky or top-anchored jump-to-section nav for the long educational page (What is CGM, What to Avoid, Modified CGM, Transition, Myths, Science, UK-Focused, About)

**Acceptance Criteria:**
- [ ] Products page has a visible "Clear all filters" button that resets all dropdowns, search, and chips
- [ ] Products page shows loading state on "Load More" and a friendly empty state when no results match
- [ ] Products results container has `aria-live="polite"` announcing result count changes
- [ ] All 7 pages have the same footer structure (rich variant from home)
- [ ] listen.html has zero inline `<style>` blocks — all styles moved to styles.css
- [ ] Theme toggle JS exists only in app.js (plus FOUC snippet in `<head>`), not duplicated per page
- [ ] All 7 pages have a skip-to-main-content link
- [ ] Quiz shows "Question X of 7" and progress bar has proper ARIA attributes
- [ ] FAQ counter and scanner results have `aria-live` attributes
- [ ] About page has a clickable table of contents linking to sections
- [ ] All pages render correctly in light and dark mode after changes
- [ ] Run tests and ensure they pass

**Files to check:** `curly-girl/products.html`, `curly-girl/app.js`, `curly-girl/styles.css`, `curly-girl/index.html`, `curly-girl/about.html`, `curly-girl/faq.html`, `curly-girl/checker.html`, `curly-girl/quiz.html`, `curly-girl/listen.html`

---

## Task 17: Set up LinkedIn page for Stackless and repurpose posts 11-13

**Status:** [ ] Incomplete

**Context:** Stackless currently has no LinkedIn presence despite the content roadmap (`content-roadmap.md`) identifying LinkedIn as the primary social platform. The site footer already has a LinkedIn icon placeholder pointing to `#`. Three recent blog posts (11: Privacy for Non-Coders, 12: Building Agent Teams, 13: The Content Creator Agent) are ready to repurpose into LinkedIn posts using the Social Adapter prompt defined in post-13 (`blog/post-13-content-creator-agent.html`, lines 344-358). The content roadmap specifies the flow: blog post → LinkedIn post (excerpt + insight + question, 200-250 words, professional tone). The brand voice is direct, practical, no fluff, no "excited to share" language.

**Plan:**
1. **Human action:** Create a LinkedIn Company Page for "Stackless" at linkedin.com/company/
   - Use tagline: "Not a coder. Still ships products."
   - Description from site: "A non-coder's experiment building real digital products with AI"
   - Upload logo/banner matching site branding (dark theme, lime/pink/indigo accents)
2. **Human action:** Run the Social Adapter prompt from post-13 against each of posts 11, 12, and 13 to generate LinkedIn posts (paste each article's text into Claude with the prompt)
3. **Human action:** Post the three generated LinkedIn posts (one per day or per few days for cadence)
4. **Code change:** Update `index.html` footer LinkedIn icon href from `#` to the new LinkedIn company page URL
5. **Code change:** Update any other pages that share the same footer with the LinkedIn placeholder (`about.html`, `blog.html`, `projects.html`, `resources.html`, `fleet.html`, blog post pages)

**Acceptance Criteria:**
- [ ] LinkedIn Company Page exists with correct branding, tagline, and description
- [ ] Three LinkedIn posts published (one each for posts 11, 12, 13) using Social Adapter output
- [ ] All site footer LinkedIn icons link to the actual LinkedIn company page URL (not `#`)
- [ ] Run tests and ensure they pass

**Files to check:** `index.html`, `about.html`, `blog.html`, `projects.html`, `resources.html`, `fleet.html`, `blog/post-11-privacy-for-non-coders.html`, `blog/post-12-building-agent-teams.html`, `blog/post-13-content-creator-agent.html`, `content-roadmap.md`

---
