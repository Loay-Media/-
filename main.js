/**
 * 🛠️ TELEGRAM BOT CONFIGURATION
 * Put your Bot Token and Chat ID here to route the orders.
 */
const TELEGRAM_BOT_TOKEN = "8694733166:AAHmXZ4FZ19wRadu_UJZzZEhh8EMjm1GDV8"; // Replace with your actual Bot Token
const TELEGRAM_CHAT_ID = "7848525417";     // Replace with your Chat ID

/**
 * MENU DATA
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
    // ... (Keep the rest of your original menu items here exactly as they were) ...
];

/**
 * REUSABLE APPS SYSTEM MANAGEMENT STATE
 */
const menuApp = {
    userCartState: {}, 

    initialize() {
        this.renderDomStructureContent();
        this.registerScrollRevealEngine();
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
                            <span class="tile-price-span">${item.price} EGP</span>
                            <div class="stepper-fluid-shell" id="stepper-shell-${item.id}">
                                ${this.generateStepperMarkup(item.id)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

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

    generateStepperMarkup(itemId) {
        const currentQty = this.userCartState[itemId] || 0;
        if (currentQty === 0) {
            return `<button class="init-add-btn" onclick="menuApp.mutateCartUnits('${itemId}', 1)"><i class="fa-solid fa-plus"></i> Add</button>`;
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
        const ongoingQty = this.userCartState[itemId] || 0;
        const compiledResult = ongoingQty + differentialValue;

        if (compiledResult <= 0) {
            delete this.userCartState[itemId];
        } else {
            this.userCartState[itemId] = compiledResult;
        }

        this.syncStateInterfaceViews(itemId);
    },

    syncStateInterfaceViews(itemId) {
        const targetShell = document.getElementById(`stepper-shell-${itemId}`);
        if (targetShell) targetShell.innerHTML = this.generateStepperMarkup(itemId);

        const popupMountNode = document.getElementById("inspect-stepper-mount");
        if (popupMountNode && popupMountNode.dataset.currentId === itemId) {
            popupMountNode.innerHTML = this.generateStepperMarkup(itemId);
        }

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
        if (element) {
            const computationalOffset = element.offsetTop - 90;
            window.scrollTo({ top: computationalOffset, behavior: "smooth" });
        }
    },

    openInspectModal(itemId) {
        let matchedItem = null;
        platformCatalogData.forEach(cat => cat.items.forEach(i => { if (i.id === itemId) matchedItem = i; }));
        if (!matchedItem) return;

        document.getElementById("inspect-popup-img").src = matchedItem.img;
        document.getElementById("inspect-popup-title").innerText = matchedItem.name;
        document.getElementById("inspect-popup-desc").innerText = matchedItem.description;
        document.getElementById("inspect-popup-price").innerText = `${matchedItem.price} EGP`;

        const mountStepper = document.getElementById("inspect-stepper-mount");
        if (mountStepper) {
            mountStepper.dataset.currentId = matchedItem.id;
            mountStepper.innerHTML = this.generateStepperMarkup(matchedItem.id);
        }

        document.getElementById("inspect-modal").classList.add("open-active");
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
                            <span>${coreObjectData.price} EGP</span>
                        </div>
                        <div class="cart-right-controls">
                            <div class="stepper-fluid-shell" style="min-width:115px;">
                                <div class="active-stepper-rack">
                                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${coreObjectData.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                                    <span class="step-count-digits">${explicitQty}</span>
                                    <button class="step-control-node" onclick="menuApp.mutateCartUnits('${coreObjectData.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                            <span class="cart-computed-row-price text-gold">${lineAccumulatedTotal} EGP</span>
                        </div>
                    </div>
                `;
            }
        }

        if(container) {
            container.innerHTML = generatedHtml || `<p style="text-align:center; padding: 3rem; color: var(--soft-text-dim);">Your cart is empty.</p>`;
        }
        if(document.getElementById("cart-computed-total")) {
            document.getElementById("cart-computed-total").innerText = computedGrandTotal;
        }
    },

    /**
     * 🔥 TELEGRAM CHECKOUT INTEGRATION
     */
    async handleOrderCompilation(event) {
        event.preventDefault(); // Stop the form from reloading the page

        // 1. Generate a random 3-digit order number (e.g., 457)
        const randomOrderNumber = Math.floor(100 + Math.random() * 900);

        // 2. Get and format the current date and time
        const currentTimestamp = new Date();
        const formattedDate = currentTimestamp.toLocaleDateString('en-US', { 
            weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' 
        });
        const formattedTime = currentTimestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        // 3. Grab the customer's inputted information from the HTML form
        const customerName = document.getElementById("cust-name").value;
        const customerPhone = document.getElementById("cust-phone").value;
        const customerLocation = document.getElementById("cust-address").value; // Assuming ID is cust-address

        // 4. Build the text containing all ordered items and quantities
        let itemsTextReport = "";
        let calculatedTotalSum = 0;

        for (const itemId in this.userCartState) {
            let itemDetails = null;
            platformCatalogData.forEach(cat => cat.items.forEach(i => { if (i.id === itemId) itemDetails = i; }));
            
            if (itemDetails) {
                const quantityOrdered = this.userCartState[itemId];
                const rowTotalPrice = quantityOrdered * itemDetails.price;
                calculatedTotalSum += rowTotalPrice;
                
                // Formats it like: "2x Margherita Pizza - 190 EGP"
                itemsTextReport += `• ${quantityOrdered}x ${itemDetails.name} - ${rowTotalPrice} EGP\n`;
            }
        }

        // 5. Build the final message exactly how it will look on Telegram
        const telegramStyledMessage = `
🔔 *NEW ORDER RECEIVED* 🔔

📦 *Order Number:* #${randomOrderNumber}
📅 *Date:* ${formattedDate}
⏰ *Time:* ${formattedTime}

👤 *Customer Details:*
• *Name:* ${customerName}
• *Phone:* \`${customerPhone}\`
📍 *Location:* ${customerLocation}

----------------------------------
🍽️ *Order Summary:*
${itemsTextReport}
----------------------------------
💰 *Total Amount:* ${calculatedTotalSum} EGP
💵 *Payment:* Cash on Delivery
        `.trim();

        // 6. Send the data to the Telegram API
        try {
            // Change button text to show it's loading
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending Order...</span>`;

            const telegramEndpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            const apiResponse = await fetch(telegramEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: telegramStyledMessage,
                    parse_mode: "Markdown" // This allows us to use *bold* text
                })
            });

            if (apiResponse.ok) {
                // Success! Close cart and show success overlay
                this.closeCartDrawer();
                document.getElementById("success-overlay").classList.add("open-active");
            } else {
                alert("Oops! Could not send the order to Telegram. Please check your Bot Token and Chat ID.");
            }
            
            // Revert button back to normal
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;

        } catch (error) {
            console.error("Telegram API Error:", error);
            alert("Failed to connect. Please check your internet connection and try again.");
        }
    },

    resetPlatformToHome() {
        this.userCartState = {};
        this.renderDomStructureContent();
        
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
            button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => menuApp.initialize());
