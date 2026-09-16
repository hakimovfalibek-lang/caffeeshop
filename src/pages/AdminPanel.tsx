import { useState } from 'react';
import { Users, Store, ShoppingBag, CreditCard, Star, Shield, BarChart3, FileText, Settings, AlertTriangle, CheckCircle, Clock, TrendingUp, DollarSign, Eye } from 'lucide-react';
import { mockAnalytics, mockCafes, mockOrders } from '../data/mockData';

export default function AdminPanel() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { key: 'overview', label: 'Umumiy', icon: BarChart3 },
    { key: 'users', label: 'Foydalanuvchilar', icon: Users },
    { key: 'cafes', label: 'Kafelar', icon: Store },
    { key: 'orders', label: 'Buyurtmalar', icon: ShoppingBag },
    { key: 'payments', label: 'To\'lovlar', icon: CreditCard },
    { key: 'reviews', label: 'Sharhlar', icon: Star },
    { key: 'fraud', label: 'Xavfsizlik', icon: Shield },
    { key: 'reports', label: 'Hisobotlar', icon: FileText },
    { key: 'audit', label: 'Audit jurnal', icon: Eye },
    { key: 'settings', label: 'Tizim', icon: Settings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <p className="text-gray-500 text-sm mt-1">CaféPass platforma boshqaruvi</p>
        </div>
        <span className="badge bg-red-50 text-red-700">Admin sessiyasi</span>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {sections.map(section => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === section.key
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-4">
          {/* Overview */}
          {activeSection === 'overview' && (
            <div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-500">Foydalanuvchilar</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">52,847</div>
                  <div className="text-xs text-green-600 mt-1">+2,340 shu oy</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-4 h-4 text-purple-600" />
                    <span className="text-xs text-gray-500">Kafelar</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">523</div>
                  <div className="text-xs text-green-600 mt-1">+18 shu oy</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-500">Oylik daromad</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">156.8M</div>
                  <div className="text-xs text-green-600 mt-1">UZS</div>
                </div>
                <div className="card">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBag className="w-4 h-4 text-amber-600" />
                    <span className="text-xs text-gray-500">Buyurtmalar</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">18,247</div>
                  <div className="text-xs text-green-600 mt-1">+12% o'tgan oyga</div>
                </div>
              </div>

              {/* Platform Stats */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-4">Platforma holati</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">API Server</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">99.9% uptime</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">Database</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">Normal</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">Redis Queue</span>
                      </div>
                      <span className="text-sm text-green-600 font-medium">12 vazifa</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Fon vazifalar</span>
                      </div>
                      <span className="text-sm text-amber-600 font-medium">3 kutmoqda</span>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-4">Obuna rejalar</h3>
                  <div className="space-y-3">
                    {[
                      { plan: 'Starter', count: 312, revenue: 0 },
                      { plan: 'Business', count: 156, revenue: 46644000 },
                      { plan: 'Enterprise', count: 55, revenue: 43890000 },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.plan}</div>
                          <div className="text-xs text-gray-500">{item.count} kafe</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{(item.revenue / 1000000).toFixed(1)}M</div>
                          <div className="text-xs text-gray-500">so'm/oy</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-4">So'nggi faoliyat</h3>
                <div className="space-y-3">
                  {[
                    { action: 'Yangi kafe ro\'yxatdan o\'tdi', detail: 'Matcha Lab', time: '5 daqiqa oldin', type: 'cafe' },
                    { action: 'To\'lov qabul qilindi', detail: 'Coffee Nation - Business', time: '12 daqiqa oldin', type: 'payment' },
                    { action: 'Firibgarlik aniqlandi', detail: 'Takroriy ball operatsiyasi', time: '1 soat oldin', type: 'fraud' },
                    { action: 'Yangi foydalanuvchi', detail: '+234 yangi ro\'yxatdan o\'tish', time: '3 soat oldin', type: 'user' },
                    { action: 'Tizim yangilandi', detail: 'v2.4.1 deploy qilindi', time: '6 soat oldin', type: 'system' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.type === 'fraud' ? 'bg-red-50' :
                        item.type === 'payment' ? 'bg-green-50' :
                        item.type === 'cafe' ? 'bg-purple-50' :
                        item.type === 'user' ? 'bg-blue-50' : 'bg-gray-50'
                      }`}>
                        {item.type === 'fraud' ? <AlertTriangle className="w-4 h-4 text-red-600" /> :
                         item.type === 'payment' ? <DollarSign className="w-4 h-4 text-green-600" /> :
                         item.type === 'cafe' ? <Store className="w-4 h-4 text-purple-600" /> :
                         item.type === 'user' ? <Users className="w-4 h-4 text-blue-600" /> :
                         <Settings className="w-4 h-4 text-gray-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{item.action}</div>
                        <div className="text-xs text-gray-500">{item.detail}</div>
                      </div>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Users */}
          {activeSection === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Foydalanuvchilar</h2>
                <div className="flex gap-2">
                  <input type="text" placeholder="Qidirish..." className="input !py-2 text-sm w-48" />
                </div>
              </div>
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">52,847</div>
                  <div className="text-sm text-gray-500">Jami</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">18,234</div>
                  <div className="text-sm text-gray-500">Faol (7 kun)</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-blue-600">2,340</div>
                  <div className="text-sm text-gray-500">Yangi (oy)</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-red-600">23</div>
                  <div className="text-sm text-gray-500">Bloklangan</div>
                </div>
              </div>
              <div className="card">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="pb-3">Foydalanuvchi</th>
                      <th className="pb-3">Telefon</th>
                      <th className="pb-3">CaféPass ID</th>
                      <th className="pb-3">Ballar</th>
                      <th className="pb-3">Holat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Aziz Karimov', phone: '+998901234567', id: 'CP-2847-UXBQ', points: 1730, status: 'active' },
                      { name: 'Malika Rahimova', phone: '+998901234568', id: 'CP-3921-KLMN', points: 890, status: 'active' },
                      { name: 'Jasur Toshmatov', phone: '+998901234569', id: 'CP-1054-PQRS', points: 2340, status: 'active' },
                      { name: 'Nilufar Saidova', phone: '+998901234570', id: 'CP-5678-TUVW', points: 450, status: 'active' },
                      { name: 'Bekzod Aliyev', phone: '+998901234571', id: 'CP-9012-XYZA', points: 120, status: 'blocked' },
                    ].map((user, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0">
                        <td className="py-3 text-sm font-medium text-gray-900">{user.name}</td>
                        <td className="py-3 text-sm text-gray-600">{user.phone}</td>
                        <td className="py-3 text-sm font-mono text-gray-600">{user.id}</td>
                        <td className="py-3 text-sm text-amber-600 font-medium">{user.points}</td>
                        <td className="py-3">
                          <span className={`badge ${user.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            {user.status === 'active' ? 'Faol' : 'Bloklangan'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Cafes */}
          {activeSection === 'cafes' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Hamkor kafelar</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">523</div>
                  <div className="text-sm text-gray-500">Jami kafelar</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">489</div>
                  <div className="text-sm text-gray-500">Faol obuna</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-amber-600">34</div>
                  <div className="text-sm text-gray-500">Trial</div>
                </div>
              </div>
              <div className="space-y-3">
                {mockCafes.map(cafe => (
                  <div key={cafe.id} className="card flex items-center gap-4 !p-4">
                    <img src={cafe.image} alt={cafe.name} className="w-14 h-14 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900">{cafe.name}</div>
                      <div className="text-sm text-gray-500">{cafe.address}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{cafe.branches.length} filial</span>
                        <span className="text-xs text-gray-300">|</span>
                        <span className="text-xs text-amber-600">★ {cafe.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="badge bg-green-50 text-green-700">Faol</span>
                      <div className="text-xs text-gray-500 mt-1">Business</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Orders */}
          {activeSection === 'orders' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Barcha buyurtmalar</h2>
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">18,247</div>
                  <div className="text-sm text-gray-500">Jami (oy)</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">16,890</div>
                  <div className="text-sm text-gray-500">Tugallangan</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-yellow-600">234</div>
                  <div className="text-sm text-gray-500">Jarayonda</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-red-600">123</div>
                  <div className="text-sm text-gray-500">Bekor qilingan</div>
                </div>
              </div>
              <div className="card">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                      <th className="pb-3">ID</th>
                      <th className="pb-3">Kafe</th>
                      <th className="pb-3">Turi</th>
                      <th className="pb-3">Summa</th>
                      <th className="pb-3">Holat</th>
                      <th className="pb-3">Sana</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map(order => (
                      <tr key={order.id} className="border-b border-gray-50 last:border-0">
                        <td className="py-3 text-sm font-mono text-gray-600">#{order.id.slice(-4)}</td>
                        <td className="py-3 text-sm text-gray-900">{order.cafeName}</td>
                        <td className="py-3 text-sm text-gray-600">{order.type}</td>
                        <td className="py-3 text-sm font-medium text-gray-900">{(order.total / 1000).toFixed(0)}K</td>
                        <td className="py-3">
                          <span className={`badge ${
                            order.status === 'COMPLETED' ? 'bg-green-50 text-green-700' :
                            order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700' :
                            order.status === 'PREPARING' ? 'bg-blue-50 text-blue-700' :
                            'bg-gray-50 text-gray-600'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString('uz')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Payments */}
          {activeSection === 'payments' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">To'lovlar va obunalar</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">156.8M</div>
                  <div className="text-sm text-gray-500">Oylik daromad (UZS)</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">90.5M</div>
                  <div className="text-sm text-gray-500">Obuna to'lovlari</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-amber-600">66.3M</div>
                  <div className="text-sm text-gray-500">Qo'shimcha xizmatlar</div>
                </div>
              </div>
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-4">So'nggi to'lovlar</h3>
                <div className="space-y-3">
                  {[
                    { cafe: 'Coffee Nation', plan: 'Business', amount: 299000, date: '2024-12-22', status: 'paid' },
                    { cafe: 'Artel Coffee', plan: 'Enterprise', amount: 799000, date: '2024-12-21', status: 'paid' },
                    { cafe: 'Toshkent Brunch', plan: 'Business', amount: 299000, date: '2024-12-20', status: 'paid' },
                    { cafe: 'Samarqand Choyxonasi', plan: 'Business', amount: 299000, date: '2024-12-19', status: 'pending' },
                    { cafe: 'Matcha Lab', plan: 'Starter', amount: 0, date: '2024-12-18', status: 'trial' },
                  ].map((payment, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{payment.cafe}</div>
                        <div className="text-xs text-gray-500">{payment.plan} · {payment.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {payment.amount > 0 ? `${(payment.amount / 1000).toFixed(0)}K so'm` : 'Bepul'}
                        </div>
                        <span className={`text-xs ${
                          payment.status === 'paid' ? 'text-green-600' :
                          payment.status === 'pending' ? 'text-yellow-600' : 'text-blue-600'
                        }`}>
                          {payment.status === 'paid' ? 'To\'langan' : payment.status === 'pending' ? 'Kutilmoqda' : 'Trial'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeSection === 'reviews' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sharhlar moderatsiyasi</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-gray-900">4,567</div>
                  <div className="text-sm text-gray-500">Jami sharhlar</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">4,234</div>
                  <div className="text-sm text-gray-500">Tasdiqlangan</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-500">Tekshirilmoqda</div>
                </div>
              </div>
              <div className="card">
                <p className="text-sm text-gray-500 text-center py-8">
                  Barcha sharhlar avtomatik moderatsiya qilinadi. Shubhali sharhlar qo'lda tekshiriladi.
                </p>
              </div>
            </div>
          )}

          {/* Fraud / Security */}
          {activeSection === 'fraud' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Xavfsizlik va firibgarlik</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="card text-center">
                  <div className="text-2xl font-bold text-red-600">3</div>
                  <div className="text-sm text-gray-500">Faol ogohlantirish</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-yellow-600">7</div>
                  <div className="text-sm text-gray-500">Tekshirilmoqda</div>
                </div>
                <div className="card text-center">
                  <div className="text-2xl font-bold text-green-600">156</div>
                  <div className="text-sm text-gray-500">Yechilgan (oy)</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { type: 'Takroriy ball operatsiyasi', cafe: 'Coffee Nation', severity: 'high', time: '1 soat oldin' },
                  { type: 'G\'ayritabiiy faollik', cafe: 'Noma\'lum foydalanuvchi', severity: 'medium', time: '3 soat oldin' },
                  { type: 'QR kod qayta ishlatish', cafe: 'Artel Coffee', severity: 'low', time: '5 soat oldin' },
                ].map((alert, i) => (
                  <div key={i} className={`card border-l-4 ${
                    alert.severity === 'high' ? 'border-l-red-500' :
                    alert.severity === 'medium' ? 'border-l-yellow-500' : 'border-l-blue-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className={`w-5 h-5 ${
                          alert.severity === 'high' ? 'text-red-500' :
                          alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                        }`} />
                        <div>
                          <div className="font-medium text-gray-900">{alert.type}</div>
                          <div className="text-sm text-gray-500">{alert.cafe} · {alert.time}</div>
                        </div>
                      </div>
                      <button className="text-sm text-amber-600 font-medium">Ko'rish</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports */}
          {activeSection === 'reports' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Hisobotlar</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Oylik daromad hisoboti', desc: '2024-yil dekabr', type: 'financial' },
                  { title: 'Foydalanuvchi o\'sishi', desc: 'So\'nggi 6 oy', type: 'growth' },
                  { title: 'Kafe samaradorligi', desc: 'Top 50 kafe reytingi', type: 'performance' },
                  { title: 'Sodiqlik dasturi natijalari', desc: 'Ball aylanmasi va mukofotlar', type: 'loyalty' },
                  { title: 'Xavfsizlik hisoboti', desc: 'Aniqlangan holatlar va yechimlar', type: 'security' },
                  { title: 'Obuna tahlili', desc: 'Rejalar bo\'yicha daromad', type: 'subscription' },
                ].map((report, i) => (
                  <div key={i} className="card-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <h3 className="font-medium text-gray-900">{report.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{report.desc}</p>
                    <button className="text-sm text-amber-600 font-medium mt-3 flex items-center gap-1">
                      Yuklab olish <TrendingUp className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audit */}
          {activeSection === 'audit' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Audit jurnal</h2>
              <div className="card">
                <div className="space-y-3">
                  {[
                    { action: 'Ball qo\'shildi', user: 'System', target: 'Aziz K. (+120 ball)', time: '2024-12-22 14:30:00', ip: '10.0.1.45' },
                    { action: 'Mukofot ishlatildi', user: 'Aziz K.', target: 'Bepul Flat White (-500 ball)', time: '2024-12-22 10:15:00', ip: '45.132.67.89' },
                    { action: 'Buyurtma yaratildi', user: 'Aziz K.', target: 'Order #003 - Samarqand Choyxonasi', time: '2024-12-22 15:00:00', ip: '45.132.67.89' },
                    { action: 'Admin kirish', user: 'admin@cafepass.uz', target: 'Admin panelga kirish', time: '2024-12-22 09:00:00', ip: '10.0.1.12' },
                    { action: 'Kafe sozlamalari o\'zgartirildi', user: 'Akmal Y.', target: 'Coffee Nation - Ish vaqti', time: '2024-12-21 18:30:00', ip: '45.132.67.120' },
                    { action: 'Firibgarlik aniqlandi', user: 'System', target: 'Takroriy operatsiya - ID: 4521', time: '2024-12-21 16:45:00', ip: 'system' },
                  ].map((entry, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{entry.action}</span>
                          <span className="text-xs text-gray-400">by {entry.user}</span>
                        </div>
                        <div className="text-sm text-gray-600">{entry.target}</div>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-gray-400">{entry.time}</span>
                          <span className="text-xs text-gray-400 font-mono">{entry.ip}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings */}
          {activeSection === 'settings' && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Tizim sozlamalari</h2>
              <div className="space-y-4">
                <div className="card">
                  <h3 className="font-medium text-gray-900 mb-4">Umumiy sozlamalar</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Valyuta</div>
                        <div className="text-xs text-gray-500">Asosiy valyuta: UZS (O'zbek so'mi)</div>
                      </div>
                      <span className="badge bg-gray-100 text-gray-700">UZS</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Vaqt zonasi</div>
                        <div className="text-xs text-gray-500">Server: UTC, Ko'rsatish: Asia/Tashkent</div>
                      </div>
                      <span className="badge bg-gray-100 text-gray-700">UTC+5</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Tillar</div>
                        <div className="text-xs text-gray-500">O'zbek (asosiy), Rus, Ingliz</div>
                      </div>
                      <span className="badge bg-gray-100 text-gray-700">3 ta</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Pul saqlash formati</div>
                        <div className="text-xs text-gray-500">Minor unit (tiyin) + currency code</div>
                      </div>
                      <span className="badge bg-green-50 text-green-700">Faol</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3 className="font-medium text-gray-900 mb-4">Xavfsizlik</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Rate limiting</div>
                        <div className="text-xs text-gray-500">100 so'rov/daqiqa per user</div>
                      </div>
                      <span className="badge bg-green-50 text-green-700">Faol</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">QR kod muddati</div>
                        <div className="text-xs text-gray-500">30 soniya, imzolangan, bir martalik</div>
                      </div>
                      <span className="badge bg-green-50 text-green-700">30s</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <div className="text-sm font-medium text-gray-900">Idempotentlik</div>
                        <div className="text-xs text-gray-500">Barcha muhim operatsiyalarda faol</div>
                      </div>
                      <span className="badge bg-green-50 text-green-700">Faol</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
