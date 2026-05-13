'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'React.tsx', icon: <FaReact />, level: '90%', color: 'cyan' },
  { name: 'Node.js', icon: <FaNodeJs />, level: '85%', color: 'violet' },
  { name: 'MongoDB.db', icon: <DiMongodb />, level: '82%', color: 'violet' },
  { name: 'Express.api', icon: <SiExpress />, level: '85%', color: 'violet' },
  { name: 'TypeScript.ts', icon: <SiTypescript />, level: '80%', color: 'blue' },
  { name: 'Tailwind.css', icon: <SiTailwindcss />, level: '92%', color: 'cyan' },
  { name: 'JavaScript.js', icon: <FaJs />, level: '88%', color: 'cyan' },
  { name: 'Git.sys', icon: <FaGitAlt />, level: '85%', color: 'blue' },
  { name: 'Java.bin', icon: <FaJava />, level: '75%', color: 'blue' },
  { name: 'Architecture', icon: <FaHtml5 />, level: '95%', color: 'cyan' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter text-white">
            Core<span className="text-cyan-500">_Capabilities</span>
          </h2>
          <div className="flex justify-center gap-1 mt-4">
             {[1,2,3].map(i => <div key={i} className="w-10 h-[2px] bg-white/10"></div>)}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group relative glass-panel p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`text-4xl mb-6 flex justify-center transition-all duration-300 ${
                skill.color === 'cyan' ? 'text-cyan-400 group-hover:text-glow-cyan' : 
                skill.color === 'violet' ? 'text-violet-400 group-hover:text-glow-violet' :
                'text-blue-400 group-hover:text-glow-blue'
              }`}>
                {skill.icon}
              </div>
              <h3 className="text-[10px] font-bold font-mono tracking-widest uppercase text-gray-400 mb-4 group-hover:text-white">
                {skill.name}
              </h3>
              <div className="w-full h-[1px] bg-white/5 relative">
                <motion.div 
                  className={`absolute top-0 left-0 h-full ${
                    skill.color === 'cyan' ? 'bg-cyan-500' : 
                    skill.color === 'violet' ? 'bg-violet-500' :
                    'bg-blue-500'
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between text-[7px] mt-2 opacity-20 font-mono tracking-tighter">
                <span>LVL: {skill.level}</span>
                <span>RDY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
