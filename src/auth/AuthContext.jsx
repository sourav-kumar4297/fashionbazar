import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ isLoggedIn: false });

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    const encodedToken = localStorage.getItem("encodedToken");
    if(encodedToken !== null) {
        setIsLoggedIn(true);
    }
  },[])

  const loginDetails = {
    isLoggedIn, setIsLoggedIn, userDetails, setUserDetails
  }

  return (
    <AuthContext.Provider value={loginDetails}>
      {children}
    </AuthContext.Provider>
  );
}
