// 商品詳細情報
const PRODUCT_DB = {
  "china_dress": {
    name: "中華風ロリータドレス",
    price: 8800,
    category: "lolita",
    mainImage: "./img/china-dress01.png",
    subImages: ["./img/china-dress01.png", "./img/china-dress01-detail1.png", "./img/china-dress01-detail2.png", "./img/china-dress01-detail3.png", "./img/china-dress01-detail4.png", "./img/china-dress01-detail5.png"],
    description: "クラシカルな刺繍とリボンが特徴的な一着。",
    sizes: ["S", "M", "L"],
    colors: ["ブラック", "アンティークブラウン"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  },

  "head_dress": {
    name: "レースアップヘッドドレス",
    price: 3500,
    category: "others",
    mainImage: "./img/laceup-head-dress01.png",
    subImages: ["./img/laceup-head-dress01.png", "./img/laceup-head-dress-detail1.png", "./img/laceup-head-dress-detail2.png", "./img/laceup-head-dress-detail3.png"],
    description: "繊細なレースをあしらったヘッドドレスです。",
    sizes: ["Free"],
    colors: ["ブラック", "アンティークブラウン", "ホワイト"],
    sizeGuide: "フリーサイズ"
  },

  "panda_socks": {
    name: "ぱんだくつした",
    price: 1300,
    category: "others",
    mainImage: "./img/panda-socks01.png",
    subImages: ["./img/panda-socks01.png"],
    description: "足元から可愛さを演出するパンダ柄のソックス。",
    sizes: ["23-25cm"],
    colors: ["ホワイト×ブラック"],
    sizeGuide: "サイズ: 23cm〜25cm<br>丈: かかとから約15cm"
  },

  "choco_bonnet": {
    name: "クラシカル・ショコラボンネット",
    price: 3700,
    category: "lolita",
    mainImage: "./img/chocolat-classic-lace-bonnet.png",
    subImages: ["./img/chocolat-classic-lace-bonnet.png"],
    description: "おだやかなショコラカラーのアイテムを。",
    sizes: ["Free"],
    colors: ["ショコラブラウン"]
  },

  "choco_dress": {
    name: "クラシカル・ショコラドレス",
    price: 8500,
    category: "lolita",
    mainImage: "./img/classical-chocolat-dress.png",
    subImages: ["./img/classical-chocolat-dress.png"],
    description: "詳細テキスト",
    sizes: ["S", "M", "L"],
    colors: ["ブラウン"]
  },

  "rose_dress": {
    name: "ローズ・ドールドレス",
    price: 11000,
    category: "lolita",
    mainImage: "./img/rose-doll-dress.png",
    subImages: ["./img/rose-doll-dress.png"],
    description: "詳細テキスト",
    sizes: ["S", "M", "L"],
    colors: ["ローズ"]
  },

  "mantle_set": {
    name: "カーディナル・ユース・マントセット",
    price: 9800,
    category: "ouji",
    mainImage: "./img/Cardinal-Youth-Mantle-set.png",
    subImages: ["./img/Cardinal-Youth-Mantle-set.png"],
    description: "詳細テキスト",
    sizes: ["S", "M", "L"],
    colors: ["レッド", "ブルー"]
  },

  "cross_beret": {
    name: "ホーリーベレー帽",
    price: 2800,
    category: "ouji",
    mainImage: "./img/holy-cross-beret.png",
    subImages: ["./img/holy-cross-beret.png"],
    description: "詳細テキスト",
    sizes: ["Free"],
    colors: ["レッド", "ブルー"]
  },

  "scarlet_mantle": {
    name: "スカーレット・フードマントセット",
    price: 13000,
    category: "ouji",
    mainImage: "./img/scarlet-hood-mantle.png",
    subImages: ["./img/scarlet-hood-mantle.png"],
    description: "詳細テキスト",
    sizes: ["S", "M", "L"],
    colors: ["レッド"]
  },

  "lace_gloves": {
    name: "総レースグローブ",
    price: 1600,
    category: "others",
    mainImage: "./img/lace-gloves.png",
    subImages: ["./img/lace-gloves.png"],
    description: "詳細テキスト",
    sizes: ["Free"],
    colors: ["ホワイト", "ブラック"]
  },

  "ribbon_shoes": {
    name: "ローズ・リボンストラップシューズ",
    price: 3600,
    category: "others",
    mainImage: "./img/rose-ribbon-strap-shoes.png",
    subImages: ["./img/rose-ribbon-strap-shoes.png"],
    description: "詳細テキスト",
    sizes: ["23", "23.5", "24", "24.5", "25"],
    colors: ["ローズ"]
  },

  "lace_tights": {
    name: "ピュアフローラル・レースタイツ",
    price: 2200,
    category: "others",
    mainImage: "./img/pure-white-floral-lace-tights.png",
    subImages: ["./img/pure-white-floral-lace-tights.png"],
    description: "詳細テキスト",
    sizes: ["M-L"],
    colors: ["ホワイト"]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = PRODUCT_DB[productId];

  if (!product) {
    // 商品が見つからない場合はアラートを出してトップへ
    alert("商品が見つかりません。");
    window.location.href = "top.html";
    return;
  }

  // 基本情報の表示
  document.getElementById('js-item-name').textContent = product.name;
  document.getElementById('js-item-price').innerHTML = `¥${product.price.toLocaleString()}<span>(税込)</span>`;
  document.getElementById('js-item-desc').innerHTML = product.description;
  document.title = `${product.name} | anteeque`;

  // パンくずリスト
  const breadcrumbs = document.getElementById('js-breadcrumbs');
  if (breadcrumbs) {
    // カテゴリIDを画面表示用の名前に
    const categoryNames = {
      "lolita": "LOLITA",
      "ouji": "OUJI",
      "others": "OTHERS",
      "new": "NEW ARRIVALS"
    };
    const catName = categoryNames[product.category] || "ITEM";

    breadcrumbs.innerHTML = `
          <a href="top.html">HOME</a> &gt; 
          <a href="product.html">${catName}</a> &gt; 
          ${product.name}
      `;
  }

  // 画像生成エリア
  const galleryGrid = document.getElementById('js-gallery-grid');
  const thumbList = document.getElementById('js-thumbnail-list');

  // メイン画像
  const mainImg = document.createElement('img');
  mainImg.src = product.subImages[0];
  mainImg.className = 'gallery-item';
  mainImg.id = 'js-main-image'; // 切り替え用ID
  galleryGrid.appendChild(mainImg);

  // サムネ
  product.subImages.forEach((imgSrc, index) => {
    const thumb = document.createElement('img');
    thumb.src = imgSrc;
    thumb.className = index === 0 ? 'thumbnail-img active' : 'thumbnail-img';

    // クリックしたらメイン画像を書き換え
    thumb.addEventListener('click', () => {
      // アクティブ枠の切り替え
      document.querySelectorAll('.thumbnail-img').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      document.getElementById('js-main-image').src = imgSrc;
    });

    thumbList.appendChild(thumb);
  });

  // セレクトボックス
  const sizeSelect = document.getElementById('js-size-select');
  product.sizes.forEach(s => {
    const opt = document.createElement('option');
    opt.textContent = s;
    sizeSelect.appendChild(opt);
  });
  const colorSelect = document.getElementById('js-color-select');
  product.colors.forEach(c => {
    const opt = document.createElement('option');
    opt.textContent = c;
    colorSelect.appendChild(opt);
  });

  // 関連アイテム生成
  const relatedContainer = document.getElementById('js-related-items');
  if (relatedContainer) {
    // DB全体から、条件に合う商品を探して配列に
    const relatedItems = Object.entries(PRODUCT_DB)
      .filter(([key, item]) => {
        // 「同カテゴリ」かつ「おなじIDではない」
        return item.category === product.category && key !== productId;
      })
      .slice(0, 3); // 最大3つ

    // 表示
    if (relatedItems.length > 0) {
      relatedItems.forEach(([key, item]) => {
        const thumbSrc = item.mainImage || item.subImages[0];
        relatedContainer.insertAdjacentHTML('beforeend', `
          <article class="product-card">
            <a href="item.html?id=${key}">
              <img src="${thumbSrc}" class="product-image" alt="${item.name}">
            </a>
            <h3 class="product-name">
              <a href="item.html?id=${key}">${item.name}</a>
            </h3>
            <p class="product-price">¥${item.price.toLocaleString()}</p>
          </article>
        `);
      });
    } else {
      relatedContainer.innerHTML = '<p style="text-align:center; color:#a68b75;">関連商品はまだありません。</p>';
    }
  }
});

// UI機能
function updateQty(n) {
  const i = document.getElementById('qty-input');
  let v = parseInt(i.value) + n;
  if (v < 1) v = 1;
  i.value = v;
}
document.querySelectorAll('.accordion-header').forEach(h => {
  h.addEventListener('click', () => h.parentElement.classList.toggle('active'));
});