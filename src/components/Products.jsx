import React from "react";

const Products = () => {
  const products = [
    {
      title: "Home Theatre & Hi-fi",
      description: "Make your Cinematic experience Legendary",
      icon: "🎵",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      title: "Music & Recording",
      description: "Most Popular gears for your Music Studio",
      icon: "🎤",
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "Pro Audio & Visual",
      description: "Commercial AV solutions simplified",
      icon: "🎧",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SETTING THE STANDARD
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">PRODUCTS</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className={`h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <div className="text-white text-6xl">{product.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Explore Products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 