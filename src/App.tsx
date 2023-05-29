import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from '../src/pages/LandingPage';
import ProductPage from "../src/pages/ProductPage";


function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage/>} />
       
        </Routes>
    </Router>
    </div>
  );
}
export default App;