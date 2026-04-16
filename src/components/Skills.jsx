import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '../assets/data.js';
import InteractiveCard from './InteractiveCard.jsx';
import Section from './Section.jsx';

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={skill.url}
      target="_blank"
      rel="noreferrer"
      className="relative block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <InteractiveCard
        className="glass-panel flex min-h-32 flex-col items-center justify-center gap-3 p-5 text-center transition-colors group-hover:border-mint/50 dark:group-hover:border-mint/50"
        delay={index * 0.02}
      >
        <motion.span
          className="icon-tile icon-tile--large"
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.45 }}
        >
          <Icon className={`text-3xl ${skill.color}`} />
        </motion.span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{skill.name}</span>
      </InteractiveCard>

      {/* Floating Website Preview Rendered Above the Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, pointerEvents: 'none' }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute -top-[170px] left-1/2 z-50 flex w-[260px] -translate-x-1/2 flex-col rounded-xl border border-zinc-200/80 bg-white/95 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-zinc-900/95 pointer-events-none"
          >
            {/* Realtime Thumbnail Frame */}
            <div className="relative h-[130px] w-full overflow-hidden rounded-t-xl bg-zinc-100 dark:bg-black">
              <img 
                src={skill.image}
                alt={`${skill.name} representation`}
                className="h-full w-full object-cover object-center"
                loading="lazy"
                onError={(e) => { e.target.style.opacity = 0; }}
              />
              {/* Fade gradient to blend exactly smoothly into the text area below */}
              <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent dark:from-zinc-900" />
            </div>
            
            <div className="px-4 py-3 text-center border-t border-zinc-100 dark:border-white/5 relative z-10 bg-white dark:bg-zinc-900 rounded-b-xl">
              <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">
                {new URL(skill.url).hostname.replace('www.', '')}
              </p>
              <p className="text-[11px] text-zinc-500 font-medium tracking-wide mt-0.5">Click to view documentation</p>
            </div>
            
            {/* Downward pointing tooltip arrow */}
            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-zinc-200/80 bg-white dark:border-white/10 dark:bg-zinc-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Skills I am using and improving through projects.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 relative z-10 pb-8 pt-4">
        {skills.map((skill, index) => (
          <SkillCard skill={skill} index={index} key={skill.name} />
        ))}
      </div>
    </Section>
  );
}

export default Skills;
