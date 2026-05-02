import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link 
            to="/" 
            className="flex items-center ml-4 md:ml-6" // ✅ CHANGED (logo shift right)
          >
            <img 
              src={Logo} 
              alt="Eminent Logo" 
             className="h-12 md:h-16 w-auto object-contain object-left" // ✅ CHANGED (better size)
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition text-center">
              ABOUT US
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition text-center">
                BRANDS
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-center">
                  <li>
                    <Link
                      to="/brands/amate"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                      Amate
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/brands/louismartin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                      LouisMartin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/solutions"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition text-center">
              SOLUTIONS
            </Link>

            <Link
              to="/casestudy"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition text-center">
              CASE STUDY
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 text-sm font-semibold transition text-center">
              CONTACT US
            </Link>

            {/* CTA Button */}
            <button
              onClick={() => handleNavigation("/contact")}
              className="ml-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
              Get Quote
            </button>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-xl p-4 space-y-2 text-center">
            <button onClick={() => handleNavigation("/")} className="block w-full">Home</button>
            <button onClick={() => handleNavigation("/about")} className="block w-full">About</button>

            <p className="font-semibold">Brands</p>
            <button onClick={() => handleNavigation("/brands/amate")} className="block w-full">Amate</button>
            <button onClick={() => handleNavigation("/brands/louismartin")} className="block w-full">LouisMartin</button>

            <button onClick={() => handleNavigation("/solutions")} className="block w-full">Solutions</button>
            <button onClick={() => handleNavigation("/casestudy")} className="block w-full">Case Study</button>
            <button onClick={() => handleNavigation("/contact")} className="block w-full">Contact</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;