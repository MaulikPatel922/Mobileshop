import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { provider } from '../App';

function Aheader() {
    const  navi= useNavigate()
    const {setAdminuser}=useContext(provider)
    const handleLogout = () => {
        navi('/');
        setAdminuser(false)
        window.location.reload();
      }
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <Link to="/admin">Admin Panel</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/admin/dashboard"
            className="hover:text-gray-300 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className="hover:text-gray-300 transition-colors"
          >
            Users
          </Link>
          <Link
            to="/admin/products"
            className="hover:text-gray-300 transition-colors"
          >
            Products
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
} 

export default Aheader