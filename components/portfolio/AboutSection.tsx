'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Java', level: 95 },
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React/Next.js', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Docker', level: 65 },
  { name: 'And More...', level: 60 },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer with experience in building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a full-stack developer who loves creating innovative solutions 
              that make a difference. With expertise in modern web technologies, 
              I build scalable applications that are both functional and beautiful.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My projects feature live demos powered by Docker containers, 
              allowing you to experience them firsthand. I believe in learning 
              by doing, and I&apos;m always exploring new technologies to expand 
              my skill set.
            </p>
            {/* Stats */}
            <div className="flex gap-4 pt-4">
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-400">8+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-400">8</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>

            {/* What You Get - Recruiter-friendly tiles */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">What You Get</h4>
              <div className="grid gap-3">
                <div className="glass px-4 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Fast Onboarding</div>
                    <div className="text-gray-500 text-xs">I learn quickly and have experience learning different tech stacks</div>
                  </div>
                </div>
                <div className="glass px-4 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Production Mindset</div>
                    <div className="text-gray-500 text-xs">Auth, validation, logging, error handling, and a mindset for test driven development</div>
                  </div>
                </div>
                <div className="glass px-4 py-3 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Ownership</div>
                    <div className="text-gray-500 text-xs">Debug, document, and finish features</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-primary-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Personality Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-lg shadow-primary-500/20">
                <img
                  src="/images/amirphoto.jpg"
                  alt="Amir Jim-Daniels"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">Why Work With Me?</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Personable, loves collaborating, and good sense of humour. Come on! Who wouldn&apos;t want to work with this guy? Just look at that face! 😄
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">Team Player</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Great Communicator</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Fun to Work With</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
