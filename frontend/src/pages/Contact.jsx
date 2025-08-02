import React from 'react'
import Title2 from '../components/Title2'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-b from-white/95 via-gray-50/98 to-white/95'>
      {/* Decorative Background Elements */}
      <div className='absolute rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -top-32 -right-32 sm:-top-48 sm:-right-48 bg-gradient-to-bl from-blue-100/40 to-purple-100/40 blur-3xl'></div>
      <div className='absolute rounded-full w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 -bottom-28 -left-28 sm:-bottom-40 sm:-left-40 bg-gradient-to-tr from-pink-100/30 to-orange-100/30 blur-3xl'></div>
      
      <div className='relative z-10 max-w-6xl px-4 mx-auto sm:px-6'>
        {/* Contact Us Section */}
        <div className='pt-8 pb-6 text-xl text-center border-t border-gray-200/50 sm:pt-12 sm:pb-8 sm:text-2xl'>
          <div className='mb-4 transition-transform duration-300 transform hover:scale-105'>
            <Title2 text1={'CONTACT'} text2={'US'} />
          </div>
          <div className='w-12 h-0.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full mx-auto sm:w-16'></div>
        </div>

        <div className='flex flex-col justify-center gap-8 my-8 md:flex-row md:gap-12 lg:gap-16 sm:my-12 mb-20 sm:mb-28'>
          {/* Image Section */}
          <div className='relative group md:w-1/2'>
            <div className='absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-2xl blur-lg group-hover:blur-xl'></div>
            <img 
              className='relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-500 border border-white/50' 
              src={assets.contact_img} 
              alt="Contact Us" 
            />
            {/* Image overlay effect */}
            <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl group-hover:opacity-100'></div>
          </div>

          {/* Content Section */}
          <div className='flex flex-col items-start justify-center gap-6 md:w-1/2 lg:pl-6 sm:gap-8'>
            
            {/* Our Store Section */}
            <div className='relative w-full p-4 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group sm:p-6'>
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-50/30 to-transparent group-hover:opacity-100'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3 sm:mb-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-blue-600 sm:w-10 sm:h-10'>
                    <div className='w-4 h-4 bg-white rounded-sm sm:w-5 sm:h-5'></div>
                  </div>
                  <p className='text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-700 sm:text-xl'>Our Store</p>
                </div>
                <div className='space-y-1 ml-11 sm:ml-13 sm:space-y-2'>
                  <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                  <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div className='relative w-full p-4 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-xl hover:bg-white/90 group sm:p-6'>
              <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-50/30 to-transparent group-hover:opacity-100'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3 sm:mb-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-gradient-to-br from-purple-500 to-purple-600 sm:w-10 sm:h-10'>
                    <div className='w-5 h-5 bg-white rounded-sm'></div>
                  </div>
                  <p className='text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-purple-700'>Careers at Forever</p>
                </div>
                <p className='mb-6 leading-relaxed text-gray-600 ml-13'>Learn more about our teams and job openings.</p>
                
                <div className='ml-13'>
                  <button className='relative px-8 py-4 overflow-hidden text-sm font-medium transition-all duration-500 border border-gray-800 rounded-lg group/btn hover:shadow-lg'>
                    <div className='absolute inset-0 transition-transform duration-300 transform -translate-x-full bg-gray-800 group-hover/btn:translate-x-0'></div>
                    <span className='relative z-10 text-gray-800 transition-colors duration-300 group-hover/btn:text-white'>
                      Explore Jobs
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className='absolute w-6 h-6 rounded-full top-1/4 left-1/6 bg-blue-300/30 animate-pulse'></div>
        <div className='absolute w-4 h-4 delay-500 rounded-full top-2/3 right-1/4 bg-purple-300/30 animate-pulse'></div>
        <div className='absolute w-8 h-8 delay-1000 rounded-full top-1/2 right-1/6 bg-pink-300/30 animate-pulse'></div>
        <div className='absolute w-5 h-5 delay-700 rounded-full top-1/3 left-1/3 bg-green-300/30 animate-pulse'></div>

        {/* Additional spacing element */}
        <div className='h-20'></div>
      </div>

      <div className='relative z-10'>
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact