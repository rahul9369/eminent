import React, { useState } from "react";
import { motion } from "framer-motion";

import c1 from "../assets/clint/c1.png";
import c2 from "../assets/clint/c2.png";
import c3 from "../assets/clint/c3.png";
import c4 from "../assets/clint/c4.png";
import c5 from "../assets/clint/c5.png";
import c6 from "../assets/clint/c6.png";
import c7 from "../assets/clint/c7.png";
import c8 from "../assets/clint/c8.png";
import c9 from "../assets/clint/c9.png";
import c10 from "../assets/clint/c10.png";
import c11 from "../assets/clint/c11.png";
import c12 from "../assets/clint/c12.png";
import c13 from "../assets/clint/c13.png";
import c14 from "../assets/clint/c14.png";
import c15 from "../assets/clint/c15.png";

const Clients = () => {

  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    c1, c2, c3, c4, c5,
    c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15
  ];

  return (
    <section className="relative bg-[#050B18] py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14 px-4">

        <p className="uppercase tracking-[5px] text-blue-400 text-sm mb-4">
          Trusted By Industrys
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
          Our <span className="text-blue-500">Clients</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Eminent Audio Visual proudly collaborates with top brands
          and organizations.
        </p>

      </div>

      {/* Slider */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <motion.div
          className="flex gap-12 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >

          {[...clients, ...clients].map((logo, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                min-w-[140px]
                md:min-w-[180px]
              "
            >

              <img
                src={logo}
                alt={`Client ${index}`}
                className="
                  w-[110px]
                  md:w-[140px]
                  h-[60px]
                  md:h-[80px]
                  object-contain
                  opacity-80
                  hover:opacity-100
                  transition-all
                  duration-500
                  hover:scale-110
                  drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]
                "
              />

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Clients;