import React from 'react'
import Title2 from '../components/Title2'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100'>
      {/* Decorative Background Elements */}
      <div className='absolute rounded-full w-96 h-96 -top-48 -left-48 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl'></div>
      <div className='absolute rounded-full w-80 h-80 -bottom-40 -right-40 bg-gradient-to-tl from-pink-100/30 to-orange-100/30 blur-3xl'></div>
      
      <div className='relative z-10 max-w-6xl px-6 mx-auto'>
        {/* About Us Section */}
        <div className='pt-12 pb-8 text-2xl text-center border-t border-gray-200/50'>
          <div className='mb-4 transition-transform duration-300 transform hover:scale-105'>
            <Title2 text1={'ABOUT'} text2={'US'} />
          </div>
          <div className='w-16 h-0.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full mx-auto'></div>
        </div>

        <div className='flex flex-col items-start gap-12 my-12 md:flex-row lg:gap-16'>
          <div className='relative w-full group md:w-1/2'>
            <div className='absolute transition-all duration-500 -inset-2 bg-gradient-to-r from-blue-200/15 via-purple-200/15 to-pink-200/15 rounded-2xl blur-lg group-hover:blur-xl'></div>
            <img 
              className='relative w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-xl transform group-hover:scale-[1.02] transition-all duration-500 border border-white/50' 
              src={assets.about_img} 
              alt="About Us" 
            />
            {/* Image overlay effect */}
            <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-2xl group-hover:opacity-100'></div>
          </div>
          
          <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-1/2 lg:pl-6'>
            <div className='space-y-6'>
              <div className='transition-transform duration-300 transform hover:translate-x-1'>
                <p className='relative p-6 overflow-hidden text-base leading-relaxed transition-all duration-300 border shadow-md bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-lg hover:bg-white/90 group'>
                  <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-50/20 to-transparent group-hover:opacity-100'></div>
                  <span className='relative z-10'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</span>
                </p>
              </div>
              
              <div className='transition-transform duration-300 delay-75 transform hover:translate-x-1'>
                <p className='relative p-6 overflow-hidden text-base leading-relaxed transition-all duration-300 border shadow-md bg-white/80 backdrop-blur-sm rounded-xl border-gray-200/50 hover:shadow-lg hover:bg-white/90 group'>
                  <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-50/20 to-transparent group-hover:opacity-100'></div>
                  <span className='relative z-10'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</span>
                </p>
              </div>
              
              <div className='transition-transform duration-300 delay-150 transform hover:translate-x-1'>
                <div className='relative p-6 overflow-hidden transition-all duration-300 border shadow-lg bg-gradient-to-br from-gray-100/70 via-white/80 to-gray-50/70 backdrop-blur-sm rounded-xl border-gray-300/50 hover:shadow-xl group'>
                  <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-gray-200/15 to-transparent group-hover:opacity-100'></div>
                  <div className='relative z-10'>
                    <b className='flex items-center block gap-2 mb-4 text-lg font-bold tracking-wide text-gray-800'>
                      <div className='w-1.5 h-6 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full'></div>
                      Our Mission
                    </b>
                    <p className='text-base leading-relaxed text-gray-700'>
                      Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='py-8 mt-16 text-xl text-center'>
          <div className='mb-4 transition-transform duration-300 transform hover:scale-105'>
            <Title2 text1={'WHY'} text2={'CHOOSE US'} />
          </div>
          <div className='w-20 h-0.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 rounded-full mx-auto'></div>
        </div>

        <div className='flex flex-col gap-6 mb-20 text-sm md:flex-row'>
          <div className='relative flex flex-col gap-5 px-8 py-12 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm border-gray-200/50 rounded-xl hover:shadow-xl hover:bg-white/90 group'>
            {/* Animated background */}
            <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 group-hover:opacity-100'></div>
            
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-blue-600'>
                  <div className='w-4 h-4 bg-white rounded-sm'></div>
                </div>
                <b className='text-base font-bold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-blue-700'>Quality Assurance:</b>
              </div>
              <p className='text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 pl-11'>
                We meticulously select and vet each product to ensure it meets our stringent quality standards.
              </p>
            </div>
          </div>
          
          <div className='relative flex flex-col gap-5 px-8 py-12 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm border-gray-200/50 rounded-xl hover:shadow-xl hover:bg-white/90 group'>
            {/* Animated background */}
            <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-green-50/40 to-teal-50/40 group-hover:opacity-100'></div>
            
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-gradient-to-br from-green-500 to-green-600'>
                  <div className='w-4 h-4 bg-white rounded-sm'></div>
                </div>
                <b className='text-base font-bold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-green-700'>Convenience:</b>
              </div>
              <p className='text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 pl-11'>
                With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
              </p>
            </div>
          </div>
          
          <div className='relative flex flex-col gap-5 px-8 py-12 overflow-hidden transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm border-gray-200/50 rounded-xl hover:shadow-xl hover:bg-white/90 group'>
            {/* Animated background */}
            <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-orange-50/40 to-pink-50/40 group-hover:opacity-100'></div>
            
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='flex items-center justify-center w-8 h-8 rounded-lg shadow-md bg-gradient-to-br from-orange-500 to-orange-600'>
                  <div className='w-4 h-4 bg-white rounded-sm'></div>
                </div>
                <b className='text-base font-bold tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-orange-700'>Exceptional Customer Service:</b>
              </div>
              <p className='text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 pl-11'>
                Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.
              </p>
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

export default About