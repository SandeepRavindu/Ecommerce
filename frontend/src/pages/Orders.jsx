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

useEffect(() => {
  loadOrderData();
},[token])

  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title2 text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {
          orderData.map((item, index) => (          
            <div key={index} className='flex flex-col gap-4 py-4 text-gray-700 border-t border-b sm:flex-row md:items-center md:justify-between'>
                <div className='flex items-start gap-6 text-sm'>
                  <img  className='w-16 sm:w-20'  src={item.image[0]} alt="" />
                  <div>
                    <p className='font-medium sm:text-base'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                    <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                  </div>

                </div>
                <div className='flex justify-between md:w-1/2'>
                  <div className='flex items-center gap-2'>
                    <p className='h-2 bg-green-500 rounded-full min-w-2'></p>
                    <p className='text-sm md:text-base'>{item.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='px-4 py-2 text-sm font-medium transition-all duration-500 bg-gray-100 border rounded-sm hover:bg-black hover:text-white '>Track Order </button>
                </div>
            </div>                                                    
          ))
        }
      </div>
    </div>
  )
}

export default Orders