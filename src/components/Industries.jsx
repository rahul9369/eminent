import React from "react";

const Industries = () => {
  const industries = [
    {
      name: "Government",
      icon: "🏛️",
    },
    {
      name: "Corporate",
      icon: "🏢",
    },
    {
      name: "Hospitality",
      icon: "🏨",
    },
    {
      name: "Home & Hi-Fi",
      icon: "🏠",
    },
    {
      name: "Education",
      icon: "🎓",
    },
    {
      name: "Events & Live Shows",
      icon: "🎤",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className=" mx-auto px-4">
        {/* 🔥 Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            Sound Engineering
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            SECTORS WE SERVE
          </h1>

          <p className="text-gray-600 mt-5 mx-auto text-lg">
            Empowering immersive experiences across industries with world-class
            audiovisual solutions. From conference rooms to auditoriums,
            classrooms to restaurants, live events to home theatres, Eminent
            Audio Visual delivers unmatched sound and visual
            excellence—transforming every space into an inspiring environment.
          </p>
        </div>

        {/* 🔥 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.name}
              </h3>

              {/* Divider */}
              <div className="w-10 h-1 bg-black mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

              {/* CTA */}
              <button className="text-sm font-medium text-gray-600 group-hover:text-black transition">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
