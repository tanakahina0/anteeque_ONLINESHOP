const CATEGORY_DATA = {
    new: {
        title: "NEW ARRIVALS",
        subtitle: "今期の新着アイテムをご紹介",
        products: [
            { id: "china_dress", img: "./img/china-dress01.png", name: "中華風ロリータドレス", price: "¥8,800" },
            { id: "head_dress", img: "./img/laceup-head-dress01.png", name: "レースアップヘッドドレス", price: "¥3,500" },
            { id: "panda_socks", img: "./img/panda-socks01.png", name: "ぱんだくつした", price: "¥1,300" }
        ]
    },
    lolita: {
        title: "LOLITA",
        subtitle: "レディー向けロリータアイテム",
        products: [
            { id: "choco_bonnet", img: "./img/chocolat-classic-lace-bonnet.png", name: "クラシカル・ショコラボンネット", price: "¥3,700" },
            { id: "choco_dress", img: "./img/classical-chocolat-dress.png", name: "クラシカル・ショコラドレス", price: "¥8,500" },
            { id: "rose_dress", img: "./img/rose-doll-dress.png", name: "ローズ・ドールドレス", price: "¥11,000" }
        ]
    },
    ouji: {
        title: "OUJI",
        subtitle: "皇子系スタイルのアイテム",
        products: [
            { id: "mantle_set", img: "./img/Cardinal-Youth-Mantle-set.png", name: "カーディナル・ユース・マントセット", price: "¥9,800" },
            { id: "cross_beret", img: "./img/holy-cross-beret.png", name: "ホーリーベレー帽", price: "¥2,800" },
            { id: "scarlet_mantle", img: "./img/scarlet-hood-mantle.png", name: "スカーレット・フードマントセット", price: "¥13,000" }
        ]
    },
    others: {
        title: "OTHERS",
        subtitle: "アクセサリー・小物など",
        products: [
            { id: "lace_gloves", img: "./img/lace-gloves.png", name: "総レースグローブ", price: "¥1,600" },
            { id: "ribbon_shoes", img: "./img/rose-ribbon-strap-shoes.png", name: "ローズ・リボンストラップシューズ", price: "¥3,600" },
            { id: "lace_tights", img: "./img/pure-white-floral-lace-tights.png", name: "ピュアフローラル・レースタイツ", price: "¥2,200" }
        ]
    }
};

const nav = document.getElementById("js-category-nav");
const items = nav.querySelectorAll("li[data-category]");
const underline = nav.querySelector(".category-underline");
const title = document.getElementById("js-section-title");
const subtitle = document.getElementById("js-section-subtitle");
const grid = document.getElementById("js-product-grid");

function moveUnderline(el) {
    underline.style.width = el.offsetWidth + "px";
    underline.style.left = el.offsetLeft + "px";
}

function render(category) {
    const data = CATEGORY_DATA[category];
    title.textContent = data.title;
    subtitle.textContent = data.subtitle;

    grid.innerHTML = "";
    data.products.forEach(p => {
        grid.insertAdjacentHTML("beforeend", `
            <article class="product-card">
                <a href="item.html?id=${p.id}">
                    <img src="${p.img}" class="product-image" alt="${p.name}">
                </a>
                <h3 class="product-name">
                    <a href="item.html?id=${p.id}">${p.name}</a>
                </h3>
                <p class="product-price">${p.price}</p>
            </article>
        `);
    });
}

items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        moveUnderline(item);
        render(item.dataset.category);
    });
});

// 初期表示
const defaultItem = nav.querySelector('[data-category="new"]');
if(defaultItem) {
    defaultItem.classList.add("active");
    moveUnderline(defaultItem);
    render("new");
}

// スライドショー
const slides = document.querySelectorAll(".hero-slide");
if(slides.length > 0) {
    let currentSlideIndex = 0;
    const slideInterval = 8000;

    function showNextSlide() {
        slides[currentSlideIndex].classList.remove("active");
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].classList.add("active");
    }

    setInterval(showNextSlide, slideInterval);
}