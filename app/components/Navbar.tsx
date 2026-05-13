'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-8 py-4 border-white/5 rounded-none shadow-2xl">
        <a href="#home" onClick={() => setActiveItem('Home')} className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white flex items-center justify-center text-black font-black text-lg group-hover:bg-cyan-400 transition-colors">J</div>
          <h1 className="text-xl font-black text-white uppercase tracking-tighter hidden md:block">
            Jagruti<span className="text-cyan-500">.sys</span>
          </h1>
        </a>

        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className={`text-[10px] tracking-[0.3em] uppercase transition-all duration-300 relative group py-2 ${
                  activeItem === item ? 'text-cyan-400 font-bold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {item}
                {activeItem === item && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-[9px] uppercase tracking-widest text-gray-500 font-mono hidden sm:block">Link_Stable</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
