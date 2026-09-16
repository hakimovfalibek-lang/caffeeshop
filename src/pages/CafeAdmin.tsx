import { useState } from 'react';
import { BarChart3, Users, ShoppingBag, Star, Gift, Settings, TrendingUp, Clock, Plus, Search, Bot, ChevronRight, DollarSign, Coffee, Package } from 'lucide-react';
import { mockAnalytics, mockOrders, mockCampaigns, mockMenuItems, mockReviews } from '../data/mockData';

export default function CafeAdmin() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { key: 'overview', label: 'Umumiy', icon: BarChart3 },
    { key: 'orders', label: 'Buyurtmalar', icon: ShoppingBag },
    { key: 'menu', label: 'Menyu', icon: Coffee },
    { key: 'customers', label: 'Mijozlar', icon: Users },
    { key: 'loyalty', label: 'Sodiqlik', icon: Gift },
    { key: 'campaigns', label: 'Kampaniyalar', icon: TrendingUp },
    { key: 'reviews', label: 'Sharhlar', icon: Star },
    { key: 'ai', label: 'AI Yordamchi', icon: Bot },
    { key: 'settings', label: 'Sozlamalar', icon: Settings },
  ];

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `${(amount / 1000).toFixed(0)}K`;
    return amount.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Coffee Nation</h1>
          <p className="text-gray-500 text-sm mt-1">Kafe boshqaruv paneli</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge bg-green-50 text-green-700">
            <Clock className="w-3 h-3 mr-1" /> Ochiq
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {sections.map(section => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === section.key
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Overview */}
          {activeSection === 'overview' && (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-500">Bugungi savdo</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{formatCurrency(mockAnalytics.totalRevenue / 7)}</div>
                  <div className="text-xs text-green-600 mt-1">+12% o'tgan haftaga</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-500">Buyurtmalar</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{Math.floor(mockAnalytics.totalOrders / 7)}</div>
                  <div className="text-xs text-green-600 mt-1">+8% o'tgan haftaga</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-gray-500">Yangi mijozlar</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">{Math.floor(mockAnalytics.newCustomers / 4)}</div>
                  <div className="text-xs text-green-600 mt-1">+15% o'tgan oyga</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-amber-600" />
                    <span className="text-xs text-gray-500">Reyting</span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">4.8</div>
                  <div className="text-xs text-gray-500 mt-1">234 sharh</div>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="card mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Haftalik savdo</h3>
                <div className="flex items-end gap-2 h-40">
                  {mockAnalytics.dailyRevenue.map((day, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg transition-all hover:from-amber-600 hover:to-amber-500"
                        style={{ height: `${(day.revenue / Math.max(...mockAnalytics.dailyRevenue.map(d => d.revenue))) * 100}%` }}
                      />
                      <span className="text-xs text-gray-500">{new Date(day.date).toLocaleDateString('uz', { weekday: 'short' })}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Items & Hourly */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-4">Top mahsulotlar</h3>
                  <div className="space-y-3">
                    {mockAnalytics.topItems.slice(0, 5).map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-400 w-4">{i + 1}</span>
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{item.count}</div>
                          <div className="text-xs text-gray-500">{formatCurrency(item.revenue)} so'm</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-4">Eng faol vaqtlar</h3>
                  <div className="flex items-end gap-1 h-32">
                    {mockAnalytics.hourlyData.map((hour, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                        <div
                          className={`w-full rounded-t transition-all ${
                            hour.orders > 80 ? 'bg-amber-500' : hour.orders > 50 ? 'bg-amber-300' : 'bg-amber-100'
                          }`}
                          style={{ height: `${(hour.orders / 110) * 100}%` }}
                        />
                        {i % 3 === 0 && <span className="text-[10px] text-gray-400">{hour.hour}</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">Soat (07:00–21:00)</div>
                </div>
              </div>
            </div>
          )}

          {/* Orders */}
          {activeSection === 'orders' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Buyurtmalar</h2>
                <div className="flex gap-2">
                  <span className="badge bg-yellow-50 text-yellow-700">3 kutmoqda</span>
                  <span className="badge bg-blue-50 text-blue-700">2 tayyorlanmoqda</span>
                </div>
              </div>
              <div className="space-y-3">
                {mockOrders.map(order => (
                  <div key={order.id} className="card">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                          <Package className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">#{order.id.slice(-4)}</div>
                          <div className="text-xs text-gray-500">{new Date(order.createdAt).toLocaleString('uz')}</div>
                        </div>
                      </div>
                      <span className={`badge ${
                        order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700' :
                        order.status === 'PREPARING' ? 'bg-blue-50 text-blue-700' :
                        order.status === 'READY' ? 'bg-green-50 text-green-700' :
                        order.status === 'COMPLETED' ? 'bg-gray-50 text-gray-600' :
                        'bg-red-50 text-red-700'
                      }`}>
                        {order.status === 'PENDING' ? 'Kutilmoqda' :
                         order.status === 'PREPARING' ? 'Tayyorlanmoqda' :
                         order.status === 'READY' ? 'Tayyor' :
                         order.status === 'COMPLETED' ? 'Tugallangan' : order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {order.items.map(item => `${item.name} ×${item.quantity}`).join(', ')}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{order.type === 'dine-in' ? `Stol #${order.tableNumber}` : 'Olib ketish'}</span>
                      </div>
                      <span className="font-semibold text-gray-900">{(order.total / 1000).toFixed(0)}K so'm</span>
                    </div>
                    {order.status === 'PENDING' && (
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                          Tasdiqlash
                        </button>
                        <button className="py-2 px-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100">
                          Bekor qilish
                        </button>
                      </div>
                    )}
                    {order.status === 'PREPARING' && (
                      <button className="w-full mt-3 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700">
                        Tayyor deb belgilash
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Menu */}
          {activeSection === 'menu' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Menyu boshqaruvi</h2>
                <button className="btn-primary text-sm !py-2 !px-4 flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Yangi mahsulot
                </button>
              </div>
              <div className="space-y-3">
                {mockMenuItems.map(item => (
                  <div key={item.id} className="card flex items-center gap-4 !p-4">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-7 h-7 text-gray-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.category}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{(item.price / 1000).toFixed(0)}K</div>
                      <span className={`text-xs ${item.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                        {item.isAvailable ? 'Mavjud' : 'Mavjud emas'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customers */}
          {activeSection === 'customers' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Mijozlar</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" placeholder="Qidirish..." className="input pl-10 !py-2 text-sm" />
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">2,890</div>
                  <div className="text-sm text-gray-500">Jami mijozlar</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">892</div>
                  <div className="text-sm text-gray-500">Faol (30 kun)</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-amber-600">156</div>
                  <div className="text-sm text-gray-500">Yangi (shu oy)</div>
                </div>
              </div>
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-4">Mijoz segmentlari</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Yangi mijozlar', count: 156, color: 'bg-blue-500', percent: 15 },
                    { name: 'Faol mijozlar', count: 892, color: 'bg-green-500', percent: 45 },
                    { name: 'Yuqori qiymatli', count: 234, color: 'bg-amber-500', percent: 12 },
                    { name: 'Qaytmayotgan', count: 345, color: 'bg-red-500', percent: 18 },
                    { name: 'Kofe xaridorlari', count: 567, color: 'bg-purple-500', percent: 30 },
                  ].map((segment, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${segment.color}`} />
                      <span className="text-sm text-gray-700 flex-1">{segment.name}</span>
                      <span className="text-sm font-medium text-gray-900">{segment.count}</span>
                      <div className="w-20 bg-gray-100 rounded-full h-1.5">
                        <div className={`${segment.color} h-1.5 rounded-full`} style={{ width: `${segment.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Loyalty */}
          {activeSection === 'loyalty' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sodiqlik sozlamalari</h2>
              <div className="card mb-6">
                <h3 className="font-medium text-gray-900 mb-4">Ball qoidalari</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Ball nisbati</div>
                      <div className="text-xs text-gray-500">Har 10,000 so'm uchun 1 ball</div>
                    </div>
                    <button className="text-sm text-amber-600 font-medium">O'zgartirish</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Ro'yxatdan o'tish bonusi</div>
                      <div className="text-xs text-gray-500">Yangi mijozlarga 50 ball</div>
                    </div>
                    <button className="text-sm text-amber-600 font-medium">O'zgartirish</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="text-sm font-medium text-gray-900">Tug'ilgan kun bonusi</div>
                      <div className="text-xs text-gray-500">100 ball sovg'a</div>
                    </div>
                    <button className="text-sm text-amber-600 font-medium">O'zgartirish</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="font-medium text-gray-900 mb-4">Darajalar</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Bronze', min: 0, benefits: 'Asosiy', color: 'bg-orange-100 text-orange-700' },
                    { name: 'Silver', min: 500, benefits: '5% chegirma', color: 'bg-gray-100 text-gray-700' },
                    { name: 'Gold', min: 1500, benefits: '10% chegirma + bepul kofe', color: 'bg-amber-100 text-amber-700' },
                    { name: 'Platinum', min: 3000, benefits: '15% chegirma + VIP', color: 'bg-purple-100 text-purple-700' },
                  ].map((tier, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <span className={`badge ${tier.color}`}>{tier.name}</span>
                      <div className="flex-1">
                        <div className="text-sm text-gray-700">{tier.min}+ ball</div>
                      </div>
                      <span className="text-xs text-gray-500">{tier.benefits}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Campaigns */}
          {activeSection === 'campaigns' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Kampaniyalar</h2>
                <button className="btn-primary text-sm !py-2 !px-4 flex items-center gap-1">
                  <Plus className="w-4 h-4" /> Yangi kampaniya
                </button>
              </div>
              <div className="space-y-3">
                {mockCampaigns.map(campaign => (
                  <div key={campaign.id} className="card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                      <span className={`badge ${
                        campaign.status === 'active' ? 'bg-green-50 text-green-700' :
                        campaign.status === 'scheduled' ? 'bg-blue-50 text-blue-700' :
                        campaign.status === 'completed' ? 'bg-gray-50 text-gray-600' :
                        'bg-yellow-50 text-yellow-700'
                      }`}>
                        {campaign.status === 'active' ? 'Faol' :
                         campaign.status === 'scheduled' ? 'Rejalashtirilgan' :
                         campaign.status === 'completed' ? 'Tugallangan' : 'Loyiha'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">Segment: {campaign.segment}</div>
                    <div className="flex items-center gap-6 text-sm">
                      <div>
                        <span className="text-gray-500">Qamrov: </span>
                        <span className="font-medium text-gray-900">{campaign.reach.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Konversiya: </span>
                        <span className="font-medium text-green-600">{campaign.conversions}</span>
                      </div>
                      {campaign.reach > 0 && (
                        <div>
                          <span className="text-gray-500">Rate: </span>
                          <span className="font-medium text-amber-600">{((campaign.conversions / campaign.reach) * 100).toFixed(1)}%</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeSection === 'reviews' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sharhlar va baholar</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-3xl font-bold text-amber-600">4.8</div>
                  <div className="flex items-center justify-center gap-0.5 mt-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className={`w-4 h-4 ${s <= 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">234 sharh</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-500 mt-1">Tavsiya qiladi</div>
                </div>
                <div className="card text-center">
                  <div className="text-3xl font-bold text-blue-600">4.9</div>
                  <div className="text-sm text-gray-500 mt-1">Tasdiqlangan sharhlar</div>
                </div>
              </div>
              <div className="space-y-3">
                {mockReviews.filter(r => r.cafeId === 'cafe_001').map(review => (
                  <div key={review.id} className="card">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-amber-700">{review.userName.charAt(0)}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">{review.userName}</span>
                          {review.isVerified && <span className="badge bg-green-50 text-green-700 ml-2 text-xs">Tasdiqlangan</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                    <div className="text-xs text-gray-500 mt-2">{new Date(review.createdAt).toLocaleDateString('uz')}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Assistant */}
          {activeSection === 'ai' && (
            <div>
              <div className="card bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Yordamchi</h3>
                    <p className="text-sm text-gray-500">Savdo, mijozlar va mahsulotlar bo'yicha maslahatchi</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <Bot className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">
                          So'nggi 7 kunda savdo 12% o'sdi. Asosiy sabab — yangi "V60 Ethiopia" mahsuloti. 
                          Bu mahsulot eng tez sotilayotgan 3 ta mahsulotdan biri.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <Bot className="w-4 h-4 text-purple-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-700">
                          345 ta mijoz so'nggi 30 kunda tashrif buyurmagan. Ularga maxsus taklif yuborishni tavsiya qilaman.
                          Kampaniya yaratishni xohlaysizmi?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <input type="text" placeholder="AI dan so'rang..." className="input flex-1" />
                  <button className="btn-primary !py-2.5">Yuborish</button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Savdo tahlili', desc: 'Haftalik natijalarni ko\'rish' },
                  { title: 'Mijoz segmentlari', desc: 'Faol va passiv mijozlar' },
                  { title: 'Mahsulot tahlili', desc: 'Eng yaxshi va yomon mahsulotlar' },
                  { title: 'Kampaniya taklifi', desc: 'Yangi kampaniya loyihasi' },
                ].map((item, i) => (
                  <button key={i} className="card text-left hover:border-purple-200 hover:bg-purple-50/50 transition-colors">
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                    <ChevronRight className="w-4 h-4 text-gray-400 mt-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Settings */}
          {activeSection === 'settings' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sozlamalar</h2>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-medium text-gray-900 mb-4">Kafe ma'lumotlari</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Nomi</label>
                      <input type="text" defaultValue="Coffee Nation" className="input" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Manzil</label>
                      <input type="text" defaultValue="Amir Temur ko'chasi, 45" className="input" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Telefon</label>
                      <input type="text" defaultValue="+998712345678" className="input" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-1 block">Ish vaqti</label>
                      <div className="flex gap-2">
                        <input type="time" defaultValue="08:00" className="input" />
                        <input type="time" defaultValue="23:00" className="input" />
                      </div>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 text-sm">Saqlash</button>
                </div>
                <div className="card">
                  <h3 className="font-medium text-gray-900 mb-4">Xodimlar</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Akmal Yusupov', role: 'Owner', email: 'akmal@coffeenation.uz' },
                      { name: 'Dilshod Rahimov', role: 'Manager', email: 'dilshod@coffeenation.uz' },
                      { name: 'Madina Karimova', role: 'Barista', email: 'madina@coffeenation.uz' },
                    ].map((staff, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-amber-700">{staff.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                            <div className="text-xs text-gray-500">{staff.email}</div>
                          </div>
                        </div>
                        <span className="badge bg-gray-100 text-gray-700">{staff.role}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-secondary mt-3 text-sm flex items-center gap-1">
                    <Plus className="w-4 h-4" /> Xodim qo'shish
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
