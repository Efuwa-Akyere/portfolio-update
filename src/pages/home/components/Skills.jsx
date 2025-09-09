import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-700" },
];

const Skills = () => {
  return (
    <div id="skills" className="py-20 bg-gray-100 text-gray-800 px-10 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <div className={`text-5xl ${skill.color} mb-4`}>{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
