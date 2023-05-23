import React, { useState } from 'react';
import "./login.css"

export const Login = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='main-login'>
      <div className='login-form'>
        <form className='form container' 
        // onSubmit={()=>handleSubmit}
        >
          <h2>Login</h2>
         <label >Username </label>
            <input type="text"/>
         <label >Password </label>
            <input type="password" />
            {/* <input type="submit" value="Login"  className='btn login'/> */}
            <button onClick={()=> setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Log Out" : "Log In"}</button>
        </form>
        </div>
    </div>
  )
}
