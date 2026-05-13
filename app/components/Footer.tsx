'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [year, setYear] = useState<number | string>('----');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <motion.footer
      className="bg-black text-cyan-500 py-12 px-6 border-t border-cyan-500/10 font-mono"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold tracking-tighter uppercase group cursor-default text-white">
            Jagruti<span className="text-cyan-500 group-hover:animate-pulse">.sys</span>
          </h2>
          <p className="text-[10px] text-cyan-900 uppercase tracking-widest font-mono">
            Secure Digital Presence // Built with Next.js 15
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-[10px] uppercase tracking-widest font-bold">
            <span className="text-cyan-900">Uptime: 100%</span>
            <span className="text-emerald-900">Security: Max</span>
          </div>
          <div className="text-[10px] text-cyan-600 opacity-40">
            © {year} JAGRUTI_TERMINAL. ALL_SYSTEMS_OPERATIONAL.
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 flex justify-center opacity-10">
         <div className="text-[8px] font-mono whitespace-nowrap overflow-hidden">
            01001010 01000001 01000111 01010010 01010101 01010100 01001001 00100000 01010000 01000001 01010100 01001001 01001100
         </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
