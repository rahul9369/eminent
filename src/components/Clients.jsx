import React from "react";

const Clients = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A HARMONY OF CREATIVE MINDS
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">OUR CLIENTS</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-xl font-bold">
                Client {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients; 