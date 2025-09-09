import AfricaShop from '../../../assets/AfricaShop.png'
import Library from '../../../assets/Library.png'
import Dictionary from '../../../assets/Dictionary.png'
import Ecommerce from '../../../assets/Ecommerce.png'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion'; 

const projects = [
  { title: "Afican Shop Website", img: AfricaShop, link: "https://stylesconnectafrica.netlify.app/" },
  { title: "Library App", img: Library, link: "https://thelibraryapp.netlify.app/" },
  { title: "Dictionary", img: Dictionary, link: "https://efuwa-akyere.github.io/API-website/" },
  { title: "E-Commerce", img: Ecommerce, link: "https://noghusam.netlify.app/" },
];

const Frontend = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      id="projects"
      className="py-20 bg-white text-gray-800 px-6 md:px-24 relative"
      initial={{ opacity: 0, y: 30 }}       // 👈 start faded + slightly down
      animate={{ opacity: 1, y: 0 }}        // 👈 animate to visible + in place
      transition={{ duration: 0.6, ease: "easeOut" }} // 👈 smooth transition
    >
      {/* Back Button */}
      <button
        className="absolute top-6 left-6 md:top-10 md:left-10 
                   bg-green-500 text-white font-medium 
                   px-3 py-1.5 md:px-5 md:py-2 
                   rounded-lg shadow-md 
                   hover:bg-green-600 transition"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 sm:mt-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Frontend;
