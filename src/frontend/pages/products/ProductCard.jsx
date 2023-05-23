import React, { useContext, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { FilterContext } from '../../contexts/FilterContext';

const ProductCard = (product) => {
  const {  dispatch, filterObj } = useContext(FilterContext);
const navigate = useNavigate();

    const {
        id,
        title,
        description,
        price,
        category,
        image,
        count,
        rating: { rate },
    } = product;
   ;

   const isPresentInCart =  filterObj.addToCart.find(({id:i})=>id === i ? true : false)
  return (
     <div className="card" key={id}>
      
         <div className="card-image">
           <img src={image} alt="" height="250px" width="250px" />
          <button 
          className='wishlistbtn'
           onClick={(e)=>  dispatch({
            type: "addToWishList" , value: product
            })}
          > <FaHeart></FaHeart></button>
         </div>
         <div className="card-heading">
           <h3>{title}</h3>
           <p>
             <b>${price}</b>
           </p>
           <p>{rate}</p>
           <button 
           key={id}

            onClick={(e)=> !isPresentInCart ? dispatch({
              type: "addToCart" , value: product
              }): navigate('/cart')}
           >{isPresentInCart ? "Go To Cart" :"Add To Cart"}</button>
         </div>
       
     </div>
  )
}

export default ProductCard