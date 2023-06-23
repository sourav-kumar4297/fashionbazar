import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./frontend/components/Footer/Footer";
import { Login } from "./frontend/pages/Login/Login";
import Cart from "./frontend/pages/cart/Cart";
import Home from "./frontend/pages/home/Home";
import Products from "./frontend/pages/products/Products";
import { Wishlist } from "./frontend/pages/wishlist/Wishlist";
import { RequiresAuth } from "./auth/RequiresAuth";
import { LogOut } from "./frontend/pages/logout/LogOut";
import { SignUp } from "./frontend/pages/signup/SignUp";
import { Header } from "./frontend/components/Header/Header";
import { SingleProduct } from "./frontend/pages/single product/SingleProduct";
import { CheckOut } from "./frontend/pages/checkout/CheckOut";
import { OrderPlaced } from "./frontend/pages/order placed/OrderPlaced";
// import Mockman from "mockman-js"

function App() {
  return (
    <div className="App">
      {/* <Mockman /> */}
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={ <RequiresAuth><Cart /></RequiresAuth>  } />
        <Route path="/products" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/wishlist" element={      <RequiresAuth><Wishlist /></RequiresAuth> } />
       <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
