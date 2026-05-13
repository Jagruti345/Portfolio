'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('// MESSAGE_DELIVERED_SUCCESSFULLY');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        const errorMessage = data.errors?.[0]?.message || data.message || 'UPLINK_FAILED';
        toast.error(`// ${errorMessage.toUpperCase()} //`);
      }
    } catch (error) {
      toast.error('// CONNECTION_TERMINATED_ABRUPTLY //');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-6xl font-black uppercase tracking-tighter text-white mb-4">
                Let&apos;s <br/> <span className="text-cyan-500">Connect.</span>
              </h2>
              <div className="w-16 h-1 bg-violet-500"></div>
            </div>

            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm">
              &gt; ESTABLISHING UPLINK... <br/>
              &gt; I AM ALWAYS OPEN TO DISCUSSING NEW PROJECTS, CREATIVE IDEAS OR OPPORTUNITIES TO BE PART OF YOUR VISIONS.
            </p>

            <div className="flex gap-6">
              {[
                { icon: <FaGithub />, link: 'https://github.com/Jagruti345', color: 'text-white' },
                { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/jagruti-patil-ba3ba12aa', color: 'text-blue-400' },
                { icon: <FaEnvelope />, link: 'mailto:patiljagruti658@gmail.com', color: 'text-cyan-400' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  className={`w-14 h-14 glass-panel flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-10 md:p-12 border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8 font-mono">
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold">Input::User</label>
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold">Input::Return_Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-bold">Input::Data_Payload</label>
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  required
                  className="w-full bg-white/5 border-b border-white/10 p-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-all resize-none placeholder:text-gray-700"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-violet-600 text-black font-black uppercase text-xs tracking-[0.4em] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all flex items-center justify-center gap-3"
              >
                {isLoading ? <FaSpinner className="animate-spin text-xl" /> : 'Transmit_Packet'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
