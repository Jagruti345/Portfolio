'use client';

import React, { useState } from 'react';
import { Toaster } from "sonner";
import CustomCursor from "./CustomCursor";
import LoadingScreen from "./LoadingScreen";
import { AnimatePresence } from "framer-motion";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          {/* Modern Background Mesh */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-violet-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
          <Toaster position="bottom-right" toastOptions={{
            style: {
              background: 'rgba(0,0,0,0.8)',
              color: '#22d3ee',
              border: '1px solid rgba(34,211,238,0.2)',
              backdropFilter: 'blur(10px)',
              fontFamily: 'var(--font-space-mono)',
              borderRadius: '0',
            }
          }} />
        </>
      )}
    </AnimatePresence>
  );
}
