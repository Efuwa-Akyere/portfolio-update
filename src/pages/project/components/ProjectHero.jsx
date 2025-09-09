import { FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Frontend",
    description: "A collection of modern, user-focused web interfaces.",
    link: '/frontend'
    
  },
  {
    id: 2,
    title: "Backend",
    description:
      "A suite of scalable APIs for modern web applications.",
      link: '/backend'
    
  },
  {
    id: 3,
    title: "Figma",
    description:
      "Modern, scalable UI concepts crafted in Figma.",
      link: '/figma'
    
  },
];

const ProjectHero = () => {
  return (
    <div
      className="bg-gradient-to-b from-slate-50 to-slate-200 text-black py-16 mt-16 h-[100vh]"
      
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-blue-400">
                {project.link && <Link to={project.link}>Go to {project.title}</Link>}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
