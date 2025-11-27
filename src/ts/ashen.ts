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
      const x = (event.clientX / window.innerWidth - 0.5) * 22;
      const y = (event.clientY / window.innerHeight - 0.5) * 22;
      gsap.to(heroBg, { x, y, duration: 0.8, ease: 'power2.out' });
      gsap.to(sparkles, { x: -x * 0.6, y: -y * 0.6, duration: 1, ease: 'power2.out' });
    });
  }

  const heroElements = document.querySelectorAll('.hero__text > *, .hero__visual');
  gsap.from(heroElements, { y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: 'power3.out' });

  const features = gsap.utils.toArray<HTMLElement>('[data-feature]');
  features.forEach((feature: HTMLElement) => {
    gsap.fromTo(
      feature,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: feature, start: 'top 85%' },
      }
    );
  });

  const galleryItems = gsap.utils.toArray<HTMLElement>('[data-gallery]');
  galleryItems.forEach((item: HTMLElement) => {
    gsap.fromTo(
      item,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 85%' },
      }
    );
  });
});
