import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title2 from './Title2'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice()
      
      // Filter products with same category and subCategory
      productsCopy = productsCopy.filter((item) => 
        category === item.category && subCategory === item.subCategory
      )
      
      // Get first 5 products
      setRelated(productsCopy.slice(0, 5))
    }
  }, [products, category, subCategory])

  if (related.length === 0) {
    return null; // Don't render anything if no related products
  }

  return (
    <section className='py-8 my-24 bg-gradient-to-b from-gray-50 to-white'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='mb-12 text-center'>
          <div className='inline-block text-2xl'>
            <Title2 text1={'RELATED'} text2={'PRODUCTS'} />
          </div>
          <div className='w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-600'></div>
          <p className='max-w-2xl mx-auto mt-4 text-lg text-gray-600'>
            Discover more products from the same collection that might interest you
          </p>
        </div>
        
        {/* Products Grid */}
        <div className='relative'>
          {/* Decorative elements */}
          <div className='absolute w-20 h-20 rounded-full -top-4 -left-4 bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 blur-xl'></div>
          <div className='absolute w-16 h-16 rounded-full -bottom-4 -right-4 bg-gradient-to-br from-pink-100 to-orange-100 opacity-60 blur-xl'></div>
          
          <div className='relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8'>
            {related.map((item, index) => (
              <div 
                key={index}
                className='transition-all duration-300 transform group hover:scale-105 hover:-translate-y-2'
              >
                <div className='relative overflow-hidden transition-shadow duration-300 shadow-sm rounded-2xl hover:shadow-xl'>
                  {/* Product Item with enhanced styling */}
                  <div className='p-2 transition-colors duration-300 bg-white border border-gray-100 rounded-2xl group-hover:border-gray-200'>
                    <ProductItem 
                      id={item._id} 
                      name={item.name} 
                      price={item.price} 
                      image={item.image} 
                    />
                  </div>
                  
                  {/* Hover overlay */}
                  <div className='absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent group-hover:opacity-100 rounded-2xl'></div>
                </div>
                
                {/* Index indicator */}
                <div className='absolute z-20 flex items-center justify-center w-6 h-6 text-xs font-bold text-white transition-opacity duration-300 rounded-full opacity-0 -top-2 -left-2 bg-gradient-to-br from-gray-800 to-gray-600 group-hover:opacity-100'>
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative section */}
        <div className='mt-16 text-center'>
          <div className='inline-flex items-center gap-2 text-sm text-gray-500'>
            <div className='w-8 h-px bg-gradient-to-r from-transparent to-gray-300'></div>
            <span className='px-3 py-1 bg-white border border-gray-200 rounded-full shadow-sm'>
              {related.length} related {related.length === 1 ? 'product' : 'products'} found
            </span>
            <div className='w-8 h-px bg-gradient-to-l from-transparent to-gray-300'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts