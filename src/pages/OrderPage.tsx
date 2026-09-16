import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, ShoppingBag, ArrowLeft, Check, Coffee } from 'lucide-react';
import { mockCafes, mockMenuItems } from '../data/mockData';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function OrderPage() {
  const { cafeId } = useParams();
  const cafe = mockCafes.find(c => c.id === cafeId);
  const menuItems = mockMenuItems.filter(item => item.cafeId === cafeId && item.isAvailable);
  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'pickup'>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const filteredMenu = selectedCategory ? menuItems.filter(item => item.category === selectedCategory) : menuItems;

  const addToCart = (item: typeof menuItems[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(c => {
        if (c.id === id) {
          const newQty = c.quantity + delta;
          return newQty <= 0 ? null : { ...c, quantity: newQty };
        }
        return c;
      }).filter(Boolean) as CartItem[];
    });
  };

  const getItemQuantity = (id: string) => cart.find(c => c.id === id)?.quantity || 0;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Buyurtma qabul qilindi!</h2>
        <p className="text-gray-500 mb-2">Buyurtma raqami: #ORD-{Math.floor(Math.random() * 9000 + 1000)}</p>
        <p className="text-gray-500 mb-8">Kafe tayyorlashni boshladi. Tez orada xabar beramiz.</p>
        <div className="card text-left mb-6">
          <div className="space-y-2">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-700">{item.name} × {item.quantity}</span>
                <span className="text-gray-900 font-medium">{(item.price * item.quantity / 1000).toFixed(0)}K</span>
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100 flex justify-between font-semibold">
              <span>Jami</span>
              <span>{(total / 1000).toFixed(0)}K so'm</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Link to="/dashboard" className="btn-primary flex-1 text-center">Bosh sahifa</Link>
          <Link to="/search" className="btn-secondary flex-1 text-center">Kafelar</Link>
        </div>
      </div>
    );
  }

  if (!cafe) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Kafe topilmadi</h2>
        <Link to="/search" className="text-amber-600 mt-2 inline-block">Qidirishga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to={`/cafe/${cafe.id}`} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> {cafe.name} ga qaytish
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Buyurtma berish</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Menu */}
        <div className="lg:col-span-2">
          {/* Order type */}
          <div className="flex gap-2 mb-6">
            {[
              { key: 'dine-in', label: 'Stolda' },
              { key: 'takeaway', label: 'Olib ketish' },
              { key: 'pickup', label: 'Pickup' },
            ].map(type => (
              <button
                key={type.key}
                onClick={() => setOrderType(type.key as typeof orderType)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  orderType === type.key ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {orderType === 'dine-in' && (
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 block">Stol raqami</label>
              <input
                type="number"
                value={tableNumber}
                onChange={e => setTableNumber(e.target.value)}
                placeholder="Masalan: 5"
                className="input max-w-[200px]"
              />
            </div>
          )}

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-6">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                !selectedCategory ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Barchasi
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="space-y-3">
            {filteredMenu.map(item => {
              const qty = getItemQuantity(item.id);
              return (
                <div key={item.id} className="card flex items-center gap-4 !p-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-8 h-8 text-gray-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.description}</p>
                    <div className="font-semibold text-gray-900 mt-1">{(item.price / 1000).toFixed(0)}K so'm</div>
                  </div>
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center hover:bg-amber-100 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-medium">{qty}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center hover:bg-amber-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Cart Sidebar */}
        <div>
          <div className="card sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
              <h3 className="font-semibold text-gray-900">Savatcha</h3>
              {totalItems > 0 && (
                <span className="badge bg-amber-100 text-amber-700 ml-auto">{totalItems}</span>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8 text-gray-400">
                <ShoppingBag className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-sm">Savatcha bo'sh</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.quantity} × {(item.price / 1000).toFixed(0)}K</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{(item.price * item.quantity / 1000).toFixed(0)}K</span>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mahsulotlar ({totalItems})</span>
                    <span>{(total / 1000).toFixed(0)}K so'm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Xizmat haqqi</span>
                    <span className="text-green-600">Bepul</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-gray-100">
                    <span>Jami</span>
                    <span>{(total / 1000).toFixed(0)}K so'm</span>
                  </div>
                </div>

                <button
                  onClick={placeOrder}
                  className="btn-primary w-full mt-4"
                >
                  Buyurtma berish
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
