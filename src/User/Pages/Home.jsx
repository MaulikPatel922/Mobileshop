import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Homeimage from '../../assets/Image/other/Homeimg.avif'


function Home() {
  return (
    <>
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        
        {/* Left side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the Latest <span className="text-blue-600">Mobiles</span> <br />
            & Accessories
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Upgrade your lifestyle with top-notch devices, cases, chargers, and more.
          </p>
          <Link to={'/products'}>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition cursor-pointer">
            Shop Now
          </button>
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Homeimage}
            alt="Mobile and Accessories"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
    <About/>
    <Products/>
    <Contact/>
    </>
  )
}

export default Home