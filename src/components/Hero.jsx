import React from "react";
import HeadShot2 from "../assets/Headshot2.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-20 md:pt-24">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-green-400">Efuwa Akyere Mensa-Yorke</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-xl">
  A passionate web developer focused on building clean, responsive, and user-friendly digital solutions that solve real-world problems.
</p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 rounded-full font-medium shadow-md hover:bg-green-600 transition"
          >
            View Projects
          </a>
          
        </div>

        {/* Socials */}
        <div className="flex gap-6 mt-10 justify-center md:justify-start text-2xl">
          <a
            href="https://github.com/Efuwa-Akyere"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/efuwayorke13"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://web.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      {/* Right content - Image/Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex justify-center mt-12 md:mt-0"
      >
        <img
          src={HeadShot2}
          alt="Profile"
          className="rounded-full border-4 border-green-400 shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
