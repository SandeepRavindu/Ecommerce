import React, { useState, useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="sticky top-0 z-[100] border-b shadow-xl border-gray-200 bg-white backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto font-medium max-w-7xl">
        <Link to='/' className="transition-all duration-300 hover:scale-105 group">
          <img src={assets.logo} className="transition-all duration-300 w-36 drop-shadow-lg group-hover:drop-shadow-2xl" alt="" />
        </Link>
        
        <ul className="hidden gap-8 text-sm text-gray-800 sm:flex">
          <NavLink to="/" className="relative flex flex-col items-center gap-1 group">
            <p className="px-4 py-2 font-bold tracking-[0.15em] transition-all duration-300 rounded-lg group-hover:text-gray-600 group-hover:bg-gray-100/70 group-hover:shadow-lg backdrop-blur-sm">HOME</p>
            <hr className="w-0 border-none h-[2px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full transition-all duration-300 group-hover:w-full shadow-md" />
          </NavLink>
          <NavLink to="/collection" className="relative flex flex-col items-center gap-1 group">
            <p className="px-4 py-2 font-bold tracking-[0.15em] transition-all duration-300 rounded-lg group-hover:text-gray-600 group-hover:bg-gray-100/70 group-hover:shadow-lg backdrop-blur-sm">COLLECTION</p>
            <hr className="w-0 border-none h-[2px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full transition-all duration-300 group-hover:w-full shadow-md" />
          </NavLink>
          <NavLink to="/about" className="relative flex flex-col items-center gap-1 group">
            <p className="px-4 py-2 font-bold tracking-[0.15em] transition-all duration-300 rounded-lg group-hover:text-gray-600 group-hover:bg-gray-100/70 group-hover:shadow-lg backdrop-blur-sm">ABOUT</p>
            <hr className="w-0 border-none h-[2px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full transition-all duration-300 group-hover:w-full shadow-md" />
          </NavLink>
          <NavLink to="/contact" className="relative flex flex-col items-center gap-1 group">
            <p className="px-4 py-2 font-bold tracking-[0.15em] transition-all duration-300 rounded-lg group-hover:text-gray-600 group-hover:bg-gray-100/70 group-hover:shadow-lg backdrop-blur-sm">CONTACT</p>
            <hr className="w-0 border-none h-[2px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full transition-all duration-300 group-hover:w-full shadow-md" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Icon */}
          <div className="p-2 sm:p-3 transition-all duration-300 border rounded-full shadow-lg bg-white backdrop-blur-md hover:bg-gray-100 hover:scale-110 group border-gray-300 touch-manipulation">
            <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className="w-4 sm:w-5 transition-transform duration-300 cursor-pointer group-hover:scale-110" alt="" />
          </div>

          {/* Profile Dropdown - only show if user is logged in */}
          {token ? (
            <div className="relative" ref={dropdownRef}>
              <div 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="p-2 sm:p-3 transition-all duration-300 border rounded-full shadow-lg bg-white backdrop-blur-md hover:bg-gray-100 hover:scale-110 border-gray-300 cursor-pointer touch-manipulation"
              >
                <img
                  className="w-4 sm:w-5 transition-transform duration-300"
                  src={assets.profile_icon}
                  alt=""
                />
              </div>

              {profileDropdownOpen && (
                <div className="absolute right-0 z-[60] mt-2 dropdown-menu">
                  <div className="flex flex-col gap-1 px-4 py-4 text-gray-800 border shadow-2xl w-44 bg-white border-gray-300 rounded-xl">
                    <p 
                      onClick={() => {
                        navigate('/orders');
                        setProfileDropdownOpen(false);
                      }} 
                      className="px-3 py-2 font-medium tracking-wide transition-all duration-300 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 hover:shadow-md touch-manipulation"
                    >
                      Orders
                    </p>
                    <p 
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }} 
                      className="px-3 py-2 font-medium tracking-wide transition-all duration-300 rounded-lg cursor-pointer hover:text-red-600 hover:bg-red-50 hover:shadow-md touch-manipulation"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="p-2 sm:p-3 transition-all duration-300 border rounded-full shadow-lg bg-white backdrop-blur-md hover:bg-gray-100 hover:scale-110 group border-gray-300 touch-manipulation">
              <img src={assets.profile_icon} className="w-4 sm:w-5 transition-transform duration-300 group-hover:scale-110" alt="" />
            </Link>
          )}

          <Link to="/cart" className="relative p-2 sm:p-3 transition-all duration-300 border rounded-full shadow-lg bg-white backdrop-blur-md hover:bg-gray-100 hover:scale-110 group border-gray-300 touch-manipulation">
            <img src={assets.Vector} className="w-4 sm:w-5 transition-transform duration-300 min-w-4 sm:min-w-5 group-hover:scale-110" alt="" />
            <div className="absolute flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 -top-1 -right-1 animate-pulse">
              {getCartCount()}
            </div>
          </Link>
          
          <button 
            onClick={() => setVisible(true)}
            className="p-3 transition-all duration-300 border rounded-full shadow-lg bg-white backdrop-blur-md hover:bg-gray-100 hover:scale-110 group border-gray-300 sm:hidden"
            aria-label="Open menu"
          >
            <svg 
              className="w-5 h-5 transition-transform duration-300 text-gray-800 group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* side bar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 shadow-2xl transition-all duration-500 ease-in-out z-[120] ${
          visible ? "w-72" : "w-0"
        }`}
        style={{ 
          overflow: visible ? 'visible' : 'hidden',
          backgroundColor: '#ffffff'
        }}
      >
        <div className="flex flex-col h-full w-full" style={{ backgroundColor: '#ffffff' }}>
          {/* Header with Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 flex-shrink-0 transition-colors duration-200"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="p-1.5 bg-gray-100 rounded-full hover:bg-red-100 transition-colors duration-200">
              <svg className="w-3.5 h-3.5 text-gray-600 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-base font-semibold text-gray-800">Close Menu</p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 py-2" style={{ backgroundColor: '#ffffff' }}>
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="block px-5 py-3 text-base font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              style={{ backgroundColor: '#ffffff' }}
            >
              HOME
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className="block px-5 py-3 text-base font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              style={{ backgroundColor: '#ffffff' }}
            >
              COLLECTION
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="block px-5 py-3 text-base font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              style={{ backgroundColor: '#ffffff' }}
            >
              ABOUT
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="block px-5 py-3 text-base font-medium text-gray-800 border-b border-gray-100 hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              style={{ backgroundColor: '#ffffff' }}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay for mobile menu */}
      {visible && (
        <div 
          className="fixed inset-0 z-[105] bg-black/30 backdrop-blur-sm"
          onClick={() => setVisible(false)}
        />
      )}
      
      {/* Decorative Elements matching Hero */}
      <div className='absolute w-20 h-20 rounded-full top-2 left-10 bg-gradient-to-br from-gray-300/10 to-gray-100/10 blur-2xl'></div>
      <div className='absolute w-24 h-24 rounded-full top-1 right-10 bg-gradient-to-tl from-gray-200/10 to-gray-300/10 blur-2xl'></div>
    </div>
  );
};

export default Navbar;