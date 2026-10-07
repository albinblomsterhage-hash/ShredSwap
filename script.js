
const products = [

    {
        id: 1,
        title: "Burton Custom X Snowboard 158",
        category: "snowboard",
        price: 4200,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Åre",
        seller: "Alex",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 2,
        title: "Salomon QST 98 Freeride Skis",
        category: "skis",
        price: 3500,
        condition: "good",
        conditionText: "Bra",
        location: "Östersund",
        seller: "Viktor",
        image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 3,
        title: "Oakley Flight Deck Goggles",
        category: "goggles",
        price: 950,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Stockholm",
        seller: "Emma",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 4,
        title: "Burton Photon BOA Snowboard Boots",
        category: "boots",
        price: 1800,
        condition: "good",
        conditionText: "Bra",
        location: "Uppsala",
        seller: "Noah",
        image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 5,
        title: "Atomic Bent 100 Skis",
        category: "skis",
        price: 3900,
        condition: "new",
        conditionText: "Nyskick",
        location: "Sälen",
        seller: "Leo",
        image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 6,
        title: "Anon M4 Toric Goggles",
        category: "goggles",
        price: 1200,
        condition: "new",
        conditionText: "Nyskick",
        location: "Göteborg",
        seller: "Maja",
        image: "https://images.unsplash.com/photo-1518635270955-8e2e1a6b7a1b?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 7,
        title: "POC Obex MIPS Helmet",
        category: "helmets",
        price: 850,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Kiruna",
        seller: "Erik",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 8,
        title: "Volcom Gore-Tex Snow Jacket",
        category: "clothing",
        price: 1600,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Malmö",
        seller: "Ella",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 9,
        title: "Union Force Snowboard Bindings",
        category: "bindings",
        price: 1100,
        condition: "good",
        conditionText: "Bra",
        location: "Falun",
        seller: "William",
        image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 10,
        title: "Nitro Team Pro Snowboard",
        category: "snowboard",
        price: 2800,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Åre",
        seller: "Oscar",
        image: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 11,
        title: "Helly Hansen Powder Jacket",
        category: "clothing",
        price: 1300,
        condition: "good",
        conditionText: "Bra",
        location: "Stockholm",
        seller: "Sofia",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=900&q=85"
    },

    {
        id: 12,
        title: "Salomon S/Pro Ski Boots",
        category: "boots",
        price: 1450,
        condition: "very-good",
        conditionText: "Mycket bra",
        location: "Örebro",
        seller: "Liam",
        image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=900&q=85"
    }

];


let favorites =
    JSON.parse(localStorage.getItem("shredswapFavorites")) || [];


let activeCategory = "all";


/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts() {

    const grid = document.getElementById("productGrid");

    if (!grid) return;


    let filtered = [...products];


    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const category =
        document
            .getElementById("categoryFilter")
            .value;


    const minPrice =
        Number(
            document.getElementById("minPrice").value
        ) || 0;


    const maxPrice =
        Number(
            document.getElementById("maxPrice").value
        ) || Infinity;


    const conditions =
        [...document.querySelectorAll(".condition:checked")]
            .map(input => input.value);


    if (search) {

        filtered = filtered.filter(product =>

            product.title
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

            ||

            product.location
                .toLowerCase()
                .includes(search)

        );

    }


    if (category !== "all") {

        filtered = filtered.filter(
            product => product.category === category
        );

    }


    if (activeCategory !== "all") {

        filtered = filtered.filter(
            product => product.category === activeCategory
        );

    }


    filtered = filtered.filter(product =>

        product.price >= minPrice &&
        product.price <= maxPrice

    );


    if (conditions.length) {

        filtered = filtered.filter(product =>
            conditions.includes(product.condition)
        );

    }


    const sort =
        document.getElementById("sortSelect").value;


    if (sort === "low") {

        filtered.sort(
            (a,b) => a.price - b.price
        );

    }


    if (sort === "high") {

        filtered.sort(
            (a,b) => b.price - a.price
        );

    }


    if (!filtered.length) {

        grid.innerHTML = `

            <div class="empty-state">

                <h3>Inga produkter hittades</h3>

                <p>
                    Testa att ändra dina filter.
                </p>

            </div>

        `;

        return;

    }


    grid.innerHTML =
        filtered.map(createProductCard).join("");

}


/* =========================
   PRODUCT CARD
========================= */

function createProductCard(product) {

    const isFavorite =
        favorites.includes(product.id);


    return `

        <article
            class="product-card"
            onclick="openProduct(${product.id})"
        >

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

                <button
                    class="favorite"
                    onclick="toggleFavorite(event, ${product.id})"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                <span class="product-condition">
                    ${product.conditionText}
                </span>

            </div>


            <div class="product-info">

                <div class="product-title">
                    ${product.title}
                </div>


                <div class="product-meta">

                    <strong class="product-price">
                        ${product.price.toLocaleString("sv-SE")} kr
                    </strong>

                    <span class="product-location">
                        ${product.location}
                    </span>

                </div>


                <div class="seller">

                    <div class="avatar">
                        ${product.seller.charAt(0)}
                    </div>

                    <span>
                        ${product.seller}
                    </span>

                </div>

            </div>

        </article>

    `;

}


/* =========================
   FAVORITES
========================= */

function toggleFavorite(event, id) {

    event.stopPropagation();


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                favorite => favorite !== id
            );

        showToast("Borttagen från favoriter");

    } else {

        favorites.push(id);

        showToast("Tillagd i favoriter ❤️");

    }


    localStorage.setItem(
        "shredswapFavorites",
        JSON.stringify(favorites)
    );


    renderProducts();

}


/* =========================
   PRODUCT MODAL
========================= */

function openProduct(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    document.getElementById(
        "productModalContent"
    ).innerHTML = `

        <div class="product-detail">

            <div class="product-detail-image">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

            </div>


            <div class="product-detail-info">

                <span class="eyebrow">
                    ${product.category}
                </span>

                <h2>
                    ${product.title}
                </h2>

                <div class="detail-price">
                    ${product.price.toLocaleString("sv-SE")} kr
                </div>

                <p>
                    Säljs av ${product.seller}
                    · ${product.location}
                </p>

                <button
                    class="buy-button"
                    onclick="buyProduct(${product.id})"
                >
                    Köp nu
                </button>

                <button
                    class="offer-button"
                    onclick="makeOffer(${product.id})"
                >
                    Lägg ett bud
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("productModal")
        .classList.add("active");

}


/* =========================
   BUY
========================= */

function buyProduct(id) {

    const product =
        products.find(
            product => product.id === id
        );


    closeModal("productModal");

    showToast(
        `Du har valt att köpa ${product.title}`
    );

}


/* =========================
   OFFER
========================= */

function makeOffer(id) {

    const product =
        products.find(
            product => product.id === id
        );


    const offer =
        prompt(
            `Ditt bud på ${product.title}:`
        );


    if (!offer) return;


    showToast(
        `Bud på ${offer} kr skickat!`
    );

}


/* =========================
   LOGIN
========================= */

function openLoginModal() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function login() {

    const email =
        document.getElementById("loginEmail").value;


    if (!email) {

        showToast("Skriv in din e-post först.");

        return;

    }


    closeModal("loginModal");

    showToast("Du är nu inloggad! 👋");

}


/* =========================
   SELL
========================= */

function openSellModal() {

    document
        .getElementById("sellModal")
        .classList.add("active");

}


document
    .getElementById("sellForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const title =
            document.getElementById("sellTitle").value;


        const category =
            document.getElementById("sellCategory").value;


        const price =
            Number(
                document.getElementById("sellPrice").value
            );


        const condition =
            document.getElementById("sellCondition").value;


        const description =
            document.getElementById("sellDescription").value;


        const imageFile =
            document.getElementById("sellImage").files[0];


        let image =
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=85";


        if (imageFile) {

            image =
                URL.createObjectURL(imageFile);

        }


        products.unshift({

            id: Date.now(),

            title,

            category,

            price,

            condition,

            conditionText:
                condition === "new"
                    ? "Nyskick"
                    : condition === "very-good"
                        ? "Mycket bra"
                        : "Bra",

            location: "Sverige",

            seller: "Du",

            description,

            image

        });


        closeModal("sellModal");

        this.reset();

        renderProducts();

        showToast(
            "Din annons är publicerad! 🚀"
        );

    });


/* =========================
   FILTERS
========================= */

function clearFilters() {

    document.getElementById(
        "categoryFilter"
    ).value = "all";


    document.getElementById(
        "minPrice"
    ).value = "";


    document.getElementById(
        "maxPrice"
    ).value = "";


    document
        .querySelectorAll(".condition")
        .forEach(
            checkbox => checkbox.checked = false
        );


    activeCategory = "all";


    document
        .querySelectorAll(".category")
        .forEach(
            button => button.classList.remove("active")
        );


    document
        .querySelector(".category")
        .classList.add("active");


    renderProducts();

}


function toggleFilters() {

    document
        .getElementById("filters")
        .classList.toggle("show");

}


/* =========================
   CATEGORY BUTTONS
========================= */

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category")
                .forEach(
                    button =>
                        button.classList.remove("active")
                );


            button.classList.add("active");


            activeCategory =
                button.dataset.category;


            document.getElementById(
                "categoryFilter"
            ).value = activeCategory;


            renderProducts();

        });

    });


/* =========================
   SEARCH / FILTER EVENTS
========================= */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        renderProducts
    );


document
    .getElementById("categoryFilter")
    .addEventListener(
        "change",
        () => {

            activeCategory = "all";

            document
                .querySelectorAll(".category")
                .forEach(
                    button =>
                        button.classList.remove("active")
                );

            document
                .querySelector(".category")
                .classList.add("active");

            renderProducts();

        }
    );


document
    .getElementById("sortSelect")
    .addEventListener(
        "change",
        renderProducts
    );


document
    .getElementById("minPrice")
    .addEventListener(
        "input",
        renderProducts
    );


document
    .getElementById("maxPrice")
    .addEventListener(
        "input",
        renderProducts
    );


document
    .querySelectorAll(".condition")
    .forEach(
        checkbox =>
            checkbox.addEventListener(
                "change",
                renderProducts
            )
    );


/* =========================
   MODALS
========================= */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");

}


document
    .querySelectorAll(".modal-overlay")
    .forEach(overlay => {

        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target === overlay
                ) {

                    overlay.classList.remove(
                        "active"
                    );

                }

            }
        );

    });


/* =========================
   TOAST
========================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.querySelector("p")
        .textContent = message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2800);

}


/* =========================
   SCROLL
========================= */

function scrollToMarketplace() {

    document
        .getElementById("marketplace")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   START
========================= */

renderProducts();