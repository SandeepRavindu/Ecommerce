import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
       <img src={assets.logo} className="w-36" alt="" />
</Link>
      <ul className="hidden gap-5 text-sm text-gray-700 sm:flex">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />

          <div className="absolute right-0 hidden pt-4 group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.Vector} className="w-5 min-w-5" alt="" />
          <p className="absolute w-4 h-4 text-xs text-center text-white bg-red-500 rounded-full -top-2 -right-2">
            10
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* side bar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-100"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-100"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-100"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-3 pl-6 border-b border-gray-200 hover:bg-gray-100"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
