import {React} from 'react';
import { NavLink } from 'react-router-dom';
import { FaCartPlus, FaHeart, FaUser, FaSearch} from 'react-icons/fa';


import "./header.css";

export const Header = () => {

    return (
      <div className="navbar">
<div className='logo'> <NavLink to="/"><img src="" alt="fashionBazar" /></NavLink></div>
<div className='search-box'> 
  <FaSearch className='icon search'></FaSearch>
  <input type="text" name="search" id="" placeholder='search' className='search-input headerlist'/></div>
<nav className='navlist'>
  <div className='list'>
<NavLink to="/cart" className="headerlist"><FaCartPlus className='icon cart'></FaCartPlus></NavLink>
<NavLink to="/wishlist" className="headerlist"><FaHeart className='icon heart'></FaHeart></NavLink>
<NavLink to="/login" className="headerlist"><FaUser className='icon user'></FaUser></NavLink>
</div>
 </nav>




      </div>
    )
  
}
