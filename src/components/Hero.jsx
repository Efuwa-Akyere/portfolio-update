import React from "react";
import Headshot1 from "../assets/Headshot1.jpg";
import resumePDF from "../assets/MyCV-Nov20.pdf";

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white text-center py-16">
      <img
        src={Headshot1}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Efuwa Akyere Mensa-Yorke
        </span>
        ,A junior frontend developer
      </h1>
      <p className="mt-6 text-lg text-gray-300">
        I specialize in building modern and responsive applications.
      </p>
      <div className="mt-14 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
        <a 
          href={resumePDF} 
          download="Efuwa_Akyere_Resume.pdf"
          className="inline-block"
        >
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
