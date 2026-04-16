import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="grid h-10 w-10 place-items-center rounded-md border border-zinc-300/60 bg-white/70 text-zinc-900 transition hover:-translate-y-0.5 hover:border-mint hover:text-teal-600 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:text-mint"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
