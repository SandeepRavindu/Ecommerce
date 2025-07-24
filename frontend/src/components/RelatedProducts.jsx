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

  return (
    <div className='my-24'>
      <div className='py-2 text-3xl text-center'>
        <Title2 text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
