import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Title2 from './Title2';
import ProductItem from './ProductItem';
import './LatestCollections.css';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const navigate = useNavigate();

  const handleViewAllCollections = () => {
    navigate('/collection');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Get first 10 products
  }, [products]);

  return (
    <div className='relative px-4 my-16 overflow-hidden sm:px-6 lg:px-8'>
      {/* Background Decorative Elements */}
      <div className='absolute top-0 w-64 h-64 rounded-full left-1/4 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl -z-10'></div>
      <div className='absolute bottom-0 rounded-full right-1/4 w-80 h-80 bg-gradient-to-tl from-pink-100/30 to-orange-100/30 blur-3xl -z-10'></div>
      
      {/* Header Section */}
      <div className='relative py-12 text-3xl text-center'>
        <div className='mb-6'>
          <Title2 text1={'LATEST'} text2={'COLLECTIONS'} />
        </div>
        
        <div className='relative max-w-2xl mx-auto'>
          <p className='text-sm font-light leading-relaxed text-gray-600 sm:text-base md:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          {/* Decorative underline */}
          <div className='flex justify-center mt-6'>
            <div className='w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className='absolute w-3 h-3 rounded-full top-8 left-8 bg-blue-400/50 animate-bounce'></div>
        <div className='absolute w-2 h-2 delay-300 rounded-full top-16 right-12 bg-purple-400/50 animate-bounce'></div>
        <div className='absolute w-4 h-4 delay-700 rounded-full bottom-8 left-16 bg-pink-400/50 animate-bounce'></div>
      </div>

      {/* Products Grid Section */}
      <div className='relative'>
        {/* Grid Container with Enhanced Styling */}
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-10'>
          {latestProducts.map((item, index) => (
            <div 
              key={index}
              className='relative transition-all duration-500 transform group hover:scale-105 hover:-translate-y-2'
            >
              {/* Glow effect on hover */}
              <div className='absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-blue-200/0 via-purple-200/0 to-pink-200/0 group-hover:from-blue-200/20 group-hover:via-purple-200/20 group-hover:to-pink-200/20 rounded-2xl blur-xl -z-10'></div>
              
              {/* Product Item with Enhanced Container */}
              <div className='relative p-2 transition-all duration-500 border shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl group-hover:shadow-2xl border-gray-100/50'>
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </div>
              
              {/* Floating badge for new items */}
              {index < 3 && (
                <div className='absolute z-10 px-3 py-1 text-xs font-bold text-white rounded-full shadow-lg -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse'>
                  NEW
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Show More Button */}
        <div className='flex justify-center mt-16'>
          <button 
            onClick={handleViewAllCollections}
            className='relative px-8 py-4 overflow-hidden font-semibold text-white transition-all duration-300 rounded-full group bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 hover:shadow-2xl'
          >
            <span className='relative z-10 tracking-wide'>VIEW ALL COLLECTIONS</span>
            <div className='absolute inset-0 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-x-100'></div>
            <div className='absolute transition-transform duration-300 transform -translate-y-1/2 right-4 top-1/2 group-hover:translate-x-1'>
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </div>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default LatestCollection;