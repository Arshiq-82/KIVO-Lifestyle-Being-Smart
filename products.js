/*
 KIVO PRODUCT LIST — THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD PRODUCTS.

 Copy the product template below, paste it as a new item inside the [ ... ] list,
 then change the details. Keep a comma between product objects.

 Required fields:
   id          Unique lowercase ID; use hyphens, e.g. "portable-fan"
   name        Product name shown on the website
   category    Must be one of: Fitness Tech, Smart Desk, Smart Living, Travel Tech
   price       Selling/listed price in INR as a number (no ₹ sign)
   description Short, accurate product description
   image       Direct image URL (https://...)

 Optional fields:
   oldPrice    Previous price as a number, or null
   badge       Small label such as "New" or "Bestseller", or ""

 Do not publish unverified prices, product claims, warranties or delivery promises.
*/
window.KIVO_PRODUCTS = [
  {
    id: "electric-protein-shaker",
    name: "Automatic Protein Shaker",
    category: "Fitness Tech",
    price: 1499,
    oldPrice: null,
    badge: "Featured",
    description: "Automatic mixing for your everyday protein routine. Confirm model and specifications before listing.",
    image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "smart-desk-lamp",
    name: "Smart Desk Lamp",
    category: "Smart Desk",
    price: 899,
    oldPrice: null,
    badge: "Desk essential",
    description: "A clean, modern lighting option for your workspace. Replace with the exact product photo and verified features.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "mini-massage-gun",
    name: "Mini Massage Gun",
    category: "Fitness Tech",
    price: 1999,
    oldPrice: null,
    badge: "Fitness pick",
    description: "Compact recovery accessory. Confirm attachments, battery and warranty with the supplier.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "portable-blender",
    name: "Portable Blender",
    category: "Smart Living",
    price: 1199,
    oldPrice: null,
    badge: "Everyday gadget",
    description: "Portable blending concept. Confirm capacity, charging type, blade design and safety details before listing.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=85"
  }

  /*
  ADD A NEW PRODUCT BY COPYING THIS TEMPLATE.
  Remove the comment markers around it and fill in your details.

  ,
  {
    id: "your-product-id",
    name: "Your Product Name",
    category: "Travel Tech",
    price: 1299,
    oldPrice: null,
    badge: "New",
    description: "Write a short and accurate product description here.",
    image: "https://your-image-link.jpg"
  }
  */
];
