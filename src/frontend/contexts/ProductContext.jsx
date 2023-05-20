import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const ProductContext = createContext();
export default function ProductProvider({children}) {
const [product, setProduct] = useState(null);
    const response = async() => {
        const data = await fetch("/api/products").then(response=>response.json())
        setProduct(data.products);
    }
    
     useEffect(() => {
      response();
    }, [])

  return (
    <ProductContext.Provider
    value={{product}}>
        {children}
    </ProductContext.Provider>
  )
}
