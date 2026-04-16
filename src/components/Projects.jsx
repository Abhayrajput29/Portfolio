import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../assets/data.js';
import InteractiveCard from './InteractiveCard.jsx';
import Section from './Section.jsx';

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with sharp interfaces and real product flow.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const ProjectIcon = project.icon;

          return (
            <InteractiveCard
              key={project.title}
              as="article"
              className="glass-panel group overflow-hidden"
              delay={index * 0.05}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <motion.span
                    className="icon-tile"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <ProjectIcon />
                  </motion.span>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{project.title}</h3>
                </div>
                <p className="mt-3 min-h-24 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:bg-mint/10 dark:text-mint"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  {project.github === '#' ? (
                    <span className="btn-small cursor-not-allowed opacity-60">
                      <FiGithub />
                      Repo soon
                    </span>
                  ) : (
                    <a href={project.github} className="btn-small" target="_blank" rel="noreferrer">
                      <FiGithub />
                      GitHub
                    </a>
                  )}
                  {project.demo === '#' ? (
                    <span className="btn-small cursor-not-allowed opacity-60">
                      <FiExternalLink />
                      Demo soon
                    </span>
                  ) : (
                    <a href={project.demo} className="btn-small" target="_blank" rel="noreferrer">
                      <FiExternalLink />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </InteractiveCard>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
