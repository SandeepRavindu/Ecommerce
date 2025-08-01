import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title2 from "../components/Title2";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            })
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const handleQuantityChange = (id, size, event) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity >= 0) {
      updateQuantity(id, size, newQuantity);
    }
  };

  const handleRemoveItem = (id, size) => {
    updateQuantity(id, size, 0);
    toast.success("Item removed from cart");
  };

  const handleProceedToCheckout = () => {
    if (cartTotal > 0) {
      toast.success("Proceeding to checkout");
      navigate("/place-order");
    } else {
      toast.error("Your cart is empty");
    }
  };

  const cartTotal = getCartAmount();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="pt-12 border-t border-gray-300">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center justify-center w-10 h-10 bg-white border border-gray-300 rounded-lg shadow-sm">
                <svg className='w-6 h-6 text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 17a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0z'></path>
                </svg>
              </div>
              <Title2 text1={"YOUR"} text2={"CART"} />
              {cartData.length > 0 && (
                <span className="px-3 py-1.5 text-sm font-medium bg-gray-200 text-gray-700 rounded-full">
                  {cartData.length} {cartData.length === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Cart Items Section */}
            <div className="flex-1">
              {cartData.length === 0 ? (
                // Empty cart state
                <div className="p-12 text-center bg-white border border-gray-300 shadow-sm rounded-xl">
                  <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full">
                    <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 17a2 2 0 11-4 0 2 2 0 014 0zM9 17a2 2 0 11-4 0 2 2 0 014 0z'></path>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-gray-900">
                    Your Cart is Empty
                  </h3>
                  <p className="mb-2 text-gray-600">
                    You haven't added any items to your cart yet.
                  </p>
                  <p className="mb-8 text-gray-600">Start shopping to fill your cart!</p>
                  <button
                    onClick={() => navigate("/collection")}
                    className="px-8 py-3 font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-800"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                // Cart items list
                <div className="overflow-hidden bg-white border border-gray-300 shadow-sm rounded-xl">
                  <div className="p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {cartData.map((item, index) => {
                      const productData = products.find(
                        (product) => product._id === item._id
                      );

                      return (
                        <div key={index} className="p-6 transition-colors hover:bg-gray-50">
                          <div className="flex items-center gap-6">
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                              <div className="w-20 h-20 overflow-hidden bg-gray-100 border border-gray-200 rounded-xl">
                                <img
                                  className="object-cover w-full h-full"
                                  src={productData.image[0]}
                                  alt={productData.name}
                                />
                              </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex-1">
                                  <h3 className="mb-2 text-base font-medium text-gray-900">
                                    {productData.name}
                                  </h3>
                                  <div className="flex items-center gap-4">
                                    <span className="text-lg font-semibold text-gray-900">
                                      {currency}{productData.price}
                                    </span>
                                    <span className="px-3 py-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-lg">
                                      Size: {item.size}
                                    </span>
                                  </div>
                                </div>

                                {/* Quantity and Remove */}
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium text-gray-600">Qty:</label>
                                    <input
                                      onChange={(e) => handleQuantityChange(item._id, item.size, e)}
                                      className="w-16 px-3 py-1.5 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                      type="number"
                                      min={1}
                                      value={item.quantity}
                                    />
                                  </div>
                                  
                                  <button
                                    onClick={() => handleRemoveItem(item._id, item.size)}
                                    className="p-2 text-gray-400 transition-colors rounded-lg hover:text-red-500 hover:bg-red-50"
                                    title="Remove item"
                                  >
                                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Summary */}
            {cartData.length > 0 && (
              <div className="w-full lg:w-96">
                <div className="sticky overflow-hidden bg-white border border-gray-300 shadow-sm rounded-xl top-6">
                  <div className="p-6 border-b border-gray-200">
                    <Title2 text1={"CART"} text2={"TOTALS"} />
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium text-gray-900">
                          {currency} {cartTotal}.00
                        </span>
                      </div>
                      
                      <div className="border-t border-gray-200"></div>
                      
                      <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600">Shipping Fee</span>
                        <span className="font-medium text-gray-900">
                          {currency} {delivery_fee}.00
                        </span>
                      </div>
                      
                      <div className="border-t border-gray-200"></div>
                      
                      <div className="flex items-center justify-between py-2">
                        <span className="text-lg font-semibold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">
                          {currency} {cartTotal === 0 ? 0 : cartTotal + delivery_fee}.00
                        </span>
                      </div>
                    </div>
                    
                    <button
                      className="w-full px-6 py-3 mt-6 font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled={cartTotal === 0}
                      onClick={handleProceedToCheckout}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    
                    <button
                      onClick={() => navigate("/collection")}
                      className="w-full px-6 py-3 mt-3 font-medium text-gray-700 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      CONTINUE SHOPPING
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className='h-16'></div>
      </div>
    </div>
  );
};

export default Cart;