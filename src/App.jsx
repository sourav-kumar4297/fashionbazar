import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./frontend/components/Footer/Footer";
import { Header } from "./frontend/components/Header/Header";
import { Login } from "./frontend/components/Login/Login";
import Cart from "./frontend/pages/cart/Cart";
import Home from "./frontend/pages/home/Home";
import Products from "./frontend/pages/products/Products";
import { Wishlist } from "./frontend/pages/wishlist/Wishlist";
// import Mockman from "mockman-js"

function App() {
  return (
    <div className="App">
      {/* <Mockman /> */}
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
