import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // for animation
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">Efuwa Yorke</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
  <Link to="/" className="hover:text-green-600 transition">Home</Link>
  <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
  <li><a href="#skills" className="hover:text-green-600 transition">Skills</a></li>
  <li><Link to="/projects" className="hover:text-green-600 transition">Projects</Link></li>
  <li><a href="#services" className="hover:text-green-600 transition">Services</a></li>
  
</ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              <Link to="/" onClick={toggleMenu} className="hover:text-green-600">Home</Link>
              <li><a href="#about" onClick={toggleMenu} className="hover:text-green-600">About</a></li>
              <li><a href="#skills" onClick={toggleMenu} className="hover:text-green-600">Skills</a></li>
              <li><Link to="/projects" onClick={toggleMenu} className="hover:text-green-600">Projects</Link></li>
              <li><a href="#services" onClick={toggleMenu} className="hover:text-green-600">Services</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
