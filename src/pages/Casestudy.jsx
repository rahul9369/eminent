import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "concert",
    title: "Concert Audio Setup",
    desc: "Handled large-scale concert sound system with Amate speakers.",
    img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
    details:
      "This project involved setting up a complete concert sound system using high-performance speakers, mixers, and amplifiers. The system delivered crystal-clear sound to a large audience.",
  },
  {
    id: "hotel",
    title: "Hotel Sound Installation",
    desc: "Installed premium background music system in luxury hotel.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    details:
      "We installed a multi-zone background music system across hotel lobbies, rooms, and restaurants ensuring smooth and pleasant audio experience.",
  },
  {
    id: "mall",
    title: "Mall Announcement System",
    desc: "Centralized audio system for announcements & music.",
    img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6",
    details:
      "A centralized announcement and music system was designed for seamless communication and entertainment across all areas of the mall.",
  },
];

const CaseStudy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">CASE STUDIES</h1>
        <p className="text-gray-600 mt-3">
          Real-world projects showcasing our expertise and performance
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  mx-auto">
        {caseStudies.map((item, index) => (
          <Link
            to={`/case-study/${item.id}`}
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg">
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>

            {/* Tag */}
            <div className="absolute top-3 left-3 bg-white/90 text-black text-xs px-3 py-1 rounded-full">
              Case Study
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
