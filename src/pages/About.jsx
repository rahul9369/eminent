import React from "react";
import {
  FaCheckCircle,
  FaLightbulb,
  FaHandshake,
  FaProjectDiagram,
  FaUsers,
  FaAward,
} from "react-icons/fa";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const About = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12386b] text-white py-24 px-6 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[5px] text-blue-300 text-sm mb-5"
          >
            About Eminent AV
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            Crafting Powerful
            <span className="text-blue-400"> Audio Visual </span>
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-300 max-w-3xl mx-auto leading-8 text-lg"
          >
            Delivering premium audio and visual solutions with innovation,
            performance, and reliability across India.
          </motion.p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* STORY */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 items-center mb-24"
        >

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm mb-4">
              Our Story
            </p>

            <h2 className="text-4xl font-bold text-[#071028] mb-6">
              Innovation Driven
              <span className="text-blue-600"> AV Solutions</span>
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Founded with a vision to redefine professional audio solutions,
              Eminent Audio & Video has grown into a trusted industry leader.
            </p>

          </div>

          {/* Animated Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >

            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl"></div>

            <img
              src="https://i.pinimg.com/1200x/0d/23/7a/0d237a704ce0b4ec067317bc1e4f8f0a.jpg"
              alt="About"
              className="
                relative
                h-[500px]
                w-full
                object-cover
                rounded-3xl
                shadow-2xl
              "
            />

          </motion.div>

        </motion.section>

        {/* VALUES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >

          <div className="text-center mb-14">

            <p className="uppercase tracking-[4px] text-blue-600 text-sm mb-3">
              Core Values
            </p>

            <h2 className="text-4xl font-bold text-[#071028]">
              What Drives Us
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <FaCheckCircle />,
                title: "Quality",
                desc: "Delivering excellence in every project.",
              },
              {
                icon: <FaHandshake />,
                title: "Integrity",
                desc: "Building trust with transparency.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                desc: "Adopting modern technologies.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white
                  border border-gray-100
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  text-center
                "
              >

                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#071028] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* STATS */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-gradient-to-r
            from-[#071028]
            via-[#0B1736]
            to-[#12386b]
            rounded-[40px]
            p-12
            text-white
            shadow-2xl
          "
        >

          <div className="text-center mb-14">

            <p className="uppercase tracking-[4px] text-blue-300 text-sm mb-3">
              Our Achievements
            </p>

            <h2 className="text-4xl font-bold">
              Trusted By Hundreds
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              {
                icon: <FaProjectDiagram />,
                value: "1000+",
                label: "Projects Completed",
              },
              {
                icon: <FaAward />,
                value: "50+",
                label: "Brands Partnered",
              },
              {
                icon: <FaUsers />,
                value: "10000+",
                label: "Happy Clients",
              },
              {
                icon: <FaCheckCircle />,
                value: "10+",
                label: "Years Experience",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >

                <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold mb-2">
                  {item.value}
                </h3>

                <p className="text-gray-300 text-sm tracking-wide">
                  {item.label}
                </p>

              </motion.div>
            ))}

          </div>

        </motion.section>

      </div>
    </div>
  );
};

export default About;