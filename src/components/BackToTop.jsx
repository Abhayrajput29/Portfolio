import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-md border border-zinc-300 bg-white text-zinc-950 shadow-lg transition dark:border-white/10 dark:bg-coal dark:text-white ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <FiArrowUp />
    </a>
  );
}

export default BackToTop;
