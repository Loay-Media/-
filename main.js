/**
 * PRODUCTION MENUS DATA ARCHITECTURE
 * Structured using realistic premium details and specific Egyptian Arabic naming conventions.
 */
const platformCatalogData = [
    {
        id: "pizza-section",
        title: "ركن البيتزا الملكية",
        description: "عجينة إيطالية مخبوزة ببطء ومغطاة بأجود أنواع الموتزاريلا النيوزيلاندية.",
        items: [
            { id: "pz_01", name: "بيتزا مارجريتا نابولي", description: "جبنة موتزاريلا غنية، صوص طماطم متبل بالأعشاب البرية، زيت زيتون بكر وعجينة سميكة وهشة.", price: 95, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
            { id: "pz_02", name: "بيتزا بيبروني فاخرة", description: "شرائح بيبروني بقري مدخن، ميكس أجبان كريمي، صوص طماطم سري خاص بالبيت السوري.", price: 140, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600" }
        ]
    },
    {
        id: "sandwiches-section",
        title: "ركن السندوتشات العربية الأصيلة",
        description: "شاورما دمشقية حقيقية مقصوصة من السيخ مباشرة وملفوفة في خبز الصاج الساخن.",
        items: [
            { id: "sw_01", name: "شاورما دجاج دمشقي سوبر", description: "صدور دجاج متبلة ببهارات الشام، مخلل خيار مقرمش، صوص تومية كريمي في خبز صاج محمص.", price: 80, img: "https://images.unsplash.com/photo-1648902598380-007f35f793dc?q=80&w=600" },
            { id: "sw_02", name: "شاورما لحم بلدي بالرمان", description: "لحم بقري صافي متبل، بصل وبقدونس، صوص طحينة خام، وقطرات مكثفة من دبس الرمان الفاخر.", price: 110, img: "https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=600" }
        ]
    },
    {
        id: "fatayer-section",
        title: "ركن الفطائر الشامية الفاخرة",
        description: "فطائر ومعجنات مخبوزة طازة في فرن الحطب الساخن عند طلبك.",
        items: [
            { id: "ft_01", name: "فطيرة مشكل أجبان بالموتزاريلا", description: "توليفة غنية من الجبنة العكاوي، الموتزاريلا، والرومي مع رشة حبة البركة والسمسم.", price: 115, img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600" },
            { id: "ft_02", name: "فطيرة لحم مفروم بالخضار", description: "لحم مفروم متبل بالبهارات السبع، طماطم، بصل فريش، مبرومة ومحمرة في الفرن.", price: 135, img: "https://images.unsplash.com/photo-1627308595229-7830f5c95f9d?q=80&w=600" }
        ]
    },
    {
        id: "borek-section",
        title: "ركن البورك المقرمش",
        description: "رقائق العجين الذهبية المقرمشة بحشوات مميزة غنية بالنكهة.",
        items: [
            { id: "bk_01", name: "بورك تركي بالجبنة والسبانخ", description: "رقائق بورك مقرمشة محشوة بالجبنة البيضاء الإسطنبولي مع أوراق السبانخ المتبلة.", price: 65, img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=600" },
            { id: "bk_02", name: "بورك باللحمة المفرومة والصنوبر", description: "عجين رقيق ومقرمش محشو باللحم المفروم المعصج الفاخر وحبات الصنوبر المحمصة.", price: 85, img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600" }
        ]
    },
    {
        id: "manaqish-section",
        title: "ركن المناقيش السورية",
        description: "أقراص العجين الشامية التقليدية المخبوزة على الصاج الحجري.",
        items: [
            { id: "mq_01", name: "منقوشة زعتر حلبي أصلي", description: "زعتر حلبي ممتاز مخلوط بزيت الزيتون البكر الصافي على عجين دمشقي خفيف.", price: 45, img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600" },
            { id: "mq_02", name: "منقوشة محمرة بالقشقوان", description: "صوص المحمرة السورية الحارة قليلاً والمتبلة مغطاة بطبقة ذائبة من جبن القشقوان الفاخر.", price: 70, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600" }
        ]
    },
    {
        id: "crepe-section",
        title: "ركن الكريب الفرنسي بلمستنا",
        description: "عجين كريب رقيق ومقرمش محشو بأقوى تركيبات اللحوم والأجبان.",
        items: [
            { id: "cr_01", name: "كريب زنجر دجاج حار نار", description: "قطع دجاج زنجر مقرمشة، بطاطس متبلة، ميكس جبن شيدر وموتزاريلا، صوصات حارة.", price: 95, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600" },
            { id: "cr_02", name: "كريب شاورما ميكس مدمر", description: "مزيج من شاورما اللحم وشاورما الدجاج مع التومية والموتزاريلا داخل رغيف الكريب الذهبي.", price: 120, img: "https://images.unsplash.com/photo-1648902598380-007f35f793dc?q=80&w=600" }
        ]
    },
    {
        id: "sweets-section",
        title: "ركن الحلويات الشرقية الملكية",
        description: "ختام مثالي فاخر ومصنوع بالسمن البلدي الطبيعي الغني.",
        items: [
            { id: "sw_ps", name: "كنافة نابلسية بالجبن الفاخر", description: "كنافة ذهبية دافئة محشوة بالجبنة النابلسية الذائبة، غرقانة شربات ومزينة بالفستق الحلبي.", price: 75, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600" },
            { id: "sw_bs", name: "بسبوسة سورية بالمكسرات", description: "بسبوسة مرملة ناعمة مصنوعة بالسمن البلدي والقشطة، مرصعة بحبات اللوز المحمص.", price: 60, img: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=600" }
        ]
    },
    {
        id: "extras-section",
        title: "ركن الإضافات والمقبلات",
        description: "عناصر جانبية لا غنى عنها لاكتمال متعة المائدة.",
        items: [
            { id: "ex_tm", name: "علبة تومية كريمي إضافية", description: "صوص التومية الشهير المحضر على طريقة البيت السوري السرية.", price: 15, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=600" },
            { id: "ex_fr", name: "بطاطس محمرة متبلة كبير", description: "أصابع بطاطس مقرمشة مضاف إليها بهارات البطاطس السورية الخاصة.", price: 35, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600" }
        ]
    },
    {
        id: "drinks-section",
        title: "ركن المشروبات المنعشة",
        description: "مشروبات باردة لترطيب مثالي بعد الوجبة الفاخرة.",
        items: [
            { id: "dr_cc", name: "كوكاكولا زجاجة مثلجة", description: "المشروب الغازي المنعش الحجم القياسي.", price: 20, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600" },
            { id: "dr_an", name: "عصير رمان طبيعي فريش", description: "عصير رمان فريش معصور ومبرد بدون سكر مضاف.", price: 40, img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600" }
        ]
    },
    {
        id: "offers-section",
        title: "ركن العروض الخاصة والولائم",
        description: "وجبات متكاملة مجمعة بأسعار تنافسية تناسب اللمات والعائلات.",
        items: [
            { id: "of_family", name: "عرض اللمة السورية العائلية", description: "4 سندوتشات شاورما دجاج كبير، بطاطس عائلي، لتر كوكاكولا، 3 علب تومية ومخلل.", price: 290, img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600" },
            { id: "of_combo", name: "وجبة الأكيلة الفردية", description: "1 بيتزا مارجريتا صغير مضاف إليها شرائح شاورما + بطاطس صغير + مشروب من اختيارك.", price: 160, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600" }
        ]
    }
];

/**
 * REUSABLE APPS SYSTEM MANAGEMENT STATE
 */
const menuApp = {
    userCartState: {}, // Layout: { item_id: count }

    initialize() {
        this.renderDomStructureContent();
        this.registerScrollRevealEngine();
    },

    /**
     * Renders UI Navigation & Core Grid Components dynamically
     */
    renderDomStructureContent() {
        const pillsContainer = document.getElementById("nav-pills-container");
        const mainInjector = document.getElementById("dynamic-menu-injector");
        
        pillsContainer.innerHTML = "";
        mainInjector.innerHTML = "";

        platformCatalogData.forEach((section, index) => {
            // Render Pills Text Line
            const activeClass = index === 0 ? "active" : "";
            pillsContainer.innerHTML += `
                <button class="category-pill-btn ${activeClass}" 
                        id="pill-${section.id}" 
                        onclick="menuApp.scrollToTargetCategorySection('${section.id}')">
                    ${section.title}
                </button>
            `;

            // Compile Grid Items
            const itemsMarkup = section.items.map(item => `
                <div class="food-luxury-tile reveal-hidden-node" onclick="menuApp.openInspectModal('${item.id}')">
                    <div class="tile-img-container">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                        <div class="tile-shading-lens"></div>
                    </div>
                    <div class="tile-body-box">
                        <h4>${item.name}</h4>
                        <p class="tile-ingredients-text">${item.description}</p>
                        <div class="tile-interactive-footer" onclick="event.stopPropagation()">
                            <span class="tile-price-span">${item.price} ج.م</span>
                            <div class="stepper-fluid-shell" id="stepper-shell-${item.id}">
                                ${this.generateStepperMarkup(item.id)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Render Dynamic Container Block Markup
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
        });
    },

    /**
     * State Machine generating continuous single fluid block transition markup
     */
    generateStepperMarkup(itemId) {
        const currentQty = this.userCartState[itemId] || 0;
        if (currentQty === 0) {
            return `<button class="init-add-btn" onclick="menuApp.mutateCartUnits('${itemId}', 1)"><i class="fa-solid fa-plus"></i> أضف</button>`;
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

    /**
     * Mutates core internal reactive array counts and triggers state synchronization
     */
    mutateCartUnits(itemId, differentialValue) {
        const ongoingQty = this.userCartState[itemId] || 0;
        const compiledResult = ongoingQty + differentialValue;

        if (compiledResult <= 0) {
            delete this.userCartState[itemId];
        } else {
            this.userCartState[itemId] = compiledResult;
        }

        this.syncStateInterfaceViews(itemId);
    },

    /**
     * Comprehensive synchronization across all active nodes (Cards, Inspectors, Drawers)
     */
    syncStateInterfaceViews(itemId) {
        // 1. Sync Base Card Stepper Node
        const targetShell = document.getElementById(`stepper-shell-${itemId}`);
        if (targetShell) {
            targetShell.innerHTML = this.generateStepperMarkup(itemId);
        }

        // 2. Sync Inspector Modal Overlay Floating Stepper if matching
        const popupMountNode = document.getElementById("inspect-stepper-mount");
        if (popupMountNode && popupMountNode.dataset.currentId === itemId) {
            popupMountNode.innerHTML = this.generateStepperMarkup(itemId);
        }

        // 3. Sync Dynamic Counter Badge Metrics
        const totalCountValue = Object.values(this.userCartState).reduce((acc, curr) => acc + curr, 0);
        const fabNode = document.getElementById("luxury-cart-fab");
        document.getElementById("global-cart-count").innerText = totalCountValue;

        if (totalCountValue > 0) {
            fabNode.classList.remove("hidden-fab");
        } else {
            fabNode.classList.add("hidden-fab");
            // Autoclose active checkout wrapper overlay if empty
            this.closeCartDrawer();
        }

        // 4. Update Current Drawer rows internally if active layout view open
        const drawerActiveOverlay = document.getElementById("checkout-drawer");
        if (drawerActiveOverlay.classList.contains("open-active")) {
            this.compileDrawerItemsMarkupList();
        }
    },

    /**
     * Layer 1: Macro Smooth Cinematic Screen Transition Handler
     */
    triggerScreenTransition() {
        const shutter = document.getElementById("macro-shutter");
        shutter.classList.add("active-transition");

        setTimeout(() => {
            // Hot swap active view states without visual disruption
            document.getElementById("welcome-screen").classList.replace("view-active", "view-hidden");
            document.getElementById("menu-screen").classList.replace("view-hidden", "view-active");
            window.scrollTo(0, 0);
            
            // Execute automated layout entry animations cascade trigger
            menuApp.triggerDelayedVisibilityReveal();
        }, 1200);

        setTimeout(() => {
            shutter.classList.remove("active-transition");
        }, 2200);
    },

    /**
     * Layer 4: Progressive Smooth Scroll and Reveal Trigger Logic
     */
    registerScrollRevealEngine() {
        const targetObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible-node");
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });

        // Bind intersection handlers to structural markup cells
        setTimeout(() => {
            document.querySelectorAll(".reveal-hidden-node").forEach(node => targetObserver.observe(node));
        }, 1000);
    },

    triggerDelayedVisibilityReveal() {
        const structuralElements = document.querySelectorAll(".reveal-hidden-node");
        structuralElements.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add("reveal-visible-node");
            }, index * 90); // Staggered entry sequence delay
        });
    },

    /**
     * Continuous Scroll Active Segment Tracking Navigation syncing
     */
    scrollToTargetCategorySection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const computationalOffset = element.offsetTop - 90;
            window.scrollTo({
                top: computationalOffset,
                behavior: "smooth"
            });
        }
    },

    /**
     * Custom click-to-inspect glass modal popups operations engine
     */
    openInspectModal(itemId) {
        let matchedItem = null;
        platformCatalogData.forEach(cat => cat.items.forEach(i => { if (i.id === itemId) matchedItem = i; }));
        
        if (!matchedItem) return;

        document.getElementById("inspect-popup-img").src = matchedItem.img;
        document.getElementById("inspect-popup-title").innerText = matchedItem.name;
        document.getElementById("inspect-popup-desc").innerText = matchedItem.description;
        document.getElementById("inspect-popup-price").innerText = `${matchedItem.price} ج.م`;

        const mountStepper = document.getElementById("inspect-stepper-mount");
        mountStepper.dataset.currentId = matchedItem.id;
        mountStepper.innerHTML = this.generateStepperMarkup(matchedItem.id);

        document.getElementById("inspect-modal").classList.add("open-active");
    },

    closeInspectModal() {
        document.getElementById("inspect-modal").classList.remove("open-active");
    },

    /**
     * Interactive Cart Drawers UI Construction compilation
     */
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

        for (const itemId in this.userCartState) {
            let coreObjectData = null;
            platformCatalogData.forEach(cat => cat.items.forEach(i => { if (i.id === itemId) coreObjectData = i; }));

            if (coreObjectData) {
                const explicitQty = this.userCartState[itemId];
                const lineAccumulatedTotal = explicitQty * coreObjectData.price;
                computedGrandTotal += lineAccumulatedTotal;

                generatedHtml += `
                    <div class="cart-row-item">
                        <div class="cart-item-info">
                            <h5>${coreObjectData.name}</h5>
                            <span>${coreObjectData.price} ج.م</span>
                        </div>
                        <div class="cart-right-controls">
                            <div class="stepper-fluid-shell" style="min-width:115px;">
                                <div class="active-stepper-rack">
                                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${coreObjectData.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                                    <span class="step-count-digits">${explicitQty}</span>
                                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${coreObjectData.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                            <span class="cart-computed-row-price text-gold">${lineAccumulatedTotal} ج.م</span>
                        </div>
                    </div>
                `;
            }
        }

        container.innerHTML = generatedHtml || `<p style="text-align:center; padding: 3rem; color: var(--soft-text-dim);">السلة فاضية.. مفيش أوردرات هنا لسه</p>`;
        document.getElementById("cart-computed-total").innerText = computedGrandTotal;
    },

    /**
     * Order confirmation and storage initialization
     */
    handleOrderCompilation(event) {
        event.preventDefault();
        
        // Hide operational interactive panels
        this.closeCartDrawer();
        
        // Reveal celebratory screen success modal state node
        document.getElementById("success-overlay").classList.add("open-active");
    },

    /**
     * Flushes current app state and triggers full clean interface reset loop back home
     */
    resetPlatformToHome() {
        this.userCartState = {};
        this.renderDomStructureContent();
        
        // Reset system form input nodes
        document.getElementById("order-execution-form").reset();
        document.getElementById("global-cart-count").innerText = "0";
        document.getElementById("luxury-cart-fab").classList.add("hidden-fab");
        
        // Close overlay components safely
        document.getElementById("success-overlay").classList.remove("open-active");
        
        // Structural hard reverse view state swaps
        document.getElementById("menu-screen").classList.replace("view-active", "view-hidden");
        document.getElementById("welcome-screen").classList.replace("view-hidden", "view-active");
        window.scrollTo(0, 0);
    }
};

/**
 * Global Scroll Navigation Syncing Observer Loop
 */
window.addEventListener("scroll", () => {
    const structuralBlocks = document.querySelectorAll(".menu-categorical-group");
    const navigationButtons = document.querySelectorAll(".category-pill-btn");
    let currentFocusId = "";

    structuralBlocks.forEach(block => {
        const elevationTop = block.offsetTop - 140;
        if (window.scrollY >= elevationTop) {
            currentFocusId = block.getAttribute("id");
        }
    });

    navigationButtons.forEach(button => {
        button.classList.remove("active");
        if (button.getAttribute("id") === `pill-${currentFocusId}`) {
            button.classList.add("active");
            // Auto centering navigation pill node item on tiny viewports smoothly
            button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    });
});

// Run Initialization Core System
document.addEventListener("DOMContentLoaded", () => menuApp.initialize());
