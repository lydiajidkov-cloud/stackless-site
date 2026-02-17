# Payhip Digital Product Sales Platform: Practical Guide

**Purpose:** Step-by-step reference for setting up Payhip to sell digital products (PDF/HTML files) on a static HTML site.

**Last updated:** 17 February 2026

---

## Overview

Payhip is a digital product sales platform designed for creators who want to sell without technical complexity. Key selling points:

- Forever-free plan with all features included
- Handles EU/UK VAT automatically (acts as your reseller)
- Works with existing websites via simple embed buttons
- Instant digital delivery to buyers
- No monthly fees on free plan

---

## 1. Account Setup & First Product

### Create Your Account

1. Go to payhip.com
2. Sign up with email and password (takes under 2 minutes)
3. No credit card required for free plan

### Connect Payment Methods

**You need at least one of:**
- PayPal account
- Stripe account

### Add Your First Digital Product

1. From Dashboard, click **"Add Product"** > **"Digital Product"**
2. Click **"Upload product file"** button
   - Supported formats: PDF, HTML, ZIP, ebook, audio, video, any file type
   - File size limit: 5GB per product
3. Fill in product details:
   - **Title** (e.g., "Finance Dashboard Template")
   - **Description** (what buyers get, why it's useful)
   - **Price** (e.g., £5.00)
   - **Product image** (optional but recommended)
4. **Advanced settings:**
   - Upload a preview file (free sample to encourage purchases)
   - Enable "Add buyers to mailing list" checkbox to grow your email list
5. Click **"Save"**

---

## 2. Buy Now Button for Static HTML Sites

### How It Works

Payhip provides embed code that you paste into your HTML. When clicked, it opens a checkout overlay where buyers complete payment. After payment, buyers get instant access to download files.

### The Code (Two Parts)

**Part 1: Header Script** (paste once in `<head>` section)
```html
<script src="https://payhip.com/payhip.js"></script>
```

**Part 2: Button Code** (paste wherever you want the button)
```html
<a href="https://payhip.com/b/ABC123"
   class="payhip-buy-button"
   data-theme="none"
   data-product="ABC123">
   Buy Now
</a>
```

Replace `ABC123` with your product's unique key (found in your product URL).

### Button Themes

- `data-theme="green"` — Green button with Payhip styling
- `data-theme="blue"` — Blue button
- `data-theme="grey"` — Grey button
- `data-theme="none"` — Plain link (fully customizable with your CSS)

### Example: Custom Styled Button

```html
<a href="https://payhip.com/b/ABC123"
   class="payhip-buy-button"
   data-theme="none"
   data-product="ABC123"
   style="background: #0066cc; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none;">
   Buy for £5
</a>
```

---

## 3. Pricing: What You Keep from a £5 Sale

### Free Plan (Recommended to Start)

| Item | Amount |
|------|--------|
| Product price | £5.00 |
| Payhip fee (5%) | -£0.25 |
| Processing fee (~2.9% + 30p) | -£0.45 |
| **Your net income** | **£4.30 (86%)** |

### Plus Plan (£24/month, only worth it at 200+ sales/month)

| Item | Amount |
|------|--------|
| Product price | £5.00 |
| Payhip fee (2%) | -£0.10 |
| Processing fee (~2.9% + 30p) | -£0.45 |
| **Your net income** | **£4.45 (89%)** |

**Recommendation:** Start with Free plan. Only upgrade at 200+ sales/month.

---

## 4. How Buyers Receive Products

1. Buyer clicks "Buy Now" button on your site
2. Payhip checkout overlay opens
3. Buyer enters email and payment details
4. Payment processes instantly
5. Buyer is immediately redirected to download page
6. Email receipt sent automatically with permanent download link

---

## 5. UK-Specific: VAT

**Payhip acts as your reseller for EU/UK VAT:**
- Automatically detects buyer's location
- Calculates and adds correct VAT
- Reports and remits VAT to HMRC
- You are NOT responsible for EU/UK digital VAT compliance

**You can choose:**
- Include taxes in price (£5 stays £5, your profit reduced by VAT)
- Add taxes on top (buyer sees £5 + VAT = £6)

**Still your responsibility:** Declaring income to HMRC for income tax/self-assessment.

---

## 6. Competitors Comparison for £5 Products

| Platform | Your Net from £5 Sale | VAT Handling | Monthly Fee |
|----------|----------------------|--------------|-------------|
| **Payhip (Free)** | **£4.30** | EU/UK | £0 |
| **Gumroad** | £4.05 | No | £0 |
| **Lemon Squeezy** | £3.70 | EU/UK/US | £0 |

**Payhip wins for £5 products.** Highest net income, zero monthly cost, handles UK VAT.

Lemon Squeezy's 50¢ per-transaction fee kills it at low price points. Gumroad's 10% is just too much.

---

## 7. Setup Checklist

### Phase 1: Account (15 min)
- [ ] Sign up at payhip.com
- [ ] Connect PayPal or Stripe
- [ ] Customize store settings (name, logo)

### Phase 2: Products (10 min each)
- [ ] Prepare digital files (PDF/ZIP)
- [ ] Create product images (1200x1200px recommended)
- [ ] Upload product, set title/description/price
- [ ] Choose tax handling (include vs add on top)
- [ ] Enable mailing list checkbox

### Phase 3: Website Integration (15 min)
- [ ] Add `payhip.js` script to HTML head (once)
- [ ] Get embed code for each product
- [ ] Replace existing Buy Now buttons with Payhip buttons
- [ ] Style buttons to match site design
- [ ] Test purchase flow

### Phase 4: Test (10 min)
- [ ] Make test purchase with real payment
- [ ] Verify email receipt + download link
- [ ] Test on mobile
- [ ] Request refund for test purchase

---

## Quick Reference

- **Payhip dashboard:** payhip.com (login)
- **Help docs:** help.payhip.com
- **Embed buttons:** help.payhip.com/article/101-embed-buttons
- **VAT info:** help.payhip.com/article/127-digital-eu-vat
- **Coupons/discounts:** Dashboard > Marketing > Coupons
- **Payouts:** Instant to PayPal/Stripe, then to your bank (1-7 days)
