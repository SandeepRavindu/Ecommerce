import axios from 'axios';
import Title2 from '../components/Title2';
import { ShopContext } from '../context/ShopContext'
import React, { useContext, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';

const Orders = () => {

const {backendUrl,token, currency } = useContext(ShopContext);
const [orderData, setorderData] = useState([]);

const loadOrderData = async () => {
  try {
    if (!token){
      return null
    }

    const response = await axios.post(backendUrl + '/api/order/userorders',{}, { headers: { token } });
    console.log(response.data);

    if (response.data.success) {
      let allOrdersItem = []
      response.data.orders.map((order) => {
        order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
        })
      })
      console.log(allOrdersItem);
      setorderData(allOrdersItem.reverse());
    }
    
  } catch (error) {
    console.log(error);
    toast.error(error.message);    
  }

}

const getStatusColor = (status) => {
  switch(status?.toLowerCase()) {
    case 'delivered':
      return 'bg-green-500';
    case 'shipped':
      return 'bg-blue-500';
    case 'processing':
      return 'bg-yellow-500';
    case 'cancelled':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
}

useEffect(() => {
  loadOrderData();
},[token])

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      {/* Decorative Background Elements */}
      <div className='absolute rounded-full w-96 h-96 -top-48 -left-48 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl'></div>
      <div className='absolute rounded-full w-80 h-80 -bottom-40 -right-40 bg-gradient-to-tl from-pink-100/30 to-orange-100/30 blur-3xl'></div>
      
      <div className='relative z-10 max-w-6xl px-6 mx-auto'>
        {/* Header */}
        <div className='pt-12 pb-8 text-2xl text-center border-t border-gray-200/50'>
          <div className='mb-4 transition-transform duration-300 transform hover:scale-105'>
            <Title2 text1={'MY'} text2={'ORDERS'} />
          </div>
          <div className='w-16 h-0.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full mx-auto'></div>
          <p className='mt-4 text-sm text-gray-600'>Track and manage your order history</p>
        </div>

        {/* Orders Container */}
        <div className='space-y-6 my-12'>
          {orderData.length === 0 ? (
            <div className='py-16 text-center'>
              <div className='flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-200/70 rounded-full backdrop-blur-sm'>
                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                </svg>
              </div>
              <h3 className='mb-2 text-lg font-medium text-gray-900'>No orders yet</h3>
              <p className='text-gray-500'>When you place orders, they'll appear here</p>
            </div>
          ) : (
            orderData.map((item, index) => (          
              <div key={index} className='relative overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group'>
                <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-50/20 to-transparent group-hover:opacity-100'></div>
                <div className='relative z-10 p-6'>
                  <div className='flex flex-col gap-6 lg:flex-row lg:items-center'>
                    {/* Product Image & Info */}
                    <div className='flex items-start flex-1 gap-4'>
                      <div className='relative group/image'>
                        <div className='absolute transition-all duration-300 -inset-1 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-lg blur group-hover/image:blur-md'></div>
                        <img 
                          className='relative object-cover w-20 h-20 border border-gray-200/50 rounded-lg sm:w-24 sm:h-24 shadow-md transform group-hover/image:scale-105 transition-all duration-300' 
                          src={item.image[0]} 
                          alt={item.name}
                        />
                      </div>
                      
                      <div className='flex-1 min-w-0'>
                        <h3 className='mb-3 text-lg font-semibold text-gray-900 truncate transition-colors duration-300 group-hover:text-gray-700'>{item.name}</h3>
                        
                        <div className='grid grid-cols-2 gap-3 text-sm sm:grid-cols-3'>
                          <div className='px-3 py-2 transition-colors duration-300 rounded-lg bg-gray-50/70 backdrop-blur-sm group-hover:bg-gray-100/70'>
                            <span className='block text-gray-500'>Price</span>
                            <span className='font-semibold text-gray-900'>{currency}{item.price}</span>
                          </div>
                          <div className='px-3 py-2 transition-colors duration-300 rounded-lg bg-gray-50/70 backdrop-blur-sm group-hover:bg-gray-100/70'>
                            <span className='block text-gray-500'>Quantity</span>
                            <span className='font-semibold text-gray-900'>{item.quantity}</span>
                          </div>
                          <div className='px-3 py-2 transition-colors duration-300 rounded-lg bg-gray-50/70 backdrop-blur-sm group-hover:bg-gray-100/70'>
                            <span className='block text-gray-500'>Size</span>
                            <span className='font-semibold text-gray-900'>{item.size}</span>
                          </div>
                        </div>
                        
                        <div className='flex flex-col gap-3 mt-4 text-sm text-gray-600 sm:flex-row sm:items-center'>
                          <div className='flex items-center gap-2'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                            <span>{new Date(item.date).toDateString()}</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
                            </svg>
                            <span>{item.paymentMethod}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status & Actions */}
                    <div className='flex flex-col items-start gap-4 sm:flex-row lg:flex-col sm:items-center lg:items-end lg:w-48'>
                      <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gray-100/70'>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                        <span className='text-sm font-medium text-gray-900 capitalize'>{item.status}</span>
                      </div>
                      
                      <button 
                        onClick={loadOrderData} 
                        className='px-6 py-2.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium rounded-lg hover:from-gray-800 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm'
                      >
                        Track Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>                                                    
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders