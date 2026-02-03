'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

// Your actual GitHub projects
const projects: Project[] = [
  {
    id: '1',
    name: 'RAG Demo',
    description: 'A Python project showcasing the difference in hallucinations after implementing retrieval augmented generation.',
    githubUrl: 'https://github.com/amirjimdaniels/RAG-demo',
    technologies: ['Python', 'RAG', 'LLM', 'AI'],
    featured: true,
    dockerConfig: {
      image: 'rag-demo:latest',
      port: 8000,
    },
  },
  {
    id: '2',
    name: 'Aurora',
    description: 'A social media app commemorating the birth of a co-developer\'s daughter. Hello world, Aurora!',
    githubUrl: 'https://github.com/amirjimdaniels/Aurora',
    technologies: ['JavaScript', 'Social Media', 'Web App'],
    featured: true,
    dockerConfig: {
      image: 'aurora-demo:latest',
      port: 3000,
    },
  },
  {
    id: '3',
    name: 'REST API Project',
    description: 'A simple Python REST API built with Flask that performs full CRUD operations on a collection of rows and displays them in an HTML table.',
    githubUrl: 'https://github.com/amirjimdaniels/RestAPI-project',
    technologies: ['Python', 'Flask', 'REST API', 'CRUD'],
    featured: true,
    dockerConfig: {
      image: 'restapi-demo:latest',
      port: 5000,
    },
  },
  {
    id: '4',
    name: 'Java Hashtable',
    description: 'A dynamic hash table implemented in Java using open addressing with quadratic probing and automatic resizing at a 0.33 max load factor.',
    githubUrl: 'https://github.com/amirjimdaniels/Java-Hashtable',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    featured: false,
  },
  {
    id: '5',
    name: 'Bouncing Ball',
    description: 'A fun little project made with tkinter to test out Python GUI and create a bouncing ball animation.',
    githubUrl: 'https://github.com/amirjimdaniels/BouncingBall-project',
    technologies: ['Python', 'Tkinter', 'GUI', 'Animation'],
    featured: false,
  },
  {
    id: '6',
    name: 'AI Puzzle 8 Solver',
    description: 'An AI-powered solver for the classic 8-puzzle game using search algorithms.',
    githubUrl: 'https://github.com/amirjimdaniels/AI-Puzzle-8-solver',
    technologies: ['Java', 'AI', 'Search Algorithms'],
    featured: false,
  },
];

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work with video demos and live previews.
            Click on any project to see it in action.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 text-center"
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
