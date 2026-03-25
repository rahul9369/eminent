import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Eminent
              <br />
              <p className="text-[18px] font-semibold"> Audio & Video</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* <div className="relative group"> */}
            <Link
              to="/about"
              className="text-gray-700 cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium">
              ABOUT US
            </Link>
            {/* </div> */}

            {/* <div className="relative group"> */}
            <Link
              to="/brands"
              className="text-gray-700 cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium">
              BRANDS
            </Link>
            {/* </div> */}

            <Link
              to="/solutions"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              SOLUTIONS
            </Link>

            {/* <div className="relative group"> */}
            <Link
              to="/casestudy"
              className="text-gray-700 cursor-pointer hover:text-blue-600 px-3 py-2 text-sm font-medium">
              CASE STUDY
            </Link>

            {/* </div> */}

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              CONTACT US
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => handleNavigation("/")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Home
              </button>

              <button
                onClick={() => handleNavigation("/about")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                About us
              </button>
              <button
                onClick={() => handleNavigation("/brands")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Brands
              </button>
              <button
                onClick={() => handleNavigation("/solutions")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Solutions
              </button>
              <button
                onClick={() => handleNavigation("/casestudy")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Case Study
              </button>

              <button
                onClick={() => handleNavigation("/contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Contact us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
