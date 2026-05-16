import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaVolumeUp,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16 lg:py-20
        bg-gradient-to-br
        from-[#06111F]
        via-[#08192E]
        to-[#0B2545]
      "
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[260px] h-[260px] bg-blue-500/20 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-cyan-400/10 blur-[100px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/10
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              "
            >
              <img
                src="https://i.pinimg.com/1200x/0d/23/7a/0d237a704ce0b4ec067317bc1e4f8f0a.jpg"
                alt="Audio"
                className="
                  w-full
                  h-[300px]
                  sm:h-[380px]
                  lg:h-[430px]
                  object-cover
                  group-hover:scale-105
                  transition duration-700
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06111F]/80 via-transparent to-transparent"></div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                  absolute bottom-5 left-5
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  rounded-2xl
                  px-4 py-3
                  flex items-center gap-3
                "
              >
                <div
                  className="
                    w-10 h-10 rounded-full
                    bg-blue-500/20
                    flex items-center justify-center
                    text-blue-400
                  "
                >
                  <FaVolumeUp />
                </div>

                <div>
                  <h4 className="text-white text-sm font-semibold">
                    Premium AV
                  </h4>

                  <p className="text-gray-300 text-xs">
                    Smart Audio Solutions
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                inline-flex items-center gap-3
                px-5 py-3 rounded-full
                bg-blue-500/10
                border border-blue-400/20
                text-blue-300 text-sm font-medium
                backdrop-blur-xl
              "
            >
              <FaCheckCircle />
              ABOUT US
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-6
                text-4xl md:text-5xl
                font-black
                leading-tight
                text-white
              "
            >
              We Build
              <span className="block text-blue-400">
                Sound Experiences
              </span>
            </motion.h2>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
                mt-6
                text-gray-300
                leading-8
                text-[15px]
              "
            >
              We are the experts devoted to advancing, showcase and circulate a portion of the best brands in the expert audio visual industry. Our group brings the inventive turn-key approach of giving arrangements beginning from bringing in and coordination of merchandise till the last execution and authorizing. Each arrangement made by us brings profitability, effectiveness and manageability towards life and organizations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
                mt-4
                text-gray-400
                leading-8
                text-[15px]
              "
            >
              From planning and integration to final execution,
              we create modern AV systems with quality,
              innovation and reliable support.
            </motion.p>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {[
                "Premium Audio",
                "Custom AV Design",
                "Smart Integration",
                "Professional Support",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="
                    flex items-center gap-3
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    px-4 py-4
                    hover:border-blue-500/30
                    transition duration-300
                  "
                >
                  <div
                    className="
                      w-9 h-9 rounded-full
                      bg-blue-500/20
                      flex items-center justify-center
                      text-blue-400 text-sm
                    "
                  >
                    <FaCheckCircle />
                  </div>

                  <span className="text-white text-sm font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;