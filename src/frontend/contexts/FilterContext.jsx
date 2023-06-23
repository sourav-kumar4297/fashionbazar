import React, { createContext, useReducer } from "react";
export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const filterFunction = (acc, { type, value }) => {
    switch (type) {
      case "ADD_CATEGORY":
        return {
          ...acc,
          categories: [...acc.categories, value],
        };
      case "REMOVE_CATEGORY":
        return {
          ...acc,
          categories: [
            ...acc.categories.filter((category) => category !== value),
          ],
        };
      case "addToCart":
        return {
          ...acc,
          addToWishList: [
            ...acc.addToWishList.filter(
              (addToWishList) => addToWishList.id !== value.id
            ),
          ],
          addToCart: [...acc.addToCart, { ...value, quantity: 1 }],
        };
      case "increaseQuantity":

        return {
          ...acc,
          addToCart: acc.addToCart.map((item) =>
            value.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      case "decreaseQuantity":
        return {
          ...acc,
          addToCart: acc.addToCart.map((item) =>
            value.id === item.id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

      case "removeFromCart":
        return {
          ...acc,
          addToCart: [
            ...acc.addToCart.filter((addToCart) => addToCart.id !== value.id),
          ],
        };
      case "addToWishList":
        return {
          ...acc,
          addToCart: [
            ...acc.addToCart.filter((addToCart) => addToCart.id !== value.id),
          ],
          addToWishList: [...acc.addToWishList, value],
        };
      case "removeFromWishList":
        return {
          ...acc,
          addToWishList: [
            ...acc.addToWishList.filter(
              (addToWishList) => addToWishList.id !== value.id
            ),
          ],
        };
      case "price":
        return { ...acc, price: Number(value) };

      case "search":
        return { ...acc, search: value };
      case "sortbyrating":
        return { ...acc, sortbyrating: value };

      case "categories":
        return { ...acc, categories: value };

      case "clear":
        return {
          search: "",
    sortby: "",
    filters: [],
    categories: [],
    sortbyrating: 0,
    price: 0,
    addToCart: [],
    addToWishList: [],
        };

      case "sort":
        return { ...acc, sortby: value };

      default:
        return acc;
    }
  };

  const [filterObj, dispatch] = useReducer(filterFunction, {
    search: "",
    sortby: "",
    filters: [],
    categories: [],
    sortbyrating: 0,
    price: 0,
    addToCart: [],
    addToWishList: [],
  });
  return (
    <FilterContext.Provider value={{ filterObj, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
