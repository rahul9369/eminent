import React from "react";

const Clients = () => {
  const clients = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className=" mx-auto px-4">
        {/* 🔥 Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Trusted By
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            OUR CLIENTS
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We proudly collaborate with leading brands and organizations to
            deliver exceptional audio-visual experiences.
          </p>
        </div>

        {/* 🔥 Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={logo}
                alt="client"
                className="max-h-12 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
