import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/LandingPage';
import ProductPage from "../src/pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PasswordComfirmPage from "./pages/PasswordConfirminationPage.";
import TwoFactorAuth from '../src/pages/SellerLogin/twoFactorAuth';

import PopupMessage from "./pages/PasswordExpirationPage"; 

import VendorPage from "./pages/vendor/VendorPage";


function App() {
  return (
    
      <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage/>} />

          <Route path="/confirm-password-page" element={<PasswordComfirmPage/>} /> 
          <Route path="/two-factor" element={<TwoFactorAuth />} />
          <Route path="/PopupMessage" element={<PopupMessage/>}/>
       

          <Route path="/vendor" element={<VendorPage/>} />
        </Routes>
      </Router>
      
  );
}
export default App;
