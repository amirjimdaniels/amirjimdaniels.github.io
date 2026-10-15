import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <li className="group grid gap-4 border-b border-rule py-8 md:grid-cols-[4rem_1fr_auto] md:gap-8">
      <span className="font-mono text-sm text-muted md:pt-2">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-serif text-3xl leading-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          {project.featured && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">Featured</span>
          )}
        </div>

        <p className="mt-3 max-w-2xl text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink/70">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm uppercase tracking-wider underline decoration-rule underline-offset-4 transition-colors hover:decoration-accent md:self-center"
        >
          View on GitHub ↗
        </a>
      )}
    </li>
  );
}
