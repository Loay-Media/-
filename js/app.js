const app = {
    cart: {},
    selectedItem: null,

    init() {
        this.renderEcosystem();
        this.setupObservers();
        this.setupGlowLine();
    },

    // Cinematic Transition
    enterMenu() {
        const transitionLayer = document.getElementById('scene-transition');
        transitionLayer.classList.add('active'); 

        setTimeout(() => {
            document.getElementById('welcome-screen').classList.replace('screen-active', 'screen-hidden');
            document.getElementById('menu-screen').classList.replace('screen-hidden', 'screen-active');
            window.scrollTo(0, 0);
            
            transitionLayer.classList.add('fade-out');
            
            setTimeout(() => {
                document.getElementById('cart-fab').classList.remove('hidden-cart');
            }, 500);

            setTimeout(() => {
                transitionLayer.classList.remove('active', 'fade-out');
            }, 600);
            
        }, 1200);
    },

    // Localized Cursor Glow
    setupGlowLine() {
        const container = document.getElementById('glow-container');
        const line = document.getElementById('glow-line');
        
        container.addEventListener('mousemove', (e) => {
            const rect = line.getBoundingClientRect();
            const x = e.clientX - rect.left;
            line.style.setProperty('--mouse-x', `${x}px`);
        });

        container.addEventListener('mouseleave', () => {
            line.style.setProperty('--mouse-x', `-500px`); 
        });
    },

    // Rendering Elements
    renderEcosystem() {
        const navTrack = document.getElementById('nav-track');
        const menuContainer = document.getElementById('menu-container');

        menuData.forEach((section, index) => {
            const isActive = index === 0 ? 'active' : '';
            navTrack.innerHTML += `<a href="#sec-${section.id}" class="nav-pill ${isActive}">${section.title}</a>`;

            let itemsHTML = section.items.map(item => `
                <div class="food-card" onclick="app.inspectItem('${item.id}')">
                    <div class="card-img-wrap">
                        <img src="${item.img}" alt="${item.name}" class="card-img" loading="lazy">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${item.name}</h3>
                        <div class="card-footer">
                            <span class="price-tag">${item.price} ج.م</span>
                            <button class="action-btn-small" onclick="event.stopPropagation(); app.updateCart('${item.id}', 1)">+ أضف</button>
                        </div>
                    </div>
                </div>
            `).join('');

            menuContainer.innerHTML += `
                <div id="sec-${section.id}" class="menu-section scroll-target">
                    <div class="section-header">
                        <h2>${section.title}</h2>
                    </div>
                    <div class="items-grid">${itemsHTML}</div>
                </div>
            `;
        });
    },

    // Inspector Panel
    inspectItem(id) {
        let foundItem = null;
        menuData.forEach(sec => sec.items.forEach(i => { if(i.id === id) foundItem = i; }));
        if(!foundItem) return;

        this.selectedItem = foundItem;
        
        document.getElementById('detail-img').src = foundItem.img;
        document.getElementById('detail-title').innerText = foundItem.name;
        document.getElementById('detail-desc').innerText = foundItem.desc;
        document.getElementById('detail-price').innerText = `${foundItem.price} ج.م`;
        
        const addBtn = document.getElementById('detail-add-btn');
        addBtn.onclick = () => {
            this.updateCart(foundItem.id, 1);
            this.closeModal('item-modal');
        };

        this.showModal('item-modal');
    },

    // Cart Logic
    updateCart(itemId, change) {
        if (!this.cart[itemId]) this.cart[itemId] = 0;
        this.cart[itemId] += change;

        if (this.cart[itemId] <= 0) {
            delete this.cart[itemId];
        }

        this.syncGlobalUI();
        
        if(document.getElementById('cart-drawer').classList.contains('active')) {
            this.renderCartDrawer();
            if(Object.keys(this.cart).length === 0) this.toggleCart();
        }
    },

    syncGlobalUI() {
        const totalQty = Object.values(this.cart).reduce((a, b) => a + b, 0);
        document.getElementById('cart-badge').innerText = totalQty;
    },

    // Modals
    showModal(id) { document.getElementById(id).classList.add('active'); },
    closeModal(id) { document.getElementById(id).classList.remove('active'); },

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
                        <div><strong>${itemData.name}</strong> <span class="text-gold ms-2">x${qty}</span></div>
                        <strong>${rowTotal} ج.م</strong>
                    </div>`;
            }
        }
        cartItemsDiv.innerHTML = html;
        document.getElementById('cart-total').innerText = total;
    },

    submitOrder(e) {
        e.preventDefault();
        this.closeModal('cart-drawer');
        this.showModal('success-modal');
    },

    resetApp() {
        this.cart = {};
        this.syncGlobalUI();
        document.getElementById('checkout-form').reset();
        this.closeModal('success-modal');
        document.getElementById('cart-fab').classList.add('hidden-cart');
        window.scrollTo(0,0);
        
        document.getElementById('menu-screen').classList.replace('screen-active', 'screen-hidden');
        document.getElementById('welcome-screen').classList.replace('screen-hidden', 'screen-active');
    },

    // Scroll Spy Tracker
    setupObservers() {
        const sections = document.querySelectorAll('.scroll-target');
        const navPills = document.querySelectorAll('.nav-pill');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => {
                if (window.scrollY >= (sec.offsetTop - 200)) {
                    current = sec.getAttribute('id');
                }
            });

            navPills.forEach(pill => {
                pill.classList.remove('active');
                if (pill.getAttribute('href') === `#${current}`) {
                    pill.classList.add('active');
                    pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
