(() => {
  const data = window.RESTAURANT_DATA;

  const state = {
    entered: false,
    cart: loadCart(),
    activeCategory: data.categories[0]?.id || "",
    detailItem: null,
    detailQty: 1
  };

  const els = {
    body: document.body,
    welcome: document.getElementById("welcomeScreen"),
    mainApp: document.getElementById("mainApp"),
    enterBtn: document.getElementById("enterBtn"),
    heroPhoto: document.getElementById("heroPhoto"),
    menuBackdropPhoto: document.getElementById("menuBackdropPhoto"),
    faqOpenBtn: document.getElementById("faqOpenBtn"),
    servicesOpenBtn: document.getElementById("servicesOpenBtn"),
    hoverLineWrap: document.getElementById("hoverLineWrap"),
    categoryNav: document.getElementById("categoryNav"),
    menuSections: document.getElementById("menuSections"),
    itemModal: document.getElementById("itemModal"),
    itemModalBody: document.getElementById("itemModalBody"),
    faqModal: document.getElementById("faqModal"),
    servicesModal: document.getElementById("servicesModal"),
    cartDrawer: document.getElementById("cartDrawer"),
    cartTrigger: document.getElementById("cartTrigger"),
    cartCount: document.getElementById("cartCount"),
    cartItems: document.getElementById("cartItems"),
    cartTotal: document.getElementById("cartTotal"),
    closeCartBtn: document.getElementById("closeCartBtn"),
    checkoutBtn: document.getElementById("checkoutBtn"),
    checkoutModal: document.getElementById("checkoutModal"),
    checkoutForm: document.getElementById("checkoutForm"),
    successOverlay: document.getElementById("successOverlay")
  };

  const currency = new Intl.NumberFormat("ar-EG");

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem("albayt_cart_v1")) || {};
    } catch {
      return {};
    }
  }

  function saveCart() {
    localStorage.setItem("albayt_cart_v1", JSON.stringify(state.cart));
  }

  function money(value) {
    return `${currency.format(value)} ج.م`;
  }

  function getItemById(id) {
    for (const category of data.categories) {
      const item = category.items.find(i => i.id === id);
      if (item) return item;
    }
    return null;
  }

  function qtyFor(id) {
    return state.cart[id]?.qty || 0;
  }

  function cartCount() {
    return Object.values(state.cart).reduce((sum, entry) => sum + entry.qty, 0);
  }

  function cartTotal() {
    return Object.values(state.cart).reduce((sum, entry) => {
      const item = getItemById(entry.id);
      return sum + (item ? item.price * entry.qty : 0);
    }, 0);
  }

  function stepControlHTML(itemId) {
    const qty = qtyFor(itemId);
    if (qty <= 0) {
      return `
        <div class="qty-control is-compact" data-qty-wrap="${itemId}">
          <button class="qty-plus" data-action="qty-add" data-id="${itemId}">+</button>
        </div>
      `;
    }

    return `
      <div class="qty-control" data-qty-wrap="${itemId}">
        <button class="qty-minus" data-action="qty-sub" data-id="${itemId}">−</button>
        <div class="qty-count">${qty}</div>
        <button class="qty-plus" data-action="qty-add" data-id="${itemId}">+</button>
      </div>
    `;
  }

  function syncMenuQuantityControls() {
    document.querySelectorAll("[data-qty-wrap]").forEach(wrap => {
      const id = wrap.dataset.qtyWrap;
      wrap.outerHTML = stepControlHTML(id);
    });
  }

  function updateDetailQtyText() {
    const node = document.getElementById("detailQtyValue");
    if (node) node.textContent = String(state.detailQty);
  }

  function addToCart(id, delta = 1) {
    const current = state.cart[id]?.qty || 0;
    const next = Math.max(0, current + delta);

    if (next === 0) delete state.cart[id];
    else state.cart[id] = { id, qty: next };

    saveCart();
    renderCart();
    syncMenuQuantityControls();
    updateDetailQtyText();
  }

  function setQty(id, qty) {
    const next = Math.max(0, qty);
    if (next === 0) delete state.cart[id];
    else state.cart[id] = { id, qty: next };

    saveCart();
    renderCart();
    syncMenuQuantityControls();
    updateDetailQtyText();
  }

  function renderCategoryNav() {
    els.categoryNav.innerHTML = data.categories.map(category => `
      <button class="category-btn ${category.id === state.activeCategory ? "active" : ""}" data-scroll-to="${category.id}">
        ${category.name}
      </button>
    `).join("");
  }

  function renderCard(item) {
    return `
      <article class="food-card shimmer-layer" data-open-item="${item.id}">
        <div class="food-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="food-chip">مميز</div>
        </div>

        <div class="food-body">
          <h4 class="food-title">${item.name}</h4>
          <p class="food-desc">${item.desc}</p>

          <div class="food-row">
            <div class="food-price">${money(item.price)}</div>
            <button class="inspect-btn" data-open-item-btn="${item.id}">تفاصيل</button>
          </div>

          <div class="food-row">
            ${stepControlHTML(item.id)}
            <button class="inspect-btn" data-add-direct="${item.id}">أضف للسلة</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderSections() {
    els.menuSections.innerHTML = data.categories.map(category => `
      <section id="section-${category.id}" class="menu-section reveal" data-section="${category.id}">
        <div class="section-top-row">
          <button class="section-back" data-back-to-top>↑ رجوع</button>
          <div class="section-mini-info">${data.restaurant.openHours}</div>
        </div>

        <div class="section-head">
          <div class="welcome-badge">${category.name}</div>
          <h3>${category.name}</h3>
          <p class="section-description">${category.description}</p>
        </div>

        <div class="cards-grid">
          ${category.items.map(item => renderCard(item)).join("")}
        </div>
      </section>
    `).join("");

    observeReveal();
    observeSections();
  }

  function renderMenu() {
    renderCategoryNav();
    renderSections();
  }

  function renderCart() {
    const items = Object.values(state.cart);
    els.cartCount.textContent = String(cartCount());
    els.cartTotal.textContent = money(cartTotal());

    if (!items.length) {
      els.cartItems.innerHTML = `
        <div class="cart-empty glass-panel" style="padding:16px;border-radius:20px;">
          <strong style="color:#fff3dd;">السلة فاضية</strong>
          <p style="margin:8px 0 0;color:var(--text-soft);">اختار أصنافك المفضلة ثم ارجع هنا لإتمام الطلب.</p>
        </div>
      `;
      return;
    }

    els.cartItems.innerHTML = items.map(entry => {
      const item = getItemById(entry.id);
      if (!item) return "";
      return `
        <div class="cart-item">
          <div class="cart-item-top">
            <div>
              <p class="cart-item-name">${item.name}</p>
              <p class="cart-item-desc">${item.desc}</p>
            </div>
            <strong style="color:#ffe2a0;">${money(item.price * entry.qty)}</strong>
          </div>

          <div class="cart-item-meta">
            ${stepControlHTML(item.id)}
            <button class="inspect-btn" data-open-item="${item.id}">عرض</button>
          </div>
        </div>
      `;
    }).join("");
  }

  function openOverlay(el) {
    el.classList.add("is-open");
    el.setAttribute("aria-hidden", "false");
  }

  function closeOverlay(el) {
    el.classList.remove("is-open");
    el.setAttribute("aria-hidden", "true");
  }

  function openCart() {
    els.cartDrawer.classList.add("is-open");
    openOverlay(els.cartDrawer);
  }

  function closeCart() {
    els.cartDrawer.classList.remove("is-open");
    closeOverlay(els.cartDrawer);
  }

  function openFaq() {
    openOverlay(els.faqModal);
  }

  function openServices() {
    openOverlay(els.servicesModal);
  }

  function openCheckout() {
    openOverlay(els.checkoutModal);
  }

  function closeCheckout() {
    closeOverlay(els.checkoutModal);
  }

  function closeAllModals() {
    closeOverlay(els.itemModal);
    closeOverlay(els.faqModal);
    closeOverlay(els.servicesModal);
    closeCheckout();
  }

  function renderDetailModal(item) {
    const ingredients = item.full.split("،").map(s => s.trim()).filter(Boolean);

    els.itemModalBody.innerHTML = `
      <div class="detail-hero">
        <div class="detail-visual glass-panel">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="detail-copy">
          <div class="modal-eyebrow">تفاصيل الصنف</div>
          <h3 class="detail-title">${item.name}</h3>
          <div class="detail-price">${money(item.price)}</div>
          <p class="section-description">${item.desc}</p>

          <ul class="detail-list">
            ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
          </ul>

          <div class="detail-actions">
            <div class="qty-control" data-modal-qty="${item.id}">
              <button class="qty-minus" data-action="detail-qty-sub" data-id="${item.id}">−</button>
              <div class="qty-count" id="detailQtyValue">${state.detailQty}</div>
              <button class="qty-plus" data-action="detail-qty-add" data-id="${item.id}">+</button>
            </div>
            <button class="checkout-btn" data-modal-add="${item.id}">أضف للسلة</button>
          </div>

          <div class="detail-note">اضغط خارج النافذة أو على × للرجوع.</div>
        </div>
      </div>
    `;
  }

  function openItem(itemId) {
    const item = getItemById(itemId);
    if (!item) return;
    state.detailItem = item;
    state.detailQty = qtyFor(itemId) || 1;
    renderDetailModal(item);
    openOverlay(els.itemModal);
  }

  function enterApp() {
    if (state.entered) return;
    state.entered = true;
    document.body.classList.add("entered");
    els.mainApp.classList.add("screen-enter");
    setTimeout(() => {
      els.cartTrigger.style.opacity = "1";
      els.cartTrigger.style.pointerEvents = "auto";
    }, 280);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => scrollToCategory(data.categories[0].id), 450);
  }

  function scrollToCategory(categoryId) {
    const section = document.getElementById(`section-${categoryId}`);
    if (!section) return;
    const topOffset = 122;
    const y = section.getBoundingClientRect().top + window.pageYOffset - topOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.in-view)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(item => io.observe(item));
  }

  function observeSections() {
    const sections = document.querySelectorAll("[data-section]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.dataset.section;
        state.activeCategory = id;
        renderCategoryNav();
      });
    }, {
      threshold: 0.5,
      rootMargin: "-20% 0px -45% 0px"
    });

    sections.forEach(section => io.observe(section));
  }

  function setupImageFallbacks() {
    const fallback = (img) => {
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
    };

    fallback(els.heroPhoto);
    fallback(els.menuBackdropPhoto);
  }

  function setupHoverLine() {
    if (!els.hoverLineWrap) return;
    const line = els.hoverLineWrap.querySelector(".hover-line");
    const update = (e) => {
      const rect = line.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      line.style.setProperty("--glow-x", `${Math.max(0, Math.min(100, x))}%`);
    };

    els.hoverLineWrap.addEventListener("pointermove", update);
    els.hoverLineWrap.addEventListener("pointerenter", update);
  }

  function flashSuccess() {
    openOverlay(els.successOverlay);
    els.successOverlay.querySelector(".success-card").classList.add("success-open");
    setTimeout(() => closeOverlay(els.successOverlay), 2200);
  }

  function bindGlobalClicks() {
    document.addEventListener("click", (e) => {
      const target = e.target;

      const openItemBtn = target.closest("[data-open-item], [data-open-item-btn]");
      if (openItemBtn) {
        const id = openItemBtn.getAttribute("data-open-item") || openItemBtn.getAttribute("data-open-item-btn");
        openItem(id);
        return;
      }

      const directAdd = target.closest("[data-add-direct]");
      if (directAdd) {
        addToCart(directAdd.dataset.addDirect, 1);
        return;
      }

      const qtyAdd = target.closest("[data-action='qty-add']");
      if (qtyAdd) {
        addToCart(qtyAdd.dataset.id, 1);
        return;
      }

      const qtySub = target.closest("[data-action='qty-sub']");
      if (qtySub) {
        addToCart(qtySub.dataset.id, -1);
        return;
      }

      const detailAdd = target.closest("[data-action='detail-qty-add']");
      if (detailAdd) {
        state.detailQty += 1;
        updateDetailQtyText();
        return;
      }

      const detailSub = target.closest("[data-action='detail-qty-sub']");
      if (detailSub) {
        state.detailQty = Math.max(1, state.detailQty - 1);
        updateDetailQtyText();
        return;
      }

      const modalAdd = target.closest("[data-modal-add]");
      if (modalAdd) {
        setQty(modalAdd.dataset.modalAdd, state.detailQty);
        closeOverlay(els.itemModal);
        return;
      }

      const closeModalBtn = target.closest("[data-close-modal]");
      if (closeModalBtn) {
        closeOverlay(els.itemModal);
        return;
      }

      const closeFaqBtn = target.closest("[data-close-faq]");
      if (closeFaqBtn) {
        closeOverlay(els.faqModal);
        return;
      }

      const closeServicesBtn = target.closest("[data-close-services]");
      if (closeServicesBtn) {
        closeOverlay(els.servicesModal);
        return;
      }

      const closeCheckoutBtn = target.closest("[data-close-checkout]");
      if (closeCheckoutBtn) {
        closeCheckout();
        return;
      }

      if (target.closest(".modal-backdrop")) {
        closeAllModals();
        return;
      }

      const scrollBtn = target.closest("[data-scroll-to]");
      if (scrollBtn) {
        scrollToCategory(scrollBtn.dataset.scrollTo);
        return;
      }

      const backTop = target.closest("[data-back-to-top]");
      if (backTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  function bindButtons() {
    els.enterBtn.addEventListener("click", enterApp);
    els.faqOpenBtn.addEventListener("click", openFaq);
    els.servicesOpenBtn.addEventListener("click", openServices);

    els.cartTrigger.addEventListener("click", openCart);
    els.closeCartBtn.addEventListener("click", closeCart);

    els.checkoutBtn.addEventListener("click", () => {
      if (!Object.keys(state.cart).length) return;
      closeCart();
      openCheckout();
    });

    els.checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeCheckout();
      els.checkoutForm.reset();
      state.cart = {};
      saveCart();
      renderCart();
      syncMenuQuantityControls();
      flashSuccess();
    });
  }

  function bindKeyboard() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllModals();
    });
  }

  function boot() {
    setupImageFallbacks();
    setupHoverLine();
    bindButtons();
    bindGlobalClicks();
    bindKeyboard();

    renderMenu();
    renderCart();
    syncMenuQuantityControls();

    if (Object.keys(state.cart).length) {
      document.body.classList.add("entered");
      state.entered = true;
      setTimeout(() => {
        els.cartTrigger.style.opacity = "1";
        els.cartTrigger.style.pointerEvents = "auto";
      }, 50);
    }
  }

  boot();
})();
