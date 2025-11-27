declare const gsap: any;
declare const ScrollTrigger: any;

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroBg = document.querySelector('.hero__bg');
  if (heroBg) {
    const sparkles = document.createElement('div');
    sparkles.className = 'sparkles';
    heroBg.appendChild(sparkles);
    window.addEventListener('pointermove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      gsap.to(heroBg, { x, y, duration: 1, ease: 'power2.out' });
      gsap.to(sparkles, { x: -x * 0.6, y: -y * 0.6, duration: 1.1, ease: 'power2.out' });
    });
  }

  const heroElements = document.querySelectorAll('[data-hero-stagger], .headline');
  gsap.from(heroElements, { y: 32, opacity: 0, duration: 1.2, stagger: 0.08, ease: 'power3.out' });

  const floaters = document.querySelectorAll('[data-float]');
  floaters.forEach((el) => {
    gsap.to(el, { y: -14, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  });

  const features = gsap.utils.toArray<HTMLElement>('[data-feature]');
  features.forEach((feature: HTMLElement) => {
    gsap.to(feature, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: feature, start: 'top 85%' },
    });
  });

  const galleryItems = gsap.utils.toArray<HTMLElement>('[data-gallery]');
  galleryItems.forEach((item: HTMLElement) => {
    gsap.to(item, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: item, start: 'top 85%' },
    });
  });

  const revealBlocks = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  revealBlocks.forEach((block) => {
    gsap.to(block, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: block, start: 'top 85%' },
    });
  });
});
