"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/car1small.png', 
      srcLarge: '/images/car1.png', 
      href: '#carousel',
      title: <img src="/images/shree.png" alt="Shree" />,
      description: 'EXCEPTIONAL QUALITY'
    },
    { 
      srcSmall: '/images/car2small.png', 
      srcLarge: '/images/car2.png', 
      href: '#carousel',
      title: <img src="/images/shree.png" alt="Shree" />,
      description: 'MORE THAN JEWELLERY'
    },
    { 
      srcSmall: '/images/car3small.png', 
      srcLarge: '/images/car3.png', 
      href: '#carousel',
      title: <img src="/images/shree.png" alt="Shree" height={40} />,
      description: 'ELEGANCE REFINED IN EVERY PIECE'
    },
    { 
      srcSmall: '/images/car4small.png', 
      srcLarge: '/images/car4.png', 
      href: '#carousel',
      title: <img src="/images/shree.png" alt="Shree" />,
      description: 'SUBTLE ELEGANCE AND LUXURY IN EVERY DESIGN'
    },
    { 
      srcSmall: '/images/car5small.png', 
      srcLarge: '/images/car5.png', 
      href: '#carousel',
      title: <img src="/images/shree.png" alt="Shree" />,
      description: 'LIGHTWEIGHT ELEGANCE'
    }
  ];

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="carousel" className="relative w-full h-auto overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {/* Image */}
            <Link href={slide.href}>
              <img
                src={isSmallScreen ? slide.srcSmall : slide.srcLarge}
                className={`w-full h-auto ${isSmallScreen ? '' : 'lg:h-[100vh] object-cover'}`}
                alt={`Slide ${index + 1}`}
              />
            </Link>

            {/* Text overlay for large screens */}
            {!isSmallScreen && (
              <div className="absolute inset-y-0 left-20 flex flex-col justify-center text-white max-w-[45%]"> 
                <div className="mb-6">{slide.title}</div>
                <p className="text-3xl font-bold tracking-wide leading-tight">
                  {slide.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

   
      {isSmallScreen && (
        <div className="w-full bg-[#3F4020] flex flex-col justify-center text-center py-6 text-white">
          <p className="text-sm mt-2">{slides[activeIndex].description}</p>
        </div>
      )}

    {/* slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-gray-400 hover:text-white   transition-all cursor-pointer"
        onClick={goToPrevSlide}
      >
        <span className="text-8xl font-light">&#8249;</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-gray-400 hover:text-white transition-all cursor-pointer"
        onClick={goToNextSlide}
      >
        <span className="text-8xl font-light">&#8250;</span>
      </button>
    </div>
  );
};

export default Carousel;
