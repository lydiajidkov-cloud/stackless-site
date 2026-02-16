# Stackless

Brand site, blog, shop, and web apps for Stackless.

## Live

Render: `stackless-brand.onrender.com`
Domain: `stackless.tech` (DNS pending)

Auto-deploys from GitHub push. Free tier, no build step (pure static HTML/CSS/JS).

## Structure

```
stackless-site/
  index.html           # Brand homepage
  about.html           # About page
  projects.html        # Project showcase
  blog.html            # Blog index (8 posts)
  styles.css           # Shared brand CSS
  blog/
    post-1 to post-8   # 5 standalone + 3-part "Stackless Guide" series
  shop/
    index.html          # Product shop (3 products, all £5)
    styles.css          # Shop styles
    script.js           # Shop interactivity
  curly-girl/
    index.html          # Landing page
    quiz.html           # Hair type quiz
    checker.html        # Ingredient checker
    products.html       # Product browser (257 UK products)
    faq.html            # FAQ (50 Q&As)
    about.html          # The Method + science
    styles.css          # App styles
    app.js              # App logic
    ingredients-data.js # 113 ingredients + rules
    products-data.js    # 257 products + warnings + tags
```
