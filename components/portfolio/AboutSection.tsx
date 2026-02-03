'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'TypeScript', level: 90 },
  { name: 'React/Next.js', level: 95 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Docker', level: 75 },
  { name: 'AWS', level: 70 },
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
            <div className="flex gap-4 pt-4">
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-400">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-400">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary-400">20+</div>
                <div className="text-gray-400 text-sm">Open Source</div>
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
      </div>
    </section>
  );
}
