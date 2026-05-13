import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  ];

  return (
    <section className="relative bg-[#050B18] py-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-blue-400 text-sm mb-4">
            Trusted By Industry Leaders
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Our Premium <span className="text-blue-500">Clients</span>
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Eminent Audio Visual proudly collaborates with top brands and
            organizations to deliver exceptional sound and AV experiences.
          </p>

        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                relative
                group
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                h-36
                flex
                items-center
                justify-center
                overflow-hidden
                hover:border-blue-500/50
                transition-all
                duration-500
                shadow-[0_0_30px_rgba(0,0,0,0.25)]
              "
            >

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition duration-500"></div>

              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]"></div>

              {/* Logo */}
              <img
                src={logo}
                alt="Client Logo"
                className="
                  relative
                  z-10
                  max-h-12
                  object-contain
                  brightness-0
                  invert
                  opacity-75
                  group-hover:opacity-100
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Clients;