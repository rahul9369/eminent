import React from "react";
import { useNavigate } from "react-router-dom";

import logo2 from "../assets/brand/logo2.png";
import logo1 from "../assets/brand/logo1.png";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      title: "Amate Audio",
      image: logo1,
      link: "/brands/amate",
    },
    {
      title: "Louis Martin",
      image: logo2,
      link: "/brands/louismartin",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#050B18] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[5px] text-blue-400 text-xs md:text-sm mb-4">
            Trusted Audio Brands
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            "
          >
            Our
            <span className="text-blue-500"> Brands</span>
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-5"></div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className="
                group
                relative
                bg-white/[0.04]
                border border-white/10
                rounded-[30px]
                overflow-hidden
                backdrop-blur-xl
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-3
                hover:border-blue-500/40
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
              "
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-blue-500/0
                  to-cyan-500/0
                  group-hover:from-blue-500/10
                  group-hover:to-cyan-500/10
                  transition duration-500
                "
              ></div>

              {/* IMAGE */}
              <div
                className="
                  relative
                  z-10
                  bg-white
                  h-[240px]
                  sm:h-[280px]
                  md:h-[360px]
                  flex items-center justify-center
                  p-6 md:p-10
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-all duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* TITLE */}
              <div className="relative z-10 p-5 md:p-6 text-center">

                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-white
                    transition duration-300
                    group-hover:text-blue-400
                  "
                >
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Products;