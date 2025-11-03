import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Productslist } from '../../Productslist'

function Brandvise() {
    const {brand}=useParams()
    const brandname=decodeURIComponent(brand)

    const disbrndvise=Productslist.filter((product)=>{
        return product.brand.toLocaleLowerCase()===brandname.toLocaleLowerCase()
    })
  return (
    <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Mobiles from {brandname}
        </h1>
        <Link to="/products">
          <button className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 cursor-pointer">
            Back to All
          </button>
        </Link>
      </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {disbrndvise.map((data) => {
              return (
                <div
                  key={data.id}
                  className="bg-white p-4 text-center shadow-md hover:shadow-xl rounded-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-48 rounded-2xl overflow-hidden">
                    <img
                      className="h-full w-full object-contain hover:scale-110 transition-transform duration-300"
                      src={data.image}
                      alt={data.title}
                    />
                  </div>
                  <h2 className="font-bold text-lg md:text-xl mt-3 line-clamp-2">{data.brand}</h2>
                  {/* Title */}
                  <h3 className="font-semibold text-lg md:text-xl mt-3 line-clamp-2">
                    {data.title}
                  </h3>
    
                  {/* Price */}
                  <p className="font-extrabold text-xl text-gray-800 mt-1">
                    {data.price}
                  </p>
    
                  {/* Button */}
                  <Link to={`/singlepro/${data.id}`}>
                    <button className="bg-amber-500 px-5 py-2 mt-3 text-white rounded-lg cursor-pointer hover:bg-amber-600 transition">
                      Details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
  );
  
}

export default Brandvise