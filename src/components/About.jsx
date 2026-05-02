import React from "react";
import { Link } from "react-router-dom";
import img5 from "../assets/hero/img5.JPG";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* RIGHT SIDE IMAGE (mobile me pehle dikhega) */}
        <div className="order-1 md:order-2 w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
          <img
            src={img5}
            alt="Audio Equipment"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className="order-2 md:order-1 space-y-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#3b82b4]">
            WHO WE ARE
          </h2>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed">
            We are the experts devoted to advancing, showcase and circulate a portion of the best brands in the expert audio visual industry. Our group brings the inventive turn-key approach of giving arrangements beginning from bringing in and coordination of merchandise till the last execution and authorizing.
          </p>

          <p className="text-gray-600">
            Each arrangement made by us brings profitability, effectiveness and manageability towards life and organizations. With an ethical and transparent business approach, we’re redefining how audio systems are designed and delivered across industries.
          </p>

          {/* Button */}
          <Link to="/about">
            <button className="mt-2 bg-gradient-to-r from-[#4FA3D1] to-[#2F6FA3] text-white px-6 py-3 rounded-lg font-medium transition duration-300 hover:scale-105 shadow-md">
              Read More →
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
