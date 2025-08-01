import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Title2 from './Title2';
import ProductItem from './ProductItem'; // assumed import for rendering products

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const navigate = useNavigate();

  const handleShopAllBestsellers = () => {
    navigate('/collection');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5)); // show first 5 best sellers
  }, [products]);

  return (
    <div className='relative px-4 my-20 overflow-hidden sm:px-6 lg:px-8'>
      {/* Premium Background Elements */}
      <div className='absolute rounded-full -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-amber-200/20 via-yellow-200/20 to-orange-200/20 blur-3xl'></div>
      <div className='absolute rounded-full -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-red-200/20 via-pink-200/20 to-purple-200/20 blur-3xl'></div>
      
      {/* Golden accent elements */}
      <div className='absolute w-2 h-2 rounded-full top-10 right-1/4 bg-yellow-400/60 animate-pulse'></div>
      <div className='absolute w-3 h-3 delay-500 rounded-full bottom-20 left-1/3 bg-amber-400/60 animate-pulse'></div>
      <div className='absolute w-1 h-1 delay-1000 rounded-full top-1/3 left-10 bg-orange-400/60 animate-pulse'></div>

      {/* Section Title with Premium Styling */}
      <div className='relative py-16 text-center'>
        {/* Crown/Trophy Icon */}
        <div className='flex justify-center mb-6'>
          <div className='relative p-4 rounded-full shadow-2xl bg-gradient-to-br from-yellow-400 to-amber-500'>
            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M5 16L3 6h5.5l1.5 9 1.5-9H17l-2 10H5zm2.5-7h1l.5 3 .5-3h1l-.5 3L9.5 9H7.5zm7-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-7 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z'/>
            </svg>
            <div className='absolute w-4 h-4 bg-red-500 rounded-full -top-1 -right-1 animate-bounce'></div>
          </div>
        </div>

        <div className='mb-8 text-3xl'>
          <Title2 text1='BEST' text2='SELLERS' />
        </div>
        
        <div className='relative max-w-3xl mx-auto'>
          <p className='text-sm font-light leading-relaxed text-gray-600 sm:text-base md:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          
          {/* Premium decorative line */}
          <div className='flex items-center justify-center gap-4 mt-8'>
            <div className='w-12 h-[2px] bg-gradient-to-r from-transparent to-amber-400'></div>
            <div className='w-3 h-3 rounded-full shadow-lg bg-gradient-to-br from-yellow-400 to-amber-500'></div>
            <div className='w-20 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400'></div>
            <div className='w-3 h-3 rounded-full shadow-lg bg-gradient-to-br from-yellow-400 to-amber-500'></div>
            <div className='w-12 h-[2px] bg-gradient-to-l from-transparent to-amber-400'></div>
          </div>
        </div>
      </div>

      {/* Premium Products Grid */}
      <div className='relative'>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-10'>
          {bestSeller.map((item, index) => (
            <div 
              key={index}
              className='relative transition-all duration-700 transform group hover:scale-110 hover:-translate-y-4'
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'slideInUp 1s ease-out forwards'
              }}
            >
              {/* Premium glow effect */}
              <div className='absolute transition-all duration-700 -inset-4 bg-gradient-to-r from-amber-200/0 via-yellow-200/0 to-orange-200/0 group-hover:from-amber-200/30 group-hover:via-yellow-200/30 group-hover:to-orange-200/30 rounded-3xl blur-2xl -z-10'></div>
              
              {/* Premium container */}
              <div className='relative p-3 transition-all duration-700 border shadow-xl bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-sm rounded-3xl group-hover:shadow-2xl border-amber-100/50 group-hover:border-amber-200/80'>
                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </div>
              
              {/* Bestseller Badge */}
              <div className='absolute z-20 -top-3 -right-3'>
                <div className='relative'>
                  <div className='px-3 py-2 text-xs font-bold text-white transform rounded-full shadow-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rotate-12 animate-pulse'>
                    <div className='flex items-center gap-1'>
                      <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                      </svg>
                      <span>BEST</span>
                    </div>
                  </div>
                  <div className='absolute inset-0 rounded-full opacity-50 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 blur-md animate-ping'></div>
                </div>
              </div>
              
              {/* Ranking number */}
              <div className='absolute z-20 flex items-center justify-center w-8 h-8 text-sm font-bold text-white border-2 border-white rounded-full shadow-lg -top-2 -left-2 bg-gradient-to-br from-gray-800 to-gray-900'>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium CTA Section */}
        <div className='flex flex-col items-center mt-20'>
          <div className='mb-8 text-center'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>Discover More Bestsellers</h3>
            <p className='text-gray-600'>Explore our complete collection of top-rated products</p>
          </div>
          
          <button 
            onClick={handleShopAllBestsellers}
            className='relative px-10 py-4 overflow-hidden font-bold text-white transition-all duration-500 rounded-full group bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:scale-105 hover:shadow-2xl'
          >
            <span className='relative z-10 flex items-center gap-3 tracking-wide'>
              <svg className='w-5 h-5 transition-transform duration-300 group-hover:rotate-12' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
              </svg>
              SHOP ALL BESTSELLERS
              <svg className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </span>
            <div className='absolute inset-0 transition-transform duration-500 origin-center transform scale-x-0 bg-gradient-to-r from-orange-600 to-red-600 group-hover:scale-x-100'></div>
          </button>
        </div>
      </div>
      
      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default BestSeller;