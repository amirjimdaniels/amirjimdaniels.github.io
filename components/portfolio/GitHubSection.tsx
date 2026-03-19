'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { formatDate, getLanguageColor } from '@/lib/github';
import { GitHubRepo } from '@/types';


export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);
  const languages = repos.reduce((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('/api/github/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-20 px-4 bg-dark-900/50">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">GitHub Activity</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My open-source contributions and recent repository activity
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-primary-400">
              {isLoading ? '—' : repos.length}
            </div>
            <div className="text-gray-400 text-sm mt-1">Public Repos</div>
          </Card>
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-yellow-400">
              {isLoading ? '—' : totalStars}
            </div>
            <div className="text-gray-400 text-sm mt-1">Total Stars</div>
          </Card>
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-green-400">
              {isLoading ? '—' : totalForks}
            </div>
            <div className="text-gray-400 text-sm mt-1">Total Forks</div>
          </Card>
          <Card className="p-6 text-center" hover={false}>
            <div className="text-3xl font-bold text-purple-400">
              {isLoading ? '—' : Object.keys(languages).length}
            </div>
            <div className="text-gray-400 text-sm mt-1">Languages</div>
          </Card>
        </motion.div>

        {/* Language Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Language Distribution</h3>
          <div className="flex h-4 rounded-full overflow-hidden">
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .map(([lang, count]) => {
                const percentage = (count / repos.length) * 100;
                return (
                  <div
                    key={lang}
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: getLanguageColor(lang),
                    }}
                    title={`${lang}: ${count} repos`}
                  />
                );
              })}
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .map(([lang]) => (
                <div key={lang} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getLanguageColor(lang) }}
                  />
                  <span className="text-sm text-gray-400">{lang}</span>
                </div>
              ))}
          </div>
        </motion.div>

        {/* Recent Repos */}
        <h3 className="text-xl font-semibold text-white mb-6">Recent Repositories</h3>
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="h-5 bg-gray-700 rounded w-1/2 mb-3" />
                <div className="h-4 bg-gray-700 rounded w-full mb-2" />
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4" />
                <div className="h-3 bg-gray-700 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white hover:text-primary-400 transition-colors">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h4>
                  <span className="text-xs text-gray-500">
                    {formatDate(repo.pushed_at)}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {repo.description || 'No description provided'}
                </p>

                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 text-xs bg-primary-500/20 text-primary-400 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="text-gray-400">{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                      </svg>
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 5a2 2 0 11-4 0 2 2 0 014 0zm7 14a2 2 0 11-4 0 2 2 0 014 0zm7-7a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path d="M5 7v7a3 3 0 003 3h4m5-10v7a3 3 0 01-3 3h-4" strokeWidth="2" stroke="currentColor" fill="none" />
                      </svg>
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/amirjimdaniels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            View all repositories on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
