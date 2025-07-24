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
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title2 text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.length === 0 ? (
          // Empty cart state
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 text-6xl text-gray-300">🛒</div>
            <h3 className="mb-2 text-xl font-medium text-gray-600">
              Your Cart is Empty
            </h3>
            <p className="text-gray-500">
              You haven't added any items to your cart yet.
            </p>
            <p className="text-gray-500">Start shopping to fill your cart!</p>
            <button
              onClick={() => navigate("/collection")}
              className="px-6 py-3 mt-6 text-sm text-white transition-colors bg-black hover:bg-gray-800"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          // Cart items list
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt={productData.name}
                  />
                  <div>
                    <p className="text-xs font-medium sm:text-lg">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) => handleQuantityChange(item._id, item.size, e)}
                  className="px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2"
                  type="number"
                  min={1}
                  value={item.quantity}
                />
                <img
                  onClick={() => handleRemoveItem(item._id, item.size)}
                  className="w-4 mr-4 cursor-pointer sm:w-5"
                  src={assets.cross_icon}
                  alt="Remove"
                />
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-20">
        {cartData.length > 0 && (
          <div className="w-full sm:w-[450px]">
            <div className="my-3 text-xl sm:text-2xl">
              <Title2 text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>
                  {currency} {cartTotal}.00
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>
                  {currency} {delivery_fee}.00
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <b>Total</b>
                <b>
                  {currency} {cartTotal === 0 ? 0 : cartTotal + delivery_fee}.00
                </b>
              </div>
            </div>
            <div className="w-full text-end">
              <button
                className="px-8 py-3 my-8 text-sm text-white transition-colors bg-black disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-gray-800"
                disabled={cartTotal === 0}
                onClick={handleProceedToCheckout}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
