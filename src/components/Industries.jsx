import React from "react";
import {
  FaUniversity,
  FaBuilding,
  FaHotel,
  FaHome,
  FaGraduationCap,
  FaMicrophoneAlt,
} from "react-icons/fa";

const Industries = () => {
  const industries = [
    { name: "Government", icon: FaUniversity },
    { name: "Corporate", icon: FaBuilding },
    { name: "Hospitality", icon: FaHotel },
    { name: "Home & Hi-Fi", icon: FaHome },
    { name: "Education", icon: FaGraduationCap },
    { name: "Events & Live Shows", icon: FaMicrophoneAlt },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-auto px-4">
        {/* 🔥 Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            Sound Engineering
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            SECTORS WE SERVE
          </h1>

          <p className="text-gray-600 mt-5 mx-auto text-lg max-w-3xl">
            Empowering immersive experiences across industries with world-class
            audiovisual solutions. From conference rooms to auditoriums,
            classrooms to restaurants, live events to home theatres, Eminent
            Audio Visual delivers unmatched sound and visual excellence.
          </p>
        </div>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {industries.map((item, index) => {
            const Icon = item.icon; // ✅ FIX

            return (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* 🔥 Icon */}
                <div
                  className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl 
                  bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] shadow-md 
                  group-hover:scale-110 transition duration-300">
                  <Icon className="text-white text-2xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.name}
                </h3>

                {/* Divider */}
                <div className="w-10 h-1 bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

                {/* CTA */}
                <button className="text-sm font-medium text-gray-600 group-hover:text-[##4FA3D1] transition">
                  Read More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
