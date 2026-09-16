import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import Landing from './pages/Landing';
import CustomerDashboard from './pages/CustomerDashboard';
import CafeSearch from './pages/CafeSearch';
import CafeProfile from './pages/CafeProfile';
import OrderPage from './pages/OrderPage';
import LoyaltyPage from './pages/LoyaltyPage';
import RankingsPage from './pages/RankingsPage';
import CafeAdmin from './pages/CafeAdmin';
import AdminPanel from './pages/AdminPanel';
import QRCode from './pages/QRCode';
import Navigation from './components/Navigation';

interface AppContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (v: boolean) => void;
  userType: 'customer' | 'cafe_admin' | 'admin';
  setUserType: (v: 'customer' | 'cafe_admin' | 'admin') => void;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userType: 'customer',
  setUserType: () => {},
});

export const useApp = () => useContext(AppContext);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userType, setUserType] = useState<'customer' | 'cafe_admin' | 'admin'>('customer');

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, userType, setUserType }}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={isAuthenticated ? <CustomerDashboard /> : <Navigate to="/" />} />
            <Route path="/search" element={<CafeSearch />} />
            <Route path="/cafe/:id" element={<CafeProfile />} />
            <Route path="/order/:cafeId" element={<OrderPage />} />
            <Route path="/loyalty" element={<LoyaltyPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/qr" element={<QRCode />} />
            <Route path="/cafe-admin" element={<CafeAdmin />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
