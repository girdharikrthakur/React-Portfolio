import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-10 fixed top-0 w-full left-0 bg-black text-white p-5 shadow shadow-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">&lt; Girdhari /&gt;</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-white">
          <a href="#home" className=" font-semibold text-white hover:underline">
            Home
          </a>
          <a href="#projects" className="font-semibold text-white hover:underline">
            Projects
          </a>
          <a href="#contact" className=" font-semibold text-white hover:underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="block py-2 px-4 font-semibold text-white bg-gray-700 rounded-md">
              Home
            </a>
            <a
              href="#projects"
              className="block py-2 px-4 font-semibold bg-gray-700 rounded-md text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 font-semibold text-white bg-gray-700 rounded-md"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
