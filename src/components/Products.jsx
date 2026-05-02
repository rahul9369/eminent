import React from "react";
// सुनिश्चित करें कि ये पाथ आपकी इमेजेस के लिए एकदम सही हैं
import logo2 from "../assets/brand/logo2.jpg";
import logo1 from "../assets/brand/logo1.jpg";

const Products = () => {
  const products = [
    {
      title: "",
      image: logo1, 
    },
    {
      title: "",
      image: logo2, 
    },
  ];

  return (
    <section className="w-full py-12 bg-white">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-xl font-semibold text-[#3b82b4]">
         
        </h2>
        <h3 className="text-5xl font-bold text-[#3b82b4]">
          BRANDS
        </h3>
      </div>

      {/* 2 BOX CONTAINER */}
      <div className="w-full px-4 flex flex-col md:flex-row gap-6 justify-center items-center">

        {products.map((item, index) => (
          <div
            key={index}
            // यहाँ hover:bg-[#3b82b4] हटा दिया गया है और hover:shadow-[#3b82b4]/60 लगाया गया है 
            // जिससे ब्लू कलर सिर्फ पीछे परछाई की तरह आएगा
            className="
              group relative w-full md:w-[45%] h-[260px] md:h-[400px]
              rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100
              transition-all duration-300 ease-in-out
              hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(59,130,180,0.6)] cursor-pointer
            "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              // ज़ूम इफ़ेक्ट थोड़ा कम (scale-105) कर दिया है ताकि साफ़ दिखे
              className="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-end p-5">
              {/* टेक्स्ट हमेशा ब्लू रहेगा, होवर करने पर थोड़ा ऊपर की तरफ (translate-y) मूव करेगा */}
              <h3 className="text-[#3b82b4] text-lg md:text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Products;