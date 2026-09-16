import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, ChevronRight, Heart, Share2, Navigation, Wifi, Car, Laptop, Sun } from 'lucide-react';
import { useState } from 'react';
import { mockCafes, mockMenuItems, mockReviews } from '../data/mockData';

export default function CafeProfile() {
  const { id } = useParams();
  const cafe = mockCafes.find(c => c.id === id);
  const [activeTab, setActiveTab] = useState<'menu' | 'reviews' | 'info'>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!cafe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Kafe topilmadi</h2>
        <Link to="/search" className="text-amber-600 mt-2 inline-block">Qidirishga qaytish</Link>
      </div>
    );
  }

  const menuItems = mockMenuItems.filter(item => item.cafeId === cafe.id);
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  const filteredMenu = selectedCategory ? menuItems.filter(item => item.category === selectedCategory) : menuItems;
  const cafeReviews = mockReviews.filter(r => r.cafeId === cafe.id);

  const amenityIcons: Record<string, any> = {
    'Wi-Fi': Wifi, 'Parking': Car, 'Laptop-friendly': Laptop, 'Terrace': Sun,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden mb-8 h-64 sm:h-80">
        <img src={cafe.image} alt={cafe.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`badge ${cafe.isOpen ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                  {cafe.isOpen ? 'Ochiq' : 'Yopiq'}
                </span>
                <span className="text-white/80 text-sm">{cafe.openTime}–{cafe.closeTime}</span>
              </div>
              <h1 className="text-3xl font-bold text-white">{cafe.name}</h1>
              <div className="flex items-center gap-3 mt-2 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {cafe.rating} ({cafe.reviewCount} sharh)
                </span>
                <span>·</span>
                <span>{'₽'.repeat(cafe.priceLevel)}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {cafe.city}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isFavorite ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="w-10 h-10 bg-white/20 text-white hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-6">
            {[
              { key: 'menu', label: 'Menyu' },
              { key: 'reviews', label: `Sharhlar (${cafeReviews.length})` },
              { key: 'info', label: 'Ma\'lumot' },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Menu Tab */}
          {activeTab === 'menu' && (
            <div>
              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    !selectedCategory ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Barchasi
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Items */}
              <div className="space-y-3">
                {filteredMenu.map(item => (
                  <div key={item.id} className="card-hover flex gap-4 !p-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-0.5">{item.description}</p>
                        </div>
                        {!item.isAvailable && (
                          <span className="badge bg-red-50 text-red-600">Mavjud emas</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900">{(item.price / 1000).toFixed(0)}K so'm</span>
                          {item.calories && <span className="text-xs text-gray-400">{item.calories} kcal</span>}
                        </div>
                        {item.isAvailable && (
                          <Link
                            to={`/order/${cafe.id}`}
                            className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1"
                          >
                            Buyurtma <ChevronRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredMenu.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Bu kategoriyada mahsulotlar topilmadi
                </div>
              )}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {/* Rating Summary */}
              <div className="card">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">{cafe.rating}</div>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className={`w-4 h-4 ${s <= Math.round(cafe.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{cafe.reviewCount} sharh</div>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map(star => (
                      <div key={star} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-3">{star}</span>
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-amber-400 h-2 rounded-full"
                            style={{ width: `${star === 5 ? 65 : star === 4 ? 25 : star === 3 ? 7 : 3}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              {cafeReviews.map(review => (
                <div key={review.id} className="card">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-700 font-medium text-sm">{review.userName.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{review.userName}</span>
                          {review.isVerified && (
                            <span className="badge bg-green-50 text-green-700 text-xs">Tasdiqlangan</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString('uz')}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">{review.comment}</p>
                </div>
              ))}

              {/* Write Review */}
              <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-amber-300 hover:text-amber-600 transition-colors">
                + Sharh qoldirish
              </button>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3">Manzil</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-700">{cafe.address}</p>
                    <p className="text-sm text-gray-500">{cafe.city}</p>
                  </div>
                </div>
                <button className="mt-3 text-sm text-amber-600 font-medium flex items-center gap-1">
                  <Navigation className="w-3 h-3" /> Yo'nalish olish
                </button>
              </div>

              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3">Ish vaqti</h3>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-gray-700">Har kuni {cafe.openTime}–{cafe.closeTime}</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3">Bog'lanish</h3>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-700">{cafe.phone}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold text-gray-900 mb-3">Qulayliklar</h3>
                <div className="flex flex-wrap gap-2">
                  {cafe.amenities.map(amenity => {
                    const Icon = amenityIcons[amenity] || Wifi;
                    return (
                      <span key={amenity} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700">
                        <Icon className="w-3.5 h-3.5" />
                        {amenity}
                      </span>
                    );
                  })}
                </div>
              </div>

              {cafe.branches.length > 1 && (
                <div className="card">
                  <h3 className="font-semibold text-gray-900 mb-3">Filiallar ({cafe.branches.length})</h3>
                  <div className="space-y-3">
                    {cafe.branches.map(branch => (
                      <div key={branch.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div>
                          <div className="font-medium text-gray-900">{branch.name}</div>
                          <div className="text-sm text-gray-500">{branch.address}</div>
                        </div>
                        <span className="text-xs text-gray-500">{branch.openTime}–{branch.closeTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order CTA */}
          <div className="card bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
            <h3 className="font-semibold text-gray-900 mb-2">Buyurtma berish</h3>
            <p className="text-sm text-gray-600 mb-4">Stolga yoki olib ketish uchun buyurtma bering</p>
            <Link to={`/order/${cafe.id}`} className="btn-primary w-full text-center block">
              Buyurtma berish
            </Link>
          </div>

          {/* Loyalty */}
          <div className="card">
            <h3 className="font-semibold text-gray-900 mb-3">Sodiqlik dasturi</h3>
            <div className="text-sm text-gray-600 mb-3">
              Har {10}K so'm sarflangan pull uchun 1 ball
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Bepul kofe</span>
                <span className="font-medium text-amber-600">500 ball</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">20% chegirma</span>
                <span className="font-medium text-amber-600">800 ball</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Maxsus desert</span>
                <span className="font-medium text-amber-600">1000 ball</span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="card !p-0 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Xarita</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
