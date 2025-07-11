import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in professional audio and video solutions across India
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize the audio industry, Eminent Audio & Video 
              has been at the forefront of professional audio solutions for over a decade. 
              We started as a small team of passionate audio engineers and have grown into 
              one of India's most trusted names in professional audio equipment.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple mission: to provide the highest quality 
              audio equipment and exceptional service to our clients. Today, we're proud 
              to serve clients across various industries, from government institutions 
              to corporate offices, from hospitality venues to educational institutions.
            </p>
            <p className="text-gray-600">
              We believe in the power of sound to transform spaces and create memorable 
              experiences. Every project we undertake is approached with the same level 
              of dedication and attention to detail that we had when we first started.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-96 rounded-lg flex items-center justify-center">
            <div className="text-white text-6xl">🎵</div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, high-quality audio and video solutions that enhance 
              the way people experience sound and visual content. We strive to be the 
              most trusted partner for professional audio equipment and services in India.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of professional audio and video solutions, 
              setting industry standards for quality, innovation, and customer service 
              while contributing to the growth of the audio-visual industry in India.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product and service we offer 
                meets the highest industry standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical 
                practices in all our dealings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and solutions to provide 
                cutting-edge audio-visual experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Rahul Sharma", role: "CEO & Founder", avatar: "👨‍💼" },
              { name: "Priya Patel", role: "Technical Director", avatar: "👩‍💻" },
              { name: "Amit Kumar", role: "Sales Manager", avatar: "👨‍💼" },
              { name: "Neha Singh", role: "Customer Success", avatar: "👩‍💼" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{member.avatar}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Brands Partnered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 