/**
 * ジュンテンドーサイトのデータ
 */

const storeData = {
  '京都府': [
    { name: '西舞鶴モール店', postal: '〒624-0831', address: '京都府舞鶴市女布2番172', tel: '0773-78-2050' },
    { name: 'マイン峰山店', postal: '〒627-0005', address: '京都府京丹後市峰山町新町1701番地', tel: '0772-69-2287' },
    { name: '網野店', postal: '〒629-3113', address: '京都府京丹後市網野町小浜小字勝山78番地2', tel: '0772-79-2027' },
    { name: '福知山店', postal: '〒620-0926', address: '京都府福知山市新庄11番1', tel: '0773-25-2140' },
    { name: '綾部店', postal: '〒623-0011', address: '京都府綾部市青野町西中屋30番地', tel: '0773-40-2035' },
    { name: '宮津店', postal: '〒626-0041', address: '京都府宮津市鶴賀2060番地104', tel: '0772-22-8077' }
  ],
  '大阪府': [
    { name: '大阪本店', postal: '〒530-0001', address: '大阪府大阪市北区梅田1-1-1', tel: '06-1234-5678' },
    { name: '堺店', postal: '〒590-0001', address: '大阪府堺市堺区大町1-1-1', tel: '072-123-4567' }
  ],
  '兵庫県': [
    { name: '神戸店', postal: '〒650-0001', address: '兵庫県神戸市中央区三宮町1-1-1', tel: '078-123-4567' },
    { name: '姫路店', postal: '〒670-0001', address: '兵庫県姫路市本町1-1-1', tel: '079-123-4567' }
  ],
  '奈良県': [
    { name: '奈良店', postal: '〒630-0001', address: '奈良県奈良市登大路町1-1', tel: '0742-12-3456' }
  ],
  '和歌山県': [
    { name: '和歌山店', postal: '〒640-0001', address: '和歌山県和歌山市中央1-1-1', tel: '073-123-4567' }
  ],
  '鳥取県': [
    { name: '鳥取店', postal: '〒680-0001', address: '鳥取県鳥取市西町1-1-1', tel: '0857-12-3456' }
  ],
  '島根県': [
    { name: '松江店', postal: '〒690-0001', address: '島根県松江市朝日町1-1-1', tel: '0852-12-3456' }
  ],
  '岡山県': [
    { name: '岡山店', postal: '〒700-0001', address: '岡山県岡山市北区表町1-1-1', tel: '086-123-4567' }
  ],
  '広島県': [
    { name: '広島店', postal: '〒730-0001', address: '広島県広島市中区本通1-1-1', tel: '082-123-4567' }
  ],
  '山口県': [
    { name: '山口店', postal: '〒753-0001', address: '山口県山口市中央1-1-1', tel: '083-123-4567' }
  ]
};

const prefectureImages = {
  '京都府': 'https://placehold.co/500x400/ef4444/ffffff?text=京都府',
  '大阪府': 'https://placehold.co/500x400/3b82f6/ffffff?text=大阪府',
  '兵庫県': 'https://placehold.co/500x400/10b981/ffffff?text=兵庫県',
  '奈良県': 'https://placehold.co/500x400/f59e0b/ffffff?text=奈良県',
  '和歌山県': 'https://placehold.co/500x400/8b5cf6/ffffff?text=和歌山県',
  '鳥取県': 'https://placehold.co/500x400/ec4899/ffffff?text=鳥取県',
  '島根県': 'https://placehold.co/500x400/14b8a6/ffffff?text=島根県',
  '岡山県': 'https://placehold.co/500x400/f97316/ffffff?text=岡山県',
  '広島県': 'https://placehold.co/500x400/6366f1/ffffff?text=広島県',
  '山口県': 'https://placehold.co/500x400/a855f7/ffffff?text=山口県'
};

const navItems = [
  { name: 'ホーム', href: '#home' },
  { name: 'お知らせ', href: '#news' },
  { name: '商品情報', href: '#products' },
  { name: '店舗情報', href: '#stores' },
  { name: '法人のみなさまへ', href: '#corporate' },
  { name: '会社概要', href: '#about' }
];

const newsData = [
  { category: 'キャンペーン・フェア', date: '2025.06.06', title: 'フマキラーキャンペーン実施中' },
  { category: 'キャンペーン・フェア', date: '2025.05.27', title: '6月のポイントサービスデー' },
  { category: 'キャンペーン・フェア', date: '2025.03.11', title: '農業資材フェア第二弾開催中！' },
  { category: '店舗からのお知らせ', date: '2025.01.23', title: '新南陽店 営業再開のお知らせ' },
  { category: 'その他のお知らせ', date: '2024.09.25', title: 'いきいきポイント付与ルール変更のお知らせ' }
];
