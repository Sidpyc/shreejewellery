"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/small1.jpg', 
      srcLarge: '/images/1.jpg', 
      href: '/page1' 
    },
    { 
      srcSmall: '/images/small2.jpg', 
      srcLarge: '/images/2.jpg', 
      href: '/page2' 
    },
    { 
      srcSmall: '/images/small3.jpg', 
      srcLarge: '/images/3.jpg', 
      href: '/page3' 
    },
    { 
      srcSmall: '/images/small4.jpg', 
      srcLarge: '/images/4.jpg', 
      href: '/page4' 
    },
    { 
      srcSmall: '/images/small5.jpg', 
      srcLarge: '/images/5.jpg', 
      href: '/page5' 
    },
    { 
      srcSmall: '/images/small6.jpg', 
      srcLarge: '/images/6.jpg', 
      href: '/page6' 
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
      id="carousel"
      className="relative w-full h-[calc(100vh-80px)] overflow-hidden" // Carousel now adjusts to the navbar height
    >
      <div
        className="relative w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full"
          >
            <Link href={slide.href}>
              <img
                src={isSmallScreen ? slide.srcSmall : slide.srcLarge}
                className="w-full h-full object-cover" 
                alt={`Slide ${index + 1}`}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 bg-white/50 rounded-full shadow-lg cursor-pointer"
        onClick={goToPrevSlide}
      >
        &#8249;
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-10 w-10 bg-white/50 rounded-full shadow-lg cursor-pointer"
        onClick={goToNextSlide}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
