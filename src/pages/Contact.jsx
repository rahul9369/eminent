import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaHeadset,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team of audio experts. We're here to help you
            find the perfect solution for your audio and video needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-2">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
                <InputField
                  label="Email *"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />
                <InputField
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your audio/video requirements..."></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all font-semibold shadow-md">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="Address"
              content="WZ-572/J, Ground Floor, Naraina Village, Near Naraina Vihar Club, New Delhi - 110028"
            />
            <InfoCard
              icon={<FaEnvelope />}
              title="Email"
              content="info@eminentav.in"
            />
            <InfoCard
              icon={<FaPhoneAlt />}
              title="Phone"
              content="011-7185 9054"
            />

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Business Hours
              </h3>
              <HoursRow day="Monday - Friday" time="9:00 AM - 6:00 PM" />
              <HoursRow day="Saturday" time="10:00 AM - 4:00 PM" />
              <HoursRow day="Sunday" time="Closed" />
            </div>

            {/* Emergency Contact */}
          </div>
        </div>
        <div className="bg-gradient-to-r mt-10 from-blue-100 to-indigo-200 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
          <p className="mb-6 leading-relaxed">
            Need immediate assistance with your audio system? Our technical team
            is available 24/7 for critical issues.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            <FaHeadset /> Call Emergency Support
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);

const InfoCard = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const HoursRow = ({ day, time }) => (
  <div className="flex justify-between py-1 border-b last:border-b-0">
    <span className="text-gray-600">{day}</span>
    <span className="font-medium">{time}</span>
  </div>
);

export default Contact;
