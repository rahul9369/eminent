import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogs = [
    {
      date: "May 22, 2025",
      title:
        "Eminent Showcases Groundbreaking Audio Solutions at Global AV Expo 2025",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
    {
      date: "May 22, 2025",
      title:
        "Eminent Wins Prestigious Best Pro Audio Brand Award at NCN AV Awards 2024",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      date: "May 21, 2025",
      title:
        "Eminent Experts Explain the Key Differences Between Line Array and Column Array Systems",
      img: "https://images.unsplash.com/photo-1580894908361-967195033215",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#050B18] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-blue-400 text-sm mb-4">
            Insights & Updates
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">
            Latest <span className="text-blue-500">News</span>
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Stay updated with the latest trends, innovations, and professional
            audio insights from Eminent Audio Visual.
          </p>

        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                shadow-[0_0_30px_rgba(0,0,0,0.25)]
                hover:border-blue-500/40
                transition-all
                duration-500
              "
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="
                    w-full
                    h-72
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-700
                  "
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-7">

                <p className="text-blue-300 text-sm mb-3 tracking-wide">
                  {blog.date}
                </p>

                <h3 className="text-white text-xl font-semibold leading-snug mb-4 line-clamp-3">
                  {blog.title}
                </h3>

                <button
                  className="
                    text-sm
                    font-medium
                    text-blue-400
                    flex
                    items-center
                    gap-2
                    group-hover:gap-4
                    transition-all
                    duration-300
                  "
                >
                  Read More
                  <span>→</span>
                </button>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Button */}
        <div className="text-center mt-16">

          <button
            className="
              px-10
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              text-white
              font-semibold
              tracking-wide
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View All Blogs →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Blogs;