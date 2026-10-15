export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-rule">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl leading-tight">
            Building useful things with <span className="italic">modern tools.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Open to collaboration and new opportunities.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Sections</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:underline underline-offset-4">About</a></li>
            <li><a href="#projects" className="hover:underline underline-offset-4">Projects</a></li>
            <li><a href="#github" className="hover:underline underline-offset-4">GitHub</a></li>
            <li><a href="#demo" className="hover:underline underline-offset-4">Demos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://github.com/amirjimdaniels" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/amirjimdaniels/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:amirjimdaniels@gmail.com" className="hover:underline underline-offset-4">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule">
        <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-xs text-muted">
          © {currentYear} Amir Jim-Daniels. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
