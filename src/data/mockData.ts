import { Cafe, MenuItem, Order, LoyaltyProgram, GiftCard, Review, Ranking, AnalyticsData, Campaign } from '../types';

export const mockUser = {
  id: 'usr_001',
  phone: '+998901234567',
  name: 'Aziz Karimov',
  cafePassId: 'CP-2847-UXBQ',
  createdAt: '2024-03-15T10:00:00Z',
};

export const mockCafes: Cafe[] = [
  {
    id: 'cafe_001',
    name: 'Coffee Nation',
    description: 'Zamonaviy specialty kofe uyi. Har bir finjon — san\'at.',
    address: 'Amir Temur ko\'chasi, 45',
    city: 'Toshkent',
    phone: '+998712345678',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
    rating: 4.8,
    reviewCount: 234,
    priceLevel: 3,
    tags: ['Specialty', 'Kofe', 'Desert', 'Wi-Fi'],
    openTime: '08:00',
    closeTime: '23:00',
    isOpen: true,
    latitude: 41.311081,
    longitude: 69.279737,
    amenities: ['Wi-Fi', 'Terrace', 'Parking', 'Laptop-friendly'],
    branches: [
      { id: 'br_001', cafeId: 'cafe_001', name: 'Markaziy', address: 'Amir Temur ko\'chasi, 45', phone: '+998712345678', latitude: 41.311081, longitude: 69.279737, openTime: '08:00', closeTime: '23:00' },
      { id: 'br_002', cafeId: 'cafe_001', name: 'Chilonzor', address: 'Bunyodkor ko\'chasi, 12', phone: '+998712345679', latitude: 41.298, longitude: 69.22, openTime: '09:00', closeTime: '22:00' },
    ]
  },
  {
    id: 'cafe_002',
    name: 'Artel Coffee',
    description: 'O\'zbekistonning birinchi specialty kofe brendi. Mahalliy va xalqaro donlar.',
    address: 'Mustaqillik shoh ko\'chasi, 108',
    city: 'Toshkent',
    phone: '+998712345680',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800',
    rating: 4.9,
    reviewCount: 567,
    priceLevel: 3,
    tags: ['Specialty', 'Kofe', 'Non-uskulik'],
    openTime: '07:00',
    closeTime: '22:00',
    isOpen: true,
    latitude: 41.314,
    longitude: 69.283,
    amenities: ['Wi-Fi', 'Parking', 'Takeaway'],
    branches: [
      { id: 'br_003', cafeId: 'cafe_002', name: 'Flagship', address: 'Mustaqillik shoh ko\'chasi, 108', phone: '+998712345680', latitude: 41.314, longitude: 69.283, openTime: '07:00', closeTime: '22:00' },
    ]
  },
  {
    id: 'cafe_003',
    name: 'Toshkent Brunch',
    description: 'Ertalabdan kechgacha — brunch madaniyati. Yangi mahsulotlar, issiq muhit.',
    address: 'Navoiy ko\'chasi, 22',
    city: 'Toshkent',
    phone: '+998712345682',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    rating: 4.6,
    reviewCount: 189,
    priceLevel: 2,
    tags: ['Brunch', 'Nonushta', 'Salomat'],
    openTime: '08:00',
    closeTime: '16:00',
    isOpen: false,
    latitude: 41.316,
    longitude: 69.275,
    amenities: ['Wi-Fi', 'Terrace', 'Kids-friendly'],
    branches: [
      { id: 'br_004', cafeId: 'cafe_003', name: 'Navoiy', address: 'Navoiy ko\'chasi, 22', phone: '+998712345682', latitude: 41.316, longitude: 69.275, openTime: '08:00', closeTime: '16:00' },
    ]
  },
  {
    id: 'cafe_004',
    name: 'Samarqand Choyxonasi',
    description: 'An\'anaviy o\'zbek oshxonasi zamonaviy talqinda. Milliy taomlar va noyob muhit.',
    address: 'Shota Rustaveli ko\'chasi, 55',
    city: 'Toshkent',
    phone: '+998712345684',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    rating: 4.7,
    reviewCount: 412,
    priceLevel: 2,
    tags: ['Milliy', 'Ovqat', 'Oila'],
    openTime: '10:00',
    closeTime: '23:00',
    isOpen: true,
    latitude: 41.308,
    longitude: 69.290,
    amenities: ['Parking', 'Oila uchun', 'Banket zali'],
    branches: [
      { id: 'br_005', cafeId: 'cafe_004', name: 'Rustaveli', address: 'Shota Rustaveli ko\'chasi, 55', phone: '+998712345684', latitude: 41.308, longitude: 69.290, openTime: '10:00', closeTime: '23:00' },
      { id: 'br_006', cafeId: 'cafe_004', name: 'Samarqand', address: 'Registon ko\'chasi, 3', phone: '+998662345684', latitude: 39.654, longitude: 66.976, openTime: '10:00', closeTime: '23:00' },
    ]
  },
  {
    id: 'cafe_005',
    name: 'Matcha Lab',
    description: 'Yapon matcha madaniyati. Matcha latte, desertlar va zen muhit.',
    address: 'Shavkat Mirziyoyev ko\'chasi, 8',
    city: 'Toshkent',
    phone: '+998712345686',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800',
    rating: 4.5,
    reviewCount: 98,
    priceLevel: 3,
    tags: ['Matcha', 'Yapon', 'Desert'],
    openTime: '09:00',
    closeTime: '21:00',
    isOpen: true,
    latitude: 41.320,
    longitude: 69.285,
    amenities: ['Wi-Fi', 'Instagram spot'],
    branches: [
      { id: 'br_007', cafeId: 'cafe_005', name: 'Markaziy', address: 'Shavkat Mirziyoyev ko\'chasi, 8', phone: '+998712345686', latitude: 41.320, longitude: 69.285, openTime: '09:00', closeTime: '21:00' },
    ]
  },
  {
    id: 'cafe_006',
    name: 'Baker Street',
    description: 'Uyda pishirilgan nonushta va desertlar. Har kuni yangi.',
    address: 'Bobur ko\'chasi, 33',
    city: 'Toshkent',
    phone: '+998712345688',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    rating: 4.4,
    reviewCount: 156,
    priceLevel: 2,
    tags: ['Nonushta', 'Desert', 'Kofe'],
    openTime: '07:30',
    closeTime: '20:00',
    isOpen: true,
    latitude: 41.305,
    longitude: 69.270,
    amenities: ['Wi-Fi', 'Takeaway', 'Delivery'],
    branches: [
      { id: 'br_008', cafeId: 'cafe_006', name: 'Bobur', address: 'Bobur ko\'chasi, 33', phone: '+998712345688', latitude: 41.305, longitude: 69.270, openTime: '07:30', closeTime: '20:00' },
    ]
  },
];

export const mockMenuItems: MenuItem[] = [
  { id: 'mi_001', cafeId: 'cafe_001', name: 'Flat White', description: 'Ikki shotli espresso, ipak sut ko\'pigi', price: 28000, currency: 'UZS', category: 'Kofe', isAvailable: true, calories: 120 },
  { id: 'mi_002', cafeId: 'cafe_001', name: 'V60 Ethiopia', description: 'Yakkalik manba, yengil mevali notalar', price: 35000, currency: 'UZS', category: 'Kofe', isAvailable: true, calories: 5 },
  { id: 'mi_003', cafeId: 'cafe_001', name: 'Matcha Latte', description: 'Yapon ceremonial matcha, sut', price: 32000, currency: 'UZS', category: 'Kofe', isAvailable: true, calories: 150 },
  { id: 'mi_004', cafeId: 'cafe_001', name: 'Croissant', description: 'Fransuz sariyog\'li kruassan', price: 22000, currency: 'UZS', category: 'Desert', isAvailable: true, calories: 280 },
  { id: 'mi_005', cafeId: 'cafe_001', name: 'Cheesecake', description: 'Nyuyork uslubida, yangi mevalar bilan', price: 38000, currency: 'UZS', category: 'Desert', isAvailable: true, calories: 420 },
  { id: 'mi_006', cafeId: 'cafe_001', name: 'Avocado Toast', description: 'Sourdough non, avokado, pomegranate', price: 42000, currency: 'UZS', category: 'Nonushta', isAvailable: true, calories: 350 },
  { id: 'mi_007', cafeId: 'cafe_001', name: 'Acai Bowl', description: 'Acai mevasi, granola, yangi mevalar', price: 48000, currency: 'UZS', category: 'Nonushta', isAvailable: false, calories: 380 },
  { id: 'mi_008', cafeId: 'cafe_001', name: 'Limonade', description: 'Yangi siqilgan limon, yalpiz, muz', price: 18000, currency: 'UZS', category: 'Ichimlik', isAvailable: true, calories: 90 },
];

export const mockOrders: Order[] = [
  {
    id: 'ord_001',
    userId: 'usr_001',
    cafeId: 'cafe_001',
    cafeName: 'Coffee Nation',
    branchId: 'br_001',
    items: [
      { id: 'oi_001', menuItemId: 'mi_001', name: 'Flat White', price: 28000, quantity: 1 },
      { id: 'oi_002', menuItemId: 'mi_004', name: 'Croissant', price: 22000, quantity: 2 },
    ],
    total: 72000,
    currency: 'UZS',
    status: 'COMPLETED',
    type: 'dine-in',
    tableNumber: 5,
    createdAt: '2024-12-20T10:30:00Z',
    completedAt: '2024-12-20T11:00:00Z',
  },
  {
    id: 'ord_002',
    userId: 'usr_001',
    cafeId: 'cafe_002',
    cafeName: 'Artel Coffee',
    branchId: 'br_003',
    items: [
      { id: 'oi_003', menuItemId: 'mi_002', name: 'V60 Ethiopia', price: 35000, quantity: 1 },
    ],
    total: 35000,
    currency: 'UZS',
    status: 'PREPARING',
    type: 'takeaway',
    createdAt: '2024-12-22T14:15:00Z',
  },
  {
    id: 'ord_003',
    userId: 'usr_001',
    cafeId: 'cafe_004',
    cafeName: 'Samarqand Choyxonasi',
    branchId: 'br_005',
    items: [
      { id: 'oi_004', menuItemId: 'mi_006', name: 'Avocado Toast', price: 42000, quantity: 1 },
      { id: 'oi_005', menuItemId: 'mi_008', name: 'Limonade', price: 18000, quantity: 2 },
    ],
    total: 78000,
    currency: 'UZS',
    status: 'PENDING',
    type: 'dine-in',
    tableNumber: 12,
    createdAt: '2024-12-22T15:00:00Z',
  },
];

export const mockLoyalty: LoyaltyProgram[] = [
  {
    id: 'loy_001',
    cafeId: 'cafe_001',
    cafeName: 'Coffee Nation',
    pointsPerSpend: 10,
    pointsEarned: 1250,
    tier: 'silver',
    tierProgress: 62,
    rewards: [
      { id: 'rw_001', name: 'Bepul Flat White', description: 'Har qanday Flat White bepul', pointsRequired: 500, isRedeemed: true, redeemedAt: '2024-12-10T09:00:00Z' },
      { id: 'rw_002', name: '20% chegirma', description: 'Keyingi buyurtmangizga 20% chegirma', pointsRequired: 800, isRedeemed: false },
      { id: 'rw_003', name: 'Maxsus desert', description: 'Chefning maxsus deserti', pointsRequired: 1000, isRedeemed: false },
      { id: 'rw_004', name: 'VIP tadbir', description: 'Kofe degustatsiyasiga taklif', pointsRequired: 2000, isRedeemed: false },
    ],
  },
  {
    id: 'loy_002',
    cafeId: 'cafe_002',
    cafeName: 'Artel Coffee',
    pointsPerSpend: 8,
    pointsEarned: 480,
    tier: 'bronze',
    tierProgress: 35,
    rewards: [
      { id: 'rw_005', name: 'Bepul Americano', description: 'Klassik americano bepul', pointsRequired: 400, isRedeemed: false },
      { id: 'rw_006', name: '15% chegirma', description: 'Keyingi buyurtmangizga 15% chegirma', pointsRequired: 600, isRedeemed: false },
    ],
  },
];

export const mockGiftCards: GiftCard[] = [
  {
    id: 'gc_001',
    code: 'GIFT-A7X2-K9M4',
    originalAmount: 100000,
    remainingAmount: 65000,
    currency: 'UZS',
    status: 'active',
    expiresAt: '2025-06-15T00:00:00Z',
    cafeId: 'cafe_001',
    cafeName: 'Coffee Nation',
  },
  {
    id: 'gc_002',
    code: 'GIFT-B3Y8-P2N7',
    originalAmount: 50000,
    remainingAmount: 0,
    currency: 'UZS',
    status: 'used',
    expiresAt: '2025-03-01T00:00:00Z',
    cafeId: 'cafe_002',
    cafeName: 'Artel Coffee',
  },
];

export const mockReviews: Review[] = [
  { id: 'rv_001', userId: 'usr_001', userName: 'Aziz K.', cafeId: 'cafe_001', rating: 5, comment: 'Ajoyib kofe va muhit! Flat White eng yaxshisi.', createdAt: '2024-12-20T11:30:00Z', isVerified: true, orderId: 'ord_001' },
  { id: 'rv_002', userId: 'usr_002', userName: 'Malika R.', cafeId: 'cafe_001', rating: 4, comment: 'Yaxshi joy, lekin biroz kutish kerak bo\'ldi.', createdAt: '2024-12-19T16:00:00Z', isVerified: true, orderId: 'ord_010' },
  { id: 'rv_003', userId: 'usr_003', userName: 'Jasur T.', cafeId: 'cafe_001', rating: 5, comment: 'V60 ajoyib! Barista juda professional.', createdAt: '2024-12-18T10:00:00Z', isVerified: false },
  { id: 'rv_004', userId: 'usr_004', userName: 'Nilufar S.', cafeId: 'cafe_002', rating: 5, comment: 'Artel har doim sifatli. Tavsiya qilaman!', createdAt: '2024-12-17T14:00:00Z', isVerified: true, orderId: 'ord_011' },
];

export const mockRankings: Ranking[] = [
  { id: 'rnk_001', userId: 'usr_001', userName: 'Aziz K.', visits: 24, purchases: 38, totalSpent: 2450000, pointsEarned: 1730, rank: 3, period: 'monthly' },
  { id: 'rnk_002', userId: 'usr_005', userName: 'Sardor M.', visits: 31, purchases: 45, totalSpent: 3120000, pointsEarned: 2340, rank: 1, period: 'monthly' },
  { id: 'rnk_003', userId: 'usr_006', userName: 'Kamola N.', visits: 28, purchases: 41, totalSpent: 2890000, pointsEarned: 2050, rank: 2, period: 'monthly' },
  { id: 'rnk_004', userId: 'usr_007', userName: 'Bekzod A.', visits: 19, purchases: 28, totalSpent: 1980000, pointsEarned: 1420, rank: 4, period: 'monthly' },
  { id: 'rnk_005', userId: 'usr_008', userName: 'Dilnoza U.', visits: 17, purchases: 25, totalSpent: 1750000, pointsEarned: 1280, rank: 5, period: 'monthly' },
];

export const mockAnalytics: AnalyticsData = {
  totalRevenue: 45600000,
  totalOrders: 1247,
  totalVisits: 2890,
  newCustomers: 156,
  returningCustomers: 892,
  averageOrderValue: 36500,
  topItems: [
    { name: 'Flat White', count: 342, revenue: 9576000 },
    { name: 'Croissant', count: 289, revenue: 6358000 },
    { name: 'V60 Ethiopia', count: 198, revenue: 6930000 },
    { name: 'Matcha Latte', count: 176, revenue: 5632000 },
    { name: 'Cheesecake', count: 154, revenue: 5852000 },
  ],
  hourlyData: [
    { hour: 7, orders: 12 }, { hour: 8, orders: 45 }, { hour: 9, orders: 78 },
    { hour: 10, orders: 92 }, { hour: 11, orders: 85 }, { hour: 12, orders: 110 },
    { hour: 13, orders: 98 }, { hour: 14, orders: 76 }, { hour: 15, orders: 65 },
    { hour: 16, orders: 58 }, { hour: 17, orders: 72 }, { hour: 18, orders: 88 },
    { hour: 19, orders: 95 }, { hour: 20, orders: 67 }, { hour: 21, orders: 34 },
  ],
  dailyRevenue: [
    { date: '2024-12-16', revenue: 3200000 }, { date: '2024-12-17', revenue: 3800000 },
    { date: '2024-12-18', revenue: 4100000 }, { date: '2024-12-19', revenue: 3600000 },
    { date: '2024-12-20', revenue: 4500000 }, { date: '2024-12-21', revenue: 5200000 },
    { date: '2024-12-22', revenue: 4800000 },
  ],
};

export const mockCampaigns: Campaign[] = [
  { id: 'cmp_001', name: 'Yangi yil sovg\'asi', segment: 'Barcha mijozlar', status: 'active', reach: 1240, conversions: 89, createdAt: '2024-12-15T00:00:00Z' },
  { id: 'cmp_002', name: 'Qaytmayotgan mijozlar', segment: 'Qaytmayotgan mijozlar', status: 'active', reach: 234, conversions: 12, createdAt: '2024-12-18T00:00:00Z' },
  { id: 'cmp_003', name: 'Ertalabki kofe', segment: 'Kofe xaridorlari', status: 'scheduled', reach: 0, conversions: 0, createdAt: '2024-12-20T00:00:00Z' },
  { id: 'cmp_004', name: 'Haftalik chegirma', segment: 'Yuqori qiymatli mijozlar', status: 'completed', reach: 456, conversions: 67, createdAt: '2024-12-10T00:00:00Z' },
];
