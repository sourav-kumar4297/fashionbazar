import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { FilterContext } from '../../contexts/FilterContext';
import { CartContext } from './CartContext';
import "./cart.css"

export const CartBill = () => {
const { filterObj} = useContext(FilterContext);
const {initialCart, dispatch} = useContext(CartContext);
    const [coupon, setCoupon] = useState(null);
    const {discount} = initialCart;
      const navigate = useNavigate();;
    
      const subtotal = filterObj.addToCart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    
      const calculateTotal = () => {
        
        const totalDiscounted = subtotal - (subtotal*discount/100);
        return totalDiscounted;
      };
    
      const applyCoupon = (appliedCoupon,value) => {
        setCoupon(appliedCoupon)
        dispatch({type:appliedCoupon , value: value } )
        
      };

  return (
    <div>
        <div>
            Have A Coupon ?
            <div className="coupon-container">
          <h3>Apply Coupon</h3>
          <input type="radio" name="coupon" value="SUMMER30" onChange={()=>applyCoupon("SUMMER30",30)} checked={coupon === "SUMMER30"} />
          <label htmlFor="coupon1">Coupon 1</label>
          <input type="radio" name="coupon" value="SALE20" onChange={()=>applyCoupon("SALE20",20)} checked={coupon === "SALE20"} />
          <label htmlFor="coupon2">Coupon 2</label>
          <input type="radio" name="coupon" value="DISCOUNT50" onChange={()=>applyCoupon("DISCOUNT50",50)} checked={coupon === "DISCOUNT50"} />
          <label htmlFor="coupon3">Coupon 3</label>
        </div>
        </div>
<div className='applied-coupon'>      
   {coupon && <h3>{coupon} IS APPLIED</h3>}
</div>
 
        <hr />
        <h2>PRICE DETAILS</h2>
        <hr/>
        <div className='card-price-details'>
            <p className='card-prices'>Price
                <span> ₹{subtotal}</span></p>
                <p className='card-prices'>Delivery Charges 
                    <span>FREE</span>
                </p>
                <p className='card-prices'>Coupin Discount 
                    <span>{coupon}</span>
                </p>

                <p className='card-prices'><b>Total Amount  </b><span>
                <b>₹{calculateTotal().toFixed(2)}</b></span></p>
                    <button className='checkout-btn'  onClick={()=> navigate("/checkout")}>
                        Checkout
                    </button>
        </div>
    </div>
  )
}
