"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carouselthree = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/banglessmall.png', 
      srcLarge: '/images/carbangles.png', 
      href: '#carouselthree',
      title: 'Bangles',
      description: 'A timeless piece of beauty that completes your traditional look.'
    },
    { 
      srcSmall: '/images/earringssmall.png', 
      srcLarge: '/images/carearring.png', 
      href: '#carouselthree',
      title: 'Earrings',
      description: 'Elegantly crafted earrings that speak of grace and charm.'
    },
    { 
      srcSmall: '/images/necklacesmall.png', 
      srcLarge: '/images/carnecklace.png', 
      href: '#carouselthree',
      title: 'Necklaces',
      description: 'Necklaces designed to radiate luxury and sophistication.'
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
    <div
      id="carouselthree"
      className="relative w-full h-[100vh] overflow-hidden"
    >
      <div
        className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <Link href={slide.href}>
              <img
                src={isSmallScreen ? slide.srcSmall : slide.srcLarge}
                className="w-full h-full object-fill" // Resizes image to fill the carousel space
                alt={`Slide ${index + 1}`}
              />
            </Link>

            {/* Text overlay for mobile screens */}
            {isSmallScreen && (
              <>
              <hr></hr>
                {/* Item name at the top */}
                <div className="absolute top-6 mt-20 w-full text-center text-3xl font-bold text-black  z-20">
                  {slide.title}
                </div>

                {/* Description at the bottom */}
                <div className="absolute bottom-28 w-full text-center text-lg text-white bg-black/50 py-2 z-20">
                  {slide.description} 
                </div>
              </>
            )}

            {/* Text overlay for large screens */}
            {!isSmallScreen && (
              <div className="absolute left-20 inset-y-0 flex flex-col justify-center pl-10 text-white z-20 w-1/3"> 
                <h2 className="text-6xl text-black font-bold mb-4">{slide.title}</h2>
                <p className="text-xl text-black">{slide.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-black hover:text-white transition-all cursor-pointer"
        onClick={goToPrevSlide}
      >
        <span className="text-8xl font-light">&#8249;</span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 text-black hover:text-white transition-all cursor-pointer"
        onClick={goToNextSlide}
      >
        <span className="text-8xl font-light">&#8250;</span>
      </button>
    </div>
  );
};

export default Carouselthree;
