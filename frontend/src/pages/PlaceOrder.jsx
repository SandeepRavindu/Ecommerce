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
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* -----------left side------------ */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]' >
        <div className='my-3 text-xl sm:text-2xl'>
          <Title2 text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number' />

      </div>

      {/* ------------right side------------ */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title2 text1={'PAYMENT'} text2={'METHOD'} />
          {/* -------------payment method selection------------- */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : '' } `}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt=''/>
            </div>
            {/* <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : '' }`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>
            </div> */}
            <div onClick={()=>setMethod('COD')} className='flex items-center gap-3 p-2 px-3 border cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-green-400' : '' }`}></p>
              <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full mt-8 text-end'>
            <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder