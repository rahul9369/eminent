import React from "react";

const LiveEvents = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Live Music & Events</h1>
      <p className="text-gray-600 mb-8">
        Professional audio systems for concerts and live shows.
      </p>

      <img
        src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["High Output", "Stage Ready", "Event Setup"].map((f, i) => (
          <div key={i} className="p-5 bg-white shadow rounded-xl">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
