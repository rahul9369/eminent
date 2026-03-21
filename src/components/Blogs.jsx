import React from "react";

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 🔥 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Insights & Updates
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Latest Blogs
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in
            professional audio solutions.
          </p>
        </div>

        {/* 🔥 Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs text-gray-300 mb-2">{blog.date}</p>

                <h3 className="text-lg font-semibold leading-snug line-clamp-2">
                  {blog.title}
                </h3>

                <span className="inline-block mt-4 text-sm font-medium tracking-wide group-hover:translate-x-1 transition">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 View All Button */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 rounded-2xl bg-black text-white text-sm font-medium tracking-wide shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300">
            View All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
