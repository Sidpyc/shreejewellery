"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Carouseltwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    { 
      srcSmall: '/images/cardesignsmall.png', 
      srcLarge: '/images/cardesign.png', 
      href: '/page1',
      title: 'Designing the Jewel',
      description: 'The initial step where we carefully craft the design, bringing imagination to reality.'
    },
    { 
      srcSmall: '/images/carjewelsmall.png', 
      srcLarge: '/images/carjewel.png', 
      href: '/page3',
      title: 'Selecting the Right Stone',
      description: 'Choosing the perfect stone is crucial to enhance the beauty of the design.'
    },
    { 
      srcSmall: '/images/carhandsmall.png', 
      srcLarge: '/images/carhand.png', 
      href: '/page2',
      title: 'Precise Hand Crafting',
      description: 'Expert hands carefully carve out the intricate details of each piece.'
    },
    { 
      srcSmall: '/images/carpolishsmall.png', 
      srcLarge: '/images/carpolish.png', 
      href: '/page4',
      title: 'Stone Polishing',
      description: 'Polishing each stone to bring out its true sparkle and brilliance.'
    },
    { 
      srcSmall: '/images/carqualitysmall.png', 
      srcLarge: '/images/carquality.png', 
      href: '/page5',
      title: 'Quality Checking',
      description: 'Each piece undergoes strict quality checks to ensure flawless craftsmanship.'
    },
    { 
      srcSmall: '/images/carfinalsmall.png', 
      srcLarge: '/images/carfinal.png', 
      href: '/page6',
      title: 'Final Delivery',
      description: 'The completed jewel is packaged with care and delivered to its owner, ready to dazzle.'
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
    <div id="carouseltwo" className="relative w-full h-auto overflow-hidden">
      <div
        className="relative w-full h-[calc(100vh-100px)] flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <Link href={slide.href}>
              <img
                src={isSmallScreen ? slide.srcSmall : slide.srcLarge}
                className="w-full h-full object-fill"
                alt={`Slide ${index + 1}`}
              />
            </Link>

            {/* Text overlay for mobile screens */}
            {isSmallScreen && (
              <div className="absolute bottom-32 w-full text-center py-2 z-20">
                <p className="font-bold text-4xl text-black">{slide.title}</p>
                <p className="mt-1 font-bold text-lg p-2 text-black">{slide.description}</p>
              </div>
            )}

            {/* Text overlay for large screens */}
            {!isSmallScreen && (
              <div className=" max-w-[50%] absolute top-[50%] -translate-y-[50%] left-10 p-8 text-center text-white z-20"> {/* Added padding for large screens */}
                <h2 className="text-8xl font-bold mb-5">{slide.title}</h2>
                <p className="text-2xl font-bold">{slide.description}</p>
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

export default Carouseltwo;
