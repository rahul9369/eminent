import React, { useEffect, useState } from "react";
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
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* COUNT UP COMPONENT */
const Counter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <div className="bg-[#050B18] text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12386b] text-white py-24 md:py-32 px-5 md:px-8 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[4px] md:tracking-[6px] text-blue-300 text-xs md:text-sm mb-5"
          >
            About Eminent AV
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-bold
              leading-[1.3]
              md:leading-[1.2]
              mb-6
            "
          >
            Crafting Powerful
            <span className="text-blue-400"> Audio Visual </span>
            Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              text-gray-300
              max-w-3xl
              mx-auto
              leading-8
              text-base
              md:text-lg
            "
          >
            Delivering premium audio and visual solutions with innovation,
            performance, and reliability across India.
          </motion.p>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">

        {/* STORY SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-14 items-center mb-28"
        >

          {/* Left Content */}
          <motion.div variants={fadeUp}>

            <p className="text-blue-400 font-semibold uppercase tracking-[4px] text-sm mb-4">
              Our Story
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
                mb-6
                leading-[1.4]
              "
            >
              Innovation Driven
              <span className="text-blue-500"> AV Solutions</span>
            </h2>

            <p className="text-gray-300 leading-8 mb-5 text-base md:text-lg">
              We are the experts devoted to advancing, showcase and circulate a
              portion of the best brands in the expert audio visual industry.
              Our group brings the inventive turn-key approach of giving
              arrangements beginning from bringing in and coordination of
              merchandise till the last execution and authorizing.
            </p>

            <p className="text-gray-400 leading-8 text-base md:text-lg">
              Each arrangement made by us brings profitability, effectiveness
              and manageability towards life and organizations.
            </p>

          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
            }}
            transition={{ duration: 0.4 }}
            className="relative group"
          >

            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-3xl"></div>

            <img
              src="https://i.pinimg.com/1200x/0d/23/7a/0d237a704ce0b4ec067317bc1e4f8f0a.jpg"
              alt="About"
              className="
                relative
                h-[350px]
                md:h-[550px]
                w-full
                object-cover
                rounded-3xl
                shadow-2xl
                border
                border-white/10
              "
            />

          </motion.div>

        </motion.section>

        {/* VALUES SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-28"
        >

          <motion.div
            variants={fadeUp}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[4px] text-blue-400 text-sm mb-3">
              Core Values
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
                leading-[1.3]
              "
            >
              What Drives Us
            </h2>

          </motion.div>

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
                variants={fadeUp}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  bg-white/[0.04]
                  border border-white/10
                  rounded-3xl
                  p-8
                  backdrop-blur-xl
                  hover:border-blue-500/40
                  shadow-[0_0_30px_rgba(0,0,0,0.2)]
                  overflow-hidden
                  group
                "
              >

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition duration-500"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl mb-5 shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-7 text-center">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* STATS SECTION */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            bg-gradient-to-r
            from-[#071028]
            via-[#0B1736]
            to-[#12386b]
            rounded-[30px]
            md:rounded-[40px]
            p-8
            md:p-14
            text-white
            shadow-2xl
            overflow-hidden
          "
        >

          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">

            <div className="text-center mb-14">

              <p className="uppercase tracking-[4px] text-blue-300 text-sm mb-3">
                Our Achievements
              </p>

              <h2
                className="
                  text-3xl
                  md:text-5xl
                  font-bold
                  leading-[1.3]
                "
              >
                Trusted By Hundreds
              </h2>

            </div>

            {/* COUNTER GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">

              {[
                {
                  icon: <FaProjectDiagram />,
                  value: 1000,
                  label: "Projects Completed",
                },
                {
                  icon: <FaAward />,
                  value: 50,
                  label: "Brands Partnered",
                },
                {
                  icon: <FaUsers />,
                  value: 10000,
                  label: "Happy Clients",
                },
                {
                  icon: <FaCheckCircle />,
                  value: 10,
                  label: "Years Experience",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    bg-white/5
                    border border-white/10
                    rounded-3xl
                    p-6
                    backdrop-blur-lg
                  "
                >

                  <div className="text-4xl text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold mb-2 text-white">

                    <Counter end={item.value} />

                  </h3>

                  <p className="text-gray-300 text-sm md:text-base tracking-wide leading-6">
                    {item.label}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.section>

      </div>
    </div>
  );
};

export default About;