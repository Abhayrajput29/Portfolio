import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { certifications, education } from '../assets/data.js';
import InteractiveCard from './InteractiveCard.jsx';
import Section from './Section.jsx';

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background and continuous learning.">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-4 top-14 w-0.5 bg-zinc-200 dark:bg-white/10 hidden sm:block" />
          
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-zinc-950 dark:text-white relative z-10 pl-0 sm:pl-10">
            <FiBookOpen className="text-teal-600 dark:text-mint" />
            Education Timeline
          </h3>
          
          <div className="space-y-6 relative z-10 pl-0 sm:pl-10">
            {education.map((item, index) => (
              <InteractiveCard
                key={item.degree}
                as="article"
                className="glass-panel relative p-6"
                delay={index * 0.05}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute -left-7 top-7 h-3 w-3 rounded-full bg-teal-500 ring-4 ring-white dark:bg-mint dark:ring-ink hidden sm:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                />
                
                <div className="flex flex-col justify-between gap-y-2 sm:flex-row sm:items-center">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{item.degree}</h4>
                  <span className="inline-block rounded-md bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-mint/10 dark:text-mint sm:self-start">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">{item.institution}</p>
                <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Score: <span className="text-teal-600 dark:text-mint">{item.score}</span>
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-zinc-950 dark:text-white">
            <FiAward className="text-teal-600 dark:text-mint" />
            Certifications
          </h3>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <InteractiveCard
                key={cert}
                as="article"
                className="glass-panel flex items-start gap-4 p-5"
                delay={index * 0.05}
              >
                <motion.span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-700 dark:bg-mint/20 dark:text-mint"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FiAward className="text-sm" />
                </motion.span>
                <p className="text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {cert}
                </p>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Education;
