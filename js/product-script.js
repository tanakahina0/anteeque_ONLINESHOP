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
            { id: "china_dress", img: "./img/china-dress01.png", name: "中華風ロリータドレス", price: "¥8,800" },
            { id: "head_dress", img: "./img/laceup-head-dress01.png", name: "レースアップヘッドドレス", price: "¥3,500" },
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
            { id: "panda_socks", img: "./img/panda-socks01.png", name: "ぱんだくつした", price: "¥1,300" },
            { id: "lace_gloves", img: "./img/lace-gloves.png", name: "総レースグローブ", price: "¥1,600" },
            { id: "ribbon_shoes", img: "./img/rose-ribbon-strap-shoes.png", name: "ローズ・リボンストラップシューズ", price: "¥3,600" },
            { id: "lace_tights", img: "./img/pure-white-floral-lace-tights.png", name: "ピュアフローラル・レースタイツ", price: "¥2,200" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    if (typeof CATEGORY_DATA === 'undefined') {
        console.error('CATEGORY_DATAが見つかりません。');
        return;
    }

    const container = document.getElementById('product-container');
    const countDisplay = document.getElementById('display-count');
    const categoryInputs = document.querySelectorAll('input[name="category"]');
    const priceSelect = document.getElementById('price-filter');

    function renderProducts() {
        const uniqueProducts = {};

        for (const [catKey, data] of Object.entries(CATEGORY_DATA)) {
            data.products.forEach(product => {
                if (!uniqueProducts[product.name]) {
                    uniqueProducts[product.name] = {
                        ...product,
                        categories: [] 
                    };
                }
                uniqueProducts[product.name].categories.push(catKey);
            });
        }

        let htmlContent = '';

        Object.values(uniqueProducts).forEach(product => {
            const numPrice = parseInt(product.price.replace(/[¥,]/g, ''));
            const categoryString = product.categories.join(' ');

            htmlContent += `
                <article class="product-card" data-category="${categoryString}" data-price="${numPrice}">
                    <a href="item.html?id=${product.id}">
                        <img src="${product.img}" alt="${product.name}" class="product-image">
                    <h3 class="product-name">
                        ${product.name}
                    </h3>
                    <p class="product-price">${product.price}</p>
                    </a>
                </article>
            `;
        });

        container.innerHTML = htmlContent;
    }

    function filterProducts() {
        const products = document.querySelectorAll('.product-card');

        const selectedCategories = Array.from(categoryInputs)
            .filter(input => input.checked)
            .map(input => input.value);

        const selectedPriceRange = priceSelect.value;
        let visibleCount = 0;

        products.forEach(product => {
            const productCategories = product.getAttribute('data-category').split(' ');
            const price = parseInt(product.getAttribute('data-price'));
            
            let isVisible = false;
            const hasMatchCategory = productCategories.some(cat => selectedCategories.includes(cat));

            if (hasMatchCategory) {
                isVisible = true;
            }

            if (isVisible) {
                switch (selectedPriceRange) {
                    case 'under-3000':
                        if (price > 3000) isVisible = false;
                        break;
                    case '3000-5000':
                        if (price < 3000 || price > 5000) isVisible = false;
                        break;
                    case '5000-10000':
                        if (price < 5000 || price > 10000) isVisible = false;
                        break;
                    case 'over-10000':
                        if (price < 10000) isVisible = false;
                        break;
                }
            }

            if (isVisible) {
                product.classList.remove('hidden');
                visibleCount++;
            } else {
                product.classList.add('hidden');
            }
        });

        countDisplay.textContent = visibleCount;
    }

    renderProducts();
    filterProducts();

    categoryInputs.forEach(input => {
        input.addEventListener('change', filterProducts);
    });
    priceSelect.addEventListener('change', filterProducts);

});
