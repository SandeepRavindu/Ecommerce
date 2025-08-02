import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  const handleClick = () => {
    // Force scroll to top with multiple methods to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 0)
  }

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`} onClick={handleClick}>
      <div className='overflow-hidden'>
        <img className='transition ease-in-out hover:scale-110' src={Array.isArray(image) ? image[0] : image} alt="" />
         
      </div>
      <p className='pt-2 pb-0.5 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
