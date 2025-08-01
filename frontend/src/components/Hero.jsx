import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  // Array of fullscreen clothing store images
  const heroImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80', // Fashion boutique interior
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1920&h=1080&fit=crop&q=80', // Luxury clothing store
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=1080&fit=crop&q=80', // Modern fashion retail
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&q=80', // Designer boutique
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop&q=80', // Trendy clothing store
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&h=1080&fit=crop&q=80', // Fashion showroom
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&q=80', // Minimalist fashion store
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1920&h=1080&fit=crop&q=80'  // Contemporary fashion retail
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleViewCollection = () => {
    navigate('/collection');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
        setIsAnimating(false);
      }, 800);
      
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index) => {
    if (index !== currentImageIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsAnimating(false);
      }, 800);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentImageIndex + 1) % heroImages.length;
    goToSlide(newIndex);
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      
      {/* Fullscreen Background Images with Slide Animation */}
      <div className='absolute inset-0'>
        <div className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
          isAnimating ? 'transform translate-x-full' : 'transform translate-x-0'
        }`}>
          <img 
            className='absolute inset-0 object-cover w-full h-full'
            src={heroImages[currentImageIndex]} 
            alt="Fashion Store"
            loading="lazy"
          />
        </div>
        
        {/* Next image sliding in from the left */}
        {isAnimating && (
          <div className='absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out transform -translate-x-full animate-slideIn'>
            <img 
              className='absolute inset-0 object-cover w-full h-full'
              src={heroImages[(currentImageIndex + 1) % heroImages.length]} 
              alt="Fashion Store"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60'></div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30'></div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute w-32 h-32 rounded-full top-10 left-10 bg-gradient-to-br from-white/10 to-gray-300/10 blur-3xl'></div>
      <div className='absolute w-40 h-40 rounded-full bottom-10 right-10 bg-gradient-to-tl from-white/10 to-gray-200/10 blur-3xl'></div>
      
      {/* Main Content - Centered Text Overlay */}
      <div className='relative z-10 flex items-center justify-center w-full h-full'>
        <div className='max-w-4xl px-8 text-center text-white'>
          
          {/* Top Badge */}
          <div className='flex items-center justify-center gap-4 mb-8 group'>
            <div className='w-16 md:w-24 h-[3px] bg-gradient-to-r from-transparent via-white to-white/60 rounded-full transition-all duration-700 group-hover:w-20 md:group-hover:w-32'></div>
            <p className='text-sm font-bold tracking-[0.3em] md:text-lg text-white/90 hover:text-white transition-colors duration-300 whitespace-nowrap'>
              PREMIUM COLLECTION
            </p>
            <div className='w-16 md:w-24 h-[3px] bg-gradient-to-l from-transparent via-white to-white/60 rounded-full transition-all duration-700 group-hover:w-20 md:group-hover:w-32'></div>
          </div>

          {/* Main Heading */}
          <h1 className='mb-6 text-5xl font-extrabold leading-tight text-transparent transition-transform duration-500 cursor-default md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text hover:scale-105 drop-shadow-2xl'>
            LATEST
            <br />
            <span className='text-4xl text-transparent md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-clip-text'>
              ARRIVALS
            </span>
          </h1>

          {/* Subtitle */}
          <p className='max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed text-gray-200 md:text-xl'>
            Discover the finest selection of premium fashion from world-renowned designers
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col items-center justify-center gap-6 sm:flex-row'>
            <div 
              onClick={handleViewCollection}
              className='flex items-center gap-4 transition-all duration-500 cursor-pointer group hover:translate-x-3'
            >
              <p className='text-lg font-bold tracking-wider text-white transition-colors duration-300 md:text-xl hover:text-gray-200'>
                SHOP NOW
              </p>
              <div className='w-16 md:w-20 h-[3px] bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 group-hover:w-20 md:group-hover:w-28'></div>
              <div className='w-0 h-0 border-l-[12px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent transition-all duration-300 group-hover:border-l-gray-200'></div>
            </div>
            
            <button 
              onClick={handleViewCollection}
              className='px-8 py-4 font-semibold tracking-wide text-white transition-all duration-300 border-2 rounded-full border-white/60 hover:bg-white hover:text-black hover:scale-105 backdrop-blur-sm bg-white/5'
            >
              VIEW COLLECTION
            </button>
          </div>
          
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className='absolute z-20 p-4 transition-all duration-300 transform -translate-y-1/2 border rounded-full bg-white/10 backdrop-blur-md top-1/2 left-8 hover:bg-white/20 hover:scale-110 group border-white/20'
        aria-label="Previous image"
      >
        <svg className='w-6 h-6 text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className='absolute z-20 p-4 transition-all duration-300 transform -translate-y-1/2 border rounded-full bg-white/10 backdrop-blur-md top-1/2 right-8 hover:bg-white/20 hover:scale-110 group border-white/20'
        aria-label="Next image"
      >
        <svg className='w-6 h-6 text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
        </svg>
      </button>

      {/* Image Indicators */}
      <div className='absolute z-20 flex gap-3 transform -translate-x-1/2 bottom-12 left-1/2'>
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border border-white/30 ${
              index === currentImageIndex 
                ? 'w-12 h-3 bg-white shadow-lg' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className='absolute bottom-0 left-0 z-20 w-full h-1 bg-white/20'>
        <div 
          className='h-full transition-all duration-200 ease-linear bg-gradient-to-r from-white via-gray-200 to-white'
          style={{
            width: `${((currentImageIndex + 1) / heroImages.length) * 100}%`
          }}
        />
      </div>
      
      {/* Floating Elements */}
      <div className='absolute w-3 h-3 rounded-full top-1/4 left-1/4 bg-white/30 animate-pulse'></div>
      <div className='absolute w-2 h-2 delay-500 rounded-full top-3/4 right-1/3 bg-white/40 animate-pulse'></div>
      <div className='absolute w-4 h-4 delay-1000 rounded-full top-1/3 right-1/4 bg-white/20 animate-pulse'></div>
      
      {/* Custom CSS for slide animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;