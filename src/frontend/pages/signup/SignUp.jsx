import React, { useContext, useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../auth/AuthContext';
import "./signup.css"
export const SignUp = () => {
    const navigate = useNavigate();
  const {setIsLoggedIn } = useContext(AuthContext);

  const [newUserDetails, setNewUserDetails] = useState({firstName:"",
lastName :"",
email:"",
password:""});

const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName : newUserDetails.firstName,
        lastName : newUserDetails.lastName,
        email : newUserDetails.email,
        password : newUserDetails.password
      });
      localStorage.setItem("token", response.data.encodedToken);
         navigate("/")
         setIsLoggedIn(true);
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      
      <section>
        <div className="main-login">
          <div className="login-form">
      <form onSubmit={signupHandler}>
        <h2>Sign Up</h2>
        <div className="inputbox">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={newUserDetails.firstName}
            onChange={(e) => setNewUserDetails({...newUserDetails,firstName: e.target.value})}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={newUserDetails.lastName}
            onChange={(e) =>setNewUserDetails({...newUserDetails,lastName: e.target.value})}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={setNewUserDetails.email}
            onChange={(e) =>setNewUserDetails({...newUserDetails,email: e.target.value})}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={setNewUserDetails.password}
            onChange={(e) =>setNewUserDetails({...newUserDetails,password: e.target.value})}
          />
        </div>
        <div className="inputbox">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={setNewUserDetails.password}
            onChange={(e) =>setNewUserDetails({...newUserDetails,password: e.target.value})}
          />
        </div>
        <button type="submit" className='create-new-account-btn'>Create New Account</button>
      </form>
      <p className='signup-alreadyaccount'>Already have an account?<NavLink to="/login" ><button className='singin'>Sign In</button></NavLink></p>
    </div>
    </div>
    </section>
    </div>
  );
};


