import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/title'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const { products, currency, cartItems, getCartAmount, delivery_fee, clearCart, addOrder } = useContext(ShopContext)
  const [method, setMethod] = useState('cod')
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.street || !formData.city || !formData.phone) {
      toast.error('Please fill in all required fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    // Check if cart is not empty
    const cartTotal = getCartAmount()
    if (cartTotal === 0) {
      toast.error('Your cart is empty')
      return
    }

    try {
      // Create order data
      const orderData = {
        formData,
        cartItems,
        method,
        total: cartTotal + delivery_fee
      };
      
      // Here you would typically send order data to backend
      console.log('Order Data:', orderData);
      
      // Add order to orders list
      addOrder(orderData);
      
      toast.success('Order placed successfully!')
      
      // Clear the cart after successful order placement
      clearCart()
      
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
      })
      
      // Navigate to orders page after a short delay
      setTimeout(() => {
        navigate('/orders')
      }, 1500)
      
    } catch (error) {
      console.error('Order placement error:', error)
      toast.error('Failed to place order. Please try again.')
    }
  }

  const cartTotal = getCartAmount()

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* ------------- Left Side ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='my-3 text-xl sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        
        <div className='flex gap-3'>
          <input 
            required 
            onChange={handleInputChange} 
            name='firstName' 
            value={formData.firstName} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="text" 
            placeholder='First name' 
          />
          <input 
            required 
            onChange={handleInputChange} 
            name='lastName' 
            value={formData.lastName} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="text" 
            placeholder='Last name' 
          />
        </div>
        
        <input 
          required 
          onChange={handleInputChange} 
          name='email' 
          value={formData.email} 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="email" 
          placeholder='Email address' 
        />
        
        <input 
          required 
          onChange={handleInputChange} 
          name='street' 
          value={formData.street} 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="text" 
          placeholder='Street' 
        />
        
        <div className='flex gap-3'>
          <input 
            required 
            onChange={handleInputChange} 
            name='city' 
            value={formData.city} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="text" 
            placeholder='City' 
          />
          <input 
            onChange={handleInputChange} 
            name='state' 
            value={formData.state} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="text" 
            placeholder='State' 
          />
        </div>
        
        <div className='flex gap-3'>
          <input 
            required 
            onChange={handleInputChange} 
            name='zipcode' 
            value={formData.zipcode} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="number" 
            placeholder='Zipcode' 
          />
          <input 
            required 
            onChange={handleInputChange} 
            name='country' 
            value={formData.country} 
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
            type="text" 
            placeholder='Country' 
          />
        </div>
        
        <input 
          required 
          onChange={handleInputChange} 
          name='phone' 
          value={formData.phone} 
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          type="number" 
          placeholder='Phone' 
        />

      </div>

      {/* ------------- Right Side ------------------ */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <div className='my-3 text-xl sm:text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'} />
          </div>
          
          <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>{currency} {cartTotal}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Shipping Fee</p>
              <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <b>Total</b>
              <b>{currency} {cartTotal === 0 ? 0 : cartTotal + delivery_fee}.00</b>
            </div>
          </div>

          <div className='mt-12'>
            <div className='my-3 text-xl sm:text-2xl'>
              <Title text1={'PAYMENT'} text2={'METHOD'} />
            </div>
            
            {/* --------------- Payment Method Selection ------------- */}
            <div className='flex flex-col gap-3 lg:flex-row'>
              <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                <p className='mx-4 text-sm font-medium text-gray-500'>STRIPE</p>
              </div>
              
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <p className='mx-4 text-sm font-medium text-gray-500'>RAZORPAY</p>
              </div>
              
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
              </div>
            </div>

            <div className='w-full mt-8 text-end'>
              <button 
                type='submit' 
                className='px-16 py-3 text-sm text-white transition-colors bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed'
                disabled={cartTotal === 0}
              >
                PLACE ORDER
              </button>
            </div>

          </div>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder
