'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING_KERNEL...');

  const logs = [
    'MOUNTING_DEVICES...',
    'CONNECTING_TO_UPLINK...',
    'DECRYPTING_PORTFOLIO_V2.0...',
    'ESTABLISHING_SECURE_SHELL...',
    'ACCESS_GRANTED.',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const logTimer = setInterval(() => {
      setStatus(logs[Math.floor(Math.random() * logs.length)]);
    }, 600);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono p-6"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-4">
          <motion.div 
            className="w-16 h-16 border-2 border-cyan-500 rounded-none flex items-center justify-center relative"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          >
            <div className="absolute inset-0 border-2 border-violet-500 rotate-45"></div>
            <span className="text-white text-xs font-bold font-mono tracking-tighter">JS</span>
          </motion.div>
          <motion.h2 
            className="text-white text-xl font-black uppercase tracking-[0.4em] text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Jagruti.sys
          </motion.h2>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] text-cyan-500 uppercase tracking-widest mb-1">
            <span>{status}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-[2px] bg-white/5 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="grid grid-cols-10 gap-1 mt-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-colors duration-300 ${progress > (i * 10) ? 'bg-cyan-500/50' : 'bg-white/5'}`}
              ></div>
            ))}
          </div>
        </div>

        <div className="text-[8px] text-gray-700 font-mono text-center uppercase tracking-widest mt-12">
          Secure_Node_Connection_Established // Version_15.5.x
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
