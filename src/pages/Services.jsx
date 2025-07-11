import React from "react";

const Services = () => {
  const services = [
    {
      title: "Distribution",
      description: "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
      icon: "🚚",
      features: [
        "Wide network of authorized dealers",
        "Genuine product warranty",
        "After-sales support",
        "Technical training for partners"
      ]
    },
    {
      title: "Consulting",
      description: "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
      icon: "💡",
      features: [
        "System design consultation",
        "Acoustic analysis",
        "Budget optimization",
        "Technology recommendations"
      ]
    },
    {
      title: "Integration",
      description: "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
      icon: "🔧",
      features: [
        "Custom system integration",
        "Multi-platform compatibility",
        "Scalable solutions",
        "Future-proof technology"
      ]
    },
    {
      title: "Support",
      description: "We distribute, promote some of the finest brands of professional audio equipment through our efficient channel partners throughout India.",
      icon: "🛠️",
      features: [
        "24/7 technical support",
        "On-site maintenance",
        "Remote troubleshooting",
        "Preventive maintenance"
      ]
    },
    {
      title: "Training",
      description: "We define requirements; analyze problems & areas of improvement by providing specialized expertise with efficient business practices.",
      icon: "🎓",
      features: [
        "Product training programs",
        "System operation training",
        "Maintenance workshops",
        "Certification courses"
      ]
    },
    {
      title: "Design",
      description: "We create unique solutions which add value to a system through new functionalities provided by independent applications of different systems.",
      icon: "🎨",
      features: [
        "Custom audio system design",
        "Acoustic room design",
        "Visual design integration",
        "User experience optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive audio and video solutions tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and objectives" },
              { step: "02", title: "Planning", description: "Designing the perfect solution for your needs" },
              { step: "03", title: "Implementation", description: "Professional installation and setup" },
              { step: "04", title: "Support", description: "Ongoing maintenance and technical support" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Government", icon: "🏛️", description: "Audio solutions for government institutions" },
              { name: "Corporate", icon: "🏢", description: "Professional audio for corporate environments" },
              { name: "Hospitality", icon: "🏨", description: "Audio systems for hotels and restaurants" },
              { name: "Education", icon: "🎓", description: "Audio-visual solutions for educational institutions" },
              { name: "Events", icon: "🎪", description: "Live event and performance audio systems" },
              { name: "Home & Hi-Fi", icon: "🏠", description: "Premium home audio and video systems" }
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">
            Let our team of experts help you find the perfect audio solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold">
              Get a Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-bold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 