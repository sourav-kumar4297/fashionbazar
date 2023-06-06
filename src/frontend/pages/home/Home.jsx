import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../../backend/db/categories";
import { FilterContext } from "../../contexts/FilterContext";
import "./home.css";

export default function Home() {
  const { dispatch } = useContext(FilterContext);
  const navigate = useNavigate();

  const handleCategory = (categoryName) =>{
    dispatch({
      type: "ADD_CATEGORY",
      value: categoryName,
    });
    
    navigate("/products")
  }

  return (
    <div>
       <div className="home-heading">
          <h4>Welcome to fashionBazar</h4>
          <div>
            <h1>Shop smart, shop hassle-free.</h1>
          </div>
          <NavLink to="/products">
            <button>Shop Now</button>
          </NavLink>
        </div>
    
      <div className="main">
      <div className="box-container">
    {categories.map((category)=> (
      <div key={category.id}  >
        <div onClick={()=>handleCategory(category.name)} className="category-boxes">
          <img src={category.image} alt={category.name} height = "200vh" width="200vw"/>
          <h2>{category.name}</h2>

        </div>
        </div>
    ))}    
       
      </div>
    </div>
    </div>
  )
}
