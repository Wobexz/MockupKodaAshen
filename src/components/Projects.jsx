import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Northwind OS',
    description: 'Operational command center for modern logistics teams with real-time insights.',
    tags: ['SaaS', 'Web App', 'Data Viz'],
  },
  {
    name: 'Vesta',
    description: 'Immersive product discovery experience for a next-gen retail startup.',
    tags: ['E-commerce', 'Experience', 'Prototype'],
  },
  {
    name: 'Helio Labs',
    description: 'Developer tools platform reimagined with streamlined onboarding and docs.',
    tags: ['DevTools', 'Platform', 'Design System'],
  },
  {
    name: 'Pulse',
    description: 'Mobile-first health tracking companion focused on clarity over noise.',
    tags: ['Mobile', 'Health', 'MVP'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.6, ease: 'easeOut' },
  }),
};

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__header">
        <p className="eyebrow">Selected work</p>
        <h2>Proof we ship</h2>
        <p className="muted">A snapshot of recent collaborations across SaaS, e-commerce, and product innovation.</p>
      </div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="card project-card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ y: -8, borderColor: 'var(--accent-secondary)', boxShadow: '0 12px 40px rgba(79, 209, 197, 0.18)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-card__header">
              <h3>{project.name}</h3>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <p className="muted">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
