import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== Company Info ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3 text-blue-300">ElectroMart</h2>
          <p className="text-gray-300 leading-relaxed">
            Your one-stop shop for the latest and most trusted electronic gadgets.
            We deliver quality and innovation to power your lifestyle.
          </p>
        </motion.div>

        {/* ===== Quick Links ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </motion.div>

        {/* ===== Contact Info ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Get in Touch</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <span className="text-white">support@electromart.com</span></li>
            <li>Phone: <span className="text-white">+91 98765 43210</span></li>
            <li>Address: <span className="text-white">Ahmedabad, Gujarat, India</span></li>
          </ul>
        </motion.div>

        {/* ===== Social Media ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-600 p-3 rounded-full transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="border-t border-blue-700 mt-10 pt-6 text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} <span className="text-blue-300 font-semibold">ElectroMart</span> — All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
