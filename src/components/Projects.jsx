import AfricaShop from '../assets/AfricaShop.png'
import Library from '../assets/Library.png'
import Dictionary from '../assets/Dictionary.png'

const projects = [
  { title: "Afican Shop Website", img: AfricaShop, link: "https://stylesconnectafrica.netlify.app/" },
  { title: "Library App", img: Library, link: "https://thelibraryapp.netlify.app/" },
  { title: "Dictionary", img: Dictionary, link: "https://efuwa-akyere.github.io/API-website/" },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white text-gray-800 px-10 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
            <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <a href={project.link} className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
