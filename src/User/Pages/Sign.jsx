import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { provider } from "../../App";
import { useNavigate } from "react-router-dom";

function Sign() {
  const [password, setPassword] = useState("");
  const { show, setShow, name, setName,userdata,setUserdata,adminuser,setAdminuser,setCart } = useContext(provider);

  const navi = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5001/users")
      .then((res) => res.json())
      .then((userdata) => {
        setUserdata(userdata);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const loguser = userdata.find((user) => {
      return user.name === name && user.password === password && user.role === "User";
    });
      const adminuser = userdata.find((user) => {
      return user.name === name && user.password === password && user.role === "Admin";
    });
    if (loguser) {
      toast.success("Welcome 🎉", { autoClose: 1000 });
      localStorage.setItem("currentUser", loguser.name);
      const savedCart = JSON.parse(localStorage.getItem(`cart_${loguser.name}`)) || [];
      setCart(savedCart);
      navi("/products");

    } 
    else if(adminuser){
      navi("/admin");
      setAdminuser(true)
      toast.success("Welcome Admin 🎉", { autoClose: 1000 });

    }
    else {
      toast.error("Name or password is incorrect", { autoClose: 1000 });
      return;
    }
   
    setShow(!show);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Sign In
        </h2>

        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold shadow-md hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline" onClick={()=>{navi('/register')}}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Sign;
