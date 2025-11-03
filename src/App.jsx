import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Admin from './Admin/Admin'
import Aheader from './Admin/Aheader'
import Product from './Admin/Products'
import AdminDashboard from './Admin/Admin'
import Header from './User/Components/Header'
import Home from './User/Pages/Home'
import About from './User/Pages/About'
import Products from './User/Pages/Products'
import Contact from './User/Pages/Contact'
import Brandvise from './User/Pages/Brandvise'
import Register from './User/Pages/Register'
import Sign from './User/Pages/Sign'
import Singlepage from './User/Pages/Singlepage'
import PaymentPage from './User/Pages/PaymentPage'
import Cart from './User/Pages/Cart'
import Footer from './User/Components/Footer'


export const provider=createContext()

const App = () => {

  const[show,setShow]=useState(false)
  const [name,setName]=useState('')
  const[showcart,setShowcart]=useState(false)
  const [userdata, setUserdata] = useState([]);
  const [adminuser,setAdminuser]=useState(false)
 const [cart, setCart] = useState(() => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    return JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [];
  }
  return [];
});

useEffect(() => {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    localStorage.setItem(`cart_${currentUser}`, JSON.stringify(cart));
  }
}, [cart]);

    
useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      localStorage.setItem(`cart_${currentUser}`, JSON.stringify(cart));
    }
  }, [cart]);

  
  return (
    <>
    <ToastContainer></ToastContainer>
      <BrowserRouter basename='/Mobileshop'>
      <provider.Provider value={{show,setShow,name,setName,showcart,setShowcart,cart,setCart,userdata,setUserdata,adminuser,setAdminuser}}>
      {
        adminuser ? <Aheader/>: <Header/>
      }
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/signin' element={<Sign/>}></Route>
        <Route path='/products/brandvise/:brand' element={<Brandvise/>}></Route>
        <Route path='/singlepro/:id' element={<Singlepage/>}></Route>
        <Route path='/cart/payment' element={<PaymentPage/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/admin/products' element={<Product/>}></Route>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
      </Routes>
        {showcart && (
        <Cart/>
        )}
        <Footer/>
      </provider.Provider>
    </BrowserRouter>
    </>
    
  )
}

export default App