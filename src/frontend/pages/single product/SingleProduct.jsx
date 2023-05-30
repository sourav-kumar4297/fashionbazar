import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router';
import { FilterContext } from '../../contexts/FilterContext';

export const SingleProduct = () => {
  const {  dispatch, filterObj } = useContext(FilterContext);

const [selectedProduct, setSelectedProduct] = useState();
const {id} = useParams();
const navigate = useNavigate();


  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${id}`)
        setSelectedProduct( response.data.product);

      } catch (e) {
        console.log(e);
      }
    })();
  },[]);



  const isPresentInCart =  filterObj?.addToCart?.find(({id:i})=>id === i)

   const isPresentInWishList =  filterObj?.addToWishList?.find(({id:i})=>id === i )
  


return (!selectedProduct) ?
<h2>Loading....</h2>
  : (
    <div>SingleProduct
      <div className="card" key={id}>
         <div className="card-image" key={id}
        >
           <img src={selectedProduct?.image} alt="" height="180px" width="180px" />
          <div 
          className='wishlistbtn'
           onClick={(e)=> 
            { !isPresentInWishList ?
             dispatch({
            value: selectedProduct,
            type: "addToWishList"  
            })
            :
            dispatch({
              value: selectedProduct, 
              type: "removeFromWishList" 
              })
              }
        }
          > <FaHeart></FaHeart> </div>
         </div>
         <div className="card-heading">
          <div className='rating-box'>
          <p className='rating-star'>{(selectedProduct.rating.rate)} <FaStar></FaStar></p>
          </div>
          <div className='card-title'>
           <h3>{selectedProduct?.title}</h3>
           </div>
           <p className='card-price'>
             <b>₹{(selectedProduct?.price-selectedProduct?.discount).toFixed(2)}</b>
   <span className='original-price'> ₹{selectedProduct?.price}</span>
           </p>

           <button 
           key={id}

            onClick={(e)=> !isPresentInCart ? dispatch({
              type: "addToCart" , value: selectedProduct
              }): navigate('/cart')}
           >{isPresentInCart ? "Go To Cart" :"Add To Cart"}</button>
         </div>
       
     </div>
    </div>
    
  )
}
