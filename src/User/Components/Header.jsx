import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProviderContext } from "../../App";

function Header() {
  const { show, setShow, name, showcart, setShowcart, cart ,setCart} = useContext(ProviderContext); // 👉 add cart here
  const [menuOpen, setMenuOpen] = useState(false);

  const handleshowcart = () => {
    setShowcart(!showcart);
  };

  // 👉 Total item count in cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full sticky top-0 left-0 bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <h3 className="text-2xl font-extrabold tracking-wide">
              <span className="text-4xl text-yellow-300">M</span>aulik
            </h3>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 items-center font-medium">
            <Link to={"/"}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Products
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Contact
              </li>
            </Link>

            {!show ? (
              <>
                <Link to={"/signin"}>
                  <li className="hover:text-yellow-300 transition cursor-pointer">
                    Sign in
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li className="hover:text-yellow-300 transition cursor-pointer">
                    Register
                  </li>
                </Link>
              </>
            ) : (
              <>
                <p className="text-sm italic">Welcome, {name}</p>
                <Link to={"/"}>
                  <li
                    className="hover:text-red-400 transition cursor-pointer"
                    onClick={() => {
      setShow(false); // hide user login
      localStorage.removeItem("currentUser"); // remove logged user
      setCart([]); // clear that user's cart
    }}
                  >
                    Logout
                  </li>
                </Link>
              </>
            )}
          </ul>
        </nav>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-6">
          {/* Cart */}
          <div
            className="relative cursor-pointer text-2xl hover:text-yellow-300 transition"
            onClick={handleshowcart}
          >
            <i className="fa-solid fa-cart-shopping"></i>

            {/* 🔥 Dynamic Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl focus:outline-none hover:text-yellow-300 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-indigo-800 px-6 py-4 animate-fadeIn">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <Link to={"/"} onClick={() => setMenuOpen(false)}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/about"} onClick={() => setMenuOpen(false)}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                About
              </li>
            </Link>
            <Link to={"/products"} onClick={() => setMenuOpen(false)}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Products
              </li>
            </Link>
            <Link to={"/contact"} onClick={() => setMenuOpen(false)}>
              <li className="hover:text-yellow-300 transition cursor-pointer">
                Contact
              </li>
            </Link>

            {!show ? (
              <>
                <Link to={"/signin"} onClick={() => setMenuOpen(false)}>
                  <li className="hover:text-yellow-300 transition cursor-pointer">
                    Sign in
                  </li>
                </Link>
                <Link to={"/register"} onClick={() => setMenuOpen(false)}>
                  <li className="hover:text-yellow-300 transition cursor-pointer">
                    Register
                  </li>
                </Link>
              </>
            ) : (
              <>
                <p className="text-sm italic">Welcome, {name}</p>
                <Link
                  to={"/"}
                  onClick={() => {
                    setShow(!show);
                    localStorage.removeItem("currentUser");
                    setCart([]);
                    setMenuOpen(false);
                  }}
                >
                  <li className="hover:text-red-400 transition cursor-pointer">
                    Logout
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
