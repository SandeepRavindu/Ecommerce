import React from 'react';
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-start justify-between w-full gap-8 px-6 pt-10 border-t border-gray-300 md:flex-row md:px-20">
        {/* Left section */}
        <div className="flex-1">
            <Link to='/'>
       <img src={assets.logo} className="w-36" alt="" />
</Link>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Middle section - Company */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">COMPANY</h2>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right section - Contact */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">GET IN TOUCH</h2>
          <ul className="space-y-2 text-gray-600">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="mt-10 mb-5 text-sm text-center text-gray-700">
        Copyright 2025@ greatstack.dev - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
