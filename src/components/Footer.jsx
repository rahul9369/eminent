import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-5 tracking-wide">
              Eminent AV
            </h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                WZ-572/J, Ground Floor, Naraina Village, Near Naraina Vihar
                Club, New Delhi - 110028
              </p>
              <p className="hover:text-white transition duration-300 cursor-pointer">
                info@eminentav.in
              </p>
              <p className="hover:text-white transition duration-300 cursor-pointer">
                011-7185 9054
              </p>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">About</h4>
            <ul className="space-y-3 text-sm">
              {["About Us", "Our Team", "Why Choose Us", "How It Works"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300 hover:pl-1 inline-block">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Contact Us", "Blog & News", "Support", "Clients"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300 hover:pl-1 inline-block">
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Eminent Audio & Video. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
