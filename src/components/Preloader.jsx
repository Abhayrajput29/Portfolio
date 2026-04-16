import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../assets/data.js';

function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar while loading to prevent scrolling before the site is ready
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Restore scrolling after animation completes
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000); 
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ 
            y: '-100vh', 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 } 
          }}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-zinc-950 text-white"
        >
          <div className="flex flex-col items-center">
            {/* Masking container for text reveal */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl font-black uppercase tracking-[0.2em] text-white sm:text-5xl md:text-7xl"
              >
                {Object.keys(profile).length ? profile.name : "Portfolio"}
              </motion.h1>
            </div>
            
            <div className="overflow-hidden flex items-center gap-3">
               <motion.span
                 initial={{ y: '100%', opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
                 className="block text-sm font-bold tracking-widest text-mint uppercase"
               >
                 Loading
               </motion.span>
               <div className="flex gap-1 mt-0.5">
                  <motion.div 
                    initial={{ y: '200%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="h-1.5 w-1.5 rounded-full bg-mint"
                  />
                  <motion.div 
                    initial={{ y: '200%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="h-1.5 w-1.5 rounded-full bg-mint"
                  />
                  <motion.div 
                    initial={{ y: '200%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="h-1.5 w-1.5 rounded-full bg-mint"
                  />
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
