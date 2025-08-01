import React, { useContext, useState } from 'react'
import Title2 from '../components/Title2';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {

  const [method,setMethod] = useState('COD');
  const {navigate, backendUrl, token, cartItems,setCartItems,getCartAmount,delivery_fee, products} = useContext(ShopContext);
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
  });

  const onChangeHandler = (event) => {  // Handle form input changes
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data,[name]:value}))
  } 

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      let orderItems = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
          // orderItems.push({
          //   itemId: items,
          //   size: item,
          //   quantity: cartItems[items][item]
          // });
        }
      }
      
      
      let orderData = {
        address : formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {

        // API Calls for COD
        case 'COD':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers: {token}})
          if (response.data.success) {
            toast.success(response.data.message);
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers: {token}})
          console.log(responseStripe.data);
          
          if (responseStripe.data.success) {
            toast.success(responseStripe.data.message);
            const {session_url} = responseStripe.data;
            window.location.replace(session_url);
            

          } else {
            toast.error(responseStripe.data.message);
          }
        
          break;
        




        default:
          break;
      }
            
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }

  // useEffect(() => {
  //     if (!token && localStorage.getItem('token')){
  //         setToken(localStorage.getItem('token'));
  //         getUserCart(localStorage.getItem('token'));
  //     }
  // })

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/20'>
      {/* Decorative Background Elements */}
      <div className='absolute rounded-full w-96 h-96 -top-48 -right-48 bg-gradient-to-bl from-blue-100/30 to-purple-100/30 blur-3xl animate-pulse'></div>
      <div className='absolute delay-1000 rounded-full w-80 h-80 -bottom-40 -left-40 bg-gradient-to-tr from-pink-100/20 to-orange-100/20 blur-3xl animate-pulse'></div>
      <div className='absolute w-64 h-64 delay-500 rounded-full top-1/3 -left-32 bg-gradient-to-r from-green-100/20 to-teal-100/20 blur-2xl animate-pulse'></div>
      
      {/* Floating decorative elements */}
      <div className='absolute w-6 h-6 rounded-full shadow-lg top-1/4 left-1/6 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 animate-pulse'></div>
      <div className='absolute w-4 h-4 delay-500 rounded-full shadow-lg top-2/3 right-1/4 bg-gradient-to-br from-purple-300/40 to-pink-300/40 animate-pulse'></div>
      <div className='absolute w-8 h-8 delay-1000 rounded-full shadow-lg top-1/2 right-1/6 bg-gradient-to-br from-pink-300/40 to-rose-300/40 animate-pulse'></div>
      
      <div className='relative z-10 px-6 mx-auto max-w-7xl'>
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-8 pt-8 sm:pt-16 min-h-[80vh] border-t border-gray-200/50'>

          {/* -----------left side------------ */}
          <div className='flex flex-col gap-6 w-full sm:max-w-[520px]'>
            {/* Delivery Information Card */}
            <div className='relative p-6 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group'>
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-50/30 to-transparent group-hover:opacity-100'></div>
              
              {/* Decorative corner elements */}
              <div className='absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl from-blue-100/20 to-transparent'></div>
              <div className='absolute bottom-0 left-0 w-12 h-12 rounded-tr-full bg-gradient-to-tr from-purple-100/20 to-transparent'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path>
                    </svg>
                  </div>
                  <div className='transition-transform duration-300 transform hover:scale-105'>
                    <Title2 text1={'DELIVERY'} text2={'INFORMATION'} />
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex gap-3'>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='firstName' 
                        value={formData.firstName} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="text" 
                        placeholder='First name' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='lastName' 
                        value={formData.lastName} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="text" 
                        placeholder='Last name' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                  </div>

                  <div className='relative group/input'>
                    <input 
                      required 
                      onChange={onChangeHandler} 
                      name='email' 
                      value={formData.email} 
                      className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                      type="email" 
                      placeholder='Email address' 
                    />
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                  </div>

                  <div className='relative group/input'>
                    <input 
                      required 
                      onChange={onChangeHandler} 
                      name='street' 
                      value={formData.street} 
                      className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                      type="text" 
                      placeholder='Street' 
                    />
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                  </div>

                  <div className='flex gap-3'>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='city' 
                        value={formData.city} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="text" 
                        placeholder='City' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='state' 
                        value={formData.state} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="text" 
                        placeholder='State' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                  </div>

                  <div className='flex gap-3'>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='zipcode' 
                        value={formData.zipcode} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="number" 
                        placeholder='Zipcode' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                    <div className='relative flex-1 group/input'>
                      <input 
                        required 
                        onChange={onChangeHandler} 
                        name='country' 
                        value={formData.country} 
                        className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                        type="text" 
                        placeholder='Country' 
                      />
                      <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                    </div>
                  </div>

                  <div className='relative group/input'>
                    <input 
                      required 
                      onChange={onChangeHandler} 
                      name='phone' 
                      value={formData.phone} 
                      className='w-full px-4 py-3 transition-all duration-300 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none hover:border-gray-400 bg-white/90 backdrop-blur-sm' 
                      type="number" 
                      placeholder='Phone number' 
                    />
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-200/0 via-blue-200/20 to-blue-200/0 rounded-lg opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 -z-10'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------right side------------ */}
          <div className='flex flex-col gap-6 mt-8 sm:mt-0'>
            {/* Cart Total Card */}
            <div className='relative p-6 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group min-w-80'>
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-50/30 to-transparent group-hover:opacity-100'></div>
              
              {/* Decorative elements */}
              <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-green-100/30 to-transparent rounded-bl-3xl'></div>
              <div className='absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-tr-3xl'></div>
              
              <div className='relative z-10'>
                <CartTotal/>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className='relative p-6 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group'>
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-orange-50/30 to-transparent group-hover:opacity-100'></div>
              
              {/* Decorative corner elements */}
              <div className='absolute top-0 right-0 w-16 h-16 rounded-bl-full bg-gradient-to-bl from-orange-100/20 to-transparent'></div>
              <div className='absolute bottom-0 left-0 w-12 h-12 rounded-tr-full bg-gradient-to-tr from-pink-100/20 to-transparent'></div>
              
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='flex items-center justify-center w-10 h-10 shadow-lg rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-pink-500'>
                    <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'></path>
                    </svg>
                  </div>
                  <div className='transition-transform duration-300 transform hover:scale-105'>
                    <Title2 text1={'PAYMENT'} text2={'METHOD'} />
                  </div>
                </div>

                {/* Payment method selection */}
                <div className='flex flex-col gap-3 lg:flex-row'>
                  <div 
                    onClick={()=>setMethod('stripe')} 
                    className={`flex items-center gap-3 p-4 px-5 border-2 cursor-pointer rounded-xl transition-all duration-300 hover:shadow-md ${method === 'stripe' ? 'border-green-400 bg-green-50/50' : 'border-gray-300 hover:border-gray-400'} group/payment`}
                  >
                    <div className={`min-w-4 h-4 border-2 rounded-full transition-all duration-300 ${method === 'stripe' ? 'bg-green-400 border-green-400' : 'border-gray-400'}`}>
                      {method === 'stripe' && <div className='w-2 h-2 bg-white rounded-full mx-auto mt-0.5'></div>}
                    </div>
                    <img className='h-6 mx-4 transition-transform duration-300 group-hover/payment:scale-105' src={assets.stripe_logo} alt='Stripe'/>
                  </div>

                  <div 
                    onClick={()=>setMethod('COD')} 
                    className={`flex items-center gap-3 p-4 px-5 border-2 cursor-pointer rounded-xl transition-all duration-300 hover:shadow-md ${method === 'COD' ? 'border-green-400 bg-green-50/50' : 'border-gray-300 hover:border-gray-400'} group/payment`}
                  >
                    <div className={`min-w-4 h-4 border-2 rounded-full transition-all duration-300 ${method === 'COD' ? 'bg-green-400 border-green-400' : 'border-gray-400'}`}>
                      {method === 'COD' && <div className='w-2 h-2 bg-white rounded-full mx-auto mt-0.5'></div>}
                    </div>
                    <p className='mx-4 text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover/payment:text-gray-900'>CASH ON DELIVERY</p>
                  </div>
                </div>

                <div className='w-full mt-8'>
                  <button 
                    type='submit' 
                    className='relative w-full px-8 py-4 text-sm font-bold text-white transition-all duration-300 overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:shadow-xl hover:scale-[1.02] group/btn'
                  >
                    <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover/btn:opacity-100'></div>
                    <span className='relative z-10 tracking-wide'>PLACE ORDER</span>
                    
                    {/* Button shine effect */}
                    <div className='absolute inset-0 transition-transform duration-700 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full'></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Additional spacing */}
        <div className='h-20'></div>
      </div>
    </div>
  )
}

export default PlaceOrder