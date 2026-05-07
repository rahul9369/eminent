import React from "react";

const Auditorium = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Auditoriums</h1>
      <p className="text-gray-600 mb-6">
        High-performance sound systems for large auditoriums with crystal clear
        audio and wide coverage.
      </p>

      <img
        src="https://images.unsplash.com/photo-1503424886308-42f1d9d8e8f4"
        className="rounded-xl mb-6"
      />

      <ul className="list-disc pl-5 space-y-2">
        <li>Wide sound coverage</li>
        <li>Echo-free audio</li>
        <li>High power speakers</li>
      </ul>
    </div>
  );
};

export default Auditorium;
