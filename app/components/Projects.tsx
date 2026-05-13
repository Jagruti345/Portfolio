'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Blogsribe',
    description: 'Next-gen blogging architecture optimized for edge delivery and high-concurrency content serving.',
    tech: ['Next.js', 'React', 'MDX'],
    image: '/AmazonImg.png',
    link: '#',
    id: 'P_01',
    color: 'cyan'
  },
  {
    title: 'Let\'sMeet',
    description: 'Mission-critical video infrastructure utilizing WebRTC protocols and socket-based signaling.',
    tech: ['WebRTC', 'Socket.io', 'MERN'],
    image: '/PortfolioImg.png',
    link: '#',
    id: 'P_02',
    color: 'violet'
  },
  {
    title: 'Amazon Clone',
    description: 'Full-scale e-commerce simulation featuring Stripe integration and real-time inventory tracking.',
    tech: ['React', 'Firebase', 'Stripe'],
    image: '/AmazonImg.png',
    link: '#',
    id: 'P_03',
    color: 'blue'
  },
  {
    title: 'Wanderlust',
    description: 'Travel intelligence platform with geospatial searching and automated local discovery mapping.',
    tech: ['MERN', 'Google Maps'],
    image: '/practicalImg.jpg',
    link: '#',
    id: 'P_04',
    color: 'cyan'
  },
  {
    title: 'Niveshika',
    description: 'High-fidelity financial dashboard for real-time portfolio management and data visualization.',
    tech: ['MERN', 'Chart.js'],
    image: '/PortfolioImg.png',
    link: '#',
    id: 'P_05',
    color: 'violet'
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern architect portfolio utilizing Next.js 15, Framer Motion, and high-end glassmorphism.',
    tech: ['Next.js', 'Framer'],
    image: '/PortfolioImg.png',
    link: '#',
    id: 'P_06',
    color: 'blue'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
            Deployment_<span className="text-violet-500">Archive</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative glass-panel overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-[10px] text-white font-mono border-white/10">
                  REF::{project.id}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs font-mono leading-relaxed mb-8 flex-1 italic">
                  {project.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t, i) => (
                      <span key={i} className="text-[8px] text-gray-400 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} className="text-[10px] font-black uppercase text-cyan-500 hover:text-white transition-colors">
                    EXECUTE &gt;&gt;
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
