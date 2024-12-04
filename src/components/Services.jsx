import React from "react";

const Service = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appeapling and user-friendly web desings",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Developing robust server-side logic and databases",
  },
];

const Services = () => {
  return (
    <div className="bg-slate-100 text-black" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12"> My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Service.map((services) => (
            <div
              key={services.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {services.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {services.title}
              </h3>
              <p className="mt-2 text-gray-300">{services.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500"></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
