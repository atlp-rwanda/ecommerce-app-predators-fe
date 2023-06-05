import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from '../src/pages/LandingPage';
import ProductPage from "../src/pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" 
          element={<Home />} />
          <Route path="/product-page" element={<ProductPage/>} />
          <Route path="/register-page" element={<RegisterPage/>} />
       
        </Routes>
    </Router>
    </div>
  );
}
export default App;