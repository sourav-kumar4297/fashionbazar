import React, { useContext } from "react";
import { ImBin } from 'react-icons/im';
import { FilterContext } from "../../contexts/FilterContext";
import "./wishlist.css"

export const Wishlist = () => {
  const { dispatch, filterObj } = useContext(FilterContext);
  return filterObj.addToWishList.length ===0 ? 
  <div> 
  <h1>No item is added to wishlist....</h1>
  </div>
  : (
    <div>
      <h1>Wishlist</h1>
      <>
        {filterObj.addToWishList.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img src={product.image} alt="" height="250px" width="250px" />
              <button
              className='wishlistdeletebtn'
              onClick={(e)=>  dispatch({
               type: "removeFromWishList" , value: product
               })}
              
              >
                <ImBin></ImBin>
              </button>
            </div>
            <div className="card-heading">
              <h3>{product.title}</h3>
              <p>
                <b>${product.price}</b>
              </p>
              <button
                onClick={(e) =>
                  dispatch({
                    type: "addToCart",
                    value: product,
                  })
                }
              >
                Move To Cart
              </button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
};
