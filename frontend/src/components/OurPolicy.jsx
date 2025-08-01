import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-72 h-72 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full w-72 h-72 bg-gradient-to-tl from-purple-100/30 to-pink-100/30 blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-2 h-2 rounded-full top-16 right-1/4 bg-blue-400/50 animate-bounce"></div>
      <div className="absolute w-3 h-3 delay-700 rounded-full bottom-16 left-1/4 bg-purple-400/50 animate-bounce"></div>
      
      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-transparent lg:text-4xl bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text">
              Our Commitment
            </h2>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Your satisfaction is our priority. Discover the benefits that make shopping with us exceptional.
          </p>
        </div>

        {/* Policy Cards Grid */}
        <div className="flex flex-col justify-center gap-8 sm:flex-row sm:gap-6 lg:gap-12">
          
          {/* Easy Exchange Policy */}
          <div className="relative group">
            <div className="absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-blue-200/0 via-cyan-200/0 to-teal-200/0 group-hover:from-blue-200/20 group-hover:via-cyan-200/20 group-hover:to-teal-200/20 rounded-3xl blur-xl -z-10"></div>
            
            <div className="relative p-8 text-center transition-all duration-500 transform border shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl group-hover:shadow-2xl border-gray-100/50 group-hover:border-blue-200/50 group-hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-20 h-20 mx-auto transition-all duration-500 shadow-lg bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                  <img src={assets.exchange_icon} className="w-10 h-10 filter brightness-0 invert" alt="" />
                </div>
                <div className="absolute flex items-center justify-center w-6 h-6 rounded-full -top-1 -right-1 bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                Easy Exchange Policy
              </h3>
              <p className="leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                We offer hassle free exchange policy
              </p>
              
              {/* Decorative bottom line */}
              <div className="w-0 h-1 mx-auto mt-6 transition-all duration-500 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-16"></div>
            </div>
          </div>

          {/* 7 Days Return Policy */}
          <div className="relative group">
            <div className="absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-purple-200/0 via-pink-200/0 to-rose-200/0 group-hover:from-purple-200/20 group-hover:via-pink-200/20 group-hover:to-rose-200/20 rounded-3xl blur-xl -z-10"></div>
            
            <div className="relative p-8 text-center transition-all duration-500 transform border shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl group-hover:shadow-2xl border-gray-100/50 group-hover:border-purple-200/50 group-hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-20 h-20 mx-auto transition-all duration-500 shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                  <img src={assets.quality_icon} className="w-10 h-10 filter brightness-0 invert" alt="" />
                </div>
                <div className="absolute flex items-center justify-center w-6 h-6 rounded-full -top-1 -right-1 bg-gradient-to-br from-orange-400 to-red-500 animate-pulse">
                  <span className="text-xs font-bold text-white">7</span>
                </div>
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-purple-600">
                7 Days Return Policy
              </h3>
              <p className="leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                We provide 7 days free return policy
              </p>
              
              {/* Decorative bottom line */}
              <div className="w-0 h-1 mx-auto mt-6 transition-all duration-500 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-16"></div>
            </div>
          </div>

          {/* Best Customer Support */}
          <div className="relative group">
            <div className="absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-emerald-200/0 via-teal-200/0 to-cyan-200/0 group-hover:from-emerald-200/20 group-hover:via-teal-200/20 group-hover:to-cyan-200/20 rounded-3xl blur-xl -z-10"></div>
            
            <div className="relative p-8 text-center transition-all duration-500 transform border shadow-lg bg-white/80 backdrop-blur-sm rounded-3xl group-hover:shadow-2xl border-gray-100/50 group-hover:border-emerald-200/50 group-hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="flex items-center justify-center w-20 h-20 mx-auto transition-all duration-500 shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl group-hover:scale-110 group-hover:rotate-3">
                  <img src={assets.support_img} className="w-10 h-10 filter brightness-0 invert" alt="" />
                </div>
                <div className="absolute flex items-center justify-center w-6 h-6 rounded-full -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse">
                  <span className="text-xs font-bold text-white">24/7</span>
                </div>
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-emerald-600">
                Best Customer Support
              </h3>
              <p className="leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                We provide 24/7 customer support
              </p>
              
              {/* Decorative bottom line */}
              <div className="w-0 h-1 mx-auto mt-6 transition-all duration-500 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-16"></div>
            </div>
          </div>

        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 pt-8 mt-16 border-t border-gray-200/50">
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">Trusted by 10,000+ customers</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <span className="text-sm font-medium">4.9/5 satisfaction rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;