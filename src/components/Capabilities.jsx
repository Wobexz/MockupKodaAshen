import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    label: 'Strategy',
    title: 'Product Strategy',
    copy: 'We uncover the real problem, define outcomes, and prioritize a roadmap that moves fast without breaking focus.',
  },
  {
    label: 'Build',
    title: 'Web & App Development',
    copy: 'Full-stack engineering with modern stacks—accessible, performant, and built to scale from day one.',
  },
  {
    label: 'Velocity',
    title: 'Prototyping & MVPs',
    copy: 'Launch quickly with high-fidelity prototypes and MVPs that validate direction before heavy investment.',
  },
  {
    label: 'Advisory',
    title: 'Technical Consulting',
    copy: 'Technical audits, architecture reviews, and fractional leadership to keep teams shipping consistently.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.6, ease: 'easeOut' },
  }),
  hover: { y: -6, borderColor: 'var(--accent-primary)', boxShadow: '0 10px 30px rgba(123, 97, 255, 0.2)' },
};

function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="section__header">
        <p className="eyebrow">Capabilities</p>
        <h2>What we do</h2>
        <p className="muted">Multi-disciplinary product experts who cover strategy, design, engineering, and delivery.</p>
      </div>
      <div className="capabilities__grid">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            className="card"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            whileHover="hover"
          >
            <span className="tag">{capability.label}</span>
            <h3>{capability.title}</h3>
            <p className="muted">{capability.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Capabilities;
