import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Clock, Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { mockCafes } from '../data/mockData';

export default function CafeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [showOpenOnly, setShowOpenOnly] = useState(false);

  const allTags = Array.from(new Set(mockCafes.flatMap(c => c.tags)));

  const filteredCafes = mockCafes.filter(cafe => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cafe.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || cafe.tags.includes(selectedTag);
    const matchesPrice = !priceFilter || cafe.priceLevel === priceFilter;
    const matchesOpen = !showOpenOnly || cafe.isOpen;
    return matchesSearch && matchesTag && matchesPrice && matchesOpen;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Kafelarni toping</h1>
        <p className="text-gray-500 mt-1">O'zbekiston bo'ylab hamkor kafelar</p>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Kafe nomi yoki turini qidiring..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="input pl-12"
          />
        </div>
        <button className="btn-secondary flex items-center gap-2 !px-4">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">Filtrlar</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              !selectedTag ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Barchasi
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setShowOpenOnly(!showOpenOnly)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              showOpenOnly ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Clock className="w-3 h-3 inline mr-1" />
            Ochilgan
          </button>
          {[1, 2, 3, 4].map(level => (
            <button
              key={level}
              onClick={() => setPriceFilter(priceFilter === level ? null : level)}
              className={`px-2.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                priceFilter === level ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {'₽'.repeat(level)}
            </button>
          ))}
          <div className="hidden sm:flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="text-sm text-gray-500 mb-4">{filteredCafes.length} ta kafe topildi</div>

      {viewMode === 'grid' ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map(cafe => (
            <Link key={cafe.id} to={`/cafe/${cafe.id}`} className="card-hover group overflow-hidden !p-0">
              <div className="relative h-48 overflow-hidden">
                <img src={cafe.image} alt={cafe.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 right-3">
                  <span className={`badge ${cafe.isOpen ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                    {cafe.isOpen ? 'Ochiq' : 'Yopiq'}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="font-medium">{cafe.rating}</span>
                    <span className="text-white/70">({cafe.reviewCount})</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{cafe.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-1">{cafe.description}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{cafe.address}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {cafe.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                  <span className="text-xs text-gray-400 ml-auto">{'₽'.repeat(cafe.priceLevel)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredCafes.map(cafe => (
            <Link key={cafe.id} to={`/cafe/${cafe.id}`} className="card-hover flex gap-4 !p-4">
              <img src={cafe.image} alt={cafe.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{cafe.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                      <Star className="w-3 h-3 text-amber-500" />
                      {cafe.rating} ({cafe.reviewCount})
                      <span>·</span>
                      {'₽'.repeat(cafe.priceLevel)}
                    </div>
                  </div>
                  <span className={`badge ${cafe.isOpen ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'}`}>
                    {cafe.isOpen ? 'Ochiq' : 'Yopiq'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{cafe.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {cafe.address}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {cafe.openTime}–{cafe.closeTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filteredCafes.length === 0 && (
        <div className="text-center py-16">
          <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Hech narsa topilmadi</h3>
          <p className="text-gray-500">Boshqa kalit so'z yoki filtr bilan qidirib ko'ring</p>
        </div>
      )}
    </div>
  );
}
