import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            REDEFINING MUSIC CREATION EXPERIENCES
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Professional audio solutions for every industry
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full text-lg text-black font-medium">
              Music & Recording
            </span>
            <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full text-lg text-black font-medium">
              Pro Audio & Visual
            </span>
            <span className="bg-white bg-opacity-20 px-6 py-3 rounded-full text-lg text-black font-medium">
              Home Theatre & Hi-fi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 