// src/pages/DesignRequest.jsx

import React, { useState } from "react";
import {
  FaDraftingCompass,
  FaArrowRight,
  FaCheckCircle,
  FaUpload,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
} from "react-icons/fa";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const DesignRequest = () => {
  const [subwoofer, setSubwoofer] = useState("");

  return (
    <div className="bg-[#06111F] min-h-screen overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-[#02101F]
          via-[#071B34]
          to-[#0B2545]
          pt-24 md:pt-28
          pb-24 md:pb-32
        "
      >
        {/* GLOW */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-blue-500/20 blur-[160px] rounded-full"
        />

        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-cyan-400/10 blur-[160px] rounded-full"
        />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >

              <motion.span
                variants={fadeUp}
                custom={1}
                className="
                  inline-flex items-center gap-3
                  px-5 py-3 rounded-full
                  bg-blue-500/10
                  border border-blue-400/20
                  text-blue-300 text-sm font-medium
                  backdrop-blur-xl
                "
              >
                <FaDraftingCompass />
                Premium AV Design Solution
              </motion.span>

              <motion.h1
                variants={fadeUp}
                custom={2}
                className="
                  mt-8
                  text-4xl md:text-6xl
                  font-black
                  leading-tight
                  text-white
                "
              >
                Design Your
                <span className="block text-blue-400">
                  Dream Audio
                </span>
                Experience
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="
                  mt-6
                  text-base md:text-lg
                  leading-8
                  text-gray-300
                "
              >
                Professional AV planning and sound system design for
                auditoriums, conference rooms, clubs, restaurants,
                recording studios and large venues.
              </motion.p>

              {/* FEATURES */}
              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {[
                  "Premium Sound Design",
                  "Custom AV Planning",
                  "Venue Optimization",
                  "Professional Consultation",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={index + 4}
                    whileHover={{
                      scale: 1.03,
                    }}
                    className="
                      flex items-center gap-4
                      bg-white/5
                      border border-white/10
                      rounded-2xl
                      px-5 py-4
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        w-10 h-10
                        rounded-full
                        bg-blue-500/20
                        flex items-center justify-center
                        text-blue-400
                      "
                    >
                      <FaCheckCircle />
                    </div>

                    <span className="text-white font-medium text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <motion.div
                whileHover={{ y: -5 }}
                className="
                  relative
                  bg-white/10
                  backdrop-blur-2xl
                  border border-white/10
                  rounded-[30px]
                  p-6 md:p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                  overflow-hidden
                "
              >

                <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-blue-500/20 blur-[80px] rounded-full"></div>

                <div className="relative z-10">

                  <h2 className="text-3xl font-bold text-white">
                    Request A Design
                  </h2>

                  <p className="mt-4 text-gray-300 leading-7 text-sm md:text-base">
                    Fill out the form and our design team will
                    contact you shortly.
                  </p>

                  {/* CONTACT */}
                  <div className="mt-8 grid gap-4">

                    {[
                      {
                        icon: <FaPhoneAlt />,
                        title: "Call Us",
                        value: "+91 9876543210",
                      },
                      {
                        icon: <FaEnvelope />,
                        title: "Email Support",
                        value: "info@eminentav.com",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          scale: 1.02,
                        }}
                        className="
                          flex items-center gap-4
                          p-4 rounded-2xl
                          bg-white/5 border border-white/10
                        "
                      >
                        <div
                          className="
                            w-12 h-12 rounded-full
                            bg-blue-500/20
                            flex items-center justify-center
                            text-blue-400
                          "
                        >
                          {item.icon}
                        </div>

                        <div>
                          <p className="text-sm text-gray-400">
                            {item.title}
                          </p>

                          <h4 className="text-white font-semibold text-sm md:text-base">
                            {item.value}
                          </h4>
                        </div>
                      </motion.div>
                    ))}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="relative -mt-16 md:-mt-20 pb-20">

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[30px]
              shadow-[0_20px_80px_rgba(0,0,0,0.18)]
              overflow-hidden
            "
          >

            {/* TOP */}
            <div
              className="
                bg-gradient-to-r
                from-[#2563EB]
                via-[#3B82F6]
                to-[#60A5FA]
                px-6 md:px-12
                py-10
                text-white
              "
            >
              <div className="flex items-center gap-5">

                <div
                  className="
                    w-16 h-16 md:w-20 md:h-20
                    rounded-3xl
                    bg-white/10
                    flex items-center justify-center
                    text-2xl md:text-3xl
                    backdrop-blur-xl
                  "
                >
                  <FaBuilding />
                </div>

                <div>
                  <h2 className="text-2xl md:text-4xl font-bold">
                    Project Design Form
                  </h2>

                  <p className="mt-3 text-blue-100 leading-7 text-sm md:text-base">
                    Share your project details and upload venue drawings.
                  </p>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="p-5 md:p-12">

              <form className="space-y-12">

                {/* TITLE */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Project Information
                  </h3>

                  <div className="h-1 w-24 bg-blue-600 rounded-full mt-4"></div>

                </div>

                {/* INPUTS */}
                <div className="grid md:grid-cols-2 gap-6">

                  {[
                    "Project Name *",
                    "Project Address *",
                    "Company Name",
                    "Job Title",
                    "Phone Number *",
                    "Email Address *",
                  ].map((item, index) => (
                    <div key={index}>

                      <label className="block mb-3 font-semibold text-gray-700">
                        {item}
                      </label>

                      <input
                        type="text"
                        placeholder={`Enter ${item}`}
                        className="
                          w-full h-14 px-5
                          rounded-2xl
                          border border-gray-200
                          bg-[#F8FAFC]
                          outline-none
                          focus:border-blue-500
                          transition-all duration-300
                        "
                      />
                    </div>
                  ))}

                </div>

                {/* TEXTAREA */}
                <div>

                  <label className="block mb-3 font-semibold text-gray-700">
                    Project Description
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Describe your AV system requirement..."
                    className="
                      w-full p-5
                      rounded-3xl
                      border border-gray-200
                      bg-[#F8FAFC]
                      outline-none
                      focus:border-blue-500
                      resize-none
                    "
                  ></textarea>

                </div>

                {/* ================= SUBWOOFER SECTION ================= */}
                <div className="space-y-8">

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      Should subwoofers be included in the design?
                      <span className="text-red-500">*</span>
                    </h3>

                    {/* YES / NO */}
                    <div className="flex flex-col gap-5 mt-8">

                      <label className="flex items-center gap-4 cursor-pointer">
                        <input
                          type="radio"
                          name="subwoofer"
                          value="yes"
                          checked={subwoofer === "yes"}
                          onChange={(e) => setSubwoofer(e.target.value)}
                          className="w-6 h-6 accent-blue-600"
                        />

                        <span className="text-2xl text-gray-700">
                          yes
                        </span>
                      </label>

                      <label className="flex items-center gap-4 cursor-pointer">
                        <input
                          type="radio"
                          name="subwoofer"
                          value="no"
                          checked={subwoofer === "no"}
                          onChange={(e) => setSubwoofer(e.target.value)}
                          className="w-6 h-6 accent-blue-600"
                        />

                        <span className="text-2xl text-gray-700">
                          no
                        </span>
                      </label>

                    </div>
                  </div>

                  {/* CONDITIONAL OPTIONS */}
                  {subwoofer === "yes" && (
                    <div className="pl-1">

                      <h4 className="text-2xl text-gray-700 mb-8">
                        If yes ...
                      </h4>

                      <div className="flex flex-col gap-6">

                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-6 h-6 accent-blue-600"
                          />

                          <span className="text-xl text-gray-700">
                            Flown
                          </span>
                        </label>

                        <label className="flex items-center gap-4 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-6 h-6 accent-blue-600"
                          />

                          <span className="text-xl text-gray-700">
                            Ground-stacked
                          </span>
                        </label>

                      </div>

                    </div>
                  )}

                </div>

                {/* UPLOAD */}
                <div>

                  <label className="block mb-6 text-2xl md:text-3xl font-bold text-gray-900">
                    Upload Project Files
                  </label>

                  <div
                    className="
                      border-2 border-dashed
                      border-blue-300
                      rounded-[30px]
                      p-6 md:p-10
                      bg-gradient-to-br
                      from-blue-50
                      to-cyan-50
                    "
                  >

                    <div className="text-center">

                      <div
                        className="
                          w-20 h-20 mx-auto
                          rounded-full
                          bg-gradient-to-r
                          from-[#3B82F6]
                          to-[#2563EB]
                          text-white text-3xl
                          flex items-center justify-center
                          shadow-xl
                        "
                      >
                        <FaUpload />
                      </div>

                      <h3 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
                        Drag & Drop Files
                      </h3>

                      <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base">
                        Upload venue drawings, images and PDFs.
                      </p>

                    </div>

                    {/* FILE INPUTS */}
                    <div className="mt-8 grid md:grid-cols-2 gap-4">

                      {[1, 2, 3, 4].map((item) => (
                        <input
                          key={item}
                          type="file"
                          className="
                            w-full
                            bg-white
                            border border-gray-200
                            rounded-2xl
                            p-4
                          "
                        />
                      ))}

                    </div>

                  </div>
                </div>

                {/* SUBMIT */}
                <div className="text-center pt-2">

                  <button
                    type="submit"
                    className="
                      group
                      inline-flex items-center gap-4
                      px-8 md:px-12 py-5 rounded-2xl
                      bg-gradient-to-r
                      from-[#3B82F6]
                      to-[#2563EB]
                      text-white text-base md:text-lg font-bold
                      shadow-[0_15px_40px_rgba(37,99,235,0.4)]
                      transition-all duration-300
                      hover:scale-105
                    "
                  >
                    Submit Design Request

                    <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                  </button>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

      </section>
    </div>
  );
};

export default DesignRequest;                                   