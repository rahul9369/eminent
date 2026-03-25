import { useParams } from "react-router-dom";
import linearray from "../assets/famouf.JPG";
import pointsource from "../assets/redfront.JPG";
import column from "../assets/kff302.jpg";
import commercial from "../assets/dsf15.JPG";
import subwoofer from "../assets/ksf218.JPG";
import electronics from "../assets/plf4.jpg";

const brandProducts = {
  amate: [
    {
      name: "Xcellence Series",
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },
    {
      name: "Nitid",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
    {
      name: "Electronics",
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },
    {
      name: "Ease Focus",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    },
    {
      name: "DSP4 Software",
      img: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    },
  ],
  louismartin: [
    { name: "Line Array", img: linearray },
    { name: "Point Source", img: pointsource },
    { name: "Column Speaker", img: column },
    { name: "Commercial Speaker", img: commercial },
    { name: "Subwoofer", img: subwoofer },
    { name: "Electronics", img: electronics },
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
    <div className="min-h-screen bg-[#f8fafc] py-16 px-4">
      {/* 🔥 Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 capitalize tracking-tight">
          {id} Products
        </h1>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Explore premium audio solutions crafted for performance & reliability
        </p>
      </div>

      {/* 🔥 Product Cards */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative items-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 p-6 flex flex-col">
            {/* 🔥 Image */}
            <div className="h-56 flex items-center justify-center mb-6">
              <img
                src={item.img}
                alt={item.name}
                className="max-h-full object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* 🔥 Content */}
            <h2 className="text-xl text-center font-semibold text-gray-900">
              {item.name}
            </h2>

            <p className="text-gray-500 text-center mt-3 text-sm leading-relaxed">
              Engineered for superior sound clarity and unmatched performance.
            </p>

            {/* Features */}
            {/* <div className="mt-4 space-y-1 text-xs text-gray-600">
              <p>✔ High Output</p>
              <p>✔ Premium Quality</p>
              <p>✔ Pro Sound</p>
            </div> */}

            {/* Button */}
            <button className="mt-6 w-fit px-5 text-center py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition">
              Explore →
            </button>

            {/* Glow effect */}
            <div className="absolute -z-10 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-30 top-5 right-5"></div>
          </div>
        ))}
      </div>

      {/* 🔥 CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Want to explore more from this brand?
        </h3>

        <a
          href={brandLinks[id]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium shadow-md hover:scale-105 transition-all duration-300">
          Visit Official Website →
        </a>
      </div>
    </div>
  );
};

export default BrandProducts;
