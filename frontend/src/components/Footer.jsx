import React from 'react';
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-white"></div>
      <div className="absolute top-0 left-0 rounded-full w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-gradient-to-tl from-gray-300/30 to-gray-200/30 blur-3xl"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="flex flex-col items-start justify-between w-full gap-12 px-6 pt-16 pb-8 md:flex-row md:px-20 lg:px-32">
          
          {/* Left section - Brand */}
          <div className="flex-1 max-w-md">
            <Link to='/' className="inline-block group">
              <div className="relative">
                <img src={assets.logo} className="w-40 transition-all duration-300 group-hover:scale-105" alt="" />
                <div className="absolute transition-all duration-500 rounded-lg -inset-2 bg-gradient-to-r from-gray-400/0 to-gray-500/0 group-hover:from-gray-400/20 group-hover:to-gray-500/20 blur-lg"></div>
              </div>
            </Link>
            
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="relative p-3 transition-all duration-300 border border-gray-300 rounded-full shadow-sm group bg-white/80 backdrop-blur-sm hover:border-gray-500">
                <svg className="w-5 h-5 text-gray-500 transition-colors duration-300 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <div className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-gray-500/10 group-hover:scale-100"></div>
              </a>
              
              <a href="#" className="relative p-3 transition-all duration-300 border border-gray-300 rounded-full shadow-sm group bg-white/80 backdrop-blur-sm hover:border-gray-500">
                <svg className="w-5 h-5 text-gray-500 transition-colors duration-300 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.072-1.064 2.777-1.349 3.396C9.74 23.812 10.827 24.029 12.017 24.029c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                <div className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-gray-500/10 group-hover:scale-100"></div>
              </a>
              
              <a href="#" className="relative p-3 transition-all duration-300 border border-gray-300 rounded-full shadow-sm group bg-white/80 backdrop-blur-sm hover:border-gray-500">
                <svg className="w-5 h-5 text-gray-500 transition-colors duration-300 group-hover:text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.076 5.568c-3.342 0-6.059 2.717-6.059 6.059 0 3.342 2.717 6.059 6.059 6.059 3.342 0 6.059-2.717 6.059-6.059 0-3.342-2.717-6.059-6.059-6.059zm0 10.003c-2.178 0-3.944-1.766-3.944-3.944 0-2.178 1.766-3.944 3.944-3.944 2.178 0 3.944 1.766 3.944 3.944 0 2.178-1.766 3.944-3.944 3.944zm7.736-10.31c0 .78-.633 1.413-1.413 1.413-.78 0-1.413-.633-1.413-1.413s.633-1.413 1.413-1.413c.78 0 1.413.633 1.413 1.413zm4.01 1.435c-.09-1.898-.524-3.58-1.917-4.969-1.385-1.385-3.067-1.823-4.969-1.917-1.958-.111-7.833-.111-9.791 0-1.898.09-3.58.524-4.969 1.917C.082 3.107-.356 4.789-.446 6.687c-.111 1.958-.111 7.833 0 9.791.09 1.898.524 3.58 1.917 4.969 1.389 1.389 3.071 1.827 4.969 1.917 1.958.111 7.833.111 9.791 0 1.898-.09 3.58-.524 4.969-1.917 1.389-1.389 1.827-3.071 1.917-4.969.111-1.958.111-7.833 0-9.791zm-2.521 11.886c-.423 1.062-1.239 1.878-2.305 2.305-1.596.633-5.38.487-7.144.487s-5.552.142-7.144-.487c-1.062-.423-1.878-1.239-2.305-2.305-.633-1.596-.487-5.38-.487-7.144s-.142-5.552.487-7.144c.423-1.062 1.239-1.878 2.305-2.305 1.596-.633 5.38-.487 7.144-.487s5.552-.142 7.144.487c1.062.423 1.878 1.239 2.305 2.305.633 1.596.487 5.38.487 7.144s.146 5.548-.487 7.144z"/>
                </svg>
                <div className="absolute inset-0 transition-transform duration-300 scale-0 rounded-full bg-gray-500/10 group-hover:scale-100"></div>
              </a>
            </div>
          </div>

          {/* Middle section - Company */}
          <div className="min-w-0">
            <h2 className="relative mb-6 text-xl font-bold text-gray-800">
              COMPANY
              <div className="absolute left-0 w-12 h-1 rounded-full -bottom-2 bg-gradient-to-r from-gray-400 to-gray-500"></div>
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="/" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-gray-800 hover:translate-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gray-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-gray-800 hover:translate-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gray-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-gray-800 hover:translate-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gray-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center text-gray-600 transition-all duration-300 hover:text-gray-800 hover:translate-x-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gray-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></span>
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Contact */}
          <div className="min-w-0">
            <h2 className="relative mb-6 text-xl font-bold text-gray-800">
              GET IN TOUCH
              <div className="absolute left-0 w-12 h-1 rounded-full -bottom-2 bg-gradient-to-r from-gray-500 to-gray-400"></div>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="p-2 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm bg-white/80 group-hover:border-gray-500">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span className="transition-colors duration-300 group-hover:text-gray-800">+1-000-000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="p-2 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm bg-white/80 group-hover:border-gray-500">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span className="break-all transition-colors duration-300 group-hover:text-gray-800">greatstackdev@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 group">
                <div className="p-2 transition-all duration-300 border border-gray-300 rounded-lg shadow-sm bg-white/80 group-hover:border-gray-500">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.076 5.568c-3.342 0-6.059 2.717-6.059 6.059 0 3.342 2.717 6.059 6.059 6.059 3.342 0 6.059-2.717 6.059-6.059 0-3.342-2.717-6.059-6.059-6.059zm0 10.003c-2.178 0-3.944-1.766-3.944-3.944 0-2.178 1.766-3.944 3.944-3.944 2.178 0 3.944 1.766 3.944 3.944 0 2.178-1.766 3.944-3.944 3.944zm7.736-10.31c0 .78-.633 1.413-1.413 1.413-.78 0-1.413-.633-1.413-1.413s.633-1.413 1.413-1.413c.78 0 1.413.633 1.413 1.413z"/>
                  </svg>
                </div>
                <a href="#" className="transition-colors duration-300 group-hover:text-gray-800">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="relative">
          <div className="h-px mb-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-6 pb-8 md:px-20 lg:px-32">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-sm text-gray-500">
                Copyright 2025@ greatstack.dev - All Right Reserved.
              </div>
              
              {/* Additional Links */}
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 transition-colors duration-300 hover:text-gray-800">Terms of Service</a>
                <a href="#" className="text-gray-500 transition-colors duration-300 hover:text-gray-800">Privacy Policy</a>
                <a href="#" className="text-gray-500 transition-colors duration-300 hover:text-gray-800">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;