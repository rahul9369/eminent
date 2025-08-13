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
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Music & Recording
              </button>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Pro Audio & Visual
              </button>
              {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Beyma
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    ClockAudio
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    EAW
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Erthpot
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Work Pro
                  </a>
                </div>
              </div> */}
            </div>

            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Shop
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Applications
              </button>
              {/* <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Auditoriums
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Conference Room
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FM & Broadcast
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Gym & Fitness Centers
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Home & Hifi
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Live Music And Event
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Night clubs and Bars
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Restaurants & Cafes
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Retail Outlet
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Smart Classroom
                  </a>
                </div>
              </div> */}
            </div>

            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>

            {/* <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link> */}

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
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
                onClick={() => handleNavigation("/products")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Shop
              </button>
              <button
                onClick={() => handleNavigation("/services")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Services
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                About
              </button>
              <button
                onClick={() => handleNavigation("/contact")}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
