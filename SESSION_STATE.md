# Stackless Site - Session State

## Last Updated: 2026-02-15 18:30

## Status: DEPLOYED ON RENDER (content updates needed)

## What's Done
- GitHub repo: github.com/lydiajidkov-cloud/stackless-site
- Render deployment: stackless-brand.onrender.com (single static site)
- Structure: brand pages at root, shop/ and curly-girl/ as subfolders
- All internal nav links working across pages
- Auto-deploy from GitHub push configured

## What's Pending
1. **CRITICAL: Remove EHR/clinical content** from index.html, projects.html, shop/index.html, blog.html
2. Custom domain: stackless.tech DNS setup (husband configuring when home)
3. Lemon Squeezy integration for product purchases
4. LinkedIn content publication

## Architecture
```
stackless-site/
  index.html          ← brand homepage
  about.html          ← about page
  projects.html       ← project showcase
  blog.html           ← blog posts
  styles.css          ← shared brand CSS
  shop/
    index.html        ← product shop (loads ../styles.css)
    styles.css        ← shop-specific styles
    script.js         ← shop interactivity
  curly-girl/
    index.html        ← ingredient checker
    quiz.html         ← hair quiz
    about.html        ← about page
    styles.css        ← curly girl styles
    app.js            ← app logic
    ingredients-data.js ← product database
```

## Notes
- Render free tier, no build step needed (pure static HTML/CSS/JS)
- Shop page references ../styles.css for shared brand look
- Curly-girl is self-contained with own styles
