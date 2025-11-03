import React, { useContext, useEffect, useState } from "react";
import { Productslist } from "../Productslist"; // your product list file
import { provider } from "../App";

function AdminDashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSelling, setTotalSelling] = useState(0);

  const {userdata}=useContext(provider)

  useEffect(() => {
    // Load products from localStorage or JS file
    const storedProducts = JSON.parse(localStorage.getItem("products")) || Productslist;
    setTotalProducts(storedProducts.length);

    // Load users from localStorage
    const normaluser=userdata.filter((user) => user.role === "User");
      setTotalUsers(normaluser.length);

    // Load cart data (simulate total sales)
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const total = orders.reduce((sum, order) => sum + order.totalPrice, 0);
    setTotalSelling(total);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-indigo-700">
        🧭 Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Products</h2>
          <p className="text-4xl font-bold text-indigo-600">{totalProducts}</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Users</h2>
          <p className="text-4xl font-bold text-green-600">{totalUsers}</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Selling</h2>
          <p className="text-4xl font-bold text-amber-600">₹{totalSelling}</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Products</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {JSON.parse(localStorage.getItem("products"))?.slice(-3).map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
