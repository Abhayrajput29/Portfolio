import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

const paths = [
  // Framer Motion Logo shape
  {
    d: "M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z",
    viewBox: "0 0 100 100",
    width: 100,
  },
  // Star shape
  {
    d: "M 50,0 L 61,35 L 98,35 L 68,57 L 79,91 L 50,70 L 21,91 L 32,57 L 2,35 L 39,35 Z",
    viewBox: "0 0 100 100",
    width: 80,
  },
  // Hexagon
  {
    d: "M 50,5 L 90,27 L 90,72 L 50,95 L 10,72 L 10,27 Z",
    viewBox: "0 0 100 100",
    width: 90,
  },
  // Curvy squiggle
  {
    d: "M 10,50 Q 25,10 50,50 T 90,50",
    viewBox: "0 0 100 100",
    width: 120,
  }
];

const RandomPathDrawing = memo(function RandomPathDrawing() {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    // Generate some random paths that match the motion.dev example drawing effect
    const count = 6;
    const newDecorations = Array.from({ length: count }).map(() => {
      const pathTemplate = paths[Math.floor(Math.random() * paths.length)];
      
      // Calculate random absolute coordinates
      // We want to sprinkle these randomly across the entire vertical scroll height using percentages
      const x = Math.max(0, Math.random() * 90); // 0 to 90%
      const y = Math.max(0, Math.random() * 90); // 0 to 90%
      
      return {
        ...pathTemplate,
        id: Math.random().toString(36).substr(2, 9),
        x: `${x}%`,
        y: `${y}%`,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2
      };
    });

    setDecorations(newDecorations);
  }, []);

  if (decorations.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {decorations.map((dec) => (
        <motion.div
          key={dec.id}
          className="absolute text-mint dark:text-emerald-400 opacity-20 dark:opacity-30 mix-blend-overlay"
          style={{ top: dec.y, left: dec.x, width: dec.width }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: dec.delay }}
        >
          <svg 
            width={dec.width}
            viewBox={dec.viewBox}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d={dec.d}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: dec.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse", // animate in, animate out
                repeatDelay: 1,
                delay: dec.delay,
              }}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
});

export default RandomPathDrawing;
