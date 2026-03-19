'use client';

import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Project } from '@/types';

interface DemoProject extends Project {
  renderHosted?: boolean;
}

// Your actual projects with demo configurations
const demoProjects: DemoProject[] = [
  {
    id: 'demo-1',
    name: 'RAG Demo',
    description: 'A Python project showcasing the difference in hallucinations after implementing retrieval augmented generation.',
    technologies: ['Python', 'RAG', 'LLM', 'AI'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/RAG-demo',
    renderHosted: true,
  },
  {
    id: 'demo-2',
    name: 'Aurora',
    description: 'A social media app commemorating the birth of a co-developer\'s daughter. Hello world, Aurora!',
    technologies: ['JavaScript', 'Social Media', 'Web App'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/Aurora',
    liveUrl: 'http://aurorasocials.social/',
  },
  {
    id: 'demo-3',
    name: 'REST API Project',
    description: 'A simple Python REST API built with Flask that performs full CRUD operations.',
    technologies: ['Python', 'Flask', 'REST API', 'CRUD'],
    featured: true,
    githubUrl: 'https://github.com/amirjimdaniels/RestAPI-project',
    renderHosted: true,
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Live Demos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Try out my projects live. Hosted demos may take up to 30 seconds to load on first visit
            while the server spins up.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${project.liveUrl ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-xs text-gray-400">
                      {project.liveUrl ? 'Live' : 'Coming Soon'}
                    </span>
                  </div>
                  {project.renderHosted && (
                    <span className="text-xs text-gray-500">Hosted on Render</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                {/* Cold start notice for Render-hosted projects */}
                {project.renderHosted && (
                  <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <svg className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-yellow-400/80">
                      First load may take ~30s while the server wakes up.
                    </p>
                  </div>
                )}

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

                {/* Actions */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.liveUrl ? '' : 'flex-1'}
                    >
                      <Button variant="secondary" size="sm" className={project.liveUrl ? '' : 'w-full'}>
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        Code
                      </Button>
                    </a>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" size="sm" className="w-full">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open Demo
                      </Button>
                    </a>
                  ) : (
                    <Button variant="primary" size="sm" disabled className="flex-1">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
