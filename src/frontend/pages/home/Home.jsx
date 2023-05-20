import React from 'react';
import { NavLink } from 'react-router-dom';
import "./home.css"

export default function Home() {
 

  return (
    <div>
      <div className='main'>
        
        <div className='home-heading'>
        <h4>Welcome to fashionBazar</h4>
<div> <h1>Shop smart, shop hassle-free.</h1></div>
<NavLink to="/products"><button>Shop Now</button></NavLink>
        </div>
      </div>
    </div>
  )
}

