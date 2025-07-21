import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center space-x-2">
        <img src={assets.logo} alt="Logo" className="h-8" />
        <span className="text-xs text-gray-500">ADMIN PANEL</span>
      </div>
      <button onClick={() => setToken('')} className="px-4 py-2 text-white transition bg-gray-700 rounded-full hover:bg-gray-600">
        Logout
      </button>
    </div>
  )
}

export default Navbar
