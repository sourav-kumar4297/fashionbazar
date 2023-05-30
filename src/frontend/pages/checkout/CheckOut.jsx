import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import { CartContext } from '../cart/CartContext';

export const CheckOut = () => {
  const { filterObj } = useContext(FilterContext);
  const { initialCart} = useContext(CartContext);
  const {discount} = initialCart;

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
      <div>
        {filterObj.addToCart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <hr />
          </div>
        ))}
      </div>
      <div>
        <h2>Summary</h2>
        <p>Subtotal: {calculateSubtotal()}</p>
        <p>Discount: {discount}%</p>
        <p>Total Amount: {calculateTotal()}</p>
        <button>Place Order</button>
      </div>
    </div>
  );
};
