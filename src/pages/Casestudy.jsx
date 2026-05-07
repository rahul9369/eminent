import { Link } from "react-router-dom";
import { useState } from "react";

const CaseStudy = () => {
  const [active, setActive] = useState("all");

  // 🔥 Random Image Function
  const getImg = (keyword) => `https://source.unsplash.com/600x400/?${keyword}`;

  // ✅ ALL DATA IN ONE
  const caseStudies = [
    // EVENT
    {
      id: "concert",
      category: "event",
      title: "Concert Audio Setup",
      desc: "Large-scale concert sound system.",
      img: getImg("concert"),
    },
    {
      id: "dj-night",
      category: "event",
      title: "DJ Night Setup",
      desc: "High-energy DJ sound.",
      img: getImg("dj,party"),
    },

    // HOSPITALITY
    {
      id: "hotel",
      category: "hospitality",
      title: "Hotel Installation",
      desc: "Luxury hotel audio system.",
      img: getImg("hotel,lobby"),
    },
    {
      id: "restaurant",
      category: "hospitality",
      title: "Restaurant Audio",
      desc: "Ambient dining sound.",
      img: getImg("restaurant,cafe"),
    },

    // CORPORATE
    {
      id: "office",
      category: "corporate",
      title: "Office Setup",
      desc: "Conference audio system.",
      img: getImg("office,meeting"),
    },
    {
      id: "mall",
      category: "corporate",
      title: "Mall System",
      desc: "Centralized announcement system.",
      img: getImg("shopping mall"),
    },

    // EDUCATION
    {
      id: "school",
      category: "education",
      title: "School Audio",
      desc: "Classroom sound system.",
      img: getImg("classroom"),
    },
    {
      id: "college",
      category: "education",
      title: "College Auditorium",
      desc: "Large hall audio setup.",
      img: getImg("auditorium"),
    },

    // GOV
    {
      id: "railway",
      category: "gov",
      title: "Railway System",
      desc: "Station announcement system.",
      img: getImg("railway station"),
    },
    {
      id: "airport",
      category: "gov",
      title: "Airport Audio",
      desc: "Public announcement system.",
      img: getImg("airport"),
    },

    // WORSHIP
    {
      id: "temple",
      category: "worship",
      title: "Temple Audio",
      desc: "Devotional sound system.",
      img: getImg("temple"),
    },
    {
      id: "church",
      category: "worship",
      title: "Church Setup",
      desc: "Clear speech audio system.",
      img: getImg("church"),
    },
  ];

  // ✅ Categories
  const categories = [
    "all",
    "gov",
    "worship",
    "hospitality",
    "education",
    "corporate",
    "event",
  ];

  // ✅ Filter Logic
  const filteredData =
    active === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">CASE STUDIES</h1>
        <p className="text-gray-600 mt-2">
          Explore our real-world audio solutions
        </p>
      </div>

      {/* 🔥 Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              active === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border"
            }`}>
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🔥 Grid */}
      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">No case studies available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredData.map((item) => (
            <Link
              to={`/case-study/${item.id}`}
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-sm">{item.desc}</p>
              </div>

              {/* Tag */}
              <div className="absolute top-3 left-3 bg-white/90 text-black text-xs px-3 py-1 rounded-full">
                {item.category.toUpperCase()}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
