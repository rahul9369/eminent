import React, { useEffect, useState } from "react";
import img7 from "../assets/hero/img7.JPG";
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

  const industries = [
    {
  name: "Government",
  icon: FaUniversity,
  image: "https://i.pinimg.com/736x/63/0c/8d/630c8deaff1ed1f9c051fb64eaf3395f.jpg",
  link: "/government"
},
    {
      name: "Corporate",
      icon: FaBuilding,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",

    },
    {
      name: "Hospitality",
      icon: FaHotel,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      name: "Home & Hi-Fi",
      icon: FaHome,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    },
    {
      name: "Education",
      icon: FaGraduationCap,
      image:
        "https://i.pinimg.com/736x/66/af/e9/66afe9d09a65a25ccaefae28b9222456.jpg",
    },
    {
      name: "Events & Live Shows",
      icon: FaMicrophoneAlt,
      image:
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    },
  ];

  // 🔥 AUTO SLIDE LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden">

      {/* SLIDER WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >

        {/* duplicate for infinite loop effect */}
        {[...industries, ...industries].map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="relative min-w-full h-[60vh] md:h-[100vh] flex items-center justify-center"
            >

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative text-center text-white px-6">

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md">
                  <Icon className="text-3xl" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
                  Delivering world-class audiovisual solutions for{" "}
                  {item.name.toLowerCase()} sector with innovation, clarity,
                  and performance.
                </p>

              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Industries;