import { useState } from 'react';
import { Trophy, Medal, TrendingUp, Crown, Star } from 'lucide-react';
import { mockRankings } from '../data/mockData';

export default function RankingsPage() {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'all-time'>('monthly');

  const periods = [
    { key: 'daily', label: 'Bugun' },
    { key: 'weekly', label: 'Hafta' },
    { key: 'monthly', label: 'Oy' },
    { key: 'all-time', label: 'Umumiy' },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-amber-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-700" />;
    return <span className="text-sm font-medium text-gray-500 w-5 text-center">{rank}</span>;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-500" />
            Reytinglar
          </h1>
          <p className="text-gray-500 mt-1">Eng faol CaféPass mijozlari</p>
        </div>
      </div>

      {/* Period Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-8 max-w-md">
        {periods.map(p => (
          <button
            key={p.key}
            onClick={() => setPeriod(p.key as typeof period)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
              period === p.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
        {/* 2nd place */}
        <div className="card text-center pt-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-xl font-bold text-gray-600">{mockRankings[2]?.userName.charAt(0)}</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-1">
            <Medal className="w-4 h-4 text-gray-400" />
            <span className="font-bold text-lg">2</span>
          </div>
          <div className="font-medium text-gray-900 text-sm">{mockRankings[2]?.userName}</div>
          <div className="text-xs text-gray-500 mt-1">{mockRankings[2]?.visits} tashrif</div>
          <div className="text-xs text-amber-600 font-medium mt-1">{mockRankings[2]?.pointsEarned} ball</div>
        </div>

        {/* 1st place */}
        <div className="card text-center pt-4 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-100">
          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 ring-4 ring-amber-200">
            <span className="text-2xl font-bold text-amber-700">{mockRankings[1]?.userName.charAt(0)}</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-1">
            <Crown className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-xl">1</span>
          </div>
          <div className="font-semibold text-gray-900">{mockRankings[1]?.userName}</div>
          <div className="text-sm text-gray-500 mt-1">{mockRankings[1]?.visits} tashrif</div>
          <div className="text-sm text-amber-600 font-semibold mt-1">{mockRankings[1]?.pointsEarned} ball</div>
        </div>

        {/* 3rd place */}
        <div className="card text-center pt-8">
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-lg font-bold text-orange-600">{mockRankings[3]?.userName.charAt(0)}</span>
          </div>
          <div className="flex items-center justify-center gap-1 mb-1">
            <Medal className="w-4 h-4 text-amber-700" />
            <span className="font-bold text-lg">3</span>
          </div>
          <div className="font-medium text-gray-900 text-sm">{mockRankings[3]?.userName}</div>
          <div className="text-xs text-gray-500 mt-1">{mockRankings[3]?.visits} tashrif</div>
          <div className="text-xs text-amber-600 font-medium mt-1">{mockRankings[3]?.pointsEarned} ball</div>
        </div>
      </div>

      {/* Full Ranking Table */}
      <div className="card">
        <h3 className="font-semibold text-gray-900 mb-4">To'liq reyting</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                <th className="pb-3 pr-4">O'rin</th>
                <th className="pb-3 pr-4">Mijoz</th>
                <th className="pb-3 pr-4 text-right">Tashriflar</th>
                <th className="pb-3 pr-4 text-right">Xaridlar</th>
                <th className="pb-3 pr-4 text-right">Sarf</th>
                <th className="pb-3 text-right">Ballar</th>
              </tr>
            </thead>
            <tbody>
              {mockRankings.map((user) => (
                <tr key={user.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 pr-4">
                    <div className="flex items-center">
                      {getRankIcon(user.rank)}
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-amber-700">{user.userName.charAt(0)}</span>
                      </div>
                      <span className="font-medium text-gray-900 text-sm">{user.userName}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-right text-sm text-gray-700">{user.visits}</td>
                  <td className="py-3 pr-4 text-right text-sm text-gray-700">{user.purchases}</td>
                  <td className="py-3 pr-4 text-right text-sm text-gray-700">{(user.totalSpent / 1000000).toFixed(1)}M</td>
                  <td className="py-3 text-right">
                    <span className="text-sm font-medium text-amber-600">{user.pointsEarned.toLocaleString()}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Position */}
      <div className="card mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold text-amber-800">A</span>
            </div>
            <div>
              <div className="font-medium text-gray-900">Sizning o'rningiz</div>
              <div className="text-sm text-gray-500">Aziz K. · {mockRankings[0].visits} tashrif</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-amber-600">#{mockRankings[0].rank}</div>
            <div className="text-xs text-gray-500">{mockRankings[0].pointsEarned} ball</div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
          <TrendingUp className="w-4 h-4 text-green-500" />
          O'tgan haftaga nisbatan 2 pog'ona yuqori
        </div>
      </div>
    </div>
  );
}
