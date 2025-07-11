import React from "react";

const Industries = () => {
  const industries = [
    "Government",
    "Corporate",
    "Hospitality",
    "Home & Hi- Fi",
    "Education",
    "Events & Live shows",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SOUND ENGINEERING FOR IMMERSIVE WORLDS
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            INDUSTRIES WE SERVE
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Empowering immersive experiences across diverse industries with
            top-tier audiovisual solutions. From conference rooms to
            auditoriums, classrooms to restaurants, events to home theatres,
            Pink Noise Pro delivers unparalleled sound and visual excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry}
              className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {industry}
              </h3>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries; 