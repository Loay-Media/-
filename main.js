// --- 1. DATA WITH IMAGES ---
const menuData = {
    pizza: [
        { id: 'p1', name: 'مارجريتا نابولي', desc: 'جبنة موتزاريلا سايحة، صوص طماطم فريش، ريحان وعجينة هشة.', price: 60, img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80' },
        { id: 'p2', name: 'بيتزا بيبروني', desc: 'بيبروني بقري مدخن، موتزاريلا غرقانة، وزيتون أسود.', price: 85, img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80' }
    ],
    shawerma: [
        { id: 's1', name: 'شاورما دجاج سوري', desc: 'دجاج متبل ببهارات الشام، تومية كريمي، وخيار مخلل في عيش صاج.', price: 55, img: 'https://images.unsplash.com/photo-1648902598380-007f35f793dc?w=400&q=80' },
        { id: 's2', name: 'شاورما لحم شقف', desc: 'لحم بلدي صافي، طحينة، بصل وبقدونس متحبش.', price: 70, img: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80' }
    ],
    appetizers: [
        { id: 'a1', name: 'بطاطس محمرة', desc: 'أصابع بطاطس مقرمشة مع بهارات سوري خاصة.', price: 25, img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80' },
        { id: 'a2', name: 'علبة تومية', desc: 'تومية سوري أصلية كريمية.', price: 15, img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&q=80' }
    ],
    sweet: [
        { id: 'w1', name: 'كنافة نابلسية', desc: 'كنافة بجبنة نابلسية بتمط، غرقانة شربات وفستق.', price: 45, img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80' }
    ]
};

// --- 2. APP LOGIC ---
const app = {
    cart: {},

    init() {
        this.renderMenu();
        this.setupScrollSpy();
        this.setupIntersectionObserver();
    },

    // Cool Water Ripple Transition
    transitionToMenu() {
        const ripple = document.getElementById('ripple-screen');
        ripple.classList.add('ripple-active');
        
        setTimeout(() => {
            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('welcome-screen').classList.remove('active');
            
            const menuScreen = document.getElementById('menu-screen');
            menuScreen.classList.remove('hidden');
            window.scrollTo(0, 0);
            
            // Remove ripple after transition
            setTimeout(() => {
                ripple.classList.remove('ripple-active');
            }, 500);
            
        }, 800); // Trigger mid-animation
    },

    // Render HTML dynamically
    renderMenu() {
        for (const [category, items] of Object.entries(menuData)) {
            const grid = document.getElementById(`grid-${category}`);
            if(!grid) continue;
            
            grid.innerHTML = items.map(item => `
                <div class="food-card">
                    <img src="${item.img}" alt="${item.name}" class="food-img">
                    <div class="food-info">
                        <h3 class="food-title">${item.name}</h3>
                        <p class="food-desc">${item.desc}</p>
                        <div class="food-bottom">
                            <span class="food-price">${item.price} ج.م</span>
                            <div class="action-wrap" id="wrap-${item.id}">
                                <button class="btn-add" onclick="app.addFirst('${item.id}')">أضف +</button>
                                <div class="qty-control">
                                    <button class="qty-btn" onclick="app.updateQty('${item.id}', -1)">-</button>
                                    <span class="qty-num" id="qty-${item.id}">0</span>
                                    <button class="qty-btn" onclick="app.updateQty('${item.id}', 1)">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    },

    // Cart Interactions
    addFirst(id) {
        this.cart[id] = 1;
        this.updateUI(id);
    },

    updateQty(id, change) {
        this.cart[id] += change;
        if (this.cart[id] <= 0) delete this.cart[id];
        this.updateUI(id);
        
        // If modal is open, refresh it live
        if(!document.getElementById('cart-modal').classList.contains('hidden')){
            this.renderCartList();
            if(Object.keys(this.cart).length === 0) this.closeModal('cart-modal');
        }
    },

    updateUI(id) {
        const wrap = document.getElementById(`wrap-${id}`);
        const qtySpan = document.getElementById(`qty-${id}`);
        const fab = document.getElementById('cart-fab');
        
        if (this.cart[id]) {
            wrap.classList.add('active');
            qtySpan.innerText = this.cart[id];
        } else {
            wrap.classList.remove('active');
        }

        const totalItems = Object.values(this.cart).reduce((a, b) => a + b, 0);
        document.getElementById('cart-count').innerText = totalItems;
        
        if (totalItems > 0) fab.classList.remove('hidden');
        else fab.classList.add('hidden');
    },

    // Modals
    showModal(modalId) {
        document.getElementById(modalId).classList.remove('hidden');
    },
    closeModal(modalId) {
        document.getElementById(modalId).classList.add('hidden');
    },

    openCart() {
        if(Object.keys(this.cart).length === 0) return;
        this.renderCartList();
        this.showModal('cart-modal');
    },

    renderCartList() {
        const list = document.getElementById('cart-items');
        let total = 0;
        let html = '';

        for (let id in this.cart) {
            let itemObj = null;
            Object.values(menuData).forEach(arr => {
                const found = arr.find(i => i.id === id);
                if (found) itemObj = found;
            });

            if (itemObj) {
                const qty = this.cart[id];
                const rowTotal = qty * itemObj.price;
                total += rowTotal;
                html += `
                    <div class="cart-item">
                        <span>${itemObj.name} <strong style="color:var(--orange-primary)">x${qty}</strong></span>
                        <strong>${rowTotal} ج.م</strong>
                    </div>`;
            }
        }
        list.innerHTML = html;
        document.getElementById('total-price').innerText = total;
    },

    submitOrder(e) {
        e.preventDefault();
        this.closeModal('cart-modal');
        this.showModal('thank-you-popup');
    },

    resetApp() {
        this.cart = {};
        document.querySelectorAll('.action-wrap').forEach(w => w.classList.remove('active'));
        document.getElementById('cart-fab').classList.add('hidden');
        document.getElementById('checkout-form').reset();
        this.closeModal('thank-you-popup');
        window.scrollTo(0,0);
    },

    // Highlight Navigation Tabs on Scroll
    setupScrollSpy() {
        const sections = document.querySelectorAll('.menu-section');
        const tabs = document.querySelectorAll('.nav-tab');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(sec => {
                const sectionTop = sec.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = sec.getAttribute('id');
                }
            });

            tabs.forEach(tab => {
                tab.classList.remove('active-tab');
                if (tab.getAttribute('href') === `#${current}`) {
                    tab.classList.add('active-tab');
                }
            });
        });
    },

    // Animate sections when they scroll into view
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
