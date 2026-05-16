'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "SYSTEM_STATUS: ONLINE // AUTH_LEVEL: ROOT";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Info & Headline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p 
              className="text-xs font-mono tracking-[0.5em] text-cyan-500 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {text}<span className="animate-pulse">_</span>
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              Designing <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 text-glow-cyan">The Future.</span>
            </h1>

            <p className="max-w-lg text-gray-400 font-mono text-sm leading-relaxed">
              &gt; I AM JAGRUTI PATIL. A FULLSTACK ARCHITECT SPECIALIZING IN MERN SYSTEMS AND SCALABLE CLOUD INFRASTRUCTURE. 
              TRANSFORMING COMPLEX LOGIC INTO SEAMLESS DIGITAL EXPERIENCES.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group relative px-8 py-4 bg-cyan-500 text-black font-black uppercase text-xs tracking-widest overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <span className="relative z-10">Initialize_Projects</span>
            </a>
            <a href="https://drive.google.com/file/d/1rQ3IcNs65c3b8OGWHZ-V3yfkJlE5dF57/view?usp=sharing" target="_blank" className="px-8 py-4 border border-white/10 text-white font-black uppercase text-xs tracking-widest hover:border-violet-500 hover:text-violet-400 transition-all">
              Resume.manifest
            </a>
          </div>

          <div className="flex gap-12 pt-8 border-t border-white/5 font-mono">
            <div className="space-y-1">
              <span className="block text-[10px] text-gray-600 uppercase">Latency</span>
              <span className="block text-sm text-cyan-400 font-bold">14ms</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-gray-600 uppercase">Uptime</span>
              <span className="block text-sm text-violet-400 font-bold">99.9%</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] text-gray-600 uppercase">Status</span>
              <span className="block text-sm text-emerald-400 font-bold">STABLE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative group hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative glass-panel p-2 border-white/10 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 mb-4">
               <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
               </div>
               <span className="text-[8px] text-gray-600 tracking-widest uppercase">root@jagruti: ~/portrait</span>
            </div>

            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden">
               <Image
                  src="/Myphoto.jpg"
                  alt="Jagruti"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
               />
               {/* Cyber Overlays */}
               <div className="absolute inset-0 border border-cyan-500/20 pointer-events-none"></div>
               <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500"></div>
               <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-violet-500"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               
               <div className="absolute bottom-6 left-6 space-y-1">
                  <span className="text-[10px] text-cyan-500 font-mono tracking-widest block">ID::JAGRUTI_PATIL</span>
                  <span className="text-[8px] text-gray-400 font-mono block uppercase">Role: System Architect</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-gray-600">Scroll_Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
