import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import class1 from "../assets/solution/class1.jpg";
import logo1 from "../assets/brand/logo1.png";
import logo2 from "../assets/brand/logo2.png";

import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

import Logo from "../assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // desktop dropdown
  const [openDesktopBrands, setOpenDesktopBrands] = useState(false);
  const [openDesktopSolutions, setOpenDesktopSolutions] = useState(false);

  // mobile dropdown
  const [openBrands, setOpenBrands] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const navigate = useNavigate();

  // ================= NAVIGATION =================
  const handleNavigation = (path) => {
    navigate(path);

    // close all dropdowns
    setIsMenuOpen(false);
    setOpenBrands(false);
    setOpenSolutions(false);
    setOpenDesktopBrands(false);
    setOpenDesktopSolutions(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================= BRANDS =================
  const brands = [
    {
      name: "Amate Audio",
      link: "/brands/amate",
      image: logo1,
    },
    {
      name: "Louis Martin",
      link: "/brands/louismartin",
      image: logo2,
    },
  ];

  // ================= SOLUTIONS =================
  const solutions = [
    {
      name: "Auditoriums",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    },
    {
      name: "Live-events",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
    },
    {
      name: "Night-clubs",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    },
    {
      name: "Restaurants-cafes",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
    {
      name: "Gym-fitness",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      name: "Recording-studios",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
    {
      name: "Retail-outlet",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    // {
    //   name: "Home-hifi",
    //   image:
    //     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    // },
    {
      name: "Smart-classroom",
      image: class1,
    },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white
        border-b border-blue-100
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      "
    >
      {/* TOP LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[82px]">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => handleNavigation("/")}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="Logo"
              className="
                h-12 md:h-14 w-auto object-contain
                transition duration-300 hover:scale-105
              "
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden lg:flex items-center gap-6">

            {/* ABOUT */}
            <button
              onClick={() => handleNavigation("/about")}
              className="
                text-[13px] font-semibold text-gray-700
                hover:text-blue-600 transition duration-300
              "
            >
              ABOUT US
            </button>

            {/* ================= BRANDS ================= */}
            <div className="relative">

              <button
                onClick={() => {
                  setOpenDesktopBrands(!openDesktopBrands);
                  setOpenDesktopSolutions(false);
                }}
                className="
                  flex items-center gap-2
                  text-[13px] font-semibold text-gray-700
                  hover:text-blue-600 transition duration-300
                "
              >
                BRANDS

                <FaChevronDown
                  className={`text-[10px] transition duration-300 ${
                    openDesktopBrands ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDesktopBrands && (
                <div
                  className="
                    absolute top-[45px] left-1/2 -translate-x-1/2
                    w-[460px]
                    rounded-3xl
                    bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black
                    border border-blue-500/20
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    backdrop-blur-xl
                    p-6 z-50
                  "
                >
                  <div className="grid grid-cols-2 gap-5">

                    {brands.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleNavigation(item.link)}
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-3xl
                          overflow-hidden
                          hover:border-blue-400/40
                          hover:-translate-y-1
                          transition-all duration-300
                          group
                        "
                      >

                        {/* LOGO BOX */}
                        <div
                          className="
                            bg-white
                            h-[100px]
                            flex items-center justify-center
                            p-1
                          "
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="
                              w-full
                              h-full
                              object-contain
                              transition-all duration-300
                              group-hover:scale-105
                            "
                          />
                        </div>

                        {/* BRAND NAME */}
                        <div className="p-4">
                          <h3 className="text-sm font-semibold text-white text-center">
                            {item.name}
                          </h3>
                        </div>

                      </button>
                    ))}

                  </div>
                </div>
              )}
            </div>

            {/* ================= SOLUTIONS ================= */}
            <div className="relative">

              <button
                onClick={() => {
                  setOpenDesktopSolutions(!openDesktopSolutions);
                  setOpenDesktopBrands(false);
                }}
                className="
                  flex items-center gap-2
                  text-[13px] font-semibold text-gray-700
                  hover:text-blue-600 transition duration-300
                "
              >
                SOLUTIONS

                <FaChevronDown
                  className={`text-[10px] transition duration-300 ${
                    openDesktopSolutions ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDesktopSolutions && (
                <div
                  className="
                    absolute top-[45px] left-1/2 -translate-x-1/2
                    w-[880px]
                    rounded-3xl
                    bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black
                    border border-blue-500/20
                    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    backdrop-blur-xl
                    p-5 z-50
                  "
                >
                  <div className="grid grid-cols-4 gap-4">

                    {solutions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          handleNavigation(`/solutions/${item.name}`)
                        }
                        className="
                          bg-white/5
                          border border-white/10
                          rounded-2xl overflow-hidden
                          hover:border-blue-400/40
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-full object-cover"
                        />

                        <div className="p-3">
                          <h3 className="text-[11px] font-semibold text-white">
                            {item.name.replace(/-/g, " ")}
                          </h3>
                        </div>
                      </button>
                    ))}

                  </div>
                </div>
              )}
            </div>

            {/* CASE STUDY */}
            <button
              onClick={() => handleNavigation("/casestudy")}
              className="
                text-[13px] font-semibold text-gray-700
                hover:text-blue-600 transition duration-300
              "
            >
              CASE STUDY
            </button>

            {/* DESIGN REQUEST */}
            <button
              onClick={() => handleNavigation("/design-request")}
              className="
                text-[13px] font-semibold text-gray-700
                hover:text-blue-600 transition duration-300
              "
            >
              DESIGN REQUEST
            </button>

            {/* CTA */}
            <button
              onClick={() => handleNavigation("/contact")}
              className="
                group ml-2
                px-5 py-2.5 rounded-full
                bg-gradient-to-r from-[#2563EB] to-black
                text-white text-sm font-semibold
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                hover:scale-105 transition-all duration-300
                flex items-center gap-2
              "
            >
              Contact Us

              <FaArrowRight className="text-xs group-hover:translate-x-1 transition duration-300" />
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              lg:hidden
              w-10 h-10 rounded-xl
              bg-blue-50 text-blue-600
              flex items-center justify-center
            "
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-500
          ${isMenuOpen ? "max-h-[2500px]" : "max-h-0"}
        `}
      >
        <div className="bg-gradient-to-br from-[#07152D] via-[#0B1F40] to-black border-t border-blue-500/20 px-5 py-5">

          <div className="flex flex-col gap-2">

            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT", path: "/about" },
              { name: "CASE STUDY", path: "/casestudy" },
              { name: "CONTACT", path: "/contact" },
              { name: "DESIGN REQUEST", path: "/design-request" },
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => handleNavigation(item.path)}
                className="
                  text-left px-4 py-3 rounded-xl
                  text-white font-medium
                  hover:bg-white/10
                  transition duration-300
                "
              >
                {item.name}
              </button>
            ))}

            {/* MOBILE BRANDS */}
            <div className="mt-3">

              <button
                onClick={() => setOpenBrands(!openBrands)}
                className="
                  w-full flex items-center justify-between
                  px-4 py-3
                  bg-white/10
                  border border-white/10
                  rounded-2xl
                  font-semibold text-white
                "
              >
                BRANDS
                <FaChevronDown />
              </button>

              {openBrands && (
                <div className="grid grid-cols-2 gap-3 mt-3">

                  {brands.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavigation(item.link)}
                      className="
                        bg-white/5
                        border border-white/10
                        rounded-2xl
                        overflow-hidden
                      "
                    >

                      {/* MOBILE LOGO FIX */}
                      <div className="bg-white h-[120px] p-4 flex items-center justify-center">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                            w-full
                            h-full
                            object-contain
                          "
                        />

                      </div>

                      <div className="p-3 text-xs font-semibold text-white text-center">
                        {item.name}
                      </div>

                    </button>
                  ))}

                </div>
              )}
            </div>

            {/* MOBILE SOLUTIONS */}
            <div className="mt-4">

              <button
                onClick={() => setOpenSolutions(!openSolutions)}
                className="
                  w-full flex items-center justify-between
                  px-4 py-3
                  bg-white/10
                  border border-white/10
                  rounded-2xl
                  font-semibold text-white
                "
              >
                SOLUTIONS
                <FaChevronDown />
              </button>

              {openSolutions && (
                <div className="grid grid-cols-2 gap-3 mt-3">

                  {solutions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        handleNavigation(`/solutions/${item.name}`)
                      }
                      className="
                        bg-white/5
                        border border-white/10
                        rounded-2xl overflow-hidden
                      "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-full object-cover"
                      />

                      <div className="p-2 text-[11px] font-semibold text-white">
                        {item.name.replace(/-/g, " ")}
                      </div>
                    </button>
                  ))}

                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNavigation("/contact")}
              className="
                mt-5
                w-full py-3 rounded-2xl
                bg-gradient-to-r from-[#2563EB] to-black
                text-white font-semibold
              "
            >
              Get Quote
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
