import { Octokit } from 'octokit';
import { GitHubRepo, GitHubStats } from '@/types';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const { data } = await octokit.rest.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 100,
      type: 'owner',
    });
    
    return data as GitHubRepo[];
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
}

export async function getRepo(owner: string, repo: string): Promise<GitHubRepo | null> {
  try {
    const { data } = await octokit.rest.repos.get({
      owner,
      repo,
    });
    
    return data as GitHubRepo;
  } catch (error) {
    console.error('Error fetching repo:', error);
    return null;
  }
}

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  const repos = await getRepos(username);
  
  const stats: GitHubStats = {
    totalStars: 0,
    totalForks: 0,
    totalRepos: repos.length,
    languages: {},
    lastUpdated: new Date().toISOString(),
  };

  repos.forEach((repo) => {
    stats.totalStars += repo.stargazers_count;
    stats.totalForks += repo.forks_count;
    
    if (repo.language) {
      stats.languages[repo.language] = (stats.languages[repo.language] || 0) + 1;
    }
  });

  return stats;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Rust: '#dea584',
    Go: '#00ADD8',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB',
    Vue: '#41b883',
    CSS: '#563d7c',
    HTML: '#e34c26',
    Shell: '#89e051',
  };

  return colors[language] || '#6e7681';
}
