import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              WHO WE ARE
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Stretched to both sides of the horizon, we are the professionals
              dedicated to promoting, market & distribute some of the best
              brands in the professional audio industry. Our team brings the
              innovative turn-key approach of providing solutions starting from
              importing & logistics of goods till the final execution &
              commissioning. Every solution created by us brings productivity,
              efficiency & sustainability towards life and businesses.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              INNOVATORS IN AUDIO CREATION
            </h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Driven by ethical policies we create a transparent business
              structure for our customers, employees and for the protection of
              corporate integrity.
            </p>
            <Link to="/about">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
