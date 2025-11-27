import { animateOnScroll, initParallaxLayers, initCharacterTilt, initScrollRevealSections, initFloatingParticles, initSmoothAnchors } from './utils/animations.js';

gsap.registerPlugin(ScrollTrigger);

const animateHero = () => {
  const tl = gsap.timeline();
  tl.from('.hero__title', { y: 30, opacity: 0, duration: 0.8, ease: 'expo.out' })
    .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4')
    .from('.hero__cta .btn', { y: 12, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'expo.out' }, '-=0.4')
    .from('.character-card', { scale: 0.9, opacity: 0, rotateY: -12, duration: 1, ease: 'expo.out' }, '-=0.6');
};

const initMouseGlow = () => {
  const glow = document.querySelector('.hero__bg .glow');
  if (!glow) return;

  document.addEventListener('pointermove', (event) => {
    gsap.to(glow, {
      x: (event.clientX - window.innerWidth / 2) * 0.08,
      y: (event.clientY - window.innerHeight / 2) * 0.08,
      duration: 0.6,
      ease: 'expo.out',
    });
  });
};

const init = () => {
  animateHero();
  initSmoothAnchors();
  initParallaxLayers('.hero__bg');
  initParallaxLayers('.projects');
  initParallaxLayers('.contact');
  initCharacterTilt('#character-card');
  initScrollRevealSections();
  animateOnScroll('[data-animate]');
  initFloatingParticles('.particle-layer');
  initMouseGlow();
};

window.addEventListener('DOMContentLoaded', init);
