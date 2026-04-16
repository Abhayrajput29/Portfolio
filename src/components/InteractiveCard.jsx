import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

function InteractiveCard({ children, className = '', as = 'div', delay = 0 }) {
  const Component = motion[as] || motion.div;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 24 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Normalized coordinates for rotational depth (tilt)
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    
    // Absolute pixel coordinates for the hover spotlight
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <Component
      className={`depth-card group ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, type: 'spring', stiffness: 220, damping: 24 }}
    >
      {/* Real-time Dynamic Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 191, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-overlay dark:mix-blend-color-dodge"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      {/* Glare Sheen mimicking physical glass */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-20 rounded-lg opacity-0 transition duration-300 group-hover:opacity-50 mix-blend-overlay"
        style={{
          background: useMotionTemplate`
            linear-gradient(
              105deg,
              transparent 20%,
              rgba(255, 255, 255, 0.4) ${useTransform(pointerX, [-0.5, 0.5], [-20, 120])}%,
              transparent 80%
            )
          `
        }}
      />
      <div className="relative z-10" style={{ transform: 'translateZ(25px)' }}>
        {children}
      </div>
    </Component>
  );
}

export default InteractiveCard;
