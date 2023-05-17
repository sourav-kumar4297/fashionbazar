import {React} from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Cart from '../../pages/Cart';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import "./header.css";

export const Header = () => {

    return (
      <div className="navbar">
<div className='logo'>logo</div>
<div> <input type="text" name="search" id="" /></div>
<nav>
<NavLink to="/">Home</NavLink>
<NavLink to="/cart">Cart</NavLink>
<NavLink to="/Products">Products</NavLink>

        </nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/products" element={<Products />} />
</Routes>


      </div>
    )
  
}
