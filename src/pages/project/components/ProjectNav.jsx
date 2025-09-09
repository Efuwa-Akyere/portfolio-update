import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // for animation
import { Link, useNavigate } from "react-router";

const ProjectNav = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={navigate(-1)} className="text-2xl font-bold text-green-600">
          Efuwa Yorke
        </Link>
      </div>
    </nav>
  );
};

export default ProjectNav;
