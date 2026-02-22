# Manual Tasks

## Visual QA of nav after removing Browse Products
**Description:** After code changes, each page should be visually checked in a browser to confirm the nav looks correct without the CTA button and no layout gaps appear.

**Manual steps:**
- [ ] Open each affected page in a browser and verify the nav bar shows "Shop" without a duplicate "Browse Products" button
- [ ] Check mobile menu on each page (hamburger menu) to confirm no "Browse Products" link appears
- [ ] Verify the nav spacing/layout looks correct with one fewer item

## Visual QA of nav after removing Browse Products
**Description:** CSS removal and nav changes need visual confirmation in a browser to ensure no layout breakage.

**Manual steps:**
- [ ] Open each affected page in a browser and verify the nav bar shows "Shop" without a duplicate "Browse Products" button
- [ ] Check mobile menu on each page (hamburger menu) to confirm no "Browse Products" link appears
- [ ] Verify nav spacing/alignment looks correct after removing the CTA (no gaps or misalignment)
- [ ] Check both light and dark mode since dark-mode `.nav-cta` styles were also removed

## Visual QA of nav after removing Browse Products
**Description:** Browser verification needed to confirm nav renders correctly after removing the duplicate button.

**Manual steps:**
- [ ] Open each affected page in a browser and verify the nav bar shows "Shop" without a duplicate "Browse Products" button
- [ ] Check mobile menu on each page (hamburger menu) to confirm no "Browse Products" link appears
- [ ] Verify nav spacing/alignment looks correct without the CTA button

## Visual QA of restructured product cards
**Description:** The tag hierarchy changes affect visual layout and readability, which require human review in a browser.

**Manual steps:**
- [ ] Open products.html in browser, verify brand/retailer/category appear as plain dot-separated text
- [ ] Verify weight + CGM badges sit on their own row and look distinct from community tags
- [ ] Verify community tags (Holy Grail, Budget Starter, Good SOTC) have a clearly different visual style
- [ ] Check "Good SOTC" displays correctly (not "Good Sotc")
- [ ] Toggle dark mode and verify all three rows render correctly
- [ ] Test on mobile viewport width to confirm wrapping behaviour is acceptable

## Review Non-Coder Start Guide content
**Description:** The guide content should authentically reflect Lydia's real experience and voice. AI-generated first-person narrative needs human review to ensure accuracy and authenticity.

**Manual steps:**
- [ ] Review the guide text for accuracy against Lydia's actual setup experience (subscription cost, tools used, pain points encountered)
- [ ] Verify all installation commands and URLs are current and correct (Claude Code npm package name, Node.js download URL, etc.)
- [ ] Check that the tone matches Lydia's voice — direct, conversational, non-technical, no over-formality
- [ ] Open the page in a browser and visually confirm layout, card styling, dark mode, and mobile responsiveness
- [ ] Test all internal links (back to blog, links to existing guide series)

## Review guides hub framing and Start Here callout
**Description:** The reframing changes visible text and SEO metadata across the entire site. A human review is needed to confirm the new "Guides" label and "Start Here" callout feel right, and that no awkward "blog" references remain in prose or related-post sections within individual articles.

**Manual steps:**
- [ ] Browse the live/preview site and confirm "Guides" nav label appears correctly on all pages (desktop + mobile)
- [ ] Review the blog.html page to confirm the "Start Here" callout reads naturally and directs new visitors to Part 1 of the Stackless Guide
- [ ] Spot-check 3-4 individual blog posts to confirm back-links say "All Guides" and no stale "Blog" references remain in visible text
- [ ] Verify Google Search Console or analytics after deploy to confirm no 404s from the unchanged blog.html URL

## Verify project links and descriptions
**Description:** Some new project cards may need external links or hosted URLs that don't yet exist on the stackless-site domain.

**Manual steps:**
- [ ] Confirm where The Agentcy game is hosted / will be hosted (is `agent-office-game/game/index.html` accessible from stackless-site, or does it need to be copied/deployed?)
- [ ] Confirm whether Zoe Recipe Finder should link anywhere or remain link-less (like Daily AI Podcast)
- [ ] Visual QA: review the spotlight card layout on desktop and mobile to confirm it looks good with the neo-brutalist style
- [ ] Review card descriptions for accuracy — especially the clinical EHR pathway description

## Review edited blog posts for reading flow
**Description:** After automated removals, the posts need a human read-through to confirm the narrative still makes sense and no awkward gaps remain.

**Manual steps:**
- [ ] Read post-8 "How I Pick the Right Tool" section — confirm the reduced bullet list still feels complete
- [ ] Read post-10 "New Shiny Tool" section — confirm the rewritten intro/closing around Claude Artifacts reads naturally
- [ ] Open all three posts in a browser and visually check layout (no empty whitespace gaps from removed sections)

## Review post-14 content and dark mode rendering
**Description:** Blog content quality and visual rendering require human review since there are no automated tests for content accuracy or CSS rendering.

**Manual steps:**
- [ ] Open `post-14-security-for-non-coders.html` in browser and review content for accuracy, tone, and Stackless voice
- [ ] Toggle dark mode and verify all card components, text, and backgrounds render correctly
- [ ] Check mobile responsive layout (hamburger menu, card stacking, readable font sizes)
- [ ] Verify all nav links and article-nav prev/next links work correctly
- [ ] Review blog.html to confirm post-14 appears correctly in index and Non-Expert Series banner

## Set up Payhip account and create product listings
**Description:** Payhip account creation, product uploads, and payment configuration must be done manually in the Payhip web dashboard before product IDs can be inserted into code.

**Manual steps:**
- [ ] Create a Payhip account at payhip.com (free plan, 5% transaction fee)
- [ ] Connect PayPal or Stripe for payouts in Payhip dashboard
- [ ] Create product listing: "Personal Finance Dashboard" — upload deliverable ZIP, set price £5, write description
- [ ] Create product listing: "AI Portfolio Template" — upload deliverable ZIP, set price £5, write description
- [ ] Create product listing: "Grocery Spending Dashboard" — upload deliverable ZIP, set price £5, write description
- [ ] Note down the 3 product IDs from each product's Payhip URL (format: `payhip.com/b/XXXXX`)
- [ ] Optionally set up Ko-fi account at ko-fi.com for the donation button (or use Payhip's tip jar feature)
- [ ] Provide the 3 product IDs and donation URL to Claude for code integration

## Set up Mailchimp account and get embed form URL
**Description:** The Mailchimp form action URL and hidden field values can only be obtained by creating a Mailchimp account and audience list manually.

**Manual steps:**
- [ ] Sign up for Mailchimp free tier at mailchimp.com
- [ ] Create an Audience (mailing list) for the Stackless blog
- [ ] Go to Audience > Signup forms > Embedded forms
- [ ] Copy the form `action` URL (format: `https://<dc>.list-manage.com/subscribe/post?u=<id>&id=<list_id>`)
- [ ] Copy the hidden field values (`u` and `id`)
- [ ] Replace the placeholder URL and field values in `blog.html`
- [ ] Test the form end-to-end: submit an email, verify it appears in Mailchimp audience, verify double opt-in confirmation email is sent

## Submit sitemap to Google Search Console
**Description:** After deploying the updated sitemap.xml, it needs to be submitted to Google Search Console for indexing. This requires browser access to the Search Console dashboard.

**Manual steps:**
- [ ] Push updated sitemap.xml to GitHub (triggers auto-deploy to Render)
- [ ] Log in to Google Search Console at https://search.google.com/search-console
- [ ] Navigate to Sitemaps section (left sidebar)
- [ ] Enter `sitemap.xml` in the "Add a new sitemap" field and submit
- [ ] Verify the sitemap is accepted and shows the correct page count (28 URLs)

## MSI Claw Mapper: browser testing before publish
**Description:** The claw-mapper tool needs manual QA in a browser before being publicly announced via the blog post. Several features depend on browser APIs that can't be verified via code alone.

**Manual steps:**
- [ ] Open `claw-mapper/index.html` in browser, test Dwarf Fortress demo loads correctly
- [ ] Test URL fetch (paste a URL, check CORS proxy retrieves keybindings)
- [ ] Test paste-text flow (paste arbitrary keybindings, verify parser output)
- [ ] Test auto-mapper assigns bindings to controller slots sensibly
- [ ] Test SVG layout diagram renders, click-to-reassign modal works
- [ ] Test VDF export downloads a valid file
- [ ] Test quick reference card generates correctly
- [ ] Test mobile responsiveness (narrow viewport or phone)
- [ ] Test dark mode toggle on both the mapper and the new blog post
- [ ] Review blog post content for tone, accuracy, and broken links before sharing publicly

## UI/UX visual QA across all 7 Stackless pages
**Description:** After code changes are applied, each page needs manual visual review in both light and dark mode at desktop and mobile widths. Automated tests cannot catch visual regressions, colour contrast issues, or layout quirks.

**Manual steps:**
- [ ] Open each of the 7 main pages in a browser and toggle dark mode on/off — verify backgrounds, text, cards, and borders all look correct
- [ ] Resize browser to mobile width (375px) on each page — verify nav hamburger works, content reflows correctly, no horizontal overflow
- [ ] Check blog.html tag colours in dark mode are readable (sufficient contrast)
- [ ] Check shop product cards and Buy buttons in dark mode at both desktop and mobile
- [ ] Check fleet agent cards in dark mode — verify card borders/shadows are visible against dark background
- [ ] Verify resources.html NotebookLM badge and audio stubs look correct in dark mode

## Manual QA review of CurlMagic UI/UX changes
**Description:** Code changes need visual verification in browser across light/dark mode, mobile/desktop viewports, and all interactive features.

**Manual steps:**
- [ ] Open each of the 7 pages in Chrome and verify light + dark mode rendering looks correct
- [ ] Test Products page: apply multiple filters, verify "Clear all filters" works, test "Load More" loading state, confirm empty state message appears with impossible filter combo
- [ ] Test mobile responsive layout (Chrome DevTools, 375px width) on all pages — check nav hamburger, grid collapse, footer layout
- [ ] Keyboard-only navigation test: Tab through each page, verify skip-to-main-content link appears on first Tab press
- [ ] Test Quiz: complete all 7 questions, verify "Question X of 7" updates, check progress bar visually
- [ ] Test About page table of contents: click each anchor link, verify smooth scroll to correct section
- [ ] Screen reader spot-check (NVDA or narrator): verify aria-live announcements on Products filter, FAQ search, and Scanner results

## Set up LinkedIn page for Stackless and publish initial posts
**Description:** Creating a LinkedIn Company Page and publishing posts are external platform actions that cannot be automated by code changes.

**Manual steps:**
- [ ] Create LinkedIn Company Page for "Stackless" (linkedin.com → Work → Create a Company Page → Small business)
- [ ] Set tagline to "Not a coder. Still ships products." and add site description
- [ ] Upload logo and banner image matching site branding
- [ ] Run Social Adapter prompt (from post-13) against post-11 text, save LinkedIn output
- [ ] Run Social Adapter prompt against post-12 text, save LinkedIn output
- [ ] Run Social Adapter prompt against post-13 text, save LinkedIn output
- [ ] Review and publish each LinkedIn post (suggest spacing 2-3 days apart for reach)
- [ ] Copy the LinkedIn company page URL and provide it so footer links can be updated in code
