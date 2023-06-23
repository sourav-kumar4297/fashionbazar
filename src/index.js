import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import ProductProvider from "./frontend/contexts/ProductContext";
import {  FilterProvider } from "./frontend/contexts/FilterContext";
import { AuthProvider } from "./auth/AuthContext";
import { LogoutProvider } from "./frontend/pages/logout/LogoutContext";
import { CartProvider } from "./frontend/pages/cart/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <LogoutProvider>
<CartProvider>
    <ProductProvider>
      <FilterProvider>
    <App />
    </FilterProvider>
    </ProductProvider>
    </CartProvider>
    </LogoutProvider>
    </AuthProvider>
    </BrowserRouter>,
  </React.StrictMode>, 
  document.getElementById("root")
);
