import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/title'

const Orders = () => {
  const { orders, currency, products } = useContext(ShopContext)

  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orders.length === 0 ? (
          // No orders state
          <div className='flex flex-col items-center justify-center py-16 text-center'>
            <div className='mb-4 text-6xl text-gray-300'>📦</div>
            <h3 className='mb-2 text-xl font-medium text-gray-600'>No Orders Yet</h3>
            <p className='text-gray-500'>You haven't placed any orders yet.</p>
            <p className='text-gray-500'>Start shopping to see your orders here!</p>
          </div>
        ) : (
          // Orders list
          orders.map((order, index) => (
            <div key={index} className='py-4 text-gray-700 border-t border-b'>
              {/* Order Header */}
              <div className='flex items-center justify-between mb-4 text-sm'>
                <div className='flex items-center gap-4'>
                  <p className='font-medium'>Order #{order.id}</p>
                  <p className='text-gray-500'>Date: {order.date}</p>
                  <p className='text-gray-500'>Payment: {order.method.toUpperCase()}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <p className='h-2 bg-green-500 rounded-full min-w-2'></p>
                  <p className='text-sm'>{order.status}</p>
                  <button className='px-4 py-2 ml-4 text-sm font-medium transition-colors border rounded-sm hover:bg-gray-50'>
                    Track Order
                  </button>
                </div>
              </div>

              {/* Order Items */}
              <div className='space-y-3'>
                {Object.entries(order.cartItems).map(([itemId, sizes]) => {
                  const productData = products.find((product) => product._id === itemId)
                  if (!productData) return null

                  return Object.entries(sizes).map(([size, quantity]) => {
                    if (quantity <= 0) return null
                    
                    return (
                      <div key={`${itemId}-${size}`} className='flex items-center gap-4 p-3 border rounded-lg bg-gray-50'>
                        <img className='object-cover w-16 h-16 rounded' src={productData.image[0]} alt={productData.name} />
                        <div className='flex-1'>
                          <h4 className='text-sm font-medium'>{productData.name}</h4>
                          <div className='flex items-center gap-4 mt-1 text-sm text-gray-600'>
                            <span>{currency}{productData.price}</span>
                            <span>Quantity: {quantity}</span>
                            <span>Size: {size}</span>
                          </div>
                        </div>
                        <div className='text-right'>
                          <p className='font-medium'>Ready to ship</p>
                        </div>
                      </div>
                    )
                  })
                })}
              </div>

              {/* Order Total */}
              <div className='flex justify-end pt-3 mt-4 border-t'>
                <div className='text-right'>
                  <p className='text-sm text-gray-600'>Order Total: <span className='font-medium'>{currency} {order.total}.00</span></p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Orders
