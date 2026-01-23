// memo:カートやお気に入りボタンの挙動を追加する
// memo:ログインログアウト、ユーザー登録もできるようにしたい
// memo:サイト全体がゆっくり動くようにしたい
// memo:アコーディオンメニューの挙動なおす
// memo:パンくずリストの遷移先がそのカテゴリのみ表示にしたい(商品一覧を修正しないとダメかも？)

// 商品詳細情報
const PRODUCT_DB = {
  "china_dress": {
    name: "中華風ロリータドレス",
    price: 8800,
    category: "lolita",
    mainImage: "./img/china-dress01.png",
    subImages: ["./img/china-dress01.png", "./img/china-dress01-detail1.png", "./img/china-dress01-detail2.png", "./img/china-dress01-detail3.png", "./img/china-dress01-detail4.png", "./img/china-dress01-detail5.png"],
    description: "クラシカルな刺繍とリボンが特徴的な一着",
    detail: "東洋的な気品とロリータの甘さを繊細に融合させた一着。ボタンやフリルにこだわり、可愛らしさの中に凛とした印象を添えています。動くたびに揺れるスカートラインが美しく、写真映えはもちろん、特別な日の装いにも最適。異国情緒を纏うような感覚を楽しめます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>表地:綿",
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
    description: "繊細なレースをあしらったヘッドドレス",
    detail: "クラシカルなメイドスタイルを、現代的なシルエットで再構築しました。レースが程よいアクセントとなり、顔回りを美しく演出します。控えめな甘さと品のあるデザインは、日常のお出かけからイベントまで幅広く活躍。着る人の仕草まで美しく見せてくれるアイテムです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["Free"],
    colors: ["ブラック", "アンティークブラウン", "ホワイト"],
    sizeGuide: "フリーサイズ"
  },

  "panda_socks": {
    name: "ぱんだくつした",
    price: 1300,
    category: "others",
    mainImage: "./img/panda-socks01.png",
    subImages: ["./img/panda-socks01.png", "./img/panda-socks-detail1.png", "./img/panda-socks-detail2.png"],
    description: "足元から可愛さを演出するパンダ柄のソックス",
    detail: "足元にさりげない可愛らしさを添えるソックスです。キュートな装飾と程よいボリューム感で、シューズとの相性も良く、コーディネートに自然になじみながら細部まで世界観を完成させてくれます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["23-25cm"],
    colors: ["ホワイト×ブラック"],
    sizeGuide: "サイズ: 23cm〜25cm<br>丈: かかとから約15cm"
  },

  "choco_bonnet": {
    name: "クラシカル・ショコラボンネット",
    price: 3700,
    category: "lolita",
    mainImage: "./img/chocolat-classic-lace-bonnet.png",
    subImages: ["./img/chocolat-classic-lace-bonnet.png", "./img/chocolat-classic-lace-bonnet-detail1.png", "./img/chocolat-classic-lace-bonnet-detail2.png", "./img/chocolat-classic-lace-bonnet-detail3.png"],
    description: "おだやかなショコラカラーのアイテムを",
    detail: "深みのある色合いと柔らかな素材感が魅力のボンネットです。顔周りを優しく包み込み、ロリータスタイルを一層引き立てます。落ち着いた印象の中に甘さを秘めた、長く愛用できるアイテムです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["Free"],
    colors: ["ショコラブラウン"],
    sizeGuide: "フリーサイズ"
  },

  "choco_dress": {
    name: "クラシカル・ショコラドレス",
    price: 8500,
    category: "lolita",
    mainImage: "./img/classical-chocolat-dress.png",
    subImages: ["./img/classical-chocolat-dress.png", "./img/classical-chocolat-dress-detail1.png", "./img/classical-chocolat-dress-detail2.png", "./img/classical-chocolat-dress-detail3.png", "./img/classical-chocolat-dress-detail4.png", "./img/classical-chocolat-dress-detail5.png", "./img/classical-chocolat-dress-detail6.png"],
    description: "まるでチョコレートのような柔らかな質感とともに",
    detail: "チョコレートのような温かみのあるカラーが印象的なドレスです。控えめな装飾と美しいラインで上品さを際立たせ、甘すぎないデザインが大人のロリータスタイルにも自然に馴染みます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["S", "M", "L"],
    colors: ["ブラウン"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  },

  "rose_dress": {
    name: "ローズ・ドールドレス",
    price: 11000,
    category: "lolita",
    mainImage: "./img/rose-doll-dress.png",
    subImages: ["./img/rose-doll-dress.png", "./img/rose-doll-dress-detail1.png", "./img/rose-doll-dress-detail2.png", "./img/rose-doll-dress-detail3.png", "./img/rose-doll-dress-detail4.png", "./img/rose-doll-dress-detail5.png", "./img/rose-doll-dress-detail6.png"],
    description: "細かく施された刺繍とレースに思わずうっとりする一着",
    detail: "まるでアンティークドールのような佇まいを叶える華やかなドレスです。レースやフリルを贅沢に使用し、細部まで物語性を感じさせる仕上がりで、特別な日の主役として記憶に残る装いを演出します。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["S", "M", "L"],
    colors: ["ローズ"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  },

  "mantle_set": {
    name: "カーディナル・ユース・マントセット",
    price: 9800,
    category: "ouji",
    mainImage: "./img/Cardinal-Youth-Mantle-set.png",
    subImages: ["./img/Cardinal-Youth-Mantle-set.png", "./img/Cardinal-Youth-Mantle-set-detail1.png", "./img/Cardinal-Youth-Mantle-set-detail2.png", "./img/Cardinal-Youth-Mantle-set-detail3.png", "./img/Cardinal-Youth-Mantle-set-detail4.png", "./img/Cardinal-Youth-Mantle-set-detail5.png"],
    description: "エレガントなレースとリボンのあしらいを",
    detail: "厳かな雰囲気を纏う存在感のあるマントセットです。重厚感のある配色とディテールが特別な世界観を完成させ、コーディネートの主役として唯一無二の装いを楽しめます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["S", "M", "L"],
    colors: ["レッド", "ブルー"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  },

  "cross_beret": {
    name: "ホーリーベレー帽",
    price: 2800,
    category: "ouji",
    mainImage: "./img/holy-cross-beret.png",
    subImages: ["./img/holy-cross-beret.png", "./img/holy-cross-beret-detail1.png"],
    description: "クロスチャームのついた可憐なアイテム",
    detail: "柔らかなフォルムと上品な装飾が魅力のベレー帽です。シンプルながらもコーディネートに気品を添え、季節を問わず取り入れやすい万能なアイテムです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["Free"],
    colors: ["レッド", "ブルー"],
    sizeGuide: "フリーサイズ"
  },

  "scarlet_mantle": {
    name: "スカーレット・フードマントセット",
    price: 13000,
    category: "ouji",
    mainImage: "./img/scarlet-hood-mantle.png",
    subImages: ["./img/scarlet-hood-mantle.png", "./img/scarlet-hood-mantle-detail1.png", "./img/scarlet-hood-mantle-detail2.png", "./img/scarlet-hood-mantle-detail3.png", "./img/scarlet-hood-mantle-detail4.png", "./img/scarlet-hood-mantle-detail5.png", "./img/scarlet-hood-mantle-detail6.png", "./img/scarlet-hood-mantle-detail7.png"],
    description: "金色の刺繍をあしらった豪華な一着",
    detail: "ドラマティックな雰囲気を演出するフード付きマントです。深みのあるカラーと美しいシルエットで物語性のある装いを完成させ、イベントや撮影シーンにもおすすめです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["S", "M", "L"],
    colors: ["レッド"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  },

  "lace_gloves": {
    name: "総レースグローブ",
    price: 1600,
    category: "others",
    mainImage: "./img/lace-gloves.png",
    subImages: ["./img/lace-gloves.png", "./img/lace-gloves-detail1.png"],
    description: "柔らかなレースがあなたの手を優しく包み込む",
    detail: "手元を美しく見せる繊細な総レースグローブです。細かな模様が上品でドレススタイルをさりげなく格上げし、幅広く活躍します。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["Free"],
    colors: ["ホワイト", "ブラック"],
    sizeGuide: "フリーサイズ"
  },

  "ribbon_shoes": {
    name: "ローズ・リボンストラップシューズ",
    price: 3600,
    category: "others",
    mainImage: "./img/rose-ribbon-strap-shoes.png",
    subImages: ["./img/rose-ribbon-strap-shoes.png", "./img/rose-ribbon-strap-shoes-detail1.png"],
    description: "足元に咲く一凛のバラと",
    detail: "足元に華やかさを添えるリボン付きストラップシューズです。安定感のあるデザインで履き心地にも配慮し、ドレスとの相性も良くトータルコーディネートを完成させます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["23", "23.5", "24", "24.5", "25"],
    colors: ["ローズ"],
    sizeGuide: "23cm～25cmまで取り揃えています。サイズによりイメージ画像と柄の位置が多少異なる場合があります。"
  },

  "lace_tights": {
    name: "ピュアフローラル・レースタイツ",
    price: 2200,
    category: "others",
    mainImage: "./img/pure-white-floral-lace-tights.png",
    subImages: ["./img/pure-white-floral-lace-tights.png", "./img/rose-ribbon-strap-shoes-detail1.png"],
    description: "繊細に花の刺繍が施された一品",
    detail: "繊細なレース模様が脚元を美しく彩るタイツです。軽やかな印象と統一感をコーディネートに与え、シーズンを問わず活躍する万能なアクセントアイテムです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["M-L"],
    colors: ["ホワイト"],
    sizeGuide: "フリーサイズ"
  },

  "rose_lace_bonnet": {
    name: "ローズ・レース・ボンネット",
    price: 3200,
    category: "lolita",
    mainImage: "./img/rose-lace-bonnet.png",
    subImages: ["./img/rose-lace-bonnet.png", "./img/rose-lace-bonnet-detail1.png", "./img/rose-lace-bonnet-detail2.png", "./img/rose-lace-bonnet-detail3.png"],
    description: "美しいレースとバラを添えて",
    detail: "繊細なレース使いが美しい、華やかな印象のボンネットです。ドレスと合わせることで、より完成度の高い世界観を表現でき、写真撮影やイベントシーンにも映える存在感のあるアイテムです。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["Free"],
    colors: ["ローズ"],
    sizeGuide: "フリーサイズ"
  },

  "folklore_cape": {
    name: "スカーレット・フォークロア・ケープセット",
    price: 8200,
    category: "lolita",
    mainImage: "./img/scarlet-folklore-cape-set.png",
    subImages: ["./img/scarlet-folklore-cape-set.png", "./img/scarlet-folklore-cape-set-detail1.png", "./img/scarlet-folklore-cape-set-detail2.png", "./img/scarlet-folklore-cape-set-detail3.png", "./img/scarlet-folklore-cape-set-detail4.png", "./img/scarlet-folklore-cape-set-detail5.png", "./img/scarlet-folklore-cape-set-detail6.png"],
    description: "童話『赤ずきん』をイメージした一着",
    detail: "物語の中の少女を思わせるフォークロア調のケープセットです。重なり合う布の表情や色使いにこだわり、羽織るだけでコーディネートに奥行きと深みを与えてくれます。<br><br>[送料について]<br>全国一律無料<br>※沖縄・一部離島へのお届けの場合、別途送料ご負担いただく場合がございます。<br><br>[素材]<br>ここに使用素材が入ります",
    sizes: ["S", "M", "L"],
    colors: ["レッド"],
    sizeGuide: "S: 着丈90cm / バスト84cm / ウエスト68cm<br>M: 着丈95cm / バスト88cm / ウエスト72cm<br>L: 着丈100cm / バスト92cm / ウエスト76cm"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = PRODUCT_DB[productId];

  if (!product) {
    // 商品が見つからない場合はアラートを出してトップへ
    alert("商品が見つかりません。");
    window.location.href = "index.html";
    return;
  }

  // 基本情報の表示
  document.getElementById('js-item-name').textContent = product.name;
  document.getElementById('js-item-price').innerHTML = `¥${product.price.toLocaleString()}<span>(税込)</span>`;
  document.getElementById('js-item-desc').innerHTML = product.description;
  document.title = `${product.name} | anteeque`;

  const accordionDesc = document.getElementById('js-accordion-desc');
  if (accordionDesc) {
      accordionDesc.innerHTML = product.detail || product.description;
  }

  const sizeGuideInfo = document.getElementById('js-size-guide');
  if (sizeGuideInfo) {
      sizeGuideInfo.innerHTML = product.sizeGuide;
  }

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
          <a href="index.html">HOME</a> &gt; 
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
  // memo:同一カテゴリというより、好みに近いものや同シリーズなどで出せるようになおす
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
              <h3 class="product-name">
                ${item.name}
              </h3>
              <p class="product-price">¥${item.price.toLocaleString()}</p>
            </a>
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
