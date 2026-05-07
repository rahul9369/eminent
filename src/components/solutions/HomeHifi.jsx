import React from "react";

const HomeHifi = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Home & Hi-Fi</h1>
      <p className="text-gray-600 mb-8">
        Premium home audio solutions for immersive sound experience.
      </p>

      <img
        src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["Home Theatre", "Hi-Fi Audio", "Crystal Sound"].map((f, i) => (
          <div key={i} className="p-5 bg-white shadow rounded-xl">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeHifi;
