import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4"
    >
      {/* Profile Picture */}
      <motion.div
        className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-6 relative bg-gray-200 flex items-center justify-center transition-all duration-300 ease-in-out hover:w-52 hover:h-52 hover:border-8 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <img
          src="Myphoto.jpg"  // Your photo with no background (transparent)
          alt="Profile"
          className="w-full h-full object-cover object-top transform transition duration-300 ease-in-out hover:scale-110"
        />
      </motion.div>

      {/* Name & Title */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Hi, I'm <span className="text-blue-500">Jagruti</span>
      </motion.h1>

      <motion.h2
        className="text-xl text-gray-300 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Full Stack Developer | MERN Stack | Passionate About Clean Code & Scalable Systems
      </motion.h2>

      {/* Short About */}
      <motion.p
        className="max-w-xl text-center text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I build robust web applications using modern tech like React, Node.js, and MongoDB.
        With a strong eye for UI and a love for backend architecture, I deliver full-stack solutions
        that are both beautiful and powerful.
      </motion.p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <motion.a
          href="/JagrutiResume.pdf"
          target="_blank"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Download Resume
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 py-3 border-2 border-blue-500 hover:bg-blue-500 text-white font-semibold rounded-full transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
