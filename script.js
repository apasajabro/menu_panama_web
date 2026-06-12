const menuItems = [
  {
    id: 1,
    name: "Ayam Bakar",
    category: "main",
    price: 18000,
    image: "assets/menu/split-image-10.jpg",
    description: "Ayam bakar + tahu + tempe + sambal.",
    tags: ["Makanan", "Ayam", "Sambal"],
  },
  {
    id: 2,
    name: "Ayam Goreng",
    category: "main",
    price: 18000,
    image: "assets/menu/split-image-12.jpg",
    description: "Ayam goreng + tahu + tempe + sambal.",
    tags: ["Makanan", "Ayam", "Sambal"],
  },
  {
    id: 3,
    name: "Ayam Geprek",
    category: "main",
    price: 15000,
    image: "assets/menu/split-image-11.jpg",
    description: "Ayam crispy + sambal. Pilihan sambal: geprek atau matah.",
    tags: ["Makanan", "Ayam", "Pedas"],
  },
  {
    id: 4,
    name: "Ayam Rempah",
    category: "main",
    price: 18000,
    image: "assets/menu/split-image-12.jpg",
    description: "Ayam rempah + tahu + tempe + sambal.",
    tags: ["Makanan", "Ayam", "Rempah"],
  },
  {
    id: 5,
    name: "Nasi Putih",
    category: "main",
    price: 4000,
    image: "assets/menu/split-image-7.jpg",
    description: "Nasi putih hangat untuk pelengkap makan.",
    tags: ["Makanan", "Nasi"],
  },
  {
    id: 6,
    name: "Nasi Goreng",
    category: "main",
    price: 12000,
    image: "assets/menu/split-image-9.jpg",
    description: "Nasi goreng + telor.",
    tags: ["Makanan", "Nasi", "Telor"],
  },
  {
    id: 7,
    name: "Nasi Telor",
    category: "main",
    price: 11000,
    image: "assets/menu/split-image-8.jpg",
    description: "Nasi + telor + sambal.",
    tags: ["Makanan", "Nasi", "Telor"],
  },
  {
    id: 8,
    name: "Mie Kuah",
    category: "main",
    price: 7000,
    image: "assets/menu/split-image-5.jpg",
    description: "Mie kuah hangat dan praktis.",
    tags: ["Makanan", "Mie"],
  },
  {
    id: 9,
    name: "Mie Goreng",
    category: "main",
    price: 7000,
    image: "assets/menu/split-image-6.jpg",
    description: "Mie goreng praktis dengan rasa gurih.",
    tags: ["Makanan", "Mie"],
  },
  {
    id: 10,
    name: "Extra Telur",
    category: "main",
    price: 4000,
    image: "assets/menu/split-image-6.jpg",
    description: "Tambahan telur untuk mie kuah atau mie goreng.",
    tags: ["Tambahan", "Telur"],
  },
  {
    id: 11,
    name: "Kentang Goreng",
    category: "snack",
    price: 12000,
    image: "assets/menu/split-image-1.jpg",
    description: "Kentang goreng renyah untuk teman santai.",
    tags: ["Snack", "Gorengan"],
  },
  {
    id: 12,
    name: "Sosis Goreng",
    category: "snack",
    price: 7000,
    image: "assets/menu/split-image-2.jpg",
    description: "Sosis goreng hangat dengan rasa gurih.",
    tags: ["Snack", "Gorengan"],
  },
  {
    id: 13,
    name: "Nugget Goreng",
    category: "snack",
    price: 7000,
    image: "assets/menu/split-image-3.jpg",
    description: "Nugget goreng praktis dan cocok untuk camilan.",
    tags: ["Snack", "Gorengan"],
  },
  {
    id: 14,
    name: "Mix Platter",
    category: "snack",
    price: 20000,
    image: "assets/menu/split-image-4.jpg",
    description: "Paket snack campur untuk dimakan bersama.",
    tags: ["Snack", "Sharing"],
  },
  {
    id: 15,
    name: "Teh Hangat / Es",
    category: "drink",
    price: 4000,
    image: "assets/menu/minuman-teh.png",
    description: "Teh hangat atau es teh segar.",
    tags: ["Minuman", "Teh"],
  },
  {
    id: 16,
    name: "Jeruk Hangat / Es",
    category: "drink",
    price: 6000,
    image: "assets/menu/minuman-jeruk.png",
    description: "Jeruk hangat atau es jeruk segar.",
    tags: ["Minuman", "Jeruk"],
  },
  {
    id: 17,
    name: "Kopi Hitam Panas",
    category: "drink",
    price: 5000,
    image: "assets/menu/minuman-kopi-hitam.png",
    description: "Kopi hitam panas dengan rasa klasik.",
    tags: ["Minuman", "Kopi"],
  },
  {
    id: 18,
    name: "Nutrisari",
    category: "drink",
    price: 4000,
    image: "assets/menu/minuman-nutrisari.png",
    description: "Minuman rasa buah yang segar.",
    tags: ["Minuman", "Segar"],
  },
  {
    id: 19,
    name: "Milo",
    category: "drink",
    price: 5000,
    image: "assets/menu/minuman-milo.png",
    description: "Minuman cokelat malt favorit.",
    tags: ["Minuman", "Cokelat"],
  },
  {
    id: 20,
    name: "Good Day",
    category: "drink",
    price: 5000,
    image: "assets/menu/minuman-good-day.png",
    description: "Kopi Good Day pilihan.",
    tags: ["Minuman", "Kopi"],
  },
  {
    id: 21,
    name: "Air Es",
    category: "drink",
    price: 2000,
    image: "assets/menu/minuman-air-es.png",
    description: "Air es dingin dan menyegarkan.",
    tags: ["Minuman", "Air"],
  },
  {
    id: 22,
    name: "Es Kopi Gula Aren",
    category: "drink",
    price: 10000,
    image: "assets/menu/minuman-kopi-gula-aren.png",
    description: "Es kopi dengan rasa manis gula aren.",
    tags: ["Minuman", "Kopi", "Dingin"],
  },
  {
    id: 23,
    name: "Es Kopi Hazelnut",
    category: "drink",
    price: 10000,
    image: "assets/menu/minuman-kopi-hazelnut.png",
    description: "Es kopi dengan aroma hazelnut.",
    tags: ["Minuman", "Kopi", "Dingin"],
  },
  {
    id: 24,
    name: "Lemon Tea",
    category: "drink",
    price: 8000,
    image: "assets/menu/minuman-lemon-tea.png",
    description: "Teh lemon segar dengan rasa ringan.",
    tags: ["Minuman", "Teh", "Segar"],
  },
  {
    id: 25,
    name: "Es Cokelat",
    category: "drink",
    price: 8000,
    image: "assets/menu/minuman-es-cokelat.png",
    description: "Minuman cokelat dingin.",
    tags: ["Minuman", "Cokelat", "Dingin"],
  },
  {
    id: 26,
    name: "Taro / Red Velvet Ice",
    category: "drink",
    price: 8000,
    image: "assets/menu/minuman-taro-redvelvet.png",
    description: "Pilihan taro atau red velvet ice.",
    tags: ["Minuman", "Dingin"],
  },
];

const whatsappNumber = "6281234567890";

const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.getElementById("categoryTabs");
const emptyState = document.getElementById("emptyState");

const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

let activeCategory = "all";
let cart = [];

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

const getInitial = (name) => {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const renderMenu = () => {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    const matchesKeyword =
      item.name.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword) ||
      item.tags.join(" ").toLowerCase().includes(keyword);

    return matchesCategory && matchesKeyword;
  });

  menuGrid.innerHTML = filteredItems
    .map((item) => {
      const initial = getInitial(item.name);

      return `
        <article class="menu-card">
          <div class="menu-image-stage">
            <img
              class="menu-image-main"
              src="${item.image}"
              alt="${item.name}"
              loading="lazy"
              onerror="this.closest('.menu-image-stage').innerHTML='<div class=&quot;image-fallback&quot;>${initial}</div>'"
            />
          </div>

          <div class="menu-card-body">
            <div class="menu-card-top">
              <h3>${item.name}</h3>
              <span class="price">${formatCurrency(item.price)}</span>
            </div>

            <p>${item.description}</p>

            <div class="menu-meta">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>

            <div class="card-actions">
              <button class="add-button" data-id="${item.id}">
                Tambah
              </button>
              <button class="detail-button" data-name="${item.name}">
                Detail
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  emptyState.hidden = filteredItems.length > 0;
};

const addToCart = (id) => {
  const selectedItem = menuItems.find((item) => item.id === id);
  if (!selectedItem) return;

  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      ...selectedItem,
      qty: 1,
    });
  }

  renderCart();
  openCart();
};

const decreaseCartItem = (id) => {
  const existingItem = cart.find((item) => item.id === id);
  if (!existingItem) return;

  existingItem.qty -= 1;

  if (existingItem.qty <= 0) {
    cart = cart.filter((item) => item.id !== id);
  }

  renderCart();
};

const increaseCartItem = (id) => {
  const existingItem = cart.find((item) => item.id === id);
  if (!existingItem) return;

  existingItem.qty += 1;
  renderCart();
};

const renderCart = () => {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalQty;
  cartTotal.textContent = formatCurrency(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-state">
        Belum ada pesanan. Silakan pilih menu terlebih dahulu.
      </p>
    `;

    checkoutButton.href = "#";
    checkoutButton.setAttribute("aria-disabled", "true");
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <h3>${item.name}</h3>
            <p>${formatCurrency(item.price)} × ${item.qty}</p>
          </div>

          <div class="qty-control">
            <button data-action="decrease" data-id="${item.id}">−</button>
            <strong>${item.qty}</strong>
            <button data-action="increase" data-id="${item.id}">+</button>
          </div>
        </div>
      `,
    )
    .join("");

  const orderText = cart
    .map((item) => `- ${item.name} x${item.qty}`)
    .join("\n");

  const message = encodeURIComponent(
    `Halo Panama Corner, saya ingin pesan:\n${orderText}\n\nTotal: ${formatCurrency(
      totalPrice,
    )}`,
  );

  checkoutButton.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  checkoutButton.removeAttribute("aria-disabled");
};

const openCart = () => {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeCartDrawer = () => {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".tab");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  button.classList.add("active");

  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

menuGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-button");
  const detailButton = event.target.closest(".detail-button");

  if (addButton) {
    addToCart(Number(addButton.dataset.id));
  }

  if (detailButton) {
    alert(
      `${detailButton.dataset.name}\n\nSilakan tambahkan ke pesanan atau tanyakan detail ke pelayan.`,
    );
  }
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.dataset.id);

  if (button.dataset.action === "increase") {
    increaseCartItem(id);
  }

  if (button.dataset.action === "decrease") {
    decreaseCartItem(id);
  }
});

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCartDrawer();
    navLinks.classList.remove("open");
  }
});

renderMenu();
renderCart();
