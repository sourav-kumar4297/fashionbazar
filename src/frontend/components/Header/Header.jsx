import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaCartPlus, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import LogoImage from "./logo.png"

import "./header.css";
import { FilterContext } from "../../contexts/FilterContext";

export const Header = () => {
 const {  dispatch } = useContext(FilterContext);
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={LogoImage} alt="fashionBazar" />
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
          onChange={(event) => dispatch({ type: "search", value: (event.target.value) })}
        />
      </div>
        <div className="nav-list">
          <NavLink to="/cart" className="headerlist">
            <FaCartPlus className="icon cart"></FaCartPlus>
          </NavLink>
          <NavLink to="/wishlist" className="headerlist">
            <FaHeart className="icon heart"></FaHeart>
          </NavLink>
          <NavLink to="/login" className="headerlist">
            <FaUser className="icon user"></FaUser>
          </NavLink>
        </div>
    </nav>
  );
};
