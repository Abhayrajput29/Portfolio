import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`flex h-8 w-[60px] items-center rounded-full border p-1 transition-colors duration-500 ${
        isDark ? 'border-white/10 bg-zinc-800' : 'border-zinc-300 bg-zinc-200'
      }`}
      style={{ justifyContent: isDark ? 'flex-end' : 'flex-start' }}
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          bounce: 0.5,
          duration: 0.6
        }}
        className={`flex h-6 w-6 items-center justify-center rounded-full shadow-md ${
          isDark ? 'bg-zinc-950 text-mint shadow-mint/20' : 'bg-white text-amber-500'
        }`}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
