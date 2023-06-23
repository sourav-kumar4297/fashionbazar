import React, { useContext, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { CartBill } from "./CartBill";
import "./cart.css";

export const CartItems = () => {
  const { dispatch, filterObj } = useContext(FilterContext);
  

  return filterObj.addToCart.length === 0 ? (
    <h1>No item is added to cart....</h1>
  ) : (

    <div className="cart-container">
      <div  className="cart-card">
      {filterObj.addToCart.map((product) => (

        <div key={product.id}>
          
          <div>
          <div className="card-image">
            <img src={product.image} alt="" height="250px" width="250px" />
          </div>
          <div className="card-heading ">
            <h3>Name : {product.title}</h3>
            <p>
              <b>Price : ₹{product.price}</b>
            </p>
            <p>Quantity :{product.quantity} </p>
            <button className="increase btn" onClick={(e) =>dispatch({
                type: "increaseQuantity",
                value: product
            })}>+</button>
          <button className="decrease btn" onClick={(e) => dispatch({
                type: "decreaseQuantity",
                value: product
            })}>-</button>
            <button className="remove btn"
              onClick={(e) =>
                dispatch({
                  type: "removeFromCart",
                  value: product,
                })
              }
            >
              Remove From Cart
            </button>
            <button className="add-to-wishlist btn"
              onClick={(e) =>
                dispatch({
                  type: "addToWishList",
                  value: product,
                })
              }
            >
              Move To WihList
            </button>
          </div>
          </div>
          
        </div>
      ))}
      </div>
      <div className="cart-bill card">
        <CartBill />
      </div>
    </div>
  );
};
