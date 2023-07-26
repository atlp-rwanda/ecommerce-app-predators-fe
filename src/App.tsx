import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/LandingPage';
import LoginSuccess from './components/login/LoginSuccess';
import LoginError from './components/login/LoginError';
import ProductPage from '../src/pages/ProductPage';
import ModalButton from './components/chat/ModalButton';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import PasswordComfirmPage from './pages/PasswordConfirminationPage.';
import TwoFactorAuth from '../src/pages/SellerLogin/twoFactorAuth';
import VendorPage from './dashboard/vendor/VendorPage';
import Admin from './dashboard/admin/admin';
import SearchProduct from '../src/pages/SearchProductPage';
import PopupMessage from './pages/PasswordExpirationPage';
import UpdateProduct from '../src/pages/UpdateProduct';
import ProfilePage from './pages/profile/ProfilePage';
import ViewProduct from './pages/viewProduct';
import AdminViewUsersPage from './pages/AdminViewUsersPage';
import Cart from './pages/cart/cartData';
import CheckoutPage from './pages/checkout/CheckoutPage';
import Payment_success from './pages/payment/Payment_success';
import Payment_fail from './pages/payment/Payment_fail';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import NotFound from './pages/error/NotFound';
import WishlistPage from './pages/WishlistPage';
import Orders from './pages/buyer/Orders';

import ProtectedRoute from '../src/utils/ProtectedRoute';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/search-product" element={<SearchProduct />} />
        <Route path="/my/orders" element={<Orders />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        <Route
          path="/confirm-password-page"
          element={<PasswordComfirmPage />}
        />
        <Route path="/two-factor" element={<TwoFactorAuth />} />
        <Route path="/PopupMessage" element={<PopupMessage />} />
        <Route
          path="/vendor"
          element={
            <ProtectedRoute>
              <VendorPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/product/:id" element={<UpdateProduct />} />
        <Route
          path="/viewProduct/:id"
          element={
            <ProtectedRoute>
              <ViewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminViewUsersPage />
            </ProtectedRoute>
          }
        />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route path="/login/fail" element={<LoginError />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment/success" element={<Payment_success />} />
        <Route path="/payment/fail" element={<Payment_fail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ModalButton />
      <ToastContainer />
    </Router>
  );
}
export default App;
