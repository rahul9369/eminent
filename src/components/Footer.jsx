import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Eminent Audio & Video</h3>
            <div className="space-y-2">
              <p>
                WZ-572/J, Ground Floor, Naraina Village, Near Naraina Vihar
                Club, New Delhi - 110028
              </p>
              <p>info@eminentav.in</p>
              <p>011-7185 9054</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog & News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Clients
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Refund and Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2024 Eminent Audio & Video. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 