import React from 'react';

const principles = ['Ownership over optics', 'Clarity beats hype', 'Move with intent', 'Prototype to prove', 'Respect the craft'];

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__inner">
        <div className="about__copy">
          <p className="eyebrow">About</p>
          <h2>Small team. Senior hands. Serious about shipping.</h2>
          <p className="muted">
            KODA is a digital product studio that cares more about outcomes than buzzwords. We embed with teams, bring
            clarity to ambiguous ideas, and ship reliable software with the speed of a strike team.
          </p>
        </div>
        <div className="about__principles">
          <p className="muted">Principles we live by</p>
          <ul>
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
