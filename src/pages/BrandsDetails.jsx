import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaVolumeUp,
  FaHeadphones,
  FaBroadcastTower,
} from "react-icons/fa";

import linearray from "../assets/famouf.JPG";
import pointsource from "../assets/redfront.JPG";
import column from "../assets/kff302.jpg";
import commercial from "../assets/dsf15.JPG";
import subwoofer from "../assets/ksf218.JPG";
import electronics from "../assets/plf4.jpg";

import xcellence from "../assets/brand/xcellence.jpg";
import nitid1 from "../assets/brand/nitid1.jpg";
import elctronic from "../assets/brand/electronic.jpg";
import dsp4 from "../assets/brand/dsp4.jpg";

const brandProducts = {
  amate: [
    {
      name: "Xcellence Series",
      img: xcellence,
      desc: "Premium audio systems engineered for exceptional clarity and performance.",
    },
    {
      name: "Nítid-S Series",
      img: nitid1,
      desc: "Compact yet powerful sound solutions with precision acoustics.",
    },
    {
      name: "Electronics",
      img: elctronic,
      desc: "Advanced processing and amplification technologies for modern AV systems.",
    },
    {
      name: "DSP4 Software",
      img: dsp4,
      desc: "Smart audio management software with seamless control and optimization.",
    },
  ],

  louismartin: [
    {
      name: "Line Array",
      img: linearray,
      desc: "Professional line array systems designed for large venue coverage.",
    },
    {
      name: "Point Source",
      img: pointsource,
      desc: "High-performance point source speakers with crystal-clear sound.",
    },
    {
      name: "Column Speaker",
      img: column,
      desc: "Slim and elegant column speakers with balanced audio projection.",
    },
    {
      name: "Commercial Speaker",
      img: commercial,
      desc: "Reliable commercial audio solutions for modern spaces.",
    },
    {
      name: "Subwoofer",
      img: subwoofer,
      desc: "Deep bass performance delivering impactful low-frequency sound.",
    },
    {
      name: "Electronics",
      img: electronics,
      desc: "Professional-grade electronic solutions for seamless AV integration.",
    },
  ],
};

const brandLinks = {
  amate: "https://www.amateaudio.com",
  louismartin: "https://www.louismartinaudio.com/",
};

const BrandProducts = () => {
  const { id } = useParams();
  const products = brandProducts[id];

  if (!products) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#071028] text-white text-3xl font-semibold">
        Brand Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071028] via-[#0B1736] to-[#12254A] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 px-6">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[5px] text-blue-300 text-sm mb-5"
          >
            Premium Audio Collection
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold capitalize leading-tight"
          >
            {id}
            <span className="text-blue-400"> Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mt-6 leading-8 text-lg"
          >
            Explore innovative professional audio solutions crafted for
            outstanding sound performance, reliability, and modern AV
            experiences.
          </motion.p>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="
                relative
                group
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-[30px]
                overflow-hidden
                shadow-2xl
                hover:border-blue-500/40
                transition-all duration-500
              "
            >

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>

              {/* IMAGE */}
              <div className="relative h-[280px] flex items-center justify-center p-10 overflow-hidden">

                <img
                  src={item.img}
                  alt={item.name}
                  className="
                    max-h-full
                    object-contain
                    group-hover:scale-110
                    transition duration-700
                    drop-shadow-2xl
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="px-8 pb-8">

                <div className="flex items-center gap-3 mb-4 text-blue-400">
                  <FaVolumeUp />
                  <span className="text-sm uppercase tracking-[3px]">
                    Professional Audio
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  {item.name}
                </h2>

                <p className="text-gray-300 leading-7 text-sm mb-6">
                  {item.desc}
                </p>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FaHeadphones className="text-blue-400" />
                    Premium Sound Quality
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <FaBroadcastTower className="text-blue-400" />
                    Advanced Audio Technology
                  </div>

                </div>

                {/* BUTTON */}
                <button
                  className="
                    group/btn
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    to-cyan-500
                    text-white
                    text-sm
                    font-medium
                    shadow-lg
                    hover:scale-105
                    transition duration-300
                  "
                >
                  Explore Product
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition" />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-24
            bg-white/5
            border border-white/10
            rounded-[40px]
            p-12
            text-center
            backdrop-blur-xl
          "
        >

          <h3 className="text-4xl font-bold mb-5">
            Explore More From
            <span className="text-blue-400"> {id}</span>
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto leading-8 mb-8">
            Visit the official brand website to discover the complete range of
            premium professional audio products and technologies.
          </p>

          <a
            href={brandLinks[id]}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              px-10
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              text-white
              font-medium
              shadow-xl
              hover:scale-105
              transition duration-300
            "
          >
            Visit Official Website
            <FaArrowRight />
          </a>

        </motion.div>

      </section>
    </div>
  );
};

export default BrandProducts;