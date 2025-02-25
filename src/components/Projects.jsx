import React from "react";
import Library from "../assets/Library.png";
import Dictionary from "../assets/Dictionary.png";
import AfricanShop from "../assets/AfricaShop.png";

const projects = [
  {
    id: 1,
    name: "African Shop Website",
    technologies: "React,Javascript & Tailwind",
    image: AfricanShop,
    github: "https://stylesconnectafrica.netlify.app/",
  },
  {
    id: 2,
    name: "Libray Website",
    technologies: "React,Javascript & Tailwind",
    image: Library,
    github: "https://thelibraryapp.netlify.app/",
  },
  {
    id: 3,
    name: "Dictionary Website",
    technologies: "HTMl,Javascript & CSS",
    image: Dictionary,
    github: "https://efuwa-akyere.github.io/API-website/",
  },
 
];

const Projects = () => {
  return (
    <div className="bg-slate-100 text-black py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12"> Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={projects.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={projects.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
      <hr className="mt-16 border-black" />
    </div>
  );
};

export default Projects;
