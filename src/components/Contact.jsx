import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__inner">
        <p className="eyebrow">Let’s build</p>
        <h2>Have a serious project? Let’s ship it.</h2>
        <p className="muted">
          Tell us what you are building and why it matters. We’ll reply within 24 hours with a concise plan to move forward.
        </p>
        <motion.a
          href="mailto:hello@koda.studio"
          className="btn btn-primary"
          whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(123, 97, 255, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          Start a conversation
        </motion.a>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} KODA</span>
        <div className="footer__links">
          <a href="#">LinkedIn</a>
          <a href="#">Dribbble</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
