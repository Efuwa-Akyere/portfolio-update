import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="bg-slate-100 text-black py-5" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-black mb-4">Let's Talk</h3>
            <p>
              I'm open to discusing web development projects or internship
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-gray-800 mr-2"></FaEnvelope>
              <a href="mailto:efuwayorke13@gmail.com" className="hover:underline">
                efuwayorke13@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-gray-800 mr-2"></FaPhone>
              <span>+233242078763</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-gray-800 mr-2"></FaMapMarkedAlt>
              <span>Tesano,Accra,Ghana</span>
            </div>
          </div>
          <div className="flex-1 w-full"></div>
          <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Name"/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Name"/>
            </div>
            <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" 
                rows="2"
                placeholder="Enter Your Message"/>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-7 py-2 rounded-full'>Send</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
