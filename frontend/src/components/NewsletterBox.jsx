import React, { useState } from 'react';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // Success state

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    setSubmitted(true); // Show success message
    setEmail(''); // Optional: clear input
    
    // Auto-hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className='relative px-4 py-20 overflow-hidden sm:px-6 lg:px-8'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50'></div>
      <div className='absolute top-0 rounded-full left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 blur-3xl'></div>
      <div className='absolute bottom-0 rounded-full right-1/4 w-96 h-96 bg-gradient-to-tl from-pink-200/20 to-orange-200/20 blur-3xl'></div>
      
      {/* Floating Elements */}
      <div className='absolute w-3 h-3 rounded-full top-16 right-1/3 bg-blue-400/50 animate-bounce'></div>
      <div className='absolute w-2 h-2 delay-700 rounded-full bottom-20 left-1/4 bg-purple-400/50 animate-bounce'></div>
      <div className='absolute w-1 h-1 rounded-full top-1/3 left-1/6 bg-pink-400/50 animate-pulse'></div>

      <div className='relative max-w-4xl mx-auto text-center'>
        {/* Header Section */}
        <div className='mb-12'>
          {/* Icon */}
          <div className='flex justify-center mb-6'>
            <div className='relative p-4 shadow-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl animate-pulse'>
              <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
              <div className='absolute flex items-center justify-center w-4 h-4 bg-red-500 rounded-full -top-1 -right-1 animate-bounce'>
                <span className='text-xs font-bold text-white'>!</span>
              </div>
            </div>
          </div>

          <h2 className='mb-4 text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text animate-fadeIn'>
            Subscribe now & get 20% off
          </h2>
          
          <p className='max-w-2xl mx-auto text-lg leading-relaxed text-gray-500 sm:text-xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Decorative Line */}
          <div className='flex items-center justify-center gap-3 mt-8'>
            <div className='w-16 h-[2px] bg-gradient-to-r from-transparent to-blue-500 rounded-full'></div>
            <div className='w-3 h-3 rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse'></div>
            <div className='w-16 h-[2px] bg-gradient-to-l from-transparent to-purple-500 rounded-full'></div>
          </div>
        </div>

        {/* Form Section */}
        <div className='relative max-w-2xl mx-auto'>
          <form
            onSubmit={onSubmitHandler}
            className='relative group'
          >
            <div className='absolute transition-all duration-500 opacity-0 -inset-2 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 rounded-2xl blur-xl group-hover:blur-2xl group-hover:opacity-100'></div>
            
            <div className='relative flex items-center overflow-hidden transition-all duration-500 border shadow-xl bg-white/90 backdrop-blur-sm rounded-2xl border-gray-200/50 group-hover:shadow-2xl'>
              <div className='relative flex-1'>
                <input
                  className='w-full px-6 py-5 text-lg text-gray-700 placeholder-gray-400 transition-colors duration-300 bg-transparent outline-none focus:placeholder-gray-300'
                  type='email'
                  placeholder='Enter your email address...'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className='absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500'></div>
              </div>
              
              <button
                type='submit'
                className='relative px-8 py-5 overflow-hidden text-sm font-bold tracking-wider text-white transition-all duration-500 bg-gradient-to-r from-gray-800 to-black group/btn hover:from-blue-600 hover:to-purple-600'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  SUBSCRIBE
                  <svg className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </span>
                <div className='absolute inset-0 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover/btn:scale-x-100'></div>
              </button>
            </div>
          </form>

          {/* Success Message */}
          <div className={`mt-6 transition-all duration-500 transform ${
            submitted 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}>
            <div className='inline-flex items-center gap-3 px-6 py-4 border shadow-lg bg-gradient-to-r from-green-50 to-emerald-50 border-green-200/50 rounded-2xl'>
              <div className='flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 animate-bounce'>
                <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'/>
                </svg>
              </div>
              <p className='text-lg font-semibold text-green-700'>
                Thank you! You've successfully subscribed.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className='grid grid-cols-1 gap-6 pt-8 mt-12 border-t sm:grid-cols-3 border-gray-200/50'>
            <div className='flex items-center justify-center gap-3 text-gray-600'>
              <div className='flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full'>
                <svg className='w-4 h-4 text-blue-600' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                </svg>
              </div>
              <span className='text-sm font-medium'>Exclusive Deals</span>
            </div>

            <div className='flex items-center justify-center gap-3 text-gray-600'>
              <div className='flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full'>
                <svg className='w-4 h-4 text-purple-600' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 17.5L6.5 14 12 11.5 17.5 14 12 17.5z'/>
                </svg>
              </div>
              <span className='text-sm font-medium'>Early Access</span>
            </div>

            <div className='flex items-center justify-center gap-3 text-gray-600'>
              <div className='flex items-center justify-center w-8 h-8 bg-green-100 rounded-full'>
                <svg className='w-4 h-4 text-green-600' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                </svg>
              </div>
              <span className='text-sm font-medium'>No Spam Promise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBox;