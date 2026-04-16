import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from '../assets/data.js';

const socials = [
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FiLinkedin },
];

function Footer() {
  return (
    <footer className="border-t border-zinc-300/70 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
        <p>(c) {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.</p>
        <div className="flex gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-zinc-300/70 text-zinc-700 transition hover:-translate-y-1 hover:border-mint hover:text-teal-600 dark:border-white/10 dark:text-zinc-200 dark:hover:text-mint"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
