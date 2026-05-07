import React from "react";

const GymFitness = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Gym & Fitness Centers</h1>
      <p className="text-gray-600 mb-6">
        Powerful and energetic sound systems to enhance workout experience.
      </p>

      <img
        src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
        className="rounded-xl mb-6"
      />

      <ul className="list-disc pl-5 space-y-2">
        <li>High bass sound</li>
        <li>Durable speakers</li>
        <li>Energy boosting audio</li>
      </ul>
    </div>
  );
};

export default GymFitness;
