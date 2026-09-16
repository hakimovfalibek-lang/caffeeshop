import { Link, useLocation } from 'react-router-dom';
import { Coffee, Search, Trophy, QrCode, LayoutDashboard, Store, Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../App';

export default function Navigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userType, setUserType } = useApp();

  const isLanding = location.pathname === '/';
  if (isLanding) return null;

  const navItems = userType === 'customer' ? [
    { path: '/dashboard', label: 'Bosh sahifa', icon: LayoutDashboard },
    { path: '/search', label: 'Kafelar', icon: Search },
    { path: '/loyalty', label: 'Sodiqlik', icon: Trophy },
    { path: '/rankings', label: 'Reyting', icon: Trophy },
    { path: '/qr', label: 'QR Kod', icon: QrCode },
  ] : userType === 'cafe_admin' ? [
    { path: '/cafe-admin', label: 'Boshqaruv', icon: Store },
  ] : [
    { path: '/admin', label: 'Admin', icon: Shield },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">CaféPass</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </div>

          {/* User type switcher */}
          <div className="hidden md:flex items-center gap-2">
            <select
              value={userType}
              onChange={e => setUserType(e.target.value as typeof userType)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
            >
              <option value="customer">Mijoz</option>
              <option value="cafe_admin">Kafe boshqaruv</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <select
                value={userType}
                onChange={e => setUserType(e.target.value as typeof userType)}
                className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
              >
                <option value="customer">Mijoz rejimi</option>
                <option value="cafe_admin">Kafe boshqaruv</option>
                <option value="admin">Admin panel</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
