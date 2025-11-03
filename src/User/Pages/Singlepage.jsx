import React, { useContext, useState } from 'react'
import { Productslist } from '../../Productslist'
import { Link, useParams } from 'react-router-dom'
import { ProviderContext } from '../../App'
import { toast } from 'react-toastify'

function Singlepage() {
    

    const { id } = useParams()
    const {cart,setCart}=useContext(ProviderContext)
    const product = Productslist.find((p) => p.id.toLocaleString() === id)

      if (!product) {
         return <h2 className="text-center mt-10 text-red-500">Product not found</h2>
     }
 const addtocart = (product) => {
    const exist = cart.find((item) => item.id === product.id)
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
      toast('product add done',{autoClose:1000})
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
      toast('product add done',{autoClose:1000})
    }
  }

     
     
  return (
    <div className='p-[30px]'>
            <div className='max-w-[1024px] m-auto p-[20px]'>
                <div className='md:flex  gap-3 w-full p-5 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.5)] rounded-2xl' >
                    <div className='md:w-[350px] w-[200px]'>
                        <img className='w-[100%] rounded-2xl object-cover' src={product.fullimg} alt='Mobile Image'  />
                    </div>
                    <div className='p-5 flex flex-col justify-center '>
                        <span className='font-bold flex justify-end text-2xl text-blue-500 capitalize'>Rating : {product.rating}</span>
                        <h2 className='font-bold mt-5'>Description</h2>
                        <h3 className=' mt-5'>{product.description}</h3>
                        <p className='font-bold text-2xl mt-2'>Price : {product.price}</p>
                    </div>
                        
                    
                </div>
                <div className='flex justify-center gap-4 mt-5 items-center'>
                    <button onClick={()=>{addtocart(product)}} className='bg-orange-300 md:p-[10px_20px] p-[5px_10px] md:text-2xl text-white rounded-2xl cursor-pointer'>Shop Now</button>
                <Link to={'/products'}>
                <button className='bg-black md:p-[10px_20px] p-[5px_10px] md:text-2xl  text-white rounded-2xl cursor-pointer'>Back to Products page</button>
                </Link>
                </div>
            </div>
        </div>
  )
}

export default Singlepage