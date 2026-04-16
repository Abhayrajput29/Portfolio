import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function AppleIntelligenceRipple() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Fire precisely as the Preloader slides away (starts moving at 2000ms+400ms delay)
    // We trigger exactly at 2200ms so it explodes as the curtain is halfway up.
    const timer = setTimeout(() => setShow(true), 2200);
    const hideTimer = setTimeout(() => setShow(false), 6000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="apple-ripple-container"
          className="pointer-events-none fixed inset-0 z-[9990] flex items-center justify-center overflow-hidden"
        >
          {/* Base intense glow that flashes instantly */}
          <motion.div
            className="absolute rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 3] }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
               width: '80vw',
               height: '80vw',
               background: 'radial-gradient(circle, rgba(42,138,246,0.8) 0%, rgba(168,83,186,0.6) 40%, rgba(233,42,103,0) 70%)',
               filter: 'blur(60px)'
            }}
          />

          {/* Core expanding sharp energy ring */}
          <motion.div
            className="absolute rounded-full border border-transparent"
            initial={{ opacity: 0, scale: 0, borderWidth: '80px' }}
            animate={{ opacity: [0, 1, 0], scale: [0.2, 2.5], borderWidth: ['80px', '2px'] }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
            style={{
              width: '120vw',
              height: '120vw',
              borderColor: '#B243FF',
              boxShadow: '0 0 100px 60px rgba(0, 122, 255, 0.6), inset 0 0 100px 60px rgba(255, 87, 34, 0.4)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppleIntelligenceRipple;
