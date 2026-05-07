import React from "react";

const RetailOutlet = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Retail Outlet</h1>
      <p className="text-gray-600 mb-8">
        Enhance shopping experience with background audio and announcements.
      </p>

      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["In-store Music", "Announcements", "Customer Engagement"].map(
          (f, i) => (
            <div key={i} className="p-5 bg-white shadow rounded-xl">
              {f}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default RetailOutlet;
