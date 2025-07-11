import React from "react";

const Services = () => {
  const services = [
    {
      title: "Distribution",
      description:
        "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
    },
    {
      title: "Consulting",
      description:
        "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
    },
    {
      title: "Integration",
      description:
        "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
    },
    {
      title: "Support",
      description:
        "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
    },
    {
      title: "Training",
      description:
        "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
    },
    {
      title: "Design",
      description:
        "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">WHAT WE DO</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 