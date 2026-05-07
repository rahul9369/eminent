import React from "react";

const NightClubs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Night Clubs & Bars</h1>
      <p className="text-gray-600 mb-8">
        Immersive sound systems for nightlife and party environments.
      </p>

      <img
        src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["Heavy Bass", "Party Sound", "Lighting Sync"].map((f, i) => (
          <div key={i} className="p-5 bg-white shadow rounded-xl">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NightClubs;
