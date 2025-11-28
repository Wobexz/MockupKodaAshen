import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="glow glow-purple" />
      <div className="glow glow-teal" />
      <div className="hero__content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        >
          KODA — Digital Product Studio
        </motion.p>
        <motion.h1
          className="hero__title"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          KODA builds digital products that actually ship.
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        >
          We partner with founders and product teams to design, build, and launch software with conviction.
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
        >
          <motion.a
            href="mailto:hello@koda.studio"
            className="btn btn-primary"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Let’s talk
          </motion.a>
          <motion.a
            href="#projects"
            className="btn btn-secondary"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            See our work
          </motion.a>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <span />
      </div>
    </section>
  );
}

export default Hero;
