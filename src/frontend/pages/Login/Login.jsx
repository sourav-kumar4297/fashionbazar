import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import "./login.css";
import { FaEye } from "react-icons/fa";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn, setUserDetails } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError(() => ({ hasError: false, message: "" }));
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      setIsLoggedIn(true);
      setUserDetails(response.data.foundUser);

      localStorage.setItem("encodedToken", response.data.encodedToken);
      location.state
        ? navigate(location?.state?.from?.pathname)
        : navigate("/");
    } catch (e) {
      setIsLoggedIn(false);
      setError(() => ({
        hasError: true,
        message: e.response.data.errors[0],
      }));
    }
  };

  const guestLoginHandle = (e) => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location?.state?.from?.pathname || "/logout");
    }
  }, [isLoggedIn, location?.state?.from?.pathname, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <section>
        <div className="main-login">
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <div className="inputbox">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputbox">
                <label>Password</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className={`password-toggle ${
                      showPassword ? "visible" : ""
                    }`}
                    onClick={togglePasswordVisibility}
                  >
                    <FaEye></FaEye>
                    
                  </span>
                </div>
                {error.hasError && <span>{error.message}</span>}
              </div>
              <button
                type="submit"
                onClick={guestLoginHandle}
                className="loginsubmit-btn"
              >
                Login As Guest
              </button>
              <button type="submit">Log In</button>
              <div className="register">
                <p>
                  Don't Have An Account? <NavLink to="/signup">Sign Up</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
