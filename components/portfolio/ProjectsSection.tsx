import ProjectCard from './ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { Project } from '@/types';

// Every project links to its GitHub repository. Hosted demos are no longer running.
const projects: Project[] = [
  {
    id: '1',
    name: 'RAG Demo',
    description: 'A Python project showcasing the difference in hallucinations after implementing retrieval augmented generation.',
    githubUrl: 'https://github.com/amirjimdaniels/RAG-demo',
    technologies: ['Python', 'RAG', 'LLM', 'AI'],
    featured: true,
  },
  {
    id: '2',
    name: 'Aurora',
    description: 'A social media app commemorating the birth of a co-developer\'s daughter. Hello world, Aurora!',
    githubUrl: 'https://github.com/amirjimdaniels/Aurora',
    technologies: ['JavaScript', 'Social Media', 'Web App'],
    featured: true,
  },
  {
    id: '3',
    name: 'REST API Project',
    description: 'A simple Python REST API built with Flask that performs full CRUD operations on a collection of rows and displays them in an HTML table.',
    githubUrl: 'https://github.com/amirjimdaniels/RestAPI-project',
    technologies: ['Python', 'Flask', 'REST API', 'CRUD'],
    featured: true,
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
  // Featured projects first, then the rest, keeping their original order within each group
  const ordered = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        number="02"
        label="Projects"
        title="Projects"
        description="Each project links to its source code on GitHub."
      />

      <ol className="border-t border-rule">
        {ordered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </ol>
    </section>
  );
}
