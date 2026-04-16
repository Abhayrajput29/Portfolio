import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config to match iOS snappy bouncy feel smoothly and perfectly
  // We use ultra precise dampening to remove jiggle/latency flaws
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  
  const width = useMotionValue(20);
  const height = useMotionValue(20);
  const radius = useMotionValue(10); // 10px makes default 20x20 a circle
  
  const wSpring = useSpring(width, springConfig);
  const hSpring = useSpring(height, springConfig);
  const rSpring = useSpring(radius, springConfig);

  // High performance state caching to avoid React renders and DOM reflow thrills
  const stateRef = useRef({
    hoveredEl: null,
    rect: null,
    mouseX: -100,
    mouseY: -100,
  });

  useEffect(() => {
    // Highly optimized internal cursor updater
    const updateCursorPosition = () => {
      const state = stateRef.current;
      if (state.hoveredEl && state.rect) {
        // Calculate dynamic shift (magnetic parallax) WITHOUT mutating the component itself
        // (Removing the direct style override flaw means users hover animations aren't broken)
        const centerX = state.rect.left + state.rect.width / 2;
        const centerY = state.rect.top + state.rect.height / 2;
        const shiftX = (state.mouseX - centerX) * 0.1; 
        const shiftY = (state.mouseY - centerY) * 0.1;
        
        cursorX.set(state.rect.left + shiftX);
        cursorY.set(state.rect.top + shiftY);
      } else {
        // Standalone dot
        cursorX.set(state.mouseX - 10);
        cursorY.set(state.mouseY - 10);
      }
    };

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      stateRef.current.mouseX = e.clientX;
      stateRef.current.mouseY = e.clientY;
      updateCursorPosition();
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest('a, button, input, .interactive');
      const state = stateRef.current;
      
      // Strict cache check prevents layout thrashing re-calculations
      if (interactive) {
        if (state.hoveredEl !== interactive) {
          state.hoveredEl = interactive;
          const rect = interactive.getBoundingClientRect();
          state.rect = rect;
          
          let br = parseFloat(window.getComputedStyle(interactive).borderRadius);
          // Safe fallback for null/inherit border radii
          br = (isNaN(br) || br === 0) ? 8 : br;
          
          width.set(rect.width);
          height.set(rect.height);
          radius.set(br);
        }
      } else {
        if (state.hoveredEl !== null) {
          state.hoveredEl = null;
          state.rect = null;
          width.set(20);
          height.set(20);
          radius.set(10);
        }
      }
      updateCursorPosition();
    };

    // Keep highlighted items perfectly mapped on window scroll events
    const handleScroll = () => {
      const state = stateRef.current;
      if (state.hoveredEl) {
          state.rect = state.hoveredEl.getBoundingClientRect();
          width.set(state.rect.width);
          height.set(state.rect.height);
      }
      updateCursorPosition();
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, height, isVisible, radius, width]);

  return (
    <>
      <style>{`
        /* Hide all default cursors globally for a seamless custom pointer experience */
        @media (min-width: 768px) {
          *, body, a, button, input {
            cursor: none !important;
          }
        }
      `}</style>
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block mix-blend-difference bg-white/95"
        style={{
          x,
          y,
          width: wSpring,
          height: hSpring,
          borderRadius: rSpring,
          opacity: isVisible ? 1 : 0,
          /* Hardware accelerate rendering to stop any jitters */
          willChange: "transform, width, height, border-radius",
        }}
        initial={false}
      />
    </>
  );
};

export default CustomCursor;
