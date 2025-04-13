import React from 'react';
import { motion } from 'framer-motion';
import portfolioImage from '../assets/PortfolioImg.png';
import amazonImage from '../assets/AmazonImg.png';
import practicalImage from '../assets/practicalImg.jpg';


const projects = [
  {
    title: 'Amazon Clone (Frontend Only)',
    description:
      'A pixel-perfect Amazon landing page clone designed using only HTML and CSS. It replicates the layout, header, product grid, and responsive structure of the original site.',
    tech: ['HTML', 'CSS'],
    image:amazonImage ,
    link: 'https://website-clone-omega-nine.vercel.app/', // Replace with your actual deployment link
    github: 'https://github.com/Jagruti345/Website-Clone.git',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive, professional portfolio to showcase my full-stack projects and skills, using React, TailwindCSS, and Framer Motion.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: portfolioImage,
    link: '#',
    github: 'https://github.com/your-username/portfolio-website',
  },
  {
    title: 'Practical Management System (Backend Only)',
    description:
      'A powerful backend system for managing team tasks, featuring secure role-based APIs, MongoDB integration, and Express routing for admin and user control.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    image: practicalImage,
    link: 'https://practical-management-system-k1j2.vercel.app/',
    github: 'https://github.com/Jagruti345/Practical-Management-System.git',
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-20 px-6"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-blue-500 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 transition duration-300 border border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover object-top border-b border-gray-800"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold text-blue-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  View Project →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold rounded-full transition-transform transform hover:scale-105 shadow-md"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
