import React, { useContext } from 'react'
import { provider } from '../../App'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cart, setCart ,name,show,setShowcart} = useContext(provider)
  const navi=useNavigate()

  const incQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  // 👉 Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handlepayment=()=>{
    if(!show){
      alert("login required")
      navi('/signin')
      setShowcart(false)
    }
    else{
      navi('/cart/payment')
      setShowcart(false)
    }
  }

  return (
    <div className='bg-black/70 fixed top-18 right-0 md:w-[500px] w-[100vw] h-[90vh] z-[1000] md:p-4 p-2 pt-5 overflow-y-scroll '>
      <h2 className='text-white text-xl font-bold mb-4'>{name}</h2>
      <div className='text-white absolute top-0 right-3 text-2xl  cursor-pointer' onClick={()=>{setShowcart(false)}}><i className="fa-solid fa-xmark"></i></div>
      {cart.length === 0 ? (
        <p className='text-white'>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-between md:gap-4 md:p-4  border rounded-2xl shadow-sm bg-white mb-3'
            >
              <div className='w-20 h-20 flex-shrink-0'>
                <img
                  src={item.fullimg}
                  alt={item.title}
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>
              <div className='flex-1'>
                <h3 className='font-bold md:text-lg'>{item.title}</h3>
                <p className='text-gray-600'>
                  ${item.price} × {item.quantity} ={' '}
                </p>
              </div>
              <span className='font-semibold'>
                    ${item.price * item.quantity}
                  </span>
              <div className='flex items-center md:gap-2 '>
                <button
                  onClick={() => decQuantity(item.id)}
                  className='rounded-xl hover:bg-gray-100 cursor-pointer'
                >
                  <i className='fa-solid fa-minus'></i>
                </button>
                <span className='px-3 text-lg font-semibold'>
                  {item.quantity}
                </span>
                <button
                  onClick={() => incQuantity(item.id)}
                  className=' rounded-xl hover:bg-gray-100 cursor-pointer'
                >
                  <i className='fa-solid fa-plus'></i>
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className='p-2 text-red-500 hover:bg-red-100 rounded-full cursor-pointer'
              >
                <i className='fa-solid fa-trash'></i>
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className='mt-5 p-4 bg-white rounded-2xl shadow-md'>
            <h3 className='text-xl font-bold text-gray-800 flex justify-between'>
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </h3>
          </div>
          <div className='text-2xl text-white mt-3 flex justify-center items-center'>
            <button className='p-2 bg-amber-400 rounded-2xl cursor-pointer' onClick={handlepayment} >Payment</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
