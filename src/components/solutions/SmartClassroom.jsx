import React from "react";

const SmartClassroom = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Smart Classroom</h1>
      <p className="text-gray-600 mb-8">
        Advanced audio solutions for modern digital classrooms.
      </p>

      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
        className="rounded-2xl shadow-lg mb-8 w-full h-[400px] object-cover"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {["Clear Audio", "Digital Integration", "Student Engagement"].map(
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

export default SmartClassroom;
