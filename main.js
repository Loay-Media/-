/**
 * 🛠️ TELEGRAM BOT CONFIGURATION
 */
const TELEGRAM_BOT_TOKEN = "8694733166:AAHmXZ4FZ19wRadu_UJZzZEhh8EMjm1GDV8"; 
const TELEGRAM_CHAT_ID = "7848525417";     

/**
 * 🍕 EXPANDED MENU DATA (EGYPTIAN ARABIC)
 */
const platformCatalogData = [
    {
        id: "pizza-section",
        title: "ركن البيتزا",
        description: "أحلى بيتزا بعجينة هشة ومكونات فريش على الطريقة الإيطالية.",
        items: [
            { id: "pz_01", name: "بيتزا مارجريتا", description: "جبنة موتزاريلا غرقانة في صوص الطماطم الإيطالي وتتبيلة الأعشاب الخطيرة.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600", prices: { S: 40, M: 60, L: 70 }, sizeNames: { S: "صغير", M: "وسط", L: "كبير" } },
            { id: "pz_02", name: "بيتزا هوت دوج", description: "قطع هوت دوج ممتازة مع ميكس أجبان وزيتون وفلفل متحبش.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600", prices: { S: 40, M: 50, L: 60 }, sizeNames: { S: "صغير", M: "وسط", L: "كبير" } }
        ]
    },
    {
        id: "sweets-section",
        title: "ركن الحلو",
        description: "حلي بقك بألذ الوصفات الشوكولاتة والمارشميلو اللي بتدوب.",
        items: [
            { id: "sw_01", name: "بيتزا نوتيلا مارشميلو", description: "عجينة هشة متغرقة نوتيلا أصلية وقطع مارشميلو سايحة.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600", prices: { default: 70 }, sizeNames: { default: "عادي" } },
            { id: "sw_02", name: "شيكولا موز", description: "ميكس الشوكولاتة اللذيذة مع شرائح الموز الطازة.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600", prices: { default: 15 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "appetizers-section",
        title: "ركن المقبلات والاضافات",
        description: "دلّع وجبتك بأحلى صوصات وسلطات فريش.",
        items: [
            { id: "ap_01", name: "تومية", description: "تومية سوري على أصولها، قوام كريمي وطعم يجنن.", img: "https://images.unsplash.com/photo-1581073846660-394f99587f73?q=80&w=600", prices: { default: 10 }, sizeNames: { default: "علبة" } },
            { id: "ap_02", name: "سلطة كولسلو", description: "سلطة كولسلو فريش بصوص المايونيز والجزر والكرنب المقرمش.", img: "https://images.unsplash.com/photo-1628198751433-28151ffeb89a?q=80&w=600", prices: { default: 10 }, sizeNames: { default: "علبة" } }
        ]
    },
    {
        id: "arabic-sandwiches",
        title: "ساندوتشات عربي",
        description: "طعم الشارع السوري الأصيل بالعيش المقرمش المليان حشوات.",
        items: [
            { id: "ar_01", name: "ساندوتش كرسبي", description: "قطع دجاج كرسبي مقرمشة مع تومية ومخلل.", img: "https://images.unsplash.com/photo-1648902598380-007f35f793dc?q=80&w=600", prices: { S: 35, M: 40 }, sizeNames: { S: "سوري", M: "فرنساوي" } },
            { id: "ar_02", name: "ساندوتش زنجر", description: "زنجر دجاج حار ومقرمش مع الصوصات اللذيذة.", img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=600", prices: { S: 35, M: 40 }, sizeNames: { S: "سوري", M: "فرنساوي" } }
        ]
    },
    {
        id: "breakfast-section",
        title: "ركن الافطار الصباحي",
        description: "ابدأ يومك بمناقيش خفيفة وفرش من الفرن لرواقة الصبح.",
        items: [
            { id: "bf_01", name: "منقوشة لبنة بالزيتون", description: "منقوشة لبنة طازة مع حلقات الزيتون اللذيذة، أحلى فطار.", img: "https://images.unsplash.com/photo-1509312836263-14309a9dbd44?q=80&w=600", prices: { default: 15 }, sizeNames: { default: "عادي" } },
            { id: "bf_02", name: "منقوشة لبنة بالخضروات", description: "منقوشة لبنة خفيفة مع تشكيلة خضار فريش.", img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600", prices: { default: 15 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "pies-section",
        title: "ركن الفطائر",
        description: "فطاير سخنة محشية لحد أطرافها بالمكونات والموتزاريلا.",
        items: [
            { id: "pi_01", name: "فطيرة شرائح فراخ", description: "فطيرة محشية شرائح فراخ متبلة وموتزاريلا بتمط.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600", prices: { default: 16 }, sizeNames: { default: "عادي" } },
            { id: "pi_02", name: "فطيرة سوبر لوكس", description: "فطيرة سوبر لوكس غرقانة موتزاريلا وحشوات مميزة.", img: "https://images.unsplash.com/photo-1627042633145-b780d842ba45?q=80&w=600", prices: { default: 16 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "burek-section",
        title: "ركن البرك",
        description: "معجنات ذهبية مقرمشة بحشوات الأجبان السايحة.",
        items: [
            { id: "bk_01", name: "برك حلوم", description: "برك مقرمشة محشية جبنة حلوم أصلية.", img: "https://images.unsplash.com/photo-1544268688-2947264ccdfc?q=80&w=600", prices: { default: 14 }, sizeNames: { default: "عادي" } },
            { id: "bk_02", name: "برك رومي", description: "برك ذهبية بحشوة الجبنة الرومي السايحة.", img: "https://images.unsplash.com/photo-1589301773663-1498b79f6eb3?q=80&w=600", prices: { default: 14 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "manaqeesh-section",
        title: "ركن المناقيش",
        description: "ريحة الشام في كل قطمة بعجينة هشة وتحبيشة تخطف القلب.",
        items: [
            { id: "mq_01", name: "منقوشة محمرة", description: "منقوشة محمرة شامية بخلطة الفلفل والجوز المميزة.", img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600", prices: { default: 10 }, sizeNames: { default: "عادي" } },
            { id: "mq_02", name: "منقوشة جبنة شامية", description: "منقوشة جبنة شامية سايحة وريحتها تجنن.", img: "https://images.unsplash.com/photo-1509312836263-14309a9dbd44?q=80&w=600", prices: { default: 6 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "crepes-section",
        title: "ركن الكريب",
        description: "كريب عملاق مليان حشوات وصوصات بتضرب في الدماغ.",
        items: [
            { id: "cr_01", name: "كريب بطاطس موتزاريلا", description: "كريب محشي بطاطس مقرمشة وموتزاريلا بتدوب.", img: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?q=80&w=600", prices: { default: 25 }, sizeNames: { default: "عادي" } },
            { id: "cr_02", name: "كريب شوكولاتة", description: "كريب غرقان شوكولاتة ويسيح في البق.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600", prices: { default: 20 }, sizeNames: { default: "عادي" } },
            { id: "cr_03", name: "كريب مالتي زنجر", description: "كريب مليان قطع زنجر، ميكس جبن وصوصات خرافية.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600", prices: { default: 45 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "pasta-section",
        title: "ركن الباستا",
        description: "مكرونات غرقانة في الوايت صوص والجبنة المحمرة في الفرن.",
        items: [
            { id: "pa_01", name: "مكرونة فوتشيني", description: "مكرونة فوتشيني غرقانة وايت صوص ومشروم.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600", prices: { M: 25, L: 40 }, sizeNames: { M: "وسط", L: "كبير" } },
            { id: "pa_02", name: "مكرونة نجرسكو", description: "صينية نجرسكو بالفراخ والجبنة الموتزاريلا المحمرة في الفرن.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600", prices: { M: 35, L: 40 }, sizeNames: { M: "وسط", L: "كبير" } }
        ]
    },
    {
        id: "potatoes-section",
        title: "ركن البطاطس",
        description: "عشاق البطاطس السوري المقرمشة بالصوصات الخطيرة.",
        items: [
            { id: "pt_01", name: "ساندوتش بطاطس", description: "ساندوتش بطاطس سوري مقرمشة مع تومية ومخلل.", img: "https://images.unsplash.com/photo-1576107248384-e1b69739c362?q=80&w=600", prices: { default: 12 }, sizeNames: { default: "عادي" } },
            { id: "pt_02", name: "ساندوتش بطاطس موتزاريلا", description: "ساندوتش بطاطس مع موتزاريلا سايحة جوة العيش.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600", prices: { default: 15 }, sizeNames: { default: "عادي" } }
        ]
    },
    {
        id: "western-meals",
        title: "وجبات غربي",
        description: "وجبات كاملة بتشبع وتروق المزاج.",
        items: [
            { id: "wm_01", name: "وجبة سوبريم", description: "وجبة التوفير والدلع! رول دجاج، تومية، بطاطس، رز، كولسلو ومخلل.", img: "https://images.unsplash.com/photo-1544025162-811114215b22?q=80&w=600", prices: { default: 90 }, sizeNames: { default: "وجبة كاملة" } }
        ]
    }
];

/**
 * REUSABLE APPS SYSTEM MANAGEMENT STATE
 */
const menuApp = {
    userCartState: {},      // Format: { "pz_01|M": 2 }
    activeItemSizes: {},    // Format: { "pz_01": "M" }

    initialize() {
        // Set default selected sizes for all items
        platformCatalogData.forEach(cat => {
            cat.items.forEach(item => {
                this.activeItemSizes[item.id] = Object.keys(item.prices)[0];
            });
        });

        this.renderDomStructureContent();
        this.registerScrollRevealEngine();
    },

    getItemData(itemId) {
        let matchedItem = null;
        platformCatalogData.forEach(cat => cat.items.forEach(i => { if (i.id === itemId) matchedItem = i; }));
        return matchedItem;
    },

    renderDomStructureContent() {
        const pillsContainer = document.getElementById("nav-pills-container");
        const mainInjector = document.getElementById("dynamic-menu-injector");
        
        if(pillsContainer) pillsContainer.innerHTML = "";
        if(mainInjector) mainInjector.innerHTML = "";

        platformCatalogData.forEach((section, index) => {
            if (pillsContainer) {
                const activeClass = index === 0 ? "active" : "";
                pillsContainer.innerHTML += `
                    <button class="category-pill-btn ${activeClass}" 
                            id="pill-${section.id}" 
                            onclick="menuApp.scrollToTargetCategorySection('${section.id}')">
                        ${section.title}
                    </button>
                `;
            }

            const itemsMarkup = section.items.map(item => {
                const activeSize = this.activeItemSizes[item.id];
                const currentPrice = item.prices[activeSize];
                const availableSizes = Object.keys(item.prices);
                
                let sizesHtml = "";
                if (availableSizes.length > 1 || availableSizes[0] !== 'default') {
                    sizesHtml = `<div class="size-selector-row" id="sizes-${item.id}" onclick="event.stopPropagation()">`;
                    availableSizes.forEach(size => {
                        const activeCls = size === activeSize ? 'active-size' : '';
                        sizesHtml += `<button class="size-btn ${activeCls}" data-size="${size}" onclick="menuApp.changeItemSize('${item.id}', '${size}', event)">${size}</button>`;
                    });
                    sizesHtml += `</div>`;
                }

                return `
                <div class="food-luxury-tile reveal-hidden-node" onclick="menuApp.openInspectModal('${item.id}')">
                    <div class="tile-img-container">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                        <div class="tile-shading-lens"></div>
                    </div>
                    <div class="tile-body-box">
                        <h4>${item.name}</h4>
                        <p class="tile-ingredients-text">${item.description}</p>
                        ${sizesHtml}
                        <div class="tile-interactive-footer" onclick="event.stopPropagation()">
                            <span class="tile-price-span" id="price-${item.id}">${currentPrice} ج.م</span>
                            <div class="stepper-fluid-shell" id="stepper-shell-${item.id}">
                                ${this.generateStepperMarkup(item.id)}
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');

            if (mainInjector) {
                mainInjector.innerHTML += `
                    <section id="${section.id}" class="menu-categorical-group">
                        <div class="category-section-title-box">
                            <h3>${section.title}</h3>
                            <p>${section.description}</p>
                        </div>
                        <div class="products-scaffold-grid">
                            ${itemsMarkup}
                        </div>
                    </section>
                `;
            }
        });
    },

    changeItemSize(itemId, newSize, event) {
        if(event) event.stopPropagation();
        this.activeItemSizes[itemId] = newSize;

        // Visual update for the buttons
        const btnContainer = document.getElementById(`sizes-${itemId}`);
        if(btnContainer) {
            btnContainer.querySelectorAll('.size-btn').forEach(btn => {
                btn.classList.remove('active-size');
                if(btn.dataset.size === newSize) btn.classList.add('active-size');
            });
        }

        // Update the price
        const item = this.getItemData(itemId);
        const priceNode = document.getElementById(`price-${itemId}`);
        if(priceNode) priceNode.innerText = `${item.prices[newSize]} ج.م`;

        // Update Stepper to reflect cart quantity of the NEW size
        this.syncStateInterfaceViews(itemId);
    },

    generateStepperMarkup(itemId) {
        const activeSize = this.activeItemSizes[itemId];
        const cartKey = `${itemId}|${activeSize}`;
        const currentQty = this.userCartState[cartKey] || 0;

        if (currentQty === 0) {
            return `<button class="init-add-btn" onclick="menuApp.mutateCartUnits('${itemId}', 1)"><i class="fa-solid fa-plus"></i> إضافة</button>`;
        } else {
            return `
                <div class="active-stepper-rack">
                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${itemId}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="step-count-digits">${currentQty}</span>
                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${itemId}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
            `;
        }
    },

    mutateCartUnits(itemId, differentialValue) {
        const activeSize = this.activeItemSizes[itemId];
        const cartKey = `${itemId}|${activeSize}`;
        const ongoingQty = this.userCartState[cartKey] || 0;
        const compiledResult = ongoingQty + differentialValue;

        if (compiledResult <= 0) {
            delete this.userCartState[cartKey];
        } else {
            this.userCartState[cartKey] = compiledResult;
        }

        this.syncStateInterfaceViews(itemId);
    },

    syncStateInterfaceViews(itemId) {
        const targetShell = document.getElementById(`stepper-shell-${itemId}`);
        if (targetShell) targetShell.innerHTML = this.generateStepperMarkup(itemId);

        const totalCountValue = Object.values(this.userCartState).reduce((acc, curr) => acc + curr, 0);
        const fabNode = document.getElementById("luxury-cart-fab");
        
        if (document.getElementById("global-cart-count")) {
            document.getElementById("global-cart-count").innerText = totalCountValue;
        }

        if (fabNode) {
            if (totalCountValue > 0) {
                fabNode.classList.remove("hidden-fab");
            } else {
                fabNode.classList.add("hidden-fab");
                this.closeCartDrawer();
            }
        }

        const drawerActiveOverlay = document.getElementById("checkout-drawer");
        if (drawerActiveOverlay && drawerActiveOverlay.classList.contains("open-active")) {
            this.compileDrawerItemsMarkupList();
        }
    },

    triggerScreenTransition() {
        const shutter = document.getElementById("macro-shutter");
        if (shutter) shutter.classList.add("active-transition");

        setTimeout(() => {
            document.getElementById("welcome-screen").classList.replace("view-active", "view-hidden");
            document.getElementById("menu-screen").classList.replace("view-hidden", "view-active");
            window.scrollTo(0, 0);
            menuApp.triggerDelayedVisibilityReveal();
        }, 1200);

        setTimeout(() => {
            if (shutter) shutter.classList.remove("active-transition");
        }, 2200);
    },

    registerScrollRevealEngine() {
        const targetObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible-node");
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

        setTimeout(() => {
            document.querySelectorAll(".reveal-hidden-node").forEach(node => targetObserver.observe(node));
        }, 1000);
    },

    triggerDelayedVisibilityReveal() {
        const structuralElements = document.querySelectorAll(".reveal-hidden-node");
        structuralElements.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add("reveal-visible-node");
            }, index * 90);
        });
    },

    scrollToTargetCategorySection(sectionId) {
        const element = document.getElementById(sectionId);
        const container = document.getElementById("nav-pills-container");
        
        if (element) {
            const computationalOffset = element.offsetTop - 90;
            window.scrollTo({ top: computationalOffset, behavior: "smooth" });
        }
    },

    openInspectModal(itemId) {
        // Modal logic can remain basic or you can expand it later. 
        // We recommend adding directly from the tile with the new size buttons!
    },

    closeInspectModal() {
        document.getElementById("inspect-modal").classList.remove("open-active");
    },

    openCartDrawer() {
        this.compileDrawerItemsMarkupList();
        document.getElementById("checkout-drawer").classList.add("open-active");
    },

    closeCartDrawer() {
        document.getElementById("checkout-drawer").classList.remove("open-active");
    },

    compileDrawerItemsMarkupList() {
        const container = document.getElementById("cart-items-injector");
        let computedGrandTotal = 0;
        let generatedHtml = "";

        for (const cartKey in this.userCartState) {
            const [itemId, sizeCode] = cartKey.split('|');
            const item = this.getItemData(itemId);

            if (item) {
                const explicitQty = this.userCartState[cartKey];
                const unitPrice = item.prices[sizeCode];
                const lineAccumulatedTotal = explicitQty * unitPrice;
                computedGrandTotal += lineAccumulatedTotal;
                
                // Name format logic: e.g. "بيتزا مارجريتا (وسط)"
                const sizeLabel = sizeCode === 'default' ? '' : `<span style="color:var(--gold-color); font-size:0.8rem;">(${item.sizeNames[sizeCode]})</span>`;

                // Temporarily swap active size to render correct stepper for the drawer
                const originalActiveSize = this.activeItemSizes[itemId];
                this.activeItemSizes[itemId] = sizeCode;
                const stepperHtml = this.generateStepperMarkup(itemId);
                this.activeItemSizes[itemId] = originalActiveSize; // swap back

                generatedHtml += `
                    <div class="cart-row-item">
                        <div class="cart-item-info">
                            <h5>${item.name} ${sizeLabel}</h5>
                            <span>${unitPrice} ج.م</span>
                        </div>
                        <div class="cart-right-controls">
                            <div class="stepper-fluid-shell" style="min-width:115px;">
                                ${stepperHtml}
                            </div>
                            <span class="cart-computed-row-price text-gold">${lineAccumulatedTotal} ج.م</span>
                        </div>
                    </div>
                `;
            }
        }

        if(container) {
            container.innerHTML = generatedHtml || `<p style="text-align:center; padding: 3rem; color: var(--soft-text-dim);">السلة فارغة حالياً.</p>`;
        }
        if(document.getElementById("cart-computed-total")) {
            document.getElementById("cart-computed-total").innerText = computedGrandTotal;
        }
    },

    /**
     * 🔥 TELEGRAM CHECKOUT INTEGRATION (EGYPTIAN ARABIC)
     */
    async handleOrderCompilation(event) {
        event.preventDefault(); 

        const randomOrderNumber = Math.floor(100 + Math.random() * 900);
        const currentTimestamp = new Date();
        const formattedDate = currentTimestamp.toLocaleDateString('ar-EG', { 
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
        });
        const formattedTime = currentTimestamp.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

        const customerName = document.getElementById("cust-name").value;
        const customerPhone = document.getElementById("cust-phone").value;
        const customerLocation = document.getElementById("cust-address").value; 

        let itemsTextReport = "";
        let calculatedTotalSum = 0;

        for (const cartKey in this.userCartState) {
            const [itemId, sizeCode] = cartKey.split('|');
            const item = this.getItemData(itemId);
            
            if (item) {
                const quantityOrdered = this.userCartState[cartKey];
                const unitPrice = item.prices[sizeCode];
                const rowTotalPrice = quantityOrdered * unitPrice;
                calculatedTotalSum += rowTotalPrice;
                
                const arabicSizeText = sizeCode === 'default' ? '' : `(${item.sizeNames[sizeCode]})`;
                itemsTextReport += `• ${quantityOrdered}x ${item.name} ${arabicSizeText} - ${rowTotalPrice} ج.م\n`;
            }
        }

        const telegramStyledMessage = `
🔔 *طلب جديد من الموقع!* 🔔

📦 *رقم الطلب:* #${randomOrderNumber}
📅 *التاريخ:* ${formattedDate}
⏰ *الوقت:* ${formattedTime}

👤 *بيانات العميل:*
• *الاسم:* ${customerName}
• *الموبايل:* \`${customerPhone}\`
📍 *العنوان:* ${customerLocation}

----------------------------------
🍽️ *تفاصيل الطلب:*
${itemsTextReport}
----------------------------------
💰 *الإجمالي:* ${calculatedTotalSum} ج.م
💵 *طريقة الدفع:* كاش (عند الاستلام)
        `.trim();

        try {
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>جاري إرسال الطلب...</span>`;

            const telegramEndpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            const apiResponse = await fetch(telegramEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramStyledMessage,
                    parse_mode: "Markdown" 
                })
            });

            if (apiResponse.ok) {
                this.closeCartDrawer();
                document.getElementById("success-overlay").classList.add("open-active");
            } else {
                const errorDetails = await apiResponse.json();
                console.error("Telegram Error Details:", errorDetails);
                alert(`حدث خطأ أثناء الإرسال: ${errorDetails.description}`);
            }
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;

        } catch (error) {
            console.error("Telegram API Error:", error);
            alert("فشل الاتصال، يرجى التحقق من الإنترنت والمحاولة مرة أخرى.");
        }
    },

    resetPlatformToHome() {
        this.userCartState = {};
        this.initialize(); 
        
        const formNode = document.getElementById("order-execution-form");
        if(formNode) formNode.reset();
        
        if(document.getElementById("global-cart-count")) document.getElementById("global-cart-count").innerText = "0";
        if(document.getElementById("luxury-cart-fab")) document.getElementById("luxury-cart-fab").classList.add("hidden-fab");
        
        document.getElementById("success-overlay").classList.remove("open-active");
        
        document.getElementById("menu-screen").classList.replace("view-active", "view-hidden");
        document.getElementById("welcome-screen").classList.replace("view-hidden", "view-active");
        window.scrollTo(0, 0);
    }
};

window.addEventListener("scroll", () => {
    const structuralBlocks = document.querySelectorAll(".menu-categorical-group");
    const navigationButtons = document.querySelectorAll(".category-pill-btn");
    let currentFocusId = "";

    structuralBlocks.forEach(block => {
        const elevationTop = block.offsetTop - 140;
        if (window.scrollY >= elevationTop) currentFocusId = block.getAttribute("id");
    });

    navigationButtons.forEach(button => {
        button.classList.remove("active");
        if (button.getAttribute("id") === `pill-${currentFocusId}`) {
            button.classList.add("active");
            // Automatically scrolls the top pill container so the active category is visible
            button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => menuApp.initialize());
