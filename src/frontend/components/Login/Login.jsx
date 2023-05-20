import React from 'react';
import "./login.css"

export const Login = () => {
    

const handleSubmit = () => {

    
}

  return (
    <div className='main-login'>
      <div className='login-form'>
        <form className='form container' onSubmit={()=>handleSubmit}>
          <h2>Login</h2>
         <label >Username </label>
            <input type="text"/>
         <label >Password </label>
            <input type="password" />
            <input type="submit" value="Login"  className='btn login'/>
        </form>
        </div>
    </div>
  )
}
