const app = {
    cart: {},

    init() {
        this.renderEcosystem();
        this.setupObservers();
    },

    // --- Cinematic Macro Transition ---
    enterMenu() {
        const transitionLayer = document.getElementById('scene-transition');
        transitionLayer.classList.add('active');

        setTimeout(() => {
            document.getElementById('welcome-screen').classList.replace('screen-active', 'screen-hidden');
            document.getElementById('menu-screen').classList.replace('screen-hidden', 'screen-active');
            window.scrollTo(0, 0);
            
            // Re-trigger scroll animations for the new screen
            this.setupObservers();
            
            transitionLayer.style.transformOrigin = 'top';
            transitionLayer.classList.remove('active');
            
            // Cleanup transform origin for next time
            setTimeout(() => { transitionLayer.style.transformOrigin = 'bottom'; }, 800);
        }, 800);
    },

    // --- Render Architecture ---
    renderEcosystem() {
        const navTrack = document.getElementById('nav-track');
        const menuContainer = document.getElementById('menu-container');

        menuData.forEach((section, index) => {
            // Build Sticky Nav Pills
            const isActive = index === 0 ? 'active' : '';
            navTrack.innerHTML += `<a href="#sec-${section.id}" class="nav-pill ${isActive}">${section.title}</a>`;

            // Build Sections & Cards
            let itemsHTML = section.items.map(item => `
                <div class="food-card reveal">
                    <div class="card-img-wrap">
                        <img src="${item.img}" alt="${item.name}" class="card-img" loading="lazy">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${item.name}</h3>
                        <p class="card-desc">${item.desc}</p>
                        <div class="card-footer">
                            <span class="price-tag">${item.price} ج.م</span>
                            
                            <div class="action-morph" id="morph-${item.id}">
                                <button class="btn-add-init" onclick="app.updateCart('${item.id}', 1)">أضف للسلة</button>
                                <div class="stepper-ui">
                                    <button class="step-btn" onclick="app.updateCart('${item.id}', -1)">-</button>
                                    <span class="step-count" id="count-${item.id}">0</span>
                                    <button class="step-btn" onclick="app.updateCart('${item.id}', 1)">+</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            `).join('');

            menuContainer.innerHTML += `
                <div id="sec-${section.id}" class="menu-section scroll-target">
                    <div class="section-header reveal">
                        <h2>${section.title}</h2>
                        <p>${section.desc}</p>
                    </div>
                    <div class="items-grid">${itemsHTML}</div>
                </div>
            `;
        });
    },

    // --- Cart & Morphing State Management ---
    updateCart(itemId, change) {
        if (!this.cart[itemId]) this.cart[itemId] = 0;
        this.cart[itemId] += change;

        const morphContainer = document.getElementById(`morph-${itemId}`);
        const countDisplay = document.getElementById(`count-${itemId}`);

        if (this.cart[itemId] <= 0) {
            delete this.cart[itemId];
            morphContainer.classList.remove('has-items');
        } else {
            morphContainer.classList.add('has-items');
            countDisplay.innerText = this.cart[itemId];
        }

        this.syncGlobalUI();
        
        // Live update cart drawer if open
        if(document.getElementById('cart-drawer').classList.contains('active')) {
            this.renderCartDrawer();
            if(Object.keys(this.cart).length === 0) this.toggleCart();
        }
    },

    syncGlobalUI() {
        const totalQty = Object.values(this.cart).reduce((a, b) => a + b, 0);
        const fab = document.getElementById('cart-fab');
        document.getElementById('cart-badge').innerText = totalQty;
        
        if (totalQty > 0) fab.classList.remove('hidden');
        else fab.classList.add('hidden');
    },

    // --- Modal Logic ---
    toggleCart() {
        if (Object.keys(this.cart).length === 0 && !document.getElementById('cart-drawer').classList.contains('active')) return;
        this.renderCartDrawer();
        document.getElementById('cart-drawer').classList.toggle('active');
    },

    renderCartDrawer() {
        const cartItemsDiv = document.getElementById('cart-items');
        let total = 0;
        let html = '';

        for (let id in this.cart) {
            let itemData = null;
            menuData.forEach(sec => sec.items.forEach(i => { if(i.id === id) itemData = i; }));

            if (itemData) {
                const qty = this.cart[id];
                const rowTotal = qty * itemData.price;
                total += rowTotal;
                html += `
                    <div class="cart-row">
                        <div><strong class="text-charcoal">${itemData.name}</strong> <span class="text-terracotta ms-2">x${qty}</span></div>
                        <strong>${rowTotal} ج.م</strong>
                    </div>`;
            }
        }
        cartItemsDiv.innerHTML = html;
        document.getElementById('cart-total').innerText = total;
    },

    submitOrder(e) {
        e.preventDefault();
        document.getElementById('cart-drawer').classList.remove('active');
        document.getElementById('success-modal').classList.add('active');
    },

    resetApp() {
        this.cart = {};
        document.querySelectorAll('.action-morph').forEach(el => el.classList.remove('has-items'));
        this.syncGlobalUI();
        document.getElementById('checkout-form').reset();
        document.getElementById('success-modal').classList.remove('active');
        window.scrollTo(0,0);
    },

    // --- Intersection Observers for Scroll Reveals & Nav Highlight ---
    setupObservers() {
        // Scroll Reveal
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target); // Play once
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // Scroll Spy for Nav Pills
        const sections = document.querySelectorAll('.scroll-target');
        const navPills = document.querySelectorAll('.nav-pill');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => {
                if (window.scrollY >= (sec.offsetTop - 150)) {
                    current = sec.getAttribute('id');
                }
            });

            navPills.forEach(pill => {
                pill.classList.remove('active');
                if (pill.getAttribute('href') === `#${current}`) {
                    pill.classList.add('active');
                    // Optional: auto-scroll the nav track to keep active pill in view
                    pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
