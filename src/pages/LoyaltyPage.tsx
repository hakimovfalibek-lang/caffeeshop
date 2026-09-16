import { useState } from 'react';
import { Star, Gift, Trophy, ChevronRight, Clock, Check } from 'lucide-react';
import { mockLoyalty, mockGiftCards } from '../data/mockData';

export default function LoyaltyPage() {
  const [activeTab, setActiveTab] = useState<'programs' | 'rewards' | 'giftcards'>('programs');
  const [selectedProgram, setSelectedProgram] = useState(mockLoyalty[0]?.id);

  const currentProgram = mockLoyalty.find(l => l.id === selectedProgram);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Sodiqlik va mukofotlar</h1>
      <p className="text-gray-500 mb-8">Barcha kafelardagi ballaringiz va mukofotlaringiz</p>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-8 max-w-md">
        {[
          { key: 'programs', label: 'Dasturlar' },
          { key: 'rewards', label: 'Mukofotlar' },
          { key: 'giftcards', label: 'Sovg\'a kartalari' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Programs Tab */}
      {activeTab === 'programs' && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programs List */}
          <div className="space-y-3">
            {mockLoyalty.map(program => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`w-full text-left card transition-all ${
                  selectedProgram === program.id ? 'border-amber-200 bg-amber-50/50' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{program.cafeName}</h3>
                  <span className={`badge ${
                    program.tier === 'gold' ? 'bg-amber-100 text-amber-700' :
                    program.tier === 'silver' ? 'bg-gray-100 text-gray-700' :
                    program.tier === 'platinum' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {program.tier === 'gold' ? 'Gold' : program.tier === 'silver' ? 'Silver' : program.tier === 'platinum' ? 'Platinum' : 'Bronze'}
                  </span>
                </div>
                <div className="text-xl font-bold text-amber-600">{program.pointsEarned.toLocaleString()} ball</div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-1.5 rounded-full" style={{ width: `${program.tierProgress}%` }} />
                </div>
              </button>
            ))}
          </div>

          {/* Program Details */}
          {currentProgram && (
            <div className="lg:col-span-2">
              <div className="card mb-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{currentProgram.cafeName}</h2>
                    <p className="text-sm text-gray-600 mt-1">Har {currentProgram.pointsPerSpend}K so'm = 1 ball</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-amber-600">{currentProgram.pointsEarned.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">ball</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="w-full bg-white rounded-full h-3">
                      <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full transition-all" style={{ width: `${currentProgram.tierProgress}%` }} />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{currentProgram.tierProgress}%</span>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Bronze</span>
                  <span>Silver</span>
                  <span>Gold</span>
                  <span>Platinum</span>
                </div>
              </div>

              {/* Rewards */}
              <h3 className="font-semibold text-gray-900 mb-4">Mukofotlar</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentProgram.rewards.map(reward => (
                  <div key={reward.id} className={`card ${reward.isRedeemed ? 'opacity-60' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Gift className="w-5 h-5 text-amber-600" />
                      </div>
                      {reward.isRedeemed && (
                        <span className="badge bg-green-50 text-green-700">
                          <Check className="w-3 h-3 mr-1" /> Olindi
                        </span>
                      )}
                    </div>
                    <h4 className="font-medium text-gray-900">{reward.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">{reward.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-amber-600">{reward.pointsRequired} ball</span>
                      {!reward.isRedeemed && (
                        <button
                          disabled={currentProgram.pointsEarned < reward.pointsRequired}
                          className={`text-sm font-medium px-3 py-1 rounded-lg ${
                            currentProgram.pointsEarned >= reward.pointsRequired
                              ? 'bg-amber-600 text-white hover:bg-amber-700'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Olish
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Points History */}
              <h3 className="font-semibold text-gray-900 mt-8 mb-4">Ballar tarixi</h3>
              <div className="space-y-2">
                {[
                  { desc: 'Flat White xaridi', points: '+120', date: 'Bugun, 10:30', type: 'earn' },
                  { desc: 'Bepul Flat White mukofoti', points: '-500', date: '12 Dek, 09:00', type: 'spend' },
                  { desc: 'Croissant xaridi', points: '+80', date: '10 Dek, 14:20', type: 'earn' },
                  { desc: 'V60 Ethiopia xaridi', points: '+150', date: '8 Dek, 11:00', type: 'earn' },
                  { desc: 'Cheesecake xaridi', points: '+160', date: '5 Dek, 16:45', type: 'earn' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.type === 'earn' ? 'bg-green-50' : 'bg-red-50'
                      }`}>
                        {item.type === 'earn' ? <Star className="w-4 h-4 text-green-600" /> : <Gift className="w-4 h-4 text-red-600" />}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.desc}</div>
                        <div className="text-xs text-gray-500">{item.date}</div>
                      </div>
                    </div>
                    <span className={`font-medium ${item.type === 'earn' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.points}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Rewards Tab */}
      {activeTab === 'rewards' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockLoyalty.flatMap(program =>
            program.rewards.filter(r => !r.isRedeemed).map(reward => ({
              ...reward,
              cafeName: program.cafeName,
              canAfford: program.pointsEarned >= reward.pointsRequired,
              currentPoints: program.pointsEarned,
            }))
          ).map(reward => (
            <div key={reward.id} className="card">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Gift className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs text-gray-500">{reward.cafeName}</span>
              </div>
              <h4 className="font-medium text-gray-900">{reward.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{reward.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <span className="text-sm font-medium text-amber-600">{reward.pointsRequired} ball</span>
                  <div className="text-xs text-gray-400">Sizda: {reward.currentPoints}</div>
                </div>
                <button
                  disabled={!reward.canAfford}
                  className={`text-sm font-medium px-3 py-1.5 rounded-lg ${
                    reward.canAfford ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {reward.canAfford ? 'Olish' : `${reward.pointsRequired - reward.currentPoints} ball kerak`}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gift Cards Tab */}
      {activeTab === 'giftcards' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockGiftCards.map(card => (
            <div key={card.id} className={`card ${card.status === 'used' ? 'opacity-60' : ''}`}>
              <div className={`rounded-xl p-5 mb-4 ${
                card.status === 'active' ? 'bg-gradient-to-br from-amber-500 to-amber-700 text-white' :
                card.status === 'used' ? 'bg-gray-200 text-gray-500' :
                'bg-red-100 text-red-700'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded">{card.cafeName}</span>
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold">{(card.remainingAmount / 1000).toFixed(0)}K so'm</div>
                <div className="text-xs opacity-70 mt-1">
                  {card.originalAmount > card.remainingAmount ? `${(card.originalAmount / 1000).toFixed(0)}K dan qoldiq` : 'To\'liq qiymat'}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-mono">{card.code}</span>
                <span className={`badge ${
                  card.status === 'active' ? 'bg-green-50 text-green-700' :
                  card.status === 'used' ? 'bg-gray-50 text-gray-600' :
                  'bg-red-50 text-red-700'
                }`}>
                  {card.status === 'active' ? 'Faol' : card.status === 'used' ? 'Ishlatilgan' : 'Muddati o\'tgan'}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Amal qilish: {new Date(card.expiresAt).toLocaleDateString('uz')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
