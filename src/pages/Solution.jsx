import { Link } from "react-router-dom";

const solutions = [
  {
    id: "sound-system",
    title: "Sound System Setup",
    desc: "Professional audio solutions for events, concerts & installations.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    details:
      "We provide complete sound system setups for concerts, events, and large venues with high-quality speakers and expert configuration.",
  },
  {
    id: "home-audio",
    title: "Home Audio Solution",
    desc: "Premium sound experience for your home & personal space.",
    img: "https://images.unsplash.com/photo-1580894908361-967195033215",
    details:
      "Transform your home into a cinematic experience with our premium home audio solutions tailored for comfort and quality.",
  },
  {
    id: "commercial",
    title: "Commercial Audio",
    desc: "Audio systems for malls, offices, and public places.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    details:
      "We design and install commercial audio systems for malls, offices, and public spaces with clear and consistent sound coverage.",
  },
];

const Solutions = () => {
  return (
    <div className=" bg-gray-100 py-14 px-4">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Solutions
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Explore our professional audio solutions designed for every
          environment
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {solutions.map((item) => (
          <Link
            to={`/solutions/${item.id}`}
            key={item.id}
            className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-200">{item.desc}</p>

              {/* CTA */}
              <span className="inline-block mt-4 text-sm font-medium tracking-wide group-hover:translate-x-1 transition">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
