import Button, { buttonClasses } from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';

interface DemoProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

// Hosted demos are offline, so each entry links to its repository instead
const demoProjects: DemoProject[] = [
  {
    id: 'demo-1',
    name: 'RAG Demo',
    description: 'A Python project showcasing the difference in hallucinations after implementing retrieval augmented generation.',
    technologies: ['Python', 'RAG', 'LLM', 'AI'],
    githubUrl: 'https://github.com/amirjimdaniels/RAG-demo',
  },
  {
    id: 'demo-2',
    name: 'Aurora',
    description: 'A social media app commemorating the birth of a co-developer\'s daughter. Hello world, Aurora!',
    technologies: ['JavaScript', 'Social Media', 'Web App'],
    githubUrl: 'https://github.com/amirjimdaniels/Aurora',
  },
  {
    id: 'demo-3',
    name: 'REST API Project',
    description: 'A simple Python REST API built with Flask that performs full CRUD operations.',
    technologies: ['Python', 'Flask', 'REST API', 'CRUD'],
    githubUrl: 'https://github.com/amirjimdaniels/RestAPI-project',
  },
];

export default function DemoSection() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="04" label="Demos" title="Live demos" />

      {/* Askew red notice */}
      <div className="relative mb-20 -rotate-2 border-2 border-accent bg-accent p-6 text-paper shadow-[8px_8px_0_var(--color-ink)] md:mx-10 md:p-10">
        <p className="font-mono text-xs uppercase tracking-widest">Temporarily unavailable</p>
        <p className="mt-3 font-serif text-2xl leading-snug md:text-4xl">
          Due to expensive hosting costs, the live demo section isn&apos;t available, however,
          links to the repositories are still down below!
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {demoProjects.map((project) => (
          <article key={project.id} className="relative flex flex-col border border-rule p-6">
            <span className="absolute -top-3 right-4 rotate-3 bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
              Unavailable
            </span>

            <h3 className="font-serif text-3xl leading-tight">{project.name}</h3>
            <p className="mt-3 flex-grow text-sm text-muted">{project.description}</p>

            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-ink/70">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: 'outline', size: 'sm' })}
              >
                View code ↗
              </a>
              <Button variant="ghost" size="sm" disabled>
                Demo offline
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
