import { Link } from 'react-router-dom';
import { QrCode, ShoppingBag, Star, Heart, Gift, MapPin, Clock, TrendingUp, ChevronRight, Coffee } from 'lucide-react';
import { mockUser, mockOrders, mockLoyalty, mockCafes } from '../data/mockData';

export default function CustomerDashboard() {
  const recentOrders = mockOrders.slice(0, 3);
  const totalPoints = mockLoyalty.reduce((sum, l) => sum + l.pointsEarned, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Salom, {mockUser.name} 👋</h1>
          <p className="text-gray-500 mt-1">CaféPass ID: {mockUser.cafePassId}</p>
        </div>
        <Link to="/qr" className="btn-primary flex items-center gap-2">
          <QrCode className="w-4 h-4" />
          QR kodim
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{totalPoints.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Jami ballar</div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{mockOrders.length}</div>
          <div className="text-sm text-gray-500">Buyurtmalar</div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">3</div>
          <div className="text-sm text-gray-500">Sevimli kafelar</div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Gift className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900">2</div>
          <div className="text-sm text-gray-500">Sovg'a kartalari</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Active Orders */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Faol buyurtmalar</h2>
            <Link to="/dashboard" className="text-sm text-amber-600 font-medium flex items-center gap-1">
              Barchasi <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentOrders.map(order => (
              <div key={order.id} className="card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{order.cafeName}</div>
                      <div className="text-sm text-gray-500">{order.items.length} mahsulot · {order.type === 'dine-in' ? 'Stol' : 'Olib ketish'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{(order.total / 1000).toFixed(0)}K so'm</div>
                    <span className={`badge ${
                      order.status === 'PENDING' ? 'bg-yellow-50 text-yellow-700' :
                      order.status === 'PREPARING' ? 'bg-blue-50 text-blue-700' :
                      order.status === 'READY' ? 'bg-green-50 text-green-700' :
                      'bg-gray-50 text-gray-600'
                    }`}>
                      {order.status === 'PENDING' ? 'Kutilmoqda' :
                       order.status === 'CONFIRMED' ? 'Tasdiqlangan' :
                       order.status === 'PREPARING' ? 'Tayyorlanmoqda' :
                       order.status === 'READY' ? 'Tayyor' :
                       order.status === 'COMPLETED' ? 'Tugallangan' : order.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Loyalty Programs */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Sodiqlik dasturlari</h2>
              <Link to="/loyalty" className="text-sm text-amber-600 font-medium flex items-center gap-1">
                Barchasi <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {mockLoyalty.map(loyalty => (
                <div key={loyalty.id} className="card">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-gray-900">{loyalty.cafeName}</h3>
                    <span className={`badge ${
                      loyalty.tier === 'gold' ? 'bg-amber-100 text-amber-700' :
                      loyalty.tier === 'silver' ? 'bg-gray-100 text-gray-700' :
                      loyalty.tier === 'platinum' ? 'bg-purple-100 text-purple-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {loyalty.tier === 'gold' ? 'Gold' : loyalty.tier === 'silver' ? 'Silver' : loyalty.tier === 'platinum' ? 'Platinum' : 'Bronze'}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{loyalty.pointsEarned.toLocaleString()} ball</div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all" style={{ width: `${loyalty.tierProgress}%` }} />
                  </div>
                  <div className="text-xs text-gray-500">Keyingi darajagacha {100 - loyalty.tierProgress}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">Tezkor harakatlar</h3>
            <div className="space-y-2">
              <Link to="/search" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Kafe topish</span>
              </Link>
              <Link to="/qr" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center">
                  <QrCode className="w-4 h-4 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">QR kod ko'rsatish</span>
              </Link>
              <Link to="/loyalty" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                  <Gift className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Mukofot olish</span>
              </Link>
              <Link to="/rankings" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Reytinglar</span>
              </Link>
            </div>
          </div>

          {/* Gift Cards */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">Sovg'a kartalari</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded">Coffee Nation</span>
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xl font-bold">65,000 so'm</div>
                <div className="text-xs text-amber-100 mt-1">Qoldiq summa</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">So'nggi faoliyat</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm text-gray-700">+120 ball olindi</div>
                  <div className="text-xs text-gray-500">Coffee Nation · 2 soat oldin</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm text-gray-700">Buyurtma tugallandi</div>
                  <div className="text-xs text-gray-500">Artel Coffee · 5 soat oldin</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm text-gray-700">Mukofot ishlatildi</div>
                  <div className="text-xs text-gray-500">Bepul Flat White · 12 kun oldin</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm text-gray-700">Sharh qoldirildi</div>
                  <div className="text-xs text-gray-500">Coffee Nation · 2 kun oldin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-4">Tavsiya etiladi</h3>
            <div className="space-y-3">
              {mockCafes.slice(0, 2).map(cafe => (
                <Link key={cafe.id} to={`/cafe/${cafe.id}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <img src={cafe.image} alt={cafe.name} className="w-12 h-12 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">{cafe.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500" />
                      {cafe.rating} · {cafe.tags[0]}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
