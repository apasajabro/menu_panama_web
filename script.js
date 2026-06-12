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

const customerNameInput = document.getElementById("customerNameInput");
const tableNumberInput = document.getElementById("tableNumberInput");
const orderNoteInput = document.getElementById("orderNoteInput");

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

const defaultConfig = {
  restaurantName: "Panama Corner",
  whatsappNumber: "6281234567890",
  whatsappGreeting: "Halo Panama Corner, saya ingin pesan:",
  currency: "IDR",
  locale: "id-ID",
};

const config =
  typeof appConfig !== "undefined"
    ? {
        ...defaultConfig,
        ...appConfig,
      }
    : defaultConfig;

const menus = Array.isArray(typeof menuItems !== "undefined" ? menuItems : [])
  ? menuItems
  : [];

let activeCategory = "all";
let cart = [];

const formatCurrency = (value) => {
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
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

const escapeHtml = (value) => {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
};

const getCartTotalPrice = () => {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
};

const getCartTotalQty = () => {
  return cart.reduce((sum, item) => sum + item.qty, 0);
};

const setCheckoutDisabled = (isDisabled) => {
  if (isDisabled) {
    checkoutButton.href = "#";
    checkoutButton.setAttribute("aria-disabled", "true");
    checkoutButton.classList.add("is-disabled");
    return;
  }

  checkoutButton.removeAttribute("aria-disabled");
  checkoutButton.classList.remove("is-disabled");
};

const renderMenu = () => {
  const keyword = searchInput.value.trim().toLowerCase();

  const filteredItems = menus.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;

    const searchableText = [
      item.name,
      item.description,
      ...(Array.isArray(item.tags) ? item.tags : []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesKeyword = searchableText.includes(keyword);

    return matchesCategory && matchesKeyword;
  });

  menuGrid.innerHTML = filteredItems
    .map((item) => {
      const initial = getInitial(item.name);
      const safeName = escapeHtml(item.name);
      const safeDescription = escapeHtml(item.description);
      const safeImage = escapeHtml(item.image);
      const safeTags = Array.isArray(item.tags) ? item.tags : [];

      return `
        <article class="menu-card">
          <div class="menu-image-stage">
            <img
              class="menu-image-main"
              src="${safeImage}"
              alt="${safeName}"
              loading="lazy"
              onerror="this.closest('.menu-image-stage').innerHTML='<div class=&quot;image-fallback&quot;>${initial}</div>'"
            />
          </div>

          <div class="menu-card-body">
            <div class="menu-card-top">
              <h3>${safeName}</h3>
              <span class="price">${formatCurrency(item.price)}</span>
            </div>

            <p>${safeDescription}</p>

            <div class="menu-meta">
              ${safeTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>

            <div class="card-actions">
              <button class="add-button" type="button" data-id="${item.id}">
                Tambah
              </button>
              <button class="detail-button" type="button" data-name="${safeName}">
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
  const selectedItem = menus.find((item) => item.id === id);
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

const buildWhatsappMessage = () => {
  const customerName = customerNameInput?.value.trim() || "";
  const tableNumber = tableNumberInput?.value.trim() || "";
  const orderNote = orderNoteInput?.value.trim() || "";
  const totalPrice = getCartTotalPrice();

  const orderText = cart
    .map((item) => {
      const subtotal = item.price * item.qty;
      return `- ${item.name} x${item.qty} = ${formatCurrency(subtotal)}`;
    })
    .join("\n");

  return [
    config.whatsappGreeting,
    "",
    `Nama: ${customerName || "-"}`,
    `Meja: ${tableNumber || "-"}`,
    "",
    "Pesanan:",
    orderText,
    "",
    `Total: ${formatCurrency(totalPrice)}`,
    `Catatan: ${orderNote || "-"}`,
  ].join("\n");
};

const updateCheckoutLink = () => {
  if (cart.length === 0) {
    setCheckoutDisabled(true);
    return;
  }

  const message = encodeURIComponent(buildWhatsappMessage());
  checkoutButton.href = `https://wa.me/${config.whatsappNumber}?text=${message}`;
  setCheckoutDisabled(false);
};

const renderCart = () => {
  const totalQty = getCartTotalQty();
  const totalPrice = getCartTotalPrice();

  cartCount.textContent = totalQty;
  cartTotal.textContent = formatCurrency(totalPrice);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <p class="empty-state">
        Belum ada pesanan. Silakan pilih menu terlebih dahulu.
      </p>
    `;

    updateCheckoutLink();
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${formatCurrency(item.price)} × ${item.qty}</p>
          </div>

          <div class="qty-control">
            <button type="button" data-action="decrease" data-id="${item.id}">−</button>
            <strong>${item.qty}</strong>
            <button type="button" data-action="increase" data-id="${item.id}">+</button>
          </div>
        </div>
      `,
    )
    .join("");

  updateCheckoutLink();
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

  activeCategory = button.dataset.category || "all";

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  button.classList.add("active");

  renderMenu();
});

searchInput.addEventListener("input", renderMenu);

customerNameInput?.addEventListener("input", updateCheckoutLink);
tableNumberInput?.addEventListener("input", updateCheckoutLink);
orderNoteInput?.addEventListener("input", updateCheckoutLink);

menuGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-button");
  const detailButton = event.target.closest(".detail-button");

  if (addButton) {
    addToCart(Number(addButton.dataset.id));
    return;
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

checkoutButton.addEventListener("click", (event) => {
  if (cart.length === 0) {
    event.preventDefault();
    alert("Silakan pilih menu terlebih dahulu.");
    return;
  }

  const customerName = customerNameInput?.value.trim() || "";
  const tableNumber = tableNumberInput?.value.trim() || "";

  if (!customerName || !tableNumber) {
    event.preventDefault();
    alert("Mohon isi nama pemesan dan nomor meja terlebih dahulu.");
    return;
  }

  updateCheckoutLink();
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
