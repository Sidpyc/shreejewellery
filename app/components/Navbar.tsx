"use client";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 h-[90px] md:h-[90px] flex items-center justify-between px-4 mx-auto md:px-20 shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-45 " : "bg-[#d2c2a3] bg-opacity-50"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-[95px] md:h-[125px]" />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <RxHamburgerMenu size={28} className={`${isScrolled?'text-white' : 'text-black'}`} onClick={handleHamburgerClick} />
      </div>

      {/* Links for medium and larger screens */}
      <div className={`hidden md:flex flex-1 items-center justify-end space-x-8 text-black font-semibold ${isScrolled? "text-white" : ""}`}>
        <a href="#carousel" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Our Director
        </a>
        <a href="#carouselthree" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Creative Designs
        </a>
        <a href="#carouseltwo" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          How It's Made
        </a>
        <a href="#connect" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Connect
        </a>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white text-black shadow-lg z-50">
          <a href="#carousel" className="block px-4 py-3 text-lg border-b border-gray-200">
            Home
          </a>
          <a href="#about" className="block px-4 py-3 text-lg border-b border-gray-200">
            Our Director
          </a>
          <a href="#carouselthree" className="block px-4 py-3 text-lg border-b border-gray-200">
            Creative Designs
          </a>
          <a href="#carouseltwo" className="block px-4 py-3 text-lg border-b border-gray-200">
            How It's Made
          </a>
          <a href="#connect" className="block px-4 py-3 text-lg border-b border-gray-200">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
