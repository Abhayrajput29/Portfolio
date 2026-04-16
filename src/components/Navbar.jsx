import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../assets/data.js';
import ThemeToggle from './ThemeToggle.jsx';
import Magnetic from './Magnetic.jsx';

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition ${
        scrolled
          ? 'border-b border-zinc-300/60 bg-white/80 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-ink/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Magnetic>
          <a
            href="#home"
            className={`text-lg font-black transition-colors ${scrolled ? 'text-zinc-950 dark:text-white' : 'text-zinc-900 dark:text-white'}`}
            onClick={handleNav}
          >
            Abhay<span className="text-mint">.</span>
          </a>
        </Magnetic>

        <div 
          className="hidden items-center md:flex"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center gap-1 mr-6">
            <AnimatePresence>
              {navLinks.map((link, index) => (
                <Magnetic key={link.href}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                      hoveredIndex === index
                        ? 'text-teal-700 dark:text-mint'
                        : scrolled
                          ? 'text-zinc-700 dark:text-zinc-200'
                          : 'text-zinc-700 dark:text-zinc-200'
                    }`}
                  >
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-teal-500/10 dark:bg-white/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                </Magnetic>
              ))}
            </AnimatePresence>
          </div>
          <Magnetic>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </Magnetic>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-md border border-zinc-300/60 bg-white/70 text-zinc-950 dark:border-white/15 dark:bg-white/10 dark:text-white"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-300/60 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 md:hidden"
          >
            <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNav}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-teal-500/10 hover:text-teal-600 dark:text-zinc-100 dark:hover:bg-white/10 dark:hover:text-mint"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
