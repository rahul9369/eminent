import React from "react";
import { useNavigate } from "react-router-dom";

import logo2 from "../assets/brand/logo2.png";
import logo1 from "../assets/brand/logo1.png";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Amate",
      image: logo1,
      link: "/brands/amate",
    },
    {
      title: "LouisMartin",
      image: logo2,
      link: "/brands/louismartin",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-5xl font-bold text-[#3b82b4]">BRANDS</h3>
      </div>

      <div className="w-full px-4 flex flex-col md:flex-row gap-6 justify-center items-center">
        {products.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            className="
              group relative w-full md:w-[45%] h-[260px] md:h-[400px]
              rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100
              transition-all duration-300 ease-in-out
              hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(59,130,180,0.6)] cursor-pointer
            ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
            />

            {/* <div className="absolute inset-0 flex items-end p-5">
              <h3 className="text-[#3b82b4] text-lg md:text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
                {item.title}
              </h3>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
