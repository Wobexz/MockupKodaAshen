declare const gsap: any;
declare const ScrollTrigger: any;

import { animateOnScroll, initParallaxLayers, initCharacterTilt, initScrollRevealSections, initFloatingParticles, initSmoothAnchors } from './utils/animations';

gsap.registerPlugin(ScrollTrigger);

const animateAshenHero = (): void => {
  const tl = gsap.timeline();
  tl.from('.hero__title', { y: 30, opacity: 0, duration: 0.8, ease: 'expo.out' })
    .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4')
    .from('.hero__cta .btn', { y: 12, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'expo.out' }, '-=0.4')
    .from('#character-card-ashen', { y: 30, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.6');
};

const initFogParallax = (): void => {
  const bg = document.querySelector<HTMLElement>('.hero--ashen .hero__bg');
  if (!bg) return;
  const fog = document.createElement('div');
  fog.className = 'fog';
  bg.appendChild(fog);

  gsap.to(fog, { x: 60, duration: 16, repeat: -1, yoyo: true, ease: 'sine.inOut' });
};

const init = (): void => {
  animateAshenHero();
  initSmoothAnchors();
  initParallaxLayers('.hero__bg');
  initCharacterTilt('#character-card-ashen');
  initScrollRevealSections();
  animateOnScroll('[data-animate]');
  initFloatingParticles('.particle-layer');
  initFogParallax();
};

window.addEventListener('DOMContentLoaded', init);
