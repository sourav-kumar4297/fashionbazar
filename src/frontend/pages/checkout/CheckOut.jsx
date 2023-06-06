import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { FilterContext } from '../../contexts/FilterContext';
import { CartContext } from '../cart/CartContext';
import { LogoutContext } from '../logout/LogoutContext';
import "./checkout.css"

export const CheckOut = () => {
  const { filterObj } = useContext(FilterContext);
  const { initialCart} = useContext(CartContext);
  const {discount} = initialCart;
  const {  dispatch, state } = useContext(LogoutContext);
  const { user } = state;
  const navigate = useNavigate();


  const calculateSubtotal = () => {
    return filterObj.addToCart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = filterObj.addToCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const totalDiscounted = subtotal - (subtotal*discount/100);
    return totalDiscounted;
  };

  return (
    
    <div>
<h2>Checkout</h2>
<div className=' checkout-container'>


{user.addresses.map((address) => (
      <div className='card check-1' key={address.id}>
        <h1>Address</h1>
        <label>
          <input
            type="radio"
            value={address.id}
            checked={user.selectedAddressId === address.id}
            onChange={() => dispatch({ type: 'SELECT_ADDRESS', payload: address.id })}
          />
          {address.hno}, {address.street}, {address.district}, {address.state}, {address.country}, {address.zip}, {address.phone}
        </label>
      </div>
    ))}
    <div className='card check-1'>
        <h2>Summary</h2>
        <p>Subtotal: ₹{calculateSubtotal()}</p>
        <p>Discount: ₹{(calculateTotal()-calculateSubtotal()).toFixed(2)}</p>
        <p>Total Amount: ₹{calculateTotal()}</p>
       
      </div>
</div>

      <div className='cart-items'>
        {filterObj.addToCart.map((item) => (
          <div  >
             <div className='item-details' key={item.id}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          </div>
         
        ))}
      </div>
   <div className='checkout-button'>
   <button onClick={()=> navigate("/orderplaced")}>Place Order</button>
   </div>
    </div>
  );
};
