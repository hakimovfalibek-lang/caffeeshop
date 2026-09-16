export interface User {
  id: string;
  phone: string;
  name: string;
  avatar?: string;
  cafePassId: string;
  createdAt: string;
}

export interface Cafe {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceLevel: 1 | 2 | 3 | 4;
  tags: string[];
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  latitude: number;
  longitude: number;
  amenities: string[];
  branches: Branch[];
}

export interface Branch {
  id: string;
  cafeId: string;
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  openTime: string;
  closeTime: string;
}

export interface MenuItem {
  id: string;
  cafeId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  image?: string;
  isAvailable: boolean;
  calories?: number;
}

export interface Order {
  id: string;
  userId: string;
  cafeId: string;
  cafeName: string;
  branchId: string;
  items: OrderItem[];
  total: number;
  currency: string;
  status: OrderStatus;
  type: 'dine-in' | 'takeaway' | 'pickup';
  tableNumber?: number;
  createdAt: string;
  completedAt?: string;
}

export interface OrderItem {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';

export interface LoyaltyProgram {
  id: string;
  cafeId: string;
  cafeName: string;
  pointsPerSpend: number;
  pointsEarned: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  tierProgress: number;
  rewards: Reward[];
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  isRedeemed: boolean;
  redeemedAt?: string;
}

export interface GiftCard {
  id: string;
  code: string;
  originalAmount: number;
  remainingAmount: number;
  currency: string;
  status: 'active' | 'used' | 'expired';
  expiresAt: string;
  cafeId: string;
  cafeName: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  cafeId: string;
  rating: number;
  comment: string;
  createdAt: string;
  isVerified: boolean;
  orderId?: string;
}

export interface Ranking {
  id: string;
  userId: string;
  userName: string;
  visits: number;
  purchases: number;
  totalSpent: number;
  pointsEarned: number;
  rank: number;
  period: 'daily' | 'weekly' | 'monthly' | 'all-time';
}

export interface AnalyticsData {
  totalRevenue: number;
  totalOrders: number;
  totalVisits: number;
  newCustomers: number;
  returningCustomers: number;
  averageOrderValue: number;
  topItems: { name: string; count: number; revenue: number }[];
  hourlyData: { hour: number; orders: number }[];
  dailyRevenue: { date: string; revenue: number }[];
}

export interface Campaign {
  id: string;
  name: string;
  segment: string;
  status: 'draft' | 'active' | 'completed' | 'scheduled';
  reach: number;
  conversions: number;
  createdAt: string;
}
