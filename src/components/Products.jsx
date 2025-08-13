import React from "react";

const Products = () => {
  const products = [
    {
      title: "Home Theatre & Hi-fi",
      description: "Make your Cinematic experience Legendary",
      image:
        "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGolMjBpbWd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Music & Recording",
      description: "Most Popular gears for your Music Studio",
      image:
        "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGolMjBpbWd8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Pro Audio & Visual",
      description: "Commercial AV solutions simplified",
      image:
        "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGolMjBpbWd8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SETTING THE STANDARD
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">PRODUCTS</h3>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-white text-sm mb-4">{product.description}</p>
                <button
                  onClick={() => alert(`Exploring ${product.title}...`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
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
