import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left">
        
        {/* Brand / Name */}
        <div>
          <h2 className="text-2xl font-bold text-white">Efuwa Yorke</h2>
          <p className="mt-2 text-sm text-gray-400 leading-relaxed">
            Web Developer | Passionate about building modern, user-friendly web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3 text-center">Quick Links</h3>
          <ul className="space-y-1 text-center">
            <li><a href="#home" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-green-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-green-500 transition">Skills</a></li>
            <Link to="/projects" className="hover:text-green-500 transition">Projects</Link>
            <li><a href="#services" className="hover:text-green-500 transition">Services</a></li>
          </ul>
        </div>

        {/* Connect (Socials + Contact Info) */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a
              href="https://github.com/efuwa-akyere"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Contact Info */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaEnvelope className="text-gray-400 hover:text-white transition" /> efuwayorke13@gmail.com
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaPhoneAlt className="text-gray-400 hover:text-white transition" /> +233 242 078 763
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-gray-400 hover:text-white transition" /> Accra, Ghana
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Efuwa Yorke. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
