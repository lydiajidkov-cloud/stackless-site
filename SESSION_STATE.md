# Stackless Site - Session State

## Last Updated: 2026-02-17

## Status: DEPLOYED ON RENDER, content current

## What's Done
- GitHub repo: (private repo, auto-deploys to Render)
- Render deployment: stackless-brand.onrender.com (auto-deploy on push)
- Domain: stackless.tech purchased, DNS setup pending (husband configuring)

### Brand Pages
- index.html, about.html, projects.html, blog.html with consistent nav

### Blog (10 posts live)
- Posts 1-5: standalone articles (EHR, shipping, tools, process, AI mistakes)
- Posts 6-8: "The Stackless Guide" series with prev/next navigation (security, testing, toolkit)
- Post 9: "Gemini Canvas Changed How I Build Frontends" (standalone, tools + AI tags)
- Post 10: "What I Actually Ship With AI: A Solo Builder's Real Stack" (standalone, tools + AI + workflow tags)
- Blog index lists all 10 posts with series banner

### Shop
- £5 flat pricing for all products (finance dashboard, AI portfolio, grocery dashboard)
- EHR removed (moved to Clinformatix for bespoke work)
- "Why £5?" section, milestone tracker, donations placeholder

### Curly Girl Wavy Girl UK (6 pages)
- index.html, quiz.html, checker.html, products.html, about.html, faq.html
- Smart Checker: 3 input methods (Search Product, Snap Ingredients via OCR, Scan Barcode)
- 113-ingredient database, 332-product database (257 CG + 75 non-CG), 50-question FAQ
- Self-contained styles and JS, OCR/barcode libs lazy-loaded from CDN

## Architecture
```
stackless-site/
  index.html          - brand homepage
  about.html          - about page
  projects.html       - project showcase
  blog.html           - blog index
  styles.css          - shared brand CSS
  blog/
    post-1 through post-10 - 10 blog posts
  shop/
    index.html        - product shop
    styles.css        - shop-specific styles
    script.js         - shop interactivity
  curly-girl/
    index.html        - landing page
    quiz.html         - hair quiz
    checker.html      - ingredient checker
    about.html        - the method + science
    faq.html          - searchable FAQ (50 Q&As)
    styles.css        - curly girl styles
    app.js            - app logic
    ingredients-data.js  - 113 ingredients + rules
    products-data.js     - 332 UK products (257 CG + 75 non-CG)
```

## What's Pending
1. Custom domain: stackless.tech DNS setup
2. Payment platform: Payhip setup — full research done (`research/research-payhip-integration.md`)
3. Connect Buy Now buttons to Payhip payment links
4. Ko-fi donations page setup
