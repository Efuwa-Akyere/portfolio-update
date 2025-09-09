import React from "react";
import { motion } from "framer-motion";
import HeadShot2 from '../../../assets/Headshot2.jpg'


const About = () => {
  return (
    <div id="about" className="py-20 bg-white text-gray-800 px-10 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.img 
          src= {HeadShot2} 
          alt="Efuwa Yorke" 
          className="w-64 h-96 rounded-2xl object-cover shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Text */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <p className="text-gray-600 leading-relaxed max-w-3xl">
  I am a detail-oriented and result-driven <span className="font-semibold">Web Developer</span>  
  {' '}with a strong foundation in <span className="font-semibold">HTML, CSS, JavaScript, React, 
  Node.js, Express.js, TailwindCSS, and Git</span>. My journey in tech began after completing 
  a <span className="font-semibold">BSc in Mathematics with Economics</span> at the University of Cape Coast, 
  followed by intensive training at <span className="font-semibold">MEST Africa</span> and 
  <span className="font-semibold"> Developers in Vogue</span>.
</p>

<p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
  Over the years, I have worked on projects including an African fashion e-commerce platform, 
  a library application, and a dictionary app, applying my skills to create practical, user-friendly solutions. 
  I also contributed as a <span className="font-semibold">Digital Skills Expert</span> with the 
  <span className="font-semibold">Young Africa Innovates Program</span>, where I collaborated 
  with innovators and supervisors to design impactful web solutions such as the Noghusam Cocoa Pod 
  Breaking Machine landing page.
</p>

<p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
  With strong communication, teamwork, and problem-solving skills, I'm committed to continuous learning 
  and eager to contribute to innovative teams. My goal is to deliver solutions that not only meet 
  expectations but also make a real impact.
</p>
         
        </motion.div>
      </div>
    </div>
  );
};

export default About;
