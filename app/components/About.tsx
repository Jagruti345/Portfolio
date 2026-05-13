'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserSecret, FaCode, FaRocket, FaDatabase } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sidebar: Metadata */}
          <motion.div 
            className="lg:w-1/3 sticky top-32 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-8 border-cyan-500/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-[8px] text-gray-700 font-mono">0x7F_ADMIN</div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-black text-xl">
                  <FaUserSecret />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tighter">Jagruti Patil</h2>
                  <p className="text-[10px] text-cyan-500 font-mono uppercase tracking-widest">Fullstack Engineer</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5 font-mono text-[10px]">
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">Class:</span>
                  <span className="text-white">System_Architect</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">Core:</span>
                  <span className="text-white">MERN_Stack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 uppercase">Location:</span>
                  <span className="text-white">Node_01_Global</span>
                </div>
              </div>

              <div className="h-2 w-full bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-cyan-500"
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                />
              </div>
            </div>
            
            <div className="px-4 text-gray-700 font-mono text-[9px] uppercase tracking-[0.3em] leading-relaxed">
              {"// Encryption: AES-256"} <br/>
              {"// Signature: Verified"} <br/>
              {"// Log_Time: "}{new Date().toLocaleTimeString()}
            </div>
          </motion.div>

          {/* Main Content: Narrative Blog Style */}
          <motion.div 
            className="lg:w-2/3 space-y-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 underline decoration-cyan-500/30">Scalable Solutions</span> from the ground up.
              </h3>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-lg text-gray-400 font-inter font-light leading-relaxed">
                  My journey into the digital void began with a fascination for <span className="text-white font-medium">Complex Logic Systems</span>. Currently pursuing my degree in <span className="text-cyan-400 font-bold">Computer Engineering</span>, I have spent countless cycles optimizing data structures and architecting full-scale applications.
                </p>
                <p className="text-lg text-gray-400 font-inter font-light leading-relaxed">
                  I don&apos;t just write code; I build <span className="text-violet-400 font-bold">Infrastructure</span>. Specializing in the MERN stack, I focus on the intersection of security, speed, and user experience. Every line of code is a protocol designed to solve real-world problems.
                </p>
              </div>
            </div>

            {/* Icon Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="glass-panel p-8 space-y-4 border-l-2 border-cyan-500">
                  <FaCode className="text-cyan-500 text-2xl" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">Clean_Architecture</h4>
                  <p className="text-gray-500 text-xs font-mono">Writing maintainable, scalable, and modular code that survives the test of time.</p>
               </div>
               <div className="glass-panel p-8 space-y-4 border-l-2 border-violet-500">
                  <FaDatabase className="text-violet-500 text-2xl" />
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">Data_Integrity</h4>
                  <p className="text-gray-500 text-xs font-mono">Designing robust database schemas that handle high-concurrency with ease.</p>
               </div>
               <div className="md:col-span-2 glass-panel p-8 space-y-4 border-l-2 border-white/20">
                  <div className="flex items-center gap-4">
                     <FaRocket className="text-white text-2xl animate-bounce" />
                     <h4 className="text-white font-bold uppercase tracking-widest text-xs">The_Mission</h4>
                  </div>
                  <p className="text-gray-400 text-sm font-inter italic leading-relaxed">
                    &quot;To transform abstract ideas into concrete digital systems that empower users and push the boundaries of what is possible on the modern web.&quot;
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default About;
