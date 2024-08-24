"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[90px] md:h-[90px] flex items-center justify-between px-4 mx-auto md:px-20 relative z-20 bg-[#d2c2a3]">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="h-[95px] md:h-[125px]" />
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <RxHamburgerMenu size={28} className="text-black" onClick={handleHamburgerClick} />
      </div>

      {/* Links for medium and larger screens */}
      <div className="hidden md:flex flex-1 items-center justify-end space-x-8 text-black font-semibold">
        <a href="#carousel" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Home
        </a>
        <a href="#about" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
          Our Director
        </a>
        <a href="#melody" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">
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
        <div className="md:hidden absolute top-[90px] left-0 w-full bg-white text-black shadow-lg z-20">
          <a href="#foyer" className="block px-4 py-3 text-lg border-b border-gray-200">
            Foyer
          </a>
          <a href="#stories" className="block px-4 py-3 text-lg border-b border-gray-200">
            Stories in Stones
          </a>
          <a href="#melody" className="block px-4 py-3 text-lg border-b border-gray-200">
            Melody of Gems
          </a>
          <a href="#craftsmanship" className="block px-4 py-3 text-lg border-b border-gray-200">
            Craftsmanship
          </a>
          <a href="#connect" className="block px-4 py-3 text-lg border-b border-gray-200">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}
