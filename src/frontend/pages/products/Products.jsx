import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'


export default function Products() {
  const product = useContext(ProductContext)
  return (
    <div>
      <h2>Products</h2>
 { product.product?.map((products)=>{
 const {id,title,description,price,category,image,count,rating:{rate}} = products;
 return(
  
  <li key={id}>
    <img src={image} alt="product-image" />
    <p>{title}</p>
  <p>{description}</p>
  <p>{price}</p>
  <p>{category}</p>
  <p>{count}</p>
  <p>{rate}</p>
  
  </li>
 )})}
      
      
      </div>
  )
}
