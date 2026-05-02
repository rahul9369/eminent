import React from "react";

const About = () => {
  return (
    <div className="bg-[#f8fafc] text-gray-800">
      {/* Hero Section */}
      <div className="py-20 text-center bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
          About Eminent AV
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Delivering premium audio & video experiences across India with
          innovation and excellence.
        </p>
      </div>

      <div className=" mx-auto px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to redefine professional audio solutions,
              Eminent Audio & Video has grown into a trusted industry leader.
              From a small passionate team to a nationwide presence, our journey
              reflects innovation, dedication, and excellence.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We serve diverse industries including corporate, hospitality,
              education, and government sectors with cutting-edge AV solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every project we deliver is built on precision, creativity, and a
              deep understanding of client needs.
            </p>
          </div>

          {/* Image Box */}
         <img
  src="/images/about.jpg"
  alt="About"
  className="h-96 w-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition duration-500"
/>  
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver high-quality, innovative AV solutions that enhance
              communication, entertainment, and experiences.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become India's most trusted AV solutions provider, setting new
              benchmarks in quality, service, and innovation.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✓",
                title: "Quality",
                desc: "Delivering excellence in every project.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Honesty and transparency in all dealings.",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Adopting cutting-edge technologies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "XYZ", role: "CEO & Founder" },
              { name: "XYZ", role: "Technical Director" },
              { name: "XYZ", role: "Sales Manager" },
              { name: "XYZ", role: "Customer Success" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Achievements
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50+", label: "Brands Partnered" },
              { value: "1000+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-4xl font-bold mb-2">{item.value}</div>
                <p className="text-gray-200 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
