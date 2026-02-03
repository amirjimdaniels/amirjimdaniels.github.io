'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Project, ContainerInstance } from '@/types';

// Your actual projects with Docker configurations
const demoProjects: Project[] = [
  {
    id: 'demo-1',
    name: 'RAG Demo',
    description: 'A Python project showcasing the difference in hallucinations after implementing retrieval augmented generation.',
    technologies: ['Python', 'RAG', 'LLM', 'AI'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/RAG-demo',
    dockerConfig: {
      image: 'rag-demo:latest',
      port: 8000,
      env: { PYTHONUNBUFFERED: '1' },
    },
  },
  {
    id: 'demo-2',
    name: 'Aurora',
    description: 'A social media app commemorating the birth of a co-developer\'s daughter. Hello world, Aurora!',
    technologies: ['JavaScript', 'Social Media', 'Web App'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/Aurora',
    dockerConfig: {
      image: 'aurora-demo:latest',
      port: 3000,
    },
  },
  {
    id: 'demo-3',
    name: 'REST API Project',
    description: 'A simple Python REST API built with Flask that performs full CRUD operations.',
    technologies: ['Python', 'Flask', 'REST API', 'CRUD'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/RestAPI-project',
    dockerConfig: {
      image: 'restapi-demo:latest',
      port: 5000,
      env: { FLASK_ENV: 'production' },
    },
  },
];

export default function DemoSection() {
  const [containers, setContainers] = useState<Map<string, ContainerInstance>>(new Map());
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const startDemo = async (projectId: string) => {
    const project = demoProjects.find((p) => p.id === projectId);
    if (!project?.dockerConfig) return;

    // Create container instance (simulated)
    const instance: ContainerInstance = {
      id: `${projectId}-${Date.now()}`,
      projectId,
      status: 'starting',
      createdAt: new Date(),
    };

    setContainers((prev) => new Map(prev).set(projectId, instance));

    // Simulate startup delay
    setTimeout(() => {
      setContainers((prev) => {
        const updated = new Map(prev);
        const container = updated.get(projectId);
        if (container) {
          container.status = 'running';
          container.port = project.dockerConfig!.port;
          container.url = `http://localhost:${project.dockerConfig!.port}`;
        }
        return updated;
      });
    }, 2000);
  };

  const stopDemo = async (projectId: string) => {
    setContainers((prev) => {
      const updated = new Map(prev);
      const container = updated.get(projectId);
      if (container) {
        container.status = 'stopping';
      }
      return updated;
    });

    // Simulate stop delay
    setTimeout(() => {
      setContainers((prev) => {
        const updated = new Map(prev);
        updated.delete(projectId);
        return updated;
      });
    }, 1000);
  };

  const getContainerStatus = (projectId: string) => {
    return containers.get(projectId);
  };

  return (
    <section id="demo" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Live Demo Environment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select a project to spin up a live demo environment. Each demo runs in an isolated
            Docker container, giving you a real experience of the application.
          </p>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-xl mb-12 border-l-4 border-primary-500"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">How It Works</h3>
              <p className="text-gray-400 text-sm">
                Each project can be launched in its own Docker container. Click &quot;Start Demo&quot; to spin up
                the environment. The demo will be available for a limited time. You can stop it anytime
                to free up resources.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project, index) => {
            const container = getContainerStatus(project.id);
            const isRunning = container?.status === 'running';
            const isStarting = container?.status === 'starting';
            const isStopping = container?.status === 'stopping';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full flex flex-col">
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isRunning
                            ? 'bg-green-500 pulse-dot'
                            : isStarting || isStopping
                            ? 'bg-yellow-500 animate-pulse'
                            : 'bg-gray-500'
                        }`}
                      />
                      <span className="text-xs text-gray-400">
                        {isRunning
                          ? 'Running'
                          : isStarting
                          ? 'Starting...'
                          : isStopping
                          ? 'Stopping...'
                          : 'Stopped'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185z" />
                      </svg>
                      <span className="text-xs">Docker</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-dark-700 text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Container URL */}
                  <AnimatePresence>
                    {isRunning && container?.url && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4"
                      >
                        <div className="glass p-3 rounded-lg">
                          <p className="text-xs text-gray-400 mb-1">Demo URL:</p>
                          <a
                            href={container.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 text-sm break-all"
                          >
                            {container.url}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {!isRunning ? (
                      <Button
                        onClick={() => startDemo(project.id)}
                        loading={isStarting}
                        disabled={isStarting || isStopping}
                        className="flex-1"
                      >
                        {isStarting ? 'Starting...' : 'Start Demo'}
                      </Button>
                    ) : (
                      <>
                        <a
                          href={container?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="primary" className="w-full">
                            Open Demo
                          </Button>
                        </a>
                        <Button
                          variant="secondary"
                          onClick={() => stopDemo(project.id)}
                          loading={isStopping}
                        >
                          Stop
                        </Button>
                      </>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Active Containers */}
        {containers.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Active Containers</h3>
            <Card className="p-4" hover={false}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-700">
                      <th className="pb-3 pr-4">Project</th>
                      <th className="pb-3 pr-4">Status</th>
                      <th className="pb-3 pr-4">Port</th>
                      <th className="pb-3 pr-4">Started</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(containers.entries()).map(([projectId, container]) => {
                      const project = demoProjects.find((p) => p.id === projectId);
                      return (
                        <tr key={container.id} className="border-b border-gray-800">
                          <td className="py-3 pr-4 text-white">{project?.name}</td>
                          <td className="py-3 pr-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                                container.status === 'running'
                                  ? 'bg-green-500/20 text-green-400'
                                  : container.status === 'starting'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  container.status === 'running'
                                    ? 'bg-green-400'
                                    : container.status === 'starting'
                                    ? 'bg-yellow-400'
                                    : 'bg-gray-400'
                                }`}
                              />
                              {container.status}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-gray-400">{container.port || '-'}</td>
                          <td className="py-3 pr-4 text-gray-400">
                            {container.createdAt.toLocaleTimeString()}
                          </td>
                          <td className="py-3">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => stopDemo(projectId)}
                              disabled={container.status !== 'running'}
                            >
                              Stop
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
