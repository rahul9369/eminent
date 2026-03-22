import { useParams, Link } from "react-router-dom";

const brandProducts = {
  amate: [
    {
      name: "Amate Speaker X1",
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },
    {
      name: "Amate Line Array",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
  ],
  louismartin: [
    {
      name: "LouisMartin Bass Pro",
      img: "https://images.unsplash.com/photo-1545454675-3531b543be5d",
    },
    {
      name: "LouisMartin Tower",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
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
    return <h1 className="text-center mt-10">Brand Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 capitalize">
        {id} Products
      </h1>

      {/* Product Grid */}
      <div className="flex flex-col gap-10  mx-auto px-4">
        {products.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } bg-white/70 backdrop-blur-lg border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500`}>
            {/* 🔥 Image Section */}
            <div className="md:w-[65%] w-full h-64 md:h-80   overflow-hidden relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500"></div>
            </div>

            {/* 🔥 Content Section */}
            <div className="md:w-[35%] w-full flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-black transition">
                {item.name}
              </h2>

              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                High-performance audio solution designed for clarity, power, and
                durability. Perfect for professional sound setups.
              </p>

              {/* Button */}
              <button className="mt-6 w-fit px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-all duration-300 group-hover:scale-105">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* 🔥 Visit Site Button */}
      <div className="text-center mt-14">
        <a
          href={brandLinks[id]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-black text-white text-sm font-medium tracking-wide shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300">
          Visit Official Site →
        </a>
      </div>
    </div>
  );
};

export default BrandProducts;
