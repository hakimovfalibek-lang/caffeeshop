import { useState, useEffect } from 'react';
import { QrCode, RefreshCw, Clock, Shield } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function QRCode() {
  const [timer, setTimer] = useState(30);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          handleRefresh();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // Generate a pseudo-random QR pattern
  const generatePattern = () => {
    const pattern = [];
    for (let i = 0; i < 21 * 21; i++) {
      pattern.push(Math.random() > 0.45);
    }
    return pattern;
  };

  const [qrPattern] = useState(generatePattern);

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">CaféPass QR Kodi</h1>
        <p className="text-gray-500">Kafeda ushbu kodni ko'rsating</p>
      </div>

      {/* QR Code Card */}
      <div className="card text-center">
        <div className="inline-block p-6 bg-white rounded-2xl border-2 border-gray-100 mb-6">
          {/* QR Code */}
          <div className={`w-56 h-56 mx-auto relative ${isRefreshing ? 'opacity-50' : 'opacity-100'} transition-opacity`}>
            <div className="grid grid-cols-21 gap-0 w-full h-full" style={{ gridTemplateColumns: 'repeat(21, 1fr)' }}>
              {qrPattern.map((filled, i) => (
                <div
                  key={i}
                  className={`aspect-square ${filled ? 'bg-gray-900' : 'bg-white'}`}
                />
              ))}
            </div>
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                <QrCode className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="mb-6">
          <div className="text-lg font-semibold text-gray-900">{mockUser.name}</div>
          <div className="text-sm text-gray-500 font-mono mt-1">{mockUser.cafePassId}</div>
        </div>

        {/* Timer */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4" />
          <span>Kod {timer} soniyadan keyin yangilanadi</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
          <div
            className="bg-gradient-to-r from-amber-400 to-amber-600 h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${(timer / 30) * 100}%` }}
          />
        </div>

        {/* Refresh button */}
        <button
          onClick={handleRefresh}
          className="btn-secondary flex items-center gap-2 mx-auto"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          Yangilash
        </button>
      </div>

      {/* Security Note */}
      <div className="mt-6 card bg-blue-50 border-blue-100">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-900">Xavfsizlik haqida</h4>
            <p className="text-sm text-blue-700 mt-1">
              QR kod har 30 soniyada yangilanadi va qisqa muddatli amal qiladi. 
              Har bir kod kafe tizimi tomonidan tekshiriladi va bir martalik ishlatiladi.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="card text-center">
          <div className="text-2xl font-bold text-amber-600">1,730</div>
          <div className="text-sm text-gray-500">Jami ballar</div>
        </div>
        <div className="card text-center">
          <div className="text-2xl font-bold text-gray-900">Silver</div>
          <div className="text-sm text-gray-500">Joriy daraja</div>
        </div>
      </div>
    </div>
  );
}
