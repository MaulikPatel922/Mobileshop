import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-blue-600">TechGear Accessories</span>, 
          we are passionate about bringing you the best mobile devices and accessories.  
          From premium phone cases to high-speed chargers, headphones, and smart gadgets — 
          we provide everything you need to stay connected and enhance your mobile experience.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver high-quality mobile accessories at affordable prices while ensuring 
            customer satisfaction and trust.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become the most trusted brand for mobile accessories worldwide, 
            known for innovation, quality, and service.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us</h3>
          <p className="text-gray-600">
            We carefully curate products, focus on durability, and keep up with 
            the latest tech trends to give you the best accessories for your devices.
          </p>
        </div>

      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Upgrade Your Mobile Experience?
        </h2>
        <Link to={'/products'}>
        <button className="cursor-pointer px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
          Shop Accessories
        </button>
        </Link>
      </div>
    </section>
  );
}

export default About;
