import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  return <motion.div className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-mint" style={{ scaleX }} />;
}

export default ScrollProgress;
