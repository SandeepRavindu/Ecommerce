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
    <div className="relative border-b shadow-xl border-gray-200/50 bg-gradient-to-r from-white/95 via-gray-50/98 to-white/95 backdrop-blur-md">
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

        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <div className="p-3 transition-all duration-300 border rounded-full shadow-lg bg-gray-100/70 backdrop-blur-md hover:bg-gray-200/70 hover:scale-110 group border-gray-300/50">
            <img onClick={()=> setShowSearch(true)} src={assets.search_icon} className="w-5 transition-transform duration-300 cursor-pointer group-hover:scale-110" alt="" />
          </div>

          {/* Profile Dropdown - only show if user is logged in */}
          {token ? (
            <div className="relative" ref={dropdownRef}>
              <div 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="p-3 transition-all duration-300 border rounded-full shadow-lg bg-gray-100/70 backdrop-blur-md hover:bg-gray-200/70 hover:scale-110 border-gray-300/50 cursor-pointer"
              >
                <img
                  className="w-5 transition-transform duration-300"
                  src={assets.profile_icon}
                  alt=""
                />
              </div>

              {profileDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 dropdown-menu">
                  <div className="flex flex-col gap-1 px-4 py-4 text-gray-800 border shadow-2xl w-44 bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95 border-gray-200/50 rounded-xl backdrop-blur-md">
                    <p 
                      onClick={() => {
                        navigate('/orders');
                        setProfileDropdownOpen(false);
                      }} 
                      className="px-3 py-2 font-medium tracking-wide transition-all duration-300 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100/70 hover:shadow-md"
                    >
                      Orders
                    </p>
                    <p 
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }} 
                      className="px-3 py-2 font-medium tracking-wide transition-all duration-300 rounded-lg cursor-pointer hover:text-red-600 hover:bg-red-50/70 hover:shadow-md"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="p-3 transition-all duration-300 border rounded-full shadow-lg bg-gray-100/70 backdrop-blur-md hover:bg-gray-200/70 hover:scale-110 group border-gray-300/50">
              <img src={assets.profile_icon} className="w-5 transition-transform duration-300 group-hover:scale-110" alt="" />
            </Link>
          )}

          <Link to="/cart" className="relative p-3 transition-all duration-300 border rounded-full shadow-lg bg-gray-100/70 backdrop-blur-md hover:bg-gray-200/70 hover:scale-110 group border-gray-300/50">
            <img src={assets.Vector} className="w-5 transition-transform duration-300 min-w-5 group-hover:scale-110" alt="" />
            <div className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 -top-1 -right-1 animate-pulse">
              {getCartCount()}
            </div>
          </Link>
          
          <div className="p-3 transition-all duration-300 border rounded-full shadow-lg bg-gray-100/70 backdrop-blur-md hover:bg-gray-200/70 hover:scale-110 group border-gray-300/50 sm:hidden">
            <img
              onClick={() => setVisible(true)}
              src={assets.menu_icon}
              className="w-5 transition-transform duration-300 cursor-pointer group-hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* side bar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-gradient-to-br from-white/98 via-gray-50/98 to-white/98 backdrop-blur-lg shadow-2xl transition-all duration-500 ease-in-out z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col h-full text-gray-800">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-6 transition-all duration-300 border-b cursor-pointer border-gray-200/50 hover:bg-gray-100/50"
          >
            <div className="p-2 transition-all duration-300 border rounded-full bg-gray-100/70 hover:bg-gray-200/70 border-gray-300/50">
              <img src={assets.dropdown} className="h-4 rotate-180" alt="" />
            </div>
            <p className="font-bold tracking-wide text-gray-800">Back</p>
          </div>
          
          <div className="flex-1 py-4">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="block px-8 py-4 font-bold tracking-[0.15em] transition-all duration-300 border-b border-gray-200/30 hover:bg-gradient-to-r hover:from-gray-100/70 hover:to-gray-50/50 hover:text-gray-600 hover:shadow-lg"
            >
              HOME
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className="block px-8 py-4 font-bold tracking-[0.15em] transition-all duration-300 border-b border-gray-200/30 hover:bg-gradient-to-r hover:from-gray-100/70 hover:to-gray-50/50 hover:text-gray-600 hover:shadow-lg"
            >
              COLLECTION
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="block px-8 py-4 font-bold tracking-[0.15em] transition-all duration-300 border-b border-gray-200/30 hover:bg-gradient-to-r hover:from-gray-100/70 hover:to-gray-50/50 hover:text-gray-600 hover:shadow-lg"
            >
              ABOUT
            </NavLink>

            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="block px-8 py-4 font-bold tracking-[0.15em] transition-all duration-300 border-b border-gray-200/30 hover:bg-gradient-to-r hover:from-gray-100/70 hover:to-gray-50/50 hover:text-gray-600 hover:shadow-lg"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Backdrop overlay for mobile menu */}
      {visible && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm sm:hidden"
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