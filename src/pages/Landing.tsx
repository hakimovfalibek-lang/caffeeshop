import { Link } from 'react-router-dom';
import { Coffee, QrCode, Gift, Star, TrendingUp, Users, Shield, Zap, ChevronRight, MapPin, CreditCard } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">CaféPass</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard" className="hidden sm:inline-flex text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2">
              Kirish
            </Link>
            <Link to="/dashboard" className="btn-primary text-sm !py-2.5 !px-5">
              Boshlash
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                O'zbekiston bo'ylab 500+ kafe
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Bitta raqamli identifikatsiya.{' '}
                <span className="gradient-text">Har bir kafe.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                CaféPass — mijoz va kafelar o'rtasidagi munosabatlarni yagona raqamli platformaga birlashtiradi. 
                Buyurtma bering, ballar yig'ing, mukofotlar oling.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/dashboard" className="btn-primary text-base">
                  Hoziroq boshlash
                </Link>
                <Link to="/search" className="btn-secondary text-base">
                  Kafelarni ko'rish
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-gray-100">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Hamkor kafelar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-500">Faol mijozlar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.8★</div>
                  <div className="text-sm text-gray-500">O'rtacha reyting</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                      <QrCode className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">CaféPass ID</div>
                      <div className="text-sm text-gray-500">CP-2847-UXBQ</div>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`w-4 h-4 rounded-sm ${Math.random() > 0.4 ? 'bg-white' : 'bg-transparent'}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Joriy ballar</span>
                    <span className="font-bold text-amber-600">1,250 ball</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full" style={{ width: '62%' }} />
                  </div>
                  <div className="text-xs text-gray-500 text-center">Silver darajagacha 38% qoldi</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">+120 ball</div>
                  <div className="text-xs text-gray-500">Yangi buyurtma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mijozlar uchun
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bitta ilova orqali barcha sevimli kafelaringizga kiring
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: QrCode, title: 'Bir QR kod', desc: 'Barcha hamkor kafelarda o\'zingizni identifikatsiya qiling', color: 'bg-blue-50 text-blue-600' },
              { icon: Gift, title: 'Sodiqlik ballari', desc: 'Har bir xariddan ball yig\'ing va mukofotlar oling', color: 'bg-purple-50 text-purple-600' },
              { icon: CreditCard, title: 'Sovg\'a kartalari', desc: 'Raqamli sovg\'a kartalarini qabul qiling va ishlating', color: 'bg-green-50 text-green-600' },
              { icon: MapPin, title: 'Kafe qidirish', desc: 'Yaqin atrofdagi kafelarni toping va filtrlang', color: 'bg-orange-50 text-orange-600' },
              { icon: Star, title: 'Sharhlar', desc: 'Tajribangizni baham ko\'ring va boshqalarga yordam bering', color: 'bg-pink-50 text-pink-600' },
              { icon: TrendingUp, title: 'Reytinglar', desc: 'Eng faol mijozlar reytingida o\'z o\'rningizni eglang', color: 'bg-amber-50 text-amber-600' },
            ].map((feature, i) => (
              <div key={i} className="card-hover group">
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Business */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Kafelar uchun to'liq boshqaruv tizimi
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Mijozlar, buyurtmalar, menyu, sodiqlik, kampaniyalar, tahliliy ma'lumotlar — 
                  hammasi bir joyda. Sun'iy intellekt yordamchisi bilan.
                </p>
                <div className="space-y-4">
                  {[
                    'Buyurtmalar va menyu boshqaruvi',
                    'Sodiqlik dasturi va mukofotlar',
                    'Mijoz segmentlari va kampaniyalar',
                    'Tahliliy ma\'lumotlar va hisobotlar',
                    'AI yordamchi va avtomatlashtirish',
                    'Xodimlar va rollar boshqaruvi',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/cafe-admin" className="inline-flex items-center gap-2 mt-8 bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                  Kafe panelini ko'rish
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <Users className="w-8 h-8 text-amber-400 mb-3" />
                  <div className="text-2xl font-bold">2,890</div>
                  <div className="text-sm text-gray-400">Jami tashriflar</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                  <div className="text-2xl font-bold">45.6M</div>
                  <div className="text-sm text-gray-400">Oylik savdo (UZS)</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <Shield className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <Zap className="w-8 h-8 text-purple-400 mb-3" />
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-sm text-gray-400">Buyurtmalar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Oddiy va shaffof narxlar
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Mijozlar uchun doimo bepul. Kafelar uchun obuna asosida.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: 'Bepul', period: 'mijozlar uchun', features: ['QR kod', 'Kafe qidirish', 'Buyurtma berish', 'Ballar yig\'ish'], highlight: false },
              { name: 'Business', price: '299,000', period: 'so\'m/oy', features: ['Cheksiz buyurtmalar', 'Sodiqlik tizimi', 'Tahliliy ma\'lumotlar', 'Kampaniyalar', 'AI yordamchi', '5 xodimgacha'], highlight: true },
              { name: 'Enterprise', price: '799,000', period: 'so\'m/oy', features: ['Barcha Business imkoniyatlar', 'Cheksiz filiallar', 'Kengaytirilgan API', 'Maxsus integratsiyalar', 'Maxsus menejer', 'Cheksiz xodimlar'], highlight: false },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 text-left ${plan.highlight ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-xl shadow-amber-500/20 scale-105' : 'bg-white border border-gray-200'}`}>
                {plan.highlight && <div className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full inline-block mb-3">Eng mashhur</div>}
                <h3 className={`text-xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  {plan.price !== 'Bepul' && <span className={`text-sm ${plan.highlight ? 'text-amber-100' : 'text-gray-500'}`}>{plan.period}</span>}
                  {plan.price === 'Bepul' && <span className={`text-sm ${plan.highlight ? 'text-amber-100' : 'text-gray-500'}`}>{plan.period}</span>}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-amber-200' : 'text-amber-500'}`} />
                      <span className={plan.highlight ? 'text-amber-50' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 py-2.5 rounded-xl font-medium text-sm transition-colors ${plan.highlight ? 'bg-white text-amber-700 hover:bg-amber-50' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  Boshlash
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            CaféPass bilan boshlang
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Telefon raqamingiz orqali 30 soniyada ro'yxatdan o'ting
          </p>
          <Link to="/dashboard" className="btn-primary text-lg inline-flex items-center gap-2">
            Hoziroq boshlash
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">CaféPass</span>
              </div>
              <p className="text-sm text-gray-400">
                Bitta raqamli identifikatsiya. Har bir kafe.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Mahsulot</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/search" className="hover:text-white">Kafelar</Link></li>
                <li><Link to="/loyalty" className="hover:text-white">Sodiqlik</Link></li>
                <li><Link to="/rankings" className="hover:text-white">Reytinglar</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Biznes</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/cafe-admin" className="hover:text-white">Kafe paneli</Link></li>
                <li><a href="#" className="hover:text-white">Narxlar</a></li>
                <li><a href="#" className="hover:text-white">Integratsiyalar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kompaniya</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Biz haqimizda</a></li>
                <li><a href="#" className="hover:text-white">Bog'lanish</a></li>
                <li><a href="#" className="hover:text-white">Maxfiylik</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800 text-sm text-gray-500 text-center">
            © 2024 CaféPass. Barcha huquqlar himoyalangan. O'zbekiston.
          </div>
        </div>
      </footer>
    </div>
  );
}
