import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaCogs } from 'react-icons/fa'; // Using FaCogs for C language icon

const skills = [
  { name: 'HTML', icon: <FaHtml5 size={40} />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt size={40} />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs size={40} />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact size={40} />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, color: '#8CC84B' },
  { name: 'MongoDB', icon: <DiMongodb size={40} />, color: '#4DB33D' },
  { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F1502F' },
  { name: 'Java', icon: <FaJava size={40} />, color: '#007396' },
  { name: 'Express.js', icon: <SiExpress size={40} />, color: '#000000' },
  { name: 'C', icon: <FaCogs size={40} />, color: '#A8B9CC' }, // Adding C with FaCogs
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-500 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 justify-center max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center space-y-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div
              className="p-4 rounded-full"
              style={{
                backgroundColor: skill.color,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              {skill.icon}
            </div>
            <span className="text-lg font-medium text-gray-300">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
