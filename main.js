// --- Premium Syrian Menu Data ---
const menuData = [
    {
        id: 'shawerma', title: 'ركن الشاورما', desc: 'شاورما على السيخ بتتبيلة دمشقية أصلية.',
        items: [
            { id: 's1', name: 'شاورما دجاج دمشقي', desc: 'دجاج متبل ببهارات الشام، تومية كريمي، وخيار مخلل في عيش صاج مقرمش.', price: 65, img: 'https://images.unsplash.com/photo-1648902598380-007f35f793dc?q=80&w=600' },
            { id: 's2', name: 'شاورما لحم غنم', desc: 'لحم بلدي صافي، طحينة، بصل وبقدونس متحبش بدبس الرمان.', price: 85, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=600' }
        ]
    },
    {
        id: 'pizza', title: 'ركن البيتزا', desc: 'عجينة إيطالي بلمسة سورية، بتستوي على نار الحطب.',
        items: [
            { id: 'p1', name: 'بيتزا مارجريتا', desc: 'جبنة موتزاريلا سايحة، صوص طماطم فريش، ريحان وعجينة سميكة.', price: 75, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600' },
            { id: 'p2', name: 'بيتزا سوبريم دمشقي', desc: 'تشكيلة لحوم مدخنة، موتزاريلا غرقانة، وزيتون ومشروم.', price: 110, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600' }
        ]
    },
    {
        id: 'fatayer', title: 'ركن الفطائر', desc: 'فطائر سخنة طالعة من الفرن، مقرمشة من بره وطرية من جوه.',
        items: [
            { id: 'f1', name: 'فطيرة مشكل أجبان', desc: 'ميكس شيدر، رومي، موتزاريلا مع حبة البركة والسمسم.', price: 90, img: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600' }
        ]
    },
    {
        id: 'sweet', title: 'ركن الحلويات', desc: 'الختام المسك.. حلويات بالسمن البلدي الأصلي.',
        items: [
            { id: 'w1', name: 'كنافة نابلسية بالجبنة', desc: 'كنافة بجبنة نابلسية بتمط، غرقانة شربات وفستق حلبي.', price: 60, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600' }
        ]
    }
];

const app = {
    cart: {},
    selectedItem: null,

    init() {
        this.renderEcosystem();
        this.setupObservers();
        this.setupGlowLine();
    },

    // --- Cinematic Transition ---
    enterMenu() {
        const transitionLayer = document.getElementById('scene-transition');
        transitionLayer.classList.add('active'); // Expand circle

        setTimeout(() => {
            // Swap screens while covered
            document.getElementById('welcome-screen').classList.replace('screen-active', 'screen-hidden');
            document.getElementById('menu-screen').classList.replace('screen-hidden', 'screen-active');
            window.scrollTo(0, 0);
            
            // Fade out the transition layer
            transitionLayer.classList.add('fade-out');
            
            // Unhide Cart Fab with animation
            setTimeout(() => {
                document.getElementById('cart-fab').classList.remove('hidden-cart');
            }, 500);

            // Cleanup
            setTimeout(() => {
                transitionLayer.classList.remove('active', 'fade-out');
            }, 600);
            
        }, 1200); // Wait for circle expansion
    },

    // --- Localized Cursor Glow ---
    setupGlowLine() {
        const container = document.getElementById('glow-container');
        const line = document.getElementById('glow-line');
        
        container.addEventListener('mousemove', (e) => {
            const rect = line.getBoundingClientRect();
            // Calculate mouse X relative to the line itself
            const x = e.clientX - rect.left;
            line.style.setProperty('--mouse-x', `${x}px`);
        });

        container.addEventListener('mouseleave', () => {
            line.style.setProperty('--mouse-x', `-500px`); // move off-screen smoothly
        });
    },

    // --- Render Architecture ---
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

    // --- Inspect Item Modal ---
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

    // --- Cart Management ---
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

    // --- Modals ---
    showModal(id) {
        document.getElementById(id).classList.add('active');
    },
    closeModal(id) {
        document.getElementById(id).classList.remove('active');
    },

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
        document.getElementById('cart-fab').classList.add('hidden-cart'); // Hide again until re-order
        window.scrollTo(0,0);
        
        // Go back to welcome screen smoothly
        document.getElementById('menu-screen').classList.replace('screen-active', 'screen-hidden');
        document.getElementById('welcome-screen').classList.replace('screen-hidden', 'screen-active');
    },

    // --- Smooth Scroll Spy ---
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
