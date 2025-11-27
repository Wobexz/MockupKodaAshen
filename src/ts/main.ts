declare const gsap: any;
declare const ScrollTrigger: any;

import { ParallaxField } from './components/parallax';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector('.hero') as HTMLElement | null;
  if (hero) {
    // Parallax glow layers
    hero.innerHTML += '<div class="parallax-layer" data-parallax></div><div class="parallax-layer" data-parallax></div>';
    new ParallaxField(hero, 18);
  }

  const heroText = document.querySelector('.hero__text');
  const heroCharacter = document.querySelector('.hero__character');
  if (heroText) {
    gsap.from(heroText.children, { y: 40, opacity: 0, stagger: 0.08, duration: 1, ease: 'power3.out' });
  }
  if (heroCharacter) {
    gsap.from(heroCharacter, { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15 });
  }

  // Card tilt interaction for the pixel hero
  const tiltTarget = document.querySelector('[data-tilt] .character__card') as HTMLElement | null;
  if (tiltTarget) {
    const resetTilt = () => gsap.to(tiltTarget, { rotationX: 0, rotationY: 0, transformPerspective: 1000, duration: 0.6, ease: 'power2.out' });
    tiltTarget.parentElement?.addEventListener('pointermove', (event) => {
      const bounds = tiltTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = -((y - centerY) / centerY) * 10;
      gsap.to(tiltTarget, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 900, duration: 0.6, ease: 'power2.out' });
    });
    tiltTarget.parentElement?.addEventListener('pointerleave', resetTilt);
  }

  // Project reveal animations
  const projects = gsap.utils.toArray<HTMLElement>('[data-project]');
  projects.forEach((card: HTMLElement) => {
    gsap.fromTo(
      card,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
      }
    );
  });

  // Parallax background movement for hero section
  const bg = document.querySelector('.hero__bg') as HTMLElement | null;
  if (bg) {
    window.addEventListener('pointermove', (event) => {
      const offsetX = (event.clientX / window.innerWidth - 0.5) * 16;
      const offsetY = (event.clientY / window.innerHeight - 0.5) * 16;
      gsap.to(bg, { x: offsetX, y: offsetY, duration: 0.8, ease: 'power2.out' });
    });
  }

  // Contact form subtle pulse
  const contactPanel = document.querySelector('.contact__panel');
  if (contactPanel) {
    gsap.from(contactPanel, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: contactPanel, start: 'top 80%' },
    });
  }
});
