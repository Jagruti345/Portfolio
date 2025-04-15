import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 py-16 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I’m currently pursuing a degree in <span className="text-blue-400 font-semibold">Computer Engineering</span>, where I’ve developed a strong foundation in software development, problem-solving, and system design.
        As a <span className="text-blue-400 font-semibold">Full Stack Developer</span>, I specialize in building scalable, responsive web applications using the <span className="text-blue-400 font-semibold">MERN stack</span> and other modern technologies.
        <br /><br />
        I’m passionate about clean, maintainable code and building digital experiences that are both functional and elegant. My long-term goal is to work on impactful products and become a technology leader who contributes to solving real-world problems through software.
      </motion.p>
    </section>
  );
};

export default About;
