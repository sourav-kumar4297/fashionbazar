import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const ProductContext = createContext();
export default function ProductProvider({children}) {
const [product, setProduct] = useState(null);
const [isError,setError] = useState(null);


    const response = async() => {
      try{
        const data = await fetch("/api/products").then(response=>response.json())
        setProduct(data.products);
    }
  catch(error){
          setError(error)
  }
}

     useEffect(() => {
      response();
    }, [])

  return (
    <ProductContext.Provider
    value={{product,isError}}>
        {children}
    </ProductContext.Provider>
  )
}
