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
        "Efficient distribution of world-class professional audio equipment through trusted channel partners.",
      icon: FaTruck,
    },
    {
      title: "Consulting",
      description:
        "Expert consultation to analyze requirements and deliver optimized audio solutions.",
      icon: FaComments,
    },
    {
      title: "Design",
      description:
        "Creative and technical system design tailored for premium sound experiences.",
      icon: FaPencilRuler,
    },
    {
      title: "Integration",
      description:
        "Seamless integration of advanced systems to create powerful and scalable solutions.",
      icon: FaProjectDiagram,
    },
    {
      title: "Training",
      description:
        "Professional training programs to empower teams with modern audio technologies.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Support",
      description:
        "Reliable support services ensuring smooth performance and long-term system stability.",
      icon: FaHeadset,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className=" mx-auto px-4">
        {/* 🔥 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Services
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            WHAT WE DO
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Delivering innovative and reliable audio solutions with expertise,
            precision, and cutting-edge technology.
          </p>
        </div>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 text-center shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* 🔥 Icon Circle (UPDATED) */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl 
          bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] shadow-lg group-hover:shadow-xl transition">
                  <Icon className="text-white text-3xl" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-1 bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
