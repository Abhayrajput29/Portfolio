import { motion } from 'framer-motion';

const fadeUpContainer = {
  hidden: { opacity: 0, y: 28 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.55, 
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  },
};

const titleVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02 } },
};

const charVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } },
};

function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`section-space ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-3">
                <motion.span
                  className="h-px w-10 bg-mint origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.p 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm font-bold uppercase tracking-wider text-mint"
                >
                  {eyebrow}
                </motion.p>
              </div>
            )}
            {title && (
              <motion.h2 
                className="text-3xl font-bold text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl flex flex-wrap gap-x-[0.25em]"
                variants={titleVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {title.split(' ').map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-flex overflow-hidden">
                    {word.split('').map((char, charIdx) => (
                      <motion.span key={charIdx} variants={charVariants} className="inline-block py-1">
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h2>
            )}
          </div>
        )}
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Section;
