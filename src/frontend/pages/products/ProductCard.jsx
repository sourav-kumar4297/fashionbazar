import React, { useContext } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import { FilterContext } from '../../contexts/FilterContext';

const ProductCard = (product) => {
  const {  dispatch, filterObj } = useContext(FilterContext);
const navigate = useNavigate();

    const {
        _id,
        title,
        price,
        image,
        rating: { rate },
        discount
    } = product;


   const isPresentInCart =  filterObj.addToCart.find(({_id:i})=>_id === i)
   const isPresentInWishList =  filterObj.addToWishList.find(({_id:i})=>_id === i )
  return (
     <div className="card" key={_id}>
         <div className="card-image" key={_id}
        >
          
           <img src={image} alt="" height="180px" width="180px" onClick={()=>navigate(`/singleproduct/${_id}`)} />
          
          <div 
          className='wishlistbtn'
           onClick={(e)=> 
            { !isPresentInWishList ?
             dispatch({
            value: product,
            type: "addToWishList"  
            })
            :
            dispatch({
              value: product, 
              type: "removeFromWishList" 
              })
              }
        }
          > <FaHeart></FaHeart> </div>
         </div>
         <div className="card-heading">
          <div className='rating-box'>
          <p className='rating-star'>{(rate).toFixed(0)} <FaStar></FaStar></p>
          </div>
          <div className='card-title'>
           <h3>{title}</h3>
           </div>
           <p className='card-price'>
             <b>₹{(price-discount).toFixed(2)}</b>
   <span className='original-price'> ₹{price}</span>
           </p>

           <button 
           key={_id}

            onClick={(e)=> !isPresentInCart ? dispatch({
              type: "addToCart" , value: product
              }): navigate('/cart')}
           >{isPresentInCart ? "Go To Cart" :"Add To Cart"}</button>
         </div>
       
     </div>
  )
}

export default ProductCard