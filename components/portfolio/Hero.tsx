import { buttonClasses } from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-24">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        Full-stack developer
      </p>

      <h1 className="font-serif text-[clamp(3.5rem,11vw,10rem)] leading-[0.9] tracking-tight">
        Hi, I&apos;m
        <br />
        <span className="italic">Amir</span> Jim-Daniels.
      </h1>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <p className="max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Passionate about building exceptional digital experiences. Every project
          links straight to its source on GitHub, so you can read the code yourself.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className={buttonClasses()}>
            View projects
          </a>
          <a href="#github" className={buttonClasses({ variant: 'outline' })}>
            GitHub activity
          </a>
        </div>
      </div>
    </section>
  );
}
