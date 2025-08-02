import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { toast } from 'react-toastify'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [imageLoading, setImageLoading] = useState(true)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  const addToCartHandler = async () => {
    if (!size) {
      toast.error('Please select a product size')
      return
    }

    try {
      // Add to cart using context function with quantity
      for (let i = 0; i < quantity; i++) {
        await addToCart(productData._id, size)
      }
      toast.success(`Successfully added ${quantity} item(s) to the cart!`)
    } catch (error) {
      toast.error('Failed to add item to cart')
    }
  }

  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }

  useEffect(() => {
    fetchProductData()
    setSize('')
    setQuantity(1)
    setImageLoading(true)
    
    // Ensure scroll to top happens after DOM updates
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }, [productId, products])

  return productData ? (
    <div className='px-4 pt-8 mx-auto transition-opacity duration-500 ease-in opacity-100 max-w-7xl sm:px-6 lg:px-8 bg-gradient-to-b from-white/95 via-gray-50/98 to-white/95 min-h-screen'>
      
      {/* Breadcrumb */}
      <nav className='flex mb-8 text-sm text-gray-600'>
        <a href='/' className='transition-colors hover:text-gray-800'>Home</a>
        <span className='mx-2'>/</span>
        <a href='/products' className='transition-colors hover:text-gray-800'>Products</a>
        <span className='mx-2'>/</span>
        <span className='font-medium text-gray-800'>{productData.name}</span>
      </nav>

      {/* Product Data */}
      <div className='grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2 lg:gap-12 lg:mb-16'>
        
        {/* Product Images */}
        <div className='space-y-3 sm:space-y-4'>
          {/* Main Image */}
          <div className='relative overflow-hidden bg-gray-50 rounded-xl group sm:rounded-2xl'>
            {imageLoading && (
              <div className='absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse'>
                <div className='w-6 h-6 border-4 border-gray-300 rounded-full border-t-gray-600 animate-spin sm:w-8 sm:h-8'></div>
              </div>
            )}
            <img 
              className={`w-full h-auto transition-all duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'} group-hover:scale-105`}
              src={image} 
              alt={productData.name}
              onLoad={() => setImageLoading(false)}
            />
            
            {/* Zoom Icon */}
            <div className='absolute p-1.5 transition-opacity duration-300 rounded-full opacity-0 top-3 right-3 bg-white/80 backdrop-blur-sm group-hover:opacity-100 sm:p-2 sm:top-4 sm:right-4'>
              <svg className='w-4 h-4 text-gray-700 sm:w-5 sm:h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
              </svg>
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className='flex gap-2 pb-2 overflow-x-auto sm:gap-3'>
            {productData.image.map((item, index) => (
              <img 
                onClick={() => {
                  setImage(item)
                  setImageLoading(true)
                }}
                src={item} 
                key={index} 
                className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300 flex-shrink-0 sm:w-20 sm:h-20 sm:rounded-lg ${
                  image === item 
                    ? 'ring-2 ring-blue-500 ring-offset-2 scale-105' 
                    : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 opacity-70 hover:opacity-100'
                }`}
                alt={`${productData.name} view ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className='space-y-4 sm:space-y-6'>
          {/* Header */}
          <div>
            <h1 className='mb-3 text-2xl font-bold text-gray-800 sm:mb-4 sm:text-3xl lg:text-4xl'>{productData.name}</h1>
            
            {/* Rating */}
            <div className='flex items-center gap-3 mb-3 sm:gap-4 sm:mb-4'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 sm:w-5 sm:h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
                <span className='ml-2 text-xs text-gray-600 sm:text-sm'>(122 reviews)</span>
              </div>
              
              {/* Wishlist Button */}
              <button 
                onClick={toggleWishlist}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isWishlisted 
                    ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <svg className='w-5 h-5' fill={isWishlisted ? 'currentColor' : 'none'} stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </button>
            </div>

            {/* Price */}
            <div className='flex items-center gap-4 mb-6'>
              <span className='text-4xl font-bold text-gray-800'>{currency}{productData.price}</span>
              <span className='text-xl text-gray-500 line-through'>{currency}{Math.round(productData.price * 1.2)}</span>
              <span className='px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full'>17% OFF</span>
            </div>
          </div>

          {/* Description */}
          <div className='p-6 bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 rounded-2xl shadow-lg border border-gray-200/50'>
            <h3 className='mb-3 font-semibold text-gray-800'>Description</h3>
            <p className='leading-relaxed text-gray-600'>{productData.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-800'>Select Size</h3>
            <div className='flex flex-wrap gap-3'>
              {productData.sizes.map((item, index) => (
                <button 
                  onClick={() => setSize(item === size ? '' : item)} 
                  className={`px-6 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${
                    item === size 
                      ? 'border-gray-600 bg-gray-100 text-gray-800 scale-105 shadow-lg' 
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50 shadow-sm'
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div>
            <h3 className='mb-4 font-semibold text-gray-800'>Quantity</h3>
            <div className='flex items-center gap-4'>
              <div className='flex items-center border-2 border-gray-200 rounded-lg'>
                <button 
                  onClick={() => handleQuantityChange('decrease')}
                  className='p-3 transition-colors duration-200 hover:bg-gray-100'
                  disabled={quantity <= 1}
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 12H4' />
                  </svg>
                </button>
                <span className='px-6 py-3 text-lg font-semibold'>{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange('increase')}
                  className='p-3 transition-colors duration-200 hover:bg-gray-100'
                >
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
                  </svg>
                </button>
              </div>
              <span className='text-gray-600'>In Stock: 50+ items</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex'>
            <button 
              onClick={addToCartHandler}
              className='flex items-center justify-center w-full gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:scale-105 active:scale-95 shadow-xl'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 18a2 2 0 110 4 2 2 0 010-4zM9 18a2 2 0 110 4 2 2 0 010-4z' />
              </svg>
              ADD TO CART
            </button>
          </div>

          {/* Trust Badges */}
          <div className='p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 bg-green-100 rounded-full'>
                  <svg className='w-5 h-5 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-semibold'>100% Original</p>
                  <p className='text-xs text-gray-600'>Authentic product</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full'>
                  <svg className='w-5 h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Cash on Delivery</p>
                  <p className='text-xs text-gray-600'>Pay on delivery</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full'>
                  <svg className='w-5 h-5 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm font-semibold'>Easy Returns</p>
                  <p className='text-xs text-gray-600'>7 days return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mb-16'>
        <div className='flex border-b border-gray-200'>
          <button 
            onClick={() => setActiveTab('description')}
            className={`px-6 py-4 font-semibold transition-colors duration-300 ${
              activeTab === 'description' 
                ? 'text-gray-800 border-b-2 border-gray-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-4 font-semibold transition-colors duration-300 ${
              activeTab === 'reviews' 
                ? 'text-gray-800 border-b-2 border-gray-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Reviews (122)
          </button>
          <button 
            onClick={() => setActiveTab('shipping')}
            className={`px-6 py-4 font-semibold transition-colors duration-300 ${
              activeTab === 'shipping' 
                ? 'text-gray-800 border-b-2 border-gray-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Shipping Info
          </button>
        </div>
        
        <div className='py-8'>
          {activeTab === 'description' && (
            <div className='space-y-4 prose text-gray-600 max-w-none'>
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
              <h4 className='mt-6 mb-3 text-lg font-semibold text-gray-800'>Key Features:</h4>
              <ul className='space-y-2 list-disc list-inside'>
                <li>Premium quality materials</li>
                <li>Expert craftsmanship</li>
                <li>Comfortable fit</li>
                <li>Durable construction</li>
                <li>Style versatility</li>
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className='space-y-6'>
              <div className='p-6 bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 rounded-xl border border-gray-200/50'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full'>
                    <span className='font-semibold text-gray-600'>JD</span>
                  </div>
                  <div>
                    <h4 className='font-semibold'>John Doe</h4>
                    <div className='flex items-center gap-2'>
                      <div className='flex text-yellow-400'>
                        {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                      </div>
                      <span className='text-sm text-gray-500'>2 days ago</span>
                    </div>
                  </div>
                </div>
                <p className='text-gray-600'>Excellent quality product! The material is premium and the fit is perfect. Highly recommended!</p>
              </div>
              
              <div className='p-6 bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 rounded-xl border border-gray-200/50'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full'>
                    <span className='font-semibold text-gray-600'>SM</span>
                  </div>
                  <div>
                    <h4 className='font-semibold'>Sarah Miller</h4>
                    <div className='flex items-center gap-2'>
                      <div className='flex text-yellow-400'>
                        {"★★★★☆".split("").map((star, i) => <span key={i}>{star}</span>)}
                      </div>
                      <span className='text-sm text-gray-500'>1 week ago</span>
                    </div>
                  </div>
                </div>
                <p className='text-gray-600'>Good product overall. Fast delivery and great customer service. Will buy again!</p>
              </div>
            </div>
          )}
          
          {activeTab === 'shipping' && (
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
              <div>
                <h4 className='mb-4 font-semibold text-gray-800'>Shipping Options</h4>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 border border-gray-200/50'>
                    <span>Standard Delivery (5-7 days)</span>
                    <span className='font-semibold'>{currency}10</span>
                  </div>
                  <div className='flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 border border-gray-200/50'>
                    <span>Express Delivery (2-3 days)</span>
                    <span className='font-semibold'>{currency}10</span>
                  </div>
                  <div className='flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50/80 via-white/90 to-gray-50/80 border border-gray-200/50'>
                    <span>Same Day Delivery</span>
                    <span className='font-semibold'>{currency}10</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className='mb-4 font-semibold text-gray-800'>Return Policy</h4>
                <div className='space-y-3 text-gray-600'>
                  <p>• 7-day return policy</p>
                  <p>• Free returns for orders above {currency}500</p>
                  <p>• Item must be in original condition</p>
                  <p>• Return shipping may apply</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts 
        category={productData.category} 
        subCategory={productData.subCategory} 
      />

    </div>
  ) : (
    <div className='flex items-center justify-center h-96'>
      <div className='w-12 h-12 border-4 border-gray-300 rounded-full border-t-gray-600 animate-spin'></div>
    </div>
  )
}

export default Product