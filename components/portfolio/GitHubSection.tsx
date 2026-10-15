'use client';

import { useState, useEffect } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { formatDate, getLanguageColor } from '@/lib/github';
import { GitHubRepo } from '@/types';

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  const sortedLanguages = Object.entries(languages).sort((a, b) => b[1] - a[1]);

  const stats = [
    { label: 'Public repos', value: repos.length },
    { label: 'Total stars', value: totalStars },
    { label: 'Total forks', value: totalForks },
    { label: 'Languages', value: sortedLanguages.length },
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github/repos');
        if (!response.ok) {
          throw new Error(`GitHub API request failed: ${response.status}`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        number="03"
        label="GitHub"
        title="GitHub activity"
        description="My open-source contributions and recent repository activity."
      />

      {error && (
        <p className="mb-12 text-sm text-muted">
          Couldn&apos;t load live GitHub data right now.{' '}
          <a
            href="https://github.com/amirjimdaniels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-accent underline-offset-4"
          >
            View the profile directly on GitHub
          </a>
          .
        </p>
      )}

      {!error && (
        <>
          {/* Stats */}
          <dl className="grid grid-cols-2 gap-y-10 border-y border-rule py-8 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-rule md:py-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-4 md:px-6 md:py-8 md:first:pl-0"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</dt>
                <dd className="mt-2 font-serif text-5xl leading-none">{isLoading ? '—' : stat.value}</dd>
              </div>
            ))}
          </dl>

          {/* Language distribution */}
          <div className="mt-12">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Language distribution</h3>
            <div className="flex h-2 overflow-hidden bg-rule">
              {sortedLanguages.map(([lang, count]) => (
                <div
                  key={lang}
                  style={{
                    width: `${(count / repos.length) * 100}%`,
                    backgroundColor: getLanguageColor(lang),
                  }}
                  title={`${lang}: ${count} repos`}
                />
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
              {sortedLanguages.map(([lang]) => (
                <div key={lang} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5" style={{ backgroundColor: getLanguageColor(lang) }} />
                  <span className="text-muted">{lang}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent repos */}
          <h3 className="mb-4 mt-20 font-mono text-xs uppercase tracking-widest text-muted">Recent repositories</h3>

          {isLoading ? (
            <div className="divide-y divide-rule border-t border-rule">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse py-6">
                  <div className="mb-3 h-5 w-1/3 bg-paper-deep" />
                  <div className="h-4 w-2/3 bg-paper-deep" />
                </div>
              ))}
            </div>
          ) : (
            <ul className="divide-y divide-rule border-t border-rule">
              {repos.map((repo) => (
                <li key={repo.id} className="group grid gap-3 py-6 md:grid-cols-[1fr_auto] md:gap-8">
                  <div>
                    <h4 className="text-lg font-medium">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent"
                      >
                        {repo.name}
                      </a>
                    </h4>
                    <p className="mt-1 text-sm text-muted">
                      {repo.description || 'No description provided'}
                    </p>
                    {repo.topics.length > 0 && (
                      <p className="mt-2 font-mono text-xs text-ink/60">
                        {repo.topics.slice(0, 3).join(' · ')}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-5 font-mono text-xs text-muted md:flex-col md:items-end md:gap-1">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5" style={{ backgroundColor: getLanguageColor(repo.language) }} />
                        {repo.language}
                      </span>
                    )}
                    <span>★ {repo.stargazers_count}</span>
                    <span>{repo.forks_count} forks</span>
                    <span>{formatDate(repo.pushed_at)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <div className="mt-12">
        <a
          href="https://github.com/amirjimdaniels"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent"
        >
          View all repositories on GitHub ↗
        </a>
      </div>
    </section>
  );
}
