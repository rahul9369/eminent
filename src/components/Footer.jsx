import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaHeadphones,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#040B1A] via-[#07152D] to-[#0B1F40] text-gray-300 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">

        {/* ================= TOP CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {/* ================= COMPANY ================= */}
            <div>

              <div className="mb-5">
                <h2 className="text-3xl font-bold text-white">
                  Eminent
                </h2>

                <span className="text-blue-400 font-semibold tracking-wide">
                  Audio Visual
                </span>
              </div>

              <p className="text-sm text-gray-400 leading-7 mb-6">
                Premium professional audio visual solutions for auditoriums,
                clubs, conference rooms and large venues.
              </p>

              {/* Social */}
              <div className="flex gap-3">

                {[
                  {
                    icon: FaFacebookF,
                    link: "https://facebook.com",
                  },
                  {
                    icon: FaInstagram,
                    link: "https://instagram.com",
                  },
                  {
                    icon: FaLinkedinIn,
                    link: "https://linkedin.com",
                  },
                  {
                    icon: FaYoutube,
                    link: "https://youtube.com",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group
                        w-10 h-10 rounded-xl
                        bg-white/5 border border-white/10
                        flex items-center justify-center
                        hover:bg-blue-500 hover:border-blue-500
                        hover:-translate-y-1
                        transition-all duration-300
                      "
                    >
                      <Icon className="group-hover:scale-110 transition duration-300" />
                    </a>
                  );
                })}

              </div>

            </div>

            {/* ================= QUICK LINKS ================= */}
            <div>

              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <FaBuilding />
                </div>

                Quick Links
              </h3>

              <ul className="space-y-3">

                {[
                  {
                    name: "About Us",
                    path: "/about",
                  },
                  {
                    name: "Our Brands",
                    path: "/brands/amate",
                  },
                  {
                    name: "Solutions",
                    path: "/solutions/auditoriums",
                  },
                  {
                    name: "Case Study",
                    path: "/casestudy",
                  },
                  {
                    name: "Contact Us",
                    path: "/contact",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="
                        group flex items-center gap-2
                        text-sm text-gray-400
                        hover:text-blue-400
                        transition duration-300
                      "
                    >
                      <FaChevronRight className="text-[10px] text-blue-500 group-hover:translate-x-1 transition duration-300" />

                      {item.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>

            {/* ================= SOLUTIONS ================= */}
            <div>

              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <FaHeadphones />
                </div>

                Solutions
              </h3>

              <ul className="space-y-3">

                {[
                  {
                    name: "Auditoriums",
                    path: "/solutions/auditoriums",
                  },
                  {
                    name: "Conference Rooms",
                    path: "/solutions/conference-room",
                  },
                  {
                    name: "Live Events",
                    path: "/solutions/live-events",
                  },
                  {
                    name: "Night Clubs",
                    path: "/solutions/night-clubs",
                  },
                  {
                    name: "Retail Outlets",
                    path: "/solutions/retail-outlet",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="
                        group flex items-center gap-2
                        text-sm text-gray-400
                        hover:text-blue-400
                        transition duration-300
                      "
                    >
                      <FaChevronRight className="text-[10px] text-blue-500 group-hover:translate-x-1 transition duration-300" />

                      {item.name}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>

            {/* ================= CONTACT ================= */}
            <div>

              <h3 className="text-lg font-semibold text-white mb-5">
                Contact Info
              </h3>

              <div className="space-y-4">

                {/* Address */}
                <div className="flex gap-3 items-start">

                  <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaMapMarkerAlt />
                  </div>

                  <p className="text-sm text-gray-400 leading-6">
                    WZ-572/J, Ground Floor,
                    Naraina Village, New Delhi - 110028
                  </p>

                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">

                  <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaEnvelope />
                  </div>

                  <a
                    href="mailto:info@eminentav.in"
                    className="text-sm text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    info@eminentav.in
                  </a>

                </div>

                {/* Phone */}
                <div className="flex gap-3 items-center">

                  <div className="min-w-[42px] h-[42px] rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaPhoneAlt />
                  </div>

                  <a
                    href="tel:+9101171859054"
                    className="text-sm text-gray-400 hover:text-blue-400 transition duration-300"
                  >
                    +91 9999 999 999
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FULL WIDTH MAP ================= */}
        <div className="w-full pb-10">

          <div
            className="
              overflow-hidden
              border-y border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >

            <iframe
              title="Eminent Audio Visual Location"
              src="https://maps.google.com/maps?q=WZ-572/J,%20Ground%20Floor,%20Naraina%20Village,%20New%20Delhi%20110028&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                w-full
                h-[260px]
                md:h-[450px]
                grayscale-[20%]
                hover:grayscale-0
                transition duration-500
              "
            ></iframe>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Eminent Audio Visual.
              All Rights Reserved.
            </p>

            <div className="flex gap-6 text-sm">

              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-blue-400 transition duration-300"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-500 hover:text-blue-400 transition duration-300"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;