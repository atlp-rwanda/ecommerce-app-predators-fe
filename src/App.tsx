import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/LandingPage';
import ProductPage from '../src/pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PasswordComfirmPage from './pages/PasswordConfirminationPage.';
import TwoFactorAuth from '../src/pages/SellerLogin/twoFactorAuth';
import VendorPage from './dashboard/vendor/VendorPage';
import Admin from './dashboard/admin/admin';
import PopupMessage from './pages/PasswordExpirationPage';
import UpdateProduct from '../src/pages/UpdateProduct';
import ProfilePage from './pages/profile/ProfilePage';
import AdminViewUsersPage from './pages/AdminViewUsersPage';
import SearchProduct from '../src/pages/SearchProductPage';
import NotFound from './pages/error/NotFound';
import FetchCarts from '../src/pages/cart/cartData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        <Route
          path="/confirm-password-page"
          element={<PasswordComfirmPage />}
        />
        <Route path="/two-factor" element={<TwoFactorAuth />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        <Route
          path="/confirm-password-page"
          element={<PasswordComfirmPage />}
        />
        <Route path="/two-factor" element={<TwoFactorAuth />} />
        <Route path="/PopupMessage" element={<PopupMessage />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/search-product" element={<SearchProduct />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route path="/cart" element={<FetchCarts />} />
        <Route path="/admin/users" element={<AdminViewUsersPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
