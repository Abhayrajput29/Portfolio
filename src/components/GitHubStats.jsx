import { useEffect, useState } from 'react';
import { FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';
import { profile } from '../assets/data.js';
import InteractiveCard from './InteractiveCard.jsx';
import Section from './Section.jsx';

const username = import.meta.env.VITE_GITHUB_USERNAME || 'Abhayrajput29';

function GitHubStats() {
  const [stats, setStats] = useState({ loading: true, repos: 0, followers: 0, publicGists: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadStats() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('GitHub profile unavailable');
        }

        const data = await response.json();
        if (!ignore) {
          setStats({
            loading: false,
            repos: data.public_repos ?? 0,
            followers: data.followers ?? 0,
            publicGists: data.public_gists ?? 0,
          });
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
          setStats((value) => ({ ...value, loading: false }));
        }
      }
    }

    loadStats();
    return () => {
      ignore = true;
    };
  }, []);

  const items = [
    { label: 'Public repos', value: stats.repos, icon: FiGithub },
    { label: 'Followers', value: stats.followers, icon: FiStar },
    { label: 'Public gists', value: stats.publicGists, icon: FiGitBranch },
  ];

  return (
    <Section id="github" eyebrow="GitHub" title="Open-source footprint and developer activity.">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <InteractiveCard key={item.label} className="glass-panel p-5">
              <span className="icon-tile mb-4">
                <Icon className="text-2xl text-mint" />
              </span>
              <p className="text-3xl font-black text-zinc-950 dark:text-white">
                {stats.loading ? '...' : item.value.toLocaleString()}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">{item.label}</p>
            </InteractiveCard>
          );
        })}
      </div>
      <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
        {error || (
          <>
            Showing public GitHub data for {username}. View profile on{' '}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal-600 underline-offset-4 hover:underline dark:text-mint"
            >
              GitHub
            </a>
            .
          </>
        )}
      </p>
    </Section>
  );
}

export default GitHubStats;
