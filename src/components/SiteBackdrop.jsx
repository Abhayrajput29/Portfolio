import { motion } from 'framer-motion';

function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <motion.div
        className="site-backdrop__track site-backdrop__track--one"
        animate={{ x: ['-8%', '8%', '-8%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="site-backdrop__track site-backdrop__track--two"
        animate={{ x: ['8%', '-8%', '8%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default SiteBackdrop;
