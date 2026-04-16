import { motion } from 'framer-motion';
import { profile, skillGroups } from '../assets/data.js';
import InteractiveCard from './InteractiveCard.jsx';
import Section from './Section.jsx';

function About() {
  return (
    <Section id="about" eyebrow="About" title="Technical qualities shaped by real project execution.">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-5 text-zinc-700 dark:text-zinc-300">
          <p className="text-lg leading-8">{profile.summary}</p>
          <ul className="space-y-3">
            {profile.technicalQualities.map((quality) => (
              <li key={quality} className="flex items-start gap-3 leading-8">
                <span className="mt-3 h-2 w-2 rounded-sm bg-mint" />
                <span>{quality}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold text-zinc-950 dark:text-white">Core strengths</h3>
          <div className="grid gap-4">
            {skillGroups.map((group, index) => (
              <InteractiveCard key={group.title} as="article" className="glass-panel p-5" delay={index * 0.04}>
                <div className="flex items-center gap-3">
                  <motion.span
                    className="h-2 w-2 rounded-sm bg-mint"
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <h4 className="text-sm font-bold uppercase text-teal-700 dark:text-mint">{group.title}</h4>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-300/70 px-3 py-1 text-xs font-semibold text-zinc-800 dark:border-white/10 dark:text-zinc-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
