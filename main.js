(() => {
  const data = {
    restaurant: {
      name: "البيت الدمشقي",
      openHours: "من 1 ظهرًا إلى 12 مساءً"
    },
    categories: [
      {
        id: "pizza",
        name: "ركن البيتزا",
        description: "عجينة هشة، صوص غني، وطعم يفتح النفس.",
        items: [
          {
            id: "pizza-margherita",
            name: "بيتزا مارجريتا",
            desc: "موزاريلا، صوص طماطم، عجينة سميكة",
            full: "عجينة طازة، صوص طماطم، موزاريلا، ريحان",
            price: 69,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "pizza-pepperoni",
            name: "بيتزا بيبروني",
            desc: "بيبروني، جبنة، صوص خاص",
            full: "عجينة طازة، صوص بيتزا، جبنة موزاريلا، بيبروني",
            price: 89,
            image: "https://images.unsplash.com/photo-1534308983496-4f65b1f1c9b8?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "sandwiches",
        name: "ركن السندوتشات العربية",
        description: "سندوتشات شامية خفيفة ومشبعة.",
        items: [
          {
            id: "saj-chicken",
            name: "سندوتش دجاج ساج",
            desc: "دجاج متبل، صوص، خضار طازة",
            full: "دجاج متبل، خبز ساج، بطاطس، صوص ثوم، خضار",
            price: 58,
            image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "shawarma-beef",
            name: "شاورما لحم",
            desc: "لحم، طحينة، مخلل",
            full: "لحم شاورما، خبز عربي، طحينة، مخلل، بطاطس",
            price: 72,
            image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "pies",
        name: "ركن الفطائر",
        description: "فطائر ذهبية بخبز هش وطعم غني.",
        items: [
          {
            id: "spinach-pie",
            name: "فطيرة سبانخ",
            desc: "سبانخ، دبس رمان، عجينة ذهبية",
            full: "سبانخ، بصل، دبس رمان، عجينة طازة",
            price: 34,
            image: "https://images.unsplash.com/photo-1600628422019-8f3f8d0f0c1b?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "cheese-pie",
            name: "فطيرة جبنة",
            desc: "جبنة، زعتر خفيف، عجينة طرية",
            full: "جبنة، عجينة فطيرة، لمسة زعتر، خبز طازة",
            price: 38,
            image: "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "borak",
        name: "ركن البُرك",
        description: "طبقات مقرمشة ومحشية بعناية.",
        items: [
          {
            id: "borak-cheese",
            name: "بورك جبنة",
            desc: "جبنة، رشة زعتر، قرمشة",
            full: "جبنة مشكلة، عجينة بورك، لمسة زعتر",
            price: 42,
            image: "https://images.unsplash.com/photo-1601924582975-7f1a9fb9b3bf?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "borak-meat",
            name: "بورك لحمة",
            desc: "لحمة مفرومة، بهارات، خبز هش",
            full: "لحمة مفرومة، بصل، بهارات، عجينة بورك",
            price: 49,
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "manakish",
        name: "ركن المناقيش",
        description: "عطر الزعتر والجبنة في كل لقمة.",
        items: [
          {
            id: "manakish-zatar",
            name: "مناقيش زعتر",
            desc: "زعتر، زيت زيتون، عجينة شامية",
            full: "زعتر، زيت زيتون، سماق خفيف، عجينة مناقيش",
            price: 29,
            image: "https://images.unsplash.com/photo-1571997478779-2a9f70f0ab54?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "manakish-cheese",
            name: "مناقيش جبنة",
            desc: "جبنة موزاريلا، عجينة محمصة",
            full: "جبنة موزاريلا، عجينة مناقيش، لمسة زعتر",
            price: 33,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "crepes",
        name: "ركن الكريب",
        description: "خيار حلو أو حادق بمظهر فاخر.",
        items: [
          {
            id: "crepe-nutella",
            name: "كريب نوتيلا",
            desc: "نوتيلا، موز، سكر بودرة",
            full: "كريب رقيق، نوتيلا، موز، سكر بودرة",
            price: 54,
            image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "crepe-chicken",
            name: "كريب دجاج",
            desc: "دجاج، جبنة، صوص",
            full: "دجاج متبل، جبنة، صوص ثوم، كريب طري",
            price: 61,
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "desserts",
        name: "ركن الحلويات",
        description: "خاتمة حلوة بطابع شرقي أنيق.",
        items: [
          {
            id: "kunafa",
            name: "كنافة بالقشطة",
            desc: "قشطة، شيرة، كنافة ذهبية",
            full: "كنافة، قشطة، شيرة، فستق مجروش",
            price: 48,
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "basbousa",
            name: "بسبوسة",
            desc: "جوز هند، شيرة، طعم أصيل",
            full: "بسبوسة، شيرة، لمسة فانيلا، جوز هند",
            price: 32,
            image: "https://images.unsplash.com/photo-1601003908687-43ab7b5d29ce?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "addons",
        name: "ركن الإضافات",
        description: "أكمل طلبك بإضافات صغيرة لكنها مهمة.",
        items: [
          {
            id: "fries",
            name: "بطاطس مقلية",
            desc: "مقرمشة وذهبية",
            full: "بطاطس مقلية، ملح خفيف، توابل",
            price: 22,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "garlic-sauce",
            name: "صوص ثوم",
            desc: "كريمي وخفيف",
            full: "ثوم، زبادي، ليمون، بهار خفيف",
            price: 12,
            image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "drinks",
        name: "ركن المشروبات",
        description: "مشروبات باردة تكمل التجربة.",
        items: [
          {
            id: "mango",
            name: "عصير مانجو",
            desc: "مانجو طازة، ثلج",
            full: "مانجو طازة، ثلج، سكر خفيف حسب الطلب",
            price: 24,
            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "lemon-mint",
            name: "ليمون بالنعناع",
            desc: "منعش وبارد",
            full: "ليمون، نعناع، ثلج، سكر خفيف",
            price: 21,
            image: "https://images.unsplash.com/photo-1528823872057-9c018a7f7b5c?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      },
      {
        id: "specials",
        name: "ركن العروض الخاصة",
        description: "اختيارات مميزة بسعر ولون أروع.",
        items: [
          {
            id: "special-family",
            name: "عرض عائلي",
            desc: "تشكيلة مختارة تكفي الجميع",
            full: "بيتزا، فطائر، سندوتشات، إضافات، مشروب",
            price: 179,
            image: "https://images.unsplash.com/photo-1482275548304-5f9d5f5f4aa5?auto=format&fit=crop&w=1200&q=80"
          },
          {
            id: "special-chef",
            name: "اختيار الشيف",
            desc: "وجبة مختارة بعناية",
            full: "وجبة رئيسية، إضافة، مشروب، حلو",
            price: 129,
            image: "https://images.unsplash.com/photo-1520201163981-8cc1eb16c5b8?auto=format&fit=crop&w=1200&q=80"
          }
        ]
      }
    ]
  };

  const state = {
    entered: false,
    activeCategory: data.categories[0].id,
    cart: loadCart(),
    detailItem: null,
    detailQty: 1
  };

  const els = {
    body: document.body,
    welcomeScreen: document.getElementById("welcomeScreen"),
    mainApp: document.getElementById("mainApp"),
    heroPhoto: document.getElementById("heroPhoto"),
    menuBackdropPhoto: document.getElementById("menuBackdropPhoto"),
    enterBtn: document.getElementById("enterBtn"),
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
      const item = category.items.find((i) => i.id === id);
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

  function updateAllQtyWraps() {
    document.querySelectorAll("[data-qty-wrap]").forEach((wrap) => {
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
    updateAllQtyWraps();
    updateDetailQtyText();
  }

  function setQty(id, qty) {
    const next = Math.max(0, qty);
    if (next === 0) delete state.cart[id];
    else state.cart[id] = { id, qty: next };

    saveCart();
    renderCart();
    updateAllQtyWraps();
    updateDetailQtyText();
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
    openOverlay(els.cartDrawer);
  }

  function closeCart() {
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

  function scrollToCategory(categoryId) {
    const section = document.getElementById(`section-${categoryId}`);
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.pageYOffset - 122;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function renderCategoryNav() {
    els.categoryNav.innerHTML = data.categories.map((category) => `
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
    els.menuSections.innerHTML = data.categories.map((category) => `
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
          ${category.items.map((item) => renderCard(item)).join("")}
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

    els.cartItems.innerHTML = items.map((entry) => {
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

  function renderDetailModal(item) {
    const ingredients = item.full.split("،").map((s) => s.trim()).filter(Boolean);
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
            ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => scrollToCategory(data.categories[0].id), 500);
    setTimeout(() => {
      els.cartTrigger.style.opacity = "1";
      els.cartTrigger.style.pointerEvents = "auto";
    }, 300);
  }

  function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.in-view)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach((item) => io.observe(item));
  }

  function observeSections() {
    const sections = document.querySelectorAll("[data-section]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        state.activeCategory = entry.target.dataset.section;
        renderCategoryNav();
      });
    }, {
      threshold: 0.5,
      rootMargin: "-20% 0px -45% 0px"
    });

    sections.forEach((section) => io.observe(section));
  }

  function setupHeroFallbacks() {
    [els.heroPhoto, els.menuBackdropPhoto].forEach((img) => {
      img.addEventListener("error", () => {
        img.style.display = "none";
      });
    });
  }

  function setupHoverLine() {
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

  document.addEventListener("click", (e) => {
    const target = e.target;

    const openItemBtn = target.closest("[data-open-item], [data-open-item-btn]");
    if (openItemBtn) {
      const id = openItemBtn.getAttribute("data-open-item") || openItemBtn.getAttribute("data-open-item-btn");
      openItem(id);
      return;
    }

    const addDirect = target.closest("[data-add-direct]");
    if (addDirect) {
      addToCart(addDirect.dataset.addDirect, 1);
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

    if (target.closest("[data-close-modal]")) {
      closeOverlay(els.itemModal);
      return;
    }

    if (target.closest("[data-close-faq]")) {
      closeOverlay(els.faqModal);
      return;
    }

    if (target.closest("[data-close-services]")) {
      closeOverlay(els.servicesModal);
      return;
    }

    if (target.closest("[data-close-checkout]")) {
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

    if (target.closest("[data-back-to-top]")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

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
      updateAllQtyWraps();
      flashSuccess();
    });
  }

  function bindKeyboard() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllModals();
    });
  }

  function boot() {
    setupHeroFallbacks();
    setupHoverLine();
    bindButtons();
    bindKeyboard();

    renderMenu();
    renderCart();
    updateAllQtyWraps();

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
