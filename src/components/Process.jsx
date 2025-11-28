import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    title: 'Discover',
    copy: 'We listen, map the landscape, and identify constraints to uncover the opportunity.',
  },
  {
    title: 'Design',
    copy: 'Systems-first design that balances clarity, accessibility, and brand expression.',
  },
  {
    title: 'Build',
    copy: 'Engineering sprints with transparent progress, delivering production-grade code early.',
  },
  {
    title: 'Ship',
    copy: 'Release with confidence: QA, analytics, and handoff or ongoing support baked in.',
  },
  {
    title: 'Iterate',
    copy: 'Measure impact, refine, and evolve the product with data-informed decisions.',
  },
];

gsap.registerPlugin(ScrollTrigger);

function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process__step', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section process" id="process" ref={sectionRef}>
      <div className="section__header">
        <p className="eyebrow">Process</p>
        <h2>How we work</h2>
        <p className="muted">A disciplined, transparent approach designed to keep momentum from kickoff to launch.</p>
      </div>
      <div className="process__list">
        {steps.map((step, index) => (
          <div className="process__step" key={step.title}>
            <div className="process__index">0{index + 1}</div>
            <div>
              <h3>{step.title}</h3>
              <p className="muted">{step.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
