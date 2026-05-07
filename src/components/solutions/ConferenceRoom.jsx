import React from "react";

const ConferenceRoom = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Conference Room</h1>
      <p className="text-gray-600 mb-6">
        Professional audio solutions for meetings and corporate discussions.
      </p>

      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c"
        className="rounded-xl mb-6"
      />

      <ul className="list-disc pl-5 space-y-2">
        <li>Clear voice communication</li>
        <li>Noise cancellation</li>
        <li>Smart integration</li>
      </ul>
    </div>
  );
};

export default ConferenceRoom;
