import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./User/Components/Header";
import Home from "./User/Pages/Home";
import About from "./User/Pages/About";
import Products from "./User/Pages/Products";
import Contact from "./User/Pages/Contact";
import Brandvise from "./User/Pages/Brandvise";
import Register from "./User/Pages/Register";
import Sign from "./User/Pages/Sign";
import Singlepage from "./User/Pages/Singlepage";
import PaymentPage from "./User/Pages/PaymentPage";
import Cart from "./User/Pages/Cart";
import Footer from "./User/Components/Footer";

// ✅ Capitalize context name (important!)
export const ProviderContext = createContext();

const App = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [showcart, setShowcart] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [adminuser, setAdminuser] = useState(false);

  // ✅ Load user's cart from localStorage
  const [cart, setCart] = useState(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      return JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
    }
    return [];
  });

  // ✅ Save cart per user
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser}`, JSON.stringify(cart));
    }
  }, [cart]);


  return (
    <>
      <ToastContainer />
      <BrowserRouter basename="/Mobileshop">
        <ProviderContext.Provider
          value={{
            show,
            setShow,
            name,
            setName,
            showcart,
            setShowcart,
            cart,
            setCart,
            userdata,
            setUserdata,
            adminuser,
            setAdminuser,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Sign />} />
            <Route path="/products/brandvise/:brand" element={<Brandvise />} />
            <Route path="/singlepro/:id" element={<Singlepage />} />
            <Route path="/cart/payment" element={<PaymentPage />} />
          </Routes>

          {showcart && <Cart />}
          <Footer />
        </ProviderContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
