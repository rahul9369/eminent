import React from "react";

const Blogs = () => {
  const blogs = [
    {
      date: "May 22, 2025",
      title:
        "Eminent Showcases Groundbreaking Audio Solutions at Global AV Expo 2025",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      date: "May 22, 2025",
      title:
        "Eminent Wins Prestigious Best Pro Audio Brand Award at NCN AV Awards 2024",
      gradient: "from-green-400 to-blue-500",
    },
    {
      date: "May 21, 2025",
      title:
        "Eminent Experts Explain the Key Differences Between Line Array and Column Array Systems",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            JOURNEY INTO INSIGHTFUL NARRATIVES
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            UPDATED BLOGS
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${blog.gradient}`}></div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {blog.title}
                </h3>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
