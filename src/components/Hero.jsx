import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaJava, FaPython } from 'react-icons/fa';
import { SiPostgresql, SiReact, SiSpringboot } from 'react-icons/si';
import { heroWords, profile } from '../assets/data.js';
import { useTypingEffect } from '../hooks/useTypingEffect.js';
import InteractiveCard from './InteractiveCard.jsx';
import Magnetic from './Magnetic.jsx';

const heroStack = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Python', icon: FaPython },
  { name: 'React.js', icon: SiReact },
  { name: 'PostgreSQL', icon: SiPostgresql },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  },
};

function Hero() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const typedText = useTypingEffect(heroWords);

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-20 sm:pt-24 transition-colors duration-300 text-zinc-950 dark:text-white"
    >
      {/* Dynamic Animated Underlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-400/40 dark:bg-teal-500/15 blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[20%] right-[0%] w-[40%] h-[40%] rounded-full bg-rose-400/30 dark:bg-rose-500/10 blur-[100px]"
          animate={{
            x: [0, -60, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-[10%] left-[30%] w-[40%] h-[40%] rounded-full bg-amber-400/30 dark:bg-amber-500/10 blur-[120px]"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Fade out gradient separating from the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-50 dark:from-ink to-transparent z-0" />
      
      <motion.div
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-4 items-center justify-start max-w-full">
            <motion.img 
              layoutId="img-1"
              src="/me.jpg" 
              alt={profile.name} 
              className="cursor-zoom-in w-32 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover border-[3px] border-teal-500/30 dark:border-mint/50 shadow-2xl" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={() => setZoomedImage({ id: 'img-1', src: '/me.jpg', border: 'border-teal-500/30 dark:border-mint/50' })}
            />
            <motion.img 
              layoutId="img-2"
              src="/me2.jpg" 
              alt={profile.name} 
              className="cursor-zoom-in w-32 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover border-[3px] border-amber-500/30 dark:border-amber-500/50 shadow-2xl" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={() => setZoomedImage({ id: 'img-2', src: '/me2.jpg', border: 'border-amber-500/30 dark:border-amber-500/50' })}
            />
            <motion.img
              layoutId="img-3"
              src="/cat.png" 
              alt="Cat" 
              className="cursor-zoom-in w-20 h-36 sm:w-24 sm:h-44 rounded-3xl object-cover border-[3px] border-rose-500/30 dark:border-rose-500/50 shadow-2xl" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={() => setZoomedImage({ id: 'img-3', src: '/cat.png', border: 'border-rose-500/30 dark:border-rose-500/50' })}
            />
          </motion.div>
          <motion.p variants={itemVariants} className="mb-5 inline-flex rounded-full border border-teal-500/30 bg-teal-500/5 dark:border-white/20 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-teal-700 dark:text-mint backdrop-blur">
            Building production-grade projects while pursuing CSE (2023-2027)
          </motion.p>
          <motion.h1 variants={itemVariants} className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Hi, I am {profile.name}.
            <span className="block text-zinc-600 dark:text-zinc-200">{profile.role}.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 min-h-8 max-w-3xl text-xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-2xl">
            I build <span className="text-teal-600 dark:text-mint">{typedText}</span>
            <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 animate-pulse bg-teal-600 dark:bg-mint" />
          </motion.p>
          <motion.p variants={itemVariants} className="mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">{profile.summary}</motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Magnetic>
              <a href="#projects" className="btn-primary group w-full sm:w-auto">
                View Projects
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary text-zinc-900 border-zinc-400 dark:border-white/30 dark:text-white w-full sm:w-auto">
                Contact
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-5 flex flex-wrap gap-3">
            <Magnetic>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-small inline-flex">
                <FiGithub />
                GitHub
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-small inline-flex">
                <FiLinkedin />
                LinkedIn
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="hidden lg:block relative">
          {/* Subtle slow floating motion for the whole side module */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <InteractiveCard className="glass-panel p-5 text-left shadow-[0_0_50px_-12px_rgba(45,212,191,0.25)] relative overflow-hidden backdrop-blur-2xl">
              <p className="text-sm font-bold uppercase text-teal-600 dark:text-mint">Current stack</p>
              <div className="mt-5 grid gap-3">
                {heroStack.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-4 rounded-md border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-3 shadow-sm hover:shadow-md transition-shadow cursor-default group"
                      animate={{ x: [0, index % 2 === 0 ? 10 : -10, 0] }}
                      transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <motion.span 
                        className="flex h-10 w-10 shrink-0 place-items-center justify-center rounded bg-teal-500/10 text-xl text-teal-600 dark:text-mint group-hover:scale-110 transition-transform"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20 + index * 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon />
                      </motion.span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-100">{item.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </InteractiveCard>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1, type: "spring", stiffness: 200 }}
      >
        <div className="flex h-12 w-[30px] justify-center rounded-full border-2 border-zinc-400/50 dark:border-white/20 p-1.5 backdrop-blur-sm">
          <motion.div 
            className="h-2 w-2 rounded-full bg-teal-600 dark:bg-mint"
            animate={{
              y: [0, 18, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Zoom Popup Overlay */}
      <AnimatePresence>
        {zoomedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setZoomedImage(null)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md cursor-zoom-out"
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4">
              <motion.img
                layoutId={zoomedImage.id}
                src={zoomedImage.src} 
                alt="Zoomed" 
                className={`pointer-events-auto cursor-zoom-out w-auto h-auto max-w-[90vw] max-h-[85vh] rounded-[2rem] object-cover border-4 ${zoomedImage.border} shadow-2xl`} 
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={() => setZoomedImage(null)}
              />
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
