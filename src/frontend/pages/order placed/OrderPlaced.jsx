import React from 'react'
import { useNavigate } from 'react-router'

export const OrderPlaced = () => {
    const navigate = useNavigate();
  return (
    <div>
       <h2>!! Thankyou, Your Order is Placed !!</h2> 

       <button onClick={()=>navigate("/products")}>Explore More </button>
        </div>
  )
}
