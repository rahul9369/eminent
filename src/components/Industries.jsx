import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUniversity,
  FaBuilding,
  FaHotel,
  FaHome,
  FaGraduationCap,
  FaMicrophoneAlt,
} from "react-icons/fa";

const Industries = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const industries = [
    {
      name: "Government",
      icon: FaUniversity,
      image:
        "https://i.pinimg.com/736x/63/0c/8d/630c8deaff1ed1f9c051fb64eaf3395f.jpg",
      link: "/government",
    },

    {
      name: "Corporate",
      icon: FaBuilding,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      link: "/corporate",
    },

    {
      name: "Hospitality",
      icon: FaHotel,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      link: "/hospitality",
    },

    {
      name: "Home & Hi-Fi",
      icon: FaHome,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      link: "/home-hifi",
    },

    {
      name: "Education",
      icon: FaGraduationCap,
      image:
        "https://i.pinimg.com/736x/66/af/e9/66afe9d09a65a25ccaefae28b9222456.jpg",
      link: "/education",
    },

    {
      name: "Events & Live Shows",
      icon: FaMicrophoneAlt,
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      link: "/events-live-shows",
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >

        {industries.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              onClick={() => navigate(item.link)}
              className="
                relative
                min-w-full
                h-[60vh]
                md:h-screen
                flex items-center justify-center
                cursor-pointer
                group
              "
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="
                  absolute inset-0
                  w-full h-full
                  object-cover
                  group-hover:scale-105
                  transition duration-700
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* CONTENT */}
              <div className="relative text-center text-white px-6 z-10">

                {/* ICON */}
                <div
                  className="
                    w-16 h-16 mx-auto mb-6
                    flex items-center justify-center
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    border border-white/10
                  "
                >
                  <Icon className="text-3xl" />
                </div>

                {/* TITLE */}
                <h2 className="text-3xl md:text-6xl font-bold mb-4">
                  {item.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-lg leading-8">
                  Delivering premium AV solutions for{" "}
                  {item.name.toLowerCase()} industry with
                  powerful sound and modern technology.
                </p>

                {/* BUTTON */}
                <button
                  className="
                    mt-8
                    px-8 py-4
                    rounded-2xl
                    bg-blue-600
                    hover:bg-blue-700
                    transition
                    font-semibold
                  "
                >
                  Explore More
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Industries;