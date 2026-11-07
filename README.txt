KIVO — WHATSAPP PRODUCT CATALOGUE

QUICK PRODUCT ADDING
You only need to edit products.js when you want to add, remove or update products.

1. Open products.js in your GitHub repository.
2. Find the example product template near the bottom.
3. Copy the whole product object.
4. Paste it before the closing ]; at the bottom of the product list.
5. Add a comma after the previous product object.
6. Change the id, name, category, price, description and image.
7. Save/commit the file. GitHub Pages will publish the update after the deployment finishes.

PRODUCT FIELDS
- id: unique lowercase ID with hyphens, e.g. "portable-fan"
- name: product title
- category: exactly Fitness Tech, Smart Desk, Smart Living or Travel Tech
- price: number in INR, e.g. 1299 (do not type ₹)
- oldPrice: previous price as a number, or null
- badge: short label, or ""
- description: accurate short description
- image: direct HTTPS image URL

WHATSAPP SETUP
1. Open script.js.
2. Replace WHATSAPP_NUMBER = "91XXXXXXXXXX" with your WhatsApp Business number.
3. Use country code + number only, digits only. Example: 919876543210.
4. Commit the change and test every Buy on WhatsApp button.

GITHUB DEPLOYMENT
1. Create a GitHub repository (or open your existing KIVO repository).
2. Upload all files from this folder into the repository root:
   index.html, styles.css, script.js, products.js, logo.svg, README.txt
3. Open repository Settings > Pages.
4. Under Build and deployment, select Deploy from a branch.
5. Select branch main and folder /(root), then Save.
6. Wait for GitHub Pages to finish publishing. The Pages section will show your site URL.

IMPORTANT GITHUB HOSTING NOTE
GitHub Pages is intended for hosting project sites and has restrictions on using it as a free host for an online business or e-commerce site. KIVO's WhatsApp catalogue is commercial, even though checkout and payment happen in WhatsApp. Review GitHub's current Pages terms before publishing. You can still keep the code in GitHub and deploy the same files to a host that permits commercial storefront/catalogue use.

BEFORE TAKING ORDERS
- The four listings, prices and photos included are demonstration placeholders only.
- Replace them with real products, accurate product photos and verified prices.
- Confirm supplier stock, landed cost, shipping, warranty and return terms.
- Publish clear contact, privacy, shipping, cancellation, refund and return policies.
- Confirm availability, delivery charges, final amount and delivery estimate on WhatsApp before collecting payment.

SITE BEHAVIOUR
- No cart, checkout, payment gateway or website order form.
- Each product button opens WhatsApp with that product's name, listed price and ID pre-filled.
- The customer and KIVO complete the order conversation in WhatsApp.
