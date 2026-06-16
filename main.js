// --- Data Structure (The Menu) ---
const categories = [
    { id: 'pizza', name: 'ركن البيتزا', icon: 'fa-pizza-slice' },
    { id: 'shawerma', name: 'ركن السندوتشات', icon: 'fa-burger' },
    { id: 'fatayer', name: 'ركن الفطائر', icon: 'fa-bread-slice' },
    { id: 'manakeesh', name: 'ركن المناقيش', icon: 'fa-plate-wheat' },
    { id: 'borak', name: 'ركن البرك', icon: 'fa-cookie' },
    { id: 'crepe', name: 'ركن الكريب', icon: 'fa-pancake' },
    { id: 'sweet', name: 'ركن الحلو', icon: 'fa-ice-cream' },
    { id: 'addons', name: 'إضافات', icon: 'fa-plus' }
];

const menuItems = {
    pizza: [
        { id: 'p1', name: 'بيتزا مارجريتا', desc: 'جبنة موتزاريلا سايحة، عجينة هشة، صوص البيتزا الخطير', price: 50 },
        { id: 'p2', name: 'بيتزا بيبروني', desc: 'بيبروني بقري، موتزاريلا، صوص طماطم فريش', price: 80 }
    ],
    shawerma: [
        { id: 's1', name: 'شاورما سوري فراخ', desc: 'فراخ متبلة، تومية، خيار مخلل في عيش صاج', price: 45 },
        { id: 's2', name: 'شاورما سوري لحمة', desc: 'لحمة بلدي، طحينة، بصل وبقدونس في عيش صاج', price: 55 }
    ],
    fatayer: [
        { id: 'f1', name: 'فطيرة مشكل جبن', desc: 'رومي، شيدر، موتزاريلا، فلفل وزيتون', price: 65 },
        { id: 'f2', name: 'فطيرة سجق', desc: 'سجق إسكندراني مع خلطة الجبن والخضار', price: 75 }
    ],
    manakeesh: [
        { id: 'm1', name: 'منقوشة زعتر', desc: 'زعتر حلبي أصلي مع زيت زيتون', price: 25 },
        { id: 'm2', name: 'منقوشة محمرة بجبنة', desc: 'محمرة سورية حارة مع جبنة قشقوان', price: 35 }
    ],
    borak: [
        { id: 'b1', name: 'برك بالجبنة', desc: 'عجينة مقرمشة محشية جبنة وحبة البركة', price: 20 },
        { id: 'b2', name: 'برك باللحمة', desc: 'محشية لحمة مفرومة مع صنوبر', price: 30 }
    ],
    crepe: [
        { id: 'c1', name: 'كريب نوتيلا', desc: 'كريب غرقان نوتيلا مع قطع موز', price: 45 },
        { id: 'c2', name: 'كريب كرسبي', desc: 'فراخ كرسبي، بطاطس، مايونيز وموتزاريلا', price: 60 }
    ],
    sweet: [
        { id: 'w1', name: 'كنافة نابلسية', desc: 'كنافة بالجبنة النابلسية السايحة والشربات', price: 40 },
        { id: 'w2', name: 'بقلاوة شامي', desc: 'بقلاوة بالفستق الحلبي', price: 30 }
    ],
    addons: [
        { id: 'a1', name: 'بطاطس محمرة', desc: 'بطاطس كرسبي مع بهارات سوري', price: 15 },
        { id: 'a2', name: 'تومية اكسترا', desc: 'علبة تومية سوري أصلية', price: 10 }
    ]
};

// --- App State & Logic ---
const app = {
    cart: {}, // { itemId: quantity }
    currentScreen: 'welcome-screen',

    init() {
        this.renderCategories();
        this.setup3DEffect();
    },

    navigate(target, categoryId = null) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.classList.add('hidden');
        });

        // Show target screen
        const targetEl = document.getElementById(`${target}-screen`);
        targetEl.classList.remove('hidden');
        
        // Slight delay to allow CSS reflow for fade animation
        setTimeout(() => {
            targetEl.classList.add('active');
            if (target === 'welcome') {
                targetEl.style.display = 'flex';
            } else {
                targetEl.style.display = 'block';
            }
        }, 10);

        if (target === 'home') {
            document.getElementById('cart-fab').classList.remove('hidden');
        }

        if (target === 'category' && categoryId) {
            this.renderItems(categoryId);
        }
    },

    renderCategories() {
        const grid = document.getElementById('categories-grid');
        grid.innerHTML = categories.map(cat => `
            <div class="cat-card glass-card" onclick="app.navigate('category', '${cat.id}')">
                <i class="fa-solid ${cat.icon} cat-icon"></i>
                <h3>${cat.name}</h3>
            </div>
        `).join('');
    },

    renderItems(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        document.getElementById('category-title').innerText = category.name;
        
        const items = menuItems[categoryId];
        const grid = document.getElementById('items-grid');
        
        grid.innerHTML = items.map(item => {
            const qty = this.cart[item.id] || 0;
            const hasItem = qty > 0;
            
            return `
            <div class="item-card glass-card">
                <h3>${item.name}</h3>
                <p class="item-desc">${item.desc}</p>
                <div class="item-price">${item.price} ج.م</div>
                
                <div class="action-wrap ${hasItem ? 'active' : ''}" id="wrap-${item.id}">
                    <button class="btn-add" onclick="app.addFirst('${item.id}')">
                        <i class="fa-solid fa-plus"></i> أضف للسلة
                    </button>
                    <div class="qty-control">
                        <button onclick="app.updateQty('${item.id}', -1)">-</button>
                        <span id="qty-${item.id}">${qty}</span>
                        <button onclick="app.updateQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            </div>
        `}).join('');
    },

    addFirst(itemId) {
        this.cart[itemId] = 1;
        document.getElementById(`wrap-${itemId}`).classList.add('active');
        document.getElementById(`qty-${itemId}`).innerText = 1;
        this.updateCartBadge();
    },

    updateQty(itemId, change) {
        this.cart[itemId] += change;
        
        if (this.cart[itemId] <= 0) {
            delete this.cart[itemId];
            document.getElementById(`wrap-${itemId}`).classList.remove('active');
        } else {
            document.getElementById(`qty-${itemId}`).innerText = this.cart[itemId];
        }
        this.updateCartBadge();
        this.renderCartItems(); // If cart is open, update it live
    },

    updateCartBadge() {
        const totalItems = Object.values(this.cart).reduce((a, b) => a + b, 0);
        document.getElementById('cart-count').innerText = totalItems;
    },

    // --- Cart & Modal Logic ---
    openCart() {
        if(Object.keys(this.cart).length === 0) {
            alert('السلة فاضية يا فندم! اختار حاجة حلوة الأول.');
            return;
        }
        this.renderCartItems();
        document.getElementById('cart-modal').classList.remove('hidden');
    },

    closeCart() {
        document.getElementById('cart-modal').classList.add('hidden');
    },

    renderCartItems() {
        const cartList = document.getElementById('cart-items');
        let total = 0;
        let html = '';

        for (let itemId in this.cart) {
            let itemObj = null;
            // Find item in our nested menu data
            for (let cat in menuItems) {
                const found = menuItems[cat].find(i => i.id === itemId);
                if (found) itemObj = found;
            }

            if (itemObj) {
                const qty = this.cart[itemId];
                const itemTotal = qty * itemObj.price;
                total += itemTotal;
                html += `
                    <div class="cart-item">
                        <span>${itemObj.name} (x${qty})</span>
                        <strong>${itemTotal} ج.م</strong>
                    </div>
                `;
            }
        }
        cartList.innerHTML = html;
        document.getElementById('total-price').innerText = total;
    },

    submitOrder(e) {
        e.preventDefault();
        this.closeCart();
        document.getElementById('thank-you-popup').classList.remove('hidden');
    },

    resetApp() {
        this.cart = {};
        this.updateCartBadge();
        document.getElementById('thank-you-popup').classList.add('hidden');
        document.getElementById('checkout-form').reset();
        this.navigate('welcome');
    },

    // --- Cool 3D Mouse Tracking for Welcome Card ---
    setup3DEffect() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const card = document.querySelector('.welcome-content');

        welcomeScreen.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        welcomeScreen.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        welcomeScreen.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.5s ease';
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
        });
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
