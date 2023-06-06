import { React, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartPlus, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import LogoImage from "./logo.svg"

import "./header.css";
import { FilterContext } from "../../contexts/FilterContext";
import { AuthContext } from "../../../auth/AuthContext";

export const Header = () => {
 const {  dispatch, filterObj } = useContext(FilterContext);
 const { isLoggedIn } = useContext(AuthContext);
 const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={LogoImage} alt="fashionBazar" className="logo-image" />
        </NavLink>
      </div>
      <div className="search-box">
        <FaSearch className="icon"></FaSearch>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          className="search-input"
          onClick = { ()=> navigate('/products')}
          onChange={(event) => dispatch({ type: "search", value: (event.target.value) })}
        />
      </div>
        <div className="nav-list">
          <NavLink to="/products" className="active"> Products</NavLink>
          <NavLink to="/cart" className="headerlist">
            <FaCartPlus className="icon cart"></FaCartPlus>
            {filterObj.addToCart.length}
          </NavLink>

          <NavLink to="/wishlist" className="headerlist">
            <FaHeart className="icon heart"> </FaHeart>{filterObj.addToWishList.length}
          </NavLink>
          {isLoggedIn ?
            <NavLink to="/logout" className="headerlist">
            <FaUser className="icon user"></FaUser>
          </NavLink>
          :<NavLink to="/login" className="headerlist">
            <FaUser className="icon user"></FaUser>
          </NavLink>
          

}
        </div>
    </nav>
  );
};
