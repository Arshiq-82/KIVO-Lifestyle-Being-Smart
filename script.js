/*
 KIVO catalogue configuration
 1) Replace WHATSAPP_NUMBER with your WhatsApp Business number.
    Use country code + number only, no +, spaces or hyphens. Example: 919876543210
 2) Replace demo products, prices and image URLs with verified products.
 3) Do not publish unverified availability, discounts or delivery promises.
*/
const WHATSAPP_NUMBER = "919987707510";

const products = window.KIVO_PRODUCTS || [];\n

const rupees = amount => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(amount);

function waUrl(message) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number || number.includes("919987707510")) {
    alert("Add your WhatsApp Business number in script.js before publishing the catalogue.");
    return "#";
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function productMessage(product) {
  return `Hello KIVO! I'm interested in purchasing:\n\nProduct: ${product.name}\nListed price: ${rupees(product.price)}\nProduct ID: ${product.id}\n\nPlease confirm availability, delivery charges, expected delivery time and the final amount.`;
}

function renderProducts(filter = "All") {
  const grid = document.getElementById("productGrid");
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No products in this category yet. Check back soon.</div>';
    return;
  }
  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/700x550/f1f5f2/65717d?text=KIVO+Product'">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price-row"><span class="price">${rupees(p.price)}</span>${p.oldPrice ? `<span class="old-price">${rupees(p.oldPrice)}</span>` : ""}</div>
        <a class="buy-btn" href="#" data-product-id="${p.id}">☏ Buy on WhatsApp</a>
      </div>
    </article>
  `).join("");
}

document.getElementById("productGrid").addEventListener("click", event => {
  const button = event.target.closest("a.buy-btn[data-product-id]");
  if (!button) return;
  event.preventDefault();
  const product = products.find(p => p.id === button.dataset.productId);
  if (!product) return;
  const url = waUrl(productMessage(product));
  if (url !== "#") window.open(url, "_blank", "noopener");
});

document.getElementById("filterRow").addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.filter);
});
document.querySelectorAll(".category-strip [data-filter]").forEach(link => {
  link.addEventListener("click", () => {
    const filter = link.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.filter === filter);
    });
    renderProducts(filter);
  });
});
document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const url = waUrl(link.dataset.message || "Hello KIVO!");
    if (url !== "#") window.open(url, "_blank", "noopener");
  });
});
const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
