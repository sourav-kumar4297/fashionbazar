import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
 
  const manageCart = (acc, { type, value }) => {
    switch (type) {
      case "ADD_TO_CART":
        return {
          ...acc,
          cartItems: [...acc.cartItems, value],
        };
        case "REMOVE_FROM_CART":
          return {
            ...acc,
            cartItems: acc.cartItems.filter(
              (item) => item.id !== value.id
              ),
              };
              case"SUMMER30":
              return {
                ...acc,
                discount:value,
              }
              case"SALE20":
              return {
                ...acc,
                discount:value,
              }
              case"DISCOUNT50":
              return {
                ...acc,
                discount:value,
              }
            

              default:
                return acc;
    }
  }


  const [initialCart, dispatch] = useReducer(manageCart, {
    cartItems: [],
    discount: 0,
    total: 0,
  });

  return (
    <CartContext.Provider value={{ initialCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );

};
