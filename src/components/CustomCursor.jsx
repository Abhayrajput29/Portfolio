import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Use framer-motion values instead of React state to prevent re-renders on mousemove
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring physics to the outer circle's position
  const springConfig = { damping: 28, stiffness: 500, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if the element being hovered over is interactive
      const isInteractive =
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null ||
        e.target.closest('.interactive') !== null;

      setIsHovered(isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'transparent',
      border: '2px solid rgba(45, 212, 191, 0.8)', // teal-400 equivalent
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      height: 64,
      width: 64,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(45, 212, 191, 0.15)',
      border: '1px solid rgba(45, 212, 191, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const dotVariants = {
    default: {
      x: '-50%',
      y: '-50%',
      opacity: 1,
    },
    hover: {
      x: '-50%',
      y: '-50%',
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="rounded-full backdrop-invert mix-blend-difference"
          variants={variants}
          animate={isHovered ? 'hover' : 'default'}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-teal-400 mix-blend-difference"
          variants={dotVariants}
          animate={isHovered ? 'hover' : 'default'}
          transition={{ type: 'tween', ease: 'backOut', duration: 0 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
