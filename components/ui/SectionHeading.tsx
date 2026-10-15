interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-16 grid gap-6 border-t border-ink pt-6 md:grid-cols-[1fr_2fr]">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        {number} / {label}
      </p>
      <div>
        <h2 className="font-serif text-5xl leading-none md:text-6xl">{title}</h2>
        {description && <p className="mt-6 max-w-xl text-muted">{description}</p>}
      </div>
    </header>
  );
}
