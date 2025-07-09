 import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collecton from './pages/Collecton'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collecton' element={<Collecton />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
       </Routes>
    </div>
  )
}

export default App

