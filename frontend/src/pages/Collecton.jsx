import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title2 from '../components/Title2';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const handleProductClick = (productId) => {
    window.scrollTo(0, 0);
    navigate(`/product/${productId}`);
  };

  // Toggle category
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Toggle subCategory
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply filter
  const applyFilter = () => {
    let productsCopy = products.slice();

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  // Apply sorting
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter(); // For 'relevant', reset filter order
        break;
    }
  };

  // Load products initially
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  // Filter whenever category, subCategory, or search changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  // Sort whenever sortType changes
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-b from-white/95 via-gray-50/98 to-white/95'>
      {/* Decorative Background Elements */}
      <div className='absolute rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -top-32 -left-32 sm:-top-48 sm:-left-48 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl'></div>
      <div className='absolute rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 -bottom-28 -right-28 sm:-bottom-40 sm:-right-40 bg-gradient-to-tl from-pink-100/30 to-orange-100/30 blur-3xl'></div>
      
      <div className='relative z-10 px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col gap-6 pt-8 border-t border-gray-200/50 sm:flex-row sm:gap-10 lg:gap-16 sm:pt-12'>
          
          {/* Filters Sidebar */}
          <div className='w-full sm:min-w-64 lg:min-w-80 sm:w-auto'>
            <div className='p-4 transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 sm:p-6'>
              <div
                onClick={() => setShowFilter(!showFilter)}
                className='flex items-center justify-between gap-3 mb-4 cursor-pointer group sm:mb-6'
              >
                <div className='flex items-center gap-2'>
                  <svg className='w-4 h-4 text-gray-700 transition-colors duration-300 group-hover:text-gray-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z'></path>
                  </svg>
                  <h2 className='text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-gray-700 sm:text-base'>Filters</h2>
                </div>
                <svg
                  className={`h-4 w-4 text-gray-500 sm:hidden transition-transform duration-300 group-hover:text-gray-600 ${showFilter ? 'rotate-90' : ''}`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                </svg>
              </div>

              {/* Category Filter */}
              <div className={`mb-5 sm:mb-7 ${showFilter ? '' : 'hidden'} sm:block`}>
                <h3 className='mb-3 text-xs font-medium tracking-wide text-gray-900 uppercase sm:mb-4 sm:text-sm'>Categories</h3>
                <div className='space-y-2 sm:space-y-2.5'>
                  {['Men', 'Women', 'Kids'].map((cat) => (
                    <label key={cat} className='flex items-center gap-2 cursor-pointer sm:gap-2.5'>
                      <input 
                        className='w-3.5 h-3.5 text-gray-800 border-gray-400 rounded focus:ring-gray-600 focus:ring-1 sm:w-4 sm:h-4' 
                        type='checkbox' 
                        value={cat} 
                        onChange={toggleCategory} 
                      />
                      <span className='text-xs text-gray-700 sm:text-sm'>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SubCategory Filter */}
              <div className={`${showFilter ? '' : 'hidden'} sm:block`}>
                <h3 className='mb-3 text-xs font-medium tracking-wide text-gray-900 uppercase sm:mb-4 sm:text-sm'>Type</h3>
                <div className='space-y-2 sm:space-y-2.5'>
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                    <label key={type} className='flex items-center gap-2.5 cursor-pointer'>
                      <input 
                        className='w-4 h-4 text-gray-800 border-gray-400 rounded focus:ring-gray-600 focus:ring-1' 
                        type='checkbox' 
                        value={type} 
                        onChange={toggleSubCategory} 
                      />
                      <span className='text-sm text-gray-700'>{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div className='flex-1'>
            {/* Header Section */}
            <div className='flex flex-col gap-4 mb-8 text-2xl sm:flex-row sm:justify-between sm:items-center'>
              <div className='flex items-center gap-3'>
                <Title2 text1='ALL' text2='COLLECTIONS' />
                <span className='text-sm text-gray-500'>
                  {filterProducts.length} items
                </span>
              </div>

              <div className='relative'>
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className='pl-4 pr-10 py-2.5 bg-white border border-gray-400 rounded-md text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 min-w-[200px] appearance-none'
                >
                  <option value='relevant'>Sort by: Relevant</option>
                  <option value='low-high'>Sort by: Low to High</option>
                  <option value='high-low'>Sort by: High to Low</option>
                </select>
                <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
                  <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10'>
              {filterProducts.map((item, index) => (
                <div 
                  key={index}
                  onClick={() => handleProductClick(item._id)}
                  className='relative transition-all duration-500 transform cursor-pointer group hover:scale-105 hover:-translate-y-2 h-full'
                >
                  {/* Glow effect on hover */}
                  <div className='absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-blue-200/0 via-purple-200/0 to-pink-200/0 group-hover:from-blue-200/20 group-hover:via-purple-200/20 group-hover:to-pink-200/20 rounded-2xl blur-xl -z-10'></div>
                  
                  {/* Product Item with Enhanced Container */}
                  <div className='relative h-full transition-all duration-500 border shadow-lg bg-white/90 backdrop-blur-sm rounded-2xl group-hover:shadow-2xl border-gray-100/50 flex flex-col overflow-hidden'>
                    <div className='aspect-square bg-gray-50 flex-shrink-0'>
                      <img 
                        src={item.image[0]} 
                        alt={item.name}
                        className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                        onError={(e) => {
                          e.target.src = '/placeholder-image.png';
                        }}
                      />
                    </div>
                    <div className='p-5 flex-grow flex flex-col justify-between'>
                      <h3 className='mb-2 text-base font-normal text-gray-900 line-clamp-2 flex-grow'>{item.name}</h3>
                      <p className='text-lg font-bold text-gray-900 mt-auto'>${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filterProducts.length === 0 && (
              <div className='flex flex-col items-center justify-center py-16 text-center'>
                <div className='flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-lg'>
                  <svg className='w-8 h-8 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </div>
                <h3 className='mb-2 text-lg font-medium text-gray-900'>No products found</h3>
                <p className='text-gray-500'>Try adjusting your filters or search terms</p>
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

export default Collection;