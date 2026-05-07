import React from "react";

const Restaurants = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Restaurants & Cafes</h1>
      <p className="text-gray-600 mb-8">
        Soft ambient music solutions to enhance dining experience.
      </p>

      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["Ambient Sound", "Soft Music", "Customer Comfort"].map((f, i) => (
          <div key={i} className="p-5 bg-white shadow rounded-xl">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
