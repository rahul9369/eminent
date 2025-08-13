import React from "react";
import {
  FaTruck,
  FaComments,
  FaProjectDiagram,
  FaHeadset,
  FaChalkboardTeacher,
  FaPencilRuler,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Distribution",
      description:
        "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
      icon: <FaTruck />,
    },
    {
      title: "Consulting",
      description:
        "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
      icon: <FaComments />,
    },
    {
      title: "Integration",
      description:
        "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Support",
      description:
        "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
      icon: <FaHeadset />,
    },
    {
      title: "Training",
      description:
        "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Design",
      description:
        "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
      icon: <FaPencilRuler />,
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-4xl text-teal-600 mb-4">
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
