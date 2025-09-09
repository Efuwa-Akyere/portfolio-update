import React from "react";
import { FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting modern, responsive, and user-friendly interfaces.",
    icon: <FaPaintBrush className="text-4xl text-green-400" />,
  },
  {
    id: 2,
    title: "Frontend Integration",
    description: "Building interactive and dynamic web applications with React & Tailwind.",
    icon: <FaLaptopCode className="text-4xl text-blue-400" />,
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing scalable APIs and managing databases for efficiency.",
    icon: <FaServer className="text-4xl text-purple-400" />,
  },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 text-black py-16" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
