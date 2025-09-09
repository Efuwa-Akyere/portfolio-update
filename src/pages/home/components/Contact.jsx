import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            I'm open to new opportunities, collaborations, or just a friendly chat. 
            Feel free to reach out through the form or my socials below.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3"><FaEnvelope className="text-green-400" /> efuwaakyere13@gmail.com</p>
            <p className="flex items-center gap-3"><FaPhoneAlt className="text-green-400" /> +233 55 123 4567</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-green-400" /> Accra, Ghana</p>
          </div>

          <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://github.com/Efuwa-Akyere" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaGithub /></a>
            <a href="https://linkedin.com/in/efuwayorke13" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaLinkedin /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form action="https://formspree.io/f/yourFormId" method="POST" className="space-y-5">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
              required
            />
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Your Message" 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-green-500 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
