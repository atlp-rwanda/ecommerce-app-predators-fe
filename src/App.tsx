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
import VendorPage from "./dashboard/vendor/VendorPage";
import Admin from "./dashboard/admin/admin";
import SearchProduct from '../src/pages/SearchProductPage';
import PopupMessage from "./pages/PasswordExpirationPage";
import UpdateProduct from '../src/pages/UpdateProduct';
import ProfilePage from './pages/profile/ProfilePage';

import ViewProduct from './pages/viewProduct';

import AdminViewUsersPage from './pages/AdminViewUsersPage';

import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';

import NotFound from './pages/error/NotFound';


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
        <Route path="/admin" element={<Admin />} />
        <Route path="/search-product" element={<SearchProduct />} />
        <Route path="/reset-password-page" element={<ResetPasswordPage />} />
        <Route path="/confirm-password-page" element={<PasswordComfirmPage />} />
        <Route path="/two-factor" element={<TwoFactorAuth />} />
        <Route path="/PopupMessage" element={<PopupMessage />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/search-product" element={<SearchProduct />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<UpdateProduct />} />

        <Route path="/viewProduct/:id" element={<ViewProduct/>} />

        <Route path="/admin/users" element={<AdminViewUsersPage />} />
        <Route path="/login/success" element={<LoginSuccess />} />
        <Route path="/login/fail" element={<LoginError />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      <ModalButton />
      <ToastContainer />
    </Router>
  );
}
export default App;

// console.log('fixing')