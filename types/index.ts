export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  default_branch: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  featured: boolean;
  dockerConfig?: DockerConfig;
  githubRepo?: GitHubRepo;
}

export interface DockerConfig {
  image: string;
  port: number;
  env?: Record<string, string>;
  command?: string;
}

export interface ContainerInstance {
  id: string;
  projectId: string;
  status: 'starting' | 'running' | 'stopping' | 'stopped' | 'error';
  url?: string;
  port?: number;
  createdAt: Date;
  error?: string;
}

export interface GitHubStats {
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  languages: Record<string, number>;
  lastUpdated: string;
}
