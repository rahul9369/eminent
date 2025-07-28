import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 lg:px-8">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are the professionals dedicated to promoting, marketing &
            distributing the finest brands in the professional audio industry.
            Our team delivers end-to-end solutions—from import logistics to
            final setup—ensuring productivity, efficiency & sustainability in
            all our projects.
          </p>
          <p className="text-md text-gray-600">
            With an ethical and transparent business approach, we’re redefining
            how audio systems are designed and delivered across industries.
          </p>
          <Link to="/about">
            <button className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition duration-300 shadow-md">
              Read More
            </button>
          </Link>
        </div>

        {/* Right: Image */}
        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://plus.unsplash.com/premium_photo-1708271127490-341a758feffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
            alt="Audio Equipment"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
