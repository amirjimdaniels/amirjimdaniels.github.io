'use client';

import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#github', label: 'GitHub' },
  { href: '#demo', label: 'Demos', unavailable: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-serif text-2xl leading-none">
          Amir <span className="italic">Jim-Daniels</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
              {link.unavailable && (
                <span className="absolute -right-4 -top-3 -rotate-6 bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                  Unavailable
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 font-mono text-xs uppercase tracking-widest md:hidden"
          aria-expanded={isOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <ul className="border-t border-rule bg-paper px-6 py-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="flex items-center justify-between border-b border-rule py-3 last:border-b-0">
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-serif text-2xl"
              >
                {link.label}
              </a>
              {link.unavailable && (
                <span className="bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper">
                  Unavailable
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
