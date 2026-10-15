'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

const skills = [
  { name: 'Java', level: 100 },
  { name: 'Python', level: 100 },
  { name: 'OOP', level: 100 },
  { name: 'SQL', level: 90 },
  { name: '.NET', level: 90 },
  { name: 'C#', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React/Next.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Docker', level: 65 },
];

const photos = [
  { src: '/images/amirphoto3.jpg', alt: 'Amir Jim-Daniels - Professional', caption: 'Professional' },
  { src: '/images/amirphoto4.jpg', alt: 'Amir Jim-Daniels - Personable', caption: 'Personable' },
];

const courses = [
  'Intro to Computer Science',
  'Intermediate Computer Programming',
  'Discrete Mathematics',
  'Fundamental Data Structures, Algorithms & Applications',
  'Computer Systems & Foundations',
  'Human Computer Interaction',
  'Software Engineering',
  'Data Structures & Algorithms',
  'Operating Systems',
  'Elementary Statistics',
];

const stats = [
  { value: '8+', label: 'Years experience' },
  { value: '8', label: 'Projects completed' },
];

const strengths = [
  { title: 'Fast onboarding', text: 'I learn quickly and have experience learning different tech stacks.' },
  { title: 'Production mindset', text: 'Auth, validation, logging, error handling, and a mindset for test driven development.' },
  { title: 'Ownership', text: 'Debug, document, and finish features.' },
];

function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
      </div>

      <figcaption className="mt-3 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
        <span>
          {photos[currentIndex].caption} · {currentIndex + 1}/{photos.length}
        </span>
        <span className="flex gap-2">
          <button onClick={prevPhoto} className="border border-rule px-3 py-1 hover:border-ink hover:text-ink" aria-label="Previous photo">
            ←
          </button>
          <button onClick={nextPhoto} className="border border-rule px-3 py-1 hover:border-ink hover:text-ink" aria-label="Next photo">
            →
          </button>
        </span>
      </figcaption>
    </figure>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading number="01" label="About" title="About me" />

      {/* Intro, stats and strengths */}
      <div className="grid gap-16 md:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-ink/80 md:col-span-7">
          <p>
            I&apos;m a full-stack developer who loves creating innovative solutions that make a
            difference. With expertise in modern web technologies, I build scalable applications
            that are both functional and beautiful.
          </p>
          <p>
            Every project I share is published with its full source on GitHub, so you can see
            how it is built. I believe in learning by doing, and I&apos;m always exploring new
            technologies to expand my skill set.
          </p>
        </div>

        <div className="md:col-span-5">
          <dl className="grid grid-cols-2 border-y border-rule">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`py-6 ${i === 0 ? 'pr-6' : 'border-l border-rule pl-6'}`}>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{stat.label}</dt>
                <dd className="mt-2 font-serif text-6xl leading-none">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <ol className="mt-10 divide-y divide-rule border-y border-rule">
            {strengths.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-2 py-4">
                <span className="font-mono text-xs text-muted pt-1">0{i + 1}</span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Skills and coursework */}
      <div className="mt-24 grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">Experience strength</h3>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{skill.name}</span>
                  <span className="font-mono text-xs text-muted">{skill.level}</span>
                </div>
                <div className="h-px w-full bg-rule">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-0.5 -translate-y-px bg-ink"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">Computer science coursework</h3>
          <ul className="grid gap-x-6 sm:grid-cols-2">
            {courses.map((course) => (
              <li key={course} className="border-b border-rule py-3 text-sm">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Personality */}
      <div className="mt-24 grid gap-12 border-t border-ink pt-12 md:grid-cols-[minmax(0,2fr)_3fr] md:items-center">
        <div className="max-w-sm">
          <PhotoCarousel />
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Why work with me?</h3>
          <p className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
            Personable, loves collaborating, and has a <span className="italic">good sense of humour.</span>
          </p>
          <p className="mt-6 max-w-xl text-muted">
            Come on! Who wouldn&apos;t want to work with this guy? Just look at that face!
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <li>Team player</li>
            <li className="text-accent">Great communicator</li>
            <li>Fun to work with</li>
          </ul>
        </div>
      </div>

      <p className="mt-24 font-mono text-xs uppercase tracking-widest text-muted">
        Built with Next.js · TypeScript · Tailwind CSS · Framer Motion · Docker
      </p>
    </section>
  );
}
